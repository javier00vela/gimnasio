import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { ICiudad } from 'src/app/interfaces/ciudad.interface';
import { CiudadRestService } from 'src/app/services/ciudad/ciudad.rest.service';
import { SedeRestService } from 'src/app/services/sede/sede.rest.service';

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.scss']
})
export class SedeComponent implements OnInit {
  public listaCiudades: Observable<ICiudad> = new Observable<ICiudad>(); 
  constructor(private _sedesServices:SedeRestService ,private _ciudadServices:CiudadRestService ) { }
  
  public form : FormGroup = new FormGroup({
    nombre: new FormControl('nombre', [Validators.minLength(1) ,Validators.required] ),
    id_ciudad: new FormControl('id_ciudad', [Validators.required] )
  });
  
  public onSubmit(datos:FormGroup){
    if(datos.valid){
      this._sedesServices.sendSedes(datos.value).subscribe(()=>{
          alert("guardado");
          this.form.reset();
      })
    }
  }
  
  private getCiudad(){
    this.listaCiudades = this._ciudadServices.allCiudads();
  }
  
  
  ngOnInit() {
    this.getCiudad();
    this.form.reset();
  }
  
}
