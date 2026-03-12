import Logo from "./Logo"
import SearchBar from "./SearchBar"
import HeaderLinks from "./HeaderLinks"

function Header(){

  return (

    <header className="header">

      <div className="header-container">

        <Logo />

        <SearchBar />

        <HeaderLinks />

      </div>

    </header>

  )

}

export default Header