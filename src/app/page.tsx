export default function Home() {
  return (
    <main className="min-h-screen bg-papel-hueso">
      {/* Hero temporal */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="font-display text-6xl md:text-8xl text-rojo-carmin mb-4">
          Deseo, mantente firme
        </h1>
        <p className="font-serif text-xl md:text-2xl text-tinta-noche mb-8 max-w-2xl">
          Un viaje al universo íntimo de Frida Khalo
        </p>
        <div className="font-script text-3xl text-rosa-mexicano">
          "En un diálogo atemporal entre dos mujeres latinas, 
          el arte es la trama que las sostiene y las salva"
        </div>
      </section>
      
      {/* Secciones placeholder */}
      <section className="py-20 px-6 bg-verde-selva/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl text-azul-cobalto mb-8">Sinopsis</h2>
          <p className="font-serif text-lg text-tinta-noche leading-relaxed">
            Coming soon...
          </p>
        </div>
      </section>
      
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl text-azul-cobalto mb-8">Ficha Técnica</h2>
          <p className="font-serif text-lg text-tinta-noche leading-relaxed">
            Coming soon...
          </p>
        </div>
      </section>
    </main>
  )
}