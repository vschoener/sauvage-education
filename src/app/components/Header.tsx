import Image from 'next/image'

export default function Header() {
  return (
    <>
      <header
        className="fixed top-0 left-0 w-full bg-gray-900 text-white z-50 shadow-lg p-2">
        <div
          className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo avec image */}
          <div className="flex items-center space-x-4">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <Image
                src="/images/alya-logo.jpg" // Remplacez par le chemin correct vers votre image
                alt="Logo Sauvage Education"
                width={40}
                height={40}
                className="object-cover object-center scale-125"
              />
            </div>
            <a href="#hero" className="text-2xl font-bold">
              Sauvage Education
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <a href="#services" className="hover:text-gray-300 transition">
              Services
            </a>
            <a href="#about" className="hover:text-gray-300 transition">
              À propos
            </a>
            <a href="#contact" className="hover:text-gray-300 transition">
              Contact
            </a>
          </nav>

          {/* Bouton d'appel à l'action */}
          <a
            href="#contact"
            className="hidden md:block bg-accent text-white px-6 py-2 rounded-lg hover:bg-secondary transition"
          >
            Contactez-moi
          </a>

          {/* Menu mobile */}
          <button className="md:hidden focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>
    </>
  )
}
