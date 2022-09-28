import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelSkills } from 'src/app/model/skills';
import { SkillsService } from 'src/app/servicios/skills.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-skills-editar',
  templateUrl: './skills-editar.component.html',
  styleUrls: ['./skills-editar.component.css'],
})
export class SkillsEditarComponent implements OnInit {
  id?: number;
  nombre: string = '';
  nivel: number;
  url_foto: string = '';
  tipo_skill: string = '';
  persona_id: number;

  isLogged = false;

  selectedSkill = '';

  skills: ModelSkills[] = [];

  editSkill: ModelSkills = null;

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
    this.skillsService.buscar(id).subscribe(
      (data) => {
        this.editSkill = data;
      },
      (err) => {
        alert('Error al modificar el skill');
        this.router.navigate(['editarskills']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.skillsService.upate(id, this.editSkill).subscribe(
      (data) => {
        this.router.navigate(['/skills/crear']);
      },
      (err) => {
        alert('Se logro modificar el skill');
        this.router.navigate(['/skills/crear']);
      }
    );
    this.refresh();
  }

  loadSkills(): void {
    this.skillsService.skills().subscribe((data) => {
      this.skills = data;
    });
  }
  refresh(): void {
    window.location.reload();
  }

  onSelected(nombre: string): void {
    this.selectedSkill = nombre;
  }

  onDelete(id?: number) {
    if (id != undefined) {
      this.skillsService.delete(id).subscribe(
        (data) => {},
        (err) => {
          this.refresh();
          alert('Se borro el skill');
        }
      );
    }
  }
}
