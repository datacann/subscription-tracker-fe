import {inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Resolve} from '@angular/router';
import {SubscriptionService} from '../services/subscription.service';
import {Subscription} from '../models/subscription.model';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionsResolver implements Resolve<Subscription[]> {
  constructor(private subscriptionService: SubscriptionService) {}

  resolve(): Observable<Subscription[]> {
    return this.subscriptionService.getSubscriptions();
  }
}
