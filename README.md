# Portfolio – Sima Soolind

Personlig portfolio-webbplats byggd i React och Vite. Presenterar mig,
min kompetens, mina projekt och information till företag inför LIA
2027. Sidan finns på svenska och engelska, och designen bygger på
Figma-mallen "Portfolio – Tomasz Gajda (Community)".

## Projektstruktur

Appen är byggd som en enda sida (single page) med sex sektioner som
renderas efter varandra i `App.jsx`: Hero, Om mig, Kompetens, Projekt,
LIA och Kontakt. Varje sektion är en egen komponent i
`src/Components/`. Scroll-animationer sköts av GSAP med ScrollTrigger,
och menyn (`Nav.jsx`) håller reda på vilken sektion som är synlig just
nu med webbläsarens IntersectionObserver, utan något extra bibliotek.

## Språkväxling (svenska/engelska)

All text på sidan ligger i `src/i18n/texts.js`, med en svensk och en
engelsk version. Knappen **SV | EN** i menyn byter språk direkt, utan
att sidan laddas om. Lösningen är egenbyggd, utan extra paket.

| Fil | Uppgift |
|---|---|
| `texts.js` | All text, uppdelad per sektion (nav, hero, about ...) |
| `LanguageContext.js` | Den delade platsen där valt språk ligger |
| `LanguageProvider.jsx` | Håller valt språk, sätter `lang` på `<html>` och sparar valet |
| `useLanguage.js` | Komponenterna hämtar språk och texter härifrån |

Ny text läggs till på båda språken i `texts.js`, med samma nyckel.

## Funktioner

- **Hero:** namnpresentation, roll och ikonlänkar till vänster, foto på
  en mörk yta med sned vinröd kant till höger. På mobil ligger namnet i
  en halvgenomskinlig ruta ovanpå fotot.
- **Mörkt band under hero:** LIA-period som etikett, rubrik, kort text
  och två knappar (Se mina projekt, Om mig).
- **Om mig:** ingress i större text, två stycken som syns direkt och
  resten bakom knappen **Läs mer / Visa mindre**. Tidslinjen "Min resa"
  visar arbetslivet steg för steg.
- **Kompetens:** tekniker som vinröda ikoner, kurser som kort med status
  (Klar, Pågår, Planerad eller datum) och VG-etikett, samt fyra kort
  under rubriken Styrkor.
- **Projekt:** beskrivning, skärmbilder och kodexempel som text.
  Skärmbilderna går att klicka på och förstora. Koden visas med knappen
  **Visa koden / Dölj koden**.
- **Kontakt:** länkar till LinkedIn och GitHub och ett svartvitt
  porträtt.

Alla visa/dölj-knappar använder HTML-elementet `<details>` och samma
CSS-klass, `toggle-details`. Förstoringen av bilder använder
HTML-elementet `<dialog>`.

## Säkerhet och tillgänglighet

- **Inga extra paket** för språkväxling, visa/dölj eller förstoring av
  bilder. Färre paket betyder mindre kod från andra som kan innehålla
  fel eller skadlig kod.
- **Sparat språkval kontrolleras.** Värdet i `localStorage` kan ändras
  av vem som helst i webbläsaren, så bara `sv` och `en` godkänns.
  Allt annat ger svenska.
- **Externa länkar** öppnas med `rel="noreferrer"`, så att den nya
  fliken inte kan styra sidan.
- **Ingen e-postadress** visas på sidan, så att robotar inte kan samla
  in den. Kontakt sker via LinkedIn.
- **Bilder** är rensade från dold information (EXIF), till exempel
  kameramodell och plats.
- **Repona för ParishHub och Bibel-appen är privata** och visas vid
  förfrågan.
- **WCAG:**
  - tydlig fokusmarkering och `lang` på sidan
  - `aria-current` på aktiv menylänk
  - alt-text på alla bilder, på båda språken
  - klickytor på minst 44 × 44 px
  - visa/dölj och förstoring fungerar med tangentbord och skärmläsare
  - förstoringsrutan låser fokus, stängs med Esc och lämnar tillbaka
    fokus till bilden
  - animationer stängs av vid minskad rörelse

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

Sidan publiceras på Netlify automatiskt vid `git push`.

## Färgpalett

Ljusgrå, nästan svart och vinrött (samma vinröda som ParishHub).
Färgerna är CSS-variabler i `src/index.css`.

| Variabel | Hex | Roll |
|---|---|---|
| `--bg` | `#ECEBE9` | Bakgrund (ljusgrå, som i Figma) |
| `--surface` | `#F3F0EB` | Bildytor och rutor |
| `--ink` | `#161616` | Brödtext, rubriker och mörka ytor |
| `--muted` | `#5C5C5C` | Dämpad text |
| `--sand` | `#E9E4DC` | Ramar och toningar |
| `--rule` | `#CFCAC2` | Hårfina linjer |
| `--accent` | `#7A1C2A` | Vinrött – knappar, ikoner, streck och aktiv länk |
| `--accent-dark` | `#5E1520` | Vinrött när musen hålls över en knapp |

Kontrast mot bakgrunden: brödtext 15,2:1, dämpad text 5,6:1 och
vinrött 8,7:1 (WCAG kräver 4,5:1).

## Typsnitt

| Typsnitt | Används till |
|---|---|
| **Raleway** | Namnet i hero, ingressen och alla rubriker (h1–h4) |
| **Montserrat** | Sektionsrubriker i ram, etiketter, knappar, meny och statusetiketter, i versaler med luft mellan bokstäverna |
| **Inter** | Brödtext |
| **Fira Code** | Kodexempel |

Typsnitten laddas från Google Fonts i `index.html`.

## Komponenter

| Fil | Beskrivning |
|---|---|
| `App.jsx` | Sätter ihop sidan, registrerar GSAP-animationerna |
| `Nav.jsx` | Fast meny med scroll-spy och språkknapp SV/EN |
| `Hero.jsx` | Namnpresentation, foto och det mörka bandet med LIA-etikett |
| `About.jsx` | Ingress, text med Läs mer och tidslinjen "Min resa" |
| `Skills.jsx` | Ikoner för tekniker, kurskort med status och kort med styrkor |
| `Projects.jsx` | Tre projekt med beskrivning, förstoringsbara skärmbilder, kodexempel och länkar |
| `Lia.jsx` | LIA-perioder och information till arbetsgivare |
| `Contact.jsx` | Kontaktdel med länkar till LinkedIn och GitHub och ett svartvitt porträtt |
| `Footer.jsx` | Sidfot med copyright och ikonlänkar |

## Filstruktur

```
portfolio-LIA/
├── index.html              # laddar typsnitten från Google Fonts
├── package.json
├── README.md
├── public/
│   └── projects/           # skärmbilder från ParishHub och Bibel-appen
└── src/
    ├── main.jsx            # startar appen inuti LanguageProvider
    ├── App.jsx
    ├── index.css           # grundstilar, färgvariabler och typsnitt
    ├── styles.css          # layout och komponenter
    ├── assets/             # profilbilder
    ├── i18n/
    │   ├── texts.js
    │   ├── LanguageContext.js
    │   ├── LanguageProvider.jsx
    │   └── useLanguage.js
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
