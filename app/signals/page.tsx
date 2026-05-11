"use client";

import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import InnerFoot from "@/components/InnerFoot";
import RevealOnScroll from "@/components/RevealOnScroll";
import "./signals.css";

type Filter = "all" | "diagnostics" | "regulation" | "patient" | "research" | "ethics";

export default function SignalsPage() {
  const [filter, setFilter] = useState<Filter>("all");

  const isVisible = (cat: string) => filter === "all" || cat === filter;

  return (
    <>
      <RevealOnScroll />

      <div className="page-wrap signals-page">
        <div className="card">
          <SiteHeader currentPage="signals" withBorder />

          <section className="page-hero">
            <div>
              <div className="eyebrow">Live · updated weekly</div>
              <h1 className="page-title">Signals.<br />What&apos;s <em>moving</em> in AI healthcare — and what it <em>actually</em> means.</h1>
            </div>
            <div className="page-aside">
              <p>A short editorial feed: each week, a few stories from the field, with the Sumora team&apos;s read on why each one matters, where it could fail, and what it means for the patient.</p>
            </div>
          </section>

          {/* FILTER BAR */}
          <div className="filter-bar">
            <div className="filters">
              {([
                ["all", "All signals"],
                ["diagnostics", "Diagnostics"],
                ["regulation", "Regulation"],
                ["patient", "Patient-facing"],
                ["research", "Research"],
                ["ethics", "Ethics"],
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
            <div className="feed-info">
              <strong>Issue 04</strong> · Week of <strong>05 May 2026</strong>
            </div>
          </div>

          {/* DEVELOPMENTS TIMELINE */}
          <section className="developments reveal">
            <header className="dev-header">
              <div className="dev-eyebrow">{"// DEVELOPMENTS · 2024 → 2026"}</div>
              <h2 className="dev-title">The bigger picture, in <em>dates</em>.</h2>
              <p className="dev-lead">Before the weekly read below: a year-and-a-half of major moves across AI healthcare — regulation, foundation models, drug discovery, devices, deployment, and capital. Selective, not exhaustive. We update this list as the field moves.</p>

              <div className="dev-legend">
                <span className="dev-leg"><span className="dot d-reg"></span>Regulatory</span>
                <span className="dev-leg"><span className="dot d-mod"></span>Foundation models</span>
                <span className="dev-leg"><span className="dot d-drug"></span>Drug discovery</span>
                <span className="dev-leg"><span className="dot d-dev"></span>Devices &amp; diagnostics</span>
                <span className="dev-leg"><span className="dot d-clin"></span>Clinical deployment</span>
                <span className="dev-leg"><span className="dot d-comm"></span>Commercial</span>
              </div>
            </header>

            <div className="dev-rail">

              <div className="dev-year">2024</div>

              <div className="dev-entry">
                <div className="dev-date">JAN 2024</div>
                <div className="dev-body">
                  <div className="dev-cat"><span className="dot d-reg"></span><span>Regulatory</span></div>
                  <h3 className="dev-h">WHO publishes guidance on multimodal AI in healthcare.</h3>
                  <p className="dev-p">The World Health Organization releases its first formal guidance on Large Multi-modal Models, setting expectations for safety, transparency, and regulatory readiness in clinical use.</p>
                </div>
              </div>

              <div className="dev-entry">
                <div className="dev-date">JAN 2024</div>
                <div className="dev-body">
                  <div className="dev-cat"><span className="dot d-dev"></span><span>Devices &amp; diagnostics</span></div>
                  <h3 className="dev-h">FDA authorises DermaSensor for primary care.</h3>
                  <p className="dev-p">First AI-powered handheld skin-cancer detection device cleared for use by primary-care physicians in the US — AI diagnostics move beyond specialist settings.</p>
                </div>
              </div>

              <div className="dev-entry">
                <div className="dev-date">MAR 2024</div>
                <div className="dev-body">
                  <div className="dev-cat"><span className="dot d-reg"></span><span>Regulatory</span></div>
                  <h3 className="dev-h">The EU AI Act passes the European Parliament.</h3>
                  <p className="dev-p">Medical AI is classified as high-risk under the Act, triggering future requirements around transparency, data quality, human oversight, and conformity assessment. <a href="#signal-02" className="dev-link">→ See Signal 02</a></p>
                </div>
              </div>

              <div className="dev-entry">
                <div className="dev-date">MAY 2024</div>
                <div className="dev-body">
                  <div className="dev-cat"><span className="dot d-drug"></span><span>Drug discovery</span></div>
                  <h3 className="dev-h">DeepMind releases AlphaFold 3.</h3>
                  <p className="dev-p">Co-published with Isomorphic Labs, extends structure prediction from proteins alone to ligands, DNA, RNA, and ions. A step-change for computational drug discovery.</p>
                </div>
              </div>

              <div className="dev-entry">
                <div className="dev-date">JUN 2024</div>
                <div className="dev-body">
                  <div className="dev-cat"><span className="dot d-comm"></span><span>Commercial</span></div>
                  <h3 className="dev-h">Tempus AI lists on Nasdaq.</h3>
                  <p className="dev-p">One of the largest AI-driven precision-medicine companies goes public, signalling investor appetite for clinical-data plus AI plays at scale.</p>
                </div>
              </div>

              <div className="dev-entry">
                <div className="dev-date">JUN 2024</div>
                <div className="dev-body">
                  <div className="dev-cat"><span className="dot d-mod"></span><span>Foundation models</span></div>
                  <h3 className="dev-h">OpenAI partners with Color Health.</h3>
                  <p className="dev-p">A high-profile early collaboration applying GPT-class models to cancer-treatment planning workflows — foundation models moving into specific clinical pathways.</p>
                </div>
              </div>

              <div className="dev-entry">
                <div className="dev-date">Q3 2024</div>
                <div className="dev-body">
                  <div className="dev-cat"><span className="dot d-clin"></span><span>Clinical deployment</span></div>
                  <h3 className="dev-h">Ambient AI scribes reach mass adoption.</h3>
                  <p className="dev-p">Abridge, Microsoft DAX Copilot, Suki, and Augmedix become standard at major US health systems through 2024. The first category of generative AI to land at clinical scale.</p>
                </div>
              </div>

              <div className="dev-entry">
                <div className="dev-date">AUG 2024</div>
                <div className="dev-body">
                  <div className="dev-cat"><span className="dot d-comm"></span><span>Commercial</span></div>
                  <h3 className="dev-h">Recursion and Exscientia announce merger.</h3>
                  <p className="dev-p">The largest consolidation in AI drug discovery to date — combining cellular-imaging pipelines with structure-based design under one roof.</p>
                </div>
              </div>

              <div className="dev-entry">
                <div className="dev-date">LATE 2024</div>
                <div className="dev-body">
                  <div className="dev-cat"><span className="dot d-reg"></span><span>Regulatory</span></div>
                  <h3 className="dev-h">FDA&apos;s AI/ML device list crosses ~1,000 authorisations.</h3>
                  <p className="dev-p">Cumulative FDA-cleared AI/ML-enabled medical devices passes the thousand mark — most are radiology, but cardiology, pathology, and ophthalmology are now well-represented.</p>
                </div>
              </div>

              <div className="dev-entry">
                <div className="dev-date">LATE 2024</div>
                <div className="dev-body">
                  <div className="dev-cat"><span className="dot d-mod"></span><span>Foundation models</span></div>
                  <h3 className="dev-h">Hippocratic AI&apos;s safety-focused agents enter pilots.</h3>
                  <p className="dev-p">Healthcare-specific LLM agents pitched as safety-first alternatives to general models begin large-scale pilots with US health systems, focused on non-diagnostic patient touchpoints.</p>
                </div>
              </div>

              <div className="dev-year">2025</div>

              <div className="dev-entry">
                <div className="dev-date">H1 2025</div>
                <div className="dev-body">
                  <div className="dev-cat"><span className="dot d-clin"></span><span>Clinical deployment</span></div>
                  <h3 className="dev-h">Epic deepens Abridge integration into the EMR.</h3>
                  <p className="dev-p">Ambient AI documentation becomes a native EMR workflow for tens of thousands of US clinicians — the first time generative AI is built into the system of record at scale.</p>
                </div>
              </div>

              <div className="dev-entry">
                <div className="dev-date">2025</div>
                <div className="dev-body">
                  <div className="dev-cat"><span className="dot d-mod"></span><span>Foundation models</span></div>
                  <h3 className="dev-h">Pathology foundation models reach commercial scale.</h3>
                  <p className="dev-p">Paige, Owkin, and others reach clinical-grade deployments — large pretrained models for whole-slide images move from research papers to active cancer-diagnostics pipelines. <a href="#signal-01" className="dev-link">→ See Signal 01</a></p>
                </div>
              </div>

              <div className="dev-entry">
                <div className="dev-date">2025</div>
                <div className="dev-body">
                  <div className="dev-cat"><span className="dot d-reg"></span><span>Regulatory</span></div>
                  <h3 className="dev-h">FDA sharpens its stance on generative medical advice.</h3>
                  <p className="dev-p">Increased regulatory attention to chatbots offering clinical advice — first warning letters and explicit guidance on when an AI tool crosses into medical-device territory.</p>
                </div>
              </div>

              <div className="dev-entry">
                <div className="dev-date">2025</div>
                <div className="dev-body">
                  <div className="dev-cat"><span className="dot d-drug"></span><span>Drug discovery</span></div>
                  <h3 className="dev-h">More AI-designed candidates enter clinical trials.</h3>
                  <p className="dev-p">Pipelines from Insilico Medicine, Isomorphic Labs, and post-merger Recursion progress further into human trials — early evidence on whether AI-discovered drugs translate.</p>
                </div>
              </div>

              <div className="dev-entry">
                <div className="dev-date">2025</div>
                <div className="dev-body">
                  <div className="dev-cat"><span className="dot d-comm"></span><span>Commercial</span></div>
                  <h3 className="dev-h">NVIDIA BioNeMo partnerships keep expanding.</h3>
                  <p className="dev-p">Continued growth of the BioNeMo platform with new pharma and biotech partners — NVIDIA consolidates its position as the infrastructure layer under the AI-biology stack.</p>
                </div>
              </div>

              <div className="dev-entry">
                <div className="dev-date">H2 2025</div>
                <div className="dev-body">
                  <div className="dev-cat"><span className="dot d-reg"></span><span>Regulatory</span></div>
                  <h3 className="dev-h">AI-bias studies start moving regulatory needles.</h3>
                  <p className="dev-p">Several high-profile studies on algorithmic bias in clinical decision support translate into concrete regulator expectations around equity testing and post-market surveillance. <a href="#signal-05" className="dev-link">→ See Signal 05</a></p>
                </div>
              </div>

              <div className="dev-year">2026</div>

              <div className="dev-entry">
                <div className="dev-date">JAN 2026</div>
                <div className="dev-body">
                  <div className="dev-cat"><span className="dot d-reg"></span><span>Regulatory</span></div>
                  <h3 className="dev-h">EU AI Act high-risk provisions begin phased application.</h3>
                  <p className="dev-p">Provisions of the AI Act covering high-risk systems (including medical AI) move into their compliance window, putting pressure on EU-market medical AI vendors to formalise documentation and oversight.</p>
                </div>
              </div>

            </div>

            <div className="dev-foot">
              <span className="dev-foot-label">{"// READING THIS WEEK"}</span>
              <p>Five signals below take a closer look at the moments above — what they mean, where they could fail, and what they imply for the patient.</p>
            </div>
          </section>

          <div className="signals-content">

            {/* SIGNAL 1 */}
            <article className="signal reveal" id="signal-01" style={{ display: isVisible("diagnostics") ? undefined : "none" }}>
              <div className="signal-meta">
                <div className="num">/ Signal 01</div>
                <div className="tag-row">
                  <span className="tag lime">Diagnostics</span>
                  <span className="tag">Imaging</span>
                </div>
                <div className="date">06 MAY 2026</div>
                <div className="source">
                  <span className="label">{"// Reading from"}</span>
                  Multiple peer-reviewed publications on multimodal foundation models in radiology and pathology
                </div>
              </div>
              <div className="signal-body">
                <h2>A new generation of <em>multimodal</em> foundation models in medical imaging.</h2>
                <p className="summary">Several research groups have published large-scale models trained jointly on radiology images, pathology slides, and the clinical notes that accompany them. The headline result: a single model performs creditably across tasks that previously needed dedicated specialist systems.</p>

                <div className="commentary">
                  <div className="commenter">
                    <div className="avatar a-sage">DR</div>
                    <div className="commenter-info">
                      <div className="commenter-name">Dr. Reem A.</div>
                      <div className="commenter-role">Clinical Lead — Imaging</div>
                    </div>
                    <div className="commenter-quote">&ldquo;</div>
                  </div>

                  <div className="lenses">
                    <div className="lens lens-why">
                      <div className="lens-label">Why it matters</div>
                      <p>It&apos;s the first credible signal that &ldquo;<em>one model, many tasks</em>&rdquo; is a workable shape for medical imaging — not because it beats every specialist tool, but because it removes the integration tax of running ten of them.</p>
                    </div>
                    <div className="lens lens-future">
                      <div className="lens-label">Implications for the future</div>
                      <p>If the trend holds, the bottleneck shifts from <strong>training</strong> to <strong>local validation</strong>. Hospitals will need lightweight, in-house ways to confirm a foundation model performs on their patient population — not buy a new model every six months.</p>
                    </div>
                    <div className="lens lens-fail">
                      <div className="lens-label">Where it could fail</div>
                      <p>On underrepresented populations and rare presentations. Foundation models inherit the demographic biases of their training data; &ldquo;creditable across tasks&rdquo; can mean &ldquo;average across the easy 90% and unreliable on the hard 10%.&rdquo;</p>
                    </div>
                    <div className="lens lens-impact">
                      <div className="lens-label">Real-world impact</div>
                      <p>For a small clinic in Khartoum or Quito, this could collapse three vendor contracts into one — if and only if the local validation story is solved. That second condition is where the work actually happens.</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* SIGNAL 2 */}
            <article className="signal reveal" id="signal-02" style={{ display: isVisible("regulation") ? undefined : "none" }}>
              <div className="signal-meta">
                <div className="num">/ Signal 02</div>
                <div className="tag-row">
                  <span className="tag sage">Regulation</span>
                  <span className="tag">Policy</span>
                </div>
                <div className="date">04 MAY 2026</div>
                <div className="source">
                  <span className="label">{"// Reading from"}</span>
                  FDA Good Machine Learning Practice updates &amp; emerging &ldquo;predetermined change control plan&rdquo; frameworks
                </div>
              </div>
              <div className="signal-body">
                <h2>Regulators converge on <em>&ldquo;how it learns&rdquo;</em>, not just &ldquo;what it learned.&rdquo;</h2>
                <p className="summary">Several regulatory bodies are moving toward review frameworks for the <em>process</em> by which a clinical model continues to update — its drift monitoring, its retraining triggers, its rollback story — rather than re-reviewing each frozen version. The shift is technical but consequential.</p>

                <div className="commentary">
                  <div className="commenter">
                    <div className="avatar a-warm">JK</div>
                    <div className="commenter-info">
                      <div className="commenter-name">Jamal K.</div>
                      <div className="commenter-role">Head of Regulatory &amp; Compliance</div>
                    </div>
                    <div className="commenter-quote">&ldquo;</div>
                  </div>

                  <div className="lenses">
                    <div className="lens lens-why">
                      <div className="lens-label">Why it matters</div>
                      <p>Static medical-device regulation was always a poor fit for ML systems that improve from real use. This is the regulatory world catching up — finally — with how these systems actually live.</p>
                    </div>
                    <div className="lens lens-future">
                      <div className="lens-label">Implications for the future</div>
                      <p>Companies that built their evaluation infrastructure as a <em>continuous practice</em> — not a one-time submission — will find compliance natural. Companies that didn&apos;t will face a slow, expensive rebuild.</p>
                    </div>
                    <div className="lens lens-fail">
                      <div className="lens-label">Where it could fail</div>
                      <p>If &ldquo;process review&rdquo; becomes a checklist that anyone can satisfy on paper while shipping models that drift in practice. The regulators need teeth on the post-market side, not just the submission side.</p>
                    </div>
                    <div className="lens lens-impact">
                      <div className="lens-label">Real-world impact</div>
                      <p>For a clinician using a model six months after deployment: a <strong>much higher chance</strong> the model behaves the way the day-one paperwork claimed. That alone is worth the regulatory churn.</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* SIGNAL 3 */}
            <article className="signal reveal" id="signal-03" style={{ display: isVisible("patient") ? undefined : "none" }}>
              <div className="signal-meta">
                <div className="num">/ Signal 03</div>
                <div className="tag-row">
                  <span className="tag lime">Patient-facing</span>
                  <span className="tag">Triage</span>
                </div>
                <div className="date">02 MAY 2026</div>
                <div className="source">
                  <span className="label">{"// Reading from"}</span>
                  Recent published evaluations of LLM-based symptom checkers vs. traditional triage protocols
                </div>
              </div>
              <div className="signal-body">
                <h2>Symptom checkers <em>quietly</em> caught up to nurse triage on a defined slice of presentations.</h2>
                <p className="summary">A growing body of evaluations finds that LLM-based symptom checkers, given a structured set of common adult presentations, route patients to roughly the same urgency tier as experienced telephone-triage nurses — though the models still struggle with atypical presentations and pediatric cases.</p>

                <div className="commentary">
                  <div className="commenter">
                    <div className="avatar a-lime">LM</div>
                    <div className="commenter-info">
                      <div className="commenter-name">Lucia M.</div>
                      <div className="commenter-role">Bisma Product Lead</div>
                    </div>
                    <div className="commenter-quote">&ldquo;</div>
                  </div>

                  <div className="lenses">
                    <div className="lens lens-why">
                      <div className="lens-label">Why it matters</div>
                      <p>This is the first piece of evidence that <em>&ldquo;talk to a nurse&rdquo;</em> and <em>&ldquo;talk to an LLM&rdquo;</em> are now in the same conversation, at least for routine presentations. That&apos;s not nothing — telephone triage is expensive and rationed everywhere.</p>
                    </div>
                    <div className="lens lens-future">
                      <div className="lens-label">Implications for the future</div>
                      <p>The right shape isn&apos;t replacement — it&apos;s <strong>tiered access</strong>. LLM as front door for routine cases, human nurse for ambiguity, escalation paths everyone trusts. The architecture matters more than the headline accuracy.</p>
                    </div>
                    <div className="lens lens-fail">
                      <div className="lens-label">Where it could fail</div>
                      <p>On the cases that don&apos;t look textbook: the patient who downplays symptoms, the elderly presentation that doesn&apos;t fit &ldquo;fever + cough&rdquo;, the cultural framing that doesn&apos;t match training data. The 90% case being good is dangerous if the 10% gets worse.</p>
                    </div>
                    <div className="lens lens-impact">
                      <div className="lens-label">Real-world impact</div>
                      <p>For someone in a region with one nurse per ten thousand people, this is the difference between a useful first conversation at 2am and silence. The clinical limit isn&apos;t the model — it&apos;s whether the escalation path is honest.</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* SIGNAL 4 */}
            <article className="signal reveal" id="signal-04" style={{ display: isVisible("research") ? undefined : "none" }}>
              <div className="signal-meta">
                <div className="num">/ Signal 04</div>
                <div className="tag-row">
                  <span className="tag sage">Research</span>
                  <span className="tag">Wearables</span>
                </div>
                <div className="date">29 APR 2026</div>
                <div className="source">
                  <span className="label">{"// Reading from"}</span>
                  Recent multi-site studies on consumer-wearable arrhythmia detection in the home setting
                </div>
              </div>
              <div className="signal-body">
                <h2>Consumer wearables are <em>finding</em> arrhythmias clinical follow-up missed.</h2>
                <p className="summary">A handful of multi-site studies report that continuous ECG monitoring from consumer-grade wearables identifies cases of paroxysmal atrial fibrillation that intermittent clinical monitoring missed. The clinical question is whether finding more of it leads to better outcomes — or just more anxiety and prescribing.</p>

                <div className="commentary">
                  <div className="commenter">
                    <div className="avatar a-teal">PV</div>
                    <div className="commenter-info">
                      <div className="commenter-name">Dr. Priya V.</div>
                      <div className="commenter-role">SERA Clinical Co-Lead</div>
                    </div>
                    <div className="commenter-quote">&ldquo;</div>
                  </div>

                  <div className="lenses">
                    <div className="lens lens-why">
                      <div className="lens-label">Why it matters</div>
                      <p>The detection question — <em>can a wrist sensor see this?</em> — is largely answered. The interesting question is now downstream: <strong>does seeing it earlier change anything?</strong> That&apos;s a much harder study to run.</p>
                    </div>
                    <div className="lens lens-future">
                      <div className="lens-label">Implications for the future</div>
                      <p>Continuous monitoring will get cheaper and more accurate every year. The bottleneck moves to the clinical side: who reads the alerts, what do they do with them, and how do you avoid burying the meaningful signal in volume.</p>
                    </div>
                    <div className="lens lens-fail">
                      <div className="lens-label">Where it could fail</div>
                      <p><strong>Overdiagnosis.</strong> If we surface every brief, asymptomatic episode and prescribe anticoagulation accordingly, the bleeding risk could outweigh the stroke risk we were trying to prevent. The signal is real; the response needs to be calibrated.</p>
                    </div>
                    <div className="lens lens-impact">
                      <div className="lens-label">Real-world impact</div>
                      <p>For a 70-year-old at home post-discharge: the difference between a stroke caught at 2am and one caught at the next clinic visit. The infrastructure to act on that signal is what separates &ldquo;useful&rdquo; from &ldquo;telemetry theatre.&rdquo;</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* SIGNAL 5 */}
            <article className="signal reveal" id="signal-05" style={{ display: isVisible("ethics") ? undefined : "none" }}>
              <div className="signal-meta">
                <div className="num">/ Signal 05</div>
                <div className="tag-row">
                  <span className="tag">Ethics</span>
                  <span className="tag">Equity</span>
                </div>
                <div className="date">26 APR 2026</div>
                <div className="source">
                  <span className="label">{"// Reading from"}</span>
                  Ongoing audit work on algorithmic performance gaps across demographic groups
                </div>
              </div>
              <div className="signal-body">
                <h2>The <em>performance gap</em> is the headline. The fix is the deeper story.</h2>
                <p className="summary">Audits of widely deployed clinical AI continue to surface performance differentials across age, sex, and ethnicity. The technical fixes (rebalancing, fairness-aware training, calibration adjustment) have been understood for years. The question is why deployment so often runs ahead of the fix.</p>

                <div className="commentary">
                  <div className="commenter">
                    <div className="avatar a-grey">NB</div>
                    <div className="commenter-info">
                      <div className="commenter-name">Noor B.</div>
                      <div className="commenter-role">Head of Model Evaluation</div>
                    </div>
                    <div className="commenter-quote">&ldquo;</div>
                  </div>

                  <div className="lenses">
                    <div className="lens lens-why">
                      <div className="lens-label">Why it matters</div>
                      <p>A model that works well on the populations it was tested on, and quietly worse on the ones it wasn&apos;t, is <em>not a faulty model</em> — it&apos;s a faulty deployment. The accountability lives with whoever decided to ship.</p>
                    </div>
                    <div className="lens lens-future">
                      <div className="lens-label">Implications for the future</div>
                      <p>Routine subgroup reporting will become non-negotiable in regulatory submissions. The question isn&apos;t whether your model has gaps — every model does — but whether you found them and named them before the auditor did.</p>
                    </div>
                    <div className="lens lens-fail">
                      <div className="lens-label">Where it could fail</div>
                      <p>If subgroup analysis becomes a compliance ritual rather than a feedback loop. Reporting a 10% gap and shipping anyway, with the disclaimer in the appendix, is performative — not corrective.</p>
                    </div>
                    <div className="lens lens-impact">
                      <div className="lens-label">Real-world impact</div>
                      <p>For a patient outside the design population: the difference between care that suits them and care that&apos;s been quietly miscalibrated for them since launch. Equity in AI is a deployment discipline, not a training one.</p>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* SUBSCRIBE */}
            <div className="subscribe reveal">
              <div>
                <h3>Get <em>Signals</em> in your inbox.</h3>
                <p>One short edition every other week. The stories that matter, the ones we&apos;re sceptical about, and what they mean for the patient. No filler.</p>
              </div>
              <div>
                <SubscribeForm />
                <div className="small">No spam. Unsubscribe in one click. Curated by the Sumora team.</div>
              </div>
            </div>

          </div>

          <InnerFoot
            copy="© 2026 Sumora Health · Dubai, UAE · Editorial views are commentary, not clinical advice"
            exclude="signals"
          />

        </div>
      </div>

      <SiteFooter active="signals" />
    </>
  );
}

function SubscribeForm() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      className="subscribe-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <input type="email" placeholder="your@email.com" required />
      <button type="submit">{submitted ? "Subscribed" : "Subscribe"}</button>
    </form>
  );
}
