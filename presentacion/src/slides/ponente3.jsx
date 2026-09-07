import React, { useEffect, useState } from "react";
import NumberFlow from "@number-flow/react";
import { Icon } from "./Icon";
import { PONENTE3_CONTENT as C } from "../content/ponente3.js";
import PingMap, { PINGS, MapBg } from "./PingMap";

const LASER_SOURCES = [4, 10, 8, 1];

function LaserSlide({ active }) {
  const S = C.laser;
  const [k, setK] = useState(0);

  useEffect(() => {
    if (!active) return;
    setK(0);
    const t = setInterval(
      () => setK((v) => (v + 1) % LASER_SOURCES.length),
      2600,
    );
    return () => clearInterval(t);
  }, [active]);

  const src = LASER_SOURCES[k];
  const s = PINGS[src];

  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="pingmap">
        <MapBg />
        <svg
          key={src}
          className="map-lasers"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {PINGS.map((p, i) =>
            i === src ? null : (
              <line
                key={i}
                x1={s.x}
                y1={s.y}
                x2={p.x}
                y2={p.y}
                className="laser"
                vectorEffect="non-scaling-stroke"
                style={{ animationDelay: `${i * 60}ms` }}
              />
            ),
          )}
        </svg>
        {PINGS.map((p, i) => (
          <span
            key={i}
            className={`gps${i === src ? " source" : ""}`}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
          >
            <span
              className="ring"
              style={{ animationDelay: `${(i % 8) * 0.3}s` }}
            />
            <span className="dot" />
          </span>
        ))}
      </div>
      <ul className="fact-list">
        <li className={S.fact.warn ? "warn" : ""}>
          <Icon name={S.fact.icon} />
          {S.fact.text}
        </li>
      </ul>
    </>
  );
}

function TransicionSlide() {
  const S = C.transicion;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
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

function ModelosSlide({ active }) {
  const S = C.modelos;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="bignum-row">
        <div className="bignum-block">
          <div className="bignum">
            <NumberFlow value={active ? S.bignum.value : 0} />
          </div>
          <div className="cap">{S.bignum.cap}</div>
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

function ProduccionSlide({ active }) {
  const S = C.produccion;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="bignum-row">
        <div className="bignum-block">
          <div className="bignum">
            <NumberFlow value={active ? S.bignum.value : 0} />
          </div>
          <div className="cap">{S.bignum.cap}</div>
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

function UniversosSlide({ active }) {
  const S = C.universos;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="universos">
        {S.worlds.map((w, i) => (
          <div key={i} className="uni-card">
            <Icon name={w.icon} />
            <b>{w.title}</b>
            <span>{w.sub}</span>
            <div className="sync-track">
              <span
                className={active ? "sync-dot" : ""}
                style={{ animationDuration: `${w.speed}s` }}
              />
            </div>
            <span className="rhythm">{w.rhythm}</span>
          </div>
        ))}
      </div>
      <ul className="fact-list">
        <li className={S.fact.warn ? "warn" : ""}>
          <Icon name={S.fact.icon} />
          {S.fact.text}
        </li>
      </ul>
    </>
  );
}

function EspejismoSlide({ active }) {
  const S = C.espejismo;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="mirage">
        <div className="bignum-row">
          <div className="bignum-block">
            <div className="bignum">
              <NumberFlow value={active ? S.bignum.value : 0} />
            </div>
            <div className="cap">{S.bignum.cap}</div>
          </div>
        </div>
        <div className={`stamp ${active ? "slam" : ""}`}>{S.stamp}</div>
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

function MarcoSlide({ active }) {
  const S = C.marco;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="merge">
        <div className="merge-srcs">
          {S.sources.map((s, i) => (
            <div key={i} className="merge-src">
              <span>{s}</span>
              <div className="merge-track">
                <span
                  className={active ? "merge-dot" : ""}
                  style={{ animationDelay: `${i * 0.4}s` }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className={`merge-center ${active ? "on" : ""}`}>
          <Icon name={S.center.icon} />
          <b>{S.center.title}</b>
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

function LotePlanSlide({ active }) {
  const S = C.loteplan;
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (!active) {
      setStep(0);
      return;
    }
    const delay = step === 3 ? 3500 : 1100;
    const t = setTimeout(() => setStep((s) => (s + 1) % 4), delay);
    return () => clearTimeout(t);
  }, [active, step]);

  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="pipeline big">
        {S.steps.map((node, idx) => (
          <React.Fragment key={idx}>
            <div
              className={`pipe-node ${idx === S.steps.length - 1 ? "final" : ""} ${step >= idx + 1 ? "on" : ""}`.trim()}
            >
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
            <span className={step >= i + 1 ? "on" : ""}>{label}</span>
            {i < S.legend.length - 1 && <i className="ph ph-arrow-right" />}
          </React.Fragment>
        ))}
      </div>
    </>
  );
}

function CasoSlide() {
  const S = C.caso;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
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

function EmparejamientoSlide() {
  const S = C.emparejamiento;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="bignum-row">
        {S.bignums.map((b, i) => (
          <div key={i} className="bignum-block">
            <div className={`bignum ${b.variant || ""}`.trim()}>
              {b.value}
              {b.suffix ? <small>{b.suffix}</small> : null}
            </div>
            <div className="cap">{b.cap}</div>
          </div>
        ))}
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

function CodiciosoSlide() {
  const S = C.codicioso;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="matrix">
        <div className="m-corner" />
        {S.cols.map((col, i) => (
          <div key={i} className="m-head">
            <Icon name="user" /> {col}
          </div>
        ))}
        {S.rows.map((row, i) => (
          <React.Fragment key={i}>
            <div className="m-row">
              <Icon name="taxi" /> {row.label}
            </div>
            {row.cells.map((cell, j) => (
              <div key={j} className={`m-cell ${cell.variant || ""}`.trim()}>
                {cell.value}
                {cell.suffix ? <small>{cell.suffix}</small> : null}
              </div>
            ))}
          </React.Fragment>
        ))}
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

function PingsSlide() {
  const S = C.pings;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <PingMap />
    </>
  );
}

function IndexacionSlide() {
  const S = C.indexacion;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <PingMap cells />
      <ul className="fact-list">
        <li className={S.fact.warn ? "warn" : ""}>
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
    const delay = step === 3 ? 3500 : 1100;
    const t = setTimeout(() => setStep((s) => (s + 1) % 4), delay);
    return () => clearTimeout(t);
  }, [active, step]);

  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="pipeline big">
        {S.steps.map((node, idx) => (
          <React.Fragment key={idx}>
            <div
              className={`pipe-node ${idx === S.steps.length - 1 ? "final" : ""} ${step >= idx + 1 ? "on" : ""} ${idx === 1 && step === 2 ? "charged" : ""}`.trim()}
            >
              {idx === 1 && step === 2 && (
                <div className="rays">
                  <i className="ph ph-lightning" style={{ animationDelay: "0s" }} />
                  <i className="ph ph-lightning" style={{ animationDelay: "0.25s" }} />
                  <i className="ph ph-lightning" style={{ animationDelay: "0.5s" }} />
                </div>
              )}
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
        {step === 3 && <i className="ph ph-paper-plane-tilt send-fly" />}
      </div>
      <div className="pipeline-legend">
        {S.legend.map((label, i) => (
          <React.Fragment key={label}>
            <span className={step >= i + 1 ? "on" : ""}>{label}</span>
            {i < S.legend.length - 1 && <i className="ph ph-arrow-right" />}
          </React.Fragment>
        ))}
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

function DevOpsSlide({ active }) {
  const S = C.devops;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="devops">
        <div className="do-node">
          <Icon name={S.left.icon} />
          <b>{S.left.title}</b>
          <span>{S.left.sub}</span>
        </div>
        <div className="do-links">
          <div className="do-line">
            <span className="do-label">{S.linkOut}</span>
            <div className="do-track">
              <span className={active ? "do-dot" : ""} />
            </div>
          </div>
          <div className="do-line">
            <span className="do-label">{S.linkBack}</span>
            <div className="do-track rev">
              <span
                className={active ? "do-dot" : ""}
                style={{ animationDelay: "0.5s" }}
              />
            </div>
          </div>
        </div>
        <div className="do-node">
          <Icon name={S.right.icon} />
          <b>{S.right.title}</b>
          <span>{S.right.sub}</span>
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

function DriftSlide() {
  const S = C.drift;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
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

function DataDriftSlide({ active }) {
  const S = C.datadrift;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="bignum-row">
        <div className="bignum-block">
          <div className={`bignum ${S.bignum.variant || ""}`.trim()}>
            {S.bignum.value}
            {S.bignum.suffix ? <small>{S.bignum.suffix}</small> : null}
          </div>
          <div className="cap">{S.bignum.cap}</div>
        </div>
      </div>
      <div className="drift-chart">
        <svg viewBox="0 15 400 150" aria-hidden="true">
          <line x1="20" y1="140" x2="380" y2="140" className="axis" />
          <path
            d="M40,140 C90,140 105,50 150,50 C195,50 210,140 260,140"
            className="curve before"
          />
          <path
            d="M140,140 C190,140 205,50 250,50 C295,50 310,140 360,140"
            className={`curve after ${active ? "on" : ""}`}
          />
          <text x="138" y="160">
            antes
          </text>
          <text x="240" y="160">
            después
          </text>
        </svg>
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

function ConceptDriftSlide({ active }) {
  const S = C.conceptdrift;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="drift-chart">
        <svg viewBox="0 15 400 150" aria-hidden="true">
          <line x1="30" y1="140" x2="380" y2="140" className="axis" />
          <line x1="30" y1="140" x2="30" y2="20" className="axis" />
          <line x1="40" y1="130" x2="360" y2="50" className="rel old" />
          <path
            d="M40,130 C140,125 240,90 360,115"
            className={`rel new ${active ? "on" : ""}`}
          />
          <text x="312" y="42">
            antes
          </text>
          <text x="312" y="108">
            ahora
          </text>
        </svg>
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

function ContencionSlide({ active }) {
  const S = C.contencion;
  const [step, setStep] = useState(0);
  useEffect(() => {
    if (!active) {
      setStep(0);
      return;
    }
    const delay = step === S.checks.length + 1 ? 3500 : 1100;
    const t = setTimeout(
      () => setStep((s) => (s + 1) % (S.checks.length + 2)),
      delay,
    );
    return () => clearTimeout(t);
  }, [active, step]);

  const unlocked = step >= S.checks.length + 1;

  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="checks">
        {S.checks.map((c, idx) => (
          <div
            key={idx}
            className={`check-card ${step >= idx + 1 ? "done" : ""}`}
          >
            <Icon name={c.icon} />
            <b>{c.title}</b>
            <span>{c.sub}</span>
            <span className="check-badge">
              <i className="ph ph-check" />
            </span>
          </div>
        ))}
        <div className="check-arrow">
          <Icon name="arrow-right" />
        </div>
        <div className={`solver-node ${unlocked ? "open" : ""}`}>
          <Icon name={unlocked ? S.solver.openIcon : S.solver.lockIcon} />
          <b>{S.solver.title}</b>
          <span>{unlocked ? S.solver.openSub : S.solver.lockSub}</span>
        </div>
      </div>
      <ul className="fact-list">
        <li className={S.fact.warn ? "warn" : ""}>
          <Icon name={S.fact.icon} />
          {S.fact.text}
        </li>
      </ul>
    </>
  );
}

function MeshSlide() {
  const S = C.mesh;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
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

function FuturoSlide() {
  const S = C.futuro;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
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

function GraciasSlide() {
  const S = C.gracias;
  return (
    <>
      <h1>
        <Icon name={S.titleIcon} /> {S.title}
      </h1>
      <div className="cover-meta">{S.subtitle}</div>
      <div className="cover-meta">{S.names}</div>
    </>
  );
}

export const PONENTE3 = [
  TransicionSlide,
  ModelosSlide,
  ProduccionSlide,
  UniversosSlide,
  EspejismoSlide,
  MarcoSlide,
  LotePlanSlide,
  CasoSlide,
  EmparejamientoSlide,
  CodiciosoSlide,
  PingsSlide,
  LaserSlide,
  IndexacionSlide,
  PipelineSlide,
  DriftSlide,
  DataDriftSlide,
  ConceptDriftSlide,
  ContencionSlide,
  DevOpsSlide,
  MeshSlide,
  FuturoSlide,
  GraciasSlide,
];