import styles from "./ApartmentPhoto.module.css";

export function ApartmentPhoto() {
  return (
    <div className={styles.ApartmentPhoto_img}>
      <img src={"/rzut.jpg"}></img>
    </div>
  );
}
