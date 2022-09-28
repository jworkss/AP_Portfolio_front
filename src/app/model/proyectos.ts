export class ProyectosMoldes {
  id?: number;
  nombre: string;
  descripcion: string;
  url_proyecto: string;
  url_foto: string;
  persona_id: number;
  constructor(
    nombre: string,
    descripcion: string,
    url_proyecto: string,
    url_foto: string,
    persona_id: number
  ) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.url_proyecto = url_proyecto;
    this.url_foto = url_foto;
    this.persona_id = persona_id;
  }
}
