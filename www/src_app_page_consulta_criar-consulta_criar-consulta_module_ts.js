(self["webpackChunkpeppaciente"] = self["webpackChunkpeppaciente"] || []).push([["src_app_page_consulta_criar-consulta_criar-consulta_module_ts"],{

/***/ 131:
/*!*******************************************************************************!*\
  !*** ./src/app/page/consulta/criar-consulta/criar-consulta-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CriarConsultaPageRoutingModule": () => (/* binding */ CriarConsultaPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _criar_consulta_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./criar-consulta.page */ 8669);




const routes = [
    {
        path: '',
        component: _criar_consulta_page__WEBPACK_IMPORTED_MODULE_0__.CriarConsultaPage
    }
];
let CriarConsultaPageRoutingModule = class CriarConsultaPageRoutingModule {
};
CriarConsultaPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CriarConsultaPageRoutingModule);



/***/ }),

/***/ 6199:
/*!***********************************************************************!*\
  !*** ./src/app/page/consulta/criar-consulta/criar-consulta.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CriarConsultaPageModule": () => (/* binding */ CriarConsultaPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _criar_consulta_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./criar-consulta-routing.module */ 131);
/* harmony import */ var _criar_consulta_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./criar-consulta.page */ 8669);
/* harmony import */ var _consulta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../consulta.service */ 1493);








let CriarConsultaPageModule = class CriarConsultaPageModule {
};
CriarConsultaPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _criar_consulta_routing_module__WEBPACK_IMPORTED_MODULE_0__.CriarConsultaPageRoutingModule
        ],
        declarations: [_criar_consulta_page__WEBPACK_IMPORTED_MODULE_1__.CriarConsultaPage],
        providers: [
            _consulta_service__WEBPACK_IMPORTED_MODULE_2__.ConsultaService
        ]
    })
], CriarConsultaPageModule);



/***/ }),

/***/ 8669:
/*!*********************************************************************!*\
  !*** ./src/app/page/consulta/criar-consulta/criar-consulta.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CriarConsultaPage": () => (/* binding */ CriarConsultaPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_criar_consulta_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./criar-consulta.page.html */ 5797);
/* harmony import */ var _criar_consulta_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./criar-consulta.page.scss */ 2925);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_loading_loading_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/loading/loading.page */ 8532);
/* harmony import */ var src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/class/storage.service */ 6578);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _consulta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../consulta.service */ 1493);










let CriarConsultaPage = class CriarConsultaPage {
    constructor(consultaService, modalController, toastController, urlService, router, storage) {
        this.consultaService = consultaService;
        this.modalController = modalController;
        this.toastController = toastController;
        this.urlService = urlService;
        this.router = router;
        this.storage = storage;
        this.router.events.subscribe((evt) => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd && this.router.url === '/page/mensagem') {
                this.pageEnter();
            }
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () { });
    }
    pageEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this.storage.get('user');
            const token = yield this.storage.get('token');
            yield this.urlService.validateToken(token);
        });
    }
    showLoadingScreen() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const loadingScreen = yield this.modalController.create({
                component: src_app_loading_loading_page__WEBPACK_IMPORTED_MODULE_2__.LoadingPage
            });
            return yield loadingScreen.present();
        });
    }
    closeLoadingScreen() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.modalController.getTop().then(loader => {
                if (loader) {
                    loader.dismiss();
                }
            });
        });
    }
};
CriarConsultaPage.ctorParameters = () => [
    { type: _consulta_service__WEBPACK_IMPORTED_MODULE_5__.ConsultaService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_4__.UrlService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService }
];
CriarConsultaPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-criar-consulta',
        template: _raw_loader_criar_consulta_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_criar_consulta_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CriarConsultaPage);



/***/ }),

/***/ 2925:
/*!***********************************************************************!*\
  !*** ./src/app/page/consulta/criar-consulta/criar-consulta.page.scss ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("* {\n  margin: 0;\n  padding: 0;\n}\n\n.content {\n  margin-top: 8vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.header {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  height: 40px;\n  padding: 4px 8px;\n  font-size: 20px;\n  color: aliceblue;\n  border-top: 1px solid #196B10;\n  background-color: #196B10;\n}\n\n.mensagem {\n  background-color: rgba(179, 179, 179, 0.448);\n  width: 100%;\n  height: 70vh;\n  overflow-y: scroll;\n  padding-top: 10px;\n}\n\n.caixa-mensagem {\n  display: flex;\n  flex-direction: column;\n}\n\np {\n  border: 1px solid black;\n  border-radius: 10px;\n  padding: 4px 10px;\n  margin-bottom: 10px;\n  margin-left: 10px;\n  margin-right: 10px;\n  max-width: 200px;\n}\n\nli {\n  display: flex;\n  align-items: center;\n}\n\n.msgRight {\n  justify-content: flex-end;\n  text-align: left;\n}\n\n.msgRight p {\n  background-color: #79ff6a;\n}\n\n.msgLeft {\n  justify-content: flex-start;\n  text-align: left;\n}\n\n.msgLeft p {\n  background-color: #d8d8d8;\n}\n\n.bloco-input {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 8vh;\n}\n\n.iconi-enviar {\n  width: 40px;\n  height: 40px;\n  color: #196B10;\n}\n\n.border {\n  border: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyaWFyLWNvbnN1bHRhLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsNENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNFO0VBQ0UseUJBQUE7QUFDSjs7QUFHQTtFQUNFLDJCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFDRTtFQUNFLHlCQUFBO0FBQ0o7O0FBR0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLFdBQUE7QUFBRjs7QUFHQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQUFGOztBQUlBO0VBQ0UsdUJBQUE7QUFERiIsImZpbGUiOiJjcmlhci1jb25zdWx0YS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uY29udGVudHtcclxuICBtYXJnaW4tdG9wOiA4dmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgcGFkZGluZzogNHB4IDhweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgIzE5NkIxMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk2QjEwO1xyXG59XHJcblxyXG4ubWVuc2FnZW17XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzksIDE3OSwgMTc5LCAwLjQ0OCk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA3MHZoO1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxufVxyXG5cclxuLmNhaXhhLW1lbnNhZ2Vte1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxucHtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDRweCAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbmxpe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1zZ1JpZ2h0e1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHJcbiAgcHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3OWZmNmE7XHJcbiAgfVxyXG59XHJcblxyXG4ubXNnTGVmdHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBwe1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcclxuICB9XHJcbn1cclxuXHJcbi5ibG9jby1pbnB1dHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGhlaWdodDogOHZoO1xyXG59XHJcblxyXG4uaWNvbmktZW52aWFye1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBjb2xvcjogIzE5NkIxMDtcclxufVxyXG5cclxuXHJcbi5ib3JkZXJ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 5797:
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/consulta/criar-consulta/criar-consulta.page.html ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"content\">\r\n    <ion-grid style=\"width: 100%;\">\r\n      <div class=\"header\">\r\n        Nilton Fraga\r\n      </div>\r\n      <div class=\"mensagem\">\r\n        <ul>\r\n          <li class=\"msgRight\"><p>Oi</p></li>\r\n          <li class=\"msgLeft\"><p>Ola tudo bem ?</p></li>\r\n          <li class=\"msgRight\"><p>Tudo sim e vc ?</p></li>\r\n          <li class=\"msgLeft\"><p>Tambem estou.</p></li>\r\n          <li class=\"msgRight\"><p>Eu estou intereçada em um dos seus bixinhos</p></li>\r\n          <li class=\"msgRight\"><p>A Maya</p></li>\r\n          <li class=\"msgRight\"><p>Gostatia de marcar uma visita em um local para poder ve-la</p></li>\r\n          <li class=\"msgLeft\"><p>Claro, podemos sim</p></li>\r\n          <li class=\"msgLeft\"><p>O meu endereço se encontra nos datalhes do pet</p></li>\r\n          <li class=\"msgLeft\"><p>O numero é 27</p></li>\r\n          <li class=\"msgRight\"><p>Podemos marcar amanha as 13:30 ?</p></li>\r\n          <li class=\"msgLeft\"><p>Podemos sim, combinado, te aguardo amanha</p></li>\r\n          <li class=\"msgRight\"><p>Ta bom, muito obrigado</p></li>\r\n        </ul>\r\n      </div>\r\n      <div class=\"bloco-input\">\r\n        <input tipe=\"text\"/>\r\n        <ion-icon name=\"arrow-forward-circle-outline\" class=\"iconi-enviar\"></ion-icon>\r\n      </div>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_consulta_criar-consulta_criar-consulta_module_ts.js.map