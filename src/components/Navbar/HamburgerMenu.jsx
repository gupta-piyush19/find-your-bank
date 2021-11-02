import { Twirl as Hamburger } from "hamburger-react";
import ThemeToggler from "../ThemeToggler";

const HamburgerMenu = ({ viewMenu, setViewMenu }) => {
  return (
    <div className="md:hidden flex items-center gap-2">
      <ThemeToggler />
      <Hamburger toggled={viewMenu} toggle={setViewMenu} />
    </div>
  );
};

export default HamburgerMenu;
