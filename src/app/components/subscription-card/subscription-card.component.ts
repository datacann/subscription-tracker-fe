import {Component, Input, OnInit} from '@angular/core';
import { Subscription } from '../../models/subscription.model';
import {CurrencyPipe, DatePipe} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {subscriptionsStore} from '../../state/subscription.store';

@Component({
  selector: 'app-subscription-card',
  imports: [
    CurrencyPipe,
    DatePipe
  ],
  templateUrl: './subscription-card.component.html',
  styleUrl: './subscription-card.component.scss'
})
export class SubscriptionCardComponent implements OnInit{
  constructor(private route: ActivatedRoute) {}
  subscriptions: Subscription[] = [];


  ngOnInit(): void {
    const data = this.route.snapshot.data['subscriptions'];
    this.subscriptions = data
    console.log(data)
    console.log(this.subscriptions)
  }

}
