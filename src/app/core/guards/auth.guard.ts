import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../services/auth.service";


@Injectable(
  {
    providedIn: "root"
  }
)
export class AuthGuard implements CanActivate {
  //const
  constructor(private authService: AuthService, private router: Router){}

//funct guard
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this.authService.getToken()){
            return true;
          }else{
            this.router.navigateByUrl("/auth/login");
            return false;
        }
        //const token = this.auth.getToken();
        // return !!token;
    //Le double bang  !!  est une technique pour transformer une valeur "truthy" en  true  .
    }
}
