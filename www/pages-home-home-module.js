(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-home-home-module"],{

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/pages/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ]),
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.page.html":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar [color]=\"toolBarBackgroundColor\">\n    <ion-buttons slot=\"start\" autoHide=\"false\">\n      <ion-menu-button autoHide=\"false\"></ion-menu-button>\n    </ion-buttons>\n    <ion-title no-border id=\"menu\">Campaing center</ion-title>\n\n    <ion-buttons slot=\"end\">\n      <ion-menu-button (click)=\"menuClicked()\" autoHide=\"false\"></ion-menu-button>\n    </ion-buttons> \n\n\n  </ion-toolbar>\n</ion-header>\n<ion-content padding>\n  <!-- <ion-list>\n    <ion-item *ngFor=\"let c of components\" [routerLink]=\"c.redirectTo\" detail>\n      <ion-icon slot=\"start\" [name]=\"c.icon\"></ion-icon>\n      <ion-label >{{ c.companyName }}</ion-label>\n    </ion-item>\n  </ion-list> -->\n  <ion-list >\n    <ion-item [color]=\"toolBarBackgroundColor\" margin id=\"ionItem\" lines=\"none\" *ngFor=\"let c of components\" detail>\n        <ion-icon slot=\"start\" [color]=\"purple\" ios=\"ios-arrow-round-forward\" md=\"md-arrow-round-forward\"></ion-icon>\n      <a id=\"links\" style=\"color: purple; width: 100%\" href=\"{{c.weburl}}\"><ion-label>{{ c.companyName }}</ion-label></a>\n    </ion-item>\n  </ion-list>\n\n  <ion-content *ngIf=\"showSlideView\" style=\"border-radius: 10px 0 0 10px\" [color]=\"toolBarBackgroundColor\">\n    <ion-list class=\"hiddenContainer\">\n      <ion-item *ngFor=\"let c of components\" [routerLink]=\"c.redirectTo\">\n          <ion-label >{{ c.name }}</ion-label>\n        </ion-item>\n      </ion-list>\n  </ion-content>\n  <!-- <ion-button routerLink=\"/about\">About</ion-button>\n  <ion-button routerLink=\"/settings\">Settings</ion-button> -->\n  <!-- <ion-list>\n    <ion-item-sliding *ngFor=\"let country of countries\">\n      <ion-item>\n        <ion-card>\n          <img [src]=\"urlImg\" (click)=\"show()\" />\n          <ion-fab right bottom>\n            <button ion-fab (click)=\"edit()\">\n              <ion-icon name=\"brush\"></ion-icon>\n            </button>\n          </ion-fab>\n          <div class=\"card-title\">Amsterdam</div>\n\n        </ion-card>\n      </ion-item>\n    </ion-item-sliding>\n  </ion-list> -->\n\n</ion-content>"

/***/ }),

/***/ "./src/app/pages/home/home.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content ion-list {\n  border-radius: 0 0 10px 10px;\n  padding-top: 0;\n  padding-bottom: 0; }\n\nion-content #home-title {\n  font-weight: bold;\n  color: #020000;\n  font-family: sans-serif-smallcaps; }\n\nion-content .my-custom-menu {\n  --width: 500px; }\n\nion-content #links {\n  text-decoration: none;\n  font-weight: bold;\n  font-family: 'Times New Roman', Times, serif; }\n\nion-content .hiddenContainer {\n  width: 60%;\n  height: 70%;\n  background-color: #8d9091;\n  position: fixed;\n  top: 10%;\n  right: 0;\n  z-index: 1; }\n\nion-content .hiddenContainer #ion-item {\n    background: transparent; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9pbXJhbmtoYW4vZGV2ZWxvcG1lbnQvY2FtcGFpZ24tY2VudGVyL3NyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVRLDRCQUE0QjtFQUM1QixjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBSnpCO0VBUVEsaUJBQWlCO0VBQ2pCLGNBQW1CO0VBQ25CLGlDQUNKLEVBQUE7O0FBWEo7RUFjUSxjQUFRLEVBQUE7O0FBZGhCO0VBa0JRLHFCQUFxQjtFQUNyQixpQkFBaUI7RUFDakIsNENBQ0osRUFBQTs7QUFyQko7RUEyQlEsVUFBVTtFQUNWLFdBQVc7RUFDWCx5QkFBb0M7RUFDcEMsZUFBZTtFQUNmLFFBQVE7RUFDUixRQUFRO0VBQ1IsVUFBVSxFQUFBOztBQWpDbEI7SUFtQ1ksdUJBQ0osRUFBQSIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgaW9uLWxpc3Qge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAxMHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG5cbiAgICB9XG4gICAgI2hvbWUtdGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgY29sb3I6IHJnYigyLCAwLCAwKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWYtc21hbGxjYXBzXG4gICAgfVxuICAgIFxuICAgIC5teS1jdXN0b20tbWVudSB7XG4gICAgICAgIC0td2lkdGg6IDUwMHB4O1xuICAgIH1cbiAgICBcbiAgICAjbGlua3Mge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBmb250LWZhbWlseTogJ1RpbWVzIE5ldyBSb21hbicsIFRpbWVzLCBzZXJpZlxuICAgIH1cbiAgICAvLyAjaW9uSXRlbSB7XG4gICAgLy8gICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzYsIDE5NSwgMTk2KVxuICAgIC8vIH1cbiAgICAuaGlkZGVuQ29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDYwJTsgXG4gICAgICAgIGhlaWdodDogNzAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQxLCAxNDQsIDE0NSk7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAxMCU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAjaW9uLWl0ZW17XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudFxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/pages/home/home.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");



var HomePage = /** @class */ (function () {
    function HomePage(menu) {
        this.menu = menu;
        this.components = [
            {
                icon: 'settings',
                name: 'settings',
                redirectTo: '/settings',
                companyName: 'Telia',
                color: 'rgb(137, 13, 161)',
                weburl: 'https://www.telia.se/privat?gclid=EAIaIQobChMIxp6swPXs4gIVQhUYCh0xCQrBEAAYASAAEgIB2_D_BwE&gclsrc=aw.ds',
            },
            {
                icon: 'information-circle',
                name: 'home',
                redirectTo: '/home',
                companyName: 'helebob',
                color: 'red',
                weburl: 'https://www.macken.xyz/2019/06/telia-och-halebop-smyger-ut-e-sim/',
            },
            {
                icon: 'information-circle',
                name: '',
                redirectTo: '/home',
                companyName: 'Building mobile britain',
                color: 'red',
                weburl: 'http://www.buildingmobilebritain.org.uk/about/',
            },
        ];
        this.toolBarBackgroundColor = 'light';
        this.showSlideView = false;
        this.color = this.components[0].color;
    }
    HomePage.prototype.menuClicked = function () {
        console.log('clicked');
        if (this.showSlideView == false) {
            this.showSlideView = true;
        }
        else {
            this.showSlideView = false;
        }
    };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/pages/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/pages/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-home-home-module.js.map