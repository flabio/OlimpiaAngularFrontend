import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import {AppRoutingModule} from './app-routing.module'
import { AppComponent } from './app.component';
import { UsuarioComponent } from './components/usuario/usuario/usuario.component';
import { EstadioComponent } from './components/estadio/estadio/estadio.component';
import { EstadioFormComponent } from './components/estadioForm/estadio-form/estadio-form.component';
import { ControlaccesoComponent } from './components/controlacceso/controlacceso/controlacceso.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';

import { ChartsModule } from 'ng2-charts';
// grafica


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    EstadioComponent,
    EstadioFormComponent,
    ControlaccesoComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
