export const PONENTE3_CONTENT = {
  transicion: {
    title: "De la infraestructura a la decisión",
    titleIcon: "link-simple",
    facts: [
      {
        icon: "database",
        text: "Nivel 1. El dato en bruto es caótico. Requiere transformación.",
        warn: false
      },
      {
        icon: "flow-arrow",
        text: "Nivel 2. El pipeline. Kafka mueve eventos. Spark procesa. El Lakehouse almacena.",
        warn: false
      },
      {
        icon: "lightning",
        text: "El modelo depende de los datos. Si el flujo falla, la decisión colapsa en segundos.",
        warn: false
      }
    ]
  },
  modelos: {
    title: "Tres modelos clásicos de IO",
    titleIcon: "engine",
    bignum: {
      value: 500000,
      cap: "Escenarios estocásticos de Monte Carlo ejecutados a escala."
    },
    facts: [
      {
        icon: "car-simple",
        text: "Ruteo de vehículos. La matriz de distancias cambia por accidentes, lluvia o tráfico. Un pipeline de streaming recalcula los arcos antes de correr el solver.",
        warn: false
      },
      {
        icon: "factory",
        text: "Planificación de la producción. Se concilian demanda prevista, inventario del ERP y turnos de RRHH bajo un mismo esquema horario. Sin esa conciliación, la solución es factible pero irrealizable.",
        warn: false
      },
      {
        icon: "dice-five",
        text: "Monte Carlo a escala. Riesgo financiero o de red, ejecutado en Spark sobre terabytes de historia.",
        warn: false
      }
    ]
  },
  caso: {
    title: "El caso: plataformas de movilidad",
    titleIcon: "taxi",
    facts: [
      {
        icon: "taxi",
        text: "Uber, DiDi y Rappi asignan conductores en tiempo real.",
        warn: false
      },
      {
        icon: "clock-countdown",
        text: "Cada asignación es un problema de optimización que se resuelve en segundos.",
        warn: false
      },
      {
        icon: "flow-arrow",
        text: "El caso muestra un pipeline de baja latencia acoplado a un solver.",
        warn: false
      }
    ]
  },
  emparejamiento: {
    title: "Emparejamiento de peso máximo",
    titleIcon: "scales",
    bignum: {
      value: "3-5",
      suffix: "s",
      cap: "Ventana de lote para resolver el emparejamiento. La asignación se recalcula en bloques de segundos."
    },
    facts: [
      {
        icon: "git-merge",
        text: "Emparejar conductores y pasajeros en lotes de 3 a 5 segundos.",
        warn: false
      },
      {
        icon: "target",
        text: "Sin asignación greedy. Se busca el óptimo global. Se minimiza el ETA y se maximiza la tasa de servicio completado.",
        warn: false
      }
    ]
  },
  pings: {
    title: "Cientos de miles de pings",
    titleIcon: "broadcast"
  },
  laser: {
    title: "Comparar ping por ping no escala",
    titleIcon: "broadcast",
    fact: {
      icon: "warning-circle",
      text: "Comparar cada ping con los demás exige calcular n² distancias.",
      warn: true
    }
  },
  indexacion: {
    title: "Indexación espacial",
    titleIcon: "hexagon",
    fact: {
      icon: "hexagon",
      text: "Cada coordenada se asigna a una celda hexagonal. La oferta y la demanda se miden por zona.",
      warn: false
    }
  },
  pipeline: {
    title: "Del ping al push",
    titleIcon: "flow-arrow",
    facts: [
      {
        icon: "database",
        text: "Ingesta. Kafka recibe los pings de la app móvil.",
        warn: false
      },
      {
        icon: "lightning",
        text: "Estado en memoria. Redis o Cassandra guardan ETA, calificación y riesgo de cancelación.",
        warn: false
      },
      {
        icon: "cpu",
        text: "Resolución y salida. El solver empareja con la sub-matriz local. La notificación sale por gRPC. Sin el pipeline sub-segundo, la asignación queda obsoleta.",
        warn: false
      }
    ]
  },
  drift: {
    title: "Estabilidad en producción",
    titleIcon: "warning-diamond",
    bignum: {
      value: 40,
      suffix: "%",
      variant: "amber",
      cap: "Si el combustible sube ese porcentaje, la matriz de costos histórica deja de reflejar la realidad."
    },
    facts: [
      {
        icon: "arrows-clockwise",
        text: "DataOps. Pruebas continuas, versionado del dato y monitoreo en cada paso del flujo.",
        warn: false
      },
      {
        icon: "chart-line-up",
        text: "Data drift. La distribución de las variables cambia. Un puente cerrado o un alza de precios. El solver optimiza sobre supuestos falsos.",
        warn: true
      },
      {
        icon: "arrows-split",
        text: "Concept drift. La relación entre entrada y salida se rompe. Cambios permanentes, como los patrones tras la pandemia. La función objetivo del pasado deja de valer.",
        warn: true
      }
    ]
  },
  contencion: {
    title: "El dato no pasa si no cumple",
    titleIcon: "shield-check",
    bignum: {
      value: 2,
      suffix: "%",
      cap: "Umbral de nulos que dispara la alerta antes de que el lote llegue al solver."
    },
    facts: [
      {
        icon: "file-text",
        text: "Contratos de datos y pruebas con Great Expectations en cada paso del flujo.",
        warn: false
      },
      {
        icon: "check-circle",
        text: "Se valida que la demanda no sea negativa. Los tiempos de viaje deben caer en rangos físicos posibles.",
        warn: false
      },
      {
        icon: "warning-circle",
        text: "Un lote corrupto llega al solver. Este marca infeasible o asigna recursos absurdos. La operación se detiene.",
        warn: true
      }
    ]
  },
  mesh: {
    title: "De equipo centralizado a dominios dueños",
    titleIcon: "network",
    facts: [
      {
        icon: "users",
        text: "Data Mesh. El equipo central de TI deja de concentrar todo.",
        warn: false
      },
      {
        icon: "package",
        text: "Cada dominio de negocio, Logística, Finanzas, Ventas, trata sus datos como un producto.",
        warn: false
      },
      {
        icon: "shield-check",
        text: "El analista de IO consume productos de datos estandarizados con SLA garantizados.",
        warn: false
      }
    ]
  },
  futuro: {
    title: "El futuro",
    titleIcon: "robot",
    facts: [
      {
        icon: "robot",
        text: "IA generativa. Agentes que detectan anomalías en pipelines, corrigen esquemas de tablas y generan código de integración.",
        warn: false
      },
      {
        icon: "dice-five",
        text: "Datos sintéticos. Simulaciones que preservan correlaciones para alimentar modelos estocásticos sin historia suficiente.",
        warn: false
      },
      {
        icon: "arrow-right",
        text: "La IO decide el camino óptimo. La ingeniería de datos hace que esa decisión se ejecute en el mundo real.",
        warn: false
      }
    ]
  },
  dinamica: {
    title: "El Solver en el Mundo Real",
    titleIcon: "question",
    bignums: [
      { value: 5, cap: "Bodegas centrales." },
      { value: 20, cap: "Camiones." },
      { value: 500, cap: "Clientes por día." }
    ],
    facts: [
      {
        icon: "map-pin",
        text: "Direcciones con abreviaturas, referencias vagas y sin coordenadas válidas.",
        warn: true
      },
      {
        icon: "ruler",
        text: "Pesos en libras y en kilogramos, empaques sin dimensiones volumétricas.",
        warn: true
      },
      {
        icon: "clock-countdown",
        text: "Ventanas horarias de descarga que solo viven en la memoria de los conductores veteranos.",
        warn: true
      }
    ]
  }
};