import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, LOCALE_ID } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const TOKEN_KEY = 'auth-token'
const USER_KEY = 'auth-user'
const ROLES_KEY = 'user-roles'

const HOST = environment.apiHost;

const LOGIN_ROUTE = HOST + '/api/user/login';
const CHECK_TOKEN = HOST + '/api/user/checkjwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public saveToken(token: string): void{
    localStorage.removeItem(TOKEN_KEY);
    localStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string{
      return localStorage.getItem(TOKEN_KEY);
  }

  public saveUser(user): void{
      localStorage.removeItem(USER_KEY);
      localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public removeToken(){
      localStorage.removeItem(USER_KEY)
      localStorage.removeItem(TOKEN_KEY)
      localStorage.removeItem(ROLES_KEY)
  }

  public getUser(): any{
      return JSON.parse(localStorage.getItem(USER_KEY));
  }

  public saveUserRoles(roles){
    localStorage.removeItem(ROLES_KEY)
    localStorage.setItem(ROLES_KEY, JSON.stringify(roles))
  }

  public getUserRoles(){
    return JSON.parse(localStorage.getItem(ROLES_KEY))
  }

  public deleteUserRoles(){
    localStorage.removeItem(ROLES_KEY)
  }

  public login(credentials){
    return this.http.post(LOGIN_ROUTE, credentials).pipe(
      tap( (res:any) => {
        if(res.token && res.token.length > 0){
          this.saveToken(res.token);
          this.checkJwt();
          this.router.navigate(['packer'])
        }
      })
    )
  }

  public checkJwt(){
    const token = this.getToken();

    this.http.get(CHECK_TOKEN, { headers: {'Authorization': 'Bearer ' + token}}).subscribe(
      (res: any) => {
        this.saveUser(res.user.user)
        this.saveUserRoles(res.user.roles)
      },
      (error) => {
        this.removeToken();
        this.router.navigate(['/'])
      }
    )
  }

  public logout(){
    this.removeToken()
    this.router.navigate(['/']);
  }
}
