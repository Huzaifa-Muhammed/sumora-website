import Link from "next/link";

const allLinks = [
  { href: "/", label: "Home", key: "home" as const },
  { href: "/technology", label: "Technology", key: "technology" as const },
  { href: "/about", label: "About", key: "about" as const },
  { href: "/signals", label: "Signals", key: "signals" as const },
  { href: "/careers", label: "Careers", key: "careers" as const },
  { href: "/contact", label: "Contact", key: "contact" as const },
];

type Page = "home" | "technology" | "about" | "signals" | "careers" | "contact";

export default function InnerFoot({
  copy = "© 2026 Sumora Health · Dubai, UAE",
  exclude,
}: {
  copy?: string;
  exclude?: Page;
}) {
  return (
    <div className="foot">
      <div>{copy}</div>
      <div>
        {allLinks
          .filter((l) => l.key !== exclude)
          .map((l) => (
            <Link key={l.href} href={l.href}>
              {l.label}
            </Link>
          ))}
      </div>
    </div>
  );
}
