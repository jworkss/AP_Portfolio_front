import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarEducacionComponent } from './components/educacion-editar/editar-educacion/editar-educacion.component';
import { NuevaEducacionComponent } from './components/educacion-editar/nueva-educacion/nueva-educacion.component';

import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { PersonaEditarComponent } from './components/persona-editar/persona-editar/persona-editar.component';
import { PersonaNuevaComponent } from './components/persona-editar/persona-nueva/persona-nueva.component';
import { EditarRedComponent } from './components/redes-editar/editar-red/editar-red.component';
import { NuevaRedComponent } from './components/redes-editar/nueva-red/nueva-red.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'red/nueva', component: NuevaRedComponent },
  { path: 'red/editar/:id', component: EditarRedComponent },
  { path: 'persona/nueva', component: PersonaNuevaComponent },
  { path: 'persona/editar/:id', component: PersonaEditarComponent },
  { path: 'educacion/editar/:id', component: EditarEducacionComponent },
  {path: 'educacion/crear', component: NuevaEducacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
