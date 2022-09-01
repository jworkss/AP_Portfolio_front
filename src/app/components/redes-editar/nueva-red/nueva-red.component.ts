import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelRedes } from 'src/app/model/redes';
import { RedesService } from 'src/app/servicios/redes.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-nueva-red',
  templateUrl: './nueva-red.component.html',
  styleUrls: ['./nueva-red.component.css']
})
export class NuevaRedComponent implements OnInit {
  id?: number;
  nombre: string = '';
  url_foto: string = '';
  url_red: string = '';
  persona_id: number = 1;

  selectedRed = '';

  redes: ModelRedes[] = [];

  editRed: ModelRedes = null;

  isLogged = false;

  constructor(
    private redesService: RedesService,
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
    this.redesService.buscar(id).subscribe((data) => {
      this.editRed = data;
    });
  }

  onCreate(): void {
    const red = new ModelRedes(
      this.nombre,
      this.url_foto,
      this.url_red,
      this.persona_id
    );
    this.redesService.save(red).subscribe(
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

  loadRedes(): void {
    this.redesService.redes().subscribe((data) => {
      this.redes = data;
    });
  }
  onSelected(nombre: string): void {
    this.selectedRed = nombre;
  }

  refresh(): void {
    window.location.reload();
}

}
