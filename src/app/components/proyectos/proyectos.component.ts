import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProyectosMoldes } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/servicios/proyectos.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
isLogged=false
proyectos:  ProyectosMoldes[] = []
  constructor(private router: Router, private tokenService: TokenService, private proyectosService: ProyectosService) { }

  ngOnInit(): void {
    this.cargarProyectos();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyectos(): void {
    this.proyectosService.proyectos().subscribe((data) => {
      this.proyectos = data;
    });
  }
  hasRoute(router: string) {
    return this.router.url === router;
  }



}
