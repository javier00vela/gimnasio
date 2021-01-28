import { Injectable } from '@angular/core';
import { ICiudad } from 'src/app/interfaces/ciudad.interface';
import { AuthService } from '../../utils/auth/auth.service';
import { CiudadRestService } from './ciudad.rest.service';

@Injectable({
  providedIn: 'root'
})
export class CiudadUtilsService {

  constructor(private _ciudadRestService : CiudadRestService ) { }


  public authPerson(ciudad :ICiudad){
    this._ciudadRestService.authCiudad(ciudad).subscribe(data => {
      AuthService.setSession(data)
    })
  }



}
