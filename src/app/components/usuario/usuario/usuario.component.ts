import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../../../services/usuario/usuario.service';
import { UsuarioModule } from '../../../models/usuario/usuario/usuario.module';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  usuario: UsuarioModule[] = [];
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.usuarioService.getUsuario().subscribe(resp=>{
      this.usuario=resp;
   })


   this.usuarioService.getDashboard().subscribe(resp=>{
    console.log(resp)
 })
  }

}
