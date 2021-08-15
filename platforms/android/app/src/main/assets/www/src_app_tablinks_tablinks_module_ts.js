(self["webpackChunksample1"] = self["webpackChunksample1"] || []).push([["src_app_tablinks_tablinks_module_ts"],{

/***/ 3030:
/*!*****************************************************!*\
  !*** ./src/app/tablinks/tablinks-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablinksPageRoutingModule": () => (/* binding */ TablinksPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _tablinks_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tablinks.page */ 7056);




const routes = [
    {
        path: '',
        component: _tablinks_page__WEBPACK_IMPORTED_MODULE_0__.TablinksPage,
        children: [
            {
                path: 'store-info',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tablinks_store-info_store-info_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tablinks/store-info/store-info.module */ 8116)).then(m => m.StoreInfoPageModule)
            },
            {
                path: 'store-srvc',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_tablinks_store-srvc_store-srvc_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../tablinks/store-srvc/store-srvc.module */ 7332)).then(m => m.StoreSrvcPageModule)
            },
            {
                path: 'store-map',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_leaflet_dist_leaflet-src_js"), __webpack_require__.e("src_app_tablinks_store-map_store-map_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tablinks/store-map/store-map.module */ 7470)).then(m => m.StoreMapPageModule)
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
let TablinksPageRoutingModule = class TablinksPageRoutingModule {
};
TablinksPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TablinksPageRoutingModule);



/***/ }),

/***/ 2616:
/*!*********************************************!*\
  !*** ./src/app/tablinks/tablinks.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablinksPageModule": () => (/* binding */ TablinksPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _tablinks_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tablinks-routing.module */ 3030);
/* harmony import */ var _tablinks_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tablinks.page */ 7056);







let TablinksPageModule = class TablinksPageModule {
};
TablinksPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _tablinks_routing_module__WEBPACK_IMPORTED_MODULE_0__.TablinksPageRoutingModule
        ],
        declarations: [_tablinks_page__WEBPACK_IMPORTED_MODULE_1__.TablinksPage]
    })
], TablinksPageModule);



/***/ }),

/***/ 7056:
/*!*******************************************!*\
  !*** ./src/app/tablinks/tablinks.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TablinksPage": () => (/* binding */ TablinksPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_tablinks_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tablinks.page.html */ 120);
/* harmony import */ var _tablinks_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tablinks.page.scss */ 545);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let TablinksPage = class TablinksPage {
    constructor() { }
    ngOnInit() {
    }
};
TablinksPage.ctorParameters = () => [];
TablinksPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tablinks',
        template: _raw_loader_tablinks_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tablinks_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TablinksPage);



/***/ }),

/***/ 545:
/*!*********************************************!*\
  !*** ./src/app/tablinks/tablinks.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".app_header {\n  background-color: #ffcc99;\n  border-bottom: 1px black solid;\n}\n\n.app_title {\n  text-align: center;\n  color: black;\n  padding-top: 10px;\n}\n\n.text_title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0 10px 1px;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\nion-back-button {\n  position: absolute !important;\n  z-index: 5;\n}\n\n.tab-content {\n  margin: 10px 10px;\n  padding: 10px;\n  background-color: #ffcc99;\n}\n\n.logo {\n  display: block;\n  margin: 0 auto;\n  padding: 0;\n}\n\nion-tabs {\n  --ion-background-color: white;\n}\n\nion-tab-button {\n  --color: #a6a6a6;\n  --color-selected: #404040;\n  background-color: #ffcc99;\n}\n\nion-tab-button::before {\n  background-color: transparent;\n  display: block;\n  content: \"\";\n  margin: 0 auto;\n  width: 20px;\n  height: 2px;\n}\n\nion-tab-button.tab-selected::before {\n  background-color: transparent;\n}\n\nion-tab-bar {\n  background-color: #ffcc99;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYmxpbmtzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUdFLGlCQUFBO0VBQ0EsYUFBQTtFQUNELHlCQUFBO0FBREQ7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUFERjs7QUFJQTtFQUNFLDZCQUFBO0FBREY7O0FBSUE7RUFDRSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFERjs7QUFFRTtFQUNFLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFBSjs7QUFHRTtFQUNFLDZCQUFBO0FBREo7O0FBS0E7RUFDRSx5QkFBQTtBQUZGIiwiZmlsZSI6InRhYmxpbmtzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hcHBfaGVhZGVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2ZmY2M5OTtcclxuICBib3JkZXItYm90dG9tOiAxcHggYmxhY2sgc29saWQ7XHJcbn1cclxuXHJcbi5hcHBfdGl0bGV7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4udGV4dF90aXRsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHBhZGRpbmc6IDAgMTBweCAxcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWJhY2stYnV0dG9ue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuXHJcbi50YWItY29udGVudHtcclxuICAvL2JvcmRlcjogMXB4ICM4NjU5MmQgc29saWQ7XHJcblxyXG4gIG1hcmdpbjogMTBweCAxMHB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZjYzk5O1xyXG59XHJcblxyXG4ubG9nb3tcclxuICBkaXNwbGF5OmJsb2NrO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbmlvbi10YWJze1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5pb24tdGFiLWJ1dHRvbiB7XHJcbiAgLS1jb2xvcjogI2E2YTZhNjtcclxuICAtLWNvbG9yLXNlbGVjdGVkOiAjNDA0MDQwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNjOTk7XHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gIH1cclxuXHJcbiAgJi50YWItc2VsZWN0ZWQ6OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICB9XHJcbn1cclxuXHJcbmlvbi10YWItYmFye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNjOTk7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ 120:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tablinks/tablinks.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"app_header ion-no-border\">\n  <ion-toolbar color=#ffcc99>\n    <div class=\"app_title\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button icon=\"arrow-back\" defaultHref=\"store-list\">\n          </ion-back-button>\n          <ion-title class=\"text_title\"><div class=\"logo\">\n            <img src=\"assets/images/logo.svg\" width=\"150px\">\n          </div></ion-title>\n      </ion-buttons>\n  </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"tab-content\">\n  <ion-tabs>\n\n    <ion-tab-bar slot=\"bottom\">\n      <ion-tab-button tab=\"store-info\">\n        <ion-icon name=\"information-circle\" class=\"ic\"></ion-icon>\n        <ion-label></ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"store-srvc\">\n        <ion-icon name=\"menu\" class=\"ic\"></ion-icon>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"store-map\">\n        <ion-icon name=\"pin\" class=\"ic\"></ion-icon>\n      </ion-tab-button>\n\n    </ion-tab-bar>\n\n  </ion-tabs>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tablinks_tablinks_module_ts.js.map