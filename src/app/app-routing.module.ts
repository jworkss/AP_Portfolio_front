import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { EditarRedComponent } from './components/redes-editar/editar-red/editar-red.component';
import { NuevaRedComponent } from './components/redes-editar/nueva-red/nueva-red.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'red/nueva', component: NuevaRedComponent },
  { path: 'red/editar/:id', component: EditarRedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
