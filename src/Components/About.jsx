import { FiShield, FiCpu, FiLayers, FiUsers } from "react-icons/fi"

export default function About() {
  return (
    <div id="about" className="section">
      <div className="section-inner">
        <div className="section-label">Om mig</div>
        <h2 className="section-title">Vem jag är</h2>

        <p className="about-intro">
          Jag heter Sima Soolind. Jag studerar till fullstackutvecklare på Företagsuniversitetet.
          <br /><br />
          Innan dess jobbade jag 15 år med människor. Som undersköterska. Som frisör i sex år.
          Sedan som lärare på vårdutbildningen på Arena Utbildning i sex år. Där höll jag i
          undervisning, planering och kontakt med myndigheter och specialpedagoger.
          <br /><br />
          Jag ville ha en trygg framtid, med ett yrke jag kan växa i. Det var därför jag bytte
          till utveckling.
          <br /><br />
          Jag är van att bryta ner svåra saker i mindre steg. Det gjorde jag som lärare. Nu gör
          jag det när jag lär mig kod och säkerhet.
          <br /><br />
          <strong>Jag har både den sociala sidan och den tekniska sidan.</strong> Jag kan prata
          med kunder och myndigheter, förklara svårt på ett enkelt sätt, och skriva säker kod.
          Det är min styrka.
        </p>

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
