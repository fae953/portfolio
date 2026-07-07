import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import styles from "./project.module.css";

const projects = [
  {
    title: "Portfolio",
    image: "/portfolio.png",
    description:
      "A modern and responsive portfolio showcasing projects, skills and experience with smooth animations and a clean user interface.",
    tech: ["React", "CSS Modules", "JavaScript"],
    live: "https://portfolio-gray-psi-b8qg75980p.vercel.app/",
  },

  {
    title: "Task Management Application",
    image: "/todo.png",
    description:
      "A responsive task management application that allows users to create, update, organize and manage daily tasks efficiently.",
    tech: ["React", "Redux", "TypeScript"],
    live: "https://todoapp-fpar.vercel.app/",
  },
  {
    title: "Customized Birthday Celebration Website",
    image: "/birthday.png",
    description:
      "A custom-designed birthday website built as a personalized digital gift. Features responsive layouts, smooth animations, interactive sections, and a modern user interface tailored to the recipient.",
    tech: ["React", "Redux", "TypeScript"],
    // live: "https://birthday-site-taupe-eta.vercel.app/",
  },
];

export default function Project() {
  const [show, setShow] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="project" ref={sectionRef} className={styles.projectsSection}>
      <div className={styles.heading}>
        <h2>
          <span>My Projects</span>
        </h2>

        <div className={styles.line}></div>
      </div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <div
            key={project.title}
            className={`${styles.card} ${show ? styles.show : styles.hide}`}
            style={{
              transitionDelay: `${index * 150}ms`,
            }}
          >
            <div className={styles.imageContainer}>
              <img
                src={project.image}
                alt={project.title}
                className={styles.image}
              />
            </div>

            <div className={styles.content}>
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className={styles.tech}>
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className={styles.buttons}>
                {/* <a href={project.github} target="_blank" rel="noreferrer">
                  <Github size={18} />
                  GitHub
                </a> */}

                <a href={project.live} target="_blank" rel="noreferrer">
                  Live Demo
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
