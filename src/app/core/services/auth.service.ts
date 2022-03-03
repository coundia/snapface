import {Injectable} from "@angular/core";

@Injectable({
  providedIn : "root"
}
)
export class AuthService{
  private token = 'MyFakeToken';



  getToken() :string{
    return this.token;
  }

  login(data: { email: string,password: string}):boolean {
    console.log("data arrived")
    console.log(data)
     return (data.email == 'papacoundia@gmail.com' && data.password == 'passer')
  }
}
