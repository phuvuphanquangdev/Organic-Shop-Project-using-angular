import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

interface SignUpCredentials {
  username: string;
  password: string;
  confirmPassword: string;
}

interface SignUpResponse {
  username: string;
}

interface SignedInResponse {
  authenticated: boolean;
  username: string;
}

interface SigninInCredentials {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';
  signedin$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  usernameAvailable(username: string){

    return this.http.post<any>(`${this.rootUrl}/auth/username`, {
            username
        });
  }

  signUp(credentials: SignUpCredentials){
    return this.http.post<SignUpResponse>(
      `${this.rootUrl}/auth/signup`,
      credentials
    ).pipe(
      tap(() => {
        this.signedin$.next(true);
      })
    );
  }

  checkAuth(){
    return this.http.get<SignedInResponse>(`${this.rootUrl}/auth/signedin`)
        .pipe( tap(({authenticated}) => {
          this.signedin$.next(authenticated);
        }));
  }

  signout(){
    return this.http.post(`${this.rootUrl}/auth/signout`, {})
     .pipe( tap( () => {
       this.signedin$.next(false);
     }));
  }

  signin(credentials: SigninInCredentials){
    return this.http.post(`${this.rootUrl}/auth/signin`, credentials)
      .pipe(
        tap(() => {
          this.signedin$.next(true);
        })
      );
  }

}
