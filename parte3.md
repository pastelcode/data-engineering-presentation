Algoritmos_ciegos_sin_ingeniería_de_datos.m4a

Automatically transcribed by Speechnotes on: 07/09/2026, 12:27:53
Total recording length: 00:28:19

{ 0:00 }
Bueno, normalmente cuando se habla de pedir un auto o comida a domicilio a través de alguna de estas aplicaciones, existe, o sea, esta expectativa generalizada de que todo ocurre por arte de magia.

Speaker 2:  { 0:15 }
Sí, claro, que aprietas un botón y ya.

Speaker 1:  { 0:18 }
Exacto, tienes ahí tu pantalla con una barra de progreso súper limpia, un pequeño icono de un auto moviéndose así súper suavemente sobre un mapa digital. La verdad, da una sensación de paz absoluta.

Speaker 2:  { 0:32 }
Totalmente, pero es una paz de mentira.

Speaker 1:  { 0:35 }
Es una ilusión y precisamente el propósito de nuestra exploración de hoy es desarmar esa ilusión por completo. Ajá. Vamos a meternos de lleno en la intersección crítica entre la investigación de operaciones que para quienes nos escuchan son esos algoritmos matemáticos brillantes que buscan la solución óptima a cualquier problema.

Speaker 2:  { 0:56 }
Y la otra parte, claro, la ingeniería de datos.

Speaker 1:  { 0:59 }
Exactamente la infraestructura pesada, pura y dura que hace posible que esos algoritmos de verdad funcionen fuera de, digamos, una pizarra acalémica.

Speaker 2:  { 1:09 }
Es que sin eso no hay nada.

Speaker 1:  { 1:10 }
Nada. Y para esto vamos a diseccionar un material que me pareció sumamente revelador. Son unos apuntes y guiones técnicos de una presentación especializada que expone exactamente como los modelos teóricos más avanzados. Pues colapsan miserablemente en la vida real. Si no tienen una arquitectura de datos robusta detrás, sí el objetivo.

Speaker 2:  { 1:32 }
De esos textos es mostrar esa tubería invisible que mantiene vivas a las aplicaciones que usamos a diario.

Speaker 1:  { 1:38 }
Totalmente y yo estoy fascinada con este tema es.

Speaker 2:  { 1:41 }
Que es buenísimo, porque detrás de ese digamos ballet perfectamente coreografiado que vemos en la pantalla del celular. Lo que realmente hay es una carrera brutal, caótica y llena de lodo.

Speaker 1:  { 1:53 }
Una carnicería de datos.

Speaker 2:  { 1:55 }
Tal cual, los algoritmos de optimización no son entes abstractos que viven en un entorno estéril, o sea, no están flotando en un archivo matemático o en un cuaderno de Júpiter súper limpio.

Speaker 1:  { 2:07 }
Claro, están en la calle.

Speaker 2:  { 2:08 }
Son motores y esos motores consumen datos vivos, datos del mundo real que son su combustible. Y si la tubería que transporta ese combustible falla, se atasca o peor trae información contaminada.

Speaker 1:  { 2:22 }
Toda la decisión colapsa.

Speaker 2:  { 2:24 }
En cuestión de segundos todo se viene abajo.

Speaker 1:  { 2:27 }
Me encanta la analogía del motor, porque leyendo las fuentes yo pensaba en esto. Básicamente, la Academia te enseña a construir un motor de fórmula uno y a probarlo en un laboratorio cerrado.

Speaker 2:  { 2:37 }
Ajá en condiciones ideales.

Speaker 1:  { 2:39 }
Claro, en las aulas se formulan expresiones matemáticas perfectas para no sé minimizar costos o maximizar rutas, y ahí el profesor te entrega una matriz de números impecables.

Speaker 2:  { 2:49 }
Todo cuadra, perfecto.

Speaker 1:  { 2:50 }
Obvio, y como estudiante, asumes que las distancias, los tiempos y los costos son constantes.

{ 2:58 }
Pero y aquí es donde la cosa se pone interesante, en la calle nadie te entrega el circuito resuelto.

Speaker 2:  { 3:04 }
Para nada.

Speaker 1:  { 3:05 }
La ingeniería de datos es la disciplina que tiene que construir este el chasis, las ruedas y el sistema de inyección de combustible, que calculan esos parámetros mientras el auto va a 300 km/h.

Speaker 2:  { 3:18 }
Esquivando baches reales.

Speaker 1:  { 3:19 }
Exacto, esquivando baches reales.

Speaker 2:  { 3:22 }
¿Y si llevamos ese motor directamente a la calle sin un chasis es adecuado? El choque es 100% inevitable.

Speaker 1:  { 3:28 }
Las notas técnicas que estamos revisando lo ilustran perfecto con el problema clásico del rooteo de vehículos.

Speaker 2:  { 3:34 }
Ajá, el famoso problema del vendedor viajero y sus variantes.

Speaker 1:  { 3:37 }
Ese mero en el papel, la distancia y el tiempo de viaje entre el punto A y el punto B es un número estático. Son digamos 15 minutos y punto, pero en la vida real nunca son 15 minutos fijos.

Speaker 2:  { 3:50 }
Exacto, en la operación real, esa matriz de tiempos cambia cada minuto.

{ 3:55 }
Porque empezó a llover o porque hubo un accidente en una avenida principal o de repente hay un embotellamiento sorpresa.

Speaker 1:  { 4:01 }
Y el algoritmo ahí se queda esperando.

Speaker 2:  { 4:04 }
Claro, para que el algoritmo matemático siquiera intente buscar la ruta óptima, primero necesita que un pipeline de datos procese la telemetría GPS de miles de vehículos en.

Speaker 1:  { 4:14 }
Vivo, o sea, necesita recalcular las condiciones de la calle en ese instante totalmente.

Speaker 2:  { 4:20 }
Necesita datos frescos.

Speaker 1:  { 4:21 }
Entonces el algoritmo de optimización es completamente ciego por sí solo.

Speaker 2:  { 4:27 }
Ciego y sordo.

Speaker 1:  { 4:28 }
Guau. No sabe qué problema está resolviendo hasta que la ingeniería de datos le toma una fotografía instantánea del mundo en ese milisegundo. Exacto.

Speaker 2:  { 4:37 }
Exactamente totalmente ciego. Y la complejidad se multiplica exponencialmente cuando pasamos a áreas como la planificación de la producción.

Speaker 1:  { 4:46 }
Uy, sí, el material tiene una sección entera sobre eso.

Speaker 2:  { 4:49 }
Sí, detalla como para optimizar los inventarios o los turnos de una fábrica gigante es absolutamente obligatorio consolidar información en lo que se llama un data Lake House.

Speaker 1:  { 5:00 }
¿Que es como un superrepositorio, no?

Speaker 2:  { 5:02 }
Es un repositorio central que mezcla almacenamiento masivo con capacidades de análisis superrápido. Y el reto de la ingeniería de datos ahí no es solo juntar archivos de Excel.

Speaker 1:  { 5:11 }
Claro, no es copiar y pegar.

Speaker 2:  { 5:13 }
¿No es reconciliar 3 universos paralelos que de plano hablan idiomas distintos?

Speaker 1:  { 5:18 }
A ver, cuéntame de esos 3.

Speaker 2:  { 5:19 }
Mira, primero tienes las previsiones de demanda que vienen del área comercial, segundo, el inventario físico real que reportan los sistemas de gestión de almacenes ajá y tercero, las restricciones laborales y sindicales sobre horas extra que esas las maneja recursos humanos.

Speaker 1:  { 5:36 }
Claro, son sistemas que probablemente ni siquiera se actualizan al mismo ritmo.

Speaker 2:  { 5:40 }
Para nada.

Speaker 1:  { 5:41 }
O sea, el área comercial hace proyecciones por mes, el almacén este se actualiza cada hora con lo que entra y sale y el sindicato tiene reglas fijas que a lo mejor cambian cada año.

Speaker 2:  { 5:52 }
Exacto, están desfasados.

Speaker 1:  { 5:54 }
¿Entonces, si la arquitectura de datos no logra unificar todo eso bajo un mismo marco temporal? Pues el modelo matemático te arroja una solución, que es un espejismo.

Speaker 2:  { 6:04 }
Total, una alucinación, sí.

Speaker 1:  { 6:07 }
¿Podría concluir? No sé, hay que fabricar 1000 unidades este domingo, lo cual matemáticamente es brillante, pero resulta que el almacén no tiene materia prima y para colmo, el sindicato prohíbe operar los domingos.

Speaker 2:  { 6:20 }
Y ahí tienes la definición del libro de una solución infactible.

Speaker 1:  { 6:23 }
Totalmente.

Speaker 2:  { 6:24 }
Y bueno, el material también aborda lo que sucede cuando el problema es de pura escala computacional. Como los modelos de riesgo o las simulaciones de montecarlo.

Speaker 1:  { 6:32 }
¿Que esos son pesadísimos?

Speaker 2:  { 6:34 }
Brutales, aquí ya no estás buscando una ruta. ¿Estás buscando calcular el riesgo financiero ejecutando cientos de miles de escenarios estadísticos posibles sobre cómo se va a comportar el mercado?

Speaker 1:  { 6:45 }
¿Y cómo haces eso sin quemar los?

Speaker 2:  { 6:46 }
Servidores, pues para ingerir y procesar terabytes de datos históricos sin que la memoria del sistema colapse, tienes que levantar clústeres de computación distribuida. Usando herramientas como Apaches Park.

Speaker 1:  { 6:59 }
Que divinen el trabajo.

Speaker 2:  { 7:00 }
Exacto, dividen el trabajo entre docenas de máquinas y mortalamente para que no explote una sola.

Speaker 1:  { 7:05 }
Bueno, hasta aquí hemos establecido que los datos cambian constantemente y que la escala puede ser masiva, pero hay una sección en los apuntes que te juro lleva esto a un nivel de estrés hiperbólico.

Speaker 2:  { 7:19 }
La de las plataformas de movilidad.

Speaker 1:  { 7:21 }
¿Sí, o sea, qué ocurre cuando esos datos no cambian cada hora, sino cada 3 segundos?

Speaker 2:  { 7:27 }
Es otro mundo.

Speaker 1:  { 7:28 }
Pasamos de planificar fábricas con días de anticipación a la hipervelocidad de los gigantes del transporte de pasajeros o el reparto de comida y leyendo cómo operan estas empresas. Te digo que me genera un cortocircuito.

Speaker 2:  { 7:42 }
¿A ver, por qué?

Speaker 1:  { 7:43 }
Pues porque yo me pregunto si una persona está parada en la esquina buscando un viaje y la a B que hay un conductor disponible a media cuadra.

Speaker 2:  { 7:51 }
Sí, lo más lógico.

Speaker 1:  { 7:53 }
¿Por qué no simplemente asignarle ese conductor de inmediato?

{ 7:57 }
¿Una asignación codiciosa como le dicen, por qué necesitamos una infraestructura matemática y de datos tan titánica para algo que suena tan simple?

Speaker 2:  { 8:08 }
Es una súper buena pregunta y la respuesta es porque el objetivo de una plataforma de este nivel no es hacer feliz a un solo pasajero o k el objetivo es mantener vivo todo el ecosistema de la ciudad. A esto se le conoce en investigación de operaciones. Como el emparejamiento bipartito de peso máximo.

Speaker 1:  { 8:27 }
Suena intimidante.

Speaker 2:  { 8:28 }
Un poco, pero básicamente si se asigna siempre el vehículo más cercano al primer pasajero que lo pide, destruyes lo que llamamos el óptimo global.

Speaker 1:  { 8:37 }
A ver, danos un ejemplo con autos y tiempos.

Speaker 2:  { 8:40 }
Va, supongamos que el auto uno está a 1 minuto del pasajero a.

Speaker 1:  { 8:44 }
Super cerca.

Speaker 2:  { 8:45 }
Sí, pero está a 20 minutos del pasajero B.

Speaker 1:  { 8:47 }
O K lejísimos del segundo exacto.

Speaker 2:  { 8:50 }
Y por otro lado tienes el auto 2 que está a 4 minutos de ambos pasajeros.

Speaker 1:  { 8:55 }
Ah, ya voy viendo el problema.

Speaker 2:  { 8:57 }
¿Si haces una asignación codiciosa, el sistema le da el auto uno al pasajero a de inmediato porque está a 1 minuto, pero condena al pasajero b a esperar 20 minutos a que se desocupe alguien qué?

Speaker 1:  { 9:09 }
Desastre para el pasajero b.

Speaker 2:  { 9:11 }
Un algoritmo global cruza los datos de toda la cuadrícula y decide darle el auto 2 al pasajero a. Y el auto uno al pasajero b.

Speaker 1:  { 9:19 }
O sea, sacrificar unos cuantos segundos del pasajero a.

Speaker 2:  { 9:22 }
Exacto, ambos terminan esperando un promedio bajo y la red no colapsa es.

Speaker 1:  { 9:27 }
Sacrificar eficiencia individual momentánea para garantizar que el tiempo estimado de llegada, el famoso ETA de toda la ciudad, se mantenga estable.

Speaker 2:  { 9:36 }
Sí tiene todo el sentido matemático del mundo.

Speaker 1:  { 9:38 }
Lo tiene, pero hacerlo a una escala de cientos de miles de usuarios en movimiento simultáneo. Suena a una pesadilla técnica absoluta.

Speaker 2:  { 9:47 }
Oh, lo es, créeme que lo es. Si el sistema tarda más de 2 segundos en absorber la información y correr, es el algoritmo global.

Speaker 1:  { 9:55 }
El conductor ya se.

Speaker 2:  { 9:56 }
Movió exacto. El conductor ya avanzó a la siguiente intersección, el pasajero ya se desesperó y canceló y el plan maestro queda totalmente obsoleto. Guau. El flujo técnico de extremo a extremo que exponen estas fuentes es de verdad como un reloj suizo operando en medio de un huracán. Todo comienza con Apache Kafka.

Speaker 1:  { 10:12 }
Que es como una manguera de bomberos gigante, no tal.

Speaker 2:  { 10:15 }
Cual está ingiriendo todos los pins de ubicación GPS que envían los celulares de conductores y pasajeros, literalmente cada segundo.

Speaker 1:  { 10:23 }
Pero a ver, Kafka no analiza nada cierto, solo recibe el impacto masivo de datos para que los servidores de la empresa no exploten.

Speaker 2:  { 10:30 }
Exactamente solo amortigua el caos, de ahí los datos pasan a motores de procesamiento en tiempo real como flync.

Speaker 1:  { 10:37 }
O K.

Speaker 2:  { 10:38 }
Pero hay un problema. Calcular distancias exactas entre 1000000 de puntos GPS flotantes matemáticamente es lentísimo.

Speaker 1:  { 10:46 }
Sí, la trigonometría, ahí te mata.

Speaker 2:  { 10:49 }
Por eso usan librerías de indexación espacial como h 3, que la desarrolló Uber.

Speaker 1:  { 10:53 }
¿Ah, sí leí sobre eso en los apuntes, es lo de proyectar celdas sobre el mapa, no?

Speaker 2:  { 10:59 }
Exacto, proyectan una red de celdas hexagonales sobre el mapa de la ciudad entera. En lugar de calcular trayectorias súper complejas entre calles curvas, el sistema simplifica y dice.

Speaker 1:  { 11:10 }
Tengo 50 pasajeros en el hexágono norte.

Speaker 2:  { 11:14 }
Y solo 10 conductores en ese mismo hexágono convierte un problema de geometría imposible en un problema de conteo casi instantáneo.

Speaker 1:  { 11:21 }
Hexágonos digitales cubriendo el mundo real es fascinante y mientras eso pasa, las bases de datos de ultra baja latencia como redis o Cassandra. Me imagino que están inyectando todo el contexto de negocio.

Speaker 2:  { 11:35 }
A toda velocidad en cuestión de milisegundos, se evalúan la calificación del conductor, la probabilidad de que ese pasajero específico cancela el viaje si espera mucho.

Speaker 1:  { 11:45 }
O si hay tarifa dinámica activa por la lluvia.

Speaker 2:  { 11:48 }
Todo eso, y recién en ese instante, con la mesa ya puesta y todos los datos limpios y filtrados, entra en acción el solver, el algoritmo matemático de verdad.

Speaker 1:  { 11:57 }
El cerebro de la operación ajá.

Speaker 2:  { 11:59 }
Hace el cruce global que mencionamos, toma la decisión óptima y empuja el resultado hacia fuera usando GRPC.

Speaker 1:  { 12:05 }
Que es un protocolo rapidísimo de comunicación, sí.

Speaker 2:  { 12:09 }
Es para enviar una notificación directa y sin demoras a la pantalla del conductor elegido. Y todo este proceso, ojo, desde que Kafka recibe el GPS hasta que el conductor ve la alerta, ocurre en un parpadeo.

Speaker 1:  { 12:21 }
Es irreal es la demostración empírica de que el algoritmo matemático más refinado del universo. No tiene ningún valor comercial si tu tubería de datos.

Speaker 2:  { 12:32 }
Es lenta, cero valor, la velocidad es el oxígeno del sistema.

Speaker 1:  { 12:36 }
Sin duda, pero avanzando un poco más en el análisis, las fuentes lanzan una advertencia bastante severa, y es que esa misma velocidad se convierte en veneno puro si los datos que viajan a la velocidad de la luz ya no representan la realidad.

Speaker 2:  { 12:51 }
El famoso drift.

Speaker 1:  { 12:52 }
Exacto, el texto habla de 2 monstruos silenciosos que atacan estos sistemas.

{ 12:58 }
La deriva de concepto y la deriva de datos.

Speaker 2:  { 13:01 }
Sí, concept drift y data drift.

Speaker 1:  { 13:03 }
Para visualizarlo, pensemos en la deriva de concepto, como intentar navegar hoy en Pleno 2026 * 1 ciudad usando un mapa de tráfico súper detallado, pero del año 2019.

Speaker 2:  { 13:16 }
Antes del caos.

Speaker 1:  { 13:17 }
Exacto, las calles físicas siguen ahí. El asfalto no se movió. Pero la pandemia alteró permanentemente los patrones de consumo, la gente hace mucho más trabajo remoto.

Speaker 2:  { 13:27 }
Claro, el tráfico pico de las mañanas cambió de las zonas financieras a zonas más residenciales.

Speaker 1:  { 13:32 }
Entonces, si el sistema usa el modelo predictivo de 2019, la computadora procesa todo rapidísimo, pero está optimizando los recursos para un mundo fantasma, un mundo que ya desapareció.

Speaker 2:  { 13:43 }
El modelo pierde por completo la conexión con la realidad estructural.

Speaker 1:  { 13:47 }
¿Y a esto se le suma la deriva de datos, verdad? Sí.

Speaker 2:  { 13:50 }
Que el data drift es mucho más abrupto, más de golpe ocurre cuando las variables de entrada sufren un choque externo severo y repentino. Por ejemplo, el precio del combustible sufre un aumento del 40% en una sola semana.

Speaker 1:  { 14:05 }
O se cierra un puente arterial en la ciudad por mantenimiento de emergencia.

Speaker 2:  { 14:09 }
Exacto, y el tema es que el solver matemático no lee las noticias en la mañana.

Speaker 1:  { 14:14 }
No, ni se entera.

Speaker 2:  { 14:15 }
Si nadie actualiza esas restricciones manualmente o a través de los datos. El algoritmo, en su infinita eficiencia matemática, seguirá mandando flotas enteras directo hacia un puente cerrado.

Speaker 1:  { 14:26 }
Creyendo que es la ruta más rápida y barata.

Speaker 2:  { 14:29 }
Y termina siendo un embudo total.

Speaker 1:  { 14:31 }
¿Entonces, la pregunta del 1000000 es, cómo se frena un algoritmo que está optimizando una mentira a miles de operaciones por segundo?

Speaker 2:  { 14:39 }
Pues las fuentes plantean una solución drástica, que la verdad viene prestada del desarrollo de software, aplicar la mentalidad devops al mundo de los datos.

Speaker 1:  { 14:48 }
Lo que hoy llaman data OPS.

Speaker 2:  { 14:50 }
Exactamente y la herramienta central. Aquí son los famosos contratos de datos. Básicamente se establecen barreras de seguridad automatizadas usando librerías de validación como Great Expectations.

Speaker 1:  { 15:02 }
Como aduanas de datos.

Speaker 2:  { 15:04 }
Literal, antes de que los datos toquen el algoritmo de optimización tienen que pasar por un punto de control que verifica reglas inquebrantables del negocio y de la física.

Speaker 1:  { 15:13 }
Claro, como validar que en una tabla de proyecciones la demanda nunca jamás sea un número negativo.

Speaker 2:  { 15:21 }
Exacto, porque físicamente no puedes entregar menos 10 paquetes.

Speaker 1:  { 15:25 }
Obvio, o saltar una alarma si de repente más del 2% de las direcciones de los clientes en un lote de datos vienen nulas o vacías.

Speaker 2:  { 15:33 }
O rechazar cálculos de tiempo de viaje absurdos, o sea, si por un error de latencia, el sistema calcula que un camión viajó de un extremo a otro del país en 3 minutos.

Speaker 1:  { 15:43 }
El contrato de datos detecta que eso rompe las leyes de la física de Einstein.

Speaker 2:  { 15:47 }
Y lo frena en seco, es infinitamente mejor que el sistema marque el problema como infactible. Y detenga el proceso para que un humano lo revise.

Speaker 1:  { 15:56 }
Sí, antes que permitir que esa basura alimente una decisión operativa que desvíe decenas de camiones reales hacia un desastre logístico.

Speaker 2:  { 16:04 }
Exacto. Basura, entra, basura sale.

Speaker 1:  { 16:06 }
Lo cual, honestamente, nos arrastra hacia la sección que me pareció la más fascinante y genuinamente cómica de todos los apuntes.

Speaker 2:  { 16:13 }
Uy, ya sé a cuál.

Speaker 1:  { 16:14 }
Vas, es que venimos hablando de pandemias globales, inflación extrema del combustible, caídas de infraestructura, pero el texto hace un ejercicio mental con un escenario mundano a más no poder.

Speaker 2:  { 16:24 }
El de las bodegas y los cambiones.

Speaker 1:  { 16:25 }
Ese mismo operar 5 bodegas, coordinar 20 camiones y entregar pedidos a 500 clientes. Y resulta que una arquitectura de inteligencia artificial multimillonaria puede ser completamente derrotada por algo tan humano y banal como no saber cuánto mide una caja de cartón.

Speaker 2:  { 16:46 }
Es el fango absoluto de la realidad operativa diaria y pasa más de lo que crees. La tecnología de punta siempre encuentra su límite en la inconsistencia humana y física.

Speaker 1:  { 16:55 }
Sí, total.

Speaker 2:  { 16:56 }
El material detalla 3 pesadillas súper específicas que atormentan a la ingeniería de datos mucho antes de siquiera intentar optimizar nada. Y la primera es la heterogeneidad y la calidad de las direcciones físicas.

Speaker 1:  { 17:08 }
Uf, el terror de cualquier repartidor.

Speaker 2:  { 17:11 }
El algoritmo matemático asume que un punto de entrega es una coordenada de latitud y longitud perfecta y sin ambigüedades, pero en la base de datos comercial el cliente escribió su dirección como se le dio la gana.

Speaker 1:  { 17:21 }
Ingresando referencias tipo casa con portón verde, frente a donde se pone el mercado los martes.

Speaker 2:  { 17:26 }
Exacto. Tienes a una inteligencia artificial entrenada en los centros de datos más potentes de Silicon Valley, colapsando miserablemente porque alguien tecleo cuidado con el perro en la línea de la dirección.

Speaker 1:  { 17:38 }
Es trágico y cómico a la vez, si la ingeniería de datos no logra traducir ese texto caótico a coordenadas GPS reales a través de Geocodificadores, el modelo matemático simplemente falla.

Speaker 2:  { 17:51 }
Porque no puede trazar una ruta óptima hacia un portón verde abstracto.

Speaker 1:  { 17:56 }
¿Obvio, no? ¿Y cuál es la segunda pesadilla?

Speaker 2:  { 17:59 }
El choque de las unidades físicas imagina un catálogo logístico de una tienda gigante donde algunos productos antiguos están registrados en libras.

Speaker 1:  { 18:07 }
O K.

Speaker 2:  { 18:08 }
Otros productos más nuevos están en kilogramos y otros simplemente la base de datos, dicen una caja.

Speaker 1:  { 18:14 }
Sin peso ni nada.

Speaker 2:  { 18:15 }
Exacto y el mayor problema surge con los empaques que sí tienen el peso correcto registrado. Pero carecen de información volumétrica en 3 dimensiones.

Speaker 1:  { 18:24 }
Uy el volumen.

Speaker 2:  { 18:25 }
El algoritmo de optimización puede sumar los kilos muy bien y calcular que 1000 productos encajan perfectamente dentro de la capacidad de peso máximo de un solo camión. ¿Pero está ignorando el volumen físico?

Speaker 1:  { 18:36 }
Claro, el peso cuadra perfecto en el Excel, pero en la vida real resulta que esos 1000 productos son almohadas gigantes y te vas a dar cuenta de que se necesitan 3 camiones enteros solo para mover el volumen de aire que ocupan las almohadas.

Speaker 2:  { 18:52 }
Y el sistema ni se enteró. El algoritmo asume que los objetos se pueden comprimir infinitamente si no le das la restricción de volumen.

Speaker 1:  { 18:58 }
Es como si estuviera apilando agujeros negros.

Speaker 2:  { 19:01 }
Así operan los modelos matemáticos. Si una restricción no existe en los datos, simplemente no existe en su realidad.

Speaker 1:  { 19:06 }
Lógico.

Speaker 2:  { 19:07 }
Y esto nos lleva a la tercera pesadilla operativa, que para mí es la peor, las restricciones vivas o las ventanas horarias no documentadas.

Speaker 1:  { 19:17 }
Ah, el conocimiento tribal.

Speaker 2:  { 19:19 }
Exacto, hay calles peatonales, zonas industriales o andenes de carga en centros comerciales que tienen horarios de acceso súper estrictos.

Speaker 1:  { 19:27 }
Tipo, solo puedes entrar de 7 a 9 de la mañana.

Speaker 2:  { 19:30 }
Exacto. Pero estas reglas muchas veces no están en ninguna base de datos corporativa, son reglas informales que solo viven en la memoria de los conductores veteranos y de los guardias de seguridad de esos recintos.

Speaker 1:  { 19:42 }
Entonces el modelo matemático agarra sus datos incompletos y genera una ruta hermosamente óptima, asumiendo que se puede entregar el pedido a las 3:00 de la tarde, porque bueno, el mapa dice que la calle es pública.

Speaker 2:  { 19:56 }
Y el camión llega.

Speaker 1:  { 19:57 }
El camión llega.

{ 19:59 }
Y un guardia de seguridad súper inflexible se le acerca a la ventana y le dice al chofer que las entregas terminaron al mediodía.

Speaker 2:  { 20:06 }
Y ahí quedó tu optimización de millones de dólares. El plan perfecto se desintegra frente a un portón cerrado.

Speaker 1:  { 20:12 }
Es increíble viendo esta avalancha de problemas, digo desde latencias microscópicas hasta guardias de seguridad y direcciones mal tipiadas, es evidente que los equipos humanos ya no dan abasto para limpiar estas tuberías manualmente.

Speaker 2:  { 20:27 }
Es físicamente imposible.

Speaker 1:  { 20:29 }
Y esto nos lleva a la visión a futuro que exponen las fuentes. Y aquí te soy sincera, noto una tendencia total hacia delegar todo a la inteligencia artificial generativa y al uso de los famosos datos sintéticos.

Speaker 2:  { 20:42 }
Sí es hacia donde va la industria.

Speaker 1:  { 20:44 }
Y honestamente, me surge un escepticismo profundo, o sea, si planeamos usar I a para que reescriba el código de integración de datos automáticamente.

{ 20:55 }
Y encima vamos a inventar datos sintéticos para simular escenarios que jamás en la vida han.

Speaker 2:  { 21:00 }
Ocurrido suena arriesgado.

Speaker 1:  { 21:02 }
No es una receta para el desastre, no estamos arriesgando optimizar operaciones reales y multimillonarias basándonos en puras alucinaciones estadísticas de una máquina.

Speaker 2:  { 21:14 }
A ver, es el temor clásico y superválido frente a estas nuevas tecnologías, pero las fuentes que estamos analizando documentan claramente porque este salto no es un capricho de los ingenieros.

Speaker 1:  { 21:24 }
¿Entonces, qué es?

Speaker 2:  { 21:25 }
Es la única salida viable y empecemos por los datos sintéticos para entender por qué no se trata de pedirle a un chatbot que invente una historia creativa.

Speaker 1:  { 21:34 }
O K no es texto inventado.

Speaker 2:  { 21:35 }
No son simulaciones estadísticas matemáticamente rigurosas que replican la varianza y la complejidad del mundo real, y son imprescindibles precisamente cuando no tienes historia previa.

Speaker 1:  { 21:47 }
A ver, dame un ejemplo concreto de eso.

Speaker 2:  { 21:49 }
Por ejemplo, si una corporación va a abrir un megacentro de distribución en una ciudad donde jamás ha tenido presencia.

Speaker 1:  { 21:55 }
O K van a ciegas.

Speaker 2:  { 21:57 }
Totalmente a ciegas. ¿Cómo optimizas la red logística si tienes cero datos históricos de tráfico local o de picos de demanda en esa ciudad?

Speaker 1:  { 22:04 }
Tienes razón, no puedes entrenar un modelo predictivo sobre un lienzo en blanco.

Speaker 2:  { 22:09 }
Exactamente o pensemos en la preparación ante crisis masivas, como una huelga portuaria a nivel global que bloquee de repente el suministro de componentes clave. Son eventos que ocurren, no sé, una vez por década.

Speaker 1:  { 22:21 }
Casi no hay datos de eso.

Speaker 2:  { 22:23 }
Pues generar conjuntos masivos de datos sintéticos permite inyectar estos escenarios extremos en el modelo matemático para someterlo a pruebas de estrés.

Speaker 1:  { 22:32 }
Ah, entiendo, es equivalente a poner el algoritmo en un simulador de vuelo.

Speaker 2:  { 22:38 }
Exacto.

Speaker 1:  { 22:39 }
¿Lo pones a enfrentar turbulencia severa en el simulador antes de entregarle los mandos reales de una cadena de suministro multimillonaria?

Speaker 2:  { 22:46 }
Tal cual. Simular el dolor en un entorno seguro antes de que suceda en la vida real.

Speaker 1:  { 22:52 }
Visto de esa forma, la verdad es que tiene todo el sentido. ¿Y cómo entra en juego la inteligencia artificial generativa en el mantenimiento diario de estas tuberías que se rompen tanto?

Speaker 2:  { 23:02 }
Ahí entra como si fuera un sistema inmunológico autónomo de la empresa hoy en día, si un proveedor tuyo de repente cambia el formato de una tabla en la base de datos sin avisar.

Speaker 1:  { 23:12 }
Que pasa todo el tiempo, todo el.

Speaker 2:  { 23:14 }
Tiempo. El flujo de datos se rompe y un ingeniero tiene que intervenir manualmente a las 3:00 de la mañana para reescribir el código de integración. El futuro apunta a agentes autónomos de I a que detectan estos cambios estructurales solos.

Speaker 1:  { 23:27 }
Y lo arreglan ellos mismos.

Speaker 2:  { 23:29 }
Comprenden la intención semántica de los nuevos datos y corrigen los esquemas o generen el código de parcheo sobre la marcha en segundos.

Speaker 1:  { 23:36 }
Guau, esto Evita que toda la operación de la fábrica se detenga por un simple cambio de nombre en una columna de Excel.

Speaker 2:  { 23:43 }
Exactamente es supervivencia operativa.

Speaker 1:  { 23:46 }
Lo cual nos lleva bueno al último gran paradigma que proponen las fuentes y confieso que aquí sí necesite leer 2 veces.

Speaker 2:  { 23:54 }
El data match.

Speaker 1:  { 23:56 }
Sí, porque toda la vida se nos ha dicho en el mundo corporativo que los datos tienen que estar celosamente centralizados en un solo lugar gigante, súper administrado por un departamento de tecnología de TI.

Speaker 2:  { 24:08 }
El modelo clásico.

Speaker 1:  { 24:09 }
Esa centralización que tanto nos costó construir.

Speaker 2:  { 24:13 }
Porque la realidad es que el modelo centralizado tradicional terminó convirtiendo a los departamentos de TI en unos embudos insuperables.

Speaker 1:  { 24:20 }
Cuellos de botella.

Speaker 2:  { 24:21 }
Brutales, imagina si un analista de logística necesitaba un nuevo cruce de datos para optimizar sus rutas, tenía que abrir un ticket de soporte.

Speaker 1:  { 24:29 }
Y formarse, esperar.

Speaker 2:  { 24:30 }
Entrar a una cola de espera y rezar para que el equipo central de tecnología que seguro está pagando 10 incendios en toda la empresa al mismo tiempo, le prestara atención un mes después.

Speaker 1:  { 24:39 }
El problema del negocio ya cambió para entonces, exacto.

Speaker 2:  { 24:43 }
El concepto de dayta match destruye ese embudo tratando a los datos como si fueran un producto interno.

Speaker 1:  { 24:48 }
Es decir, cada departamento se vuelve dueño exclusivo y responsable de su propia información.

Speaker 2:  { 24:54 }
Ese es el núcleo de la idea. El área de logística es dueña absoluta de los datos de transporte finanzas. Es dueña de los costos y recursos humanos de los turnos del personal.

Speaker 1:  { 25:05 }
Cada quien su feudo, pero ordenado.

Speaker 2:  { 25:08 }
Ajá, ya no le entregan sus datos en crudo a un equipo central para que los limpie y los administre. Ellos mismos se encargan de empaquetar su información como un producto estandarizado.

Speaker 1:  { 25:18 }
Y me imagino que lo ofrecen al resto de la empresa.

Speaker 2:  { 25:20 }
Lo ofrecen al resto de la compañía mediante acuerdos de nivel de servicio. Los famosos SLA.

Speaker 1:  { 25:25 }
Claro, entonces, si yo soy una científica de datos y estoy creando un modelo de optimización, ya no tengo que ir a rogarle a la gente de TI.

Speaker 2:  { 25:33 }
Para nada, simplemente te conectas al catálogo de productos de datos del área de logística. Con la garantía por contrato de que esa información va a estar limpia, va a estar actualizada y lista para consumirse de inmediato.

Speaker 1:  { 25:46 }
Guau, se elimina por completo la fricción burocrática para acelerar la toma de decisiones matemáticas.

Speaker 2:  { 25:52 }
Ese es el objetivo final.

Speaker 1:  { 25:54 }
Bueno, analizando todo este recorrido que hemos hecho hoy, digo pasando desde los motores de fórmula uno en los laboratorios hasta los laberintos de hexágonos digitales y los guardias de seguridad inflexibles. Hay una línea en las notas originales que creo que captura la esencia absoluta de esta conversación.

Speaker 2:  { 26:14 }
¿A ver, cuál es?

Speaker 1:  { 26:15 }
La frase dice textual, la investigación de operaciones nos otorga la inteligencia teórica para decidir cuál es el camino óptimo, pero es la ingeniería de datos la que construye la autopista sobre la cual esa decisión puede transitar en el mundo físico. Uff.

Speaker 2:  { 26:32 }
Es la síntesis definitiva.

Speaker 1:  { 26:33 }
Sin el asfalto de los datos, el mejor cálculo matemático del universo jamás se mueve de la pizarra.

Speaker 2:  { 26:39 }
Es que ambas disciplinas, la abstracción matemática pura y la fontanería bruta de la infraestructura tiene que operar en una simbiosis absoluta. Si no, no hay forma de sobrevivir a la velocidad a la que se mueve la economía moderna.

Speaker 1:  { 26:51 }
Definitivamente, y esto invita a cerrar con una última provocación.

{ 26:57 }
Un pensamiento para que quienes nos escuchan se lo lleven y lo puedan rumiar. ¿Después de este análisis, adelante, si observamos la trayectoria hacia la que nos dirigimos velozmente, donde la I a GENERATIVA pronto reescribirá autónomamente la tubería de datos y enormes volúmenes de información sintética, van a alimentar simulaciones masivas para blindar los algoritmos contra desastres? Sí, es fascinante considerar que las matemáticas de optimización del futuro. Pasarán mucho más tiempo interactuando con realidades virtuales, resolviendo laberintos generados por otras máquinas que lidiando directamente con el mundo físico.

Speaker 2:  { 27:33 }
Guau.

Speaker 1:  { 27:34 }
¿Entonces, la pregunta es, llegará el punto en que es autopista digital y los cálculos que corren sobre ella alcancen tal grado de perfección dentro de los simuladores? Que el único factor limitante para la tecnología vuelve a ser simplemente la naturaleza impredecible, obstinada y profundamente caótica del comportamiento humano.

Speaker 2:  { 27:56 }
¿Te deja pensando?

Speaker 1:  { 27:58 }
Totalmente, volvemos a mirar la pantalla de nuestro teléfono observando el pequeño auto moverse suavecito sobre el mapa creyendo que estamos presenciando magia, pero ahora sabemos que debajo de ese cristal hay motores gigantes rugiendo a milisegundos. Tratando desesperadamente de procesar el lodo de nuestra propia realidad.


 ---   End of transcript   --- 





