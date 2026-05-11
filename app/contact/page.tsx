"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import InnerFoot from "@/components/InnerFoot";
import "./contact.css";

type Msg = { role: "user" | "assistant"; html: string };

const suggestions: { prompt: string; label: string }[] = [
  { prompt: "Tell me about Barnard, your diagnostic AI.", label: "About Barnard" },
  { prompt: "How does VRx detect counterfeit medicines?", label: "How VRx works" },
  { prompt: "I'd like to discuss a pilot for my hospital.", label: "Discuss a pilot" },
  { prompt: "What roles are open at Sumora?", label: "Open roles" },
];

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function formatResponse(text: string): string {
  let safe = escapeHtml(text);
  safe = safe.replace(/&lt;em&gt;/g, "<em>").replace(/&lt;\/em&gt;/g, "</em>");
  safe = safe.replace(/&lt;strong&gt;/g, "<strong>").replace(/&lt;\/strong&gt;/g, "</strong>");
  safe = safe.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
  safe = safe.replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>");
  const lines = safe.split("\n");
  let html = "";
  let inList = false;
  for (const line of lines) {
    const trimmed = line.trim();
    if (/^[-•]\s+/.test(trimmed)) {
      if (!inList) {
        html += "<ul>";
        inList = true;
      }
      html += `<li>${trimmed.replace(/^[-•]\s+/, "")}</li>`;
    } else {
      if (inList) {
        html += "</ul>";
        inList = false;
      }
      if (trimmed) html += `<p>${trimmed}</p>`;
    }
  }
  if (inList) html += "</ul>";
  return html;
}

export default function ContactPage() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      html:
        "<p>Hello — I'm <em>Sumi</em>, Sumora Health's AI assistant. I can answer questions about our four products, the platform, pilots, careers, or anything else about the company.</p>" +
        "<p>What brings you here today?</p>",
    },
  ]);
  const [history, setHistory] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [typing, setTyping] = useState(false);
  const [suggestionsHidden, setSuggestionsHidden] = useState(false);
  const messagesRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, typing]);

  async function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed || sending) return;

    setSuggestionsHidden(true);
    setMessages((m) => [
      ...m,
      { role: "user", html: `<p>${escapeHtml(trimmed)}</p>` },
    ]);
    const nextHistory = [
      ...history,
      { role: "user" as const, content: trimmed },
    ];
    setHistory(nextHistory);
    setInput("");
    if (inputRef.current) inputRef.current.style.height = "auto";
    setSending(true);
    setTyping(true);

    try {
      const r = await fetch("/api/sumi-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextHistory }),
      });
      const data = await r.json();
      setTyping(false);

      const reply: string | undefined = Array.isArray(data?.content)
        ? data.content
            .filter((b: { type: string }) => b.type === "text")
            .map((b: { text: string }) => b.text)
            .join("\n")
        : undefined;

      if (reply) {
        setMessages((m) => [
          ...m,
          { role: "assistant", html: formatResponse(reply) },
        ]);
        setHistory((h) => [
          ...h,
          { role: "assistant", content: reply },
        ]);
      } else {
        setMessages((m) => [
          ...m,
          {
            role: "assistant",
            html:
              '<p>I had trouble responding just now. You can email <a href="mailto:hello@sumora.health">hello@sumora.health</a> and a human will get back to you shortly.</p>',
          },
        ]);
      }
    } catch {
      setTyping(false);
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          html:
            '<p>I&apos;m having trouble connecting. Please try again, or reach us at <a href="mailto:hello@sumora.health">hello@sumora.health</a>.</p>',
        },
      ]);
    } finally {
      setSending(false);
      inputRef.current?.focus();
    }
  }

  return (
    <>
      <div className="page-wrap contact-page">
        <div className="card">
          <SiteHeader currentPage="contact" withBorder />

          <section className="page-hero">
            <div>
              <div className="eyebrow">
                <span className="live"></span>Live · powered by AI
              </div>
              <h1 className="page-title">
                Meet <em>Sumi</em>.<br />Our AI <em>concierge</em>.
              </h1>
            </div>
            <div className="page-aside">
              <p>Ask anything about our products, the platform, pilots, or careers. Sumi can answer in seconds and route you to a human when it makes sense.</p>
            </div>
          </section>

          <div className="chat-area">
            <div className="chat-window">
              <div className="chat-header">
                <div className="chat-avatar">S</div>
                <div className="chat-info">
                  <h3>Chat with <em>Sumi</em></h3>
                  <div className="status">Online · usually replies instantly</div>
                </div>
              </div>

              <div className="chat-messages" ref={messagesRef}>
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`msg ${m.role === "user" ? "user" : "bot"}`}
                    dangerouslySetInnerHTML={{ __html: m.html }}
                  />
                ))}
                {typing ? (
                  <div className="msg bot typing">
                    <div className="typing-dots">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                ) : null}
              </div>

              {!suggestionsHidden ? (
                <div className="chat-suggestions">
                  {suggestions.map((s) => (
                    <div
                      key={s.label}
                      className="suggestion"
                      onClick={() => send(s.prompt)}
                    >
                      {s.label}
                    </div>
                  ))}
                </div>
              ) : null}

              <div className="disclaimer">Sumi is an AI assistant. For clinical or urgent matters, please contact a healthcare professional directly.</div>

              <div className="chat-input-row">
                <textarea
                  className="chat-input"
                  ref={inputRef}
                  rows={1}
                  placeholder="Ask Sumi anything about Sumora..."
                  value={input}
                  onChange={(e) => {
                    setInput(e.target.value);
                    const ta = e.target as HTMLTextAreaElement;
                    ta.style.height = "auto";
                    ta.style.height = Math.min(ta.scrollHeight, 120) + "px";
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      send(input);
                    }
                  }}
                />
                <button
                  className="send-btn"
                  aria-label="Send"
                  disabled={sending}
                  onClick={() => send(input)}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12 H19 M13 6 L19 12 L13 18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Other ways to reach us */}
            <div className="other-ways">

              <a href="mailto:hello@sumora.health" className="way">
                <div className="way-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <rect x="3" y="6" width="18" height="13" rx="2" />
                    <path d="M3 8 L12 14 L21 8" />
                  </svg>
                </div>
                <h4>Prefer <em>email?</em></h4>
                <p>For pilots, partnerships, press or anything you&apos;d rather put in writing.</p>
                <span className="target">hello@sumora.health <span className="arr">→</span></span>
              </a>

              <Link href="/careers" className="way">
                <div className="way-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <circle cx="12" cy="8" r="4" />
                    <path d="M4 21 C4 16 8 14 12 14 C16 14 20 16 20 21" />
                  </svg>
                </div>
                <h4>Want to <em>join us?</em></h4>
                <p>Seven roles open across engineering, clinical, design, and ops. We try to reply within two weeks.</p>
                <span className="target">See open roles <span className="arr">→</span></span>
              </Link>

              <a href="mailto:clinicians@sumora.health" className="way">
                <div className="way-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M12 3 V21 M3 12 H21" />
                  </svg>
                </div>
                <h4>You&apos;re a <em>clinician?</em></h4>
                <p>Join the global advisory and shape what we ship. A few hours a month, paid, your specialty welcome.</p>
                <span className="target">clinicians@sumora.health <span className="arr">→</span></span>
              </a>

              <div className="where-block">
                <h4>Where to find us</h4>
                <div className="addr">
                  <em>Sumora Health</em><br />
                  Dubai, United Arab Emirates<br />
                  Founded 2024
                </div>
                <div className="hours">MON–FRI · 09:00–18:00 GST · CHAT 24/7</div>
              </div>

            </div>
          </div>

          <InnerFoot exclude="contact" />

        </div>
      </div>

      <SiteFooter active="contact" />
    </>
  );
}
