import { About } from "../../components/About/About";
import { Localization } from "../../components/Localization/Localization";
import { MainSlider } from "../../components/MainSlider/MainSlider";
export function Home() {
  return (
    <>
      <MainSlider />

      <About />
      <Localization />
    </>
  );
}
