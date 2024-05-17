import styles from "./ChooseApartment.module.css";
import { TabStyle } from "../../components/TabStyle/TabStyle";
import { Bulding } from "../../components/Bulding/Bulding";
import { FloorPlan } from "../../components/FloorPlan/FloorPlan";
import { useState } from "react";

export function ChooseApartment() {
  const [choosenFloor, setChoosenFloor] = useState(0);
  return (
    <TabStyle>
      <h1>Wybierz mieszkanie </h1>
      <div className={styles.chooseApartment_container}>
        <Bulding setChoosenFloor={setChoosenFloor} />
        <FloorPlan choosenFloor={choosenFloor} />
      </div>
    </TabStyle>
  );
}
