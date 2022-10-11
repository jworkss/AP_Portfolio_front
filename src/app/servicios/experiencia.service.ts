import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root',
})
export class ExperienciaService {
  experienciaURL = 'https://apmarcosback.herokuapp.com/experiencias/';
  constructor(private experienciaHttpClient: HttpClient) {}

  public experiencias(): Observable<Experiencia[]> {
    return this.experienciaHttpClient.get<Experiencia[]>(
      this.experienciaURL + 'ver'
    );
  }

  public save(experiencia: Experiencia): Observable<any> {
    return this.experienciaHttpClient.post<any>(
      this.experienciaURL + 'new',
      experiencia
    );
  }

  public buscar(id: number): Observable<any> {
    return this.experienciaHttpClient.get<any>(
      this.experienciaURL + `ver/${id}`
    );
  }

  public upate(id: number, educacion: Experiencia): Observable<any> {
    return this.experienciaHttpClient.put<any>(
      this.experienciaURL + `editar/${id}`,
      educacion
    );
  }

  public delete(id: number): Observable<any> {
    return this.experienciaHttpClient.delete<any>(
      this.experienciaURL + `delete/${id}`
    );
  }
}
