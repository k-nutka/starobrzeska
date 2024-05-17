import styles from "./ContactInfo.module.css";
import PHONE_ICON from "../../assets/phone.svg";
import EMAIL_ICON from "../../assets/email.svg";

export function ContactInfo() {
  return (
    <div className={styles.contactInfoDiv}>
      <p>STAROBRZESKA Sp z o.o.</p>
      <p className={styles.contactInfoText}>ul. Starobrzeska 7/7</p>
      <p className={styles.contactInfoText}>49-300 Brzeg</p>
      <div className={styles.contactInfo_link}>
        <img src={PHONE_ICON} className={styles.contactInfo_icon} />
        <p className={styles.contactInfoText}>
          {""}
          <a href="tel:777777778"> +48 777 777 777</a>
        </p>
      </div>
      <div className={styles.contactInfo_link}>
        <img src={EMAIL_ICON} className={styles.contactInfo_icon} />
        <p className={styles.contactInfoText}>
          {" "}
          <a href="mailto:starobrzeska-brzeg@kontakt.pl">
            starobrzeska-brzeg@kontakt.pl
          </a>
        </p>
      </div>
    </div>
  );
}
