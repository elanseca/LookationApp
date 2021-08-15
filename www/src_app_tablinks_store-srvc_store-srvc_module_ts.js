(self["webpackChunksample1"] = self["webpackChunksample1"] || []).push([["src_app_tablinks_store-srvc_store-srvc_module_ts"],{

/***/ 4229:
/*!******************************************************************!*\
  !*** ./src/app/tablinks/store-srvc/store-srvc-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreSrvcPageRoutingModule": () => (/* binding */ StoreSrvcPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _store_srvc_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-srvc.page */ 7320);




const routes = [
    {
        path: '',
        component: _store_srvc_page__WEBPACK_IMPORTED_MODULE_0__.StoreSrvcPage
    }
];
let StoreSrvcPageRoutingModule = class StoreSrvcPageRoutingModule {
};
StoreSrvcPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StoreSrvcPageRoutingModule);



/***/ }),

/***/ 7332:
/*!**********************************************************!*\
  !*** ./src/app/tablinks/store-srvc/store-srvc.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreSrvcPageModule": () => (/* binding */ StoreSrvcPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _store_srvc_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-srvc-routing.module */ 4229);
/* harmony import */ var _store_srvc_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store-srvc.page */ 7320);







let StoreSrvcPageModule = class StoreSrvcPageModule {
};
StoreSrvcPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _store_srvc_routing_module__WEBPACK_IMPORTED_MODULE_0__.StoreSrvcPageRoutingModule
        ],
        declarations: [_store_srvc_page__WEBPACK_IMPORTED_MODULE_1__.StoreSrvcPage]
    })
], StoreSrvcPageModule);



/***/ }),

/***/ 7320:
/*!********************************************************!*\
  !*** ./src/app/tablinks/store-srvc/store-srvc.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreSrvcPage": () => (/* binding */ StoreSrvcPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_store_srvc_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./store-srvc.page.html */ 8456);
/* harmony import */ var _store_srvc_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store-srvc.page.scss */ 7841);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let StoreSrvcPage = class StoreSrvcPage {
    constructor() {
        /*SNACKS*/
        this.snacks = [
            {
                foodname: 'Flavored Fries (cheese/barbeque/sour cream)',
                foodprice: '69',
            },
            {
                foodname: 'Streetfood Platter',
                foodprice: '69',
            },
            {
                foodname: 'Nachos Overload',
                foodprice: '99',
            },
            {
                foodname: 'Cheesy Bacon Fries',
                foodprice: '99',
            },
            {
                foodname: 'Creamy Spaghetti',
                foodprice: '99',
            },
            {
                foodname: 'Carbonara',
                foodprice: '99',
            },
            {
                foodname: 'Aglio Olio',
                foodprice: '99',
            },
            {
                foodname: 'Mojos',
                foodprice: '99',
            },
        ];
        /*BEVERAGES*/
        this.bev = [
            {
                drinkname: 'Choco Loco',
            },
            {
                drinkname: 'Okinawa',
            },
            {
                drinkname: 'Wintermelon',
            },
            {
                drinkname: 'Strawberry ',
            },
            {
                drinkname: 'Hokkaido',
            },
            {
                drinkname: 'Salted Caramel',
            },
            {
                drinkname: 'Pearl Milktea',
            },
        ];
    }
    ngOnInit() {
    }
};
StoreSrvcPage.ctorParameters = () => [];
StoreSrvcPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-store-srvc',
        template: _raw_loader_store_srvc_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_store_srvc_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StoreSrvcPage);



/***/ }),

/***/ 7841:
/*!**********************************************************!*\
  !*** ./src/app/tablinks/store-srvc/store-srvc.page.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("::-webkit-scrollbar,\n*::-webkit-scrollbar {\n  display: none;\n}\n\nion-content {\n  margin: 0;\n  background-color: white;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.cut {\n  border-top: 5px #ffC977 solid;\n  width: 100%;\n  margin: 0 0 10px 0;\n  padding: 0;\n}\n\nion-grid, ul {\n  margin: 10px;\n  padding: 0;\n  background-color: white;\n  color: black;\n}\n\nion-col {\n  margin: 0;\n  padding: 0;\n  font-family: Roboto-Regular !important;\n  font-size: 14px;\n}\n\n.contact {\n  font-family: Roboto-Regular !important;\n  margin: 0;\n  padding: 0;\n  color: black;\n  text-align: center;\n}\n\n.price {\n  text-align: right;\n}\n\n.bev {\n  text-align: center;\n  font-family: Roboto-Regular !important;\n  margin: 0;\n}\n\n.bevv, .prc {\n  border-left: 1px black solid;\n  border-right: 1px black solid;\n}\n\n.bevv1, .prc1 {\n  border-right: 1px black solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLXNydmMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVBLGFBQUE7QUFDQTs7QUFDQTtFQUNFLFNBQUE7RUFDQSx1QkFBQTtFQUVBLCtCQUFBO0VBQ0Qsa0JBQUE7RUFDQSxjQUFBO0FBQ0Q7O0FBQUM7RUFDRSxhQUFBO0FBRUg7O0FBR0E7RUFDRSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNDLFVBQUE7QUFBSDs7QUFJQTtFQUNHLFlBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBREg7O0FBR0E7RUFDRyxTQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO0VBQ0EsZUFBQTtBQUFIOztBQUdDO0VBQ0Msc0NBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBRUEsc0NBQUE7RUFDQSxTQUFBO0FBREY7O0FBSUE7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0FBREY7O0FBSUE7RUFDRSw2QkFBQTtBQURGIiwiZmlsZSI6InN0b3JlLXNydmMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjotd2Via2l0LXNjcm9sbGJhcixcclxuKjo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG5kaXNwbGF5OiBub25lO1xyXG59XHJcbmlvbi1jb250ZW50e1xyXG4gIG1hcmdpbjowO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xyXG4gLS1vdmVyZmxvdzogaGlkZGVuO1xyXG4gb3ZlcmZsb3c6IGF1dG87XHJcbiAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gfVxyXG59XHJcblxyXG4uY3V0e1xyXG4gIGJvcmRlci10b3A6IDVweCAjZmZDOTc3IHNvbGlkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCAwIDEwcHggMDtcclxuICAgcGFkZGluZzogMDtcclxuXHJcbn1cclxuXHJcbmlvbi1ncmlkLCB1bHtcclxuICAgbWFyZ2luOiAxMHB4O1xyXG4gICBwYWRkaW5nOiAwO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgY29sb3I6IGJsYWNrO1xyXG4gfVxyXG5pb24tY29se1xyXG4gICBtYXJnaW46IDA7XHJcbiAgIHBhZGRpbmc6IDA7XHJcbiAgIGZvbnQtZmFtaWx5OiBSb2JvdG8tUmVndWxhciAhaW1wb3J0YW50O1xyXG4gICBmb250LXNpemU6IDE0cHg7XHJcbiB9XHJcblxyXG4gLmNvbnRhY3R7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90by1SZWd1bGFyICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luOjA7XHJcbiAgcGFkZGluZzogMDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucHJpY2V7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5iZXZ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8tUmVndWxhciAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbjowO1xyXG59XHJcblxyXG4uYmV2diwgLnByY3tcclxuICBib3JkZXItbGVmdDogMXB4IGJsYWNrIHNvbGlkO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IGJsYWNrIHNvbGlkO1xyXG59XHJcblxyXG4uYmV2djEsIC5wcmMxe1xyXG4gIGJvcmRlci1yaWdodDogMXB4IGJsYWNrIHNvbGlkO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 8456:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tablinks/store-srvc/store-srvc.page.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-content [fullscreen]=\"true\">\n  <br>\n  <h5 class=\"contact\">SNACKS</h5>\n\n  <!--SNACKS-->\n  <ion-grid>\n    <ion-row *ngFor =\"let food of snacks\">\n      <ion-col>\n        {{food.foodname}}\n      </ion-col>\n      <ion-col class=\"price\">\n        {{food.foodprice}}\n      </ion-col>\n      <hr class=\"cut\">\n    </ion-row>\n    </ion-grid>\n\n    <br>\n\n    <h5 class=\"contact\">BEVERAGES</h5>\n    <!--BEVERAGES-->\n  <ion-grid>\n    <ion-row class=\"bev\">\n      <ion-col class=\"bevv\">\n        16oz\n      </ion-col >\n      <ion-col class=\"bevv1\">\n        22oz\n      </ion-col>\n      <ion-col>\n        1L\n      </ion-col>\n      <ion-col class=\"bevv\">\n        Pop Can\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"bev\">\n      <ion-col class=\"prc\">\n        75.00\n      </ion-col>\n      <ion-col class=\"prc1\">\n        85.00\n      </ion-col>\n      <ion-col>\n        95.00\n      </ion-col>\n      <ion-col class=\"prc\">\n        120.00\n      </ion-col>\n    </ion-row>\n    <br>\n\n    <!--BEVERAGES-->\n    <ion-row *ngFor =\"let drink of bev\">\n      <ion-col>\n        {{drink.drinkname}}\n      </ion-col>\n      <hr class=\"cut\">\n    </ion-row>\n    </ion-grid>\n\n</ion-content>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tablinks_store-srvc_store-srvc_module_ts.js.map