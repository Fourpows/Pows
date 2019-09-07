(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-login-login-login-module"],{

/***/ "./src/app/views/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/views/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<div class=\"container h-100\">\n\t\t<div class=\"d-flex justify-content-center h-100\">\n\t\t\t<div class=\"user_card\">\n\t\t\t\t<div class=\"d-flex justify-content-center\">\n\t\t\t\t\t<div class=\"brand_logo_container\">\n\t\t\t\t\t\t<img src=\"../assets/pows.jpeg\" class=\"brand_logo\" alt=\"Logo\">\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"d-flex justify-content-center form_container\">\n\t\t\t\t\t<form>\n\t\t\t\t\t\t<div class=\"input-group mb-3\">\n\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-text\"><i class=\"fas fa-user\"></i></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<input type=\"text\" name=\"\" class=\"form-control input_user\" value=\"\" placeholder=\"username\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"input-group mb-2\">\n\t\t\t\t\t\t\t<div class=\"input-group-append\">\n\t\t\t\t\t\t\t\t<span class=\"input-group-text\"><i class=\"fas fa-key\"></i></span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<input type=\"password\" name=\"\" class=\"form-control input_pass\" value=\"\" placeholder=\"password\">\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t<div class=\"custom-control custom-checkbox\">\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" class=\"custom-control-input\" id=\"customControlInline\">\n\t\t\t\t\t\t\t\t<label class=\"custom-control-label\" for=\"customControlInline\">Remember me</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n          <div class=\"d-flex justify-content-center mt-3 login_container\">\n            <button type=\"button\" name=\"button\" class=\"btn login_btn\">Login</button>\n          </div>\n\t\t\t\t<div class=\"mt-4\">\n\t\t\t\t\t<div class=\"d-flex justify-content-center links\">\n\t\t\t\t\t\tDon't have an account? <a href=\"#\" class=\"ml-2\">Sign Up</a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"d-flex justify-content-center links\">\n\t\t\t\t\t\t<a href=\"#\">Forgot your password?</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>"

/***/ }),

/***/ "./src/app/views/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/views/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body,\nhtml {\n  margin: 0;\n  padding: 0;\n  height: 100%;\n  background: #60a3bc !important; }\n\n.user_card {\n  height: 400px;\n  width: 350px;\n  margin-top: 25%;\n  margin-bottom: auto;\n  background: #f39c12;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  padding: 10px;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -moz-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  border-radius: 5px; }\n\n.brand_logo_container {\n  position: absolute;\n  height: 170px;\n  width: 170px;\n  top: -75px;\n  border-radius: 50%;\n  background: #60a3bc;\n  padding: 10px;\n  text-align: center; }\n\n.brand_logo {\n  height: 150px;\n  width: 150px;\n  border-radius: 50%;\n  border: 2px solid white; }\n\n.form_container {\n  margin-top: 100px; }\n\n.login_btn {\n  width: 100%;\n  background: #c0392b !important;\n  color: white !important; }\n\n.login_btn:focus {\n  box-shadow: none !important;\n  outline: 0px !important; }\n\n.login_container {\n  padding: 0 2rem; }\n\n.input-group-text {\n  background: #c0392b !important;\n  color: white !important;\n  border: 0 !important;\n  border-radius: 0.25rem 0 0 0.25rem !important; }\n\n.input_user,\n.input_pass:focus {\n  box-shadow: none !important;\n  outline: 0px !important; }\n\n.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\n  background-color: #c0392b !important; }\n\n@media (max-width: 414px) {\n  .user_card {\n    height: 600px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2thaHJhYmEvRGVza3RvcC9wb3dzL3NyYy9hcHAvdmlld3MvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0VBRUksVUFBUztFQUNULFdBQVU7RUFDVixhQUFZO0VBQ1osK0JBQThCLEVBQ2pDOztBQUNEO0VBQ0ksY0FBYTtFQUNiLGFBQVk7RUFDWixnQkFBZTtFQUNmLG9CQUFtQjtFQUNuQixvQkFBbUI7RUFDbkIsbUJBQWtCO0VBQ2xCLGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsdUJBQXNCO0VBQ3RCLGNBQWE7RUFDYiw2RUFBNEU7RUFDNUUscUZBQW9GO0VBQ3BGLGtGQUFpRjtFQUNqRixtQkFBa0IsRUFFckI7O0FBQ0Q7RUFDSSxtQkFBa0I7RUFDbEIsY0FBYTtFQUNiLGFBQVk7RUFDWixXQUFVO0VBQ1YsbUJBQWtCO0VBQ2xCLG9CQUFtQjtFQUNuQixjQUFhO0VBQ2IsbUJBQWtCLEVBQ3JCOztBQUNEO0VBQ0ksY0FBYTtFQUNiLGFBQVk7RUFDWixtQkFBa0I7RUFDbEIsd0JBQXVCLEVBQzFCOztBQUNEO0VBQ0ksa0JBQWlCLEVBQ3BCOztBQUNEO0VBQ0ksWUFBVztFQUNYLCtCQUE4QjtFQUM5Qix3QkFBdUIsRUFDMUI7O0FBQ0Q7RUFDSSw0QkFBMkI7RUFDM0Isd0JBQXVCLEVBQzFCOztBQUNEO0VBQ0ksZ0JBQWUsRUFDbEI7O0FBQ0Q7RUFDSSwrQkFBOEI7RUFDOUIsd0JBQXVCO0VBQ3ZCLHFCQUFvQjtFQUNwQiw4Q0FBNkMsRUFDaEQ7O0FBQ0Q7O0VBRUksNEJBQTJCO0VBQzNCLHdCQUF1QixFQUMxQjs7QUFDRDtFQUNJLHFDQUFvQyxFQUN2Qzs7QUFDRDtFQUVJO0lBQ0ksY0FBYSxFQUNoQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJib2R5LFxuaHRtbCB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICM2MGEzYmMgIWltcG9ydGFudDtcbn1cbi51c2VyX2NhcmQge1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDM1MHB4O1xuICAgIG1hcmdpbi10b3A6IDI1JTtcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xuICAgIGJhY2tncm91bmQ6ICNmMzljMTI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xuICAgIC1tb3otYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbn1cbi5icmFuZF9sb2dvX2NvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogMTcwcHg7XG4gICAgd2lkdGg6IDE3MHB4O1xuICAgIHRvcDogLTc1cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQ6ICM2MGEzYmM7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYnJhbmRfbG9nbyB7XG4gICAgaGVpZ2h0OiAxNTBweDtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHdoaXRlO1xufVxuLmZvcm1fY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cbi5sb2dpbl9idG4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICNjMDM5MmIgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cbi5sb2dpbl9idG46Zm9jdXMge1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgICBvdXRsaW5lOiAwcHggIWltcG9ydGFudDtcbn1cbi5sb2dpbl9jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDAgMnJlbTtcbn1cbi5pbnB1dC1ncm91cC10ZXh0IHtcbiAgICBiYWNrZ3JvdW5kOiAjYzAzOTJiICFpbXBvcnRhbnQ7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAwIDAgMC4yNXJlbSAhaW1wb3J0YW50O1xufVxuLmlucHV0X3VzZXIsXG4uaW5wdXRfcGFzczpmb2N1cyB7XG4gICAgYm94LXNoYWRvdzogbm9uZSAhaW1wb3J0YW50O1xuICAgIG91dGxpbmU6IDBweCAhaW1wb3J0YW50O1xufVxuLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2MwMzkyYiAhaW1wb3J0YW50O1xufVxuQG1lZGlhKG1heC13aWR0aDo0MTRweCApXG57XG4gICAgLnVzZXJfY2FyZHtcbiAgICAgICAgaGVpZ2h0OiA2MDBweDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/views/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/views/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/views/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/views/login/login/login-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/login/login/login-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    }
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/login/login/login.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/login/login/login.module.ts ***!
  \***************************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/views/login/login/login-routing.module.ts");





var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-login-login-login-module.js.map