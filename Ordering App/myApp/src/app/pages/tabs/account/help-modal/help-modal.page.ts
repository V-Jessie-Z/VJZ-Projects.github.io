import { Component} from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-help-modal',
  templateUrl: './help-modal.page.html',
  styleUrls: ['./help-modal.page.scss'],
})
export class HelpModalPage {

  constructor(private modalController: ModalController) { }

  async closeModal() {
    await this.modalController.dismiss();
  }

}
