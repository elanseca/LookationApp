import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { StoreCategoriesPage } from '../home/store-categories/store-categories.page';


const routes: Routes = [
  {path: '',component: HomePage,},
  //{ path: '', redirectTo: 'store-categories', pathMatch: 'full' },
  //{ path: 'store-categories', component: StoreCategoriesPage },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
