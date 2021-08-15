/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.page.html',
  styleUrls: ['./store-list.page.scss'],
})
export class StoreListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  storeList: any[] = [
    {
      name: 'ATM Hub',
      image: 'assets/images/atm.jpg',
      link: '/tablinks',

    },

    {
      name: 'Mi Amore',
      image: 'assets/images/miamore.jpg',
      link: '/home-about',
    },

    {
      name: 'Blend & Sip',
      image: 'assets/images/blendandsip.jpg',

    },
    {
      name: 'ATM Hub',
      image: 'assets/images/atm.jpg',

    },

    /*copies*/
    {
      name: 'ATM Hub',
      image: 'assets/images/atm.jpg',

    },

    {
      name: 'Mi Amore',
      image: 'assets/images/miamore.jpg',

    },

    {
      name: 'Blend & Sip',
      image: 'assets/images/blendandsip.jpg',

    },
    {
      name: 'ATM Hub',
      image: 'assets/images/atm.jpg',

    },
  ];

}
