(self["webpackChunkpeppaciente"] = self["webpackChunkpeppaciente"] || []).push([["src_app_page_medicamento_pets-favoritos_pet-favorito_module_ts"],{

/***/ 5373:
/*!********************************************************************************!*\
  !*** ./src/app/page/medicamento/pets-favoritos/pet-favorito-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PetFavoritoPageRoutingModule": () => (/* binding */ PetFavoritoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _pet_favorito_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pet-favorito.page */ 563);




const routes = [
    {
        path: '',
        component: _pet_favorito_page__WEBPACK_IMPORTED_MODULE_0__.PetFavoritoPage
    }
];
let PetFavoritoPageRoutingModule = class PetFavoritoPageRoutingModule {
};
PetFavoritoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PetFavoritoPageRoutingModule);



/***/ }),

/***/ 6841:
/*!************************************************************************!*\
  !*** ./src/app/page/medicamento/pets-favoritos/pet-favorito.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PetFavoritoPageModule": () => (/* binding */ PetFavoritoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _pet_favorito_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pet-favorito-routing.module */ 5373);
/* harmony import */ var _pet_favorito_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pet-favorito.page */ 563);
/* harmony import */ var _medicamento_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../medicamento.service */ 5418);








let PetFavoritoPageModule = class PetFavoritoPageModule {
};
PetFavoritoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _pet_favorito_routing_module__WEBPACK_IMPORTED_MODULE_0__.PetFavoritoPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_pet_favorito_page__WEBPACK_IMPORTED_MODULE_1__.PetFavoritoPage],
        providers: [_medicamento_service__WEBPACK_IMPORTED_MODULE_2__.MedicamentoService]
    })
], PetFavoritoPageModule);



/***/ }),

/***/ 563:
/*!**********************************************************************!*\
  !*** ./src/app/page/medicamento/pets-favoritos/pet-favorito.page.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PetFavoritoPage": () => (/* binding */ PetFavoritoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_pet_favorito_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./pet-favorito.page.html */ 2165);
/* harmony import */ var _pet_favorito_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pet-favorito.page.scss */ 2485);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_loading_loading_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/loading/loading.page */ 8532);
/* harmony import */ var src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/class/storage.service */ 6578);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _medicamento_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../medicamento.service */ 5418);











let PetFavoritoPage = class PetFavoritoPage {
    constructor(router, storage, urlService, modalController, toastController, medicamentoService, fb) {
        this.router = router;
        this.storage = storage;
        this.urlService = urlService;
        this.modalController = modalController;
        this.toastController = toastController;
        this.medicamentoService = medicamentoService;
        this.fb = fb;
        this.loading = false;
        this.router.events.subscribe((evt) => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd && this.router.url === `/page/pets-favoritos`) {
                this.loading = true;
                this.pageEnter();
            }
        });
    }
    pageEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this.storage.get('user');
            const token = yield this.storage.get('token');
            yield this.urlService.validateToken(token);
            yield this.getAnimaisFavorito();
        });
    }
    getAnimaisFavorito() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.medicamentoService.getAnimaisFavorito(this.user.id)).subscribe((res) => {
                this.animais = res;
                this.animais.map(x => {
                    if (x.imagem !== null) {
                        x.img = `data:${x.imagem.tipo};base64,${x.imagem.dados}`;
                    }
                });
                if (this.animais.length === 0) {
                    this.mensagem = 'Não há nenhum animal favoritado';
                }
                this.loading = false;
            });
        });
    }
    detalhesAnimal(id) {
        this.storage.set('idAnimal', id);
        this.router.navigateByUrl('page/adotar');
    }
    ngOnInit() {
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
PetFavoritoPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_4__.UrlService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _medicamento_service__WEBPACK_IMPORTED_MODULE_5__.MedicamentoService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder }
];
PetFavoritoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-pet-favorito',
        template: _raw_loader_pet_favorito_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_pet_favorito_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PetFavoritoPage);



/***/ }),

/***/ 2485:
/*!************************************************************************!*\
  !*** ./src/app/page/medicamento/pets-favoritos/pet-favorito.page.scss ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  margin-top: 7vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.grid-content {\n  padding-top: 2vh;\n  width: 100%;\n  position: fixed;\n  background-color: #ffffff;\n  z-index: 99;\n}\n\n.perfil {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  width: 100%;\n}\n\n.iconi-pet {\n  width: 25px;\n  height: 25px;\n  fill: #07a70a;\n  color: #07a70a;\n}\n\n.texto-pet {\n  margin-left: 8px;\n  font-size: 14px;\n  color: #606060;\n}\n\n.borda {\n  border: 1px solid black;\n}\n\n.grid-animais {\n  z-index: 1;\n  width: 100%;\n  height: auto;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 2vh;\n}\n\n.card-animal {\n  padding: 0;\n}\n\n.bloco-card {\n  padding: 0;\n  margin: 0;\n}\n\n.animal {\n  padding: 0px;\n  margin: 0;\n}\n\n.imagem-animal {\n  min-height: 10%;\n  height: 20%;\n}\n\n.local {\n  font-size: 14px;\n  padding: 8px 4px;\n  margin: 0;\n}\n\n.nome {\n  font-size: 16px;\n  padding: 0px 4px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBldC1mYXZvcml0by5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6InBldC1mYXZvcml0by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcclxuICBtYXJnaW4tdG9wOiA3dmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZ3JpZC1jb250ZW50e1xyXG4gIHBhZGRpbmctdG9wOiAydmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgei1pbmRleDogOTk7XHJcbn1cclxuXHJcbi5wZXJmaWx7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmljb25pLXBldHtcclxuICB3aWR0aDogMjVweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgZmlsbDogcmdiKDcsIDE2NywgMTApO1xyXG4gIGNvbG9yOiByZ2IoNywgMTY3LCAxMCk7XHJcbn1cclxuXHJcbi50ZXh0by1wZXR7XHJcbiAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6IHJnYig5NiwgOTYsIDk2KTtcclxufVxyXG5cclxuLmJvcmRhe1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4uZ3JpZC1hbmltYWlze1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxufVxyXG5cclxuLmNhcmQtYW5pbWFse1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5ibG9jby1jYXJke1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uYW5pbWFse1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5pbWFnZW0tYW5pbWFse1xyXG4gIG1pbi1oZWlnaHQ6IDEwJTtcclxuICBoZWlnaHQ6IDIwJTtcclxufVxyXG5cclxuLmxvY2Fse1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nOiA4cHggNHB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLm5vbWV7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHBhZGRpbmc6IDBweCA0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 2165:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/medicamento/pets-favoritos/pet-favorito.page.html ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"content\">\r\n    <div class=\"grid-animais\">\r\n      <div *ngIf=\"loading\" class=\"preloader-wrapper big active\">\r\n        <div class=\"spinner-layer spinner-blue-only\">\r\n          <div class=\"circle-clipper left\">\r\n            <div class=\"circle\"></div>\r\n          </div><div class=\"gap-patch\">\r\n            <div class=\"circle\"></div>\r\n          </div><div class=\"circle-clipper right\">\r\n            <div class=\"circle\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <ion-grid>\r\n        <ion-row>\r\n          <span *ngIf=\"!loading\">{{mensagem}}</span>\r\n        </ion-row>\r\n        <ion-row >\r\n          <ion-col size=\"6\" class=\"bloco-card\" *ngFor=\"let animal of animais\" (click)=\"detalhesAnimal(animal.id)\">\r\n            <ion-card>\r\n              <ion-card-header class=\"animal\">\r\n                <ion-img class=\"imagem-animal\" [src]=\"animal.img\" *ngIf=\"animal.imagem !== null\"></ion-img>\r\n                <ion-card-subtitle class=\"nome\">{{animal.nome}}</ion-card-subtitle>\r\n              </ion-card-header>\r\n              <ion-card-content class=\"local\">\r\n                Bairro: {{animal.bairro}}\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_medicamento_pets-favoritos_pet-favorito_module_ts.js.map