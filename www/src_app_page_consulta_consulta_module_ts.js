(self["webpackChunkpeppaciente"] = self["webpackChunkpeppaciente"] || []).push([["src_app_page_consulta_consulta_module_ts"],{

/***/ 8292:
/*!**********************************************************!*\
  !*** ./src/app/page/consulta/consulta-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultaPageRoutingModule": () => (/* binding */ ConsultaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _consulta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consulta.page */ 5557);




const routes = [
    {
        path: '',
        component: _consulta_page__WEBPACK_IMPORTED_MODULE_0__.ConsultaPage
    }
];
let ConsultaPageRoutingModule = class ConsultaPageRoutingModule {
};
ConsultaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConsultaPageRoutingModule);



/***/ }),

/***/ 6891:
/*!**************************************************!*\
  !*** ./src/app/page/consulta/consulta.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultaPageModule": () => (/* binding */ ConsultaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _consulta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./consulta-routing.module */ 8292);
/* harmony import */ var _consulta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consulta.page */ 5557);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _consulta_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consulta.service */ 1493);









let ConsultaPageModule = class ConsultaPageModule {
};
ConsultaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _consulta_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConsultaPageRoutingModule
        ],
        declarations: [_consulta_page__WEBPACK_IMPORTED_MODULE_1__.ConsultaPage],
        providers: [
            _consulta_service__WEBPACK_IMPORTED_MODULE_3__.ConsultaService,
            src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_2__.UrlService
        ]
    })
], ConsultaPageModule);



/***/ }),

/***/ 5557:
/*!************************************************!*\
  !*** ./src/app/page/consulta/consulta.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConsultaPage": () => (/* binding */ ConsultaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_consulta_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./consulta.page.html */ 9483);
/* harmony import */ var _consulta_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./consulta.page.scss */ 5378);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/class/storage.service */ 6578);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _consulta_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./consulta.service */ 1493);








let ConsultaPage = class ConsultaPage {
    constructor(router, storage, urlService, consultaService) {
        this.router = router;
        this.storage = storage;
        this.urlService = urlService;
        this.consultaService = consultaService;
        this.router.events.subscribe((evt) => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd && this.router.url === '/page/chat') {
                //this.loading = true;
                this.pageEnter();
            }
        });
    }
    ngOnInit() {
    }
    pageEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this.storage.get('user');
            const token = yield this.storage.get('token');
            yield this.urlService.validateToken(token);
        });
    }
    falarCom() {
        this.router.navigateByUrl('page/mensagem');
    }
};
ConsultaPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_3__.UrlService },
    { type: _consulta_service__WEBPACK_IMPORTED_MODULE_4__.ConsultaService }
];
ConsultaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-consulta',
        template: _raw_loader_consulta_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_consulta_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConsultaPage);



/***/ }),

/***/ 5378:
/*!**************************************************!*\
  !*** ./src/app/page/consulta/consulta.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("* {\n  margin: 0;\n  padding: 0;\n}\n\n.content {\n  margin-top: 8vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.bloco-conversa {\n  border-bottom: 1px solid #196B10;\n  width: 100%;\n}\n\n.bloco {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 6px 8px;\n  color: #7b7b7b;\n}\n\n.circulo {\n  border: 1px solid #196B10;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  margin-right: 10px;\n}\n\n.bloco-left {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.data {\n  position: absolute;\n  top: 4px;\n  right: 10px;\n}\n\n.border {\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnN1bHRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7QUFDRiIsImZpbGUiOiJjb25zdWx0YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICBtYXJnaW4tdG9wOiA4dmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uYmxvY28tY29udmVyc2F7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMxOTZCMTA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5ibG9jb3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDZweCA4cHg7XHJcbiAgY29sb3I6IHJnYigxMjMsIDEyMywgMTIzKTtcclxufVxyXG5cclxuLmNpcmN1bG97XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzE5NkIxMDtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4uYmxvY28tbGVmdHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5kYXRhe1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDRweDtcclxuICByaWdodDogMTBweDtcclxufVxyXG5cclxuLmJvcmRlcntcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 9483:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/consulta/consulta.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"content\">\r\n    <ion-grid style=\"width: 100%\">\r\n      <ion-row class=\"bloco-conversa\" (click)=\"falarCom()\">\r\n        <ion-col size=\"12\">\r\n          <div class=\"bloco\">\r\n            <div class=\"bloco-left\">\r\n              <div class=\"circulo\">NF</div>\r\n              <div>Nilton Fraga</div>\r\n            </div>\r\n            <div class=\"data\">12/06/2022</div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"bloco-conversa\" (click)=\"falarCom()\">\r\n        <ion-col size=\"12\">\r\n          <div class=\"bloco\">\r\n            <div class=\"bloco-left\">\r\n              <div class=\"circulo\">KM</div>\r\n              <div>Karine Moraes</div>\r\n            </div>\r\n            <div class=\"data\">11/06/2022</div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n      <ion-row class=\"bloco-conversa\" (click)=\"falarCom()\">\r\n        <ion-col size=\"12\">\r\n          <div class=\"bloco\">\r\n            <div class=\"bloco-left\">\r\n              <div class=\"circulo\">MA</div>\r\n              <div>Marco Antonio</div>\r\n            </div>\r\n            <div class=\"data\">10/06/2022</div>\r\n          </div>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_consulta_consulta_module_ts.js.map