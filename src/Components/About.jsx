import { FiShield, FiCpu, FiLayers, FiUsers } from "react-icons/fi"
import portratt from "../assets/sima-portratt-sv.webp"

// Min resa som tidslinje: vad jag har arbetat med och vad jag tar med mig in i utvecklingen.
// Sista steget (current) är där jag är nu och markeras i vinrött.
const journey = [
  {
    title: "Undersköterska",
    time: "ca 6 år",
    text: "Omsorg och vård varje dag. Här lärde jag mig att se och möta varje människas behov.",
  },
  {
    title: "Frisör",
    time: "6 år",
    text: "Lyhörd för vad kunden vill ha, och trygg nog att ge egna råd. Kunden står alltid i centrum.",
  },
  {
    title: "Lärare på vårdutbildningen",
    place: "Arena Utbildning",
    time: "6 år",
    text: "Jag anpassade undervisningen efter varje deltagare och höll samtidigt kursens kunskapskrav, så att alla kunde klara sina kurser. Planering, kartläggning och samordning med alla inblandade.",
  },
  {
    title: "Fullstackutvecklare med säkerhetsinriktning",
    place: "Företagsuniversitetet",
    time: "2025–",
    text: "Samma sätt att tänka, nu i kod: förstå behovet, bryt ner problemet och bygg säkert från start.",
    current: true,
  },
]

export default function About() {
  return (
    <div id="about" className="section">
      <div className="section-inner">
        <div className="section-label">Om mig</div>
        <h2 className="section-title">Från människor till kod</h2>

        {/* Text och porträtt sida vid sida på större skärmar, bilden under texten på mobil */}
        <div className="about-top">
        <p className="about-intro">
          Jag heter Sima Soolind. Jag studerar till fullstackutvecklare på Företagsuniversitetet.
          <br /><br />
          Jag bytte till utveckling för att jag tycker om att skapa lösningar på problem. IT är
          ett brett område. Här kan jag alltid utvecklas, vara med i den tekniska utvecklingen
          och påverka hur säkra systemen blir.
          <br /><br />
          Jag är van att bryta ner svåra saker i mindre steg. Det gjorde jag som lärare. Nu gör
          jag det när jag lär mig kod och säkerhet.
          <br /><br />
          <strong>Jag har både den sociala sidan och den tekniska sidan.</strong> Jag kan prata
          med kunder och myndigheter, förklara svårt på ett enkelt sätt, och skriva säker kod.
          Det är min styrka.
        </p>
        <figure className="about-photo">
          <img src={portratt} alt="Porträtt av Sima Soolind i svartvitt" width="800" height="1000" loading="lazy" />
        </figure>
        </div>

        {/* Tidslinjen är en ordnad lista (ol), så att skärmläsare läser upp stegen i ordning */}
        <h3 className="journey-heading">Min resa</h3>
        <ol className="journey">
          {journey.map((step) => (
            <li key={step.title} className={`journey-step${step.current ? " journey-step--current" : ""}`}>
              <span className="journey-dot" aria-hidden="true" />
              <p className="journey-time">{step.time}</p>
              <h4 className="journey-title">{step.title}</h4>
              {step.place && <p className="journey-place">{step.place}</p>}
              <p className="journey-text">{step.text}</p>
            </li>
          ))}
        </ol>

        <div className="about-grid">
          <div className="about-card">
            <FiShield className="about-icon" />

            <h3>Säkerhet & Compliance (GRC)</h3>
            <p>
              Jag har läst <em>Dataskydd inom IT och AI</em> och <em>Ledning och samordning av
              cybersäkerhet</em>. Från mina år med myndighetskontakt är jag van vid dokumentation
              och regelverk. Jag bygger med säkerhet som grund, inte som ett sista steg.
            </p>
          </div>
          <div className="about-card">
            <FiCpu className="about-icon" />

            <h3>AI-utveckling & Projektledning</h3>
            <p>
              Jag kombinerar utveckling med <em>Tillämpad AI för systemutveckling och test</em> och
              <em> Att leda AI-projekt – från strategi till leverans</em>. Jag är van att driva ett
              arbete från idé till färdig lösning.
            </p>
          </div>
          <div className="about-card">
            <FiLayers className="about-icon" />

            <h3>Struktur & Ansvar</h3>
            <p>
              Som lärare planerade jag kurser och samordnade med flera parter samtidigt. Jag är
              van att ta eget ansvar och att förklara svåra saker enkelt.
            </p>
          </div>
          <div className="about-card">
            <FiUsers className="about-icon" />

            <h3>Service & Användarfokus</h3>
            <p>
              Från vård och frisöryrket har jag lång erfarenhet av att lyssna på vad någon faktiskt
              behöver. Jag tar med mig det när jag bygger gränssnitt som ska vara enkla att använda.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
