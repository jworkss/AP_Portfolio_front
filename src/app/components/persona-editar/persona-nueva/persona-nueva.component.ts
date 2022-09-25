import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-persona-nueva',
  templateUrl: './persona-nueva.component.html',
  styleUrls: ['./persona-nueva.component.css'],
})
export class PersonaNuevaComponent implements OnInit {
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
    public tokenService: TokenService,
    public personaService: PersonaService,
    public router: Router,
    public activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    const id = this.activateRoute.snapshot.params['id'];
    this.personaService.buscar(id).subscribe((data) => {
      this.editPersona = data;
    });
  }

  onCreate(): void {
    const createPersona = new Persona(
      this.nombre,
      this.apellido,
      this.url_foto,
      this.fecha_nac,
      this.position,
      this.sobre_mi,
      this.sobre_mi_bg,
      this.curriculum
    );
    this.personaService.save(createPersona).subscribe(
      (data) => {
        alert('Persona Fallo');
        this.router.navigate(['/persona/nueva']);
      },
      (err) => {
        alert('Persona añadida');
        this.router.navigate(['/persona/nueva']);
      }
    );
    this.refresh();
  }

  loadPersona(): void {
    this.personaService.personas().subscribe((data) => {
      this.personas = data;
    });
  }
  onSelected(nombre: string): void {
    this.selectPersona = nombre;
  }

  refresh(): void {
    window.location.reload();
  }
}
