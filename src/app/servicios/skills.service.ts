import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModelSkills } from '../model/skills';

@Injectable({
  providedIn: 'root',
})
export class SkillsService {
  // 'http://localhost:8080/skills/';

  skillsURL = 'https://apmarcosback.herokuapp.com/skills/';
  constructor(private skillsHttpClient: HttpClient) {}

  public skills(): Observable<ModelSkills[]> {
    return this.skillsHttpClient.get<ModelSkills[]>(this.skillsURL + 'ver');
  }

  public save(skills: ModelSkills): Observable<any> {
    return this.skillsHttpClient.post<any>(this.skillsURL + 'new', skills);
  }

  public buscar(id: number): Observable<any> {
    return this.skillsHttpClient.get<any>(this.skillsURL + `ver/${id}`);
  }

  public upate(id: number, skills: ModelSkills): Observable<any> {
    return this.skillsHttpClient.put<any>(
      this.skillsURL + `editar/${id}`,
      skills
    );
  }

  public delete(id: number): Observable<any> {
    return this.skillsHttpClient.delete<any>(this.skillsURL + `delete/${id}`);
  }
}
