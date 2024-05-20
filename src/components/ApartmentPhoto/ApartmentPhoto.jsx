import styles from "./ApartmentPhoto.module.css";

export function ApartmentPhoto({ floorPlan }) {
  return (
    <div className={styles.apartmentPhoto_container}>
      <img className={styles.apartmentPhoto_img} src={floorPlan}></img>
    </div>
  );
}
