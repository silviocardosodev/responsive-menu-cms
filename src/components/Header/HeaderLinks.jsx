import { headerLinks } from "../../data/headerLinks"

function HeaderLinks(){

  return (

    <div className="header-links">

      {headerLinks.map((link,index)=>(
        <a key={index} href={link.url}>
          {link.label}
        </a>
      ))}

    </div>

  )

}

export default HeaderLinks