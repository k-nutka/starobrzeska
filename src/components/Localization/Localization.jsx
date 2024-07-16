import styles from "./Localization.module.css";
export function Localization() {
  return (
    <div className={styles.localization_container}>
      <iframe
        className={styles.localization_frame}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.3116373051334!2d17.472823475608237!3d50.8439131589573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4710303b31cb41e7%3A0xfc12276444ef3889!2sStarobrzeska%2030l%2C%2049-305%20Brzeg!5e0!3m2!1spl!2spl!4v1721069654473!5m2!1spl!2spl"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
}
