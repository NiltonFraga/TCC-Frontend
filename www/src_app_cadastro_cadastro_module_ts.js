(self["webpackChunkpeppaciente"] = self["webpackChunkpeppaciente"] || []).push([["src_app_cadastro_cadastro_module_ts"],{

/***/ 6762:
/*!***********************************************************************!*\
  !*** ./node_modules/cpf-cnpj-validator/dist/cpf-cnpj-validator.es.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "cpf": () => (/* binding */ cpf),
/* harmony export */   "cnpj": () => (/* binding */ cnpj),
/* harmony export */   "validator": () => (/* binding */ validator)
/* harmony export */ });
/*!
 * cpf-cnpj-validator v1.0.3
 * (c) 2020-present Carvalho, Vinicius Luiz <carvalho.viniciusluiz@gmail.com>
 * Released under the MIT License.
 */
const BLACKLIST = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999',
    '12345678909'
];
const STRICT_STRIP_REGEX = /[.-]/g;
const LOOSE_STRIP_REGEX = /[^\d]/g;
const verifierDigit = (digits) => {
    const numbers = digits
        .split('')
        .map(number => {
        return parseInt(number, 10);
    });
    const modulus = numbers.length + 1;
    const multiplied = numbers.map((number, index) => number * (modulus - index));
    const mod = multiplied.reduce((buffer, number) => buffer + number) % 11;
    return (mod < 2 ? 0 : 11 - mod);
};
const strip = (number, strict) => {
    const regex = strict ? STRICT_STRIP_REGEX : LOOSE_STRIP_REGEX;
    return (number || '').replace(regex, '');
};
const format = (number) => {
    return strip(number).replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4');
};
const isValid = (number, strict) => {
    const stripped = strip(number, strict);
    if (!stripped) {
        return false;
    }
    if (stripped.length !== 11) {
        return false;
    }
    if (BLACKLIST.includes(stripped)) {
        return false;
    }
    let numbers = stripped.substr(0, 9);
    numbers += verifierDigit(numbers);
    numbers += verifierDigit(numbers);
    return numbers.substr(-2) === stripped.substr(-2);
};
const generate = (formatted) => {
    let numbers = '';
    for (let i = 0; i < 9; i += 1) {
        numbers += Math.floor(Math.random() * 9);
    }
    numbers += verifierDigit(numbers);
    numbers += verifierDigit(numbers);
    return (formatted ? format(numbers) : numbers);
};
var cpf = {
    verifierDigit,
    strip,
    format,
    isValid,
    generate,
};

const BLACKLIST$1 = [
    '00000000000000',
    '11111111111111',
    '22222222222222',
    '33333333333333',
    '44444444444444',
    '55555555555555',
    '66666666666666',
    '77777777777777',
    '88888888888888',
    '99999999999999'
];
const STRICT_STRIP_REGEX$1 = /[-\\/.]/g;
const LOOSE_STRIP_REGEX$1 = /[^\d]/g;
const verifierDigit$1 = (digits) => {
    let index = 2;
    const reverse = digits.split('').reduce((buffer, number) => {
        return [parseInt(number, 10)].concat(buffer);
    }, []);
    const sum = reverse.reduce((buffer, number) => {
        buffer += number * index;
        index = (index === 9 ? 2 : index + 1);
        return buffer;
    }, 0);
    const mod = sum % 11;
    return (mod < 2 ? 0 : 11 - mod);
};
const strip$1 = (number, strict) => {
    const regex = strict ? STRICT_STRIP_REGEX$1 : LOOSE_STRIP_REGEX$1;
    return (number || '').replace(regex, '');
};
const format$1 = (number) => {
    return strip$1(number).replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/, '$1.$2.$3/$4-$5');
};
const isValid$1 = (number, strict) => {
    const stripped = strip$1(number, strict);
    if (!stripped) {
        return false;
    }
    if (stripped.length !== 14) {
        return false;
    }
    if (BLACKLIST$1.includes(stripped)) {
        return false;
    }
    let numbers = stripped.substr(0, 12);
    numbers += verifierDigit$1(numbers);
    numbers += verifierDigit$1(numbers);
    return numbers.substr(-2) === stripped.substr(-2);
};
const generate$1 = (formatted) => {
    let numbers = '';
    for (let i = 0; i < 12; i += 1) {
        numbers += Math.floor(Math.random() * 9);
    }
    numbers += verifierDigit$1(numbers);
    numbers += verifierDigit$1(numbers);
    return (formatted ? format$1(numbers) : numbers);
};
var cnpj = {
    verifierDigit: verifierDigit$1,
    strip: strip$1,
    format: format$1,
    isValid: isValid$1,
    generate: generate$1
};

const validator = joi => ({
    type: 'document',
    base: joi.string(),
    messages: {
        'document.cpf': 'CPF inválido',
        'document.cnpj': 'CNPJ inválido'
    },
    rules: {
        cpf: {
            validate(value, helpers, args, options) {
                if (!cpf.isValid(value)) {
                    return helpers.error('document.cpf');
                }
                return value;
            }
        },
        cnpj: {
            validate(value, helpers, args, options) {
                if (!cnpj.isValid(value)) {
                    return helpers.error('document.cnpj');
                }
                return value;
            }
        }
    }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validator);



/***/ }),

/***/ 4981:
/*!*****************************************************!*\
  !*** ./src/app/cadastro/cadastro-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CadastroPageRoutingModule": () => (/* binding */ CadastroPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cadastro.page */ 4809);




const routes = [
    {
        path: '',
        component: _cadastro_page__WEBPACK_IMPORTED_MODULE_0__.CadastroPage
    }
];
let CadastroPageRoutingModule = class CadastroPageRoutingModule {
};
CadastroPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CadastroPageRoutingModule);



/***/ }),

/***/ 8379:
/*!*********************************************!*\
  !*** ./src/app/cadastro/cadastro.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CadastroPageModule": () => (/* binding */ CadastroPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 8583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cadastro-routing.module */ 4981);
/* harmony import */ var _cadastro_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cadastro.page */ 4809);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 1841);
/* harmony import */ var _shared_class_url_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/class/url-service */ 2567);
/* harmony import */ var _cadastro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro.service */ 7725);










let CadastroPageModule = class CadastroPageModule {
};
CadastroPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _cadastro_routing_module__WEBPACK_IMPORTED_MODULE_0__.CadastroPageRoutingModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClientModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule
        ],
        declarations: [_cadastro_page__WEBPACK_IMPORTED_MODULE_1__.CadastroPage],
        providers: [
            _shared_class_url_service__WEBPACK_IMPORTED_MODULE_2__.UrlService,
            _cadastro_service__WEBPACK_IMPORTED_MODULE_3__.CadastroService
        ],
    })
], CadastroPageModule);



/***/ }),

/***/ 4809:
/*!*******************************************!*\
  !*** ./src/app/cadastro/cadastro.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CadastroPage": () => (/* binding */ CadastroPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _raw_loader_cadastro_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./cadastro.page.html */ 5525);
/* harmony import */ var _cadastro_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cadastro.page.scss */ 3583);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 9895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 476);
/* harmony import */ var _loading_loading_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../loading/loading.page */ 8532);
/* harmony import */ var _cadastro_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro.service */ 7725);
/* harmony import */ var cpf_cnpj_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cpf-cnpj-validator */ 6762);










let CadastroPage = class CadastroPage {
    constructor(toastController, modalController, cadastroService, fb, router) {
        this.toastController = toastController;
        this.modalController = modalController;
        this.cadastroService = cadastroService;
        this.fb = fb;
        this.router = router;
        this.tipo = '';
        this.cadastroForm = this.fb.group({
            nome: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            perfil: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            documento: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            email: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]),
            telefone1: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            telefone2: this.fb.control(''),
            senha: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]),
            confimeSenha: this.fb.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required])
        });
    }
    ngOnInit() {
        const elems = document.querySelectorAll('select');
        M.FormSelect.init(elems, {});
    }
    cadastrar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (this.cadastroForm.get('senha').value !== this.cadastroForm.get('confimeSenha').value) {
                this.toastController.create({
                    message: 'As senhas não coincidem',
                    duration: 2000
                }).then(toast => {
                    toast.present();
                });
                return;
            }
            if (this.cadastroForm.get('perfil').value === 'pessoa_fisica' && !cpf_cnpj_validator__WEBPACK_IMPORTED_MODULE_4__.cpf.isValid(this.cadastroForm.get('documento').value.toString())) {
                this.toastController.create({
                    message: 'Campo CPF com valor incorreto',
                    duration: 2000
                }).then(toast => {
                    toast.present();
                });
                return;
            }
            if (this.cadastroForm.get('perfil').value === 'pessoa_juridica' && !cpf_cnpj_validator__WEBPACK_IMPORTED_MODULE_4__.cnpj.isValid(this.cadastroForm.get('documento').value.toString())) {
                this.toastController.create({
                    message: 'Campo CNPF com valor incorreto',
                    duration: 2000
                }).then(toast => {
                    toast.present();
                });
                return;
            }
            const request = {
                nome: this.cadastroForm.get('nome').value,
                documento: this.cadastroForm.get('documento').value.toString(),
                email: this.cadastroForm.get('email').value,
                telefone1: this.cadastroForm.get('telefone1').value.toString(),
                telefone2: this.cadastroForm.get('telefone2').value.toString(),
                senha: this.cadastroForm.get('senha').value,
                foto: 'asdjnasodfajsdiufasidufniubwiefubri',
                role: this.cadastroForm.get('perfil').value,
            };
            console.log(request);
            (yield this.cadastroService.cadastrar(request))
                .subscribe(() => {
                this.toastController.create({
                    message: 'Cadastrado!',
                    duration: 2000
                }).then(toast => {
                    toast.present();
                    this.router.navigateByUrl('/login');
                });
            });
        });
    }
    showLoadingScreen() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const loadingScreen = yield this.modalController.create({
                component: _loading_loading_page__WEBPACK_IMPORTED_MODULE_2__.LoadingPage
            });
            return yield loadingScreen.present();
        });
    }
    closeLoadingScreen() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.modalController.getTop().then(loader => {
                if (loader) {
                    loader.dismiss();
                }
            });
        });
    }
};
CadastroPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController },
    { type: _cadastro_service__WEBPACK_IMPORTED_MODULE_3__.CadastroService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router }
];
CadastroPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-cadastro',
        template: _raw_loader_cadastro_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cadastro_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], CadastroPage);



/***/ }),

/***/ 7725:
/*!**********************************************!*\
  !*** ./src/app/cadastro/cadastro.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CadastroService": () => (/* binding */ CadastroService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7716);
/* harmony import */ var _shared_class_url_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/class/url-service */ 2567);



let CadastroService = class CadastroService {
    constructor(urlService) {
        this.urlService = urlService;
    }
    cadastrar(request) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            return yield this.urlService.sendRequestPost('/Login/CriarUsuario', JSON.stringify(request));
        });
    }
};
CadastroService.ctorParameters = () => [
    { type: _shared_class_url_service__WEBPACK_IMPORTED_MODULE_0__.UrlService }
];
CadastroService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], CadastroService);



/***/ }),

/***/ 3583:
/*!*********************************************!*\
  !*** ./src/app/cadastro/cadastro.page.scss ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (".content {\n  margin-top: 6vh;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.button-area {\n  margin-top: 40px;\n}\n\n.row {\n  margin: 0;\n}\n\nion-header {\n  --ion-background-color: #15AD2E;\n}\n\nion-header ion-title {\n  font-weight: bold;\n  color: aliceblue;\n}\n\nion-header ion-icon {\n  width: 40px;\n  height: 40px;\n  color: aliceblue;\n}\n\n.ajuste-posicao {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\nlabel {\n  color: black;\n  font-size: 12px;\n  margin-right: 12px;\n}\n\n.button {\n  background-color: #60E677;\n  width: 100%;\n  height: 40px;\n  color: aliceblue;\n}\n\n.mensagem-erro {\n  font-size: 14px;\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhZGFzdHJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxTQUFBO0FBQ0Y7O0FBRUE7RUFDRSwrQkFBQTtBQUNGOztBQUNFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUlBO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QUFERjs7QUFJQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFERjs7QUFJQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7QUFERiIsImZpbGUiOiJjYWRhc3Ryby5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVudHtcclxuICBtYXJnaW4tdG9wOiA2dmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9uLWFyZWF7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLnJvd3tcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmlvbi1oZWFkZXJ7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzE1QUQyRTtcclxuXHJcbiAgaW9uLXRpdGxle1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogYWxpY2VibHVlO1xyXG4gIH1cclxuXHJcbiAgaW9uLWljb257XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGNvbG9yOiBhbGljZWJsdWU7XHJcbiAgfVxyXG59XHJcblxyXG4uYWp1c3RlLXBvc2ljYW97XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxubGFiZWx7XHJcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG59XHJcblxyXG4uYnV0dG9ue1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2MEU2Nzc7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGNvbG9yOiBhbGljZWJsdWU7XHJcbn1cclxuXHJcbi5tZW5zYWdlbS1lcnJve1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ 5525:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cadastro/cadastro.page.html ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\r\n  <ion-toolbar>\r\n    <div style=\"display: flex; justify-content: space-between; padding-right: 10px;\">\r\n      <ion-title>Criar Conta</ion-title>\r\n      <!-- <ion-button routerLink=\"/login\" color=\"secondary\">Voltar</ion-button> -->\r\n      <ion-icon routerLink=\"/login\" name=\"chevron-back-outline\"></ion-icon>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"content\">\r\n    <ion-grid style=\"width: 100%;\">\r\n      <form [formGroup]=\"cadastroForm\">\r\n        <ion-row>\r\n          <ion-col class=\"item-form\" size=\"12\">\r\n            <label color=\"primary\">Nome Completo: </label>\r\n            <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.nome.errors\">*</span>\r\n            <input type=\"text\" formControlName=\"nome\" />\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"item-form\" size=\"12\" class=\"ajuste-posicao\">\r\n            <label color=\"primary\">Tipo de Perfil: </label>\r\n            <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.perfil.errors\">*</span>\r\n            <select class=\"listaTipo\" formControlName=\"perfil\" [(ngModel)]=\"tipo\" placeholder=\"Selecione...\">\r\n              <option value=\"pessoa_fisica\">Pessoa Fisica</option>\r\n              <option value=\"pessoa_juridica\">Pessoa Juridica</option>\r\n            </select>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"tipo === 'pessoa_fisica'\">\r\n          <ion-col class=\"item-form\" size=\"12\" class=\"ajuste-posicao\" >\r\n            <label color=\"primary\">CPF: </label>\r\n            <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.documento.errors\">*</span>\r\n            <input type=\"number\" formControlName=\"documento\"/>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row *ngIf=\"tipo === 'pessoa_juridica'\">\r\n          <ion-col class=\"item-form\" size=\"12\" class=\"ajuste-posicao\">\r\n            <label color=\"primary\">CNPJ: </label>\r\n            <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.documento.errors\">*</span>\r\n            <input type=\"number\" formControlName=\"documento\" />\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"item-form\" size=\"12\" class=\"ajuste-posicao\">\r\n            <label color=\"primary\">Email: </label>\r\n            <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.email.errors || cadastroForm.controls.email.errors?.email\">*</span>\r\n            <input type=\"email\" formControlName=\"email\"/>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"item-form\" size=\"12\" class=\"ajuste-posicao\">\r\n            <label color=\"primary\">Telefone: </label>\r\n            <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.telefone1.errors\">*</span>\r\n            <input type=\"number\" formControlName=\"telefone1\"/>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"item-form\" size=\"12\" class=\"ajuste-posicao\">\r\n            <label color=\"primary\">Telefone: </label>\r\n            <input type=\"number\" formControlName=\"telefone2\"/>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col class=\"item-form\" size=\"6\">\r\n            <label color=\"primary\">Senha: </label>\r\n            <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.senha.errors\">*</span>\r\n            <input type=\"password\" formControlName=\"senha\"/>\r\n          </ion-col>\r\n          <ion-col class=\"item-form\" size=\"6\">\r\n            <label color=\"primary\">Confirme a senha: </label>\r\n            <span class=\"mensagem-erro\" *ngIf=\"cadastroForm.controls.confimeSenha.errors\">*</span>\r\n            <input type=\"password\" formControlName=\"confimeSenha\"/>\r\n          </ion-col>\r\n        </ion-row>\r\n        <ion-row>\r\n          <ion-col  size=\"12\">\r\n            <button (click)=\"cadastrar()\" class=\"button\" [disabled]=\"!cadastroForm.valid\">Cadastrar</button>\r\n          </ion-col>\r\n        </ion-row>\r\n      </form>\r\n    </ion-grid>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=src_app_cadastro_cadastro_module_ts.js.map