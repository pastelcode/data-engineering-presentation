import React, { useEffect, useRef, useState } from "react";
import NumberFlow from "@number-flow/react";
import { Icon } from "./Icon";
import { PONENTE2_CONTENT as C } from "../content/ponente2.js";

function HookSlide() {
  const S = C.hook;
  return (
    <>
      <h2 style={{ textAlign: "center", justifyContent: "center" }}>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="hook-visual" style={{ alignItems: "center", marginLeft: "auto", marginRight: "auto" }}>
        <div className="hook-button">
          <Icon name="cursor-click" />
          {S.button}
        </div>
        <div className="hook-hint" style={{ textAlign: "center" }}>{S.hint}</div>
      </div>
    </>
  );
}

function CadenaSlide() {
  const S = C.cadena;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="cadena-chain">
        {S.steps.map((step, i) => (
          <React.Fragment key={step}>
            <div className="cadena-step">
              <span>{step}</span>
            </div>
            {i < S.steps.length - 1 && <i className="ph ph-arrow-down cadena-arrow" />}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

function EmpresaDatosSlide() {
  const S = C.empresaDatos;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <p style={{ fontSize: 17, color: "var(--muted)", marginTop: 8, lineHeight: 1.5 }}>{S.desc}</p>
      <div className="hex" style={{ marginTop: 20 }}>
        {S.items.map((it, i) => (
          <React.Fragment key={it.label}>
            <div className="zone" style={{ textAlign: "center" }}>
              <Icon name={it.icon} />
              <b>{it.label}</b>
              <p>{it.sub}</p>
            </div>
            {i < S.items.length - 1 && (
              <div className="arrow">
                <Icon name="arrow-right" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <ul className="fact-list">
        <li>
          <Icon name={S.fact.icon} />
          {S.fact.text}
        </li>
      </ul>
    </>
  );
}

function LimitacionesSlide() {
  const S = C.limitaciones;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="bignum-row">
        <div className="bignum-block">
          <div className="bignum amber">
            MB<small> caro</small>
          </div>
          <div className="cap">{S.highlight}</div>
        </div>
        <div className="bignum-block" style={{ maxWidth: 420 }}>
          <div style={{ fontSize: 17, color: "var(--muted)", lineHeight: 1.5, paddingTop: 12 }}>{S.detail}</div>
        </div>
      </div>
      <ul className="fact-list">
        <li>
          <Icon name={S.fact.icon} />
          {S.fact.text}
        </li>
      </ul>
    </>
  );
}

function EtlAnalogiaSlide() {
  const S = C.etlAnalogia;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="analogy-visual">
        <div className="analogy-steps">
          {S.steps.map((step, i) => (
            <React.Fragment key={step.label}>
              <div className="analogy-step">
                <Icon name={step.icon} />
                <b>{step.label}</b>
                <span>{step.sub}</span>
              </div>
              {i < S.steps.length - 1 && (
                <div className="analogy-arrow">
                  <Icon name="arrow-down" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="analogy-note">
          <Icon name="quotes" /> {S.note}
        </div>
      </div>
      <ul className="fact-list">
        <li>
          <Icon name={S.fact.icon} />
          {S.fact.text}
        </li>
      </ul>
    </>
  );
}

function ProblemaEtlSlide() {
  const S = C.problemaEtl;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="hex">
        <div className="zone">
          <Icon name="cooking-pot" />
          <b>{S.chef}</b>
        </div>
        <div className="arrow">
          <Icon name="arrow-right" />
        </div>
        <div className="zone core">
          <Icon name="warning-circle" />
          <b>{S.answer}</b>
          <p>{S.desc}</p>
        </div>
      </div>
      <ul className="fact-list">
        <li>
          <Icon name={S.fact.icon} />
          {S.fact.text}
        </li>
      </ul>
    </>
  );
}

function EltAnalogiaSlide() {
  const S = C.eltAnalogia;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="analogy-visual alt">
        <div className="analogy-steps">
          {S.steps.map((step, i) => (
            <React.Fragment key={step.label}>
              <div className="analogy-step">
                <Icon name={step.icon} />
                <b>{step.label}</b>
                <span>{step.sub}</span>
              </div>
              {i < S.steps.length - 1 && (
                <div className="analogy-arrow">
                  <Icon name="arrow-down" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="analogy-note">
          <Icon name="quotes" /> {S.note}
        </div>
      </div>
      <ul className="fact-list">
        <li>
          <Icon name={S.fact.icon} />
          {S.fact.text}
        </li>
      </ul>
    </>
  );
}

function SwampSlide() {
  const S = C.swamp;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="swamp-visual">
        <div className="swamp-folder">
          <Icon name="folder" />
          <b>{S.folder}</b>
          <ul>
            {S.files.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
        <div className="arrow">
          <Icon name="arrow-right" />
        </div>
        <div className="zone core">
          <Icon name="warning-circle" />
          <b>{S.label}</b>
          <p>{S.desc}</p>
        </div>
      </div>
      <div className="cadena-question">{S.question}</div>
      <ul className="fact-list">
        <li className="warn">
          <Icon name={S.fact.icon} />
          {S.fact.text}
        </li>
      </ul>
    </>
  );
}

function AcidSlide() {
  const S = C.acid;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="acid-visual">
        <div className="acid-transfer">
          <span>Cuenta A</span>
          <i className="ph ph-arrow-right" />
          <span className="acid-amount">$100</span>
          <i className="ph ph-arrow-right" />
          <span>Cuenta B</span>
        </div>
        <div className="acid-fail">
          <Icon name="warning-circle" /> {S.fail}
        </div>
        <div className="acid-question">{S.question}</div>
        <div className="acid-answer">
          <Icon name={S.fact.icon} /> {S.answer}
        </div>
        <div className="acid-desc">{S.desc}</div>
      </div>
      <ul className="fact-list">
        <li>
          <Icon name={S.fact.icon} />
          {S.fact.text}
        </li>
      </ul>
    </>
  );
}

function CoffeeBreakSlide({ active }) {
  const S = C.coffeeBreak;
  const TOTAL = S.durationSec;
  const REAL_TOTAL = 900;
  const [realElapsed, setRealElapsed] = useState(0);
  const [running, setRunning] = useState(false);
  const [phraseIdx, setPhraseIdx] = useState(0);
  const accumulatedRef = useRef(0);
  const startRef = useRef(null);

  const getDisplayed = (real) => {
    if (real <= 60) return TOTAL - real;
    if (real <= 840) {
      const x = (real - 60) / 780;
      const g = 1.25 * x * x * x - 1.875 * x * x + 1.625 * x;
      return 540 - 480 * g;
    }
    if (real < REAL_TOTAL) return 60 - (real - 840);
    return 0;
  };

  const displayedFloat = getDisplayed(realElapsed);
  const displayedInt = Math.max(0, Math.ceil(displayedFloat - 1e-9));
  const mins = String(Math.floor(displayedInt / 60)).padStart(2, "0");
  const secs = String(displayedInt % 60).padStart(2, "0");
  const pct = displayedFloat / TOTAL;
  const r = 108;
  const circ = 2 * Math.PI * r;
  const offset = circ * (1 - pct);
  const isWarning = displayedInt <= 60 && displayedInt > 0 && running;
  const isDone = displayedInt === 0 && realElapsed >= REAL_TOTAL - 0.5;

  useEffect(() => {
    if (!active || !running) return;
    startRef.current = Date.now();
    const id = setInterval(() => {
      const elapsed = accumulatedRef.current + (Date.now() - startRef.current) / 1000;
      if (elapsed >= REAL_TOTAL) {
        setRealElapsed(REAL_TOTAL);
        setRunning(false);
        clearInterval(id);
      } else {
        setRealElapsed(elapsed);
      }
    }, 70);
    return () => {
      if (startRef.current) {
        accumulatedRef.current += (Date.now() - startRef.current) / 1000;
        startRef.current = null;
      }
      clearInterval(id);
    };
  }, [active, running]);

  useEffect(() => {
    if (!active && running) setRunning(false);
  }, [active, running]);

  useEffect(() => {
    if (!running || displayedInt > 60 || displayedInt <= 0) return;
    const id = setInterval(() => setPhraseIdx((i) => (i + 1) % S.phrases.length), 2600);
    return () => clearInterval(id);
  }, [running, displayedInt, S.phrases.length]);

  useEffect(() => {
    if (displayedInt === 60) setPhraseIdx(0);
  }, [displayedInt]);

  const handleToggle = () => {
    if (isDone) {
      accumulatedRef.current = 0;
      startRef.current = null;
      setRealElapsed(0);
      setRunning(false);
      setPhraseIdx(0);
    } else {
      setRunning((v) => !v);
    }
  };
  const handleReset = () => {
    accumulatedRef.current = 0;
    startRef.current = null;
    setRealElapsed(0);
    setRunning(false);
    setPhraseIdx(0);
  };

  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className={`coffee-break ${isWarning ? "warning" : ""} ${isDone ? "done" : ""} ${running ? "running" : "paused"}`}>
        <div className="coffee-deco">
          <span className="blob b1" />
          <span className="blob b2" />
          <span className="bean b1">
            <Icon name="coffee" />
          </span>
          <span className="bean b2">
            <Icon name="coffee" />
          </span>
        </div>
        <div className="coffee-break-main">
          <div
            className="timer-ring-wrap"
            onClick={handleToggle}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleToggle();
              }
            }}
          >
            <svg className="timer-ring" width="260" height="260" viewBox="0 0 260 260">
              <defs>
                <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--accent)" />
                  <stop offset="100%" stopColor="var(--amber)" />
                </linearGradient>
                <linearGradient id="ringGradWarn" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--amber)" />
                  <stop offset="100%" stopColor="var(--red)" />
                </linearGradient>
              </defs>
              <circle className="ring-bg" cx="130" cy="130" r={r} />
              <circle
                className="ring-progress"
                cx="130"
                cy="130"
                r={r}
                strokeDasharray={circ}
                strokeDashoffset={offset}
                style={{ stroke: isWarning ? "url(#ringGradWarn)" : isDone ? "var(--green)" : "url(#ringGrad)" }}
              />
            </svg>
            <div className="timer-center">
              {isDone ? (
                <>
                  <div className="timer-done-icon">
                    <Icon name="confetti" />
                  </div>
                  <div className="timer-done-text">{S.done}</div>
                  <div className="timer-label">clic para repetir</div>
                </>
              ) : (
                <>
                  <div className="timer-digits">
                    <span>{mins}</span>
                    <span className="timer-colon">:</span>
                    <span>{secs}</span>
                  </div>
                  {!running && !isDone && (
                    <div className="timer-label">{realElapsed === 0 ? "inicio" : "pausado"}</div>
                  )}
                  {running && !isDone && (
                    <div className="coffee-cup steaming">
                      <Icon name="coffee" />
                      <div className="steam">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
          <div className="timer-side">
            <div className="timer-hint">
              <Icon name="timer" /> {S.hint}
            </div>
            <div className="timer-controls">
              {!isDone ? (
                <>
                  <button className={`timer-btn primary ${running ? "pause" : "play"}`} onClick={handleToggle}>
                    <Icon name={running ? "pause" : "play"} /> {running ? "Pausar" : realElapsed === 0 ? "Iniciar 10:00" : "Reanudar"}
                  </button>
                  <button className="timer-btn ghost" onClick={handleReset}>
                    <Icon name="arrow-counter-clockwise" /> Reiniciar
                  </button>
                </>
              ) : (
                <button className="timer-btn primary play" onClick={handleReset}>
                  <Icon name="arrow-counter-clockwise" /> Repetir pausa
                </button>
              )}
            </div>
            <div className="timer-bar">
              <div className="timer-bar-fill" style={{ width: `${pct * 100}%` }} />
            </div>
            <div className="timer-bar-labels">
              <span>10:00</span>
              <span>00:00</span>
            </div>
            {isWarning && (
              <div className="funny-ticker" key={phraseIdx}>
                <Icon name="megaphone" />
                <span>{S.phrases[phraseIdx]}</span>
              </div>
            )}
            {!isWarning && !isDone && (
              <div className="timer-subtle">
                <Icon name="sparkle" /> Favor comer con la boca cerrada
              </div>
            )}
          </div>
        </div>
        {isWarning && <div className="coffee-pulse-bg" />}
      </div>
    </>
  );
}

function ETLSlide({ active }) {
  const S = C.etl;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="etl-diagram">
        <div className="etl-box">
          <Icon name={S.boxes[0].icon} />
          <b>{S.boxes[0].title}</b>
          <span>{S.boxes[0].sub}</span>
        </div>
        <div className="etl-arrow">
          <span className={`etl-dot ${active ? "run" : ""}`} />
        </div>
        <div className="etl-box highlight">
          <Icon name={S.boxes[1].icon} />
          <b>{S.boxes[1].title}</b>
          <span>{S.boxes[1].sub}</span>
          <div className="etl-note">{S.boxes[1].note}</div>
        </div>
        <div className="etl-arrow">
          <span className={`etl-dot ${active ? "run" : ""}`} />
        </div>
        <div className="etl-box solid">
          <Icon name={S.boxes[2].icon} />
          <b>{S.boxes[2].title}</b>
          <span>{S.boxes[2].sub}</span>
        </div>
      </div>

      <div className="etl-raw-lost">
        <Icon name={S.alert.icon} />
        <span>{S.alert.text}</span>
      </div>

      <ul className="fact-list">
        {S.facts.map((f, i) => (
          <li key={i} className={f.warn ? "warn" : ""}>
            <Icon name={f.icon} />
            {f.text}
          </li>
        ))}
      </ul>
    </>
  );
}

function ELTSlide({ active }) {
  const S = C.elt;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="etl-diagram">
        <div className="etl-box">
          <Icon name={S.boxes[0].icon} />
          <b>{S.boxes[0].title}</b>
          <span>{S.boxes[0].sub}</span>
        </div>
        <div className="etl-arrow">
          <span className={`etl-dot ${active ? "run" : ""}`} />
        </div>
        <div className="etl-box solid accent">
          <Icon name={S.boxes[1].icon} />
          <b>{S.boxes[1].title}</b>
          <span>{S.boxes[1].sub}</span>
          <div className="etl-note">{S.boxes[1].note}</div>
        </div>
        <div className="etl-arrow">
          <span className={`etl-dot ${active ? "run" : ""}`} />
        </div>
        <div className="etl-box highlight">
          <Icon name={S.boxes[2].icon} />
          <b>{S.boxes[2].title}</b>
          <span>{S.boxes[2].sub}</span>
          <div className="etl-note">{S.boxes[2].note}</div>
        </div>
      </div>

      <div className="etl-raw-kept">
        <Icon name={S.alert.icon} />
        <span>{S.alert.text}</span>
      </div>

      <div className="bignum-row">
        <div className="bignum-block">
          <div className="bignum green">
            <NumberFlow value={active ? S.bignums[0].value : 0} format={{ minimumFractionDigits: S.bignums[0].decimals }} />
            <small>{S.bignums[0].suffix}</small>
          </div>
          <div className="cap">{S.bignums[0].cap}</div>
        </div>
        <div className="bignum-block">
          <div className="bignum">{S.bignums[1].value}</div>
          <div className="cap">{S.bignums[1].cap}</div>
        </div>
      </div>
    </>
  );
}

function VersusSlide() {
  const S = C.versus;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="vs" style={{ marginTop: 22 }}>
        <div className="fighter">
          <Icon name={S.left.icon} />
          <b>{S.left.title}</b>
          <p>{S.left.sub}</p>
          <ul style={{ textAlign: "left", marginTop: 12, paddingLeft: 18, fontSize: 15, lineHeight: 1.5, color: "var(--muted)" }}>
            {S.left.items.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
        <div className="badge">vs</div>
        <div className="fighter" style={{ borderColor: "var(--ink)", background: "var(--ink)", color: "var(--paper)" }}>
          <Icon name={S.right.icon} />
          <b style={{ color: "var(--paper)" }}>{S.right.title}</b>
          <p style={{ color: "var(--paper)", opacity: 0.85 }}>{S.right.sub}</p>
          <ul style={{ textAlign: "left", marginTop: 12, paddingLeft: 18, fontSize: 15, lineHeight: 1.5, color: "var(--paper)", opacity: 0.9 }}>
            {S.right.items.map((t, i) => (
              <li key={i}>{t}</li>
            ))}
          </ul>
        </div>
      </div>
      <ul className="fact-list">
        <li>
          <Icon name={S.fact.icon} />
          {S.fact.text}
        </li>
      </ul>
    </>
  );
}

function BatchStreamingSlide({ active }) {
  const S = C.batchStreaming;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="batch-stream">
        <div className="bs-card batch">
          <div className="bs-head">
            <Icon name={S.batch.icon} />
            <b>{S.batch.title}</b>
            <span>{S.batch.tag}</span>
          </div>
          <div className="bs-track">
            <div className="bs-truck">
              <Icon name={S.batch.truckIcon} />
            </div>
            <div className="bs-dots">
              <span className={active ? "run" : ""} style={{ animationDelay: "0s" }} />
              <span className={active ? "run" : ""} style={{ animationDelay: "0.2s" }} />
              <span className={active ? "run" : ""} style={{ animationDelay: "0.4s" }} />
              <span className={active ? "run" : ""} style={{ animationDelay: "0.6s" }} />
            </div>
          </div>
          <div className="bs-meta">
            <div className="bs-num">{S.batch.value}</div>
            <div className="bs-desc">{S.batch.desc}</div>
          </div>
        </div>

        <div className="bs-card stream">
          <div className="bs-head">
            <Icon name={S.streaming.icon} />
            <b>{S.streaming.title}</b>
            <span>{S.streaming.tag}</span>
          </div>
          <div className="bs-track continuous">
            <div className="bs-flow">
              <span className={active ? "run" : ""} />
              <span className={active ? "run" : ""} />
              <span className={active ? "run" : ""} />
              <span className={active ? "run" : ""} />
              <span className={active ? "run" : ""} />
            </div>
          </div>
          <div className="bs-meta">
            <div className="bs-num">
              <NumberFlow value={active ? S.streaming.value : 0} /> <small>{S.streaming.suffix}</small>
            </div>
            <div className="bs-desc">{S.streaming.desc}</div>
          </div>
        </div>
      </div>
      <ul className="fact-list">
        <li>
          <Icon name={S.fact.icon} />
          {S.fact.text}
        </li>
      </ul>
    </>
  );
}

function TimelineSlide() {
  const S = C.timeline;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="timeline evo">
        {S.periods.map((p, i) => (
          <div key={i} className={`wk ${p.state}`}>
            <b>{p.year}</b>
            {p.name}
            <span>{p.detail}</span>
          </div>
        ))}
      </div>
      <div className="evo-desc">
        {S.summary.map((it, i) => (
          <div key={i} className={`evo-item ${it.variant || ""}`.trim()}>
            <Icon name={it.icon} />
            <b>{it.title}</b>
            <span>{it.sub}</span>
          </div>
        ))}
      </div>
      <div className="src">{S.src}</div>
    </>
  );
}

function WarehouseSlide({ active }) {
  const S = C.warehouse;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="shelf-visual">
        {S.shelves.map((row, i) => (
          <div key={i} className="shelf-row">
            {row.map((name, j) => (
              <div key={j} className="shelf-box">
                {name}
              </div>
            ))}
          </div>
        ))}
        <div className="shelf-bar">
          <span className={active ? "scan" : ""} />
        </div>
      </div>
      <ul className="fact-list">
        {S.facts.map((f, i) => (
          <li key={i} className={f.warn ? "warn" : ""}>
            <Icon name={f.icon} />
            {f.text}
          </li>
        ))}
      </ul>
    </>
  );
}

function LakeSlide({ active }) {
  const S = C.lake;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="ocean">
        {S.files.map((file, i) => (
          <div key={i} className={`float-item ${active ? file.drift : ""}`} style={{ left: file.pos.left, top: file.pos.top }}>
            <Icon name={file.icon} /> {file.name}
          </div>
        ))}
        <div className="ocean-wave" />
      </div>
      <ul className="fact-list">
        {S.facts.map((f, i) => (
          <li key={i} className={f.warn ? "warn" : ""}>
            <Icon name={f.icon} />
            {f.text}
          </li>
        ))}
      </ul>
    </>
  );
}

function LakehouseSlide({ active }) {
  const S = C.lakehouse;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="lakehouse-diag">
        <div className="lh-ocean">
          <span>{S.lakeLabel}</span>
        </div>
        <div className="lh-warehouse">
          {S.pillars.map((p, i) => (
            <div key={i} className="lh-pillar">
              <Icon name={p.icon} /> {p.label}
            </div>
          ))}
        </div>
        <div className={`medallion ${active ? "on" : ""}`}>
          <div className={`med ${S.medallion[0].key}`}>
            <b>{S.medallion[0].title}</b>
            <span>{S.medallion[0].sub}</span>
          </div>
          <div className="med-arrow">
            <i className="ph ph-arrow-right" />
          </div>
          <div className={`med ${S.medallion[1].key}`}>
            <b>{S.medallion[1].title}</b>
            <span>{S.medallion[1].sub}</span>
          </div>
          <div className="med-arrow">
            <i className="ph ph-arrow-right" />
          </div>
          <div className={`med ${S.medallion[2].key}`}>
            <b>{S.medallion[2].title}</b>
            <span>{S.medallion[2].sub}</span>
          </div>
        </div>
      </div>
      <ul className="fact-list">
        {S.facts.map((f, i) => (
          <li key={i}>
            <Icon name={f.icon} />
            {f.text}
          </li>
        ))}
      </ul>
    </>
  );
}

function CompareSlide() {
  const S = C.compare;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="compare">
        <div className="compare-header">
          <div></div>
          {S.header.map((h, i) => (
            <div key={i} className={`ch ${h.variant || ""}`.trim()}>
              <Icon name={h.icon} /> {h.label}
            </div>
          ))}
        </div>
        {S.rows.map((r, i) => (
          <div key={i} className="compare-row">
            <div className="cr label">{r.label}</div>
            {r.cols.map((col, j) => {
              const variant = r.variants ? r.variants[j] : r.strongLast && j === r.cols.length - 1 ? "strong" : "";
              return (
                <div key={j} className={`cr ${variant}`.trim()}>
                  {col}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </>
  );
}

function KafkaSlide({ active }) {
  const S = C.kafka;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="kafka-visual">
        <div className="kafka-side">
          <Icon name={S.producers.icon} />
          <b>{S.producers.title}</b>
          <span>{S.producers.sub}</span>
          <div className="kafka-dots out">
            <span className={active ? "run" : ""} />
            <span className={active ? "run" : ""} />
            <span className={active ? "run" : ""} />
          </div>
        </div>
        <div className="kafka-core">
          <div className="kafka-label">
            <Icon name={S.core.icon} /> {S.core.label}
          </div>
          <div className="partitions">
            <div className="partition">
              <span className={active ? "flow" : ""} style={{ animationDelay: "0s" }} />
              <span className={active ? "flow" : ""} style={{ animationDelay: "0.4s" }} />
            </div>
            <div className="partition">
              <span className={active ? "flow" : ""} style={{ animationDelay: "0.2s" }} />
              <span className={active ? "flow" : ""} style={{ animationDelay: "0.6s" }} />
            </div>
            <div className="partition">
              <span className={active ? "flow" : ""} style={{ animationDelay: "0.1s" }} />
              <span className={active ? "flow" : ""} style={{ animationDelay: "0.5s" }} />
            </div>
          </div>
          <div className="kafka-replica">{S.core.replica}</div>
        </div>
        <div className="kafka-side">
          <Icon name={S.consumers.icon} />
          <b>{S.consumers.title}</b>
          <span>{S.consumers.sub}</span>
          <div className="kafka-dots in">
            <span className={active ? "run" : ""} />
            <span className={active ? "run" : ""} />
            <span className={active ? "run" : ""} />
          </div>
        </div>
      </div>
      <ul className="fact-list">
        {S.facts.map((f, i) => (
          <li key={i}>
            <Icon name={f.icon} />
            {f.text}
          </li>
        ))}
      </ul>
    </>
  );
}

function SparkSlide({ active }) {
  const S = C.spark;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="spark-visual">
        <div className="spark-alone">
          <div className={`machine ${S.single.variant}`}>
            <Icon name={S.single.icon} />
            <b>{S.single.title}</b>
            <span>{S.single.sub}</span>
            <div className="ram-bar">
              <div className="ram-fill full" />
            </div>
            <div className="ram-label">{S.single.ram}</div>
          </div>
          <div className="spark-vs-icon">
            <Icon name="arrow-right" />
          </div>
          <div className="cluster">
            {S.cluster.map((n, i) => (
              <div key={i} className={`node ${active ? "pulse" : ""}`} style={{ animationDelay: `${i * 0.15}s` }}>
                <b>{n.title}</b>
                <span>{n.sub}</span>
              </div>
            ))}
            <div className="shuffle">
              <Icon name={S.shuffle.icon} /> {S.shuffle.label}
            </div>
          </div>
        </div>
      </div>
      <ul className="fact-list">
        {S.facts.map((f, i) => (
          <li key={i} className={f.warn ? "warn" : ""}>
            <Icon name={f.icon} />
            {f.text}
          </li>
        ))}
      </ul>
    </>
  );
}

function AirflowSlide({ active }) {
  const S = C.airflow;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="dag-visual">
        <div className="dag-grid">
          <div className={`dag-node ${S.nodes[0].variant} ${active ? "active" : ""}`.trim()}>
            <Icon name={S.nodes[0].icon} />
            <b>{S.nodes[0].title}</b>
            <span>{S.nodes[0].sub}</span>
          </div>
          <div className="dag-edge">
            <i className="ph ph-arrow-right" />
          </div>
          <div className={`dag-node ${active ? "done" : ""}`}>
            <Icon name={S.nodes[1].icon} />
            <b>{S.nodes[1].title}</b>
            <span>{S.nodes[1].sub}</span>
          </div>
          <div className="dag-edge">
            <i className="ph ph-arrow-right" />
          </div>
          <div className={`dag-node ${active ? "running" : ""}`}>
            <Icon name={S.nodes[2].icon} />
            <b>{S.nodes[2].title}</b>
            <span>{S.nodes[2].sub}</span>
          </div>
          <div className="dag-edge">
            <i className="ph ph-arrow-right" />
          </div>
          <div className={`dag-node ${active ? "pending" : ""}`}>
            <Icon name={S.nodes[3].icon} />
            <b>{S.nodes[3].title}</b>
            <span>{S.nodes[3].sub}</span>
          </div>
        </div>
        <div className="dag-branch">
          <div className="dag-edge vert">
            <i className="ph ph-arrow-down" />
          </div>
          <div className="dag-split">
            {S.branch.map((b, i) => (
              <div key={i} className={`dag-node small ${b.variant} ${active ? (b.variant === "retry" ? "retry-anim" : "alert-anim") : ""}`.trim()}>
                <Icon name={b.icon} />
                <b>{b.title}</b>
                <span>{b.sub}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="dag-rule">{S.rule}</div>
      </div>
      <ul className="fact-list">
        <li>
          <Icon name={S.fact.icon} />
          {S.fact.text}
        </li>
      </ul>
    </>
  );
}

function PipelineSlide({ active }) {
  const S = C.pipeline;
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (!active) {
      setStep(0);
      return;
    }
    const delay = step === 5 ? 5000 : 1400;
    const t = setTimeout(() => setStep((s) => (s + 1) % 6), delay);
    return () => clearTimeout(t);
  }, [active, step]);

  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="pipeline">
        {S.steps.map((node, idx) => (
          <React.Fragment key={idx}>
            <div className={`pipe-node ${idx === S.steps.length - 1 ? "final" : ""} ${step >= idx + 1 ? "on" : ""}`.trim()}>
              <Icon name={node.icon} />
              <b>{node.title}</b>
              <span>{node.sub}</span>
              <span className="pipe-sub">{node.tag}</span>
            </div>
            {idx < S.steps.length - 1 && (
              <div className={`pipe-edge ${step >= idx + 1 ? "on" : ""}`}>
                <div className="pipe-line">
                  <span className={active && step >= idx + 1 ? "dot" : ""} />
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="pipeline-legend">
        {S.legend.map((label, i) => (
          <React.Fragment key={label}>
            <span className={step >= (i === 0 ? 1 : i + 2) ? "on" : ""}>{label}</span>
            {i < S.legend.length - 1 && <i className="ph ph-arrow-right" />}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

function MappingSlide() {
  const S = C.mapping;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="hex">
        {S.zones.map((zone, i) => (
          <React.Fragment key={i}>
            <div className={`zone ${zone.variant || ""}`.trim()}>
              <h3>
                <Icon name={zone.icon} /> {zone.title}
              </h3>
              <p>{zone.desc}</p>
              <ul>
                {zone.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            </div>
            {i < S.zones.length - 1 && (
              <div className="arrow">
                <Icon name="arrow-right" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="store-callout">
        <Icon name={S.callout.icon} />
        <span>{S.callout.text}</span>
      </div>
    </>
  );
}

function PuenteSlide() {
  const S = C.puente;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <ul className="fact-list">
        {S.facts.map((f, i) => (
          <li key={i}>
            <Icon name={f.icon} />
            {f.text}
          </li>
        ))}
      </ul>
      <div className="src">{S.src}</div>
    </>
  );
}

export const PONENTE2 = [
  HookSlide,
  CadenaSlide,
  EmpresaDatosSlide,
  LimitacionesSlide,
  EtlAnalogiaSlide,
  ETLSlide,
  ProblemaEtlSlide,
  EltAnalogiaSlide,
  ELTSlide,
  VersusSlide,
  CoffeeBreakSlide,
  BatchStreamingSlide,
  TimelineSlide,
  WarehouseSlide,
  LakeSlide,
  SwampSlide,
  LakehouseSlide,
  CompareSlide,
  AcidSlide,
  KafkaSlide,
  SparkSlide,
  AirflowSlide,
  PipelineSlide,
  MappingSlide,
  PuenteSlide,
];
