import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) : any{
    const idToken = localStorage.getItem("id_token");

    if (idToken) {
        const cloned = req.clone({
        
            headers: req.headers.set("Authorization",
                "Bearer " + idToken).set("Content-Type", 'application/json')
                .set("Access-Control-Allow-Origin","GET, POST, PATCH, PUT, DELETE, OPTIONS")
                .set("Access-Control-Allow-Headers", 'Access-Control-Allow-Headers')
                .set("Access-Control-Allow-Origin","*")
        }); 

        return next.handle(cloned);
    }
    else {
        return next.handle(req);
    }
  }

}