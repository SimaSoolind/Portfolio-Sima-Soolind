// All text på sidan, på svenska och engelska.
// Varje komponent har en egen del (nav, hero ...). Fler delar läggs till en i taget.
export const texts = {
  sv: {
    nav: {
      sections: {
        about: 'Om mig',
        skills: 'Kompetens',
        projects: 'Projekt',
        lia: 'LIA',
        contact: 'Kontakt',
      },
      menu: 'Meny',
      switchLabel: 'Byt språk till engelska',
    },
    hero: {
      badge: 'Fullstackutvecklare · IT-säkerhet',
      greeting: 'Hej, mitt namn är',
      desc: 'Jag bygger moderna, säkra webbapplikationer. Innan jag började utveckla arbetade jag 16 år med människor som undersköterska, frisör och lärare. Det är den kombinationen jag tar med mig in i tekniken.',
      meta: 'Söker LIA-plats 2027 · v. 11–24 & v. 33–43',
      projectsButton: 'Se mina projekt →',
      contactButton: 'Kontakta mig',
      photoAlt: 'Sima Soolind',
    },
    about: {
      label: 'Om mig',
      title: 'Från människor till kod',
      intro: [
        'Jag heter Sima Soolind. Jag studerar till fullstackutvecklare på Företagsuniversitetet.',
        'Jag bytte till utveckling för att jag tycker om att skapa lösningar på problem. IT är ett brett område. Här kan jag alltid utvecklas, vara med i den tekniska utvecklingen och påverka hur säkra systemen blir.',
        'Jag är van att bryta ner svåra saker i mindre steg. Det gjorde jag som lärare. Nu gör jag det när jag lär mig kod och säkerhet.',
      ],
      strengthBold: 'Jag har både den sociala sidan och den tekniska sidan.',
      strengthRest: 'Jag kan prata med kunder och myndigheter, förklara svårt på ett enkelt sätt, och skriva säker kod. Det är min styrka.',
      journeyHeading: 'Min resa',
      // Sista steget (current) är där jag är nu och markeras i vinrött.
      journey: [
        { title: 'Undersköterska', time: '4 år', text: 'Omsorg och vård varje dag. Här lärde jag mig att se och möta varje människas behov.' },
        { title: 'Frisör', time: '6 år', text: 'Lyhörd för vad kunden vill ha, och trygg nog att ge egna råd. Kunden står alltid i centrum.' },
        { title: 'Lärare på vårdutbildningen', place: 'Arena Utbildning', time: '6 år', text: 'Jag anpassade undervisningen efter varje deltagare och höll samtidigt kursens kunskapskrav, så att alla kunde klara sina kurser. Planering, kartläggning och samordning med alla inblandade.' },
        { title: 'Fullstackutvecklare med säkerhetsinriktning', place: 'Företagsuniversitetet', time: '2025–', text: 'Samma sätt att tänka, nu i kod: förstå behovet, bryt ner problemet och bygg säkert från start.', current: true },
      ],
      // Korten: text är en lista där { em: '...' } visas kursivt (kursnamn).
      cards: [
        { icon: 'shield', title: 'Säkerhet & Compliance (GRC)', text: ['Jag har läst ', { em: 'Dataskydd inom IT och AI' }, ' och ', { em: 'Ledning och samordning av cybersäkerhet' }, '. Från mina år med myndighetskontakt är jag van vid dokumentation och regelverk. Jag bygger med säkerhet som grund, inte som ett sista steg.'] },
        { icon: 'cpu', title: 'AI-utveckling & Projektledning', text: ['Jag kombinerar utveckling med ', { em: 'Tillämpad AI för systemutveckling och test' }, ' och ', { em: 'Att leda AI-projekt – från strategi till leverans' }, '. Jag är van att driva ett arbete från idé till färdig lösning.'] },
        { icon: 'layers', title: 'Struktur & Ansvar', text: ['Som lärare planerade jag kurser och samordnade med flera parter samtidigt. Jag är van att ta eget ansvar och att förklara svåra saker enkelt.'] },
        { icon: 'users', title: 'Service & Användarfokus', text: ['Från vård och frisöryrket har jag lång erfarenhet av att lyssna på vad någon faktiskt behöver. Jag tar med mig det när jag bygger gränssnitt som ska vara enkla att använda.'] },
      ],
    },
    skills: {
      "label": "Kompetens",
      "title": "Vad jag arbetar med",
      "usingNow": "Använder nu",
      "learningNow": "Lär mig nu",
      "security": "Säkerhet och dataskydd",
      "work": "Arbetssätt",
      "learningCourses": [
        "Säker applikationslivscykel",
        "Tillämpad AI för systemutveckling och test",
        "AI-integration via egen backend (AI-förklaringar efter läsprofil, kopplas på när backend är igång)",
        "REST API:er och JWT (i backendkursen)",
        "Java (januari 2027)"
      ],
      "securityCourses": [
        "Cybersäkerhet",
        "GRC – ledning och samordning av cybersäkerhet",
        "Dataskydd inom IT och AI"
      ],
      "workCourses": [
        "Agila metoder",
        "Affärsmannaskap"
      ]
    },
    projects: {
      "label": "Projekt",
      "title": "Det jag har byggt",
      "statusDev": "Under utveckling — levereras januari 2027",
      "statusLive": "Publicerad",
      "privateRepo": "Privat repo – visas vid förfrågan",
      "viewLive": "Se live",
      "codeLabel": "Kodexempel från",
      "challenge": "Utmaning:",
      "solution": "Lösning:",
      "result": "Resultat:",
      "showCode": "Visa koden",
      "hideCode": "Dölj koden",
      "items": {
        "parishhub": {
          "title": "ParishHub",
          "desc": "Webbapp för församlingar, byggd för S:t Georgs kyrka. Prästen planerar gudstjänster och medlemmar. Under gudstjänsten visas liturgin på projektorn på koptiska, arabiska och svenska.",
          "bullets": [
            {
              "label": "AI-tolkning live",
              "text": "Prästens predikan på arabiska visas som svensk text på projektorn, och tvärtom. Riktningen låses medan tolkningen pågår."
            },
            {
              "label": "Säkerhet & GDPR",
              "text": "Rollbaserad behörighet (RBAC), validering av all data med Zod och automatisk radering av tolkad text. Hotmodell med STRIDE."
            },
            {
              "label": "Kvalitet",
              "text": "959 automatiska tester och CI på GitHub som kör typkontroll, lint, tester och npm audit."
            },
            {
              "label": "Nästa steg",
              "text": "Backend med Node.js, PostgreSQL och Prisma, med inloggning via JWT och bcrypt."
            }
          ],
          "images": [
            {
              "alt": "Projektorn visar en rad ur liturgin på koptiska, arabiska och svenska",
              "caption": "Projektorn: liturgin på tre språk samtidigt"
            },
            {
              "alt": "Teknikerns vy med raden som visas nu, nästa rad och knappar för att byta rad",
              "caption": "Styr skärmen: teknikern byter rad med knapp eller klickare"
            },
            {
              "alt": "Ruta där prästen väljer om predikan ska delas, sparas privat eller raderas",
              "caption": "Prästen bestämmer om predikan sparas (GDPR)"
            },
            {
              "alt": "Kontaktlista där telefonnummer och e-post är delvis dolda",
              "caption": "Kontaktuppgifter är delvis dolda och visningen loggas"
            }
          ],
          "codes": [
            {
              "title": "Bara granskad liturgi visas",
              "challenge": "Svenska översättningar som ännu inte är granskade får aldrig visas på projektorn.",
              "solution": "En ren funktion utan React som alla vyer med liturgi går igenom. Den tar bort ogranskad text utan att ändra originalet.",
              "result": "Regeln finns på ett ställe och är testad. Ändras regeln behöver bara en funktion ändras."
            },
            {
              "title": "Säkra flikar på prästens startsida",
              "challenge": "Varje flik har en egen adress, och adressen är text som vem som helst kan ändra.",
              "solution": "Flikarna står i en lista som typen byggs från. En type guard kontrollerar adressen innan den används, i stället för \"as\".",
              "result": "En påhittad flik leder tillbaka till Översikt, och TypeScript klagar om en flik saknar innehåll."
            }
          ]
        },
        "bibel-appen": {
          "title": "Bibel-appen",
          "desc": "Digital bibel och bönbok på svenska och arabiska för svensk-arabisktalande koptisk-ortodoxa församlingar. Påbörjad i kursen JavaScript Advanced och React och under fortsatt utveckling. Gratis och kräver ingen inloggning.",
          "bullets": [
            {
              "label": "Innehåll",
              "text": "Hela Bibeln på svenska och arabiska inklusive apokryferna, Agbeya, Liturgiboken och Stilla veckan med ljud, och dagens läsningar med koptiskt datum."
            },
            {
              "label": "Kyrkofädernas tolkningar",
              "text": "Kapitel för kapitel, tre verk att jämföra. Översättning till svenska pågår, Matteusevangeliet är klart."
            },
            {
              "label": "Tillgänglighet",
              "text": "Böner och liturgi går att lyssna på, textstorleken går att ändra och arabiskan visas höger-till-vänster. Knappar är minst 44 pixlar och animationer stängs av vid minskad rörelse."
            },
            {
              "label": "AI och säkerhet",
              "text": "Gemini översätter tolkningarna till lättläst svenska. AI-förklaringar efter profil är avstängda tills de flyttas till en egen server, så att API-nyckeln aldrig ligger i webbläsaren. Minsta möjliga databasbehörighet och GDPR artikel 9."
            }
          ],
          "images": [
            {
              "alt": "Startsidan med snabbval till Dagens läsningar, Agbeya, Stilla veckan, Liturgiboken och Katameros",
              "caption": "Startsidan med snabbval"
            },
            {
              "alt": "Matteus kapitel 4 med knapp till kyrkofädernas tolkning och språkval",
              "caption": "Bibeltexten med länk till tolkningen och språkval"
            },
            {
              "alt": "Kyrkofädernas tolkning av Matteus 4 med tre verk att jämföra",
              "caption": "Kyrkofädernas tolkningar, tre verk att jämföra"
            },
            {
              "alt": "Liturgiboken med de olika liturgierna",
              "caption": "Liturgiboken"
            }
          ],
          "codes": [
            {
              "title": "Rätt bibelreferens",
              "challenge": "En bugg gjorde att 395 dagars läsningar aldrig visades, utan något felmeddelande.",
              "solution": "Referensen byggs nu direkt ur rådata.",
              "result": "Tester ser till att felet inte kommer tillbaka."
            }
          ]
        },
        "sm-bygg": {
          "title": "SM-Bygg",
          "desc": "Företagswebbplats för ett byggföretag med startsida, tjänsteöversikt, projektgalleri och offertformulär.",
          "bullets": [
            {
              "label": "Komplett webbplats",
              "text": "Startsida, tjänster, projektgalleri, om oss och ett funktionellt offertformulär med validering."
            },
            {
              "label": "Ren HTML/CSS/JS",
              "text": "Byggd utan ramverk — visar förståelse för webbutvecklingens grunder."
            }
          ],
          "images": []
        }
      }
    },
    lia: {
      "label": "LIA & examensarbete",
      "title": "Information för företag",
      "periodsHeading": "Perioder",
      "periods": [
        "LIA 1 — v. 11–24, 2027 (50 YH-p)",
        "LIA 2 — v. 33–43, 2027 (40 YH-p)",
        "Examensarbete — v. 44–51, 2027 (30 YH-p)"
      ],
      "employerHeading": "För er som arbetsgivare",
      "employer": [
        "Helt kostnadsfritt",
        "Fullt försäkrad via skolan",
        "Examensarbetet kan förläggas hos er"
      ]
    },
    contact: {
      "label": "Kontakt",
      "title": "Låt oss prata framtid",
      "text": "Är du nyfiken på vad jag kan bidra med? Jag söker LIA-plats från vecka 11, 2027 — kostnadsfritt för er och fullt försäkrad via skolan. Hör gärna av dig via LinkedIn.",
      "photoAlt": "Porträtt av Sima Soolind i svartvitt"
    },
  },
  en: {
    nav: {
      sections: {
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        lia: 'Internship',
        contact: 'Contact',
      },
      menu: 'Menu',
      switchLabel: 'Switch to Swedish',
    },
    hero: {
      badge: 'Full-stack developer · IT security',
      greeting: "Hi, I'm",
      desc: 'I build modern, secure web applications. Before I started developing, I spent 16 years working with people — as an assistant nurse, a hairdresser and a teacher. That combination is what I bring into tech.',
      meta: 'Looking for an internship (LIA) in 2027 · weeks 11–24 & 33–43',
      projectsButton: 'See my projects →',
      contactButton: 'Contact me',
      photoAlt: 'Sima Soolind',
    },
    about: {
      label: 'About me',
      title: 'From people to code',
      intro: [
        "My name is Sima Soolind. I'm studying to become a full-stack developer at Företagsuniversitetet.",
        'I moved into development because I enjoy creating solutions to problems. IT is a broad field. Here I can keep growing, be part of the technical development and influence how secure systems become.',
        "I'm used to breaking difficult things down into smaller steps. I did that as a teacher. Now I do it when I learn code and security.",
      ],
      strengthBold: 'I have both the social side and the technical side.',
      strengthRest: 'I can talk to customers and public authorities, explain complex things in a simple way, and write secure code. That is my strength.',
      journeyHeading: 'My journey',
      journey: [
        { title: 'Assistant nurse', time: '4 years', text: 'Care and nursing every day. This is where I learned to see and meet every person\'s needs.' },
        { title: 'Hairdresser', time: '6 years', text: 'Attentive to what the customer wants, and confident enough to give my own advice. The customer always comes first.' },
        { title: 'Teacher in health and social care', place: 'Arena Utbildning', time: '6 years', text: 'I adapted my teaching to each participant while meeting the course requirements, so that everyone could pass their courses. Planning, needs assessment and coordination with everyone involved.' },
        { title: 'Full-stack developer specialising in security', place: 'Företagsuniversitetet', time: '2025–', text: 'The same way of thinking, now in code: understand the need, break down the problem and build securely from the start.', current: true },
      ],
      cards: [
        { icon: 'shield', title: 'Security & Compliance (GRC)', text: ['I have studied ', { em: 'Data Protection in IT and AI' }, ' and ', { em: 'Cybersecurity Management and Coordination' }, '. From my years of working with public authorities, I am used to documentation and regulations. I build with security as the foundation, not as a final step.'] },
        { icon: 'cpu', title: 'AI Development & Project Management', text: ['I combine development with ', { em: 'Applied AI for Systems Development and Testing' }, ' and ', { em: 'Leading AI Projects – from Strategy to Delivery' }, '. I am used to driving work from idea to finished solution.'] },
        { icon: 'layers', title: 'Structure & Responsibility', text: ['As a teacher, I planned courses and coordinated with several parties at the same time. I am used to taking responsibility and explaining difficult things simply.'] },
        { icon: 'users', title: 'Service & User Focus', text: ['From healthcare and hairdressing, I have long experience of listening to what someone actually needs. I bring that with me when I build interfaces that should be easy to use.'] },
      ],
    },
    skills: {
      "label": "Skills",
      "title": "What I work with",
      "usingNow": "Using now",
      "learningNow": "Learning now",
      "security": "Security and data protection",
      "work": "Ways of working",
      "learningCourses": [
        "Secure Application Lifecycle",
        "Applied AI for Systems Development and Testing",
        "AI integration via my own backend (AI explanations based on reading profile, connected once the backend is running)",
        "REST APIs and JWT (in the backend course)",
        "Java (January 2027)"
      ],
      "securityCourses": [
        "Cybersecurity",
        "GRC – Cybersecurity Management and Coordination",
        "Data Protection in IT and AI"
      ],
      "workCourses": [
        "Agile Methods",
        "Business Acumen"
      ]
    },
    projects: {
      "label": "Projects",
      "title": "What I have built",
      "statusDev": "In development — delivery January 2027",
      "statusLive": "Live",
      "privateRepo": "Private repo – available on request",
      "viewLive": "View live",
      "codeLabel": "Code example from",
      "challenge": "Challenge:",
      "solution": "Solution:",
      "result": "Result:",
      "showCode": "Show the code",
      "hideCode": "Hide the code",
      "items": {
        "parishhub": {
          "title": "ParishHub",
          "desc": "Web app for parishes, built for St. George's Church. The priest manages services and members. During the service, the liturgy is shown on the projector in Coptic, Arabic and Swedish.",
          "bullets": [
            {
              "label": "Live AI interpretation",
              "text": "The priest's sermon in Arabic is shown as Swedish text on the projector, and vice versa. The direction is locked while the interpretation is running."
            },
            {
              "label": "Security & GDPR",
              "text": "Role-based access control (RBAC), validation of all data with Zod and automatic deletion of interpreted text. Threat model with STRIDE."
            },
            {
              "label": "Quality",
              "text": "959 automated tests and CI on GitHub running type checking, linting, tests and npm audit."
            },
            {
              "label": "Next step",
              "text": "Backend with Node.js, PostgreSQL and Prisma, with login via JWT and bcrypt."
            }
          ],
          "images": [
            {
              "alt": "The projector shows a line of the liturgy in Coptic, Arabic and Swedish",
              "caption": "The projector: the liturgy in three languages at once"
            },
            {
              "alt": "The technician's view with the current line, the next line and buttons to change line",
              "caption": "Control screen: the technician changes line with a button or clicker"
            },
            {
              "alt": "Dialog where the priest chooses whether the sermon is shared, saved privately or deleted",
              "caption": "The priest decides whether the sermon is saved (GDPR)"
            },
            {
              "alt": "Contact list where phone numbers and email addresses are partly hidden",
              "caption": "Contact details are partly hidden and viewing is logged"
            }
          ],
          "codes": [
            {
              "title": "Only reviewed liturgy is shown",
              "challenge": "Swedish translations that have not been reviewed yet must never be shown on the projector.",
              "solution": "A pure function without React that every view showing liturgy goes through. It removes unreviewed text without changing the original.",
              "result": "The rule lives in one place and is tested. If the rule changes, only one function needs to change."
            },
            {
              "title": "Safe tabs on the priest's home page",
              "challenge": "Each tab has its own address, and the address is text that anyone can change.",
              "solution": "The tabs are listed once and the type is built from that list. A type guard checks the address before it is used, instead of \"as\".",
              "result": "A made-up tab leads back to Overview, and TypeScript complains if a tab has no content."
            }
          ]
        },
        "bibel-appen": {
          "title": "Bible app",
          "desc": "Digital Bible and prayer book in Swedish and Arabic for Swedish-Arabic-speaking Coptic Orthodox parishes. Started in the course JavaScript Advanced and React and still in development. Free and requires no login.",
          "bullets": [
            {
              "label": "Content",
              "text": "The whole Bible in Swedish and Arabic including the Apocrypha, the Agbeya, the Liturgy book and Holy Week with audio, and the day's readings with the Coptic date."
            },
            {
              "label": "Church Fathers' interpretations",
              "text": "Chapter by chapter, three works to compare. Translation into Swedish is in progress; the Gospel of Matthew is complete."
            },
            {
              "label": "Accessibility",
              "text": "Prayers and liturgy can be listened to, the text size can be changed and Arabic is shown right-to-left. Buttons are at least 44 pixels and animations are turned off for reduced motion."
            },
            {
              "label": "AI and security",
              "text": "Gemini translates the interpretations into easy-to-read Swedish. AI explanations based on profile are switched off until they are moved to a separate server, so that the API key is never in the browser. Least-privilege database access and GDPR Article 9."
            }
          ],
          "images": [
            {
              "alt": "The home page with shortcuts to the day's readings, Agbeya, Holy Week, the Liturgy book and Katameros",
              "caption": "Home page with shortcuts"
            },
            {
              "alt": "Matthew chapter 4 with a button to the Church Fathers' interpretation and language selection",
              "caption": "The Bible text with a link to the interpretation and language selection"
            },
            {
              "alt": "The Church Fathers' interpretation of Matthew 4 with three works to compare",
              "caption": "The Church Fathers' interpretations, three works to compare"
            },
            {
              "alt": "The Liturgy book with the different liturgies",
              "caption": "The Liturgy book"
            }
          ],
          "codes": [
            {
              "title": "Correct Bible reference",
              "challenge": "A bug meant that 395 days of readings were never shown, without any error message.",
              "solution": "The reference is now built directly from the raw data.",
              "result": "Tests make sure the bug does not come back."
            }
          ]
        },
        "sm-bygg": {
          "title": "SM-Bygg",
          "desc": "Company website for a construction company with a home page, service overview, project gallery and quote form.",
          "bullets": [
            {
              "label": "Complete website",
              "text": "Home page, services, project gallery, about us and a working quote form with validation."
            },
            {
              "label": "Plain HTML/CSS/JS",
              "text": "Built without a framework — shows an understanding of the fundamentals of web development."
            }
          ],
          "images": []
        }
      }
    },
    lia: {
      "label": "Internship (LIA) & degree project",
      "title": "Information for companies",
      "periodsHeading": "Periods",
      "periods": [
        "LIA 1 — weeks 11–24, 2027 (50 YH credits)",
        "LIA 2 — weeks 33–43, 2027 (40 YH credits)",
        "Degree project — weeks 44–51, 2027 (30 YH credits)"
      ],
      "employerHeading": "For you as an employer",
      "employer": [
        "Completely free of charge",
        "Fully insured through the school",
        "The degree project can be carried out at your company"
      ]
    },
    contact: {
      "label": "Contact",
      "title": "Let's talk about the future",
      "text": "Curious about what I can contribute? I'm looking for an internship (LIA) from week 11, 2027 — free of charge for you and fully insured through the school. Feel free to reach out via LinkedIn.",
      "photoAlt": "Black and white portrait of Sima Soolind"
    },
  },
}
