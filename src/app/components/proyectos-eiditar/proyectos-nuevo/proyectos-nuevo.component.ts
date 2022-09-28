import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProyectosMoldes } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos-nuevo',
  templateUrl: './proyectos-nuevo.component.html',
  styleUrls: ['./proyectos-nuevo.component.css'],
})
export class ProyectosNuevoComponent implements OnInit {
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
    this.pryectosService.buscar(id).subscribe((data) => {
      this.editProyectos = data;
      
    });
  }

  onCreate(): void {
    const proyecto = new ProyectosMoldes(
      this.nombre,
      this.descripcion,
      this.url_proyecto,
      this.url_foto,
      this.persona_id
    );
    this.pryectosService.save(proyecto).subscribe(
      (data) => {
        alert('proyecto fallo');
        this.router.navigate(['/proyectos/crear']);
      },
      (err) => {
        alert('proyecto añadido');
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

  onSelected(nombre: string): void {
    this.selectedProyecto = nombre;
  }

  refresh(): void {
    window.location.reload();
  }
}
