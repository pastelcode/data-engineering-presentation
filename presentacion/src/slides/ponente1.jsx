import React, { useEffect, useState } from "react";
import NumberFlow from "@number-flow/react";
import { Icon } from "./Icon";

function GigoSlide({ active }) {
  const [pct, setPct] = useState(0);
  const [min, setMin] = useState(0);

  useEffect(() => {
    setPct(active ? 70 : 0);
    setMin(active ? 15 : 0);
  }, [active]);

  return (
    <>
      <h2>
        <Icon name="warning-circle" /> Garbage In, Garbage Out
      </h2>
      <div className="bignum-row">
        <div className="bignum-block">
          <div className="bignum">
            <NumberFlow value={min} />
            <small>min</small>
          </div>
          <div className="cap">
            Para plantear un modelo en un examen de IO. La matriz y la demanda
            ya están escritas.
          </div>
        </div>
        <div className="bignum-block">
          <div className="bignum amber">
            <NumberFlow value={pct} suffix="-80" />
            <small>%</small>
          </div>
          <div className="cap">
            Es el tiempo que una empresa real gasta en conseguir y limpiar los
            parámetros del modelo. Encuesta Anaconda, 2020.
          </div>
        </div>
      </div>
      <ul className="fact-list">
        <li>
          <Icon name="chalkboard-teacher" />
          En el aula la matriz de costos ya está ahí, fija y ordenada. En la
          empresa hay que armarla desde cero.
        </li>
        <li className="warn">
          <Icon name="warning-circle" />
          Si entra basura, sale basura. Ningún solver de Simplex o de Branch
          and Bound decide bien si los parámetros vienen mal.
        </li>
      </ul>
    </>
  );
}

function PreguntaSlide({ active }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    setN(active ? 3 : 0);
  }, [active]);

  return (
    <>
      <h2>
        <Icon name="question" /> ¿Y si el parámetro entró mal?
      </h2>
      <ul className="fact-list">
        <li className="warn">
          <Icon name="warning-circle" />
          El solver es estricto. Maximiza la función que le diste. Con un
          parámetro mal, entrega el óptimo del problema equivocado.
        </li>
        <li className="warn">
          <Icon name="clock-countdown" />
          Una solución perfecta sobre datos viejos no sirve en la bodega de
          hoy.
        </li>
        <li>
          <Icon name="arrow-right" />
          Por eso el dato se revisa antes de correr el modelo.
        </li>
      </ul>
      <div className="bignum-row">
        <div className="bignum-block">
          <div className="bignum">
            <NumberFlow value={n} />
          </div>
          <div className="cap">
            Chequeos mínimos de calidad antes de optimizar.
          </div>
        </div>
      </div>
    </>
  );
}

export const PONENTE1 = [
  GigoSlide,

  // Bloque 1: el mito de los datos limpios
  () => (
    <>
      <h2>
        <Icon name="lightning" /> El mito de los datos limpios
      </h2>
      <div className="hex">
        <div className="zone">
          <h3>En el aula</h3>
          <p>
            La matriz de costos y la demanda ya están en el libro. Fijas,
            claras, en una tabla. El modelo se plantea en 15 minutos.
          </p>
        </div>
        <div className="arrow">
          <Icon name="arrow-right" />
        </div>
        <div className="zone core">
          <h3>En la empresa</h3>
          <ul>
            <li>El costo del diésel vive en el ERP, en SAP.</li>
            <li>Los peajes están en un txt viejo que nadie actualizó.</li>
            <li>El inventario real está en el WMS y se cae a cada rato.</li>
            <li>Los pedidos entran por API o por Excels llenados a mano.</li>
          </ul>
        </div>
        <div className="arrow">
          <Icon name="arrow-right" />
        </div>
        <div className="zone">
          <h3>La consecuencia</h3>
          <p>
            Armar esa matriz toma el 70-80% del proyecto. Solo queda un rato
            chico para modelar.
          </p>
        </div>
      </div>
      <ul className="fact-list">
        <li>
          <Icon name="check-circle" />
          La encuesta Anaconda de 2020 a gente de datos lo confirma: entre 70% y
          80% del tiempo se va en juntar y limpiar datos.
        </li>
      </ul>
    </>
  ),

  // Bloque 2: qué es la ingeniería de datos
  () => (
    <>
      <h2>
        <Icon name="drop" /> ¿Qué es la ingeniería de datos?
      </h2>
      <ul className="fact-list">
        <li>
          <Icon name="hard-drives" />
          La ingeniería de datos diseña y mantiene los sistemas y pipelines
          que reciben datos crudos y revueltos y los devuelven en tablas
          limpias, listas para analizar.
        </li>
      </ul>
      <div className="hex">
        <div className="zone">
          <h3>Río y fuentes crudas</h3>
          <p>
            Sensores, transacciones, logs. Si tomas directo del río, te
            enfermas.
          </p>
        </div>
        <div className="arrow">
          <Icon name="arrow-right" />
        </div>
        <div className="zone core">
          <h3>Data Engineering</h3>
          <p>
            La planta y las tuberías. Filtra, quita impurezas y mantiene la
            presión para que el agua corra parejo.
          </p>
        </div>
        <div className="arrow">
          <Icon name="arrow-right" />
        </div>
        <div className="zone">
          <h3>El chorro y el vaso</h3>
          <p>
            Data Science e IO. Abrimos el chorro y esperamos agua limpia para
            modelar.
          </p>
        </div>
      </div>
    </>
  ),

  // Bloque 2: roles
  () => (
    <>
      <h2>
        <Icon name="arrows-split" /> Dos oficios, un mismo chorro
      </h2>
      <div className="vs">
        <div className="fighter">
          <Icon name="wrench" />
          <b>Data engineer</b>
          <p>
            Cuida que los datos existan, mantengan forma, lleguen a tiempo y
            que todo escale.
          </p>
        </div>
        <div className="badge">vs</div>
        <div className="fighter">
          <Icon name="math-operations" />
          <b>Investigador de operaciones</b>
          <p>
            Plantea la función objetivo, pone restricciones y convierte el
            dato limpio en una decisión de negocio.
          </p>
        </div>
      </div>
    </>
  ),

  // Bloque 2: las fuentes crudas en detalle
  () => (
    <>
      <h2>
        <Icon name="hard-drives" /> Las fuentes crudas
      </h2>
      <ul className="fact-list">
        <li>
          <Icon name="database" />
          <b>Bases transaccionales OLTP.</b> Postgres, SQL Server. Registran
          cada venta, cada pago y cada movimiento de inventario en el momento
          exacto en que ocurre.
        </li>
        <li>
          <Icon name="radio" />
          <b>Sensores y telemetría en planta.</b> Temperatura, presión y
          lecturas de máquinas que emiten datos cada pocos segundos, sin parar.
        </li>
        <li>
          <Icon name="terminal-window" />
          <b>Logs y eventos web.</b> Cada visita, cada clic y cada error de
          servidor queda registrado en algún archivo.
        </li>
        <li>
          <Icon name="plugs-connected" />
          <b>APIs y archivos planos.</b> Pedidos que entran por API, Excels
          llenados a mano y txt que nadie actualizó.
        </li>
      </ul>
    </>
  ),

  // Bloque 2: por qué no consumir directo de las fuentes
  () => (
    <>
      <h2>
        <Icon name="warning-circle" /> Beber directo del río sale caro
      </h2>
      <ul className="fact-list">
        <li className="warn">
          <Icon name="warning-circle" />
          <b>Formatos rotos.</b> Fechas como texto, decimales con coma o punto
          revueltos, monedas mezcladas en el mismo archivo.
        </li>
        <li className="warn">
          <Icon name="copy" />
          <b>Duplicados y nulos.</b> El mismo cliente registrado dos veces,
          demandas de sucursales que no llegaron.
        </li>
        <li className="warn">
          <Icon name="identification-card" />
          <b>Identidades distintas.</b> El ID de cliente en ventas no es el
          mismo en logística, aunque sea la misma persona.
        </li>
        <li className="warn">
          <Icon name="clock-countdown" />
          <b>Datos viejos o perdidos.</b> Una API que responde tarde, un sensor
          que dejó de emitir a las 3 de la mañana.
        </li>
        <li>
          <Icon name="arrow-right" />
          Si el modelo recibe eso, la decisión sale mal. El dato crudo pasa
          primero por la planta de tratamiento.
        </li>
      </ul>
    </>
  ),

  // Bloque 3: ciclo de vida
  () => (
    <>
      <h2>
        <Icon name="infinity" /> El ciclo de vida del dato
      </h2>
      <div className="cycle">
        <div className="node gen">
          <Icon name="database" />
          <b>Generación e ingesta</b>
        </div>
        <i className="edge right ph ph-arrow-right" />
        <div className="node store">
          <Icon name="hard-drives" />
          <b>Almacenamiento</b>
        </div>
        <i className="edge down ph ph-arrow-down" />
        <div className="node trans">
          <Icon name="funnel-simple" />
          <b>Transformación</b>
        </div>
        <i className="edge left ph ph-arrow-left" />
        <div className="node serv">
          <Icon name="chalkboard-simple" />
          <b>Servicio y consumo</b>
        </div>
        <i className="edge up ph ph-arrow-up" />
        <div className="hub">
          <Icon name="infinity" />
        </div>
      </div>
      <div className="src">
        Marco de Joe Reis y Matt Housley, Fundamentals of Data Engineering.
      </div>
    </>
  ),

  // Bloque 3: la transformación en detalle
  () => (
    <>
      <h2>
        <Icon name="broom" /> El dato crudo no entra al modelo
      </h2>
      <ul className="fact-list">
        <li className="warn">
          <Icon name="calendar" />
          Fechas escritas como texto, decimales con coma o punto revueltos y
          monedas mezcladas se corrigen aquí.
        </li>
        <li className="warn">
          <Icon name="copy" />
          Se quitan duplicados y se decide qué hacer con los nulos: eliminar,
          imputar o marcar.
        </li>
        <li className="warn">
          <Icon name="ruler" />
          Unidades unificadas, kilos a toneladas, y agregados calculados antes
          de que el solver los lea.
        </li>
      </ul>
    </>
  ),

  // Bloque 4: linaje
  () => (
    <>
      <h2>
        <Icon name="tree-structure" /> Linaje del dato
      </h2>
      <ul className="fact-list">
        <li>
          <Icon name="link-simple" />
          Linaje es seguir un registro desde el sensor o microservicio donde
          nació, por cada script que lo tocó, hasta la variable que entra al
          modelo.
        </li>
        <li className="warn">
          <Icon name="warning-circle" />
          Si el solver devuelve un costo negativo o marca el modelo como
          infeasible, hay que auditar. Sin linaje no sabes si falló la lectura
          o un cálculo en medio.
        </li>
      </ul>
    </>
  ),

  // Bloque 4: por qué revisar la calidad antes de optimizar
  PreguntaSlide,

  // Bloque 4: calidad para optimizar
  () => (
    <>
      <h2>
        <Icon name="gauge" /> Tres preguntas antes de optimizar
      </h2>
      <div className="metric-row">
        <div className="metric">
          <Icon name="clock-countdown" />
          <b>Frescura</b>
        </div>
        <div className="metric">
          <Icon name="tray" />
          <b>Completitud</b>
        </div>
        <div className="metric">
          <Icon name="identification-card" />
          <b>Consistencia</b>
        </div>
      </div>
    </>
  ),

  // Puente al ponente 2
  () => (
    <>
      <h2>
        <Icon name="flag-checkered" /> Ahora viene lo material
      </h2>
      <div className="bignum-row">
        <div className="bignum-block">
          <div className="bignum">2</div>
          <div className="cap">El siguiente nivel: la plomería técnica.</div>
        </div>
      </div>
      <ul className="fact-list">
        <li>
          <Icon name="arrow-right" />
          Ya vimos por qué falla el dato, qué es estar limpio y el ciclo que
          debe seguir.
        </li>
        <li>
          <Icon name="arrow-right" />
          Ahora se abren las tuberías: qué piezas mueven los datos y dónde se
          atoran.
        </li>
      </ul>
    </>
  ),
];