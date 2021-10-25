import { Twirl as Hamburger } from "hamburger-react";

const HamburgerMenu = ({ viewMenu, setViewMenu }) => {
  return (
    <div className="md:hidden">
      <Hamburger toggled={viewMenu} toggle={setViewMenu} />
    </div>
  );
};

export default HamburgerMenu;
