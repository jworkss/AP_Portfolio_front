import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css'],
})
export class NuevaEducacionComponent implements OnInit {
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
    private educacionService: EducacionService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.loadEducaciones();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onCreate(): void {
    const educacion = new Educacion(
      this.titulo,
      this.institucion,
      this.url_foto,
      this.direccion,
      this.fecha_inicio,
      this.fecha_fin,
      this.persona_id
    );
    this.educacionService.save(educacion).subscribe(
      (data) => {
        alert('Red fallo');
        this.router.navigate(['/red/nueva']);
      },
      (err) => {
        alert('red añadida');
        this.router.navigate(['/red/nueva']);
      }
    );
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }

  loadEducaciones(): void {
    this.educacionService.educaciones().subscribe((data) => {
      this.educaciones = data;
    });
  }
}
