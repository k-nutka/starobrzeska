import styles from "./MainAddition.module.css";
import LOGO from "/logo.png";
export function MainAddition() {
  return (
    <div className={styles.mainAddition_container}>
      <div className={styles.mainAddition_box}>
        <div>
          <img className={styles.mainAddition_logo} src={LOGO}></img>
        </div>
        <div className={styles.mainAddition_text}>
          <p className={styles.mainText}>Inwestycja Starobrzeska</p>
          <p className={styles.downText}>Wybierz mieszkanie dla siebie!</p>
        </div>
      </div>
    </div>
  );
}
