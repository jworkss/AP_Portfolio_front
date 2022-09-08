import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css'],
})
export class NuevaExperienciaComponent implements OnInit {
  experiencias: Experiencia[] = [];
  isLogged = false;

  id?: number;
  nombre_empresa: string;
  puesto: string;
  fecha_inicio: string;
  fecha_fin: string;
  descripcion: string;
  tipo_empleo: string;
  persona_id: number = 1;

  constructor(
    private experienciaService: ExperienciaService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.loadExperiencias();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onCreate(): void {
    const experiencia = new Experiencia(
      this.nombre_empresa,
      this.puesto,
      this.fecha_inicio,
      this.fecha_fin,
      this.descripcion,
      this.tipo_empleo,
      this.persona_id
    );
    this.experienciaService.save(experiencia).subscribe(
      (data) => {
        alert('Errr al agregar experiencia');
        this.router.navigate(['/experiencia/nueva']);
      },
      (err) => {
        alert('Experiencia añadida');
        this.router.navigate(['/experiencia/nueva']);
      }
    );
    this.refresh();
  }
  refresh(): void {
    window.location.reload();
  }
  loadExperiencias(): void {
    this.experienciaService
      .experiencias()
      .subscribe((data) => (this.experiencias = data));
  }
}
