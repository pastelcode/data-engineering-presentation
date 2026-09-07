import React, { useCallback, useEffect, useState } from "react";
import { SampleChart } from "./Charts";

// Icon helper: Phosphor, kebab-case. Verify names against phosphoricons.com.
function Icon({ name }) {
  return <i className={`ph ph-${name}`}></i>;
}

const SLIDES = [
  // 0 Title
  () => (
    <>
      <h1>
        Deck title <Icon name="basket" />
      </h1>
      <div className="cover-meta">Author — Date — Cut-off line</div>
      <div className="bignum-row">
        <div className="bignum-block">
          <div className="bignum">00</div>
          <div className="cap">One-line caption that adds information.</div>
        </div>
        <div className="bignum-block">
          <div className="bignum green">
            00<small>%</small>
          </div>
          <div className="cap">Caption.</div>
        </div>
      </div>
    </>
  ),
  // 1 Headline figures
  () => (
    <>
      <h2>
        <Icon name="chart-bar" /> Headline figures
      </h2>
      <div className="bignum-row">
        <div className="bignum-block">
          <div className="bignum">50</div>
          <div className="cap">Caption.</div>
        </div>
        <div className="bignum-block">
          <div className="bignum amber">
            87.0<small>%</small>
          </div>
          <div className="cap">Caption.</div>
        </div>
        <div className="bignum-block">
          <div className="bignum green">0</div>
          <div className="cap">Caption.</div>
        </div>
      </div>
    </>
  ),
  // 2 Hallazgos: figures + fact rows
  () => (
    <>
      <h2>
        <Icon name="lightbulb" /> Hallazgos
      </h2>
      <div className="bignum-row">
        <div className="bignum-block">
          <div className="bignum green">0</div>
          <div className="cap">Caption for the headline number.</div>
        </div>
      </div>
      <ul className="fact-list">
        <li>
          <Icon name="equals" />A concrete finding with a number or mechanism.
        </li>
        <li className="warn">
          <Icon name="warning-circle" />A caveat finding.
        </li>
      </ul>
    </>
  ),
  // 3 Chart slide (only when real data exists)
  () => (
    <>
      <h2>
        <Icon name="chart-bar" /> Data comparison
      </h2>
      <SampleChart />
      <div className="src">Source note with date and what it supports.</div>
    </>
  ),
  // 4 Three-zone architecture
  () => (
    <>
      <h2>
        <Icon name="shield-check" /> Three-zone diagram
      </h2>
      <div className="hex">
        <div className="zone">
          <h3>Adaptadores</h3>
          <p>Body.</p>
        </div>
        <div className="arrow">
          <Icon name="arrow-right" />
        </div>
        <div className="zone core">
          <h3>Núcleo intacto</h3>
          <ul>
            <li>Item.</li>
          </ul>
        </div>
        <div className="arrow">
          <Icon name="arrow-right" />
        </div>
        <div className="zone">
          <h3>Puertos</h3>
          <p>Body.</p>
        </div>
      </div>
      <ul className="fact-list">
        <li>
          <Icon name="plugs-connected" />
          Supporting fact.
        </li>
      </ul>
    </>
  ),
  // 5 Timeline
  () => (
    <>
      <h2>
        <Icon name="calendar-dots" /> Timeline
      </h2>
      <div className="timeline">
        <div className="wk done">
          <b>W1</b>Label
        </div>
        <div className="wk now">
          <b>W2</b>Label
        </div>
        <div className="wk">
          <b>W3</b>Label
        </div>
        <div className="wk">
          <b>W4</b>Label
        </div>
      </div>
      <div className="bignum-row">
        <div className="bignum-block">
          <div className="bignum green">
            2<small>/12</small>
          </div>
          <div className="cap">Caption.</div>
        </div>
      </div>
    </>
  ),
  // 6 Closing / bridge
  () => (
    <>
      <h2>
        <Icon name="flag-checkered" /> Bridge to next
      </h2>
      <div className="bignum-row">
        <div className="bignum-block">
          <div className="bignum">W4</div>
          <div className="cap">What is next.</div>
        </div>
      </div>
      <ul className="fact-list">
        <li>
          <Icon name="arrow-right" />
          First concrete next action.
        </li>
        <li>
          <Icon name="arrow-right" />
          Second concrete next action.
        </li>
      </ul>
    </>
  ),
];

function Nav({ cur, total, go, setCur, isFullscreen, toggleFullscreen }) {
  return (
    <div className="nav">
      <button
        onClick={toggleFullscreen}
        aria-label={
          isFullscreen ? "Salir de pantalla completa" : "Pantalla completa"
        }
        title={
          isFullscreen
            ? "Salir de pantalla completa (F)"
            : "Pantalla completa (F)"
        }
      >
        <Icon name={isFullscreen ? "corners-in" : "corners-out"} />
      </button>
      <button onClick={() => go(-1)} aria-label="Anterior">
        <Icon name="arrow-left" />
      </button>
      <div className="dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={i === cur ? "on" : ""}
            onClick={() => setCur(i)}
            aria-label={`Ir a ${i + 1}`}
          />
        ))}
      </div>
      <button onClick={() => go(1)} aria-label="Siguiente">
        <Icon name="arrow-right" />
      </button>
      <div className="count">
        {cur + 1} / {total}
      </div>
    </div>
  );
}

export default function App() {
  const [cur, setCur] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const go = useCallback(
    (d) => setCur((c) => Math.max(0, Math.min(SLIDES.length - 1, c + d))),
    [],
  );

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen?.().catch(() => {});
    } else {
      document.exitFullscreen?.().catch(() => {});
    }
  }, []);

  useEffect(() => {
    const onFs = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", onFs);
    return () => document.removeEventListener("fullscreenchange", onFs);
  }, []);

  useEffect(() => {
    const h = (e) => {
      if (e.target.tagName === "INPUT") return;
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault();
        go(1);
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        go(-1);
      }
      if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        toggleFullscreen();
      }
    };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [go, toggleFullscreen]);

  return (
    <>
      <div
        className="progress"
        style={{ width: `${((cur + 1) / SLIDES.length) * 100}%` }}
      />
      {SLIDES.map((S, i) => (
        <div key={i} className={`slide ${i === cur ? "active" : ""}`}>
          <div className={`slide-content${i === cur ? " anim" : ""}`}>
            <S />
          </div>
        </div>
      ))}
      <Nav
        cur={cur}
        total={SLIDES.length}
        go={go}
        setCur={setCur}
        isFullscreen={isFullscreen}
        toggleFullscreen={toggleFullscreen}
      />
    </>
  );
}
