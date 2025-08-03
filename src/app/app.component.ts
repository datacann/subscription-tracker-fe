import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SubscriptionService} from './services/subscription.service';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {SubscriptionCardComponent} from './components/subscription-card/subscription-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'subscription-tracker-fe';

  constructor() {}


}
