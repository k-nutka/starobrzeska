import styles from "./ContactInfo.module.css";

import EMAIL_ICON from "/email.svg";

export function ContactInfo() {
  return (
    <div className={styles.contactInfoDiv}>
      <p>STAROBRZESKA Sp z o.o.</p>
      <p className={styles.contactInfoText}>ul. Starobrzeska 30L</p>
      <p className={styles.contactInfoText}>49-300 Brzeg</p>

      <div className={styles.contactInfo_link}>
        <img src={EMAIL_ICON} className={styles.contactInfo_icon} />
        <p className={styles.contactInfoText}>
          {" "}
          <a href="mailto:kontakt@starobrzeskabrzeg.pl">
            kontakt@starobrzeskabrzeg.pl
          </a>
        </p>
      </div>
    </div>
  );
}
