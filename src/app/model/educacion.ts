export class Educacion {
  id?: number;
  titulo: string;
  institucion: string;
  url_foto: string;
  direccion: string;
  fecha_inicio: string;
  fecha_fin: string;
  persona_id: number;
  constructor(
    titulo: string,
    institucion: string,
    url_foto: string,
    direccion: string,
    fecha_inicio: string,
    fecha_fin: string,
    persona_id: number
  ) {
    this.titulo = titulo;
    this.institucion = institucion;
    this.url_foto = url_foto;
    this.direccion = direccion;
    this.fecha_inicio = fecha_inicio;
    this.fecha_fin = fecha_fin;
    this.persona_id = persona_id;
  }
}
