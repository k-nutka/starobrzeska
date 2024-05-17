import styles from "./Contact.module.css";
import { ContactForm } from "../../components/ContactForm/ContactForm";
import { ContactInfo } from "../../components/ContactInfo/ContactInfo";
import { TabStyle } from "../../components/TabStyle/TabStyle";

export function Contact() {
  return (
    <TabStyle>
      <h1>Kontakt</h1>
      <div className={styles.contact_container}>
        <ContactInfo />
        <ContactForm />
      </div>
    </TabStyle>
  );
}
