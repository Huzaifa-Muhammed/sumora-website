import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import InnerFoot from "@/components/InnerFoot";
import RevealOnScroll from "@/components/RevealOnScroll";
import "./about.css";

export const metadata = {
  title: "About — Sumora Health",
};

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M9 17H6.5V10H9V17M7.7 8.7C6.9 8.7 6.3 8.1 6.3 7.3C6.3 6.5 6.9 5.9 7.7 5.9C8.5 5.9 9.1 6.5 9.1 7.3C9.1 8.1 8.5 8.7 7.7 8.7M18 17H15.5V13.5C15.5 12.6 14.8 11.9 13.9 11.9C13 11.9 12.3 12.6 12.3 13.5V17H9.8V10H12.3V11.1C12.7 10.4 13.6 9.9 14.5 9.9C16.4 9.9 18 11.5 18 13.4V17Z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 8 L12 14 L21 8" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      <RevealOnScroll />

      <div className="page-wrap about-page">
        <div className="card">
          <SiteHeader currentPage="about" withBorder />

          <section className="page-hero">
            <div>
              <div className="eyebrow">About Sumora</div>
              <h1 className="page-title">An <em>investment</em><br />in accessible<br />medicine.</h1>
            </div>
            <div className="page-aside">
              <p>Founded in Dubai in 2024, Sumora Health builds the AI infrastructure for a kind of medicine that is continuous, verifiable, and reachable — wherever a patient happens to be.</p>
            </div>
          </section>

          <div className="content">

            {/* THE PROBLEM */}
            <section className="block reveal">
              <div>
                <div className="block-label">The Problem</div>
                <h2>Three <em>fractures</em><br />in modern medicine.</h2>
              </div>
              <div className="block-body">
                <p>Healthcare today is brilliant in concentrated places and fragile almost everywhere else. Three fractures keep showing up in the data, and they are the ones Sumora is built to close.</p>

                <div className="problems">
                  <div className="problem">
                    <div className="problem-num">
                      <span>/ 01</span>
                      <span className="tag">Cost</span>
                    </div>
                    <h3>Care that is <em>too expensive</em> to reach the people who need it.</h3>
                    <p>A diagnostic workup, a follow-up consultation, a recovery monitor — each one is priced for the wealthier half of the world. The other half is told to wait, travel, or do without. The economics keep medicine out of reach long before clinical limits do.</p>
                    <div className="stat-line">
                      <span className="big">half<em>+</em></span>
                      <span className="small">of the world<br />lacks access to essential health services</span>
                    </div>
                  </div>

                  <div className="problem">
                    <div className="problem-num">
                      <span>/ 02</span>
                      <span className="tag">Trust</span>
                    </div>
                    <h3>Medicines that <em>aren&apos;t what they say</em> they are.</h3>
                    <p>Counterfeit and substandard medicines circulate widely in lower-income markets — sometimes inert, sometimes actively harmful. Patients take them in good faith. Pharmacies stock them without knowing. Manufacturers lose the chain of custody at the point it matters most.</p>
                    <div className="stat-line">
                      <span className="big">1 in <em>10</em></span>
                      <span className="small">medical products in lower-income countries<br />is substandard or falsified <span style={{ color: "var(--muted)" }}>(WHO)</span></span>
                    </div>
                  </div>

                  <div className="problem">
                    <div className="problem-num">
                      <span>/ 03</span>
                      <span className="tag">Distance</span>
                    </div>
                    <h3>Specialists that <em>live too far away</em> from the patient.</h3>
                    <p>Across much of the southern hemisphere, the nearest specialist is hours or days away. A rash, a cardiac murmur, a worrying cough — each one becomes a journey, a missed shift, an untreated illness. The diagnostic capacity exists; it just doesn&apos;t reach.</p>
                    <div className="stat-line">
                      <span className="big">3.5<em>bn</em></span>
                      <span className="small">people without full coverage<br />of essential health services <span style={{ color: "var(--muted)" }}>(WHO)</span></span>
                    </div>
                  </div>
                </div>

                <div className="problem-response">
                  <div>
                    <div className="label">Sumora&apos;s Response</div>
                    <h4>Four products mapped onto these three fractures — <em>Barnard</em> for diagnostic reach, <em>VRx</em> for medicine trust, <em>SERA</em> and <em>Bisma</em> for continuous, low-cost access — all sharing one secure record the patient owns.</h4>
                  </div>
                </div>

                <p style={{ marginTop: "32px", color: "var(--muted)", fontSize: "14px" }}>Statistics referenced from World Health Organization global health reporting. Sumora&apos;s products are an attempt at the engineering side of the response, not a claim to solve any of these problems alone.</p>
              </div>
            </section>

            {/* THE STORY */}
            <section className="block reveal">
              <div>
                <div className="block-label">The Story</div>
                <h2>Started with a <em>simple</em> observation.</h2>
              </div>
              <div className="block-body">
                <p>Modern medicine is brilliant in the room and silent everywhere else. The diagnostic capability of a major hospital almost never reaches the village clinic, the home recovery, the night-shift nurse running on three hours of sleep.</p>
                <p>Sumora exists to reduce that gap with software. Not to replace the clinician — the opposite. To extend their reach, sharpen their judgement, and keep watching when they can&apos;t be in the room.</p>
                <p>We started in 2024 with four products that map onto four moments in a care journey: diagnosis, verification, monitoring, and self-triage. They share one secure record. The patient owns it. The clinician borrows access. That structure isn&apos;t a feature; it&apos;s the company.</p>
              </div>
            </section>

            {/* PRINCIPLES */}
            <section className="block reveal">
              <div>
                <div className="block-label">What We Believe</div>
                <h2>Five <em>principles</em> on the wall.</h2>
              </div>
              <div className="block-body">
                <p style={{ fontFamily: "var(--display)", fontSize: "18px", color: "var(--ink)", marginBottom: 0 }}>These show up in every product review. If a feature can&apos;t justify itself against them, it doesn&apos;t ship.</p>
                <div className="principles">
                  <div className="principle">
                    <span className="num">/ 01</span>
                    <h3>Patient owns the <em>record</em>.</h3>
                    <p>Always. The clinician borrows access. This is non-negotiable architecture, not a marketing line.</p>
                  </div>
                  <div className="principle">
                    <span className="num">/ 02</span>
                    <h3>Explainable or <em>nothing</em>.</h3>
                    <p>Every AI suggestion shows its reasoning and the literature behind it. Clinicians never have to guess why.</p>
                  </div>
                  <div className="principle">
                    <span className="num">/ 03</span>
                    <h3>Reachable, not just <em>impressive</em>.</h3>
                    <p>If a product needs a fibre line and a $40,000 device, we haven&apos;t done the work yet.</p>
                  </div>
                  <div className="principle">
                    <span className="num">/ 04</span>
                    <h3>Doctors in the <em>loop</em>.</h3>
                    <p>Practising clinicians shape what we ship. If they didn&apos;t help write it, it doesn&apos;t go in the box.</p>
                  </div>
                  <div className="principle">
                    <span className="num">/ 05</span>
                    <h3>Audit <em>everything</em>.</h3>
                    <p>Every read, every write, every model query is logged. Trust isn&apos;t a value, it&apos;s a log file.</p>
                  </div>
                  <div className="principle" style={{ background: "var(--paper-2)" }}>
                    <span className="num">/ ∞</span>
                    <h3>Stay <em>humble</em>.</h3>
                    <p>Medicine is older than us by millennia. We&apos;re a layer on top of it, not a replacement for it.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* TIMELINE */}
            <section className="block reveal">
              <div>
                <div className="block-label">The Path</div>
                <h2>From <em>idea</em><br />to platform.</h2>
              </div>
              <div className="block-body">
                <p>A short timeline of what&apos;s happened so far. We&apos;re early — and that&apos;s the point. The products are real, the company is young, and the work ahead is much larger than the work behind.</p>
                <div className="timeline">
                  <div className="timeline-item">
                    <div className="timeline-when">2024 / Q1</div>
                    <div className="timeline-what">
                      <h4>Sumora Health <em>incorporated</em></h4>
                      <p>Founded in Dubai with a mandate to build AI-native medical software for clinics and home care.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-when">2024 / Q2</div>
                    <div className="timeline-what">
                      <h4>Clinical advisory <em>formed</em></h4>
                      <p>Initial cohort of practising physicians and surgeons across multiple specialties begins reviewing product designs.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-when">2024 / Q4</div>
                    <div className="timeline-what">
                      <h4>Barnard <em>alpha</em></h4>
                      <p>First diagnostic co-pilot prototype tested against retrospective case sets in collaboration with clinical partners.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-when">2025</div>
                    <div className="timeline-what">
                      <h4>Four products in <em>parallel</em></h4>
                      <p>VRx, SERA, and Bisma move from concept into engineering. The unified record platform is designed and prototyped.</p>
                    </div>
                  </div>
                  <div className="timeline-item">
                    <div className="timeline-when">2026</div>
                    <div className="timeline-what">
                      <h4>Pilot <em>partnerships</em></h4>
                      <p>First clinical pilots and pharma counterfeit-detection integrations under negotiation. Public site launches.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* LEADERSHIP */}
            <section className="block reveal">
              <div>
                <div className="block-label">Leadership</div>
                <h2>The people who <em>steer</em> Sumora.</h2>
              </div>
              <div className="block-body">
                <p>A three-strong leadership at the top of Sumora — Chairman, CEO, and COO — supported by a small founding team and a clinical advisory of practising physicians from nine countries. Every product decision passes through one of these three desks.</p>

                <div className="leaders">
                  <article className="leader l1">
                    <div className="portrait">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/rashed-al-ameri.jpg" alt="Rashed Al Ameri, Chairman of Sumora Health" loading="lazy" />
                    </div>
                    <div className="meta-row">
                      <span className="number">/ 01</span>
                      <span className="country">Dubai · UAE</span>
                    </div>
                    <h3>Rashed <em>Al Ameri</em></h3>
                    <div className="role">Chairman</div>
                    <p>Chairs the board and sets the long-horizon direction of the company. Brings strategic oversight, capital relationships across the GCC, and the regional credibility that makes serious healthcare partnerships possible. His role keeps Sumora anchored to its founding ambition: that AI-led diagnostics belong to everyone, not just the well-resourced few.</p>
                    <div className="links">
                      <span className="li-placeholder" title="LinkedIn — coming soon" aria-label="LinkedIn (coming soon)"><LinkedInIcon /></span>
                      <a href="mailto:hello@sumora.health" aria-label="Email"><EmailIcon /></a>
                    </div>
                  </article>

                  <article className="leader l2">
                    <div className="portrait">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/syed-mujtaba.jpg?v=3" alt="Syed Mujtaba, Chief Executive Officer of Sumora Health" loading="lazy" />
                    </div>
                    <div className="meta-row">
                      <span className="number">/ 02</span>
                      <span className="country">Dubai · UAE</span>
                    </div>
                    <h3>Syed <em>Mujtaba</em></h3>
                    <div className="role">Chief Executive Officer</div>
                    <p>Runs the company day to day — product direction, hiring, partnerships, and the operating cadence of a young healthcare business. Background spans technology and operations, with a working conviction that great healthcare AI is built by listening to clinicians first and engineers second. Keeps Sumora close to the work, and the work close to the patients it&apos;s for.</p>
                    <div className="links">
                      <span className="li-placeholder" title="LinkedIn — coming soon" aria-label="LinkedIn (coming soon)"><LinkedInIcon /></span>
                      <a href="mailto:syed@sumora.health" aria-label="Email"><EmailIcon /></a>
                    </div>
                  </article>

                  <article className="leader l3">
                    <div className="portrait">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/nida-fatima.jpg?v=3" alt="Nida Fatima, Chief Operating Officer of Sumora Health" loading="lazy" />
                    </div>
                    <div className="meta-row">
                      <span className="number">/ 03</span>
                      <span className="country">Islamabad · Pakistan</span>
                    </div>
                    <h3>Nida <em>Fatima</em></h3>
                    <div className="role">Chief Operating Officer</div>
                    <p>Heads the all-female engineering and design team in Pakistan that builds every Sumora product. As Chief Operating Officer, leads delivery, hiring, and the operating standards across the company — making sure what gets promised gets shipped, and that the culture inside the team matches the care the products are meant to carry.</p>
                    <div className="links">
                      <span className="li-placeholder" title="LinkedIn — coming soon" aria-label="LinkedIn (coming soon)"><LinkedInIcon /></span>
                      <a href="mailto:nida@sumora.health" aria-label="Email"><EmailIcon /></a>
                    </div>
                  </article>
                </div>

                <p style={{ marginTop: "32px", color: "var(--muted)", fontSize: "14px" }}>Beyond the leadership, Sumora is built with a global clinical advisory of practising physicians from nine countries — UK, USA, UAE, Singapore, and beyond — who review every clinical-facing product before it ships.</p>
              </div>
            </section>

            {/* PEOPLE */}
            <section className="block reveal" style={{ borderBottom: "1px solid var(--line)" }}>
              <div>
                <div className="block-label">The People</div>
                <h2>Built by a <em>small</em> team.<br />Reviewed by a <em>large</em> one.</h2>
              </div>
              <div className="block-body">
                <p>A core team of engineers, clinicians, and designers in Dubai. A wider network of practising doctors across multiple countries who review every clinical-facing product before it ships.</p>
                <p>If you&apos;re a physician, a builder, or both — we&apos;re hiring, and the door is genuinely open. <Link href="/careers" style={{ color: "var(--ink)", textDecoration: "underline", textDecorationThickness: "1px", textUnderlineOffset: "3px" }}>See open roles</Link>.</p>

                <div className="team-grid">
                  <div className="member">
                    <div className="avatar a1">SH</div>
                    <h4>Founding Team</h4>
                    <div className="role">Engineering · Clinical · Design</div>
                    <p>A small core building Sumora&apos;s products end-to-end, from model training to bedside UX.</p>
                  </div>
                  <div className="member">
                    <div className="avatar a2">CA</div>
                    <h4>Clinical Advisory</h4>
                    <div className="role">Multi-specialty · Multi-country</div>
                    <p>Practising physicians who review every product before it ships. They write what the rest of us code.</p>
                  </div>
                  <div className="member">
                    <div className="avatar a3">PA</div>
                    <h4>Pharma Partners</h4>
                    <div className="role">VRx Verification Network</div>
                    <p>Manufacturers contributing reference packaging data so VRx can verify medicines in real time.</p>
                  </div>
                  <div className="member">
                    <div className="avatar a4">YOU</div>
                    <h4>Your Role?</h4>
                    <div className="role">Open positions</div>
                    <p>Engineering, clinical, design, ops. We&apos;re a small team — every hire shifts the trajectory.</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="cta-strip reveal">
              <h3>Want to build the next <em>chapter</em> with us — or just have a question?</h3>
              <div className="actions">
                <Link href="/careers" className="pill-light">See open roles</Link>
                <Link href="/contact" className="pill-ghost">Talk to Sumi →</Link>
              </div>
            </div>

          </div>

          <InnerFoot exclude="about" />

        </div>
      </div>

      <SiteFooter active="about" />
    </>
  );
}
