import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/servicios/experiencia.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-editar-experiencia',
  templateUrl: './editar-experiencia.component.html',
  styleUrls: ['./editar-experiencia.component.css'],
})
export class EditarExperienciaComponent implements OnInit {
  experiencias: Experiencia[] = [];
  isLogged = false;

  id?: number;
  nombre_empresa: string;
  puesto: string;
  fecha_inicio: string;
  fecha_fin: string;
  descripcion: string;
  tipo_empleo: string;
  persona_id: number;

  selectExperiencia = '';

  editExperiencia: Experiencia = null;

  constructor(
    private activateRoute: ActivatedRoute,
    public tokenService: TokenService,
    public experienciaService: ExperienciaService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.loadExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    const id = this.activateRoute.snapshot.params['id'];
    this.experienciaService.buscar(id).subscribe((data) => {
      this.editExperiencia = data;
    }, (err) =>{
      alert('Error al modificar experiencia');
      this.router.navigate(['/experiencia/editar'])
    });
  }

  onUpdate(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.experienciaService.upate(id, this.editExperiencia).subscribe(
      (data) => {
        this.router.navigate(['/experiencia/crear']);
      },
      (err) => {
        alert('Se logro modificar expereincia');
        this.router.navigate(['/experiencia/crear']);
      }
    );
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }

  loadExperiencia(): void {
    this.experienciaService.experiencias().subscribe((data) => {
      this.experiencias = data;
    });
  }
  onSelected(nombre: string): void {
    this.selectExperiencia = nombre;
  }

  onDelete(id?: number) {
    if (id != undefined) {
      this.experienciaService.delete(id).subscribe(
        (data) => {},
        (err) => {
          this.refresh();
          alert('Se se borro la experiencia');
        }
      );
    }
  }
}
