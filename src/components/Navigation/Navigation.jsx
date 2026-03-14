import { useState } from "react";
import DropdownMenu from "./DropdownMenu";
import { menuItems } from "../../data/menuData";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav className="main-navigation">
        <ul className="nav-list">
          {menuItems.map((item, index) => {
            if (index === 0) {
              return (
                <li key={index} className="nav-item">
                  <button className="nav-button" onClick={toggleMenu}>
                    {item.label}
                    <span className="nav-arrow">▼</span>
                  </button>

                  <DropdownMenu isOpen={isOpen} />
                </li>
              );
            }

            return (
              <li key={index} className="nav-item">
                <a href={item.url}>{item.label}</a>
              </li>
            );
          })}
        </ul>
      </nav>

      {isOpen && <div className="dropdown-overlay" onClick={closeMenu} />}
    </>
  );
}

export default Navigation;
