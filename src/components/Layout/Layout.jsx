import { Footer } from "../Footer/Footer";
import { Logo } from "../Logo/Logo";
import { MainContent } from "../MainContent/MainContent";
import { MainMenu } from "../MainMenu/MainMenu.";
import { TopBar } from "../TopBar/TopBar";

export function Layout() {
  return (
    <>
      <MainContent>
        <TopBar>
          <Logo />
          <MainMenu />
        </TopBar>
      </MainContent>
      <Footer />
    </>
  );
}
