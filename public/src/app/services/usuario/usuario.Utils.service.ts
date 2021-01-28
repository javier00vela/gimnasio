import { Injectable } from '@angular/core';
import { IUsuario } from 'src/app/interfaces/usuario.interface';
import { AuthService } from '../../utils/auth/auth.service';
import { UsuarioRestService } from './usuario.rest.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioUtilsService {

  constructor(private _usuarioRestService : UsuarioRestService ) { }


  public authPerson(usuario :IUsuario){
    this._usuarioRestService.authUsuario(usuario).subscribe(data => {
      AuthService.setSession(data)
    })
  }



}
