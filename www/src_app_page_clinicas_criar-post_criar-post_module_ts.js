(self["webpackChunkpeppaciente"] = self["webpackChunkpeppaciente"] || []).push([["src_app_page_clinicas_criar-post_criar-post_module_ts"],{

/***/ 2265:
/*!***********************************************************************!*\
  !*** ./src/app/page/clinicas/criar-post/criar-post-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CriarPostPageRoutingModule": () => (/* binding */ CriarPostPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _criar_post_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./criar-post.page */ 3392);




const routes = [
    {
        path: '',
        component: _criar_post_page__WEBPACK_IMPORTED_MODULE_0__.CriarPostPage
    }
];
let CriarPostPageRoutingModule = class CriarPostPageRoutingModule {
};
CriarPostPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CriarPostPageRoutingModule);



/***/ }),

/***/ 8034:
/*!***************************************************************!*\
  !*** ./src/app/page/clinicas/criar-post/criar-post.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CriarPostPageModule": () => (/* binding */ CriarPostPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _criar_post_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./criar-post-routing.module */ 2265);
/* harmony import */ var _criar_post_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./criar-post.page */ 3392);
/* harmony import */ var _clinicas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clinicas.service */ 4016);








let CriarPostPageModule = class CriarPostPageModule {
};
CriarPostPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _criar_post_routing_module__WEBPACK_IMPORTED_MODULE_0__.CriarPostPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule
        ],
        declarations: [_criar_post_page__WEBPACK_IMPORTED_MODULE_1__.CriarPostPage],
        providers: [
            _clinicas_service__WEBPACK_IMPORTED_MODULE_2__.ClinicasService
        ]
    })
], CriarPostPageModule);



/***/ }),

/***/ 3392:
/*!*************************************************************!*\
  !*** ./src/app/page/clinicas/criar-post/criar-post.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CriarPostPage": () => (/* binding */ CriarPostPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_criar_post_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./criar-post.page.html */ 5509);
/* harmony import */ var _criar_post_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./criar-post.page.scss */ 6548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_loading_loading_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/loading/loading.page */ 8532);
/* harmony import */ var src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/class/storage.service */ 6578);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _clinicas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../clinicas.service */ 4016);











let CriarPostPage = class CriarPostPage {
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
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_7__.NavigationEnd && this.router.url === '/page/criar-post') {
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
    salvarPost() {
        const request = {
            topico: this.cadastroForm.get('topico').value,
            idUsuario: this.user.id,
            conteudo: this.cadastroForm.get('conteudo').value,
        };
        this.showLoadingScreen()
            .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.exameService.postPost(request))
                .subscribe(() => {
                this.setNull();
                this.router.navigateByUrl('/page/forum');
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
        this.router.navigateByUrl('/page/forum');
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
CriarPostPage.ctorParameters = () => [
    { type: _clinicas_service__WEBPACK_IMPORTED_MODULE_5__.ClinicasService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_4__.UrlService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService }
];
CriarPostPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-criar-post',
        template: _raw_loader_criar_post_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_criar_post_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CriarPostPage);



/***/ }),

/***/ 6548:
/*!***************************************************************!*\
  !*** ./src/app/page/clinicas/criar-post/criar-post.page.scss ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  margin-top: 8vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.item-form {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.item-form-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.botaoCancelar {\n  background-color: #a7a7a7;\n  width: 140px;\n  height: 40px;\n  color: aliceblue;\n}\n\n.botaoConfirmar {\n  background-color: #60E677;\n  width: 140px;\n  height: 40px;\n  color: aliceblue;\n}\n\n.ajuste-display {\n  display: flex;\n  flex-direction: column;\n}\n\n.mensagem-erro {\n  font-size: 14px;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyaWFyLXBvc3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0Y7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7RUFDQSxVQUFBO0FBRkYiLCJmaWxlIjoiY3JpYXItcG9zdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcclxuICBtYXJnaW4tdG9wOiA4dmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saXN0YVRpcG97XHJcbn1cclxuXHJcbi5pdGVtLWZvcm17XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLml0ZW0tZm9ybS1jZW50ZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYm90YW9DYW5jZWxhcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTdhN2E3O1xyXG4gIHdpZHRoOiAxNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG5cclxuLmJvdGFvQ29uZmlybWFye1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MEU2Nzc7XHJcbiAgd2lkdGg6IDE0MHB4O1xyXG4gIGhlaWdodDogNDBweDtcclxuICBjb2xvcjogYWxpY2VibHVlO1xyXG59XHJcblxyXG4uYWp1c3RlLWRpc3BsYXl7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4ubWVuc2FnZW0tZXJyb3tcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 5509:
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/clinicas/criar-post/criar-post.page.html ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"content\">\r\n    <ion-grid style=\"width: 100%;\">\r\n      <form [formGroup]=\"cadastroForm\">\r\n        <ion-row>\r\n          <ion-col class=\"item-form\" size=\"12\">\r\n            <ion-label style=\"--color: black\">Topico: </ion-label>\r\n            <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.topico.errors\">*</span>\r\n            <ion-select class=\"listaTipo\" formControlName=\"topico\" placeholder=\"Selecione...\">\r\n              <ion-select-option value=\"Alimentação\">Alimentação</ion-select-option>\r\n              <ion-select-option value=\"Saúde\">Saúde</ion-select-option>\r\n              <ion-select-option value=\"Bem Estar\">Bem Estar</ion-select-option>\r\n              <ion-select-option value=\"Curiosidade\">Curiosidade</ion-select-option>\r\n              <ion-select-option value=\"Dúvida\">Dúvida</ion-select-option>\r\n            </ion-select>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"item-form\" size=\"12\" class=\"ajuste-display\">\r\n            <div>\r\n              <ion-label style=\"--color: black\">Conteudo: </ion-label>\r\n              <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.conteudo.errors\">*</span>\r\n            </div>\r\n            <ion-textarea formControlName=\"conteudo\" rows=\"5\" placeholder=\"Escreva seu post\"></ion-textarea>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"item-form-center\" size=\"6\">\r\n            <button (click)=\"cancelar()\" class=\"botaoCancelar\" expand=\"block\">Cancelar</button>\r\n          </ion-col>\r\n          <ion-col class=\"item-form-center\" size=\"6\">\r\n            <button (click)=\"salvarPost()\" class=\"botaoConfirmar\" [disabled]=\"!cadastroForm.valid\" expand=\"block\">Salvar</button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </form>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_clinicas_criar-post_criar-post_module_ts.js.map