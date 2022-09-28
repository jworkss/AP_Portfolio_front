import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarEducacionComponent } from './components/educacion-editar/editar-educacion/editar-educacion.component';
import { NuevaEducacionComponent } from './components/educacion-editar/nueva-educacion/nueva-educacion.component';
import { EditarExperienciaComponent } from './components/experiencia-editar/editar-experiencia/editar-experiencia.component';
import { NuevaExperienciaComponent } from './components/experiencia-editar/nueva-experiencia/nueva-experiencia.component';

import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { PersonaEditarComponent } from './components/persona-editar/persona-editar/persona-editar.component';
import { PersonaNuevaComponent } from './components/persona-editar/persona-nueva/persona-nueva.component';
import { ProyectosEditarComponent } from './components/proyectos-eiditar/proyectos-editar/proyectos-editar.component';
import { ProyectosNuevoComponent } from './components/proyectos-eiditar/proyectos-nuevo/proyectos-nuevo.component';
import { EditarRedComponent } from './components/redes-editar/editar-red/editar-red.component';
import { NuevaRedComponent } from './components/redes-editar/nueva-red/nueva-red.component';
import { SkillsEditarComponent } from './components/skills-editar/skills-editar/skills-editar.component';
import { SkillsNuevaComponent } from './components/skills-editar/skills-nueva/skills-nueva.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', component: LoginComponent },
  { path: 'red/crear', component: NuevaRedComponent },
  { path: 'red/editar/:id', component: EditarRedComponent },
  { path: 'persona/crear', component: PersonaNuevaComponent },
  { path: 'persona/editar/:id', component: PersonaEditarComponent },
  { path: 'educacion/editar/:id', component: EditarEducacionComponent },
  {path: 'educacion/crear', component: NuevaEducacionComponent},
  {path: 'experiencia/crear', component:NuevaExperienciaComponent},
  {path: 'experiencia/editar/:id', component:EditarExperienciaComponent},
  {path: 'skills/crear', component:SkillsNuevaComponent},
  {path: 'skills/editar/:id', component:SkillsEditarComponent},
  {path: 'proyectos/crear', component:ProyectosNuevoComponent},
  {path: 'proyectos/editar/:id', component:ProyectosEditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
