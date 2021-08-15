(self["webpackChunksample1"] = self["webpackChunksample1"] || []).push([["src_app_tablinks_store-map_store-map_module_ts"],{

/***/ 6139:
/*!****************************************************************!*\
  !*** ./src/app/tablinks/store-map/store-map-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreMapPageRoutingModule": () => (/* binding */ StoreMapPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _store_map_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-map.page */ 9979);




const routes = [
    {
        path: '',
        component: _store_map_page__WEBPACK_IMPORTED_MODULE_0__.StoreMapPage
    }
];
let StoreMapPageRoutingModule = class StoreMapPageRoutingModule {
};
StoreMapPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StoreMapPageRoutingModule);



/***/ }),

/***/ 7470:
/*!********************************************************!*\
  !*** ./src/app/tablinks/store-map/store-map.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreMapPageModule": () => (/* binding */ StoreMapPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _store_map_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-map-routing.module */ 6139);
/* harmony import */ var _store_map_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store-map.page */ 9979);







let StoreMapPageModule = class StoreMapPageModule {
};
StoreMapPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _store_map_routing_module__WEBPACK_IMPORTED_MODULE_0__.StoreMapPageRoutingModule
        ],
        declarations: [_store_map_page__WEBPACK_IMPORTED_MODULE_1__.StoreMapPage]
    })
], StoreMapPageModule);



/***/ }),

/***/ 9979:
/*!******************************************************!*\
  !*** ./src/app/tablinks/store-map/store-map.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreMapPage": () => (/* binding */ StoreMapPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_store_map_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./store-map.page.html */ 8710);
/* harmony import */ var _store_map_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store-map.page.scss */ 7079);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet */ 4216);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_2__);





let StoreMapPage = class StoreMapPage {
    constructor() { }
    ngOnInit() { }
    ionViewDidEnter() { this.leafletMap(); }
    leafletMap() {
        this.map = leaflet__WEBPACK_IMPORTED_MODULE_2__.map('mapId', { zoomControl: false }).setView([14.01902, 120.72952], 19);
        leaflet__WEBPACK_IMPORTED_MODULE_2__.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'edupala.com © Angular LeafLet',
        }).addTo(this.map);
        var icons = leaflet__WEBPACK_IMPORTED_MODULE_2__.icon({
            iconUrl: 'assets/icon/pin1.svg',
            iconSize: [20, 20],
        });
        leaflet__WEBPACK_IMPORTED_MODULE_2__.marker([14.01902, 120.72952], { icon: icons }).addTo(this.map).bindPopup('ATM').openPopup();
        /*
        Leaflet.marker([34, 77]).addTo(this.map).bindPopup('Leh').openPopup();
    
        antPath([[28.644800, 77.216721], [34.1526, 77.5771]],
          { color: '#FF0000', weight: 5, opacity: 0.6 })
          .addTo(this.map);*/
    }
};
StoreMapPage.ctorParameters = () => [];
StoreMapPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-store-map',
        template: _raw_loader_store_map_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_store_map_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StoreMapPage);



/***/ }),

/***/ 7079:
/*!********************************************************!*\
  !*** ./src/app/tablinks/store-map/store-map.page.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".app_header {\n  background-color: white;\n}\n\nion-content {\n  --overflow: hidden;\n  --ion-background-color:white ;\n}\n\n.app_title {\n  text-align: center;\n  color: black;\n  background-color: white;\n}\n\n.text_title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0 10px 1px;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\nion-back-button {\n  position: absolute !important;\n  z-index: 5;\n}\n\n.map-container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  margin: 0;\n  padding: 0 15px;\n  --ion-background-color:red;\n  overflow-y: scroll;\n}\n\n.map-container::-webkit-scrollbar {\n  display: none;\n}\n\n.map-frame {\n  border: 1px solid black;\n  background-color: white;\n  width: 100%;\n  height: 100%;\n  border: 1px solid black;\n  margin-top: 15px;\n}\n\n#mapId {\n  height: 100%;\n}\n\n.storeloc {\n  font-family: Raleway-Light !important;\n  font-size: 20px;\n  margin: 0 0 10px 0;\n  padding: 0;\n  text-align: center;\n  color: black;\n}\n\n.icon {\n  display: inline-block;\n  font-size: 20px;\n  color: #4d4d4d;\n  vertical-align: middle;\n  margin-right: 3px;\n  margin-bottom: 3px;\n}\n\n.text {\n  display: inline;\n  vertical-align: middle;\n  color: black;\n  font-size: 15px;\n  margin-bottom: 3px;\n  text-align: center;\n}\n\n.ti {\n  border-top: 1px black solid;\n  width: 30%;\n}\n\n.con {\n  text-align: center;\n  margin-top: 10px;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLW1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBQTtBQUNGOztBQUVBO0VBR0Usa0JBQUE7RUFDQSw2QkFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFERjs7QUFJQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLDZCQUFBO0VBQ0EsVUFBQTtBQURGOztBQUlBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0FBREY7O0FBSUU7RUFDRSxhQUFBO0FBRko7O0FBT0E7RUFDRSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FBSkY7O0FBT0E7RUFDRSxZQUFBO0FBSkY7O0FBT0E7RUFDRSxxQ0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFKRjs7QUFRQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFRQztFQUNFLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUxIOztBQVFDO0VBQ0MsMkJBQUE7RUFDQSxVQUFBO0FBTEY7O0FBU0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFORiIsImZpbGUiOiJzdG9yZS1tYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcF9oZWFkZXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnR7XHJcblxyXG5cclxuICAtLW92ZXJmbG93OiBoaWRkZW47XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjp3aGl0ZVxyXG59XHJcblxyXG4uYXBwX3RpdGxle1xyXG4gIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRleHRfdGl0bGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBwYWRkaW5nOiAwIDEwcHggMXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmlvbi1iYWNrLWJ1dHRvbntcclxuICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcclxuICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG4ubWFwLWNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMCAxNXB4O1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6cmVkO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuXHJcblxyXG4gICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcblxyXG4gIH1cclxufVxyXG5cclxuLm1hcC1mcmFtZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxuI21hcElkIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5zdG9yZWxvY3tcclxuICBmb250LWZhbWlseTogUmFsZXdheS1MaWdodCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW46IDAgMCAxMHB4IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG5cclxuLmljb24ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6ICM0ZDRkNGQ7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiB9XHJcblxyXG4gLnRleHR7XHJcbiAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgY29sb3I6IGJsYWNrO1xyXG4gICBmb250LXNpemU6IDE1cHg7XHJcbiAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gfVxyXG5cclxuIC50aXtcclxuICBib3JkZXItdG9wOiAxcHggYmxhY2sgc29saWQ7XHJcbiAgd2lkdGg6IDMwJTtcclxuXHJcbn1cclxuXHJcbi5jb257XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuIH1cclxuIl19 */");

/***/ }),

/***/ 8710:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tablinks/store-map/store-map.page.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("\n<ion-content [fullscreen]=\"true\">\n  <div class=\"map-container\">\n    <div class=\"con\">\n      <p class=\"storeloc\">ATM Hub Location</p>\n      <ion-icon class=\"icon\" name=\"pin\"></ion-icon>\n        <p class=\"text\">Gomez St. Barangay Rizal, Tuy Batangas</p>\n      </div>\n        <hr class=\"ti\">\n     <div class=\"map-frame\" >\n       <div id=\"mapId\" style=\"width:  100%; height: 100%\"></div>\n     </div>\n   </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tablinks_store-map_store-map_module_ts.js.map