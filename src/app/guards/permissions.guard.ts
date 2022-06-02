import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class PermissionsGuard implements CanActivate {

  constructor( private router: Router, private authService: AuthService){}

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.isUserLogIn()){
      return true;
    }
    this.router.navigate(['/']);
    return false;
  }

  

  isUserLogIn(){  //TODO: observable logueado
    return this.authService.currentUser$.subscribe(
      (value)=>{
        console.log(this.authService.canRead(value));


        return false;
        // if(value != null){
        //   return true;
        // } else {
        //   return false;
        // }
      }
    );
  }
  
}
