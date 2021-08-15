(self["webpackChunksample1"] = self["webpackChunksample1"] || []).push([["src_app_home_home-about_home-about_module_ts"],{

/***/ 4248:
/*!**************************************************************!*\
  !*** ./src/app/home/home-about/home-about-routing.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeAboutPageRoutingModule": () => (/* binding */ HomeAboutPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_about_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-about.page */ 3339);




const routes = [
    {
        path: '',
        component: _home_about_page__WEBPACK_IMPORTED_MODULE_0__.HomeAboutPage
    }
];
let HomeAboutPageRoutingModule = class HomeAboutPageRoutingModule {
};
HomeAboutPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomeAboutPageRoutingModule);



/***/ }),

/***/ 587:
/*!******************************************************!*\
  !*** ./src/app/home/home-about/home-about.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeAboutPageModule": () => (/* binding */ HomeAboutPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _home_about_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-about-routing.module */ 4248);
/* harmony import */ var _home_about_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-about.page */ 3339);







let HomeAboutPageModule = class HomeAboutPageModule {
};
HomeAboutPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_about_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeAboutPageRoutingModule
        ],
        declarations: [_home_about_page__WEBPACK_IMPORTED_MODULE_1__.HomeAboutPage]
    })
], HomeAboutPageModule);



/***/ }),

/***/ 3339:
/*!****************************************************!*\
  !*** ./src/app/home/home-about/home-about.page.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeAboutPage": () => (/* binding */ HomeAboutPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_about_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home-about.page.html */ 7338);
/* harmony import */ var _home_about_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-about.page.scss */ 4926);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let HomeAboutPage = class HomeAboutPage {
    constructor() { }
    ngOnInit() { }
};
HomeAboutPage.ctorParameters = () => [];
HomeAboutPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-home-about',
        template: _raw_loader_home_about_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_about_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomeAboutPage);



/***/ }),

/***/ 4926:
/*!******************************************************!*\
  !*** ./src/app/home/home-about/home-about.page.scss ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".app_header {\n  background-color: #ffff99;\n}\n\n.app_title {\n  text-align: center;\n  color: black;\n  padding-top: 10px;\n}\n\n.text_title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0 10px 1px;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\nion-back-button {\n  position: absolute !important;\n  z-index: 5;\n}\n\n::-webkit-scrollbar,\n*::-webkit-scrollbar {\n  display: none;\n}\n\nion-content {\n  margin: 0;\n  background-color: #ffff99;\n  --offset-bottom: auto!important;\n  --overflow: hidden;\n  overflow: auto;\n}\n\nion-content::-webkit-scrollbar {\n  display: none;\n}\n\n.abt-content {\n  margin: 10px 10px;\n  padding: 10px;\n  background-color: #ffff99;\n}\n\n.txt {\n  text-align: justify;\n  color: black;\n  font-size: 15px;\n}\n\n.logo {\n  display: block;\n  margin: 0 auto;\n  padding: 0;\n}\n\nhr {\n  border-top: 1px #86592d solid;\n  width: 70%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtYWJvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSw2QkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTs7RUFFQSxhQUFBO0FBQ0E7O0FBQ0E7RUFDRSxTQUFBO0VBQ0EseUJBQUE7RUFFQSwrQkFBQTtFQUNELGtCQUFBO0VBQ0EsY0FBQTtBQUNEOztBQUFDO0VBQ0UsYUFBQTtBQUVIOztBQUdBO0VBR0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0QseUJBQUE7QUFGRDs7QUFLQTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNGLGVBQUE7QUFGQTs7QUFLQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQUZGOztBQUtBO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0FBRkYiLCJmaWxlIjoiaG9tZS1hYm91dC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwX2hlYWRlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmOTk7XHJcbn1cclxuXHJcbi5hcHBfdGl0bGV7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4udGV4dF90aXRsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHBhZGRpbmc6IDAgMTBweCAxcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuaW9uLWJhY2stYnV0dG9ue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXIsXHJcbio6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuZGlzcGxheTogbm9uZTtcclxufVxyXG5pb24tY29udGVudHtcclxuICBtYXJnaW46MDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjk5O1xyXG5cclxuICAtLW9mZnNldC1ib3R0b206IGF1dG8haW1wb3J0YW50O1xyXG4gLS1vdmVyZmxvdzogaGlkZGVuO1xyXG4gb3ZlcmZsb3c6IGF1dG87XHJcbiAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gfVxyXG59XHJcblxyXG4uYWJ0LWNvbnRlbnR7XHJcbiAgLy9ib3JkZXI6IDFweCAjODY1OTJkIHNvbGlkO1xyXG5cclxuICBtYXJnaW46IDEwcHggMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY5OSAvLyAjZmZlNmNjO1xyXG59XHJcblxyXG4udHh0e1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG5mb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5sb2dve1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuaHJ7XHJcbiAgYm9yZGVyLXRvcDogMXB4ICM4NjU5MmQgc29saWQ7XHJcbiAgd2lkdGg6NzAlO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 7338:
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home-about/home-about.page.html ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"app_header ion-no-border\">\n  <ion-toolbar color=#e6ccff>\n    <div class=\"app_title\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button icon=\"arrow-back\" defaultHref=\"home\">\n          </ion-back-button>\n          <ion-title class=\"text_title\">About</ion-title>\n      </ion-buttons>\n  </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"abt-content\">\n    <ion-title class=\"app_title\">\n      <div class=\"logo\">\n        <img src=\"assets/images/logo.svg\">\n      </div>\n    </ion-title>\n    <hr>\n    <div class=\"txt\">\n      <p>&nbsp;&nbsp;&nbsp;&nbsp;Do you wish to buy a product in Tuy? Are you unsure if the store exists? Would you want an easier way of searching a store?</p>\n      <p>&nbsp;&nbsp;&nbsp;&nbsp;Look-ation offers a convenient way of locating an establishment within the vicinity of Tuy \"Bayan\" Proper with using only your smartphone. The application provclasses a store's information, contact details, map location and what it can offer to the resclassents of Tuy and also travelers who wish to know available establishments in town.</p>\n      <p>&nbsp;&nbsp;&nbsp;&nbsp;The developers of Look-ation aim to give more awareness to local and growing establishments located in Tuy, Batangas.</p>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home-about_home-about_module_ts.js.map