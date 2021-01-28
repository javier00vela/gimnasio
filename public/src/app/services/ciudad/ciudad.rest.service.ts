import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICiudad } from 'src/app/interfaces/ciudad.interface';
import { CrudService } from 'src/app/services/_general_/crud.service';

@Injectable({
  providedIn: 'root'
})
export class CiudadRestService extends CrudService{

  private table = 'ciudad';
  constructor(protected http : HttpClient ) { 
    super(http );
  }

  public allCiudads(){
    return this.get(`${this.table}/`);
  }

  public byIdCiudad(id:number){
    return this.getById(`${this.table}/`,id);
  }

  public sendCiudads(ciudad:ICiudad){
    return this.post(`${this.table}/`,ciudad);
  }

  public authCiudad(ciudad:ICiudad){
    return this.post(`${this.table}/auth`,ciudad);
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
