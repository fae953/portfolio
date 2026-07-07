import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import styles from "./hero.module.css";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className={styles.hero} id="hero">
      <div
        className={`${styles.content} ${loaded ? styles.show : styles.hide}`}
      >
        <p className={styles.welcome}>WELCOME TO MY PORTFOLIO</p>

        <h1 className={styles.bigText}>
          Hi, I'm <span>Akanni Fathia</span> 👋
        </h1>

        <p className={styles.smallText}>
          I am a Frontend Developer and a Computer Science Student at Babcock
          University.
          <br />I build responsive and scalable web applications using React,
          TypeScript and Redux.
        </p>

        <div className={styles.buttons}>
          <a href="#project" className={styles.primaryBtn}>
            View My Work
            <ArrowRight size={18} />
          </a>

          <a href="#contact" className={styles.secondaryBtn}>
            Let's Connect
          </a>
        </div>
      </div>

      <div
        className={`${styles.imageContainer} ${
          loaded ? styles.show : styles.hide
        }`}
      >
        <img src="third.jpeg" className={styles.pic} alt="Fathia" />
      </div>
    </section>
  );
}
