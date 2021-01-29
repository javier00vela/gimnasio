import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IResponse } from 'src/app/interfaces/response.interface';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(protected http: HttpClient) { }


  private statusValidate(status: number) {
    switch (status) {
      case 401:
        alert("Desautorizado");
        break;

      case 500:
        alert("error");
        break;

      case 404:
        alert("Registro no encontrado")
        break;

    }
  }


  protected get(route: string): Observable<any> {
    return this.http.get(`${environment.router.back}/${route}`).pipe(map((data: any) => data));
  }

  protected getById(route: string, id: number): Observable<any> {
    return this.http.get(`${environment.router.back}/${route}/${id}`);
  }

  protected post(route: string, data: JSON | Object | []): Observable<any> {
    return this.http.post(`${environment.router.back}/${route}`, data).pipe(map((data: any) => data));
  }

  protected put(route: string, data: JSON | Object | []): Observable<any> {
    return this.http.put(`${environment.router.back}/${route}`, data).pipe(map((data: any) => data));
  }

  protected putById(route: string, id: number, data: JSON | Object | []): Observable<any> {
    return this.http.put(`${environment.router.back}/${route}/${id}`, data).pipe(map((data: any) => data));
  }

  protected deleteById(route: string, id: number): Observable<IResponse<Object | JSON>> {
    return this.http.delete(`${environment.router.back}/${route}/${id}`).pipe(map((data: any) => data));
  }

}
