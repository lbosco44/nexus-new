# SEO.md — Nexus

> Pattern A (from scratch). Studio web design AI-driven, **Italia-wide** (non locale).
> Schema: `Organization` + `ProfessionalService` con `serviceArea` esteso. **Niente `LocalBusiness`, niente pagine `/aree/[comune]`.**
> Strategia onesta: head term sature → si gioca su long-tail di differenziazione, long-tail settoriali (= case study) e **GEO/AEO** come pilastro.
> ⚠️ Volumi qui sotto sono **stime di banda da validare** con keyword tool reale (non ho dati GSC: il sito è nuovo). Servono come direzione di priorità, non come numeri definitivi.

---

## 0. Quadro competitivo (perché la strategia è questa)

- Head term ("agenzia web", "realizzazione siti web", "web agency [città]") = presidiate da incumbent con alta autorità di dominio. Inarrivabili a breve per un sito nuovo.
- La maggior parte dei competitor è **full-service marketing** (SEO + Ads + social) e usa l'AI come *feature bolt-on* (chatbot, analisi predittiva). **Nessuno** presidia "AI come metodo di costruzione + anti-slop". Corsia aperta.
- Contesto culturale 2026: vibe coding, Lovable, Framer AI, Wix Harmony. Il dibattito "builder vs direttore" è caldo → ottimo per messaggio e per contenuto comparativo, **non** per ranking organico (le query "alternativa a Wix" sono dominate da altri builder con intento commerciale loro).
- Shift 2026: AI Overview e risposte generative (ChatGPT/Gemini/Perplexity) intercettano una fetta crescente di ricerca informativa → chi diventa **fonte citata** vince. Nexus può rivendicarlo e dimostrarlo sul proprio sito.

---

## 1. Keyword research (Italia-wide)

### 1.1 — Keyword primarie (testa, alta competizione — presidio di messaggio, non scommessa organica primaria)
| Keyword | Intento | Volume stimato | Competizione | Pagina |
|---|---|---|---|---|
| studio web design Italia | commerciale | medio | alta | `/` |
| siti web su misura | commerciale | medio-alto | alta | `/` |
| agenzia siti web PMI | commerciale | medio | alta | `/` |
| realizzazione siti web professionali | commerciale | alto | molto alta | `/` |

### 1.2 — Keyword di differenziazione (corsia realistica — priorità ALTA)
Qui Nexus ha un angolo difendibile perché pochi le presidiano con intento "qualità/su misura".
| Keyword | Intento | Volume stimato | Competizione | Pagina |
|---|---|---|---|---|
| sito web fatto su misura (non template) | commerciale | basso-medio | media | `/`, `/iniziamo` |
| siti web AI con metodo | informaz./commerc. | basso | bassa | `/` |
| sito professionale alternativa template | commerciale | basso | media | `/iniziamo` |
| studio web design AI-driven | commerciale | basso | bassa | `/` |
| sito web veloce da realizzare professionale | commerciale | basso-medio | media | `/iniziamo` |
| sito web ottimizzato per ricerche AI | informaz. | basso (crescita) | bassa | `/` (sez. metodo) |

### 1.3 — Long-tail settoriali (= i `/lavori/[slug]`, priorità ALTA per rilevanza/conversione)
Bassa competizione, intento qualificato, mappano sui case study reali e sui concept study.
| Keyword | Pagina target |
|---|---|
| sito web NCC / noleggio con conducente | `/lavori/sicily-driver` |
| sito web autista privato turismo | `/lavori/sicily-driver` |
| sito web climatizzazione / HVAC | `/lavori/iacono-clima` |
| sito web installatore condizionatori | `/lavori/iacono-clima` |
| sito web fotovoltaico / impianti solari | `/lavori/[fotovoltaico]` |
| sito web export auto / rivendita auto estero | `/lavori/[export-auto]` |
| sito web enoteca / cantina (concept) | `/lavori/[concept-enoteca]` |
| sito web studio di architettura (concept) | `/lavori/[concept-architettura]` |

> Regola: ogni case study è ottimizzato per la sua coppia settore + "sito web". È il modo in cui Nexus ranka su settori specifici **senza** essere locale.

### 1.4 — Keyword brand (presidio immediato, vincite facili)
| Keyword | Pagina |
|---|---|
| nexus studio web | `/` |
| nexus siti web | `/` |
| nexus web design | `/` |
| nexus + [eventuale claim/payoff] | `/` |

> Verificare in fase brand-name che non ci siano collisioni forti su "nexus" in ambito tech IT; se sì, rafforzare sempre con il qualificatore ("Nexus studio web design").

### 1.5 — Cluster GEO/AEO (pilastro 2026)
Obiettivo: farsi **citare** dagli assistenti AI quando un imprenditore chiede consiglio. Si presidia con contenuto strutturato + FAQ in markup, non con keyword stuffing.
Query-tipo da intercettare (negli AI assistant, non solo Google):
- "conviene farsi fare un sito su misura o usare un builder AI?"
- "come si riconosce un sito fatto bene da uno generato male dall'AI?"
- "quanto costa un sito vetrina professionale in Italia 2026?"
- "studio che fa siti per PMI senza template"

---

## 2. Schema.org markup

### 2.1 — Organization + ProfessionalService (home, JSON-LD globale)
> `serviceArea` = Italia (Country) — esplicitamente non locale. `aggregateRating` **assente** finché non ci sono recensioni reali (mai inventare). `priceRange` indicativo coerente coi tier.

```json
{
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": "https://[dominio]/#organization",
  "name": "Nexus",
  "alternateName": "Nexus Studio",
  "url": "https://[dominio]/",
  "logo": "https://[dominio]/nexus-logo.png",
  "image": "https://[dominio]/og-default.jpg",
  "description": "Studio di web design AI-driven con metodo. Siti su misura per PMI italiane: niente template, niente AI-slop. Brief, design, asset, build, review come sistema.",
  "slogan": "AI-driven con metodo, non AI-slop.",
  "email": "[email]",
  "telephone": "[+39 ...]",
  "priceRange": "€€",
  "areaServed": {
    "@type": "Country",
    "name": "Italia"
  },
  "serviceArea": {
    "@type": "Country",
    "name": "Italia"
  },
  "knowsLanguage": ["it", "en"],
  "sameAs": [
    "[https://www.linkedin.com/company/...]",
    "[https://www.instagram.com/...]",
    "[https://github.com/...]"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Servizi Nexus",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Vetrina essenziale", "serviceType": "Sito vetrina su misura" }
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Sito completo + interazioni", "serviceType": "Sito su misura con interazioni avanzate" }
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Restyling SEO-preserving", "serviceType": "Migrazione e redesign con preservazione SEO" }
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Manutenzione mensile", "serviceType": "Manutenzione e aggiornamenti sito" }
      },
      {
        "@type": "Offer",
        "itemOffered": { "@type": "Service", "name": "Audit / consulenza", "serviceType": "Audit sito e consulenza one-shot" }
      }
    ]
  }
}
```

### 2.2 — WebSite (per sitelinks + ricerca interna, opzionale)
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://[dominio]/#website",
  "url": "https://[dominio]/",
  "name": "Nexus",
  "inLanguage": "it",
  "publisher": { "@id": "https://[dominio]/#organization" }
}
```

### 2.3 — CreativeWork / CaseStudy (su ogni `/lavori/[slug]`)
> Rafforza la rilevanza settoriale e alimenta le citazioni AI.
```json
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "[Nome progetto] — Sito web [settore]",
  "about": "[settore: es. noleggio con conducente in Sicilia]",
  "creator": { "@id": "https://[dominio]/#organization" },
  "inLanguage": "it",
  "datePublished": "[YYYY-MM-DD]",
  "url": "https://[dominio]/lavori/[slug]"
}
```

### 2.4 — FAQPage (sezione FAQ home — chiave per AEO)
> Il markup FAQ è uno dei modi più diretti per finire nelle risposte AI. Solo domande reali, risposte concise. (Le risposte definitive arrivano da `COPY.md`.)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "[Domanda 1]", "acceptedAnswer": { "@type": "Answer", "text": "[Risposta da COPY.md]" } }
  ]
}
```

---

## 3. Meta tag template per pagina

> Lunghezze: `title` ≤ 60 caratteri, `description` 150–160. Italiano naturale + un verbo d'azione sobrio (coerente con CTA equilibrata). Niente "eccellenza/passione/qualità". OG image dedicata per pagina dove ha senso.

### `/` — Home
```html
<title>Nexus — Siti web su misura, AI-driven con metodo</title>
<meta name="description" content="Studio di web design AI-driven per PMI italiane. Niente template, niente AI-slop: brief, design, asset, build, review come sistema. Guarda il metodo.">
<meta name="keywords" content="studio web design, siti web su misura, agenzia siti PMI, web design AI Italia">
<!-- Open Graph -->
<meta property="og:type" content="website">
<meta property="og:title" content="Nexus — Siti web su misura, AI-driven con metodo">
<meta property="og:description" content="AI-driven con metodo, non AI-slop. Siti su misura per PMI italiane, costruiti come un sistema.">
<meta property="og:image" content="https://[dominio]/og-default.jpg">
<meta property="og:url" content="https://[dominio]/">
<meta property="og:locale" content="it_IT">
<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Nexus — Siti web su misura, AI-driven con metodo">
<meta name="twitter:description" content="AI-driven con metodo, non AI-slop. Siti su misura per PMI italiane.">
<meta name="twitter:image" content="https://[dominio]/og-default.jpg">
<link rel="canonical" href="https://[dominio]/">
<link rel="alternate" hreflang="it" href="https://[dominio]/">
<link rel="alternate" hreflang="en" href="https://[dominio]/en/">
<link rel="alternate" hreflang="x-default" href="https://[dominio]/">
```

### `/lavori` — Lista lavori
```html
<title>Lavori — Progetti e concept study | Nexus</title>
<meta name="description" content="Siti su misura che abbiamo costruito e studi interni dichiarati. Per settore, per metodo. Guarda come lavoriamo su progetti reali.">
<meta name="keywords" content="lavori web design, portfolio siti web, case study siti PMI">
<!-- OG + Twitter analoghi, og:image = cover lavori -->
<link rel="canonical" href="https://[dominio]/lavori">
<link rel="alternate" hreflang="it" href="https://[dominio]/lavori">
<link rel="alternate" hreflang="en" href="https://[dominio]/en/works">
```

### `/lavori/[slug]` — Case study singolo (template)
```html
<title>[Progetto]: sito web [settore] su misura | Nexus</title>
<meta name="description" content="[Progetto], sito web per [settore]: brief, strategia, processo e risultato. Come abbiamo costruito un sito su misura senza template.">
<meta name="keywords" content="sito web [settore], [settore] sito su misura, case study [settore]">
<meta property="og:type" content="article">
<meta property="og:image" content="https://[dominio]/lavori/[slug]/og.jpg">
<link rel="canonical" href="https://[dominio]/lavori/[slug]">
<link rel="alternate" hreflang="it" href="https://[dominio]/lavori/[slug]">
<link rel="alternate" hreflang="en" href="https://[dominio]/en/works/[slug]">
```
> Esempio compilato (Sicily Driver):
> `<title>Sicily Driver: sito web NCC in Sicilia su misura | Nexus</title>`
> `<meta name="description" content="Sicily Driver, sito per noleggio con conducente in Sicilia: brief, strategia e build. Migrazione SEO-preserving senza perdere il posizionamento.">`

### `/iniziamo` — Pagina conversione
```html
<title>Iniziamo — Tier, prezzi e come lavoriamo | Nexus</title>
<meta name="description" content="Tre tier a partire da un prezzo chiaro, più custom enterprise. Questionario, call, preventivo. Scopri qual è il sito giusto per te.">
<meta name="keywords" content="prezzi sito web PMI, preventivo sito su misura, costo sito vetrina professionale">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://[dominio]/iniziamo">
<link rel="alternate" hreflang="it" href="https://[dominio]/iniziamo">
<link rel="alternate" hreflang="en" href="https://[dominio]/en/start">
```

### `/en/...` — Mirror inglese
> Stessi pattern, in inglese, versione più snella. Hreflang reciproci IT↔EN su ogni coppia. `og:locale` = `en_US` (o `en_GB`). Esempio home EN:
```html
<title>Nexus — Custom websites, AI-driven with method</title>
<meta name="description" content="AI-driven web design studio for businesses. No templates, no AI slop: brief, design, assets, build, review as a system.">
<link rel="alternate" hreflang="en" href="https://[dominio]/en/">
<link rel="alternate" hreflang="it" href="https://[dominio]/">
<link rel="alternate" hreflang="x-default" href="https://[dominio]/">
```

---

## 4. sitemap.xml + robots.txt

### sitemap.xml — priorità
| URL | Priority | Changefreq |
|---|---|---|
| `/` | 1.0 | monthly |
| `/iniziamo` | 0.8 | monthly |
| `/lavori` | 0.8 | weekly |
| `/lavori/[slug]` (ciascuno) | 0.7 | monthly |
| `/en/` | 0.6 | monthly |
| `/en/...` (mirror) | 0.5 | monthly |

> Le coppie IT/EN vanno annotate con `xhtml:link rel="alternate" hreflang` dentro la sitemap (sitemap multilingua), in aggiunta agli hreflang nel `<head>`.

### robots.txt
```
User-agent: *
Allow: /
Sitemap: https://[dominio]/sitemap.xml
```
> Nessun `Disallow`, nessun `noindex` in produzione (errore #1 che ho visto fare alle PMI nei competitor). Verificare che `noindex` di staging/preview NON arrivi in produzione: rischio invisibilità totale.

---

## 5. Strategia content & GEO/AEO

### 5.1 — Niente blog churn
Nexus non aggiorna un blog con costanza → un blog vuoto danneggia più che aiutare. **Confermato: no `/blog`.** Il motore di contenuto sono i **case study** (`/lavori/[slug]`): ogni nuovo progetto = nuova pagina indicizzabile su un settore specifico, aggiunta come file MDX/CMS, non a codice.

### 5.2 — GEO/AEO come pilastro (il vantaggio 2026)
Obiettivo: essere **citati** dagli assistenti AI quando un imprenditore chiede consiglio sui siti. Tattiche concrete per Claude Code:
- **FAQPage schema** sulla home (sez. 10) con domande reali e risposte concise (40–60 parole) — formato che gli LLM estraggono bene.
- **Risposte autosufficienti**: ogni sezione chiave deve poter essere capita fuori contesto (un LLM cita paragrafi, non pagine).
- **Dati concreti e verificabili** nel copy (tempi reali, numero progetti, tier con prezzo) → segnale di autorevolezza per AI Overview.
- **Markup pulito + HTML semantico** (la build Next.js già lo favorisce): heading gerarchici corretti, niente testo dentro immagini.
- **Coerenza entità**: nome "Nexus" + qualificatore + `sameAs` social allineati ovunque, così gli assistenti collegano l'entità.

### 5.3 — Off-site (non è build, ma annotalo per il go-live)
- `sameAs`: LinkedIn, Instagram, GitHub coerenti (rinforzano l'entità Organization).
- Niente Google Business Profile in senso classico (Nexus non è locale), ma la coerenza NAP minima (nome + email + telefono) deve essere identica su sito e profili social.
- Primi backlink naturali: directory web design IT, gallery di ispirazione (AQuest insegna: i lavori in gallery portano autorità), eventuali ospitate/podcast di settore.

### 5.4 — Misurazione (post go-live)
- GA4 installato fresco.
- Google Search Console: registrare proprietà, inviare `sitemap.xml`, monitorare le query brand + le 8-10 differenziazione/settoriali per le prime 6 settimane.
- Tracciare separatamente il traffico da AI assistant (referral ChatGPT/Perplexity) — segnale che la strategia GEO funziona.

---

## 6. Riepilogo priorità per Claude Code

1. JSON-LD `Organization`+`ProfessionalService` globale + `hasOfferCatalog` (sez. 2.1) — **obbligatorio**.
2. `FAQPage` schema sulla home (sez. 2.4) — **obbligatorio per AEO**.
3. `CreativeWork` su ogni case study (sez. 2.3).
4. Meta tag + hreflang IT↔EN su tutte le pagine (sez. 3).
5. `sitemap.xml` multilingua + `robots.txt` aperto, zero `noindex` in produzione (sez. 4).
6. HTML semantico + risposte autosufficienti nelle sezioni chiave (sez. 5.2).
7. Case study come unico content engine, no blog (sez. 5.1).

---

*SEO.md — Chat 2 CONTENUTI. Volumi keyword da validare con tool reale prima del go-live. `aggregateRating` solo con recensioni vere.*
