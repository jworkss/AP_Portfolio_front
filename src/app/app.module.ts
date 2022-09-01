import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Interceptor } from './servicios/interceptor';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/banner/banner.component';
import { VideoComponent } from './components/video/video.component';
import { RedesComponent } from './components/redes/redes.component';
import { LoginComponent } from './components/login/login.component';
import { NuevaRedComponent } from './components/redes-editar/nueva-red/nueva-red.component';
import { EditarRedComponent } from './components/redes-editar/editar-red/editar-red.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [Interceptor],
  bootstrap: [AppComponent],
})
export class AppModule {}
