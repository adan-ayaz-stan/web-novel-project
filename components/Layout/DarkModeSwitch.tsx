import { useEffect, useState } from "react";
import styles from "../../styles/darkmode.module.css";
import { useRecoilState } from "recoil";
import { darkMode } from "../../stores/darkmode";

export default function DarkModeSwitch() {
  const [darkModeValue, setDarkModeValue] = useRecoilState(darkMode);
  const [isDarkMode, setDarkMode] = useState(darkModeValue.dark);

  useEffect(() => {
    if (isDarkMode) {
      setDarkModeValue({
        dark: true,
        bgColor: "#222222",
        textPrimary: "#e7e8e2",
        textSecondary: "#eeeeee",
      });
    } else {
      setDarkModeValue({
        dark: false,
        bgColor: "#ffffff",
        textPrimary: "#000000",
        textSecondary: "#a1a1a1",
      });
    }
  }, [isDarkMode]);

  return (
    <div className="relative mt-8 mb-6">
      <div className={styles.toggleWrapper}>
        <input
          type="checkbox"
          onChange={(e) => setDarkMode((value) => !value)}
          checked={darkModeValue.dark}
          className={styles.dn}
          id="dn"
        />
        <label htmlFor="dn" className={styles.toggle}>
          <span className={styles.toggle__handler}>
            <span className={styles.crater + " " + styles["crater--1"]}></span>
            <span className={styles.crater + " " + styles["crater--2"]}></span>
            <span className={styles.crater + " " + styles["crater--3"]}></span>
          </span>
          <span className={styles.star + " " + styles["star--1"]}></span>
          <span className={styles.star + " " + styles["star--2"]}></span>
          <span className={styles.star + " " + styles["star--3"]}></span>
          <span className={styles.star + " " + styles["star--4"]}></span>
          <span className={styles.star + " " + styles["star--5"]}></span>
          <span className={styles.star + " " + styles["star--6"]}></span>
        </label>
      </div>
    </div>
  );
}
