import { Component } from '@angular/core';
import { StoreCategoriesPage } from '../home/store-categories/store-categories.page';
import { RouterModule, Routes } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
}
)

export class HomePage {

  constructor(private router: Router) {

  }
}
