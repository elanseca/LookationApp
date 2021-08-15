(self["webpackChunksample1"] = self["webpackChunksample1"] || []).push([["src_app_tablinks_store-info_store-info_module_ts"],{

/***/ 1441:
/*!******************************************************************!*\
  !*** ./src/app/tablinks/store-info/store-info-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreInfoPageRoutingModule": () => (/* binding */ StoreInfoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _store_info_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-info.page */ 2296);




const routes = [
    {
        path: '',
        component: _store_info_page__WEBPACK_IMPORTED_MODULE_0__.StoreInfoPage
    }
];
let StoreInfoPageRoutingModule = class StoreInfoPageRoutingModule {
};
StoreInfoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StoreInfoPageRoutingModule);



/***/ }),

/***/ 8116:
/*!**********************************************************!*\
  !*** ./src/app/tablinks/store-info/store-info.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreInfoPageModule": () => (/* binding */ StoreInfoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _store_info_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-info-routing.module */ 1441);
/* harmony import */ var _store_info_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store-info.page */ 2296);







let StoreInfoPageModule = class StoreInfoPageModule {
};
StoreInfoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _store_info_routing_module__WEBPACK_IMPORTED_MODULE_0__.StoreInfoPageRoutingModule
        ],
        declarations: [_store_info_page__WEBPACK_IMPORTED_MODULE_1__.StoreInfoPage]
    })
], StoreInfoPageModule);



/***/ }),

/***/ 2296:
/*!********************************************************!*\
  !*** ./src/app/tablinks/store-info/store-info.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreInfoPage": () => (/* binding */ StoreInfoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_store_info_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./store-info.page.html */ 3612);
/* harmony import */ var _store_info_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store-info.page.scss */ 4171);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let StoreInfoPage = class StoreInfoPage {
    constructor() { }
    ngOnInit() {
    }
};
StoreInfoPage.ctorParameters = () => [];
StoreInfoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-store-info',
        template: _raw_loader_store_info_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_store_info_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StoreInfoPage);



/***/ }),

/***/ 4171:
/*!**********************************************************!*\
  !*** ./src/app/tablinks/store-info/store-info.page.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".atmPhoto {\n  display: block;\n  margin: 0 auto;\n  padding-bottom: 10px;\n}\n\n.storePhoto {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  padding-bottom: 20px;\n  padding-top: 10px;\n}\n\n.strTitle {\n  text-align: center;\n  color: black;\n  font-family: Raleway-Light !important;\n  font-size: 30px;\n  margin: 0;\n  padding: 10px 0 0px 0;\n}\n\n.app_title {\n  text-align: center;\n  color: black;\n  padding-top: 10px;\n}\n\n::-webkit-scrollbar,\n*::-webkit-scrollbar {\n  display: none;\n}\n\nion-content {\n  margin: 0;\n  background-color: white;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.ti {\n  border-top: 1px black solid;\n  width: 30%;\n}\n\n.storeDetails {\n  color: black;\n  margin: 0 10px;\n}\n\n.contact {\n  font-family: Roboto-Regular !important;\n  margin: 0 0 0 5px;\n  padding: 0;\n}\n\n.icon {\n  display: inline-block;\n  font-size: 20px;\n  color: #4d4d4d;\n  vertical-align: middle;\n  margin-right: 3px;\n  margin-bottom: 3px;\n}\n\n.text {\n  display: inline;\n  vertical-align: middle;\n  color: black;\n  font-size: 15px;\n  margin-bottom: 3px;\n}\n\n.con {\n  margin: 0 3px 10px 3px;\n  padding: 0 5px;\n}\n\n.cut {\n  border-top: 5px #ffC977 solid;\n  width: 95%;\n}\n\n.tw {\n  display: block;\n  margin: 0 auto;\n  padding-right: 10px;\n}\n\nion-grid {\n  text-align: center;\n  margin: 0;\n  padding: 0 0 10px 0;\n}\n\n.tw1 {\n  margin: 0;\n  font-size: 40px;\n  padding: 0;\n  line-height: 0;\n}\n\n.tw2 {\n  line-height: 0;\n  margin: 0;\n  padding: 0;\n  font-family: Roboto-Regular !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLWluZm8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7O0VBRUEsYUFBQTtBQUNBOztBQUNBO0VBQ0UsU0FBQTtFQUNBLHVCQUFBO0VBRUEsK0JBQUE7RUFDRCxrQkFBQTtFQUNBLGNBQUE7QUFDRDs7QUFBQztFQUNFLGFBQUE7QUFFSDs7QUFHQTtFQUNFLDJCQUFBO0VBQ0EsVUFBQTtBQUFGOztBQUdBO0VBQ0UsWUFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQTtFQUNFLHNDQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBQUY7O0FBR0E7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQUY7O0FBR0M7RUFDRSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQUg7O0FBR0M7RUFDQyxzQkFBQTtFQUNBLGNBQUE7QUFBRjs7QUFHQztFQUNDLDZCQUFBO0VBQ0EsVUFBQTtBQUFGOztBQUdDO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQUFIOztBQUlDO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUFESDs7QUFJQztFQUNFLFNBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFESDs7QUFLQztFQUNFLGNBQUE7RUFDRCxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO0FBRkYiLCJmaWxlIjoic3RvcmUtaW5mby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXRtUGhvdG97XHJcbiAgZGlzcGxheTpibG9jaztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnN0b3JlUGhvdG97XHJcbiAgZGlzcGxheTpibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5zdHJUaXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGZvbnQtZmFtaWx5OiBSYWxld2F5LUxpZ2h0ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIG1hcmdpbjowO1xyXG4gIHBhZGRpbmc6IDEwcHggMCAwcHggMDtcclxufVxyXG5cclxuLmFwcF90aXRsZXtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIsXHJcbio6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuZGlzcGxheTogbm9uZTtcclxufVxyXG5pb24tY29udGVudHtcclxuICBtYXJnaW46MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgLS1vZmZzZXQtYm90dG9tOiBhdXRvIWltcG9ydGFudDtcclxuIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxuIG92ZXJmbG93OiBhdXRvO1xyXG4gJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICBkaXNwbGF5OiBub25lO1xyXG5cclxuIH1cclxufVxyXG5cclxuLnRpe1xyXG4gIGJvcmRlci10b3A6IDFweCBibGFjayBzb2xpZDtcclxuICB3aWR0aDogMzAlO1xyXG59XHJcblxyXG4uc3RvcmVEZXRhaWxze1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG5cclxuLmNvbnRhY3R7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90by1SZWd1bGFyICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOjAgMCAwIDVweDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogIzRkNGQ0ZDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gIG1hcmdpbi1ib3R0b206IDNweDtcclxuIH1cclxuXHJcbiAudGV4dHtcclxuICAgZGlzcGxheTogaW5saW5lO1xyXG4gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICBjb2xvcjogYmxhY2s7XHJcbiAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gfVxyXG5cclxuIC5jb257XHJcbiAgbWFyZ2luOiAwIDNweCAgMTBweCAzcHg7XHJcbiAgcGFkZGluZzogMCA1cHg7XHJcbiB9XHJcblxyXG4gLmN1dHtcclxuICBib3JkZXItdG9wOiA1cHggI2ZmQzk3NyBzb2xpZDtcclxuICB3aWR0aDogOTUlXHJcbiB9XHJcblxyXG4gLnR3e1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gfVxyXG5cclxuIGlvbi1ncmlke1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIG1hcmdpbjowO1xyXG4gICBwYWRkaW5nOjAgMCAxMHB4IDA7XHJcbiB9XHJcblxyXG4gLnR3MXtcclxuICAgbWFyZ2luOjA7XHJcbiAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgcGFkZGluZzowO1xyXG4gICBsaW5lLWhlaWdodDogMDtcclxuIH1cclxuXHJcblxyXG4gLnR3MntcclxuICAgbGluZS1oZWlnaHQ6IDA7XHJcbiAgbWFyZ2luOjA7XHJcbiAgcGFkZGluZzowO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8tUmVndWxhciAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 3612:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tablinks/store-info/store-info.page.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n  <ion-content [fullscreen]=\"true\">\n    <p class=\"strTitle\">ATM Hub</p>\n    <hr class=\"ti\">\n\n    <!--store logo-->\n      <div>\n        <img src=\"assets/images/atm.jpg\" width=\"80%\" class=\"storePhoto\">\n      </div>\n\n    <!--store info-->\n    <div class=\"storeDetails\">\n      <h4 class=\"contact\">Contact Details</h4>\n        <hr class=\"cut\">\n      <!--contact details-->\n      <div class=\"con\">\n        <!--phone-->\n        <ion-icon class=\"icon\" name=\"call\"></ion-icon>\n        <span class=\"text\"><strong>Globe</strong> 0995 582 2700</span>\n        <br>\n        <ion-icon class=\"icon\" name=\"call\"></ion-icon>\n        <span class=\"text\"><strong>Smart</strong> 0963 404 6000</span>\n          <br>\n        <!--email-->\n        <ion-icon class=\"icon\" name=\"mail\"></ion-icon>\n        <span class=\"text\">atmhubtuy@gmail.com</span>\n          <br>\n        <!--facebook-->\n        <ion-icon class=\"icon\" name=\"logo-facebook\"></ion-icon>\n        <span class=\"text\"><a target=\"_blank\" href=\"https://www.facebook.com/ATMhubTuy/\">ATM Hub</a></span>\n          <br>\n        <!--service-->\n        <ion-icon class=\"icon\" name=\"checkmark\"></ion-icon>\n        <span class=\"text\">Dine-in, Take-out and Delivery</span>\n          <br>\n          <!--location-->\n        <ion-icon class=\"icon\" name=\"pin\"></ion-icon>\n        <p class=\"text\">Gomez St. Barangay Rizal, Tuy Batangas</p>\n\n      </div>\n\n\n      <!--toliet & wifi-->\n      <div class=\"tw\">\n        <ion-grid>\n          <ion-row class=\"tw1\">\n            <ion-col><ion-icon name=\"checkmark\" ></ion-icon></ion-col>\n            <ion-col><ion-icon name=\"close\"></ion-icon></ion-col>\n          </ion-row>\n\n          <ion-row class=\"tw2\">\n            <ion-col>Wi-Fi</ion-col>\n            <ion-col>Toilet</ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n\n      <br>\n    <!--opening-->\n        <h4 class=\"contact\">Opening Times</h4>\n          <hr class=\"cut\">\n      <div class=\"con\">\n        <ion-icon class=\"icon\" name=\"time\"></ion-icon>\n        <p class=\"text\">10:00AM - 8:00PM</p>\n          <br>\n        </div>\n    </div>\n    <br>\n\n    <hr class=\"ti\">\n    <!--store photos-->\n      <div>\n        <img src=\"assets/images/atm1.jpg\" width=\"95%\" class=\"atmPhoto\">\n      </div>\n      <div>\n        <img src=\"assets/images/atm2.jpg\" width=\"95%\" class=\"atmPhoto\">\n      </div>\n\n      <div>\n        <img src=\"assets/images/atm3.jpg\" width=\"95%\" class=\"atmPhoto\">\n      </div>\n\n\n\n\n\n  </ion-content>\n\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tablinks_store-info_store-info_module_ts.js.map