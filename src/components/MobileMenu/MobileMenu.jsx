import { menuItems } from "../../data/menuData";

function MobileMenu({ isOpen, closeMenu }) {
  return (
    <>
      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <div className="mobile-menu-header">
          <button className="mobile-menu-close-icon" onClick={closeMenu}>✕</button>
        </div>

        <ul className="mobile-menu-list">
          {menuItems.map((item, index) => (
            <li key={index}>
              <a href={item.url}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>

      {isOpen && <div className="mobile-overlay" onClick={closeMenu} />}
    </>
  );
}

export default MobileMenu;
