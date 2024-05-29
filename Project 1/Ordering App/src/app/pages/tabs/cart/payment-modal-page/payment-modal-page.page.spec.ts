import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentModalPagePage } from './payment-modal-page.page';

describe('PaymentModalPagePage', () => {
  let component: PaymentModalPagePage;
  let fixture: ComponentFixture<PaymentModalPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentModalPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
