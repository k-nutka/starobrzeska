import { useState } from "react";
import styles from "./ContactForm.module.css";
import validator from "validator";
import ReCAPTCHA from "react-google-recaptcha";

export function ContactForm() {
  const [message, setMessage] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

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
    if (!captchaValue) {
      alert("Uzupełnij CAPTCHA");
      return;
    }

    if (email && emailMessage) {
      const dto = {
        email: email,
        emailMessage: emailMessage,
        captcha: captchaValue,
      };

      try {
        const response = await fetch("https://api.projectpartner.pl", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(dto),
        });

        const result = await response.json();
        if (result.ok) {
          setFormMessage("Wiadomość została wysłana");
          setMessage("Wiadomość została wysłana");
        } else {
          setFormMessage(`Błąd: ${result.message}`);
        }
      } catch (error) {
        setFormMessage("Błąd podczas wysyłania wiadomości");
        setMessage("Błąd podczas wysyłania wiadomości");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className={styles.contactFormDiv}>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
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
        <ReCAPTCHA
          sitekey="6Ley6iQqAAAAAADKEts9Oal3-HDkXYB6TZ5dAd2x
"
          onChange={handleCaptchaChange}
        />
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
