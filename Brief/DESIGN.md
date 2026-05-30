# DESIGN.md (ASTRATTO) — Nexus

> ⚠️ Questo file è **ASTRATTO**. Le scelte concrete (palette hex finali, font esatti, componenti specifici) vivono nel passaggio successivo:
> **Intermezzo Design su Claude Code** via `/nexus-design`.
> Prima della Chat 2 CONTENUTI, questo file viene aggiornato con la sezione "Scelte concrete approvate".

---

## Purpose primario

- **Categoria**: Ibrido **C (Editorial storytelling) + B (Brand recall) → A (Conversion soft)**
- **Motivazione**: Scala narrativa decisa dal cliente — il visitatore prima si fida (B), poi sfoglia/scopre il metodo come un magazine (C), e solo a fine percorso ha l'opzione di un CTA strutturato (A). Nessuna conversione forzata in apertura.
- **Filtro hardcoded che ne deriva**: l'energia CTA è **equilibrata-crescente**, MAI dominante in hero. Nessuna soluzione hero può avere un bottone "PRENOTA/CONTATTA" come elemento focale.

## Target principale

- **Chi**: proprietari di SMB italiani, 35-65 anni, settori tecnico-locali (HVAC, fotovoltaico, NCC, export auto, attività territoriali). No e-commerce.
- **Dispositivo prevalente**: split — desktop ~60% (sessione di valutazione), mobile ~40% (scoperta e follow-up). Entrambi devono funzionare benissimo.
- **Urgenza**: **valutativa**, non frettolosa né esplorativa. Atterra dopo aver visto 2-3 alternative, sta confrontando. Il sito deve "trattenere" più che "convertire subito".
- **Lingua/cultura**: italiano nativo (lingua principale) + inglese come opzione (clienti italiani all'estero). Niente itanglese da pitch deck. Anglicismi solo dove servono (nomi tool AI in inglese OK).

## Concept scelto

- **Nome**: **Studio System** (la documentation premium)
- **Mood (3 parole)**: preciso, sistematico, intelligente
- **Tono di voce**: tecnico-trasparente e friendly-esperto. Da chi spiega il proprio lavoro come si spiega un sistema, non da chi vende. "Tu" diretto. Frasi corte dichiarative + paragrafi narrativi brevi. Mai corporate, mai "parlare a una banca".

## Direzione estetica (astratta, da raffinare con `/nexus-design`)

- **Approccio hero**: **misto** — apertura atmosferica (B) → transizione scroll-driven (C). Il metodo Nexus è il baricentro visivo, non il portfolio.
- **Approccio servizi**: **a sistema** — i servizi come "moduli" del sistema Nexus, con relazione visibile tra loro. Layout strutturato e geometrico ma con respiro. Mai card grid 2×2.
- **Approccio testimonianze**: **dinamico-discreto** — rotazione lenta di citazioni brevi (nome cliente + ruolo). No carousel a frecce, no foto persone. Possibile alternativa statica "intervista" per le recensioni lunghe.
- **Approccio fotografico**: **il visual È il lavoro reale** — mockup di siti su device, dettagli di interfacce, schermate dei deliverable Nexus (brief.md, design.md), screenshot del workflow. Mai foto di "uomini al computer", mai stock, mai illustrazioni.
- **Atmosfera tipografica**: sans grottesco geometrico dominante (titoli + body) con **UN solo touch di serif** per "respiro umano" puntuale. Forte cura della gerarchia. **NO font monospace** (regola permanente Nexus).
- **Atmosfera cromatica**: mood **tech-editorial**. Prevalenza scura come base sistematica, **cream come "pausa umana"** nelle sezioni narrative (manifesto, recensioni), accent ad alta intensità usato con **disciplina chirurgica**. Vedi vincolo palette sotto.
- **Energia CTA**: **equilibrata-crescente** — CTA sobri e educati, mai gridati. I tier mostrati come blocchi paritari, mai gerarchia "scegli questo!". Motivazione: purpose ibrido, il visitatore valutativo si allontana se spinto troppo presto.

## Archetipo animazione

- **Dominante**: **C — Storytelling Scroll-driven (70%)** — motivazione: visitatore con calma valutativa + tanto metodo da spiegare + lavoro astratto/tecnico (no prima/dopo). Il sito si svela un pezzo alla volta scrollando.
- **Mix 30%**: **B — Cinematico Minimal** — per l'apertura emotiva ("prima sensazione, poi razionale"). Regola di combinazione: prima il cuore (B), poi la testa (C).
- **Tipo hero direzionale**: **ibrida B→C** — apertura atmosferica con **momento 3D del logo** (rotazione lentissima, illuminazione discreta, niente shader complessi, ~5-8 secondi) → allo scroll il 3D cede il palcoscenico al workflow che si compone scroll-driven.
- **Disciplina 3D**: il 3D vive **solo** nell'apertura hero. Un unico momento di firma, mai ripetuto in altre sezioni. Peso asset 3D target <300kb. Stesso principio di disciplina del lime.

## Banlist specifica del progetto

(aggiuntiva a quella globale del CLAUDE.md Nexus)

### Estetica
- Niente grandi aree lime piene (uso solo accent, max ~10-15% surface per viewport)
- Niente layout "startup tech-bro" copiato da Linear/Vercel pari pari → **rischio specifico n.1**, da sterilizzare con cream + serif touch + ariosità maggiore
- Niente card grid 2×2 o strutture early-2000s
- Niente hero centrato con headline gigante + bottone CTA blu
- Niente glow / neon / gradient pesante (il sito deve essere piatto e pulito, non glowing)
- Niente animazioni 3D pesanti o scroll-driven complessi (il 3D è atmosfera, non spettacolo)
- Niente texture/grain pesante (cream è cream, non vintage)

### Cliché di settore (web agency / AI) da evitare
- Foto team / handshake / ufficio / persone che si abbracciano
- Mani che digitano su tastiera
- Cervelli con circuiti, robot stilizzati, bracci robotici per rappresentare "AI"
- Network neurali stilizzati di sfondo, matrix, codice che scorre come decorazione
- Toni "futuro / innovazione / rivoluzione" generici

### Riferimenti culturali / linguistici da evitare
- Itanglese da pitch deck ("ottimizziamo la tua user journey")
- Tono corporate da agenzia milanese di Brera
- "Eccellenza", "passione", "qualità", "soluzioni innovative"

## Vincolo palette (asset brand pre-esistente)

⚠️ **Nexus ha un logo definitivo e una palette brand di partenza.** Il logo è fissato e non si tocca. La **palette è in fase di revisione/finalizzazione su Claude Code via `/nexus-design`** — è lì che vivono i valori hex concreti, i fix tecnici (contrasto, hover/pressed states, body-on-light), e gli eventuali colori semantici.

In questo file resta solo la **direzione cromatica astratta** (vedi "Atmosfera cromatica" sopra): mood tech-editorial, prevalenza scura come base, cream come pausa umana, accent fluo con disciplina chirurgica.

Vincoli di principio che valgono qualunque sia l'esito della revisione palette:
- L'accent fluo è **firma puntuale, non superficie** (mai grandi aree, mai come testo, mai su sfondi chiari)
- Rischio "Linear/Vercel copy" da sterilizzare attivamente (cream + serif touch + ariosità)
- Ogni valore di testo deve rispettare il contrasto WCAG — Claude Code lo verifica in `/nexus-design`

## Direzione per Claude Code

- **Tono generale del codice**: minimal-editoriale con precisione tech. Mix tra la calma di un magazine e il rigore di una documentation premium.
- **Filtri obbligatori da rispettare**:
  - Purpose ibrido → CTA mai dominante in hero, energia equilibrata-crescente
  - Palette brand esistente da rispettare + fix tecnici applicati (vedi briefing.md)
  - Lime con disciplina chirurgica: max 10-15% surface, mai su cream, mai come testo
  - 3D solo nell'apertura hero come momento puntuale (<300kb)
  - No font monospace, no font di banlist globale
  - Rischio Linear/Vercel-copy da sterilizzare attivamente
- **Cosa Claude Code DEVE proporre nell'Intermezzo `/nexus-design`**:
  - **Palette**: revisione/finalizzazione della palette brand (valori hex, fix di contrasto, hover/pressed states, body-on-light, eventuali colori semantici error/success/warning). Punto fermo: l'accent fluo non si usa come testo né come grande superficie, e il success non coincide con l'accent
  - **3 direzioni tipografia** compatibili con "sans grottesco geometrico + serif touch", NO monospace
  - **3 direzioni energia CTA** compatibili con "equilibrata-crescente"
  - **3 direzioni macro-layout** per le 3 sezioni-firma: (a) sistema visualizzato/workflow, (b) diagramma split anti-AI-slop, (c) lavori asimmetrici editoriali

## Vincoli non-negoziabili emersi in strategia

- **Standard esecutivo della hero**: il sito Nexus stesso è il primo case study del portfolio. Se la hero non fa "wow", l'intera architettura crolla (perché il primo lavoro mostrato è già fallito). Standard qualitativo massimo, non negoziabile.
- **Sezione "sistema visualizzato"** (home, sez. 5) e **"diagramma split anti-AI-slop"** (home, sez. 6) sono le **firme visive** del sito → vanno costruite custom, non con componenti standard riconfigurati.
- **Sezione "lavori sintesi"** (home, sez. 7) richiede layout asimmetrico costruito a mano, mai template card grid.

## Scelte concrete approvate
> Compilato da `/nexus-design` il 2026-05-30. Informato da `ui-ux-pro-max` (palette + 57 font pairing) + banlist globale e di progetto.
> **Fonte di verità unica** per palette/font/CTA/layout. NON modificare in fase build: se emerge un limite tecnico, torna a `/nexus-design`.

### Palette
**Nome**: *Mono-accent Editorial* — palette brand bloccata + sistema neutri caldi + semantici desaturati (success ≠ accent).

| Token | Hex | Uso |
|---|---|---|
| `--ink` | `#0A0A0A` | Background primario (base sistematica scura), testo primario su cream |
| `--ink-warm` | `#2A2926` | Superfici stratificate su scuro, **body text su cream**, bordi caldi |
| `--cream` | `#F5F3EE` | Background sezioni narrative (hook, manifesto, recensioni) — "pausa umana" |
| `--muted` | `#8B8A85` | Testo secondario su scuro, caption/metadata — **solo large text su cream** |
| `--muted-body` | `#5C5B57` | *(fix)* Body text lungo su cream (WCAG AA ~6:1) |
| `--lime` | `#B8FF3D` | **Accent firma puntuale** — CTA solid, overline, hover/focus, una parola-accento |
| `--lime-hover` | `#A8E835` | Hover del solid lime |
| `--lime-pressed` | `#95CC2A` | Pressed del solid lime |
| `--on-lime` | `#0A0A0A` | Testo/icone sopra superfici lime |
| `--border-dark` | `#38362F` | Hairline su superfici scure |
| `--border-light` | `#E0DCD2` | Hairline su cream |

**Semantici (desaturati, caldi — non competono col lime):**
| Token | Hex | Note |
|---|---|---|
| `--error` | `#CC5B4E` | Terracotta desaturato |
| `--success` | `#6E8B5A` | Sage/oliva muto — **deliberatamente NON lime** |
| `--warning` | `#C99A4E` | Ocra desaturato |

**Regole d'uso lime (hardcoded):** ✗ mai come testo · ✗ mai su `#F5F3EE` (contrasto ~1.3:1, FAIL) · ✗ mai come fill di intere sezioni · ✓ max ~10-15% surface per viewport · ✓ vive solo su `--ink`/`--ink-warm`. Focus ring: lime su scuro / `--ink` 2px su cream (il lime fallirebbe il 3:1 su cream).

**Motivazione**: realizza "dark base + cream pausa umana + accent chirurgico" mantenendo la firma mono-accent intatta. Sterilizza il rischio Linear/Vercel evitando il secondo accent (che avrebbe diluito l'identità) e usando cream + semantici caldi al posto dei neutri freddi da dashboard.

### Tipografia
- **Titoli/Display**: **Clash Display** 600/700 (Fontshare, self-host) — grottesco geometrico con carattere, coerente con la "N" del logo
- **Corpo/UI/Label**: **Satoshi** 400/500/700 (Fontshare, self-host) — sans premium ad alta leggibilità
- **Serif touch**: **Fraunces** 400/500 + italic, optical sizing (Google Fonts variable) — **solo** per: frase hook, accento titolo manifesto, citazioni/recensioni. Il "respiro umano" puntuale
- **Monospace**: ❌ **nessuno** (regola permanente Nexus). Overline/label/metric → Satoshi 500 **uppercase** + letter-spacing, mai mono
- **Scala indicativa**: Hero display 64–96px · H2 36–48px · H3 24–28px · body 16–18px (line-height 1.6) · overline 12–13px uppercase tracking-wide
- **Motivazione**: DB #39 (Startup Bold) + #20 (Premium Sans) + serif caldo. Premium-confident: attiva il segnale "tech" senza il cliché Vercel; il serif Fraunces porta l'editorial warmth che il concept richiede.

### Energia CTA
- **Direzione**: *Underline editoriale → solid lime crescente*
- **Pattern**: sezioni alte/medie → link testuali con **underline animato** (cresce/si colora in lime su hover), sobri, mai bottoni pieni. Il **solid lime** (`bg #B8FF3D` + `text #0A0A0A`, **flat, no shadow, no glow**, radius piccolo ~6px) compare **solo** nella sezione tier finale (home sez. 9) e su `/iniziamo`
- **Stati solid**: hover `#A8E835` · pressed `#95CC2A` · focus ring 2px (`#0A0A0A` su cream / lime su scuro) · disabled opacity 0.4 + no pointer
- **Tier**: 3 blocchi **paritari** (zero gerarchia "scegli questo"), custom enterprise come 4° blocco più sobrio, add-on subordinati sotto
- **Motivazione**: purpose ibrido C+B→A → l'energia deve crescere col scroll, mai dominare l'hero. Il visitatore valutativo si allontana se spinto presto.

### Macro-layout per sezione
- **Hero (sez. 2)**: B→C atmosferico. Logo Nexus **3D wireframe/extrusion** discreto (three.js leggero <300kb, illuminazione soffusa su `--ink`, rotazione lentissima 5-8s, niente shader/glow) + una frase tipografica grande. **Nessun CTA**. Allo scroll il 3D sfuma e cede al workflow.
- **Hook (sez. 3)**: frase singola grande in **Fraunces** su cream, centrata, whitespace generoso, mood rivista.
- **Manifesto metodo (sez. 4)**: editoriale su cream, titolo con serif touch + paragrafi 60–70 char in `--muted-body`, reveal soft una frase alla volta. No icone/bullet/card.
- **① Sistema visualizzato (sez. 5 — FIRMA)**: **timeline verticale connessa** — 5 moduli (brief→design→asset→build→review) uniti da linea che si disegna allo scroll, nodo attivo in lime, loghi AI provider nei moduli asset/build. Custom, no componenti standard, **mai card grid 2×2**.
- **② Diagramma split (sez. 6 — FIRMA)**: **split 50/50 con divisorio**. Sinistra spenta/grigia ("Lovable + 1 prompt → generico", 1 freccia dritta). Destra viva con nodi tool connessi + linee convergenti, lime solo sui nodi. Mobile → verticale (sopra/sotto). Connessione si compone allo scroll. **Mai cliché cervello/network.** Custom.
- **③ Lavori + Concept (sez. 7 — FIRMA)**: **moodboard editoriale asimmetrico** — 4-5 progetti a dimensioni/posizioni diverse, ritmo da rivista, molto respiro. Per item: thumb + titolo + 1 riga + etichetta ("Progetto in corso"/"Studio interno"). CTA testuale "Tutti i lavori →". **Mai griglia 2×2/3×3.**
- **Recensioni (sez. 8)**: dinamico-discreto, **una alla volta** (rotazione lenta/fade, no carousel a frecce, no foto). Citazione grande in Fraunces + nome + ruolo + contesto. Mood intervista.
- **Tier/Servizi (sez. 9)**: 3 blocchi paritari separati da hairline (registro "ledger", non card-with-checklist), 4° blocco custom sobrio, add-on subordinati. Solid lime CTA qui.
- **FAQ (sez. 10)**: accordion semplice, domande tipograficamente grandi, risposte medie, molto bianco.
- **Footer (sez. 11)**: 4 colonne (Studio/Servizi/Contatti/Legale) + logo Nexus grande in cream o lime come accent finale + lang switcher piccolo in basso a destra.

### Note per la build
- **NO monospace ovunque** — overline/metric/label in Satoshi uppercase tracked.
- **NO glow/neon/gradient pesante** — tutto flat e pulito; il 3D è atmosfera opaca, non spettacolo.
- **Lime budget**: max ~10-15% surface per viewport; audit visivo per sezione.
- **3D solo nell'hero**, un unico momento di firma, <300kb. Fallback statico 2D se il device non regge / `prefers-reduced-motion`.
- **3 FIRME (sez. 5/6/7) = costruzione custom**, complessità alta: investirci tempo, no template shadcn riconfigurati.
- **Accessibilità**: rispettare WCAG su tutte le coppie testo; `prefers-reduced-motion` su tutte le animazioni scroll-driven; focus ring sempre visibile (lime su scuro / ink su cream).
- **Font self-host**: Clash Display + Satoshi da Fontshare (woff2 locali), Fraunces variable da Google/self-host. `font-display: swap`, preload solo dei pesi critici.

---

*DESIGN.md — Chat 1 STRATEGIA + Intermezzo Design `/nexus-design` completati. Sezione "Scelte concrete approvate" compilata e approvata. Prossimo step: Chat 2 CONTENUTI (`GENERA CONTENUTI` su Claude.ai) per COPY.md + SEO.md.*
