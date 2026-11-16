"use client";

import { useEffect, useState } from "react";
import { openPalette, toggleTheme } from "./CommandPalette";
import { profile } from "../data/profile";

export function PaletteButton() {
  const [mac, setMac] = useState(true);
  useEffect(() => setMac(/Mac|iPhone|iPad/.test(navigator.platform)), []);
  return (
    <button type="button" className="kbd-btn" onClick={openPalette} aria-label="Open command menu">
      <span>Menu</span>
      <kbd>{mac ? "⌘" : "Ctrl"} K</kbd>
    </button>
  );
}

export function ThemeButton() {
  return (
    <button type="button" className="icon-btn" onClick={toggleTheme} aria-label="Switch light or dark theme">
      <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M12 3a9 9 0 0 1 0 18z" fill="currentColor" />
      </svg>
    </button>
  );
}

export function LocalTime() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: profile.timeZone });
    setTime(fmt());
    const id = setInterval(() => setTime(fmt()), 15000);
    return () => clearInterval(id);
  }, []);
  return <span suppressHydrationWarning>{time || "--:--"}</span>;
}

export function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (e) {}
  };
  return (
    <button type="button" className="btn ghost" onClick={copy}>
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}
