(self["webpackChunkpeppaciente"] = self["webpackChunkpeppaciente"] || []).push([["src_app_page_home_adotar_adotar_module_ts"],{

/***/ 6074:
/*!***********************************************************!*\
  !*** ./src/app/page/home/adotar/adotar-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdotarPageRoutingModule": () => (/* binding */ AdotarPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _adotar_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adotar.page */ 4498);




const routes = [
    {
        path: '',
        component: _adotar_page__WEBPACK_IMPORTED_MODULE_0__.AdotarPage
    }
];
let AdotarPageRoutingModule = class AdotarPageRoutingModule {
};
AdotarPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AdotarPageRoutingModule);



/***/ }),

/***/ 5439:
/*!***************************************************!*\
  !*** ./src/app/page/home/adotar/adotar.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdotarPageModule": () => (/* binding */ AdotarPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _adotar_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./adotar-routing.module */ 6074);
/* harmony import */ var _adotar_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adotar.page */ 4498);







let AdotarPageModule = class AdotarPageModule {
};
AdotarPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _adotar_routing_module__WEBPACK_IMPORTED_MODULE_0__.AdotarPageRoutingModule
        ],
        declarations: [_adotar_page__WEBPACK_IMPORTED_MODULE_1__.AdotarPage]
    })
], AdotarPageModule);



/***/ }),

/***/ 4498:
/*!*************************************************!*\
  !*** ./src/app/page/home/adotar/adotar.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdotarPage": () => (/* binding */ AdotarPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_adotar_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./adotar.page.html */ 692);
/* harmony import */ var _adotar_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adotar.page.scss */ 4277);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/class/storage.service */ 6578);
/* harmony import */ var src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/class/url-service */ 2567);
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home.service */ 5699);








let AdotarPage = class AdotarPage {
    constructor(router, storage, urlService, homeService) {
        this.router = router;
        this.storage = storage;
        this.urlService = urlService;
        this.homeService = homeService;
        this.gato = 'https://www.petz.com.br/blog/wp-content/uploads/2021/05/gato-branco-de-olho-azul.jpg';
        this.loading = false;
        this.router.events.subscribe((evt) => {
            if (evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd && this.router.url === `/page/adotar`) {
                this.loading = true;
                this.pageEnter();
            }
        });
    }
    pageEnter() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.user = yield this.storage.get('user');
            const id = yield this.storage.get('idAnimal');
            const token = yield this.storage.get('token');
            yield this.urlService.validateToken(token);
            yield this.getAnimalById(id);
        });
    }
    getAnimalById(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            (yield this.homeService.getAnimalById(id)).subscribe((res) => {
                this.animal = res;
                if (this.animal.imagem !== null) {
                    this.animal.img = `data:${this.animal.imagem.tipo};base64,${this.animal.imagem.dados}`;
                }
                this.loading = false;
            });
        });
    }
    irParaMeusFavoritos() {
        this.router.navigateByUrl('page/pets-favoritos');
    }
    ngOnInit() {
    }
    favoritarAnimal(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const request = {
                idAnimal: id,
                idUsuario: this.user.id
            };
            (yield this.homeService.favoritarAnimal(request)).subscribe(() => {
                this.loading = true;
                this.getAnimalById(id);
                this.loading = false;
            });
        });
    }
};
AdotarPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: src_app_shared_class_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: src_app_shared_class_url_service__WEBPACK_IMPORTED_MODULE_3__.UrlService },
    { type: _home_service__WEBPACK_IMPORTED_MODULE_4__.HomeService }
];
AdotarPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-adotar',
        template: _raw_loader_adotar_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_adotar_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], AdotarPage);



/***/ }),

/***/ 4277:
/*!***************************************************!*\
  !*** ./src/app/page/home/adotar/adotar.page.scss ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  margin-top: 9vh;\n  width: 100%;\n  height: 90%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 0;\n}\n\n.button-area {\n  margin-top: 40px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.button {\n  background-color: #60E677;\n  width: 100%;\n  height: 40px;\n  color: aliceblue;\n  font-size: 16px;\n  text-transform: uppercase;\n}\n\n.animal {\n  position: relative;\n}\n\n.imagem-animal {\n  z-index: 99;\n}\n\n.favoritar-pet {\n  width: 35px;\n  height: 35px;\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 1;\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n  background-color: #9b9b9b;\n  border-radius: 6px;\n}\n\n.isFavorito {\n  color: red;\n}\n\n.isNotFavorito {\n  color: #fcfcfc;\n}\n\n.iconi-add {\n  color: #196B10;\n  width: 36px;\n  height: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkb3Rhci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSw0Q0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFVBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6ImFkb3Rhci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcclxuICBtYXJnaW4tdG9wOiA5dmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA5MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmJ1dHRvbi1hcmVhe1xyXG4gIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MEU2Nzc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5hbmltYWx7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uaW1hZ2VtLWFuaW1hbHtcclxuICB6LWluZGV4OiA5OTtcclxufVxyXG5cclxuLmZhdm9yaXRhci1wZXR7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogMTtcclxuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMzUpIDBweCA1cHggMTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTU1LCAxNTUsIDE1NSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG59XHJcblxyXG4uaXNGYXZvcml0b3tcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG4uaXNOb3RGYXZvcml0b3tcclxuICBjb2xvcjogcmdiKDI1MiwgMjUyLCAyNTIpO1xyXG59XHJcblxyXG4uaWNvbmktYWRke1xyXG4gIGNvbG9yOiAjMTk2QjEwO1xyXG4gIHdpZHRoOiAzNnB4O1xyXG4gIGhlaWdodDogMzZweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ 692:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/page/home/adotar/adotar.page.html ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\r\n  <div class=\"content\">\r\n    <!-- <span *ngIf=\"!loading\">{{mensagem}}</span> -->\r\n    <div class=\"filtro\">\r\n\r\n    </div>\r\n    <div class=\"grid-animais\">\r\n      <div *ngIf=\"loading\" class=\"preloader-wrapper big active\">\r\n        <div class=\"spinner-layer spinner-blue-only\">\r\n          <div class=\"circle-clipper left\">\r\n            <div class=\"circle\"></div>\r\n          </div><div class=\"gap-patch\">\r\n            <div class=\"circle\"></div>\r\n          </div><div class=\"circle-clipper right\">\r\n            <div class=\"circle\"></div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <ion-grid>\r\n        <ion-row >\r\n          <ion-col size=\"12\" class=\"bloco-card\" *ngIf=\"animal\">\r\n            <ion-card>\r\n              <ion-card-header class=\"animal\">\r\n                <ion-img class=\"imagem-animal\" [src]=\"animal.img\" *ngIf=\"animal.imagem !== null\"></ion-img>\r\n                <ion-img class=\"imagem-animal\" [src]=\"gato\" *ngIf=\"animal.imagem === null\"></ion-img>\r\n                <ion-icon\r\n                  name=\"heart\"\r\n                  class=\"favoritar-pet\"\r\n                  [ngClass]=\"{\r\n                    isFavorito: animal.idsUsuariosQueFavoritaram.includes(this.user.id),\r\n                    isNotFavorito: !animal.idsUsuariosQueFavoritaram.includes(this.user.id)\r\n                  }\" (click)=\"favoritarAnimal(animal.id)\"></ion-icon>\r\n                <ion-card-title class=\"nome\">{{animal.nome}}</ion-card-title>\r\n              </ion-card-header>\r\n              <ion-card-content class=\"local\">\r\n                <ion-row >\r\n                  <ion-col size=\"12\">\r\n                    Especie: {{animal.tipo}}\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row >\r\n                  <ion-col size=\"6\" >\r\n                    Idade: {{animal.idade}}\r\n                  </ion-col>\r\n                  <ion-col size=\"6\">\r\n                    Peso: {{animal.peso}} Kg\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row >\r\n                  <ion-col size=\"6\">\r\n                    Pelagem: {{animal.pelagem}}\r\n                  </ion-col>\r\n                  <ion-col size=\"6\">\r\n                    Sexo: {{animal.sexo}}\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row *ngIf=\"animal.tipo === 'Gato'\">\r\n                  <ion-col size=\"12\">\r\n                    Vermifugado: {{animal.vermifugado}}\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row >\r\n                  <ion-col size=\"12\">\r\n                    <p>Vacinas: {{animal.vacina}} </p>\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row >\r\n                  <ion-col size=\"12\">\r\n                    Doenças: {{animal.doenca}}\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row >\r\n                  <ion-col size=\"12\">\r\n                    Detalhes: {{animal.descricao}}\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row >\r\n                  <ion-col size=\"12\">\r\n                    Rua: {{animal.rua}}\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row >\r\n                  <ion-col size=\"12\">\r\n                    Bairro: {{animal.bairro}}\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row >\r\n                  <ion-col size=\"12\">\r\n                    Cidade: {{animal.cidade}}\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row >\r\n                  <ion-col size=\"12\">\r\n                    Doador: {{animal.nomeDoador}}\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row >\r\n                  <ion-col size=\"12\">\r\n                    Telefone: {{animal.telefone1}}\r\n                  </ion-col>\r\n                </ion-row>\r\n                <ion-row *ngIf=\"animal.telefone2 !== ''\">\r\n                  <ion-col size=\"12\">\r\n                    Telefone: {{animal.telefone2}}\r\n                  </ion-col>\r\n                </ion-row>\r\n                <div class=\"row button-area\">\r\n                  <div class=\"col s12\">\r\n                    <button class=\"button\" expand=\"block\">Falar com o doador</button>\r\n                  </div>\r\n                </div>\r\n              </ion-card-content>\r\n            </ion-card>\r\n          </ion-col>\r\n        </ion-row>\r\n      </ion-grid>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-fab vertical=\"bottom\" style=\"--background: trasparent !important\"  horizontal=\"start\" slot=\"fixed\" *ngIf=\"animal && animal.idsUsuariosQueFavoritaram.includes(this.user.id)\">\r\n  <ion-fab-button style=\"--background: trasparent !important\" (click)=\"irParaMeusFavoritos()\">\r\n    <ion-icon name=\"arrow-back-outline\" class=\"iconi-add\"></ion-icon>\r\n  </ion-fab-button>\r\n</ion-fab>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_page_home_adotar_adotar_module_ts.js.map