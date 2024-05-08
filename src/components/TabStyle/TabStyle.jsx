import styles from "./TabStyle.module.css";
export function TabStyle({ children }) {
  return <div className={styles.tabStyle}>{children}</div>;
}
