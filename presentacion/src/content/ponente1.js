export const PONENTE1_CONTENT = {
  gigo: {
    title: "Garbage In, Garbage Out",
    titleIcon: "warning-circle",
    bignums: [
      {
        value: 15,
        suffix: "min",
        variant: "",
        cap: "Para plantear un modelo en un examen de IO. La matriz y la demanda ya están escritas."
      },
      {
        value: "70-80",
        suffix: "%",
        variant: "amber",
        cap: "Es el tiempo que una empresa real destina a conseguir y limpiar los parámetros del modelo. Encuesta Anaconda, 2020."
      }
    ],
    facts: [
      {
        icon: "chalkboard-teacher",
        text: "En el aula la matriz de costos ya está disponible, fija y ordenada. En la empresa requiere construirse desde cero.",
        warn: false
      },
      {
        icon: "warning-circle",
        text: "Si entra basura, sale basura. Ningún solver de Simplex o de Branch and Bound decide bien si los parámetros contienen errores.",
        warn: true
      }
    ]
  },
  pregunta: {
    title: "¿Y si el parámetro entró mal?",
    titleIcon: "question",
    facts: [
      {
        icon: "warning-circle",
        text: "El solver es estricto. Maximiza la función definida. Con un parámetro incorrecto, entrega el óptimo del problema equivocado.",
        warn: true
      },
      {
        icon: "clock-countdown",
        text: "Una solución perfecta sobre datos desactualizados no es útil en la operación actual.",
        warn: true
      },
      {
        icon: "arrow-right",
        text: "Por ello el dato se revisa antes de ejecutar el modelo.",
        warn: false
      }
    ],
    bignum: {
      value: 3,
      cap: "Chequeos mínimos de calidad antes de optimizar."
    }
  },
  mito: {
    title: "El mito de los datos limpios",
    titleIcon: "lightning",
    hex: {
      left: {
        title: "En el aula",
        text: "La matriz de costos y la demanda ya están en el libro. Fijas, claras, en una tabla. El modelo se plantea en 15 minutos."
      },
      center: {
        title: "En la empresa",
        items: [
          "El costo del diésel se registra en el ERP, en SAP.",
          "Los peajes se documentan en un archivo de texto desactualizado.",
          "El inventario real se registra en el WMS y presenta interrupciones frecuentes.",
          "Los pedidos ingresan por API o por hojas de cálculo completadas de forma manual."
        ]
      },
      right: {
        title: "La consecuencia",
        text: "Construir esa matriz consume entre 70 y 80% del proyecto. El tiempo restante para modelar es reducido."
      }
    },
    fact: {
      icon: "check-circle",
      text: "La encuesta Anaconda de 2020 a profesionales de datos lo confirma: entre 70% y 80% del tiempo se destina a reunir y limpiar datos."
    }
  },
  queEs: {
    title: "¿Qué es la ingeniería de datos?",
    titleIcon: "drop",
    fact: {
      icon: "hard-drives",
      text: "La ingeniería de datos diseña y mantiene sistemas y pipelines que reciben datos crudos y heterogéneos y los entregan en tablas limpias, listas para analizar."
    },
    hex: {
      left: {
        title: "Fuentes primarias",
        text: "Sensores, transacciones, registros. El consumo sin tratamiento introduce errores y riesgos."
      },
      center: {
        title: "Capa de ingeniería de datos",
        text: "Conjunto de procesos que filtra, estandariza y garantiza disponibilidad y consistencia."
      },
      right: {
        title: "Consumo analítico",
        text: "Data Science e Investigación de Operaciones utilizan tablas validadas para modelar."
      }
    }
  },
  roles: {
    title: "Dos roles complementarios",
    titleIcon: "arrows-split",
    left: {
      icon: "wrench",
      title: "Data engineer",
      text: "Asegura disponibilidad, integridad, puntualidad y escalabilidad de los datos."
    },
    right: {
      icon: "math-operations",
      title: "Investigador de operaciones",
      text: "Define función objetivo, restricciones y convierte el dato validado en una decisión de negocio."
    }
  },
  fuentes: {
    title: "Fuentes primarias",
    titleIcon: "hard-drives",
    facts: [
      {
        icon: "database",
        bold: "Bases transaccionales OLTP.",
        text: "Postgres, SQL Server. Registran cada venta, cada pago y cada movimiento de inventario en el momento exacto en que ocurre."
      },
      {
        icon: "radio",
        bold: "Sensores y telemetría en planta.",
        text: "Temperatura, presión y lecturas de máquinas que emiten datos cada pocos segundos, sin parar."
      },
      {
        icon: "terminal-window",
        bold: "Logs y eventos web.",
        text: "Cada visita, cada clic y cada error de servidor queda registrado en algún archivo."
      },
      {
        icon: "plugs-connected",
        bold: "APIs y archivos planos.",
        text: "Pedidos que ingresan por API, hojas de cálculo completadas de forma manual y archivos de texto desactualizados."
      }
    ]
  },
  beber: {
    title: "Riesgos del consumo sin tratamiento",
    titleIcon: "warning-circle",
    facts: [
      {
        icon: "warning-circle",
        bold: "Formatos inconsistentes.",
        text: "Fechas como texto, decimales con coma o punto mezclados, monedas combinadas en el mismo archivo.",
        warn: true
      },
      {
        icon: "copy",
        bold: "Duplicados y valores nulos.",
        text: "Registros de cliente repetidos, demandas de sucursales no registradas.",
        warn: true
      },
      {
        icon: "identification-card",
        bold: "Identidades no unificadas.",
        text: "El identificador de cliente en ventas no coincide con el de logística, aunque represente a la misma persona.",
        warn: true
      },
      {
        icon: "clock-countdown",
        bold: "Datos desactualizados o faltantes.",
        text: "Respuestas tardías de una API, sensores que interrumpen el envío durante la madrugada.",
        warn: true
      },
      {
        icon: "arrow-right",
        bold: "",
        text: "Si el modelo recibe datos con esas fallas, la decisión resulta incorrecta. El dato crudo requiere tratamiento previo.",
        warn: false
      }
    ]
  },
  ciclo: {
    title: "El ciclo de vida del dato",
    titleIcon: "infinity",
    nodes: [
      { icon: "database", label: "Generación e ingesta" },
      { icon: "hard-drives", label: "Almacenamiento" },
      { icon: "funnel-simple", label: "Transformación" },
      { icon: "chalkboard-simple", label: "Servicio y consumo" }
    ],
    hubIcon: "infinity",
    src: "Marco de Joe Reis y Matt Housley, Fundamentals of Data Engineering."
  },
  transformacion: {
    title: "El dato crudo no entra al modelo",
    titleIcon: "broom",
    facts: [
      {
        icon: "calendar",
        text: "Fechas en formato texto, decimales con separadores inconsistentes y monedas combinadas se corrigen en esta etapa.",
        warn: true
      },
      {
        icon: "copy",
        text: "Se eliminan duplicados y se define el tratamiento de valores nulos: eliminar, imputar o marcar.",
        warn: true
      },
      {
        icon: "ruler",
        text: "Unidades estandarizadas, conversión de kilos a toneladas y agregados calculados antes de la lectura por el solver.",
        warn: true
      }
    ]
  },
  trazabilidad: {
    title: "Trazabilidad del dato",
    titleIcon: "tree-structure",
    facts: [
      {
        icon: "link-simple",
        text: "Trazabilidad es seguir un registro desde el sensor o microservicio donde se originó, por cada proceso que lo transformó, hasta la variable que ingresa al modelo.",
        warn: false
      },
      {
        icon: "warning-circle",
        text: "Si el solver devuelve un costo negativo o marca el modelo como no factible, se requiere auditoría. Sin trazabilidad no es posible determinar si la falla estuvo en la lectura o en un cálculo intermedio.",
        warn: true
      }
    ]
  },
  calidad: {
    title: "Tres preguntas antes de optimizar",
    titleIcon: "gauge",
    metrics: [
      { icon: "clock-countdown", label: "Frescura" },
      { icon: "tray", label: "Completitud" },
      { icon: "identification-card", label: "Consistencia" }
    ]
  },
  puente: {
    title: "Siguiente etapa. Arquitectura interna",
    titleIcon: "flag-checkered"
  }
};
