# Portfolio – Sima Soolind

Personlig portfolio-webbplats byggd i React och Vite. Presenterar mig,
min kompetens, mina projekt och information till företag inför LIA
2027.

## Projektstruktur

Appen är byggd som en enda sida (single page) med sex sektioner som
renderas efter varandra i `App.jsx`: Hero, Om mig, Kompetens, Projekt,
LIA och Kontakt. Varje sektion är en egen komponent i
`src/Components/`. Scroll-animationer sköts av GSAP med ScrollTrigger,
och menyn (`Nav.jsx`) håller reda på vilken sektion som är synlig just
nu med webbläsarens IntersectionObserver, utan något extra bibliotek.

## Installation

Kräver Node.js (18 eller senare).

```bash
npm install
npm run dev
```

Appen körs då på `http://localhost:5173`.

Övriga kommandon:

```bash
npm run build     # bygger en produktionsversion i /dist
npm run preview   # förhandsvisar produktionsbygget lokalt
npm run lint      # kör ESLint
```

## Färgpalett — "Protokollet"

Designsystemet bygger på fem färger, definierade som CSS-variabler i
`src/styles.css`.

| Namn   | Hex       | Roll                          |
|--------|-----------|--------------------------------|
| Papper | `#EFEAE0` | Bakgrund                       |
| Bläck  | `#1E2420` | Brödtext, rubriker              |
| Petrol | `#1F5C56` | Sekundär accent — länkar, kort  |
| Ockra  | `#B9832E` | Huvudaccent — knappar, ikoner   |
| Sand   | `#C9BFA9` | Struktur — ramar, linjer, kort  |

Typsnitt: **Inter** för rubriker och brödtext, **Fira Code** för
etiketter, badges och kod-liknande text (till exempel tech-stack-taggar
och menyns logotyp).

## Komponenter

| Fil | Beskrivning |
|---|---|
| `App.jsx` | Sätter ihop sidan, registrerar GSAP-animationerna |
| `Nav.jsx` | Fast meny med scroll-spy — markerar aktiv sektion |
| `Hero.jsx` | Namn, roll, kort pitch och profilbild |
| `About.jsx` | Bio-text och fyra kompetenskort med Feather-ikoner |
| `Skills.jsx` | Tech-stack grupperad i kategorier, med varumärkeslogotyper |
| `Projects.jsx` | Tre projektkort med beskrivning, teknikstack och länkar |
| `Lia.jsx` | LIA-perioder och information till arbetsgivare |
| `Contact.jsx` | Kontaktruta med länkar till LinkedIn och GitHub |
| `Footer.jsx` | Sidfot med copyright |

## Filstruktur

```
portfolio-LIA/
├── index.html
├── package.json
├── README.md
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css          # globala grundstilar (reset, bastypsnitt)
    ├── styles.css          # hela designsystemet — färgvariabler, layout, komponenter
    ├── assets/             # profilbilder
    └── Components/
        ├── Nav.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Skills.jsx
        ├── Projects.jsx
        ├── Lia.jsx
        ├── Contact.jsx
        └── Footer.jsx
```
