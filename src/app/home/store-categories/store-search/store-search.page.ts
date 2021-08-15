import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store-search',
  templateUrl: './store-search.page.html',
  styleUrls: ['./store-search.page.scss'],
})
export class StoreSearchPage implements OnInit {

  constructor() { }

  filterTerm: string;
  isItemAvailable = false;
  data = [];

  ngOnInit() {
  }

  initializeItems(){
    this.data;
  }

  getItems(ev: any) {
      // Reset items back to all of the items
      this.initializeItems();

      // set val to the value of the searchbar
      const val = ev.target.value;

      // if the value is an empty string don't filter the items
      if (val && val.trim() !== '') {
          this.isItemAvailable = true;
          fetch('./assets/data/stores.ts').then(res => res.json()).then(json => {
            this.data = json;

            })
          this.data = this.data.filter((item) => {
              return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
      } else {
          this.isItemAvailable = false;
      }
  }


}
