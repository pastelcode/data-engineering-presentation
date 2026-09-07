# Guion y Outline: Ponente 1
**Tema:** El Origen del Problema y la Anatomía del Dato  
**Tiempo estimado:** 25 minutos (+ 5 min de apertura general)  
**Enfoque pedagógico:** Progressive Disclosure — Nivel 1 (Fundamentos, intuición y necesidad)

---

## 0. Apertura General del Equipo (0:00 - 5:00)
- **Gancho inicial:** Pregunta abierta a la clase: *"En los ejercicios de Investigación de Operaciones, ¿cuánto tiempo nos toma resolver un modelo vs. cuánto tiempo toma en una empresa real conseguir los parámetros para ese modelo?"*
- **Tesis de la presentación:** Los mejores algoritmos de optimización (Simplex, Branch & Bound, metaheurísticas) son inútiles si los datos de entrada son incorrectos o llegan tarde (*Garbage In, Garbage Out*).
- **Hoja de ruta:** Presentar a los 3 expositores y la secuencia de la charla (Por qué existe $\to$ Cómo funciona por dentro $\to$ Cómo potencia la IO).

---

## 1. El Mito de los Datos Limpios en Investigación de Operaciones (5:00 - 10:00)
- **Contraste visual clave:**
  - *La teoría en el aula:* Una matriz de costos $C_{ij}$ perfectamente cuadrada, una demanda $D_k$ fija y conocida.
  - *La realidad operativa:* Datos repartidos en 4 sistemas ERP distintos, archivos Excel con formatos cambiados a mano por usuarios, APIs caídas, y registros duplicados.
- **La regla de oro del analista:** El 70% - 80% del tiempo de un proyecto de analítica/optimización se invierte en limpiar, integrar y transformar datos.
- **Idea para diapositiva:** Ilustración comparativa: "Problema en el libro de texto" vs. "Arquitectura de datos caótica de una empresa real".

---

## 2. ¿Qué es la Ingeniería de Datos (Data Engineering)? (10:00 - 15:00)
- **Definición conceptual:** La disciplina de diseñar, construir y mantener los sistemas y canalizaciones (pipelines) que transforman datos crudos y fragmentados en información limpia, accesible y confiable.
- **La analogía del agua potable:**
  - *Río / Fuente natural:* Datos crudos (sensores, transacciones, logs).
  - *Acueducto y planta de potabilización:* Data Engineering (ingeniería de tuberías, filtrado y presión).
  - *Vaso de agua en el grifo:* Data Science / IO (consumo directo para modelos de optimización).
- **Diferencia de roles en la industria (sin jerga técnica):**
  - *Data Engineer:* Garantiza que el dato llegue rápido, seguro e intacto.
  - *Investigador de Operaciones / Data Scientist:* Formula las preguntas matemáticas y resuelve los problemas de negocio usando ese dato.

---

## 3. El Ciclo de Vida de los Datos (Data Engineering Lifecycle) (15:00 - 21:00)
*Explicar las 4 fases fundamentales mediante un flujo lineal:*

1. **Generación e Ingesta:**
   - ¿De dónde vienen los datos? Sistemas transaccionales (OLTP), IoT, telemetría, bases de datos SQL y NoSQL.
2. **Almacenamiento:**
   - ¿Dónde se guardan mientras se procesan y después de procesarse? (Sistemas distribuidos, nubes públicas).
3. **Transformación:**
   - Estandarización de formatos, unión de tablas, eliminación de valores atípicos (*outliers*) o nulos.
4. **Servicio / Consumo:**
   - Disposición final para ser leídos por solvers (Gurobi, CPLEX, PuLP), almacenes analíticos o dashboards ejecutivos.

---

## 4. Calidad, Gobernanza y Linaje del Dato (21:00 - 25:00)
- **El concepto de Data Lineage (Linaje del dato):** Saber con exactitud de dónde vino un número, quién lo transformó y qué reglas de negocio se le aplicaron.
- **Métricas críticas de calidad de datos para IO:**
  - *Frescura / Latencia:* ¿El inventario reportado es de hace 5 minutos o de ayer a medianoche?
  - *Completitud:* ¿Faltan demandas de alguna sucursal?
  - *Consistencia:* ¿El ID de cliente es el mismo en logística y en ventas?
- **Puente hacia el Ponente 2:** *"Ya vimos qué es el dato y por qué lo necesitamos limpio. Ahora, ¿cómo se construye esa red de tuberías tecnológicas por dentro?"*