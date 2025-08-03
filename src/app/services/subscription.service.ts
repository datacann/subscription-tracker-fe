import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {Subscription} from '../models/subscription.model';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  private apiUrl = 'http://localhost:5000/api/subscriptions';

  constructor(private http: HttpClient) {}

  getSubscriptions(): Observable<Subscription[]> {
    return this.http.get<Subscription[]>(this.apiUrl);
  }

  addSubscription(data: Subscription): Observable<Subscription> {
    return this.http.post<Subscription>(this.apiUrl, data);
  }

  updateSubscription(_id: string, data: Subscription): Observable<Subscription> {
    return this.http.put<Subscription>(`${this.apiUrl}/${_id}`, data);
  }
}
