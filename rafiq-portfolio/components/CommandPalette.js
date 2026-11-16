"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { profile } from "../data/profile";

export function openPalette() {
  window.dispatchEvent(new Event("open-palette"));
}

export function toggleTheme() {
  const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem("theme", next);
  } catch (e) {}
}

function go(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const [note, setNote] = useState("");
  const input = useRef(null);

  const commands = useMemo(() => {
    const list = [
      { label: "Go to work", hint: "Section", run: () => go("work") },
      { label: "Go to projects", hint: "Section", run: () => go("projects") },
      { label: "Go to skills", hint: "Section", run: () => go("skills") },
      { label: "Go to education", hint: "Section", run: () => go("education") },
      { label: "Go to contact", hint: "Section", run: () => go("contact") },
      {
        label: "Copy email address",
        hint: profile.email,
        keep: true,
        run: async () => {
          try {
            await navigator.clipboard.writeText(profile.email);
            setNote("Email copied");
          } catch (e) {
            setNote(profile.email);
          }
        },
      },
      { label: "Switch light or dark theme", hint: "Theme", run: toggleTheme },
    ];
    if (profile.links.linkedin) list.push({ label: "Open LinkedIn", hint: "Link", run: () => window.open(profile.links.linkedin, "_blank") });
    if (profile.links.github) list.push({ label: "Open GitHub", hint: "Link", run: () => window.open(profile.links.github, "_blank") });
    if (profile.links.cv) list.push({ label: "Download CV", hint: "PDF", run: () => window.open(profile.links.cv, "_blank") });
    return list;
  }, []);

  const results = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase().trim()));

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };
    const onOpen = () => setOpen(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("open-palette", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("open-palette", onOpen);
    };
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setIndex(0);
      setNote("");
      setTimeout(() => input.current?.focus(), 10);
    }
  }, [open]);

  if (!open) return null;

  const run = (c) => {
    c.run();
    if (!c.keep) setOpen(false);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[index]) {
      run(results[index]);
    }
  };

  return (
    <div className="palette-backdrop" onClick={() => setOpen(false)}>
      <div className="palette" role="dialog" aria-modal="true" aria-label="Command menu" onClick={(e) => e.stopPropagation()}>
        <input
          ref={input}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIndex(0);
          }}
          onKeyDown={onKeyDown}
          placeholder="Type a command or search"
          aria-label="Search commands"
        />
        <ul role="listbox">
          {results.map((c, i) => (
            <li key={c.label} role="option" aria-selected={i === index}>
              <button type="button" onMouseEnter={() => setIndex(i)} onClick={() => run(c)}>
                <span>{c.label}</span>
                <span className="hint">{c.hint}</span>
              </button>
            </li>
          ))}
          {results.length === 0 && <li className="empty">No command matches “{query}”</li>}
        </ul>
        <p className="palette-foot">{note || "Arrow keys to move, Enter to run, Esc to close"}</p>
      </div>
    </div>
  );
}
