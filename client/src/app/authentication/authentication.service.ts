import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { SigninCradential, SigninResponse } from './interfaces/signinInterfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  rootUrl = 'http://localhost:4000/api/v1';

  constructor(private http: HttpClient) { }

  signin(cradentials: SigninCradential) {
    return this.http.get<SigninResponse>(
      this.rootUrl + '/login',
      {
        params: {
          username: cradentials.username,
          password: cradentials.password
        }
      }
    )
  }
}
