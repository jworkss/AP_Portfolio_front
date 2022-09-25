import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelRedes } from '../model/redes';

@Injectable({
  providedIn: 'root',
})
export class RedesService {
  redesURL = 'http://localhost:8080/redes/';
  constructor(private redesHttpClient: HttpClient) {}

  public redes(): Observable<ModelRedes[]> {
    return this.redesHttpClient.get<ModelRedes[]>(this.redesURL + 'ver');
  }

  public save(redes: ModelRedes): Observable<any> {
    return this.redesHttpClient.post<any>(this.redesURL + 'new', redes);
  }

  public buscar(id: number): Observable<any> {
    return this.redesHttpClient.get<any>(this.redesURL + `ver/${id}`);
  }

  public upate(id: number, redes: ModelRedes): Observable<any> {
    return this.redesHttpClient.put<any>(this.redesURL + `editar/${id}`, redes);
  }

  public delete(id: number): Observable<any> {
    return this.redesHttpClient.delete<any>(this.redesURL + `delete/${id}`);
  }
}
