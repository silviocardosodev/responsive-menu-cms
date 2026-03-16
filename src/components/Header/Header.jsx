import { useState } from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import HeaderLinks from "./HeaderLinks";
import Hamburger from "./Hamburger";
import MobileMenu from "../MobileMenu/MobileMenu";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Hamburger toggleMenu={toggleMenu} />
        <Logo />
        <SearchBar />
        <HeaderLinks />        
      </div>

      <MobileMenu isOpen={menuOpen} closeMenu={closeMenu} />
    </header>
  );
}

export default Header;
