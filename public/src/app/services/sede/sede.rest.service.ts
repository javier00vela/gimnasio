import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISede } from 'src/app/interfaces/sede.interface';
import { CrudService } from 'src/app/services/_general_/crud.service';

@Injectable({
  providedIn: 'root'
})
export class SedeRestService extends CrudService{

  private table = 'sede';
  constructor(protected http : HttpClient  ) { 
    super(http);
  }

  public allSedes(){
    return this.get(`${this.table}/`);
  }

  public byIdSede(id:number){
    return this.getById(`${this.table}/`,id);
  }

  public sendSedes(sede:ISede){
    return this.post(`${this.table}/`,sede);
  }

  public authSede(sede:ISede){
    return this.post(`${this.table}/auth`,sede);
  }

  

  // public auth(){
  //   return new Observable((subscriber)=>{
  //      subscriber.next({ data : {
  //       idToken: 'jwtBearerToken', 
  //       expiresIn: 50000
  //     } , response : 200 ,  message : "  Ok" })
  //   })
  // }


}
