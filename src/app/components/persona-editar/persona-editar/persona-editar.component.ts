import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-persona-editar',
  templateUrl: './persona-editar.component.html',
  styleUrls: ['./persona-editar.component.css']
})
export class PersonaEditarComponent implements OnInit {

  isLogged = false;

  id?: number;
  nombre: string;
  apellido: string;
  url_foto: string;
  fecha_nac: string;
  position: string;
  sobre_mi: string;
  sobre_mi_bg: string;
  curriculum: string;

  selectPersona = '';


  personas: Persona[] = [];

  editPersona: Persona = null;

  constructor(
    private personaService: PersonaService,
    private router: Router,
    private activateRoute: ActivatedRoute,
    private tokenService: TokenService
  ) {}
  ngOnInit(): void {
    this.loadRedes();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    const id = this.activateRoute.snapshot.params['id'];
    this.personaService.buscar(id).subscribe(
      (data) => {
        this.editPersona = data;
      },
      (err) => {
        alert('Error al modificar experiencia');
        this.router.navigate(['editarredes']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.personaService.upate(id, this.editPersona).subscribe(
      (data) => {
        this.router.navigate(['/red/crear']);
      },
      (err) => {
        alert('Se logro modificar expereincia');
        this.router.navigate(['/red/crear']);
      }
    );
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }

  loadRedes(): void {
    this.personaService.personas().subscribe((data) => {
      this.personas = data;
    });
  }
  onSelected(nombre: string): void {
    this.selectPersona = nombre;
  }

  onDelete(id?: number) {
    if (id != undefined) {
      this.personaService.delete(id).subscribe(
        (data) => {
        },
        (err) => {
          this.refresh();
          alert('Se borro el contacto');

        }
      );
    }
  }
}
