import {ChangeDetectionStrategy, Component, computed, Input, OnInit, signal} from '@angular/core';
import { Subscription } from '../../models/subscription.model';
import {CurrencyPipe, DatePipe} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {EditSubscriptionModalComponent} from '../edit-subscription-modal/edit-subscription-modal.component';
import {subscriptionsStore} from '../../state/subscription.store';

@Component({
  selector: 'app-subscription-card',
  imports: [
    CurrencyPipe,
    DatePipe,
    EditSubscriptionModalComponent
  ],
  templateUrl: './subscription-card.component.html',
  styleUrl: './subscription-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubscriptionCardComponent implements OnInit{
  constructor(private route: ActivatedRoute) {

  }
  subscriptions = subscriptionsStore.state;

  isEditModalOpen = false;
  editForm: { name: string; price: number; renewDate: string; _id:string } = { name: '', price: 0, renewDate: '' , _id:"0"};

  openEditModal(sub: Subscription) {
    this.editForm = { ...sub };
    this.isEditModalOpen = true;
  }

  closeEditModal() {
    this.isEditModalOpen = false;
  }

  submitEdit(updatedSub: Subscription) {
    subscriptionsStore.update(updatedSub);
    this.isEditModalOpen = false;
  }

  ngOnInit(): void {
    const data = this.route.snapshot.data['subscriptions'];
    subscriptionsStore.set(data);
  }
}
