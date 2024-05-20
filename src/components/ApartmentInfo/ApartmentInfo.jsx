import styles from "./ApartmentInfo.module.css";
export function ApartmentInfo() {
  return (
    <div className={styles.apartmentInfo_container}>
      <p className={styles.apartment_area}>56.70</p>
      <p className={styles.roomsNumber}>4</p>
      <p className={styles.floorsNumber}>0</p>
      <p className={styles.state}>Wolny</p>
    </div>
  );
}
