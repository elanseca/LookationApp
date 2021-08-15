import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablinksPage } from './tablinks.page';

const routes: Routes = [
  {
    path: '',
    component: TablinksPage,
    children: [
      {
        path: 'store-info',
        loadChildren: () => import('../tablinks/store-info/store-info.module').then(m => m.StoreInfoPageModule)
      },
      {
        path: 'store-srvc',
        loadChildren: () => import('../tablinks/store-srvc/store-srvc.module').then(m => m.StoreSrvcPageModule)
      },
      {
        path: 'store-map',
        loadChildren: () => import('../tablinks/store-map/store-map.module').then(m => m.StoreMapPageModule)
      },
      {
        path: '',
        redirectTo: '/tablinks/store-info',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tablinks/store-info',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablinksPageRoutingModule {}
