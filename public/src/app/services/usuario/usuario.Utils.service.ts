import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { IUsuario } from 'src/app/interfaces/usuario.interface';
import { AuthService } from '../../utils/auth/auth.service';
import { UsuarioRestService } from './usuario.rest.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioUtilsService {

  constructor(private _usuarioRestService : UsuarioRestService , private _router:Router ) { }


  public authPerson(usuario :any){
    this._usuarioRestService.authUsuario(usuario).subscribe(data => {
      console.log(data);
      AuthService.setSession(data)
      this._router.navigate(["/admin"])
    })
  }



}
