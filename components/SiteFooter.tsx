import Link from "next/link";

type ActivePage = "about" | "careers" | "contact" | "signals" | "technology";

export default function SiteFooter({
  active,
}: {
  active?: ActivePage;
}) {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="sf-brand">
          <Link href="/" className="brand">
            <span className="brand-mark" style={{ background: "var(--lime)" }}></span>
            sumora<span className="reg">®</span>
          </Link>
          <p>
            An AI healthcare company building intelligent systems for
            clinicians, patients, and the care that connects them.
          </p>
          <div className="loc">DUBAI · UAE</div>
        </div>
        <div className="sf-col">
          <h4>Solutions</h4>
          <ul>
            <li><Link href="/#solutions">Barnard</Link></li>
            <li><Link href="/#solutions">VRx</Link></li>
            <li><Link href="/#solutions">SERA</Link></li>
            <li><Link href="/#solutions">Bisma</Link></li>
          </ul>
        </div>
        <div className="sf-col">
          <h4>Company</h4>
          <ul>
            <li>
              <Link href="/about" className={active === "about" ? "active" : undefined}>
                About
              </Link>
            </li>
            <li>
              <Link href="/careers" className={active === "careers" ? "active" : undefined}>
                Careers
              </Link>
            </li>
            <li>
              <Link href="/contact" className={active === "contact" ? "active" : undefined}>
                Contact
              </Link>
            </li>
            <li>
              <Link href="/signals" className={active === "signals" ? "active" : undefined}>
                Signals
              </Link>
            </li>
          </ul>
        </div>
        <div className="sf-col">
          <h4>Trust</h4>
          <ul>
            <li><Link href="/technology#evaluation">Evaluation</Link></li>
            <li><Link href="/technology#limits">Limitations</Link></li>
            <li><Link href="/technology#references">References</Link></li>
            <li>
              <Link href="/technology" className={active === "technology" ? "active" : undefined}>
                Technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="site-footer-bottom">
        <div>© 2026 Sumora Health · All rights reserved</div>
        <div>Designed in Dubai · Trained on consented data</div>
      </div>
    </footer>
  );
}
