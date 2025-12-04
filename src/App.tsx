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
  const projects: Project[] = [
    {
      title: "PDF Generation & Document Automation System",
      description:
        'Engineered a serverless pipeline on Google Cloud that processes <span class="highlight-metric">1M+ personalized PDFs</span> in <span class="highlight-metric">under 50 minutes</span> for physical mail campaigns.',
      tech: ["Python", "GCP", "Cloud Functions", "BigQuery", "Flask", "Docker"],
      links: [],
    },
    {
      title: "Android Health Monitoring App (ContextMonitoring)",
      description: "In a high-pressure situation, I built this native Android app from scratch in just 3 days, despite having no prior experience with Kotlin or Jetpack Compose. When a client suddenly demanded a native version of a Flutter app with a 5-day deadline, I rapidly learned the new stack and recreated the entire UI and boilerplate. This privacy-first app captures multimodal health data—heart rate via facial video, respiratory audio, and symptom logging—all stored locally on the device.",
      tech: ["Kotlin", "Jetpack Compose", "CameraX", "SQLite", "Android"],
      links: [{ name: "GitHub", url: "https://github.com/Sadja18/context-monitoring" }],
    },
    {
      title: "Blockchain Wallet (GoPay)",
      description:
        "Full-stack Ethereum wallet with Node.js backend and Flutter frontend. Supports wallet creation, balance checks, and Sepolia testnet transactions.",
      tech: ["Node.js", "Express", "PostgreSQL", "Ethers.js", "Flutter", "JWT"],
      links: [
        { name: "Backend", url: "https://github.com/Sadja18/block_chain_wallet_backend" },
        { name: "Mobile", url: "https://github.com/Sadja18/block_chain_wallet_mobile" },
      ],
    },
    {
      title: "Sadja Progress Stepper",
      description:
        "Customizable, scrollable Flutter stepper widget supporting linear/non-linear navigation. Published on pub.dev for the Flutter community.",
      tech: ["Flutter", "Dart", "Open Source"],
      links: [
        { name: "pub.dev", url: "https://pub.dev/packages/sadja_progress_stepper" },
        { name: "GitHub", url: "https://github.com/Sadja18/sadja_progress_stepper" },
      ],
    },
    {
      title: "Face Analyzer",
      description:
        "Deep learning model to estimate age, gender, race, and skin tone from facial images—designed for a virtual trial room application.",
      tech: ["Python", "Computer Vision", "AI/ML"],
      links: [{ name: "GitHub", url: "https://github.com/Sadja18/face_analyzer" }],
    },
    {
      title: "IOC Intel Tools",
      description:
        "Linux-based network reconnaissance toolkit that extracts IPs and domains from local devices and outputs SIEM-ready JSON.",
      tech: ["Linux", "Networking", "Security", "SIEM"],
      links: [{ name: "GitHub", url: "https://github.com/Sadja18/ioc-intel-tools" }],
    },
    {
      title: "Improved – VS Code Theme",
      description:
        "Accessible, color-blind-friendly syntax theme to reduce eye strain and improve developer ergonomics.",
      tech: ["VS Code", "Accessibility", "Open Source"],
      links: [
        {
          name: "Marketplace",
          url: "https://marketplace.visualstudio.com/items?itemName=Sadja.Improved",
        },
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
  ];

  // ---------- Skills ----------
  const skills: Skills = {
    Languages: ["Python", "JavaScript", "Dart", "PHP"],
    Frontend: ["React", "Angular", "Flutter", "Ionic", "jQuery"],
    Backend: ["FastAPI", "Django", "Flask", "Express.js"],
    Cloud: ["Firebase", "Google AppScript","Google Cloud (Cloud Run, Functions, BigQuery, Storage)", "Docker", "Serverless"],
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
      <section id="hero" className="py-5 text-center">
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
      </section>

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
              <p className="lead">Hi, I'm Naman, a Full Stack Developer with a passion for creating impactful solutions.</p>
              <p>
                I have 5+ years of experience specializing in cloud-native applications, mobile development (Flutter/Ionic), and data-driven platforms. I'm passionate about writing clean, secure code and delivering projects that make a real-world difference.
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
