(self["webpackChunksample1"] = self["webpackChunksample1"] || []).push([["src_app_home_store-categories_store-search_store-search_module_ts"],{

/***/ 1617:
/*!***********************************************************************************!*\
  !*** ./src/app/home/store-categories/store-search/store-search-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreSearchPageRoutingModule": () => (/* binding */ StoreSearchPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _store_search_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-search.page */ 7784);




const routes = [
    {
        path: '',
        component: _store_search_page__WEBPACK_IMPORTED_MODULE_0__.StoreSearchPage
    }
];
let StoreSearchPageRoutingModule = class StoreSearchPageRoutingModule {
};
StoreSearchPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StoreSearchPageRoutingModule);



/***/ }),

/***/ 8261:
/*!***************************************************************************!*\
  !*** ./src/app/home/store-categories/store-search/store-search.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreSearchPageModule": () => (/* binding */ StoreSearchPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _store_search_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-search-routing.module */ 1617);
/* harmony import */ var _store_search_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store-search.page */ 7784);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 4981);








let StoreSearchPageModule = class StoreSearchPageModule {
};
StoreSearchPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _store_search_routing_module__WEBPACK_IMPORTED_MODULE_0__.StoreSearchPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ],
        declarations: [_store_search_page__WEBPACK_IMPORTED_MODULE_1__.StoreSearchPage]
    })
], StoreSearchPageModule);



/***/ }),

/***/ 7784:
/*!*************************************************************************!*\
  !*** ./src/app/home/store-categories/store-search/store-search.page.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreSearchPage": () => (/* binding */ StoreSearchPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_store_search_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./store-search.page.html */ 4780);
/* harmony import */ var _store_search_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store-search.page.scss */ 4307);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let StoreSearchPage = class StoreSearchPage {
    constructor() {
        this.isItemAvailable = false;
        this.data = [];
    }
    ngOnInit() {
    }
    initializeItems() {
        this.data;
    }
    getItems(ev) {
        // Reset items back to all of the items
        this.initializeItems();
        // set val to the value of the searchbar
        const val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() !== '') {
            this.isItemAvailable = true;
            fetch('./assets/data/stores.ts').then(res => res.json()).then(json => {
                this.data = json;
            });
            this.data = this.data.filter((item) => {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
        else {
            this.isItemAvailable = false;
        }
    }
};
StoreSearchPage.ctorParameters = () => [];
StoreSearchPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-store-search',
        template: _raw_loader_store_search_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_store_search_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StoreSearchPage);



/***/ }),

/***/ 4307:
/*!***************************************************************************!*\
  !*** ./src/app/home/store-categories/store-search/store-search.page.scss ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".app_header {\n  background-color: #e6ccff;\n}\n\n.app_title {\n  text-align: center;\n  color: black;\n  padding-top: 10px;\n}\n\n.text_title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0 10px 1px;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\nion-back-button {\n  position: absolute !important;\n  z-index: 5;\n}\n\n::-webkit-scrollbar,\n*::-webkit-scrollbar {\n  display: none;\n}\n\nion-content {\n  margin: 0;\n  background-color: #e6ccff;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\nion-searchbar {\n  --box-shadow: 1px 5px 5px rgb(153, 153, 153, .5);\n  --ion-background-color: white;\n  --color: grey;\n  --border-radius: 20px;\n}\n\na:link {\n  text-decoration: none;\n  color: red;\n}\n\na:visited {\n  text-decoration: none;\n  color: red;\n}\n\na:active {\n  background-color: #838383;\n  text-decoration: none;\n  transition: all 50ms linear;\n}\n\n.listdesign {\n  background-color: transparent !important;\n  border-radius: 30px;\n  margin: 0px 10px;\n}\n\nion-item {\n  box-shadow: 1px 5px 5px rgba(153, 153, 153, 0.5);\n  background-color: white;\n  --color: black;\n  border-radius: 30px;\n  margin-bottom: 10px;\n  font-family: Roboto-Regular !important;\n}\n\n.item-background-color {\n  --color: black;\n  --ion-item-background:transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLXNlYXJjaC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLDZCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBOztFQUVBLGFBQUE7QUFDQTs7QUFDQTtFQUNFLFNBQUE7RUFDQSx5QkFBQTtFQUVBLCtCQUFBO0VBQ0Qsa0JBQUE7RUFDQSxjQUFBO0FBQ0Q7O0FBQUM7RUFDRSxhQUFBO0FBRUg7O0FBR0E7RUFDRSxnREFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0FBQUY7O0FBRUE7RUFDRSxxQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtBQURGOztBQU1BO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FBSEY7O0FBT0E7RUFDRSx3Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFNQTtFQUNFLGdEQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNDQUFBO0FBSEY7O0FBS0E7RUFDRSxjQUFBO0VBQ0EsaUNBQUE7QUFGRiIsImZpbGUiOiJzdG9yZS1zZWFyY2gucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcF9oZWFkZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojZTZjY2ZmO1xyXG59XHJcblxyXG4uYXBwX3RpdGxle1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLnRleHRfdGl0bGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBwYWRkaW5nOiAwIDEwcHggMXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1iYWNrLWJ1dHRvbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLFxyXG4qOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbmRpc3BsYXk6IG5vbmU7XHJcbn1cclxuaW9uLWNvbnRlbnR7XHJcbiAgbWFyZ2luOjA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2Y2NmZjtcclxuXHJcbiAgLS1vZmZzZXQtYm90dG9tOiBhdXRvIWltcG9ydGFudDtcclxuIC0tb3ZlcmZsb3c6IGhpZGRlbjtcclxuIG92ZXJmbG93OiBhdXRvO1xyXG4gJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICBkaXNwbGF5OiBub25lO1xyXG5cclxuIH1cclxufVxyXG5cclxuaW9uLXNlYXJjaGJhcntcclxuICAtLWJveC1zaGFkb3c6IDFweCA1cHggNXB4IHJnYigxNTMsIDE1MywgMTUzLCAuNSk7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLS1jb2xvcjogZ3JleTtcclxuICAtLWJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuYTpsaW5re1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjpyZWQ7XHJcblxyXG5cclxufVxyXG5cclxuYTp2aXNpdGVke1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogcmVkO1xyXG5cclxuXHJcbn1cclxuXHJcbmE6YWN0aXZle1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oZ3JleSwgMSUpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgNTBtcyBsaW5lYXI7XHJcblxyXG5cclxufVxyXG4ubGlzdGRlc2lnbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgbWFyZ2luOiAwcHggMTBweDtcclxufVxyXG5pb24taXRlbXtcclxuICBib3gtc2hhZG93OiAxcHggNXB4IDVweCByZ2IoMTUzLCAxNTMsIDE1MywgLjUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC0tY29sb3I6IGJsYWNrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBmb250LWZhbWlseTogUm9ib3RvLVJlZ3VsYXIgIWltcG9ydGFudDtcclxufVxyXG4uaXRlbS1iYWNrZ3JvdW5kLWNvbG9ye1xyXG4gIC0tY29sb3I6IGJsYWNrO1xyXG4gIC0taW9uLWl0ZW0tYmFja2dyb3VuZDp0cmFuc3BhcmVudDtcclxuXHJcblxyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 4780:
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/store-categories/store-search/store-search.page.html ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"app_header ion-no-border\">\n  <ion-toolbar color=#e6ccff>\n    <div class=\"app_title\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button icon=\"arrow-back\" defaultHref=\"/store-categories\">\n          </ion-back-button>\n          <ion-title class=\"text_title\">Search</ion-title>\n      </ion-buttons>\n  </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"abt-content\">\n  <ion-searchbar type=\"text\" debounce=\"500\" (ionChange)=\"getItems($event)\" [(ngModel)]=\"filterTerm\"></ion-searchbar>\n  <ion-list *ngIf=\"isItemAvailable\" class=\"listdesign\" lines=\"none\">\n      <div class=\"item-background-color\" *ngFor=\"let item of data | filter:filterTerm\" ><a href={{item.link}} class=\"linkdesign\"><ion-item >{{ item.name }}</ion-item></a></div>\n  </ion-list>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_store-categories_store-search_store-search_module_ts.js.map