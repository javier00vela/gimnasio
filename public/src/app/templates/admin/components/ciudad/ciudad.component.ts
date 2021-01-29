import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CiudadRestService } from 'src/app/services/ciudad/ciudad.rest.service';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.scss']
})
export class CiudadComponent implements OnInit {

  public form : FormGroup = new FormGroup({
    nombre: new FormControl('nombre', [Validators.minLength(1) ,Validators.required] )
  });

  public submit(datos:FormGroup){
    if(datos.valid){
      this._ciudadServices.sendCiudads(datos.value).subscribe(()=>{
        alert("guardado!")
        this.form.reset();
      })
     
    }
  }

  constructor(private _ciudadServices:CiudadRestService) { }

  ngOnInit() {
    this.form.reset();
  }

}
