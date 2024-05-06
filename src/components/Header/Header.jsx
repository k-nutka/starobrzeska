import HEADER_IMG from "../../assets/header.jpg";
import styles from "./Header.module.css";

export function Header() {
  return (
    <div className={styles.header}>
      <img className={styles.header_photo} src={HEADER_IMG}></img>
    </div>
  );
}
