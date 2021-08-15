import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreSrvcPageRoutingModule } from './store-srvc-routing.module';

import { StoreSrvcPage } from './store-srvc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreSrvcPageRoutingModule
  ],
  declarations: [StoreSrvcPage]
})
export class StoreSrvcPageModule {}
