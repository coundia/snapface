import {Injectable} from "@angular/core";
import {Router} from "@angular/router";


@Injectable({
  providedIn : "root"
}
)
export class AuthService{
  private token = '';

  constructor(private router : Router){}


  getToken() :string {
    return this.token;
  }
  setToken(token:string) :void{
    //localStorage.setItem('token',token)
    this.token=token;
  }

  login(data: { email: string,password: string}):boolean {
    console.log("data arrived")
    console.log(data)
     if (data.email == 'papacoundia@gmail.com' && data.password == 'passer'){
       this.token= btoa(data.email+":"+data.password);//reverse by atob
       this.setToken(this.token);
       return true;
     }else{
       this.token="";
       return false
     }
  }

  onLogout() {
    this.token="";
    this.router.navigateByUrl("/");

  }

  onLogin() {
    this.router.navigateByUrl("/auth/login");
  }
}
