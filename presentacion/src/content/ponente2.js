export const PONENTE2_CONTENT = {
  hook: {
    title: "Un click",
    titleIcon: "cursor-click",
    button: "Comprar ahora",
    hint: "Para quien compra es un gesto. Para la infraestructura es el inicio de una cadena de eventos."
  },
  cadena: {
    title: "¿Qué está pasando realmente?",
    titleIcon: "flow-arrow",
    steps: ["Clic", "Evento", "Transporte", "Procesamiento", "Almacenamiento", "Análisis", "Decisión"]
  },
  empresaDatos: {
    title: "Toda empresa es una empresa de datos",
    titleIcon: "buildings",
    desc: "Independientemente de lo que venda, la operación depende de datos para decidir.",
    items: [
      { icon: "storefront", label: "Retail", sub: "vende productos" },
      { icon: "car", label: "Movilidad", sub: "traslada personas" },
      { icon: "first-aid-kit", label: "Salud", sub: "atiende pacientes" }
    ],
    fact: { icon: "database", text: "El producto cambia, la necesidad de datos es común. Sin datos no hay inventario, ruta ni diagnóstico." }
  },
  limitaciones: {
    title: "Para entender cómo se mueven los datos hoy, hay que entender las limitaciones del pasado",
    titleIcon: "clock-counter-clockwise",
    highlight: "Almacenar era sumamente costoso",
    detail: "Cada megabyte ocupaba discos físicos y presupuesto. Guardar todo no era opción.",
    fact: { icon: "hard-drives", text: "El costo obligó a filtrar y resumir antes de guardar. Solo lo considerado esencial llegaba al almacén central." }
  },
  etlAnalogia: {
    title: "ETL. Cocinar antes de guardar",
    titleIcon: "cooking-pot",
    steps: [
      { icon: "shopping-cart", label: "Ingredientes", sub: "datos de origen" },
      { icon: "knife", label: "Cocinar / limpiar", sub: "filtrar, corregir, unificar" },
      { icon: "bowl-food", label: "Plato final", sub: "solo lo transformado" }
    ],
    note: "Solo guardamos lo que creemos que necesitaremos.",
    fact: { icon: "lightbulb", text: "La receta se decide antes de almacenar. Lo no previsto se descarta." }
  },
  etl: {
    title: "ETL. Limpiar antes de guardar",
    titleIcon: "funnel-simple",
    boxes: [
      { title: "Extract", sub: "ERP, WMS, API, txt", icon: "hard-drives" },
      { title: "Transform", sub: "en servidor intermedio", note: "filtrar, corregir, unificar", icon: "broom" },
      { title: "Load", sub: "warehouse central", icon: "warehouse" }
    ],
    alert: {
      icon: "warning-circle",
      text: "Raw data se descarta. Un cambio en la regla exige reextraer desde el origen."
    },
    facts: [
      { icon: "clock-countdown", text: "Antes almacenar era costoso. Disco limitado en los 90, cada fila contaba.", warn: false },
      { icon: "warning-circle", text: "Un cambio en la lógica obliga a reprocesar desde la fuente y a veces la fuente ya no conserva el histórico.", warn: true }
    ]
  },
  problemaEtl: {
    title: "¿Dónde están los ingredientes originales?",
    titleIcon: "question",
    chef: "Mañana el chef cambia la receta",
    answer: "Ya no están",
    fact: { icon: "warning-circle", text: "Sin ingredientes no hay nueva receta. Sin raw data no hay reproceso." }
  },
  eltAnalogia: {
    title: "ELT. Ahora tenemos una despensa enorme",
    titleIcon: "warehouse",
    steps: [
      { icon: "shopping-cart", label: "Comprar ingredientes", sub: "extraer todo en crudo" },
      { icon: "warehouse", label: "Gran despensa", sub: "lake en la nube, barato y elástico" },
      { icon: "cooking-pot", label: "Cocinar cuando sea necesario", sub: "transformar dentro del warehouse" }
    ],
    note: "Guardar todo permite decidir la receta después.",
    fact: { icon: "lightbulb", text: "Con almacenamiento barato, la decisión se posterga. La raw data permanece disponible." }
  },
  elt: {
    title: "ELT. Cargar todo, transformar después",
    titleIcon: "cloud-arrow-up",
    boxes: [
      { title: "Extract", sub: "todo en crudo", icon: "hard-drives" },
      { title: "Load", sub: "lake en la nube", note: "S3, GCS, barato y elástico", icon: "cloud" },
      { title: "Transform", sub: "dentro del warehouse", note: "SQL, Spark, solo lo necesario", icon: "lightning" }
    ],
    alert: {
      icon: "check-circle",
      text: "Raw data persiste. Permite retransformar sin volver al origen."
    },
    bignums: [
      { value: 0.023, suffix: "$ /GB mes", variant: "green", decimals: 3, cap: "S3 Standard actual. En los 90, miles de dólares por GB. Por ello ELT no existía." },
      { value: "∞", suffix: "", variant: "", cap: "Reprocesos posibles sobre el mismo raw data." }
    ]
  },
  versus: {
    title: "ETL y ELT",
    titleIcon: "arrows-left-right",
    left: {
      icon: "funnel-simple",
      title: "ETL",
      sub: "Transforma fuera",
      items: ["Guarda solo lo limpio", "raw data descartado", "Rígido ante cambios del negocio", "Servidor intermedio a cargo"]
    },
    right: {
      icon: "cloud-arrow-up",
      title: "ELT",
      sub: "Transforma dentro",
      items: ["Guarda todo en crudo", "raw data disponible", "Flexible ante cambios de lógica", "El warehouse ejecuta el trabajo"]
    },
    fact: {
      icon: "lightbulb",
      text: "Ninguno es superior en todos los casos. ETL aún es útil si el origen no puede entregar raw data o hay datos sensibles."
    }
  },
  batchStreaming: {
    title: "Batch y streaming. Dos modos de movimiento",
    titleIcon: "timer",
    batch: {
      title: "Batch",
      tag: "lotes",
      icon: "clock-countdown",
      truckIcon: "truck",
      value: "horas",
      desc: "Ejecución programada, generalmente nocturna. Acumula el día y procesa en bloque. Uso típico: inventario y cierre."
    },
    streaming: {
      title: "Streaming",
      tag: "evento a evento",
      icon: "lightning",
      value: 50,
      suffix: "ms",
      desc: "Cada evento se procesa en milisegundos. Uso típico: precio dinámico y optimización de rutas."
    },
    fact: {
      icon: "check-circle",
      text: "La mayoría de organizaciones usa ambos."
    }
  },
  timeline: {
    title: "Evolución del almacenamiento analítico",
    titleIcon: "clock",
    periods: [
      { year: "1990", name: "Warehouse", detail: "Teradata, Oracle", state: "done" },
      { year: "2010", name: "Lake", detail: "S3, GCS, Hadoop", state: "done" },
      { year: "2020", name: "Lakehouse", detail: "Delta, Iceberg, Hudi", state: "now" }
    ],
    summary: [
      { icon: "warehouse", title: "Orden", sub: "Estructura rígida" },
      { icon: "waves", title: "Todo cabe", sub: "Riesgo de desorden sin gobierno" },
      { icon: "stack-simple", title: "Ambas", sub: "Costo bajo y control", variant: "accent" }
    ]
  },
  warehouse: {
    title: "Data warehouse. Almacenamiento estructurado",
    titleIcon: "warehouse",
    shelves: [
      ["clientes", "pedidos", "inventario", "costos"],
      ["rutas", "proveedores", "pagos", "demanda"]
    ],
    facts: [
      { icon: "check-circle", text: "Filas y columnas con esquema fijo. El esquema se define antes de almacenar. SQL con buen rendimiento.", warn: false },
      { icon: "check-circle", text: "Optimizado para analítica. Una agregación responde en segundos.", warn: false },
      { icon: "warning-circle", text: "No admite datos no estructurados. Una imagen, un audio o un JSON anidado no tiene ubicación definida.", warn: true }
    ]
  },
  lake: {
    title: "Data lake. Almacenamiento de objetos sin esquema",
    titleIcon: "waves",
    files: [
      { icon: "file", name: "pedidos.csv", pos: { left: "7%", top: "18%" }, drift: "drift1" },
      { icon: "image", name: "foto.jpg", pos: { left: "37%", top: "20%" }, drift: "drift3" },
      { icon: "music-notes", name: "audio.mp3", pos: { left: "67%", top: "18%" }, drift: "drift1" },
      { icon: "code", name: "eventos.json", pos: { left: "9%", top: "60%" }, drift: "drift2" },
      { icon: "stack-simple", name: "parquet", pos: { left: "40%", top: "62%" }, drift: "drift3" },
      { icon: "film-strip", name: "video.mp4", pos: { left: "70%", top: "60%" }, drift: "drift2" }
    ],
    facts: [
      { icon: "check-circle", text: "Almacena cualquier archivo sin definir esquema. El esquema se aplica al leer.", warn: false },
      { icon: "check-circle", text: "Costo bajo y elástico. S3 y GCS escalan sin adquirir servidores.", warn: false },
      { icon: "warning-circle", text: "Si no se tiene un catálogo establecido ni buena gobernanza se vuelve un data swamp. El dato existe pero es difícil localizarlo y validar su utilidad.", warn: true }
    ]
  },
  swamp: {
    title: "¿Y si guardamos todo sin orden?",
    titleIcon: "warning-circle",
    folder: "Carpeta de Descargas",
    files: ["reporte_final.pdf", "instalador_v2.exe", "foto_mascota.jpg", "datos_sin_nombre.csv"],
    question: "¿Dónde está el archivo que necesito?",
    label: "Data Swamp",
    desc: "Un lago sin catálogo se vuelve pantano. Todo entra, nada se encuentra.",
    fact: { icon: "warning-circle", text: "Sin gobierno el lago pierde valor. El volumen sin orden no es un activo." }
  },
  lakehouse: {
    title: "Data lakehouse. Unión de lake y warehouse",
    titleIcon: "stack-simple",
    lakeLabel: "lake bajo, Parquet en S3",
    pillars: [
      { icon: "shield-check", label: "ACID" },
      { icon: "graph", label: "time travel" },
      { icon: "code", label: "SQL + Python" }
    ],
    medallion: [
      { key: "bronze", title: "Bronze", sub: "crudo tal cual llegó" },
      { key: "silver", title: "Silver", sub: "limpio, unificado" },
      { key: "gold", title: "Gold", sub: "listo para el modelo" }
    ],
    facts: [
      { icon: "check-circle", text: "Capa abierta Delta, Iceberg o Hudi sobre el lake. Aporta transacciones, esquema y control sin perder el costo bajo." },
      { icon: "lightbulb", text: "La arquitectura medallion ordena el flujo. Bronze a Silver a Gold. Cada salto añade calidad." }
    ]
  },
  compare: {
    title: "Las tres arquitecturas de almacenamiento",
    titleIcon: "scales",
    header: [
      { icon: "warehouse", label: "warehouse" },
      { icon: "waves", label: "lake" },
      { icon: "stack-simple", label: "lakehouse", variant: "accent" }
    ],
    rows: [
      { label: "Qué guarda", cols: ["Principalmente tablas", "Cualquier archivo", "Tablas y archivos"], strongLast: true },
      { label: "Esquema", cols: ["al escribir", "al leer", "ambos"], strongLast: true },
      { label: "Costo", cols: ["alto", "bajo", "bajo"], variants: ["warn", "good", "good strong"] },
      { label: "ACID", cols: ["sí", "no nativo", "sí"], variants: ["", "warn", "strong"] },
      { label: "Para qué sirve", cols: ["BI / reporting", "Raw data + ML", "BI + ML + analytics"], strongLast: true }
    ]
  },
  acid: {
    title: "¿Y si algo falla a mitad de camino?",
    titleIcon: "shield-check",
    transfer: "Cuenta A — $100 — Cuenta B",
    fail: "Fallo de red",
    question: "¿Puede desaparecer el dinero a mitad del proceso?",
    answer: "ACID",
    desc: "Atomicidad, consistencia, aislamiento y durabilidad.",
    fact: { icon: "check-circle", text: "El lakehouse aplica ACID. Evita escrituras parciales y deja el dato siempre en estado válido." }
  },
  coffeeBreak: {
    title: "Pausa para unos nachitos preparados.",
    titleIcon: "coffee",
    durationSec: 600,
    hint: "Provechito queridos amigos",
    phrases: [
      "Vayan sentándose, chicos",
      "Preparen motores",
      "Último sorbo y volvemos",
      "Guarden el tinto, que seguimos",
      "En un minuto arranca Apache",
      "Justin pone atención"
    ],
    done: "Estamos de vuelta"
  },
  kafka: {
    title: "¿Quién asegura que el evento no se pierda?",
    titleIcon: "broadcast",
    producers: { icon: "hard-drives", title: "Productores", sub: "web, app, sensores" },
    core: { icon: "queue", label: "Kafka log", replica: "replicado 3 veces · rebobinable" },
    consumers: { icon: "cpu", title: "Consumidores", sub: "Spark, warehouse, alertas" },
    facts: [
      { icon: "check-circle", text: "No es una cola que se borra al leer. Es un log. Permite releer desde un punto anterior si hay una falla." },
      { icon: "lightning", text: "Millones de eventos por segundo sin colapsar. Cada partición escala de forma independiente." }
    ]
  },
  spark: {
    title: "¿Qué pasa si una máquina no alcanza?",
    titleIcon: "cpu",
    single: {
      icon: "hard-drives",
      title: "1 servidor",
      sub: "RAM llena",
      ram: "128 GB · capacidad superada",
      variant: "fail"
    },
    cluster: [
      { title: "N1", sub: "shard A" },
      { title: "N2", sub: "shard B" },
      { title: "N3", sub: "shard C" },
      { title: "N4", sub: "shard D" }
    ],
    shuffle: { icon: "shuffle", label: "shuffle" },
    facts: [
      { icon: "check-circle", text: "Spark divide el archivo en fragmentos y cada máquina procesa uno en paralelo. La vista es un solo DataFrame.", warn: false },
      { icon: "warning-circle", text: "El costo relevante es el shuffle. Mover datos entre nodos consume red y disco. El diseño busca minimizarlo.", warn: true }
    ]
  },
  airflow: {
    title: "Airflow. Orquestación de flujos",
    titleIcon: "git-branch",
    nodes: [
      { icon: "clock-countdown", title: "2 am", sub: "schedule", variant: "start" },
      { icon: "download-simple", title: "Ingesta", sub: "Kafka a S3" },
      { icon: "funnel-simple", title: "Transform", sub: "Spark job", variant: "running" },
      { icon: "check-circle", title: "Validar", sub: "QA y trazabilidad", variant: "pending" }
    ],
    branch: [
      { icon: "warning-circle", title: "Reintento x2", sub: "si falla a las 3 am", variant: "retry" },
      { icon: "bell", title: "Alerta", sub: "Slack, mail", variant: "alert" }
    ],
    rule: "Regla: C no se ejecuta si B falla. Todo queda registrado.",
    fact: { icon: "check-circle", text: "El orden se define una vez como código. Airflow respeta dependencias, reintenta y notifica." }
  },
  pipeline: {
    title: "Pipeline extremo a extremo. Del evento a la tabla analítica",
    titleIcon: "flow-arrow",
    steps: [
      { icon: "cursor-click", title: "1. Evento", sub: "solicitud del cliente", tag: "JSON crudo" },
      { icon: "broadcast", title: "2. Kafka", sub: "evento distribuido", tag: "log replicado" },
      { icon: "cpu", title: "3. Spark", sub: "normaliza", tag: "quita nulos, une" },
      { icon: "stack-simple", title: "4. Lakehouse", sub: "Gold", tag: "tabla validada" },
      { icon: "chart-bar", title: "5. Modelo IO", sub: "decide", tag: "ruta, stock, precio" }
    ],
    legend: ["Ingesta", "Proceso", "Almacenamiento", "Consumo"]
  },
  mapping: {
    title: "Función de cada componente en el pipeline",
    titleIcon: "plugs-connected",
    zones: [
      { icon: "broadcast", title: "Kafka", desc: "Transporta. No transforma.", items: ["Amortigua picos", "Garantiza que no hay pérdida"] },
      { icon: "cpu", title: "Spark", desc: "Transforma a escala.", items: ["Procesa grandes volúmenes en paralelo", "Normaliza y enriquece datos"], variant: "core" },
      { icon: "git-branch", title: "Airflow", desc: "Ordena. No mueve datos.", items: ["Dispara cada bloque", "Reintenta y notifica"] }
    ],
    callout: { icon: "stack-simple", text: "Todo escribe en el mismo sitio. El lakehouse. Bronze con raw data, Silver limpio, Gold para el solver." }
  },
  puente: {
    title: "¿Cómo se conecta esto directamente con los modelos matemáticos de Investigación de Operaciones?",
    titleIcon: "flag-checkered",
    facts: [
      { icon: "arrow-right", text: "Sin dato confiable no hay óptimo válido." }
    ]
  },
  numbers: {
    s3Cost: 0.023,
    streamingMs: 50,
    pipelineSteps: 5
  }
};
