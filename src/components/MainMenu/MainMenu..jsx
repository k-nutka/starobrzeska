import styles from "./MainMenu.module.css";
import { NavLink } from "react-router-dom";
import { MENUCATEGORIES } from "../../constants/categories";
export function MainMenu() {
  return (
    <>
      <div className={styles.mainMenu}>
        {MENUCATEGORIES.map((category) => {
          return (
            <NavLink
              className={styles.mainLink}
              key={category.path}
              to={category.path}
            >
              {category.categoryName}
            </NavLink>
          );
        })}
      </div>
    </>
  );
}
