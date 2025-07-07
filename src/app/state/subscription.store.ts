import {computed, signal} from '@angular/core';
import { Subscription } from '../models/subscription.model';


const subscriptions = signal<Subscription[]>([]);

export const subscriptionsStore = {
  state: subscriptions,

  add: (sub: Subscription) => subscriptions.update((subs) => [...subs, sub]),


};
