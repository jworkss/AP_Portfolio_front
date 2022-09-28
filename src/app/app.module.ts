import { HttpClientModule } from '@angular/common/http';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Interceptor } from './servicios/interceptor';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { NavbarComponent } from './components/navbar/navbar.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { VideoComponent } from './components/video/video.component';
import { RedesComponent } from './components/redes/redes.component';
import { LoginComponent } from './components/login/login.component';
import { NuevaRedComponent } from './components/redes-editar/nueva-red/nueva-red.component';
import { EditarRedComponent } from './components/redes-editar/editar-red/editar-red.component';
import { PersonaNuevaComponent } from './components/persona-editar/persona-nueva/persona-nueva.component';
import { PersonaEditarComponent } from './components/persona-editar/persona-editar/persona-editar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EditarEducacionComponent } from './components/educacion-editar/editar-educacion/editar-educacion.component';
import { NuevaEducacionComponent } from './components/educacion-editar/nueva-educacion/nueva-educacion.component';
import { EditarExperienciaComponent } from './components/experiencia-editar/editar-experiencia/editar-experiencia.component';
import { NuevaExperienciaComponent } from './components/experiencia-editar/nueva-experiencia/nueva-experiencia.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SkillsNuevaComponent } from './components/skills-editar/skills-nueva/skills-nueva.component';
import { SkillsEditarComponent } from './components/skills-editar/skills-editar/skills-editar.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ProyectosNuevoComponent } from './components/proyectos-eiditar/proyectos-nuevo/proyectos-nuevo.component';
import { ProyectosEditarComponent } from './components/proyectos-eiditar/proyectos-editar/proyectos-editar.component';

//date
import localePy from '@angular/common/locales/es-PY';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePy, 'es');
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    HeaderComponent,
    BannerComponent,
    VideoComponent,
    RedesComponent,
    LoginComponent,
    NuevaRedComponent,
    EditarRedComponent,
    PersonaNuevaComponent,
    PersonaEditarComponent,
    FooterComponent,
    SobreMiComponent,
    EducacionComponent,
    ExperienciaComponent,
    EditarEducacionComponent,
    NuevaEducacionComponent,
    EditarExperienciaComponent,
    NuevaExperienciaComponent,
    SkillsComponent,
    SkillsNuevaComponent,
    SkillsEditarComponent,
    ProyectosComponent,
    ProyectosNuevoComponent,
    ProyectosEditarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgCircleProgressModule.forRoot({}),
  ],
  providers: [Interceptor, { provide: LOCALE_ID, useValue: 'es' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
