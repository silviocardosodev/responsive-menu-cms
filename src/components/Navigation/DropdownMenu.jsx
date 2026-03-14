import { dropdownMenuData } from "../../data/dropdownMenuData";

function DropdownMenu({ isOpen }) {
  return (
    <div className={`dropdown-menu ${isOpen ? "open" : ""}`}>
      <div className="dropdown-container">
        {dropdownMenuData.map((item, index) => (
          <a key={index} href={item.url} className="dropdown-item">
            <img src={item.image} alt={item.label} />

            <span>{item.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default DropdownMenu;
