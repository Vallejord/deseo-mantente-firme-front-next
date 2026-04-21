import { obraData } from '@/content'

export default function Home() {
  return (
    <main className="min-h-screen bg-papel-hueso">
      {/* Hero temporal */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="font-display text-6xl md:text-8xl text-rojo-carmin mb-4">
          {obraData.titulo}
        </h1>
        <p className="font-serif text-xl md:text-2xl text-tinta-noche mb-8 max-w-2xl">
          {obraData.subtitulo}
        </p>
        <div className="font-script text-3xl text-rosa-mexicano">
          "En un diálogo atemporal entre dos mujeres latinas, 
          el arte es la trama que las sostiene y las salva"
        </div>
        <div className="mt-8 space-y-2 text-sm text-azul-cobalto font-serif">
          <p><strong>{obraData.genero}</strong> • {obraData.duracion}</p>
          <p>{obraData.edadSugerida}</p>
        </div>
      </section>
      
      {/* Secciones con datos reales */}
      <section className="py-20 px-6 bg-verde-selva/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl text-azul-cobalto mb-8">Sinopsis</h2>
          <div className="font-serif text-lg text-tinta-noche leading-relaxed space-y-4">
            {obraData.sinopsis.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl text-azul-cobalto mb-8">Argumento</h2>
          <div className="font-serif text-lg text-tinta-noche leading-relaxed space-y-4">
            {obraData.argumento.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-rosa-mexicano/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-4xl text-azul-cobalto mb-8">Ficha Técnica</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif font-semibold text-xl text-rojo-carmin mb-4">Información Técnica</h3>
              <div className="font-serif text-tinta-noche space-y-2">
                <p><strong>Género:</strong> {obraData.riderTecnico.genero}</p>
                <p><strong>Duración:</strong> {obraData.riderTecnico.duracion}</p>
                <p><strong>Espacio mínimo:</strong> {obraData.riderTecnico.espacioMinimo}</p>
                <p><strong>Montaje:</strong> {obraData.riderTecnico.tiempoMontaje}</p>
                <p><strong>Desmontaje:</strong> {obraData.riderTecnico.desmontaje}</p>
              </div>
            </div>
            <div>
              <h3 className="font-serif font-semibold text-xl text-rojo-carmin mb-4">Equipo Principal</h3>
              <div className="font-serif text-sm text-tinta-noche space-y-1">
                {obraData.equipo.slice(0, 6).map((persona, index) => (
                  <p key={index}>
                    <strong>{persona.nombre}</strong> - {persona.rol}
                  </p>
                ))}
                <p className="text-azul-cobalto italic mt-2">
                  + {obraData.equipo.length - 6} colaboradores más
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section className="py-20 px-6 bg-azul-cobalto/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl text-azul-cobalto mb-8">Contacto</h2>
          <div className="font-script text-2xl text-rosa-mexicano mb-4">
            {obraData.redesContacto.instagram}
          </div>
          <p className="font-serif text-tinta-noche">
            {obraData.materialPrensa.descripcion}
          </p>
        </div>
      </section>
    </main>
  )
}