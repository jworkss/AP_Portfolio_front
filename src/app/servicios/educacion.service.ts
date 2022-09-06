import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  educacionURL = 'http://localhost:8080/educacion/';
  constructor(private educacionHttpClient: HttpClient) {}

  public educacion(): Observable<Educacion[]> {
    return this.educacionHttpClient.get<Educacion[]>(this.educacionURL + 'ver');
  }

  public save(redes: Educacion): Observable<any> {
    return this.educacionHttpClient.post<any>(this.educacionURL + 'new', redes);
  }

  public buscar(id: number): Observable<any> {
    return this.educacionHttpClient.get<any>(this.educacionURL + `ver/${id}`);
  }

  public upate(id: number, redes: Educacion): Observable<any> {
    return this.educacionHttpClient.put<any>(
      this.educacionURL + `editar/${id}`,
      redes
    );
  }

  public delete(id: number): Observable<any> {
    return this.educacionHttpClient.delete<any>(
      this.educacionURL + `delete/${id}`
    );
  }
}
