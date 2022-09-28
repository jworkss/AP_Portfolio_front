import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProyectosMoldes } from '../model/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {

  proyectosURL = 'http://localhost:8080/proyectos/';
  constructor(private proyectosHttpClient: HttpClient) {}

  public proyectos(): Observable<ProyectosMoldes[]> {
    return this.proyectosHttpClient.get<ProyectosMoldes[]>(
      this.proyectosURL + 'ver'
    );
  }

  public save(proyectos: ProyectosMoldes): Observable<any> {
    return this.proyectosHttpClient.post<any>(
      this.proyectosURL + 'new',
      proyectos
    );
  }

  public buscar(id: number): Observable<any> {
    return this.proyectosHttpClient.get<any>(
      this.proyectosURL + `ver/${id}`
    );
  }

  public upate(id: number, proyectos: ProyectosMoldes): Observable<any> {
    return this.proyectosHttpClient.put<any>(
      this.proyectosURL + `editar/${id}`,
      proyectos
    );
  }

  public delete(id: number): Observable<any> {
    return this.proyectosHttpClient.delete<any>(
      this.proyectosURL + `delete/${id}`
    );
  }
}
