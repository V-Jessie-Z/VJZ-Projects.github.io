import { Injectable } from '@angular/core';
import { Restaurant } from 'src/app/shared/restaurant';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResturantsService {
  
  constructor() {

    // Hardcoded Restaurants' Details 
    if(!localStorage.getItem('restaurants'))
      {
        let restaurants = [
          {
            id: 1,
            name: 'Jollof of Africa',
            type: 'African Cuisine',
            rating: 5,
            deliveryTime: 25,
            price: 100,
            distance: 2.59,
            image: 'assets/jollof1.jpeg',
            topDish: 'Jollof Rice'
          },
          {
            id: 2,
            name: 'Ayoba Cafe Shisanyama',
            type: 'African Cuisine',
            rating: 4.4,
            deliveryTime: 15,
            price: 120,
            distance: 1.83,
            image: 'assets/Shisayanma.jpg',
            topDish: 'Shisanyama Platter'
          },
          {
            id: 3,
            name: 'Spice-The Indian Kitchen',
            type: 'Asian Cuisine',
            rating: 4.1,
            deliveryTime: 5,
            price: 80,
            distance: 0.9,
            image: 'assets/Briyani.jpeg',
            topDish: 'Chicken Biryani'
          },
          {
            id: 4,
            name: 'Fish Clams',
            type: 'Western Cuisine',
            rating: 4.3,
            deliveryTime: 20,
            price: 150,
            distance: 1.23,
            image: 'assets/chips.jpeg',
            topDish: 'Fish and Chips'
          }
        ];

        localStorage.setItem('restaurants', JSON.stringify(restaurants)) 
    }
   }

   // Get all restuarants
  
   getRestaurants(): Observable<any[]> {
    let restaurants: any[] = [];
    if (localStorage.getItem('restaurants')) {
      restaurants = JSON.parse(localStorage.getItem('restaurants')!);
    }
    return of(restaurants);
  }


  getRestaurant(id: number): Observable<any> {
    let restaurants: any[] = [];
    if (localStorage.getItem('restaurants')) {
      restaurants = JSON.parse(localStorage.getItem('restaurants')!);
    }

    let restaurant: any = restaurants.find(restaurant => restaurant.id === id);

    return of(restaurant);
  }

  
  }

