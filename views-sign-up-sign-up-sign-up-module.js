(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-sign-up-sign-up-sign-up-module"],{

/***/ "./src/app/views/sign-up/sign-up.component.html":
/*!******************************************************!*\
  !*** ./src/app/views/sign-up/sign-up.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center form_container\">\n\n  <div class=\"first-step\" *ngIf=\"first\">\n    <p>\n      My Name is \n    </p>\n    <div class=\"input-group mb-3\">\n      <input type=\"text\" name=\"\" class=\"form-control input_user\" value=\"\" placeholder=\"Max\">\n    </div>\n    <div class=\"d-flex justify-content-center mt-3 login_container\">\n      <button type=\"button\" (click)=\"First()\" name=\"button\" class=\"btn login_btn\">Next</button>\n    </div>\n  </div>\n  <div class=\"second-step\" *ngIf=\"second\">\n    <p>\n      My Birthday is\n    </p>\n    <div class=\"input-group mb-3\">\n      <input type=\"text\" name=\"\" class=\"form-control input_user\" value=\"\" placeholder=\"12-1-2019\">\n    </div>\n    <div class=\"d-flex justify-content-center mt-3 login_container\">\n      <button type=\"button\" (click)=\"Second()\" name=\"button\" class=\"btn login_btn\">Next</button>\n    </div>\n  </div>\n  <div class=\"third-step\" *ngIf=\"third\">\n    <p>\n      I'm A \n    </p>\n    <div class=\"input-group mb-3\">\n      <input type=\"text\" name=\"\" class=\"form-control input_user\" value=\"\" placeholder=\"Dog\">\n    </div>\n    <div class=\"d-flex justify-content-center mt-3 login_container\">\n      <button type=\"button\" (click)=\"Third()\" name=\"button\" class=\"btn login_btn\">Next</button>\n    </div>\n  </div>\n  <div class=\"fourth-step\" *ngIf=\"fourth\">\n    <p>\n      My Type Is\n    </p>\n    <div class=\"input-group mb-3\">\n      <input type=\"text\" name=\"\" class=\"form-control input_user\" value=\"\" placeholder=\"Type\">\n    </div>\n    <div class=\"d-flex justify-content-center mt-3 login_container\">\n      <button type=\"button\" (click)=\"Fourth()\" name=\"button\" class=\"btn login_btn\">Next</button>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/views/sign-up/sign-up.component.scss":
/*!******************************************************!*\
  !*** ./src/app/views/sign-up/sign-up.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  font-size: 300%;\n  padding: 20%; }\n\n.form_container {\n  margin-top: 100px; }\n\n.login_btn {\n  margin-top: 10%;\n  width: 100%;\n  background: #c0392b !important;\n  color: white !important; }\n\n.login_btn:focus {\n  box-shadow: none !important;\n  outline: 0px !important; }\n\n.login_container {\n  padding: 0 2rem; }\n\n.input-group-text {\n  background: #c0392b !important;\n  color: white !important;\n  border: 0 !important;\n  border-radius: 0.25rem 0 0 0.25rem !important; }\n\n.input_user,\n.input_pass:focus {\n  box-shadow: none !important;\n  outline: 0px !important; }\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #c0392b !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thaHJhYmEvRGVza3RvcC9wb3dzL3NyYy9hcHAvdmlld3Mvc2lnbi11cC9zaWduLXVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQWU7RUFDZixhQUFZLEVBQ2Y7O0FBQ0Q7RUFDSSxrQkFBaUIsRUFDcEI7O0FBQ0Q7RUFDSSxnQkFBZTtFQUNmLFlBQVc7RUFDWCwrQkFBOEI7RUFDOUIsd0JBQXVCLEVBQzFCOztBQUNEO0VBQ0ksNEJBQTJCO0VBQzNCLHdCQUF1QixFQUMxQjs7QUFDRDtFQUNJLGdCQUFlLEVBQ2xCOztBQUNEO0VBQ0ksK0JBQThCO0VBQzlCLHdCQUF1QjtFQUN2QixxQkFBb0I7RUFDcEIsOENBQTZDLEVBQ2hEOztBQUNEOztFQUVJLDRCQUEyQjtFQUMzQix3QkFBdUIsRUFDMUI7O0FBQ0Q7RUFDSSxxQ0FBb0MsRUFDdkMiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwe1xuICAgIGZvbnQtc2l6ZTogMzAwJTtcbiAgICBwYWRkaW5nOiAyMCU7XG59XG4uZm9ybV9jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuLmxvZ2luX2J0biB7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNjMDM5MmIgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5sb2dpbl9idG46Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBvdXRsaW5lOiAwcHggIWltcG9ydGFudDtcbn1cbi5sb2dpbl9jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAgMnJlbTtcbn1cbi5pbnB1dC1ncm91cC10ZXh0IHtcbiAgICBiYWNrZ3JvdW5kOiAjYzAzOTJiICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAwIDAgMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuLmlucHV0X3VzZXIsXG4uaW5wdXRfcGFzczpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIG91dGxpbmU6IDBweCAhaW1wb3J0YW50O1xufVxuLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MwMzkyYiAhaW1wb3J0YW50O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/views/sign-up/sign-up.component.ts":
/*!****************************************************!*\
  !*** ./src/app/views/sign-up/sign-up.component.ts ***!
  \****************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(router) {
        this.router = router;
        this.first = true;
        this.second = false;
        this.third = false;
        this.fourth = false;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.First = function () {
        this.first = false;
        this.second = true;
    };
    SignUpComponent.prototype.Second = function () {
        this.second = false;
        this.third = true;
    };
    SignUpComponent.prototype.Third = function () {
        this.third = false;
        this.fourth = true;
    };
    SignUpComponent.prototype.Fourth = function () {
        this.router.navigate(['profile']);
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/views/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/views/sign-up/sign-up.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/views/sign-up/sign-up/sign-up-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/sign-up/sign-up/sign-up-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SignUpRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpRoutingModule", function() { return SignUpRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _sign_up_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sign-up.component */ "./src/app/views/sign-up/sign-up.component.ts");




var routes = [
    {
        path: '',
        component: _sign_up_component__WEBPACK_IMPORTED_MODULE_3__["SignUpComponent"]
    }
];
var SignUpRoutingModule = /** @class */ (function () {
    function SignUpRoutingModule() {
    }
    SignUpRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SignUpRoutingModule);
    return SignUpRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/sign-up/sign-up/sign-up.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/sign-up/sign-up/sign-up.module.ts ***!
  \*********************************************************/
/*! exports provided: SignUpModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpModule", function() { return SignUpModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sign-up-routing.module */ "./src/app/views/sign-up/sign-up/sign-up-routing.module.ts");
/* harmony import */ var _sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sign-up.component */ "./src/app/views/sign-up/sign-up.component.ts");





var SignUpModule = /** @class */ (function () {
    function SignUpModule() {
    }
    SignUpModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _sign_up_routing_module__WEBPACK_IMPORTED_MODULE_3__["SignUpRoutingModule"]
            ]
        })
    ], SignUpModule);
    return SignUpModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-sign-up-sign-up-sign-up-module.js.map