import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreMapPage } from './store-map.page';

const routes: Routes = [
  {
    path: '',
    component: StoreMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreMapPageRoutingModule {}
