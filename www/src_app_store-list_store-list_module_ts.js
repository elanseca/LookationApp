(self["webpackChunksample1"] = self["webpackChunksample1"] || []).push([["src_app_store-list_store-list_module_ts"],{

/***/ 9850:
/*!*********************************************************!*\
  !*** ./src/app/store-list/store-list-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreListPageRoutingModule": () => (/* binding */ StoreListPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _store_list_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-list.page */ 5436);




const routes = [
    {
        path: '',
        component: _store_list_page__WEBPACK_IMPORTED_MODULE_0__.StoreListPage
    }
];
let StoreListPageRoutingModule = class StoreListPageRoutingModule {
};
StoreListPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StoreListPageRoutingModule);



/***/ }),

/***/ 9801:
/*!*************************************************!*\
  !*** ./src/app/store-list/store-list.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreListPageModule": () => (/* binding */ StoreListPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _store_list_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-list-routing.module */ 9850);
/* harmony import */ var _store_list_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store-list.page */ 5436);







let StoreListPageModule = class StoreListPageModule {
};
StoreListPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _store_list_routing_module__WEBPACK_IMPORTED_MODULE_0__.StoreListPageRoutingModule
        ],
        declarations: [_store_list_page__WEBPACK_IMPORTED_MODULE_1__.StoreListPage]
    })
], StoreListPageModule);



/***/ }),

/***/ 5436:
/*!***********************************************!*\
  !*** ./src/app/store-list/store-list.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreListPage": () => (/* binding */ StoreListPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_store_list_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./store-list.page.html */ 6389);
/* harmony import */ var _store_list_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store-list.page.scss */ 9646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);



/* eslint-disable @typescript-eslint/member-ordering */

let StoreListPage = class StoreListPage {
    constructor() {
        this.storeList = [
            {
                name: 'ATM Hub',
                image: 'assets/images/atm.jpg',
                link: '/tablinks',
            },
            {
                name: 'Mi Amore',
                image: 'assets/images/miamore.jpg',
                link: '/home-about',
            },
            {
                name: 'Blend & Sip',
                image: 'assets/images/blendandsip.jpg',
            },
            {
                name: 'ATM Hub',
                image: 'assets/images/atm.jpg',
            },
            /*copies*/
            {
                name: 'ATM Hub',
                image: 'assets/images/atm.jpg',
            },
            {
                name: 'Mi Amore',
                image: 'assets/images/miamore.jpg',
            },
            {
                name: 'Blend & Sip',
                image: 'assets/images/blendandsip.jpg',
            },
            {
                name: 'ATM Hub',
                image: 'assets/images/atm.jpg',
            },
        ];
    }
    ngOnInit() {
    }
};
StoreListPage.ctorParameters = () => [];
StoreListPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-store-list',
        template: _raw_loader_store_list_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_store_list_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StoreListPage);



/***/ }),

/***/ 9646:
/*!*************************************************!*\
  !*** ./src/app/store-list/store-list.page.scss ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".app_header {\n  background-color: #ffcc99;\n  border-bottom: 1px black solid;\n}\n\n.app_title {\n  text-align: center;\n  color: black;\n}\n\n.text_title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0 10px 1px;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\nion-back-button {\n  position: absolute !important;\n  z-index: 5;\n}\n\n::-webkit-scrollbar,\n*::-webkit-scrollbar {\n  display: none;\n}\n\nion-content {\n  margin: 0;\n  background-color: #ffcc99;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.abt-content {\n  background-color: #ffcc99;\n}\n\n.logo {\n  display: block;\n  margin: 10px 3px;\n  padding: 5px 0;\n  font-size: 18px;\n  font-family: Roboto-Regular !important;\n  text-align: center;\n  color: black;\n}\n\n.logo1 {\n  margin: 0 3px;\n  padding: 0;\n}\n\n.logg {\n  margin: 10px 30px 15px 30px;\n  padding: 5px 0;\n}\n\nion-col {\n  display: block;\n  margin: 0 auto;\n  padding-bottom: 10px;\n  font-family: Roboto-Regular !important;\n}\n\nion-grid {\n  padding: 0;\n  margin: 0;\n}\n\n.storePhoto {\n  margin: 0;\n  padding: 5px;\n  border: 1px black solid;\n  border-radius: 20px;\n}\n\n.storeTitle {\n  margin: 0 10px;\n  padding: 0;\n  text-align: center;\n  color: black;\n  font-size: 12px;\n  border-top: 1px black solid;\n  border-bottom: 1px black solid;\n}\n\nhr {\n  border-top: 1px #86592d solid;\n  width: 80%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLWxpc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7RUFDQSw4QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTs7RUFFQSxhQUFBO0FBQ0E7O0FBQ0E7RUFDRSxTQUFBO0VBQ0EseUJBQUE7RUFFQSwrQkFBQTtFQUNELGtCQUFBO0VBQ0EsY0FBQTtBQUNEOztBQUFDO0VBQ0UsYUFBQTtBQUVIOztBQUdBO0VBSUMseUJBQUE7QUFIRDs7QUFNQTtFQUVFLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7RUFLQSxrQkFBQTtFQUNBLFlBQUE7QUFSRjs7QUFXQTtFQUtFLGFBQUE7RUFDQSxVQUFBO0FBWkY7O0FBZ0JBO0VBR0UsMkJBQUE7RUFDQSxjQUFBO0FBZkY7O0FBa0JBO0VBQ0UsY0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHNDQUFBO0FBZkY7O0FBa0JBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUFmRjs7QUFtQkE7RUFDRSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFoQkY7O0FBbUJBO0VBQ0UsY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSw4QkFBQTtBQWhCRjs7QUFtQkE7RUFDRSw2QkFBQTtFQUNBLFVBQUE7QUFoQkYiLCJmaWxlIjoic3RvcmUtbGlzdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwX2hlYWRlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmNjOTk7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGJsYWNrIHNvbGlkO1xyXG59XHJcblxyXG4uYXBwX3RpdGxle1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuLnRleHRfdGl0bGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBwYWRkaW5nOiAwIDEwcHggMXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1iYWNrLWJ1dHRvbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLFxyXG4qOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbmRpc3BsYXk6IG5vbmU7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgbWFyZ2luOjA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmY2M5OTtcclxuXHJcbiAgLS1vZmZzZXQtYm90dG9tOiBhdXRvIWltcG9ydGFudDtcclxuIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxuIG92ZXJmbG93OiBhdXRvO1xyXG4gJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICBkaXNwbGF5OiBub25lO1xyXG5cclxuIH1cclxufVxyXG5cclxuLmFidC1jb250ZW50e1xyXG4gIC8vYm9yZGVyOiAxcHggIzg2NTkyZCBzb2xpZDtcclxuXHJcbiAgLy9wYWRkaW5nOiAxMHB4O1xyXG4gYmFja2dyb3VuZC1jb2xvcjogI2ZmY2M5OTtcclxufVxyXG5cclxuLmxvZ297XHJcblxyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgbWFyZ2luOiAxMHB4IDNweDtcclxuICBwYWRkaW5nOiA1cHggMDtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90by1SZWd1bGFyICFpbXBvcnRhbnQ7XHJcbiAgLy9ib3JkZXItbGVmdDogM3B4ICNhYzczMzkgc29saWQ7XHJcbiAgLy9ib3JkZXItcmlnaHQ6IDNweCAjYWM3MzM5IHNvbGlkO1xyXG4gIC8vYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDQwcHggMHB4O1xyXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogI2FjNzMzOTtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbi5sb2dvMXtcclxuICAvL2JvcmRlcjogMXB4ICM4NjU5MmQgc29saWQ7XHJcbiAgLy9ib3JkZXItbGVmdDogM3B4ICNhYzczMzkgc29saWQ7XHJcbiAgLy9ib3JkZXItcmlnaHQ6IDNweCAjYWM3MzM5IHNvbGlkO1xyXG4gIC8vYm9yZGVyLXJhZGl1czogMzBweCAzMHB4IDQwcHggMHB4XHJcbiAgbWFyZ2luOiAwIDNweDtcclxuICBwYWRkaW5nOiAwO1xyXG5cclxufVxyXG5cclxuLmxvZ2d7XHJcbiAgLy9ib3JkZXItbGVmdDogM3B4ICNhYzczMzkgc29saWQ7XHJcbiAgLy9ib3JkZXItcmlnaHQ6IDNweCAjYWM3MzM5IHNvbGlkO1xyXG4gIG1hcmdpbjogMTBweCAzMHB4IDE1cHggMzBweDtcclxuICBwYWRkaW5nOiA1cHggMDtcclxufVxyXG5cclxuaW9uLWNvbHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW46IDAgYXV0bztcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBmb250LWZhbWlseTogUm9ib3RvLVJlZ3VsYXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWdyaWR7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcblxyXG59XHJcblxyXG4uc3RvcmVQaG90b3tcclxuICBtYXJnaW46MDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYm9yZGVyOiAxcHggYmxhY2sgc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLnN0b3JlVGl0bGV7XHJcbiAgbWFyZ2luOjAgMTBweDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBibGFjayBzb2xpZDtcclxuICBib3JkZXItYm90dG9tOiAxcHggYmxhY2sgc29saWQ7XHJcbn1cclxuXHJcbmhye1xyXG4gIGJvcmRlci10b3A6IDFweCAjODY1OTJkIHNvbGlkO1xyXG4gIHdpZHRoOjgwJTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 6389:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/store-list/store-list.page.html ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"app_header ion-no-border\">\n  <ion-toolbar color=#ffcc99>\n    <div class=\"app_title\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button icon=\"arrow-back\" defaultHref=\"store-categories\">\n          </ion-back-button>\n          <ion-title class=\"text_title\">Store List</ion-title>\n      </ion-buttons>\n  </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"abt-content\">\n    <!--<div class=\"logg\">-->\n      <div class=\"logo\">\n        <p class=\"logo1\">RESTAURANT & DINING</p>\n      </div>\n    <!--</div>-->\n    <hr>\n\n    <div class=\"g\">\n    <ion-grid>\n      <ion-row >\n        <ion-col size =\"4.5\" *ngFor = \"let store of storeList\" >\n          <a href=\"{{store.link}}\"><img src={{store.image}} class=\"storePhoto\"></a>\n            <p class=\"storeTitle\">{{store.name}}</p>\n        </ion-col>\n\n      </ion-row>\n      </ion-grid>\n    </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_store-list_store-list_module_ts.js.map