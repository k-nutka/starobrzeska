import { Footer } from "../Footer/Footer";
import { Logo } from "../Logo/Logo";
import { MainContent } from "../MainContent/MainContent";

import { NavBar } from "../NavBar/NavBar";
import { TopBar } from "../TopBar/TopBar";

export function Layout() {
  return (
    <>
      <MainContent>
        <TopBar>
          <Logo />
          <NavBar />
        </TopBar>
      </MainContent>
      <Footer />
    </>
  );
}
