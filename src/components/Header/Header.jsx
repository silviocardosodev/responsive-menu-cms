import Logo from "./Logo"
import SearchBar from "./SearchBar"
import HeaderLinks from "./HeaderLinks"
import Hamburger from "./Hamburger"

function Header(){

  return (

    <header className="header">

      <div className="header-container">

        <Hamburger />

        <Logo />

        <SearchBar />        

        <HeaderLinks />

      </div>      

    </header>

  )

}

export default Header