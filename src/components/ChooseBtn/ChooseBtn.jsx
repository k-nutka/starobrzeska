import styles from "./ChooseBtn.module.css";
export function ChooseBtn({ children }) {
  return <button className={styles.chooseBtn}>{children}</button>;
}
