import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreSearchPageRoutingModule } from './store-search-routing.module';

import { StoreSearchPage } from './store-search.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreSearchPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [StoreSearchPage]
})
export class StoreSearchPageModule {}
