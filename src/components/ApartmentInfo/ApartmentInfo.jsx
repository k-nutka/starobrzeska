import styles from "./ApartmentInfo.module.css";
export function ApartmentInfo({ apartment }) {
  return (
    <div className={styles.apartmentInfo_container}>
      <p className={styles.apartmentInfo_text}>
        Powierzchnia:{" "}
        <span className={styles.apartment_area}>
          {apartment.flatArea} m<sup></sup>2
        </span>
      </p>
      <p className={styles.apartmentInfo_text}>
        Liczba pomieszczeń:{" "}
        <span className={styles.roomsNumber}>{apartment.roomsNumber}</span>
      </p>
      <p className={styles.apartmentInfo_text}>
        Piętro: <span className={styles.floorsNumber}>{apartment.floor}</span>{" "}
      </p>
      <p className={styles.apartmentInfo_text}>
        Status: <span className={styles.status}>{apartment.status}</span>{" "}
      </p>
    </div>
  );
}
