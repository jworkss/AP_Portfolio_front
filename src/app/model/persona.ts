export class Persona {
  id?: number;
  nombre: string;
  apellido: string;
  url_foto: string;
  fecha_nac: string;
  position: String;
  sobre_mi: string;
  sobre_mi_bg: string;
  curriculum: string;
  constructor(
    nombre: string,
    apellido: string,
    url_foto: string,
    fecha_nac: string,
    position: string,
    sobre_mi: string,
    sobre_mi_bg: string,
    curriculu: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.url_foto = url_foto;
    this.fecha_nac = fecha_nac;
    this.position = position;
    this.sobre_mi = sobre_mi;
    this.sobre_mi_bg = sobre_mi_bg;
    this.curriculum = curriculu;
  }
}
