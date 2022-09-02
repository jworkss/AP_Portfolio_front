import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  personaURL = 'http://localhost:8080/personas/';
  constructor(private personasHttpClient: HttpClient) {}

  public personas(): Observable<Persona[]> {
    return this.personasHttpClient.get<Persona[]>(this.personaURL + 'ver');
  }

  public save(redes: Persona): Observable<any> {
    return this.personasHttpClient.post<any>(this.personaURL + 'new', redes);
  }

  public buscar(id: number): Observable<any> {
    return this.personasHttpClient.get<any>(this.personaURL + `ver/${id}`);
  }

  public upate(id: number, redes: Persona): Observable<any> {
    return this.personasHttpClient.put<any>(this.personaURL + `editar/${id}`, redes);
  }

  public delete(id: number): Observable<any> {
    return this.personasHttpClient.delete<any>(this.personaURL + `delete/${id}`);
  }
}
