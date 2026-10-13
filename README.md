# Portfolio – Sima Soolind

Personlig portfolio-webbplats byggd i React och Vite. Presenterar mig,
min kompetens, mina projekt och information till företag inför LIA
2027. Sidan finns på svenska och engelska.

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

## Säkerhet och tillgänglighet

- **Inga extra paket för språkväxlingen.** Färre paket betyder mindre
  kod från andra som kan innehålla fel eller skadlig kod.
- **Sparat språkval kontrolleras.** Värdet i `localStorage` kan ändras
  av vem som helst i webbläsaren, så bara `sv` och `en` godkänns.
  Allt annat ger svenska.
- **Externa länkar** öppnas med `rel="noreferrer"`, så att den nya
  fliken inte kan styra sidan.
- **Bilder** är rensade från dold information (EXIF), till exempel
  kameramodell och plats.
- **Repona för ParishHub och Bibel-appen är privata** och visas vid
  förfrågan.
- **WCAG:** tydlig fokusmarkering, `lang` på sidan, `aria-current` på
  aktiv menylänk, alt-text på alla bilder på båda språken, klickytor
  på minst 44 × 44 px och animationer som stängs av vid minskad rörelse.

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

Varm vit, nästan svart och vinrött (samma vinröda som ParishHub).
Färgerna är CSS-variabler i `src/index.css`.

| Variabel | Hex | Roll |
|---|---|---|
| `--bg` | `#FBF9F6` | Bakgrund |
| `--surface` | `#F3F0EB` | Bildytor och rutor |
| `--ink` | `#161616` | Brödtext och rubriker |
| `--muted` | `#5C5C5C` | Dämpad text |
| `--sand` | `#E9E4DC` | Ramar och toningar |
| `--rule` | `#D9D3CA` | Hårfina linjer |
| `--accent` | `#7A1C2A` | Vinrött – knappar, ikoner, streck och aktiv länk |
| `--accent-dark` | `#5E1520` | Vinrött när musen hålls över en knapp |

Kontrast mot bakgrunden: brödtext 17,2:1, dämpad text 6,4:1 och
vinrött 9,9:1 (WCAG kräver 4,5:1).

Typsnitt: **Raleway** för rubriker och loggan i menyn, **Inter** för
brödtext och **Fira Code** för etiketter och kod.

## Komponenter

| Fil | Beskrivning |
|---|---|
| `App.jsx` | Sätter ihop sidan, registrerar GSAP-animationerna |
| `Nav.jsx` | Fast meny med scroll-spy och språkknapp SV/EN |
| `Hero.jsx` | Namn, roll, kort pitch och profilbild med sned mörk panel |
| `About.jsx` | Bio-text, tidslinjen "Min resa" och fyra kompetenskort |
| `Skills.jsx` | Tekniker med ikoner och kurser, grupperade i kategorier |
| `Projects.jsx` | Tre projekt med beskrivning, skärmbilder, kodexempel och länkar |
| `Lia.jsx` | LIA-perioder och information till arbetsgivare |
| `Contact.jsx` | Kontaktdel med länkar till LinkedIn och GitHub och ett svartvitt porträtt |
| `Footer.jsx` | Sidfot med copyright och ikonlänkar |

## Filstruktur

```
portfolio-LIA/
├── index.html
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
