import { NgModule } from '@angular/core';

import {Routes,RouterModule} from '@angular/router'
import { ControlaccesoComponent } from './components/controlacceso/controlacceso/controlacceso.component';

import { EstadioComponent } from './components/estadio/estadio/estadio.component';
import { EstadioFormComponent } from './components/estadioForm/estadio-form/estadio-form.component';
import { UsuarioComponent } from './components/usuario/usuario/usuario.component';
import { DashboardComponent } from './components/dashboard/dashboard/dashboard.component';

const routes:Routes = [
  {path:'dashboard', component:DashboardComponent},
  {path:'usuario', component:UsuarioComponent},
  {path:'control-acceso', component:ControlaccesoComponent},
  {path:'estadio', component:EstadioComponent},
  {path:'crear-estadio', component:EstadioFormComponent},
  {path:'editar-estadio/:id', component:EstadioFormComponent},
  
  {path:'**',pathMatch:'full', redirectTo:'dashboard'}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
