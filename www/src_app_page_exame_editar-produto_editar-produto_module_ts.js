(self["webpackChunkpeppaciente"] = self["webpackChunkpeppaciente"] || []).push([["src_app_page_exame_editar-produto_editar-produto_module_ts"],{

/***/ 6604:
/*!****************************************************************************!*\
  !*** ./src/app/page/exame/editar-produto/editar-produto-routing.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditarProdutoPageRoutingModule": () => (/* binding */ EditarProdutoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _editar_produto_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editar-produto.page */ 5631);




const routes = [
    {
        path: '',
        component: _editar_produto_page__WEBPACK_IMPORTED_MODULE_0__.EditarProdutoPage
    }
];
let EditarProdutoPageRoutingModule = class EditarProdutoPageRoutingModule {
};
EditarProdutoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditarProdutoPageRoutingModule);



/***/ }),

/***/ 9944:
/*!********************************************************************!*\
  !*** ./src/app/page/exame/editar-produto/editar-produto.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditarProdutoPageModule": () => (/* binding */ EditarProdutoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _editar_produto_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editar-produto-routing.module */ 6604);
/* harmony import */ var _editar_produto_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editar-produto.page */ 5631);
/* harmony import */ var _exame_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../exame.service */ 2997);








let EditarProdutoPageModule = class EditarProdutoPageModule {
};
EditarProdutoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _editar_produto_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditarProdutoPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_editar_produto_page__WEBPACK_IMPORTED_MODULE_1__.EditarProdutoPage],
        providers: [
            _exame_service__WEBPACK_IMPORTED_MODULE_2__.ExameService
        ]
    })
], EditarProdutoPageModule);



/***/ }),

/***/ 5631:
/*!******************************************************************!*\
  !*** ./src/app/page/exame/editar-produto/editar-produto.page.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditarProdutoPage": () => (/* binding */ EditarProdutoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_editar_produto_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./editar-produto.page.html */ 1726);
/* harmony import */ var _editar_produto_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editar-produto.page.scss */ 8280);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_loading_loading_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/loading/loading.page */ 8532);
/* harmony import */ var src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/class/storage.service */ 6578);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _exame_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../exame.service */ 2997);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @capacitor/camera */ 7673);












let EditarProdutoPage = class EditarProdutoPage {
    constructor(exameService, modalController, toastController, urlService, router, storage, fb) {
        this.exameService = exameService;
        this.modalController = modalController;
        this.toastController = toastController;
        this.urlService = urlService;
        this.router = router;
        this.storage = storage;
        this.fb = fb;
        this.statusFoto = 'Alterar Imagem';
        this.cadastroForm = this.fb.group({
            nome: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            valorReal: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            valorDesconto: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            url: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required])
        });
        this.arquivo = null;
        this.router.events.subscribe((evt) => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_8__.NavigationEnd && this.router.url === '/page/editar-produto') {
                this.pageEnter();
            }
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () { });
    }
    pageEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this.storage.get('user');
            this.id = yield this.storage.get('idAnimal');
            const token = yield this.storage.get('token');
            yield this.urlService.validateToken(token);
            yield this.getProdutoById();
        });
    }
    getProdutoById() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.showLoadingScreen()
                .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
                (yield this.exameService.getProdutoById(this.id))
                    .subscribe((resp) => {
                    this.produto = resp;
                    this.id = this.produto.id;
                    this.idServico = this.produto.idServico;
                    this.cadastroForm.get('url').setValue(this.produto.url);
                    this.cadastroForm.get('valorDesconto').setValue(this.produto.valorDesconto);
                    this.cadastroForm.get('valorReal').setValue(this.produto.valorReal);
                    this.cadastroForm.get('nome').setValue(this.produto.nome);
                    if (this.produto.imagem !== null) {
                        this.img = `data:${this.produto.imagem.tipo};base64,${this.produto.imagem.dados}`;
                        this.idArquivo = this.produto.imagem.id;
                        this.arquivo = {
                            name: this.produto.imagem.nome,
                            type: this.produto.imagem.tipo,
                            binary: this.produto.imagem.dados,
                        };
                    }
                    ;
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
    salvarProduto() {
        const request = {
            id: this.id,
            nome: this.cadastroForm.get('nome').value,
            idServico: this.idServico,
            idDonoProduto: this.user.id,
            idImagem: '',
            url: this.cadastroForm.get('url').value,
            valorDesconto: this.cadastroForm.get('valorDesconto').value,
            valorReal: this.cadastroForm.get('valorReal').value,
            imagem: this.arquivo === undefined ? null : {
                id: this.idArquivo,
                nome: this.arquivo.name,
                tipo: this.arquivo.type,
                dados: this.arquivo.binary,
                guid: ''
            }
        };
        this.showLoadingScreen()
            .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.exameService.updateProduto(request))
                .subscribe(() => {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const loadingScreen = yield this.modalController.create({
                component: src_app_loading_loading_page__WEBPACK_IMPORTED_MODULE_2__.LoadingPage
            });
            return yield loadingScreen.present();
        });
    }
    closeLoadingScreen() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            this.modalController.getTop().then(loader => {
                if (loader) {
                    loader.dismiss();
                }
            });
        });
    }
    mudarFoto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__.Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                direction: _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__.CameraDirection.Rear,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__.CameraSource.Photos,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_6__.CameraResultType.DataUrl
            });
            const photoObj = image.dataUrl;
            this.arquivo = {
                type: this.getTypePhoto(photoObj),
                binary: this.getBinaryPhoto(photoObj)
            };
            if (this.arquivo) {
                this.statusFoto = 'Alterar Imagem';
                this.img = `data:${this.arquivo.typo};base64,${this.arquivo.binary}`;
            }
            ;
        });
    }
    getTypePhoto(photo) {
        return photo.split(';')[0].split(':')[1];
    }
    getBinaryPhoto(photo) {
        return photo.split(';')[1].split(',')[1];
    }
    setNull() {
    }
};
EditarProdutoPage.ctorParameters = () => [
    { type: _exame_service__WEBPACK_IMPORTED_MODULE_5__.ExameService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController },
    { type: src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_4__.UrlService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder }
];
EditarProdutoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
        selector: 'app-editar-produto',
        template: _raw_loader_editar_produto_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_editar_produto_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditarProdutoPage);



/***/ }),

/***/ 8280:
/*!********************************************************************!*\
  !*** ./src/app/page/exame/editar-produto/editar-produto.page.scss ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  margin-top: 13vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.listaTipo {\n  --placeholder-opacity: 0.5;\n}\n\n.item-form {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.item-form-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.botaoCancelar {\n  background-color: #a7a7a7;\n  width: 140px;\n  height: 40px;\n  color: aliceblue;\n}\n\n.botaoConfirmar {\n  background-color: #60E677;\n  width: 140px;\n  height: 40px;\n  color: aliceblue;\n}\n\n.mensagem-erro {\n  font-size: 14px;\n  color: red;\n  margin-right: 12px;\n}\n\n.btn-image {\n  padding: 6px 10px;\n  background-color: #8fc30b;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRhci1wcm9kdXRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6ImVkaXRhci1wcm9kdXRvLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xyXG4gIG1hcmdpbi10b3A6IDEzdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saXN0YVRpcG97XHJcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5pdGVtLWZvcm17XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLml0ZW0tZm9ybS1jZW50ZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYm90YW9DYW5jZWxhcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTdhN2E3O1xyXG4gIHdpZHRoOiAxNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG5cclxuLmJvdGFvQ29uZmlybWFye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MEU2Nzc7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG59XHJcblxyXG4ubWVuc2FnZW0tZXJyb3tcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6IHJlZDtcclxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi5idG4taW1hZ2V7XHJcbiAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhmYzMwYjtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 1726:
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/exame/editar-produto/editar-produto.page.html ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"content\">\r\n    <ion-grid style=\"width: 100%;\">\r\n      <form [formGroup]=\"cadastroForm\">\r\n        <ion-row>\r\n          <ion-col class=\"item-form\" size=\"12\">\r\n            <ion-label style=\"--color: black; margin-right: 6px;\">Imagem: </ion-label>\r\n            <span class=\"mensagem-erro\" *ngIf=\"!this.arquivo\">*</span>\r\n            <ion-img class=\"imagem-animal\"  *ngIf=\"this.arquivo !== null\" [src]=\"img\"></ion-img>\r\n            <button (click)=\"mudarFoto()\" class=\"btn-image\">{{statusFoto}}</button>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"item-form\" size=\"12\">\r\n            <ion-label style=\"--color: black; margin-right: 6px;\">Produto: </ion-label>\r\n            <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.nome.errors\">*</span>\r\n            <ion-input type=\"text\" formControlName=\"nome\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"item-form\" size=\"12\">\r\n            <ion-label style=\"--color: black; margin-right: 6px;\">Valor Real: </ion-label>\r\n            <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.valorReal.errors\">*</span>\r\n            <ion-input type=\"number\" formControlName=\"valorReal\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"item-form\" size=\"12\">\r\n            <ion-label style=\"--color: black; margin-right: 6px;\">Valor com desconto: </ion-label>\r\n            <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.valorDesconto.errors\">*</span>\r\n            <ion-input type=\"number\" formControlName=\"valorDesconto\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"item-form\" size=\"12\">\r\n            <ion-label style=\"--color: black; margin-right: 6px;\">Url: </ion-label>\r\n            <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.url.errors\">*</span>\r\n            <ion-input type=\"text\" formControlName=\"url\"></ion-input>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"item-form-center\" size=\"6\">\r\n            <button (click)=\"cancelar()\" class=\"botaoCancelar\" expand=\"block\">Cancelar</button>\r\n          </ion-col>\r\n          <ion-col class=\"item-form-center\" size=\"6\">\r\n            <button (click)=\"salvarProduto()\" class=\"botaoConfirmar\" [disabled]=\"!cadastroForm.valid\" expand=\"block\">Salvar</button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </form>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_exame_editar-produto_editar-produto_module_ts.js.map