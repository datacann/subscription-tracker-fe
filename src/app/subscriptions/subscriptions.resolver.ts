import {inject, Injectable} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Resolve} from '@angular/router';
import {SubscriptionService} from '../services/subscription.service';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionsResolver implements Resolve<Subscription[]> {
  constructor(private subscriptionService: SubscriptionService) {}

  resolve(): Observable<Subscription[]> {
    return this.subscriptionService.getSubscriptions();
  }
}
