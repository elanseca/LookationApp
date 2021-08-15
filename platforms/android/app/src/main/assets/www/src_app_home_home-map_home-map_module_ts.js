(self["webpackChunksample1"] = self["webpackChunksample1"] || []).push([["src_app_home_home-map_home-map_module_ts"],{

/***/ 7125:
/*!**********************************************************!*\
  !*** ./src/app/home/home-map/home-map-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeMapPageRoutingModule": () => (/* binding */ HomeMapPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _home_map_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-map.page */ 4798);




const routes = [
    {
        path: '',
        component: _home_map_page__WEBPACK_IMPORTED_MODULE_0__.HomeMapPage
    }
];
let HomeMapPageRoutingModule = class HomeMapPageRoutingModule {
};
HomeMapPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomeMapPageRoutingModule);



/***/ }),

/***/ 2635:
/*!**************************************************!*\
  !*** ./src/app/home/home-map/home-map.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeMapPageModule": () => (/* binding */ HomeMapPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _home_map_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-map-routing.module */ 7125);
/* harmony import */ var _home_map_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-map.page */ 4798);







let HomeMapPageModule = class HomeMapPageModule {
};
HomeMapPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_map_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomeMapPageRoutingModule
        ],
        declarations: [_home_map_page__WEBPACK_IMPORTED_MODULE_1__.HomeMapPage]
    })
], HomeMapPageModule);



/***/ }),

/***/ 4798:
/*!************************************************!*\
  !*** ./src/app/home/home-map/home-map.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeMapPage": () => (/* binding */ HomeMapPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_home_map_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./home-map.page.html */ 9191);
/* harmony import */ var _home_map_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-map.page.scss */ 6058);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ 4216);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);





let HomeMapPage = class HomeMapPage {
    constructor() { }
    ngOnInit() { }
    ionViewDidEnter() { this.leafletMap(); }
    leafletMap() {
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_2__.map('mapId', { zoomControl: false }).setView([14.01865, 120.73029], 19);
        leaflet__WEBPACK_IMPORTED_MODULE_2__.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'edupala.com © Angular LeafLet',
        }).addTo(this.map);
        var icons = leaflet__WEBPACK_IMPORTED_MODULE_2__.icon({
            iconUrl: 'assets/icon/pin.svg',
            iconSize: [20, 20],
        });
        //Leaflet.marker([14.01902, 120.72952], {icon:icons}).addTo(this.map).bindPopup('ATM').openPopup();
        /*
        Leaflet.marker([34, 77]).addTo(this.map).bindPopup('Leh').openPopup();
    
        antPath([[28.644800, 77.216721], [34.1526, 77.5771]],
          { color: '#FF0000', weight: 5, opacity: 0.6 })
          .addTo(this.map);*/
    }
};
HomeMapPage.ctorParameters = () => [];
HomeMapPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-home-map',
        template: _raw_loader_home_map_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_map_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], HomeMapPage);



/***/ }),

/***/ 6058:
/*!**************************************************!*\
  !*** ./src/app/home/home-map/home-map.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".app_header {\n  background-color: #ccffcc;\n}\n\nion-content {\n  --overflow: hidden;\n  --ion-background-color:#ccffcc;\n}\n\n.app_title {\n  text-align: center;\n  color: black;\n  background-color: #ccffcc;\n}\n\n.text_title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0 10px 1px;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\nion-back-button {\n  position: absolute !important;\n  z-index: 5;\n}\n\n.map-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n  padding: 0 15px;\n  --ion-background-color:red;\n  overflow-y: scroll;\n}\n\n.map-container::-webkit-scrollbar {\n  display: none;\n}\n\n.map-frame {\n  border: 1px solid black;\n  background-color: #ccffcc;\n  width: 100%;\n  height: 100%;\n  border: 1px solid black;\n}\n\n#mapId {\n  height: 100%;\n}\n\np {\n  font-family: Raleway-Light !important;\n  font-size: 25px;\n  margin: 0 0 10px 0;\n  padding: 0;\n  text-align: center;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtbWFwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFHRSxrQkFBQTtFQUNBLDhCQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsNkJBQUE7RUFDQSxVQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJRTtFQUNFLGFBQUE7QUFGSjs7QUFPQTtFQUNFLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0FBSkY7O0FBT0E7RUFDRSxZQUFBO0FBSkY7O0FBT0E7RUFDRSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFKRiIsImZpbGUiOiJob21lLW1hcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwX2hlYWRlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNjY2ZmY2M7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG5cclxuXHJcbiAgLS1vdmVyZmxvdzogaGlkZGVuO1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2NjZmZjYztcclxufVxyXG5cclxuLmFwcF90aXRsZXtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjZmZjYztcclxufVxyXG5cclxuLnRleHRfdGl0bGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBwYWRkaW5nOiAwIDEwcHggMXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1iYWNrLWJ1dHRvbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG4ubWFwLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMCAxNXB4O1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6cmVkO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuXHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gIH1cclxufVxyXG5cclxuLm1hcC1mcmFtZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojY2NmZmNjO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuI21hcElkIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbnB7XHJcbiAgZm9udC1mYW1pbHk6IFJhbGV3YXktTGlnaHQgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 9191:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home-map/home-map.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-header class=\"app_header ion-no-border\">\n  <ion-toolbar color=#ccffcc>\n    <div class=\"app_title\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button icon=\"arrow-back\" defaultHref=\"home\">\n          </ion-back-button>\n          <ion-title class=\"text_title\">Map</ion-title>\n      </ion-buttons>\n  </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n\n\n  <div class=\"map-container\">\n   <p>Tuy Map</p>\n    <div class=\"map-frame\" >\n\n      <div id=\"mapId\" style=\"width:  100%; height: 100%\"></div>\n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_home-map_home-map_module_ts.js.map