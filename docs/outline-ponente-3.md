# Guion y Outline: Ponente 3
**Tema:** El Puente con Investigación de Operaciones, Casos Reales y Futuro  
**Tiempo estimado:** 25 minutos (+ 10 min de discusión y preguntas finales)  
**Enfoque pedagógico:** Progressive Disclosure — Nivel 3 (Aplicación directa a IO, impacto práctico y horizontes futuros)

---

## 1. La Intersección: Data Engineering como Motor de la IO (0:00 - 7:00)
- **El eslabón perdido de la IO:** La Investigación de Operaciones enseña a modelar $Max \sum c_i x_i$ sujeto a restricciones $Ax \leq b$. Pero, ¿quién calcula la matriz $A$ y el vector $b$ en tiempo real?
- **Ejemplos directos de modelos clásicos de IO:**
  - *Problema de Ruteo de Vehículos (VRP):* Las distancias y tiempos de viaje no son constantes; dependen de tuberías de telemetría de tráfico que actualizan las matrices de costos dinámicamente.
  - *Planificación de la Producción (Aggregate Planning):* Requiere unir previsiones de demanda de ventas, disponibilidad de materia prima en bodega y turnos de personal de RRHH en una sola vista coherente.

---

## 2. Caso de Estudio Aplicado: Plataformas de Movilidad (Uber / DiDi / Rappi) (7:00 - 14:00)
*Desglosar el ciclo completo de optimización en producción:*

1. **El Problema de IO:** Asignación óptima bipartita (conductores vs. pasajeros) minimizando tiempos de espera y maximizando cobertura.
2. **El reto de Data Engineering:** 
   - Cientos de miles de teléfonos enviando coordenadas GPS cada 3 segundos.
   - Necesidad de latencias sub-segundo para que la asignación no quede obsoleta mientras el vehículo avanza.
3. **La Solución Integrada:**
   - Ingesta en streaming (Kafka) $\to$ enriquecimiento con mapas y congestión $\to$ cálculo de distancias matriciales en memoria $\to$ ejecución del algoritmo de optimización / solver $\to$ notificación push al conductor elegido.

---

## 3. Confiabilidad en Producción: DataOps y Drift (14:00 - 19:00)
- **¿Qué es DataOps?** Aplicar las prácticas de DevOps (integración continua, pruebas automatizadas y monitoreo) a las tuberías de datos.
- **El fenómeno del Data Drift y Concept Drift:**
  - ¿Qué ocurre cuando las condiciones del mundo real cambian drásticamente? (Ejemplo: cambios en patrones de consumo durante la pandemia o bloqueos viales inesperados).
  - Si los datos históricos cambian de distribución, las soluciones óptimas generadas por los modelos matemáticos dejan de ser viables en la realidad.
- **Monitoreo de pipelines:** Cómo garantizar que los datos entregados a los solvers no violen dominios de variables (ej. demandas negativas o tiempos nulos).

---

## 4. El Futuro de la Ingeniería de Datos y la Optimización (19:00 - 24:00)
- **Data Mesh:** Moverse de un equipo centralizado de datos a arquitecturas descentralizadas donde cada área de negocio es dueña de sus datos como un producto.
- **IA Generativa y Copilotos de Ingeniería:** Generación automatizada de pipelines, detección proactiva de anomalías y depuración de errores de orquestación.
- **Datos Sintéticos:** Uso de simulaciones para generar escenarios extremos que alimenten modelos estocásticos de optimización cuando no hay suficiente historia real.

---

## 5. Dinámica de Cierre y Preguntas (24:00 - Fin de la sesión)
- **Pregunta provocadora a la clase (3 min):**
  - *"Supongamos que su empresa quiere optimizar las rutas de despacho de paquetes usando un modelo de IO. Tienen 5 sucursales y 20 camiones. Mencionen tres problemas de ingeniería de datos que tendrían que resolver antes de poder correr el código del algoritmo."*
  - *Respuestas guiadas:* Diferentes formatos de direcciones postales, inconsistencia en el registro de pesos de paquetes, fallas de GPS en túneles o zonas remotas.
- **Sesión de preguntas y respuestas con los 3 ponentes.**