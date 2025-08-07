import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SubscriptionService} from '../../services/subscription.service';
import {Subscription} from '../../models/subscription.model';
import { take } from 'rxjs/operators';
import { ToastService } from '../../services/toast.service';


@Component({
  selector: 'app-edit-subscription-modal',
  imports: [
    FormsModule
  ],
  templateUrl: './edit-subscription-modal.component.html',
  styleUrl: './edit-subscription-modal.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditSubscriptionModalComponent {
  constructor(private subscriptionService: SubscriptionService,private toastService : ToastService) {}
  @Input() isOpen = false;
  @Input() subscription!: Subscription;


  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<Subscription>();

onSubmit() {
  this.subscriptionService.updateSubscription(this.subscription._id, this.subscription)
    .pipe(take(1))
    .subscribe((updatedSub) => {
      this.subscription = { ...updatedSub };
      this.save.emit(this.subscription);
      this.isOpen = false;
    });
}

  onClose() {
    this.close.emit();
  }

}
