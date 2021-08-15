(self["webpackChunksample1"] = self["webpackChunksample1"] || []).push([["src_app_home_home_module_ts"],{

/***/ 2003:
/*!*********************************************!*\
  !*** ./src/app/home/home-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);




const routes = [
    { path: '', component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage, },
    //{ path: '', redirectTo: 'store-categories', pathMatch: 'full' },
    //{ path: 'store-categories', component: StoreCategoriesPage },
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 2267);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 2003);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule,
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 2267:
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home.page.html */ 9764);
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss */ 2610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 9895);





let HomePage = class HomePage {
    constructor(router) {
        this.router = router;
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomePage);



/***/ }),

/***/ 2610:
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".app_header {\n  background-color: #e6ccff;\n}\n\nion-content {\n  --ion-background-color: #ff9999;\n}\n\n.app_title {\n  text-align: center;\n  padding: 80px 10px 60px 10px;\n  color: black;\n}\n\na:link, :visited, :hover, :active {\n  text-decoration: none;\n}\n\nion-button {\n  --box-shadow: none;\n  min-height: 50px;\n}\n\n/*blue*/\n\n.button_store {\n  margin: 0;\n  color: black;\n  --background: #b3e6ff;\n}\n\n/*green*/\n\n.button_map {\n  margin: 0;\n  color: black;\n  --background: #ccffcc;\n}\n\n/*yellow*/\n\n.button_about {\n  margin: 0;\n  color: black;\n  --background:#ffff99;\n}\n\n.logo {\n  display: inline-block;\n  margin: 0 auto;\n  padding: 0;\n}\n\n/*-----stripe colors-----*/\n\n.yellow {\n  min-height: 50px;\n  background-color: #ffff99;\n  margin: 0;\n}\n\n.orange {\n  min-height: 50px;\n  background-color: #ffcc99;\n  margin: 0;\n}\n\n.indigo {\n  min-height: 50px;\n  background-color: #b3ccff;\n  margin: 0;\n}\n\n/*----------------defaults----------------*/\n\n.container {\n  text-align: center;\n  background-color: pink;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLCtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLDRCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQWtDLHFCQUFBO0FBRWxDOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUdGOztBQUFBLE9BQUE7O0FBQ0E7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBR0Y7O0FBQUEsUUFBQTs7QUFDQTtFQUNFLFNBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFHRjs7QUFBQSxTQUFBOztBQUNBO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQUdGOztBQUFBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUdGOztBQUFBLDBCQUFBOztBQUNBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFNBQUE7QUFHRjs7QUFEQTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxTQUFBO0FBSUY7O0FBREE7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtBQUlGOztBQUZBLDJDQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0FBS0YiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwX2hlYWRlcntcbiAgYmFja2dyb3VuZC1jb2xvcjojZTZjY2ZmO1xufVxuXG5pb24tY29udGVudHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmOTk5OTtcbn1cblxuLmFwcF90aXRsZXtcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XG4gIHBhZGRpbmc6IDgwcHggMTBweCA2MHB4IDEwcHg7XG4gIGNvbG9yOiBibGFjaztcblxufVxuYTpsaW5rLCA6dmlzaXRlZCwgOmhvdmVyLCA6YWN0aXZle3RleHQtZGVjb3JhdGlvbjogbm9uZTt9XG5cbmlvbi1idXR0b257XG4gIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgbWluLWhlaWdodDogNTBweDtcbn1cblxuLypibHVlKi9cbi5idXR0b25fc3RvcmV7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6YmxhY2s7XG4gIC0tYmFja2dyb3VuZDogI2IzZTZmZjtcbn1cblxuLypncmVlbiovXG4uYnV0dG9uX21hcHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjpibGFjaztcbiAgLS1iYWNrZ3JvdW5kOiAjY2NmZmNjO1xufVxuXG4vKnllbGxvdyovXG4uYnV0dG9uX2Fib3V0e1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOmJsYWNrO1xuICAtLWJhY2tncm91bmQ6I2ZmZmY5OTtcbn1cblxuLmxvZ297XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qLS0tLS1zdHJpcGUgY29sb3JzLS0tLS0qL1xuLnllbGxvd3tcbiAgbWluLWhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY5OTtcbiAgbWFyZ2luOiAwO1xufVxuLm9yYW5nZXtcbiAgbWluLWhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2M5OTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uaW5kaWdve1xuICBtaW4taGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNjY2ZmO1xuICBtYXJnaW46IDA7XG59XG4vKi0tLS0tLS0tLS0tLS0tLS1kZWZhdWx0cy0tLS0tLS0tLS0tLS0tLS0qL1xuLmNvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcGluaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOjA7XG59XG5cblxuIl19 */");

/***/ }),

/***/ 9764:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"app_header ion-no-border\">\n\n    <ion-title class=\"app_title\">\n      <div class=\"logo\">\n        <img src=\"assets/images/logo.svg\">\n      </div>\n    </ion-title>\n</ion-header>\n\n<ion-content>\n\n  <div class=\"container\">\n    <div class=\"indigo\"></div>\n\n    <!--menu-->\n    <a href=\"store-categories\"><ion-button  class =\"button_store\" expand=\"full\">Stores</ion-button></a>\n    <a href=\"home-map\"><ion-button class =\"button_map\" expand=\"full\">Map</ion-button></a>\n    <a href=\"home-about\"><ion-button class =\"button_about\" expand=\"full\">About</ion-button></a>\n\n    <!--stripe colors-->\n    <div class=\"orange\"></div>\n\n  </div>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map