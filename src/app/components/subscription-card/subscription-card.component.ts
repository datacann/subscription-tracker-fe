import {ChangeDetectionStrategy, Component, computed, inject, Input, OnInit, signal} from '@angular/core';
import { Subscription } from '../../models/subscription.model';
import {CurrencyPipe, DatePipe} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {EditSubscriptionModalComponent} from '../edit-subscription-modal/edit-subscription-modal.component';
import {subscriptionsStore} from '../../state/subscription.store';
import { SubscriptionService } from '../../services/subscription.service';
import { ToastService } from '../../services/toast.service';

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
constructor(private route: ActivatedRoute,private subscriptionService: SubscriptionService,private toastService : ToastService) {}
  subscriptions = subscriptionsStore.state;
  private router = inject(Router);
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

  navigateAdd(): void {
    this.router.navigate(["/add"])
  }

  removeSubs(id: string): void {
    this.subscriptionService.deleteSubscription(id).subscribe(() => {
      subscriptionsStore.remove(id);
      this.toastService.success("Başarılı şekilde silindi")
    });
  }
}
