(self["webpackChunkpeppaciente"] = self["webpackChunkpeppaciente"] || []).push([["src_app_page_medicamento_medicamento_module_ts"],{

/***/ 2349:
/*!****************************************************************!*\
  !*** ./src/app/page/medicamento/medicamento-routing.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicamentoPageRoutingModule": () => (/* binding */ MedicamentoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _medicamento_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./medicamento.page */ 6895);




const routes = [
    {
        path: '',
        component: _medicamento_page__WEBPACK_IMPORTED_MODULE_0__.MedicamentoPage
    }
];
let MedicamentoPageRoutingModule = class MedicamentoPageRoutingModule {
};
MedicamentoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MedicamentoPageRoutingModule);



/***/ }),

/***/ 6285:
/*!********************************************************!*\
  !*** ./src/app/page/medicamento/medicamento.module.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicamentoPageModule": () => (/* binding */ MedicamentoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _medicamento_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./medicamento-routing.module */ 2349);
/* harmony import */ var _medicamento_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./medicamento.page */ 6895);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _medicamento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./medicamento.service */ 5418);









let MedicamentoPageModule = class MedicamentoPageModule {
};
MedicamentoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _medicamento_routing_module__WEBPACK_IMPORTED_MODULE_0__.MedicamentoPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule
        ],
        declarations: [_medicamento_page__WEBPACK_IMPORTED_MODULE_1__.MedicamentoPage],
        providers: [
            _medicamento_service__WEBPACK_IMPORTED_MODULE_3__.MedicamentoService,
            src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_2__.UrlService
        ]
    })
], MedicamentoPageModule);



/***/ }),

/***/ 6895:
/*!******************************************************!*\
  !*** ./src/app/page/medicamento/medicamento.page.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MedicamentoPage": () => (/* binding */ MedicamentoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_medicamento_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./medicamento.page.html */ 860);
/* harmony import */ var _medicamento_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./medicamento.page.scss */ 503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/class/storage.service */ 6578);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _medicamento_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./medicamento.service */ 5418);









let MedicamentoPage = class MedicamentoPage {
    constructor(router, storage, urlService, modalController, medicamentoService) {
        this.router = router;
        this.storage = storage;
        this.urlService = urlService;
        this.modalController = modalController;
        this.medicamentoService = medicamentoService;
        this.gato = 'https://www.petz.com.br/blog/wp-content/uploads/2021/05/gato-branco-de-olho-azul.jpg';
        this.loading = false;
        this.router.events.subscribe((evt) => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd && this.router.url === '/page/minha-area') {
                this.loading = true;
                this.pageEnter();
            }
        });
    }
    ngOnInit() { }
    pageEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this.storage.get('user');
            const token = yield this.storage.get('token');
            yield this.urlService.validateToken(token);
            this.getAnimaisByUsuario();
        });
    }
    getAnimaisByUsuario() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.medicamentoService.getAnimaisByUsuario(this.user.id))
                .subscribe((resp) => {
                this.animais = resp;
                this.animais.map(x => {
                    if (x.imagem !== null) {
                        x.img = `data:${x.imagem.tipo};base64,${x.imagem.dados}`;
                    }
                });
                if (this.animais.length === 0) {
                    this.mensagem = 'Não há nenhum animal para adoção';
                }
                this.loading = false;
            }, error => {
                if (error.status === 401 || error.status === 403) {
                    this.storage.remove('user');
                    this.router.navigateByUrl('');
                }
                this.mensagem = error.error;
                this.loading = false;
            });
        });
    }
    excluirPet(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.medicamentoService.deleteAnimal(id))
                .subscribe(() => {
                this.getAnimaisByUsuario();
            }, error => {
                if (error.status === 401 || error.status === 403) {
                    this.storage.remove('user');
                    this.router.navigateByUrl('');
                }
                this.mensagem = error.error;
                this.loading = false;
            });
        });
    }
    detalhesAnimal(id) {
        this.storage.set('idAnimal', id);
        this.router.navigateByUrl('page/editar-pet');
    }
    criarAnimal() {
        this.router.navigateByUrl('page/criar-pet');
    }
    visualizarAnimaisFavoritos() {
        this.router.navigateByUrl('page/pets-favoritos');
    }
    visualizarPerfil() {
        this.router.navigateByUrl('page/perfil');
    }
};
MedicamentoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_3__.UrlService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _medicamento_service__WEBPACK_IMPORTED_MODULE_4__.MedicamentoService }
];
MedicamentoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-medicamento',
        template: _raw_loader_medicamento_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_medicamento_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MedicamentoPage);



/***/ }),

/***/ 503:
/*!********************************************************!*\
  !*** ./src/app/page/medicamento/medicamento.page.scss ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  margin-top: 7vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.grid-content {\n  padding-top: 2vh;\n  width: 100%;\n  position: fixed;\n  background-color: #ffffff;\n  z-index: 99;\n}\n\n.perfil {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n}\n\n.iconi-pet {\n  width: 25px;\n  height: 25px;\n  fill: #07a70a;\n  color: #07a70a;\n}\n\n.texto-pet {\n  margin-left: 8px;\n  font-size: 14px;\n  color: #606060;\n}\n\n.borda {\n  border: 1px solid black;\n}\n\n.grid-animais {\n  z-index: 1;\n  width: 100%;\n  height: auto;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 2vh;\n}\n\n.card-animal {\n  padding: 0;\n}\n\n.bloco-card {\n  padding: 0;\n  margin: 0;\n}\n\n.animal {\n  padding: 0px;\n  margin: 0;\n}\n\n.imagem-animal {\n  min-height: 10%;\n  height: 20%;\n}\n\n.local {\n  font-size: 14px;\n  padding: 8px 4px;\n  margin: 0;\n}\n\n.nome {\n  font-size: 16px;\n  padding: 0px 4px;\n  font-weight: bold;\n}\n\n.excluir {\n  position: absolute;\n  color: red;\n  top: 0px;\n  right: 0;\n  background-color: #ffffffc5;\n  width: 30px;\n  height: 30px;\n}\n\n.excluir ion-icon {\n  width: 30px;\n  height: 30px;\n}\n\n.edit {\n  position: absolute;\n  color: #004d81;\n  right: 0;\n  top: 32px;\n  background-color: #ffffffc5;\n  width: 30px;\n  height: 30px;\n}\n\n.edit ion-icon {\n  width: 28px;\n  height: 28px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lZGljYW1lbnRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBRjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQUoiLCJmaWxlIjoibWVkaWNhbWVudG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XHJcbiAgbWFyZ2luLXRvcDogN3ZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmdyaWQtY29udGVudHtcclxuICBwYWRkaW5nLXRvcDogMnZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gIHotaW5kZXg6IDk5O1xyXG59XHJcblxyXG4ucGVyZmlse1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5pY29uaS1wZXR7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGZpbGw6IHJnYig3LCAxNjcsIDEwKTtcclxuICBjb2xvcjogcmdiKDcsIDE2NywgMTApO1xyXG59XHJcblxyXG4udGV4dG8tcGV0e1xyXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiByZ2IoOTYsIDk2LCA5Nik7XHJcbn1cclxuXHJcbi5ib3JkYXtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLmdyaWQtYW5pbWFpc3tcclxuICB6LWluZGV4OiAxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tdG9wOiAydmg7XHJcbn1cclxuXHJcbi5jYXJkLWFuaW1hbHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uYmxvY28tY2FyZHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmFuaW1hbHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uaW1hZ2VtLWFuaW1hbHtcclxuICBtaW4taGVpZ2h0OiAxMCU7XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbn1cclxuXHJcbi5sb2NhbHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgcGFkZGluZzogOHB4IDRweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5ub21le1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBwYWRkaW5nOiAwcHggNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uZXhjbHVpcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29sb3I6IHJlZDtcclxuICB0b3A6IDBweDtcclxuICByaWdodDogMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmYzU7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG5cclxuICBpb24taWNvbntcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmVkaXR7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbG9yOiByZ2IoMCwgNzcsIDEyOSk7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAzMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZjNTtcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IDMwcHg7XHJcblxyXG4gIGlvbi1pY29ue1xyXG4gICAgd2lkdGg6IDI4cHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */");

/***/ }),

/***/ 860:
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/medicamento/medicamento.page.html ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"content\">\r\n    <div class=\"grid-animais\">\r\n      <div *ngIf=\"loading\" class=\"preloader-wrapper big active\">\r\n        <div class=\"spinner-layer spinner-blue-only\">\r\n          <div class=\"circle-clipper left\">\r\n            <div class=\"circle\"></div>\r\n          </div><div class=\"gap-patch\">\r\n            <div class=\"circle\"></div>\r\n          </div><div class=\"circle-clipper right\">\r\n            <div class=\"circle\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <ion-col size=\"12\" class=\"perfil\">\r\n            <ion-icon name=\"paw-outline\" class=\"iconi-pet\"></ion-icon>\r\n            <span class=\"texto-pet\">MEUS PETS PARA ADOÇÃO</span>\r\n          </ion-col>\r\n          <span *ngIf=\"!loading\">{{mensagem}}</span>\r\n        </ion-row>\r\n        <ion-row >\r\n          <ion-col size=\"6\" class=\"bloco-card\" *ngFor=\"let animal of animais\">\r\n            <ion-card>\r\n              <ion-card-header class=\"animal\">\r\n                <ion-img class=\"imagem-animal\" [src]=\"animal.img\" *ngIf=\"animal.imagem !== null\"></ion-img>\r\n                <ion-img class=\"imagem-animal\" [src]=\"gato\" *ngIf=\"animal.imagem === null\"></ion-img>\r\n                <span class=\"excluir\" (click)=\"excluirPet(animal.id)\">\r\n                  <ion-icon name=\"close-outline\"></ion-icon>\r\n                </span>\r\n                <span class=\"edit\" (click)=\"detalhesAnimal(animal.id)\">\r\n                  <ion-icon name=\"create-outline\" ></ion-icon>\r\n                </span>\r\n                <ion-card-subtitle class=\"nome\">{{animal.nome}}</ion-card-subtitle>\r\n              </ion-card-header>\r\n              <ion-card-content class=\"local\">\r\n                Bairro: {{animal.bairro}}\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<ion-fab vertical=\"bottom\" style=\"--background: #196B10 !important\"  horizontal=\"end\" slot=\"fixed\">\r\n  <ion-fab-button style=\"--background: #196B10 !important\">\r\n    <ion-icon name=\"caret-up-outline\" ></ion-icon>\r\n  </ion-fab-button>\r\n  <ion-fab-list side=\"top\">\r\n    <ion-fab-button (click)=\"criarAnimal()\"><ion-icon name=\"add-circle-outline\" style=\"color: rgb(255, 132, 0); width: 44px; height: 44px;\"></ion-icon></ion-fab-button>\r\n    <ion-fab-button (click)=\"visualizarAnimaisFavoritos()\"><ion-icon name=\"heart\" style=\"color: rgb(255, 21, 0); width: 38px; height: 38px;\"></ion-icon></ion-fab-button>\r\n    <ion-fab-button (click)=\"visualizarPerfil()\"><ion-icon name=\"person-circle-outline\" style=\"color: rgb(12, 156, 40); width: 40px; height: 40px;\"></ion-icon></ion-fab-button>\r\n  </ion-fab-list>\r\n</ion-fab>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_medicamento_medicamento_module_ts.js.map