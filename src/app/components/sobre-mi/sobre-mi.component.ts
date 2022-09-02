import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css'],
})
export class SobreMiComponent implements OnInit {
  persona: Persona = new Persona('', '', '', '', '', '', '', '');
  constructor(public personaService: PersonaService) {}

  ngOnInit(): void {
    this.personaService.buscar(1).subscribe((data) => {
      this.persona = data;
    });
  }


}
