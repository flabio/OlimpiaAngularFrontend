import { Component, OnInit } from '@angular/core';
import { EstadioService } from '../../../services/estadio/estadio.service';
import { EstadioModule } from '../../../models/estadio/estadio/estadio.module';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-estadio-form',
  templateUrl: './estadio-form.component.html',
  styleUrls: ['./estadio-form.component.css']
})
export class EstadioFormComponent implements OnInit {
  estadio: EstadioModule = new EstadioModule();
  mgs: any = '';

  constructor(private estadioService: EstadioService, private route: ActivatedRoute) {
  }


  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.listadoEstadio(id);
  }
  guardar(form: NgForm) {
    if (form.invalid) {
      console.log('Formulario no válido');
      return;
    }
    let peticion: Observable<any>;
    if (this.estadio.capacidadMaxima < this.estadio.capacidadPermitida) {
      this.mgs = "la capacidad Maxima deber superior a la capacidad Permitida"
      return;
    }
    if (this.estadio.idEstadio) {

      peticion = this.estadioService.editarEstadio(this.estadio);
    } else {
      peticion = this.estadioService.crearEstadio(this.estadio);
    }

    peticion.subscribe(resp => {
      this.mgs = resp.mensaje
    });
  }

  listadoEstadio(id: number) {
    this.estadioService.getEstadio().subscribe(resp => {
      this.estadio = resp.filter(x => x.idEstadio == id)[0];
    })
  }
}
