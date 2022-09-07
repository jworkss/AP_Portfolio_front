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
  isLogged = false;

  selectedEducacion = '';

  edicaciones: Educacion[] = [];

  editRed: Educacion = null;
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
        this.editRed = data;
      },
      (err) => {
        alert('Error al modificar experiencia');
        this.router.navigate(['editarredes']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.educacionService.upate(id, this.editRed).subscribe(
      (data) => {
        this.router.navigate(['/educacion/nueva']);
      },
      (err) => {
        alert('Se logro modificar expereincia');
        this.router.navigate(['/educacion/nueva']);
      }
    );
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }

  loadEducacion(): void {
    this.educacionService.educaciones().subscribe((data) => {
      this.edicaciones = data;
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
          alert('Se borro el contacto');
        }
      );
    }
  }
}
