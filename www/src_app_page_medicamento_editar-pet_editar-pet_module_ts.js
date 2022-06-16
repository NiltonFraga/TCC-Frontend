(self["webpackChunkpeppaciente"] = self["webpackChunkpeppaciente"] || []).push([["src_app_page_medicamento_editar-pet_editar-pet_module_ts"],{

/***/ 6876:
/*!**************************************************************************!*\
  !*** ./src/app/page/medicamento/editar-pet/editar-pet-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditarPetPageRoutingModule": () => (/* binding */ EditarPetPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _editar_pet_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editar-pet.page */ 7344);




const routes = [
    {
        path: '',
        component: _editar_pet_page__WEBPACK_IMPORTED_MODULE_0__.EditarPetPage
    }
];
let EditarPetPageRoutingModule = class EditarPetPageRoutingModule {
};
EditarPetPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditarPetPageRoutingModule);



/***/ }),

/***/ 6371:
/*!******************************************************************!*\
  !*** ./src/app/page/medicamento/editar-pet/editar-pet.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditarPetPageModule": () => (/* binding */ EditarPetPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _editar_pet_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editar-pet-routing.module */ 6876);
/* harmony import */ var _editar_pet_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editar-pet.page */ 7344);
/* harmony import */ var _medicamento_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../medicamento.service */ 5418);








let EditarPetPageModule = class EditarPetPageModule {
};
EditarPetPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _editar_pet_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditarPetPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_editar_pet_page__WEBPACK_IMPORTED_MODULE_1__.EditarPetPage],
        providers: [_medicamento_service__WEBPACK_IMPORTED_MODULE_2__.MedicamentoService]
    })
], EditarPetPageModule);



/***/ }),

/***/ 7344:
/*!****************************************************************!*\
  !*** ./src/app/page/medicamento/editar-pet/editar-pet.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditarPetPage": () => (/* binding */ EditarPetPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_editar_pet_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./editar-pet.page.html */ 5231);
/* harmony import */ var _editar_pet_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editar-pet.page.scss */ 9959);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_loading_loading_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/loading/loading.page */ 8532);
/* harmony import */ var src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/class/storage.service */ 6578);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _medicamento_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../medicamento.service */ 5418);











let EditarPetPage = class EditarPetPage {
    constructor(router, storage, urlService, modalController, toastController, medicamentoService, fb) {
        this.router = router;
        this.storage = storage;
        this.urlService = urlService;
        this.modalController = modalController;
        this.toastController = toastController;
        this.medicamentoService = medicamentoService;
        this.fb = fb;
        this.gato = 'https://www.petz.com.br/blog/wp-content/uploads/2021/05/gato-branco-de-olho-azul.jpg';
        this.loading = false;
        this.cadastroForm = this.fb.group({
            nome: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            idade: this.fb.control(''),
            peso: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            pelagem: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            sexo: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            vermifugado: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            vacina: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            doenca: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            descricao: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            castrado: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            rua: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            bairro: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            cidade: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            tipo: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            ativo: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])
        });
        this.router.events.subscribe((evt) => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd && this.router.url === `/page/editar-pet`) {
                this.loading = true;
                this.pageEnter();
            }
        });
    }
    pageEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this.storage.get('user');
            const token = yield this.storage.get('token');
            yield this.urlService.validateToken(token);
            const id = yield this.storage.get('idAnimal');
            yield this.getAnimalById(id);
        });
    }
    getAnimalById(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.medicamentoService.getAnimalById(id)).subscribe((res) => {
                this.animal = res;
                this.idAnimal = this.animal.id;
                this.idDoador = this.animal.idDoador;
                this.cadastroForm.get('nome').setValue(this.animal.nome);
                this.cadastroForm.get('idade').setValue(this.animal.idade);
                this.cadastroForm.get('tipo').setValue(this.animal.tipo);
                this.cadastroForm.get('pelagem').setValue(this.animal.pelagem);
                this.cadastroForm.get('peso').setValue(this.animal.peso);
                this.cadastroForm.get('sexo').setValue(this.animal.sexo);
                this.cadastroForm.get('vermifugado').setValue(this.animal.vermifugado);
                this.cadastroForm.get('vacina').setValue(this.animal.vacina);
                this.cadastroForm.get('doenca').setValue(this.animal.doenca);
                this.cadastroForm.get('descricao').setValue(this.animal.descricao);
                this.cadastroForm.get('castrado').setValue(this.animal.castrado);
                this.cadastroForm.get('rua').setValue(this.animal.rua);
                this.cadastroForm.get('bairro').setValue(this.animal.bairro);
                this.cadastroForm.get('cidade').setValue(this.animal.cidade);
                this.cadastroForm.get('ativo').setValue(this.animal.ativo);
                if (this.animal.imagem !== null) {
                    this.img = `data:${this.animal.imagem.tipo};base64,${this.animal.imagem.dados}`;
                    this.idArquivo = this.animal.imagem.id;
                    this.arquivo = {
                        name: this.animal.imagem.nome,
                        type: this.animal.imagem.tipo,
                        binary: this.animal.imagem.dados,
                    };
                }
                ;
                this.loading = false;
            });
        });
    }
    salvarAnimal() {
        const request = {
            id: this.idAnimal,
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
                id: this.idArquivo,
                nome: this.arquivo.name,
                tipo: this.arquivo.type,
                dados: this.arquivo.binary
            }
        };
        console.log(request);
        this.showLoadingScreen()
            .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.medicamentoService.updateAnimal(request))
                .subscribe(() => {
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
        this.router.navigateByUrl('page/minha-area');
    }
    ngOnInit() {
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
EditarPetPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService },
    { type: src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_4__.UrlService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _medicamento_service__WEBPACK_IMPORTED_MODULE_5__.MedicamentoService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder }
];
EditarPetPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-editar-pet',
        template: _raw_loader_editar_pet_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_editar_pet_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditarPetPage);



/***/ }),

/***/ 9959:
/*!******************************************************************!*\
  !*** ./src/app/page/medicamento/editar-pet/editar-pet.page.scss ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  margin-top: 8vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.listaTipo {\n  --placeholder-opacity: 0.5;\n}\n\n.item-form {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.item-form-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.mensagem-erro {\n  font-size: 14px;\n  color: red;\n  margin-right: 12px;\n}\n\n.ajuste-display {\n  display: flex;\n  flex-direction: column;\n}\n\n.botaoCancelar {\n  background-color: #a7a7a7;\n  width: 140px;\n  height: 40px;\n  color: aliceblue;\n}\n\n.botaoConfirmar {\n  background-color: #60E677;\n  width: 140px;\n  height: 40px;\n  color: aliceblue;\n}\n\n.juste-margin {\n  margin-bottom: 26px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRhci1wZXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwwQkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGIiwiZmlsZSI6ImVkaXRhci1wZXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XHJcbiAgbWFyZ2luLXRvcDogOHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ubGlzdGFUaXBve1xyXG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMC41O1xyXG59XHJcblxyXG4uaXRlbS1mb3Jte1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pdGVtLWZvcm0tY2VudGVye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLm1lbnNhZ2VtLWVycm97XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiByZWQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG4uYWp1c3RlLWRpc3BsYXl7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uYm90YW9DYW5jZWxhcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTdhN2E3O1xyXG4gIHdpZHRoOiAxNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG5cclxuLmJvdGFvQ29uZmlybWFye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MEU2Nzc7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG59XHJcblxyXG4uanVzdGUtbWFyZ2lue1xyXG4gIG1hcmdpbi1ib3R0b206IDI2cHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ 5231:
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/medicamento/editar-pet/editar-pet.page.html ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"content\">\r\n    <div class=\"grid-animais\">\r\n      <div *ngIf=\"loading\" class=\"preloader-wrapper big active\">\r\n        <div class=\"spinner-layer spinner-blue-only\">\r\n          <div class=\"circle-clipper left\">\r\n            <div class=\"circle\"></div>\r\n          </div><div class=\"gap-patch\">\r\n            <div class=\"circle\"></div>\r\n          </div><div class=\"circle-clipper right\">\r\n            <div class=\"circle\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <ion-grid>\r\n        <form [formGroup]=\"cadastroForm\">\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\">\r\n              <ion-label style=\"--color: black; margin-right: 8px\">Imagem Atual: </ion-label>\r\n              <ion-img class=\"imagem-animal\" [src]=\"img\"></ion-img>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\">\r\n              <ion-label style=\"--color: black; margin-right: 8px\">Imagem: </ion-label>\r\n              <ion-input type=\"file\" (change)=\"fileChange($event)\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\">\r\n              <ion-label style=\"--color: black; margin-right: 8px\">Nome: </ion-label>\r\n              <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.nome.errors\">*</span>\r\n              <ion-input type=\"text\" formControlName=\"nome\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\">\r\n              <ion-label style=\"--color: black; margin-right: 8px\">Tipo: </ion-label>\r\n              <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.tipo.errors\">*</span>\r\n              <ion-select formControlName=\"tipo\" class=\"listaTipo\" placeholder=\"Selecione...\">\r\n                <ion-select-option value=\"Gato\">Gato</ion-select-option>\r\n                <ion-select-option value=\"Cachorro\">Cachorro</ion-select-option>\r\n              </ion-select>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\">\r\n              <ion-label style=\"--color: black; margin-right: 8px\">Idade: </ion-label>\r\n              <ion-input type=\"text\" formControlName=\"idade\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\">\r\n              <ion-label style=\"--color: black; margin-right: 8px\">Peso: </ion-label>\r\n              <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.peso.errors\">*</span>\r\n              <ion-input type=\"number\" formControlName=\"peso\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\">\r\n              <ion-label style=\"--color: black; margin-right: 8px\">Pelagem: </ion-label>\r\n              <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.pelagem.errors\">*</span>\r\n              <ion-input type=\"text\" formControlName=\"pelagem\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\">\r\n              <ion-label style=\"--color: black; margin-right: 8px\">Sexo: </ion-label>\r\n              <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.sexo.errors\">*</span>\r\n              <ion-select formControlName=\"sexo\" class=\"listaTipo\" placeholder=\"Selecione...\">\r\n                <ion-select-option value=\"M\">Macho</ion-select-option>\r\n                <ion-select-option value=\"F\">Fêmea</ion-select-option>\r\n              </ion-select>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\">\r\n              <ion-label style=\"--color: black; margin-right: 8px\">Vermifugado: </ion-label>\r\n              <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.vermifugado.errors\">*</span>\r\n              <ion-select formControlName=\"vermifugado\" class=\"listaTipo\" placeholder=\"Selecione...\">\r\n                <ion-select-option value=\"true\">Sim</ion-select-option>\r\n                <ion-select-option value=\"false\">Não</ion-select-option>\r\n              </ion-select>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\">\r\n              <ion-label style=\"--color: black; margin-right: 8px\">Castrado: </ion-label>\r\n              <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.castrado.errors\">*</span>\r\n              <ion-select formControlName=\"castrado\" class=\"listaTipo\" placeholder=\"Selecione...\">\r\n                <ion-select-option value=\"true\">Sim</ion-select-option>\r\n                <ion-select-option value=\"false\">Não</ion-select-option>\r\n              </ion-select>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\">\r\n              <ion-label style=\"--color: black; margin-right: 8px\">Vacinas: </ion-label>\r\n              <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.vacina.errors\">*</span>\r\n              <ion-input type=\"text\" formControlName=\"vacina\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\">\r\n              <ion-label style=\"--color: black; margin-right: 8px\">Doenças: </ion-label>\r\n              <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.doenca.errors\">*</span>\r\n              <ion-input type=\"text\" formControlName=\"doenca\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\" class=\"ajuste-display\">\r\n              <div>\r\n                <ion-label style=\"--color: black; margin-right: 8px\">Detalhes do bixinho: </ion-label>\r\n                <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.descricao.errors\">*</span>\r\n              </div>\r\n              <ion-textarea style=\"border: 1px solid black\" formControlName=\"descricao\" rows=\"5\" placeholder=\"Escreva sobre o bixinho\"></ion-textarea>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\">\r\n              <ion-label style=\"--color: black; margin-right: 8px\">Rua: </ion-label>\r\n              <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.rua.errors\">*</span>\r\n              <ion-input type=\"text\" formControlName=\"rua\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\">\r\n              <ion-label style=\"--color: black; margin-right: 8px\">Bairro: </ion-label>\r\n              <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.bairro.errors\">*</span>\r\n              <ion-input type=\"text\" formControlName=\"bairro\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row>\r\n            <ion-col class=\"item-form\" size=\"12\">\r\n              <ion-label style=\"--color: black; margin-right: 8px\">Cidade: </ion-label>\r\n              <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.cidade.errors\">*</span>\r\n              <ion-input type=\"text\" formControlName=\"cidade\"></ion-input>\r\n            </ion-col>\r\n          </ion-row>\r\n          <ion-row class=\"juste-margin\">\r\n            <ion-col class=\"item-form\" size=\"12\">\r\n              <ion-label style=\"--color: black; margin-right: 8px\">Status do bixinho: </ion-label>\r\n              <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.ativo.errors\">*</span>\r\n              <ion-select formControlName=\"ativo\" class=\"listaTipo\" placeholder=\"Selecione...\">\r\n                <ion-select-option value=\"true\">Bixinho para adoção</ion-select-option>\r\n                <ion-select-option value=\"false\">Bixinho foi doado</ion-select-option>\r\n              </ion-select>\r\n            </ion-col>\r\n          </ion-row>\r\n\r\n          <ion-row class=\"juste-margin\">\r\n            <ion-col class=\"item-form-center\" size=\"6\">\r\n              <button (click)=\"cancelar()\" class=\"botaoCancelar\" expand=\"block\">Cancelar</button>\r\n            </ion-col>\r\n            <ion-col class=\"item-form-center\" size=\"6\">\r\n              <button (click)=\"salvarAnimal()\" class=\"botaoConfirmar\" [disabled]=\"!cadastroForm.valid\" expand=\"block\">Salvar</button>\r\n            </ion-col>\r\n          </ion-row>\r\n        </form>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n\r\n</ion-content>\r\n\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_medicamento_editar-pet_editar-pet_module_ts.js.map