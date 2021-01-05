import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { EstadioModule } from '../../models/estadio/estadio/estadio.module';
import { map, delay } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EstadioService {
  private url = "https://localhost:44333/api/estadio";
  headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8'});
  constructor(private _http: HttpClient) { }

  crearEstadio(estadio: EstadioModule) {
    return this._http.post(`${this.url}/crear`, estadio,{headers:this.headers})
      .pipe(
        map((resp: any) => {
          return resp;
        })
      );
  }
  editarEstadio(estadio: EstadioModule) {
    return this._http.post(`${this.url}/editar`, estadio,{headers:this.headers})
      .pipe(
        map((resp: any) => {
          return resp;
        })
      );
  }
  eliminarEstadio(id:number){
    return this._http.delete(`${this.url}/eliminar/?id=${id}`).pipe(
      map((resp: any) => {
        return resp;
      })
    );
  }

  getEstadio() {
    return this._http.get(`${this.url}/listadoestadio`).pipe(
      map(this.crearArreglo),
      delay(10)
    )
  }
  private crearArreglo(Obj: any) {

    const estadios: EstadioModule[] = [];

    Object.keys(Obj).forEach(key => {
      const estadio: EstadioModule = Obj[key];
      estadios.push(estadio);
    });
    return estadios;
  }
}
