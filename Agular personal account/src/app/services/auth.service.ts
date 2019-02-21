import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';

@Injectable()
export class AuthService {
  private loggedIn = false;

  private passwordRecoveryUser = {
    userId: null,
    allowedToCreateNewPassword: false
  };

  constructor(private http: HttpClient) {}

  authUser(username, password): Observable<User> {
    const logInformData = {username, password};

    return this.http.post<User>(`http://localhost:8080/authUser`, logInformData);
  }

  resetPassword(username, dateOfBirth): Observable<boolean> {
    const formData = {username, dateOfBirth};

    return this.http.post<boolean>(`http://localhost:8080/resetPassword`, formData);
  }

  setPasswordRecoveryUser(userId, isAllow) {
    this.passwordRecoveryUser.userId = userId;
    this.passwordRecoveryUser.allowedToCreateNewPassword = isAllow;
  }

  isPasswordCanBeRecovered() {
    return this.passwordRecoveryUser.allowedToCreateNewPassword;
  }


  updatePassword(password): Observable<void> {

    return this.http.put<void>(`http://localhost:8080/updatePassword/${this.passwordRecoveryUser.userId}`, {password});
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  logIn() {
    this.loggedIn = true;
  }

  logOut() {
    this.loggedIn = false;
  }
}
