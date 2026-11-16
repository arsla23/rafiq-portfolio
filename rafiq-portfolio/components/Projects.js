"use client";

import { useState } from "react";

function Visual({ type }) {
  if (type === "cloud") {
    return (
      <svg className="viz" viewBox="0 0 420 110" aria-hidden="true">
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(14 ${10 + i * 32})`}>
            <rect width="74" height="24" rx="6" className="viz-node" />
            <text x="37" y="16" textAnchor="middle" className="viz-text">site {i + 1}</text>
            <path d={`M78 12 C 120 12, 120 ${45 - i * 32}, 160 ${45 - i * 32}`} className="viz-line" />
            <path d={`M78 12 C 120 12, 120 ${45 - i * 32}, 160 ${45 - i * 32}`} className="viz-flow" />
          </g>
        ))}
        <path d="M178 76 a20 20 0 0 1 4 -39 a28 28 0 0 1 52 -6 a22 22 0 0 1 26 45 z" className="viz-node hot" />
        <text x="221" y="62" textAnchor="middle" className="viz-text cloud">Azure</text>
        <path d="M268 55 H312" className="viz-line" />
        <path d="M268 55 H312" className="viz-flow" />
        <g transform="translate(318 25)">
          <rect width="88" height="60" rx="8" className="viz-node" />
          {[0, 1, 2].map((r) => (
            <path key={r} d={`M0 ${15 + r * 15} H88`} className="viz-line thin" />
          ))}
          <path d="M30 0 V60" className="viz-line thin" />
        </g>
      </svg>
    );
  }
  if (type === "agent") {
    const outs = ["Reply", "Summary", "Image"];
    return (
      <svg className="viz" viewBox="0 0 300 110" aria-hidden="true">
        <rect x="8" y="41" width="62" height="28" rx="7" className="viz-node" />
        <text x="39" y="59" textAnchor="middle" className="viz-text">Inbox</text>
        <path d="M70 55 H112" className="viz-line" />
        <path d="M70 55 H112" className="viz-flow" />
        <rect x="112" y="33" width="44" height="44" rx="12" transform="rotate(45 134 55)" className="viz-node hot" />
        <text x="134" y="59" textAnchor="middle" className="viz-text cloud">AI</text>
        {outs.map((o, i) => (
          <g key={o}>
            <path d={`M160 55 C 185 55, 185 ${20 + i * 35}, 210 ${20 + i * 35}`} className="viz-line" />
            <rect x="210" y={8 + i * 35} width="80" height="24" rx="6" className={i === 0 ? "viz-node hot-fill" : "viz-node"} />
            <text x="250" y={24 + i * 35} textAnchor="middle" className={i === 0 ? "viz-text on-fill" : "viz-text"}>{o}</text>
          </g>
        ))}
      </svg>
    );
  }
  if (type === "pipeline") {
    const nodes = ["Web", "Scrape", "AI", "Report"];
    return (
      <svg className="viz" viewBox="0 0 300 90" aria-hidden="true">
        <path d="M30 40 H270" className="viz-line" />
        <path d="M30 40 H270" className="viz-flow" />
        {nodes.map((n, i) => (
          <g key={n} transform={`translate(${30 + i * 80} 40)`}>
            <circle r="13" className={i === 2 ? "viz-node hot" : "viz-node"} />
            <text y="36" textAnchor="middle" className="viz-text">{n}</text>
          </g>
        ))}
      </svg>
    );
  }
  if (type === "routers") {
    return (
      <svg className="viz" viewBox="0 0 260 150" aria-hidden="true">
        <path d="M70 60 H190" className="viz-line" />
        <path d="M70 60 H190" className="viz-flow" />
        {[70, 190].map((x, i) => (
          <g key={x} transform={`translate(${x} 60)`}>
            <rect x="-30" y="-20" width="60" height="40" rx="10" className="viz-node" />
            <text y="5" textAnchor="middle" className="viz-text strong">R{i + 1}</text>
          </g>
        ))}
        <text x="130" y="50" textAnchor="middle" className="viz-text">area 0</text>
        <rect x="88" y="104" width="84" height="26" rx="13" className="viz-pill" />
        <text x="130" y="122" textAnchor="middle" className="viz-text hot">FULL</text>
      </svg>
    );
  }
  if (type === "registers") {
    const regs = ["$t0", "$t1", "$t2", "$s0", "$s1", "$v0", "$a0", "$ra"];
    return (
      <svg className="viz" viewBox="0 0 260 96" aria-hidden="true">
        {regs.map((r, i) => (
          <g key={r} transform={`translate(${8 + (i % 4) * 62} ${8 + Math.floor(i / 4) * 44})`}>
            <rect width="54" height="36" rx="8" className={i === 3 ? "viz-node hot-fill" : "viz-node"} />
            <text x="27" y="23" textAnchor="middle" className={i === 3 ? "viz-text on-fill" : "viz-text"}>{r}</text>
          </g>
        ))}
      </svg>
    );
  }
  return (
    <svg className="viz" viewBox="0 0 260 96" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => (
        <rect key={i} x="8" y={8 + i * 14} width={150 - (i % 3) * 22} height="6" rx="3" className="viz-bar" />
      ))}
      <path d="M176 48 h22" className="viz-line" />
      <path d="M192 42 l8 6 l-8 6" className="viz-line" fill="none" />
      {[0, 1].map((i) => (
        <rect key={i} x="212" y={34 + i * 16} width={40 - i * 12} height="6" rx="3" className="viz-bar hot-fill" />
      ))}
    </svg>
  );
}

export default function Projects({ projects }) {
  const tools = [...new Set(projects.flatMap((p) => p.tools))];
  const [pick, setPick] = useState(null);

  return (
    <>
      <div className="filter" role="group" aria-label="Highlight projects by tool">
        <button type="button" aria-pressed={pick === null} onClick={() => setPick(null)}>
          All
        </button>
        {tools.map((t) => (
          <button key={t} type="button" aria-pressed={pick === t} onClick={() => setPick(pick === t ? null : t)}>
            {t}
          </button>
        ))}
      </div>
      <div className="bento">
        {projects.map((p) => {
          const dim = pick && !p.tools.includes(pick);
          return (
            <article key={p.id} id={`p-${p.id}`} className={`tile ${p.size} ${dim ? "dim" : ""}`}>
              <Visual type={p.visual} />
              <div className="tile-body">
                <p className="kind">{p.kind}</p>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
                <ul className="tags">
                  {p.tools.map((t) => (
                    <li key={t} className={t === pick ? "on" : ""}>{t}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}
