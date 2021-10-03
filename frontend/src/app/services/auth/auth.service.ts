import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponse, Login, Register } from '../../Models';

@Injectable({ providedIn: 'root' })

export class AuthService
{
  constructor(private http: HttpClient) { }
  
  login(user: Login): Observable<AuthResponse>
  {
    return this.http.post<AuthResponse>('/api/auth/login', user, { withCredentials: true })
  }

  register(user: Register): Observable<AuthResponse>
  {
    return this.http.post<AuthResponse>('/api/auth/register', user, { withCredentials: true })
  }

  isAdmin(): Observable<AuthResponse>
  {
    return this.http.get<AuthResponse>('/api/auth/isadmin', { withCredentials: true })
  }

  isLogged(): Observable<AuthResponse>
  {
    return this.http.get<AuthResponse>('/api/auth/islogged', { withCredentials: true })
  }

  logout(): Observable<AuthResponse>
  {
    return this.http.get<AuthResponse>('/api/auth/logout', { withCredentials: true })
  }

}
