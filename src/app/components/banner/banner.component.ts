import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {
  persona: Persona = new Persona("","","","","","","")
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.buscar(1).subscribe((data) => {
      this.persona = data;
    });
  }
}
