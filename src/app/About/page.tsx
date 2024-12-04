import Link from "next/link";
import styles from "./page.module.css";

export default function About() {
  return (
    <div>
      <h2 className={styles["title-about"]}>Hire Me For</h2>
      <p className={styles["desc-about"]}>
        I bring a strong technical foundation, proven problem-solving skills, and a proactive attitude to deliver quality results. With a passion for continuous learning and teamwork, I am committed to contributing effectively and driving success for your organization.
      </p>
      <Link href="/" className={styles["link-about"]}>
        Go Back to Home
      </Link>
    </div>
  );
}