import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioModule } from '../../models/usuario/usuario/usuario.module';
import { map, delay  } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = "https://localhost:44333/api/usuario";
  headers = new HttpHeaders({ 'Content-Type': 'application/json; charset=utf-8' });
  constructor(private _http: HttpClient) { }


  crearUsuario(usuarioTemp: UsuarioModule) {
    return this._http.post<any>(`${this.url}/crear`, usuarioTemp, { headers: this.headers })
      .pipe(
        map((resp: any) => {
          return resp;
        },
          (error: any) => {
            return error.error;
          }
        ),
      );
  }
  getDashboard() {
    return this._http.get(`${this.url}/dashboard`).pipe(
      map((resp:any)=>{
        return resp;
      }),
      delay(10)
    )
  }

  getUsuario() {
    return this._http.get(`${this.url}/listadousuario`).pipe(
      map(this.crearArreglo),
      delay(10)
    )
  }
  private crearArreglo(Obj: any) {

    const usuarios: UsuarioModule[] = [];

    Object.keys(Obj).forEach(key => {
      const usuario: UsuarioModule = Obj[key];
      usuarios.push(usuario);
    });
    return usuarios;
  }

}



