import ServiceHero from '../../assets/herobg.png'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className="relative w-full h-[40vh] md:h-[45vh] lg:h-[50vh] xl:h-[55vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src={ServiceHero}
          alt="Property services background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center px-4 md:px-8 lg:px-12">
        <h1 className="literata text-3xl md:text-4xl lg:text-5xl text-white font-medium text-center mb-4">
          What Sets Us Apart
        </h1>
        <p className="poppins text-sm md:text-base lg:text-lg font-medium text-white text-center max-w-3xl">
          We're not your average property services company. What makes Wamac different is 
          our blend of hands-on service, a strong delegation model, and genuine client care.
          Here's how we deliver on that promise
        </p>
      </div>
    </div>
  )
}

export default HeroSection



