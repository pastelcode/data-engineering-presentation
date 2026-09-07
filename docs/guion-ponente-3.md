# Guión Completo del Ponente 3: El Puente con Investigación de Operaciones, Casos Reales y Futuro

**Tiempo total asignado:** 35 minutos (25 min de exposición + 10 min de dinámica y preguntas finales)  
**Propósito:** Demostrar cómo la ingeniería de datos hace operables los modelos teóricos de Investigación de Operaciones a escala real, analizando la confiabilidad en producción y las nuevas fronteras del sector.

---

### Bloque 0: Transición y Conexión (0:00 – 1:30)

**Acción escénica:** El Ponente 3 toma la palabra e interactúa directamente con los conceptos expuestos por los dos ponentes previos.

* **Línea de entrada:** «Ya vimos con mi primer compañero qué es el dato, por qué en bruto es caótico y el ciclo que debe recorrer. Luego, mi segundo compañero nos mostró la fontanería: cómo Kafka mueve eventos, Spark los procesa en paralelo y los Lakehouses los almacenan. Ahora llegamos al punto crítico para nuestra materia: ¿para qué sirve toda esta infraestructura si no es para tomar mejores decisiones?»
* **Tesis de cierre:** «Un modelo de optimización no vive en el vacío dentro de un cuaderno de Jupyter o un archivo AMPL. En el mundo real, los algoritmos de optimización son motores que consumen datos vivos como combustible. Si la tubería falla, la decisión matemática colapsa en cuestión de segundos».

---

### Bloque 1: La Intersección: Data Engineering como Motor de la IO (1:30 – 7:30)

**Concepto central:** La formulación matemática clásica frente a la parametrización dinámica en tiempo real.

* **El eslabón perdido en el aula:**  
  «En clase formulamos expresiones como:
  $$\min \sum_{i} \sum_{j} c_{ij} x_{ij} \quad \text{sujeto a} \quad \sum_j x_{ij} \le b_i$$
  Resolvemos el problema asumiendo que los costos $c_{ij}$ y las restricciones $b_i$ son constantes dadas por el profesor. Pero en la práctica, **nadie te entrega la matriz de restricciones ni los coeficientes de costos listos**. La ingeniería de datos es precisamente la disciplina que calcula, actualiza y valida esos parámetros en tiempo real».
* **Ejemplos directos de modelos clásicos de IO:**
  1. *Ruteo de Vehículos (VRP / TSP dinámico):*  
     «La matriz de distancias o tiempos de viaje ($c_{ij}$) cambia minuto a minuto por accidentes, lluvia o congestión vial. Un pipeline de streaming de telemetría procesa coordenadas GPS y recalcula los arcos del grafo antes de que el solver ejecute la optimización».
  2. *Planificación de la Producción (Aggregate Planning):*  
     «Para optimizar inventarios multiescalón o turnos fabriles, un pipeline Batch o micro-batch debe conciliar en un Data Lakehouse:
     * Previsiones de demanda del área comercial (series de tiempo).
     * Niveles de inventario físico en ERP/WMS.
     * Restricciones sindicales y de horas extra del sistema de RRHH.  
     Si la ingeniería de datos no consolida estos tres mundos bajo un mismo esquema horario, el modelo arrojará soluciones matemáticamente factibles pero físicamente irrealizables».
  3. *Simulación de Monte Carlo a Escala:*  
     «Ejecutar 500,000 escenarios estocásticos de riesgo financiero o de red requiere clústeres distribuidos (como Spark) ingiriendo terabytes de datos históricos sin desbordar memoria».

---

### Bloque 2: Caso de Estudio Real: Plataformas de Movilidad (Uber / DiDi / Rappi) (7:30 – 14:00)

**Concepto central:** La orquestación completa de un pipeline de baja latencia acoplado a un solver de optimización.

* **1. El Problema de Investigación de Operaciones:**  
  «El reto es resolver un **emparejamiento bipartito de peso máximo** (*Maximum Weight Bipartite Matching*) en ventanas de tiempo discretas (por ejemplo, lotes de 3 a 5 segundos). No se asigna el primer conductor que aparece por codicia (*greedy*), sino que se busca el óptimo global que minimice los tiempos estimados de llegada (ETA) y maximice la tasa de completación del servicio».
* **2. El Desafío de Ingeniería de Datos:**  
  * Cientos de miles de conductores y usuarios transmitiendo eventos de telemetría cada pocos segundos.
  * Latencias estrictas: Si la tubería tarda más de 2 segundos en procesar los eventos, el vehículo ya cambió de intersección y el plan óptimo queda obsoleto.
* **3. La Solución Arquitectónica Integrada (Flujo Extremo a Extremo):**
  * **Ingesta:** Los pings de la app móvil entran en tópicos particionados de *Apache Kafka*.
  * **Indexación Espacial:** Motores de streaming (como *Apache Flink*) asignan las coordenadas a celdas hexagonales mediante librerías geoespaciales (como H3 de Uber), calculando métricas de oferta y demanda por zona.
  * **Feature Store en Memoria:** Datos como la calificación del conductor, probabilidad de cancelación y ETA estimado se consolidan en almacenes de clave-valor ultra-rápidos (Redis / Cassandra) con tiempos de lectura de un dígito de milisegundos.
  * **Ejecución del Solver:** El motor de despacho extrae la sub-matriz de costos locales, resuelve el emparejamiento óptimo y despacha la notificación push vía gRPC al conductor elegido.
  * **Lección clave:** «El algoritmo de IO es brillante, pero sin un pipeline de eventos sub-segundo detrás, el coche nunca llegaría a tu puerta».

---

### Bloque 3: Confiabilidad en Producción: DataOps y Drift (14:00 – 19:00)

**Concepto central:** Garantizar que la calidad y estabilidad de los datos se mantenga a lo largo del tiempo para evitar fallos catastróficos en el modelo.

* **¿Qué es DataOps?**  
  «Es trasladar la mentalidad de DevOps a la ingeniería de datos: pruebas continuas, control de versiones del dato y monitoreo automatizado en cada paso de la tubería».
* **La pesadilla de la IO: Data Drift y Concept Drift:**  
  * *Data Drift (Deriva de datos):* «Ocurre cuando la distribución estadística de las variables de entrada cambia drásticamente. Si el precio del combustible sube un 40% o se cierra un puente troncal, la matriz de costos calculada con datos históricos ya no refleja la realidad. El solver optimiza sobre supuestos falsos».
  * *Concept Drift (Deriva de concepto):* «La relación estructural entre entrada y salida se rompe (por ejemplo, cambios permanentes en patrones de consumo y movilidad urbana tras la pandemia). Las funciones objetivo calibradas en el pasado dejan de predecir o maximizar el beneficio real».
* **Pruebas Automatizadas y Barreras de Contención:**  
  * «Un pipeline moderno implementa contratos de datos (*Data Contracts*) y pruebas con herramientas como *Great Expectations*:
    * Validar que la demanda nunca sea negativa ($D_k \ge 0$).
    * Alertar si más del 2% de los registros vienen con valores nulos o si los tiempos de viaje caen fuera de los rangos físicos posibles.
  * Si un lote de datos corrompido llega al solver, este marcará el problema como *infeasible* (infactible) o asignará recursos de forma absurda, deteniendo operaciones reales de una fábrica o flota de transporte».

---

### Bloque 4: El Futuro de la Ingeniería de Datos y la Optimización (19:00 – 24:00)

**Concepto central:** Hacia dónde evolucionan las arquitecturas para soportar problemas de mayor complejidad analítica.

* **1. Data Mesh (Descentralización del dato):**  
  «Pasamos de tener un equipo centralizado de TI 'embotellado' a tratar los datos como productos gestionados directamente por los dominios de negocio (Logística, Finanzas, Ventas). El analista de IO no tiene que rogar por accesos; consume 'productos de datos' estandarizados y con acuerdos de nivel de servicio (SLA) garantizados».
* **2. IA Generativa y Agentes en Pipelines:**  
  «Modelos de lenguaje y agentes que monitorean flujos de datos en segundo plano, detectan anomalías en pipelines de forma proactiva, corrigen esquemas de tablas automáticamente y generan código de integración entre sistemas dispares».
* **3. Datos Sintéticos para Optimización Estocástica y Simulación:**  
  «En situaciones con pocos registros históricos (como el lanzamiento de un nuevo centro de distribución o la simulación de una disrupción portuaria global), se generan datos sintéticos preservando correlaciones estadísticas para evaluar la robustez y resiliencia de las soluciones matemáticas».
* **Cierre del Ponente 3:**  
  «La Investigación de Operaciones nos da la inteligencia para decidir el camino óptimo; la Ingeniería de Datos construye la autopista sobre la cual esa decisión puede transitar en el mundo real».

---

### Bloque 5: Dinámica Interactiva y Cierre General (24:00 – 35:00)

**Acción escénica:** Los Ponentes 1 y 2 se reintegran al centro de la sala junto al Ponente 3 para interactuar con los compañeros.

#### Mini-dinámica: «El Solver en el Mundo Real» (~3-4 minutos)
* **Planteamiento a la clase:**  
  «Supongan que una cadena logística nacional les pide optimizar la asignación diaria de entregas: tienen 5 bodegas centrales, 20 camiones y 500 clientes por día. El modelo matemático en el pizarrón se ve sencillo. Pero antes de presionar 'resolver', ¿cuáles son tres problemas graves de ingeniería de datos con los que tendrían que lidiar?»
* **Interacción con el aula y respuestas guiadas:**
  1. *Direcciones heterogéneas:* Clientes que escribieron su dirección con abreviaturas no estandarizadas, referencias vagas o sin coordenadas GPS válidas.
  2. *Inconsistencia de pesos y cubicaje:* El catálogo de productos reporta pesos en libras, otros en kilogramos y empaques sin dimensiones tridimensionales volumétricas.
  3. *Ventanas horarias y restricciones vivas:* Horarios de descarga en centros comerciales que no están documentados en ninguna base de datos estructurada, sino en la memoria de los conductores veteranos.

#### Sesión Abierta de Preguntas y Respuestas (~6-7 minutos)
* Los tres integrantes responden dudas técnicas sobre las herramientas, la arquitectura o la formulación de los casos expuestos.