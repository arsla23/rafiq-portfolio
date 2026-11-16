"use client";

import { useEffect, useRef, useState } from "react";

// An example automation run that plays in the hero. Illustrative, not live data.
const STEPS = [
  { id: "trigger", label: "Trigger", log: "New sales reports landed in the inbox" },
  { id: "collect", label: "Collect", log: "Pulled 48 rows from 3 sources" },
  { id: "summarise", label: "Summarise", log: "AI condensed them into 6 key points" },
  { id: "report", label: "Report", log: "Summary report sent to the team" },
];
const MINUTES_PER_RUN = 40;

function stamp() {
  return new Date().toLocaleTimeString("en-GB", { hour12: false });
}

export default function Workflow() {
  const [active, setActive] = useState(-1);
  const [runs, setRuns] = useState(0);
  const [log, setLog] = useState([]);
  const [still, setStill] = useState(false);
  const timer = useRef(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setStill(true);
      setActive(STEPS.length);
      setRuns(3);
      setLog(STEPS.map((s) => ({ t: stamp(), text: s.log, kind: "ok" })));
      return;
    }
    let step = -1;
    const tick = () => {
      step += 1;
      if (step < STEPS.length) {
        setActive(step);
        setLog((l) => [...l, { t: stamp(), text: STEPS[step].log, kind: "ok" }].slice(-6));
        timer.current = setTimeout(tick, 1100);
      } else {
        setActive(STEPS.length);
        setRuns((r) => r + 1);
        setLog((l) =>
          [...l, { t: stamp(), text: `Run complete, about ${MINUTES_PER_RUN} minutes of manual work saved`, kind: "done" }].slice(-6)
        );
        step = -1;
        timer.current = setTimeout(tick, 2600);
      }
    };
    timer.current = setTimeout(tick, 700);
    return () => clearTimeout(timer.current);
  }, []);

  const minutes = runs * MINUTES_PER_RUN;
  const saved = minutes >= 60 ? `${Math.floor(minutes / 60)} h ${minutes % 60} min` : `${minutes} min`;

  return (
    <figure className="flow" aria-label="Example of an automation workflow running">
      <figcaption className="flow-head">
        <span className="flow-title">report-automation.flow</span>
        <span className={`flow-state ${still ? "" : "is-live"}`}>{still ? "Example run" : "Running example"}</span>
      </figcaption>

      <ol className="flow-steps">
        {STEPS.map((s, i) => (
          <li
            key={s.id}
            className={i < active ? "done" : i === active ? "now" : ""}
            aria-current={i === active ? "step" : undefined}
          >
            <span className="dot" aria-hidden="true" />
            {s.label}
          </li>
        ))}
      </ol>

      <div className="flow-log" aria-live="off">
        {log.map((l, i) => (
          <p key={`${l.t}-${i}`} className={l.kind}>
            <time>{l.t}</time> {l.text}
          </p>
        ))}
        {log.length === 0 && <p className="wait">Waiting for trigger</p>}
      </div>

      <div className="flow-foot">
        <span>Manual work saved in this demo</span>
        <strong>{saved}</strong>
      </div>
    </figure>
  );
}
