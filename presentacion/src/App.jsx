import React, { useCallback, useEffect, useState } from "react";
import { PORTADA } from "./slides/portada";
import { PONENTE1 } from "./slides/ponente1";
import { Icon } from "./slides/Icon";

const SLIDES = [...PORTADA, ...PONENTE1];

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
            <S active={i === cur} />
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