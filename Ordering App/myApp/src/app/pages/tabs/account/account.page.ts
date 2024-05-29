import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController, NavController } from '@ionic/angular';
import { HelpModalPage } from './help-modal/help-modal.page';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  
  userDetails: any = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    phone: '+27 66 884 3929',
    address: 'University of Pretoria'
  };

  // Declarations

  pastOrders: any[] = [];

 

  constructor(private modalController: ModalController, private alertController: AlertController, private storage:Storage, private router:Router, private navCtrl:NavController) { }

  ngOnInit() {
    this.loadPastOrders();
  }


  //Get Help Modal
  async openHelpModal() {
    const modal = await this.modalController.create({
      component: HelpModalPage,
      cssClass: 'my-custom-class'
    });
    await modal.present();

  }

  //Edit User details Modal 
  async editUserDetails() {
    const alert = await this.alertController.create({
      header: 'Edit User Details',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name',
          value: this.userDetails.name
        },
        {
          name: 'email',
          type: 'email',
          placeholder: 'Email',
          value: this.userDetails.email
        },
        {
          name: 'phone',
          type: 'tel',
          placeholder: 'Phone',
          value: this.userDetails.phone
        },
        {
          name: 'address',
          type: 'text',
          placeholder: 'Address',
          value: this.userDetails.address
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Save',
          handler: (data) => {
            this.userDetails.name = data.name;
            this.userDetails.email = data.email;
            this.userDetails.phone = data.phone;
            this.userDetails.address = data.address;
          }
        }
      ]
    });
    await alert.present();
  }

  
  //Load and ReOrder Past Orders 

  ionViewWillEnter() {
    this.loadPastOrders();
  }
  
  loadPastOrders() {
    const pastOrdersString = localStorage.getItem('pastOrders');
    if (pastOrdersString) {
      this.pastOrders = JSON.parse(pastOrdersString);
    }
  }

  reorder(order: any) {
    localStorage.setItem('order', JSON.stringify(order));
    this.navCtrl.navigateForward('/tabs/cart');
  }
}



