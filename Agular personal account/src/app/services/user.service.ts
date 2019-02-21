import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../models/user.model';

@Injectable()
export class UserService {
  private user: User;

  constructor(private http: HttpClient) {}

  getUserDataFromServer(): Observable<User> {
    return this.http.get<User>(`http://localhost:8080/users/${this.user.id}`);
  }

  saveUserDataInMemory(user: User) {
    this.user = user;
  }

  getUserFromMemory() {
    return this.user;
  }

  updateUserDataOnServer(data): Observable<User> {
    return this.http.put<User>(`http://localhost:8080/users/${this.user.id}`, data);
  }
}
