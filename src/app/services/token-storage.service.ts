import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

const TOKEN_KEY = 'token';
const USER_KEY = 'currentUser';
@Injectable({
  providedIn: 'root',
})
export class TokenStorageService {
  constructor() {}

  signOut(): void {
    window.sessionStorage.clear();
  }

  public getUser(): any {
    const user = window.localStorage.getItem(USER_KEY);

    if (user) {
      const helper = new JwtHelperService();
      const token = window.localStorage.getItem(TOKEN_KEY);
      const decodedToken = helper.decodeToken(token);
      return decodedToken;
    }
    return {};
  }
}
