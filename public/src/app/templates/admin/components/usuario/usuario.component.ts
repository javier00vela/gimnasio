import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss']
})
export class UsuarioComponent implements OnInit {

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
