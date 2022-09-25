import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css'],
})
export class EditarEducacionComponent implements OnInit {
  educaciones: Educacion[] = [];
  isLogged = false;
  id?: number;
  titulo: string = '';
  institucion: string = '';
  url_foto: string = '';
  direccion: string = '';
  fecha_inicio: string = '';
  fecha_fin: string = '';
  persona_id: number = 1;

  selectedEducacion = '';

  editEducacion: Educacion = null;
  constructor(
    private activateRoute: ActivatedRoute,
    public tokenService: TokenService,
    public educacionService: EducacionService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.loadEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    const id = this.activateRoute.snapshot.params['id'];
    this.educacionService.buscar(id).subscribe(
      (data) => {
        this.editEducacion = data;
      },
      (err) => {
        alert('Error al modificar Educacion');
        this.router.navigate(['educacion/editar']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.educacionService.upate(id, this.editEducacion).subscribe(
      (data) => {
        this.router.navigate(['/educacion/crear']);
      }
    );
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }

  loadEducacion(): void {
    this.educacionService.educaciones().subscribe((data) => {
      this.educaciones = data;
    });
  }
  onSelected(nombre: string): void {
    this.selectedEducacion = nombre;
  }

  onDelete(id?: number) {
    if (id != undefined) {
      this.educacionService.delete(id).subscribe(
        (data) => {},
        (err) => {
          this.refresh();
          alert('Se se borro la educacion');
        }
      );
    }
  }
}
