# SITEMAP.md — Nexus

> Struttura: **hybrid** — home long-page narrativa (esperienza scroll-driven, archetipo C) + pagine satellite strategiche per SEO e conversione.
> Motivazione: multi-page totale spezzerebbe il flusso narrativo C; single-page puro danneggerebbe SEO e link diretti.

---

## Pagine

### `/` — Home
- **Tipologia**: home long-page narrativa
- **Scopo strategico**: esperienza completa scroll-driven. Hero atmosferica → metodo → manifesto anti-AI-slop → lavori sintetici → recensioni → CTA tier-based. Il 90% dei visitatori legge solo questa pagina.
- **Priorità SEO**: **Alta** — keyword principali ("studio web design AI", "siti web su misura Italia", "agenzia siti SMB")

### `/lavori` — Lista lavori
- **Tipologia**: lista / indice progetti
- **Scopo strategico**: vista d'insieme di tutti i progetti reali in corso + concept studies dichiarati. Aggancia il visitatore che vuole approfondire dopo la home.
- **Priorità SEO**: Media

### `/lavori/[slug]` — Case study singolo
- **Tipologia**: pagina di dettaglio progetto (dinamica)
- **Scopo strategico**: una pagina dedicata per ogni progetto reale (es. Sicily Driver, Iacono Clima) o concept study (es. Enoteca Verona). Racconta brief → strategia → processo → output. Mostra il "dietro le quinte" del metodo applicato.
- **Priorità SEO**: Media-alta — long-tail settoriali (es. "sito web NCC Sicilia", "sito HVAC Siracusa")

### `/iniziamo` — Pagina conversione
- **Tipologia**: contatti / preventivo (senza chiamarlo "preventivo")
- **Scopo strategico**: tier dettagliati + add-on + form contatto strutturato. È la destinazione del CTA finale della home. Punto di conversione principale del sito.
- **Priorità SEO**: Bassa (SEO) / Alta (conversione)

### `/en/`, `/en/works`, `/en/works/[slug]`, `/en/start` — Mirror inglese
- **Tipologia**: duplicato inglese dell'intera sitemap
- **Scopo strategico**: legittimità internazionale per clienti italiani all'estero (es. export Dubai). Versione più snella: meno SEO depth, meno didascalia.
- **Priorità SEO**: Bassa — l'inglese serve per credibilità, non per ranking IT

---

## Pagine deliberatamente ESCLUSE (e perché)

- **`/servizi` o `/metodo` dedicate** → no. Il metodo è già il cuore della home; duplicarlo banalizza l'esperienza scroll-driven. I servizi vivono come sezione home + pagina `/iniziamo`.
- **`/chi-siamo`** → no. Nexus è un team piccolo AI-driven, non un'agenzia con foto del team. La presentazione vive come sezione "manifesto" nella home.
- **`/blog`** → no. Non ci sono contenuti da aggiornare con costanza. Un blog vuoto è peggio di nessun blog.
- **`/faq` dedicata** → no. Le 3-5 FAQ utili vivono come sezione in fondo alla home, prima del CTA finale.

---

## Note tecniche per Claude Code

- **`sitemap.xml`** con priorità: `/` (1.0), `/lavori` (0.8), `/lavori/[slug]` (0.7), `/iniziamo` (0.6)
- **`robots.txt`** apre a tutto (nessuna sezione nascosta, nessun `noindex` in produzione)
- **Hreflang** IT ↔ EN su tutte le pagine duplicate
- **Schema markup**: `Organization` + `ProfessionalService` con `serviceArea` esteso (NON `LocalBusiness` — Nexus opera Italia-wide, non è locale). Niente pagine `/aree/[comune]`.
- **`/lavori/[slug]`** generate da MDX o CMS leggero — nuovi case study si aggiungono come file, non come sezioni a codice
- **Keyword target Italia-wide** (non locali): vedi SEO.md (Chat 2)

---

*SITEMAP.md — Chat 1 STRATEGIA.*
