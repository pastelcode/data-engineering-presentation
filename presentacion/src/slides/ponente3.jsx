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
        <div className="bignum-block">
          <div className={`bignum ${S.bignum.variant || ""}`.trim()}>
            {S.bignum.value}
            {S.bignum.suffix ? <small>{S.bignum.suffix}</small> : null}
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

function PipelineSlide() {
  const S = C.pipeline;
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

function DriftSlide() {
  const S = C.drift;
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

function ContencionSlide() {
  const S = C.contencion;
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

function DinamicaSlide() {
  const S = C.dinamica;
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

export const PONENTE3 = [
  TransicionSlide,
  ModelosSlide,
  CasoSlide,
  EmparejamientoSlide,
  PingsSlide,
  LaserSlide,
  IndexacionSlide,
  PipelineSlide,
  DriftSlide,
  ContencionSlide,
  MeshSlide,
  FuturoSlide,
  DinamicaSlide,
];