# Guion del ponente 1, el origen del problema y la anatomía del dato

### Bloque 0, apertura en grupo

**Acción escénica.** Yo salgo al centro del salón, mis dos compañeros se quedan a los lados.

* **Línea de entrada.** "En clase de Investigación de Operaciones modelamos cosas elegantes. Minimizamos costos, armamos rutas, asignamos recursos. Yo les pregunto algo directo. Cuando resuelven un examen, cuánto tardan en plantear el modelo. Y cuánto creen que tarda una empresa real en conseguir los datos para alimentarlo."
* **Contraste y tesis.** "En el salón tardamos 15 minutos en escribir la matriz. En la industria, el 80% del esfuerzo se va en conseguir, limpiar y juntar los datos. No en el algoritmo. La regla es simple. Si entra basura, sale basura. Lo dicen en inglés como Garbage In, Garbage Out. Ningún solver de Simplex o Branch and Bound decide bien si los parámetros vienen mal."
* **Hoja de ruta compartida.** "Hoy la sesión va en tres partes.
  1. Nivel 1, mi parte, qué es el dato, por qué falla y su ciclo de vida.
  2. Nivel 2, mi compañero, la plomería técnica, pipelines y dónde se guardan los datos.
  3. Nivel 3, mi compañera, cómo pega todo eso en modelos reales de IO y producción."

---

### Bloque 1, el mito de los datos limpios en IO

En los libros la matemática se ve ordenada. En la empresa, no.

* **El aula teórica.** "En Hillier o Taha la matriz de costos $C_{ij}$ y la demanda $D_k$ ya están ahí. Fijas, claras, en una tabla."
* **La realidad.** "En una cadena real esa matriz no existe en un solo archivo. El costo del diésel vive en el ERP, en SAP. Los peajes están en un txt viejo que nadie actualizó. El inventario real está en el WMS, y se cae a cada rato. Los pedidos entran por API o por Excels llenados a mano, con dedos que se equivocan. Armar eso duele, y toma tiempo."
* **Cuánto pesa.** La encuesta de Anaconda de 2020 a gente de datos decía que entre 70% y 80% del tiempo se iba en juntar y limpiar. Yo lo creo. Me ha pasado. Te queda un rato chico para modelar.

---

### Bloque 2, qué es ingeniería de datos

Es ingeniería de software aplicada a que los datos lleguen, no se rompan y estén a tiempo.

* **Definición corta.** "La ingeniería de datos diseña y mantiene sistemas y pipelines. Reciben datos crudos y revueltos. Los devuelven en tablas limpias que se pueden usar para analizar sin miedo a que fallen."
* **La analogía del acueducto.**
  * **Fuente.** El río o la lluvia son las fuentes crudas, transacciones, logs, sensores. Si tomas directo del río, te enfermas.
  * **Planta y tuberías.** Eso es la ingeniería de datos. Filtra, quita impurezas y mantiene la presión para que el agua corra parejo.
  * **Grifo y vaso.** Eso somos nosotros en IO y ciencia de datos. Abrimos el grifo y esperamos agua limpia para modelar.
* **Quién hace qué.**
  * **Data engineer.** Cuida que los datos existan, mantengan forma, lleguen a tiempo y que todo escale.
  * **Investigador de operaciones.** Plantea la función objetivo, pone restricciones y saca una solución de negocio con esos datos ya limpios.

---

### Bloque 3, el ciclo de vida del dato

Tomo el marco de Joe Reis y Matt Housley. Son cuatro etapas, en orden.

* **1. Generación e ingesta.**
  * **Origen.** Bases transaccionales OLTP en Postgres, telemetría, eventos web, APIs y sensores en planta.
  * **Ingesta.** Sacar esos datos cuando nacen o con barridos programados.
* **2. Almacenamiento.**
  * Hay que guardar el dato antes y después de procesarlo.
  * Separamos dónde se guarda de dónde se calcula. Así guardamos terabytes baratos en la nube sin tumbar el sistema operativo.
* **3. Transformación.**
  * Aquí se juega la calidad. El dato crudo no entra al modelo. Viene con fechas como texto, decimales con coma o punto revueltos, monedas mezcladas.
  * Lo típico es quitar duplicados, decidir qué hacer con nulos, pasar todo a las mismas unidades, por ejemplo kilos a toneladas, y calcular agregados.
* **4. Servicio y consumo.**
  * Al final entregamos tablas legibles a solvers como Gurobi, CPLEX o PuLP, o a tableros para dirección.

---

### Bloque 4, calidad, linaje y gobierno

Si el número que entra al modelo está mal, la decisión sale mal. Hay que poder rastrearlo.

* **Linaje.**
  * Es poder seguir un registro desde el sensor o microservicio donde nació, por cada script que lo tocó, hasta la variable que entra al modelo.
  * **Por qué importa en IO.** Si el solver te da un costo negativo o dice que no hay solución factible, lo marcas como infeasible, tienes que auditar. Sin linaje no sabes si falló la lectura o un cálculo en medio.
* **Calidad para optimizar.**
  * **Frescura.** Pregunta si la bodega reporta lo de hace 5 minutos o el corte de ayer a medianoche. Si el dato llega tarde, optimizas un mundo que ya no existe.
  * **Completitud.** Si faltan sucursales, la función objetivo sale chueca.
  * **Consistencia.** El ID de SKU o cliente debe significar lo mismo en ventas y en distribución.
* **Paso al ponente 2.**
  "Ya vimos por qué falla el dato, qué es estar limpio y el ciclo que debe seguir. Ahora viene lo material. Cómo se construye esto por dentro, qué piezas mueven los datos y dónde se atoran. Le paso la palabra a mi compañero para meternos a la plomería."