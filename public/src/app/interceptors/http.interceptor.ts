import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) : any{
    const idToken = localStorage.getItem("id_token");

    // if (idToken) {
        const cloned = req.clone({
            headers: req.headers.set("authorization","Bearer 123456789")
        }); 

        return next.handle(cloned);
    //  }
    // else {
    //      return next.handle(req);
    //  }
  }

}