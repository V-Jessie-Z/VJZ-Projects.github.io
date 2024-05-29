import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { ModalController, NavController } from '@ionic/angular';
import { PaymentModalPagePage } from './payment-modal-page/payment-modal-page.page';
import { ResturantsService } from 'src/services/resturants.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  // Declarations

  order: any;
  deliveryCharge: number = 5; 
  total: number = 0;
  deliveryInstructions: string = '';
  pastOrders: any[] = [];

  constructor(private restaurantService:ResturantsService, private navCtrl:NavController, private modalController:ModalController) { }

  
  //Refresh Cart Page with new orders

  ngOnInit() {
    this.refreshData();
  }

  ionViewWillEnter() {
    this.refreshData();
  }

  refreshData() {
    const storedOrder = localStorage.getItem('order');
    if (storedOrder) {
      this.order = JSON.parse(storedOrder);
      this.total = this.order.price + this.deliveryCharge;
    }
  }


  // Make Payment Modal

  makePayment() {
    this.pastOrders.push(this.order);
    this.presentSuccessModal();
    localStorage.setItem('pastOrders', JSON.stringify(this.pastOrders));
    localStorage.removeItem('order');
  }

  async presentSuccessModal() {
    const modal = await this.modalController.create({
      component: PaymentModalPagePage, 
      componentProps: {
        message: 'Payment successful!'
      }
    });
    await modal.present();
  }


  //Calculate Total According to Cart Order
  
 updateTotal() {
  this.total = this.order.price + this.deliveryCharge;
}
  }

