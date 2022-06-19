(self["webpackChunkpeppaciente"] = self["webpackChunkpeppaciente"] || []).push([["src_app_page_medicamento_criar-medicamento_criar-medicamento_module_ts"],{

/***/ 8279:
/*!****************************************************************************************!*\
  !*** ./src/app/page/medicamento/criar-medicamento/criar-medicamento-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CriarMedicamentoPageRoutingModule": () => (/* binding */ CriarMedicamentoPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _criar_medicamento_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./criar-medicamento.page */ 4834);




const routes = [
    {
        path: '',
        component: _criar_medicamento_page__WEBPACK_IMPORTED_MODULE_0__.CriarMedicamentoPage
    }
];
let CriarMedicamentoPageRoutingModule = class CriarMedicamentoPageRoutingModule {
};
CriarMedicamentoPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CriarMedicamentoPageRoutingModule);



/***/ }),

/***/ 4078:
/*!********************************************************************************!*\
  !*** ./src/app/page/medicamento/criar-medicamento/criar-medicamento.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CriarMedicamentoPageModule": () => (/* binding */ CriarMedicamentoPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _criar_medicamento_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./criar-medicamento-routing.module */ 8279);
/* harmony import */ var _criar_medicamento_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./criar-medicamento.page */ 4834);
/* harmony import */ var _medicamento_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../medicamento.service */ 5418);








let CriarMedicamentoPageModule = class CriarMedicamentoPageModule {
};
CriarMedicamentoPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _criar_medicamento_routing_module__WEBPACK_IMPORTED_MODULE_0__.CriarMedicamentoPageRoutingModule
        ],
        declarations: [_criar_medicamento_page__WEBPACK_IMPORTED_MODULE_1__.CriarMedicamentoPage],
        providers: [
            _medicamento_service__WEBPACK_IMPORTED_MODULE_2__.MedicamentoService
        ]
    })
], CriarMedicamentoPageModule);



/***/ }),

/***/ 4834:
/*!******************************************************************************!*\
  !*** ./src/app/page/medicamento/criar-medicamento/criar-medicamento.page.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CriarMedicamentoPage": () => (/* binding */ CriarMedicamentoPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_criar_medicamento_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./criar-medicamento.page.html */ 2961);
/* harmony import */ var _criar_medicamento_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./criar-medicamento.page.scss */ 8304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/class/storage.service */ 6578);
/* harmony import */ var _medicamento_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../medicamento.service */ 5418);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_loading_loading_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/loading/loading.page */ 8532);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/document-viewer/ngx */ 1663);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @capacitor/camera */ 7673);













let CriarMedicamentoPage = class CriarMedicamentoPage {
    constructor(medicamentoService, modalController, toastController, document, urlService, router, fb, storage) {
        this.medicamentoService = medicamentoService;
        this.modalController = modalController;
        this.toastController = toastController;
        this.document = document;
        this.urlService = urlService;
        this.router = router;
        this.fb = fb;
        this.storage = storage;
        this.cadastroForm = this.fb.group({
            nome: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            idade: this.fb.control(''),
            peso: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            tipo: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            pelagem: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            sexo: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            vermifugado: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            vacina: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            doenca: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            descricao: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            castrado: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            rua: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            bairro: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            cidade: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            ativo: this.fb.control('true', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])
        });
        this.arquivo = null;
        this.statusFoto = 'Insira a Imagem';
        this.router.events.subscribe((evt) => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_9__.NavigationEnd && this.router.url === '/page/criar-pet') {
                this.pageEnter();
            }
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
        });
    }
    pageEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this.storage.get('user');
            const token = yield this.storage.get('token');
            yield this.urlService.validateToken(token);
        });
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
    cancelar() {
        this.setNull();
        this.router.navigateByUrl('/page/minha-area');
    }
    salvarAnimal() {
        if (!this.arquivo) {
            this.toastController.create({
                message: 'A Imagem é obrigatôria',
                duration: 3000
            }).then(toast => {
                toast.present();
            });
            return;
        }
        const request = {
            nome: this.cadastroForm.get('nome').value,
            tipo: this.cadastroForm.get('tipo').value,
            idade: this.cadastroForm.get('idade').value,
            sexo: this.cadastroForm.get('sexo').value,
            peso: this.cadastroForm.get('peso').value,
            pelagem: this.cadastroForm.get('pelagem').value,
            castrado: this.cadastroForm.get('castrado').value,
            vermifugado: this.cadastroForm.get('vermifugado').value,
            doenca: this.cadastroForm.get('doenca').value,
            vacina: this.cadastroForm.get('vacina').value,
            descricao: this.cadastroForm.get('descricao').value,
            doador: this.user.id,
            rua: this.cadastroForm.get('rua').value,
            bairro: this.cadastroForm.get('bairro').value,
            cidade: this.cadastroForm.get('cidade').value,
            ativo: this.cadastroForm.get('ativo').value,
            idImagem: '',
            imagem: this.arquivo === undefined ? null : {
                nome: this.cadastroForm.get('nome').value,
                tipo: this.arquivo.type,
                dados: this.arquivo.binary
            }
        };
        this.showLoadingScreen()
            .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.medicamentoService.postAnimal(request))
                .subscribe(() => {
                this.setNull();
                this.router.navigateByUrl('/page/minha-area');
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
                        this.closeLoadingScreen();
                    });
                }
            }, () => {
                this.closeLoadingScreen();
            });
        }));
    }
    showLoadingScreen() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const loadingScreen = yield this.modalController.create({
                component: src_app_loading_loading_page__WEBPACK_IMPORTED_MODULE_4__.LoadingPage
            });
            return yield loadingScreen.present();
        });
    }
    closeLoadingScreen() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            this.modalController.getTop().then(loader => {
                if (loader) {
                    loader.dismiss();
                }
            });
        });
    }
    setNull() {
        this.cadastroForm = this.fb.group({
            nome: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            idade: this.fb.control(''),
            peso: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            tipo: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            pelagem: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            sexo: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            vermifugado: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            vacina: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            doenca: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            descricao: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            castrado: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            rua: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            bairro: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            cidade: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]),
            ativo: this.fb.control('true', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required])
        });
        this.arquivo = null;
        this.statusFoto = 'Insira a Imagem';
    }
    mudarFoto() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            const image = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__.Camera.getPhoto({
                quality: 90,
                allowEditing: false,
                direction: _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__.CameraDirection.Rear,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__.CameraSource.Photos,
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_7__.CameraResultType.DataUrl
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
};
CriarMedicamentoPage.ctorParameters = () => [
    { type: _medicamento_service__WEBPACK_IMPORTED_MODULE_3__.MedicamentoService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController },
    { type: _ionic_native_document_viewer_ngx__WEBPACK_IMPORTED_MODULE_6__.DocumentViewer },
    { type: src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_5__.UrlService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService }
];
CriarMedicamentoPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-criar-medicamento',
        template: _raw_loader_criar_medicamento_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_criar_medicamento_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CriarMedicamentoPage);



/***/ }),

/***/ 8304:
/*!********************************************************************************!*\
  !*** ./src/app/page/medicamento/criar-medicamento/criar-medicamento.page.scss ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  margin-top: 8vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.listaTipo {\n  --placeholder-opacity: 0.5;\n}\n\n.item-form {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.item-form-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.mensagem-erro {\n  font-size: 14px;\n  color: red;\n  margin-right: 12px;\n}\n\n.ajuste-display {\n  display: flex;\n  flex-direction: column;\n}\n\n.botaoCancelar {\n  background-color: #a7a7a7;\n  width: 140px;\n  height: 40px;\n  color: aliceblue;\n}\n\n.botaoConfirmar {\n  background-color: #60E677;\n  width: 140px;\n  height: 40px;\n  color: aliceblue;\n}\n\n.btn-image {\n  padding: 6px 10px;\n  background-color: #8fc30b;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyaWFyLW1lZGljYW1lbnRvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFDRiIsImZpbGUiOiJjcmlhci1tZWRpY2FtZW50by5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcclxuICBtYXJnaW4tdG9wOiA4dmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saXN0YVRpcG97XHJcbiAgLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAwLjU7XHJcbn1cclxuXHJcbi5pdGVtLWZvcm17XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLml0ZW0tZm9ybS1jZW50ZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubWVuc2FnZW0tZXJyb3tcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6IHJlZDtcclxuICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbn1cclxuXHJcbi5hanVzdGUtZGlzcGxheXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5ib3Rhb0NhbmNlbGFye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhN2E3YTc7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG59XHJcblxyXG4uYm90YW9Db25maXJtYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwRTY3NztcclxuICB3aWR0aDogMTQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuXHJcbi5idG4taW1hZ2V7XHJcbiAgcGFkZGluZzogNnB4IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhmYzMwYjtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 2961:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/medicamento/criar-medicamento/criar-medicamento.page.html ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"content\">\r\n    <div class=\"grid-animais\">\r\n      <ion-grid style=\"width: 100vw;\">\r\n        <form [formGroup]=\"cadastroForm\">\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\">\r\n              <ion-label style=\"--color: black; margin-right: 8px\">Imagem: </ion-label>\r\n              <span class=\"mensagem-erro\" *ngIf=\"!this.arquivo\">*</span>\r\n              <ion-img class=\"imagem-animal\"  *ngIf=\"this.arquivo !== null\" [src]=\"img\"></ion-img>\r\n              <button (click)=\"mudarFoto()\" class=\"btn-image\">{{statusFoto}}</button>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\">\r\n              <ion-label style=\"--color: black; margin-right: 8px\">Nome: </ion-label>\r\n              <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.nome.errors\">*</span>\r\n              <ion-input type=\"text\" formControlName=\"nome\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\">\r\n              <ion-label style=\"--color: black; margin-right: 8px\">Espécie: </ion-label>\r\n              <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.tipo.errors\">*</span>\r\n              <ion-select formControlName=\"tipo\" class=\"listaTipo\" placeholder=\"Selecione...\">\r\n                <ion-select-option value=\"Gato\">Gato</ion-select-option>\r\n                <ion-select-option value=\"Cachorro\">Cachorro</ion-select-option>\r\n              </ion-select>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\">\r\n              <ion-label style=\"--color: black; margin-right: 8px\">Idade: </ion-label>\r\n              <ion-input type=\"text\" formControlName=\"idade\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\">\r\n              <ion-label style=\"--color: black; margin-right: 8px\">Peso: </ion-label>\r\n              <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.peso.errors\">*</span>\r\n              <ion-input type=\"number\" formControlName=\"peso\"></ion-input>\r\n              <span>Kg</span>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\">\r\n              <ion-label style=\"--color: black; margin-right: 8px\">Pelagem: </ion-label>\r\n              <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.pelagem.errors\">*</span>\r\n              <ion-input type=\"text\" formControlName=\"pelagem\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\">\r\n              <ion-label style=\"--color: black; margin-right: 8px\">Sexo: </ion-label>\r\n              <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.sexo.errors\">*</span>\r\n              <ion-select formControlName=\"sexo\" class=\"listaTipo\" placeholder=\"Selecione...\">\r\n                <ion-select-option value=\"M\">Macho</ion-select-option>\r\n                <ion-select-option value=\"F\">Fêmea</ion-select-option>\r\n              </ion-select>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\">\r\n              <ion-label style=\"--color: black; margin-right: 8px\">Vermifugado: </ion-label>\r\n              <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.vermifugado.errors\">*</span>\r\n              <ion-select formControlName=\"vermifugado\" class=\"listaTipo\" placeholder=\"Selecione...\">\r\n                <ion-select-option value='true'>Sim</ion-select-option>\r\n                <ion-select-option value='false'>Não</ion-select-option>\r\n              </ion-select>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\">\r\n              <ion-label style=\"--color: black; margin-right: 8px\">Castrado: </ion-label>\r\n              <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.castrado.errors\">*</span>\r\n              <ion-select formControlName=\"castrado\" class=\"listaTipo\" placeholder=\"Selecione...\">\r\n                <ion-select-option value='true'>Sim</ion-select-option>\r\n                <ion-select-option value='false'>Não</ion-select-option>\r\n              </ion-select>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\">\r\n              <ion-label style=\"--color: black; margin-right: 8px\">Vacinas: </ion-label>\r\n              <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.vacina.errors\">*</span>\r\n              <ion-input type=\"text\" formControlName=\"vacina\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\">\r\n              <ion-label style=\"--color: black; margin-right: 8px\">Doenças: </ion-label>\r\n              <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.doenca.errors\">*</span>\r\n              <ion-input type=\"text\" formControlName=\"doenca\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\" class=\"ajuste-display\">\r\n              <div>\r\n                <ion-label style=\"--color: black; margin-right: 8px\">Detalhes do bixinho: </ion-label>\r\n                <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.descricao.errors\">*</span>\r\n              </div>\r\n              <ion-textarea formControlName=\"descricao\" rows=\"5\" placeholder=\"Escreva sobre o bixinho\"></ion-textarea>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\">\r\n              <ion-label style=\"--color: black; margin-right: 8px\">Rua: </ion-label>\r\n              <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.rua.errors\">*</span>\r\n              <ion-input type=\"text\" formControlName=\"rua\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\">\r\n              <ion-label style=\"--color: black; margin-right: 8px\">Bairro: </ion-label>\r\n              <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.bairro.errors\">*</span>\r\n              <ion-input type=\"text\" formControlName=\"bairro\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\">\r\n              <ion-label style=\"--color: black; margin-right: 8px\">Cidade: </ion-label>\r\n              <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.cidade.errors\">*</span>\r\n              <ion-input type=\"text\" formControlName=\"cidade\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"item-form-center\" size=\"6\">\r\n              <button (click)=\"cancelar()\" class=\"botaoCancelar\" expand=\"block\">Cancelar</button>\r\n            </ion-col>\r\n            <ion-col class=\"item-form-center\" size=\"6\">\r\n              <button (click)=\"salvarAnimal()\" class=\"botaoConfirmar\" [disabled]=\"!cadastroForm.valid\" expand=\"block\">Salvar</button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </form>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_medicamento_criar-medicamento_criar-medicamento_module_ts.js.map