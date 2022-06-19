(self["webpackChunkpeppaciente"] = self["webpackChunkpeppaciente"] || []).push([["src_app_page_exame_exame_module_ts"],{

/***/ 3232:
/*!****************************************************!*\
  !*** ./src/app/page/exame/exame-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamePageRoutingModule": () => (/* binding */ ExamePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _exame_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exame.page */ 1223);




const routes = [
    {
        path: '',
        component: _exame_page__WEBPACK_IMPORTED_MODULE_0__.ExamePage
    }
];
let ExamePageRoutingModule = class ExamePageRoutingModule {
};
ExamePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExamePageRoutingModule);



/***/ }),

/***/ 7281:
/*!********************************************!*\
  !*** ./src/app/page/exame/exame.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamePageModule": () => (/* binding */ ExamePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _exame_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exame-routing.module */ 3232);
/* harmony import */ var _exame_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exame.page */ 1223);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _exame_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exame.service */ 2997);









let ExamePageModule = class ExamePageModule {
};
ExamePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _exame_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExamePageRoutingModule
        ],
        declarations: [_exame_page__WEBPACK_IMPORTED_MODULE_1__.ExamePage],
        providers: [
            _exame_service__WEBPACK_IMPORTED_MODULE_3__.ExameService,
            src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_2__.UrlService
        ]
    })
], ExamePageModule);



/***/ }),

/***/ 1223:
/*!******************************************!*\
  !*** ./src/app/page/exame/exame.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExamePage": () => (/* binding */ ExamePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_exame_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./exame.page.html */ 3134);
/* harmony import */ var _exame_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exame.page.scss */ 7283);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/class/storage.service */ 6578);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _exame_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exame.service */ 2997);








let ExamePage = class ExamePage {
    constructor(router, storage, urlService, exameService) {
        this.router = router;
        this.storage = storage;
        this.urlService = urlService;
        this.exameService = exameService;
        this.foto = 'https://scontent.fsdu15-1.fna.fbcdn.net/v/t1.6435-9/173246721_1109225312820513_6797640485221109157_n.png?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeHxv9P3vxN2ECLC28mmIHy1ZceYjGMwe4hlx5iMYzB7iKidkYOuzm1Hw3L1WyH-Hzh-5vtReM-bAQWjgd0Z_qUu&_nc_ohc=4MaH5D1ZvrIAX9iecDQ&_nc_ht=scontent.fsdu15-1.fna&oh=00_AT-wMwuvzScMEiI1zKHE4KAeEOcDXx-OlzG65ggb2Fv7sQ&oe=62B1DFBE';
        this.loading = false;
        this.router.events.subscribe((evt) => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd && this.router.url === '/page/servicos') {
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
            (yield this.exameService.getAllServico())
                .subscribe((resp) => {
                this.servicos = resp;
                this.servicos.map(x => {
                    if (x.imagem !== null) {
                        x.img = `data:${x.imagem.tipo};base64,${x.imagem.dados}`;
                    }
                });
                if (this.servicos.length === 0) {
                    this.mensagem = 'Nenhum serviço cadastrado';
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
    ciarNovoServico() {
        this.router.navigateByUrl('page/criar-servicos');
    }
    verMeusServico() {
        this.router.navigateByUrl('page/meus-servicos');
    }
    verProdutos(id) {
        this.storage.set('idAnimal', id);
        this.router.navigateByUrl('page/produtos');
    }
};
ExamePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_3__.UrlService },
    { type: _exame_service__WEBPACK_IMPORTED_MODULE_4__.ExameService }
];
ExamePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-exame',
        template: _raw_loader_exame_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_exame_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ExamePage);



/***/ }),

/***/ 7283:
/*!********************************************!*\
  !*** ./src/app/page/exame/exame.page.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  margin-top: 10vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.grid-animais {\n  z-index: 1;\n  width: 100%;\n  height: auto;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 2vh;\n}\n\n.card-animal {\n  padding: 0;\n}\n\n.bloco-card {\n  padding: 0;\n  margin: 0;\n}\n\n.animal {\n  padding: 0px;\n  margin: 0;\n}\n\n.imagem-animal {\n  min-height: 10%;\n  height: 20%;\n}\n\n.bloco-card-content {\n  padding: 8px 4px;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: start;\n  word-break: break-word;\n}\n\n.nome {\n  font-size: 16px;\n  padding: 0px 4px;\n  font-weight: bold;\n}\n\n.info {\n  font-size: 15px;\n}\n\n.info-padrao {\n  font-size: 14px;\n}\n\n.botao-loja {\n  color: #196B10;\n  width: 36px;\n  height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0YiLCJmaWxlIjoiZXhhbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XHJcbiAgbWFyZ2luLXRvcDogMTB2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmdyaWQtYW5pbWFpc3tcclxuICB6LWluZGV4OiAxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tdG9wOiAydmg7XHJcbn1cclxuXHJcbi5jYXJkLWFuaW1hbHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uYmxvY28tY2FyZHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmFuaW1hbHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uaW1hZ2VtLWFuaW1hbHtcclxuICBtaW4taGVpZ2h0OiAxMCU7XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbn1cclxuXHJcbi5ibG9jby1jYXJkLWNvbnRlbnR7XHJcbiAgcGFkZGluZzogOHB4IDRweDtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxufVxyXG5cclxuLm5vbWV7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDBweCA0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5pbmZve1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLmluZm8tcGFkcmFve1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmJvdGFvLWxvamF7XHJcbiAgY29sb3I6ICMxOTZCMTA7XHJcbiAgd2lkdGg6IDM2cHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 3134:
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/exame/exame.page.html ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"content\">\r\n    <div class=\"grid-animais\">\r\n      <div *ngIf=\"loading\" class=\"preloader-wrapper big active\">\r\n        <div class=\"spinner-layer spinner-blue-only\">\r\n          <div class=\"circle-clipper left\">\r\n            <div class=\"circle\"></div>\r\n          </div><div class=\"gap-patch\">\r\n            <div class=\"circle\"></div>\r\n          </div><div class=\"circle-clipper right\">\r\n            <div class=\"circle\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <span *ngIf=\"!loading\">{{mensagem}}</span>\r\n        </ion-row>\r\n        <ion-row >\r\n          <ion-col size=\"12\" class=\"bloco-card\" *ngFor=\"let servico of servicos\">\r\n            <ion-card>\r\n              <ion-card-header class=\"animal\">\r\n                <ion-img class=\"imagem-animal\" [src]=\"servico.img\" *ngIf=\"servico.imagem !== null\"></ion-img>\r\n                <ion-img class=\"imagem-animal\" [src]=\"foto\" *ngIf=\"servico.imagem === null\"></ion-img>\r\n                <ion-card-title class=\"nome\">{{servico.nome}}</ion-card-title>\r\n              </ion-card-header>\r\n              <ion-fab vertical=\"center\" horizontal=\"end\" style=\"--background: #fafafa !important\">\r\n                <ion-fab-button *ngIf=\"servico.tipo === 'Produto'\" style=\"--background: #fafafa !important\">\r\n                  <ion-icon (click)=\"verProdutos(servico.id)\" name=\"enter-outline\" class=\"botao-loja\"></ion-icon>\r\n                </ion-fab-button>\r\n              </ion-fab>\r\n              <ion-card-content class=\"bloco-card-content\">\r\n                <div class=\"info\">Tipo de desconto: {{servico.tipo}}</div>\r\n                <div class=\"info\">{{servico.descricao}}</div>\r\n                <div class=\"info\">{{servico.desconto}}</div>\r\n                <div class=\"info-padrao\">Rua: {{servico.rua}}</div>\r\n                <div class=\"info-padrao\">Bairro: {{servico.bairro}}</div>\r\n                <div class=\"info-padrao\">Cidade: {{servico.cidade}}</div>\r\n                <div class=\"info-padrao\">Telefone: {{servico.telefone1}}</div>\r\n                <div class=\"info-padrao\">Telefone: {{servico.telefone2}}</div>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<ion-fab vertical=\"bottom\" style=\"--background: #196B10 !important\"  horizontal=\"end\" slot=\"fixed\" *ngIf=\"user && user.role === 'pessoa_juridica'\">\r\n  <ion-fab-button style=\"--background: #196B10 !important\">\r\n    <ion-icon name=\"caret-up-outline\" ></ion-icon>\r\n  </ion-fab-button>\r\n  <ion-fab-list side=\"top\">\r\n    <ion-fab-button (click)=\"ciarNovoServico()\"><ion-icon name=\"add-circle-outline\" style=\"color: rgb(0, 147, 252); width: 44px; height: 44px;\"></ion-icon></ion-fab-button>\r\n    <ion-fab-button (click)=\"verMeusServico()\"><ion-icon name=\"folder-open-outline\" style=\"color: rgb(203, 136, 1); width: 30px; height: 30px;\"></ion-icon></ion-fab-button>\r\n  </ion-fab-list>\r\n</ion-fab>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_exame_exame_module_ts.js.map