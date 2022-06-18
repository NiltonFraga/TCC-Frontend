(self["webpackChunkpeppaciente"] = self["webpackChunkpeppaciente"] || []).push([["src_app_page_medicamento_perfil_perfil_module_ts"],{

/***/ 4589:
/*!******************************************************************!*\
  !*** ./src/app/page/medicamento/perfil/perfil-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPageRoutingModule": () => (/* binding */ PerfilPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil.page */ 8649);




const routes = [
    {
        path: '',
        component: _perfil_page__WEBPACK_IMPORTED_MODULE_0__.PerfilPage
    }
];
let PerfilPageRoutingModule = class PerfilPageRoutingModule {
};
PerfilPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PerfilPageRoutingModule);



/***/ }),

/***/ 4880:
/*!**********************************************************!*\
  !*** ./src/app/page/medicamento/perfil/perfil.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPageModule": () => (/* binding */ PerfilPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./perfil-routing.module */ 4589);
/* harmony import */ var _perfil_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.page */ 8649);
/* harmony import */ var _medicamento_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../medicamento.service */ 5418);








let PerfilPageModule = class PerfilPageModule {
};
PerfilPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _perfil_routing_module__WEBPACK_IMPORTED_MODULE_0__.PerfilPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_perfil_page__WEBPACK_IMPORTED_MODULE_1__.PerfilPage],
        providers: [_medicamento_service__WEBPACK_IMPORTED_MODULE_2__.MedicamentoService]
    })
], PerfilPageModule);



/***/ }),

/***/ 8649:
/*!********************************************************!*\
  !*** ./src/app/page/medicamento/perfil/perfil.page.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PerfilPage": () => (/* binding */ PerfilPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_perfil_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./perfil.page.html */ 7749);
/* harmony import */ var _perfil_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./perfil.page.scss */ 4165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_loading_loading_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/loading/loading.page */ 8532);
/* harmony import */ var src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/class/storage.service */ 6578);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _medicamento_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../medicamento.service */ 5418);










let PerfilPage = class PerfilPage {
    constructor(router, storage, urlService, modalController, toastController, medicamentoService) {
        this.router = router;
        this.storage = storage;
        this.urlService = urlService;
        this.modalController = modalController;
        this.toastController = toastController;
        this.medicamentoService = medicamentoService;
        this.loading = false;
        this.router.events.subscribe((evt) => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd && this.router.url === `/page/perfil`) {
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
            this.getUsuario();
        });
    }
    getUsuario() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.showLoadingScreen()
                .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                (yield this.medicamentoService.getUsuario(this.user.id))
                    .subscribe((resp) => {
                    this.usuario = resp;
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
    editarUsuario() {
        this.router.navigateByUrl('page/editar-perfil');
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
PerfilPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_4__.UrlService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _medicamento_service__WEBPACK_IMPORTED_MODULE_5__.MedicamentoService }
];
PerfilPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-perfil',
        template: _raw_loader_perfil_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_perfil_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PerfilPage);



/***/ }),

/***/ 4165:
/*!**********************************************************!*\
  !*** ./src/app/page/medicamento/perfil/perfil.page.scss ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  margin-top: 7vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n}\n\n.grid-content {\n  padding-top: 2vh;\n  width: 100%;\n  position: fixed;\n  background-color: #ffffff;\n  z-index: 99;\n}\n\n.bloco-card-content {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.bloco-tipo {\n  color: black;\n  margin-bottom: 18px;\n}\n\n.nome {\n  font-weight: bold;\n}\n\n.botaoConfirmar {\n  background-color: #60E677;\n  width: 100%;\n  height: 40px;\n  color: aliceblue;\n}\n\n.botaoDeletar {\n  background-color: #f04800;\n  width: 100%;\n  height: 40px;\n  color: aliceblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBlcmZpbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6InBlcmZpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcclxuICBtYXJnaW4tdG9wOiA3dmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uZ3JpZC1jb250ZW50e1xyXG4gIHBhZGRpbmctdG9wOiAydmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgei1pbmRleDogOTk7XHJcbn1cclxuXHJcbi5ibG9jby1jYXJkLWNvbnRlbnR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYmxvY28tdGlwb3tcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMThweDtcclxufVxyXG5cclxuLm5vbWV7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5ib3Rhb0NvbmZpcm1hcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBFNjc3O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG59XHJcblxyXG4uYm90YW9EZWxldGFye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDQ4MDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 7749:
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/medicamento/perfil/perfil.page.html ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"content\">\r\n    <ion-grid style=\"width: 100%;\" *ngIf=\"usuario\">\r\n      <ion-row>\r\n        <ion-card style=\"width: 100%; height: 100%;\">\r\n          <ion-card-content class=\"bloco-card-content\">\r\n            <ion-col class=\"bloco-tipo\" size=\"12\">\r\n              <span class=\"nome\">Nome: </span>\r\n              <span>{{usuario.nome}}</span>\r\n            </ion-col>\r\n            <ion-col class=\"bloco-tipo\" size=\"12\">\r\n              <span class=\"nome\" *ngIf=\"usuario.role === 'pessoa_fisica'\">CPF: </span>\r\n              <span class=\"nome\" *ngIf=\"usuario.role !== 'pessoa_fisica'\">CNPJ: </span>\r\n              <span>{{usuario.documento}}</span>\r\n            </ion-col>\r\n            <ion-col class=\"bloco-tipo\" size=\"12\">\r\n              <span class=\"nome\">Email: </span>\r\n              <span>{{usuario.email}}</span>\r\n            </ion-col>\r\n            <ion-col class=\"bloco-tipo\" size=\"12\">\r\n              <span class=\"nome\">Telefone: </span>\r\n              <span>{{usuario.telefone1}}</span>\r\n            </ion-col>\r\n            <ion-col class=\"bloco-tipo\" size=\"12\">\r\n              <span class=\"nome\">Telefone: </span>\r\n              <span>{{usuario.telefone2}}</span>\r\n            </ion-col>\r\n            <ion-col class=\"bloco-tipo\" size=\"12\">\r\n              <span class=\"nome\">Quantidades de Animais Doados: </span>\r\n              <span>{{usuario.quantAnimaisDoados}}</span>\r\n            </ion-col>\r\n            <ion-col class=\"bloco-tipo\" size=\"12\" *ngIf=\"usuario.role !== 'pessoa_fisica'\">\r\n              <span class=\"nome\">Quantidades de Servisos Cadastrados: </span>\r\n              <span>{{usuario.quantSevicosCadastrados}}</span>\r\n            </ion-col>\r\n            <ion-col class=\"bloco-tipo\" size=\"12\" *ngIf=\"usuario.role !== 'pessoa_fisica'\">\r\n              <span class=\"nome\">Quantidades de Produtos Cadastrados: </span>\r\n              <span>{{usuario.quantProdutosCadastrados}}</span>\r\n            </ion-col>\r\n            <ion-col class=\"item-form-center\" size=\"12\">\r\n              <button (click)=\"editarUsuario()\" class=\"botaoConfirmar\" expand=\"block\">Editar Informações Cadastrais</button>\r\n            </ion-col>\r\n            <!-- <ion-col class=\"item-form-center\" size=\"12\">\r\n              <button (click)=\"deletarUsuario()\" class=\"botaoDeletar\" expand=\"block\">Deletar Conta</button>\r\n            </ion-col> -->\r\n          </ion-card-content>\r\n        </ion-card>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_medicamento_perfil_perfil_module_ts.js.map