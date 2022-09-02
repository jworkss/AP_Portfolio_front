import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/servicios/persona.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css'],
})
export class BannerComponent implements OnInit {

  isLogged = false;
  persona: Persona = new Persona("","","","","","","","")
  constructor(public personaService: PersonaService,
    public tokenService: TokenService,
    public router:Router) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.personaService.buscar(1).subscribe((data) => {
      this.persona = data;
    });
  }

  hasRoute(router: string) {
    return this.router.url === router;
  }


}
