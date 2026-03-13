import { headerLinks } from "../../data/headerLinks"
import { useEffect, useState } from "react"

function HeaderLinks(){

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)

  }, [])

  const linksToRender = isMobile
    ? headerLinks.filter(link => link.showOnMobile)
    : headerLinks

  return (

    <div className="header-links">

      {linksToRender.map((link,index)=>(
        <a key={index} href={link.url} className="header-link">

          <span className="link-icon">{link.icon}</span>

          {!isMobile && (
            <span className="link-text">{link.label}</span>
          )}

        </a>
      ))}

    </div>

  )

}

export default HeaderLinks