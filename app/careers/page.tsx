"use client";

import Link from "next/link";
import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import InnerFoot from "@/components/InnerFoot";
import RevealOnScroll from "@/components/RevealOnScroll";
import "./careers.css";

type Filter = "all" | "engineering" | "clinical" | "design" | "ops";

type RoleKey =
  | "senior-ml-engineer"
  | "full-stack-engineer"
  | "mobile-engineer"
  | "clinical-lead"
  | "clinical-advisor"
  | "product-designer"
  | "partnerships-lead";

type RoleData = {
  title: React.ReactNode;
  titlePlain: string;
  meta: string[];
  summary: string;
  responsibilities: string[];
  looking: string[];
};

const roleData: Record<RoleKey, RoleData> = {
  "senior-ml-engineer": {
    title: <>Senior <em>ML Engineer</em> — Clinical Models</>,
    titlePlain: "Senior ML Engineer — Clinical Models",
    meta: ["Engineering", "Dubai · Remote OK", "Full-time"],
    summary:
      "Lead model development for Barnard, our diagnostic co-pilot. You'll own the path from clinical problem to deployable model — including the hard parts: explainability, evaluation against real cases, and ongoing monitoring once the model is in a clinic.",
    responsibilities: [
      "Design and train clinical reasoning models with practising physicians",
      "Build robust evaluation pipelines using retrospective and prospective cases",
      "Own model monitoring, drift detection, and retraining cadence in production",
      "Work directly with the clinical advisory to translate medical questions into ML problems",
    ],
    looking: [
      "5+ years in ML engineering, ideally with healthcare or high-stakes domains",
      "Strong grasp of evaluation beyond accuracy — calibration, robustness, fairness",
      "Comfortable making models explainable and shipping them, not just publishing them",
      "Bonus: clinical training, or significant experience working with clinicians",
    ],
  },
  "full-stack-engineer": {
    title: <>Full-Stack Engineer — <em>Patient Record Platform</em></>,
    titlePlain: "Full-Stack Engineer — Patient Record Platform",
    meta: ["Engineering", "Dubai · Remote OK", "Full-time"],
    summary:
      "Build the backbone — the secure record platform every Sumora product writes to. Patient-owned identity, encrypted storage, granular provider authorization, and interoperability with HL7/FHIR.",
    responsibilities: [
      "Design and build the patient record system end-to-end (TypeScript / Rust / Postgres)",
      "Implement E2EE, audit logging, and granular access controls",
      "Build provider auth and interoperability with major EMR systems",
      "Make security something we can demonstrate, not just claim",
    ],
    looking: [
      "4+ years building production backend systems, ideally with sensitive data",
      "Strong on cryptography fundamentals — you don't roll your own, but you know why",
      "Comfortable across the stack from database to UI",
      "Bonus: experience with healthcare interoperability standards (HL7, FHIR)",
    ],
  },
  "mobile-engineer": {
    title: <>Mobile Engineer — <em>VRx Camera</em></>,
    titlePlain: "Mobile Engineer — VRx Camera",
    meta: ["Engineering", "Dubai", "Full-time"],
    summary:
      "Own the VRx mobile app — the one that turns a phone camera into a counterfeit-medicine detector. Real-time computer vision, on-device inference, and a UX that works for a pharmacist, a nurse, and a patient.",
    responsibilities: [
      "Build the iOS and Android apps for VRx (React Native or native)",
      "Integrate on-device CV models for packaging and hologram verification",
      "Design the camera UX so it works in a fluorescent-lit pharmacy at 11pm",
      "Partner with the ML team on the inference pipeline",
    ],
    looking: [
      "4+ years shipping mobile apps with non-trivial camera or ML use",
      "Care about UX as much as performance",
      "Comfortable with on-device ML constraints (memory, latency, battery)",
    ],
  },
  "clinical-lead": {
    title: <>Clinical Lead — <em>Barnard</em></>,
    titlePlain: "Clinical Lead — Barnard",
    meta: ["Clinical", "Dubai · Hybrid", "Full-time"],
    summary:
      "Be the clinical voice inside the Barnard team. You'll define what 'good' looks like for a diagnostic co-pilot, run case-based evaluations with the advisory, and keep the product honest about what it can and can't do.",
    responsibilities: [
      "Define clinical evaluation protocols for Barnard",
      "Lead case reviews with the clinical advisory network",
      "Translate clinical edge-cases into requirements engineers can build against",
      "Own the safety and explainability story for the product",
    ],
    looking: [
      "Practising or recently practising physician (any specialty, IM/EM particularly relevant)",
      "Strong opinions about how AI should and shouldn't enter clinical workflows",
      "Comfortable working closely with engineers and ML researchers",
      "Bonus: prior product or research role with a digital health company",
    ],
  },
  "clinical-advisor": {
    title: <>Clinical Advisors — <em>multiple specialties</em></>,
    titlePlain: "Clinical Advisors — multiple specialties",
    meta: ["Clinical", "Remote · Global", "Part-time"],
    summary:
      "Join the clinical advisory network. A few hours a month reviewing product designs, validating clinical reasoning, and pressure-testing edge cases. Paid, light-touch, and your input genuinely shapes what ships.",
    responsibilities: [
      "Review product proposals and clinical reasoning flows",
      "Submit edge-cases and adversarial scenarios from your own practice",
      "Participate in occasional case-review sessions",
      "Help us not be wrong about your specialty",
    ],
    looking: [
      "Currently practising physician, surgeon, or specialist",
      "Particularly: cardiology, EM, IM, family medicine, paediatrics, oncology",
      "Willing to commit 4-8 hours per month",
      "Anywhere in the world",
    ],
  },
  "product-designer": {
    title: <>Product Designer — <em>Clinical Interfaces</em></>,
    titlePlain: "Product Designer — Clinical Interfaces",
    meta: ["Design", "Dubai · Remote OK", "Full-time"],
    summary:
      "Design interfaces that clinicians actually want to use during a 12-hour shift. Calm, fast, never in the way. You'll work across all four products and the patient-side experiences too.",
    responsibilities: [
      "Lead product design across Barnard, SERA, VRx and Bisma",
      "Design for high-cognitive-load environments (ER, ward, home recovery)",
      "Build and maintain the Sumora design system",
      "Collaborate closely with the clinical lead on workflow research",
    ],
    looking: [
      "5+ years designing complex software, ideally in clinical, financial, or industrial domains",
      "Portfolio that shows restraint, not just polish",
      "Strong systems thinking — you can design 6 products that feel like 1",
      "Bonus: any healthcare experience",
    ],
  },
  "partnerships-lead": {
    title: <>Partnerships Lead — <em>Pharma &amp; Hospitals</em></>,
    titlePlain: "Partnerships Lead — Pharma & Hospitals",
    meta: ["Operations", "Dubai", "Full-time"],
    summary:
      "Open the doors. You'll lead conversations with hospital systems for Barnard and SERA pilots, and with pharmaceutical manufacturers for the VRx verification network. Closer to a founder role than a sales role.",
    responsibilities: [
      "Build the pipeline of pilot partners across the GCC and beyond",
      "Lead the VRx pharma onboarding programme",
      "Work with clinical and product to scope what each partner actually needs",
      "Own commercial structure and contracting for early deals",
    ],
    looking: [
      "6+ years in BD, partnerships, or commercial roles in healthcare or regulated industries",
      "Real network in pharma, hospital systems, or insurers — particularly in the Middle East",
      "Comfortable being the founder-shaped first commercial hire",
      "Arabic a strong plus",
    ],
  },
};

type RoleRow = {
  key: RoleKey;
  team: Filter;
  teamLabel: string;
  location: string;
  type: string;
};

const roleRows: RoleRow[] = [
  { key: "senior-ml-engineer", team: "engineering", teamLabel: "Engineering", location: "Dubai · Remote OK", type: "Full-time" },
  { key: "full-stack-engineer", team: "engineering", teamLabel: "Engineering", location: "Dubai · Remote OK", type: "Full-time" },
  { key: "mobile-engineer", team: "engineering", teamLabel: "Engineering", location: "Dubai", type: "Full-time" },
  { key: "clinical-lead", team: "clinical", teamLabel: "Clinical", location: "Dubai · Hybrid", type: "Full-time" },
  { key: "clinical-advisor", team: "clinical", teamLabel: "Clinical", location: "Remote · Global", type: "Part-time" },
  { key: "product-designer", team: "design", teamLabel: "Design", location: "Dubai · Remote OK", type: "Full-time" },
  { key: "partnerships-lead", team: "ops", teamLabel: "Operations", location: "Dubai", type: "Full-time" },
];

function ArrIcon() {
  return (
    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M3 11 L11 3 M5 3 L11 3 L11 9" />
    </svg>
  );
}

export default function CareersPage() {
  const [filter, setFilter] = useState<Filter>("all");
  const [openRole, setOpenRole] = useState<RoleKey | null>(null);

  const active = openRole ? roleData[openRole] : null;

  return (
    <>
      <RevealOnScroll />

      <div className="page-wrap careers-page">
        <div className="card">
          <SiteHeader currentPage="careers" withBorder />

          <section className="page-hero">
            <div>
              <div className="eyebrow">Careers <span className="count">7 open</span></div>
              <h1 className="page-title">Build with <em>doctors</em>.<br />Ship with <em>care</em>.</h1>
            </div>
            <div className="page-aside">
              <p>Sumora is small on purpose. Every hire shifts the trajectory. If you want your work used in clinics on three continents within a year, this is one of the few places where that&apos;s a realistic plan.</p>
            </div>
          </section>

          <section className="why reveal">
            <div className="why-grid">
              <div className="why-item">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M12 2 L3 7 V17 L12 22 L21 17 V7 Z M3 7 L12 12 L21 7 M12 12 V22" /></svg>
                </div>
                <h3>Real <em>clinical</em> impact</h3>
                <p>Your code reaches patients and clinicians, not a feature flag in a dashboard. Outcomes are the metric.</p>
              </div>
              <div className="why-item">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="8" r="4" /><path d="M4 21 C4 16 8 14 12 14 C16 14 20 16 20 21" /></svg>
                </div>
                <h3>Doctors in the <em>room</em></h3>
                <p>You&apos;ll work directly with practising clinicians from week one — not through a layer of product managers.</p>
              </div>
              <div className="why-item">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="12" r="9" /><path d="M2 12 H22 M12 2 C16 6 16 18 12 22 C8 18 8 6 12 2" /></svg>
                </div>
                <h3>Dubai <em>+ remote</em></h3>
                <p>HQ in Dubai with significant remote latitude. Clinical advisors join from across the world.</p>
              </div>
              <div className="why-item">
                <div className="icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 12 H7 L10 4 L14 20 L17 12 H21" /></svg>
                </div>
                <h3>Early-stage <em>upside</em></h3>
                <p>Competitive cash, meaningful equity, and a small team where every hire reshapes the company.</p>
              </div>
            </div>
          </section>

          <section className="roles reveal" id="roles">
            <div className="roles-header">
              <h2>Open <em>roles</em>.</h2>
              <div className="filter-row">
                {([
                  ["all", "All"],
                  ["engineering", "Engineering"],
                  ["clinical", "Clinical"],
                  ["design", "Design"],
                  ["ops", "Operations"],
                ] as const).map(([key, label]) => (
                  <div
                    key={key}
                    className={`chip${filter === key ? " active" : ""}`}
                    onClick={() => setFilter(key)}
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="role-list">
              {roleRows
                .filter((r) => filter === "all" || r.team === filter)
                .map((r) => (
                  <div
                    key={r.key}
                    className="role"
                    onClick={() => setOpenRole(r.key)}
                  >
                    <div className="title">{roleData[r.key].title}</div>
                    <div className="meta team">{r.teamLabel}</div>
                    <div className="meta">{r.location}</div>
                    <div className="meta">{r.type}</div>
                    <div className="arr"><ArrIcon /></div>
                  </div>
                ))}
            </div>
          </section>

          <section className="process reveal">
            <div className="process-header">
              <div>
                <h2>How we <em>hire</em>.</h2>
              </div>
              <p>Our process is short, honest, and asks you to do real work — not whiteboard puzzles. We try to give a yes or no within two weeks of first contact, and we tell you why either way.</p>
            </div>
            <div className="steps">
              <div className="step">
                <span className="num">/ 01</span>
                <h3>Quick <em>intro</em> call</h3>
                <p>30 minutes. We learn what you&apos;ve built and what you want to build next. You learn whether Sumora is the right shape for that.</p>
              </div>
              <div className="step">
                <span className="num">/ 02</span>
                <h3>Take-home or <em>portfolio</em></h3>
                <p>A small, time-boxed piece of real work — or a walkthrough of something you&apos;ve already shipped. Always paid.</p>
              </div>
              <div className="step">
                <span className="num">/ 03</span>
                <h3>Team <em>conversations</em></h3>
                <p>Two to three deeper conversations with the people you&apos;d actually work with — including a clinician, where relevant.</p>
              </div>
              <div className="step">
                <span className="num">/ 04</span>
                <h3>Offer or <em>honest no</em></h3>
                <p>If we&apos;re saying yes, we say so quickly. If we&apos;re saying no, you get the actual reason in writing. Either way, two weeks max.</p>
              </div>
            </div>

            <div className="cta-strip">
              <h3>Don&apos;t see your role? Tell us what we&apos;re <em>missing</em>.</h3>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <Link href="/contact" className="pill-light">Talk to Sumi →</Link>
                <a href="mailto:careers@sumora.health" className="pill-ghost">careers@sumora.health</a>
              </div>
            </div>
          </section>

          <InnerFoot exclude="careers" />

        </div>
      </div>

      {/* Role detail modal */}
      {active ? (
        <div
          className="modal-bg"
          onClick={(e) => {
            if ((e.target as HTMLElement).classList.contains("modal-bg"))
              setOpenRole(null);
          }}
        >
          <div className="modal">
            <button
              className="modal-close"
              aria-label="Close"
              onClick={() => setOpenRole(null)}
            >
              <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M3 3 L11 11 M11 3 L3 11" />
              </svg>
            </button>
            <h2>{active.title}</h2>
            <div className="modal-meta">
              {active.meta.map((m) => (
                <span key={m}>{m}</span>
              ))}
            </div>
            <p>{active.summary}</p>
            <h4>What you&apos;ll do</h4>
            <ul>
              {active.responsibilities.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <h4>What we&apos;re looking for</h4>
            <ul>
              {active.looking.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <div className="modal-actions">
              <a
                href={`mailto:careers@sumora.health?subject=Application: ${active.titlePlain}`}
                className="pill-light"
              >
                Apply via email
              </a>
              <Link href="/contact" className="pill-ghost">
                Ask Sumi about this role
              </Link>
            </div>
          </div>
        </div>
      ) : null}

      <SiteFooter active="careers" />
    </>
  );
}
