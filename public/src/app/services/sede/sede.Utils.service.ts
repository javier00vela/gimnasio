import { Injectable } from '@angular/core';
import { ISede } from 'src/app/interfaces/sede.interface';
import { AuthService } from '../../utils/auth/auth.service';
import { SedeRestService } from './sede.rest.service';

@Injectable({
  providedIn: 'root'
})
export class SedeUtilsService {

  constructor(private _sedeRestService : SedeRestService ) { }


  public authPerson(sede :ISede){
    this._sedeRestService.authSede(sede).subscribe(data => {
      AuthService.setSession(data)
    })
  }



}
