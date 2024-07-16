import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./CookieConsent.module.css";

const CookieConsent = () => {
  const [consent, setConsent] = useState(null);

  useEffect(() => {
    const savedConsent = localStorage.getItem("cookieConsent");
    if (savedConsent !== null) {
      setConsent(JSON.parse(savedConsent));
    }
  }, []);

  const handleConsent = (value) => {
    setConsent(value);
    localStorage.setItem("cookieConsent", JSON.stringify(value));
  };

  if (consent === true) {
    return null; // Jeśli zgoda została wyrażona, nie wyświetlaj komponentu
  }

  return (
    <div className={styles.cookie_consent}>
      <p>
        Używamy plików cookies, aby poprawić jakość korzystania z naszej strony.
        Dalsze korzystanie ze strony oznacza, że zgadzasz się na ich użycie.
      </p>
      <button onClick={() => handleConsent(true)}>Zgadzam się</button>
      <Link to={"/polityka-prywatnosci"}>
        <button>Polityka prywatności</button>
      </Link>
    </div>
  );
};

export default CookieConsent;
