import { Component, OnInit } from '@angular/core';

import { EstadioService } from '../../../services/estadio/estadio.service';
import { UsuarioModule } from '../../../models/usuario/usuario/usuario.module';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { EstadioModule } from 'src/app/models/estadio/estadio/estadio.module';
import { UsuarioService } from '../../../services/usuario/usuario.service';
@Component({
  selector: 'app-controlacceso',
  templateUrl: './controlacceso.component.html',

})
export class ControlaccesoComponent implements OnInit {
  usuario: UsuarioModule = new UsuarioModule();
  estadio: EstadioModule[]=[];
  mgs:string='';
  estado:string='';
  constructor(private estadioService: EstadioService,private usuarioService:UsuarioService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.listadoEstadio()
  }
  guardar(form: NgForm) {
    if (form.invalid) {
      console.log('Formulario no válido');
      return;
    }
    
    let peticion: Observable<any>;
    peticion = this.usuarioService.crearUsuario(this.usuario);
    peticion.subscribe(resp => {
      this.mgs=resp.mensaje
      if(resp.esExitoso){
        this.estado='success';
      }



    },
    err=>{
      console.log(err)
       this.mgs=err.error.mensaje
       
       if(!err.error.esExitoso){
        this.estado='danger';
      }
    }
    );

  }
  listadoEstadio() {
    this.estadioService.getEstadio().subscribe(resp => {
      this.estadio = resp;
    })
  }
}
