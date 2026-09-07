import React, { useEffect, useState } from "react";
import NumberFlow from "@number-flow/react";
import { Icon } from "./Icon";
import PingMap, { PINGS, MapBg } from "./PingMap";

const LASER_SOURCES = [4, 10, 8, 1];

function LaserSlide({ active }) {
  const [k, setK] = useState(0);

  useEffect(() => {
    if (!active) return;
    setK(0);
    const t = setInterval(() => setK((v) => (v + 1) % LASER_SOURCES.length), 2600);
    return () => clearInterval(t);
  }, [active]);

  const src = LASER_SOURCES[k];
  const s = PINGS[src];

  return (
    <>
      <h2>
        <Icon name="broadcast" /> Comparar ping por ping no escala
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
        <li className="warn">
          <Icon name="warning-circle" />
          Comparar cada ping con los demás exige calcular n² distancias.
        </li>
      </ul>
    </>
  );
}

function ModelosSlide({ active }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    setN(active ? 500000 : 0);
  }, [active]);

  return (
    <>
      <h2>
        <Icon name="engine" /> Tres modelos clásicos de IO
      </h2>
      <div className="bignum-row">
        <div className="bignum-block">
          <div className="bignum">
            <NumberFlow value={n} />
          </div>
          <div className="cap">
            Escenarios estocásticos de Monte Carlo ejecutados a escala.
          </div>
        </div>
      </div>
      <ul className="fact-list">
        <li>
          <Icon name="car-simple" />
          Ruteo de vehículos. La matriz de distancias cambia por accidentes,
          lluvia o tráfico. Un pipeline de streaming recalcula los arcos antes
          de correr el solver.
        </li>
        <li>
          <Icon name="factory" />
          Planificación de la producción. Se concilian demanda prevista,
          inventario del ERP y turnos de RRHH bajo un mismo esquema horario.
          Sin esa conciliación, la solución es factible pero irrealizable.
        </li>
        <li>
          <Icon name="dice-five" />
          Monte Carlo a escala. Riesgo financiero o de red, ejecutado en Spark
          sobre terabytes de historia.
        </li>
      </ul>
    </>
  );
}

export const PONENTE3 = [
  // Bloque 0: transición y conexión
  () => (
    <>
      <h2>
        <Icon name="link-simple" /> De la infraestructura a la decisión
      </h2>
      <ul className="fact-list">
        <li>
          <Icon name="database" />
          Nivel 1. El dato en bruto es caótico. Requiere transformación.
        </li>
        <li>
          <Icon name="flow-arrow" />
          Nivel 2. El pipeline. Kafka mueve eventos. Spark procesa. El
          Lakehouse almacena.
        </li>
        <li>
          <Icon name="lightning" />
          El modelo depende de los datos. Si el flujo falla, la decisión
          colapsa en segundos.
        </li>
      </ul>
    </>
  ),

  // Bloque 1: modelos clásicos
  ModelosSlide,

  // Bloque 2: introducción al caso de uso
  () => (
    <>
      <h2>
        <Icon name="taxi" /> El caso: plataformas de movilidad
      </h2>
      <ul className="fact-list">
        <li>
          <Icon name="taxi" />
          Uber, DiDi y Rappi asignan conductores en tiempo real.
        </li>
        <li>
          <Icon name="clock-countdown" />
          Cada asignación es un problema de optimización que se resuelve en
          segundos.
        </li>
        <li>
          <Icon name="flow-arrow" />
          El caso muestra un pipeline de baja latencia acoplado a un solver.
        </li>
      </ul>
    </>
  ),

  // Bloque 2: caso móvil, el problema de IO
  () => (
    <>
      <h2>
        <Icon name="scales" /> Emparejamiento de peso máximo
      </h2>
      <div className="bignum-row">
        <div className="bignum-block">
          <div className="bignum">
            3-5<small>s</small>
          </div>
          <div className="cap">
            Ventana de lote para resolver el emparejamiento. La asignación se
            recalcula en bloques de segundos.
          </div>
        </div>
      </div>
      <ul className="fact-list">
        <li>
          <Icon name="git-merge" />
          Emparejar conductores y pasajeros en lotes de 3 a 5 segundos.
        </li>
        <li>
          <Icon name="target" />
          Sin asignación greedy. Se busca el óptimo global. Se minimiza el ETA
          y se maximiza la tasa de servicio completado.
        </li>
      </ul>
    </>
  ),

  // Bloque 2: caso móvil, el mapa de pings
  () => (
    <>
      <h2>
        <Icon name="broadcast" /> Cientos de miles de pings
      </h2>
      <PingMap />
    </>
  ),

  // Bloque 2: caso móvil, el costo de comparar ping por ping
  LaserSlide,

  // Bloque 2: caso móvil, indexación espacial
  () => (
    <>
      <h2>
        <Icon name="hexagon" /> Indexación espacial
      </h2>
      <PingMap cells />
      <ul className="fact-list">
        <li>
          <Icon name="hexagon" />
          Cada coordenada se asigna a una celda hexagonal. La oferta y la
          demanda se miden por zona.
        </li>
      </ul>
    </>
  ),

  // Bloque 2: caso móvil, la solución integrada
  () => (
    <>
      <h2>
        <Icon name="flow-arrow" /> Del ping al push
      </h2>
      <ul className="fact-list">
        <li>
          <Icon name="database" />
          Ingesta. Kafka recibe los pings de la app móvil.
        </li>
        <li>
          <Icon name="lightning" />
          Estado en memoria. Redis o Cassandra guardan ETA, calificación y
          riesgo de cancelación.
        </li>
        <li>
          <Icon name="cpu" />
          Resolución y salida. El solver empareja con la sub-matriz local. La
          notificación sale por gRPC. Sin el pipeline sub-segundo, la
          asignación queda obsoleta.
        </li>
      </ul>
    </>
  ),

  // Bloque 3: DataOps y drift
  () => (
    <>
      <h2>
        <Icon name="warning-diamond" /> Estabilidad en producción
      </h2>
      <div className="bignum-row">
        <div className="bignum-block">
          <div className="bignum amber">
            40<small>%</small>
          </div>
          <div className="cap">
            Si el combustible sube ese porcentaje, la matriz de costos
            histórica deja de reflejar la realidad.
          </div>
        </div>
      </div>
      <ul className="fact-list">
        <li>
          <Icon name="arrows-clockwise" />
          DataOps. Pruebas continuas, versionado del dato y monitoreo en cada
          paso del flujo.
        </li>
        <li className="warn">
          <Icon name="chart-line-up" />
          Data drift. La distribución de las variables cambia. Un puente
          cerrado o un alza de precios. El solver optimiza sobre supuestos
          falsos.
        </li>
        <li className="warn">
          <Icon name="arrows-split" />
          Concept drift. La relación entre entrada y salida se rompe. Cambios
          permanentes, como los patrones tras la pandemia. La función objetivo
          del pasado deja de valer.
        </li>
      </ul>
    </>
  ),

  // Bloque 3: barreras de contención
  () => (
    <>
      <h2>
        <Icon name="shield-check" /> El dato no pasa si no cumple
      </h2>
      <div className="bignum-row">
        <div className="bignum-block">
          <div className="bignum">
            2<small>%</small>
          </div>
          <div className="cap">
            Umbral de nulos que dispara la alerta antes de que el lote llegue
            al solver.
          </div>
        </div>
      </div>
      <ul className="fact-list">
        <li>
          <Icon name="file-text" />
          Contratos de datos y pruebas con Great Expectations en cada paso del
          flujo.
        </li>
        <li>
          <Icon name="check-circle" />
          Se valida que la demanda no sea negativa. Los tiempos de viaje deben
          caer en rangos físicos posibles.
        </li>
        <li className="warn">
          <Icon name="warning-circle" />
          Un lote corrupto llega al solver. Este marca infeasible o asigna
          recursos absurdos. La operación se detiene.
        </li>
      </ul>
    </>
  ),

  // Bloque 4: data mesh
  () => (
    <>
      <h2>
        <Icon name="network" /> De equipo centralizado a dominios dueños
      </h2>
      <ul className="fact-list">
        <li>
          <Icon name="users" />
          Data Mesh. El equipo central de TI deja de concentrar todo.
        </li>
        <li>
          <Icon name="package" />
          Cada dominio de negocio, Logística, Finanzas, Ventas, trata sus datos
          como un producto.
        </li>
        <li>
          <Icon name="shield-check" />
          El analista de IO consume productos de datos estandarizados con SLA
          garantizados.
        </li>
      </ul>
    </>
  ),

  // Bloque 4: futuro
  () => (
    <>
      <h2>
        <Icon name="robot" /> El futuro
      </h2>
      <ul className="fact-list">
        <li>
          <Icon name="robot" />
          IA generativa. Agentes que detectan anomalías en pipelines, corrigen
          esquemas de tablas y generan código de integración.
        </li>
        <li>
          <Icon name="dice-five" />
          Datos sintéticos. Simulaciones que preservan correlaciones para
          alimentar modelos estocásticos sin historia suficiente.
        </li>
        <li>
          <Icon name="arrow-right" />
          La IO decide el camino óptimo. La ingeniería de datos hace que esa
          decisión se ejecute en el mundo real.
        </li>
      </ul>
    </>
  ),

  // Bloque 5: dinámica
  () => (
    <>
      <h2>
        <Icon name="question" /> El Solver en el Mundo Real
      </h2>
      <div className="bignum-row">
        <div className="bignum-block">
          <div className="bignum">5</div>
          <div className="cap">Bodegas centrales.</div>
        </div>
        <div className="bignum-block">
          <div className="bignum">20</div>
          <div className="cap">Camiones.</div>
        </div>
        <div className="bignum-block">
          <div className="bignum">500</div>
          <div className="cap">Clientes por día.</div>
        </div>
      </div>
      <ul className="fact-list">
        <li className="warn">
          <Icon name="map-pin" />
          Direcciones con abreviaturas, referencias vagas y sin coordenadas
          válidas.
        </li>
        <li className="warn">
          <Icon name="ruler" />
          Pesos en libras y en kilogramos, empaques sin dimensiones
          volumétricas.
        </li>
        <li className="warn">
          <Icon name="clock-countdown" />
          Ventanas horarias de descarga que solo viven en la memoria de los
          conductores veteranos.
        </li>
      </ul>
    </>
  ),
];