import {computed, signal} from '@angular/core';
import { Subscription } from '../models/subscription.model';


const subscriptions = signal<Subscription[]>([]);

export const subscriptionsStore = {
  state: subscriptions,

  add: (sub: Subscription) =>
    subscriptions.update((subs) => subs.some(s => s._id === sub._id) ? subs : [...subs, sub]),

  update: (updatedSub: Subscription) =>
    subscriptions.update(s => s.map(sub => sub._id === updatedSub._id ? {...updatedSub} : sub)),


  set: (subs: Subscription[]) => {
    const uniqueSubs = subs.filter(
      (sub, index, self) =>
        index === self.findIndex(s => s._id === sub._id)
    );
    subscriptions.set(uniqueSubs);
  },

  remove: (id: string) =>
    subscriptions.update((subs) => subs.filter(sub => sub._id !== id))

};


