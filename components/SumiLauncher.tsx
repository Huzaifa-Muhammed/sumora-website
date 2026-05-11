"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function SumiLauncher() {
  const [show, setShow] = useState(false);
  const dismissedRef = useRef(false);

  useEffect(() => {
    try {
      dismissedRef.current =
        sessionStorage.getItem("sumiBubbleDismissed") === "1";
    } catch {
      // no-op
    }
    if (dismissedRef.current) return;

    const t1 = window.setTimeout(() => setShow(true), 2200);
    const t2 = window.setTimeout(() => setShow(false), 12000);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
    };
  }, []);

  function dismiss(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setShow(false);
    try {
      sessionStorage.setItem("sumiBubbleDismissed", "1");
    } catch {
      // no-op
    }
  }

  return (
    <div className="sumi-launcher">
      <div className={`bubble${show ? " show" : ""}`}>
        <span className="close" aria-label="Dismiss" onClick={dismiss}>
          ×
        </span>
        Hi — I&apos;m <em>Sumi</em>. Ask me anything about Sumora.
      </div>
      <Link href="/contact" className="btn" aria-label="Chat with Sumi">
        S
      </Link>
    </div>
  );
}
