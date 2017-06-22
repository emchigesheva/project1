"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AuthComponent = (function () {
    function AuthComponent(router, http) {
        this.router = router;
        this.http = http;
    }
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("app/us").subscribe(function (result) { return _this.userArray = result.json().data; }, function (error) { return console.log(error.statusText); });
    };
    AuthComponent.prototype.clickHandler = function () {
        for (var _i = 0, _a = this.userArray; _i < _a.length; _i++) {
            var user = _a[_i];
            if ((user.email == this.email) && (user.password == this.password)) {
                this.router.navigate(['/home']);
            }
            else {
                console.log("NO USER");
            }
        }
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    core_1.Component({
        selector: 'login',
        template: "<div class=\"form\">\n            <h1>Welcome!</h1>\n            <div class=\"form-group\">\n                <div class=\"input-group\">\n                    <label>Email</label>\n                    <input [(ngModel)]=\"email\" type=\"email\" placeholder=\"kt@gmail.com\" autofocus/>\n                    <label>Password</label>\n                    <input type=\"password\"[(ngModel)]=\"password\" value=\"password\"/>\n                    <button class=\"btn btn-default\" (click)=\"clickHandler()\">Sign In</button>\n                </div>\n            </div>\n        </div>",
        styleUrls: ['../css/forma.css'],
    })
], AuthComponent);
exports.AuthComponent = AuthComponent;
