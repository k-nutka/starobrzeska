import styles from "./ChooseApartment.module.css";
import { TabStyle } from "../../components/TabStyle/TabStyle";
import { useRef, useEffect } from "react";
import BULDING from "/building.png";
import { Link } from "react-router-dom";

export function ChooseApartment() {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const img = new Image();
    img.src = BULDING;
    img.onload = () => {
      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;
      const viewBox = `0 0 ${imgWidth} ${imgHeight}`;
      svg.setAttribute("viewBox", viewBox);
    };
  }, []);

  return (
    <TabStyle>
      <h1>Wybierz piętro </h1>
      <div className={styles.buldingContainer}>
        <svg ref={svgRef} className={styles.buildingSvg}>
          <image href={BULDING} x="0" y="0" width="100%" />
          <Link to={"/wybierz-mieszkanie/pietro/0"}>
            <path
              className={styles.buildingArea}
              d="M81,519 L1144,488 L1141,574 L243,762 L84,627 Z"
            />
          </Link>
          <Link to={"/wybierz-mieszkanie/pietro/1"}>
            <path
              className={styles.buildingArea}
              d="M83,398 L1144,408 L1141,487 L83,520 L18,476 Z"
            />
          </Link>
          <Link to={"/wybierz-mieszkanie/pietro/2"}>
            <path
              className={styles.buildingArea}
              d="M235,241 L1142,337 L1141,407 L84,395 L4,397 L81,305 Z"
            />
          </Link>
          <Link to={"/wybierz-mieszkanie/pietro/3"}>
            <path
              className={styles.buildingArea}
              d="M73,187 L230,17 L1143,262 L1144,339 L237,240 L81,307 L-1,305 Z"
            />
          </Link>
        </svg>
      </div>
    </TabStyle>
  );
}
