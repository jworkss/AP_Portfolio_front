import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/servicios/educacion.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css'],
})
export class EducacionComponent implements OnInit {
  isLogged = false;
  educaciones: Educacion[] = [];
  constructor(
    public tokenService: TokenService,
    public educacionService: EducacionService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.cargarEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarEducacion(): void {
    this.educacionService.educaciones().subscribe((data) => {
      this.educaciones = data;
    });
  }

  hasRoute(router: string) {
    return this.router.url === router;
  }
}
