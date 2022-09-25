export class ModelSkills {
  id?: number;
  nombre: string;
  nivel: number;
  url_foto: string;
  tipo_skill: string;
  persona_id: number;
  constructor(
    nombre: string,
    nivel: number,
    url_foto: string,
    tipo_skill: string,
    persona_id: number
  ) {
    this.nombre = nombre;
    this.nivel = nivel;
    this.url_foto = url_foto;
    this.tipo_skill = tipo_skill;
    this.persona_id = persona_id;
  }
}
