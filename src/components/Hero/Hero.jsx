import { heroData } from "../../data/heroData"

function Hero(){

  return (

    <section className="hero">

      {heroData.map((banner)=>(
        <a
          key={banner.id}
          href={banner.link}
          className="hero-banner"
        >

          <img
            src={banner.image}
            alt="Banner promocional"
          />

        </a>
      ))}

    </section>

  )

}

export default Hero