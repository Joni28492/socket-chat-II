// {
//     id: 'sdjfhksdf-dfsd456',
//     nombre: "Pepito",
//     sala: 'Chat videojuegos'
// }

class Usuarios {
  constructor() {
    this.personas = [];
  }

  agregarPersona(id, nombre, sala) {
    let persona = { id, nombre, sala };
    this.personas.push(persona);
    return this.personas;
  }

  getPersona(id) {
    return this.personas.filter((persona) => persona.id === id)[0];
  }

  getPersonas() {
    return this.personas;
  }
  getPersonasPorSala(sala) {
    let personasEnSala = this.personas.filter(
      (persona) => persona.sala === sala
    );
    return personasEnSala;
  }

  borrarPersona(id) {
    let personaBorrada = this.getPersona(id);
    this.personas = this.personas.filter((pers) => pers.id !== id);
    return personaBorrada;
  }
}

module.exports = { Usuarios };
