"use client";

import { useEffect } from "react";

/**
 * Soft deterrent for casual snooping. Blocks right-click and the common
 * devtools keyboard shortcuts, and prints a styled warning to the console.
 *
 * This is NOT real security — anyone determined can still open devtools via
 * the browser menu and read all client-side code. Real secrets live on the
 * server (see `app/api/sumi-chat/route.ts`).
 */
export default function DevtoolsDeterrent() {
  useEffect(() => {
    function onContextMenu(e: MouseEvent) {
      e.preventDefault();
    }

    function onKeyDown(e: KeyboardEvent) {
      // F12 — devtools
      if (e.key === "F12") {
        e.preventDefault();
        return;
      }
      // Ctrl/Cmd + Shift + I / J / C — devtools panels
      if ((e.ctrlKey || e.metaKey) && e.shiftKey) {
        const k = e.key.toLowerCase();
        if (k === "i" || k === "j" || k === "c") {
          e.preventDefault();
          return;
        }
      }
      // Ctrl/Cmd + U — view source
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "u") {
        e.preventDefault();
        return;
      }
      // Ctrl/Cmd + S — save page
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "s") {
        e.preventDefault();
        return;
      }
    }

    document.addEventListener("contextmenu", onContextMenu);
    document.addEventListener("keydown", onKeyDown);

    // Styled console banner — last warning shelf.
    if (typeof window !== "undefined") {
      const style1 = "color:#D9F255;background:#0E1315;font-size:18px;padding:8px 14px;font-weight:600;";
      const style2 = "color:#0E1315;background:#FAFAF7;font-size:12px;padding:6px 12px;";
      // eslint-disable-next-line no-console
      console.log("%cSumora Health", style1);
      // eslint-disable-next-line no-console
      console.log(
        "%cThis console is for developers. If someone asked you to paste code here, close it — that's a common scam.",
        style2
      );
    }

    return () => {
      document.removeEventListener("contextmenu", onContextMenu);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return null;
}
