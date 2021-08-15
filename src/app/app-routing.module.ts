import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'store-categories',
    loadChildren: () => import('./home/store-categories/store-categories.module').then( m => m.StoreCategoriesPageModule)
  },
  {
    path: 'store-categories',
    loadChildren: () => import('./home/store-categories/store-categories.module').then( m => m.StoreCategoriesPageModule)
  },
  {
    path: 'home-map',
    loadChildren: () => import('./home/home-map/home-map.module').then( m => m.HomeMapPageModule)
  },
  {
    path: 'home-about',
    loadChildren: () => import('./home/home-about/home-about.module').then( m => m.HomeAboutPageModule)
  },
  {
    path: 'home-about',
    loadChildren: () => import('./home/home-about/home-about.module').then( m => m.HomeAboutPageModule)
  },
  {
    path: 'store-info',
    loadChildren: () => import('./tablinks/store-info/store-info.module').then( m => m.StoreInfoPageModule)
  },
  {
    path: 'store-srvc',
    loadChildren: () => import('./tablinks/store-srvc/store-srvc.module').then( m => m.StoreSrvcPageModule)
  },
  {
    path: 'tablinks',
    loadChildren: () => import('./tablinks/tablinks.module').then( m => m.TablinksPageModule)
  },
  {
    path: 'store-list',
    loadChildren: () => import('./store-list/store-list.module').then( m => m.StoreListPageModule)
  },
  {
    path: 'store-map',
    loadChildren: () => import('./tablinks/store-map/store-map.module').then( m => m.StoreMapPageModule)
  },
  {
    path: 'store-search',
    loadChildren: () => import('./home/store-categories/store-search/store-search.module').then( m => m.StoreSearchPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
