import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css'],
})
export class SobreMiComponent implements OnInit {

  isLogged = false;
  persona: Persona = new Persona('', '', '', '', '', '', '', '');
  constructor(public personaService: PersonaService,
    public tokenService: TokenService) {}

  ngOnInit(): void {
    this.personaService.buscar(1).subscribe((data) => {
      this.persona = data;

      if (this.tokenService.getToken()) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      }
      this.personaService.buscar(1).subscribe((data) => {
        this.persona = data;
      });

    });
  }


}
