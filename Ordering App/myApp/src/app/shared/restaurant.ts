import { Irestaurant } from "./irestaurant";


export class Restaurant implements Irestaurant {  
    id!: number;                      
    name!: string;  
    type!: string;  
    rating!: number;
    deliveryTime!: number;
    price!: number;
    distance!: number;
    image!: string;
    topDish!: string;
}