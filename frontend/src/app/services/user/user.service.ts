import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserResponse, UsersResponse } from 'src/app/Models';

@Injectable({ providedIn: 'root' })

export class UserService
{
  constructor(private http: HttpClient) { }

  getUser(): Observable<UserResponse>
  {
    return this.http.get<UserResponse>('/api/user', { withCredentials: true })
  }

  getUsers(): Observable<UsersResponse>
  {
    return this.http.get<UsersResponse>('/api/user/users', { withCredentials: true })
  }

}
