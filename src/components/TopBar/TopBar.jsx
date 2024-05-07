import { useState } from "react";
import styles from "./TopBar.module.css";
import { useEffect } from "react";

export function TopBar({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${styles.topBar} ${isScrolled ? styles.dark : styles.light}`}
    >
      {children}
    </div>
  );
}
