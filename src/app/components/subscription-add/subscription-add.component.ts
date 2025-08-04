import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {subscriptionsStore} from '../../state/subscription.store';
import {SubscriptionService} from '../../services/subscription.service';
import {Subscription} from '../../models/subscription.model';

@Component({
  selector: 'app-subscription-add',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './subscription-add.component.html',
  styleUrl: './subscription-add.component.scss'
})
export class SubscriptionAddComponent {
  constructor(private subscriptionService: SubscriptionService) {
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
    this.subscriptionService.addSubscription(this.form.value).subscribe((item) => {
      this.subscription = item
      subscriptionsStore.add(item);
    } )
  }
}
