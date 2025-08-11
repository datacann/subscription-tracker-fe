import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    private apiUrl = 'http://localhost:5000/api/subscriptions';

    constructor(private http: HttpClient) {}

login(username: string, password: string): Observable<Auth> {
  return this.http.post<Auth>(`${this.apiUrl}/login`, { username, password });
}

isLoggedIn(): boolean {
  return !!localStorage.getItem('token'); // veya sen nasıl tutuyorsan
}
}
