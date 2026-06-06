// ─────────────────────────────────────────────
//  PORTFOLIO CONTENT — edit this file to update
//  your projects. index.html reads from here.
// ─────────────────────────────────────────────

const PORTFOLIO_DATA = {

  projects: [

    {
      title: "Predictive Maintenance for Devasthal Telescope Motors",
      badge: "Predictive Maintenance · Scientific Instrumentation",
      award: "🔬 Research Project · ARIES, Nainital",
      featured: true,
      // ↓ Add your image: put the file in assets/images/projects/ and update the path
      image: "assets/images/projects/telescope.jpg",   // or set to "" to show placeholder
      description: "Developed a hybrid fault detection system for the azimuth and altitude drive motors of India's largest optical telescope — the 3.6m Devasthal Telescope — enabling proactive fault prediction before catastrophic failure.",
      highlights: [
        "Ensemble anomaly detector combining LSTM Autoencoder, Random Forest, Isolation Forest & One-Class SVM with rolling-window time-series features",
        "Three-class severity output: Normal, Suspicious, Anomalous — with file-wise classification and result aggregation",
        "FFT-based vibration analysis on large optical assemblies during crane-assisted motion using accelerometer data",
        "ANSYS modal analysis to cross-validate structural resonance frequencies",
        "Streamlit GUI with real-time severity visualization dashboards"
      ],
      tech: ["LSTM Autoencoder", "Random Forest", "Isolation Forest", "One-Class SVM", "Python", "Streamlit", "FFT", "ANSYS"],
      github: "https://github.com/Tejker",
      demo: ""   // add a live demo URL if you have one
    },

    {
      title: "Autonomous Rover for Warehouse Rack Inventory Management",
      badge: "Robotics · Systems Integration",
      award: "🥉 Inter IIT Tech Meet 14.0 · Bronze Medal",
      featured: true,
      image: "assets/images/projects/rover.jpg",
      description: "Led full hardware design and integration of an autonomous rover for automated warehouse shelf scanning, built for the Inter IIT Tech Meet 14.0 problem statement by Eternal.",
      highlights: [
        "End-to-end hardware integration: chassis, motors, sensors, actuators, and controllers",
        "Belt-driven vertical scanning mechanism using a stepper motor for multi-level shelf scanning",
        "Custom wiring harnesses for reliable electromechanical operation under dynamic conditions",
        "Power and safety hardware: battery monitoring, voltage regulation, emergency stops"
      ],
      tech: ["Embedded Systems", "Stepper Motor", "Encoders", "Sensor Fusion", "Power Electronics", "Autonomous Nav"],
      github: "https://github.com/Tejker",
      demo: ""
    },

    {
      title: "Model CubeSat Project",
      badge: "Aerospace · Embedded · CAE Club",
      award: "",
      featured: false,
      image: "assets/images/projects/cubesat.jpg",
      description: "Designed and built a model CubeSat with full onboard sensing, custom PCB, and a real-time telemetry GUI — from schematic to flight-ready system.",
      highlights: [
        "Environmental and orientation sensors for onboard positioning and altitude measurement",
        "Custom PCB design: schematic, layout, assembly, and testing",
        "Real-time GUI to monitor flight parameters during the CubeSat's flight"
      ],
      tech: ["PCB Design", "Sensor Integration", "Embedded C", "Python GUI", "Telemetry"],
      github: "https://github.com/Tejker",
      demo: ""
    },

    {
      title: "Micromouse Maze-Solver Robot",
      badge: "Robotics · PCB · Control",
      award: "",
      featured: false,
      image: "assets/images/projects/micromouse.jpg",
      description: "A competition-grade autonomous maze-solving robot using a hybrid STM32-Arduino architecture for real-time sensor fusion and control logic.",
      highlights: [
        "STM32-Arduino hybrid architecture for efficient hardware integration and real-time control",
        "Sensor fusion: ultrasonic, IMU, and time-of-flight sensors for obstacle avoidance",
        "Custom PCB: compact layout design, streamlined circuitry, performance testing",
        "Iterative hardware refinement for competition-readiness"
      ],
      tech: ["STM32", "Arduino", "IMU", "ToF Sensors", "PCB Design", "C++"],
      github: "https://github.com/Tejker",
      demo: ""
    },

    {
      title: "Autonomous Lawn Mower",
      badge: "Autonomous Systems · Raspberry Pi",
      award: "",
      featured: false,
      image: "assets/images/projects/lawnmower.jpg",
      description: "Academic project under Prof. Vimal Bhatia — a fully assembled autonomous lawn mower integrating Raspberry Pi for navigation control over defined field paths.",
      highlights: [
        "Designed and assembled mechanical structure and drive system from scratch",
        "Raspberry Pi + motor driver integration for autonomous field navigation",
        "Embedded hardware-level control for reliable real-world operation"
      ],
      tech: ["Raspberry Pi", "Motor Drivers", "Embedded Python", "Mechanical Design", "Drive Systems"],
      github: "https://github.com/Tejker",
      demo: ""
    },

    {
      title: "Acoustic Tracking & Target Identification System (ATTIS)",
      badge: "Acoustic Engineering · ESP32",
      award: "",
      featured: false,
      image: "assets/images/projects/attis.jpg",
      description: "An ESP32-based acoustic localization system using a 3-microphone array and a custom parabolic reflector to estimate sound source direction using signal amplitude and phase differencing.",
      highlights: [
        "3-microphone array + ESP32 for real-time acoustic localization",
        "Parabolic sound-receiving structure for enhanced signal gain",
        "Embedded signal processing using amplitude and phase differences for direction estimation"
      ],
      tech: ["ESP32", "Microphone Array", "Signal Processing", "Acoustic Localization", "Embedded C"],
      github: "https://github.com/Tejker",
      demo: ""
    },

    {
      title: "Colour-Detecting Line Follower Robot",
      badge: "Embedded · Color Sensing · Makerspace",
      award: "",
      featured: false,
      image: "assets/images/projects/linefollower.jpg",
      description: "An autonomous line-following robot with intelligent color detection, built at the IIT Indore Makerspace — integrating color and IR sensors with dynamic path correction algorithms.",
      highlights: [
        "Color sensor + IR sensor fusion for multi-color track navigation",
        "Color detection algorithm for dynamic navigation decisions based on track color patches",
        "Calibrated sensor responses across varying lighting conditions"
      ],
      tech: ["Microcontroller", "IR Sensors", "Color Sensor", "Embedded C", "PID Control"],
      github: "https://github.com/Tejker",
      demo: ""
    }

  ]

};

// ─────────────────────────────────────────────
//  HOW TO ADD A NEW PROJECT:
//
//  1. Copy one of the blocks above (from { to },)
//  2. Paste it as a new entry inside the projects: [ ] array
//  3. Fill in the fields
//  4. Put your image in assets/images/projects/
//  5. Set image: "assets/images/projects/yourfile.jpg"
//  6. Commit — done!
// ─────────────────────────────────────────────
