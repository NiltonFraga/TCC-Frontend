(self["webpackChunkpeppaciente"] = self["webpackChunkpeppaciente"] || []).push([["src_app_page_clinicas_comentarios_comentario_module_ts"],{

/***/ 681:
/*!************************************************************************!*\
  !*** ./src/app/page/clinicas/comentarios/comentario-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComentarioPageRoutingModule": () => (/* binding */ ComentarioPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _comentario_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comentario.page */ 7772);




const routes = [
    {
        path: '',
        component: _comentario_page__WEBPACK_IMPORTED_MODULE_0__.ComentarioPage
    }
];
let ComentarioPageRoutingModule = class ComentarioPageRoutingModule {
};
ComentarioPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ComentarioPageRoutingModule);



/***/ }),

/***/ 8439:
/*!****************************************************************!*\
  !*** ./src/app/page/clinicas/comentarios/comentario.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComentarioPageModule": () => (/* binding */ ComentarioPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _comentario_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./comentario-routing.module */ 681);
/* harmony import */ var _comentario_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comentario.page */ 7772);
/* harmony import */ var _clinicas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../clinicas.service */ 4016);








let ComentarioPageModule = class ComentarioPageModule {
};
ComentarioPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _comentario_routing_module__WEBPACK_IMPORTED_MODULE_0__.ComentarioPageRoutingModule
        ],
        declarations: [_comentario_page__WEBPACK_IMPORTED_MODULE_1__.ComentarioPage],
        providers: [
            _clinicas_service__WEBPACK_IMPORTED_MODULE_2__.ClinicasService
        ]
    })
], ComentarioPageModule);



/***/ }),

/***/ 7772:
/*!**************************************************************!*\
  !*** ./src/app/page/clinicas/comentarios/comentario.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComentarioPage": () => (/* binding */ ComentarioPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_comentario_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./comentario.page.html */ 5438);
/* harmony import */ var _comentario_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comentario.page.scss */ 7836);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var src_app_loading_loading_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/loading/loading.page */ 8532);
/* harmony import */ var src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/class/storage.service */ 6578);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _clinicas_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../clinicas.service */ 4016);










let ComentarioPage = class ComentarioPage {
    constructor(exameService, modalController, toastController, urlService, router, storage) {
        this.exameService = exameService;
        this.modalController = modalController;
        this.toastController = toastController;
        this.urlService = urlService;
        this.router = router;
        this.storage = storage;
        this.router.events.subscribe((evt) => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_6__.NavigationEnd && this.router.url === '/page/comentario') {
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
            const token = yield this.storage.get('token');
            this.idPost = yield this.storage.get('idAnimal');
            yield this.urlService.validateToken(token);
            this.getPostAndComentarioById();
        });
    }
    getPostAndComentarioById() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.showLoadingScreen()
                .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                (yield this.exameService.getPostAndComentarioById(Number(this.idPost)))
                    .subscribe((resp) => {
                    this.post = resp;
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
    criarComentario() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (this.conteudoNovo !== '') {
                const request = {
                    conteudo: this.conteudoNovo,
                    idUsuario: this.user.id,
                    idPost: this.idPost
                };
                this.showLoadingScreen()
                    .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                    (yield this.exameService.postComentario(request))
                        .subscribe((resp) => {
                        this.conteudoNovo = '';
                        this.getPostAndComentarioById();
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
        });
    }
    excluirComentario(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.showLoadingScreen()
                .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                (yield this.exameService.deleteComentario(id))
                    .subscribe((resp) => {
                    this.conteudoNovo = '';
                    this.getPostAndComentarioById();
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
    excluirPost(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.showLoadingScreen()
                .then(() => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                (yield this.exameService.deletePost(id))
                    .subscribe((resp) => {
                    this.router.navigateByUrl('/page/forum');
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
    curtirPost(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const request = {
                id: 0,
                idPost: id,
                idUsuario: this.user.id
            };
            (yield this.exameService.updateCurtida(request))
                .subscribe(() => (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
                (yield this.exameService.getPostAndComentarioById(Number(this.idPost)))
                    .subscribe((resp) => {
                    this.post = resp;
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
            }), error => {
                if (error.status === 401 || error.status === 403) {
                    this.storage.remove('user');
                    this.router.navigateByUrl('');
                }
                this.mensagem = error.error;
                this.loading = false;
            });
        });
    }
    editarPost(id) {
        this.storage.set('idAnimal', id);
        this.router.navigateByUrl('/page/editar-post');
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
ComentarioPage.ctorParameters = () => [
    { type: _clinicas_service__WEBPACK_IMPORTED_MODULE_5__.ClinicasService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_4__.UrlService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService }
];
ComentarioPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-comentario',
        template: _raw_loader_comentario_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_comentario_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ComentarioPage);



/***/ }),

/***/ 7836:
/*!****************************************************************!*\
  !*** ./src/app/page/clinicas/comentarios/comentario.page.scss ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  margin-top: 6vh;\n  width: 100vw;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.grid-animais {\n  width: 100%;\n  height: auto;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin-top: 2vh;\n  position: relative;\n}\n\n.conteudo-fixo {\n  background-color: aliceblue;\n}\n\n.bloco-card {\n  padding: 0;\n  margin: 0;\n}\n\n.conteudo {\n  padding: 6px;\n  box-shadow: rgba(17, 17, 26, 0.05) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 0px 8px;\n  margin-bottom: 8px;\n}\n\n.header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n}\n\n.acoes-card {\n  padding-top: 10px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.bloco-card {\n  padding: 0;\n  margin: 0;\n}\n\n.acoes {\n  position: relative;\n}\n\n.iconi {\n  width: 25px;\n  height: 25px;\n}\n\n.contagem {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: -14px;\n  right: -14px;\n}\n\n.curtir {\n  color: #15AD2E;\n}\n\n.comentario {\n  padding: 6px 4px;\n  border-bottom: 1px solid gray;\n}\n\n.input-comentario {\n  width: 100%;\n  position: fixed;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #707070;\n  background-color: aliceblue;\n}\n\n.input-comentario ion-textarea {\n  padding: 0px;\n}\n\n.input-comentario ion-icon {\n  width: 30px;\n  height: 30px;\n  padding: 6px;\n  fill: green;\n  color: green;\n}\n\n.conteudo-movel {\n  margin-bottom: 36px;\n}\n\n.excluir {\n  position: absolute;\n  color: red;\n  right: 0;\n}\n\n.excluir ion-icon {\n  width: 30px;\n  height: 30px;\n}\n\n.edit {\n  position: absolute;\n  color: #004d81;\n  right: 0;\n  top: 26px;\n}\n\n.edit ion-icon {\n  width: 28px;\n  height: 28px;\n}\n\n.margin-exclusao {\n  margin-right: 34px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbWVudGFyaW8ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGlGQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsNkJBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSwyQkFBQTtBQUNGOztBQUNFO0VBQ0UsWUFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFBSjs7QUFJQTtFQUNFLG1CQUFBO0FBREY7O0FBSUE7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBREY7O0FBR0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQURKOztBQUtBO0VBQ0Usa0JBQUE7RUFDQSxjQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFGRjs7QUFJRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBRko7O0FBTUE7RUFDRSxrQkFBQTtBQUhGIiwiZmlsZSI6ImNvbWVudGFyaW8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnR7XHJcbiAgbWFyZ2luLXRvcDogNnZoO1xyXG4gIHdpZHRoOiAxMDB2dztcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5ncmlkLWFuaW1haXN7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbi10b3A6IDJ2aDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jb250ZXVkby1maXhve1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTtcclxufVxyXG5cclxuLmJsb2NvLWNhcmR7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5jb250ZXVkb3tcclxuICBwYWRkaW5nOiA2cHg7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgxNywgMTcsIDI2LCAwLjA1KSAwcHggMXB4IDBweCwgcmdiYSgxNywgMTcsIDI2LCAwLjEpIDBweCAwcHggOHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG5cclxuLmhlYWRlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmFjb2VzLWNhcmR7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uYmxvY28tY2FyZHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmFjb2Vze1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmljb25pe1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGhlaWdodDogMjVweDtcclxufVxyXG5cclxuLmNvbnRhZ2Vte1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdG9wOiAtMTRweDtcclxuICByaWdodDogLTE0cHg7XHJcbn1cclxuXHJcbi5jdXJ0aXJ7XHJcbiAgY29sb3I6ICMxNUFEMkU7XHJcbn1cclxuXHJcbi5jb21lbnRhcmlve1xyXG4gIHBhZGRpbmc6IDZweCA0cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XHJcbn1cclxuXHJcbi5pbnB1dC1jb21lbnRhcmlve1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMTIsIDExMiwgMTEyKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7XHJcblxyXG4gIGlvbi10ZXh0YXJlYXtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICB9XHJcblxyXG4gIGlvbi1pY29ue1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBmaWxsOiBncmVlbjtcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICB9XHJcbn1cclxuXHJcbi5jb250ZXVkby1tb3ZlbHtcclxuICBtYXJnaW4tYm90dG9tOiAzNnB4O1xyXG59XHJcblxyXG4uZXhjbHVpcntcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29sb3I6IHJlZDtcclxuICByaWdodDogMDtcclxuXHJcbiAgaW9uLWljb257XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICB9XHJcbn1cclxuXHJcbi5lZGl0e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb2xvcjogcmdiKDAsIDc3LCAxMjkpO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMjZweDtcclxuXHJcbiAgaW9uLWljb257XHJcbiAgICB3aWR0aDogMjhweDtcclxuICAgIGhlaWdodDogMjhweDtcclxuICB9XHJcbn1cclxuXHJcbi5tYXJnaW4tZXhjbHVzYW97XHJcbiAgbWFyZ2luLXJpZ2h0OiAzNHB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 5438:
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/clinicas/comentarios/comentario.page.html ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"content\">\r\n    <div class=\"grid-animais\">\r\n      <div *ngIf=\"loading\" class=\"preloader-wrapper big active\">\r\n        <div class=\"spinner-layer spinner-blue-only\">\r\n          <div class=\"circle-clipper left\">\r\n            <div class=\"circle\"></div>\r\n          </div><div class=\"gap-patch\">\r\n            <div class=\"circle\"></div>\r\n          </div><div class=\"circle-clipper right\">\r\n            <div class=\"circle\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <ion-grid *ngIf=\"post\" style=\"width: 100%\">\r\n        <ion-row>\r\n          <span *ngIf=\"!loading\">{{mensagem}}</span>\r\n        </ion-row>\r\n        <ion-row class=\"conteudo-fixo\">\r\n          <ion-col size=\"12\" class=\"bloco-card\" >\r\n            <div class=\"conteudo\">\r\n              <div class=\"header\">\r\n                <span>{{post.nomeUsuario.split(' ').slice(0, 2).join(' ')}}</span>\r\n                <span [ngClass]=\"{'margin-exclusao': post.idUsuario === this.user.id}\">{{post.dataAtualizacao | date:'dd/MM/yyyy HH:mm'}}</span>\r\n                <span *ngIf=\"post.idUsuario === this.user.id\" class=\"excluir\" (click)=\"excluirPost(post.id)\">\r\n                  <ion-icon name=\"close-outline\"></ion-icon>\r\n                </span>\r\n                <span  *ngIf=\"post.idUsuario === this.user.id\" class=\"edit\" (click)=\"editarPost(post.id)\">\r\n                  <ion-icon name=\"create-outline\" ></ion-icon>\r\n                </span>\r\n              </div>\r\n              <p>Topico: {{post.topico}}</p>\r\n              <p>{{post.conteudo}}</p>\r\n              <div class=\"acoes-card\">\r\n                <span class=\"acoes\" style=\"margin-right: 40px;\">\r\n                  <ion-icon name=\"chatbox-ellipses-outline\" class=\"iconi\"></ion-icon>\r\n                  <ion-badge color=\"dark\" class=\"contagem\">{{post.quantComentarios}}</ion-badge>\r\n                </span>\r\n                <span class=\"acoes curtir\" style=\"margin-right: 10px;\" (click)=\"curtirPost(post.id)\">\r\n                  <ion-icon name=\"thumbs-up-outline\" class=\"iconi\"  [ngClass]=\"{curtir: post.idsUsuariosCurtidas.includes(this.user.id)}\"></ion-icon>\r\n                  <ion-badge color=\"dark\" class=\"contagem\">{{post.idsUsuariosCurtidas.length}}</ion-badge>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"post.comentarios\" class=\"conteudo-movel\">\r\n          <ion-col size=\"12\" class=\"bloco-card\" *ngFor=\"let comentario of post.comentarios\">\r\n            <div class=\"comentario\">\r\n              <div class=\"header\">\r\n                <span>{{comentario.nomeUsuario.split(' ').slice(0, 2).join(' ')}}</span>\r\n                <span [ngClass]=\"{'margin-exclusao': comentario.idUsuario === this.user.id}\">{{comentario.dataAtualizacao | date:'dd/MM/yyyy HH:mm'}}</span>\r\n                <span *ngIf=\"comentario.idUsuario === this.user.id\" class=\"excluir\" (click)=\"excluirComentario(comentario.id)\">\r\n                  <ion-icon name=\"close-outline\"></ion-icon>\r\n                </span>\r\n              </div>\r\n              <p>{{comentario.conteudo}}</p>\r\n            </div>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n    <div class=\"input-comentario\">\r\n      <ion-textarea [(ngModel)]=\"conteudoNovo\" rows=\"1\" placeholder=\"Comentario\"></ion-textarea>\r\n      <ion-icon name=\"paper-plane-outline\" (click)=\"criarComentario()\"></ion-icon>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_clinicas_comentarios_comentario_module_ts.js.map