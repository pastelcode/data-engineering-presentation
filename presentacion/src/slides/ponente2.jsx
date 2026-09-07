import React, { useEffect, useState } from "react";
import NumberFlow from "@number-flow/react";
import { Icon } from "./Icon";
import { PONENTE2_CONTENT as C } from "../content/ponente2.js";

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

function ETLTSlide() {
  const S = C.etlt;
  return (
    <>
      <h2>
        <Icon name={S.titleIcon} /> {S.title}
      </h2>
      <div className="etlt-diagram">
        <div className={`etlt-step ${S.steps[0].variant || ""}`.trim()}>
          <Icon name={S.steps[0].icon} />
          <b>{S.steps[0].title}</b>
          <span>{S.steps[0].sub}</span>
        </div>
        <div className={`etlt-arrow ${S.arrows[0].size}`}>
          <i className="ph ph-arrow-right" />
          <span>{S.arrows[0].text}</span>
        </div>
        <div className={`etlt-step ${S.steps[1].variant}`}>
          <Icon name={S.steps[1].icon} />
          <b>{S.steps[1].title}</b>
          <span>{S.steps[1].sub}</span>
        </div>
        <div className="etlt-arrow">
          <i className="ph ph-arrow-right" />
        </div>
        <div className={`etlt-step ${S.steps[2].variant}`}>
          <Icon name={S.steps[2].icon} />
          <b>{S.steps[2].title}</b>
          <span>{S.steps[2].sub}</span>
        </div>
        <div className="etlt-arrow">
          <i className="ph ph-arrow-right" />
          <span>{S.arrows[2].text}</span>
        </div>
        <div className={`etlt-step ${S.steps[3].variant}`}>
          <Icon name={S.steps[3].icon} />
          <b>{S.steps[3].title}</b>
          <span>{S.steps[3].sub}</span>
        </div>
      </div>

      <div className="dbt-callout">
        <Icon name={S.dbt.icon} />
        <div>
          <b>{S.dbt.title}</b>
          <span>{S.dbt.text}</span>
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
    const delay = step === 5 ? 3500 : 900;
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
  ETLSlide,
  ELTSlide,
  VersusSlide,
  BatchStreamingSlide,
  ETLTSlide,
  TimelineSlide,
  WarehouseSlide,
  LakeSlide,
  LakehouseSlide,
  CompareSlide,
  KafkaSlide,
  SparkSlide,
  AirflowSlide,
  PipelineSlide,
  MappingSlide,
  PuenteSlide,
];
