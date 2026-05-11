import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SumiLauncher from "@/components/SumiLauncher";
import RevealOnScroll from "@/components/RevealOnScroll";
import "./home.css";

export default function HomePage() {
  return (
    <>
      <RevealOnScroll />

      {/* ===================== HERO ===================== */}
      <div className="hero-wrap">
        <section className="hero">
          <SiteHeader currentPage="home" />

          {/* hero body */}
          <div className="hero-body">
            <div>
              <div className="eyebrow">AI-Native Healthcare</div>
              <h1 className="hero-title">
                <span className="row"><span>Redefining Care</span></span>
                <span className="row"><span>with <em>Intelligence</em></span></span>
              </h1>
            </div>

            <div className="hero-aside">
              <p>
                A new dimension of medicine — where AI-native tools support
                clinicians, watch over patients, and verify what matters at
                every stage of care.
              </p>
              <div className="hero-actions">
                <a href="#contact" className="pill pill-sage">Got any questions?</a>
                <a href="#contact" className="pill pill-lime">Contact us</a>
                <button className="circle-btn" aria-label="Scroll down">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 5 V19 M6 13 L12 19 L18 13" />
                  </svg>
                </button>
                <button className="circle-btn" aria-label="Top">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M12 19 V5 M6 11 L12 5 L18 11" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* bottom tile strip */}
          <div className="tiles">

            {/* TILE 1 — Barnard */}
            <div className="tile tile-barnard">
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="panel"></div>
              <div className="scan-line"></div>
              <div className="qr">
                <span></span><span style={{ background: "transparent" }}></span><span></span><span></span><span style={{ background: "transparent" }}></span>
                <span></span><span></span><span style={{ background: "transparent" }}></span><span></span><span></span>
                <span style={{ background: "transparent" }}></span><span></span><span></span><span></span><span style={{ background: "transparent" }}></span>
                <span></span><span style={{ background: "transparent" }}></span><span></span><span style={{ background: "transparent" }}></span><span></span>
                <span></span><span></span><span></span><span style={{ background: "transparent" }}></span><span></span>
              </div>
              <div className="dots">
                {Array.from({ length: 16 }).map((_, i) => <span key={i}></span>)}
              </div>
            </div>

            {/* TILE 2 — VRx */}
            <div className="tile tile-vrx">
              <div className="package"></div>
              <div className="ribs"></div>
              <div className="verify-overlay">
                <div className="play-btn"></div>
                <div className="label">
                  VRx Verification
                  <span className="small">PACKET R938 · LOT M487</span>
                </div>
              </div>
            </div>

            {/* TILE 3 — SERA */}
            <div className="tile tile-sera">
              <div className="pills-row">
                <div className="mini-pill active"><span className="icon"></span>SERA</div>
                <div className="mini-pill">ECG</div>
                <div className="mini-pill">BPM</div>
              </div>
              <div className="device"></div>
              <div className="pulse"></div>
            </div>

            {/* TILE 4 — Bisma */}
            <div className="tile tile-bisma">
              <div className="silhouette"></div>
              <div className="controls">
                <div className="ctl"></div>
                <div className="lime-dot"></div>
              </div>
            </div>

          </div>
        </section>
      </div>

      {/* ===================== MARQUEE ===================== */}
      <div className="marquee">
        <div className="marquee-track">
          <span>Diagnostic AI <span className="dot"></span> Counterfeit Detection <span className="dot"></span> Remote Vitals <span className="dot"></span> Self-Triage <span className="dot"></span> Secure Records <span className="dot"></span> Clinician Network <span className="dot"></span></span>
          <span>Diagnostic AI <span className="dot"></span> Counterfeit Detection <span className="dot"></span> Remote Vitals <span className="dot"></span> Self-Triage <span className="dot"></span> Secure Records <span className="dot"></span> Clinician Network <span className="dot"></span></span>
        </div>
      </div>

      {/* ===================== MANIFESTO ===================== */}
      <section className="manifesto reveal" id="about">
        <div className="container">
          <div className="manifesto-grid">
            <div>
              <div className="section-label">The Premise</div>
              <h2 className="heading-xl">Healthcare,<br />rebuilt from the <em>model</em> up.</h2>
            </div>
            <div className="manifesto-body">
              <p>Modern medicine knows what to do. The hard part is doing it everywhere, for everyone, all the time. Sumora exists to close that gap with software — building AI systems that work alongside doctors, watch over patients between visits, and bring world-class diagnostic capability to a phone, a clinic, a home.</p>
              <p>We are an investment in making healthcare economical and accessible — not as a slogan, but as an engineering brief. Every product we ship is measured against that line.</p>
            </div>
          </div>
          <div className="manifesto-stats">
            <div className="stat"><div className="num">04</div><div className="label">Flagship Products</div></div>
            <div className="stat"><div className="num">2024</div><div className="label">Founded · Dubai</div></div>
            <div className="stat"><div className="num"><em>∞</em></div><div className="label">Patients At Home</div></div>
            <div className="stat"><div className="num">24/7</div><div className="label">Clinical Uptime</div></div>
          </div>
        </div>
      </section>

      {/* ===================== PRODUCTS ===================== */}
      <section className="products reveal" id="solutions">
        <div className="container">
          <div className="products-header">
            <div>
              <div className="section-label">Our Solutions</div>
              <h2 className="heading-xl">Four solutions.<br />One <em>nervous system</em> for care.</h2>
            </div>
            <p className="desc">Each product is a specialist agent. Together they form a continuous loop — diagnosis, verification, monitoring, and self-care — all writing back to a single secure record the patient owns and the provider trusts.</p>
          </div>

          <div className="product-grid">
            <article className="product-card">
              <div className="num">001 <sup>(New)</sup></div>
              <div className="tag">Clinical Co-Pilot</div>
              <h3>Barnard</h3>
              <div className="product-sub">AI Assistant for Diagnosis</div>
              <p>A reasoning engine that sits beside the physician — synthesising symptoms, history, labs and imaging into a ranked differential in seconds. Barnard explains its reasoning, cites the literature behind every suggestion, and learns the contours of each clinic it serves.</p>
              <div className="product-visual visual-barnard-card">
                <div className="scan-grid"></div>
                <div className="vitals-mini">
                  <svg viewBox="0 0 100 60"><polyline points="0,30 15,30 22,10 28,50 35,30 100,30" fill="none" stroke="#0E1315" strokeWidth="1.5" /></svg>
                </div>
              </div>
            </article>

            <article className="product-card">
              <div className="num">002</div>
              <div className="tag">Pharmaceutical Trust</div>
              <h3>VRx</h3>
              <div className="product-sub">AI Counterfeit Medicine Detection</div>
              <p>Point a phone camera at a packet. VRx compares packaging, holograms and print micro-features against verified records from the originating pharmaceutical company in real time — flagging counterfeits before they reach a patient.</p>
              <div className="product-visual visual-vrx-card">
                <div className="vrx-frame">
                  <div className="vrx-corner tl"></div><div className="vrx-corner tr"></div>
                  <div className="vrx-corner bl"></div><div className="vrx-corner br"></div>
                  <div className="vrx-status">VERIFIED · LOT 7A·EU·2026</div>
                </div>
              </div>
            </article>

            <article className="product-card">
              <div className="num">003</div>
              <div className="tag">Continuous Care</div>
              <h3>SERA</h3>
              <div className="product-sub">Constant Patient Contact Device</div>
              <p>A small wearable + bedside companion that streams vitals — rhythm, oxygen, pressure, glucose — to the patient&apos;s care team, the moment they leave the hospital. SERA turns &ldquo;see you in six weeks&rdquo; into a continuous, supervised recovery.</p>
              <div className="product-visual visual-sera-card">
                <div className="heart-pulse-card">
                  <svg viewBox="0 0 200 80" preserveAspectRatio="none">
                    <path d="M0,40 L40,40 L50,40 L55,20 L60,60 L65,30 L70,50 L75,40 L120,40 L130,40 L135,15 L140,65 L145,40 L200,40" />
                  </svg>
                </div>
                <div className="sera-data">
                  <div className="sera-stat"><div className="v">72</div><div className="l">BPM</div></div>
                  <div className="sera-stat"><div className="v">98%</div><div className="l">SpO₂</div></div>
                  <div className="sera-stat"><div className="v">36.6</div><div className="l">°C</div></div>
                </div>
              </div>
            </article>

            <article className="product-card">
              <div className="num">004</div>
              <div className="tag">Patient Side</div>
              <h3>Bisma</h3>
              <div className="product-sub">Self-Diagnosis &amp; Triage Companion</div>
              <p>A conversational triage agent for the patient. Bisma asks the right questions in the right order, narrows down a probable cause, and either guides self-care or hands a complete clinical brief to a human professional.</p>
              <div className="product-visual visual-bisma-card">
                <div className="chat-bubble user">Chest tightness when running, 3 days</div>
                <div className="chat-bubble bot">A few questions before I suggest next steps...</div>
                <div className="chat-bubble user">Yes, breath shortness too</div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ===================== PLATFORM ===================== */}
      <section className="platform reveal" id="platform">
        <div className="container">
          <div className="section-label">The Platform</div>
          <h2 className="heading-xl">Every product writes to the same patient record — the one the <em>patient</em> owns.</h2>

          <div className="stack">
            <div className="stack-layers">
              <div className="layer"><span className="layer-num">L01</span><span className="layer-name">Patient Identity</span><span className="layer-tag">Sovereign</span></div>
              <div className="layer"><span className="layer-num">L02</span><span className="layer-name">Encrypted Record</span><span className="layer-tag">E2EE</span></div>
              <div className="layer"><span className="layer-num">L03</span><span className="layer-name">Provider Auth Layer</span><span className="layer-tag">Granular</span></div>
              <div className="layer"><span className="layer-num">L04</span><span className="layer-name">Sumora AI Models</span><span className="layer-tag">Clinical-grade</span></div>
              <div className="layer"><span className="layer-num">L05</span><span className="layer-name">Device &amp; App SDK</span><span className="layer-tag">Open</span></div>
              <div className="layer"><span className="layer-num">L06</span><span className="layer-name">Clinician Network</span><span className="layer-tag">Global</span></div>
            </div>
            <div className="stack-text">
              <h3 className="heading-md">One record. The <em>patient&apos;s</em>. Forever.</h3>
              <p>Behind every Sumora product is a single secure database holding the complete medical history of the patient — accessible only to providers the patient explicitly authorises, anywhere they go.</p>
              <p>It moves with the patient between cities, continents, and care teams. It works whether the next clinician is across the street or across the world.</p>
              <ul className="stack-features">
                <li>End-to-end encrypted, with patient-held access keys</li>
                <li>Audit log of every read, every write, every model query</li>
                <li>Interoperable with HL7, FHIR, and major EMR systems</li>
                <li>Designed against HIPAA, GDPR and UAE DHA frameworks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== TRUST / NETWORK ===================== */}
      <section className="trust reveal" id="network">
        <div className="container">
          <div className="trust-grid">
            <div>
              <div className="section-label">The Network</div>
              <h2 className="heading-xl">Built with <em>doctors</em>.<br />From every continent.</h2>
              <p>Sumora&apos;s products are not built in a vacuum. We work with practising physicians, surgeons, and researchers across multiple countries, who shape every product decision — from how Barnard reasons about a differential to how SERA escalates an alarm.</p>
              <p style={{ color: "var(--muted)", fontSize: "15px" }}>If a clinical idea ships at Sumora, a clinician helped write it.</p>
              <a href="#contact" className="pill-link" style={{ marginTop: "24px" }}>Join the advisory →</a>
            </div>
            <div className="globe-viz">
              <svg viewBox="0 0 400 400">
                <circle className="globe-ring" cx="200" cy="200" r="180" />
                <circle className="globe-ring" cx="200" cy="200" r="140" />
                <circle className="globe-ring" cx="200" cy="200" r="100" />
                <circle className="globe-ring" cx="200" cy="200" r="60" />
                <ellipse className="globe-ring" cx="200" cy="200" rx="180" ry="60" />
                <ellipse className="globe-ring" cx="200" cy="200" rx="180" ry="120" />
                <ellipse className="globe-ring" cx="200" cy="200" rx="60" ry="180" />
                <circle className="globe-pulse" cx="120" cy="140" r="3" />
                <circle className="globe-pulse" cx="280" cy="170" r="3" />
                <circle className="globe-pulse" cx="200" cy="80" r="3" />
                <circle className="globe-pulse" cx="320" cy="240" r="3" />
                <circle className="globe-pulse" cx="100" cy="260" r="3" />
                <circle className="globe-pulse" cx="240" cy="320" r="3" />
                <circle cx="200" cy="200" r="6" fill="#1E2A78" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== MISSION ===================== */}
      <section className="mission reveal" id="mission">
        <div className="container">
          <div className="section-label" style={{ justifyContent: "center", marginBottom: "36px" }}>The Mission</div>
          <p className="mission-quote">Sumora is an investment in making world-class healthcare <em>economical</em> and <em>accessible</em> — for the patient in a city hospital, and for the patient three villages from the nearest road.</p>
          <div className="mission-attr">— Sumora Health · Dubai · 2024</div>
        </div>
      </section>

      {/* ===================== CTA / FOOTER ===================== */}
      <section className="cta" id="contact">
        <div className="container">
          <div className="cta-grid">
            <div>
              <div className="section-label">Get In Touch</div>
              <h2 className="heading-xl">Bring Sumora into your <em>practice</em>.</h2>
            </div>
            <div className="cta-side">
              <p>Talk to us about pilots for hospitals, clinics, pharmacies, and home-care providers — or join the clinical advisory if you&apos;d like to help shape what comes next.</p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <a className="pill-light" href="mailto:hello@sumora.health">Request a pilot</a>
                <a className="pill-ghost" href="mailto:clinicians@sumora.health">For clinicians</a>
              </div>
            </div>
          </div>

          <div className="cta-footer">
            <div className="footer-brand">
              <div className="brand"><span className="brand-mark" style={{ background: "var(--lime)" }}></span>sumora<span className="reg">®</span></div>
              <p>An AI healthcare company building intelligent systems for clinicians, patients, and the care that connects them.</p>
              <p style={{ marginTop: "14px", fontFamily: "var(--mono)", fontSize: "11px", letterSpacing: "0.1em", color: "var(--lime)" }}>DUBAI · UAE</p>
            </div>
            <div className="footer-col">
              <h4>Solutions</h4>
              <ul><li><a href="#solutions">Barnard</a></li><li><a href="#solutions">VRx</a></li><li><a href="#solutions">SERA</a></li><li><a href="#solutions">Bisma</a></li></ul>
            </div>
            <div className="footer-col">
              <h4>Company</h4>
              <ul><li><Link href="/about">About</Link></li><li><Link href="/careers">Careers</Link></li><li><Link href="/contact">Contact</Link></li><li><Link href="/signals">Signals</Link></li></ul>
            </div>
            <div className="footer-col">
              <h4>Trust</h4>
              <ul><li><Link href="/technology#evaluation">Evaluation</Link></li><li><Link href="/technology#limits">Limitations</Link></li><li><Link href="/technology#references">References</Link></li><li><Link href="/technology">Technology</Link></li></ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div>© 2026 Sumora Health · All rights reserved</div>
            <div>Designed in Dubai · Trained on consented data</div>
          </div>
        </div>
      </section>

      <SumiLauncher />
    </>
  );
}
