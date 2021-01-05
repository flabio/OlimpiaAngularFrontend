import { Component, OnInit } from '@angular/core';
import { EstadioService } from '../../../services/estadio/estadio.service';
import { EstadioModule } from '../../../models/estadio/estadio/estadio.module';

@Component({
  selector: 'app-estadio',
  templateUrl: './estadio.component.html',
  styleUrls: ['./estadio.component.css']
})
export class EstadioComponent implements OnInit {
  estadios: EstadioModule[] = [];
  mgs:any='';
  constructor(private estadioService: EstadioService) { 
  }
 
  ngOnInit(): void {
   this.listodoEstadio()  
  }
  eliminar(id:number){
    this.estadioService.eliminarEstadio(id).subscribe(resp=>{
      this.mgs=resp.mensaje
      this.listodoEstadio()
      this.estadios.splice(id, 1);
    })
  }
  listodoEstadio(){
    this.estadioService.getEstadio().subscribe(resp=>{
       this.estadios=resp;
    })
  }
}
