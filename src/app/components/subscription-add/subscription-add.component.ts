import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {subscriptionsStore} from '../../state/subscription.store';
import {SubscriptionService} from '../../services/subscription.service';
import {Subscription} from '../../models/subscription.model';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-subscription-add',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './subscription-add.component.html',
  styleUrl: './subscription-add.component.scss'
})
export class SubscriptionAddComponent {
  constructor(private subscriptionService: SubscriptionService,private toastService : ToastService) {
  }
  private fb = inject(FormBuilder);
  subscriptions = subscriptionsStore.state;
  subscription!: Subscription;

  form: FormGroup = this.fb.group({
    name: ['', Validators.required],
    price: ['', [Validators.required]],
    renewDate: ['', [Validators.required,]],
  });

onSubmit() {
  if (this.form.invalid) {
    console.log('Form geçersiz');
    this.form.markAllAsTouched();
    this.toastService.error('Lütfen tüm gerekli alanları doldurun');
    return;
  } else {
    this.subscriptionService.addSubscription(this.form.value).subscribe((item) => {
      this.subscription = item;
      subscriptionsStore.add(item);
    });
  }
}
}
