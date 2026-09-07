# Guion y Outline: Ponente 2
**Tema:** La Fontanería: Arquitecturas, Almacenamiento y Pipelines  
**Tiempo estimado:** 25 minutos  
**Enfoque pedagógico:** Progressive Disclosure — Nivel 2 (Arquitectura interna, mecanismos y flujos tecnológicos)

---

## 1. Paradigmas de Ingesta y Procesamiento: ETL vs. ELT (0:00 - 7:00)
- **ETL Tradicional (Extract, Transform, Load):**
  - *Contexto:* Surgió en épocas donde el almacenamiento era costoso. Los datos se limpiaban antes de guardarse en el almacén central.
  - *Desventaja:* Si la regla de transformación cambiaba, el dato crudo original se había perdido o requería reprocesamiento costoso.
- **ELT Moderno (Extract, Load, Transform):**
  - *Contexto:* Nube económica y de almacenamiento masivo.
  - *Mecánica:* Se extrae todo en crudo, se almacena de inmediato en la nube y se transforma solo lo necesario usando el poder de cómputo moderno.
- **Modos de movimiento de datos:**
  - *Batch (Lotes):* Procesamiento nocturno o por intervalos (ideal para planificación estratégica de inventarios).
  - *Streaming (Tiempo Real):* Procesamiento evento por evento en milisegundos (vital para optimización dinámica de rutas o precios dinámicos).

---

## 2. La Evolución del Almacenamiento Analítico (7:00 - 15:00)
*Explicar la progresión cronológica con analogías claras:*

1. **Data Warehouse (El Supermercado ordenado):**
   - Altamente estructurado (tablas relacionales, esquemas definidos).
   - Optimizado para consultas SQL rápidas y analítica tradicional.
   - *Límite:* Rígido ante datos no estructurados (imágenes, audios, JSON crudos).
2. **Data Lake (El Océano de datos):**
   - Almacena cualquier tipo de archivo sin formato predefinido (ej. Amazon S3, Google Cloud Storage).
   - Barato y escalable.
   - *Riesgo:* Si no se gobierna, se convierte en un "Data Swamp" (pantano de datos inservibles).
3. **Data Lakehouse (La Convergencia Actual):**
   - Combina la flexibilidad y bajo costo del Data Lake con el control transaccional (ACID), velocidad y esquemas del Data Warehouse.

---

## 3. El Ecosistema de Herramientas (Vista de Bloques Funcionales) (15:00 - 20:00)
*Nota de oratoria: No explicar sintaxis de código, sino la función de cada engranaje.*

- **Mensajería / Streaming (Apache Kafka):** El "sistema circulatorio" que transporta millones de eventos por segundo sin colapsar.
- **Cómputo Distribuido (Apache Spark):** 
  - ¿Qué hacer cuando los datos no caben en la RAM de una computadora?
  - Spark divide la tarea en decenas de computadoras trabajando en paralelo (concepto de clúster) de forma transparente.
- **Orquestación (Apache Airflow):**
  - El "director de orquesta". Define el orden de las tareas: *Paso A no se ejecuta si Paso B falló; si una tarea falla a las 3:00 AM, reintenta automáticamente y envía alerta*.

---

## 4. Anatomía Visual de un Pipeline Moderno de Extremo a Extremo (20:00 - 25:00)
- **Diagrama paso a paso:**
  1. Clientes compran en una web $\to$ 
  2. Kafka recibe los eventos en tiempo real $\to$ 
  3. Spark procesa y normaliza los pedidos $\to$ 
  4. Los datos limpios se escriben en el Data Lakehouse $\to$ 
  5. La tabla final queda lista para alimentar un modelo analítico.
- **Puente hacia el Ponente 3:** *"Ahora que tenemos los datos procesados, orquestados y almacenados a gran escala... ¿cómo se conecta esto directamente con los modelos matemáticos de Investigación de Operaciones?"*