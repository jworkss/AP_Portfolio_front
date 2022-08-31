export class ModelRedes {
  id?: number;
  nombre: string;
  url_foto: string;
  url_red: string;
  persona_id: number;

  constructor(
    nombre: string,
    url_foto: string,
    url_red: string,
    persona_id: number
  ) {
    this.nombre = nombre;
    this.url_foto = url_foto;
    this.url_red = url_red;
    this.persona_id = persona_id;
  }
}
