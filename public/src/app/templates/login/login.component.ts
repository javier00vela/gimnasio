import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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


  public loginForm : FormGroup = new FormGroup({
    identificacion: new FormControl('identificacion', [Validators.minLength(1) ,Validators.required] ),
    contrasena: new FormControl('contrasena', [Validators.required] )
  });

  public registroForm : FormGroup = new FormGroup({
    nombres: new FormControl('nombres', [Validators.minLength(1) ,Validators.required] ),
    apellidos: new FormControl('nombres', [Validators.minLength(1) ,Validators.required] ),
    id_ciudad: new FormControl('id_ciudad', [Validators.required] ),
    id_sede: new FormControl('id_sede', [Validators.required] ),
    identificacion: new FormControl('identificacion', [Validators.minLength(1) ,Validators.required] ),
    contrasena: new FormControl('contrasena', [Validators.required] )
  });


  enviarLogin(datos:FormGroup){
    if(datos.valid){
      this._usuarioService.authPerson(datos.value);
    }
  }

  enviarRegistro(datos:FormGroup){
    if(datos.valid){
      this._usuarioService.authPerson(this.usuario);
    }
  }
  

  ngOnInit(): void {
  }

}

