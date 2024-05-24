import styles from "./ChooseBtn.module.css";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from "../../api/ScrollToTop";
export function ChooseBtn({ children }) {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    ScrollToTop();
    navigate("/wybierz-mieszkanie");
  };
  return (
    <button onClick={handleButtonClick} className={styles.chooseBtn}>
      {children}
    </button>
  );
}
