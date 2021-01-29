import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUsuario } from 'src/app/interfaces/usuario.interface';
import { CrudService } from 'src/app/services/_general_/crud.service';
@Injectable({
  providedIn: 'root'
})
export class UsuarioRestService extends CrudService{

  private table = 'usuario';
  constructor(protected http : HttpClient) { 
    super(http);
  }

  public allUsuarios(){
    return this.get(`${this.table}/`);
  }

  public byIdUsuario(id:number){
    return this.getById(`${this.table}/`,id);
  }

  public sendUsuarios(usuario:IUsuario){
    return this.post(`${this.table}/`,usuario);
  }

  public authUsuario(usuario:IUsuario){
    return this.post(`${this.table}/auth`,usuario);
  }

  public sedeByUsuario(id:number){
    return this.getById(`${this.table}/sedes`,id);
  }

  

  // public auth(){
  //   return new Observable((subscriber)=>{
  //      subscriber.next({ data : {
  //       idToken: 'jwtBearerToken', 
  //       expiresIn: 50000
  //     } , response : 200 ,  message : "  Ok" })
  //   })
  // }


}
