// Tipos para la estructura de datos de la obra

export interface PersonaEquipo {
  nombre: string
  rol: string
  bio?: string
}

export interface RiderTecnico {
  genero: string
  edadSugerida: string
  espacioMinimo: string
  duracion: string
  tiempoMontaje: string
  desmontaje: string
  sonido: string
  proyecciones: string
  iluminacionMinima: {
    pc: number
    par: string
    pin: number
    lico: number
  }
}

export interface MaterialPrensa {
  fotosPerfil: string
  instagram: string
  descripcion: string
}

export interface RedesContacto {
  instagram: string
  email?: string
  telefono?: string
  sitioWeb?: string
}

export interface ObraTeatro {
  // Información básica
  titulo: string
  subtitulo: string
  genero: string
  duracion: string
  edadSugerida: string
  
  // Contenido narrativo
  sinopsis: string
  argumento: string
  
  // Equipo
  equipo: PersonaEquipo[]
  
  // Aspectos técnicos
  riderTecnico: RiderTecnico
  puestaEnEscena: string
  
  // Promoción
  materialPrensa: MaterialPrensa
  redesContacto: RedesContacto
}