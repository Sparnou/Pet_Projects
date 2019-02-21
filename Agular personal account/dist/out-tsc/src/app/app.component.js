var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import usernameValidator from './Validators/usernameValidator';
import ageValidator from './Validators/ageValidator';
import dateValidator from './Validators/dateValidator';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.authForm = new FormGroup({
            username: new FormControl(null, Validators.required, usernameValidator),
            age: new FormControl(null, [
                Validators.required,
                ageValidator
            ]),
            dateOfBirth: new FormControl(null, [
                Validators.required,
                dateValidator
            ]),
            dateOfLogin: new FormControl(null, [
                Validators.required,
                dateValidator
            ]),
            dateOfNotification: new FormControl(null, [
                Validators.required,
                dateValidator
            ])
        });
    }
    AppComponent.prototype.signUpHandler = function () {
        console.log(this.authForm.controls);
    };
    AppComponent = __decorate([
        Component({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map