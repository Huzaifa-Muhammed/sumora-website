import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import InnerFoot from "@/components/InnerFoot";
import RevealOnScroll from "@/components/RevealOnScroll";
import "./technology.css";

export const metadata = {
  title: "Technology — Sumora Health",
};

export default function TechnologyPage() {
  return (
    <>
      <RevealOnScroll />

      <div className="page-wrap">
        <div className="card">
          <SiteHeader currentPage="technology" withBorder />

          <section className="page-hero">
            <div>
              <div className="eyebrow">Technology</div>
              <h1 className="page-title">How AI <em>actually</em><br />meets medicine.</h1>
            </div>
            <div className="page-aside">
              <p>An honest, technical overview of the models, data, and evaluation behind Sumora&apos;s products — and the limits we hold ourselves to.</p>
            </div>
          </section>

          <div className="anchor-bar">
            <a href="#approach">Our approach</a>
            <a href="#stack">The model stack</a>
            <a href="#barnard">Barnard worked example</a>
            <a href="#vrx">VRx pipeline</a>
            <a href="#sera">SERA signal processing</a>
            <a href="#evaluation">How we evaluate</a>
            <a href="#limits">Limitations</a>
            <a href="#references">References</a>
          </div>

          <div className="content">

            {/* APPROACH */}
            <section className="block reveal" id="approach">
              <div>
                <div className="block-label">Our Approach</div>
                <h2>AI as a <em>second pair of eyes</em> — never a replacement.</h2>
              </div>
              <div className="block-body">
                <p>Sumora&apos;s products are built around a simple operating principle: AI augments the clinician&apos;s judgement, surfaces patterns a tired human might miss, and watches data streams that no one would otherwise watch. The clinician remains accountable. Always.</p>

                <p>This isn&apos;t only an ethical stance. It&apos;s also what the evidence supports. Across published radiology, dermatology, and pathology studies, the strongest results consistently come from <strong>clinician + AI</strong> configurations rather than AI alone <span style={{ color: "var(--muted)" }}>[1, 2]</span>. Our models, our user interfaces, and our evaluation protocols are all built around that finding.</p>

                <h3>Three commitments that <em>shape every model</em> we ship</h3>

                <p><strong>Calibration over confidence.</strong> A model that says &ldquo;70% likely&rdquo; should be right 70% of the time on cases like this one. We measure and report calibration alongside accuracy, because a confidently wrong model is worse than no model at all <span style={{ color: "var(--muted)" }}>[3]</span>.</p>

                <p><strong>Reasoning is shown, not hidden.</strong> Every Barnard suggestion comes with the features it weighed and the literature it drew from. A clinician who disagrees can see exactly where to disagree.</p>

                <p><strong>Out-of-distribution awareness.</strong> Models flag when they&apos;re being asked something they weren&apos;t trained for. A pediatric-trained model declines an adult case rather than guessing.</p>
              </div>
            </section>

            {/* STACK */}
            <section className="block reveal" id="stack">
              <div>
                <div className="block-label">The Model Stack</div>
                <h2>Different problems,<br /><em>different</em> models.</h2>
              </div>
              <div className="block-body">
                <p>&ldquo;AI&rdquo; in healthcare covers wildly different techniques. We don&apos;t use one giant model for everything — we use the right family of model for the right problem, and combine them carefully when products span more than one.</p>

                <div className="stack-diagram">
                  <div className="stack-row">
                    <div className="layer-num">FOUNDATION</div>
                    <div>
                      <div className="layer-name">Large language models <em>(reasoning + dialogue)</em></div>
                      <div className="layer-detail">For clinical reasoning chains, patient-facing conversation, and synthesising free-text notes. Used in Barnard&apos;s differential generation and Bisma&apos;s triage flow.</div>
                    </div>
                    <div className="layer-tag">LLM</div>
                  </div>
                  <div className="stack-row">
                    <div className="layer-num">VISION</div>
                    <div>
                      <div className="layer-name">Convolutional + vision-transformer models <em>(images)</em></div>
                      <div className="layer-detail">For VRx packaging verification (CNN ensembles for hologram detection, ViT for printed-mark micro-features) and supporting Barnard&apos;s image inputs (X-ray, dermoscopy).</div>
                    </div>
                    <div className="layer-tag">CV</div>
                  </div>
                  <div className="stack-row">
                    <div className="layer-num">SIGNALS</div>
                    <div>
                      <div className="layer-name">Time-series models <em>(physiological streams)</em></div>
                      <div className="layer-detail">For SERA&apos;s continuous vitals monitoring. 1D-CNN and Transformer architectures over heart rhythm, SpO₂, and movement data, with anomaly detection layered on top.</div>
                    </div>
                    <div className="layer-tag">TS</div>
                  </div>
                  <div className="stack-row">
                    <div className="layer-num">STRUCTURED</div>
                    <div>
                      <div className="layer-name">Gradient-boosted trees <em>(labs + tabular)</em></div>
                      <div className="layer-detail">For risk scoring on lab panels, vitals snapshots, and EHR-derived features. Boring, well-understood, and often the right tool — strong baselines that newer architectures rarely beat on tabular data <span style={{ color: "var(--muted)" }}>[4]</span>.</div>
                    </div>
                    <div className="layer-tag">GBT</div>
                  </div>
                  <div className="stack-row">
                    <div className="layer-num">RETRIEVAL</div>
                    <div>
                      <div className="layer-name">Medical-knowledge retrieval <em>(citations)</em></div>
                      <div className="layer-detail">A vector store over curated, peer-reviewed sources (clinical reference texts, PubMed abstracts, society guidelines) so LLM outputs are grounded in citable evidence rather than free-floating training memory.</div>
                    </div>
                    <div className="layer-tag">RAG</div>
                  </div>
                </div>

                <p>Why this layered approach matters: a single model trying to do all of these things would be worse at each one and harder to evaluate. Specialised models with clear inputs and outputs are easier to test, audit, and update independently when better techniques arrive.</p>
              </div>
            </section>

            {/* BARNARD WORKED EXAMPLE */}
            <section className="block reveal" id="barnard">
              <div>
                <div className="block-label">Barnard · Worked Example</div>
                <h2>How a <em>diagnosis</em> gets ranked.</h2>
              </div>
              <div className="block-body">
                <p>The clearest way to explain Barnard is to walk through one anonymised, illustrative case end-to-end. The case below is composite — built from common presentations to demonstrate the workflow, not a real patient. Numbers are illustrative, not benchmark claims.</p>

                <div className="case">
                  <div className="case-meta">
                    <span className="pill-active">ILLUSTRATIVE CASE</span>
                    <span>Setting: General practice</span>
                    <span>Time: 90 seconds</span>
                  </div>
                  <h4>A 58-year-old presents with <em>chest discomfort</em> on exertion.</h4>

                  <div className="case-grid">
                    <div className="case-side">
                      <h5>Inputs to Barnard</h5>
                      <ul>
                        <li>Age, sex, BMI, smoking status</li>
                        <li>Symptom narrative (free-text, transcribed)</li>
                        <li>Vitals: BP 148/92, HR 88, SpO₂ 97%</li>
                        <li>Recent labs (lipid panel, HbA1c)</li>
                        <li>Family history flags</li>
                        <li>Resting ECG image</li>
                      </ul>
                    </div>
                    <div className="case-side">
                      <h5>Pipeline</h5>
                      <ul>
                        <li>LLM extracts structured features from the narrative</li>
                        <li>ECG image scored by a vision model</li>
                        <li>Tabular model produces a CV-risk estimate</li>
                        <li>Reasoning model combines them, retrieves relevant guidelines, ranks differentials with calibrated probabilities</li>
                      </ul>
                    </div>
                  </div>

                  <div className="reasoning">
                    <span className="label">// Barnard output (ranked differential)</span>
                    <div className="ranked">
                      <div className="ranked-item">
                        <span className="rank-name">Stable angina</span>
                        <div className="rank-bar"><div className="fill" style={{ width: "62%" }}></div></div>
                        <span className="rank-pct">~62%</span>
                      </div>
                      <div className="ranked-item">
                        <span className="rank-name">GERD / oesophageal</span>
                        <div className="rank-bar"><div className="fill" style={{ width: "18%" }}></div></div>
                        <span className="rank-pct">~18%</span>
                      </div>
                      <div className="ranked-item">
                        <span className="rank-name">Musculoskeletal</span>
                        <div className="rank-bar"><div className="fill" style={{ width: "12%" }}></div></div>
                        <span className="rank-pct">~12%</span>
                      </div>
                      <div className="ranked-item">
                        <span className="rank-name">Anxiety-related</span>
                        <div className="rank-bar"><div className="fill" style={{ width: "5%" }}></div></div>
                        <span className="rank-pct">~5%</span>
                      </div>
                      <div className="ranked-item">
                        <span className="rank-name">Other / further workup</span>
                        <div className="rank-bar"><div className="fill" style={{ width: "3%" }}></div></div>
                        <span className="rank-pct">~3%</span>
                      </div>
                    </div>
                    <div style={{ marginTop: "14px", paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.75)" }}>
                      Suggested next steps: exercise stress test, troponin if pain recurs at rest, lipid management. Cited: ESC chronic coronary syndrome guideline; NICE CG95 (chest pain of recent onset).
                    </div>
                  </div>
                </div>

                <p>The clinician sees the ranking, the features that drove it (age + exertional pattern + ECG findings + lipid profile), and the cited guidelines. They&apos;re free to disagree, override, and document why. <strong>Every override is logged and used to improve calibration over time.</strong></p>

                <p>Barnard does not — and should not — make autonomous decisions. Its output is one input among many that the clinician weighs.</p>
              </div>
            </section>

            {/* VRX PIPELINE */}
            <section className="block reveal" id="vrx">
              <div>
                <div className="block-label">VRx · The Verification Pipeline</div>
                <h2>From phone <em>camera</em><br />to verified packet.</h2>
              </div>
              <div className="block-body">
                <p>VRx turns a phone into a counterfeit-detection tool. The pipeline runs partly on-device for speed and partly in the cloud for verification against pharmaceutical-company reference data.</p>

                <div className="pipeline">
                  <div className="stage">
                    <div className="num">/ 01 CAPTURE</div>
                    <h5>Camera <em>frame</em></h5>
                    <p>User points the phone at packaging. App stabilises, detects packet orientation, and selects the best frame.</p>
                  </div>
                  <div className="stage">
                    <div className="num">/ 02 ON-DEVICE</div>
                    <h5>Feature <em>extraction</em></h5>
                    <p>Mobile-optimised CNN identifies hologram regions, print boundaries, batch-code blocks, and packaging colour signature.</p>
                  </div>
                  <div className="stage">
                    <div className="num">/ 03 CLOUD</div>
                    <h5>Reference <em>match</em></h5>
                    <p>Extracted features are compared against the manufacturer&apos;s reference fingerprint for that batch and lot number.</p>
                  </div>
                  <div className="stage">
                    <div className="num">/ 04 RESULT</div>
                    <h5>Verified <em>or flagged</em></h5>
                    <p>Result returned in seconds: verified, suspect, or unable-to-verify (with the specific failing checks shown).</p>
                  </div>
                </div>

                <h3>What the model is <em>actually looking at</em></h3>
                <p>Counterfeit packaging usually fails on the small details — the things a forger can&apos;t reproduce cheaply at scale. VRx&apos;s vision model is trained to find those specific signals:</p>

                <div className="feature-table">
                  <div className="row">
                    <div className="cell k">hologram_consistency</div>
                    <div className="cell v">Diffraction pattern under different angles. Genuine holograms shift colour predictably; counterfeits are usually static stickers or low-fidelity reproductions.</div>
                  </div>
                  <div className="row">
                    <div className="cell k">print_microfeatures</div>
                    <div className="cell v">Sub-millimetre print details: kerning, edge sharpness, security micro-text. Inkjet copies show a characteristic dot pattern absent in offset printing.</div>
                  </div>
                  <div className="row">
                    <div className="cell k">colour_signature</div>
                    <div className="cell v">Spectral profile of the packaging compared to the manufacturer&apos;s reference. Counterfeit dyes drift outside tolerance bounds.</div>
                  </div>
                  <div className="row">
                    <div className="cell k">batch_lot_consistency</div>
                    <div className="cell v">Cross-checks the printed lot/batch code against the manufacturer&apos;s database for that production run, including expiry validation.</div>
                  </div>
                </div>

                <p>The verification network only works to the extent that pharmaceutical manufacturers contribute reference data. Sumora&apos;s partnership programme is structured to make that easy: a manufacturer onboards once, and from that point every VRx scan in the field protects their brand and their patients.</p>
              </div>
            </section>

            {/* SERA SIGNAL PROCESSING */}
            <section className="block reveal" id="sera">
              <div>
                <div className="block-label">SERA · Signal Processing</div>
                <h2>Listening to the <em>signals</em><br />a patient sends home.</h2>
              </div>
              <div className="block-body">
                <p>SERA&apos;s core problem is signal triage at scale. A single patient on continuous monitoring produces hundreds of thousands of data points per day. Most of it is normal. The work is finding the small fraction that isn&apos;t — without flooding the clinical team with false alarms.</p>

                <h3>What SERA is <em>watching for</em></h3>
                <p>The model layer combines on-device anomaly detection with cloud-side context-aware classification:</p>

                <div className="feature-table">
                  <div className="row">
                    <div className="cell k">arrhythmia detection</div>
                    <div className="cell v">A 1D convolutional network trained on annotated ECG data identifies rhythm abnormalities (atrial fibrillation, supraventricular tachycardia, ventricular ectopy). Comparable architectures have reached cardiologist-level performance on specific tasks <span style={{ color: "var(--muted)" }}>[5]</span>.</div>
                  </div>
                  <div className="row">
                    <div className="cell k">deterioration trend</div>
                    <div className="cell v">Modified Early Warning Score (NEWS2) computed continuously, with smoothed trend lines. Used in clinical practice for years — SERA&apos;s contribution is making it run between hospital visits, not at the bedside <span style={{ color: "var(--muted)" }}>[6]</span>.</div>
                  </div>
                  <div className="row">
                    <div className="cell k">contextual filtering</div>
                    <div className="cell v">A separate model down-weights spurious alerts: a heart rate spike during recorded movement, a brief desaturation while the sensor was being adjusted. This is where false-alarm reduction lives.</div>
                  </div>
                  <div className="row">
                    <div className="cell k">escalation logic</div>
                    <div className="cell v">Tiered: a single anomaly is logged silently. Persistent or worsening anomalies notify the patient. Critical patterns notify the care team directly, with the raw signal waveform attached.</div>
                  </div>
                </div>

                <p>The escalation thresholds are not magic numbers — they&apos;re configured per-patient by their care team, based on baseline values, prior conditions, and recovery stage. A post-cardiac-surgery patient and a chronic-disease patient at home need different sensitivity profiles.</p>

                <h3>Why <em>false alarm</em> rate is the metric we obsess over</h3>
                <p>Continuous monitoring has a known failure mode: <strong>alarm fatigue</strong>. If a system raises alerts too often, clinicians stop responding to all of them, including the real ones <span style={{ color: "var(--muted)" }}>[7]</span>. SERA is evaluated as much on its specificity (true negative rate) as on its sensitivity. The honest target isn&apos;t &ldquo;catch everything&rdquo; — it&apos;s &ldquo;be trustworthy enough that the alerts you do raise are taken seriously.&rdquo;</p>
              </div>
            </section>

            {/* EVALUATION */}
            <section className="block reveal" id="evaluation">
              <div>
                <div className="block-label">How We Evaluate</div>
                <h2>The <em>numbers</em> we report<br />and the ones we don&apos;t.</h2>
              </div>
              <div className="block-body">
                <p>&ldquo;Accuracy&rdquo; alone is almost meaningless in clinical AI. A model that says &ldquo;no disease&rdquo; to every patient in a population where 5% have the disease is 95% accurate — and useless. We evaluate every clinical-facing model across a fuller set of measures, on held-out data the model has never seen, with subgroup analysis to catch performance gaps.</p>

                <div className="metrics">
                  <div className="metric">
                    <div className="v">AUROC</div>
                    <div className="l">Discrimination across thresholds</div>
                  </div>
                  <div className="metric">
                    <div className="v">Sens<em>./</em>Spec</div>
                    <div className="l">At clinically chosen thresholds</div>
                  </div>
                  <div className="metric">
                    <div className="v">PPV<em>/</em>NPV</div>
                    <div className="l">At expected disease prevalence</div>
                  </div>
                  <div className="metric">
                    <div className="v">ECE</div>
                    <div className="l">Expected calibration error</div>
                  </div>
                </div>

                <h3>The protocol on <em>every</em> Sumora model</h3>
                <div className="feature-table">
                  <div className="row">
                    <div className="cell k">held-out test set</div>
                    <div className="cell v">A geographically and temporally separate dataset the model has never seen during training or hyperparameter tuning. No exceptions.</div>
                  </div>
                  <div className="row">
                    <div className="cell k">subgroup analysis</div>
                    <div className="cell v">Performance reported separately by age band, sex, ethnicity (where available and consented), and clinical setting. Gaps trigger investigation, not silence.</div>
                  </div>
                  <div className="row">
                    <div className="cell k">prospective validation</div>
                    <div className="cell v">Before clinical deployment, every model is run shadow-mode against live data at partner sites for a defined period, with disagreement cases reviewed by clinicians.</div>
                  </div>
                  <div className="row">
                    <div className="cell k">drift monitoring</div>
                    <div className="cell v">Once deployed, distribution drift on inputs and predictions is monitored continuously. Models retrain on a defined cadence with new data and re-evaluation.</div>
                  </div>
                  <div className="row">
                    <div className="cell k">adverse event capture</div>
                    <div className="cell v">A formal channel for clinicians to flag suspected model errors. Every report is investigated; trends inform the next training cycle.</div>
                  </div>
                </div>

                <p>What we don&apos;t do: cherry-pick the best evaluation slice for marketing. If a model performs well on adults and poorly on adolescents, both numbers go in the report. If a competitor&apos;s published number is higher than ours on a benchmark, we say so and explain why.</p>
              </div>
            </section>

            {/* LIMITS */}
            <section className="block reveal" id="limits">
              <div>
                <div className="block-label">Limitations</div>
                <h2>What our AI <em>cannot</em> do.</h2>
              </div>
              <div className="block-body">
                <p>An honest technology page lists the boundaries as clearly as the capabilities. These aren&apos;t temporary engineering gaps — they&apos;re principled limits we hold ourselves to. Anyone claiming otherwise about clinical AI should be treated with caution.</p>

                <div className="limitations">
                  <h4>Boundaries we <em>name openly</em></h4>
                  <ul>
                    <li><span className="marker">/ 01</span><span>Sumora&apos;s models do not make autonomous clinical decisions. Every clinically significant output is a suggestion to a licensed clinician, not a directive.</span></li>
                    <li><span className="marker">/ 02</span><span>Performance degrades on patient populations that differ materially from training data. We name the populations our models are validated on, and decline cases that fall meaningfully outside them.</span></li>
                    <li><span className="marker">/ 03</span><span>Bisma is a triage assistant, not a diagnostic device. It is designed to help patients seek care appropriately, never to replace it.</span></li>
                    <li><span className="marker">/ 04</span><span>VRx verifies what manufacturers have provided reference data for. Medicines from manufacturers not in the network return &ldquo;unable to verify&rdquo; — never a false positive.</span></li>
                    <li><span className="marker">/ 05</span><span>SERA monitors what its sensors can measure. It cannot detect conditions that don&apos;t manifest in observable physiological signals, and it is not a substitute for clinically indicated continuous monitoring.</span></li>
                    <li><span className="marker">/ 06</span><span>No Sumora product diagnoses, treats, cures, or prevents disease as a regulatory claim. Specific clinical indications follow specific regulatory clearances; we report those clearances honestly as they are obtained.</span></li>
                  </ul>
                </div>
              </div>
            </section>

            {/* REFERENCES */}
            <section className="block reveal" id="references" style={{ borderBottom: "1px solid var(--line)" }}>
              <div>
                <div className="block-label">References</div>
                <h2>Where the <em>evidence</em> sits.</h2>
              </div>
              <div className="block-body">
                <p>Selected sources cited above. This is a working bibliography, not an exhaustive one — the field is large and moving. We prioritise peer-reviewed journals, regulatory body guidance, and open clinical guidelines.</p>

                <div className="references">
                  <h5>// Cited above</h5>
                  <ol>
                    <li>Topol, E. J. (2019). High-performance medicine: the convergence of human and artificial intelligence. <em>Nature Medicine</em>, 25(1), 44–56.</li>
                    <li>McKinney, S. M. et al. (2020). International evaluation of an AI system for breast cancer screening. <em>Nature</em>, 577, 89–94.</li>
                    <li>Van Calster, B. et al. (2019). Calibration: the Achilles heel of predictive analytics. <em>BMC Medicine</em>, 17(1), 230.</li>
                    <li>Grinsztajn, L., Oyallon, E., &amp; Varoquaux, G. (2022). Why do tree-based models still outperform deep learning on tabular data? <em>NeurIPS</em>.</li>
                    <li>Hannun, A. Y. et al. (2019). Cardiologist-level arrhythmia detection and classification in ambulatory electrocardiograms using a deep neural network. <em>Nature Medicine</em>, 25(1), 65–69.</li>
                    <li>Royal College of Physicians. (2017). National Early Warning Score (NEWS) 2: Standardising the assessment of acute-illness severity in the NHS.</li>
                    <li>Sendelbach, S., &amp; Funk, M. (2013). Alarm fatigue: a patient safety concern. <em>AACN Advanced Critical Care</em>, 24(4), 378–386.</li>
                  </ol>
                </div>

                <h3>Standards <em>we build against</em></h3>
                <p>Beyond the cited literature, our development and evaluation processes draw from: <strong>FDA</strong> Good Machine Learning Practice (GMLP) guiding principles for medical device software; <strong>WHO</strong> ethics and governance of artificial intelligence for health; <strong>ISO 14971</strong> for risk management of medical devices; <strong>HL7 FHIR</strong> for interoperability; and <strong>HIPAA</strong>, <strong>GDPR</strong>, and the <strong>UAE Dubai Health Authority</strong> data frameworks for privacy and security.</p>
              </div>
            </section>

            <div className="cta-strip reveal">
              <h3>Want to see this <em>in practice</em>, or have a question for our team?</h3>
              <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <Link href="/contact" className="pill-light">Talk to Sumi →</Link>
                <a href="mailto:hello@sumora.health" className="pill-ghost">hello@sumora.health</a>
              </div>
            </div>

          </div>

          <InnerFoot exclude="technology" />

        </div>
      </div>

      <SiteFooter active="technology" />
    </>
  );
}
