import React, { useEffect, useState } from "react";
import NumberFlow from "@number-flow/react";
import { Icon } from "./Icon";
import { PONENTE1_CONTENT as C } from "../content/ponente1.js";

function GigoSlide({ active }) {
  const [pct, setPct] = useState(0);
  const [min, setMin] = useState(0);

  useEffect(() => {
    setPct(active ? 70 : 0);
    setMin(active ? 15 : 0);
  }, [active]);

  const S = C.gigo;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="bignum-row">
        <div className="bignum-block">
          <div className="bignum">
            <NumberFlow value={min} />
            <small>min</small>
          </div>
          <div className="cap">{S.bignums[0].cap}</div>
        </div>
        <div className="bignum-block">
          <div className={`bignum ${S.bignums[1].variant}`}>
            <NumberFlow value={pct} suffix="-80" />
            <small>%</small>
          </div>
          <div className="cap">{S.bignums[1].cap}</div>
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

function PreguntaSlide({ active }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    setN(active ? 3 : 0);
  }, [active]);
  const S = C.pregunta;
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
      <div className="bignum-row">
        <div className="bignum-block">
          <div className="bignum">
            <NumberFlow value={n} />
          </div>
          <div className="cap">{S.bignum.cap}</div>
        </div>
      </div>
    </>
  );
}

export const PONENTE1 = [
  GigoSlide,

  () => {
    const S = C.mito;
    return (
      <>
        <h2>
          <Icon name={S.titleIcon} /> {S.title}
        </h2>
        <div className="hex">
          <div className="zone">
            <h3>{S.hex.left.title}</h3>
            <p>{S.hex.left.text}</p>
          </div>
          <div className="arrow">
            <Icon name="arrow-right" />
          </div>
          <div className="zone core">
            <h3>{S.hex.center.title}</h3>
            <ul>
              {S.hex.center.items.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
          <div className="arrow">
            <Icon name="arrow-right" />
          </div>
          <div className="zone">
            <h3>{S.hex.right.title}</h3>
            <p>{S.hex.right.text}</p>
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
  },

  () => {
    const S = C.queEs;
    return (
      <>
        <h2>
          <Icon name={S.titleIcon} /> {S.title}
        </h2>
        <ul className="fact-list">
          <li>
            <Icon name={S.fact.icon} />
            {S.fact.text}
          </li>
        </ul>
        <div className="hex">
          <div className="zone">
            <h3>{S.hex.left.title}</h3>
            <p>{S.hex.left.text}</p>
          </div>
          <div className="arrow">
            <Icon name="arrow-right" />
          </div>
          <div className="zone core">
            <h3>{S.hex.center.title}</h3>
            <p>{S.hex.center.text}</p>
          </div>
          <div className="arrow">
            <Icon name="arrow-right" />
          </div>
          <div className="zone">
            <h3>{S.hex.right.title}</h3>
            <p>{S.hex.right.text}</p>
          </div>
        </div>
      </>
    );
  },

  () => {
    const S = C.roles;
    return (
      <>
        <h2>
          <Icon name={S.titleIcon} /> {S.title}
        </h2>
        <div className="vs">
          <div className="fighter">
            <Icon name={S.left.icon} />
            <b>{S.left.title}</b>
            <p>{S.left.text}</p>
          </div>
          <div className="badge">vs</div>
          <div className="fighter">
            <Icon name={S.right.icon} />
            <b>{S.right.title}</b>
            <p>{S.right.text}</p>
          </div>
        </div>
      </>
    );
  },

  () => {
    const S = C.fuentes;
    return (
      <>
        <h2>
          <Icon name={S.titleIcon} /> {S.title}
        </h2>
        <ul className="fact-list">
          {S.facts.map((f, i) => (
            <li key={i}>
              <Icon name={f.icon} />
              {f.bold ? <><b>{f.bold}</b> {f.text}</> : f.text}
            </li>
          ))}
        </ul>
      </>
    );
  },

  () => {
    const S = C.beber;
    return (
      <>
        <h2>
          <Icon name={S.titleIcon} /> {S.title}
        </h2>
        <ul className="fact-list">
          {S.facts.map((f, i) => (
            <li key={i} className={f.warn ? "warn" : ""}>
              <Icon name={f.icon} />
              {f.bold ? <><b>{f.bold}</b> {f.text}</> : f.text}
            </li>
          ))}
        </ul>
      </>
    );
  },

  () => {
    const S = C.ciclo;
    return (
      <>
        <h2>
          <Icon name={S.titleIcon} /> {S.title}
        </h2>
        <div className="cycle">
          <div className="node gen">
            <Icon name={S.nodes[0].icon} />
            <b>{S.nodes[0].label}</b>
          </div>
          <i className="edge right ph ph-arrow-right" />
          <div className="node store">
            <Icon name={S.nodes[1].icon} />
            <b>{S.nodes[1].label}</b>
          </div>
          <i className="edge down ph ph-arrow-down" />
          <div className="node trans">
            <Icon name={S.nodes[2].icon} />
            <b>{S.nodes[2].label}</b>
          </div>
          <i className="edge left ph ph-arrow-left" />
          <div className="node serv">
            <Icon name={S.nodes[3].icon} />
            <b>{S.nodes[3].label}</b>
          </div>
          <i className="edge up ph ph-arrow-up" />
          <div className="hub">
            <Icon name={S.hubIcon} />
          </div>
        </div>
        <div className="src">{S.src}</div>
      </>
    );
  },

  () => {
    const S = C.transformacion;
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
  },

  () => {
    const S = C.trazabilidad;
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
  },

  PreguntaSlide,

  () => {
    const S = C.calidad;
    return (
      <>
        <h2>
          <Icon name={S.titleIcon} /> {S.title}
        </h2>
        <div className="metric-row">
          {S.metrics.map((m, i) => (
            <div key={i} className="metric">
              <Icon name={m.icon} />
              <b>{m.label}</b>
            </div>
          ))}
        </div>
      </>
    );
  },

  () => {
    const S = C.puente;
    return (
      <>
        <h2>
          <Icon name={S.titleIcon} /> {S.title}
        </h2>
        <div className="bignum-row">
          <div className="bignum-block">
            <div className="bignum">{S.bignum.value}</div>
            <div className="cap">{S.bignum.cap}</div>
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
  },
];
