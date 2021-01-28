import { Component, OnInit } from '@angular/core';
import { timeoutWith } from 'rxjs/operators';
import { IUsuario } from 'src/app/interfaces/usuario.interface';
import { UsuarioUtilsService } from 'src/app/services/usuario/usuario.Utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public usuario:any = {
    identificacion : 123,
    contrasena : ''
  }; 

  constructor(private _usuarioService: UsuarioUtilsService) { }

  enviar(){
      this._usuarioService.authPerson(this.usuario);
  }

  ngOnInit(): void {
  }

}

