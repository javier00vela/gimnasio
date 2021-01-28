import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ciudad',
  templateUrl: './ciudad.component.html',
  styleUrls: ['./ciudad.component.scss']
})
export class CiudadComponent implements OnInit {

  public form : FormGroup = new FormGroup({
    nombre: new FormControl('nombre', [Validators.minLength(1) ,Validators.required] )
  });

  public onSubmit(datos:FormGroup){
    if(datos.valid){
        
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
