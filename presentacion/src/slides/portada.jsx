import { Icon } from "./Icon";

export const PORTADA = [
  () => (
    <>
      <h1>
        Data Engineering <Icon name="database" />
      </h1>
      <div className="cover-meta">
        Investigación de Operaciones · Andrés Tobar · Jostyne Montenegro ·
        Samuel Marroquín · Septiembre 2026
      </div>
      <div className="bignum-row">
        <div className="bignum-block">
          <div className="bignum amber">
            70-80<small>%</small>
          </div>
          <div className="cap">
            Del esfuerzo de un proyecto de analítica se va en conseguir y
            limpiar datos, no en el algoritmo. Encuesta Anaconda, 2020.
          </div>
        </div>
        <div className="bignum-block">
          <div className="bignum">4</div>
          <div className="cap">
            Fases del ciclo de vida del dato, de la ingesta al consumo.
          </div>
        </div>
      </div>
    </>
  ),
];