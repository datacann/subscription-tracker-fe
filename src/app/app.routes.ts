import { Routes } from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {SubscriptionsResolver} from './subscriptions/subscriptions.resolver';
import {SubscriptionCardComponent} from './components/subscription-card/subscription-card.component';
import {SubscriptionAddComponent} from './components/subscription-add/subscription-add.component';

export const routes: Routes = [
  {
    path: '',
    component: SubscriptionCardComponent,
    resolve: {
      subscriptions: SubscriptionsResolver
    }
  },
  {
    path: 'add',
    component: SubscriptionAddComponent,
    resolve: {
    }
  }
];
