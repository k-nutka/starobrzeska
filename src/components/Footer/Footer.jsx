import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";
import { MENUCATEGORIES } from "../../constants/categories";
import FB_ICON from "/facebook.svg";
import LOGO from "/logo.png";
export function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.info}>
          <img className={styles.logo} src={LOGO}></img>
        </div>
        <div className={styles.shortMenu}>
          {MENUCATEGORIES.map((category) => {
            return (
              <li key={category.path}>
                <NavLink className={styles.footerLink} to={category.path}>
                  {category.categoryName}
                </NavLink>
              </li>
            );
          })}
        </div>
        <div className={styles.footerContact}>
          <p>Skontaktuj się z nami</p>
          <p>
            <a className={styles.footerLink} href="tel:777777778">
              {" "}
              +48 777 777 777
            </a>
          </p>
          <p>
            <a
              className={styles.footerLink}
              href="mailto:starobrzeska@kontakt.pl"
            >
              starobrzeska@kontakt.pl
            </a>
          </p>
        </div>
        <div className={styles.icons}>
          <NavLink>
            <img className={styles.icon} src={FB_ICON}></img>
          </NavLink>
        </div>
      </div>
      <div className={styles.footerDown}>
        <p className={styles.footerText}>
          &copy;<span>2024</span>
        </p>
      </div>
    </div>
  );
}
