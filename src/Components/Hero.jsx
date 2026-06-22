import profilePhoto from "../assets/sima.jpg"

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-badge">Söker LIA 2027 · v. 11–24 & v. 33–43</div>
          <h1 className="hero-name"><span>Sima</span><br/>Soolind</h1>
          <div className="hero-subtitle">Fullstackutvecklare · IT-säkerhet & AI</div>
          <p className="hero-desc">
            Jag bygger moderna, säkra webbapplikationer och söker just nu en LIA-plats för 2027 (v. 11–24 samt v. 33–43). Kostnadsfritt för företaget — fullt försäkrad via skolan.
          </p>
          <a href="#projects" className="btn-gold">Se mina projekt →</a>
        </div>
        <div className="photo-wrap">
          <div className="photo-ring">
            <div className="photo-circle">
              <img src={profilePhoto} alt="Sima Soolind" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
