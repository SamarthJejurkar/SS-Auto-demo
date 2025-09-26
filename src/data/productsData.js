

// export const productsData = [
//   {
//     id: 1,
//     title: "PLCs & Controllers",
//     shortDescription: "Advanced programmable logic controllers for industrial automation and process control.",
//     fullDescription: "Our PLCs & Controllers offer state-of-the-art programmable logic control solutions designed for industrial automation and sophisticated process control applications.",
//     image: "/assets/product1.jpg",
//     category: "Automation",
//     features: [
//       "High-speed processing capabilities",
//       "Multiple communication protocols",
//       "Expandable I/O modules",
//       "User-friendly programming environment",
//       "Real-time monitoring and diagnostics",
//       "Robust industrial design"
//     ],
//     protections: [
//       "Overcurrent protection",
//       "Surge protection",
//       "Temperature monitoring",
//       "System diagnostics"
//     ]
//   },
//   {
//     id: 2,
//     title: "Motor Control Centers",
//     shortDescription: "Comprehensive motor control solutions with advanced protection and monitoring.",
//     fullDescription: "Our Motor Control Centers provide comprehensive motor control solutions featuring advanced protection systems and real-time monitoring capabilities.",
//     image: "/assets/product2.jpg",
//     category: "Control Systems",
//     features: [
//       "Variable speed control",
//       "Energy monitoring",
//       "Remote operation capability",
//       "Modular design",
//       "Easy maintenance access"
//     ],
//     protections: [
//       "Motor overload protection",
//       "Short circuit protection",
//       "Ground fault protection",
//       "Phase loss detection"
//     ]
//   },
//   {
//     id: 3,
//     title: "Industrial Sensors",
//     shortDescription: "Precision sensors for temperature, pressure, flow, and position measurement.",
//     fullDescription: "Our Industrial Sensors deliver precision measurement capabilities for temperature, pressure, flow, and position monitoring in demanding industrial environments.",
//     image: "/assets/product3.jpg",
//     category: "Sensors",
//     features: [
//       "High accuracy measurements",
//       "Wide operating temperature range",
//       "Multiple output options",
//       "Robust construction",
//       "Easy installation and setup"
//     ],
//     protections: [
//       "Environmental protection",
//       "EMI/RFI immunity",
//       "Overvoltage protection",
//       "Reverse polarity protection"
//     ]
//   },
//   {
//     id: 4,
//     title: "Power Distribution",
//     shortDescription: "Reliable power distribution panels and switchgear for industrial applications.",
//     fullDescription: "Our Power Distribution systems provide reliable power distribution through advanced panels and switchgear designed for industrial applications.",
//     image: "/assets/product4.jpg",
//     category: "Electrical",
//     features: [
//       "High current capacity",
//       "Modular panel design",
//       "Easy expansion capabilities",
//       "Safety interlocks",
//       "Status indication"
//     ],
//     protections: [
//       "Circuit breaker protection",
//       "Arc fault detection",
//       "Ground fault protection",
//       "Load monitoring"
//     ]
//   },
//   {
//     id: 5,
//     title: "HMI & SCADA",
//     shortDescription: "Human-machine interfaces and supervisory control systems for monitoring.",
//     fullDescription: "Our HMI & SCADA systems provide intuitive human-machine interfaces and comprehensive supervisory control and data acquisition capabilities.",
//     image: "/assets/product5.jpg",
//     category: "Interfaces",
//     features: [
//       "Touchscreen interfaces",
//       "Real-time data visualization",
//       "Historical data logging",
//       "Alarm management",
//       "Remote access capability"
//     ],
//     protections: [
//       "User access control",
//       "Data encryption",
//       "System backup",
//       "Network security"
//     ]
//   },
//   {
//     id: 6,
//     title: "Variable Frequency Drives",
//     shortDescription: "Energy-efficient VFDs for precise motor speed and torque control.",
//     fullDescription: "Our Variable Frequency Drives deliver energy-efficient motor control with precise speed and torque regulation, optimizing industrial processes.",
//     image: "/assets/product6.jpg",
//     category: "Drives",
//     features: [
//       "Energy savings up to 50%",
//       "Precise speed control",
//       "Soft start/stop capability",
//       "Multiple control modes",
//       "Built-in PID controller"
//     ],
//     protections: [
//       "Motor overload protection",
//       "Overvoltage/undervoltage protection",
//       "Output short circuit protection",
//       "Overtemperature protection"
//     ]
//   },
//   {
//     id: 7,
//     title: "Phase Failure Relays",
//     shortDescription: "These relays are suitable for monitoring incoming 3-phase supply from Mains.",
//     fullDescription: "These relays are suitable for monitoring incoming 3-phase supply from Mains (Electricity distribution line). Being independent of load, they can be used for any HP/KW rating of load.",
//     image: "/assets/Phase-Failure-Relays.jpg",
//     category: "Protection",
//     features: [
//       "Fixed/adjustable unbalance settings",
//       "Fixed/adjustable under voltage/over-voltage settings", 
//       "Fixed/adjustable trip delays",
//       "Built-in or Separate Auxiliary supply",
//       "Resetting Auto / Manual / Remote",
//       "Output contacts : 1 CO or 2 CO",
//       "Choice of enclosures (DIN-Rail, Flush, Plug-in)",
//       "Models with Micro-Controller based design",
//       "2 Line Alpha-Numeric LCD display (For F3 VSR4 model)",
//       "Serial Communication (RS 485) Port (for F3 VSR5 model)",
//       "Use of SMD Technology",
//       "User-friendly LED indications"
//     ],
//     protections: [
//       "Phase Failure [Phase Loss/Single Phasing]",
//       "Phase sequence reversal", 
//       "Voltage Unbalance",
//       "Under Voltage",
//       "Over Voltage",
//       "Dry Run"
//     ]
//   }
// ]


// Import your Phase Failure Relays image for all products temporarily
import phaseFailureRelays from '../assets/Phase-Failure-Relays-1.jpg'

export const productsData = [
  {
    id: 1,
    title: "PLCs & Controllers",
    shortDescription: "Advanced programmable logic controllers for industrial automation and process control.",
    fullDescription: "Our PLCs & Controllers offer state-of-the-art programmable logic control solutions designed for industrial automation and sophisticated process control applications.",
    image: phaseFailureRelays, // ✅ Using same image temporarily
    category: "Automation",
    features: [
      "High-speed processing capabilities",
      "Multiple communication protocols",
      "Expandable I/O modules",
      "User-friendly programming environment",
      "Real-time monitoring and diagnostics",
      "Robust industrial design"
    ],
    protections: [
      "Overcurrent protection",
      "Surge protection",
      "Temperature monitoring",
      "System diagnostics"
    ]
  },
  {
    id: 2,
    title: "Motor Control Centers",
    shortDescription: "Comprehensive motor control solutions with advanced protection and monitoring.",
    fullDescription: "Our Motor Control Centers provide comprehensive motor control solutions featuring advanced protection systems and real-time monitoring capabilities.",
    image: phaseFailureRelays, // ✅ Using same image temporarily
    category: "Control Systems",
    features: [
      "Variable speed control",
      "Energy monitoring",
      "Remote operation capability",
      "Modular design",
      "Easy maintenance access"
    ],
    protections: [
      "Motor overload protection",
      "Short circuit protection",
      "Ground fault protection",
      "Phase loss detection"
    ]
  },
  {
    id: 3,
    title: "Industrial Sensors",
    shortDescription: "Precision sensors for temperature, pressure, flow, and position measurement.",
    fullDescription: "Our Industrial Sensors deliver precision measurement capabilities for temperature, pressure, flow, and position monitoring in demanding industrial environments.",
    image: phaseFailureRelays, // ✅ Using same image temporarily
    category: "Sensors",
    features: [
      "High accuracy measurements",
      "Wide operating temperature range",
      "Multiple output options",
      "Robust construction",
      "Easy installation and setup"
    ],
    protections: [
      "Environmental protection",
      "EMI/RFI immunity",
      "Overvoltage protection",
      "Reverse polarity protection"
    ]
  },
  {
    id: 4,
    title: "Power Distribution",
    shortDescription: "Reliable power distribution panels and switchgear for industrial applications.",
    fullDescription: "Our Power Distribution systems provide reliable power distribution through advanced panels and switchgear designed for industrial applications.",
    image: phaseFailureRelays, // ✅ Using same image temporarily
    category: "Electrical",
    features: [
      "High current capacity",
      "Modular panel design",
      "Easy expansion capabilities",
      "Safety interlocks",
      "Status indication"
    ],
    protections: [
      "Circuit breaker protection",
      "Arc fault detection",
      "Ground fault protection",
      "Load monitoring"
    ]
  },
  {
    id: 5,
    title: "HMI & SCADA",
    shortDescription: "Human-machine interfaces and supervisory control systems for monitoring.",
    fullDescription: "Our HMI & SCADA systems provide intuitive human-machine interfaces and comprehensive supervisory control and data acquisition capabilities.",
    image: phaseFailureRelays, // ✅ Using same image temporarily
    category: "Interfaces",
    features: [
      "Touchscreen interfaces",
      "Real-time data visualization",
      "Historical data logging",
      "Alarm management",
      "Remote access capability"
    ],
    protections: [
      "User access control",
      "Data encryption",
      "System backup",
      "Network security"
    ]
  },
  {
    id: 6,
    title: "Variable Frequency Drives",
    shortDescription: "Energy-efficient VFDs for precise motor speed and torque control.",
    fullDescription: "Our Variable Frequency Drives deliver energy-efficient motor control with precise speed and torque regulation, optimizing industrial processes.",
    image: phaseFailureRelays, // ✅ Using same image temporarily
    category: "Drives",
    features: [
      "Energy savings up to 50%",
      "Precise speed control",
      "Soft start/stop capability",
      "Multiple control modes",
      "Built-in PID controller"
    ],
    protections: [
      "Motor overload protection",
      "Overvoltage/undervoltage protection",
      "Output short circuit protection",
      "Overtemperature protection"
    ]
  },
  {
    id: 7,
    title: "Phase Failure Relays",
    shortDescription: "These relays are suitable for monitoring incoming 3-phase supply from Mains.",
    fullDescription: "These relays are suitable for monitoring incoming 3-phase supply from Mains (Electricity distribution line). Being independent of load, they can be used for any HP/KW rating of load.",
    image: phaseFailureRelays, // ✅ Using the actual Phase Failure Relays image
    category: "Protection",
    features: [
      "Fixed/adjustable unbalance settings",
      "Fixed/adjustable under voltage/over-voltage settings", 
      "Fixed/adjustable trip delays",
      "Built-in or Separate Auxiliary supply",
      "Resetting Auto / Manual / Remote",
      "Output contacts : 1 CO or 2 CO",
      "Choice of enclosures (DIN-Rail, Flush, Plug-in)",
      "Models with Micro-Controller based design",
      "2 Line Alpha-Numeric LCD display (For F3 VSR4 model)",
      "Serial Communication (RS 485) Port (for F3 VSR5 model)",
      "Use of SMD Technology",
      "User-friendly LED indications"
    ],
    protections: [
      "Phase Failure [Phase Loss/Single Phasing]",
      "Phase sequence reversal", 
      "Voltage Unbalance",
      "Under Voltage",
      "Over Voltage",
      "Dry Run"
    ]
  }
]
