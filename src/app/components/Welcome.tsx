import Image from 'next/image'

export default function Welcome() {
  return (
    <section
      id="hero"
      className="relative h-screen bg-gradient-to-b from-gray-800 to-gray-700 text-white flex items-center justify-center"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/ines-header-bg.jpg" // Replace with your image path
          alt="Background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="opacity-40"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Bienvenue chez Sauvage Education
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Découvrez mes services pour éduquer et comprendre votre chien.
        </p>
        <a
          href="#services"
          className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-secondary transition"
        >
          En savoir plus
        </a>
      </div>
    </section>
  )
}
