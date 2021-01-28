import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../utils/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private auth:AuthService , private router : Router){ }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log(state.url);
      
    if(!this.auth.isAuthed() && state.url == '/admin'){
        this.router.navigate(["login"]);
    }


    if(this.auth.isAuthed() && state.url == '/login'){
      this.router.navigate(["admin"]);
    }
    return true;
  }
  
}
