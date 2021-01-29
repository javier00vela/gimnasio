import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ISede } from 'src/app/interfaces/sede.interface';
import { SedeRestService } from 'src/app/services/sede/sede.rest.service';
import { UsuarioRestService } from 'src/app/services/usuario/usuario.rest.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {
  public listaSedes: Observable<ISede> = new Observable<ISede>(); 
  public listSedesUser: Observable<any> = new Observable<any>(); 
  constructor(private _sedesServices:SedeRestService , private _usuarioServices:UsuarioRestService) { }

  public id_ciudad : number = null;

  private getSedes(){
    this.listaSedes = this._sedesServices.allSedes();
  }

  public getListSedesaByUsuario(id:number){
    // alert(id)
    this.listSedesUser = this._usuarioServices.sedeByUsuario(id)
  }

  public onSubmit(datos:FormGroup){
    if(datos.valid){
        
    }
  }

  ngOnInit() {
    this.getSedes();
  }

}
