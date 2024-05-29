import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentModalPagePage } from './payment-modal-page.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentModalPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentModalPagePageRoutingModule {}
