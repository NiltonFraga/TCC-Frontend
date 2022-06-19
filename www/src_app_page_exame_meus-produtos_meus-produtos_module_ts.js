(self["webpackChunkpeppaciente"] = self["webpackChunkpeppaciente"] || []).push([["src_app_page_exame_meus-produtos_meus-produtos_module_ts"],{

/***/ 7409:
/*!**************************************************************************!*\
  !*** ./src/app/page/exame/meus-produtos/meus-produtos-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeusProdutosPageRoutingModule": () => (/* binding */ MeusProdutosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _meus_produtos_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meus-produtos.page */ 3451);




const routes = [
    {
        path: '',
        component: _meus_produtos_page__WEBPACK_IMPORTED_MODULE_0__.MeusProdutosPage
    }
];
let MeusProdutosPageRoutingModule = class MeusProdutosPageRoutingModule {
};
MeusProdutosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MeusProdutosPageRoutingModule);



/***/ }),

/***/ 6851:
/*!******************************************************************!*\
  !*** ./src/app/page/exame/meus-produtos/meus-produtos.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeusProdutosPageModule": () => (/* binding */ MeusProdutosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _meus_produtos_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./meus-produtos-routing.module */ 7409);
/* harmony import */ var _meus_produtos_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meus-produtos.page */ 3451);
/* harmony import */ var _exame_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../exame.service */ 2997);








let MeusProdutosPageModule = class MeusProdutosPageModule {
};
MeusProdutosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _meus_produtos_routing_module__WEBPACK_IMPORTED_MODULE_0__.MeusProdutosPageRoutingModule
        ],
        declarations: [_meus_produtos_page__WEBPACK_IMPORTED_MODULE_1__.MeusProdutosPage],
        providers: [
            _exame_service__WEBPACK_IMPORTED_MODULE_2__.ExameService
        ]
    })
], MeusProdutosPageModule);



/***/ }),

/***/ 3451:
/*!****************************************************************!*\
  !*** ./src/app/page/exame/meus-produtos/meus-produtos.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MeusProdutosPage": () => (/* binding */ MeusProdutosPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_meus_produtos_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./meus-produtos.page.html */ 633);
/* harmony import */ var _meus_produtos_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meus-produtos.page.scss */ 168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_loading_loading_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/loading/loading.page */ 8532);
/* harmony import */ var src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/class/storage.service */ 6578);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _exame_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../exame.service */ 2997);










let MeusProdutosPage = class MeusProdutosPage {
    constructor(exameService, modalController, toastController, urlService, router, storage) {
        this.exameService = exameService;
        this.modalController = modalController;
        this.toastController = toastController;
        this.urlService = urlService;
        this.router = router;
        this.storage = storage;
        this.router.events.subscribe((evt) => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd && this.router.url === '/page/meus-produtos') {
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
            this.idServico = yield this.storage.get('idAnimal');
            const token = yield this.storage.get('token');
            yield this.urlService.validateToken(token);
            if (this.idServico === null) {
                this.router.navigateByUrl('page/meus-servicos');
            }
            else {
                this.getProdutosByServico();
            }
        });
    }
    getProdutosByServico() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.showLoadingScreen()
                .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                (yield this.exameService.getProdutosByServico(this.idServico))
                    .subscribe((resp) => {
                    this.produtos = resp;
                    this.produtos.map(x => {
                        if (x.imagem !== null) {
                            x.img = `data:${x.imagem.tipo};base64,${x.imagem.dados}`;
                        }
                    });
                }, error => {
                    if (error.status === 401 || error.status === 403) {
                        this.storage.remove('user');
                        this.router.navigateByUrl('');
                    }
                    else {
                        this.toastController.create({
                            message: error.error,
                            duration: 5000
                        }).then(toast => {
                            toast.present();
                        });
                    }
                }, () => {
                    this.closeLoadingScreen();
                });
            }));
        });
    }
    editarProduto(id) {
        this.storage.set('idAnimal', id);
        this.router.navigateByUrl('page/editar-produto');
    }
    criarProduto() {
        this.storage.set('idAnimal', this.idServico);
        this.router.navigateByUrl('page/criar-produto');
    }
    excluirProduto(id) {
        this.showLoadingScreen()
            .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.exameService.deletarProduto(id))
                .subscribe(() => {
                this.getProdutosByServico();
            }, error => {
                if (error.status === 401 || error.status === 403) {
                    this.storage.remove('user');
                    this.router.navigateByUrl('');
                }
                else {
                    this.toastController.create({
                        message: error.error,
                        duration: 5000
                    }).then(toast => {
                        toast.present();
                    });
                }
            }, () => {
                this.closeLoadingScreen();
            });
        }));
    }
    voltar() {
        this.storage.set('idAnimal', this.idServico);
        this.router.navigateByUrl('page/meus-servicos');
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
MeusProdutosPage.ctorParameters = () => [
    { type: _exame_service__WEBPACK_IMPORTED_MODULE_5__.ExameService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_4__.UrlService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService }
];
MeusProdutosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-meus-produtos',
        template: _raw_loader_meus_produtos_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_meus_produtos_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MeusProdutosPage);



/***/ }),

/***/ 168:
/*!******************************************************************!*\
  !*** ./src/app/page/exame/meus-produtos/meus-produtos.page.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  margin-top: 6vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.grid-animais {\n  z-index: 1;\n  width: 100%;\n  height: auto;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 2vh;\n}\n\n.card-animal {\n  padding: 0;\n}\n\n.bloco-card {\n  padding: 0;\n  margin: 0;\n}\n\n.animal {\n  padding: 0px;\n  margin: 0;\n}\n\n.imagem-animal {\n  min-height: 10%;\n  height: 20%;\n}\n\n.bloco-card-content {\n  padding: 8px 4px;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: start;\n  word-break: break-word;\n}\n\n.nome {\n  font-size: 16px;\n  padding: 0px 4px;\n  font-weight: bold;\n}\n\n.info {\n  font-size: 15px;\n}\n\n.info-padrao {\n  font-size: 14px;\n}\n\n.iconi-style {\n  color: #196B10;\n  width: 36px;\n  height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldXMtcHJvZHV0b3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6Im1ldXMtcHJvZHV0b3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XHJcbiAgbWFyZ2luLXRvcDogNnZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxufVxyXG5cclxuLmdyaWQtYW5pbWFpc3tcclxuICB6LWluZGV4OiAxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW4tdG9wOiAydmg7XHJcbn1cclxuXHJcbi5jYXJkLWFuaW1hbHtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG4uYmxvY28tY2FyZHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmFuaW1hbHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uaW1hZ2VtLWFuaW1hbHtcclxuICBtaW4taGVpZ2h0OiAxMCU7XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbn1cclxuXHJcbi5ibG9jby1jYXJkLWNvbnRlbnR7XHJcbiAgcGFkZGluZzogOHB4IDRweDtcclxuICBtYXJnaW46IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxufVxyXG5cclxuLm5vbWV7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDBweCA0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5pbmZve1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLmluZm8tcGFkcmFve1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmljb25pLXN0eWxle1xyXG4gIGNvbG9yOiAjMTk2QjEwO1xyXG4gIHdpZHRoOiAzNnB4O1xyXG4gIGhlaWdodDogMzZweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 633:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/exame/meus-produtos/meus-produtos.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"content\">\r\n    <div class=\"grid-animais\">\r\n      <div *ngIf=\"loading\" class=\"preloader-wrapper big active\">\r\n        <div class=\"spinner-layer spinner-blue-only\">\r\n          <div class=\"circle-clipper left\">\r\n            <div class=\"circle\"></div>\r\n          </div><div class=\"gap-patch\">\r\n            <div class=\"circle\"></div>\r\n          </div><div class=\"circle-clipper right\">\r\n            <div class=\"circle\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"grid-animais\">\r\n        <ion-grid>\r\n          <ion-row >\r\n            <ion-col size=\"6\" class=\"bloco-card\" *ngFor=\"let produto of produtos\">\r\n              <ion-card>\r\n                <ion-card-header class=\"animal\">\r\n                  <ion-img class=\"imagem-animal\" [src]=\"produto.img\" *ngIf=\"produto.imagem !== null\"></ion-img>\r\n                  <ion-card-subtitle class=\"nome\">{{produto.nome}}</ion-card-subtitle>\r\n                </ion-card-header>\r\n                <ion-fab vertical=\"center\" horizontal=\"end\">\r\n                  <ion-fab-button style=\"--background: #196B10 !important\">\r\n                    <ion-icon name=\"caret-up-outline\"></ion-icon>\r\n                  </ion-fab-button>\r\n                  <ion-fab-list side=\"top\">\r\n                    <ion-fab-button (click)=\"editarProduto(produto.id)\"><ion-icon name=\"create-outline\" style=\"color: rgb(0, 147, 252); width: 30px; height: 30px;\"></ion-icon></ion-fab-button>\r\n                    <ion-fab-button (click)=\"excluirProduto(produto.id)\" ><ion-icon name=\"trash-outline\" style=\"color: rgb(249, 61, 3); width: 30px; height: 30px;\"></ion-icon></ion-fab-button>\r\n                  </ion-fab-list>\r\n                </ion-fab>\r\n                <ion-card-content class=\"local\">\r\n                  <div style=\"text-decoration: line-through;\">\r\n                    Valor: {{produto.valorReal}}\r\n                  </div>\r\n                  <div>\r\n                    Desconto: {{produto.valorDesconto}}\r\n                  </div>\r\n                </ion-card-content>\r\n              </ion-card>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<ion-fab vertical=\"bottom\" horizontal=\"end\">\r\n  <ion-fab-button style=\"--background: transparent !important\">\r\n    <ion-icon (click)=\"criarProduto()\" name=\"add-circle-outline\" class=\"iconi-style\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n<ion-fab vertical=\"bottom\" horizontal=\"start\">\r\n  <ion-fab-button style=\"--background: transparent !important\">\r\n    <ion-icon (click)=\"voltar()\" name=\"arrow-back-outline\" class=\"iconi-style\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_exame_meus-produtos_meus-produtos_module_ts.js.map