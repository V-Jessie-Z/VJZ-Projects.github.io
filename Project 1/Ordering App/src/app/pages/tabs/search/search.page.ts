import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ResturantsService } from 'src/services/resturants.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  //Declarations
  
  filteredRestaurants: any[] = [];
  searchQuery: string = '';
  restaurants: any[] = [];

  constructor(private resturantService:ResturantsService, private navCtrl:NavController) { }

  //Search for Restaurant

  searchRestaurant() {
    this.filteredRestaurants = this.restaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    
    );
  }
 
  
  //Load Restaurants from local storage

  ngOnInit() {
    this.resturantService.getRestaurants().subscribe(restaurants => {
      this.restaurants = restaurants;
    });
    
  }


   // Add Restaurant to Cart as an Order

  addToCart(restaurant: any) {
    
    const order = {
      restaurantId: restaurant.id,
      dish: restaurant.topDish,
      price: restaurant.price
    };
    localStorage.setItem('order', JSON.stringify(order));
    this.navCtrl.navigateForward('/tabs/cart'); 
  }

}
