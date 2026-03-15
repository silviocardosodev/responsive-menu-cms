import searchIcon from "../../assets/icons/magnifying-glass-solid-full.svg"

function SearchBar(){

  return (

    <div className="search-bar">

      <input
        type="text"
        placeholder="Procure produtos KitchenDev"
      />

      <button>
        <img src={searchIcon} alt="Buscar" />
      </button>

    </div>

  )

}

export default SearchBar