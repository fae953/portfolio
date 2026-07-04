import { useEffect, useRef, useState } from "react";
import styles from "./skills.module.css";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "💻",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Tools",
    icon: "🛠️",
    skills: ["Git", "Vercel", "Vite", "Postman"],
  },
  {
    title: "Currently Learning",
    icon: "📚",
    skills: ["Node.js", "MongoDB"],
  },
];

export default function Skills() {
  const [show, setShow] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);

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

  useEffect(() => {
    if (!show) return;

    skillCategories.forEach((_, index) => {
      setTimeout(() => {
        setVisibleCards((prev) => [...prev, index]);
      }, index * 200);
    });
  }, [show]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={styles.skillsSection}
    >
      <div className={styles.heading}>
        <h2>
          <span>Technical Skills</span>
        </h2>

        <div className={styles.line}></div>
      </div>

      <div className={styles.skills}>
        {skillCategories.map((category, index) => (
          <div
            key={category.title}
            className={`${styles.card} ${
              visibleCards.includes(index)
                ? styles.show
                : styles.hide
            }`}
          >
            <div className={styles.cardHeader}>
              <span className={styles.icon}>
                {category.icon}
              </span>

              <h3 className={styles.title}>{category.title}</h3>
            </div>

            <div className={styles.pills}>
              {category.skills.map((skill) => (
                <span key={skill} className={styles.pill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}