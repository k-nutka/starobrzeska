import { TabStyle } from "../../components/TabStyle/TabStyle";
import styles from "./Apartment.module.css";

export function Apartment() {
  return (
    <TabStyle>
      <h1>Mieszkanie</h1>
      <div className={styles.apartment_basicInfo}></div>
    </TabStyle>
  );
}
