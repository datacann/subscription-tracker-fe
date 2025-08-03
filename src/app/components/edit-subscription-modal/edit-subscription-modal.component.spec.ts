import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSubscriptionModalComponent } from './edit-subscription-modal.component';

describe('EditSubscriptionModalComponent', () => {
  let component: EditSubscriptionModalComponent;
  let fixture: ComponentFixture<EditSubscriptionModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSubscriptionModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSubscriptionModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
