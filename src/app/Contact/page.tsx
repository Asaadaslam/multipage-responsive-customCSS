import styles from "./page.module.css";
import Link from "next/link";

export default function Contact() {
  return (
    <div className={styles["contact-container"]}>
      <h1 className={styles["contact-title"]}>Contact Us</h1>
      <p className={styles["contact-desc"]}>
        We'd love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out.
      </p>
      <form className={styles["contact-form"]}>
        <input
          type="text"
          placeholder="Your Name"
          className={styles["form-input"]}
        />
        <input
          type="email"
          placeholder="Your Email"
          className={styles["form-input"]}
        />
        <textarea
          placeholder="Your Message"
          className={styles["form-textarea"]}
        ></textarea>
        <button type="submit" className={styles["form-button"]}>
          Submit
        </button>
      </form>
      <Link href="/" className={styles["back-link"]}>
        Go Back to Home
      </Link>
    </div>
  );
}
