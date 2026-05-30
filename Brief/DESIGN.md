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

⚠️ **Nexus ha già una palette brand ufficiale e un logo.** Questi NON sono scelte di design da fare ex-novo: sono **asset di brand da rispettare**. Claude Code in `/nexus-design` NON deve proporre una palette nuova da zero — deve **finalizzare quella esistente** applicando i fix tecnici già identificati.

Palette + regole d'uso complete + fix obbligatori + estensioni semantiche da decidere: vedi **`briefing.md` → sezione "Note palette — input per Intermezzo Design"**.

Sintesi dei fix da finalizzare in `/nexus-design`:
1. Lime `#B8FF3D` mai su cream `#F5F3EE` (FAIL contrasto) → solo su sfondi scuri
2. Aggiungere `#5C5B57` come body-on-light (palette estesa a 6 colori)
3. Definire hover/pressed del lime (`#A8E835` / `#95CC2A`)
4. Definire colori semantici error/success/warning (success NON usa il lime)
5. Regola "una parola lime per pagina" come accent editoriale

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
  - **Palette**: NON una nuova → finalizzazione di quella esistente (i 5 fix sopra)
  - **3 direzioni tipografia** compatibili con "sans grottesco geometrico + serif touch", NO monospace
  - **3 direzioni energia CTA** compatibili con "equilibrata-crescente"
  - **3 direzioni macro-layout** per le 3 sezioni-firma: (a) sistema visualizzato/workflow, (b) diagramma split anti-AI-slop, (c) lavori asimmetrici editoriali

## Vincoli non-negoziabili emersi in strategia

- **Standard esecutivo della hero**: il sito Nexus stesso è il primo case study del portfolio. Se la hero non fa "wow", l'intera architettura crolla (perché il primo lavoro mostrato è già fallito). Standard qualitativo massimo, non negoziabile.
- **Sezione "sistema visualizzato"** (home, sez. 5) e **"diagramma split anti-AI-slop"** (home, sez. 6) sono le **firme visive** del sito → vanno costruite custom, non con componenti standard riconfigurati.
- **Sezione "lavori sintesi"** (home, sez. 7) richiede layout asimmetrico costruito a mano, mai template card grid.

## Scelte concrete approvate

> Questa sezione viene **COMPILATA da Claude Code** dopo `/nexus-design`.
> Lasciare vuota in questa fase. Compilata dopo l'Intermezzo Design.

---

*DESIGN.md astratto — Chat 1 STRATEGIA completata. Prossimo step: Intermezzo Design `/nexus-design` su Claude Code.*
