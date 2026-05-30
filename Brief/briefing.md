# briefing.md — Nexus

## Cliente
- **Nome studio**: Nexus
- **Tipo**: Studio web design AI-driven (team, non freelance singolo)
- **Anno di partenza**: in corso — il sito attuale è il primo asset di lancio

## Pattern di progetto
**Pattern A — Brief Pack completo (da zero).**
Eventuale sito Nexus precedente va ignorato. Si riparte da zero.

---

## Target principale

**Chi**: proprietari di SMB italiani che non hanno un sito o hanno un sito datato/inadeguato. Settori eterogenei, prevalentemente "tecnico-locali" (HVAC, fotovoltaico, NCC, export auto, attività territoriali).

**No e-commerce**: il sito vetrina/lead è il prodotto.

**Profilo psicografico**:
- Diffidente verso le agenzie milanesi (troppo lontane, troppo care)
- Diffidente verso il cugino-grafico (di solito poca qualità)
- Sta in mezzo, cerca un'opzione professionale ma non da multinazionale
- Confronta su Google e si fa idea dell'ordine di grandezza prima di contattare

**Dispositivo prevalente**: split desktop/mobile, leggermente desktop (sessione di valutazione prima del contatto).

---

## Purpose primario

**Ibrido C+B → A** (Editorial + Brand → Conversion soft).

Scala narrativa decisa dall'utente:
1. **Brand** — capire chi è Nexus e fidarsi
2. **Editorial** — sfogliare i lavori/concept come un magazine
3. **Conversion soft** — CTA strutturato solo a fine percorso

**Energia CTA**: equilibrata e crescente. NO CTA dominanti in hero.

---

## Differenziazione (USP)

**Messaggio centrale**: *"AI-driven con metodo, non AI-slop."*

Punti concreti:
1. **Approccio strutturato**: questionario o call conoscitiva, deliverable in fasi (brief.md → design.md → asset → build → review)
2. **Workflow AI orchestrato umanamente**: l'umano dirige, l'AI esegue. Multipli tool AI (Claude, GPT, Gemini, fal.ai, Higgsfield, VSCode, ecc.) connessi via processo proprietario
3. **Ossessione design**: palette + mood + font + microinterazioni curate al massimo. No AI-slop generico
4. **Stack tecnico moderno e ampio**: Next.js 15 + shadcn/ui v4 + Tailwind v4 + Vercel come base. All'occorrenza Solid.js, twgl.js, PIXI.js, librerie WebGL
5. **Velocità reale**: 3 giorni → 2 settimane massimo, da completamento questionario
6. **Comunicazione friendly**: "non sembra di parlare a una banca, ma a un amico"

---

## Servizi offerti
1. Sito vetrina nuovo (da zero)
2. Restyling / migrazione SEO-preserving
3. Copy + SEO come servizio a sé stante
4. Manutenzione mensile / aggiornamenti
5. Audit / consulenza one-shot

---

## Modello commerciale

**Tier-based con "a partire da" + custom enterprise** (raccomandazione strategica accettata):

- **Tier 1 — Vetrina essenziale** *(da €X, 3-5 giorni)*
- **Tier 2 — Sito completo + interazioni** *(da €Y, 1-2 settimane)*
- **Tier 3 — Restyling SEO-preserving** *(da €Z)*
- **Custom enterprise** *(parliamone, niente prezzo)*

Più add-on con prezzo dichiarato:
- Manutenzione mensile (€X/mese)
- Audit one-shot (€Y)

Le cifre esatte vanno definite prima del go-live. I tier vanno dichiarati pubblicamente nel sito.

---

## Geografia e lingue
- **Geografia**: Italia + clienti italiani all'estero (es. export Dubai)
- **Lingua principale**: Italiano
- **Seconda lingua**: Inglese come opzione (URL `/en/...`)
- **Schema markup**: NON `LocalBusiness`. Usa `Organization` + `ProfessionalService` con `serviceArea` esteso
- **Niente pagine `/aree/[comune]`**: Nexus opera Italia-wide, non locale

---

## Voice

**"Tu" diretto, amichevole.**
Esempio: *"Ti consegniamo il sito in 3 giorni."*

NO formalità eccessive. NO "voi" istituzionale. NO impersonale.

---

## Portfolio / proof — strategia

**Gerarchia invertita**: il sito stesso è il primo case study. La home è una vetrina del METODO, non dei lavori.

Composizione portfolio:
1. **Lavori reali in corso**: Export auto Dubai, NCC tour Sicilia, HVAC, fotovoltaico. Etichettati come "In lavorazione" o "Progetti Q1/Q2 2026"
2. **Concept Studies dichiarati**: 2-3 studi fittizi per settori target (es. enoteca, studio architettura). Etichettati apertamente come "Studio interno" — la trasparenza è forza
3. **Recensioni reali**: poche all'inizio, da raccogliere. Meglio 3 vere raccontate a fondo che 12 generiche

---

## Architettura narrativa della home (anteprima sitemap)

1. **Hero "wow"** — atmosferico, dimostrativo. Il sito stesso = il primo lavoro mostrato. **Standard esecutivo non negoziabile**
2. **Hook** — *"Ti piacerebbe un sito come questo?"* o variante. Una frase, niente CTA forte
3. **Il Metodo (parte 1)** — workflow visualizzato: *brief → design → asset → build → review*. Con loghi AI providers (Claude, GPT, Gemini, fal.ai, Higgsfield, ecc.) come parte del setup
4. **Anti-AI-slop manifesto** — sezione differenziazione con **diagramma split**:
   - **Sinistra**: "Lovable + 1 prompt singolo" → sito generico
   - **Destra**: nodi di tool AI connessi tra loro che convergono → sito Nexus
   - Copy minimalista sopra/sotto, tono assertivo-sicuro (non aggressivo-difensivo)
5. **Lavori + Concept studies** — 4-5 oggetti raccontati a fondo, non muro di thumbnail
6. **Proof sociale** — recensioni reali, anche poche
7. **CTA tier-based** — "Quale Nexus fa per te?" + i 3 tier (a partire da €X) + custom enterprise. Form contatto sotto
8. **Footer** — link, contatti, lingua switcher

---

## Asset esistenti

### Logo
4 varianti già pronte:
- `NEXUS-BLACK.svg`
- `NEXUS-WHITE.svg`
- `NEXUS-LIME.svg`
- `Nexus_Green.png`

"N" geometrica con dettaglio diagonale interno. Contemporanea, leggibile, funziona sia mono che con wordmark.

**Decisione**: il logo regge. Non si tocca.

### Palette
Nexus ha una palette brand di partenza, **in fase di revisione/finalizzazione su Claude Code via `/nexus-design`**.

I valori hex concreti e le regole d'uso vivono in un posto solo — l'Intermezzo Design — per evitare doppie fonti di verità. Qui nel briefing resta solo la **direzione cromatica astratta**: mood tech-editorial, prevalenza scura come base sistematica, cream come "pausa umana" nelle sezioni narrative, un accent ad alta intensità usato con disciplina chirurgica (mai grandi aree, mai su sfondi chiari). Equilibrio tra "tech AI" e "editorial warm".

Vincolo di principio (vale qualunque sia l'esito della revisione): l'accent fluo va trattato come firma puntuale, non come superficie — rischio "Linear/Vercel copy" da sterilizzare.

### Brand identity (mockup esistenti)
Bottle, business card, t-shirt, hoodie, tote, notebook. Direzione già definita: premium, tech-modern, monocromatico con punte lime. Sans serif geometrico (font specifico da decidere nell'Intermezzo Design su Claude Code).

---

## Banlist progetto-specifica

### Estetica
- Niente grandi aree lime fluo piene (uso solo accent)
- Niente layout "startup tech-bro" copiato da Linear/Vercel pari pari
- Niente icone-bottoni-multicolor stile dashboard SaaS
- Niente 2×2 card grid
- Niente sezioni hero centrate con headline gigante + bottone CTA blu
- Niente illustrazioni vector cartoon style
- Niente AI-generated illustrations stock-style
- Niente font monospace (regola permanente del progetto Nexus)

### Cliché da evitare
- "Eccellenza", "passione", "qualità", "soluzioni innovative" nei testi
- Mani che digitano su tastiera (foto cliché agenzia)
- Cervelli con circuiti / robot stylizzati per "AI"
- Network neurali stilizzati di sfondo
- Toni "futuro/innovazione" generici

### Copy
- Il tono "aggressivo-difensivo" della bozza iniziale (es. *"non replicabile da tuo cugino"*) va riformulato in versione **assertiva-sicura**
- Direzione: tono di chi sa quello che fa, ma senza svalutare il visitatore
- Rielaborazione esatta in COPY.md della Chat 2

---

## Note operative per Chat 1 — STRATEGIA

- **Standard esecutivo hero**: non negoziabile. Il sito stesso è il primo case study. Se la hero non "wow", l'intera architettura crolla
- **Sezione anti-AI-slop con diagramma split** = elemento chiave del wireframe
- **Sitemap bilanciata**: Metodo + Portfolio + Proof, non solo portfolio classico
- **Concept estetico (STEP 4)**: cercare il punto di equilibrio raro tra "editorial warmth" (crema) e "tech AI" (lime). Spazio competitivo poco affollato nel mercato italiano
- **Modello commerciale**: i 3 tier vanno integrati nel CTA finale, non in una pagina /pricing separata (manteniamo single page o quasi)

---

## Riferimenti visivi
Da raccogliere all'inizio della Chat 1 STRATEGIA (STEP 4): l'utente fornirà 2-3 link o screenshot di siti che gli piacciono.

---

## Nota palette
La palette concreta (valori hex, fix tecnici, stati, colori semantici) è **gestita interamente nell'Intermezzo Design `/nexus-design` su Claude Code**, non in questo file. Qui resta solo la direzione cromatica astratta (vedi sezione "Asset esistenti → Palette"). Fonte di verità unica = `/nexus-design`.

---

*Briefing.md compilato — pronto per trigger `ANALISI BRIEF` (Chat 1 STRATEGIA).*
