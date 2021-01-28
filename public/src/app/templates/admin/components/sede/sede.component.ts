import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sede',
  templateUrl: './sede.component.html',
  styleUrls: ['./sede.component.scss']
})
export class SedeComponent implements OnInit {

  constructor() { }

  public form : FormGroup = new FormGroup({
    nombre: new FormControl('nombre', [Validators.minLength(1) ,Validators.required] ),
    id_ciudad: new FormControl('id_ciudad', [Validators.required] )
  });

  public onSubmit(datos:FormGroup){
    if(datos.valid){
        
    }
  }

  ngOnInit() {
  }

}
