import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface SignUpCredentials {
  username: string;
  password: string;
  confirmPassword: string;
}

interface SignUpResponse {
  username: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  rootUrl = 'https://api.angular-email.com';

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
    );
  }
}
