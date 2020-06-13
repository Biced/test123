(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-sidenav-container>\n  <mat-sidenav #sidenav role=\"navigation\">\n    <app-sidenav-list (sidenavClose)=\"sidenav.close()\"></app-sidenav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <app-header (sidenavToggle)=\"sidenav.toggle()\"></app-header>\n    <main class=\"wrapper\">\n      <router-outlet></router-outlet>\n    </main>\n  </mat-sidenav-content>\n</mat-sidenav-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cart-panel/cart-panel.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart-panel/cart-panel.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCartPanelCartPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"cart-image\">\n  <img (click)=\"onCart = !onCart\" src=\"../../assets/004-shopping-1.svg\" alt=\"cart_icon\" />\n  <div class=\"counter\" (click)=\"onCart = !onCart\">{{count}}</div>\n  <div class=\"show-cart-items\" *ngIf=\"onCart\">\n    <h3 class=\"title\">\n      My Cart <button class=\"cart-close\" type=\"button\" (click)=\"onCart = !onCart\">Close</button>\n    </h3>\n    <div class=\"cart-container\">\n      <div class=\"cart-item\" *ngFor=\"let product of cartProducts; trackBy: trackByItem\">\n        <div class=\"image\">\n          <img [src]=\"product.ImageLink\" alt=\"\" />\n        </div>\n        <div class=\"info\">\n          <h5>{{product.ProductName}}</h5>\n          <p class=\"product-price\">\n            {{(product.Price * product.cartQty) | number: '1.2-2'}}\n          </p>\n          <div class=\"btn-cart-action\">\n            <span class=\"btn-cart-inc-dec\"\n              [ngClass]=\"product.cartQty > 1 ? (loadingId == product._id ? 'disable' : '') : 'disable'\"\n              (click)=\"cartQtyChange('dec', product)\">-</span>\n            <span class=\"qty\">{{product.cartQty}}</span>\n            <span class=\"btn-cart-inc-dec\"\n              [ngClass]=\"product.Quantity > 0 ? (loadingId == product._id ? 'disable' : '') : 'disable'\"\n              (click)=\"cartQtyChange('inc', product)\">+</span>\n          </div>\n          <div *ngIf=\"loadingId == product._id\">\n            <mat-progress-bar mode=\"indeterminate\"></mat-progress-bar>\n          </div>\n        </div>\n        <div class=\"delete\" [ngClass]=\"loadingId == product._id ? 'disable' : ''\" (click)=\"removeItem(product)\">\n          &#10006;\n        </div>\n      </div>\n    </div>\n    <div class=\"total-amount-section\">\n      Total Amount:&nbsp; $ <span class=\"total-cart-amount\">{{total|| 0 | number:'1.2-2'}} </span>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"product-list\" infiniteScroll [infiniteScrollDistance]=\"2\" [infiniteScrollThrottle]=\"100\"\n    (scrolled)=\"onScroll()\">\n    <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n    <ng-container *ngFor=\"let product of products\">\n\n        <app-card [product]=\"product\"></app-card>\n\n    </ng-container>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/my-cart/my-cart.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/my-cart/my-cart.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMyCartMyCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"product-list\">\n    <ng-container *ngFor=\"let product of cartProduct\">\n        <app-card [cartComponent]=\"true\" [product]=\"product\"></app-card>\n    </ng-container>\n    <ng-container *ngIf=\"cartProduct.length == 0\">\n        <h4 class=\"no-data\">\n            Your cart is empty. Go to <a routerLink=\"/dashboard\">Buy Product</a>\n        </h4>\n    </ng-container>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/header/header.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/header/header.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavigationHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar class=\"navbar\">\n    <div fxHide.gt-xs>\n        <button mat-icon-button (click)=\"onToggleSidenav()\">\n            <mat-icon>menu</mat-icon>\n        </button>\n    </div>\n    <div class=\"logo\">\n        <a [routerLink]=\"['/dashboard']\"><img src=\"https://nathangurarie.ga/img/Asset%202.svg\" alt=\"logo\" /></a>\n    </div>\n    <div fxFlex fxLayout fxLayoutAlign=\"end\" fxHide.xs>\n        <ul fxLayout fxLayoutGap=\"15px\" class=\"navigation-items\">\n            <li>\n                <a [routerLink]=\"['/list']\" routerLinkActive=\"active\">Products</a>\n            </li>\n            <li>\n                <a [routerLink]=\"['/create']\" routerLinkActive=\"active\">Add New</a>\n            </li>\n            <li>\n                <a [routerLink]=\"['/my-cart']\" routerLinkActive=\"active\">My Cart</a>\n            </li>\n        </ul>\n    </div>\n    <div class=\"router-change-progress-bar\">\n        <!-- <mat-progress-bar *ngIf=\"routerLoading\" mode=\"indeterminate\"></mat-progress-bar> -->\n    </div>\n    <app-cart-panel></app-cart-panel>\n\n</mat-toolbar>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/sidenav-list/sidenav-list.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/sidenav-list/sidenav-list.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNavigationSidenavListSidenavListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-nav-list>\n    <a mat-list-item routerLink=\"/dashboard\" (click)=\"onSidenavClose()\">\n        <mat-icon>home</mat-icon> <span class=\"nav-caption\">Home</span>\n    </a>\n    <a mat-list-item routerLink=\"/list\" (click)=\"onSidenavClose()\">\n        <mat-icon>dashboard</mat-icon> <span class=\"nav-caption\">Products</span>\n    </a>\n    <a mat-list-item routerLink=\"/create\" (click)=\"onSidenavClose()\">\n        <mat-icon>account_balance</mat-icon><span class=\"nav-caption\">Add New</span>\n    </a>\n    <a mat-list-item routerLink=\"/my-cart\" (click)=\"onSidenavClose()\">\n        <mat-icon>shopping_cart</mat-icon><span class=\"nav-caption\">My Cart</span>\n    </a>\n</mat-nav-list>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/products/create/create.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/create/create.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductsCreateCreateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"create-section\">\n    <h3>{{titleMain}} Product</h3>\n    <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n    <div class=\"product-form\" *ngIf=\"!loading\">\n        <form [formGroup]=\"productForm\" (ngSubmit)=\"productSubmit(productForm)\">\n\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div ngClass.lt-md=\"mb-10\" fxFlex=\"100\">\n                    <mat-form-field autofilled=\"false\" class=\"form-field\">\n                        <input type=\"text\" #title matInput placeholder=\"Product Name*\" maxlength=\"50\"\n                            formControlName=\"title\">\n                        <mat-hint>{{title.value.length}}/50 (minimum 3 character)</mat-hint>\n                        <mat-error *ngIf=\"productForm.get('title').hasError('required')\">Product name required\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n            </div>\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div ngClass.lt-md=\"mb-10\" fxFlex=\"100\">\n                    <mat-form-field autofilled=\"false\" class=\"form-field\">\n                        <input type=\"number\" matInput placeholder=\"Price*\" min=\"0\" formControlName=\"Price\">\n                        <mat-error *ngIf=\"productForm.get('Price').hasError('required')\">Price required</mat-error>\n                        <mat-error *ngIf=\"productForm.get('Price').hasError('min')\">Price should be positive number\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n                <div ngClass.lt-md=\"mb-10\" fxFlex=\"100\">\n                    <mat-form-field autofilled=\"false\" class=\"form-field\">\n                        <input type=\"number\" matInput placeholder=\"Quantity*\" min=\"0\" formControlName=\"Quantity\">\n                        <mat-error *ngIf=\"productForm.get('Quantity').hasError('required')\">Quantity required\n                        </mat-error>\n                        <mat-error *ngIf=\"productForm.get('Quantity').hasError('min')\">Quantity should be positive\n                            number</mat-error>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div fxLayout=\"row\" fxLayoutGap=\"20px\">\n                <div ngClass.lt-md=\"mb-10\" fxFlex=\"100\">\n                    <mat-form-field autofilled=\"false\" class=\"form-field\">\n                        <textarea #Description maxlength=\"250\" matInput placeholder=\"Description\"\n                            formControlName=\"Description\"></textarea>\n                        <mat-hint>{{Description.value.length}}/250</mat-hint>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutGap=\"20px\">\n                <div class=\"mb-10\" fxFlex=\"100\">\n\n\n                    <mat-form-field autofilled=\"false\" class=\"form-field\">\n                        <input type=\"text\" #CategoryName matInput placeholder=\"Category*\" maxlength=\"50\"\n                            formControlName=\"CategoryName\">\n                        <mat-hint>{{CategoryName.value.length}}/50 (minimum 3 character)</mat-hint>\n                        <mat-error *ngIf=\"productForm.get('CategoryName').hasError('required')\">Category name required\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n\n\n                <div class=\"mb-10\" fxFlex=\"100\">\n\n\n                    <mat-form-field autofilled=\"false\" class=\"form-field\">\n                        <input type=\"text\" #ImageLink matInput placeholder=\"ImageLink*\" maxlength=\"100\"\n                            formControlName=\"ImageLink\">\n                        <mat-hint>{{ImageLink.value.length}}/100 (minimum 3 character)</mat-hint>\n                        <mat-error *ngIf=\"productForm.get('ImageLink').hasError('required')\">Category name required\n                        </mat-error>\n                    </mat-form-field>\n                </div>\n            </div>\n\n            <!-- <div fxLayout=\"row\" fxLayoutGap=\"20px\">\n            <div ngClass.lt-md=\"mb-10\" fxFlex=\"100\">\n                <mat-checkbox formControlName=\"IsBestAchived\">Is Best Achived</mat-checkbox>\n            </div>\n        </div> -->\n            <div fxLayout=\"row\" fxLayoutGap=\"20px\" *ngIf=\"!productId\">\n                <div ngClass.lt-md=\"mb-10\" fxFlex=\"100\">\n                    <mat-checkbox [formControl]=\"addAnother\">Add Another</mat-checkbox>\n                </div>\n            </div>\n\n            <div fxLayout=\"row\" fxLayoutGap=\"20px\">\n                <div ngClass.lt-md=\"mb-10\" fxFlex=\"100\">\n                    <a mat-raised-button type=\"button\" class=\"back-btn\" routerLink=\"/list\">Back</a>\n                    <button class=\"submit-btn\" [disabled]=\"productForm.invalid\" mat-raised-button\n                        type=\"submit\">Submit</button>\n                </div>\n            </div>\n\n        </form>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/products/list/list.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/products/list/list.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppProductsListListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"product-data-table\">\n    <div class=\"head-section\" fxLayout=\"row\" fxLayout.xs=\"column\">\n        <h3 fxFlex=\"70\">Product List</h3>\n        <div fxFlex=\"30\" class=\"create-action\">\n            <a [routerLink]=\"['/create']\" mat-raised-button class=\"create-btn\">Add New Product</a>\n        </div>\n    </div>\n    <div>\n        <mat-form-field fxFlex=\"60\" fxFlex.lt-md=\"100\" autofilled=\"false\" class=\"form-field\">\n            <input type=\"text\" matInput placeholder=\"Search by product name\" [formControl]=\"searchCtr\"\n                (keyup)=\"emptyCheck()\" (keyup.enter)=\"loadDataTable()\">\n        </mat-form-field>\n        <!-- <mat-form-field>\n            <mat-label>Filter</mat-label>\n            <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"Ex. ium\">\n        </mat-form-field> -->\n    </div>\n    <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n    <app-data-table [config]=\"dataTableConfig\" (dataTableEventChange)=\"dataTableEventChange($event)\"></app-data-table>\n</div>\n\n\n<ng-template #CreatedAt let-row>\n    {{row.createdAt | date}}\n</ng-template>\n<ng-template #Action let-row>\n    <a [routerLink]=\"['./edit', row._id]\" mat-icon-button>\n        <mat-icon>edit</mat-icon>\n    </a>\n    <button [ngClass]=\"row.disable ? 'disable' : ''\" mat-icon-button (click)=\"openDeleteModal(row)\">\n        <mat-icon>delete</mat-icon>\n    </button>\n</ng-template>\n\n<ng-template #dialogRef let-data>\n    <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n    <mat-dialog-content>\n        <p>Are you sure, you want to delete?</p>\n    </mat-dialog-content>\n    <mat-dialog-actions>\n        <button mat-raised-button color=\"primary\" (click)=\"deleteProduct(data)\">Submit</button>\n    </mat-dialog-actions>\n</ng-template>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/data-table/data-table.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/data-table/data-table.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedDataTableDataTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mat-elevation-z8\">\n  <table mat-table [dataSource]=\"config.dataSource\" matSort (matSortChange)=\"sortData($event)\">\n    <!-- Position Column -->\n    <ng-container *ngFor=\"let col of config.tableConfig\" matColumnDef=\"{{col.column}}\">\n      <ng-container *ngIf=\"col.sort; else noSort\">\n        <th mat-header-cell *matHeaderCellDef mat-sort-header >{{col.title}}</th>\n      </ng-container>\n      <ng-template #noSort>\n        <th mat-header-cell *matHeaderCellDef>{{col.title}}</th>\n      </ng-template>\n      <td mat-cell *matCellDef=\"let element\">\n        <ng-container *ngIf=\"col.template; else showOnlyValue\">\n            <ng-container *ngTemplateOutlet=\"col.template; context: {$implicit: element}\"></ng-container>\n        </ng-container>\n        <ng-template #showOnlyValue>{{element[col.column]}}</ng-template>\n      </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\n  </table>\n\n    <mat-paginator [length]=\"config.totalItem\"\n              [pageSize]=\"config.pageSize\"\n              [pageSizeOptions]=\"config.pageSizeOptions\"\n              (page)=\"pageEvent($event)\">\n    </mat-paginator>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/card/card.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/card/card.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedModulesCardCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n    <div class=\"product-image\">\n        <!-- [src]='product.images[0].url' -->\n        <!-- src=\"https://cloud.githubusercontent.com/assets/878660/23353771/d0adbd12-fcd6-11e6-96be-7a236f8819d9.png\" -->\n        <img alt=\"Denim Jeans\" [src]='product.ImageLink' (error)=\"onImgError($event)\">\n        <div class=\" black-cover\">\n            <a [routerLink]=\"['/product/', product._id]\" class=\"details-btn\">Show Details</a>\n            <!-- <button *ngIf=\"cartComponent\" class=\"details-btn remove\" (click)=\"removeCartItem(product)\">Remove</button> -->\n        </div>\n    </div>\n    <div class=\"product-info\">\n        <p class=\"title\">{{product.title}}</p>\n        <p class=\"price\">$ {{product.Price | number: '1.2-2'}}</p>\n    </div>\n    <p class=\"product-qty\">Available Quantity: <span>{{product.Quantity}}</span></p>\n    <div class=\"add-cart-action\">\n        <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n        <button class=\"add-cart-btn\" *ngIf=\"!product.cartQty\" [ngClass]=\"loading ? 'disable' : ''\"\n            (click)=\"addToCart(product)\">Add to Cart</button>\n        <div class=\"btn-cart-action\" *ngIf=\"product.cartQty\">\n            <span class=\"btn-inc-dec\" [ngClass]=\"decCheck ? (loading ? 'disable' : '') : 'disable'\"\n                (click)=\"cartQtyChange('dec', product)\">-</span>\n            <span class=\"qty\">{{product.cartQty}}</span>\n            <span class=\"btn-inc-dec\" [ngClass]=\"incCheck ? (loading ? 'disable' : '') : 'disable'\"\n                (click)=\"cartQtyChange('inc', product)\">+</span>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/product-details/product-details.component.html":
  /*!*********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/product-details/product-details.component.html ***!
    \*********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSharedModulesProductDetailsProductDetailsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"product-details\">\n  <mat-progress-bar *ngIf=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n  <ng-container *ngIf=\"product\">\n    <div class=\"detail-container\">\n      <div class=\"d-image\">\n        <!-- [src]=\"product.images[0].url\" -->\n        <img class=\"d-img\" alt=\"\" [src]=\"product.ImageLink\" />\n      </div>\n      <div class=\"details\">\n        <h3 class=\"m-0 title\">{{product.title}}</h3>\n        <h4 class=\"m-0 font-400\">$ {{product.Price | number: '1.2-2'}}</h4>\n        <h4 class=\"m-0 font-400\">\n          Review: <span>&#9733;</span> <span>&#9733;</span> <span>&#9733;</span>\n          <span>&#9733;</span>\n        </h4>\n        <div class=\"chips\">\n          <mat-chip-list aria-label=\"Fish selection\">\n            <!-- <mat-chip color=\"primary\" selected>{{product?.Origin.Name}}</mat-chip> -->\n            <mat-chip color=\"accent\" selected>{{product.CategoryName}}</mat-chip>\n          </mat-chip-list>\n        </div>\n        <!-- <div>\n          <h4 class=\"m-0 font-400\">Quantity: {{product?.Quantity}}</h4>\n          <div class=\"add-cart-action\">\n            <mat-progress-bar *ngIf=\"loadingCart\" mode=\"indeterminate\"></mat-progress-bar>\n            <button class=\"add-cart-btn\" *ngIf=\"!product.cartQty\" [ngClass]=\"loadingCart ? 'disable' : ''\"\n              (click)=\"addToCart(product)\">Add to Cart</button>\n            <div class=\"btn-cart-action\" *ngIf=\"product.cartQty\">\n              <span class=\"btn-inc-dec\" [ngClass]=\"product.cartQty > 0 ? (loadingCart ? 'disable' : '') : 'disable'\"\n                (click)=\"cartQtyChange('dec', product)\">-</span>\n              <span class=\"qty\">{{product.cartQty}}</span>\n              <span class=\"btn-inc-dec\" [ngClass]=\"product.Quantity > 0 ? (loadingCart ? 'disable' : '') : 'disable'\"\n                (click)=\"cartQtyChange('inc', product)\">+</span>\n            </div>\n          </div>\n        </div> -->\n      </div>\n    </div>\n    <div class=\"description\">{{product.Description}}</div>\n  </ng-container>\n</section>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _shared_modules_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shared/modules/product-details/product-details.component */
    "./src/app/shared/modules/product-details/product-details.component.ts");
    /* harmony import */


    var _products_list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./products/list/list.component */
    "./src/app/products/list/list.component.ts");
    /* harmony import */


    var _products_create_create_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./products/create/create.component */
    "./src/app/products/create/create.component.ts");
    /* harmony import */


    var _my_cart_my_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./my-cart/my-cart.component */
    "./src/app/my-cart/my-cart.component.ts");

    const routes = [{
      path: 'dashboard',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }, {
      path: 'product/:id',
      component: _shared_modules_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailsComponent"]
    }, {
      path: 'list',
      component: _products_list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"]
    }, {
      path: 'create',
      component: _products_create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateComponent"]
    }, {
      path: 'list/edit/:id',
      component: _products_create_create_component__WEBPACK_IMPORTED_MODULE_6__["CreateComponent"]
    }, {
      path: 'my-cart',
      component: _my_cart_my_cart_component__WEBPACK_IMPORTED_MODULE_7__["MyCartComponent"]
    }, // {path: 'products', loadChildren: () => import('./products/products.module').then ( m => m.ProductsModule)},
    // {path: 'product/:id', loadChildren: () => import('./product-details/product-details.module').then ( m => m.ProductDetailsModule)},
    // {path: 'my-cart', loadChildren: () => import('./my-cart/my-cart.module').then ( m => m.MyCartModule)},
    {
      path: '**',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }];
    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navigation a {\n  text-decoration: none;\n  padding: 0 15px;\n  color: #707070;\n}\n.navigation a:hover {\n  color: #4169e1;\n}\n.navigation .active {\n  color: #4169e1;\n}\n.router-change-progress-bar ::ng-deep .mat-progress-bar {\n  position: absolute !important;\n  top: 70px;\n  left: 0;\n  z-index: 9999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxuYXR0aVxcRGVza3RvcFxcU3RvcmVfYXBwL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNBUjtBRENRO0VBQ0ksY0FBQTtBQ0NaO0FERUk7RUFDSSxjQUFBO0FDQVI7QURNSTtFQUNJLDZCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxhQUFBO0FDSFIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2aWdhdGlvbiB7XHJcbiAgICBhIHtcclxuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjNzA3MDcwO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzQxNjllMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgICBjb2xvcjogIzQxNjllMTtcclxuICAgIH1cclxufVxyXG5cclxuLnJvdXRlci1jaGFuZ2UtcHJvZ3Jlc3MtYmFyIHtcclxuICAgOjpuZy1kZWVwIHtcclxuICAgIC5tYXQtcHJvZ3Jlc3MtYmFyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGUhaW1wb3J0YW50O1xyXG4gICAgICAgIHRvcDogNzBweDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTk7XHJcbiAgICB9XHJcbiAgIH1cclxufVxyXG4iLCIubmF2aWdhdGlvbiBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBwYWRkaW5nOiAwIDE1cHg7XG4gIGNvbG9yOiAjNzA3MDcwO1xufVxuLm5hdmlnYXRpb24gYTpob3ZlciB7XG4gIGNvbG9yOiAjNDE2OWUxO1xufVxuLm5hdmlnYXRpb24gLmFjdGl2ZSB7XG4gIGNvbG9yOiAjNDE2OWUxO1xufVxuXG4ucm91dGVyLWNoYW5nZS1wcm9ncmVzcy1iYXIgOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XG4gIHRvcDogNzBweDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogOTk5OTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let AppComponent = class AppComponent {
      constructor(router) {
        this.router = router;
        this.title = 'myStoreApp';
      }

      ngOnInit() {
        // loading = true;
        this.router.events.subscribe(event => {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            this.routeLoading = true;
            window.scrollTo(0, 0);
          }

          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
            this.routeLoading = false;
          }
        });
      }

    };

    AppComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/esm2015/progress-bar.js");
    /* harmony import */


    var _shared_modules_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shared/modules/card/card.component */
    "./src/app/shared/modules/card/card.component.ts");
    /* harmony import */


    var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-infinite-scroll */
    "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js");
    /* harmony import */


    var _shared_service_http_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/service/http.service */
    "./src/app/shared/service/http.service.ts");
    /* harmony import */


    var _shared_modules_product_details_details_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/modules/product-details/details.service */
    "./src/app/shared/modules/product-details/details.service.ts");
    /* harmony import */


    var _shared_service_common_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./shared/service/common.service */
    "./src/app/shared/service/common.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _shared_modules_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./shared/modules/product-details/product-details.component */
    "./src/app/shared/modules/product-details/product-details.component.ts");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _shared_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./shared/data-table/data-table.component */
    "./src/app/shared/data-table/data-table.component.ts");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/sort */
    "./node_modules/@angular/material/esm2015/sort.js");
    /* harmony import */


    var _products_service_product_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./products/service/product.service */
    "./src/app/products/service/product.service.ts");
    /* harmony import */


    var _shared_service_cart_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./shared/service/cart.service */
    "./src/app/shared/service/cart.service.ts");
    /* harmony import */


    var _products_list_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./products/list/list.component */
    "./src/app/products/list/list.component.ts");
    /* harmony import */


    var _products_create_create_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./products/create/create.component */
    "./src/app/products/create/create.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/esm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _my_cart_my_cart_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./my-cart/my-cart.component */
    "./src/app/my-cart/my-cart.component.ts");
    /* harmony import */


    var _cart_panel_cart_panel_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./cart-panel/cart-panel.component */
    "./src/app/cart-panel/cart-panel.component.ts");
    /* harmony import */


    var _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./navigation/header/header.component */
    "./src/app/navigation/header/header.component.ts");
    /* harmony import */


    var _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./navigation/sidenav-list/sidenav-list.component */
    "./src/app/navigation/sidenav-list/sidenav-list.component.ts");

    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _shared_modules_card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"], _shared_modules_product_details_product_details_component__WEBPACK_IMPORTED_MODULE_14__["ProductDetailsComponent"], _shared_data_table_data_table_component__WEBPACK_IMPORTED_MODULE_16__["DataTableComponent"], _products_list_list_component__WEBPACK_IMPORTED_MODULE_22__["ListComponent"], _products_create_create_component__WEBPACK_IMPORTED_MODULE_23__["CreateComponent"], _my_cart_my_cart_component__WEBPACK_IMPORTED_MODULE_36__["MyCartComponent"], _cart_panel_cart_panel_component__WEBPACK_IMPORTED_MODULE_37__["CartPanelComponent"], _navigation_header_header_component__WEBPACK_IMPORTED_MODULE_38__["HeaderComponent"], _navigation_sidenav_list_sidenav_list_component__WEBPACK_IMPORTED_MODULE_39__["SidenavListComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_24__["FlexLayoutModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_15__["MatChipsModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_18__["MatTableModule"], _angular_material_paginator__WEBPACK_IMPORTED_MODULE_17__["MatPaginatorModule"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_19__["MatSortModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_25__["MatButtonModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_26__["MatIconModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_28__["ReactiveFormsModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_29__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_30__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_31__["MatSelectModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_33__["MatCheckboxModule"], ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_9__["InfiniteScrollModule"], _angular_material__WEBPACK_IMPORTED_MODULE_35__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_35__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_35__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_35__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_35__["MatListModule"]],
      providers: [_shared_service_cart_service__WEBPACK_IMPORTED_MODULE_21__["CartService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_34__["MatSnackBar"], _products_service_product_service__WEBPACK_IMPORTED_MODULE_20__["ProductService"], _shared_service_http_service__WEBPACK_IMPORTED_MODULE_10__["HttpService"], _shared_service_common_service__WEBPACK_IMPORTED_MODULE_12__["CommonService"], _shared_modules_product_details_details_service__WEBPACK_IMPORTED_MODULE_11__["ProductDetailsService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/cart-panel/cart-panel.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/cart-panel/cart-panel.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppCartPanelCartPanelComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".title {\n  margin: 0;\n  padding: 15px 10px;\n  background: #ffffff;\n  color: #4169e1;\n  border-radius: 2px;\n  border-bottom: 1px solid #efefef;\n  font-weight: 400;\n}\n.title button {\n  float: right;\n  font-size: 12px;\n  padding: 5px;\n  border: 1px solid #707070;\n  border-radius: 5px;\n  color: #707070;\n}\n.cart-container {\n  max-height: 400px;\n  overflow: auto;\n}\n.cart-container .cart-item {\n  margin: 0;\n  padding: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  border: 1px solid #efefef;\n}\n.cart-container .cart-item .image {\n  -webkit-box-flex: 1;\n          flex: 1 1 30%;\n}\n.cart-container .cart-item .image img {\n  width: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.cart-container .cart-item .info {\n  -webkit-box-flex: 1;\n          flex: 1 1 65%;\n}\n.cart-container .cart-item .info h5,\n.cart-container .cart-item .info p {\n  margin: 0;\n  padding: 0 3px;\n}\n.cart-container .cart-item .info p {\n  font-size: 12px;\n}\n.cart-container .cart-item .info .btn-cart-action {\n  padding: 5px 3px;\n}\n.cart-container .cart-item .info .btn-cart-action span {\n  display: inline-block;\n  text-align: center;\n}\n.cart-container .cart-item .info .btn-cart-action span.qty {\n  width: 50px;\n  font-size: 12px;\n}\n.cart-container .cart-item .info .btn-cart-action span.btn-cart-inc-dec {\n  border: 1px solid #efefef;\n  font-size: 16px;\n  width: 20px;\n  cursor: pointer;\n  font-weight: 600;\n}\n.cart-container .cart-item .delete {\n  -webkit-box-flex: 1;\n          flex: 1 1 5%;\n  cursor: pointer;\n  font-weight: 400;\n}\n.total-amount-section {\n  margin: 0;\n  padding: 15px 10px;\n  background: #ffffff;\n  color: #4169e1;\n  border-radius: 2px;\n  border-top: 1px solid #efefef;\n  font-weight: 400;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC1wYW5lbC9DOlxcVXNlcnNcXG5hdHRpXFxEZXNrdG9wXFxTdG9yZV9hcHAvc3JjXFxhcHBcXGNhcnQtcGFuZWxcXGNhcnQtcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NhcnQtcGFuZWwvY2FydC1wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtBQ0NGO0FEQUU7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0VKO0FERUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7QUNDRjtBREFFO0VBQ0UsU0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7QUNFSjtBRERJO0VBQ0UsbUJBQUE7VUFBQSxhQUFBO0FDR047QURGTTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FDSVI7QURBSTtFQUNFLG1CQUFBO1VBQUEsYUFBQTtBQ0VOO0FERE07O0VBRUUsU0FBQTtFQUNBLGNBQUE7QUNHUjtBRERNO0VBQ0UsZUFBQTtBQ0dSO0FEQU07RUFDRSxnQkFBQTtBQ0VSO0FERFE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0FDR1Y7QUREUTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FDR1Y7QUREUTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNHVjtBREVJO0VBQ0UsbUJBQUE7VUFBQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDQU47QURLQTtFQUNFLFNBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtBQ0ZGIiwiZmlsZSI6InNyYy9hcHAvY2FydC1wYW5lbC9jYXJ0LXBhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjNDE2OWUxO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBidXR0b24ge1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGNvbG9yOiAjNzA3MDcwO1xuICB9XG59XG5cbi5jYXJ0LWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbiAgLmNhcnQtaXRlbSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZmVmZWY7XG4gICAgLmltYWdlIHtcbiAgICAgIGZsZXg6IDEgMSAzMCU7XG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5mbyB7XG4gICAgICBmbGV4OiAxIDEgNjUlO1xuICAgICAgaDUsXG4gICAgICBwIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwIDNweDtcbiAgICAgIH1cbiAgICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG5cbiAgICAgIC5idG4tY2FydC1hY3Rpb24ge1xuICAgICAgICBwYWRkaW5nOiA1cHggM3B4O1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICAgIHNwYW4ucXR5IHtcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIH1cbiAgICAgICAgc3Bhbi5idG4tY2FydC1pbmMtZGVjIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWZlZmVmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5kZWxldGUge1xuICAgICAgZmxleDogMSAxIDUlO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICB9XG4gIH1cbn1cblxuLnRvdGFsLWFtb3VudC1zZWN0aW9uIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjNDE2OWUxO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWZlZmVmO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuIiwiLnRpdGxlIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxNXB4IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGNvbG9yOiAjNDE2OWUxO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLnRpdGxlIGJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwYWRkaW5nOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6ICM3MDcwNzA7XG59XG5cbi5jYXJ0LWNvbnRhaW5lciB7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogYXV0bztcbn1cbi5jYXJ0LWNvbnRhaW5lciAuY2FydC1pdGVtIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWZlZmVmO1xufVxuLmNhcnQtY29udGFpbmVyIC5jYXJ0LWl0ZW0gLmltYWdlIHtcbiAgZmxleDogMSAxIDMwJTtcbn1cbi5jYXJ0LWNvbnRhaW5lciAuY2FydC1pdGVtIC5pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5jYXJ0LWNvbnRhaW5lciAuY2FydC1pdGVtIC5pbmZvIHtcbiAgZmxleDogMSAxIDY1JTtcbn1cbi5jYXJ0LWNvbnRhaW5lciAuY2FydC1pdGVtIC5pbmZvIGg1LFxuLmNhcnQtY29udGFpbmVyIC5jYXJ0LWl0ZW0gLmluZm8gcCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMCAzcHg7XG59XG4uY2FydC1jb250YWluZXIgLmNhcnQtaXRlbSAuaW5mbyBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNhcnQtY29udGFpbmVyIC5jYXJ0LWl0ZW0gLmluZm8gLmJ0bi1jYXJ0LWFjdGlvbiB7XG4gIHBhZGRpbmc6IDVweCAzcHg7XG59XG4uY2FydC1jb250YWluZXIgLmNhcnQtaXRlbSAuaW5mbyAuYnRuLWNhcnQtYWN0aW9uIHNwYW4ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5jYXJ0LWNvbnRhaW5lciAuY2FydC1pdGVtIC5pbmZvIC5idG4tY2FydC1hY3Rpb24gc3Bhbi5xdHkge1xuICB3aWR0aDogNTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuLmNhcnQtY29udGFpbmVyIC5jYXJ0LWl0ZW0gLmluZm8gLmJ0bi1jYXJ0LWFjdGlvbiBzcGFuLmJ0bi1jYXJ0LWluYy1kZWMge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWZlZmVmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIHdpZHRoOiAyMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4uY2FydC1jb250YWluZXIgLmNhcnQtaXRlbSAuZGVsZXRlIHtcbiAgZmxleDogMSAxIDUlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi50b3RhbC1hbW91bnQtc2VjdGlvbiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTVweCAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBjb2xvcjogIzQxNjllMTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2VmZWZlZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/cart-panel/cart-panel.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/cart-panel/cart-panel.component.ts ***!
    \****************************************************/

  /*! exports provided: CartPanelComponent */

  /***/
  function srcAppCartPanelCartPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPanelComponent", function () {
      return CartPanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_service_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/service/cart.service */
    "./src/app/shared/service/cart.service.ts");

    let CartPanelComponent = class CartPanelComponent {
      constructor(cartService) {
        this.cartService = cartService; // export class CartPanelComponent {

        this.cartProducts = [];
        this.loadingId = '';
        this.subs = [];
        this.cartId = this.cartService.cartId;

        if (this.cartId) {
          this.getCartItems();
        }
      }

      ngOnInit() {
        this.subs.push(this.cartService.cartItemChange.subscribe(val => {
          if (val) {
            const index = this.cartProducts.findIndex(f => f._id === val._id);

            if (index > -1) {
              this.cartProducts[index] = Object.assign({}, this.cartProducts[index], val);
            } else {
              this.cartProducts = [...this.cartProducts, val];
            }

            this.cartService.cartItems.next(this.cartProducts);
          }
        }));
        this.subs.push(this.cartService.cartItems.subscribe(val => {
          this.cartProducts = val || this.cartProducts;
        }));
      }

      ngOnDestroy() {
        this.subs.forEach(element => {
          element.unsubscribe();
        });
      }

      trackByItem(index, product) {
        return product._id || null;
      }

      getCartItems() {
        this.cartService.getCartList().subscribe(res => {
          const cartProduct = this.formatCartPanel(res);
          this.cartService.cartItems.next(cartProduct);
        });
      }

      removeItem(product) {
        this.loadingId = product._id;
        this.cartService.removeCartItem(product).then(res => this.loadingId = '').catch(err => this.loadingId = '');
      }

      cartQtyChange(type, product) {
        this.loadingId = product._id;
        const prop = type === 'inc' ? 'cartQty' : 'Quantity';
        this.cartService.cartQtyUpdate(product, prop).then(res => this.loadingId = '').catch(err => this.loadingId = '');
      }

      formatCartPanel(res) {
        if (res.products) {
          return res.products.map(m => {
            m['cartQty'] = res.ProductIds.find(f => f.ProductId === m._id).Quantity;
            m.Quantity = m.Quantity - m['cartQty'];
            return m;
          });
        }
      }

      get total() {
        return this.cartProducts.reduce((t, i) => {
          return t += i.Price * i.cartQty;
        }, 0);
      }

      get count() {
        return this.cartProducts.length;
      }

    };

    CartPanelComponent.ctorParameters = () => [{
      type: _shared_service_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
    }];

    CartPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cart-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cart-panel/cart-panel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart-panel.component.scss */
      "./src/app/cart-panel/cart-panel.component.scss")).default]
    })], CartPanelComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".product-list {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  flex-flow: wrap;\n  padding: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcbmF0dGlcXERlc2t0b3BcXFN0b3JlX2FwcC9zcmNcXGFwcFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtbGlzdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZmxleC1mbG93OiB3cmFwO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICB9IiwiLnByb2R1Y3QtbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWZsb3c6IHdyYXA7XG4gIHBhZGRpbmc6IDMwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _products_service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../products/service/product.service */
    "./src/app/products/service/product.service.ts");
    /* harmony import */


    var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-infinite-scroll */
    "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.js");
    /* harmony import */


    var _shared_service_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/service/cart.service */
    "./src/app/shared/service/cart.service.ts");

    let DashboardComponent = class DashboardComponent {
      constructor(service, cartService) {
        this.service = service;
        this.cartService = cartService;
        this.config = {
          page: 0,
          totalCount: 0,
          products: []
        };
        this.loading = false;
        this.subs = [];
        this.products = [];
        this.cartProduct = [];
        this.getProducts();
      }

      ngOnInit() {
        this.subs.push(this.cartService.cartItems.subscribe(val => {
          if (val) {
            this.cartProduct = val;
            this.products = this.service.formateProduct(this.config.products, val); // console.log(this.config.products)
          }
        }));
      }

      ngOnDestroy() {
        this.subs.forEach(f => f.unsubscribe());
      }

      getProducts() {
        this.loading = true;
        this.service.getProducts(this.config, this.filter || '').subscribe(res => {
          this.loading = false;
          this.config.totalCount = res.totalCount;
          this.config.products = [...this.config.products, ...res.products];
          this.products = this.service.formateProduct(this.config.products, this.cartService.cartItmesValue);
        }, err => this.config.page -= 1);
      }

      onScroll() {
        // console.log(this.config.page)
        if (this.config.page * 12 < this.config.totalCount) {
          this.config.page += 1;
          this.getProducts();
        } // this.infiniteScroll.ngOnDestroy();
        // this.infiniteScroll.setup();

      }

    };

    DashboardComponent.ctorParameters = () => [{
      type: _products_service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
    }, {
      type: _shared_service_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_3__["InfiniteScrollDirective"], {
      static: false
    })], DashboardComponent.prototype, "infiniteScroll", void 0);
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/dashboard/dashboard.component.scss")).default]
    })], DashboardComponent); // export class DashboardComponent implements OnInit {
    //   // @Input('productZ') productZ: Product;
    //   loading = false;
    //   products: Product[] = [];
    //   // @Input('products') products: Product[] = [];
    //   productsX: any = [];
    //   data: any;
    //   // @Input('product') product: Product;
    //   @ViewChild(InfiniteScrollDirective, { static: false }) infiniteScroll: InfiniteScrollDirective;
    //   constructor(
    //     private service: DashboardService
    //   ) { }
    //   ngOnInit() {
    //     const x = "product/all/";
    //     this.service.sendGetRequest(x).subscribe((data: any) => {
    //       console.log("hi i am object" + data);
    //       console.log(data[0]);
    //       this.products = data.data;
    //       // data => this.prices = data.ticker
    //       // this.productsX = data.data;
    //       console.log(this.products);
    //     });
    //     // this.service.getHeroes (x) {
    //     // }
    //   }
    //   // @Input() products: Product[];
    // }

    /***/
  },

  /***/
  "./src/app/my-cart/my-cart.component.scss":
  /*!************************************************!*\
    !*** ./src/app/my-cart/my-cart.component.scss ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMyCartMyCartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".product-list {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  flex-flow: wrap;\n  padding: 30px;\n}\n\n.no-data {\n  font-weight: 400;\n}\n\n.no-data a {\n  color: #4169e1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbXktY2FydC9DOlxcVXNlcnNcXG5hdHRpXFxEZXNrdG9wXFxTdG9yZV9hcHAvc3JjXFxhcHBcXG15LWNhcnRcXG15LWNhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL215LWNhcnQvbXktY2FydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNDRjs7QURDQTtFQUNFLGdCQUFBO0FDRUY7O0FEREU7RUFDRSxjQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9teS1jYXJ0L215LWNhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZmxvdzogd3JhcDtcbiAgcGFkZGluZzogMzBweDtcbn1cbi5uby1kYXRhIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgYSB7XG4gICAgY29sb3I6ICM0MTY5ZTE7XG4gIH1cbn0iLCIucHJvZHVjdC1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZmxvdzogd3JhcDtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLm5vLWRhdGEge1xuICBmb250LXdlaWdodDogNDAwO1xufVxuLm5vLWRhdGEgYSB7XG4gIGNvbG9yOiAjNDE2OWUxO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/my-cart/my-cart.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/my-cart/my-cart.component.ts ***!
    \**********************************************/

  /*! exports provided: MyCartComponent */

  /***/
  function srcAppMyCartMyCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyCartComponent", function () {
      return MyCartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_service_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/service/cart.service */
    "./src/app/shared/service/cart.service.ts");

    let MyCartComponent = class MyCartComponent {
      constructor(cartService) {
        this.cartService = cartService;
        this.subs = [];
        this.cartProduct = [];
      }

      ngOnInit() {
        this.subs.push(this.cartService.cartItems.subscribe(val => {
          if (val) {
            this.cartProduct = val;
          }
        }));
      }

      ngOnDestroy() {
        this.subs.forEach(f => f.unsubscribe());
      }

    };

    MyCartComponent.ctorParameters = () => [{
      type: _shared_service_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
    }];

    MyCartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-my-cart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./my-cart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/my-cart/my-cart.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./my-cart.component.scss */
      "./src/app/my-cart/my-cart.component.scss")).default]
    })], MyCartComponent);
    /***/
  },

  /***/
  "./src/app/navigation/header/header.component.css":
  /*!********************************************************!*\
    !*** ./src/app/navigation/header/header.component.css ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavigationHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/navigation/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/navigation/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppNavigationHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let HeaderComponent = class HeaderComponent {
      constructor() {
        this.sidenavToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        this.onToggleSidenav = () => {
          this.sidenavToggle.emit();
        };
      }

      ngOnInit() {}

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], HeaderComponent.prototype, "sidenavToggle", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/navigation/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/navigation/sidenav-list/sidenav-list.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/navigation/sidenav-list/sidenav-list.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppNavigationSidenavListSidenavListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n.nav-caption{\r\n     display: inline-block;\r\n    padding-left: 6px;\r\n }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9zaWRlbmF2LWxpc3Qvc2lkZW5hdi1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0tBQ0sscUJBQXFCO0lBQ3RCLGlCQUFpQjtDQUNwQiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vc2lkZW5hdi1saXN0L3NpZGVuYXYtbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5uYXYtY2FwdGlvbntcclxuICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDZweDtcclxuIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/navigation/sidenav-list/sidenav-list.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/navigation/sidenav-list/sidenav-list.component.ts ***!
    \*******************************************************************/

  /*! exports provided: SidenavListComponent */

  /***/
  function srcAppNavigationSidenavListSidenavListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidenavListComponent", function () {
      return SidenavListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let SidenavListComponent = class SidenavListComponent {
      constructor() {
        this.sidenavClose = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();

        this.onSidenavClose = () => {
          this.sidenavClose.emit();
        };
      }

      ngOnInit() {}

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], SidenavListComponent.prototype, "sidenavClose", void 0);
    SidenavListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidenav-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidenav-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/sidenav-list/sidenav-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidenav-list.component.css */
      "./src/app/navigation/sidenav-list/sidenav-list.component.css")).default]
    })], SidenavListComponent);
    /***/
  },

  /***/
  "./src/app/products/create/create.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/products/create/create.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductsCreateCreateComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".create-section {\n  padding: 30px 15%;\n}\n.create-section .product-form .form-field {\n  width: 100%;\n}\n.create-section .product-form .back-btn {\n  margin-top: 20px;\n  background-color: #efefef;\n  color: #707070;\n  margin-right: 10px;\n}\n.create-section .product-form .submit-btn {\n  margin-top: 20px;\n  background-color: #4169e1;\n  color: #ffffff;\n}\n.create-section .product-form .mat-raised-button[disabled][disabled] {\n  background-color: rgba(0, 0, 0, 0.12);\n}\n.create-section .product-form ::ng-deep .mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus + .mat-form-field-label-wrapper .mat-form-field-label, .create-section .product-form ::ng-deep .mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label {\n  color: #4169e1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvY3JlYXRlL0M6XFxVc2Vyc1xcbmF0dGlcXERlc2t0b3BcXFN0b3JlX2FwcC9zcmNcXGFwcFxccHJvZHVjdHNcXGNyZWF0ZVxcY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7QUNDSjtBREVRO0VBQ0ksV0FBQTtBQ0FaO0FER1E7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDRFo7QURJUTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FDRlo7QURLUTtFQUNJLHFDQUFBO0FDSFo7QURNWTtFQUNJLGNBQUE7QUNKaEIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9jcmVhdGUvY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNyZWF0ZS1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAzMHB4IDE1JTtcblxuICAgIC5wcm9kdWN0LWZvcm0ge1xuICAgICAgICAuZm9ybS1maWVsZCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5iYWNrLWJ0biB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgICAgICAgICAgIGNvbG9yOiAjNzA3MDcwO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1Ym1pdC1idG4ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0MTY5ZTE7XG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXQtcmFpc2VkLWJ1dHRvbltkaXNhYmxlZF1bZGlzYWJsZWRdIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjEyKTtcbiAgICAgICAgfVxuICAgICAgICA6Om5nLWRlZXAge1xuICAgICAgICAgICAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cysubWF0LWZvcm0tZmllbGQtbGFiZWwtd3JhcHBlciAubWF0LWZvcm0tZmllbGQtbGFiZWwsIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM0MTY5ZTE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiLmNyZWF0ZS1zZWN0aW9uIHtcbiAgcGFkZGluZzogMzBweCAxNSU7XG59XG4uY3JlYXRlLXNlY3Rpb24gLnByb2R1Y3QtZm9ybSAuZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNyZWF0ZS1zZWN0aW9uIC5wcm9kdWN0LWZvcm0gLmJhY2stYnRuIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgY29sb3I6ICM3MDcwNzA7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5jcmVhdGUtc2VjdGlvbiAucHJvZHVjdC1mb3JtIC5zdWJtaXQtYnRuIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQxNjllMTtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG4uY3JlYXRlLXNlY3Rpb24gLnByb2R1Y3QtZm9ybSAubWF0LXJhaXNlZC1idXR0b25bZGlzYWJsZWRdW2Rpc2FibGVkXSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4uY3JlYXRlLXNlY3Rpb24gLnByb2R1Y3QtZm9ybSA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2UtbGVnYWN5Lm1hdC1mb3JtLWZpZWxkLWNhbi1mbG9hdCAubWF0LWlucHV0LXNlcnZlcjpmb2N1cyArIC5tYXQtZm9ybS1maWVsZC1sYWJlbC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1sYWJlbCwgLmNyZWF0ZS1zZWN0aW9uIC5wcm9kdWN0LWZvcm0gOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLWxlZ2FjeS5tYXQtZm9ybS1maWVsZC1jYW4tZmxvYXQubWF0LWZvcm0tZmllbGQtc2hvdWxkLWZsb2F0IC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiAjNDE2OWUxO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/products/create/create.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/products/create/create.component.ts ***!
    \*****************************************************/

  /*! exports provided: CreateComponent */

  /***/
  function srcAppProductsCreateCreateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateComponent", function () {
      return CreateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _service_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../service/product.service */
    "./src/app/products/service/product.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_model_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/model/data */
    "./src/app/shared/model/data.ts");
    /* harmony import */


    var _shared_service_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/service/common.service */
    "./src/app/shared/service/common.service.ts");
    /* harmony import */


    var _shared_service_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/service/cart.service */
    "./src/app/shared/service/cart.service.ts");

    let CreateComponent = class CreateComponent {
      constructor(activeRoute, service, fb, router, commonService, // private subscription: Subscription,
      cartService) {
        this.activeRoute = activeRoute;
        this.service = service;
        this.fb = fb;
        this.router = router;
        this.commonService = commonService;
        this.cartService = cartService;
        this.PlaceHolderImg = 'https://image.freepik.com/free-vector/abstract-colorful-sales-background-concept_52683-32614.jpg';
        this.subscription = [];
        this.titleMain = 'Create';
      }

      ngOnInit() {
        this.subscription.push(this.activeRoute.paramMap.subscribe(params => {
          this.productId = params.get('id');

          if (this.productId) {
            this.loading = true;
            this.titleMain = 'Update';
            this.getProduct();
          } else {
            this.addAnother = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
            this.initForm(new _shared_model_data__WEBPACK_IMPORTED_MODULE_5__["Product"]());
          }
        }));
      }

      ngOnDestroy() {
        this.subscription.forEach(f => f.unsubscribe());
      }

      initForm(data) {
        this.productForm = this.fb.group({
          title: [data.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]],
          CategoryName: [data.CategoryName, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3)]],
          Price: [data.Price, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(0)]],
          Quantity: [data.Quantity, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(0)]],
          Description: [data.Description, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(250)],
          ImageLink: [data.ImageLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(100)]
        });
      }

      getProduct() {
        this.service.getSingleProduct(this.productId).subscribe(res => {
          this.initForm(res);
          this.loading = false;
        });
      }

      productSubmit(productForm) {
        productForm.value.ImageLink = productForm.value.ImageLink ? productForm.value.ImageLink : this.PlaceHolderImg;
        this.service.saveProduct(this.productId, productForm.value).then(res => {
          if (this.productId) {
            this.commonService.openSnackBar(res.message);
            this.updateCart(productForm.value);
          } else {
            this.commonService.openSnackBar(res.message);

            if (this.addAnother.value) {
              this.initForm(new _shared_model_data__WEBPACK_IMPORTED_MODULE_5__["Product"]());
            } else {
              this.router.navigate(['/dashboard']);
            }
          }
        }).catch(err => {
          this.commonService.openSnackBar(err.error ? err.error.message : err.message);
        });
      }

      updateCart(data) {
        const pro = this.cartService.cartItmesValue.find(f => f._id === this.productId);

        if (pro) {
          const newPro = Object.assign({}, pro, data);

          if (newPro['cartQty'] > newPro.Quantity) {
            newPro['cartQty'] = newPro.Quantity;
            this.cartService.updateProductQtyToCart({
              ProductId: this.productId,
              Quantity: newPro['cartQty']
            });
          }

          newPro.Quantity = newPro.Quantity - newPro['cartQty'];
          this.cartService.cartItemChange.emit(newPro);
        }
      }

    };

    CreateComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: _service_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _shared_service_common_service__WEBPACK_IMPORTED_MODULE_6__["CommonService"]
    }, {
      type: _shared_service_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"]
    }];

    CreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/products/create/create.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create.component.scss */
      "./src/app/products/create/create.component.scss")).default]
    })], CreateComponent);
    /***/
  },

  /***/
  "./src/app/products/list/list.component.scss":
  /*!***************************************************!*\
    !*** ./src/app/products/list/list.component.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppProductsListListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".product-data-table {\n  padding: 30px 0;\n}\n.product-data-table .head-section h3 {\n  margin: 0;\n}\n.product-data-table .head-section .create-action {\n  padding-bottom: 1em;\n  text-align: right;\n}\n.product-data-table .head-section .create-action .create-btn {\n  background-color: #4169e1;\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdHMvbGlzdC9DOlxcVXNlcnNcXG5hdHRpXFxEZXNrdG9wXFxTdG9yZV9hcHAvc3JjXFxhcHBcXHByb2R1Y3RzXFxsaXN0XFxsaXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wcm9kdWN0cy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0FDQ0o7QURFUTtFQUNJLFNBQUE7QUNBWjtBREVRO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ0FaO0FEQ1k7RUFDSSx5QkFBQTtFQUNBLGNBQUE7QUNDaEIiLCJmaWxlIjoic3JjL2FwcC9wcm9kdWN0cy9saXN0L2xpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdC1kYXRhLXRhYmxlIHtcbiAgICBwYWRkaW5nOiAzMHB4IDA7XG5cbiAgICAuaGVhZC1zZWN0aW9uIHtcbiAgICAgICAgaDMge1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5jcmVhdGUtYWN0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIC5jcmVhdGUtYnRuIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDE2OWUxO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsIi5wcm9kdWN0LWRhdGEtdGFibGUge1xuICBwYWRkaW5nOiAzMHB4IDA7XG59XG4ucHJvZHVjdC1kYXRhLXRhYmxlIC5oZWFkLXNlY3Rpb24gaDMge1xuICBtYXJnaW46IDA7XG59XG4ucHJvZHVjdC1kYXRhLXRhYmxlIC5oZWFkLXNlY3Rpb24gLmNyZWF0ZS1hY3Rpb24ge1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5wcm9kdWN0LWRhdGEtdGFibGUgLmhlYWQtc2VjdGlvbiAuY3JlYXRlLWFjdGlvbiAuY3JlYXRlLWJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MTY5ZTE7XG4gIGNvbG9yOiAjZmZmZmZmO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/products/list/list.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/products/list/list.component.ts ***!
    \*************************************************/

  /*! exports provided: ListComponent */

  /***/
  function srcAppProductsListListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ListComponent", function () {
      return ListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../service/product.service */
    "./src/app/products/service/product.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _shared_service_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/service/common.service */
    "./src/app/shared/service/common.service.ts");
    /* harmony import */


    var _shared_service_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/service/cart.service */
    "./src/app/shared/service/cart.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    let ListComponent = class ListComponent {
      constructor(dialog, service, commonService, cartService) {
        this.dialog = dialog;
        this.service = service;
        this.commonService = commonService;
        this.cartService = cartService;
        this.dataTableConfig = {
          tableConfig: [],
          totalItem: 0,
          pageSize: 5,
          page: 0,
          dataSource: [],
          sortKey: 'createdAt',
          sortOrder: 1
        };
        this.loading = false;
        this.subs = [];
        this.products = [];
        this.getProducts(this.dataTableConfig);
        this.searchCtr = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
      }

      ngOnInit() {
        this.dataTableConfig['tableConfig'] = [{
          column: 'title',
          title: 'Name',
          sort: true
        }, {
          column: 'Price',
          title: 'Price',
          sort: true
        }, {
          column: 'Quantity',
          title: 'Quantity',
          sort: true
        }, {
          column: 'CategoryName',
          title: 'Category',
          sort: true
        }, {
          column: 'createdAt',
          title: 'Created Date',
          sort: true,
          template: this.CreatedAt
        }, {
          column: 's',
          title: '',
          template: this.Action
        }];
        this.subs.push(this.cartService.cartItems.subscribe(val => {
          if (val) {
            this.dataTableConfig.dataSource = this.service.formateProduct(this.products, val);
          }
        }));
      }

      ngOnDestroy() {
        this.subs.forEach(f => f.unsubscribe());
      }

      getProducts(config) {
        this.loading = true;
        this.service.getProducts(config, this.filter).subscribe(res => {
          this.loading = false;
          this.products = res.products;
          this.dataTableConfig.dataSource = this.service.formateProduct(this.products, this.cartService.cartItmesValue);
          this.dataTableConfig.totalItem = res.totalCount;
        });
      }

      dataTableEventChange(config) {
        this.getProducts(config);
      }

      openDeleteModal(row) {
        this.dialogRef = this.dialog.open(this.dialogTemplateRef, {
          data: row
        });
      }

      deleteProduct(data) {
        this.service.deleteProduct(data._id).then(res => {
          this.getProducts(this.dataTableConfig);
          this.commonService.openSnackBar(res.message);
          this.dialogRef.close();
        }).catch(err => {
          // console.log(err)
          this.commonService.openSnackBar(err.error ? err.error.message : err.message);
        });
      }

      emptyCheck() {
        if (!this.searchCtr.value) {
          this.filter = '';
          const config = Object.assign({}, this.dataTableConfig, {
            page: 0,
            pageSize: 10,
            sortKey: 'CreatedAt',
            sortOrder: 1
          });
          this.getProducts(config);
        }
      }

      clearsearch() {
        this.searchCtr.setValue('');
        this.emptyCheck();
      }

      loadDataTable() {
        if (this.searchCtr.value) {
          // this.filter = `{'title': { $in: ['${this.searchCtr.value}']}}`;
          this.filter = {
            title: this.searchCtr.value
          };
          const config = Object.assign({}, this.dataTableConfig, {
            page: 0,
            pageSize: 5,
            sortKey: 'CreatedAt',
            sortOrder: 1
          });
          this.getProducts(config);
        }
      }

    };

    ListComponent.ctorParameters = () => [{
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
    }, {
      type: _service_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"]
    }, {
      type: _shared_service_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"]
    }, {
      type: _shared_service_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Description', {
      static: true
    })], ListComponent.prototype, "Description", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('CreatedAt', {
      static: true
    })], ListComponent.prototype, "CreatedAt", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Action', {
      static: true
    })], ListComponent.prototype, "Action", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dataTableComponent', {
      static: true
    })], ListComponent.prototype, "dataTableComponent", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('dialogRef', {
      static: true
    })], ListComponent.prototype, "dialogTemplateRef", void 0);
    ListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/products/list/list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./list.component.scss */
      "./src/app/products/list/list.component.scss")).default]
    })], ListComponent);
    /***/
  },

  /***/
  "./src/app/products/service/product.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/products/service/product.service.ts ***!
    \*****************************************************/

  /*! exports provided: ProductService */

  /***/
  function srcAppProductsServiceProductServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/service/http.service */
    "./src/app/shared/service/http.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var loadsh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! loadsh */
    "./node_modules/loadsh/lodash.js");
    /* harmony import */


    var loadsh__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(loadsh__WEBPACK_IMPORTED_MODULE_5__);

    let ProductService = class ProductService {
      constructor(http) {
        this.http = http;
      }

      getProducts(config, filter) {
        const sendData = {
          page: config.page,
          limit: config.pageSize,
          filter,
          sortKey: config.sortKey || "_id",
          sortOrder: config.sortOrder || 1
        };
        return this.http.post('product/all/', sendData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res.data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(e => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({
          // limit: config.pageSize,
          // page: config.page,
          totalCount: config.totalItem,
          products: config.dataSource
        })));
      }

      getSingleProduct(id) {
        return this.http.get("product/".concat(id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(res => res.data));
      }

      saveProduct(id, data) {
        if (id) {
          return this.http.post('product/' + id, data).toPromise();
        } else {
          return this.http.put('product/create', data).toPromise();
        }
      }

      deleteProduct(id) {
        return this.http.delete('product/' + id).toPromise();
      }

      formateProduct(data, cartList) {
        const products = Object(loadsh__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"])(data);
        return products.map(m => {
          const cart = cartList.find(c => c._id === m._id);
          if (cart) m = Object.assign({}, m, cart);
          m['cartQty'] = m['cartQty'] || 0;
          return m;
        });
      }

    };

    ProductService.ctorParameters = () => [{
      type: _shared_service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
    }];

    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ProductService);
    /***/
  },

  /***/
  "./src/app/shared/data-table/data-table.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/shared/data-table/data-table.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedDataTableDataTableComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2RhdGEtdGFibGUvQzpcXFVzZXJzXFxuYXR0aVxcRGVza3RvcFxcU3RvcmVfYXBwL3NyY1xcYXBwXFxzaGFyZWRcXGRhdGEtdGFibGVcXGRhdGEtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9kYXRhLXRhYmxlL2RhdGEtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvZGF0YS10YWJsZS9kYXRhLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xuICAgIHdpZHRoOiAxMDAlO1xufSIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/shared/data-table/data-table.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/shared/data-table/data-table.component.ts ***!
    \***********************************************************/

  /*! exports provided: DataTableComponent */

  /***/
  function srcAppSharedDataTableDataTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTableComponent", function () {
      return DataTableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _dataTable_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dataTable.model */
    "./src/app/shared/data-table/dataTable.model.ts");

    let DataTableComponent = class DataTableComponent {
      constructor() {
        this.displayedColumns = [];
        this.changeTableData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dataTableEventChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      ngOnInit() {
        this.preparDataTable(this.config);
        this.changeTableData.subscribe(response => {
          this.preparDataTable(response);
        });
      }

      preparDataTable(config) {
        if (!config) config = new _dataTable_model__WEBPACK_IMPORTED_MODULE_3__["DataTableConfig"]();
        config.pageSizeOptions = config.pageSizeOptions ? config.pageSizeOptions : [10, 25, 50, 100];
        if (config && !config.tableConfig) config.tableConfig = [];
        if (config && !config.dataSource) config.dataSource = [];
        this.displayedColumns = config.tableConfig.map(m => m.column);
      }

      pageEvent(event) {
        this.config.page = event.pageIndex;
        this.config.pageSize = event.pageSize;
        this.dataTableEventChange.emit(this.config);
      }

      sortData(event) {
        this.config.sortKey = event.active;
        this.config.sortOrder = event.direction === 'asc' ? 1 : -1;
        this.dataTableEventChange.emit(this.config);
      }

    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("config")], DataTableComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])("dataTableEventChange")], DataTableComponent.prototype, "dataTableEventChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      static: true
    })], DataTableComponent.prototype, "paginator", void 0);
    DataTableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-data-table",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./data-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/data-table/data-table.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./data-table.component.scss */
      "./src/app/shared/data-table/data-table.component.scss")).default]
    })], DataTableComponent);
    /***/
  },

  /***/
  "./src/app/shared/data-table/dataTable.model.ts":
  /*!******************************************************!*\
    !*** ./src/app/shared/data-table/dataTable.model.ts ***!
    \******************************************************/

  /*! exports provided: TableConfig, DataTableConfig */

  /***/
  function srcAppSharedDataTableDataTableModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TableConfig", function () {
      return TableConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataTableConfig", function () {
      return DataTableConfig;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class TableConfig {
      constructor() {
        this.column = '';
        this.title = '';
      }

    }

    class DataTableConfig {
      constructor() {
        this.tableConfig = [];
        this.dataSource = [];
        this.totalItem = 0;
        this.pageSize = 10;
        this.page = 0;
      }

    }
    /***/

  },

  /***/
  "./src/app/shared/model/data.ts":
  /*!**************************************!*\
    !*** ./src/app/shared/model/data.ts ***!
    \**************************************/

  /*! exports provided: Product */

  /***/
  function srcAppSharedModelDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Product", function () {
      return Product;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class Product {} // export class images {
    // }

    /***/

  },

  /***/
  "./src/app/shared/modules/card/card.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/shared/modules/card/card.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedModulesCardCardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9tb2R1bGVzL2NhcmQvY2FyZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/shared/modules/card/card.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/modules/card/card.component.ts ***!
    \*******************************************************/

  /*! exports provided: CardComponent */

  /***/
  function srcAppSharedModulesCardCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardComponent", function () {
      return CardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/cart.service */
    "./src/app/shared/service/cart.service.ts");

    let CardComponent = class CardComponent {
      constructor(cartService) {
        this.cartService = cartService;
        this.cartItems = [];
        this.subs = [];
        this.loading = false;
      }

      ngOnInit() {// console.log(this.product)
      }

      ngOnDestroy() {
        this.subs.forEach(f => f.unsubscribe());
      }

      cartQtyChange(type, product) {
        this.loading = true;
        const prop = type === 'inc' ? 'cartQty' : 'Quantity';
        this.cartService.cartQtyUpdate(product, prop).then(res => this.loading = false).catch(err => this.loading = false);
      }

      addToCart(product) {
        this.loading = true;

        if (product.Quantity > 0) {
          this.cartService.addToCart(product).then(res => this.loading = false).catch(err => this.loading = false);
        }
      }

      get decCheck() {
        if (this.cartComponent) return this.product['cartQty'] > 1;
        return this.product['cartQty'] > 0;
      }

      get incCheck() {
        return this.product['Quantity'] > 0;
      }

      removeCartItem(product) {
        this.loading = true;
        this.cartService.removeCartItem(product).then(res => this.loading = false).catch(err => this.loading = false);
      }

      onImgError(event) {
        event.target.src = 'https://image.freepik.com/free-vector/abstract-colorful-sales-background-concept_52683-32614.jpg';
      }

    };

    CardComponent.ctorParameters = () => [{
      type: _service_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('product')], CardComponent.prototype, "product", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('cartComponent')], CardComponent.prototype, "cartComponent", void 0);
    CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/card/card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card.component.scss */
      "./src/app/shared/modules/card/card.component.scss")).default]
    })], CardComponent);
    /***/
  },

  /***/
  "./src/app/shared/modules/product-details/details.service.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/shared/modules/product-details/details.service.ts ***!
    \*******************************************************************/

  /*! exports provided: ProductDetailsService */

  /***/
  function srcAppSharedModulesProductDetailsDetailsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailsService", function () {
      return ProductDetailsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _service_http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../service/http.service */
    "./src/app/shared/service/http.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    let ProductDetailsService = class ProductDetailsService {
      constructor(http) {
        this.http = http;
      }

      getProducts(id) {
        return this.http.get('product/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null)));
      }

    };

    ProductDetailsService.ctorParameters = () => [{
      type: _service_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
    }];

    ProductDetailsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], ProductDetailsService);
    /***/
  },

  /***/
  "./src/app/shared/modules/product-details/product-details.component.scss":
  /*!*******************************************************************************!*\
    !*** ./src/app/shared/modules/product-details/product-details.component.scss ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppSharedModulesProductDetailsProductDetailsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".product-details {\n  margin: 0 15%;\n  padding: 30px;\n}\n.product-details .detail-container {\n  display: -webkit-box;\n  display: flex;\n  flex-flow: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n.product-details .detail-container .d-image {\n  -webkit-box-flex: 1;\n          flex: 1;\n  padding: 15px;\n}\n.product-details .detail-container .d-image .d-img {\n  max-height: 250px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n.product-details .detail-container .details {\n  -webkit-box-flex: 1;\n          flex: 1;\n  padding: 15px;\n}\n.product-details .detail-container .details .chips {\n  margin: 10px 0;\n}\n.product-details .description {\n  padding: 15px;\n}\n.add-cart-action .add-cart-btn {\n  border-radius: 5px;\n  background-color: transparent;\n  border: 1px solid #707070;\n  color: #333333;\n}\n.add-cart-action .btn-cart-action {\n  border-radius: 5px;\n  background-color: transparent;\n  border: 1px solid #707070;\n  color: #333333;\n}\n.add-cart-action .btn-cart-action span.qty {\n  border-right: 1px solid #707070;\n  border-left: 1px solid #707070;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL21vZHVsZXMvcHJvZHVjdC1kZXRhaWxzL0M6XFxVc2Vyc1xcbmF0dGlcXERlc2t0b3BcXFN0b3JlX2FwcC9zcmNcXGFwcFxcc2hhcmVkXFxtb2R1bGVzXFxwcm9kdWN0LWRldGFpbHNcXHByb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hhcmVkL21vZHVsZXMvcHJvZHVjdC1kZXRhaWxzL3Byb2R1Y3QtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FDQ0Y7QURBRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDRUo7QURESTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGFBQUE7QUNHTjtBREZNO0VBQ0UsaUJBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FDSVI7QURBSTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGFBQUE7QUNFTjtBREFNO0VBQ0UsY0FBQTtBQ0VSO0FESUU7RUFDRSxhQUFBO0FDRko7QURPRTtFQUNFLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUNKSjtBRE1FO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0pKO0FETUk7RUFDRSwrQkFBQTtFQUNBLDhCQUFBO0FDSk4iLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbW9kdWxlcy9wcm9kdWN0LWRldGFpbHMvcHJvZHVjdC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3QtZGV0YWlscyB7XG4gIG1hcmdpbjogMCAxNSU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIC5kZXRhaWwtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAuZC1pbWFnZSB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgIC5kLWltZyB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDI1MHB4O1xuICAgICAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5kZXRhaWxzIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICBwYWRkaW5nOiAxNXB4O1xuXG4gICAgICAuY2hpcHMge1xuICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICAgIH1cblxuICAgIH1cbiAgfVxuXG4gIC5kZXNjcmlwdGlvbiB7XG4gICAgcGFkZGluZzogMTVweDtcbiAgfVxufVxuXG4uYWRkLWNhcnQtYWN0aW9uIHtcbiAgLmFkZC1jYXJ0LWJ0biB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gIH1cbiAgLmJ0bi1jYXJ0LWFjdGlvbiB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM3MDcwNzA7XG4gICAgY29sb3I6ICMzMzMzMzM7XG5cbiAgICBzcGFuLnF0eSB7XG4gICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNzA3MDcwO1xuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjNzA3MDcwO1xuICAgIH1cbiAgfVxufVxuIiwiLnByb2R1Y3QtZGV0YWlscyB7XG4gIG1hcmdpbjogMCAxNSU7XG4gIHBhZGRpbmc6IDMwcHg7XG59XG4ucHJvZHVjdC1kZXRhaWxzIC5kZXRhaWwtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1mbG93OiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5wcm9kdWN0LWRldGFpbHMgLmRldGFpbC1jb250YWluZXIgLmQtaW1hZ2Uge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLnByb2R1Y3QtZGV0YWlscyAuZGV0YWlsLWNvbnRhaW5lciAuZC1pbWFnZSAuZC1pbWcge1xuICBtYXgtaGVpZ2h0OiAyNTBweDtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbi5wcm9kdWN0LWRldGFpbHMgLmRldGFpbC1jb250YWluZXIgLmRldGFpbHMge1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAxNXB4O1xufVxuLnByb2R1Y3QtZGV0YWlscyAuZGV0YWlsLWNvbnRhaW5lciAuZGV0YWlscyAuY2hpcHMge1xuICBtYXJnaW46IDEwcHggMDtcbn1cbi5wcm9kdWN0LWRldGFpbHMgLmRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogMTVweDtcbn1cblxuLmFkZC1jYXJ0LWFjdGlvbiAuYWRkLWNhcnQtYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcwNzA3MDtcbiAgY29sb3I6ICMzMzMzMzM7XG59XG4uYWRkLWNhcnQtYWN0aW9uIC5idG4tY2FydC1hY3Rpb24ge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzA3MDcwO1xuICBjb2xvcjogIzMzMzMzMztcbn1cbi5hZGQtY2FydC1hY3Rpb24gLmJ0bi1jYXJ0LWFjdGlvbiBzcGFuLnF0eSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM3MDcwNzA7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgIzcwNzA3MDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/shared/modules/product-details/product-details.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/shared/modules/product-details/product-details.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: ProductDetailsComponent */

  /***/
  function srcAppSharedModulesProductDetailsProductDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductDetailsComponent", function () {
      return ProductDetailsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./details.service */
    "./src/app/shared/modules/product-details/details.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_service_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/service/cart.service */
    "./src/app/shared/service/cart.service.ts");
    /* harmony import */


    var loadsh__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! loadsh */
    "./node_modules/loadsh/lodash.js");
    /* harmony import */


    var loadsh__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(loadsh__WEBPACK_IMPORTED_MODULE_5__);

    let ProductDetailsComponent = class ProductDetailsComponent {
      constructor(service, activeRoute, cartService) {
        this.service = service;
        this.activeRoute = activeRoute;
        this.cartService = cartService;
        this.subscription = [];
        this.subscription.push(this.activeRoute.paramMap.subscribe(val => {
          this.productId = val.get('id');
          this.getProduct();
        }));
      }

      ngOnInit() {
        this.subscription.push(this.cartService.cartItems.subscribe(val => {
          if (val && this.product) {
            const pro = val.find(f => f._id === this.product._id);

            if (pro) {
              this.product['cartQty'] = pro['cartQty'];
              this.product.Quantity = pro.Quantity;
            } else this.product = Object(loadsh__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"])(this.actualProduct);
          }
        }));
      }

      ngOnDestroy() {
        this.subscription.forEach(f => f.unsubscribe());
      }

      getProduct() {
        this.loading = true;
        this.service.getProducts(this.productId).subscribe(res => {
          this.loading = false;

          if (res) {
            res['cartQty'] = 0;
            this.actualProduct = Object(loadsh__WEBPACK_IMPORTED_MODULE_5__["cloneDeep"])(res);
            const pro = this.cartService.cartItmesValue.find(f => f._id === res._id);

            if (pro) {
              res['cartQty'] = pro['cartQty'];
              res.Quantity = pro.Quantity;
            }

            this.product = res;
          }

          this.product = res;
        });
      }

      cartQtyChange(type, product) {
        this.loadingCart = true;
        const prop = type === 'inc' ? 'cartQty' : 'Quantity';
        this.cartService.cartQtyUpdate(product, prop).then(res => this.loadingCart = false).catch(err => this.loadingCart = false);
      }

      addToCart(product) {
        this.loadingCart = true;

        if (product.Quantity > 0) {
          this.cartService.addToCart(product).then(res => this.loadingCart = false).catch(err => this.loadingCart = false);
        }
      }

    };

    ProductDetailsComponent.ctorParameters = () => [{
      type: _details_service__WEBPACK_IMPORTED_MODULE_2__["ProductDetailsService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _shared_service_cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"]
    }];

    ProductDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-product-details',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./product-details.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/modules/product-details/product-details.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./product-details.component.scss */
      "./src/app/shared/modules/product-details/product-details.component.scss")).default]
    })], ProductDetailsComponent);
    /***/
  },

  /***/
  "./src/app/shared/service/cart.service.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/service/cart.service.ts ***!
    \************************************************/

  /*! exports provided: CartService */

  /***/
  function srcAppSharedServiceCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartService", function () {
      return CartService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./http.service */
    "./src/app/shared/service/http.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./common.service */
    "./src/app/shared/service/common.service.ts");

    let CartService = class CartService {
      constructor(http, commonService) {
        this.http = http;
        this.commonService = commonService;
        this.cartItmesValue = [];
        this.cartItems = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.cartItemChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cartItems.subscribe(val => {
          this.cartItmesValue = val || this.cartItmesValue;
        });
      }

      getCartList() {
        return this.http.get('cart/' + this.cartId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(res => res.data), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])([])));
      }

      createCart(data) {
        return this.http.post('cart', data).toPromise();
      }

      addNewProductToCart(data) {
        return this.http.post('cart/' + this.cartId, data).toPromise();
      }

      updateProductQtyToCart(data) {
        return this.http.post('cart/update-item-qty/' + this.cartId, data).toPromise();
      }

      removeProductFromCart(data) {
        return this.http.post('cart/delete-item/' + this.cartId, data).toPromise();
      }

      removeCart(data) {
        return this.http.delete('cart/' + this.cartId, data).toPromise();
      }

      get cartId() {
        return localStorage.getItem('cartId');
      }

      addToCart(product) {
        if (product.cartQty == null) {
          product.cartQty = 0;
        }

        if (this.cartId) {
          const sendData = {
            "ProductId": product._id,
            "Quantity": product.cartQty + 1
          };
          return this.addNewProductToCart(sendData).then(res => {
            this.commonService.openSnackBar(res.message);
            return this.addCartResponse(product, 'cartQty', 'Quantity');
          }).catch(err => {
            this.commonService.openSnackBar(err.error ? err.error.message : err.message);
            return this.promise(false);
          });
        } else {
          const sendData = {
            "ProductIds": [{
              "ProductId": product._id,
              "Quantity": 1
            }]
          };
          return this.createCart(sendData).then(res => {
            localStorage.setItem('cartId', res.data._id);
            this.commonService.openSnackBar(res.message);
            return this.promise(false);
          }).catch(err => {
            this.commonService.openSnackBar(err.error ? err.error.message : err.message);
            return this.promise(false);
          });
        }
      }

      addCartResponse(product, incProp, decProp) {
        product[incProp] += 1;
        product[decProp] -= 1;
        this.cartItemChange.emit(product);
        return this.promise(false);
      }

      promise(data) {
        return new Promise((resolve, reject) => {
          return resolve(data);
        });
      }

      cartQtyUpdate(product, prop) {
        const sendData = {
          "ProductId": product._id,
          "Quantity": prop === 'cartQty' ? product['cartQty'] + 1 : product['cartQty'] - 1
        };

        if (sendData.Quantity > 0) {
          return this.updateProductQtyToCart(sendData).then(res => {
            // console.log(res);
            this.commonService.openSnackBar(res.message);
            const dec = prop === 'cartQty' ? 'Quantity' : 'cartQty';
            return this.addCartResponse(product, prop, dec);
          }).catch(err => {
            this.commonService.openSnackBar(err.error ? err.error.message : err.message);
            return this.promise(false);
          });
        } else {
          return this.removeCartItem(product);
        }
      }

      removeCartItem(product) {
        const data = {
          "ProductId": product._id
        };
        return this.removeProductFromCart(data).then(res => {
          this.commonService.openSnackBar(res.message);
          this.cartItmesValue = this.cartItmesValue.filter(f => f._id !== data.ProductId);
          this.cartItems.next(this.cartItmesValue);
          return this.promise(false);
        }).catch(err => {
          this.commonService.openSnackBar(err.error ? err.error.message : err.message);
          return this.promise(false);
        });
      }

    };

    CartService.ctorParameters = () => [{
      type: _http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]
    }, {
      type: _common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"]
    }];

    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CartService);
    /***/
  },

  /***/
  "./src/app/shared/service/common.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/shared/service/common.service.ts ***!
    \**************************************************/

  /*! exports provided: CommonService */

  /***/
  function srcAppSharedServiceCommonServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CommonService", function () {
      return CommonService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");

    let CommonService = class CommonService {
      constructor(_snackBar) {
        this._snackBar = _snackBar;
      }

      openSnackBar(message) {
        this._snackBar.open(message, '', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: 'custome-alert'
        });
      }

    };

    CommonService.ctorParameters = () => [{
      type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
    }];

    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CommonService);
    /***/
  },

  /***/
  "./src/app/shared/service/http.service.ts":
  /*!************************************************!*\
    !*** ./src/app/shared/service/http.service.ts ***!
    \************************************************/

  /*! exports provided: HttpService */

  /***/
  function srcAppSharedServiceHttpServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpService", function () {
      return HttpService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    let HttpService = class HttpService {
      constructor(http) {
        this.http = http;
        this.endPoint = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiEndPoint;
      }

      get(url, option) {
        return this.http.get(this.endPoint + url, option);
      }

      post(url, body, option) {
        return this.http.post(this.endPoint + url, body, option);
      }

      put(url, body, option) {
        return this.http.put(this.endPoint + url, body, option);
      }

      delete(url, option) {
        return this.http.delete(this.endPoint + url, option);
      }

    };

    HttpService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    HttpService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], HttpService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false,
      apiEndPoint: 'http://localhost:3000/api/'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\natti\Desktop\Store_app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map