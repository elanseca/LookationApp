import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StoreCategoriesPageRoutingModule } from './store-categories-routing.module';

import { StoreCategoriesPage } from './store-categories.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StoreCategoriesPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [StoreCategoriesPage]
})
export class StoreCategoriesPageModule {}
