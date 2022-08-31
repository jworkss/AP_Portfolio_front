export class Persona {
  id?: number;
  nombre: String;
  apellido: String;
  fecha_nac: String;
  position: String;
  sobre_mi: String;
  sobre_mi_bg: String;
  curriculum: String;
  constructor (nombre: String, apellido: String, fecha_nac: String, position: String, sobre_mi: String, sobre_mi_bg: String, curriculu: String){
    this.nombre = nombre;
    this.apellido = apellido;
    this.fecha_nac = fecha_nac;
    this.position = position;
    this.sobre_mi = sobre_mi;
    this.sobre_mi_bg = sobre_mi_bg;
    this.curriculum = curriculu;
  }

}
