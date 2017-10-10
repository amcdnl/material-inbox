webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sidenav-nav {\n  width: 250px;\n  padding: 5px; }\n  .sidenav-nav mat-list,\n  .sidenav-nav mat-list-item,\n  .sidenav-nav mat-list-item button {\n    display: block;\n    width: 100%; }\n  .sidenav-nav mat-list-item button {\n    text-align: left;\n    padding: 10px 20px;\n    color: #656565; }\n  .sidenav-nav mat-list-item mat-icon {\n    margin-right: 10px; }\n\n.sidenav-content {\n  height: 100%; }\n\n.sidenav-container {\n  height: 100%; }\n\n.primary-toolbar {\n  transition: background .15s;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28); }\n\ncontent {\n  display: block;\n  width: 85%;\n  margin: 30px auto;\n  font-size: 90%; }\n\n.category-title {\n  display: block;\n  color: #616161;\n  line-height: 24px;\n  margin: 20px 0 8px;\n  padding: 0 24px; }\n\nhr {\n  border-top: solid 1px #e0e0e0;\n  border-bottom: none; }\n\n.new-fab.mat-fab {\n  position: absolute;\n  right: 25px;\n  bottom: 25px; }\n\n.search-col {\n  line-height: 62px;\n  text-align: center; }\n\n.search-bar {\n  background: #6097f6;\n  border-radius: 2px;\n  min-width: 144px;\n  outline: none;\n  color: #FFF;\n  border: none;\n  height: 38px;\n  line-height: 38px;\n  width: 100%;\n  padding: 0 30px;\n  font-weight: 100;\n  font-size: 80%;\n  max-width: 550px;\n  margin: 0 auto; }\n  .search-bar::-webkit-input-placeholder {\n    color: #FFF; }\n  .search-bar:-ms-input-placeholder {\n    color: #FFF; }\n  .search-bar::placeholder {\n    color: #FFF; }\n  .search-bar::before {\n    box-shadow: inset -24px 0 12px -12px #898984;\n    transition: box-shadow .15s; }\n\n.mat-toolbar-layout {\n  width: 100%; }\n\n.pin-toggle {\n  margin-left: 10px; }\n\n.avatar {\n  display: inline-block;\n  border-radius: 50%;\n  height: 28px;\n  width: 28px;\n  color: #FFF;\n  text-align: center;\n  line-height: 28px;\n  font-size: 12px; }\n  .avatar.accent-1 {\n    background: #7b1fa2; }\n  .avatar.large {\n    height: 32px;\n    width: 32px;\n    line-height: 32px; }\n\n.avatar-col {\n  text-align: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data__ = __webpack_require__("../../../../../src/app/data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__new_message_new_message_component__ = __webpack_require__("../../../../../src/app/new-message/new-message.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(snackBar, dialog) {
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.messages = __WEBPACK_IMPORTED_MODULE_2__data__["a" /* messages */];
    }
    AppComponent.prototype.onRemove = function (index) {
        var copy = this.messages.slice();
        copy.splice(index, 1);
        this.messages = copy;
    };
    AppComponent.prototype.onNewMessage = function (data) {
        var _this = this;
        if (data === void 0) { data = {}; }
        var dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__new_message_new_message_component__["a" /* NewMessageComponent */], {
            width: '75%',
            panelClass: 'new-message-dialog',
            data: data
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.snackBar.open('Email sent!', null, {
                    duration: 2000
                });
            }
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-root',
            template: "\n    <mat-sidenav-container class=\"sidenav-container\">\n      <mat-sidenav #sidenav class=\"sidenav-nav\">\n        <mat-list>\n          <mat-list-item>\n            <button mat-button routerLink=\"/\" routerLinkActive>\n              <mat-icon>inbox</mat-icon>\n              Inbox\n            </button>\n          </mat-list-item>\n          <mat-list-item>\n            <button mat-button routerLink=\"/snoozed\" routerLinkActive>\n              <mat-icon>alarm</mat-icon>\n              Snoozed\n            </button>\n          </mat-list-item>\n          <mat-list-item>\n            <button mat-button routerLink=\"/done\" routerLinkActive>\n              <mat-icon>done</mat-icon>\n              Done\n            </button>\n          </mat-list-item>\n          <mat-list-item>\n            <hr />\n          </mat-list-item>\n          <mat-list-item>\n            <button mat-button routerLink=\"/drafts\" routerLinkActive>\n              <mat-icon>drafts</mat-icon>\n              Drafts\n            </button>\n          </mat-list-item>\n          <mat-list-item>\n            <button mat-button routerLink=\"/sent\" routerLinkActive>\n              <mat-icon>send</mat-icon>\n              Sent\n            </button>\n          </mat-list-item>\n          <mat-list-item>\n            <button mat-button routerLink=\"/spam\" routerLinkActive>\n              <mat-icon>report_problem</mat-icon>\n              Spam\n            </button>\n          </mat-list-item>\n        </mat-list>\n      </mat-sidenav>\n      <div class=\"sidenav-content\">\n        <mat-toolbar color=\"primary\" role=\"header\" fxLayout=\"row\" class=\"primary-toolbar\">\n          <div fxFlex=\"50px\">\n            <button type=\"button\" class=\"menu-btn\" mat-icon-button (click)=\"sidenav.open()\">\n              <mat-icon>menu</mat-icon>\n            </button>\n          </div>\n          <div fxFlex=\"100px\">\n            Inbox\n          </div>\n          <div fxFlex fxFill class=\"search-col\">\n            <input type=\"text\" class=\"search-bar\" placeholder=\"Search...\" />\n            <mat-slide-toggle class=\"pin-toggle\"></mat-slide-toggle>\n          </div>\n          <div fxFlex=\"200px\" class=\"avatar-col\">\n            <span class=\"avatar accent-1 large\">\n              AM\n            </span>\n          </div>\n        </mat-toolbar>\n        <content>\n          <mat-list>\n            <mat-list-item class=\"category-title\">\n              Today\n            </mat-list-item>\n            <mat-list-item *ngFor=\"let message of messages; let i = index;\">\n              <app-message\n                [avatar]=\"message.avatar\"\n                [from]=\"message.from\"\n                [subject]=\"message.subject\"\n                [body]=\"message.body\"\n                [recieved]=\"message.recieved\"\n                (removed)=\"onRemove(i)\"\n                (reply)=\"onNewMessage($event)\">\n              </app-message>\n            </mat-list-item>\n          </mat-list>\n        </content>\n        <button\n          mat-fab\n          color=\"accent\"\n          class=\"new-fab\"\n          (click)=\"onNewMessage()\"\n          matTooltip=\"New Message\"\n          matTooltipPosition=\"before\">\n          <mat-icon>add</mat-icon>\n        </button>\n      </div>\n    </mat-sidenav-container>\n  ",
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ViewEncapsulation */].None,
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSnackBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSnackBar */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDialog */]) === "function" && _b || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__ = __webpack_require__("../../../flex-layout/@angular/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__message_message_component__ = __webpack_require__("../../../../../src/app/message/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__new_message_new_message_component__ = __webpack_require__("../../../../../src/app/new-message/new-message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__message_message_component__["a" /* MessageComponent */],
                __WEBPACK_IMPORTED_MODULE_9__new_message_new_message_component__["a" /* NewMessageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_10__app_routes__["a" /* routes */], {
                    useHash: false
                }),
                __WEBPACK_IMPORTED_MODULE_6__angular_flex_layout__["a" /* FlexLayoutModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["n" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["r" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["k" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["m" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["s" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["j" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["l" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["q" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["o" /* MatSlideToggleModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__new_message_new_message_component__["a" /* NewMessageComponent */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MATERIAL_COMPATIBILITY_MODE */], useValue: true }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
var routes = [];
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ "../../../../../src/app/data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return messages; });
var messages = [
    {
        recieved: new Date(),
        avatar: 'A',
        from: 'Austin McDaniel',
        subject: 'Angular is a open-source framework for building web applications',
        body: "\n      <p>Learn one way to build applications with Angular and reuse your code and abilities to build\n      apps for any deployment target. For web, mobile web, native mobile and native desktop.\n      Learn one way to build applications with Angular and reuse your code and abilities to build\n      apps for any deployment target. For web, mobile web, native mobile and native desktop.\n      Learn one way to build applications with Angular and reuse your code and abilities to build\n      apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>\n\n      <p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side rendering.</p>\n\n      <p>Angular puts you in control over scalability. Meet huge data requirements by building data\n      models on RxJS, Immutable.js or another push-model.\n      Angular puts you in control over scalability. Meet huge data requirements by building data\n      models on RxJS, Immutable.js or another push-model.\n      Angular puts you in control over scalability. Meet huge data requirements by building data\n      models on RxJS, Immutable.js or another push-model.</p>\n    "
    },
    {
        recieved: new Date(),
        avatar: 'J',
        from: 'Jeremy Elbourn',
        subject: 'Angular Material is a open-source UI framework based on Material design spec',
        body: "\n      <p>Learn one way to build applications with Angular and reuse your code and abilities to build\n      apps for any deployment target. For web, mobile web, native mobile and native desktop.</p>\n\n      <p>Achieve the maximum speed possible on the Web Platform today, and take it further, via Web Workers and server-side rendering.</p>\n\n      <p>Angular puts you in control over scalability. Meet huge data requirements by building data\n      models on RxJS, Immutable.js or another push-model.</p>\n    "
    }
];
//# sourceMappingURL=data.js.map

/***/ }),

/***/ "../../../../../src/app/message/message.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-message .mat-card {\n  color: #212121;\n  padding: 0; }\n  app-message .mat-card .btn-col {\n    text-align: right; }\n\napp-message .message-toolbar {\n  padding: 12px 24px;\n  width: 100%;\n  cursor: pointer; }\n\napp-message .message-subject {\n  line-height: 40px; }\n\napp-message .mat-content {\n  margin: 0 -24px; }\n\napp-message.message-opened .message-toolbar {\n  border-bottom: solid 1px #e0e0e0; }\n  app-message.message-opened .message-toolbar .message-subject {\n    font-size: 110%;\n    font-weight: 100; }\n\napp-message .message-body {\n  position: relative;\n  padding: 20px 24px; }\n  app-message .message-body .message-from {\n    font-weight: bold; }\n  app-message .message-body .message-body-toolbar {\n    margin-bottom: 10px; }\n  app-message .message-body .message-to {\n    color: #7a7a7a; }\n  app-message .message-body .message-more {\n    position: absolute;\n    top: 5px;\n    right: 5px; }\n\n.message-more-menu {\n  width: 200px; }\n\n.snooze-menu {\n  width: 200px; }\n  .snooze-menu h3 {\n    padding: 0 15px;\n    margin: 5px 0; }\n  .snooze-menu button {\n    font-size: 85%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
        this.opened = false;
        this.avatar = '';
        this.from = '';
        this.subject = '';
        this.body = '';
        this.recieved = new Date();
        this.removed = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.reply = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    MessageComponent.prototype.onOpenToggle = function () {
        this.opened = !this.opened;
    };
    MessageComponent.prototype.onReply = function () {
        this.reply.emit({
            to: this.from,
            subject: "RE: " + this.subject
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('class.message-opened'),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "opened", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "avatar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "from", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "subject", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "body", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "recieved", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "removed", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
        __metadata("design:type", Object)
    ], MessageComponent.prototype, "reply", void 0);
    MessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-message',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ViewEncapsulation */].None,
            template: "\n    <mat-card>\n      <mat-expansion-panel (opened)=\"opened = true\" (closed)=\"opened = false\" hideToggle=\"true\">\n        <mat-expansion-panel-header>\n          <div\n            class=\"message-toolbar\"\n            fxLayoutAlign=\"start center\"\n            fxLayout=\"row\">\n            <div fxFlex=\"50px\" [fxShow]=\"!opened\">\n              <span class=\"avatar accent-1\">\n                {{avatar}}\n              </span>\n            </div>\n            <div fxFlex=\"20%\" [fxShow]=\"!opened\">\n              {{from}}\n            </div>\n            <div fxFlex fxFill class=\"message-subject\">\n              {{subject}}\n            </div>\n            <div fxFlex=\"15%\" class=\"btn-col\">\n              <button\n                [matMenuTriggerFor]=\"snoozeMenu\"\n                mat-icon-button\n                matTooltip=\"Remind Me...\"\n                matTooltipPosition=\"above\">\n                <mat-icon>alarm</mat-icon>\n              </button>\n              <mat-menu class=\"snooze-menu\" #snoozeMenu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\">\n                <h3>Snooze until...</h3>\n                <hr />\n                <button mat-menu-item>\n                  <mat-icon>brightness_6</mat-icon>\n                  Later Today\n                </button>\n                <button mat-menu-item>\n                  <mat-icon>brightness_5</mat-icon>\n                  Tomorrow\n                </button>\n                <button mat-menu-item>\n                  <mat-icon>today</mat-icon>\n                  Later this week\n                </button>\n              </mat-menu>\n              <button mat-icon-button (click)=\"removed.emit()\" matTooltip=\"Delete\" matTooltipPosition=\"above\">\n                <mat-icon>delete</mat-icon>\n              </button>\n              <button mat-icon-button (click)=\"removed.emit()\" matTooltip=\"Done\" matTooltipPosition=\"above\">\n                <mat-icon>done</mat-icon>\n              </button>\n            </div>\n          </div>\n          </mat-expansion-panel-header>\n          <div class=\"message-body\" fxLayout=\"row\">\n            <div fxFlex=\"50px\">\n              <span class=\"avatar accent-1 large\">\n                {{avatar}}\n              </span>\n            </div>\n            <div fxFlex>\n              <div class=\"message-body-toolbar\">\n                <span class=\"message-from\">{{from}}</span> <span class=\"message-to\">to me</span>\n                <button mat-icon-button class=\"message-more\" [matMenuTriggerFor]=\"menu\">\n                  <mat-icon>more_vert</mat-icon>\n                </button>\n                <mat-menu class=\"message-more-menu\" #menu=\"matMenu\" [overlapTrigger]=\"false\" xPosition=\"before\">\n                  <button mat-menu-item (click)=\"onReply()\">\n                    <mat-icon>reply</mat-icon>\n                    Reply\n                  </button>\n                  <button mat-menu-item (click)=\"onReply()\">\n                    <mat-icon>forward</mat-icon>\n                    Forward\n                  </button>\n                  <hr />\n                  <button mat-menu-item>\n                    <mat-icon>print</mat-icon>\n                    Print\n                </button>\n                </mat-menu>\n              </div>\n              <div [innerHTML]=\"body\"></div>\n            </div>\n          </div>\n      </mat-expansion-panel>\n    </mat-card>\n  ",
            styles: [__webpack_require__("../../../../../src/app/message/message.component.scss")]
        })
    ], MessageComponent);
    return MessageComponent;
}());

//# sourceMappingURL=message.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-message/new-message.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".new-message-toolbar {\n  background: #424242;\n  color: #fff;\n  padding: 11px 20px;\n  position: relative;\n  margin: -24px; }\n  .new-message-toolbar .mat-icon {\n    vertical-align: middle; }\n  .new-message-toolbar .mat-icon-button {\n    position: absolute;\n    top: 5px;\n    right: 5px; }\n\n.recipients-list {\n  width: 100%; }\n\n.subject-input {\n  width: 100%; }\n\n.new-message-content {\n  padding: 24px; }\n\n.body-input {\n  width: 100%; }\n\n.new-message-btns {\n  text-align: right; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-message/new-message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewMessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_keycodes__ = __webpack_require__("../../../cdk/esm5/keycodes.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var COMMA = 188;
var NewMessageComponent = /** @class */ (function () {
    function NewMessageComponent(data) {
        var _this = this;
        this.data = data;
        this.separatorKeysCodes = [__WEBPACK_IMPORTED_MODULE_2__angular_cdk_keycodes__["f" /* ENTER */], COMMA];
        this.contacts = [
            'Austin Mcdaniel',
            'Jeremy Elbourn',
            'Jules Kremer',
            'Brad Green',
            'Tina Gao'
        ];
        this.recipients = [];
        this.subjectCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.bodyCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        this.recipientsCtrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]();
        if (data.to && data.subject) {
            this.recipients.push({ name: data.to });
            this.subjectCtrl.setValue(data.subject);
        }
        this.filteredContacts = this.recipientsCtrl.valueChanges
            .startWith(null)
            .map(function (contact) { return contact ? _this.filterContacts(contact) : _this.contacts.slice(); });
    }
    NewMessageComponent.prototype.addRecipient = function (event) {
        var input = event.input;
        var value = event.value;
        // Add our person
        if ((value || '').trim()) {
            this.recipients.push({ name: value.trim() });
        }
        // Reset the input value
        if (input) {
            input.value = '';
        }
    };
    NewMessageComponent.prototype.removeRecipient = function (recipient) {
        var index = this.recipients.indexOf(recipient);
        if (index >= 0) {
            this.recipients.splice(index, 1);
        }
    };
    NewMessageComponent.prototype.filterContacts = function (name) {
        return this.contacts.filter(function (contact) {
            return contact.toLowerCase().indexOf(name.toLowerCase()) === 0;
        });
    };
    NewMessageComponent.prototype.onOptionSelected = function (event) {
        this.recipients.push({ name: event.option.value });
        this.recipientInput.nativeElement.value = '';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* ViewChild */])('recipientInput'),
        __metadata("design:type", Object)
    ], NewMessageComponent.prototype, "recipientInput", void 0);
    NewMessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
            selector: 'app-new-message',
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* ViewEncapsulation */].None,
            template: "\n    <div class=\"new-message-toolbar\" mat-dialog-title>\n      <mat-icon>drafts</mat-icon>\n      <button mat-icon-button mat-dialog-close>\n        <mat-icon>clear</mat-icon>\n      </button>\n    </div>\n    <mat-dialog-content class=\"new-message-content\">\n      <mat-form-field class=\"recipients-list\">\n        <mat-chip-list #chipList>\n          <mat-chip\n            *ngFor=\"let recipient of recipients\"\n            [selectable]=\"true\"\n            [removable]=\"true\"\n            (remove)=\"removeRecipient(recipient)\">\n            {{recipient.name}}\n            <mat-icon matChipRemove *ngIf=\"true\">cancel</mat-icon>\n          </mat-chip>\n          <input\n            placeholder=\"To\"\n            matInput\n            #recipientInput\n            [formControl]=\"recipientsCtrl\"\n            [matAutocomplete]=\"auto\"\n            [matChipInputFor]=\"chipList\"\n            [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n            [matChipInputAddOnBlur]=\"false\"\n            (matChipInputTokenEnd)=\"addRecipient($event)\"\n          />\n        </mat-chip-list>\n        <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"onOptionSelected($event)\">\n          <mat-option *ngFor=\"let option of filteredContacts | async\" [value]=\"option\">\n            {{ option }}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n      <mat-form-field class=\"subject-input\">\n        <input matInput placeholder=\"Subject\" [formControl]=\"subjectCtrl\" />\n      </mat-form-field>\n      <mat-form-field class=\"body-input\">\n        <textarea matInput placeholder=\"Body\" [formControl]=\"bodyCtrl\" rows=\"15\"></textarea>\n      </mat-form-field>\n    </mat-dialog-content>\n    <mat-dialog-actions>\n      <button mat-raised-button color=\"primary\" [mat-dialog-close]=\"true\">\n        Send\n      </button>\n    </mat-dialog-actions>\n  ",
            styles: [__webpack_require__("../../../../../src/app/new-message/new-message.component.scss")]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [Object])
    ], NewMessageComponent);
    return NewMessageComponent;
}());

//# sourceMappingURL=new-message.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map