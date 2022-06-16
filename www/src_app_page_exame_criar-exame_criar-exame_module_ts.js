(self["webpackChunkpeppaciente"] = self["webpackChunkpeppaciente"] || []).push([["src_app_page_exame_criar-exame_criar-exame_module_ts"],{

/***/ 1134:
/*!**********************************************************************!*\
  !*** ./src/app/page/exame/criar-exame/criar-exame-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CriarExamePageRoutingModule": () => (/* binding */ CriarExamePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _criar_exame_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./criar-exame.page */ 5932);




const routes = [
    {
        path: '',
        component: _criar_exame_page__WEBPACK_IMPORTED_MODULE_0__.CriarExamePage
    }
];
let CriarExamePageRoutingModule = class CriarExamePageRoutingModule {
};
CriarExamePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CriarExamePageRoutingModule);



/***/ }),

/***/ 9000:
/*!**************************************************************!*\
  !*** ./src/app/page/exame/criar-exame/criar-exame.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CriarExamePageModule": () => (/* binding */ CriarExamePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _criar_exame_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./criar-exame-routing.module */ 1134);
/* harmony import */ var _criar_exame_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./criar-exame.page */ 5932);
/* harmony import */ var _exame_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../exame.service */ 2997);








let CriarExamePageModule = class CriarExamePageModule {
};
CriarExamePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _criar_exame_routing_module__WEBPACK_IMPORTED_MODULE_0__.CriarExamePageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_criar_exame_page__WEBPACK_IMPORTED_MODULE_1__.CriarExamePage],
        providers: [
            _exame_service__WEBPACK_IMPORTED_MODULE_2__.ExameService
        ]
    })
], CriarExamePageModule);



/***/ }),

/***/ 5932:
/*!************************************************************!*\
  !*** ./src/app/page/exame/criar-exame/criar-exame.page.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CriarExamePage": () => (/* binding */ CriarExamePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_criar_exame_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./criar-exame.page.html */ 963);
/* harmony import */ var _criar_exame_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./criar-exame.page.scss */ 272);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_loading_loading_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/loading/loading.page */ 8532);
/* harmony import */ var src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/class/storage.service */ 6578);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _exame_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../exame.service */ 2997);











let CriarExamePage = class CriarExamePage {
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
            telefone1: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            telefone2: this.fb.control(''),
            rua: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            bairro: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            cidade: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            tipoDesconto: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            sobreLoja: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            sobreDesconto: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            file: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])
        });
        this.router.events.subscribe((evt) => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd && this.router.url === '/page/criar-servicos') {
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
            const token = yield this.storage.get('token');
            yield this.urlService.validateToken(token);
        });
    }
    getServicosByUsuario() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.showLoadingScreen()
                .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
                (yield this.exameService.getServicosByUsuario(this.user.id))
                    .subscribe((resp) => {
                    this.servicos = resp;
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
    salvarServico() {
        const request = {
            nome: this.cadastroForm.get('nome').value,
            telefone1: this.cadastroForm.get('telefone1').value.toString(),
            telefone2: this.cadastroForm.get('telefone2').value.toString(),
            rua: this.cadastroForm.get('rua').value,
            bairro: this.cadastroForm.get('bairro').value,
            cidade: this.cadastroForm.get('cidade').value,
            tipo: this.cadastroForm.get('tipoDesconto').value,
            descricao: this.cadastroForm.get('sobreLoja').value,
            desconto: this.cadastroForm.get('sobreDesconto').value,
            donoServico: this.user.id,
            idImagem: '',
            imagem: this.arquivo === undefined ? null : {
                nome: this.arquivo.name,
                tipo: this.arquivo.type,
                dados: this.arquivo.binary
            }
        };
        this.showLoadingScreen()
            .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.exameService.postServico(request))
                .subscribe(() => {
                this.router.navigateByUrl('/page/servicos');
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
        this.router.navigateByUrl('/page/servicos');
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
};
CriarExamePage.ctorParameters = () => [
    { type: _exame_service__WEBPACK_IMPORTED_MODULE_5__.ExameService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_4__.UrlService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder }
];
CriarExamePage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-criar-exame',
        template: _raw_loader_criar_exame_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_criar_exame_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CriarExamePage);



/***/ }),

/***/ 272:
/*!**************************************************************!*\
  !*** ./src/app/page/exame/criar-exame/criar-exame.page.scss ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  margin-top: 8vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.listaTipo {\n  --placeholder-opacity: 0.5;\n}\n\n.item-form {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.item-form-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.mensagem-erro {\n  font-size: 14px;\n  color: red;\n  margin-right: 12px;\n}\n\n.ajuste-display {\n  display: flex;\n  flex-direction: column;\n}\n\n.botaoCancelar {\n  background-color: #a7a7a7;\n  width: 140px;\n  height: 40px;\n  color: aliceblue;\n}\n\n.botaoConfirmar {\n  background-color: #60E677;\n  width: 140px;\n  height: 40px;\n  color: aliceblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyaWFyLWV4YW1lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNGIiwiZmlsZSI6ImNyaWFyLWV4YW1lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xyXG4gIG1hcmdpbi10b3A6IDh2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmxpc3RhVGlwb3tcclxuICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLml0ZW0tZm9ybXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaXRlbS1mb3JtLWNlbnRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tZW5zYWdlbS1lcnJve1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogcmVkO1xyXG4gIG1hcmdpbi1yaWdodDogMTJweDtcclxufVxyXG5cclxuLmFqdXN0ZS1kaXNwbGF5e1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmJvdGFvQ2FuY2VsYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2E3YTdhNztcclxuICB3aWR0aDogMTQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuXHJcbi5ib3Rhb0NvbmZpcm1hcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjBFNjc3O1xyXG4gIHdpZHRoOiAxNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 963:
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/exame/criar-exame/criar-exame.page.html ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"content\">\r\n    <ion-grid style=\"width: 100%;\">\r\n      <form [formGroup]=\"cadastroForm\">\r\n        <ion-row>\r\n          <ion-col class=\"item-form\" size=\"12\">\r\n            <ion-label style=\"--color: black; margin-right: 6px;\">Razão social: </ion-label>\r\n            <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.nome.errors\">*</span>\r\n            <ion-input type=\"text\" formControlName=\"nome\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"item-form\" size=\"12\">\r\n            <ion-label style=\"--color: black; margin-right: 6px;\">Imagem: </ion-label>\r\n            <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.file.errors\">*</span>\r\n            <ion-input type=\"file\" formControlName=\"file\" (change)=\"fileChange($event)\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"item-form\" size=\"12\">\r\n            <ion-label style=\"--color: black; margin-right: 6px;\">Telefone: </ion-label>\r\n            <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.telefone1.errors\">*</span>\r\n            <ion-input type=\"number\" formControlName=\"telefone1\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"item-form\" size=\"12\">\r\n            <ion-label style=\"--color: black; margin-right: 6px;\">Telefone: </ion-label>\r\n            <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.telefone2.errors\">*</span>\r\n            <ion-input type=\"number\" formControlName=\"telefone2\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"item-form\" size=\"12\">\r\n            <ion-label style=\"--color: black; margin-right: 6px;\">Rua: </ion-label>\r\n            <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.rua.errors\">*</span>\r\n            <ion-input type=\"text\" formControlName=\"rua\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"item-form\" size=\"12\">\r\n            <ion-label style=\"--color: black; margin-right: 6px;\">Bairro: </ion-label>\r\n            <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.bairro.errors\">*</span>\r\n            <ion-input type=\"text\" formControlName=\"bairro\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"item-form\" size=\"12\">\r\n            <ion-label style=\"--color: black; margin-right: 6px;\">Cidade: </ion-label>\r\n            <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.cidade.errors\">*</span>\r\n            <ion-input type=\"text\" formControlName=\"cidade\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"item-form\" size=\"12\">\r\n            <ion-label style=\"--color: black; margin-right: 6px;\">Tipo de desconto: </ion-label>\r\n            <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.tipoDesconto.errors\">*</span>\r\n            <ion-select class=\"listaTipo\" formControlName=\"tipoDesconto\" placeholder=\"Selecione...\">\r\n              <ion-select-option value=\"Produto\">Produto</ion-select-option>\r\n              <ion-select-option value=\"Servico\">Serviço</ion-select-option>\r\n            </ion-select>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"item-form\" size=\"12\" class=\"ajuste-display\">\r\n            <div>\r\n              <ion-label style=\"--color: black; margin-right: 6px;\">Sobre a loja/serviço: </ion-label>\r\n              <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.sobreLoja.errors\">*</span>\r\n            </div>\r\n            <ion-textarea formControlName=\"sobreLoja\" rows=\"5\" placeholder=\"Escreva sobre a loja/serviço\"></ion-textarea>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"item-form\" size=\"12\" class=\"ajuste-display\">\r\n            <div>\r\n              <ion-label style=\"--color: black; margin-right: 6px;\">Sobre o desconto: </ion-label>\r\n              <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.sobreDesconto.errors\">*</span>\r\n            </div>\r\n            <ion-textarea formControlName=\"sobreDesconto\" rows=\"5\" placeholder=\"Escreva sobre o desconto\"></ion-textarea>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"item-form-center\" size=\"6\">\r\n            <button (click)=\"cancelar()\" class=\"botaoCancelar\" expand=\"block\">Cancelar</button>\r\n          </ion-col>\r\n          <ion-col class=\"item-form-center\" size=\"6\">\r\n            <button (click)=\"salvarServico()\" class=\"botaoConfirmar\" [disabled]=\"!cadastroForm.valid\" expand=\"block\">Salvar</button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </form>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_exame_criar-exame_criar-exame_module_ts.js.map