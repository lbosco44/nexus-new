"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Nexus logo extruded in 3D from the real SVG, rendered as a discreet wireframe.
 * - three.js loaded lazily (this component is dynamic-imported with ssr:false)
 * - dark body + faint cream edges, NO lime (lime stays a point accent), NO glow
 * - very slow rotation; respects prefers-reduced-motion (renders one static frame)
 * Calls onReady once the first frame is drawn so the 2D fallback can fade out.
 */
export function Logo3D({ onReady }: { onReady?: () => void }) {
  const mountRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let raf = 0;
    let disposed = false;
    let cleanup = () => {};

    (async () => {
      try {
        const THREE = await import("three");
        const { SVGLoader } = await import(
          "three/examples/jsm/loaders/SVGLoader.js"
        );
        if (disposed) return;

        const reduce = window.matchMedia(
          "(prefers-reduced-motion: reduce)"
        ).matches;

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 1000);
        camera.position.set(0, 0, 320);

        const renderer = new THREE.WebGLRenderer({
          antialias: true,
          alpha: true,
          powerPreference: "low-power",
        });
        renderer.setClearColor(0x000000, 0);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const sizeOf = () => {
          const r = mount.getBoundingClientRect();
          return { w: Math.max(1, r.width), h: Math.max(1, r.height) };
        };
        const { w, h } = sizeOf();
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        mount.appendChild(renderer.domElement);
        renderer.domElement.style.width = "100%";
        renderer.domElement.style.height = "100%";

        // Soft lighting, no hard speculars (banlist: no glow/neon)
        scene.add(new THREE.AmbientLight(0xf5f3ee, 0.6));
        const key = new THREE.DirectionalLight(0xf5f3ee, 1.1);
        key.position.set(-0.4, 0.8, 1);
        scene.add(key);
        const rim = new THREE.DirectionalLight(0xb8ff3d, 0.18); // whisper of lime on edges only
        rim.position.set(1, -0.5, 0.6);
        scene.add(rim);

        const group = new THREE.Group();
        scene.add(group);

        // Load + extrude the real logo SVG
        const loader = new SVGLoader();
        type SVGResult = ReturnType<InstanceType<typeof SVGLoader>["parse"]>;
        const svgData = await new Promise<SVGResult>((resolve, reject) => {
          loader.load(
            "/logo/nexus-white.svg",
            (data) => resolve(data),
            undefined,
            reject
          );
        });
        if (disposed) return;

        const bodyMat = new THREE.MeshStandardMaterial({
          color: 0x141310,
          metalness: 0.1,
          roughness: 0.62,
        });
        const edgeMat = new THREE.LineBasicMaterial({
          color: 0xe8e4da,
          transparent: true,
          opacity: 0.32,
        });

        const meshGroup = new THREE.Group();
        // The logo SVG has two groups: the first (m255.98…) is the double-outline
        // "N" with sub-paths/holes, the second (m247.88…) is the clean SOLID N as a
        // single closed shape. Extruding both causes z-fighting + a stray fragment.
        // The solid N is the path with the FEWEST holes (0); pick that one.
        const holeCount = (p: (typeof svgData.paths)[number]) =>
          SVGLoader.createShapes(p).reduce((n, s) => n + s.holes.length, 0);
        const solidPath = [...svgData.paths].sort(
          (a, b) => holeCount(a) - holeCount(b)
        )[0];
        for (const path of solidPath ? [solidPath] : svgData.paths) {
          const shapes = SVGLoader.createShapes(path);
          for (const shape of shapes) {
            const geom = new THREE.ExtrudeGeometry(shape, {
              depth: 18,
              bevelEnabled: true,
              bevelThickness: 2,
              bevelSize: 1.4,
              bevelSegments: 2,
              curveSegments: 8,
            });
            const mesh = new THREE.Mesh(geom, bodyMat);
            meshGroup.add(mesh);

            const edges = new THREE.LineSegments(
              new THREE.EdgesGeometry(geom, 28),
              edgeMat
            );
            meshGroup.add(edges);
          }
        }

        // Center + scale the extruded group to fit the viewport box
        const box = new THREE.Box3().setFromObject(meshGroup);
        const center = new THREE.Vector3();
        const size = new THREE.Vector3();
        box.getCenter(center);
        box.getSize(size);
        meshGroup.position.sub(center);
        // SVG Y is flipped relative to three.js
        meshGroup.scale.y = -1;
        const fit = 150 / Math.max(size.x, size.y);
        group.scale.setScalar(fit);
        group.add(meshGroup);

        let firstFrame = true;
        const render = () => {
          renderer.render(scene, camera);
          if (firstFrame) {
            firstFrame = false;
            onReady?.();
          }
        };

        const onResize = () => {
          const { w, h } = sizeOf();
          renderer.setSize(w, h, false);
          camera.aspect = w / h;
          camera.updateProjectionMatrix();
          if (reduce) render();
        };
        window.addEventListener("resize", onResize);

        group.rotation.x = -0.12;

        if (reduce) {
          group.rotation.y = -0.35;
          render();
        } else {
          const animate = () => {
            group.rotation.y += 0.0016; // very slow signature rotation
            group.rotation.x = -0.12 + Math.sin(group.rotation.y * 0.5) * 0.05;
            render();
            raf = requestAnimationFrame(animate);
          };
          animate();
        }

        cleanup = () => {
          window.removeEventListener("resize", onResize);
          cancelAnimationFrame(raf);
          renderer.dispose();
          meshGroup.traverse((o) => {
            const m = o as { geometry?: { dispose: () => void } };
            if (m.geometry) m.geometry.dispose();
          });
          bodyMat.dispose();
          edgeMat.dispose();
          if (renderer.domElement.parentNode === mount) {
            mount.removeChild(renderer.domElement);
          }
        };
      } catch (err) {
        console.error("Logo3D failed, keeping 2D fallback:", err);
        if (!disposed) setFailed(true);
      }
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, [onReady]);

  if (failed) return null;
  return <div ref={mountRef} className="h-full w-full" aria-hidden />;
}
