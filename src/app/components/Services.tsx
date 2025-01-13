export default function Services() {
  return (
    <section id="services" className="relative py-20 bg-accent">
      {/* Background Image with Overlay */}
      {/*<div className="absolute inset-0">*/}
      {/*  <Image*/}
      {/*    src="/images/prestation2.jpg"*/}
      {/*    alt="Services Banner"*/}
      {/*    layout="fill"*/}
      {/*    objectFit="cover"*/}
      {/*    objectPosition="center center"*/}
      {/*  />*/}
      {/*  <div className="absolute inset-0 bg-black bg-opacity-50"></div>*/}
      {/*</div>*/}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-6 text-foreground">Mes
          Prestations</h2>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="card">
            <h3>Bilan Comportemental</h3>
            <p>
              Analyse complète des comportements de votre chien, en centre ou à
              domicile.
            </p>
          </div>
          <div className="card">
            <h3>Cours Individuels</h3>
            <p>
              Un accompagnement personnalisé pour mieux comprendre et éduquer
              votre chien.
            </p>
          </div>
          <div className="card">
            <h3>Cours Collectifs</h3>
            <p>
              Apprenez avec d'autres propriétaires en milieu naturel.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
