import { useEffect, useRef, useState } from "react";
import styles from "./experience.module.css";

export default function Experience() {
  const [show, setShow] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className={`${styles.experienceSection} ${
        show ? styles.show : styles.hide
      }`}
    >
      <div className={styles.heading}>
        <h2>
          <span>Professional Experience</span>
        </h2>

        <div className={styles.line}></div>
      </div>

      <div className={styles.card}>
        <div className={styles.header}>
          <div className={styles.head}>
            <h3>Frontend Developer Intern (SIWES)</h3>

            <p className={styles.company}>
              SPay Business • Internship
            </p>
          </div>

          <span className={styles.duration}>
            January 2026 – June 2026
          </span>
        </div>

        <p className={styles.description}>
          During my internship, I collaborated with a development team to
          build, improve and maintain modern web applications while gaining
          hands-on experience with industry-standard development practices.
        </p>

        <div className={styles.techStack}>
          <span>React</span>
          <span>TypeScript</span>
          <span>Redux</span>
          <span>Redux Saga</span>
          <span>Vite</span>
          <span>Git</span>
        </div>

        <ul className={styles.responsibilities}>
          <li>
            Implemented merchant invitation workflows to improve the onboarding
            process.
          </li>

          <li>
            Developed secure Two-Factor Authentication (2FA) user interfaces.
          </li>

          <li>
            Built frontend features using React, TypeScript and Redux.
          </li>

          <li>
            Integrated frontend applications with backend REST APIs.
          </li>

          <li>
            Resolved production bugs and improved application stability.
          </li>

          <li>
            Collaborated with developers using Git and Pull Requests.
          </li>

          <li>
            Assisted in migrating applications from Create React App (CRA) to
            Vite.
          </li>
        </ul>
      </div>
    </section>
  );
}