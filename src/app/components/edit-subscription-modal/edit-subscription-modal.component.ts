import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {SubscriptionService} from '../../services/subscription.service';
import {Subscription} from '../../models/subscription.model';


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
  constructor(private subscriptionService: SubscriptionService) {}
  @Input() isOpen = false;
  @Input() subscription!: Subscription;


  @Output() close = new EventEmitter<void>();
  @Output() save = new EventEmitter<Subscription>();

  onSubmit() {
    this.subscriptionService.updateSubscription(this.subscription._id, this.subscription)
      .subscribe((updatedSub) => {
        this.subscription = { ...updatedSub }
        this.save.emit(this.subscription);
        this.isOpen = false;

      });
    console.log(1)
    console.log(this.subscription._id)
    console.log('SUBMITTED DATA:', this.subscription);

  }

  onClose() {
    this.close.emit();
  }

}
