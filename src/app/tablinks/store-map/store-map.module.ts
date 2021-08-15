import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreMapPageRoutingModule } from './store-map-routing.module';

import { StoreMapPage } from './store-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreMapPageRoutingModule
  ],
  declarations: [StoreMapPage]
})
export class StoreMapPageModule {}
