import styles from "./Logo.module.css";
import { Link } from "react-router-dom";
import LOGO from "/logo.png";

export function Logo() {
  return (
    <Link to={"/"}>
      <img className={styles.logo} src={LOGO}></img>
    </Link>
  );
}
