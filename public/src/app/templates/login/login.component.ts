import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { timeoutWith } from 'rxjs/operators';
import { ICiudad } from 'src/app/interfaces/ciudad.interface';
import { ISede } from 'src/app/interfaces/sede.interface';
import { IUsuario } from 'src/app/interfaces/usuario.interface';
import { CiudadRestService } from 'src/app/services/ciudad/ciudad.rest.service';
import { SedeRestService } from 'src/app/services/sede/sede.rest.service';
import { UsuarioRestService } from 'src/app/services/usuario/usuario.rest.service';
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
  public listaCiudades: Observable<ICiudad> = new Observable<ICiudad>(); 
  public listaSedes: Observable<ISede> = new Observable<ISede>(); 
  constructor(private _sedesServices:SedeRestService ,private _usuarioService: UsuarioUtilsService ,private _ciudadServices:CiudadRestService ,private  _usuarioRestService: UsuarioRestService ) { }

  private getCiudad(){
    this.listaCiudades = this._ciudadServices.allCiudads();
  }

  private getSedes(){
    this.listaSedes = this._sedesServices.allSedes();
  }
  
  public loginForm : FormGroup = new FormGroup({
    identificacion: new FormControl('identificacion', [Validators.minLength(1) ,Validators.required] ),
    contrasena: new FormControl('contrasena', [Validators.required] )
  });

  public registroForm : FormGroup = new FormGroup({
    nombres: new FormControl('nombres', [Validators.minLength(1) ,Validators.required] ),
    id_perfil: new FormControl('id_perfil' ),
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
      this._usuarioRestService.sendUsuarios(datos.value).subscribe(()=>{
        alert("guardado");
        datos.reset();
      });
    }
  }

  ngOnInit(): void {
    this.getCiudad();
    this.getSedes();
    this.registroForm.reset();
    this.loginForm.reset();
  }

}