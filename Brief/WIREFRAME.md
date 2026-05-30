# WIREFRAME.md — Nexus

> Ordine sezioni **testuale** per ogni pagina. Definisce COSA contiene ogni sezione e il suo scopo, NON il layout pixel (quello lo decide Claude Code in build leggendo questo file + DESIGN.md concreto).
> Vincoli applicati: archetipo C scroll-driven (70%) + B atmosferico (30%), tono editoriale-tecnico, palette con disciplina, nessun CTA dominante in hero, nessuna griglia 2×2.

---

## `/` — Home long-page (11 sezioni)

### 1. Header / Nav
- Fissato, minimale. Logo Nexus a sinistra, 3-4 voci (Lavori, Iniziamo, EN switcher).
- Lime solo su hover di una voce alla volta. No mega-menu.

### 2. Hero atmosferica B → transizione C *(sezione più curata del sito)*
- **Frame iniziale (0-2s)**: scena 3D minima — logo Nexus in 3D che si compone con rotazione lentissima, mood scuro, una sola frase tipografica grande.
- **Allo scroll**: il logo 3D si abbassa/sfuma cedendo il palcoscenico al workflow visualizzato che inizia a comporsi (i 5 step appaiono uno alla volta).
- **Niente CTA, niente bottoni**. Solo respiro.
- Sopra il fold: scena + frase. Sotto il fold: il workflow inizia ad apparire.
- Animazione lentissima, mai shader complessi, mai parallax pesante.

### 3. Hook editoriale *(pausa di transizione, breve)*
- Una sola frase grande tipografica su sfondo cream — es. "Ti piacerebbe un sito come questo?"
- Niente CTA, niente altri elementi. Pausa che chiama in causa il lettore.
- Layout centrato, molto spazio sopra/sotto, mood "editoriale di rivista".

### 4. Manifesto del metodo (narrativo)
- 2-3 paragrafi narrativi che spiegano cos'è Nexus.
- Layout editoriale: titolo con serif touch, paragrafi medi a 60-70 caratteri/riga, molto cream/bianco.
- No icone, no bullet, no card. Solo testo curato.
- Animazione: reveal on scroll soft, una frase alla volta.

### 5. Il sistema visualizzato *(asse del concept "Studio System" — FIRMA VISIVA)*
- I 5 step del workflow come "moduli" del sistema: **brief.md → design.md → asset → build → review**.
- Per ogni step: titolo + breve descrizione + visualizzazione astratta del deliverable.
- **Loghi AI providers** inseriti come "componenti del setup" nei moduli asset/build (Claude, GPT, Gemini, fal.ai, Higgsfield, Subframe, ecc.).
- Layout sistematico geometrico con respiro. **Mai card grid 2×2** — sequenza lineare verticale/orizzontale con linee connettive sottili.
- Animazione: ogni step si rivela appena entra in viewport.
- ⚠️ Costruzione custom, non componenti standard. Complessità implementativa alta.

### 6. Anti-AI-slop manifesto con diagramma split *(FIRMA VISIVA)*
- **Sinistra**: "Lovable + 1 prompt" → freccia → sito generico. Rappresentazione minimale, neutra.
- **Destra**: "Nexus orchestra" → nodi connessi di tool AI con linee convergenti → sito Nexus. Grafo elegante, **mai cervello-network-AI cliché**.
- Sopra: una riga di copy assertiva (rielaborazione della frase aggressiva — versione finale in COPY.md, tono assertivo-sicuro non aggressivo).
- Su mobile: split diventa verticale (Lovable sopra, Nexus sotto).
- Animazione: la connessione tra nodi si compone progressivamente allo scroll.
- ⚠️ Costruzione custom.

### 7. Lavori + Concept studies (sintesi)
- 4-5 progetti come miniature editoriali.
- **No griglia 2×2/3×3**. Layout asimmetrico editorial: dimensioni e posizioni diverse, mood moodboard curato.
- Per progetto: thumb + titolo + 1 riga contesto + etichetta ("Progetto in corso" / "Studio interno" per i concept).
- CTA testuale a fine sezione: "Tutti i lavori →" → `/lavori`.
- ⚠️ Layout asimmetrico costruito a mano.

### 8. Recensioni / Proof sociale
- 2-3 testimonianze per esteso, **una alla volta**, non carousel.
- Citazione grande tipografica + nome cliente + ruolo + breve contesto.
- Layout editoriale, mood "intervista da rivista".
- Se 0 recensioni reali ora: sezione vuota da riempire post-lancio. Mai inventare.

### 9. CTA tier-based
- Titolo: "Quale Nexus fa per te?" o variante (finale in COPY.md).
- 3 tier come **blocchi paritari** (mai gerarchia "scegli questo!"): Vetrina essenziale / Sito completo + interazioni / Restyling SEO-preserving.
- Per tier: nome + "a partire da €X" + breve descrizione + 3-4 punti compatti di cosa include.
- **Custom enterprise** come 4° blocco più sobrio, "Parliamone".
- Add-on (manutenzione, audit) come blocco subordinato sotto, più piccolo.
- CTA: "Iniziamo →" → `/iniziamo`.

### 10. FAQ (3-5 domande max)
- Domande utili stile completezza informativa ma curate: tempi reali, cosa include un tier, lingue, gestione dominio, manutenzione.
- Accordion semplice. Layout: domande tipograficamente grandi, risposte medie, molto bianco.

### 11. Footer
- 4 colonne: Studio (breve) / Servizi (link) / Contatti (email, telefono, dove) / Legale (privacy, cookie).
- Lingua switcher in basso a destra (piccolo).
- Logo Nexus grande in mood cream o lime puntuale come accent finale.

---

## `/lavori` — Lista lavori (5 sezioni)

1. **Header / Nav** *(stesso)*
2. **Hero compatta** — titolo "Lavori" / "I progetti" + 1 riga di intro.
3. **Lista lavori** — disposizione editoriale asimmetrica, mix lavori reali in corso + concept studies. Per item: thumb + titolo + settore + anno + etichetta. Filtri opzionali per categoria.
4. **CTA finale** — "Vuoi essere il prossimo?" → `/iniziamo`.
5. **Footer**

---

## `/lavori/[slug]` — Case study singolo (10 sezioni)

1. **Header / Nav**
2. **Hero del progetto** — nome cliente, settore, anno, 1 riga di contesto. Eventuale logo cliente o immagine full-bleed.
3. **Brief** — cosa cercavano (versione narrativa, non tecnica).
4. **Strategia** — approccio Nexus, decisioni chiave.
5. **Process gallery** — screenshot/asset del processo (brief.md, design.md, asset, mockup intermedi). Il "dietro le quinte".
6. **Output finale** — sito live (link) + screenshot principali (desktop + mobile).
7. **Risultati** — metriche se misurabili (SEO, traffico, conversioni). Opzionale per i concept studies.
8. **Citazione cliente** — se reale. Omessa per i concept studies.
9. **CTA** — "Lavoriamo insieme?" → `/iniziamo`.
10. **Lavori correlati + Footer**

---

## `/iniziamo` — Pagina conversione (7 sezioni)

1. **Header / Nav**
2. **Hero compatta** — "Iniziamo" + breve intro sul percorso (finale in COPY.md).
3. **I 3 tier in dettaglio + custom enterprise** — versione estesa rispetto alla home: descrizione completa, cosa include nel dettaglio, tempi di consegna, cosa NON include.
4. **Add-on services** — manutenzione mensile, audit one-shot, copy+SEO standalone. Con prezzo dichiarato.
5. **Come funziona il primo contatto** — 3 step in sequenza: Questionario online → Call conoscitiva → Preventivo formale. Layout sistematico.
6. **Form contatto strutturato** — max 5 campi: Nome / Email / Telefono / Tipo progetto (select) / Descrizione libera. Nessun campo "budget" (invadente).
7. **Footer**

---

## `/en/...` — Mirror inglese

Stessa struttura di tutte le pagine sopra, in inglese e leggermente più **snella**. Il visitatore inglese arriva spesso da link diretto (non googleando), serve meno SEO depth. Le sezioni 5 (sistema dettagliato) e 10 (FAQ) della home possono essere più compatte in EN.

---

## Riepilogo complessità implementativa (per Claude Code)

| Sezione | Complessità | Note |
|---|---|---|
| Home sez. 2 (hero 3D→scroll) | **Alta** | three.js leggero, geometria semplice, no shader complessi, <300kb |
| Home sez. 5 (sistema visualizzato) | **Alta** | animazione reveal coordinata + assets per ogni step. Investirci tempo |
| Home sez. 6 (diagramma split) | **Alta** | firma visiva, custom, no componenti shadcn standard |
| Home sez. 7 (lavori asimmetrici) | **Media** | layout asimmetrico a mano, no template card grid |
| Tutte le altre | **Bassa** | blocchi standard ben configurati: tipografia grande + spazio bianco + reveal soft |

---

*WIREFRAME.md — Chat 1 STRATEGIA.*
