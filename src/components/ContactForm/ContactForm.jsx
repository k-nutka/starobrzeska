import { useState } from "react";
import styles from "./ContactForm.module.css";
import validator from "validator";

export function ContactForm() {
  const [message, setMessage] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState("");

  // const apiKey = process.env.REACT_APP_EMAIL_API_KEY;

  const validateEmail = (e) => {
    e.preventDefault();
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setMessage("");
    } else {
      setMessage("Wpisz poprawny adres email");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const emailMessage = formData.get("emailMessage");

    if (email && emailMessage) {
      const dto = {
        email: email,
        emialMessage: emailMessage,
      };

      try {
        const response = await fetch("https://api.starobrzeskabrzeg.pl", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dto),
        });

        const result = await response.json();
        if (result.ok) {
          setFormMessage("Wiadomość została wysłana");
        } else {
          setFormMessage(`Błąd: ${result.message}`);
        }
      } catch (error) {
        setFormMessage("Błąd podczas wysyłania wiadomości");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className={styles.contactFormDiv}>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
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
            name="emailMessage"
            className={styles.contactForm_textarea}
          ></textarea>
        </div>
        <p className={styles.errorMessage}>{message}</p>
        <div className={styles.btn_container}>
          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.contactForm_button}
          >
            Wyślij
          </button>
        </div>
        {formMessage && <p className={styles.formMessage}></p>}
      </form>
    </div>
  );
}
