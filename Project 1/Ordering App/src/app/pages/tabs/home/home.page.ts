import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { ResturantsService } from 'src/services/resturants.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  
  // Declarations

  swiperModules = [IonicSlides];
  restaurants: any[] = [];

  constructor(private resturantService:ResturantsService, private navCtrl:NavController) { }

  
  // Load Restaurants for local storage

  ngOnInit() {
    this.resturantService.getRestaurants().subscribe(restaurants => {
      this.restaurants = restaurants;
    });
  }
  


  // Add resturant to Cart as an Order

  addToCart(restaurant: any) {
    const order = {
      restaurantId: restaurant.id,
      picture: restaurant.image,
      dish: restaurant.topDish,
      price: restaurant.price
    };
    localStorage.setItem('order', JSON.stringify(order));
    this.navCtrl.navigateForward('/tabs/cart');
    
  }


  
}

