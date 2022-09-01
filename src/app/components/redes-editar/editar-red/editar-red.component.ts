import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModelRedes } from 'src/app/model/redes';
import { RedesService } from 'src/app/servicios/redes.service';
import { TokenService } from 'src/app/servicios/token.service';

@Component({
  selector: 'app-editar-red',
  templateUrl: './editar-red.component.html',
  styleUrls: ['./editar-red.component.css'],
})
export class EditarRedComponent implements OnInit {
  id?: number;
  nombre: string = '';
  url_foto: string = '';
  url_red: string = '';
  persona_id: number = 1;

  isLogged = false;

  selectedRed = '';

  redes: ModelRedes[] = [];

  editRed: ModelRedes = null;

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
    this.redesService.buscar(id).subscribe(
      (data) => {
        this.editRed = data;
      },
      (err) => {
        alert('Error al modificar experiencia');
        this.router.navigate(['editarredes']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activateRoute.snapshot.params['id'];
    this.redesService.upate(id, this.editRed).subscribe(
      (data) => {
        this.router.navigate(['/red/nueva']);
      },
      (err) => {
        alert('Se logro modificar expereincia');
        this.router.navigate(['/red/nueva']);
      }
    );
    this.refresh();
  }

  refresh(): void {
    window.location.reload();
  }

  loadRedes(): void {
    this.redesService.redes().subscribe((data) => {
      this.redes = data;
    });
  }
  onSelected(nombre: string): void {
    this.selectedRed = nombre;
  }

  onDelete(id?: number) {
    if (id != undefined) {
      this.redesService.delete(id).subscribe(
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
