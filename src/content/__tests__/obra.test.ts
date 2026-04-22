import { describe, it, expect } from 'vitest'
import { obraData } from '../obra'
import type { ObraTeatro } from '../types'

describe('obra data structure', () => {
  it('should have valid basic information', () => {
    expect(obraData.titulo).toBe("Deseo, mantente firme")
    expect(obraData.subtitulo).toContain("Frida Khalo")
    expect(obraData.genero).toBe("Biodrama ficcionado")
    expect(obraData.duracion).toBe("55 minutos")
    expect(obraData.edadSugerida).toContain("14")
  })

  it('should have non-empty sinopsis and argumento', () => {
    expect(obraData.sinopsis).toBeTruthy()
    expect(obraData.sinopsis.length).toBeGreaterThan(50)
    expect(obraData.argumento).toBeTruthy()
    expect(obraData.argumento.length).toBeGreaterThan(100)
  })

  it('should have complete equipo with key roles', () => {
    expect(Array.isArray(obraData.equipo)).toBe(true)
    expect(obraData.equipo.length).toBeGreaterThan(5)

    // Key roles should be present
    const roles = obraData.equipo.map(persona => persona.rol.toLowerCase())
    
    expect(roles.some(rol => rol.includes('actuación') || rol.includes('actúa'))).toBe(true)
    expect(roles.some(rol => rol.includes('dirección'))).toBe(true)
    expect(roles.some(rol => rol.includes('música'))).toBe(true)
    expect(roles.some(rol => rol.includes('dramaturgia'))).toBe(true)
  })

  it('should have complete rider tecnico information', () => {
    const rider = obraData.riderTecnico
    
    expect(rider.espacioMinimo).toBeTruthy()
    expect(rider.tiempoMontaje).toBeTruthy()
    expect(rider.desmontaje).toBeTruthy()
    expect(rider.sonido).toBeTruthy()
    expect(rider.proyecciones).toBeTruthy()
    
    // Iluminación mínima should have numeric values
    expect(typeof rider.iluminacionMinima.pc).toBe('number')
    expect(typeof rider.iluminacionMinima.pin).toBe('number')
    expect(typeof rider.iluminacionMinima.lico).toBe('number')
    expect(rider.iluminacionMinima.par).toBeTruthy()
  })

  it('should have puesta en escena description', () => {
    expect(obraData.puestaEnEscena).toBeTruthy()
    expect(obraData.puestaEnEscena.length).toBeGreaterThan(200)
    expect(obraData.puestaEnEscena).toContain('color')
    expect(obraData.puestaEnEscena).toContain('proyecciones')
  })

  it('should have material de prensa information', () => {
    expect(obraData.materialPrensa.fotosPerfil).toBeTruthy()
    expect(obraData.materialPrensa.instagram).toBe('@soymelschneider')
    expect(obraData.materialPrensa.descripcion).toBeTruthy()
  })

  it('should have redes y contacto information', () => {
    expect(obraData.redesContacto.instagram).toBe('@soymelschneider')
    expect(obraData.redesContacto.email).toBeTruthy()
    expect(obraData.redesContacto.sitioWeb).toBeTruthy()
  })

  it('should match ObraTeatro interface', () => {
    // TypeScript compilation will catch interface mismatches,
    // but this test ensures runtime shape is correct
    const requiredKeys: (keyof ObraTeatro)[] = [
      'titulo', 'subtitulo', 'genero', 'duracion', 'edadSugerida',
      'sinopsis', 'argumento', 'equipo', 'riderTecnico', 
      'puestaEnEscena', 'materialPrensa', 'redesContacto'
    ]

    requiredKeys.forEach(key => {
      expect(obraData).toHaveProperty(key)
      expect(obraData[key]).toBeTruthy()
    })
  })

  it('should have team members with names and roles', () => {
    obraData.equipo.forEach(persona => {
      expect(persona.nombre).toBeTruthy()
      expect(persona.rol).toBeTruthy()
      expect(typeof persona.nombre).toBe('string')
      expect(typeof persona.rol).toBe('string')
      // bio is optional, but if present should be string
      if (persona.bio) {
        expect(typeof persona.bio).toBe('string')
      }
    })
  })
})