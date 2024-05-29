import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaymentModalPagePageRoutingModule } from './payment-modal-page-routing.module';

import { PaymentModalPagePage } from './payment-modal-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaymentModalPagePageRoutingModule
  ],
  declarations: [PaymentModalPagePage]
})
export class PaymentModalPagePageModule {}
