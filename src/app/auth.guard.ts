// import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
// import { AuthService } from "./services/auth.service";
// import { Inject, Injectable } from "@angular/core";
// import { Observable } from "rxjs";

// @Injectable({
//     providedIn:'root'
// })

// class AuthGuard implements CanActivate{
//     constructor(private authserve:AuthService , private router:Router){}
//     canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
//         if(this.authserve.isLoggedIn()){
//             return true
//            }
//            this.router.navigate(['login']);
//            return false
//     }
    
// }