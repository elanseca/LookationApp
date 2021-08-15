import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-srvc',
  templateUrl: './store-srvc.page.html',
  styleUrls: ['./store-srvc.page.scss'],
})
export class StoreSrvcPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /*SNACKS*/
  snacks: any[] = [
    {
      foodname: 'Flavored Fries (cheese/barbeque/sour cream)',
      foodprice: '69',
    },
    {
      foodname: 'Streetfood Platter',
      foodprice: '69',
    },
    {
      foodname: 'Nachos Overload',
      foodprice: '99',
    },
    {
      foodname: 'Cheesy Bacon Fries',
      foodprice: '99',
    },
    {
      foodname: 'Creamy Spaghetti',
      foodprice: '99',
    },
    {
      foodname: 'Carbonara',
      foodprice: '99',
    },
    {
      foodname: 'Aglio Olio',
      foodprice: '99',
    },
    {
      foodname: 'Mojos',
      foodprice: '99',
    },
  ];

  /*BEVERAGES*/
  bev: any[] = [
    {
      drinkname: 'Choco Loco',
    },
    {
      drinkname: 'Okinawa',
    },
    {
      drinkname: 'Wintermelon',
    },
    {
      drinkname: 'Strawberry ',
    },
    {
      drinkname: 'Hokkaido',
    },
    {
      drinkname: 'Salted Caramel',
    },
    {
      drinkname: 'Pearl Milktea',
    },

  ];


}
