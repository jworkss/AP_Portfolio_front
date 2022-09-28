import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectosMoldes } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos-editar',
  templateUrl: './proyectos-editar.component.html',
  styleUrls: ['./proyectos-editar.component.css'],
})
export class ProyectosEditarComponent implements OnInit {
  id?: number;
  nombre: string = '';
  descripcion: string = '';
  url_proyecto: string = '';
  url_foto: string = '';
  persona_id: number = 1;
  selectedProyecto = '';
  proyectos: ProyectosMoldes[] = [];
  editProyectos: ProyectosMoldes = null;
  isLogged = false;
  constructor(
    private pryectosService: ProyectosService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.loadProyectos();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    const id = this.activateRoute.snapshot.params['id'];
    this.pryectosService.buscar(id).subscribe(
      (data) => {
        this.editProyectos = data;
      },
      (err) => {
        alert('Error al modificar el proyect');
        this.router.navigate(['editarproyectos']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.pryectosService.upate(id, this.editProyectos).subscribe(
      (data) => {
        this.router.navigate(['/proyectos/crear']);
      },
      (err) => {
        alert('Se logro modificar el proyecto');
        this.router.navigate(['/proyectos/crear']);
      }
    );
    this.refresh();
  }

  loadProyectos(): void {
    this.pryectosService.proyectos().subscribe((data) => {
      this.proyectos = data;
    });
  }

  refresh(): void {
    window.location.reload();
  }

  onSelected(nombre: string): void {
    this.selectedProyecto = nombre;
  }

  onDelete(id?: number) {
    if (id != undefined) {
      this.pryectosService.delete(id).subscribe(
        (data) => {},
        (err) => {
          this.refresh();
          alert('Se borro el proyecto');
        }
      );
    }
  }
}
