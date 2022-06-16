(self["webpackChunkpeppaciente"] = self["webpackChunkpeppaciente"] || []).push([["src_app_page_clinicas_editar-post_editar-post_module_ts"],{

/***/ 9844:
/*!*************************************************************************!*\
  !*** ./src/app/page/clinicas/editar-post/editar-post-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditarPostPageRoutingModule": () => (/* binding */ EditarPostPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _editar_post_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editar-post.page */ 9131);




const routes = [
    {
        path: '',
        component: _editar_post_page__WEBPACK_IMPORTED_MODULE_0__.EditarPostPage
    }
];
let EditarPostPageRoutingModule = class EditarPostPageRoutingModule {
};
EditarPostPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditarPostPageRoutingModule);



/***/ }),

/***/ 6396:
/*!*****************************************************************!*\
  !*** ./src/app/page/clinicas/editar-post/editar-post.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditarPostPageModule": () => (/* binding */ EditarPostPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _editar_post_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editar-post-routing.module */ 9844);
/* harmony import */ var _editar_post_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editar-post.page */ 9131);
/* harmony import */ var _clinicas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clinicas.service */ 4016);








let EditarPostPageModule = class EditarPostPageModule {
};
EditarPostPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _editar_post_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditarPostPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_editar_post_page__WEBPACK_IMPORTED_MODULE_1__.EditarPostPage],
        providers: [
            _clinicas_service__WEBPACK_IMPORTED_MODULE_2__.ClinicasService
        ]
    })
], EditarPostPageModule);



/***/ }),

/***/ 9131:
/*!***************************************************************!*\
  !*** ./src/app/page/clinicas/editar-post/editar-post.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditarPostPage": () => (/* binding */ EditarPostPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_editar_post_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./editar-post.page.html */ 6324);
/* harmony import */ var _editar_post_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editar-post.page.scss */ 1146);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_loading_loading_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/loading/loading.page */ 8532);
/* harmony import */ var src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/class/storage.service */ 6578);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _clinicas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../clinicas.service */ 4016);











let EditarPostPage = class EditarPostPage {
    constructor(exameService, modalController, toastController, urlService, router, fb, storage) {
        this.exameService = exameService;
        this.modalController = modalController;
        this.toastController = toastController;
        this.urlService = urlService;
        this.router = router;
        this.fb = fb;
        this.storage = storage;
        this.cadastroForm = this.fb.group({
            topico: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            conteudo: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])
        });
        this.router.events.subscribe((evt) => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd && this.router.url === '/page/editar-post') {
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
            this.idPost = yield this.storage.get('idAnimal');
            yield this.urlService.validateToken(token);
            this.getPostById();
        });
    }
    getPostById() {
        this.showLoadingScreen()
            .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.exameService.getPostById(this.idPost))
                .subscribe(res => {
                console.log(res);
                this.post = res;
                this.cadastroForm.get('topico').setValue(this.post.topico);
                this.cadastroForm.get('conteudo').setValue(this.post.conteudo);
            }, error => {
                this.setNull();
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
    updatePost() {
        const request = {
            id: this.idPost,
            topico: this.cadastroForm.get('topico').value,
            idUsuario: this.user.id,
            conteudo: this.cadastroForm.get('conteudo').value,
        };
        this.showLoadingScreen()
            .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.exameService.updatePost(request))
                .subscribe(() => {
                this.setNull();
                this.storage.set('idAnimal', this.idPost);
                this.router.navigateByUrl('/page/comentario');
            }, error => {
                this.setNull();
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
        this.setNull();
        this.storage.set('idAnimal', this.idPost);
        this.router.navigateByUrl('/page/comentario');
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
        this.conteudo = null;
        this.topico = null;
    }
};
EditarPostPage.ctorParameters = () => [
    { type: _clinicas_service__WEBPACK_IMPORTED_MODULE_5__.ClinicasService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_4__.UrlService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService }
];
EditarPostPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-editar-post',
        template: _raw_loader_editar_post_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_editar_post_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditarPostPage);



/***/ }),

/***/ 1146:
/*!*****************************************************************!*\
  !*** ./src/app/page/clinicas/editar-post/editar-post.page.scss ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  margin-top: 8vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.item-form {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.item-form-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.botaoCancelar {\n  background-color: #a7a7a7;\n  width: 140px;\n  height: 40px;\n  color: aliceblue;\n}\n\n.botaoConfirmar {\n  background-color: #60E677;\n  width: 140px;\n  height: 40px;\n  color: aliceblue;\n}\n\n.ajuste-display {\n  display: flex;\n  flex-direction: column;\n}\n\n.mensagem-erro {\n  font-size: 14px;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRhci1wb3N0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0VBQ0EsVUFBQTtBQUZGIiwiZmlsZSI6ImVkaXRhci1wb3N0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xyXG4gIG1hcmdpbi10b3A6IDh2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmxpc3RhVGlwb3tcclxufVxyXG5cclxuLml0ZW0tZm9ybXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaXRlbS1mb3JtLWNlbnRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ib3Rhb0NhbmNlbGFye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNhN2E3YTc7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG59XHJcblxyXG4uYm90YW9Db25maXJtYXJ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwRTY3NztcclxuICB3aWR0aDogMTQwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuXHJcbi5hanVzdGUtZGlzcGxheXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5tZW5zYWdlbS1lcnJve1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 6324:
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/clinicas/editar-post/editar-post.page.html ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"content\">\r\n    <ion-grid style=\"width: 100%;\">\r\n      <form [formGroup]=\"cadastroForm\">\r\n        <ion-row>\r\n          <ion-col class=\"item-form\" size=\"12\">\r\n            <ion-label style=\"--color: black\">Topico: </ion-label>\r\n            <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.topico.errors\">*</span>\r\n            <ion-select class=\"listaTipo\" formControlName=\"topico\" placeholder=\"Selecione...\">\r\n              <ion-select-option value=\"Alimentação\">Alimentação</ion-select-option>\r\n              <ion-select-option value=\"Saúde\">Saúde</ion-select-option>\r\n              <ion-select-option value=\"Bem Estar\">Bem Estar</ion-select-option>\r\n              <ion-select-option value=\"Curiosidade\">Curiosidade</ion-select-option>\r\n              <ion-select-option value=\"Dúvida\">Dúvida</ion-select-option>\r\n            </ion-select>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"item-form\" size=\"12\" class=\"ajuste-display\">\r\n            <div>\r\n              <ion-label style=\"--color: black\">Conteudo: </ion-label>\r\n              <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.conteudo.errors\">*</span>\r\n            </div>\r\n            <ion-textarea formControlName=\"conteudo\" rows=\"5\" placeholder=\"Escreva seu post\"></ion-textarea>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"item-form-center\" size=\"6\">\r\n            <button (click)=\"cancelar()\" class=\"botaoCancelar\" expand=\"block\">Cancelar</button>\r\n          </ion-col>\r\n          <ion-col class=\"item-form-center\" size=\"6\">\r\n            <button (click)=\"updatePost()\" class=\"botaoConfirmar\" [disabled]=\"!cadastroForm.valid\" expand=\"block\">Salvar</button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </form>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_clinicas_editar-post_editar-post_module_ts.js.map