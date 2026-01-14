import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, MapPin, ExternalLink, Download, Moon, Sun, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

// ---------- Types ----------
interface ProjectLink {
  name: string;
  url: string;
}

interface Project {
  title: string;
  tagline: string;
  description: string;
  tech: string[];
  links: ProjectLink[];
}

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  tech: string[];
}

interface Skills {
  [category: string]: string[];
}

// ---------- Component ----------
const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.setAttribute("data-bs-theme", !darkMode ? "dark" : "light");
  };

  // ---------- Project Data ----------
  // const projects: Project[] = [
  //   {
  //     title: "Doraemon Flappy Bird – HTML5 Canvas Game",
  //     description:
  //       "A responsive, framework-free Flappy Bird clone built with <strong>vanilla JavaScript and HTML5 Canvas</strong>. Features 60 FPS gameplay, physics-based flight, multi-input support (touch/mouse/keyboard), and adaptive UI for mobile.",
  //     tech: ["Vanilla JavaScript", "HTML5 Canvas", "CSS3", "Responsive Design", "Game Dev"],
  //     links: [
  //       { name: "Live Demo", url: "https://sadja18.github.io/flappy-bird-game/" },
  //       { name: "GitHub", url: "https://github.com/Sadja18/flappy-bird-game" },
  //     ],
  //   },
  //   {
  //     title: "PDF Generation & Document Automation System",
  //     description:
  //       'Engineered a serverless pipeline on Google Cloud that processes <span class="highlight-metric">1M+ personalized PDFs</span> in <span class="highlight-metric">under 50 minutes</span> for physical mail campaigns.',
  //     tech: ["Python", "GCP", "Cloud Functions", "BigQuery", "Flask", "Docker"],
  //     links: [],
  //   },
  //   {
  //     title: "Android Health Monitoring App (ContextMonitoring)",
  //     description: "In a high-pressure situation, I built this native Android app from scratch in just 3 days, despite having no prior experience with Kotlin or Jetpack Compose. When a client suddenly demanded a native version of a Flutter app with a 5-day deadline, I rapidly learned the new stack and recreated the entire UI and boilerplate. This privacy-first app captures multimodal health data—heart rate via facial video, respiratory audio, and symptom logging—all stored locally on the device.",
  //     tech: ["Kotlin", "Jetpack Compose", "CameraX", "SQLite", "Android"],
  //     links: [{ name: "GitHub", url: "https://github.com/Sadja18/context-monitoring" }],
  //   },
  //   {
  //     title: "Blockchain Wallet (GoPay)",
  //     description:
  //       "Full-stack Ethereum wallet with Node.js backend and Flutter frontend. Supports wallet creation, balance checks, and Sepolia testnet transactions.",
  //     tech: ["Node.js", "Express", "PostgreSQL", "Ethers.js", "Flutter", "JWT"],
  //     links: [
  //       { name: "Backend", url: "https://github.com/Sadja18/block_chain_wallet_backend" },
  //       { name: "Mobile", url: "https://github.com/Sadja18/block_chain_wallet_mobile" },
  //     ],
  //   },
  //   {
  //     title: "Sadja Progress Stepper",
  //     description:
  //       "Customizable, scrollable Flutter stepper widget supporting linear/non-linear navigation. Published on pub.dev for the Flutter community.",
  //     tech: ["Flutter", "Dart", "Open Source"],
  //     links: [
  //       { name: "pub.dev", url: "https://pub.dev/packages/sadja_progress_stepper" },
  //       { name: "GitHub", url: "https://github.com/Sadja18/sadja_progress_stepper" },
  //     ],
  //   },
  //   {
  //     title: "Face Analyzer",
  //     description:
  //       "Deep learning model to estimate age, gender, race, and skin tone from facial images—designed for a virtual trial room application.",
  //     tech: ["Python", "Computer Vision", "AI/ML"],
  //     links: [{ name: "GitHub", url: "https://github.com/Sadja18/face_analyzer" }],
  //   },
  //   {
  //     title: "IOC Intel Tools",
  //     description:
  //       "Linux-based network reconnaissance toolkit that extracts IPs and domains from local devices and outputs SIEM-ready JSON.",
  //     tech: ["Linux", "Networking", "Security", "SIEM"],
  //     links: [{ name: "GitHub", url: "https://github.com/Sadja18/ioc-intel-tools" }],
  //   },
  //   {
  //     title: "Improved – VS Code Theme",
  //     description:
  //       "Accessible, color-blind-friendly syntax theme to reduce eye strain and improve developer ergonomics.",
  //     tech: ["VS Code", "Accessibility", "Open Source"],
  //     links: [
  //       {
  //         name: "Marketplace",
  //         url: "https://marketplace.visualstudio.com/items?itemName=Sadja.Improved",
  //       },
  //     ],
  //   },
  // ];
  const projects: Project[] = [
    {
      title: "Doraemon Flappy Bird – Vanilla JS Game",
      tagline: "60 FPS gameplay on low-end devices with zero dependencies.",
      description:
        "Built a responsive Flappy Bird clone from scratch using <strong>vanilla JavaScript and HTML5 Canvas</strong>—no frameworks, no libraries. Implemented physics-based flight, multi-input support (touch/mouse/keyboard), and adaptive UI that works flawlessly on mobile. Proved complex interactions don’t require heavy tooling.",
      tech: ["Vanilla JavaScript", "HTML5 Canvas", "CSS3", "Responsive Design", "Game Dev"],
      links: [
        { name: "Live Demo", url: "https://sadja18.github.io/flappy-bird-game/" },
        { name: "GitHub", url: "https://github.com/Sadja18/flappy-bird-game" },
      ],
    },
    {
      title: "Serverless PDF Automation Pipeline",
      tagline: "Generates 1M+ personalized print-ready PDFs in under 50 minutes—no database, no VMs.",
      description:
        "Engineered an end-to-end serverless pipeline on Google Cloud to replace a $200k/year legacy vendor. Processes 1B+ e-commerce records from BigQuery, deduplicates household addresses using fuzzy matching (Levenshtein distance), and renders dynamic PDFs via <code>pdfmake</code>. Orchestrated 7 chained Cloud Functions (bypassing 1-hour limits via Cloud Storage state handoff) to batch, merge, and deliver to print/email/mail house—all without a single persistent database.",
      tech: ["Python", "GCP", "Cloud Functions", "BigQuery", "Flask", "Docker"],
      links: [],
    },
    {
      title: "Privacy-First Android Health Monitor",
      tagline: "Built a native health app in 3 days—with zero Kotlin experience.",
      description:
        "When a client demanded a native Android version of a Flutter app with a 5-day deadline, I learned Jetpack Compose from scratch and delivered in 3 days. Captures heart rate (via facial video analysis), respiratory audio, and symptom logs—all stored locally on-device with zero cloud dependency. Built for teams requiring HIPAA-aligned data handling without backend complexity.",
      tech: ["Kotlin", "Jetpack Compose", "CameraX", "SQLite", "Android"],
      links: [{ name: "GitHub", url: "https://github.com/Sadja18/context-monitoring" }],
    },
    {
      title: "Ethereum Wallet (GoPay)",
      tagline: "Full-stack crypto wallet built in 36 hours for a technical assignment.",
      description:
        "Developed a complete Ethereum wallet in 36 hours as a hiring challenge—including JWT-secured Node.js backend (PostgreSQL + Ethers.js) and Flutter mobile app supporting Sepolia testnet transactions. One of the few candidates to fully deliver; the role was later rescinded (ghost job). Still stands as proof of rapid full-stack execution under extreme constraints.",
      tech: ["Node.js", "Express", "PostgreSQL", "Ethers.js", "Flutter", "JWT"],
      links: [
        { name: "Backend", url: "https://github.com/Sadja18/block_chain_wallet_backend" },
        { name: "Mobile", url: "https://github.com/Sadja18/block_chain_wallet_mobile" },
      ],
    },
    {
      title: "Sadja Progress Stepper (Flutter)",
      tagline: "Solved real UX gaps during an Ionic-to-Flutter migration.",
      description:
        "Built a customizable, scrollable Flutter stepper because off-the-shelf solutions couldn’t handle our team’s complex multi-step flows. Supports linear/non-linear navigation, dynamic step insertion, and full visual theming. Published to pub.dev and adopted internally to unblock a critical app migration led by a non-technical PM.",
      tech: ["Flutter", "Dart", "Open Source"],
      links: [
        { name: "pub.dev", url: "https://pub.dev/packages/sadja_progress_stepper" },
        { name: "GitHub", url: "https://github.com/Sadja18/sadja_progress_stepper" },
      ],
    },
    {
      title: "Face Attribute Analyzer",
      tagline: "Modular CV component for virtual trial rooms—delivered ready for client integration.",
      description:
        "Developed a deep learning module to estimate age, gender, race, and skin tone from facial images. Designed as a standalone, plug-and-play component for a virtual trial room application. Client handled internal validation and deployment; my role was end-to-end model development and inference API delivery.",
      tech: ["Python", "Computer Vision", "AI/ML"],
      links: [{ name: "GitHub", url: "https://github.com/Sadja18/face_analyzer" }],
    },
    {
      title: "IOC Intel Recon Toolkit",
      tagline: "SIEM-ready network recon in under 2 seconds—no external dependencies.",
      description:
        "Linux-based toolkit that extracts IPs and domains from local network traffic (ARP, DNS, DHCP) and outputs structured JSON for security teams. Built for incident responders needing fast, offline-capable intel without bloated commercial tools. Fully shell-scripted with zero external binaries.",
      tech: ["Linux", "Networking", "Security", "SIEM"],
      links: [{ name: "GitHub", url: "https://github.com/Sadja18/ioc-intel-tools" }],
    },
    {
      title: "Improved – VS Code Theme",
      tagline: "Reduced eye strain for developers during long coding sessions.",
      description:
        "Designed an accessible, color-blind-friendly syntax theme focused on ergonomics and readability. Meets WCAG contrast standards and minimizes blue-light fatigue. Published on VS Code Marketplace for developers who care about sustainable coding habits.",
      tech: ["VS Code", "Accessibility", "Open Source"],
      links: [
        {
          name: "Marketplace",
          url: "https://marketplace.visualstudio.com/items?itemName=Sadja.Improved",
        },
      ],
    },
    {
      title: "This Portfolio Site",
      tagline: "A performant, accessible showcase built with modern React tooling.",
      description:
        "Designed and developed my own portfolio from scratch using <strong>React, TypeScript, and Framer Motion</strong>. Features smooth scroll-linked navigation, responsive dark/light mode, semantic HTML, and optimized asset loading. Built to reflect my engineering values: clean, user-first, and free of bloat.",
      tech: ["React", "TypeScript", "Framer Motion", "Bootstrap 5", "Responsive Design", "Accessibility"],
      links: [
        { name: "Source Code", url: "https://github.com/Sadja18/my-portfolio" },
      ],
    },
  ];

  // ---------- Experience Data ----------
  const experiences: Experience[] = [
    {
      role: "IT Manager",
      company: "EdCIL (India) Ltd.",
      period: "Oct 2025 – Present",
      location: "New Delhi, India",
      bullets: ["Improving data analysis pipelines and reducing redundancies by 20% during onboarding."],
      tech: ["Data Pipelines", "GCP"],
    },
    {
      role: "Project Engineer",
      company: "CDAC, Pune",
      period: "Dec 2024 – Oct 2025",
      location: "Pune, India",
      bullets: [
        "Developed hybrid mobile apps using Ionic for PMGSY field surveys, inspections, and citizen feedback with offline-first design.",
        "Integrated native device features (camera, GPS) via Capacitor.",
        "Performed mobile security analysis using MobSF and code quality checks via SonarQube.",
      ],
      tech: ["Ionic", "Capacitor", "MobSF", "SonarQube", "Geo-tagging"],
    },
    {
      role: "Software Engineer",
      company: "iTechnolabs Pvt. Ltd., Mohali",
      period: "Dec 2023 – Dec 2024",
      location: "Mohali, India",
      bullets: [
        "Built serverless document automation pipelines processing 1M+ PDFs using Python and GCP.",
        "Deployed microservices on Cloud Run and Cloud Functions.",
        "Implemented Data Matrix tracking for logistics accuracy.",
      ],
      tech: ["Python", "GCP", "Cloud Run", "Cloud Functions", "BigQuery"],
    },
    {
      role: "Project Engineer",
      company: "C-DAC Mohali",
      period: "Feb 2023 – Dec 2023",
      location: "Mohali, India",
      bullets: [
        "Full-stack development of SIEM platforms using MEAN stack and Python services.",
        "Enhanced real-time threat intelligence dashboards.",
      ],
      tech: ["MEAN", "Node.js", "MongoDB", "SIEM"],
    },
    {
      role: "Project Engineer",
      company: "C-DAC Chennai",
      period: "Mar 2022 – Jan 2023",
      location: "Chennai, Tamil Nadu, India",
      bullets: [
        "Full-stack Web, Desktop and Mobile development of exam and ERP systems using Python, Django, PHP, Flutter and XMLRPC.",
        "Enhanced automated exam controller.",
      ],
      tech: ["Python", "PHP", "XMLRPC", "Mobile App Development", "Flutter", "Git", "Linux", "wxPython", "Desktop Application Development"],
    },
    {
      role: "Project Associate",
      company: "C-DAC Chennai",
      period: "September 2021 – Mar 2022",
      location: "Chennai, Tamil Nadu, India",
      bullets: [
        "Full-stack Web, Desktop and Mobile development of exam and ERP systems using Python, Django, PHP, Flutter and XMLRPC.",
        "Enhanced automated exam controller.",
      ],
      tech: ["Python", "PHP", "XMLRPC", "Mobile App Development", "Flutter", "Git", "Linux", "wxPython", "Desktop Application Development"],
    },
    {
      role: "Junior Software Engineer",
      company: "GRL Technologies",
      period: "May 2020 – July 2021",
      location: "Lucknow, Uttar Pradesh, India",
      bullets: [
        "Automated Testing and utility implementation using Java and Node.js",
      ],
      tech: ["Node.js", "Java", "Selenium", "Automated Testing"],
    }
  ];

  // ---------- Skills ----------
  const skills: Skills = {
    Languages: ["Python", "JavaScript", "TypeScript", "Dart", "Kotlin", "Java", "PHP"],
    Frontend: ["React", "Angular", "Flutter", "Ionic", "jQuery", "Vanilla JS", "HTML5/CSS3", "Tkinter", "wxPython"],
    Backend: ["FastAPI", "Django", "Flask", "Express.js"],
    Cloud: ["Firebase", "Google AppScript", "Google Cloud (Cloud Run, Functions, BigQuery, Storage)", "Docker", "Serverless"],
    Mobile: ["Flutter", "Ionic + Capacitor", "Offline-First", "Camera/GPS APIs"],
    Security: ["MobSF", "SonarQube", "OWASP Awareness", "Secure Coding"],
    Data: ["Pandas", "GeoPandas", "ETL", "Web Scraping", "BigQuery"],
    Databases: ["MongoDB", "MySQL", "Postgres", "MariaDB", "SQLite"]
  };

  return (
    <div className={`transition-colors duration-300 w-100 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>

      {/* --- Header --- */}
      <header className="sticky-top header-glass">
        <div className="container d-flex justify-content-between align-items-center p-3">
          <motion.h1 className="h4 fw-bold" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            Naman Mishra
          </motion.h1>

          <nav className="d-none d-md-flex gap-4">
            {["about", "experience", "projects", "skills", "contact"].map((item) => (
              <a key={item} href={`#${item}`} className={`text-decoration-none ${activeSection === item ? "text-primary" : ""}`}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </nav>

          <button onClick={toggleDarkMode} className="btn btn-secondary rounded-circle p-2" aria-label="Toggle dark mode">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </header>

      {/* ------------------ HERO ------------------ */}
      {/* <section id="hero" className="py-5 text-center">
        <div className="container">
          <motion.h1 className="display-4 fw-bold mb-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Full Stack Developer
          </motion.h1>

          <motion.p className="lead mb-4 mx-auto" style={{ maxWidth: "600px" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Building secure, cloud-native web & mobile apps with Flutter, Python, and Google Cloud.
          </motion.p>

          <motion.div className="d-grid gap-2 d-sm-flex justify-content-sm-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <a href="#projects" className="btn btn-primary btn-lg px-4 gap-3">
              View My Work <ExternalLink size={16} />
            </a>
            <a href="#contact" className="btn btn-outline-primary btn-lg px-4">
              Get In Touch
            </a>
          </motion.div>

          <motion.div className="mt-5" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown size={24} className="mx-auto text-primary" />
          </motion.div>
        </div>
      </section> */}
      {/* ------------------ HERO ------------------ */}
      <section id="hero" className="py-5 text-center">
        <div className="container">
          <motion.h1 className="display-4 fw-bold mb-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            Engineer Who Fixes Broken Workflows
          </motion.h1>

          <motion.p className="lead mb-4 mx-auto" style={{ maxWidth: "650px" }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            I build fast, privacy-respecting, offline-capable software - because tools should empower users, not frustrate them.
          </motion.p>

          <motion.div className="d-grid gap-2 d-sm-flex justify-content-sm-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <a href="#projects" className="btn btn-primary btn-lg px-4 gap-3">
              View My Work <ExternalLink size={16} />
            </a>
            <a href="#contact" className="btn btn-outline-primary btn-lg px-4">
              Get In Touch
            </a>
          </motion.div>

          <motion.div className="mt-5" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            <ChevronDown size={24} className="mx-auto text-primary" />
          </motion.div>
        </div>
      </section>

      {/* --- ABOUT --- */}
      {/* <section id="about" className="py-5">
        <div className="container">
          <motion.h2 className="text-center fw-bold mb-5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            About Me
          </motion.h2>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img src="/1596863205435.jpg" alt="Naman Mishra" className="profile-pic img-fluid rounded-circle shadow-lg" />
            </div>
            <div className="col-md-8 text-center text-md-start">
              <p className="lead">Hi, I'm Naman, a Full Stack Developer with a passion for creating impactful solutions.</p>
              <p>
                I have <strong>5+ years of experience</strong> specializing in cloud-native applications, mobile development (Flutter/Ionic), and data-driven platforms. I'm passionate about writing clean, secure code and delivering projects that make a real-world difference.
              </p>
              <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-2 mt-4">
                {["Google Cloud", "Flutter", "Django", "Security-First", "Open Source"].map((tag) => (
                  <span key={tag} className="badge bg-primary-subtle text-primary-emphasis rounded-pill px-3 py-2">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-4 mt-4">
                <span className="d-flex align-items-center gap-2">
                  <MapPin size={16} /> New Delhi, India
                </span>
              </div>
              <a href="/Resume-02.pdf" download="Naman_Mishra_Resume.pdf" className="btn btn-primary mt-4">
                <Download size={18} className="me-2" /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </section> */}
      {/* --- ABOUT --- */}
      <section id="about" className="py-5">
        <div className="container">
          <motion.h2 className="text-center fw-bold mb-5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            About Me
          </motion.h2>
          <div className="row align-items-center justify-content-center">
            <div className="col-md-4 text-center mb-4 mb-md-0">
              <img src="/1596863205435.jpg" alt="Naman Mishra" className="profile-pic img-fluid rounded-circle shadow-lg" />
            </div>
            <div className="col-md-8 text-center text-md-start">
              <p className="lead">Hi, I'm Naman - a self-taught full-stack engineer who ships resilient systems even when handed impossible constraints.</p>

              <p>
                With <strong>5+ years of experience</strong>, I specialize in turning ambiguous, high-pressure requests into secure, maintainable solutions - whether it's a serverless PDF pipeline processing 1M+ documents, a privacy-first Android health app built in 3 days with zero Kotlin experience, or unblocking legacy migrations led by non-technical stakeholders.
              </p>

              <p>
                I believe software should serve users - not force users to serve broken software. That's why I prioritize <strong>performance, accessibility, and offline resilience</strong> even when clients don't ask for it.
              </p>

              <div className="d-flex flex-wrap justify-content-center justify-content-md-start gap-2 mt-4">
                {["Self-Taught Engineer", "Serverless Architect", "Privacy-First", "Legacy Modernizer", "Open Source Contributor"].map((tag) => (
                  <span key={tag} className="badge bg-primary-subtle text-primary-emphasis rounded-pill px-3 py-2">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-4 mt-4">
                <span className="d-flex align-items-center gap-2">
                  <MapPin size={16} /> New Delhi, India
                </span>
                <span className="d-flex align-items-center gap-2">
                  🎓 B. Tech. Electronics & Communication Engineering
                </span>
              </div>

              <a href="/Resume.pdf" download="Naman_Mishra_Resume.pdf" className="btn btn-primary mt-4">
                <Download size={18} className="me-2" /> Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- EXPERIENCE ---------------- */}
      <section id="experience" className="py-5 bg-body-tertiary">
        <div className="container">
          <motion.h2 className="text-center fw-bold mb-5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Experience
          </motion.h2>
          <div className="row justify-content-center">
            <div className="col-md-8">
              {experiences.map((exp, index) => (
                <motion.div key={index} className="card shadow-sm mb-4" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: index * 0.1 }} viewport={{ once: true }}>
                  <div className="card-body">
                    <div className="d-flex flex-column flex-md-row justify-content-between">
                      <h3 className="card-title h5 fw-bold">{exp.role}</h3>
                      <span className="text-primary fw-medium">{exp.period}</span>
                    </div>
                    <p className="text-primary fw-medium mb-2">{exp.company}</p>
                    <p className="text-muted mb-3">{exp.location}</p>
                    <ul className="list-unstyled">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="d-flex">
                          <span className="text-primary me-2">•</span>
                          <span dangerouslySetInnerHTML={{ __html: bullet }}></span>
                        </li>
                      ))}
                    </ul>
                    <div className="d-flex flex-wrap gap-2">
                      {exp.tech.map((tech, i) => (
                        <span key={i} className="badge bg-secondary-subtle text-secondary-emphasis rounded-pill px-2 py-1">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- PROJECTS ---------------- */}
      <section id="projects" className="py-5">
        <div className="container">
          <motion.h2 className="text-center fw-bold mb-5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Featured Projects
          </motion.h2>
          <div className="row">
            {projects.map((project, index) => (
              <motion.div key={index} className="col-md-6 mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <div className="card shadow-sm h-100">
                  <div className="card-body">
                    <h3 className="card-title h5 fw-bold">{project.title}</h3>
                    <p className="text-primary mb-2"><em>{project.tagline}</em></p>
                    <p className="card-text text-muted" dangerouslySetInnerHTML={{ __html: project.description }}></p>
                    <div className="d-flex flex-wrap gap-2 mb-3">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="badge bg-success-subtle text-success-emphasis rounded-pill px-2 py-1">
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.links.length > 0 && (
                      <div className="d-flex flex-wrap gap-3">
                        {project.links.map((link, i) => (
                          <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-primary">
                            {link.name} <ExternalLink size={12} />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- SKILLS ---------------- */}
      <section id="skills" className="py-5 bg-body-tertiary">
        <div className="container">
          <motion.h2 className="text-center fw-bold mb-5" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Skills & Technologies
          </motion.h2>
          <div className="row">
            {Object.entries(skills).map(([category, items]) => (
              <motion.div key={category} className="col-md-6 mb-4" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h3 className="fw-bold text-primary">{category}</h3>
                <div className="d-flex flex-wrap gap-2">
                  {items.map((item, i) => (
                    <span key={i} className="badge bg-light text-dark border border-secondary-subtle px-3 py-2">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- CONTACT ---------------- */}
      <section id="contact" className="py-5">
        <div className="container text-center">
          <motion.h2 className="fw-bold mb-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            Get In Touch
          </motion.h2>
          <div className="mx-auto" style={{ maxWidth: "600px" }}>
            <p className="lead">I'm happily employed full-time, but I'm available for freelance remote projects. Let's build something great together.</p>
            <div className="d-flex flex-wrap justify-content-center gap-4 mt-4">
              <a href="mailto:namanmishraec1045@gmail.com" className="text-primary d-flex align-items-center gap-2">
                <Mail size={20} /> namanmishraec1045@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/naman-m-8575a6144/" target="_blank" rel="noopener noreferrer" className="text-primary d-flex align-items-center gap-2">
                <Linkedin size={20} /> LinkedIn
              </a>
              <a href="https://github.com/Sadja18" target="_blank" rel="noopener noreferrer" className="text-primary d-flex align-items-center gap-2">
                <Github size={20} /> GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="py-4 border-top bg-body-tertiary">
        <div className="container text-center text-muted">
          <p>© 2025 Naman Mishra. All rights reserved.</p>
          <p className="mt-2">Built with React, Bootstrap, and Framer Motion</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
