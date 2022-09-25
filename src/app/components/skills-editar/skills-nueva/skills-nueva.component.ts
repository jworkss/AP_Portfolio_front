import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelSkills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skills-nueva',
  templateUrl: './skills-nueva.component.html',
  styleUrls: ['./skills-nueva.component.css'],
})
export class SkillsNuevaComponent implements OnInit {
  id?: number;
  nombre: string = '';
  nivel: number = 0;
  url_foto: string = '';
  tipo_skill: string = '';
  persona_id: number = 1;

  skills: ModelSkills[] = [];
  editSkill: ModelSkills = null;
  isLogged = false;
  selectedSkill = '';
  constructor(
    private skillsService: SkillsService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.loadSkills();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    const id = this.activateRoute.snapshot.params['id'];
    this.skillsService.buscar(id).subscribe((data) => {
      this.editSkill = data;
    });
  }

  onCreate(): void {
    const skill = new ModelSkills(
      this.nombre,
      this.nivel,
      this.url_foto,
      this.tipo_skill,
      this.persona_id
    );
    this.skillsService.save(skill).subscribe(
      (data) => {
        alert('Red fallo');
        this.router.navigate(['/skill/crear']);
      },
      (err) => {
        alert('red añadida');
        this.router.navigate(['/skill/crear']);
      }
    );
    this.refresh();
  }

  loadSkills(): void {
    this.skillsService.skills().subscribe((data) => {
      this.skills = data;
    });
  }
  onSelected(nombre: string): void {
    this.selectedSkill = nombre;
  }

  refresh(): void {
    window.location.reload();
  }
}
