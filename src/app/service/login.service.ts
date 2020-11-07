import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Router} from "@angular/router";
import {IUser} from "../model/IUser";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  httpOptions:any;

  constructor(private http: HttpClient,
              private router: Router) {
  }

  setTokenToHeader(){
    const headers_object = new HttpHeaders().set("Authorization", localStorage.getItem('token'));
    this.httpOptions = {
      headers: headers_object
    };
  }

  doLogin(userData: IUser): Observable<any> {
    return this.http.post<any>(environment.urlApi + 'login', userData);
  }

  doLogout(): void {
    this.setTokenToHeader();
    console.log(this.httpOptions)
    this.http.get(environment.urlApi + 'users/logout', this.httpOptions).subscribe(
      ()=> {
        localStorage.removeItem('isLoggedin');
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      }
    )
  }

  doRegister(userData: IUser): Observable<any> {
    return this.http.post<any>(environment.urlApi + 'users', userData);
  }
}