import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {User} from '../model/user.model';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {
  }
  getUser(userId): Observable<User> {
    return this.http.get<User>(`${environment.SERVER_API_URL}/users/${userId}`);
  }
  saveUser(userId): Observable<any> {
    return this.http.post<any>(`${environment.SERVER_API_URL}/users/${userId}`, null);
  }
}
