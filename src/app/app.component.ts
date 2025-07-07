import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SubscriptionService} from './services/subscription.service';
import {NavbarComponent} from './shared/navbar/navbar.component';
import {SubscriptionCardComponent} from './components/subscription-card/subscription-card.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, SubscriptionCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'subscription-tracker-fe';

  constructor(private subscriptionService: SubscriptionService) {}


  ngOnInit() {
    console.log(1)
    this.subscriptionService.getSubscriptions().subscribe((subs) => {
      console.log(subs);
    });
  }
}
