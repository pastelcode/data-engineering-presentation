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
  produccion: {
    title: "Planificar la producción",
    titleIcon: "factory",
    bignum: {
      value: 3,
      cap: "Mundos que alimentan el modelo: demanda, inventario, personal."
    },
    facts: [
      {
        icon: "factory",
        text: "Optimizar inventarios o turnos de fábrica.",
        warn: false
      },
      {
        icon: "database",
        text: "El modelo necesita demanda, inventario y personal reconciliados.",
        warn: false
      }
    ]
  },
  universos: {
    title: "Tres universos paralelos",
    titleIcon: "squares-four",
    worlds: [
      { icon: "storefront", title: "Comercial", sub: "demanda prevista", rhythm: "cada mes", speed: 6 },
      { icon: "warehouse", title: "Almacén", sub: "inventario físico", rhythm: "cada hora", speed: 1.6 },
      { icon: "users", title: "RRHH", sub: "reglas sindicales", rhythm: "cada año", speed: 12 }
    ],
    fact: {
      icon: "warning-circle",
      text: "Hablan idiomas distintos. Se actualizan a ritmos distintos.",
      warn: true
    }
  },
  espejismo: {
    title: "El espejismo",
    titleIcon: "warning-diamond",
    bignum: {
      value: 1000,
      cap: "Unidades a fabricar este domingo."
    },
    stamp: "Infactible",
    facts: [
      {
        icon: "package",
        text: "El almacén no tiene materia prima.",
        warn: true
      },
      {
        icon: "calendar-blank",
        text: "El sindicato prohíbe operar los domingos.",
        warn: true
      }
    ]
  },
  marco: {
    title: "Un mismo marco temporal",
    titleIcon: "clock-countdown",
    sources: ["Ventas", "WMS", "RRHH"],
    center: { icon: "database", title: "Lakehouse" },
    facts: [
      {
        icon: "database",
        text: "Un pipeline batch concilia los tres mundos.",
        warn: false
      },
      {
        icon: "clock-countdown",
        text: "Todo queda bajo un mismo marco temporal.",
        warn: false
      }
    ]
  },
  loteplan: {
    title: "Del lote al plan",
    titleIcon: "flow-arrow",
    steps: [
      { icon: "database", title: "1. Lakehouse", sub: "dato conciliado", tag: "series, stock, turnos" },
      { icon: "cpu", title: "2. Solver", sub: "optimiza", tag: "inventarios y turnos" },
      { icon: "package", title: "3. Plan", sub: "factible en planta", tag: "turnos e inventarios" }
    ],
    legend: ["Lakehouse", "Solver", "Plan"]
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
        text: "Cada asignación se resuelve en segundos. Los datos cambian cada 3.",
        warn: false
      },
      {
        icon: "flow-arrow",
        text: "El caso muestra un pipeline de baja latencia acoplado a un solver.",
        warn: false
      }
    ]
  },
  codicioso: {
    title: "Codicioso contra global",
    titleIcon: "shuffle",
    cols: ["Pasajero A", "Pasajero B"],
    rows: [
      {
        label: "Auto 1",
        cells: [
          { value: 1, suffix: "min" },
          { value: 3, suffix: "min" }
        ]
      },
      {
        label: "Auto 2",
        cells: [
          { value: 4, suffix: "min" },
          { value: 20, suffix: "min", variant: "amber" }
        ]
      }
    ],
    facts: [
      {
        icon: "warning-circle",
        text: "Greedy: auto 1 a A en 1 minuto. B queda con auto 2: 20 minutos. Total 21.",
        warn: true
      },
      {
        icon: "check-circle",
        text: "Global: auto 2 a A y auto 1 a B. Total 7. Se sacrifican 3 minutos de A.",
        warn: false
      }
    ]
  },
  emparejamiento: {
    title: "Emparejamiento de peso máximo",
    titleIcon: "scales",
    bignums: [
      {
        value: "3-5",
        suffix: "s",
        cap: "Ventana de lote para resolver el emparejamiento. La asignación se recalcula en bloques de segundos."
      },
      {
        value: 2,
        suffix: "s",
        variant: "amber",
        cap: "Si el sistema tarda más en absorber la información y correr el algoritmo, el conductor ya avanzó y el plan quedó obsoleto."
      }
    ],
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
      text: "Un millón de puntos GPS flotantes. Calcular distancias exactas exige trigonometría lentísima. Comparar cada ping con los demás exige calcular n² distancias.",
      warn: true
    }
  },
  indexacion: {
    title: "Indexación espacial",
    titleIcon: "hexagon",
    fact: {
      icon: "hexagon",
      text: "Cada coordenada cae en una celda hexagonal. 50 pasajeros y 10 conductores se vuelven conteo instantáneo.",
      warn: false
    }
  },
  pipeline: {
    title: "Del ping al push",
    titleIcon: "flow-arrow",
    steps: [
      { icon: "database", title: "1. Ingesta", sub: "colchón ante picos", tag: "Kafka · protege al núcleo" },
      { icon: "lightning", title: "2. Memoria", sub: "enriquece en caliente", tag: "H3 + reglas de dominio" },
      { icon: "cpu", title: "3. Respuesta", sub: "decide y notifica", tag: "solver + push gRPC" }
    ],
    legend: ["Ingesta", "Memoria", "Respuesta"],
    facts: [
      {
        icon: "lightning",
        text: "El contexto entra en milisegundos: calificación, riesgo de cancelación, tarifa dinámica.",
        warn: false
      },
      {
        icon: "check-circle",
        text: "El algoritmo más refinado vale cero si el flujo es lento.",
        warn: false
      }
    ]
  },
  devops: {
    title: "DevOps",
    titleIcon: "infinity",
    left: { icon: "code", title: "Dev", sub: "código y pruebas" },
    right: { icon: "monitor", title: "Ops", sub: "despliegue y monitoreo" },
    linkOut: "despliega",
    linkBack: "monitorea",
    facts: [
      {
        icon: "arrows-clockwise",
        text: "Integración continua. Cada cambio pasa pruebas antes de salir.",
        warn: false
      },
      {
        icon: "eye",
        text: "El monitoreo devuelve lo que pasa en producción.",
        warn: false
      }
    ]
  },
  drift: {
    title: "Estabilidad en producción",
    titleIcon: "warning-diamond",
    facts: [
      {
        icon: "check-circle",
        text: "En desarrollo todo cuadra. Datos fijos, modelo estable.",
        warn: false
      },
      {
        icon: "warning-circle",
        text: "En producción el mundo cambia. Precios, calles, hábitos.",
        warn: true
      },
      {
        icon: "arrow-right",
        text: "El modelo no cambió. Cambió lo que lo alimenta.",
        warn: false
      }
    ]
  },
  datadrift: {
    title: "Data drift",
    titleIcon: "chart-line-up",
    bignum: {
      value: 40,
      suffix: "%",
      variant: "amber",
      cap: "Si el combustible sube ese porcentaje, la matriz de costos histórica deja de reflejar la realidad."
    },
    facts: [
      {
        icon: "chart-line-up",
        text: "La distribución cambia. Las obras del AeroMetro cierran carriles en la Roosevelt. Los tiempos históricos mienten.",
        warn: true
      },
      {
        icon: "warning-circle",
        text: "El solver asigna con la matriz vieja. Manda flotas hacia carriles cerrados.",
        warn: true
      }
    ]
  },
  conceptdrift: {
    title: "Concept drift",
    titleIcon: "arrows-split",
    facts: [
      {
        icon: "arrows-split",
        text: "La relación entre entrada y salida se rompe.",
        warn: true
      },
      {
        icon: "clock-countdown",
        text: "Hoy el pico matutino entra por la Roosevelt. Con la Línea 2 ese flujo viaja por cable. El modelo sigue asignando como si el pico siguiera en la calle.",
        warn: true
      }
    ]
  },
  contencion: {
    title: "El dato no pasa si no cumple",
    titleIcon: "shield-check",
    checks: [
      { icon: "package", title: "Demanda ≥ 0", sub: "nunca negativa" },
      { icon: "map-pin", title: "Nulos ≤ 2%", sub: "direcciones de clientes" },
      { icon: "timer", title: "Tiempos posibles", sub: "ningún camión cruza el país en 3 minutos" }
    ],
    solver: {
      title: "Solver",
      lockIcon: "lock",
      lockSub: "bloqueado",
      openIcon: "lock-open",
      openSub: "desbloqueado"
    },
    fact: {
      icon: "warning-circle",
      text: "Si una validación falla, el lote no pasa. Mejor infeasible que una decisión absurda.",
      warn: true
    }
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
  gracias: {
    title: "Gracias",
    titleIcon: "handshake",
    subtitle: "Preguntas y discusión",
    names: "Andrés Tobar · Jostyne Montenegro · Samuel Marroquín"
  }
};