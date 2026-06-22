export default function About() {
  return (
    <div id="about" className="section alt">
      <div className="section-inner">
        <div className="section-label">Om mig</div>
        <h2 className="section-title">Fullstackutvecklare med inriktning på IT-säkerhet och AI</h2>

        <p style={{ fontSize: '15px', color: '#C8D0DC', lineHeight: '1.8', marginBottom: '36px' }}>
          Jag är en systemutvecklare som brinner för att bygga moderna, säkra och användarvänliga
          webbapplikationer. Min bakgrund har gett mig en djup förståelse för projektledning, tydlig
          kommunikation och vikten av att alltid ha slutanvändaren i fokus. Jag skapar inte bara kod
          som fungerar tekniskt – jag bygger system som är säkra, intuitiva och skapar verkligt värde.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h3>🔐 Säkerhet & Compliance (GRC)</h3>
            <p>
              Jag förstår vikten av att bygga system som följer lagar och regelverk. Med min vana vid
              myndighetskontakt och dokumentation, kombinerat med min utbildning inom{' '}
              <em>Dataskydd inom IT och AI</em> samt{' '}
              <em>Ledning och samordning av cybersäkerhet</em>, bygger jag alltid med
              "security first" som grundprincip.
            </p>
          </div>
          <div className="about-card">
            <h3>🤖 AI-utveckling & Projektledning</h3>
            <p>
              Jag kombinerar min tekniska utvecklarroll med en stark förmåga att driva processer
              framåt. Genom kompetens inom{' '}
              <em>Tillämpad AI för systemutveckling och test</em> och{' '}
              <em>Att leda AI-projekt – från strategi till leverans</em> är jag rustad för att ta
              komplexa initiativ hela vägen från idé till lanserad produkt.
            </p>
          </div>
          <div className="about-card">
            <h3>⚡ Agilt Arbetssätt & Struktur</h3>
            <p>
              Jag är extremt strukturerad, van att ta eget ansvar och skicklig på att bryta ner
              stora mål till konkreta, genomförbara steg. Jag är en kommunikativ lagspelare som
              kan översätta komplexa tekniska krav till tydligt klarspråk.
            </p>
          </div>
          <div className="about-card">
            <h3>🎯 UX & Användarfokus</h3>
            <p>
              Med en lång historik av service och rådgivning har jag tränat upp en unik förmåga
              att förstå olika människors behov. Denna insikt tar jag med mig in i
              frontend-utvecklingen för att skapa gränssnitt som är tillgängliga och logiska för alla.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
