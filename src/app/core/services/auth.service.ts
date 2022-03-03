import {Injectable} from "@angular/core";


@Injectable({
  providedIn : "root"
}
)
export class AuthService{
  private token = '';



  getToken() :string{
    return this.token;
  }

  login(data: { email: string,password: string}):boolean {
    console.log("data arrived")
    console.log(data)
     if (data.email == 'papacoundia@gmail.com' && data.password == 'passer'){
       this.token= btoa(data.email+":"+data.password);;//reverse by atob
       return true;
     }else{
       this.token="";
       return false
     }
  }
}
