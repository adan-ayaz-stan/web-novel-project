import styles from "../../styles/loader.module.css";

export default function Loading() {
  return (
    <div className="w-full flex gap-4 justify-center items-center">
      <div className={styles.loader}>
        <svg viewBox="0 0 80 80">
          <circle id="test" cx="40" cy="40" r="32"></circle>
        </svg>
      </div>

      <div className={`${styles.loader} ${styles.triangle}`}>
        <svg viewBox="0 0 86 80">
          <polygon points="43 8 79 72 7 72"></polygon>
        </svg>
      </div>

      <div className={styles.loader}>
        <svg viewBox="0 0 80 80">
          <rect x="8" y="8" width="64" height="64"></rect>
        </svg>
      </div>
    </div>
  );
}
