import styles from "./contact.module.css";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.heading}>
        <h2>
          <span>Get In Touch</span>
        </h2>

        <div className={styles.line}></div>

        <p>
          I'm always interested in new opportunities and exciting projects.
          Whether you have a question, want to collaborate, or simply want to
          say hello, I'd love to hear from you.
        </p>
      </div>

      <div className={styles.container}>
        {/* Contact Card */}

        <div className={styles.card}>
          <h3>Contact Information</h3>

          <div className={styles.info}>
            <div className={styles.item}>
              <Mail size={30} />

              <div>
                <a href="mailto:akannif003@gmail.com">akannif003@gmail.com</a>
              </div>
            </div>

            <div className={styles.item}>
              <Phone size={30} />

              <div>
                <a href="tel:+2349121991264">+234 912 199 1264</a>
              </div>
            </div>

            <div className={styles.item}>
              <MapPin size={30} />

              <div>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Card */}

        <div className={styles.card}>
          <h3>Let's Connect</h3>

          <p className={styles.text}>
            Feel free to connect with me on GitHub or LinkedIn. I'm always open
            to learning, collaborating and building amazing projects.
          </p>

          <div className={styles.socials}>
            <a
              href="https://github.com/fae953"
              target="_blank"
              rel="noreferrer"
              className={styles.socialIcon}
            >
              <FaGithub size={28} />
            </a>

            <a
              href="https://www.linkedin.com/in/akanni-fathia-57805925b/"
              target="_blank"
              rel="noreferrer"
              className={styles.socialIcon}
            >
              <FaLinkedin size={28} />
            </a>
          </div>

          <a
            href=""
            className={styles.resume}
            // download
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}
