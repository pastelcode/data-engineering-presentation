import { Icon } from "./Icon";
import { PORTADA_CONTENT as C } from "../content/portada.js";

export const PORTADA = [
  () => (
    <>
      <h1>
        {C.title} <Icon name={C.titleIcon} />
      </h1>
      <div className="cover-meta">{C.meta}</div>
      <div className="bignum-row">
        {C.bignums.map((b, i) => (
          <div key={i} className="bignum-block">
            <div className={`bignum ${b.variant}`.trim()}>
              {b.value}
              {b.suffix ? <small>{b.suffix}</small> : null}
            </div>
            <div className="cap">{b.cap}</div>
          </div>
        ))}
      </div>
    </>
  ),
];
