import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StoreSrvcPage } from './store-srvc.page';

const routes: Routes = [
  {
    path: '',
    component: StoreSrvcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreSrvcPageRoutingModule {}
