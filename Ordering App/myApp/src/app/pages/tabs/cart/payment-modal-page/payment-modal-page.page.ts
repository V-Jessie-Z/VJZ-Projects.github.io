import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-payment-modal-page',
  templateUrl: './payment-modal-page.page.html',
  styleUrls: ['./payment-modal-page.page.scss'],
})
export class PaymentModalPagePage  {

  constructor(private modalController: ModalController) { }

  async closeModal() {
    await this.modalController.dismiss();
  }

}
