import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { subscriptionsResolver } from './subscriptions.resolver';

describe('subscriptionsResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => subscriptionsResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
