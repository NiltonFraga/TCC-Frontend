(self["webpackChunkpeppaciente"] = self["webpackChunkpeppaciente"] || []).push([["src_app_page_exame_criar-produto_criar-produto_module_ts"],{

/***/ 5181:
/*!**************************************************************************!*\
  !*** ./src/app/page/exame/criar-produto/criar-produto-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CriarProdutoPageRoutingModule": () => (/* binding */ CriarProdutoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _criar_produto_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./criar-produto.page */ 9476);




const routes = [
    {
        path: '',
        component: _criar_produto_page__WEBPACK_IMPORTED_MODULE_0__.CriarProdutoPage
    }
];
let CriarProdutoPageRoutingModule = class CriarProdutoPageRoutingModule {
};
CriarProdutoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CriarProdutoPageRoutingModule);



/***/ }),

/***/ 4436:
/*!******************************************************************!*\
  !*** ./src/app/page/exame/criar-produto/criar-produto.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CriarProdutoPageModule": () => (/* binding */ CriarProdutoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _criar_produto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./criar-produto-routing.module */ 5181);
/* harmony import */ var _criar_produto_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./criar-produto.page */ 9476);
/* harmony import */ var _exame_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../exame.service */ 2997);








let CriarProdutoPageModule = class CriarProdutoPageModule {
};
CriarProdutoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _criar_produto_routing_module__WEBPACK_IMPORTED_MODULE_0__.CriarProdutoPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_criar_produto_page__WEBPACK_IMPORTED_MODULE_1__.CriarProdutoPage],
        providers: [
            _exame_service__WEBPACK_IMPORTED_MODULE_2__.ExameService
        ]
    })
], CriarProdutoPageModule);



/***/ }),

/***/ 9476:
/*!****************************************************************!*\
  !*** ./src/app/page/exame/criar-produto/criar-produto.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CriarProdutoPage": () => (/* binding */ CriarProdutoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_criar_produto_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./criar-produto.page.html */ 3262);
/* harmony import */ var _criar_produto_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./criar-produto.page.scss */ 6745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_loading_loading_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/loading/loading.page */ 8532);
/* harmony import */ var src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/class/storage.service */ 6578);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _exame_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../exame.service */ 2997);











let CriarProdutoPage = class CriarProdutoPage {
    constructor(exameService, modalController, toastController, urlService, router, storage, fb) {
        this.exameService = exameService;
        this.modalController = modalController;
        this.toastController = toastController;
        this.urlService = urlService;
        this.router = router;
        this.storage = storage;
        this.fb = fb;
        this.cadastroForm = this.fb.group({
            nome: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            valorReal: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            valorDesconto: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            url: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            file: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])
        });
        this.router.events.subscribe((evt) => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd && this.router.url === '/page/criar-produto') {
                this.setNull();
                this.pageEnter();
            }
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () { });
    }
    pageEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this.storage.get('user');
            this.idServico = yield this.storage.get('idAnimal');
            const token = yield this.storage.get('token');
            yield this.urlService.validateToken(token);
        });
    }
    salvarProduto() {
        const request = {
            id: 0,
            nome: this.cadastroForm.get('nome').value,
            idServico: this.idServico,
            idDonoProduto: this.user.id,
            idImagem: '',
            url: this.cadastroForm.get('url').value,
            valorDesconto: this.cadastroForm.get('valorDesconto').value,
            valorReal: this.cadastroForm.get('valorReal').value,
            imagem: this.arquivo === undefined ? null : {
                id: 0,
                nome: this.arquivo.name,
                tipo: this.arquivo.type,
                dados: this.arquivo.binary,
                guid: ''
            }
        };
        this.showLoadingScreen()
            .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.exameService.postProduto(request))
                .subscribe(() => {
                this.setNull();
                this.storage.set('idAnimal', this.idServico);
                this.router.navigateByUrl('/page/meus-produtos');
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
    cancelar() {
        this.storage.set('idAnimal', this.idServico);
        this.router.navigateByUrl('/page/meus-produtos');
    }
    fileChange(e) {
        const arquivoPre = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(arquivoPre);
        reader.onload = () => {
            this.arquivo = {
                name: arquivoPre.name,
                type: arquivoPre.type,
                binary: reader.result.toString().split(';')[1].split(',')[1]
            };
        };
    }
    showLoadingScreen() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const loadingScreen = yield this.modalController.create({
                component: src_app_loading_loading_page__WEBPACK_IMPORTED_MODULE_2__.LoadingPage
            });
            return yield loadingScreen.present();
        });
    }
    closeLoadingScreen() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.modalController.getTop().then(loader => {
                if (loader) {
                    loader.dismiss();
                }
            });
        });
    }
    setNull() {
        this.cadastroForm = this.fb.group({
            nome: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            valorReal: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            valorDesconto: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            url: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            file: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])
        });
    }
};
CriarProdutoPage.ctorParameters = () => [
    { type: _exame_service__WEBPACK_IMPORTED_MODULE_5__.ExameService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_4__.UrlService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder }
];
CriarProdutoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-criar-produto',
        template: _raw_loader_criar_produto_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_criar_produto_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CriarProdutoPage);



/***/ }),

/***/ 6745:
/*!******************************************************************!*\
  !*** ./src/app/page/exame/criar-produto/criar-produto.page.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  margin-top: 8vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.listaTipo {\n  --placeholder-opacity: 0.5;\n}\n\n.item-form {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.item-form-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.botaoCancelar {\n  background-color: #a7a7a7;\n  width: 140px;\n  height: 40px;\n  color: aliceblue;\n}\n\n.botaoConfirmar {\n  background-color: #60E677;\n  width: 140px;\n  height: 40px;\n  color: aliceblue;\n}\n\n.mensagem-erro {\n  font-size: 14px;\n  color: red;\n  margin-right: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyaWFyLXByb2R1dG8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6ImNyaWFyLXByb2R1dG8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XHJcbiAgbWFyZ2luLXRvcDogOHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubGlzdGFUaXBve1xyXG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uaXRlbS1mb3Jte1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pdGVtLWZvcm0tY2VudGVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmJvdGFvQ2FuY2VsYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E3YTdhNztcclxuICB3aWR0aDogMTQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuXHJcbi5ib3Rhb0NvbmZpcm1hcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBFNjc3O1xyXG4gIHdpZHRoOiAxNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG5cclxuLm1lbnNhZ2VtLWVycm97XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 3262:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/exame/criar-produto/criar-produto.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"content\">\r\n    <ion-grid style=\"width: 100%;\">\r\n      <form [formGroup]=\"cadastroForm\">\r\n        <ion-row>\r\n          <ion-col class=\"item-form\" size=\"12\">\r\n            <ion-label style=\"--color: black; margin-right: 6px;\">Imagem: </ion-label>\r\n            <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.file.errors\">*</span>\r\n            <ion-input type=\"file\" formControlName=\"file\" (change)=\"fileChange($event)\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"item-form\" size=\"12\">\r\n            <ion-label style=\"--color: black; margin-right: 6px;\">Produto: </ion-label>\r\n            <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.nome.errors\">*</span>\r\n            <ion-input type=\"text\" formControlName=\"nome\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"item-form\" size=\"12\">\r\n            <ion-label style=\"--color: black; margin-right: 6px;\">Valor Real: </ion-label>\r\n            <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.valorReal.errors\">*</span>\r\n            <ion-input type=\"number\" formControlName=\"valorReal\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"item-form\" size=\"12\">\r\n            <ion-label style=\"--color: black; margin-right: 6px;\">Valor com desconto: </ion-label>\r\n            <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.valorDesconto.errors\">*</span>\r\n            <ion-input type=\"number\" formControlName=\"valorDesconto\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"item-form\" size=\"12\">\r\n            <ion-label style=\"--color: black; margin-right: 6px;\">Url: </ion-label>\r\n            <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.url.errors\">*</span>\r\n            <ion-input type=\"text\" formControlName=\"url\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"item-form-center\" size=\"6\">\r\n            <button (click)=\"cancelar()\" class=\"botaoCancelar\" expand=\"block\">Cancelar</button>\r\n          </ion-col>\r\n          <ion-col class=\"item-form-center\" size=\"6\">\r\n            <button (click)=\"salvarProduto()\" class=\"botaoConfirmar\" [disabled]=\"!cadastroForm.valid\" expand=\"block\">Salvar</button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </form>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_exame_criar-produto_criar-produto_module_ts.js.map