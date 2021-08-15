(self["webpackChunksample1"] = self["webpackChunksample1"] || []).push([["src_app_home_store-categories_store-categories_module_ts"],{

/***/ 6844:
/*!**************************************************************************!*\
  !*** ./src/app/home/store-categories/store-categories-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreCategoriesPageRoutingModule": () => (/* binding */ StoreCategoriesPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _store_categories_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-categories.page */ 404);




const routes = [
    {
        path: '',
        component: _store_categories_page__WEBPACK_IMPORTED_MODULE_0__.StoreCategoriesPage
    }
];
let StoreCategoriesPageRoutingModule = class StoreCategoriesPageRoutingModule {
};
StoreCategoriesPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StoreCategoriesPageRoutingModule);



/***/ }),

/***/ 221:
/*!******************************************************************!*\
  !*** ./src/app/home/store-categories/store-categories.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreCategoriesPageModule": () => (/* binding */ StoreCategoriesPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _store_categories_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./store-categories-routing.module */ 6844);
/* harmony import */ var _store_categories_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store-categories.page */ 404);
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-search-filter */ 4981);








let StoreCategoriesPageModule = class StoreCategoriesPageModule {
};
StoreCategoriesPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _store_categories_routing_module__WEBPACK_IMPORTED_MODULE_0__.StoreCategoriesPageRoutingModule,
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_2__.Ng2SearchPipeModule
        ],
        declarations: [_store_categories_page__WEBPACK_IMPORTED_MODULE_1__.StoreCategoriesPage]
    })
], StoreCategoriesPageModule);



/***/ }),

/***/ 404:
/*!****************************************************************!*\
  !*** ./src/app/home/store-categories/store-categories.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreCategoriesPage": () => (/* binding */ StoreCategoriesPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_store_categories_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./store-categories.page.html */ 387);
/* harmony import */ var _store_categories_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store-categories.page.scss */ 8941);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);




let StoreCategoriesPage = class StoreCategoriesPage {
    constructor() { }
    ngOnInit() {
    }
};
StoreCategoriesPage.ctorParameters = () => [];
StoreCategoriesPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-store-categories',
        template: _raw_loader_store_categories_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_store_categories_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], StoreCategoriesPage);



/***/ }),

/***/ 8941:
/*!******************************************************************!*\
  !*** ./src/app/home/store-categories/store-categories.page.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".app_header {\n  background-color: #e6ccff;\n}\n\nion-content {\n  --ion-background-color: #ff9999;\n}\n\n.sample:link, :visited, :active {\n  text-decoration: none;\n  color: black;\n}\n\n.app_title {\n  color: black;\n  background-color: #e6ccff;\n}\n\n.text_title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 0 10px 1px;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  font-size: 18px;\n}\n\nion-back-button {\n  position: absolute !important;\n  z-index: 5;\n}\n\nion-button {\n  --box-shadow: none;\n  min-height: 50px;\n}\n\n/*-----hover stripe colors-----*/\n\n/*indigo*/\n\n.btn-hover1 {\n  padding-left: 10px;\n  margin: 0;\n  color: black;\n  background-color: #b3ccff;\n  min-height: 50px;\n  text-align: left;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n\n.btn-hover1:hover {\n  background-color: #b8cfff;\n  text-decoration: none;\n  transition: all 50ms linear;\n  margin: 0;\n}\n\n/*blue*/\n\n.btn-hover2 {\n  padding-left: 10px;\n  margin: 0;\n  color: black;\n  background-color: #b3e6ff;\n  min-height: 50px;\n  text-align: left;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n\n.btn-hover2:hover {\n  background-color: #b8e8ff;\n  text-decoration: none;\n  transition: all 50ms linear;\n}\n\n/*green*/\n\n.btn-hover3 {\n  padding-left: 10px;\n  margin: 0;\n  color: black;\n  background-color: #ccffcc;\n  min-height: 50px;\n  text-align: left;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n\n.btn-hover3:hover {\n  background-color: #d1ffd1;\n  text-decoration: none;\n  transition: all 50ms linear;\n}\n\n/*yellow*/\n\n.btn-hover4 {\n  padding-left: 10px;\n  margin: 0;\n  color: black;\n  background-color: #ffff99;\n  min-height: 50px;\n  text-align: left;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n\n.btn-hover4:hover {\n  background-color: #ffff9e;\n  text-decoration: none;\n  transition: all 50ms linear;\n}\n\n/*orange*/\n\n.btn-hover5 {\n  padding-left: 10px;\n  margin: 0;\n  color: black;\n  background-color: #ffcc99;\n  min-height: 50px;\n  text-align: left;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n\n.btn-hover5:hover {\n  background-color: #ffcf9e;\n  text-decoration: none;\n  transition: all 50ms linear;\n}\n\n/*red*/\n\n.btn-hover6 {\n  padding-left: 10px;\n  margin: 0;\n  color: black;\n  background-color: #ff9999;\n  min-height: 50px;\n  text-align: left;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  justify-content: left;\n  align-items: center;\n}\n\n.btn-hover6:hover {\n  background-color: #ff9e9e;\n  text-decoration: none;\n  transition: all 50ms linear;\n}\n\n.srch {\n  z-index: 12;\n  font-size: 40px;\n  position: fixed;\n  bottom: 20px;\n  right: 10px;\n  text-decoration: none;\n  color: #ff9999;\n}\n\n.srch1:link {\n  text-decoration: none;\n  color: #ff9999;\n  background-color: black;\n  padding: 20px 20px 10px 20px;\n  border-radius: 50px;\n}\n\n.srch1:visited {\n  text-decoration: none;\n  color: #ff9999;\n  background-color: black;\n  padding: 20px 20px 10px 20px;\n  border-radius: 50px;\n}\n\n.srch1:active {\n  text-decoration: none;\n  color: #ff9999;\n  background-color: black;\n  padding: 20px 20px 10px 20px;\n  border-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JlLWNhdGVnb3JpZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjs7QUFFQTtFQUNFLCtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFFRjs7QUFDQTtFQUNFLDZCQUFBO0VBQ0EsVUFBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtBQUVGOztBQUVBLGdDQUFBOztBQUVBLFNBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsU0FBQTtBQUFGOztBQUdBLE9BQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0EsUUFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUFBRjs7QUFHQSxTQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQUFGOztBQUdBLFNBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0EsTUFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQUY7O0FBR0E7RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsMkJBQUE7QUFBRjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7RUFDRSxxQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxtQkFBQTtBQURKOztBQUdJO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLG1CQUFBO0FBQU4iLCJmaWxlIjoic3RvcmUtY2F0ZWdvcmllcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwX2hlYWRlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNlNmNjZmY7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50e1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmZjk5OTk7XHJcbn1cclxuLnNhbXBsZTpsaW5rLCA6dmlzaXRlZCwgOmFjdGl2ZXtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbi5hcHBfdGl0bGV7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmNjZmY7XHJcbn1cclxuXHJcbi50ZXh0X3RpdGxlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcGFkZGluZzogMCAxMHB4IDFweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG5cclxuaW9uLWJhY2stYnV0dG9ue1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gIHotaW5kZXg6IDU7XHJcbn1cclxuXHJcbmlvbi1idXR0b257XHJcbiAgLS1ib3gtc2hhZG93OiBub25lO1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcblxyXG59XHJcblxyXG4vKi0tLS0taG92ZXIgc3RyaXBlIGNvbG9ycy0tLS0tKi9cclxuXHJcbi8qaW5kaWdvKi9cclxuLmJ0bi1ob3ZlcjF7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbjowO1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiM2NjZmY7XHJcbiAgbWluLWhlaWdodDogNTBweDtcclxuICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4taG92ZXIxOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oI2IzY2NmZiwgMSUpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgNTBtcyBsaW5lYXI7XHJcbiAgbWFyZ2luOjA7XHJcbn1cclxuXHJcbi8qYmx1ZSovXHJcbi5idG4taG92ZXIye1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBtYXJnaW46MDtcclxuICBjb2xvcjpibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjNlNmZmO1xyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogbGVmdDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuLWhvdmVyMjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCNiM2U2ZmYsIDElKTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDUwbXMgbGluZWFyO1xyXG59XHJcblxyXG4vKmdyZWVuKi9cclxuLmJ0bi1ob3ZlcjN7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbjowO1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2ZmY2M7XHJcbiAgbWluLWhlaWdodDogNTBweDtcclxuICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4taG92ZXIzOmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oI2NjZmZjYywgMSUpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgNTBtcyBsaW5lYXI7XHJcbn1cclxuXHJcbi8qeWVsbG93Ki9cclxuLmJ0bi1ob3ZlcjR7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbjowO1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmOTk7XHJcbiAgbWluLWhlaWdodDogNTBweDtcclxuICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4taG92ZXI0OmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oI2ZmZmY5OSwgMSUpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgNTBtcyBsaW5lYXI7XHJcbn1cclxuXHJcbi8qb3JhbmdlKi9cclxuLmJ0bi1ob3ZlcjV7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbjowO1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmNjOTk7XHJcbiAgbWluLWhlaWdodDogNTBweDtcclxuICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4taG92ZXI1OmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oI2ZmY2M5OSwgMSUpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgNTBtcyBsaW5lYXI7XHJcbn1cclxuXHJcbi8qcmVkKi9cclxuLmJ0bi1ob3ZlcjZ7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbjowO1xyXG4gIGNvbG9yOmJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjk5OTk7XHJcbiAgbWluLWhlaWdodDogNTBweDtcclxuICB0ZXh0LWFsaWduOmxlZnQ7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4taG92ZXI2OmhvdmVye1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oI2ZmOTk5OSwgMSUpO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBhbGwgNTBtcyBsaW5lYXI7XHJcbn1cclxuXHJcblxyXG4uc3JjaHtcclxuICB6LWluZGV4OiAxMjtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICByaWdodDogMTBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgY29sb3I6ICNmZjk5OTk7XHJcblxyXG59XHJcbi5zcmNoMTpsaW5re1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogI2ZmOTk5OTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayA7XHJcbiAgcGFkZGluZzogMjBweCAyMHB4IDEwcHggMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgLnNyY2gxOnZpc2l0ZWR7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogI2ZmOTk5OTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrIDtcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweCAxMHB4IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLnNyY2gxOmFjdGl2ZXtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICBjb2xvcjogI2ZmOTk5OTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgO1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDIwcHggMTBweCAyMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICB9XHJcblxyXG4iXX0= */");

/***/ }),

/***/ 387:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/store-categories/store-categories.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header class=\"app_header ion-no-border\">\n  <ion-toolbar color=#e6ccff>\n    <div class=\"app_title\">\n      <ion-buttons slot=\"start\">\n          <ion-back-button icon=\"arrow-back\" defaultHref=\"home\">\n          </ion-back-button>\n          <ion-title class=\"text_title\">Store Categories</ion-title>\n      </ion-buttons>\n  </div>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"container\">\n    <!--store categories-->\n    <a href=\"home\" class=\"sample\">\n      <div class =\"btn-hover1\">Automotive</div>\n    </a>\n    <a href=\"home\" class=\"sample\">\n      <div class =\"btn-hover2\">Clothing & Shoes</div>\n    </a>\n    <a href=\"home\" class=\"sample\">\n      <div class =\"btn-hover3\">Food & Gifts</div>\n    </a>\n    <a href=\"home\" class=\"sample\">\n      <div class =\"btn-hover4\">Health & Beauty</div>\n    </a>\n    <a href=\"store-list\" class=\"sample\">\n      <div class =\"btn-hover5\">Restaurant & Dining</div>\n    </a>\n    <a href=\"home\" class=\"sample\">\n      <div class =\"btn-hover6\">Miscellaneous</div>\n    </a>\n  </div>\n  <!--search-->\n  <div class=\"srch\">\n    <a href=\"store-search\" class=\"srch1\"><ion-icon name=\"search\"></ion-icon></a>\n</div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_home_store-categories_store-categories_module_ts.js.map