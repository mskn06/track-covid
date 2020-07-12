import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { CONSTANTS } from '../../../CONSTANTS';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(user) {
    return this.http.post<any>(CONSTANTS.LOGIN(), user).pipe(
      map((userData) => {
        if (userData) {
          console.log(userData);
          localStorage.setItem('currentUser', userData.item._id);
        }
        return userData.item;
      })
    );
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
