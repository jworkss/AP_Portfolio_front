export class Experiencia {
  id?: number;
  nombre_empresa: string;
  puesto: string;
  fecha_inicio: string;
  fecha_fin: string;
  descripcion: string;
  tipo_empleo: string;
  persona_id: number;

  constructor(
    nombre_empresa: string,
    puesto: string,
    fecha_inicio: string,
    fecha_fin: string,
    descripcion: string,
    tipo_empleo: string,
    persona_id: number
  ) {
    this.nombre_empresa = nombre_empresa;
    this.puesto = puesto;
    this.fecha_inicio = fecha_inicio;
    this.fecha_fin = fecha_fin;
    this.descripcion = descripcion;
    this.tipo_empleo = tipo_empleo;
    this.persona_id = persona_id;
  }
}
