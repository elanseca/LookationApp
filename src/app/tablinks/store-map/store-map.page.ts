import { Component, OnInit } from '@angular/core';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';

@Component({
  selector: 'app-store-map',
  templateUrl: './store-map.page.html',
  styleUrls: ['./store-map.page.scss'],
})
export class StoreMapPage implements OnInit {

  map: Leaflet.Map;

  constructor() { }

  ngOnInit() {}
  ionViewDidEnter() { this.leafletMap(); }

  leafletMap() {

    this.map = Leaflet.map('mapId', { zoomControl:false }).setView([14.01902, 120.72952], 19);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'edupala.com © Angular LeafLet',
    }).addTo(this.map);
    var icons = Leaflet.icon({
      iconUrl: 'assets/icon/pin1.svg',
      iconSize: [20, 20],

    });


   Leaflet.marker([14.01902, 120.72952], {icon:icons}).addTo(this.map).bindPopup('ATM').openPopup();
    /*
    Leaflet.marker([34, 77]).addTo(this.map).bindPopup('Leh').openPopup();

    antPath([[28.644800, 77.216721], [34.1526, 77.5771]],
      { color: '#FF0000', weight: 5, opacity: 0.6 })
      .addTo(this.map);*/
  }
  }
