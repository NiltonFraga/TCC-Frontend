(self["webpackChunkpeppaciente"] = self["webpackChunkpeppaciente"] || []).push([["src_app_page_clinicas_clinicas_module_ts"],{

/***/ 307:
/*!**********************************************************!*\
  !*** ./src/app/page/clinicas/clinicas-routing.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClinicasPageRoutingModule": () => (/* binding */ ClinicasPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _clinicas_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clinicas.page */ 8873);




const routes = [
    {
        path: '',
        component: _clinicas_page__WEBPACK_IMPORTED_MODULE_0__.ClinicasPage
    }
];
let ClinicasPageRoutingModule = class ClinicasPageRoutingModule {
};
ClinicasPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClinicasPageRoutingModule);



/***/ }),

/***/ 5590:
/*!**************************************************!*\
  !*** ./src/app/page/clinicas/clinicas.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClinicasPageModule": () => (/* binding */ ClinicasPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _clinicas_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clinicas-routing.module */ 307);
/* harmony import */ var _clinicas_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clinicas.page */ 8873);
/* harmony import */ var _clinicas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clinicas.service */ 4016);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var src_app_modal_endereco_atual_endereco_atual_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modal/endereco-atual/endereco-atual.service */ 9371);










let ClinicasPageModule = class ClinicasPageModule {
};
ClinicasPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule,
            _clinicas_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClinicasPageRoutingModule
        ],
        declarations: [_clinicas_page__WEBPACK_IMPORTED_MODULE_1__.ClinicasPage],
        providers: [_clinicas_service__WEBPACK_IMPORTED_MODULE_2__.ClinicasService, src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_3__.UrlService, src_app_modal_endereco_atual_endereco_atual_service__WEBPACK_IMPORTED_MODULE_4__.EnderecoAtualService]
    })
], ClinicasPageModule);



/***/ }),

/***/ 8873:
/*!************************************************!*\
  !*** ./src/app/page/clinicas/clinicas.page.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClinicasPage": () => (/* binding */ ClinicasPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_clinicas_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./clinicas.page.html */ 543);
/* harmony import */ var _clinicas_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clinicas.page.scss */ 9804);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/class/storage.service */ 6578);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _clinicas_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./clinicas.service */ 4016);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);









let ClinicasPage = class ClinicasPage {
    constructor(router, storage, modalController, plt, urlService, clinicasService) {
        this.router = router;
        this.storage = storage;
        this.modalController = modalController;
        this.plt = plt;
        this.urlService = urlService;
        this.clinicasService = clinicasService;
        this.router.events.subscribe((evt) => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd && this.router.url === '/page/forum') {
                this.pageEnter();
            }
        });
    }
    pageEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this.storage.get('user');
            const token = yield this.storage.get('token');
            yield this.urlService.validateToken(token);
            this.filtro = { topico: 'Todos', usuario: 0 };
            this.getAllPost(this.filtro);
        });
    }
    getAllPost(filtro) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            console.log(filtro);
            (yield this.clinicasService.getAllPost(filtro))
                .subscribe((resp) => {
                this.posts = resp;
                console.log(this.posts);
                if (this.posts.length === 0) {
                    this.mensagem = 'Não há nenhum post';
                }
                this.loading = false;
            }, error => {
                if (error.status === 401 || error.status === 403) {
                    this.storage.remove('user');
                    this.router.navigateByUrl('');
                }
                this.mensagem = error.error;
                this.loading = false;
            });
        });
    }
    criarPost() {
        this.router.navigateByUrl('/page/criar-post');
    }
    verComentarios(id) {
        this.storage.set('idAnimal', id);
        this.router.navigateByUrl('/page/comentario');
    }
    buscarDadosFiltro() {
        const request = {
            topico: this.filtro
        };
        this.getAllPost(request);
    }
    curtirPost(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const request = {
                id: 0,
                idPost: id,
                idUsuario: this.user.id
            };
            (yield this.clinicasService.updateCurtida(request))
                .subscribe(() => {
                this.getAllPost(this.filtro);
            }, error => {
                if (error.status === 401 || error.status === 403) {
                    this.storage.remove('user');
                    this.router.navigateByUrl('');
                }
                this.mensagem = error.error;
                this.loading = false;
            });
        });
    }
    ngOnInit() { }
};
ClinicasPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform },
    { type: src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_3__.UrlService },
    { type: _clinicas_service__WEBPACK_IMPORTED_MODULE_4__.ClinicasService }
];
ClinicasPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-clinicas',
        template: _raw_loader_clinicas_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_clinicas_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClinicasPage);



/***/ }),

/***/ 9804:
/*!**************************************************!*\
  !*** ./src/app/page/clinicas/clinicas.page.scss ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  margin-top: 8vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.filtro {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n}\n\n.filtro .filtro-topico {\n  margin: 0;\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  border: 1px solid #d0d0d0;\n}\n\n.filtro .filtro-topico .topico {\n  font-size: 12px;\n  color: gray;\n}\n\n.filtro .filtro-topico .listaTipo {\n  margin: 0 auto;\n  padding: 0;\n}\n\n.iconi-add {\n  color: #196B10;\n  width: 36px;\n  height: 36px;\n}\n\n.header-card {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.conteudo-card {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  text-align: justify;\n}\n\n.topico {\n  padding-bottom: 6px;\n}\n\n.acoes-card {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.bloco-card {\n  padding: 0;\n  margin: 0;\n}\n\n.acoes {\n  position: relative;\n}\n\n.iconi {\n  width: 25px;\n  height: 25px;\n}\n\n.contagem {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: -14px;\n  right: -14px;\n}\n\n.curtir {\n  color: #15AD2E;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsaW5pY2FzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFDRjs7QUFDRTtFQUNFLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBQ0k7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQUNOOztBQUVJO0VBQ0UsY0FBQTtFQUNBLFVBQUE7QUFBTjs7QUFLQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUZGOztBQUtBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFGRjs7QUFLQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUFGRjs7QUFLQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtBQUZGOztBQUtBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtBQUZGIiwiZmlsZSI6ImNsaW5pY2FzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xyXG4gIG1hcmdpbi10b3A6IDh2aDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZpbHRyb3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAuZmlsdHJvLXRvcGljb3tcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMDgsIDIwOCwgMjA4KTtcclxuXHJcbiAgICAudG9waWNve1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgfVxyXG5cclxuICAgIC5saXN0YVRpcG97XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmljb25pLWFkZHtcclxuICBjb2xvcjogIzE5NkIxMDtcclxuICB3aWR0aDogMzZweDtcclxuICBoZWlnaHQ6IDM2cHg7XHJcbn1cclxuXHJcbi5oZWFkZXItY2FyZHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uY29udGV1ZG8tY2FyZHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxufVxyXG5cclxuLnRvcGljb3tcclxuICBwYWRkaW5nLWJvdHRvbTogNnB4O1xyXG59XHJcblxyXG4uYWNvZXMtY2FyZHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5ibG9jby1jYXJke1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uYWNvZXN7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaWNvbml7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG4uY29udGFnZW17XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB0b3A6IC0xNHB4O1xyXG4gIHJpZ2h0OiAtMTRweDtcclxufVxyXG5cclxuLmN1cnRpcntcclxuICBjb2xvcjogIzE1QUQyRTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 543:
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/clinicas/clinicas.page.html ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"content\">\r\n    <ion-grid style=\"width: 100%; margin-bottom: 34px;\">\r\n      <ion-grid>\r\n        <ion-col size=\"12\" class=\"filtro\">\r\n          <div class=\"filtro-topico\">\r\n            <div class=\"topico\">\r\n              TÓPICO\r\n            </div>\r\n            <ion-select class=\"listaTipo\" (ionChange)=\"buscarDadosFiltro()\" [(ngModel)]=\"filtro\" placeholder=\"Selecione\">\r\n              <ion-select-option value=\"Todos\">Todos</ion-select-option>\r\n              <ion-select-option value=\"Alimentação\">Alimentação</ion-select-option>\r\n              <ion-select-option value=\"Saúde\">Saúde</ion-select-option>\r\n              <ion-select-option value=\"Bem Estar\">Bem Estar</ion-select-option>\r\n              <ion-select-option value=\"Curiosidade\">Curiosidade</ion-select-option>\r\n              <ion-select-option value=\"Dúvida\">Dúvida</ion-select-option>\r\n            </ion-select>\r\n          </div>\r\n        </ion-col>\r\n      </ion-grid>\r\n      <ion-row>\r\n        <ion-col size=\"12\" class=\"bloco-card\">\r\n          <ion-card *ngFor=\"let post of posts\">\r\n            <ion-card-header>\r\n              <ion-card-subtitle class=\"header-card\">\r\n                <span>{{post.nomeUsuario.split(' ').slice(0, 2).join(' ')}}</span>\r\n                <span>{{post.dataAtualizacao | date:'dd/MM/yyyy HH:mm'}}</span>\r\n              </ion-card-subtitle>\r\n            </ion-card-header>\r\n            <ion-card-content class=\"conteudo-card\">\r\n              <div class=\"topico\">{{post.topico}}</div>\r\n              <div>{{post.conteudo}}</div>\r\n            </ion-card-content>\r\n            <ion-card-content class=\"acoes-card\">\r\n              <span class=\"acoes\" style=\"margin-right: 40px;\" (click)=\"verComentarios(post.id)\">\r\n                <ion-icon name=\"chatbox-ellipses-outline\" class=\"iconi\"></ion-icon>\r\n                <ion-badge color=\"dark\" class=\"contagem\">{{post.quantComentarios}}</ion-badge>\r\n              </span>\r\n              <span class=\"acoes\" style=\"margin-right: 10px;\" (click)=\"curtirPost(post.id)\">\r\n                <ion-icon name=\"thumbs-up-outline\" class=\"iconi\" [ngClass]=\"{curtir: post.idsUsuariosCurtidas.includes(this.user.id)}\"></ion-icon>\r\n                <ion-badge color=\"dark\" class=\"contagem\">{{post.idsUsuariosCurtidas.length}}</ion-badge>\r\n              </span>\r\n            </ion-card-content>\r\n          </ion-card>\r\n        </ion-col>\r\n      </ion-row>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n<ion-fab vertical=\"bottom\" style=\"--background: transparent !important\" horizontal=\"end\" slot=\"fixed\">\r\n  <ion-fab-button (click)=\"criarPost()\" style=\"--background: transparent !important\">\r\n    <ion-icon name=\"add-outline\" class=\"iconi-add\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_clinicas_clinicas_module_ts.js.map