import { useState } from "react";
import styles from "./ContactForm.module.css";
import validator from "validator";

export function ContactForm() {
  const [message, setMessage] = useState("");

  const validateEmail = (e) => {
    e.preventDefault();
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setMessage("");
    } else {
      setMessage("Wpisz poprawny adres email");
    }
  };
  return (
    <div className={styles.contactFormDiv}>
      <form className={styles.contactForm}>
        <div className={styles.contactForm_label}>
          <label htmlFor="name">Imię</label>
          <input
            className={styles.contactForm_input}
            required
            type="text"
            name="name"
          ></input>
        </div>
        <div className={styles.contactForm_label}>
          <label htmlFor="surname">Nazwisko</label>
          <input
            className={styles.contactForm_input}
            required
            type="text"
            name="surnname"
          ></input>
        </div>
        <div className={styles.contactForm_label}>
          <label htmlFor="email">Adres e-mail</label>
          <input
            className={styles.contactForm_input}
            required
            type="text"
            id="userEmail"
            name="email"
            onChange={(e) => validateEmail(e)}
          ></input>
        </div>
        <div className={styles.contactForm_label}>
          <textarea
            rows={10}
            className={styles.contactForm_textarea}
          ></textarea>
        </div>
        <p className={styles.errorMessage}>{message}</p>
        <div className={styles.btn_container}>
          <button className={styles.contactForm_button}>Wyślij</button>
        </div>
      </form>
    </div>
  );
}
