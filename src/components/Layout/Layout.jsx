import { Outlet } from "react-router-dom";
import { Footer } from "../Footer/Footer";
import { Logo } from "../Logo/Logo";
import { MainContent } from "../MainContent/MainContent";

import { NavBar } from "../NavBar/NavBar";
import { TopBar } from "../TopBar/TopBar";
import CookieConsent from "../CookieConsent/CookieConsent";

export function Layout() {
  return (
    <>
      <MainContent>
        <TopBar>
          <Logo />
          <NavBar />
        </TopBar>
        <Outlet />
      </MainContent>
      <CookieConsent />

      <Footer />
    </>
  );
}
