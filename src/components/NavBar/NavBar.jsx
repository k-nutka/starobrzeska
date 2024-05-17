import styles from "./NavBar.module.css";

import { NavLink } from "react-router-dom";
import { useRef } from "react";
import { MENUCATEGORIES } from "../../constants/categories";
import { FaBars, FaTimes } from "react-icons/fa";
export function NavBar() {
  const navRef = useRef();
  const showNavBar = () => {
    navRef.current.classList.toggle(styles["responsive_nav"]);
  };
  return (
    <>
      <div ref={navRef} className={styles.mainMenu}>
        <a className={styles.mainLink} href="/#o-inwestycji">
          O inwestycji
        </a>
        {MENUCATEGORIES.map((category) => {
          return (
            <NavLink
              className={styles.mainLink}
              key={category.path}
              to={category.path}
              onClick={showNavBar}
            >
              {category.categoryName}
            </NavLink>
          );
        })}
        <button
          className={`${styles.nav_btn} ${styles.nav_close_btn}`}
          onClick={showNavBar}
        >
          <FaTimes />
        </button>
      </div>
      <button className={styles.nav_btn} onClick={showNavBar}>
        <FaBars />
      </button>
    </>
  );
}
