import { useEffect, useRef, useState } from "react";
import styles from "./about.module.css";

export default function About() {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className={`${styles.about} ${show ? styles.show : styles.hide}`}
    >
      <div className={styles.heading}>
        <h2>
           <span> About Me</span>
        </h2>

        <div className={styles.line}></div>
      </div>

      <div className={styles.content}>
        <p>
          I'm a Computer Science student and Frontend Developer passionate
          about building modern, responsive and user-friendly web
          applications.
        </p>

        <p>
          Through personal projects, academic work and internship
          experience, I have developed scalable applications, solved
          real-world problems and collaborated with development teams.
          I enjoy turning ideas into functional digital products while
          constantly improving my skills.
        </p>
      </div>

      <div className={styles.stats}>
        <div>
          <h3>15+</h3>
          <p>Projects Built</p>
        </div>

        <div>
          <h3>React</h3>
          <p>Main Framework</p>
        </div>

        <div>
          <h3>Open</h3>
          <p>To Opportunities</p>
        </div>
      </div>
    </section>
  );
}