import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModelRedes } from 'src/app/model/redes';
import { RedesService } from 'src/app/servicios/redes.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css'],
})
export class RedesComponent implements OnInit {
  redes: ModelRedes[] = [];
  isLogged = false;
  constructor(
    private redesService: RedesService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarRed();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarRed(): void {
    this.redesService.redes().subscribe((data) => {
      this.redes = data;
    });
  }

  hasRoute(router: string) {
    return this.router.url === router;
  }
}
