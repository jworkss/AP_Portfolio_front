import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root',
})
export class EducacionService {
  educacionURL = 'https://apmarcosback.herokuapp.com/educacion/';
  constructor(private educacionHttpClient: HttpClient) {}

  public educaciones(): Observable<Educacion[]> {
    return this.educacionHttpClient.get<Educacion[]>(this.educacionURL + 'ver');
  }

  public save(educacion: Educacion): Observable<any> {
    return this.educacionHttpClient.post<any>(
      this.educacionURL + 'new',
      educacion
    );
  }

  public buscar(id: number): Observable<any> {
    return this.educacionHttpClient.get<any>(this.educacionURL + `ver/${id}`);
  }

  public upate(id: number, educacion: Educacion): Observable<any> {
    return this.educacionHttpClient.put<any>(
      this.educacionURL + `editar/${id}`,
      educacion
    );
  }

  public delete(id: number): Observable<any> {
    return this.educacionHttpClient.delete<any>(
      this.educacionURL + `delete/${id}`
    );
  }
}
