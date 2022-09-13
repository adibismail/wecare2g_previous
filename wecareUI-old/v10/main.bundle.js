webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_login_login_component__ = __webpack_require__("../../../../../src/app/component/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/component/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_map_map_component__ = __webpack_require__("../../../../../src/app/component/map/map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_projects__ = __webpack_require__("../../../../../src/app/component/projects/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_employee__ = __webpack_require__("../../../../../src/app/component/employee/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_report_report_component__ = __webpack_require__("../../../../../src/app/component/report/report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_alert_alert_component__ = __webpack_require__("../../../../../src/app/component/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__component_settings_settings_component__ = __webpack_require__("../../../../../src/app/component/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__layouts__ = __webpack_require__("../../../../../src/app/layouts/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_admin_admin_component__ = __webpack_require__("../../../../../src/app/component/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_router_router_component__ = __webpack_require__("../../../../../src/app/component/router/router.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_no_access_no_access_component__ = __webpack_require__("../../../../../src/app/component/no-access/no-access.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__component_site_supervisor_site_supervisor_component__ = __webpack_require__("../../../../../src/app/component/site-supervisor/site-supervisor.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_10__layouts__["a" /* HomeLayoutComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_14__shared__["a" /* AuthGuard */]],
        children: [
            { path: '', redirectTo: "/dashboard", pathMatch: 'full' },
            { path: 'dashboard', canActivate: [__WEBPACK_IMPORTED_MODULE_14__shared__["h" /* UserAccessAuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_3__component_dashboard_dashboard_component__["a" /* DashboardComponent */], data: { page: "dashboard" } },
            { path: 'map', canActivate: [__WEBPACK_IMPORTED_MODULE_14__shared__["h" /* UserAccessAuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_4__component_map_map_component__["a" /* MapComponent */], data: { page: "map" } },
            { path: 'projects', canActivate: [__WEBPACK_IMPORTED_MODULE_14__shared__["h" /* UserAccessAuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_5__component_projects__["a" /* ProjectsComponent */], data: { page: "projects" } },
            { path: 'projects/:id', canActivate: [__WEBPACK_IMPORTED_MODULE_14__shared__["h" /* UserAccessAuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_5__component_projects__["b" /* ViewProjectComponent */], data: { page: "projects" } },
            { path: 'employee', canActivate: [__WEBPACK_IMPORTED_MODULE_14__shared__["h" /* UserAccessAuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_6__component_employee__["a" /* EmployeeComponent */], data: { page: "employee" } },
            { path: 'employee/:id', canActivate: [__WEBPACK_IMPORTED_MODULE_14__shared__["h" /* UserAccessAuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_6__component_employee__["b" /* ViewEmployeeComponent */], data: { page: "employee" } },
            { path: 'report', canActivate: [__WEBPACK_IMPORTED_MODULE_14__shared__["h" /* UserAccessAuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_7__component_report_report_component__["a" /* ReportComponent */], data: { page: "report" } },
            { path: 'alert', canActivate: [__WEBPACK_IMPORTED_MODULE_14__shared__["h" /* UserAccessAuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_8__component_alert_alert_component__["a" /* AlertComponent */], data: { page: "alert" } },
            { path: 'site-supervisor', canActivate: [__WEBPACK_IMPORTED_MODULE_14__shared__["h" /* UserAccessAuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_15__component_site_supervisor_site_supervisor_component__["a" /* SiteSupervisorComponent */], data: { page: "supervisor" } },
            { path: 'settings', canActivate: [__WEBPACK_IMPORTED_MODULE_14__shared__["h" /* UserAccessAuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_9__component_settings_settings_component__["a" /* SettingsComponent */], data: { page: "settings" } },
            { path: 'admin', canActivate: [__WEBPACK_IMPORTED_MODULE_14__shared__["h" /* UserAccessAuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_11__component_admin_admin_component__["a" /* AdminComponent */], data: { page: "superuser" } },
            { path: 'router', canActivate: [__WEBPACK_IMPORTED_MODULE_14__shared__["h" /* UserAccessAuthGuard */]], component: __WEBPACK_IMPORTED_MODULE_12__component_router_router_component__["a" /* RouterComponent */], data: { page: "routerconfig" } },
            { path: 'no-access', component: __WEBPACK_IMPORTED_MODULE_13__component_no_access_no_access_component__["a" /* NoAccessComponent */], data: { page: "noaccess" } },
        ]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_10__layouts__["b" /* LoginLayoutComponent */],
        children: [{
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_2__component_login_login_component__["a" /* LoginComponent */]
            }]
    },
    {
        path: '**', redirectTo: "/login"
    }
    // { path: 'login',component: LoginComponent,data:{page:"login"}},
    // { path: 'dashboard',component:DashboardComponent,canActivate: [AuthGuard],data:{page:"dashboard"}},
    // { path: 'map',component:MapComponent,canActivate: [AuthGuard],data:{page:"map"}},
    // { path: 'projects',component:ProjectsComponent,canActivate: [AuthGuard],data:{page:"projects"}},
    // { path: 'employee',component:EmployeeComponent,canActivate: [AuthGuard],data:{page:"employee"}},
    // { path: 'report',component:ReportComponent,canActivate: [AuthGuard],data:{page:"report"}},
    // { path: 'alert',component:AlertComponent,canActivate: [AuthGuard],data:{page:"alert"}},
    // { path: 'settings',component:SettingsComponent,canActivate: [AuthGuard],data:{page:"settings"}},
    // { path: '**',redirectTo:"/dashboard"}
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- onShow is EventReceive from EventEmitter from header component hamburger button and control the display of the sidebar nav -->\r\n<!-- <app-header (onShow)=\"onShow($event)\"></app-header> -->\r\n<!-- [@showIt] and [@move] is animation trigger -->\r\n<!-- <app-sidenav [@showIt]=\"show\" [show]=\"show\"></app-sidenav> -->\r\n<!-- <div [@move]=\"move\"> -->\r\n  <router-outlet></router-outlet>\r\n<!-- </div> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_messaging_messaging_service__ = __webpack_require__("../../../../../src/app/shared/services/messaging/messaging.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(translate, callApi, msgService, authService) {
        var _this = this;
        this.translate = translate;
        this.callApi = callApi;
        this.msgService = msgService;
        this.authService = authService;
        this.chCountry = ["CN", "HK", "TW"];
        // let userLang=navigator.language.split('-')[0];
        //  notification.
        this.authService.isLoggedIn.subscribe(function (loggedIn) {
            if (loggedIn) {
                _this.requestPush();
            }
        });
    }
    AppComponent.prototype.requestPush = function () {
        this.msgService.getPermission();
        this.msgService.receiveMessage();
        this.message = this.msgService.currentMessage;
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.changeLanguage("en");
        this.changeMapScript("en");
        this.callApi.getData(__WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].getApiCallerInfo)
            .subscribe(function (data) {
            console.log("country: " + data.country);
            var lang = _this.checkCountry(_this.chCountry, data.country);
            if (lang == null)
                lang = "ch";
            _this.changeLanguage(lang);
            _this.changeMapScript(lang);
        });
    };
    AppComponent.prototype.checkCountry = function (chCountry, country) {
        if (chCountry.includes(country))
            return "ch";
        else
            return "en";
    };
    AppComponent.prototype.changeLanguage = function (lang) {
        this.translate.use(lang);
    };
    AppComponent.prototype.changeMapScript = function (lang) {
        // console.log("change map script "+lang);
        var s = document.createElement("script");
        s.type = "text/javascript";
        if (lang == "en")
            s.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyA5kw0UrHPHP-wMM162HPHz2fPEc3u4m2o&libraries=drawing,places,geometry";
        else if (lang == "ch")
            s.src = "https://www.google.cn/maps/api/js?v=3&libraries=places&region=cn&language=zh-CN&key=AIzaSyA5kw0UrHPHP-wMM162HPHz2fPEc3u4m2o";
        else
            console.log("problem at changeMapScript");
        s.innerHTML = null;
        s.id = "map";
        document.getElementById("googleMap").innerHTML = "";
        document.getElementById("googleMap").appendChild(s);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_translate__["b" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services__["c" /* CallApiService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_messaging_messaging_service__["a" /* MessagingService */],
            __WEBPACK_IMPORTED_MODULE_4__shared__["b" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_helpers_jwt_interceptor__ = __webpack_require__("../../../../../src/app/shared/helpers/jwt.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_header_header_component__ = __webpack_require__("../../../../../src/app/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_login_login_component__ = __webpack_require__("../../../../../src/app/component/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/component/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_map__ = __webpack_require__("../../../../../src/app/component/map/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_projects___ = __webpack_require__("../../../../../src/app/component/projects/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__component_employee_employee_component__ = __webpack_require__("../../../../../src/app/component/employee/employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_report_report_component__ = __webpack_require__("../../../../../src/app/component/report/report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_alert_alert_component__ = __webpack_require__("../../../../../src/app/component/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_settings_settings_component__ = __webpack_require__("../../../../../src/app/component/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_sidenav_sidenav_component__ = __webpack_require__("../../../../../src/app/shared/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ng2_google_charts__ = __webpack_require__("../../../../ng2-google-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ngx_bootstrap_bs_moment__ = __webpack_require__("../../../../ngx-bootstrap/bs-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ngx_bootstrap_locale__ = __webpack_require__("../../../../ngx-bootstrap/locale.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_select__ = __webpack_require__("../../../../ng2-select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_ng2_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_26_ng2_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__asymmetrik_ngx_leaflet__ = __webpack_require__("../../../../@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__asymmetrik_ngx_leaflet_draw__ = __webpack_require__("../../../../@asymmetrik/ngx-leaflet-draw/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng4_geoautocomplete__ = __webpack_require__("../../../../ng4-geoautocomplete/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_ng2_translate_src_translate_service__ = __webpack_require__("../../../../ng2-translate/src/translate.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33_ngx_image_cropper__ = __webpack_require__("../../../../ngx-image-cropper/ngx-image-cropper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ngx_modal_dialog__ = __webpack_require__("../../../../ngx-modal-dialog/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_angular2_datetimepicker__ = __webpack_require__("../../../../angular2-datetimepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36_ngx_bootstrap_timepicker__ = __webpack_require__("../../../../ngx-bootstrap/timepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_angularfire2_auth__ = __webpack_require__("../../../../angularfire2/auth/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_37_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_firebase__ = __webpack_require__("../../../../firebase/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_38_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39_firebase_messaging__ = __webpack_require__("../../../../firebase/messaging/dist/index.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__shared_tab_tab_component__ = __webpack_require__("../../../../../src/app/shared/tab/tab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__shared_tabs_tabs_component__ = __webpack_require__("../../../../../src/app/shared/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__shared___ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__component_projects_projects_table_projects_table_component__ = __webpack_require__("../../../../../src/app/component/projects/projects-table/projects-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__component_projects_add_project_add_project_component__ = __webpack_require__("../../../../../src/app/component/projects/add-project/add-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__component_projects_add_project_project_detail_project_detail_component__ = __webpack_require__("../../../../../src/app/component/projects/add-project/project-detail/project-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__component_projects_add_project_project_location_project_location_component__ = __webpack_require__("../../../../../src/app/component/projects/add-project/project-location/project-location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__component_projects_add_project_project_workers_project_workers_component__ = __webpack_require__("../../../../../src/app/component/projects/add-project/project-workers/project-workers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__component_employee_add_employee_add_employee_component__ = __webpack_require__("../../../../../src/app/component/employee/add-employee/add-employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__layouts_home_layout_home_layout_component__ = __webpack_require__("../../../../../src/app/layouts/home-layout/home-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__layouts_login_layout_login_layout_component__ = __webpack_require__("../../../../../src/app/layouts/login-layout/login-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__component_employee_view_employee_view_employee_component__ = __webpack_require__("../../../../../src/app/component/employee/view-employee/view-employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__component_projects_view_project_project_info_project_info_component__ = __webpack_require__("../../../../../src/app/component/projects/view-project/project-info/project-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__component_projects_view_project_project_map_project_map_component__ = __webpack_require__("../../../../../src/app/component/projects/view-project/project-map/project-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__component_projects_view_project_project_view_workers_project_view_workers_component__ = __webpack_require__("../../../../../src/app/component/projects/view-project/project-view-workers/project-view-workers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__component_dashboard_health_visual_health_visual_component__ = __webpack_require__("../../../../../src/app/component/dashboard/health-visual/health-visual.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__shared_card_card_component__ = __webpack_require__("../../../../../src/app/shared/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__component_employee_view_employee_sensor_data_sensor_data_component__ = __webpack_require__("../../../../../src/app/component/employee/view-employee/sensor-data/sensor-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__component_employee_view_employee_send_command_send_command_component__ = __webpack_require__("../../../../../src/app/component/employee/view-employee/send-command/send-command.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__component_dashboard_on_duty_chart_on_duty_chart_component__ = __webpack_require__("../../../../../src/app/component/dashboard/on-duty-chart/on-duty-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__shared_form_form_component__ = __webpack_require__("../../../../../src/app/shared/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__component_admin_admin_component__ = __webpack_require__("../../../../../src/app/component/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__component_employee_view_employee_employee_history_map_employee_history_map_component__ = __webpack_require__("../../../../../src/app/component/employee/view-employee/employee-history-map/employee-history-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__shared_pipes_date_filter_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/date-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__component_admin_add_admin_add_admin_component__ = __webpack_require__("../../../../../src/app/component/admin/add-admin/add-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__component_admin_edit_admin_edit_admin_component__ = __webpack_require__("../../../../../src/app/component/admin/edit-admin/edit-admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__component_router_router_component__ = __webpack_require__("../../../../../src/app/component/router/router.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__component_router_add_router_add_router_component__ = __webpack_require__("../../../../../src/app/component/router/add-router/add-router.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__component_no_access_no_access_component__ = __webpack_require__("../../../../../src/app/component/no-access/no-access.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__component_site_supervisor_site_supervisor_component__ = __webpack_require__("../../../../../src/app/component/site-supervisor/site-supervisor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__component_site_supervisor_add_site_supervisor_add_site_supervisor_component__ = __webpack_require__("../../../../../src/app/component/site-supervisor/add-site-supervisor/add-site-supervisor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__component_site_supervisor_edit_site_supervisor_edit_site_supervisor_component__ = __webpack_require__("../../../../../src/app/component/site-supervisor/edit-site-supervisor/edit-site-supervisor.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_76__shared_services_messaging_messaging_service__ = __webpack_require__("../../../../../src/app/shared/services/messaging/messaging.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_77__component_projects_view_project_edit_project_edit_project_component__ = __webpack_require__("../../../../../src/app/component/projects/view-project/edit-project/edit-project.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















//external library






Object(__WEBPACK_IMPORTED_MODULE_24_ngx_bootstrap_bs_moment__["a" /* defineLocale */])('en-gb', __WEBPACK_IMPORTED_MODULE_25_ngx_bootstrap_locale__["a" /* enGb */]);














//animations



//services


//pipes


















//shared component
















__WEBPACK_IMPORTED_MODULE_38_firebase__["initializeApp"](__WEBPACK_IMPORTED_MODULE_75__environments_environment__["a" /* environment */].firebase);
__WEBPACK_IMPORTED_MODULE_38_firebase__["messaging"]();
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__shared_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_9__shared_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_11__component_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_12__component_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_13__component_map__["b" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_14__component_projects___["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_15__component_employee_employee_component__["a" /* EmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_16__component_report_report_component__["a" /* ReportComponent */],
                __WEBPACK_IMPORTED_MODULE_17__component_alert_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_18__component_settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_19__shared_sidenav_sidenav_component__["a" /* SidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_41__shared_tab_tab_component__["a" /* TabComponent */],
                __WEBPACK_IMPORTED_MODULE_42__shared_tabs_tabs_component__["a" /* TabsComponent */],
                __WEBPACK_IMPORTED_MODULE_45__shared___["c" /* DataFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_46__component_projects_projects_table_projects_table_component__["a" /* ProjectsTableComponent */],
                __WEBPACK_IMPORTED_MODULE_47__component_projects_add_project_add_project_component__["a" /* AddProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_48__component_projects_add_project_project_detail_project_detail_component__["a" /* ProjectDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_49__component_projects_add_project_project_location_project_location_component__["a" /* ProjectLocationComponent */],
                __WEBPACK_IMPORTED_MODULE_50__component_projects_add_project_project_workers_project_workers_component__["a" /* ProjectWorkersComponent */],
                __WEBPACK_IMPORTED_MODULE_57__component_projects_view_project_project_view_workers_project_view_workers_component__["a" /* ProjectViewWorkersComponent */],
                __WEBPACK_IMPORTED_MODULE_51__component_employee_add_employee_add_employee_component__["a" /* AddEmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_52__layouts_home_layout_home_layout_component__["a" /* HomeLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_53__layouts_login_layout_login_layout_component__["a" /* LoginLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_54__component_employee_view_employee_view_employee_component__["a" /* ViewEmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_14__component_projects___["b" /* ViewProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_55__component_projects_view_project_project_info_project_info_component__["a" /* ProjectInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_56__component_projects_view_project_project_map_project_map_component__["a" /* ProjectMapComponent */],
                __WEBPACK_IMPORTED_MODULE_58__component_dashboard_health_visual_health_visual_component__["a" /* HealthVisualComponent */],
                __WEBPACK_IMPORTED_MODULE_59__shared_card_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_60__component_employee_view_employee_sensor_data_sensor_data_component__["a" /* SensorDataComponent */],
                __WEBPACK_IMPORTED_MODULE_61__component_employee_view_employee_send_command_send_command_component__["a" /* SendCommandComponent */],
                __WEBPACK_IMPORTED_MODULE_44__shared__["e" /* InfoRowComponent */],
                __WEBPACK_IMPORTED_MODULE_62__component_dashboard_on_duty_chart_on_duty_chart_component__["a" /* OnDutyChartComponent */],
                __WEBPACK_IMPORTED_MODULE_44__shared__["d" /* FeedbackComponent */],
                __WEBPACK_IMPORTED_MODULE_13__component_map__["a" /* CollapsibleComponent */],
                __WEBPACK_IMPORTED_MODULE_63__shared_form_form_component__["a" /* FormComponent */],
                __WEBPACK_IMPORTED_MODULE_64__component_admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_44__shared__["f" /* LoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_65__component_employee_view_employee_employee_history_map_employee_history_map_component__["a" /* EmployeeHistoryMapComponent */],
                __WEBPACK_IMPORTED_MODULE_66__shared_pipes_date_filter_pipe__["a" /* DateFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_67__component_admin_add_admin_add_admin_component__["a" /* AddAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_68__component_admin_edit_admin_edit_admin_component__["a" /* EditAdminComponent */],
                __WEBPACK_IMPORTED_MODULE_69__component_router_router_component__["a" /* RouterComponent */],
                __WEBPACK_IMPORTED_MODULE_70__component_router_add_router_add_router_component__["a" /* AddRouterComponent */],
                __WEBPACK_IMPORTED_MODULE_71__component_no_access_no_access_component__["a" /* NoAccessComponent */],
                __WEBPACK_IMPORTED_MODULE_72__component_site_supervisor_site_supervisor_component__["a" /* SiteSupervisorComponent */],
                __WEBPACK_IMPORTED_MODULE_73__component_site_supervisor_add_site_supervisor_add_site_supervisor_component__["a" /* AddSiteSupervisorComponent */],
                __WEBPACK_IMPORTED_MODULE_74__component_site_supervisor_edit_site_supervisor_edit_site_supervisor_component__["a" /* EditSiteSupervisorComponent */],
                __WEBPACK_IMPORTED_MODULE_45__shared___["g" /* SelectOptionsTranslatePipe */],
                __WEBPACK_IMPORTED_MODULE_77__component_projects_view_project_edit_project_edit_project_component__["a" /* EditProjectComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_40__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_20_angular2_datatable__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_21_ng2_google_charts__["a" /* Ng2GoogleChartsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_27_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_26_ng2_select__["SelectModule"],
                __WEBPACK_IMPORTED_MODULE_23_ngx_bootstrap__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_22__swimlane_ngx_charts__["NgxChartsModule"],
                __WEBPACK_IMPORTED_MODULE_28__asymmetrik_ngx_leaflet__["c" /* LeafletModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_29__asymmetrik_ngx_leaflet_draw__["a" /* LeafletDrawModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_30_ng4_geoautocomplete__["a" /* Ng4GeoautocompleteModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_31_ng2_translate__["a" /* TranslateModule */].forRoot({
                    provide: __WEBPACK_IMPORTED_MODULE_32_ng2_translate_src_translate_service__["a" /* TranslateLoader */],
                    useFactory: function (http) { return new __WEBPACK_IMPORTED_MODULE_32_ng2_translate_src_translate_service__["c" /* TranslateStaticLoader */](http, '/assets/i18n', '.json'); },
                    deps: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"]]
                }),
                __WEBPACK_IMPORTED_MODULE_33_ngx_image_cropper__["a" /* ImageCropperModule */],
                __WEBPACK_IMPORTED_MODULE_34_ngx_modal_dialog__["a" /* ModalDialogModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_35_angular2_datetimepicker__["a" /* AngularDateTimePickerModule */],
                __WEBPACK_IMPORTED_MODULE_36_ngx_bootstrap_timepicker__["a" /* TimepickerModule */].forRoot(),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"],
                __WEBPACK_IMPORTED_MODULE_43__shared_services__["f" /* TabService */],
                __WEBPACK_IMPORTED_MODULE_43__shared_services__["b" /* ApiReloadService */],
                __WEBPACK_IMPORTED_MODULE_43__shared_services__["c" /* CallApiService */],
                __WEBPACK_IMPORTED_MODULE_44__shared__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_43__shared_services__["e" /* PagesArrayService */],
                __WEBPACK_IMPORTED_MODULE_44__shared__["h" /* UserAccessAuthGuard */],
                __WEBPACK_IMPORTED_MODULE_76__shared_services_messaging_messaging_service__["a" /* MessagingService */],
                __WEBPACK_IMPORTED_MODULE_37_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_44__shared__["b" /* AuthService */],
                { provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_common__["HashLocationStrategy"] },
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_7__shared_helpers_jwt_interceptor__["a" /* JwtInterceptor */], multi: true },
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/component/admin/add-admin/add-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{\"AddNewAdmin\"|translate}}</h1>\r\n<app-form [formData]=\"adminForm\" *ngIf=\"adminForm\" (formSubmitSuccess)=\"formSubmit($event)\"></app-form>"

/***/ }),

/***/ "../../../../../src/app/component/admin/add-admin/add-admin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/admin/add-admin/add-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddAdminComponent = (function () {
    function AddAdminComponent(fb) {
        this.fb = fb;
        this.formSubmitSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.group = this.fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8)]],
            companyID: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(15)]],
            photo: ['']
        });
    }
    AddAdminComponent.prototype.ngOnInit = function () {
        this.constructAdminForm();
    };
    AddAdminComponent.prototype.formSubmit = function (event) {
        console.log("add-admin form submitted successfully? " + event);
        this.formSubmitSuccess.emit(event);
    };
    AddAdminComponent.prototype.constructAdminForm = function () {
        this.adminForm = [
            {
                form_group: this.group,
                submit_url: __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].addSuperuser,
                contain_image: true,
                button_name: "Add",
                form_control_names: [
                    {
                        "input_name": "Name",
                        "form_control_name": "name",
                        "type": { type: "text", options: [], accept: "" },
                        "placeholder": "ExampleName",
                        "error_message": "NameError"
                    }, {
                        "input_name": "EmailAddress",
                        "form_control_name": "email",
                        "type": { type: "email", options: [], accept: "" },
                        "placeholder": "ExampleEmail",
                        "error_message": "EmailError"
                    }, {
                        "input_name": "Password",
                        "form_control_name": "password",
                        "type": { type: "password", options: [], accept: "" },
                        "placeholder": "",
                        "error_message": "PasswordError"
                    }, {
                        "input_name": "CompanyID",
                        "form_control_name": "companyID",
                        "type": { type: "text", options: [], accept: "" },
                        "placeholder": "",
                        "error_message": "RequiredError"
                    }, {
                        "input_name": "Contact",
                        "form_control_name": "phone",
                        "type": { type: "text", options: [], accept: "" },
                        "placeholder": "ExamplePhone",
                        "error_message": "ContactError"
                    }, {
                        "input_name": "Photo",
                        "form_control_name": "photo",
                        "type": { type: "file", options: [], accept: "image/*" },
                        "placeholder": "",
                        "errorMessage": ""
                    }
                ]
            }
        ];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AddAdminComponent.prototype, "formSubmitSuccess", void 0);
    AddAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-admin',
            template: __webpack_require__("../../../../../src/app/component/admin/add-admin/add-admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/admin/add-admin/add-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], AddAdminComponent);
    return AddAdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t\r\n\t<app-feedback [(showFeedback)]=\"addFormSubmitted\" [message]=\"addFormIndicationMessage\"></app-feedback>\r\n\t<app-feedback [(showFeedback)]=\"editFormSubmitted\" [message]=\"addFormIndicationMessage\"></app-feedback>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-6\">\r\n\t\t\t<h1>{{\"AdminList\"|translate}}</h1>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"offset-lg-5 col-lg-2\">\r\n\t\t\t<button class=\"btn btn-block btn-success\" (click)=\"openAddModalBox()\">{{\"Add\"|translate}}</button>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-5\">\r\n\t\t  <div class=\"form-group\">\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" [(ngModel)]=\"filterQuery\" [placeholder]=\"'EnterAdminIDorUserName'|translate\">\r\n\t\t  </div>\r\n\t\t</div>\r\n\t  </div>\r\n\t  <div class=\"panel panel-default\" *ngIf=\"admins\">\r\n\t\t<table class=\"table table-striped\" [mfData]=\"admins|dataFilter:filterQuery:'superuserName'\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n\t\t  <thead>\r\n\t\t\t<tr>\r\n\t\t\t\t<th style=\"width: 10%\">\r\n\t\t\t\t\t<mfDefaultSorter by=\"s_id\">{{\"ID\"|translate}}</mfDefaultSorter>\r\n\t\t\t\t</th>\r\n\t\t\t\t<th style=\"width: 20%\">\r\n\t\t\t\t\t<mfDefaultSorter by=\"s_email\">{{\"Username\"|translate}}</mfDefaultSorter>\r\n\t\t\t\t</th>\r\n\t\t\t\t<th style=\"width: 20%\">\r\n\t\t\t\t\t<mfDefaultSorter by=\"s_name\">{{\"Name\"|translate}}</mfDefaultSorter>\r\n\t\t\t\t</th>\r\n\t\t\t\t<th style=\"width: 20%\">\r\n\t\t\t\t\t\t<mfDefaultSorter by=\"company_id\">{{\"CompanyID\"|translate}}</mfDefaultSorter>\r\n\t\t\t\t</th>\r\n\t\t\t\t<th style=\"width: 10%\">\r\n\t\t\t\t\t\t<mfDefaultSorter by=\"s_contact\">{{\"Contact\"|translate}}</mfDefaultSorter>\r\n\t\t\t\t</th>\r\n\t\t\t\t<th style=\"width: 10%\">\r\n\t\t\t\t\t<mfDefaultSorter by=\"\"></mfDefaultSorter>\r\n\t\t\t\t</th>\r\n\t\t\t\t<th style=\"width: 10%\">\r\n\t\t\t\t\t<mfDefaultSorter by=\"\"></mfDefaultSorter>\r\n\t\t\t\t</th>\r\n\t\t\t\r\n\t\t\t</tr>\r\n\t\t  </thead>\r\n\t\t  <tbody>\r\n\t\t\t<tr *ngFor=\"let superuser of mf.data\">\r\n\t\t\t\t<td>{{superuser.s_id}}</td>\r\n\t\t\t\t<td>{{superuser.s_email}}</td>\r\n\t\t\t\t<td>{{superuser.s_name}}</td>\r\n\t\t\t\t<td>{{superuser.company_id}}</td>\r\n\t\t\t\t<td>{{superuser.s_contact}}</td>\r\n\t\t\t\t<td><button class=\"btn btn-block btn-warning\" (click)=\"editAdmin(superuser)\">{{\"Edit\" | translate}}</button></td>\r\n\t\t\t\t<td><button class=\"btn btn-block btn-danger\" (click)=\"deleteAdmin(superuser.s_id)\">{{\"Delete\" | translate}}</button></td>\r\n\t\t\t  </tr>\r\n\t\t  </tbody>\r\n\t\t  <tfoot>\r\n\t\t\t<tr>\r\n\t\t\t  <td colspan=\"6\">\r\n\t\t\t\t<mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n\t\t\t  </td>\r\n\t\t\t</tr>\r\n\t\t  </tfoot>\r\n\t\t</table>\r\n\t  </div>\r\n\t\t<app-loading [apiCallFinish]=\"admins\"></app-loading>\t\t\r\n</div>\r\n\r\n<!-- modal box to add superuser -->\r\n<div *ngIf=\"displayAddModel\" class=\"modal\">\r\n\t<div [ngClass]=\"{'modal-content':true}\">\r\n\t\t<span class=\"close\" (click)=\"closeAddModalBox()\">&times;</span>\r\n\t\t\t<app-add-admin (formSubmitSuccess)=\"addFormSubmit($event)\"></app-add-admin>\r\n\t</div>\r\n</div>\r\n\r\n<!-- modal box to edit superuser -->\r\n<div *ngIf=\"displayEditModel\" class=\"modal\">\r\n\t<div [ngClass]=\"{'modal-content':true}\">\r\n\t\t<span class=\"close\" (click)=\"closeEditModalBox()\">&times;</span>\r\n\t\t\t<app-edit-admin (formSubmitSuccess)=\"editFormSubmit($event)\" [adminToBeEdit]=\"adminEdit\"></app-edit-admin>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/admin/admin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\n  display: block;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 4;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */ }\n\n/* Modal Content/Box */\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto;\n  /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 50%;\n  /* Could be more or less, depending on screen size */ }\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  position: absolute;\n  right: 10px;\n  font-size: 28px;\n  font-weight: bold; }\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = (function () {
    function AdminComponent(callApi, reloadService) {
        var _this = this;
        this.callApi = callApi;
        this.reloadService = reloadService;
        this.addFormSubmitted = false;
        this.editFormSubmitted = false;
        this.displayAddModel = false;
        this.displayEditModel = false;
        //configuration for feedback message
        this.addFormIndicationMessage = ["Success", "NewAdminFormsIsSubmitted"];
        this.editFormIndicationMessage = ["Success", "ProfileEditSuccessfully"];
        // configuratoin for data table
        this.rowsOnPage = 10;
        this.sortBy = "";
        this.sortOrder = "";
        this.filterQuery = "";
        this.reloadService.reload$.subscribe(function (reload) {
            if (reload) {
                // console.log("reload employees");
                _this.admins = null;
                //reload list when new employee is added
                setTimeout(function () { return _this.getAdminList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].superuserList); }, 2000);
            }
        });
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.getAdminList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].superuserList);
    };
    AdminComponent.prototype.getAdminList = function (url) {
        var _this = this;
        this.callApi.getData(url)
            .subscribe(function (data) {
            _this.admins = data;
        });
    };
    //accept eventEmitter to let user know form submitted
    AdminComponent.prototype.addFormSubmit = function (event) {
        this.closeAddModalBox();
        this.addFormSubmitted = event;
    };
    AdminComponent.prototype.editFormSubmit = function (event) {
        this.closeEditModalBox();
        this.editFormSubmitted = event;
    };
    AdminComponent.prototype.editAdmin = function (admin) {
        this.adminEdit = admin;
        this.openEditModalBox();
        console.log("Edit " + admin.s_email + " is clicked");
    };
    AdminComponent.prototype.deleteAdmin = function (adminID) {
        var _this = this;
        console.log("Delete " + adminID + " is clicked");
        var removeData = { s_id: adminID };
        this.callApi.postData(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].removeSuperuser, JSON.stringify(removeData))
            .subscribe(function (data) {
            console.log("deleted " + adminID);
            console.log(data);
            _this.reloadService.setReload();
        });
    };
    AdminComponent.prototype.openAddModalBox = function () {
        this.displayAddModel = true;
    };
    AdminComponent.prototype.closeAddModalBox = function () {
        this.displayAddModel = false;
    };
    AdminComponent.prototype.openEditModalBox = function () {
        this.displayEditModel = true;
    };
    AdminComponent.prototype.closeEditModalBox = function () {
        this.displayEditModel = false;
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/component/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["c" /* CallApiService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services__["b" /* ApiReloadService */]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/admin/edit-admin/edit-admin.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{\"EditAdmin\"|translate}}</h1>\r\n<app-form [formData]=\"editAdminForm\" *ngIf=\"editAdminForm\" (formSubmitSuccess)=\"formSubmit($event)\"></app-form>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/admin/edit-admin/edit-admin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/admin/edit-admin/edit-admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditAdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditAdminComponent = (function () {
    function EditAdminComponent(fb) {
        this.fb = fb;
        this.formSubmitSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    EditAdminComponent.prototype.ngOnInit = function () {
        console.log(this.adminToBeEdit);
        this.group = this.fb.group({
            id: [this.adminToBeEdit.s_id],
            name: [this.adminToBeEdit.s_name, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
            email: [this.adminToBeEdit.s_email, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8)]],
            companyID: [this.adminToBeEdit.company_id, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
            phone: [this.adminToBeEdit.s_contact, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(15)]],
            photo: ['']
        });
        this.constructAdminForm();
    };
    EditAdminComponent.prototype.formSubmit = function (event) {
        console.log("add-admin form submitted successfully? " + event);
        this.formSubmitSuccess.emit(event);
    };
    EditAdminComponent.prototype.constructAdminForm = function () {
        this.editAdminForm = [
            {
                form_group: this.group,
                submit_url: __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].updateSuperuser,
                contain_image: true,
                button_name: "Edit",
                form_control_names: [
                    {
                        "input_name": "Name",
                        "form_control_name": "name",
                        "type": { type: "text", options: [], accept: "" },
                        "placeholder": "ExampleName",
                        "error_message": "NameError"
                    }, {
                        "input_name": "EmailAddress",
                        "form_control_name": "email",
                        "type": { type: "email", options: [], accept: "" },
                        "placeholder": "ExampleEmail",
                        "error_message": "EmailError"
                    }, {
                        "input_name": "Password",
                        "form_control_name": "password",
                        "type": { type: "password", options: [], accept: "" },
                        "placeholder": "",
                        "error_message": "PasswordError"
                    }, {
                        "input_name": "CompanyID",
                        "form_control_name": "companyID",
                        "type": { type: "text", options: [], accept: "" },
                        "placeholder": "",
                        "error_message": "RequiredError"
                    }, {
                        "input_name": "Contact",
                        "form_control_name": "phone",
                        "type": { type: "text", options: [], accept: "" },
                        "placeholder": "ExamplePhone",
                        "error_message": "ContactError"
                    }, {
                        "input_name": "Photo",
                        "form_control_name": "photo",
                        "type": { type: "file", options: [], accept: "image/*" },
                        "placeholder": "",
                        "errorMessage": ""
                    }
                ]
            }
        ];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EditAdminComponent.prototype, "adminToBeEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], EditAdminComponent.prototype, "formSubmitSuccess", void 0);
    EditAdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-admin',
            template: __webpack_require__("../../../../../src/app/component/admin/edit-admin/edit-admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/admin/edit-admin/edit-admin.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], EditAdminComponent);
    return EditAdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div>\r\n    <div class=\"panel-head panel-sos\">\r\n      <span><img src=\"assets/images/sos.png\"></span>\r\n      <span><h3>   {{\"SOS\"|translate}}   </h3></span>\r\n      <span><img src=\"assets/images/sos.png\"></span>\r\n    </div>\r\n    <div class=\"panel panel-default\">\r\n      <table class=\"table table-striped\" [mfData]=\"sos\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n        <thead>\r\n          <tr>\r\n            <th style=\"width: 10%\">\r\n              <mfDefaultSorter by=\"w_id\">{{\"EmployeeID\"|translate}}</mfDefaultSorter>\r\n            </th>\r\n            <th style=\"width: 20%\">\r\n              <mfDefaultSorter by=\"w_name\">{{\"EmployeeName\"|translate}}</mfDefaultSorter>\r\n            </th>\r\n            <th style=\"width: 10%\">\r\n              <mfDefaultSorter by=\"w_location\">{{\"EmployeeLocation\"|translate}}</mfDefaultSorter>\r\n            </th>\r\n            <th style=\"width: 10%\">\r\n              <mfDefaultSorter by=\"trigger\">{{\"Trigger\"|translate}}</mfDefaultSorter>\r\n            </th>\r\n            <th style=\"width: 10%\">\r\n              <mfDefaultSorter by=\"a_status\">{{\"Status\"|translate}}</mfDefaultSorter>\r\n            </th>\r\n            <th style=\"width: 10%\">\r\n              <mfDefaultSorter by=\"timestamp\">{{\"Timestamp\"|translate}}</mfDefaultSorter>\r\n            </th>\r\n            <th style=\"width: 10%\">\r\n            </th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let sos of mf.data\" style=\"height:100px\">\r\n            <td><a [routerLink]=\"['/employee',sos.w_id]\">{{sos.w_id}}</a></td>\r\n            <td>{{sos.w_name_photo.w_name}} ({{sos.dev_id}})\r\n              <span class=\"alert-notification-text\"><div>{{sos.sos_details.amt}}</div></span>\r\n            </td>\r\n            <td>{{sos.w_location}}</td>\r\n            <td>{{sos.sos_details.trigger_id}}            </td>\r\n            <td>{{sos.sos_details.sos_status | uppercase | translate}}</td>\r\n            <td>{{sos.sos_details.timestamp|date:(\"FormatDate\"|translate)}}</td>\r\n            <td><button class=\"btn btn-brown\" (click)=resolveSOS(sos.id)>{{\"Resolve\"|translate}}</button></td>\r\n          </tr>\r\n        </tbody>\r\n        <tfoot>\r\n          <tr>\r\n            <td colspan=\"9\">\r\n              <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n            </td>\r\n          </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n  </div>\r\n\r\n  <hr/>\r\n\r\n  <!-- table 1 top priority -->\r\n  <div>\r\n    <div class=\"row\">\r\n     <div class=\"offset-lg-7 col-lg-5\">\r\n       <div class=\"form-group\">\r\n         <input type=\"text\" class=\"form-control\" [(ngModel)]=\"filterQuery\" [placeholder]=\"'EnterUserIDorUserName'|translate\">\r\n       </div>\r\n     </div>\r\n    </div>\r\n    <div class=\"panel-head panel-alert\">\r\n      <span><img src=\"assets/images/warning.png\"></span>\r\n      <span><h3>   {{\"Alert\"|translate}}   </h3></span>\r\n      <span><img src=\"assets/images/warning.png\"></span>\r\n    </div>\r\n    <div class=\"panel panel-default\">\r\n      <table class=\"table table-striped\" [mfData]=\"alerts|dataFilter:filterQuery:'alertEmployeeName'\" #mf2=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n        <thead>\r\n          <tr>\r\n            <th style=\"width: 10%\">\r\n              <mfDefaultSorter by=\"w_id\">{{\"EmployeeID\"|translate}}</mfDefaultSorter>\r\n            </th>\r\n            <th style=\"width: 10%\">\r\n              <mfDefaultSorter by=\"w_name\">{{\"EmployeeName\"|translate}}</mfDefaultSorter>\r\n            </th>\r\n            <th style=\"width: 10%\">\r\n              <mfDefaultSorter by=\"w_location\">{{\"EmployeeLocation\"|translate}}</mfDefaultSorter>\r\n            </th>\r\n            <th style=\"width: 10%\">\r\n              <mfDefaultSorter by=\"a_type\">{{\"Trigger\"|translate}}</mfDefaultSorter>\r\n            </th>\r\n            <th style=\"width: 10%\">\r\n              <mfDefaultSorter by=\"p_location\">{{\"Status\"|translate}}</mfDefaultSorter>\r\n            </th>\r\n            <th style=\"width: 10%\">\r\n              <mfDefaultSorter by=\"a_datetime\">{{\"Timestamp\"|translate}}</mfDefaultSorter>\r\n            </th>\r\n            <th style=\"width: 10%\">\r\n            </th>\r\n\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let alert of mf2.data\">\r\n            <td><a [routerLink]=\"['/employee',alert.w_id]\">{{alert.w_id}}</a></td>\r\n            <td>{{alert.w_name_photo.w_name}} ({{alert.dev_id}})</td>\r\n            <td>{{alert.w_location}}</td>\r\n            <td>{{alert.alert_details.type[0]|translate}}\r\n                <span *ngIf=\"alert.alert_details.type[1]!=null&&alert.alert_details.type[2]==null\"> {{alert.alert_details.type[1]}}</span>\r\n                <span *ngIf=\"alert.alert_details.type[1]!=null&&alert.alert_details.type[2]!=null\">: {{\"From\"|translate}} {{alert.alert_details.type[1]}} {{\"To\"|translate}} {{alert.alert_details.type[2]}}</span>\r\n            </td>\r\n            <td>{{alert.alert_details.alert_status | uppercase | translate}}</td>\r\n            <td>{{alert.alert_details.timestamp|date:(\"FormatDate\"|translate)}}</td>\r\n            <td><button class=\"btn btn-brown\" (click)=resolveAlert(alert.id)>{{\"Resolve\"|translate}}</button></td>\r\n          </tr>\r\n        </tbody>\r\n        <tfoot>\r\n          <tr>\r\n            <td colspan=\"9\">\r\n              <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n            </td>\r\n          </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n  </div>\r\n  <app-loading [apiCallFinish]=\"sos\"></app-loading>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/alert/alert.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-sos {\n  background-color: #d93b36;\n  color: white;\n  text-align: center; }\n\n.panel-alert {\n  background-color: #ffcc00;\n  color: white;\n  text-align: center; }\n\n.alert-notification-text {\n  display: inline-block;\n  width: 25px;\n  text-align: center;\n  background: orangered;\n  height: 30px;\n  margin-top: 10px;\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = (function () {
    function AlertComponent(CallApi, http) {
        this.CallApi = CallApi;
        this.http = http;
        this.rowsOnPage = 10;
        this.sortBy = "w_id";
        this.sortOrder = "asc";
        this.filterQuery = "";
        this.alerts = [];
        this.sos = [];
        this.interval = 1000;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSosList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].sosList);
        this.getAlertList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].alertList);
        this.intervalHook = setInterval(function () {
            _this.getSosList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].sosList);
            _this.getAlertList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].alertList);
        }, this.interval);
    };
    AlertComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.intervalHook);
    };
    // get sos list
    AlertComponent.prototype.getSosList = function (url) {
        var _this = this;
        this.CallApi.getData(url)
            .subscribe(function (data) {
            if (!_this.compareJSONArray(_this.sos, data)) {
                var _loop_1 = function (sos) {
                    if ((data[sos].w_location === '-' || data[sos].w_location === '') && typeof data[sos].w_dev_data.latitude !== 'undefined' && typeof data[sos].w_dev_data.longitude !== 'undefined') {
                        _this.CallApi.getLocationByLatLng(_this.http, { lat: data[sos].w_dev_data.latitude, lng: data[sos].w_dev_data.longitude }, null).subscribe(function (ditto) {
                            // console.log(ditto);
                            data[sos]['w_location'] = ditto;
                        });
                    }
                };
                for (var sos in data) {
                    _loop_1(sos);
                }
                _this.sos = data;
            }
        });
    };
    // get alert list
    AlertComponent.prototype.getAlertList = function (url) {
        var _this = this;
        this.CallApi.getData(url)
            .subscribe(function (data) {
            if (!_this.compareJSONArray(_this.alerts, data)) {
                var _loop_2 = function (alert_1) {
                    if ((data[alert_1].w_location === '-' || data[alert_1].w_location === '') && typeof data[alert_1].w_dev_data.latitude !== 'undefined' && typeof data[alert_1].w_dev_data.longitude !== 'undefined') {
                        _this.CallApi.getLocationByLatLng(_this.http, { lat: data[alert_1].w_dev_data.latitude, lng: data[alert_1].w_dev_data.longitude }, null).subscribe(function (ditto) {
                            // console.log(ditto);
                            data[alert_1]['w_location'] = ditto;
                        });
                    }
                };
                for (var alert_1 in data) {
                    _loop_2(alert_1);
                }
                _this.alerts = data;
            }
        });
    };
    //resolve sos
    AlertComponent.prototype.resolveSOS = function (id) {
        var _this = this;
        var date = new Date().toISOString();
        this.CallApi.postData(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].resolveSOS + "/", JSON.stringify({ 'id': id, 'timestamp': date }))
            .subscribe(function (response) {
            _this.getSosList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].sosList);
            console.log(response);
        });
    };
    //resolve alert
    AlertComponent.prototype.resolveAlert = function (id) {
        var _this = this;
        console.log(id);
        var date = new Date().toISOString();
        this.CallApi.postData(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].resolveAlert + "/", JSON.stringify({ 'id': id, 'timestamp': date }))
            .subscribe(function (response) {
            _this.getAlertList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].alertList);
            console.log(response);
        });
    };
    AlertComponent.prototype.compareJSONArray = function (arr1, arr2) {
        var isSame = false;
        if (arr1 || arr2) {
            if (Object.keys(arr1).length === Object.keys(arr2).length) {
                var keys = Object.keys(arr1);
                for (var i = 0; i < keys.length; i++) {
                    if (!arr2.hasOwnProperty(keys[i])) {
                        break;
                    }
                    if (arr1[keys[i]] !== arr2[keys[i]]) {
                        if (Array.isArray(arr1[keys[i]]) && Array.isArray(arr2[keys[i]])) {
                            if (!this.compareJSONArray(arr1[keys[i]], arr2[keys[i]])) {
                                break;
                            }
                        }
                        else {
                            break;
                        }
                    }
                }
                isSame = true;
            }
        }
        return isSame;
    };
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__("../../../../../src/app/component/alert/alert.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/alert/alert.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["c" /* CallApiService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <h1>{{\"Dashboard\"|translate}}</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <!-- <app-card>      \r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading\">{{\"EmployeeOnDuty\"|translate}}</div>\r\n          <div style=\"overflow-x: auto\">\r\n            <table class=\"table table-striped\" [mfData]=\"duties\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\" [(mfSortBy)]=\"name\" [(mfSortOrder)]=\"asc\">\r\n              <thead>\r\n                <tr>\r\n                  <th style=\"width: 20%\">\r\n                    <mfDefaultSorter by=\"id\">{{\"ID\"|translate}}</mfDefaultSorter>\r\n                  </th>\r\n                  <th style=\"width: 50%\">\r\n                    <mfDefaultSorter by=\"info.u_name\">{{\"Name\"|translate}}</mfDefaultSorter>\r\n                  </th>\r\n                  <th style=\"width: 10%\">\r\n                    <mfDefaultSorter by=\"w_status.health_status\">{{\"HealthStatus\"|translate}}</mfDefaultSorter>\r\n                  </th>\r\n                  <th style=\"width: 20%\">\r\n                    <mfDefaultSorter by=\"project.p_id\">{{\"ProjectID\"|translate}}</mfDefaultSorter>\r\n                  </th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let duty of mf.data\">\r\n                  <td>{{duty.w_id}}</td>\r\n                  <td>{{duty.w_name_photo.w_name}}</td>\r\n                  <td class=\"text-right\">{{duty.w_status.health_status}}</td>\r\n                  <td>{{duty.p_id}}</td>\r\n                </tr>\r\n              </tbody>\r\n              <tfoot>\r\n                <tr>\r\n                  <td colspan=\"4\">\r\n                    <div class=\"text-center\"><a [routerLink]=\"['/employee']\">More</a></div>\r\n                  </td>\r\n                </tr>\r\n              </tfoot>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </app-card> -->\r\n      <app-card>\r\n        <app-on-duty-chart [dutyChart]='dutyChart' style=\"width:100%;height:100%\"></app-on-duty-chart>\r\n      </app-card>\r\n      <app-card>\r\n          <div class=\"panel panel-default\">\r\n            <div class=\"panel-head panel-sos\">\r\n              <span><img src=\"assets/images/sos.png\"></span>\r\n              <span><h3>   {{\"SOS\"|translate}}   </h3></span>\r\n              <span><img src=\"assets/images/sos.png\"></span>\r\n            </div>\r\n            <div style=\"overflow-x: auto\">\r\n              <table class=\"table table-striped\" [mfData]=\"sos\" #mf3=\"mfDataTable\" [mfRowsOnPage]=\"3\" [(mfSortBy)]=\"sos['w_id']\" [(mfSortOrder)]=\"asc\" *ngIf=\"sos\">\r\n                <thead>\r\n                  <tr>\r\n                    <th style=\"width: 10%\">\r\n                      <mfDefaultSorter by=\"id\">{{\"ID\"|translate}}</mfDefaultSorter>\r\n                    </th>\r\n                    <th style=\"width: 20%\">\r\n                      <mfDefaultSorter by=\"name\">{{\"Name\"|translate}}</mfDefaultSorter>\r\n                    </th>\r\n                    <th style=\"width: 20%\">\r\n                      <mfDefaultSorter by=\"location\">{{\"Location\"|translate}}</mfDefaultSorter>\r\n                    </th>\r\n                    <th style=\"width: 10%\">\r\n                      <mfDefaultSorter by=\"projectId\">{{\"ProjectID\"|translate}}</mfDefaultSorter>\r\n                    </th>\r\n                    <th style=\"width: 20%\">\r\n                      <mfDefaultSorter by=\"projectName\">{{\"ProjectName\"|translate}}</mfDefaultSorter>\r\n                    </th>\r\n                    <th style=\"width: 20%\">\r\n                      <mfDefaultSorter by=\"timestamp\">{{\"Timestamp\"|translate}}</mfDefaultSorter>\r\n                    </th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let sos of mf3.data\">\r\n                    <td><a [routerLink]=\"['/employee',sos.w_id]\">{{sos.w_id}}</a></td>\r\n                    <td>{{sos.w_name_photo.w_name}}</td>\r\n                    <td>{{sos.w_location ? sos.w_location : \"-\"}}</td>\r\n                    <td><a *ngIf=\"sos.p_id!=null;else default\" [routerLink]=\"['/projects',sos.p_id]\">{{sos.p_id}}</a><ng-template #default>-</ng-template></td>\r\n                    <td>{{sos.p_data ? (sos.p_data.p_name ? sos.p_data.p_name : \"-\" ) : \"-\"}}</td>\r\n                    <td>{{sos.sos_details ? (sos.sos_details.timestamp ? (sos.sos_details.timestamp|date:(\"FormatDate\"|translate)) : \"-\") : \"-\"}}</td>\r\n                  </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                  <tr>\r\n                    <td colspan=\"6\">\r\n                      <div class=\"text-center\"><a [routerLink]=\"['/alert']\">{{\"More\"|translate}}</a></div>\r\n                    </td>\r\n                  </tr>\r\n                </tfoot>\r\n              </table>\r\n            </div>\r\n          </div>\r\n      </app-card>\r\n      <app-card> \r\n          <div class=\"panel panel-default\">\r\n            <div class=\"panel-head panel-alert\">\r\n              <span><img src=\"assets/images/warning.png\"></span>\r\n              <span><h3>   {{\"Alert\"|translate}}   </h3></span>\r\n              <span><img src=\"assets/images/warning.png\"></span>\r\n            </div>\r\n            <div style=\"overflow-x: auto\">\r\n              <table class=\"table table-striped\" [mfData]=\"alerts\" #mf2=\"mfDataTable\" [mfRowsOnPage]=\"3\" [(mfSortBy)]=\"alerts['id']\" [(mfSortOrder)]=\"asc\" *ngIf=\"alerts\">\r\n                <thead>\r\n                  <tr>\r\n                    <th style=\"width: 20%\">\r\n                      <mfDefaultSorter by=\"w_id\">{{\"ID\"|translate}}</mfDefaultSorter>\r\n                    </th>\r\n                    <th style=\"width: 20%\">\r\n                      <mfDefaultSorter by=\"w_id\">{{\"Name\"|translate}}</mfDefaultSorter>\r\n                    </th>\r\n                    <th style=\"width: 20%\">\r\n                      <mfDefaultSorter by=\"w_location\">{{\"EmployeeLocation\"|translate}}</mfDefaultSorter>\r\n                    </th>\r\n                    <th style=\"width: 20%\">\r\n                      <mfDefaultSorter by=\"a_type\">{{\"Trigger\"|translate}}</mfDefaultSorter>\r\n                    </th>\r\n                    <th style=\"width: 20%\">\r\n                      <mfDefaultSorter>{{\"Time\"|translate}}</mfDefaultSorter>\r\n                    </th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let alert of mf2.data\">\r\n                    <td><a [routerLink]=\"['/employee',alert.w_id]\">{{alert.w_id}}</a></td>\r\n                    <td>{{alert.w_name_photo.w_name}}</td>\r\n                    <td>{{alert.w_location}}</td>\r\n                    <td>{{alert.alert_details.type[0]|translate}}\r\n                      <span *ngIf=\"alert.alert_details.type[1]!=null&&alert.alert_details.type[2]==null\"> {{alert.alert_details.type[1]}}</span>\r\n                      <span *ngIf=\"alert.alert_details.type[1]!=null&&alert.alert_details.type[2]!=null\"> from {{alert.alert_details.type[1]}} to {{alert.alert_details.type[2]}}</span>\r\n                    </td>\r\n                    <td>{{alert.alert_details.timestamp|date:(\"FormatDate\"|translate)}}</td>\r\n                  </tr>\r\n                </tbody>\r\n                <tfoot>\r\n                  <tr>\r\n                    <td colspan=\"5\">\r\n                      <div class=\"text-center\"><a [routerLink]=\"['/alert']\">{{\"More\"|translate}}</a></div>\r\n                    </td>\r\n                  </tr>\r\n                </tfoot>\r\n              </table>\r\n            </div>\r\n          </div>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <ng-select *ngIf=\"projects[0]!=null\"  [active]=\"init\" [items]=\"projects\" (selected)=\"selected($event)\" >\r\n              </ng-select>\r\n            </div>\r\n          </div>\r\n          <app-health-visual [display]=\"currentReport\"></app-health-visual>\r\n    </div>\r\n    \r\n  </div>\r\n  <!-- <div class=\"row\">\r\n  \t<div class=\"col-lg-12\">\r\n\t  \t<h2 class=\"text-center red\">Number of unsafe workers over time</h2>\r\n      <ngx-charts-area-chart *ngIf=\"areaChart\"\r\n        [view]=\"areaChart.view\"\r\n        [scheme]=\"areaChart.colorScheme\"\r\n        [results]=\"areaChart.data\"\r\n        [gradient]=\"areaChart.gradient\"\r\n        [xAxis]=\"areaChart.showXAxis\"\r\n        [yAxis]=\"areaChart.showYAxis\"\r\n        [showXAxisLabel]=\"areaChart.showXAxisLabel\"\r\n        [showYAxisLabel]=\"areaChart.showYAxisLabel\"\r\n        [xAxisLabel]=\"areaChart.xAxisLabel\"\r\n        [yAxisLabel]=\"areaChart.yAxisLabel\"\r\n        [autoScale]=\"areaChart.autoScale\"\r\n        (select)=\"areaChart.onSelect($event)\">\r\n      </ngx-charts-area-chart>\r\n      <ng-template #noLineChart>No Data to Display</ng-template>  -->\r\n      <!--      <google-chart [data]=\"areaChartData\" *ngIf=\"areaChartData;else noLineChart\" ></google-chart>-->\r\n\t<!--  </div>\r\n  </div> -->\r\n  <app-loading [apiCallFinish]=\"duties\"></app-loading>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel {\n  padding-top: 10px; }\n\n.panel-sos {\n  background-color: #d93b36;\n  color: white;\n  text-align: center; }\n\n.panel-alert {\n  background-color: #ffcc00;\n  color: white;\n  text-align: center; }\n\n.ui-select-choices.dropdown-menu {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* unused harmony export Chart */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { setTimeout } from 'timers';
var DashboardComponent = (function () {
    function DashboardComponent(callApi) {
        this.callApi = callApi;
        //For dataTable initial sort order
        this.asc = "asc";
        this.currentReport = "ALL";
        this.projects = [];
        this.init = [];
        // this.duties=Data.employees;
        // this.alerts=Data.alerts;
        // this.sos=Data.sosAlerts;
        // this.unsafeWorkers=Data.unsafeWorkers;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        // setInterval(()=>{console.log("1 second passed")},1000);
        this.getSosList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].sosList);
        this.getDutyList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].dutyList);
        this.getAlertList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].alertList);
        this.getDutyChart(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].dutyChart);
        this.getProjectList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].projectList);
        // this.getWorkerUnsafeData(ApiCmd.injuryGraph);
    };
    // get sos list
    DashboardComponent.prototype.getSosList = function (url) {
        var _this = this;
        this.callApi.getData(url)
            .subscribe(function (data) {
            _this.sos = data;
        });
    };
    // get alert list
    DashboardComponent.prototype.getAlertList = function (url) {
        var _this = this;
        this.callApi.getData(url)
            .subscribe(function (data) {
            _this.alerts = data;
        });
    };
    // get duty list
    DashboardComponent.prototype.getDutyList = function (url) {
        var _this = this;
        this.callApi.getData(url)
            .subscribe(function (data) {
            _this.duties = data;
        });
    };
    // getWorkerUnsafeData(url:string):void{
    // 	this.callApi.getData(url)
    // 		.subscribe(data=>{
    // 			this.unsafeWorkers=data[0].data;
    // 			this.getLineChart();
    // 		})
    // }
    // getLineChart():void{
    // 	// let areaData=[] as any;
    // 	// areaData.push(['year','Unsafe workers']);
    // 	// for (let worker of this.unsafeWorkers) {
    // 	// 	areaData.push([worker.year,+worker.number]);
    // 	// }
    // 	// this.areaChartData =  {
    // 	//   chartType: 'AreaChart',
    // 	//   dataTable: areaData,
    // 	//   options: {
    // 	//   		'legend':'top',
    // 	//   		'height':600,
    // 	//   		'colors':['red','rgb(192,0,0)']
    // 	//   },
    // 	// };
    // 	let arr=[];
    // 	let series=[];
    // 	this.unsafeWorkers.forEach((year)=>{
    // 		series.push({name:year.year, value:+year.number});
    // 	})
    // 	arr.push({name:"worker",series:series});
    // 	console.log(arr);
    // 	this.areaChart= new Chart(arr);
    // }
    DashboardComponent.prototype.getDutyChart = function (url) {
        var _this = this;
        this.callApi.getData(url).subscribe(function (data) {
            _this.dutyChart = data;
        });
    };
    DashboardComponent.prototype.getProjectList = function (url) {
        var _this = this;
        this.callApi.getData(url)
            .subscribe(function (data) {
            _this.projectList = data;
            console.log(_this.projectList);
            _this.assignProjectToDropdown();
        });
    };
    DashboardComponent.prototype.assignProjectToDropdown = function () {
        var _this = this;
        this.projects = [];
        this.projects.push({
            id: "All",
            text: "All"
        });
        this.projectList.forEach(function (project) {
            _this.projects.push({
                id: project.p_id,
                text: project.p_data.p_name
            });
        });
        this.init.push(this.projects[0]);
    };
    DashboardComponent.prototype.selected = function (value) {
        this.currentReport = value.id;
        // this.getReportSummary(`${ApiCmd.reportSummary}${value.id}`);
        // console.log('Selected value is: ', value.id);
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/component/dashboard/dashboard.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../../src/app/component/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["c" /* CallApiService */]])
    ], DashboardComponent);
    return DashboardComponent;
}());

var Chart = (function () {
    function Chart(data) {
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showXAxisLabel = true;
        this.xAxisLabel = 'Year';
        this.showYAxisLabel = true;
        this.yAxisLabel = 'Number of Injuries';
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        // line, area
        this.autoScale = false;
        this.data = data;
    }
    Chart.prototype.onSelect = function (event) {
        console.log(event);
    };
    return Chart;
}());



/***/ }),

/***/ "../../../../../src/app/component/dashboard/health-visual/health-visual.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n\t<!-- <div *ngIf=\"hrArray.data\"> -->\r\n\t\t<app-card class=\"col-lg-12 chartcard\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n\t\t\t<div><h3>{{\"HeartRate\"|translate}} <fa name=\"heartbeat\" style=\"color:red\"></fa></h3></div>\r\n\t\t\t<div class=\"chartcard-report\">\r\n\t\t\t\t<ngx-charts-advanced-pie-chart *ngIf=\"hrArray\"\r\n\t\t\t\t\t[view]=\"hrArray.view\"\r\n\t\t\t\t\t[scheme]=\"hrArray.colorScheme\"\r\n\t\t\t\t\t[gradient]=\"true\"\r\n\t\t\t\t\t[results]=\"hrArray.data\"\r\n\t\t\t\t\t(select)=\"hrArray.onSelect($event)\">\r\n\t\t\t\t</ngx-charts-advanced-pie-chart>\r\n\t\t\t</div>\r\n\t\t\t<!-- <ngx-charts-pie-chart *ngIf=\"hrArray\"\r\n\t\t\t\t[scheme]=\"hrArray.colorScheme\"\r\n\t\t\t\t[results]=\"hrArray.data\"\r\n\t\t\t\t[legend]=\"hrArray.showLegend\"\r\n\t\t\t\t[explodeSlices]=\"hrArray.explodeSlices\"\r\n\t\t\t\t[labels]=\"hrArray.showLabels\"\r\n\t\t\t\t[doughnut]=\"hrArray.doughnut\"\r\n\t\t\t\t(select)=\"hrArray.onSelect($event)\">\r\n\t\t\t</ngx-charts-pie-chart>  -->\r\n\t\t</app-card>\r\n</div>\r\n<div class=\"row\">\r\n\t<app-card class=\"col-lg-12 chartcard text-center\">\t\r\n\t\t<h3>{{\"HealthStatus\"|translate}} <fa name=\"medkit\" style=\"color:red\"></fa></h3>\r\n\t\t<div class=\"chartcard-report\">\r\n\t\t\t<ngx-charts-advanced-pie-chart *ngIf=\"healthStatusArray\"\r\n\t\t\t\t[view]=\"hrArray.view\"\r\n\t\t\t\t[scheme]=\"healthStatusArray.colorScheme\"\r\n\t\t\t\t[results]=\"healthStatusArray.data\"\r\n\t\t\t\t(select)=\"healthStatusArray.onSelect($event)\">\r\n\t\t\t</ngx-charts-advanced-pie-chart>\r\n\t\t</div>\r\n\t\t<!-- <ngx-charts-pie-chart *ngIf=\"healthStatusArray\"\r\n\t\t\t[view]=\"hrArray.view\"\r\n\t\t\t[scheme]=\"healthStatusArray.colorScheme\"\r\n\t\t\t[results]=\"healthStatusArray.data\"\r\n\t\t\t[legend]=\"healthStatusArray.showLegend\"\r\n\t\t\t[explodeSlices]=\"healthStatusArray.explodeSlices\"\r\n\t\t\t[labels]=\"healthStatusArray.showLabels\"\r\n\t\t\t[doughnut]=\"healthStatusArray.doughnut\"\r\n\t\t\t[arcWidth]=\"healthStatusArray.arcWidth\"\r\n\t\t\t(select)=\"healthStatusArray.onSelect($event)\">\r\n\t\t</ngx-charts-pie-chart> -->\r\n\t</app-card>\r\n</div>\r\n\t<div class=\"row\">\r\n\t\t<app-card class=\"col-lg-12 text-center\">\t\t\r\n\t\t\t<h3>{{\"PresentOrAbsentForWork\"|translate}} <fa name=\"briefcase\" style=\"color:black\"></fa></h3>\r\n\t\t\t<div class=\"chartcard-report\">\r\n\t\t\t\t<ngx-charts-pie-grid *ngIf=\"atWorkArray\"\r\n\t\t\t\t\t[view]=\"atWorkArray.view\"\r\n\t\t\t\t\t[scheme]=\"atWorkArray.colorScheme\"\r\n\t\t\t\t\t[results]=\"atWorkArray.data\"\r\n\t\t\t\t\t(select)=\"atWorkArray.onSelect($event)\">\r\n\t\t\t\t</ngx-charts-pie-grid>\r\n\t\t\t</div>\r\n\t\t</app-card>\r\n\t<!-- </div> -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/dashboard/health-visual/health-visual.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chartcard {\n  /*max-width: 33%;*/\n  text-align: center; }\n\n.chartcard-report {\n  overflow-x: auto;\n  overflow-y: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/dashboard/health-visual/health-visual.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HealthVisualComponent; });
/* unused harmony export Chart */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HealthVisualComponent = (function () {
    function HealthVisualComponent(callApi, translate) {
        var _this = this;
        this.callApi = callApi;
        this.translate = translate;
        this.display = '';
        this.summaryReport = [{ heartrate: '', health_status: '', working: '' }];
        this.dataFilled = false;
        this.interval = 3000;
        this.arrWordBpm = ['NormalBpm'];
        this.arrWordHealthyStat = ['OK', 'Unhealthy'];
        this.arrWordPresentStat = ['Present', 'Absent'];
        this.translate.onLangChange.subscribe(function (event) {
            // console.log(this.translatedCategory);
            _this.updateChartWithTranslationChange();
        });
    }
    HealthVisualComponent.prototype.getTranslateArr = function (originalArrWord) {
        var _this = this;
        return new Promise(function (resolve) {
            var translatedCategory = [];
            originalArrWord.forEach(function (catg) {
                _this.translate.get(catg).subscribe(function (res) {
                    translatedCategory.push(res);
                });
            });
            resolve(translatedCategory);
        });
    };
    HealthVisualComponent.prototype.ngOnChanges = function (simpleChanges) {
        if (simpleChanges['summaryReport'] || simpleChanges['display']) {
            // console.log('changes: '+this.display);
            this.updateChart(this.display);
        }
    };
    HealthVisualComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.callApi.getData(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].reportSummary + this.display).subscribe(function (data) { _this.summaryReport = data; _this.dataFilled = true; });
        this.intervalHook = setInterval(function () {
            // console.log("report reload: "+this.display);
            _this.updateChart(_this.display);
        }, this.interval);
    };
    HealthVisualComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.intervalHook);
    };
    HealthVisualComponent.prototype.updateChart = function (display) {
        var _this = this;
        this.callApi.getData(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].reportSummary + display)
            .subscribe(function (data) {
            if (!_this.compareJSONArray(data[0].heartrate, _this.summaryReport[0].heartrate)) {
                _this.summaryReport[0].heartrate = data[0].heartrate;
                _this.getHrChart();
            }
            if (!_this.compareJSONArray(data[0].health_status, _this.summaryReport[0].health_status)) {
                _this.summaryReport[0].health_status = data[0].health_status;
                _this.getStatusChart();
            }
            if (!_this.compareJSONArray(data[0].working, _this.summaryReport[0].working)) {
                _this.summaryReport[0].working = data[0].working;
                _this.getPresentChart();
            }
        });
    };
    HealthVisualComponent.prototype.updateChartWithTranslationChange = function () {
        this.getHrChart();
        this.getStatusChart();
        this.getPresentChart();
    };
    HealthVisualComponent.prototype.getHrChart = function () {
        var _this = this;
        var heartrate = this.summaryReport[0].heartrate;
        var arr = [];
        this.getTranslateArr(this.arrWordBpm)
            .then(function (value) {
            arr.push({ name: value[0], value: +heartrate.normal });
            arr.push({ name: '>120 bpm', value: +heartrate.high });
            arr.push({ name: '<60 bpm', value: +heartrate.low });
            _this.hrArray = new Chart(arr);
            console.log("update chart via translation change");
        });
    };
    HealthVisualComponent.prototype.getStatusChart = function () {
        var _this = this;
        // data.push(['OK', +this.healthStatus.ok]);
        // 	data.push(['Unhealthy', +this.healthStatus.unhealthy]);
        var stat = this.summaryReport[0].health_status;
        var arr = [];
        this.getTranslateArr(this.arrWordHealthyStat)
            .then(function (value) {
            arr.push({ name: value[0], value: +stat.ok });
            arr.push({ name: value[1], value: +stat.unhealthy });
            _this.healthStatusArray = new Chart(arr);
            _this.healthStatusArray.explodeSlices = true;
            _this.healthStatusArray.doughnut = true;
            _this.healthStatusArray.arcWidth = 0.5;
        });
    };
    HealthVisualComponent.prototype.getPresentChart = function () {
        var _this = this;
        var work = this.summaryReport[0].working;
        var arr = [];
        this.getTranslateArr(this.arrWordPresentStat)
            .then(function (value) {
            arr.push({ name: value[0], value: +work.present });
            arr.push({ name: value[0], value: +work.absent });
            _this.atWorkArray = new Chart(arr);
            _this.atWorkArray.view = [400, 250];
        });
        // this.atWorkArray.colorScheme=colorSets[2];
    };
    HealthVisualComponent.prototype.compareJSONArray = function (arr1, arr2) {
        if (arr1 || arr2) {
            if (Object.keys(arr1).length == Object.keys(arr2).length) {
                var keys = Object.keys(arr1);
                for (var i = 0; i < keys.length; i++) {
                    if (!arr2.hasOwnProperty(keys[i])) {
                        return false;
                    }
                    if (arr1[keys[i]] != arr2[keys[i]]) {
                        return false;
                    }
                }
                return true;
            }
        }
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], HealthVisualComponent.prototype, "display", void 0);
    HealthVisualComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-health-visual',
            template: __webpack_require__("../../../../../src/app/component/dashboard/health-visual/health-visual.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/dashboard/health-visual/health-visual.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["c" /* CallApiService */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_translate__["b" /* TranslateService */]])
    ], HealthVisualComponent);
    return HealthVisualComponent;
}());

var Chart = (function () {
    function Chart(data) {
        this.view = [400, 250];
        // options
        this.showLegend = true;
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
        };
        this.arcWidth = 0;
        // pie
        this.showLabels = true;
        this.explodeSlices = false;
        this.doughnut = true;
        this.data = data;
    }
    Chart.prototype.onSelect = function (event) {
        console.log(event);
    };
    return Chart;
}());

// // heart rate chart
// getHrChart(): void {
// 	let data = [] as any;
// 	data.push(['BPM', 'number']);
// 	data.push(['Lower Than 60 bpm', +this.hr.lowerThanNormal]);
// 	data.push(['Normal bpm', +this.hr.normal]);
// 	data.push(['Higher Than 100 bpm', +this.hr.higherThanNormal]);
// 	this.hrArray = {
// 		chartType: 'PieChart',
// 		dataTable: data,
// 		options: {
// 			'legend': 'top',
// 			'height': 600,
// 			'colors': ['#e1c26f','#b76325','#642b0e']
// 		},
// 	};
// }
// // spo2 chart
// getSpo2Chart(): void {
// 	let data = [] as any;
// 	data.push(['SpO2', 'number']);
// 	data.push(['Lower Than 94% of SpO2', +this.spo2.lowerThanNormal]);
// 	data.push(['Normal SpO2', +this.spo2.normal]);
// 	this.spo2Array = {
// 		chartType: 'PieChart',
// 		dataTable: data,
// 		options: {
// 			'legend': 'top',
// 			'height': 600,
// 			'colors': ['#b76325','#266979']
// 		},
// 	};
// }
// // temperature chart
// getTempChart(): void {
// 	let data = [] as any;
// 	data.push(['Body Temperature', 'number']);
// 	data.push(['Lower Than 36.1 degree celcius', +this.temp.lowerThanNormal]);
// 	data.push(['Normal Body Temperature;', +this.temp.normal]);
// 	data.push(['Higher Than 37.2 degree celcius', +this.temp.higherThanNormal]);
// 	this.tempArray = {
// 		chartType: 'PieChart',
// 		dataTable: data,
// 		options: {
// 			'legend': 'top',
// 			'height': 600,
// 			'colors': ['#ad4f12','#f35901','#ddbf03']
// 		},
// 	};
// }
// // health status chart
// getStatusChart(): void {
// 	let data = [] as any;
// 	data.push(['Health Status', 'number']);
// 	data.push(['OK', +this.healthStatus.ok]);
// 	data.push(['Unhealthy', +this.healthStatus.unhealthy]);
// 	this.healthStatusArray = {
// 		chartType: 'PieChart',
// 		dataTable: data,
// 		options: {
// 			'legend': 'top',
// 			'height': 600,
// 			'colors': ['#4c3024','#876a39']
// 		},
// 	};
// }
// //get present number
// getPresentChart(): void {
// 		let data = [] as any;
// 		data.push(['On duty', 'number']);
// 		data.push(['Absent', +this.atWork.absent]);
// 		data.push(['Present', +this.atWork.present]);
// 		this.atWorkArray = {
// 			chartType: 'PieChart',
// 			dataTable: data,
// 			options: {
// 				'legend': 'top',
// 				'height': 600,
// 				'colors': ['red','green']
// 			},
// 		};
// }
// class HeartRate{
// 	constructor(a,b,c)
// 	{
// 		this.lowerThanNormal=a;
// 		this.normal=b;
// 		this.higherThanNormal=c;
// 	}
// 	lowerThanNormal:number;//hr<60
// 	normal:number;//60<=hr<=100
// 	higherThanNormal:number;//hr>100
// }
// class Spo2{
// 	constructor(a,b)
// 	{
// 		this.lowerThanNormal=a;
// 		this.normal=b;
// 	}
// 	lowerThanNormal:number;//spo2<94%
// 	normal:number;//94<=spo2<=100
// }
// class Temperature{
// 	constructor(a,b,c)
// 	{
// 		this.lowerThanNormal=a;
// 		this.normal=b;
// 		this.higherThanNormal=c;
// 	}
// 	lowerThanNormal:number;//temp<36.1
// 	normal:number;//36.1<=temp<<37.2
// 	higherThanNormal:number;//temp>37.2
// }
// class HealthStatus{
// 	constructor(a,b)
// 	{
// 		this.ok=a;
// 		this.unhealthy=b;
// 	}
// 	ok:number;
// 	unhealthy:number;
// }
// class Working{
// 	constructor(a,b)
// 	{
// 		this.absent=a;
// 		this.present=b;
// 	}
// 	absent:number
// 	present:number
// }


/***/ }),

/***/ "../../../../../src/app/component/dashboard/on-duty-chart/on-duty-chart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel-head panel-onduty\">\r\n\t<span><img src=\"assets/images/employee.png\"></span>\r\n\t<span><h3>{{\"EmployeeOnDutyChart\"|translate}}   </h3></span>\r\n</div>\r\n<div style=\"overflow-x: auto\">\r\n      <ngx-charts-bar-horizontal-2d *ngIf=\"chartData\"\r\n            [view]=\"chartData.view\"\r\n            [scheme]=\"chartData.colorScheme\"\r\n            [results]=\"chartData.multi\"\r\n            [gradient]=\"chartData.gradient\"\r\n            [xAxis]=\"chartData.showXAxis\"\r\n            [yAxis]=\"chartData.showYAxis\"\r\n            [legend]=\"chartData.showLegend\"\r\n            [legendTitle]=\"chartData.legendTitle\"\r\n            [showXAxisLabel]=\"chartData.showXAxisLabel\"\r\n            [showYAxisLabel]=\"chartData.showYAxisLabel\"\r\n            [xAxisLabel]=\"chartData.xAxisLabel\"\r\n            [yAxisLabel]=\"chartData.yAxisLabel\"\r\n            (select)=\"onSelect($event)\">\r\n      </ngx-charts-bar-horizontal-2d>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/dashboard/on-duty-chart/on-duty-chart.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel-head {\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start; }\n\n.panel-onduty {\n  background: #3a3a3a;\n  color: #ffffff; }\n\n.panel-onduty > span {\n  margin-left: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/dashboard/on-duty-chart/on-duty-chart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OnDutyChartComponent; });
/* unused harmony export BarChart */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OnDutyChartComponent = (function () {
    function OnDutyChartComponent(translate) {
        var _this = this;
        this.translate = translate;
        this.category = ["Ok", "Unhealthy", "NotOnDevice"];
        this.translate.onLangChange.subscribe(function (event) {
            // console.log(this.translatedCategory);
            _this.getTranslatedCategory()
                .then(function (value) {
                _this.updateChart(value);
            });
            // console.log("update chart via translation change");
        });
    }
    OnDutyChartComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.getTranslatedCategory()
            .then(function (value) {
            _this.updateChart(value);
        });
    };
    OnDutyChartComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.getTranslatedCategory(this.updateChart);
        this.getTranslatedCategory()
            .then(function (value) {
            _this.updateChart(value);
        });
    };
    OnDutyChartComponent.prototype.getTranslatedCategory = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var translatedCategory = [];
            _this.category.forEach(function (catg) {
                _this.translate.get(catg).subscribe(function (res) {
                    translatedCategory.push(res);
                });
            });
            resolve(translatedCategory);
        });
    };
    OnDutyChartComponent.prototype.updateChart = function (translatedCategory) {
        console.log(this.dutyChart);
        console.log(translatedCategory);
        if (this.dutyChart !== null && (typeof this.dutyChart !== 'undefined')) {
            var chartArray = [];
            for (var ptr in this.dutyChart) {
                var data = this.dutyChart[ptr];
                // console.log(data);
                chartArray.push({
                    'name': data.pname,
                    'series': [
                        { "name": translatedCategory[0], "value": parseInt(data.ok) },
                        { "name": translatedCategory[1], "value": parseInt(data.unhealthy) },
                        { "name": translatedCategory[2], "value": parseInt(data.workernum) - parseInt(data.onduty) }
                    ]
                });
            }
            // this.getLegendTranslationAndCreateChart(chartArray);
            // console.log(chartArray);
            this.chartData = new BarChart(chartArray, this.translate);
        }
    };
    // getLegendTranslationAndCreateChart(chartArray:any[]){
    //   chartArray.forEach((chart) => {
    //     for(var i=0;i<chart.series.length;i++){
    //       this.translate.get(chart[0].series[i]["name"]).subscribe((res: string) => {
    //         chart[0].series[i]["name"]=res;
    //       });
    //     }
    //   });
    //   console.log(chartArray);
    //   this.chartData = new BarChart(chartArray,this.translate);
    // }
    OnDutyChartComponent.prototype.onSelect = function (event) {
        console.log(event);
        for (var _i = 0, _a = this.dutyChart; _i < _a.length; _i++) {
            var project = _a[_i];
            if (project['pname'] === event['series']) {
                console.log(project);
                document.location.href = '#/projects/' + project['pid'];
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], OnDutyChartComponent.prototype, "dutyChart", void 0);
    OnDutyChartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-on-duty-chart',
            template: __webpack_require__("../../../../../src/app/component/dashboard/on-duty-chart/on-duty-chart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/dashboard/on-duty-chart/on-duty-chart.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_translate__["b" /* TranslateService */]])
    ], OnDutyChartComponent);
    return OnDutyChartComponent;
}());

var BarChart = (function () {
    function BarChart(data, translate) {
        var _this = this;
        this.translate = translate;
        this.view = [, 399];
        // options
        this.showXAxis = true;
        this.showYAxis = true;
        this.gradient = false;
        this.showLegend = true;
        this.showXAxisLabel = true;
        this.showYAxisLabel = true;
        this.legendTitle = 'Legend';
        this.xAxisLabel = 'User';
        this.yAxisLabel = 'Project Name';
        this.colorScheme = {
            domain: ['#90e87b', '#FF6756', '#b0b0b0']
        };
        this.multi = data;
        this.getTranslation();
        this.translate.onLangChange.subscribe(function (event) {
            _this.getTranslation();
            console.log("translation change");
        });
    }
    BarChart.prototype.getTranslation = function () {
        var _this = this;
        this.translate.get('User').subscribe(function (res) {
            _this.xAxisLabel = res;
        });
        this.translate.get('ProjectName').subscribe(function (res) {
            _this.yAxisLabel = res;
        });
        this.translate.get('Legend').subscribe(function (res) {
            _this.legendTitle = res;
        });
        // for(var i=0;i<this.multi[0].series.length;i++){
        //   this.translate.get(this.multi[0].series[i]["name"]).subscribe((res: string) => {
        //     this.multi[0].series[i]["name"]=res;
        //   });
        //   console.log(this.multi[0].series[i]["name"]);
        // }
    };
    return BarChart;
}());



/***/ }),

/***/ "../../../../../src/app/component/employee/add-employee/add-employee.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1>{{\"AddNewUser\"|translate}}</h1>\r\n  <hr/>\r\n  <form (ngSubmit)=\"onSubmit(employeeForm.value)\" [formGroup]=\"employeeForm\" novalidate>\r\n    <div class=\"padding-top row form-group\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"Name\"|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <input class=\"form-control\" formControlName=\"name\" type=\"text\" placeholder=\"John smith\" />\r\n        <div class=\"warn\" *ngIf=\"!employeeForm.controls['name'].valid&&employeeForm.controls['name'].touched\">Please enter name in less than 50 character</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row form-group\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"PhoneNumber\"|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <input class=\"form-control\" formControlName=\"phone\" type=\"text\" placeholder=\"+6018-8888888\"/>\r\n        <div class=\"warn\" *ngIf=\"!employeeForm.controls['phone'].valid&&employeeForm.controls['phone'].touched\">Please enter valid phone number</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row form-group\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"EmailAddress\"|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <input class=\"form-control\" formControlName=\"email\" type=\"email\" placeholder=\"example@gmail.com\" />\r\n        <div class=\"warn\" *ngIf=\"!employeeForm.controls['email'].valid&&employeeForm.controls['email'].touched\">Please Enter valid email address</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row form-group\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"ProjectID\"|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <div *ngIf=\"projects['length']<=0; else project_select\">\r\n          No group available\r\n        </div>\r\n        <ng-template #project_select>\r\n          <ng-select \r\n            [allowClear]=\"true\"\r\n            [items]=\"projects\"\r\n            (selected)=\"selected($event)\" *ngIf=\"projects[0]!=null\"\r\n            placeholder=\"No group selected\">\r\n          </ng-select>\r\n        </ng-template>\r\n        <div class=\"warn\" *ngIf=\"!employeeForm.controls['projectID'].valid&&employeeForm.controls['projectID'].touched\">This is required</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row form-group\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"Address\"|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <input class=\"form-control\" formControlName=\"address\" type=\"text\" placeholder=\"Enter Address\" />\r\n        <div class=\"warn\" *ngIf=\"!employeeForm.controls['address'].valid&&employeeForm.controls['address'].touched\">Please enter address in less than 80 character</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row form-group\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"Age\"|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <input class=\"form-control\" formControlName=\"age\" type=\"number\" placeholder=\"30\" />\r\n        <div class=\"warn\" *ngIf=\"!employeeForm.controls['age'].valid&&employeeForm.controls['age'].touched\">This is required</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row form-group\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"Photo\"|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-5\">\r\n        <input class=\"form-control\" type=\"file\" (change)=\"fileUpload($event)\" accept=\"image/*\" #fileInput/>\r\n      </div>\r\n      <div class=\"col-lg-2\">\r\n        <img *ngIf=\"file else nofile\" [src]=\"file\" height=\"40px\" alt=\"image preview\"/>\r\n        <ng-template #nofile>\r\n          <p>{{\"NoPreview\"|translate}}</p>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row form-group\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"Position\"|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <ng-select [allowClear]=\"true\"\r\n        [items]=\"position\"\r\n        (selected)=\"selectedPosition($event)\" *ngIf=\"position[0]!=null\"\r\n          placeholder=\"No position selected\">\r\n        </ng-select>\r\n        <div class=\"warn\" *ngIf=\"!employeeForm.controls['position'].valid&&employeeForm.controls['position'].touched\">This is required</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row form-group\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"Blood\"|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <select class=\"form-control\" formControlName=\"blood\">\r\n          <option>A+</option>\r\n          <option>A-</option>\r\n          <option>B+</option>\r\n          <option>B-</option>\r\n          <option>AB+</option>\r\n          <option>AB-</option>\r\n          <option>O+</option>\r\n          <option>O-</option>\r\n        </select>\r\n        <div class=\"warn\" *ngIf=\"!employeeForm.controls['blood'].valid&&employeeForm.controls['blood'].touched\">This is required</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row form-group\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"emergencyContactName\"|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <input class=\"form-control\" formControlName=\"emergencyContactName\" type=\"text\" placeholder=\"John smith\" />\r\n        <div class=\"warn\" *ngIf=\"!employeeForm.controls['emergencyContactName'].valid&&employeeForm.controls['emergencyContactName'].touched\">Please enter name in less than 50 character</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row form-group\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"emergencyContactPhone\"|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <input class=\"form-control\" formControlName=\"emergencyContactPhone\" type=\"text\" placeholder=\"+6018-8888888\"/>\r\n        <div class=\"warn\" *ngIf=\"!employeeForm.controls['emergencyContactPhone'].valid&&employeeForm.controls['emergencyContactPhone'].touched\">Please enter valid phone number</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row form-group\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"Height\"|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <input class=\"form-control\" formControlName=\"height\" type=\"number\" placeholder=\"175\"/>\r\n        <div class=\"warn\" *ngIf=\"!employeeForm.controls['height'].valid&&employeeForm.controls['height'].touched\">Enter between 0 to 280</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row form-group\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"Weight\"|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <input class=\"form-control\" formControlName=\"weight\" type=\"number\" placeholder=\"75\"/>\r\n        <div class=\"warn\" *ngIf=\"!employeeForm.controls['weight'].valid&&employeeForm.controls['weight'].touched\">Enter between 10 to 200</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row form-group\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"DeviceID\"|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <input class=\"form-control\" formControlName=\"devid\" type=\"text\" placeholder=\"\"/>\r\n        <div class=\"warn\" *ngIf=\"!employeeForm.controls['devid'].valid&&employeeForm.controls['devid'].touched\">Enter a device id</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row\">\r\n      <div class=\"col-lg-2 offset-lg-10\">\r\n        <button type=\"submit\" [disabled]=\"!employeeForm.valid\" class=\"btn btn-block btn-success\">{{\"Add\"|translate}}</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/employee/add-employee/add-employee.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".padding-top {\n  padding-top: 5px; }\n\n.warn {\n  background: #f2edda;\n  padding: 7px;\n  font-size: .9em;\n  margin-bottom: 20px;\n  display: inline-block;\n  -webkit-animation: 0.5s alertAnim forwards;\n          animation: 0.5s alertAnim forwards; }\n\n@-webkit-keyframes alertAnim {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n@keyframes alertAnim {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n.ui-select-choices.dropdown-menu {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/employee/add-employee/add-employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddEmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddEmployeeComponent = (function () {
    function AddEmployeeComponent(fb, callApi, reloadService) {
        this.fb = fb;
        this.callApi = callApi;
        this.reloadService = reloadService;
        this.newid = "";
        this.formSubmitSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.projects = [];
        this.position = [];
        this.value = {};
    }
    AddEmployeeComponent.prototype.ngOnInit = function () {
        this.getProjectList(__WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].projectListOngoing);
        this.assignPositionDropdown();
        this.employeeForm = this.fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(15)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
            projectID: [''],
            address: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(80)]],
            age: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
            position: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            blood: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__shared_services__["d" /* CustomValidators */].validateBloodType, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(3)]],
            emergencyContactName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
            emergencyContactPhone: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(15)]],
            height: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].min(0), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].max(280)]],
            weight: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].min(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].max(200)]],
            devid: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]]
        });
    };
    AddEmployeeComponent.prototype.fileUpload = function (event) {
        var _this = this;
        //preview
        if (event.target.files && event.target.files[0] && this.isImage(event)) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = function (event) {
                _this.file = event.target.result;
            };
            this.photo = event.srcElement.files;
            console.log(this.photo);
        }
        else {
            alert("Please upload image only");
            this.fileInput.nativeElement.value = "";
        }
    };
    AddEmployeeComponent.prototype.isImage = function (event) {
        var file = event.target.files[0];
        var fileType = file["type"];
        fileType = fileType.split("/");
        if (fileType[0] == "image") {
            return true;
        }
        return false;
    };
    AddEmployeeComponent.prototype.assignPositionDropdown = function () {
        var _this = this;
        this.positionList = ['User'];
        this.positionList.forEach(function (position) {
            _this.position.push({
                id: position,
                text: position
            });
        });
        console.log(this.position);
    };
    AddEmployeeComponent.prototype.getProjectList = function (url) {
        var _this = this;
        this.callApi.getData(url)
            .subscribe(function (data) {
            _this.projectList = data;
            _this.assignProjectToDropdown();
        });
    };
    AddEmployeeComponent.prototype.assignProjectToDropdown = function () {
        var _this = this;
        this.projectList.forEach(function (project) {
            _this.projects.push({
                id: project.p_id,
                text: project.p_data.p_name
            });
        });
    };
    AddEmployeeComponent.prototype.selected = function (value) {
        this.employeeForm.controls["projectID"].patchValue(value.id);
        console.log('Selected value is: ', value);
    };
    AddEmployeeComponent.prototype.selectedPosition = function (value) {
        this.employeeForm.controls["position"].patchValue(value.text);
        console.log('Selected position is: ', this.employeeForm.controls['position']);
    };
    AddEmployeeComponent.prototype.getLatestWorkerId = function (url, callback) {
        var _this = this;
        this.callApi.getData(url)
            .subscribe(function (data) {
            if (data.length > 0) {
                _this.newid = data[data.length - 1]['w_id'];
                _this.newid = "W" + (parseInt(_this.newid.substr(1)) + 1);
            }
            else {
                _this.newid = "W1";
            }
            callback();
        });
    };
    AddEmployeeComponent.prototype.onSubmit = function (value) {
        var self = this;
        var postData = function () {
            console.log(value);
            value['w_id'] = self.newid;
            self.callApi.postWithFile(__WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].newEmployee, value, self.photo)
                .subscribe(function (response) {
                self.formSubmitSuccess.emit(true);
                console.log('response: ' + response);
                self.reloadService.setReload();
            });
        };
        this.getLatestWorkerId(__WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].workerList, postData);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AddEmployeeComponent.prototype, "formSubmitSuccess", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], AddEmployeeComponent.prototype, "fileInput", void 0);
    AddEmployeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-employee',
            template: __webpack_require__("../../../../../src/app/component/employee/add-employee/add-employee.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../../src/app/component/employee/add-employee/add-employee.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2__shared_services__["c" /* CallApiService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* ApiReloadService */]])
    ], AddEmployeeComponent);
    return AddEmployeeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/employee/employee.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <!-- alert to let user know if form submitted successfully -->\r\n  <app-feedback [(showFeedback)]=\"formSubmitted\" [message]=\"indicationMessage\"></app-feedback>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n    \t<h1>{{\"EmployeeList\"|translate}}</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"offset-lg-5 col-lg-2\">\r\n      <button class=\"btn btn-block btn-success\" (click)=\"openModalBox()\">{{\"Add\"|translate}}</button>\r\n    </div>\r\n    <div class=\"col-lg-5\">\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"filterQuery\" [placeholder]=\"'EnterUserIDorUserName'|translate\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel panel-default\">\r\n    <table class=\"table table-striped\" [mfData]=\"employees|dataFilter:filterQuery:'employeesName'\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n      <thead>\r\n        <tr>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"w_id\">{{\"ID\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"w_name_photo.w_name\">{{\"Name\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"p_id\">{{\"ProjectID\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"p_data.p_name\">{{\"ProjectName\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"w_dev_data.floor\">{{\"Level\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"w_dev_data.zone\">{{\"ZoneName\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 20%\">\r\n            <mfDefaultSorter by=\"w.w_location\">{{\"EmployeeLocation\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"w_dev_data.longitude\">{{\"Longitude\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"w_dev_data.latitude\">{{\"Latitude\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"w_dev_data.altitude\">{{\"Altitude\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"w_sensor_data_.hr\">{{\"HeartRate\"|translate}} (Bpm)</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"w_status.health_status\">{{\"Status\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let employee of mf.data\">\r\n          <td><a [routerLink]=\"['/employee',employee.w_id]\">{{employee.w_id}}</a></td>\r\n          <td>{{employee.w_name_photo.w_name}} ({{employee.dev_id}})</td>\r\n          <td>{{employee.p_id ? employee.p_id : defaultNull}}</td>\r\n          <td>{{employee.p_data ? (employee.p_data.p_name ? employee.p_data.p_name : defaultNull) : defaultNull}}</td>\r\n          <td>{{employee.w_dev_data ? (employee.w_dev_data.floor ? employee.w_dev_data.floor : defaultNull) : defaultNull}}</td>\r\n          <td>{{employee.w_dev_data ? (employee.w_dev_data.zone ? employee.w_dev_data.zone : defaultNull) : defaultNull}}</td>\r\n          <td>{{employee.w_location ? employee.w_location : defaultNull}}</td>\r\n          <td>{{employee.w_dev_data ? (employee.w_dev_data.longitude ? employee.w_dev_data.longitude : defaultNull) : defaultNull}}</td>\r\n          <td>{{employee.w_dev_data ? (employee.w_dev_data.latitude ? employee.w_dev_data.latitude : defaultNull) : defaultNull}}</td>\r\n          <td>{{employee.w_dev_data ? (employee.w_dev_data.altitude ? employee.w_dev_data.altitude : defaultNull) : defaultNull}}</td>\r\n          <td>{{employee.w_sensor_data_ ? (employee.w_sensor_data_.hr ? employee.w_sensor_data_.hr : defaultNull) : defaultNull}}</td>\r\n          <td>{{employee.w_status ? (employee.w_status.health_status ? employee.w_status.health_status : defaultNull) : defaultNull}}</td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <td colspan=\"12\">\r\n            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n          </td>\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n  <app-loading [apiCallFinish]=\"employees\"></app-loading>\r\n</div>\r\n\r\n<!-- modal box to add employee -->\r\n<div *ngIf=\"displayModel\" class=\"modal\">\r\n  <div [ngClass]=\"{'modal-content':true}\">\r\n      <span class=\"close\" (click)=\"closeModalBox()\">&times;</span>\r\n      <app-add-employee (formSubmitSuccess)=\"formSubmit($event)\"></app-add-employee>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/component/employee/employee.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\n  display: block;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 4;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */ }\n\n/* Modal Content/Box */\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto;\n  /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 50%;\n  /* Could be more or less, depending on screen size */ }\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  position: absolute;\n  right: 10px;\n  font-size: 28px;\n  font-weight: bold; }\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/employee/employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeComponent = (function () {
    function EmployeeComponent(CallApi, reloadService, http) {
        var _this = this;
        this.CallApi = CallApi;
        this.reloadService = reloadService;
        this.http = http;
        this.defaultNull = "-";
        //configuration for feedback message
        this.formSubmitted = false;
        this.indicationMessage = ["Success", "NewEmployeeFormsIsSubmitted"];
        //whether the model of app-add-employee is being display or not
        this.displayModel = false;
        this.filterQuery = "";
        this.rowsOnPage = 10;
        this.sortBy = "w_id";
        this.sortOrder = "asc";
        this.reloadService.reload$.subscribe(function (reload) {
            if (reload) {
                // console.log("reload employees");
                _this.employees = null;
                //reload list when new employee is added
                setTimeout(function () { return _this.getList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].workerList); }, 2000);
            }
        });
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        this.getList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].workerList);
    };
    // get worker list
    EmployeeComponent.prototype.getList = function (url) {
        var _this = this;
        this.CallApi.getData(url)
            .subscribe(function (data) {
            var _loop_1 = function (worker) {
                if ((data[worker]['w_location'] === '-' || data[worker]['w_location'] === '') && data[worker].w_dev_data != null && data[worker].w_dev_data.latitude != null && data[worker].w_dev_data.longitude != null) {
                    _this.CallApi.getLocationByLatLng(_this.http, { lat: data[worker].w_dev_data.latitude, lng: data[worker].w_dev_data.longitude }, null).subscribe(function (ditto) {
                        data[worker]['w_location'] = ditto;
                    });
                }
            };
            for (var worker in data) {
                _loop_1(worker);
            }
            ;
            _this.employees = data;
        });
    };
    EmployeeComponent.prototype.openModalBox = function () {
        this.displayModel = true;
    };
    EmployeeComponent.prototype.closeModalBox = function () {
        this.displayModel = false;
    };
    //accept eventEmitter to let use know form submitted
    EmployeeComponent.prototype.formSubmit = function (event) {
        this.displayModel = false;
        this.formSubmitted = event;
    };
    EmployeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-employee',
            template: __webpack_require__("../../../../../src/app/component/employee/employee.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/employee/employee.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["c" /* CallApiService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services__["b" /* ApiReloadService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/employee/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_employee_add_employee_component__ = __webpack_require__("../../../../../src/app/component/employee/add-employee/add-employee.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_employee_view_employee_component__ = __webpack_require__("../../../../../src/app/component/employee/view-employee/view-employee.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__view_employee_view_employee_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employee_component__ = __webpack_require__("../../../../../src/app/component/employee/employee.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__employee_component__["a"]; });





/***/ }),

/***/ "../../../../../src/app/component/employee/view-employee/employee-history-map/employee-history-map.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"dataLoaded\">\r\n\t<!--Map -->\r\n\t<div class=\"row\">\r\n\t\t<div class=\"pt-4 col-lg-1\">\r\n\t\t\t<p>{{\"From\"|translate}} :</p>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-2 pt-4 form-group\">\r\n\t\t\t<input type=\"text\"\r\n           class=\"form-control\"\r\n           id = \"date1\"\r\n           #dp1=\"bsDatepicker\"\r\n           [bsConfig]=\"bsConfig\"\r\n\t\t   bsDatepicker [(bsValue)]=\"minDate\">\r\n\t\t   <!-- <angular2-date-picker [(ngModel)]=\"minDate\" [settings]=\"settings\" (onDateSelect)=\"onMinDateSelect($event)\"></angular2-date-picker> -->\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-2 form-group\">\r\n\t\t\t<timepicker [(ngModel)]=\"minTime\" [minuteStep]=\"mstep\" [showMeridian]=\"showMeridian\"></timepicker>\t\t\t\r\n\t\t</div>\r\n\t\t<div class=\"pt-4 col-lg-1\">\r\n\t\t\t<p>{{\"To\"|translate}} :</p>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-2 pt-4 form-group\">\r\n\t\t\t<input type=\"text\"\r\n           class=\"form-control\"\r\n           id = \"date2\"\r\n           #dp2=\"bsDatepicker\"\r\n           [bsConfig]=\"bsConfig\"\r\n\t\t   bsDatepicker [(bsValue)]=\"maxDate\">\r\n\t\t   <!-- <angular2-date-picker [(ngModel)]=\"maxDate\" [settings]=\"settings\" (onDateSelect)=\"onMaxDateSelect($event)\"></angular2-date-picker>\t\t    -->\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-2 form-group\">\r\n\t\t\t<timepicker [(ngModel)]=\"maxTime\" [minuteStep]=\"mstep\" [showMeridian]=\"showMeridian\"></timepicker>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-2 pt-4 form-group\">\r\n\t\t\t<button class=\"btn btn-success btn-block\" (click)=\"filter(minDate,minTime,maxDate,maxTime)\">{{\"Filter\" |translate}}</button>\r\n\t\t</div>\r\n\t\t\r\n\t</div>\r\n\t<div class=\"scrollmenu\">\r\n\t\t<span *ngFor=\"let histTrail of (workerHistTrail | dateFilter:minDateTime:maxDateTime)\">\r\n\t\t\t<a (click)=\"clickLatLng(histTrail.timestamp,histTrail.latLng)\">{{histTrail.timestamp}}</a>\r\n\t\t</span>\r\n\t</div>\r\n\t<div *ngIf=\"showMap\">\r\n\t\t<div style=\"height: 40vh; width: 100%; overflow:hidden; z-index:0; display:block\" leaflet [leafletOptions]=\"options\" (leafletMapReady)=\"onMapReady($event)\">\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/employee/view-employee/employee-history-map/employee-history-map.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div .scrollmenu {\n  background-color: #333;\n  overflow: auto;\n  white-space: nowrap; }\n  div .scrollmenu a {\n    display: inline-block;\n    color: white;\n    text-align: center;\n    padding: 14px;\n    text-decoration: none;\n    cursor: pointer; }\n    div .scrollmenu a:hover {\n      background-color: #777; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/employee/view-employee/employee-history-map/employee-history-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeHistoryMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_datepicker__ = __webpack_require__("../../../../ngx-bootstrap/datepicker/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EmployeeHistoryMapComponent = (function () {
    function EmployeeHistoryMapComponent(_route, callApi, datePipe, _bsDatepickerConfig) {
        this._route = _route;
        this.callApi = callApi;
        this.datePipe = datePipe;
        this._bsDatepickerConfig = _bsDatepickerConfig;
        this.historyLayers = new __WEBPACK_IMPORTED_MODULE_4_leaflet__["FeatureGroup"];
        this.workerHistTrail = [];
        this.dataLoaded = false;
        this.initZoom = 8;
        this.showMap = true;
        //datepicker config
        this.bsConfig = { containerClass: "theme-default", showWeekNumbers: false, dateInputFormat: 'YYYY/MM/DD' };
        this.minDate = new Date();
        this.maxDate = new Date();
        // timepicker configuration
        this.mstep = 15;
        this.showMeridian = false;
        this.minTime = new Date();
        this.maxTime = new Date();
        this.date = new Date();
        this.settings = {
            bigBanner: true,
            timePicker: true,
            format: 'yyyy/MM/dd HH:mm',
            defaultOpen: false
        };
        this.options = {
            layers: [__WEBPACK_IMPORTED_MODULE_4_leaflet__["tileLayer"]('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')],
            zoom: 8,
            center: __WEBPACK_IMPORTED_MODULE_4_leaflet__["latLng"](46.879966, -121.726909)
        };
        this.markerOptions = {
            icon: __WEBPACK_IMPORTED_MODULE_4_leaflet__["icon"]({
                iconSize: [25, 41],
                iconAnchor: [13, 41],
                iconUrl: '/assets/map/marker-icon.png'
            })
        };
        this._bsDatepickerConfig.dateInputFormat = 'YYYY/MM/DD';
        this.minDate.setDate(this.minDate.getDate() - 1);
        this.maxDate.setDate(this.maxDate.getDate() + 1);
        this.minTime = new Date(this.minDate.getFullYear(), this.minDate.getMonth(), this.minDate.getDate(), 0, 0, 0);
        this.maxTime = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth(), this.maxDate.getDate(), 0, 0, 0);
        this.minDateTime = new Date(this.minDate.getFullYear(), this.minDate.getMonth(), this.minDate.getDate(), this.minTime.getHours(), this.minTime.getMinutes(), this.minTime.getSeconds());
        this.maxDateTime = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth(), this.maxDate.getDate(), this.maxTime.getHours(), this.maxTime.getMinutes(), this.maxTime.getSeconds());
    }
    EmployeeHistoryMapComponent.prototype.ngOnInit = function () {
        var id = this._route.snapshot.paramMap.get('id');
        // this.getWorkerHistLoc(`${ApiCmd.workerHisLoc}/${id}`);
        this.getWorkerHistLoc(__WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].deviceHisLoc + "/" + this.devID + "/" + this.datePipe.transform(this.minDate, 'yyyyMMdd') + "/" + this.datePipe.transform(this.maxDate, 'yyyyMMdd'));
    };
    EmployeeHistoryMapComponent.prototype.filter = function (minDate, minTime, maxDate, maxTime) {
        console.log(this.map);
        // let self = this;
        // this.map.eachLayer(function (layer) {
        //   self.map.removeLayer(layer);
        // });
        // this.map.removeLayer(this.historyLayers);
        this.clearMap();
        this.minDateTime = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate(), minTime.getHours(), minTime.getMinutes(), minTime.getSeconds());
        this.maxDateTime = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate(), maxTime.getHours(), maxTime.getMinutes(), maxTime.getSeconds());
        console.log(this.minDateTime.toISOString());
        console.log(this.maxDateTime.toISOString());
        this.getWorkerHistLoc(__WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].deviceHisLoc + "/" + this.devID + "/" + this.datePipe.transform(this.minDate, 'yyyyMMdd') + "/" + this.datePipe.transform(this.maxDate, 'yyyyMMdd'), this.updateLayer);
    };
    EmployeeHistoryMapComponent.prototype.clearMap = function () {
        // for (var i in this.map._layers) {
        //   if (this.map._layers[i].options.format == undefined) {
        //       try {
        //           this.map.removeLayer(this.map._layers[i]);
        //       } catch (e) {
        //           console.log("problem with " + e + this.map._layers[i]);
        //       }
        //   }
        // }
        for (var i in this.map._layers) {
            if (this.map._layers[i]._path != undefined) {
                try {
                    this.map.removeLayer(this.map._layers[i]);
                }
                catch (e) {
                    console.log("problem with " + e + this.map._layers[i]);
                }
            }
        }
        this.historyLayers.clearLayers();
        console.log(this.historyLayers);
    };
    // onValueChange(value: Date): void {
    //   console.log(value[0].getTime()+","+value[1].getTime());
    // }
    // onDate1ValueChange(value: Date): void {
    //   this.bsRangeValue[0] = value;
    //   console.log(value);
    // }
    // onDate2ValueChange(value: Date): void {
    //   this.bsRangeValue[1] = value;
    //   console.log(value);
    // }
    // onMinDateSelect($event){
    //   this.minDate = $event;
    // }
    // onMaxDateSelect($event){
    //   this.maxDate = $event;
    // }
    EmployeeHistoryMapComponent.prototype.getWorkerHistLoc = function (url, callback) {
        var _this = this;
        this.callApi.getData(url)
            .subscribe(function (data) {
            console.log(data);
            if (data && data.length != 0) {
                // let hisLoc=data[0].dev_common;
                var hisLoc = data;
                _this.classifyWorkerHistLoc(hisLoc);
                if (_this.workerHistTrail && _this.workerHistTrail.length != 0) {
                    _this.options.center = _this.workerHistTrail[_this.workerHistTrail.length - 1].latLng;
                }
            }
            _this.dataLoaded = true;
            if (callback)
                callback(_this);
        });
    };
    EmployeeHistoryMapComponent.prototype.classifyWorkerHistLoc = function (hist) {
        var _this = this;
        console.log(hist);
        this.workerHistTrail = [];
        hist.forEach(function (loc) {
            var latLng = __WEBPACK_IMPORTED_MODULE_4_leaflet__["latLng"](loc.latitude, loc.longitude);
            _this.workerHistTrail.push({ "timestamp": _this.datePipe.transform(loc.timestamp, 'yyyy/MM/dd HH:mm:ss'), "latLng": latLng, "zone": loc.zone });
            // this.workerHistLatLng.push(latLng);
            // this.workerHistTimeStamp.push(this.datePipe.transform(loc.timestamp, 'yyyy/MM/dd HH:mm:ss'));
        });
    };
    EmployeeHistoryMapComponent.prototype.clickLatLng = function (timestamp, latLng) {
        var zoom = 20;
        console.log(latLng);
        console.log(this.map);
        if (latLng) {
            this.map.setView(latLng, zoom);
            this.showPopup(timestamp, this.historyLayers);
        }
        else {
            alert("User location not found");
        }
    };
    EmployeeHistoryMapComponent.prototype.showPopup = function (timestamp, lyrs) {
        var layers = lyrs.getLayers();
        for (var _i = 0, layers_1 = layers; _i < layers_1.length; _i++) {
            var lyr = layers_1[_i];
            console.log(lyr);
            var text = lyr.getPopup().getContent().replace(/(<\/?[^<]*>)/g, "").trim();
            // console.log(worker_id);
            // console.log(w_id);
            console.log(text.indexOf(timestamp));
            if (text.indexOf(timestamp) >= 0) {
                console.log("same");
                lyr.openPopup();
            }
        }
    };
    EmployeeHistoryMapComponent.prototype.onMapReady = function (map) {
        // this.latlngs.forEach(place=>{
        //   this.newMarker(place,this.markerOptions,"hello").addTo(map);
        // })
        this.map = map;
        var workerHistLatLng = [];
        for (var i = 0; i < this.workerHistTrail.length; i++) {
            // console.log(this.workerHistTrail[i]);
            var pop = "\n        <div>Timestamp: " + this.workerHistTrail[i].timestamp + "</div>\n        <div>Zone: " + this.workerHistTrail[i].zone + "</div>\n        ";
            // this.workerHistTrail[i].timestamp+"testing"
            this.newMarker(this.workerHistTrail[i].latLng, this.markerOptions, pop).addTo(this.historyLayers);
            workerHistLatLng.push(this.workerHistTrail[i].latLng);
        }
        this.map.addLayer(this.historyLayers);
        var polyline = __WEBPACK_IMPORTED_MODULE_4_leaflet__["polyline"](workerHistLatLng, { color: 'blue' }).addTo(this.map);
        this.map.fitBounds(polyline.getBounds());
        console.log('map is ready');
    };
    EmployeeHistoryMapComponent.prototype.updateLayer = function (self) {
        console.log("update Layer\nworker hist Trail");
        console.log(self.workerHistTrail);
        var workerHistLatLng = [];
        for (var i = 0; i < self.workerHistTrail.length; i++) {
            // console.log(self.minDateTime);
            // console.log(self.workerHistTrail[i].timestamp);
            // console.log(self.minDateTime.getTime());
            // console.log(new Date(self.workerHistTrail[i].timestamp).getTime());
            var workerTime = new Date(self.workerHistTrail[i].timestamp).getTime();
            if (workerTime > self.minDateTime.getTime() && workerTime < self.maxDateTime.getTime()) {
                var pop = "\n        <div>Timestamp: " + self.workerHistTrail[i].timestamp + "</div>\n        <div>Zone: " + self.workerHistTrail[i].zone + "</div>\n        ";
                // self.workerHistTrail[i].timestamp+"testing"
                self.newMarker(self.workerHistTrail[i].latLng, self.markerOptions, pop).addTo(self.historyLayers);
                workerHistLatLng.push(self.workerHistTrail[i].latLng);
            }
        }
        self.map.addLayer(self.historyLayers);
        var polyline = __WEBPACK_IMPORTED_MODULE_4_leaflet__["polyline"](workerHistLatLng, { color: 'blue' }).addTo(self.map);
        self.map.fitBounds(polyline.getBounds());
    };
    /* Add new stuff */
    EmployeeHistoryMapComponent.prototype.newMarker = function (latlng, options, popup) {
        var marker = __WEBPACK_IMPORTED_MODULE_4_leaflet__["marker"](latlng, options);
        if (popup != null) {
            marker.bindPopup(popup);
        }
        return marker;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EmployeeHistoryMapComponent.prototype, "devID", void 0);
    EmployeeHistoryMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-employee-history-map',
            template: __webpack_require__("../../../../../src/app/component/employee/view-employee/employee-history-map/employee-history-map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/employee/view-employee/employee-history-map/employee-history-map.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services__["c" /* CallApiService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap_datepicker__["a" /* BsDatepickerConfig */]])
    ], EmployeeHistoryMapComponent);
    return EmployeeHistoryMapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/employee/view-employee/send-command/send-command.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{\"Command\" | translate}}</h1>\r\n<app-feedback [(showFeedback)]=\"commandSend\" [message]=\"indicationMessage\"></app-feedback>\r\n<br/>\r\n\r\n<div class=\"row\">\r\n\t<div class=\"col-lg-3\">\r\n\t\t<button class=\"btn btn-block btn-success\" (click)=\"sendCommand('heartrate')\">\r\n\t\t\t\t<img src=\"assets/images/heartrate.png\">\r\n\t\t\t\t<p>{{\"ReadHeartrate\" | translate}}</p>\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"col-lg-3\">\r\n\t\t<button class=\"btn btn-block btn-danger\" (click)=\"sendCommand('shutdown')\">\r\n\t\t\t\t<img src=\"assets/images/smartwatch.png\">\r\n\t\t\t\t<p>{{\"ShutdownDevice\" | translate}}</p>\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"col-lg-3\">\r\n\t\t<button class=\"btn btn-block btn-info\" (click)=\"sendCommand('restart')\">\r\n\t\t\t\t<img src=\"assets/images/restart.png\">\t\t\t\t\t\t\t\r\n\t\t\t\t<p>{{\"Restart\" | translate}}</p>\t\t\t\t\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"col-lg-3\">\r\n\t\t<button class=\"btn btn-block btn-primary\" (click)=\"sendCommand('message')\">\r\n\t\t\t\t<img src=\"assets/images/message.png\">\t\t\t\t\r\n\t\t\t\t<p>{{\"SendSMS\" | translate}}</p>\r\n\r\n\t\t</button>\r\n\t</div>\r\n</div>\r\n<div class=\"row pt-3\">\r\n\t<div class=\"col-lg-3\">\r\n\t\t<button class=\"btn btn-block btn-danger\" (click)=\"sendCommand('pedometer')\">\r\n\t\t\t\t<img src=\"assets/images/walk.png\">\r\n\t\t\t\t<p>{{\"Pedometer\" | translate}}</p>\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"col-lg-3\">\r\n\t\t<button class=\"btn btn-block btn-warning\" (click)=\"sendCommand('datainterval')\">\r\n\t\t\t\t<img src=\"assets/images/time.png\">\r\n\t\t\t\t<p>{{\"DataInterval\" | translate}}</p>\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"col-lg-3\">\r\n\t\t<button class=\"btn btn-block btn-primary\" (click)=\"sendCommand('positioning')\">\r\n\t\t\t\t<img src=\"assets/images/gps.png\">\t\t\t\t\t\t\t\r\n\t\t\t\t<p>{{\"StartGPS\" | translate}}</p>\t\t\t\t\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"col-lg-3\">\r\n\t\t<button class=\"btn btn-block btn-success\" (click)=\"sendCommand('phrase')\">\r\n\t\t\t\t<img src=\"assets/images/phrase.png\">\t\t\t\t\r\n\t\t\t\t<p>{{\"DisplayPhrase\" | translate}}</p>\r\n\r\n\t\t</button>\r\n\t</div>\r\n</div>\r\n<div class=\"row pt-3\">\r\n\t<div class=\"col-lg-3\">\r\n\t\t<button class=\"btn btn-block btn-warning\" (click)=\"sendCommand('reconnect')\">\r\n\t\t\t\t<img src=\"assets/images/connectServer.png\">\r\n\t\t\t\t<p>{{\"ConnectServer\" | translate}}</p>\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"col-lg-3\">\r\n\t\t<button class=\"btn btn-block btn-primary\" (click)=\"sendCommand('lowbat')\">\r\n\t\t\t\t<img src=\"assets/images/bat-low-alert-set.png\">\r\n\t\t\t\t<p>{{\"LowBatteryAlarm\" | translate}}</p>\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"col-lg-3\">\r\n\t\t<button class=\"btn btn-block btn-success\" (click)=\"sendCommand('findwatch')\">\r\n\t\t\t\t<img src=\"assets/images/find.png\">\t\t\t\t\t\t\t\r\n\t\t\t\t<p>{{\"FindWatch\" | translate}}</p>\t\t\t\t\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"col-lg-3\">\r\n\t\t<button class=\"btn btn-block btn-warning\" (click)=\"sendCommand('hrInterval')\">\r\n\t\t\t\t<img src=\"assets/images/hrInterval.png\">\t\t\t\t\t\t\t\r\n\t\t\t\t<p>{{\"HrInterval\" | translate}}</p>\t\t\t\t\r\n\t\t</button>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/employee/view-employee/send-command/send-command.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "button > img {\n  height: 100px;\n  width: auto;\n  float: right; }\n\nbutton > p {\n  position: absolute;\n  bottom: 0;\n  font-size: 1.3rem; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/employee/view-employee/send-command/send-command.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SendCommandComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SendCommandComponent = (function () {
    function SendCommandComponent(CallApi, translate) {
        this.CallApi = CallApi;
        this.translate = translate;
        //configuration for feedback message
        this.commandSend = false;
        this.indicationMessage = new Array();
    }
    SendCommandComponent.prototype.ngOnInit = function () {
    };
    SendCommandComponent.prototype.sendCommand = function (event) {
        var _this = this;
        var cancel = false;
        console.log(event);
        var data = {
            name: event,
        };
        if (event == "heartrate") {
            this.indicationMessage[0] = "Success";
            this.indicationMessage[1] = "HeartRateSent";
        }
        else if (event == "shutdown") {
            this.indicationMessage[0] = "Success";
            this.indicationMessage[1] = "ShutdownSent";
        }
        else if (event == "restart") {
            this.indicationMessage[0] = "Success";
            this.indicationMessage[1] = "RestartSent";
        }
        else if (event == "message") {
            this.indicationMessage[0] = "Success";
            this.indicationMessage[1] = "MessageSent";
            var message_1;
            this.translate.get("Message").subscribe(function (res) {
                message_1 = prompt(res);
            });
            if (message_1 == null) {
                cancel = true;
            }
            else {
                data["data1"] = this.number;
                data["data2"] = message_1;
                console.log(data);
            }
        }
        else if (event == "pedometer") {
            this.indicationMessage[0] = "Success";
            this.indicationMessage[1] = "MessageSent";
            var pedo_1;
            this.translate.get("PedometerPrompt1").subscribe(function (res) {
                pedo_1 = prompt(res);
            });
            while (pedo_1 != '0' && pedo_1 != '1' && pedo_1 != null) {
                this.translate.get("PedometerPrompt2").subscribe(function (res) {
                    pedo_1 = prompt(res);
                });
            }
            if (pedo_1 == null) {
                cancel = true;
            }
            else {
                data["data1"] = parseInt(pedo_1);
                data["data2"] = "";
            }
        }
        else if (event == "datainterval") {
            this.indicationMessage[0] = "Success";
            this.indicationMessage[1] = "MessageSent";
            var setDataInterval_1;
            this.translate.get("SetDataIntervalPrompt1").subscribe(function (res) {
                setDataInterval_1 = prompt(res);
            });
            while (isNaN(parseInt(setDataInterval_1)) && setDataInterval_1 != null) {
                this.translate.get("SetDataIntervalPrompt2").subscribe(function (res) {
                    setDataInterval_1 = prompt(res);
                });
            }
            if (setDataInterval_1 == null) {
                cancel = true;
            }
            else {
                data["data1"] = parseInt(setDataInterval_1);
                data["data2"] = "";
            }
        }
        else if (event == "positioning") {
            this.indicationMessage[0] = "Success";
            this.indicationMessage[1] = "MessageSent";
        }
        else if (event == "phrase") {
            this.indicationMessage[0] = "Success";
            this.indicationMessage[1] = "MessageSent";
            var phrase_1;
            this.translate.get("PhrasePrompt").subscribe(function (res) {
                phrase_1 = prompt(res);
            });
            if (phrase_1 == null) {
                cancel = true;
            }
            else {
                data["data1"] = phrase_1;
                data["data2"] = "";
            }
            console.log(data);
        }
        else if (event == "reconnect") {
            this.indicationMessage[0] = "Success";
            this.indicationMessage[1] = "MessageSent";
            var domain_1, port_1;
            this.translate.get("DomainPrompt").subscribe(function (res) {
                domain_1 = prompt(res);
            });
            if (domain_1 == null) {
                cancel = true;
            }
            else {
                this.translate.get("PortPrompt1").subscribe(function (res) {
                    port_1 = prompt(res);
                });
                while (isNaN(parseInt(port_1)) && port_1 != null) {
                    this.translate.get("PortPrompt2").subscribe(function (res) {
                        port_1 = prompt(res);
                    });
                }
                if (port_1 == null) {
                    cancel = true;
                }
                else {
                    data["data1"] = domain_1;
                    data["data2"] = port_1;
                }
            }
        }
        else if (event == "lowbat") {
            this.indicationMessage[0] = "Success";
            this.indicationMessage[1] = "MessageSent";
            var lowbat_1;
            this.translate.get("LowBatPrompt1").subscribe(function (res) {
                lowbat_1 = prompt(res);
            });
            while (lowbat_1 != '0' && lowbat_1 != '1' && lowbat_1 != null) {
                this.translate.get("LowBatPrompt2").subscribe(function (res) {
                    lowbat_1 = prompt(res);
                });
            }
            if (lowbat_1 == null) {
                cancel = true;
            }
            else {
                data["data1"] = parseInt(lowbat_1);
                data["data2"] = "";
            }
        }
        else if (event == "findWatch") {
            this.indicationMessage[0] = "Success";
            this.indicationMessage[1] = "MessageSent";
        }
        else if (event == "hrInterval") {
            this.indicationMessage[0] = "Success";
            this.indicationMessage[1] = "MessageSent";
            var interval_1;
            this.translate.get("HrIntervalPrompt1").subscribe(function (res) {
                interval_1 = prompt(res);
            });
            while ((isNaN(parseInt(interval_1)) || parseInt(interval_1) < 300) && interval_1 != null) {
                this.translate.get("HrIntervalPrompt2").subscribe(function (res) {
                    interval_1 = prompt(res);
                });
            }
            if (interval_1 == null) {
                cancel = true;
            }
            else {
                data["data1"] = parseInt(interval_1);
                data["data2"] = "";
            }
        }
        if (!cancel) {
            this.translate.get("CommandConfirmation").subscribe(function (res) {
                if (confirm(res)) {
                    _this.CallApi.sendCommand(data, _this.workerID).subscribe(function (response) {
                        var responseBody = response;
                        if (responseBody == "" || responseBody == null) {
                            _this.commandSend = true;
                        }
                        console.log(responseBody);
                    });
                }
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SendCommandComponent.prototype, "workerID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SendCommandComponent.prototype, "number", void 0);
    SendCommandComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-send-command',
            template: __webpack_require__("../../../../../src/app/component/employee/view-employee/send-command/send-command.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/employee/view-employee/send-command/send-command.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["c" /* CallApiService */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_translate__["b" /* TranslateService */]])
    ], SendCommandComponent);
    return SendCommandComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/employee/view-employee/sensor-data/sensor-data.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"width:100%\">\r\n\t<ngx-charts-number-card *ngIf=\"sensorCard\"\r\n\t\t[view]=\"sensorCard.view\"\r\n\t\t[scheme]=\"sensorCard.colorScheme\"\r\n\t\t[results]=\"sensorCard.data\"\r\n\t\t[cardColor]=\"sensorCard.cardColor\"\r\n\t\t(select)=\"sensorCard.onSelect($event)\">\r\n\t</ngx-charts-number-card>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/employee/view-employee/sensor-data/sensor-data.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/employee/view-employee/sensor-data/sensor-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SensorDataComponent; });
/* unused harmony export NumberCard */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SensorDataComponent = (function () {
    function SensorDataComponent(translate) {
        var _this = this;
        this.translate = translate;
        this.sensorData = [{ 'hr': 0, 'steps': 0, 'steps_total': 0, 'battery': 0 }];
        this.sensorName = ["HeartRate", "NumberOfSteps", "TotalNumberOfSteps", "BatteryLevel"];
        this.green = '#5AA454';
        this.red = '#A10A28';
        this.yellow = '#C7B42C';
        this.translate.onLangChange.subscribe(function (event) {
            // console.log(this.translatedCategory);
            _this.getTranslatedCategory()
                .then(function (value) {
                _this.updateCard(value);
            });
            console.log("update chart via translation change");
        });
    }
    SensorDataComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.getTranslatedCategory()
            .then(function (value) {
            _this.updateCard(value);
        });
    };
    SensorDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getTranslatedCategory()
            .then(function (value) {
            _this.updateCard(value);
        });
    };
    SensorDataComponent.prototype.getTranslatedCategory = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var translatedCategory = [];
            _this.sensorName.forEach(function (name) {
                _this.translate.get(name).subscribe(function (res) {
                    translatedCategory.push(res);
                });
            });
            resolve(translatedCategory);
        });
    };
    SensorDataComponent.prototype.updateCard = function (translatedCategory) {
        console.log(this.sensorData);
        if (this.sensorData !== null && typeof this.sensorData !== 'undefined') {
            var hr = this.sensorData['hr'];
            var steps = this.sensorData['steps'];
            var steps_total = this.sensorData['steps_total'];
            var battery = this.sensorData['battery'];
            var data = [
                { 'name': translatedCategory[0], 'value': hr + ' bpm' },
                { 'name': translatedCategory[1], 'value': steps },
                { 'name': translatedCategory[2], 'value': steps_total },
                { 'name': translatedCategory[3], 'value': battery + '%' }
            ];
            this.sensorCard = new NumberCard(data);
            var color_hr = this.red;
            var color_steps = this.red;
            var color_steps_total = this.red;
            var color_battery = this.red;
            if (hr >= 60 && hr <= 100) {
                color_hr = this.green;
            }
            if (steps != 0) {
                color_steps = this.green;
            }
            if (steps_total != 0) {
                color_steps_total = this.green;
            }
            if (battery >= 50) {
                color_battery = this.green;
            }
            else if (battery >= 20) {
                color_battery = this.yellow;
            }
            this.sensorCard.colorScheme = { domain: [color_hr, color_steps, color_steps_total, color_battery] };
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], SensorDataComponent.prototype, "sensorData", void 0);
    SensorDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sensor-data',
            template: __webpack_require__("../../../../../src/app/component/employee/view-employee/sensor-data/sensor-data.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/employee/view-employee/sensor-data/sensor-data.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_translate__["b" /* TranslateService */]])
    ], SensorDataComponent);
    return SensorDataComponent;
}());

var NumberCard = (function () {
    function NumberCard(data) {
        this.view = [1000, 200];
        this.colorScheme = {
            domain: ['#5AA454', '#A10A28', '#C7B42C']
        };
        this.cardColor = "#f5f5f5";
        this.data = data;
    }
    NumberCard.prototype.onSelect = function (event) {
        // console.log(event);
    };
    return NumberCard;
}());



/***/ }),

/***/ "../../../../../src/app/component/employee/view-employee/view-employee.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngIf=\"profile\">\r\n  <!-- profile -->\r\n  <div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-8\">\r\n        <h1 class=\"inline\">{{id}} ({{profile.dev_id}})</h1>\r\n          <p class=\"inline green-font\" *ngIf=\"online\">{{\"Online\"|translate}}</p>\r\n          <p class=\"inline grey-font\" *ngIf=\"!online\">{{\"Offline\"|translate}}</p>\r\n      </div>\r\n      <div class=\"offset-lg-3 col-lg-1\">\r\n        <fa name=\"times\" class=\"close\" [routerLink]=\"['/employee']\"></fa>\r\n      </div>\r\n    </div>\r\n\r\n    <div class = \"pt-3\">\r\n      <div class=\"row\" style=\"min-height: 33vh\">\r\n        <div class=\"col-lg-3 text-center profile-photo\">\r\n          <div>\r\n              <img [src]=\"profile.w_name_photo.w_photo\" alt=\"your photo\"/>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <app-info-row [title]=\"'Name'\" [value]=\"profile.w_name_photo.w_name\" [edit]=\"editDetails\" [group]=\"userForm\" controlName=\"name\"></app-info-row>\r\n          <app-info-row [title]=\"'Age'\" [value]=\"profile.w_info.w_age\" [edit]=\"editDetails\" [group]=\"userForm\" controlName=\"age\"></app-info-row>\r\n          <app-info-row [title]=\"'EmailAddress'\" [value]=\"profile.w_info.w_email\" [edit]=\"editDetails\" [group]=\"userForm\" controlName=\"emailAddress\"></app-info-row>\r\n          <app-info-row [title]=\"'Contact'\" [value]=\"profile.w_info.w_contact\" [edit]=\"editDetails\" [group]=\"userForm\" controlName=\"contact\"></app-info-row>\r\n          <!-- <app-info-row [title]=\"'EmployeeLocation'\" [value]=\"profile.w_location\" [edit]=\"cannotEdit\" [group]=\"userForm\" controlName=\"none\"></app-info-row> -->\r\n          <app-info-row [title]=\"'Position'\" [value]=\"profile.w_info.w_position\" [edit]=\"editDetails\" [group]=\"userForm\" controlName=\"position\"></app-info-row>\r\n          <app-info-row [title]=\"'emergencyContactName'\" [value]=\"profile.w_emergency.emergencyContactName\" [edit]=\"editDetails\" [group]=\"userForm\" controlName=\"emergencyContactName\"></app-info-row>\r\n          <app-info-row [title]=\"'emergencyContactPhone'\" [value]=\"profile.w_emergency.emergencyContactPhone\" [edit]=\"editDetails\" [group]=\"userForm\" controlName=\"emergencyContactPhone\"></app-info-row>\r\n          <!-- <app-info-row [title]=\"'DeviceID'\" [value]=\"profile.dev_id\" [edit]=\"editDetails\" [group]=\"userForm\" controlName=\"deviceID\"></app-info-row> -->\r\n          <!-- photo upload -->\r\n          <div class=\"row\" *ngIf=\"editDetails\">\r\n              <div class=\"col-lg-5 bold\"><p>{{'NewPhoto'|translate}}</p></div>\r\n              <span class=\"col-lg-1\" style=\"text-align: center\"><p>:</p></span>\r\n              <div class=\"col-lg-4\">\r\n                  <input class=\"form-control\" type=\"file\" (change)=\"fileUpload($event,cropper)\" accept=\"image/*\" #fileInput/>\r\n                </div>\r\n                <div class=\"col-lg-2\">\r\n                  <img *ngIf=\"file else nofile\" [src]=\"file\" height=\"30px\" alt=\"image preview\"/>\r\n                  <ng-template #nofile>\r\n                    <p>{{\"NoPreview\"|translate}}</p>\r\n                  </ng-template>\r\n                </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3\">\r\n          <button class=\"btn btn-block btn-success\" (click)=\"openCommandModalBox()\">{{\"Command\" | translate}}</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- modal box to perform command to device -->\r\n    <div *ngIf=\"displayCommandModel\" class=\"modal\">\r\n      <div [ngClass]=\"{'modal-content':true}\">\r\n        <span class=\"close\" (click)=\"closeCommandModalBox()\">&times;</span>\r\n          <app-send-command [number]=\"profile.w_info.w_contact\" [workerID]=\"profile.dev_id\"></app-send-command>          \r\n      </div>\r\n    </div>\r\n\r\n    <!-- graphs -->\r\n    <hr *ngIf=\"sensorData\"/>\r\n    <div class = \"pt-3\">    \r\n      <h2>{{\"SensorData\"|translate}}</h2>    \r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <app-info-row [title]=\"'LastReceiveDate'\" [value]=\"profile.dev_time|date:('FormatDateWithSecond'|translate)\" [edit]=\"false\"></app-info-row>          \r\n          <!-- <p class=\"preserve-white-space\">{{'LastReceiveDate'|translate}}            : {{profile.dev_time|date:('FormatDateWithSecond'|translate)}}</p> -->\r\n          <app-info-row [title]=\"'EmployeeLocation'\" [value]=\"profile.w_location\" [edit]=\"false\"></app-info-row>                    \r\n          <app-info-row [title]=\"'Level'\" [value]=\"profile.w_dev_data.floor\" [edit]=\"false\"></app-info-row>                    \r\n          <!-- <p>{{'EmployeeLocation'|translate}} (lng,lat) : {{profile.w_dev_data.longitude}},{{profile.w_dev_data.latitude}}</p> -->\r\n          <!-- <app-info-row [title]=\"'LastReceiveDate'\" [value]=\"profile.dev_time|date:('FormatDateWithSecond'|translate)\" [edit]=\"cannotEdit\" controlName=\"none\" [group]=\"userForm\"></app-info-row> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" style=\"overflow-x: auto\">\r\n        <app-sensor-data *ngIf=\"sensorData\" [sensorData]=\"sensorData\"></app-sensor-data>\r\n      </div>\r\n    </div>\r\n    <hr *ngIf=\"project\"/>\r\n\r\n    <!-- History map -->\r\n    <div class = \"pt-3\">\r\n      <h2>{{\"LocationHistory\"|translate}}</h2>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n          <app-employee-history-map [devID] = \"profile.dev_id\"></app-employee-history-map>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <hr *ngIf=\"project\"/>\r\n    <!-- table -->\r\n    <div class = \"pt-3\">\r\n      <h2>{{\"UserProjects\"|translate}}</h2>\r\n      <div class=\"panel panel-default\">\r\n        <table class=\"table table-striped\" [mfData]=\"project\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n          <thead>\r\n            <tr>\r\n              <th style=\"width: 10%\">\r\n                <mfDefaultSorter by=\"w_p_id\">{{\"ProjectID\"|translate}}</mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 10%\">\r\n                <mfDefaultSorter by=\"w_name\">{{\"ProjectName\"|translate}}</mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 10%\">\r\n                <mfDefaultSorter by=\"p_location\">{{\"ProjectLocation\"|translate}}</mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 10%\">\r\n                <mfDefaultSorter by=\"p_workers_number\">{{\"NumberOfWorkers\"|translate}}</mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 10%\">\r\n                <mfDefaultSorter by=\"p_floor\">{{\"NumberOfFloor\"|translate}}</mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 10%\">\r\n                <mfDefaultSorter by=\"p_area\">{{\"Size\"|translate}}</mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 10%\">\r\n                <mfDefaultSorter by=\"p_admin\">{{\"ProjectManager\"|translate}}</mfDefaultSorter>\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let proj of mf.data\">\r\n              <td><a [routerLink]=\"['/projects',proj.p_id]\">{{proj.p_id}}</a></td>\r\n              <td>{{proj.p_data.p_name}}</td>\r\n              <td>{{profile.w_location||\"-\"}}</td>\r\n              <td>{{proj.workernum||\"-\"}}</td>\r\n              <td>{{proj.p_data.p_floor}}</td>\r\n              <td>{{proj.p_data.p_area}}</td>\r\n              <td>{{proj.p_data.p_admin}}</td>\r\n            </tr>\r\n          </tbody>\r\n          <tfoot>\r\n            <tr>\r\n              <td colspan=\"7\">\r\n                <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n              </td>\r\n            </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"offset-lg-8 col-lg-2\">\r\n      <button *ngIf=\"!editDetails else SaveButton\" class=\"btn btn-block btn-primary\" (click)=\"edit()\">{{\"EditDetails\"|translate}}</button>\r\n    </div>\r\n\r\n    <ng-template #SaveButton>\r\n      <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit(userForm.value)\">\r\n        <input type=\"submit\" class=\"btn btn-block btn-success\" value='{{\"SaveChanges\"|translate}}'/>\r\n      </form>\r\n    </ng-template>\r\n\r\n    <div class=\"col-lg-2\">\r\n      <button class=\"btn btn-block btn-danger\" (click)=\"removeButtonPressed()\">{{\"Delete\"|translate}}</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/employee/view-employee/view-employee.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* The Close Button */\n.close {\n  color: #aaa;\n  position: absolute;\n  right: 10px;\n  font-size: 28px;\n  font-weight: bold; }\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer; }\n\n.profile-photo {\n  max-height: 33vh;\n  border-right: 1px solid;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.profile-photo > div > img {\n  height: auto;\n  max-height: 33vh;\n  width: auto;\n  max-width: 100%;\n  padding-right: 2.5%; }\n\n.green-font {\n  background-color: green;\n  color: white;\n  border-radius: 15%; }\n\n.grey-font {\n  background-color: grey;\n  color: white;\n  border-radius: 15%; }\n\n.inline {\n  display: inline;\n  padding: 1px; }\n\n.preserve-white-space {\n  white-space: pre; }\n\n.modal {\n  display: block;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 4;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */ }\n\n/* Modal Content/Box */\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto;\n  /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 80%;\n  /* Could be more or less, depending on screen size */ }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/employee/view-employee/view-employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewEmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ViewEmployeeComponent = (function () {
    function ViewEmployeeComponent(_route, callApi, fb, location, http, translate) {
        this._route = _route;
        this.callApi = callApi;
        this.fb = fb;
        this.location = location;
        this.http = http;
        this.translate = translate;
        this.rowsOnPage = 5;
        this.sortBy = "w_id";
        this.sortOrder = "asc";
        this.editDetails = false;
        this.cannotEdit = false;
        //boolean to show if user online
        this.online = null;
        // command
        this.displayCommandModel = false;
    }
    ViewEmployeeComponent.prototype.ngOnInit = function () {
        this.id = this._route.snapshot.paramMap.get('id');
        this.getWorkerDetail(__WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].workerList + "/" + this.id);
        this.activateIntervalToRefreshWorkerDetail();
    };
    ViewEmployeeComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.intervalHook);
    };
    ViewEmployeeComponent.prototype.activateIntervalToRefreshWorkerDetail = function () {
        var _this = this;
        this.intervalHook = setInterval(function () {
            _this.getWorkerDetail(__WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].workerList + "/" + _this.id);
        }, 20000);
    };
    //call api to get this id worker's data
    ViewEmployeeComponent.prototype.getWorkerDetail = function (url) {
        var _this = this;
        this.callApi.getData(url)
            .subscribe(function (data) {
            _this.profile = data[0];
            // console.log(this.profile);
            _this.project = _this.profile.project;
            console.log(_this.profile);
            _this.sensorData = _this.profile['w_sensor_data_'];
            //prepare the data to be edit
            if ((_this.profile['w_location'] === '-' || _this.profile['w_location'] === '') && _this.profile['w_dev_data'] != null && _this.profile['w_dev_data'].latitude != null && _this.profile['w_dev_data'].longitude != null) {
                _this.callApi.getLocationByLatLng(_this.http, { lat: _this.profile['w_dev_data'].latitude, lng: _this.profile['w_dev_data'].longitude }, null).subscribe(function (ditto) {
                    _this.profile['w_location'] = ditto;
                });
            }
            _this.online = _this.userOnline(_this.profile['dev_time']);
            _this.initData(_this.profile);
            console.log(_this.profile['w_id']);
            // console.log(this.sensorData);
        });
    };
    ViewEmployeeComponent.prototype.edit = function () {
        this.editDetails = true;
        // to avoid the refresh of data while editing detail
        clearInterval(this.intervalHook);
        console.log("editDetails clicked");
    };
    ViewEmployeeComponent.prototype.removeButtonPressed = function () {
        var _this = this;
        this.translate.get("DeletedUserPrompt", { id: this.id }).subscribe(function (message) {
            if (confirm(message)) {
                _this.removeWorker(_this.id);
                console.log(_this.id + " is confirm to remove");
            }
        });
    };
    ViewEmployeeComponent.prototype.removeWorker = function (workerId) {
        var _this = this;
        var removeData = { w_id: workerId };
        console.log(JSON.stringify(removeData));
        this.callApi.postData(__WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].removeWorker, JSON.stringify(removeData))
            .subscribe(function (response) {
            console.log(response);
            _this.location.back();
        });
    };
    ViewEmployeeComponent.prototype.initData = function (profile) {
        this.userForm = this.fb.group({
            id: [profile.w_id],
            name: [profile.w_name_photo.w_name],
            age: [profile.w_info.w_age],
            emailAddress: [profile.w_info.w_email],
            contact: [profile.w_info.w_contact],
            position: [profile.w_info.w_position],
            emergencyContactName: [profile.w_emergency.emergencyContactName],
            emergencyContactPhone: [profile.w_emergency.emergencyContactPhone],
            deviceID: [profile.dev_id]
        });
        // ,[Validators.required,Validators.maxLength(50)]
        // ,[Validators.required,Validators.minLength(8),Validators.maxLength(15)]
    };
    ViewEmployeeComponent.prototype.onSubmit = function (event) {
        // this.employeeForm.controls["projectID"].patchValue(value.id);
        // event.password=sha256(event.password);
        console.log(event);
        console.log(this.photo);
        this.activateIntervalToRefreshWorkerDetail();
        if (this.photo != null)
            this.gotImageSubmit(event);
        else
            this.noImageSubmit(event);
    };
    ViewEmployeeComponent.prototype.gotImageSubmit = function (event) {
        var _this = this;
        this.userFormValue = event;
        this.callApi.postWithFile(__WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].updateWorker, this.userFormValue, this.photo)
            .subscribe(function (response) {
            _this.getWorkerDetail(__WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].workerList + "/" + _this.id);
        });
        this.editDetails = false;
    };
    ViewEmployeeComponent.prototype.noImageSubmit = function (event) {
        var _this = this;
        // value['id'] = this.profile.w_id;
        this.userFormValue = event;
        console.log(JSON.stringify(this.userFormValue));
        this.callApi.postData(__WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].updateWorker, JSON.stringify(this.userFormValue)).subscribe(function (response) {
            //re-retrieve user data
            _this.getWorkerDetail(__WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].workerList + "/" + _this.id);
        });
        this.editDetails = false;
    };
    ViewEmployeeComponent.prototype.fileUpload = function (event) {
        var _this = this;
        //preview
        if (event.target.files && event.target.files[0] && this.isImage(event)) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = function (event) {
                _this.file = event.target.result;
            };
            this.photo = event.srcElement.files;
            console.log(this.photo);
        }
        else {
            alert("Please upload image only");
            this.fileInput.nativeElement.value = "";
        }
    };
    ViewEmployeeComponent.prototype.isImage = function (event) {
        var file = event.target.files[0];
        var fileType = file["type"];
        fileType = fileType.split("/");
        if (fileType[0] == "image") {
            return true;
        }
        return false;
    };
    ViewEmployeeComponent.prototype.userOnline = function (lastReceiveTime) {
        var oneMinute = 1000 * 60;
        var timeDifferent = +(new Date(Date.now())).getTime() - +(new Date(lastReceiveTime)).getTime();
        var timeDifferentInMin = timeDifferent / oneMinute;
        if (timeDifferentInMin <= 30)
            return true;
        else
            return false;
    };
    ViewEmployeeComponent.prototype.openCommandModalBox = function () {
        this.displayCommandModel = true;
    };
    ViewEmployeeComponent.prototype.closeCommandModalBox = function () {
        this.displayCommandModel = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], ViewEmployeeComponent.prototype, "fileInput", void 0);
    ViewEmployeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-employee',
            template: __webpack_require__("../../../../../src/app/component/employee/view-employee/view-employee.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/employee/view-employee/view-employee.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services__["c" /* CallApiService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_6_ng2_translate__["b" /* TranslateService */]])
    ], ViewEmployeeComponent);
    return ViewEmployeeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-page-wrapper setFontSize\">\r\n\t<div class=\"panel-head\">\r\n\t\t<div style=\"z-index:10\">\r\n\t\t\t<img class=\"image-dropshadow\" src=\"assets/images/logo.png\" style=\"height: 33vh;max-height: 300px\">\r\n\t\t\t<br>\r\n\t\t\t<img class=\"image-dropshadow\" src=\"assets/images/logoname.png\" style=\"padding-top: 3vh;height: 10vh;max-height: 300px\">\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"middle-line panel-head\"></div>\r\n\t<div class=\"panel-head\">\r\n\t\t<div class=\"container login-form\" [hidden]=\"submitted\">\r\n\t\t\t<h2>{{\"Login\"|translate}}</h2>\r\n\t\t\t<form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\" style=\"padding-top: 5%\">\r\n\t\t\t\t<div class=\"form-group login-form-input-wrapper\">\r\n\t\t\t\t\t<div class=\"login-form-icon-container\">\r\n\t\t\t\t\t\t<img src=\"assets/images/user_2.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control login-form-input-child\" id=\"username\" [placeholder]=\"'Username' | translate\" [(ngModel)]=\"user.username\" name=\"username\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group login-form-input-wrapper\">\r\n\t\t\t\t\t<div class=\"login-form-icon-container\">\r\n\t\t\t\t\t\t<img src=\"assets/images/password_2.png\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<input \ttype=\"password\" class=\"form-control login-form-input-child\" id=\"password\" [placeholder]=\"'Password' | translate\" [(ngModel)]=\"user.password\" name=\"password\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"login-form-wrapper\" style=\"width: 100%; color: white;\">\r\n\t\t\t\t\t<!-- <div style=\"display: inline-block; text-align: left\">\r\n\t\t\t\t\t\t<input type=\"checkbox\" id=\"rememberMe\" [(ngModel)]=\"rememberMe\" [ngModelOptions]=\"{standalone: true}\">\r\n\t\t\t\t\t\t<label for=\"rememberMe\" style=\"vertical-align: middle;\">Remember me</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div style=\"display: inline-grid;\">\r\n\t\t\t\t\t\t<a style=\"text-align: right; color: white;\" (click)=\"forgetCredentials()\">Forgot credentials</a>\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"login-form-button-container\">\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-success login-form-button\">{{\"Login\"|translate}}</button>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t\t<div class=\"container login-form validate\" [hidden]=\"!submitted\">\r\n\t\t\t<div *ngIf=\"validating\">\r\n\t\t\t\t<fa name=\"spinner\" animation=\"spin\" size=\"4x\"></fa>\r\n\t\t\t\t<h2 style=\"margin-top: 0px\" >{{\"Validating\"|translate}}...</h2>\r\n\t\t\t</div>\r\n\t\t\t<h2 style=\"margin-top: 0px\" *ngIf=\"!accepted&&!validating\">{{\"InvalidCredential\"|translate}}!</h2>\r\n\t\t\t<h2 style=\"margin-top: 0px\" *ngIf=\"accepted\">{{\"LoginSuccessful\"|translate}}!</h2>\r\n\t\t\t<br>\r\n\t\t\t<button *ngIf=\"!validating\" class=\"btn btn-primary\"  (click)=\"reset()\">{{\"Close\"|translate}}</button>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<figure class=\"form-background\">\r\n\t<img>\r\n</figure>"

/***/ }),

/***/ "../../../../../src/app/component/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* #757575 */\n/* #424242 */\n.form-background:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: rgba(238, 238, 238, 0.5);\n  z-index: 5; }\n\n.form-background > img {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/images/login_background2.jpg") + ");\n  background-position: center;\n  height: 102vh;\n  width: 102vw;\n  background-size: cover;\n  position: fixed;\n  -webkit-filter: blur(5px) grayscale(75%);\n  -moz-filter: blur(5px) grayscale(75%);\n  -o-filter: blur(5px) grayscale(75%);\n  -ms-filter: blur(5px) grayscale(75%);\n  filter: blur(5px) grayscale(75%);\n  top: -1vh;\n  left: -1vw;\n  z-index: 2; }\n\n.middle-line {\n  height: 60vh;\n  width: 0px;\n  border-right: 8px solid #9a9a9a;\n  z-index: 10; }\n\n.login-page-wrapper {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 49.8vw 0.1vw 49.95vw;\n      grid-template-columns: 49.8vw 0.1vw 49.95vw;\n  padding-top: 20vh;\n  background-color: transparent;\n  vertical-align: center;\n  overflow: hidden; }\n\n.login-form-wrapper {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 50% 50%;\n      grid-template-columns: 50% 50%;\n  vertical-align: center; }\n\n.center-element {\n  margin: auto;\n  width: 50%; }\n\n.login-form {\n  height: 40vh;\n  max-height: 300px;\n  max-width: 400px;\n  text-align: center;\n  background-color: #424242;\n  background-color: rgba(69, 66, 66, 0.7);\n  max-width: 25vw;\n  text-align: center;\n  width: 25vw;\n  /*border-radius: 10px;*/\n  margin-bottom: 0px;\n  z-index: 10; }\n\n.login-form > h2 {\n  padding-top: 6.7%;\n  color: white; }\n\n.setFontSize {\n  font-size: 12px !important;\n  font-size: 1.9vmin !important; }\n\n.image-dropshadow {\n  -moz-filter: drop-shadow(0px 0px 5px #896e69);\n  -webkit-filter: drop-shadow(0px 0px 5px #896e69);\n  -o-filter: drop-shadow(0px 0px 5px #896e69);\n  -ms-filter: drop-shadow(0px 0px 5px #896e69);\n  filter: drop-shadow(0px 0px 5px #896e69); }\n\n.login-form-input-child {\n  border: none;\n  display: inline-block; }\n\n.login-form-icon-container {\n  height: 50px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  padding: 5px;\n  background: #dddddd;\n  border-radius: 5px 0px 0px 5px; }\n\n.login-form-icon-container > img {\n  height: 80%; }\n\n.login-form-input-wrapper {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 50px auto;\n      grid-template-columns: 50px auto;\n  vertical-align: center;\n  background-color: white;\n  border-radius: 5px; }\n\n.login-form-button-container {\n  padding-top: 1vh; }\n\n.login-form-button {\n  width: 50%;\n  background-color: #9a9a9a;\n  border: none; }\n\n.validate {\n  padding-top: 80px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user__ = __webpack_require__("../../../../../src/app/component/login/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_messaging_messaging_service__ = __webpack_require__("../../../../../src/app/shared/services/messaging/messaging.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, msgService) {
        var _this = this;
        this.authService = authService;
        this.msgService = msgService;
        this.background_image = 'assets/images/login_background.jpg';
        this.user = new __WEBPACK_IMPORTED_MODULE_2__user__["a" /* User */]("", "");
        this.submitted = false;
        this.rememberMe = false;
        this.accepted = false;
        this.validating = true;
        this.authService.isLoggedIn.subscribe(function (login) {
            //set currentTab to clicked tab from tab.services.
            if (_this.submitted) {
                _this.accepted = login;
                _this.validating = false;
            }
            console.log(login);
            if (login) {
                console.log("do push notification lo");
            }
        });
    }
    LoginComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.validating = true;
        this.authService.login(this.user);
        //check for validity~~~~
        //check using user.username and user.password
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.authService.checkStorage();
    };
    LoginComponent.prototype.reset = function () {
        this.submitted = false;
        this.accepted = false;
        this.validating = false;
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/component/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared__["b" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services_messaging_messaging_service__["a" /* MessagingService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/login/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User(user, pw, department, access_level, id) {
        this.user = user;
        this.pw = pw;
        this.department = department;
        this.access_level = access_level;
        this.id = id;
        this.username = user;
        this.password = pw;
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/component/map/collapsible/collapsible.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"accordion\" aria-multiselectable=\"true\" *ngIf=\"allProjects\">\r\n    <div class=\"card\" *ngFor=\"let project of allProjects; let i = index\">\r\n      <div class=\"card-header\" role=\"tab\">\r\n        <div data-toggle=\"collapse\" data-parent=\"#accordion\" (click)=\"isCollapsed[i] = !isCollapsed[i]\"\r\n          [attr.aria-expanded]=\"!isCollapsed\" class=\"clickable\">\r\n          <h5 class=\"mb-0\">\r\n            {{project['p_id']}} | {{project['p_data']['p_name']}}\r\n            <span style=\"float:right\" *ngIf=\"!isCollapsed[i] else caretDown\"><i class=\"fa fa-caret-right\" aria-hidden=\"true\"></i></span>\r\n            <ng-template #caretDown>\r\n              <span style=\"float:right\"><i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i></span>\r\n            </ng-template>\r\n          </h5>\r\n        </div>\r\n      </div>\r\n      <div class=\"collapse show\" *ngIf=\"isCollapsed[i]\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-6\">\r\n              <p><strong>{{\"EmployeeID\"|translate}}</strong></p>\r\n            </div>\r\n            <div class=\"col-lg-6\" align=\"right\">\r\n              <p><strong>{{\"DeviceID\"|translate}}</strong></p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngFor=\"let worker of project['worker']\">\r\n            <div class=\"col-lg-4\">\r\n              <p class=\"clickable\" (click)=\"showLoc(worker['w_dev_data']['latitude'],worker['w_dev_data']['longitude'],worker['w_id'])\" >{{worker['w_id']}}</p>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <p class=\"inline green-font\" *ngIf=\"userOnline(worker['w_dev_data']['timestamp'])\">{{\"Online\"|translate}}</p>\r\n                <p class=\"inline grey-font\" *ngIf=\"!userOnline(worker['w_dev_data']['timestamp'])\">{{\"Offline\"|translate}}</p>\r\n            </div>\r\n            <div class=\"col-lg-4\" align=\"right\">\r\n              <p class=\"inline blue\">{{worker['w_dev']}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/map/collapsible/collapsible.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clickable {\n  cursor: pointer; }\n  .clickable:hover {\n    color: blue; }\n\n.green-font {\n  background-color: green;\n  color: white;\n  border-radius: 15%; }\n\n.grey-font {\n  background-color: grey;\n  color: white;\n  border-radius: 15%; }\n\n.inline {\n  display: inline;\n  padding: 1px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/map/collapsible/collapsible.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapsibleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CollapsibleComponent = (function () {
    function CollapsibleComponent(callApi) {
        this.callApi = callApi;
        this.workerLocation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    CollapsibleComponent.prototype.ngOnInit = function () {
        this.getAllList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].projectList);
    };
    CollapsibleComponent.prototype.getAllList = function (url) {
        var _this = this;
        this.callApi.getData(url)
            .subscribe(function (data) {
            _this.allProjects = data;
            console.log(_this.allProjects);
            _this.isCollapsed = new Array(_this.allProjects.length).fill(false);
            console.log(_this.isCollapsed);
        });
    };
    CollapsibleComponent.prototype.showLoc = function (lat, lng, w_id) {
        console.log(lat, lng);
        this.workerLocation.emit({ 'lat': lat, 'lng': lng, 'w_id': w_id });
    };
    CollapsibleComponent.prototype.userOnline = function (lastReceiveTime) {
        var oneMinute = 1000 * 60;
        var timeDifferent = +(new Date(Date.now())).getTime() - +(new Date(lastReceiveTime)).getTime();
        var timeDifferentInMin = timeDifferent / oneMinute;
        // console.log(timeDifferentInMin);
        if (timeDifferentInMin <= 30)
            return true;
        else
            return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CollapsibleComponent.prototype, "workerLocation", void 0);
    CollapsibleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-collapsible',
            template: __webpack_require__("../../../../../src/app/component/map/collapsible/collapsible.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/map/collapsible/collapsible.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["c" /* CallApiService */]])
    ], CollapsibleComponent);
    return CollapsibleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/map/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_component__ = __webpack_require__("../../../../../src/app/component/map/map.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__map_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__collapsible_collapsible_component__ = __webpack_require__("../../../../../src/app/component/map/collapsible/collapsible.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__collapsible_collapsible_component__["a"]; });




/***/ }),

/***/ "../../../../../src/app/component/map/map.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-3\" style=\"width:inherit; height: 85vh;overflow-y: scroll;\" *ngIf=\"collapsibleNeeded\">\r\n       <app-collapsible (workerLocation)=\"focusOnMap($event)\"></app-collapsible>\r\n    </div>\r\n    <div [ngClass]=\"{'col-lg-9':collapsibleNeeded,'col-lg-12':!collapsibleNeeded}\">\r\n      <div id='height' style=\"width:inherit; height: 85vh; position:relative\">\r\n        <!-- Searchbox -->\r\n        <div>\r\n          <ng4geo-autocomplete \r\n          [userSettings]=\"searchbox_Settings\"\r\n          (componentCallback)=\"searchbox_AutoCompleteCallback($event)\"\r\n          ></ng4geo-autocomplete>\r\n        </div>\r\n        <!-- END OF SEARCH BOX -->\r\n        <!-- Modal box -->\r\n        <div id=\"myModal\" class=\"modal\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\" style=\"padding-top:30px\"></div>\r\n            <form (ngSubmit)=\"modalBox_submit(polygonForm.value)\" [formGroup]=\"polygonForm\" class=\"modal-body\" name=\"polygonForm\">\r\n              <div class=\"row form-group\">\r\n                <div class=\"col-lg-4\"><p>{{\"AddTo\"|translate}}</p></div>\r\n                <div class=\"col-lg-1\"><p>:</p></div>\r\n                <div class=\"col-lg-7\">\r\n                  <select class=\"form-control\" formControlName=\"polygon_project_id\" id=\"polygon_project_id\" name=\"polygon_project_id\" required [(ngModel)]=\"polygon_project_id_valid\">\r\n                    <option style=\"font-style:italic\" value=\"-1\" disabled=\"true\" [selected]=\"!polygon_project_id_valid\">{{\"SelectAProject\"|translate}}</option>\r\n                  </select>\r\n                  <div class=\"alert\" *ngIf=\"!polygonForm.controls['polygon_project_id'].valid && polygonForm.controls['polygon_project_id'].touched\">This is required</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-group\">\r\n                <div class=\"col-lg-4\"><span>{{\"Type\"|translate}}</span></div>\r\n                <div class=\"col-lg-1\"><span>:</span></div>\r\n                <div class=\"col-lg-7\">\r\n                  <select class=\"form-control\" formControlName=\"polygon_type\" id=\"polygon_type\" name=\"polygon_type\" required [(ngModel)]=\"polygon_type_valid\">\r\n                    <option style=\"font-style:italic\" value=\"-1\" disabled=\"true\" [selected]=\"!polygon_type_valid\">{{\"SelectTheTypeOfOperation\"|translate}}</option>\r\n                    <option value=\"Geofencing\">{{\"Geofencing\"|translate}}</option>\r\n                    <option value=\"Zoning\">{{\"Zoning\"|translate}}</option>\r\n                  </select>\r\n                  <div class=\"alert\" *ngIf=\"!polygonForm.controls['polygon_type'].valid && polygonForm.controls['polygon_type'].touched\">This is required</div>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"(polygon_type_valid === 'Zoning' || polygon_type_valid === '分区')\">\r\n                <div class=\"row form-group\">\r\n                  <div class=\"col-lg-4\"><span>{{\"ZoneName\"|translate}}</span></div>\r\n                  <div class=\"col-lg-1\"><span>:</span></div>\r\n                  <div class=\"col-lg-7\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"polygon_zone_name\" id=\"polygon_zone_name\" name=\"polygon_zone_name\" required placeholder=\"Eg. A\">\r\n                    <div class=\"alert\" *ngIf=\"!polygonForm.controls['polygon_zone_name'].valid && polygonForm.controls['polygon_zone_name'].touched\">This is required</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row form-group\">\r\n                  <div class=\"col-lg-4\"><span>{{\"ZoneLevel\"|translate}}</span></div>\r\n                  <div class=\"col-lg-1\"><span>:</span></div>\r\n                  <div class=\"col-lg-7\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"polygon_zone_level\" id=\"polygon_zone_level\" name=\"polygon_zone_level\" required placeholder=\"G\">\r\n                    <div class=\"alert\" *ngIf=\"!polygonForm.controls['polygon_zone_level'].valid && polygonForm.controls['polygon_zone_level'].touched\">This is required</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-group\">\r\n                <div class=\"col-lg-4\"></div>\r\n                <div class=\"col-lg-4\">\r\n                  <button type=\"submit\" \r\n                    class=\"btn btn-success btn-block\" \r\n                    [disabled]=\"(!(polygonForm.controls['polygon_type'].valid && polygonForm.controls['polygon_project_id'].valid)) ||\r\n                    (!(((polygon_type_valid === 'Zoning' || polygon_type_valid === '分区') && polygonForm.controls['polygon_zone_name'].valid && polygonForm.controls['polygon_zone_level'].valid) || (polygon_type_valid === 'Geofencing' || polygon_type_valid === '地理围栏')))\"\r\n                    (click)=\"modalBox_valid()\"\r\n                  >\r\n                    {{\"Ok\"|translate}}\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-lg-4\"></div>\r\n                <!-- <span><button type=\"submit\" style=\"width:25%;\" class=\"btn btn-block btn-success\" (click)=\"modalBox_cancel()\">Cancel</button></span> -->\r\n              </div>\r\n            </form>\r\n            <div class=\"modal-footer\" style=\"padding-top:30px\"></div>\r\n          </div>\r\n        </div>\r\n        <!-- END OF MODAL BOX -->\r\n        <!-- Map -->\r\n        <div  style=\"height: 90%; width: 100%; overflow:hidden; z-index:0; display:block\"\r\n          leaflet \r\n          [leafletOptions]=\"options\" \r\n          [leafletLayersControl]=\"layersControl\"\r\n          (leafletMapReady)=\"onMapReady($event)\"\r\n          >\r\n        </div>\r\n      <!-- END OF MAP -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/map/map.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#map {\n  height: 500px; }\n\n.outerline {\n  border-style: solid; }\n\n#pac-input {\n  background-color: #fff;\n  font-family: Roboto;\n  font-size: 15px;\n  font-weight: 300;\n  margin-left: 12px;\n  padding: 0 11px 0 13px;\n  text-overflow: ellipsis;\n  width: 400px; }\n\n#pac-input:focus {\n  border-color: #4d90fe; }\n\n/* The Modal (background) */\n.modal {\n  display: none;\n  /* Hidden by default */\n  position: absolute;\n  /* Stay in place */\n  z-index: 5;\n  /* Sit on top */\n  padding-top: 100px;\n  /* Location of the box */\n  /*left: 0;*/\n  /*top: 0;*/\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: hidden;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */ }\n\n/* Modal Content */\n.modal-content {\n  position: relative;\n  background-color: #fefefe;\n  margin: auto;\n  padding: 0;\n  border: 1px solid #888;\n  width: 50%;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  -webkit-animation-name: animatetop;\n  -webkit-animation-duration: 0.4s;\n  animation-name: animatetop;\n  animation-duration: 0.4s; }\n\n.alert {\n  background: #f2edda;\n  padding: 7px;\n  font-size: .9em;\n  margin-bottom: 20px;\n  display: inline-block;\n  -webkit-animation: 0.5s alertAnim forwards;\n          animation: 0.5s alertAnim forwards; }\n\n@-webkit-keyframes alertAnim {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n@keyframes alertAnim {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n/* Add Animation */\n@-webkit-keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\n@keyframes animatetop {\n  from {\n    top: -300px;\n    opacity: 0; }\n  to {\n    top: 0;\n    opacity: 1; } }\n\n/* The Close Button */\n.close {\n  color: white;\n  float: right;\n  font-size: 28px;\n  font-weight: bold; }\n\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer; }\n\n.modal-header {\n  padding: 2px 16px;\n  background-color: #5cb85c;\n  color: white; }\n\n.modal-body {\n  padding: 2px 16px; }\n\n.modal-footer {\n  padding: 2px 16px;\n  background-color: #5cb85c;\n  color: white; }\n\n.legend {\n  line-height: 18px;\n  color: #555; }\n  .legend i {\n    width: 18px;\n    height: 18px;\n    float: left;\n    margin-right: 8px;\n    opacity: 0.7; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/map/map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MapComponent = (function () {
    // tiandituCountry=["CN"];
    function MapComponent(callApi, _route, fb, translate) {
        this.callApi = callApi;
        this._route = _route;
        this.fb = fb;
        this.translate = translate;
        this.collapsibleNeeded = true;
        this.interval = 3000;
        this.editableLayers = new __WEBPACK_IMPORTED_MODULE_5_leaflet__["FeatureGroup"]();
        this.zoneLayers = new __WEBPACK_IMPORTED_MODULE_5_leaflet__["FeatureGroup"]();
        this.projectLayers = new __WEBPACK_IMPORTED_MODULE_5_leaflet__["FeatureGroup"]();
        this.workerLayers = new __WEBPACK_IMPORTED_MODULE_5_leaflet__["FeatureGroup"]();
        this.workerLocationLayers = new __WEBPACK_IMPORTED_MODULE_5_leaflet__["FeatureGroup"]();
        this.initZoom = 8;
        this.initLatlng = [2.893666551820528, 102.77709960937501];
        this.markerOptions = {
            icon: __WEBPACK_IMPORTED_MODULE_5_leaflet__["icon"]({
                iconSize: [25, 41],
                iconAnchor: [13, 41],
                iconUrl: '/assets/map/marker-icon.png',
                shadowUrl: '/assets/map/marker-shadow.png'
            })
        };
        this.polylineOptions = false;
        this.circleOptions = false;
        this.circleMarkerOptions = false;
        this.rectangleOptions = false;
        this.polygonOptions = {
            color: 'blue'
        };
        this.geofenceOptions = {
            color: 'red'
        };
        this.zoneOptions = {
            color: 'yellow'
        };
        this.worker = [];
        /* END */
        /* Polygon Creation Options */
        //refer to leafletjs.com/reference-1.2.0.html for other options
        this.drawOptions = {
            position: 'topright',
            draw: {
                marker: false,
                polyline: this.polylineOptions,
                circle: this.circleOptions,
                circlemarker: this.circleMarkerOptions,
                rectangle: this.rectangleOptions,
                polygon: {
                    allowIntersection: false,
                    drawError: {
                        color: 'black',
                        message: '<strong> Cannot intersect </strong>'
                    },
                    shapeOptions: this.polygonOptions
                }
            },
            edit: {}
        };
        this.drawOptions_edit = {
            featureGroup: this.editableLayers,
            edit: {
                selectedPathOptions: {}
            },
        };
        this.polygonFormValid = false;
        this.polygonValue = {
            polygon_project_id: "",
            polygon_type: "",
            valid: ""
        };
        //END
        this.searchbox_Settings = {};
        /* Map layers */
        this.map_OpenStreetMap = __WEBPACK_IMPORTED_MODULE_5_leaflet__["tileLayer"]('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 });
        this.map_GoogleCNNormalMap = __WEBPACK_IMPORTED_MODULE_5_leaflet__["tileLayer"]('http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}', { maxZoom: 18 });
        this.map_GoogleCNSatelliteMap = __WEBPACK_IMPORTED_MODULE_5_leaflet__["tileLayer"]('http://www.google.cn/maps/vt?lyrs=s,h@189&gl=cn&x={x}&y={y}&z={z}', { maxZoom: 18 });
        this.map_TianDiTuNormal = __WEBPACK_IMPORTED_MODULE_5_leaflet__["layerGroup"]([
            __WEBPACK_IMPORTED_MODULE_5_leaflet__["tileLayer"]('http://t{s}.tianditu.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}', { maxZoom: 18, subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'] }),
            __WEBPACK_IMPORTED_MODULE_5_leaflet__["tileLayer"]('http://t{s}.tianditu.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}', { maxZoom: 18, subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'] })
        ]);
        this.map_TianDiTuSatellite = __WEBPACK_IMPORTED_MODULE_5_leaflet__["layerGroup"]([
            __WEBPACK_IMPORTED_MODULE_5_leaflet__["tileLayer"]('http://t{s}.tianditu.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}', { maxZoom: 18, subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'] }),
            __WEBPACK_IMPORTED_MODULE_5_leaflet__["tileLayer"]('http://t{s}.tianditu.cn/DataServer?T=cia_w&X={x}&Y={y}&L={z}', { maxZoom: 18, subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'] })
        ]);
        /* Initial settings */
        this.options = {
            layers: [
                this.map_OpenStreetMap
                // L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18} )
            ],
            zoom: this.initZoom,
        };
        /* Being able to change to view different layers */
        this.layersControl = {
            baseLayers: {
                'Open Street Map': this.map_OpenStreetMap,
                'Google Normal': this.map_GoogleCNNormalMap,
                'Google Satelite': this.map_GoogleCNSatelliteMap,
                'TianDiTu Normal': this.map_TianDiTuNormal,
                'TianDiTu Satellite': this.map_TianDiTuSatellite
            },
            overlays: {
                'Projects': this.projectLayers,
                // 'Workers': this.workerLayers,
                'Geofence': this.editableLayers,
                'Zone': this.zoneLayers
            }
        };
    }
    MapComponent.prototype.ngOnChanges = function () {
        if (this.height !== null && typeof this.height !== 'undefined') {
            document.getElementById('height').style.height = this.height;
        }
    };
    MapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.polygonForm = this.fb.group({
            polygon_project_id: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__shared_services__["d" /* CustomValidators */].validateSelect]],
            polygon_type: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3__shared_services__["d" /* CustomValidators */].validateSelect]],
            polygon_zone_name: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            polygon_zone_level: ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]]
        });
        this.project_id = this._route.snapshot.paramMap.get('id');
        this.getDataFromAPI(this.callApi, this.project_id).subscribe(function (data) {
            _this.loadFromStorage(data);
            _this.modalBox_init(data);
            if (_this.projectLayers.getLayers().length > 0) {
                _this.map.fitBounds(_this.projectLayers.getBounds()); //automatically fit all project in view
            }
            else {
                _this.map.setView(_this.initLatlng, _this.initZoom);
            }
        });
        this.intervalHook = setInterval(function () {
            _this.getDataFromAPI(_this.callApi, _this.project_id).subscribe(function (data) {
                // this.clearMap();
                _this.loadFromStorage_worker(data);
            });
        }, this.interval);
        // this.callApi.getData(ApiCmd.getApiCallerInfo)
        //     .subscribe((data)=>{
        //         console.log("country: "+data.country);
        //         let tiantitu:boolean=this.checkCountry(this.tiandituCountry,data.country);
        //         console.log("tiantitu mou? "+ tiantitu);
        //         if(!tiantitu){
        //             this.options.layers = this.map_OpenStreetMap;
        //         }
        //         console.log("map option: ");
        //         console.log(this.options);
        // });
    };
    // checkCountry(tiantiduCountry:Array<String>,country:string):boolean{
    //     if(tiantiduCountry.includes(country))
    //       return true;
    //     else
    //       return false;
    // }
    MapComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.intervalHook);
    };
    MapComponent.prototype.modalBox_init = function (project) {
        // Get the modal
        var modal = document.getElementById('myModal');
        var polygon_project_id = document.getElementById('polygon_project_id');
        var polygon_type = document.getElementById('polygon_type');
        for (var pointer in project) {
            var optionnode = document.createElement("OPTION");
            var text = document.createTextNode(project[pointer].p_id + ' - ' + project[pointer].p_data.p_name);
            optionnode.appendChild(text);
            polygon_project_id.appendChild(optionnode);
        }
    };
    MapComponent.prototype.modalBox_submit = function (value) {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
        value.valid = this.polygonFormValid;
        this.polygonValue = value;
    };
    MapComponent.prototype.modalBox_valid = function () {
        this.polygonFormValid = true;
    };
    MapComponent.prototype.modalBox_cancel = function () {
        this.polygonFormValid = false;
    };
    MapComponent.prototype.searchbox_AutoCompleteCallback = function (selectedData) {
        if (selectedData.response) {
            var latlng = selectedData.data.geometry.location;
            this.map.setView(latlng);
            if (this.editableLayers.hasLayer(this.layer)) {
                this.editableLayers.removeLayer(this.layer);
            }
            this.layer = __WEBPACK_IMPORTED_MODULE_5_leaflet__["circleMarker"](latlng);
            this.editableLayers.addLayer(this.layer);
        }
    };
    ;
    /* Add new stuff */
    MapComponent.prototype.newMarker = function (latlng, options, popup) {
        var marker = __WEBPACK_IMPORTED_MODULE_5_leaflet__["marker"](latlng, options);
        if (popup != null) {
            marker.bindPopup(new __WEBPACK_IMPORTED_MODULE_5_leaflet__["popup"]().setContent(popup));
        }
        return marker;
    };
    MapComponent.prototype.newCircleMarker = function (latlng, options, popup) {
        var circleMarker = __WEBPACK_IMPORTED_MODULE_5_leaflet__["circleMarker"](latlng, options);
        if (popup != null) {
            circleMarker.bindPopup(new __WEBPACK_IMPORTED_MODULE_5_leaflet__["popup"]().setContent(popup));
        }
        return circleMarker;
    };
    MapComponent.prototype.newCircle = function (latlng, options, popup) {
        var circle = __WEBPACK_IMPORTED_MODULE_5_leaflet__["circle"](latlng, options);
        if (popup != null) {
            circle.bindPopup(new __WEBPACK_IMPORTED_MODULE_5_leaflet__["popup"]().setContent(popup));
        }
        console.log(circle);
        return circle;
    };
    MapComponent.prototype.newPolygon = function (latlng, options, popup) {
        var polygon = __WEBPACK_IMPORTED_MODULE_5_leaflet__["polygon"](latlng, options);
        if (popup != null) {
            polygon.bindPopup(new __WEBPACK_IMPORTED_MODULE_5_leaflet__["popup"]().setContent(popup));
        }
        return polygon;
    };
    MapComponent.prototype.newPopup = function (newPopupDetails, id, name, status, photo, location, type, lastReceivedLocation, zone) {
        var elemName = ["ID", "Name", "Status", "Location", "LastReceivedLocation", "Zone"];
        var elemDetail = [id, name, status, location, lastReceivedLocation, zone];
        var popup = "";
        if (this != null) {
            var _loop_1 = function () {
                var detail = elemDetail[i];
                if (detail == "Not in zone") {
                    detail = this_1.translate.instant(detail);
                }
                this_1.translate.get(elemName[i]).subscribe(function (res) {
                    popup += newPopupDetails(res, detail);
                });
            };
            var this_1 = this;
            for (var i = 0; i < elemName.length; i++) {
                _loop_1();
            }
        }
        // let popup = 
        // newPopupDetails("ID", id)	+
        // newPopupDetails("Name", name)	+
        // newPopupDetails("Status", status)	+
        // newPopupDetails("Location", location)  +
        // newPopupDetails("Last Received Location", lastReceivedLocation);
        if (photo != null) {
            popup = "\n            <div class=\"row form-group\" style=\"width:300px\">\n                <div class=\"col-lg-6\">\n                    <img src=\"" + photo + "\" style=\"height:inherit;width:inherit\">\n                </div>\n                <div class=\"col-lg-6\">" +
                popup +
                "</div>\n            </div>\n            ";
        }
        else {
            popup = "\n            <div class=\"row form-group\" style=\"width:150px\">\n                <div class=\"col-lg-12\">" +
                popup +
                "</div>\n            </div>\n            ";
        }
        if (type != null) {
            this.translate.get("MoreDetails").subscribe(function (res) {
                console.log(res);
                popup += "\n                <div style=\"text-align:center\">\n                <button onClick=\"window.location='#/" + type + "/" + id + "'\" style=\" font-family: Roboto; background-color: #4682B4; color: #ffffff; padding: 5px; border: none;\">" + res + "</button>\n                </div>\n                ";
            });
        }
        return popup;
    };
    MapComponent.prototype.newPopupDetails = function (detailname, detail) {
        if (detail != null) {
            return "\n            <div>\n                <b>" + detailname + ": </b>\n                <p style=\"margin:0\">" + detail + "</p>\n            </div>\n            ";
        }
        return "";
    };
    /* END */
    /* Get from db */
    MapComponent.prototype.getDataFromAPI = function (callApi, keyName) {
        if (keyName == null) {
            return callApi.getData("" + __WEBPACK_IMPORTED_MODULE_3__shared_services__["a" /* ApiCmd */].map);
        }
        else {
            return callApi.getData(__WEBPACK_IMPORTED_MODULE_3__shared_services__["a" /* ApiCmd */].projectList + "/" + keyName);
        }
    };
    /* END */
    /* Aquiring stored location from db */
    MapComponent.prototype.loadFromStorage = function (data) {
        for (var pointer in data) {
            var project = data[pointer];
            this.setProject(project);
        }
    };
    MapComponent.prototype.setProject = function (project) {
        if (project === null)
            return;
        this.projectLayers.addLayer(this.newMarker({ lat: project.p_data.p_latitude, lng: project.p_data.p_longitude }, this.markerOptions, this.newPopup(this.newPopupDetails, project.p_id, project.p_data.p_name, null, project.p_data.p_photo, project.p_data.p_location, "projects", null, null)));
        for (var gpointer in project.geofence) {
            var geofence = project.geofence[gpointer];
            this.editableLayers.addLayer(this.newPolygon(geofence.geofence_latlng, this.polygonOptions, this.newPopup(this.newPopupDetails, project.p_id, null, null, null, null, null, null, null) + '<div style="display:none;">geofence_id:' + geofence.geofence_id + '</div>').setStyle(this.geofenceOptions));
        }
        for (var zpointer in project.zone) {
            var zone = project.zone[zpointer];
            this.editableLayers.addLayer(this.newPolygon(zone.zone_latlng, this.polygonOptions, this.newPopup(this.newPopupDetails, project.p_id, zone.zone_id, null, null, null, null, null, null)).setStyle(this.zoneOptions));
        }
        this.setWorker(project);
    };
    MapComponent.prototype.loadFromStorage_worker = function (data) {
        for (var pointer in data) {
            this.setWorker(data[pointer]);
        }
    };
    MapComponent.prototype.setWorker = function (project) {
        var _this = this;
        var zoomDifference = this.map.getZoom() - this.initZoom;
        var radius = 1.5625 * Math.pow(2, zoomDifference);
        var _loop_2 = function (wpointer) {
            var worker = project.worker[wpointer];
            if (worker.w_dev_data === false || worker.w_dev_data.length == 0) {
                return "continue";
            }
            var worker_latlng = { lat: worker.w_dev_data.latitude, lng: worker.w_dev_data.longitude };
            if (worker.w_id in this_2.worker) {
                var worker_ref = this_2.worker[worker.w_id];
                var worker_ref_latlng = worker_ref.marker.getLatLng();
                if (worker_ref_latlng.lat == worker_latlng.lat && worker_ref_latlng.lng == worker_latlng.lng) {
                    return "continue";
                }
                else {
                    this_2.workerLayers.removeLayer(worker_ref.marker);
                    if ('circle' in worker_ref) {
                        this_2.workerLocationLayers.removeLayer(worker_ref.circle);
                    }
                }
            }
            // editing
            console.log(worker);
            geocoder = new google.maps.Geocoder();
            var latlng = new google.maps.LatLng(worker.w_dev_data.latitude, worker.w_dev_data.longitude);
            // let latlng = new google.maps.LatLng(48.714224,-75.961452);
            var request = {
                latLng: latlng
            };
            geocoder.geocode(request, function (results, status) {
                var location;
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[0] != null) {
                        // console.log(results[0]);
                        location = results[0].formatted_address;
                        // let city = results[0].address_components[results[0]
                        //           .address_components.length-4].short_name;
                    }
                    else {
                        alert("No address available");
                    }
                }
                var workerPopup = _this.newPopup(_this.newPopupDetails, worker.w_id, worker.w_name_photo.w_name, worker.w_status.health_status, worker.w_name_photo.w_photo, location, "employee", worker.dev_time, worker.w_dev_data.zone);
                var workerMarker = _this.newCircleMarker(worker_latlng, null, workerPopup);
                _this.workerLayers.addLayer(workerMarker);
                var workerLocMarker = null;
                if (worker.w_latlng_valid === 'V' && (worker.w_dev_data.zone === 'Not in zone' || worker.w_dev_data.zone === '' || !('zone' in worker.w_dev_data))) {
                    workerLocMarker = _this.newCircleMarker(worker_latlng, null, workerPopup);
                    _this.workerLocationLayers.addLayer(workerLocMarker);
                }
                if (workerLocMarker !== null) {
                    _this.worker[worker.w_id] = { marker: workerMarker, circle: workerLocMarker };
                }
                else {
                    _this.worker[worker.w_id] = { marker: workerMarker };
                }
            });
        };
        var this_2 = this, geocoder;
        for (var wpointer in project.worker) {
            _loop_2(wpointer);
        }
        this.workerLocationLayers.setStyle({ radius: radius });
        this.workerLocationLayers.bringToBack();
        this.workerLayers.bringToFront();
    };
    MapComponent.prototype.clearMap = function () {
        this.zoneLayers.clearLayers();
        this.workerLayers.clearLayers();
        this.workerLocationLayers.clearLayers();
        this.editableLayers.clearLayers();
        this.projectLayers.clearLayers();
    };
    /* END */
    /* Post data to db */
    MapComponent.prototype.addToStorage = function (callApi, data) {
        var polygon = document.forms["polygonForm"];
        var value = {
            p_id: polygon["polygon_project_id"].value.split(" - ")[0],
            latlng: data,
        };
        var url;
        if (polygon["polygon_type"].value == "Geofence" || polygon["polygon_type"].value == "Geofencing") {
            url = "" + __WEBPACK_IMPORTED_MODULE_3__shared_services__["a" /* ApiCmd */].geofencing;
            // value['to'] = "geofence";
        }
        else {
            url = "" + __WEBPACK_IMPORTED_MODULE_3__shared_services__["a" /* ApiCmd */].zoning;
            value['zone_id'] = polygon["polygon_zone_name"].value;
            value['level'] = polygon["polygon_zone_level"].value;
            // value['to'] = "zone";
        }
        callApi.postData(url + "add", JSON.stringify(value)).subscribe(function (response) { console.log('response: ' + JSON.stringify(response)); });
        return __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__["Observable"].create(function (observer) { return observer.next(value); });
    };
    MapComponent.prototype.removeFromStorage = function (callApi, data, project, type) {
        var value = {
            p_id: project,
            data: data,
        };
        console.log(value);
        var url;
        if (type == "Geofence" || type == "Geofencing") {
            url = "" + __WEBPACK_IMPORTED_MODULE_3__shared_services__["a" /* ApiCmd */].geofencing;
        }
        else {
            url = "" + __WEBPACK_IMPORTED_MODULE_3__shared_services__["a" /* ApiCmd */].zoning;
        }
        callApi.postData(url + "remove", JSON.stringify(value)).subscribe(function (response) { console.log('response: ' + JSON.stringify(response)); });
    };
    /* END */
    /* All map functions */
    MapComponent.prototype.onMapReady = function (map) {
        var callApi = this.callApi;
        /* Removing clear all button */
        __WEBPACK_IMPORTED_MODULE_5_leaflet__["EditToolbar"].Delete.include({
            removeAllLayers: false
        });
        /* Display or hide the edit toolbar */
        if (this.project_id === null) {
            this.drawOptions.edit = false;
        }
        else {
            this.drawOptions.edit = this.drawOptions_edit;
        }
        /* Allow for drawing event */
        var drawControl = new __WEBPACK_IMPORTED_MODULE_5_leaflet__["Control"].Draw(this.drawOptions);
        map.addControl(drawControl);
        /* Starting display layer */
        var projectLayers = this.projectLayers;
        var editableLayers = this.editableLayers;
        var workerLayers = this.workerLayers;
        var workerLocationLayers = this.workerLocationLayers;
        var zoneLayers = this.zoneLayers;
        var translate = this.translate;
        map.addLayer(workerLayers);
        map.addLayer(workerLocationLayers);
        map.addLayer(projectLayers);
        map.addLayer(editableLayers); //comment out to not display them on initial
        map.addLayer(zoneLayers);
        /* Function from typescript */
        var addToDB = this.addToStorage;
        var removeFromDB = this.removeFromStorage;
        var newPopup = this.newPopup;
        var newPopupDetails = this.newPopupDetails;
        /* Variables */
        var geofenceOptions = this.geofenceOptions;
        var zoneOptions = this.zoneOptions;
        var legend = __WEBPACK_IMPORTED_MODULE_5_leaflet__["control"]({ position: 'bottomright' });
        /* Required functions to work */
        function compareLatLng(latlng1, latlng2) {
            if (latlng1.length == latlng2.length) {
                for (var index = 0; index < latlng1.length; index++) {
                    if (latlng1[index].lat != latlng2[index].lat || latlng1[index].lon != latlng2[index].lon) {
                        return false;
                    }
                }
                return true;
                ;
            }
            return false;
        }
        function updateLayer(data, layer) {
            if (data.to == "geofence" || data.to == "geofencing") {
                layer.bindPopup(new __WEBPACK_IMPORTED_MODULE_5_leaflet__["popup"]().setContent(newPopup(newPopupDetails, data.project_id, null, null, null, null, null, null, null)));
                layer.setStyle(geofenceOptions);
            }
            else {
                layer.bindPopup(new __WEBPACK_IMPORTED_MODULE_5_leaflet__["popup"]().setContent(newPopup(newPopupDetails, data.project_id, data.zone_id, null, null, null, null, null, null)));
                layer.setStyle(zoneOptions);
            }
            return layer;
        }
        function getColor(d) {
            return d == 'User' ? 'blue' :
                d == 'Geofence' ? 'red' :
                    d == 'Zone' ? 'yellow' : 'black';
        }
        var initZoom = this.initZoom;
        map.on('zoomend', function (e) {
            var zoomDifference = map.getZoom() - initZoom;
            var radius = 1.5625 * Math.pow(2, zoomDifference);
            workerLocationLayers.setStyle({ radius: radius });
        });
        map.on(__WEBPACK_IMPORTED_MODULE_5_leaflet__["Draw"].Event.DRAWSTART, function (e) {
            var modal = document.getElementById("myModal");
            modal.style.display = "block";
        });
        map.on(__WEBPACK_IMPORTED_MODULE_5_leaflet__["Draw"].Event.CREATED, function (e) {
            //adding stuff to stored array, probably change to save into database ?
            var type = e.layerType, layer = e.layer;
            var data = [];
            var latlng;
            switch (type) {
                case 'marker':
                    //binds popup to the layer
                    layer.bindPopup(new __WEBPACK_IMPORTED_MODULE_5_leaflet__["popup"]()
                        .setContent("                    //you can bind html codes here!\n                            <div>I'm a marker</div>\n                            <a href=\"https://www.google.com\">hi</a>  /* redirect to what ever */\n                            "))
                        .on(//you can bind events here!
                    'popupopen', //event type
                    function (e) {
                        console.log("pop up opened");
                        console.log(e.target);
                    });
                    latlng = { 0: layer.getLatLng() };
                    // drawStuff.push({latlng: {0: layer.getLatLng()}, type: 'marker'});
                    // console.log(drawStuff[drawStuff.length-1].latlng);  // <- this is the coordinates saved
                    break;
                case 'circle':
                case 'circlemarker':
                    latlng = { 0: layer.getLatLng() };
                    // drawStuff.push({latlng: {0: layer.getLatLng()}, radius: layer.getRadius(), type: 'circle'});
                    // console.log(drawStuff[drawStuff.length-1].latlng);  // <- this is the coordinates saved
                    // console.log(drawStuff[drawStuff.length-1].radius);  // <- this is the radius of the layer saved
                    break;
                case 'polygon':
                case 'rectangle':
                case 'polyline':
                    latlng = layer.getLatLngs()[0];
                    // drawStuff.push({latlng: layer.getLatLngs()[0], type: 'polygon'});
                    // console.log(drawStuff[drawStuff.length-1].latlng); // <- this is the coordinates saved
                    break;
            }
            // data.push({latlng: latlng});
            addToDB(callApi, JSON.stringify(latlng)).subscribe(function (data) {
                console.log(data);
                layer = updateLayer(data, layer);
                // handle same zone name
                editableLayers.addLayer(layer);
            });
        });
        map.on(__WEBPACK_IMPORTED_MODULE_5_leaflet__["Draw"].Event.EDITED, function (e) {
            // blah blah blah do edit stuff
            var layers = e.layers;
            layers.eachLayer(function (layer) {
                //do whatever you want; most likely save back to db
                console.log(layer._latlngs);
            });
            console.log(e);
        });
        legend.onAdd = function (map) {
            var div = __WEBPACK_IMPORTED_MODULE_5_leaflet__["DomUtil"].create('div', 'info legend'), legend = ['User', 'Geofence', 'Zone'], labels = [];
            legend.forEach(function (data) {
                labels.push(translate.instant(data));
            });
            console.log(labels);
            // loop through our density intervals and generate a label with a colored square for each interval
            for (var i = 0; i < legend.length; i++) {
                div.innerHTML +=
                    '<i style="background:' + getColor(legend[i]) + '">&nbsp;&nbsp;&nbsp;</i> ' +
                        labels[i] + '<br>';
            }
            return div;
        };
        map.on(__WEBPACK_IMPORTED_MODULE_5_leaflet__["Draw"].Event.DELETED, function (e) {
            //remove from stored array, probably change to remove from database ?
            var array = e.layers._layers;
            if (array.length < 1) {
                return;
            }
            var data_geo = [];
            var data_zone = [];
            var text;
            var project_id;
            for (var arrayPointer in array) {
                var removing = array[arrayPointer];
                var latlng = void 0;
                if ('_latlng' in removing) {
                    if ('_radius' in removing) {
                        console.log("removing a circle / circlemarker");
                    }
                    else {
                        console.log("removing a marker");
                    }
                    latlng = { 0: removing.getLatLng() };
                }
                else if ('_latlngs' in removing) {
                    if ('_poly' in removing.editing) {
                        console.log("removing a polygon/polyline");
                    }
                    else {
                        console.log("removing a rectangle");
                    }
                    latlng = removing.getLatLngs()[0];
                }
                text = removing._popup._contentNode.innerText.replace(/ +/g, "").trim();
                project_id = text.substring(text.indexOf("ID:") + 3).trim();
                var name_1 = void 0;
                if ((name_1 = project_id.indexOf("Name:")) >= 0) {
                    var zone_name = project_id.substring(name_1 + 5).trim();
                    project_id = project_id.substring(0, name_1).trim();
                    data_zone.push({ latlng: latlng, zone_id: zone_name });
                }
                else if ((name_1 = project_id.indexOf("geofence_id:")) >= 0) {
                    var geofence_id = project_id.substring(name_1 + 12).trim();
                    project_id = project_id.substring(0, name_1).trim();
                    data_geo.push({ latlng: latlng, geofence_id: geofence_id });
                }
            }
            if (data_geo.length > 0) {
                removeFromDB(callApi, JSON.stringify(data_geo), project_id, "Geofencing");
                console.log("removing geofence");
            }
            if (data_zone.length > 0) {
                setTimeout(function (e) {
                    removeFromDB(callApi, JSON.stringify(data_zone), project_id, "Zoning");
                    console.log("removing zone");
                }, 2000);
            }
        });
        this.map = map;
        legend.addTo(this.map);
    };
    MapComponent.prototype.focusOnMap = function (event) {
        var zoom = 15;
        console.log(event);
        var latlng = __WEBPACK_IMPORTED_MODULE_5_leaflet__["latLng"](event.lat, event.lng);
        if (latlng)
            this.map.setView(latlng, zoom);
        else
            alert("User location not found");
        this.showPopup(event.w_id, this.workerLayers);
    };
    //show Popup when click on a user
    MapComponent.prototype.showPopup = function (w_id, lyrs) {
        var layers = lyrs.getLayers();
        for (var _i = 0, layers_1 = layers; _i < layers_1.length; _i++) {
            var lyr = layers_1[_i];
            console.log(lyr);
            var text = lyr.getPopup().getContent().replace(/(<\/?[^<]*>)/g, "").trim();
            var worker_id = text.substring(text.indexOf("ID:") + 3).trim();
            var name_2 = void 0;
            if ((name_2 = worker_id.indexOf("Name:")) >= 0) {
                worker_id = worker_id.substring(0, name_2).trim();
            }
            if (worker_id.indexOf(w_id) > -1) {
                console.log("same");
                lyr.openPopup();
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], MapComponent.prototype, "height", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], MapComponent.prototype, "collapsibleNeeded", void 0);
    MapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-map',
            template: __webpack_require__("../../../../../src/app/component/map/map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/map/map.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services__["c" /* CallApiService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_6_ng2_translate__["b" /* TranslateService */]])
    ], MapComponent);
    return MapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/no-access/no-access.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <p class=\"alert alert-danger\">\r\n    {{\"NoAccess\"|translate}}\r\n  </p>\r\n  <a class=\"pointer\" (click)=\"backClicked()\">{{\"GoBack\"|translate}}</a>\r\n  <a class=\"pointer\" (click)=\"logout()\">{{\"Logout\"|translate}}</a>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/no-access/no-access.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".pointer {\n  cursor: pointer;\n  color: blue;\n  text-decoration: underline; }\n  .pointer:hover {\n    text-decoration: none;\n    text-shadow: 1px 1px 1px #555; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/no-access/no-access.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NoAccessComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NoAccessComponent = (function () {
    function NoAccessComponent(_location, authService) {
        this._location = _location;
        this.authService = authService;
    }
    NoAccessComponent.prototype.ngOnInit = function () {
    };
    NoAccessComponent.prototype.backClicked = function () {
        this._location.back();
    };
    NoAccessComponent.prototype.logout = function () {
        this.authService.logout();
    };
    NoAccessComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-no-access',
            template: __webpack_require__("../../../../../src/app/component/no-access/no-access.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/no-access/no-access.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* AuthService */]])
    ], NoAccessComponent);
    return NoAccessComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/projects/add-project/add-project.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1>{{\"AddNewProject\"|translate}}</h1>\r\n  <hr/>\r\n  <form (ngSubmit)=\"onSubmit(projectForm.value)\" [formGroup]=\"projectForm\" novalidate>\r\n    <div>\r\n      <app-project-detail [group]=\"projectForm\" (file)=\"newFile($event)\"></app-project-detail>\r\n    </div>\r\n    <div>\r\n      <app-project-location [group]=\"projectForm\"></app-project-location>\r\n    </div>\r\n    <div>\r\n      <app-project-workers [group]=\"projectForm\"></app-project-workers>\r\n    </div>\r\n    <div class=\"padding-top row\">\r\n      <div class=\"col-lg-2 offset-lg-10\">\r\n        <button type=\"submit\" class=\"btn btn-block btn-success\" [disabled]=\"!projectForm.valid\">{{\"Add\"|translate}}</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/projects/add-project/add-project.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".padding-top {\n  padding-top: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/projects/add-project/add-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddProjectComponent = (function () {
    function AddProjectComponent(fb, reloadService, callApi) {
        this.fb = fb;
        this.reloadService = reloadService;
        this.callApi = callApi;
        this.formSubmitSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AddProjectComponent.prototype.ngOnInit = function () {
        this.projectForm = this.fb.group({
            projectId: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
            projectName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
            projectAdmin: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            projectStartDate: [new Date(), [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            projectLocation: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(80)]],
            projectLatLng: [''],
            projectSize: [''],
            projectStories: [''],
            // projectNumberOfWorkers:[''],
            projectWorkers: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormArray"]([])
        });
    };
    AddProjectComponent.prototype.newFile = function (event) {
        console.log(event);
        this.photo = event;
    };
    AddProjectComponent.prototype.onSubmit = function (value) {
        var _this = this;
        console.log(value);
        value['projectStartDate'] = (new Date(value['projectStartDate'])).toISOString();
        if (value['projectSize'] === '')
            value['projectSize'] = '0';
        if (value['projectStories'] === '')
            value['projectStories'] = '0';
        this.callApi.postWithFile(__WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].newProject, value, this.photo)
            .subscribe(function (response) {
            _this.formSubmitSuccess.emit(true);
            console.log(response);
            _this.reloadService.setReload();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AddProjectComponent.prototype, "formSubmitSuccess", void 0);
    AddProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-project',
            template: __webpack_require__("../../../../../src/app/component/projects/add-project/add-project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/projects/add-project/add-project.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* ApiReloadService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services__["c" /* CallApiService */]])
    ], AddProjectComponent);
    return AddProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/projects/add-project/project-detail/project-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"group\">\r\n<div class=\"padding-top row\">\r\n  <div class=\"col-lg-4 \">\r\n    <p>{{\"ProjectID\"|translate}}</p>\r\n  </div>\r\n  <div class=\"col-lg-1\">\r\n    <p>:</p>\r\n  </div>\r\n  <div class=\"col-lg-7\">\r\n    <input class=\"form-control\" formControlName=\"projectId\" type=\"text\" placeholder=\"PJ0099\" />\r\n    <div class=\"warn\" *ngIf=\"!group.controls['projectId'].valid&&group.controls['projectId'].touched\">Please enter group id in less than 50 character</div>\r\n  </div>\r\n</div>\r\n<div class=\"padding-top row\">\r\n  <div class=\"col-lg-4 \">\r\n    <p>{{\"ProjectName\"|translate}}</p>\r\n  </div>\r\n  <div class=\"col-lg-1\">\r\n    <p>:</p>\r\n  </div>\r\n  <div class=\"col-lg-7\">\r\n    <input class=\"form-control\" formControlName=\"projectName\" type=\"text\" placeholder=\"Project99\" />\r\n    <div class=\"warn\" *ngIf=\"!group.controls['projectName'].valid&&group.controls['projectName'].touched\">Please enter group name in less than 50 character</div>\r\n  </div>\r\n</div>\r\n<div class=\"padding-top row\">\r\n  <div class=\"col-lg-4 \">\r\n    <p>{{\"ProjectPhoto\"|translate}}</p>\r\n  </div>\r\n  <div class=\"col-lg-1\">\r\n    <p>:</p>\r\n  </div>\r\n  <div class=\"col-lg-5\">\r\n    <input class=\"form-control\" type=\"file\" (change)=\"fileUpload($event)\" accept=\"image/*\" #fileInput />\r\n  </div>\r\n  <div class=\"col-lg-2\">\r\n    <img *ngIf=\"preview else nofile\" [src]=\"preview\" height=\"40px\" alt=\"image preview\"/>\r\n    <ng-template #nofile>\r\n      <p>{{\"NoPreview\"|translate}}</p>\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n<div class=\"padding-top row\">\r\n  <div class=\"col-lg-4 \">\r\n    <p>{{\"ProjectManager\"|translate}}</p>\r\n  </div>\r\n  <div class=\"col-lg-1\">\r\n    <p>:</p>\r\n  </div>\r\n  <div class=\"col-lg-7\">\r\n    <ng-select [allowClear]=\"true\"\r\n              [items]=\"items\"\r\n              (selected)=\"selected($event)\" *ngIf=\"items[0]!=null\"\r\n              [placeholder]=\"'NoAdminSelected'|translate\">\r\n    </ng-select>\r\n    <div class=\"warn\" *ngIf=\"!group.controls['projectAdmin'].valid&&group.controls['projectAdmin'].touched\">This is required</div>\r\n  </div>\r\n</div>\r\n<div class=\"padding-top row\">\r\n  <div class=\"col-lg-4 \">\r\n    <p>{{\"StartDate\"|translate}}</p>\r\n  </div>\r\n  <div class=\"col-lg-1\">\r\n    <p>:</p>\r\n  </div>\r\n  <div class=\"col-lg-7\">\r\n    <input type=\"text\"\r\n           class=\"form-control\"\r\n           id = \"startDate\"\r\n           #dp=\"bsDatepicker\"\r\n           [bsConfig]=\"bsConfig\"\r\n           bsDatepicker [(bsValue)]=\"bsValue\"\r\n           formControlName=\"projectStartDate\">\r\n     <div class=\"warn\" *ngIf=\"!group.controls['projectStartDate'].valid&&group.controls['projectStartDate'].touched\">Please Select a valid date</div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/component/projects/add-project/project-detail/project-detail.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".padding-top {\n  padding-top: 5px; }\n\n.warn {\n  background: #f2edda;\n  padding: 7px;\n  font-size: .9em;\n  margin-bottom: 20px;\n  display: inline-block;\n  -webkit-animation: 0.5s alertAnim forwards;\n          animation: 0.5s alertAnim forwards; }\n\n@-webkit-keyframes alertAnim {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n@keyframes alertAnim {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n.ui-select-choices.dropdown-menu {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/projects/add-project/project-detail/project-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectDetailComponent = (function () {
    function ProjectDetailComponent(callApi) {
        this.callApi = callApi;
        this.file = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.items = [];
        //datepicker config
        this.bsConfig = { containerClass: "theme-default", /*locale: "en-gb",*/ showWeekNumbers: false, dateInputFormat: 'YYYY/MM/DD ' };
        this.value = {};
        this.getManagerList(__WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].managerList);
    }
    ProjectDetailComponent.prototype.ngOnInit = function () {
    };
    ProjectDetailComponent.prototype.fileUpload = function (event) {
        var _this = this;
        //preview
        if (event.target.files && event.target.files[0] && this.isImage(event)) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = function (event) {
                _this.preview = event.target.result;
            };
            this.photo = event.srcElement.files;
            this.file.emit(this.photo);
        }
        else {
            alert("Please upload image only");
            this.fileInput.nativeElement.value = "";
            this.preview = null;
        }
    };
    ProjectDetailComponent.prototype.isImage = function (event) {
        var file = event.target.files[0];
        var fileType = file["type"];
        fileType = fileType.split("/");
        if (fileType[0] == "image") {
            return true;
        }
        return false;
    };
    ProjectDetailComponent.prototype.getManagerList = function (url) {
        var _this = this;
        this.callApi.getData(url)
            .subscribe(function (data) {
            _this.manager = data;
            // console.log(manager);
            _this.assignToDropdown();
        });
    };
    //test
    //assign to items variable accroding to ng2-select
    ProjectDetailComponent.prototype.assignToDropdown = function () {
        var _this = this;
        this.manager.forEach(function (admin) {
            _this.items.push({
                id: admin.u_id,
                text: admin.u_name
            });
        });
    };
    ProjectDetailComponent.prototype.selected = function (value) {
        this.group.controls["projectAdmin"].patchValue(value.id);
        console.log('Selected value is: ', value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], ProjectDetailComponent.prototype, "fileInput", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
    ], ProjectDetailComponent.prototype, "group", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ProjectDetailComponent.prototype, "file", void 0);
    ProjectDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-detail',
            template: __webpack_require__("../../../../../src/app/component/projects/add-project/project-detail/project-detail.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../../src/app/component/projects/add-project/project-detail/project-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services__["c" /* CallApiService */]])
    ], ProjectDetailComponent);
    return ProjectDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/projects/add-project/project-location/project-location.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"group\">\r\n  <div style=\"display:none\">\r\n    <input formControlName=\"projectLatLng\" class=\"form-control\" type=\"text\" placeholder=\"{'lat':0.0, 'lng':0.0}\">\r\n  </div>\r\n  <div class=\"padding-top row\">\r\n    <div class=\"col-lg-4 \">\r\n      <p>{{\"ProjectLocation\"|translate}}:</p>\r\n    </div>\r\n    <div class=\"col-lg-1\">\r\n      <p>:</p>\r\n    </div>\r\n    <div class=\"col-lg-7\">\r\n      <input formControlName=\"projectLocation\" class=\"form-control\" type=\"text\" placeholder=\"Enter location\" style=\"display:none\"/>\r\n      <div class=\"warn\" *ngIf=\"!group.controls['projectLocation'].valid&&group.controls['projectLocation'].touched\">Please enter group location in less than 80 character</div>\r\n    </div>\r\n    <div style=\"width:100%; padding-left:5%; padding-right: 5%;\">\r\n      <div style=\"\">\r\n          <ng4geo-autocomplete id=\"searchbox\"\r\n          [userSettings]=\"searchbox_Settings\"\r\n          (componentCallback)=\"searchbox_AutoCompleteCallback($event)\"\r\n          ></ng4geo-autocomplete>\r\n      </div>\r\n      <div  style=\"height: 300px;width:100%;overflow:hidden; z-index:5\"\r\n        leaflet \r\n        [leafletOptions]=\"options\" \r\n        [leafletLayersControl]=\"layersControl\"\r\n        (leafletMapReady)=\"onMapReady($event)\"\r\n        >\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"padding-top row\">\r\n    <div class=\"col-lg-4 \">\r\n      <p>{{\"Size\"|translate}} (ft²):</p>\r\n    </div>\r\n    <div class=\"col-lg-1\">\r\n      <p>:</p>\r\n    </div>\r\n    <div class=\"col-lg-7\">\r\n      <input class=\"form-control\" formControlName=\"projectSize\" type=\"text\" placeholder=\"\" default/>\r\n      <!-- <div class=\"warn\" *ngIf=\"!group.controls['projectSize'].valid&&group.controls['projectSize'].touched\">This is required</div> -->\r\n    </div>\r\n  </div>\r\n  <div class=\"padding-top row\">\r\n    <div class=\"col-lg-4 \">\r\n      <p>{{\"NumberOfFloor\"|translate}}:</p>\r\n    </div>\r\n    <div class=\"col-lg-1\">\r\n      <p>:</p>\r\n    </div>\r\n    <div class=\"col-lg-7\">\r\n      <input class=\"form-control\" formControlName=\"projectStories\" type=\"text\" placeholder=\"\" />\r\n      <!-- <div class=\"warn\" *ngIf=\"!group.controls['projectStories'].valid&&group.controls['projectStories'].touched\">This is required</div> -->\r\n    </div>\r\n  </div>\r\n<!--   <div class=\"col-lg-7 offset-lg-1\">\r\n    <div id=\"map\" class=\"outerline\">\r\n    </div>\r\n  </div> -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/projects/add-project/project-location/project-location.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".outerline {\n  border-style: solid; }\n\n.padding-top {\n  padding-top: 5px; }\n\n.warn {\n  background: #f2edda;\n  padding: 7px;\n  font-size: .9em;\n  margin-bottom: 20px;\n  display: inline-block;\n  -webkit-animation: 0.5s alertAnim forwards;\n          animation: 0.5s alertAnim forwards; }\n\n@-webkit-keyframes alertAnim {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n@keyframes alertAnim {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/projects/add-project/project-location/project-location.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectLocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







// declare var google: any;
var ProjectLocationComponent = (function () {
    function ProjectLocationComponent(http, CallApi) {
        this.http = http;
        this.CallApi = CallApi;
        this.editableLayers = new __WEBPACK_IMPORTED_MODULE_2_leaflet__["FeatureGroup"]();
        this.map_OpenStreetMap = __WEBPACK_IMPORTED_MODULE_2_leaflet__["tileLayer"]('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 });
        this.map_GoogleCNNormalMap = __WEBPACK_IMPORTED_MODULE_2_leaflet__["tileLayer"]('http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}', { maxZoom: 18 });
        this.map_GoogleCNSatelliteMap = __WEBPACK_IMPORTED_MODULE_2_leaflet__["tileLayer"]('http://www.google.cn/maps/vt?lyrs=s,h@189&gl=cn&x={x}&y={y}&z={z}', { maxZoom: 18 });
        this.map_TianDiTuNormal = __WEBPACK_IMPORTED_MODULE_2_leaflet__["layerGroup"]([
            __WEBPACK_IMPORTED_MODULE_2_leaflet__["tileLayer"]('http://t{s}.tianditu.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}', { maxZoom: 18, subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'] }),
            __WEBPACK_IMPORTED_MODULE_2_leaflet__["tileLayer"]('http://t{s}.tianditu.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}', { maxZoom: 18, subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'] })
        ]);
        this.map_TianDiTuSatellite = __WEBPACK_IMPORTED_MODULE_2_leaflet__["layerGroup"]([
            __WEBPACK_IMPORTED_MODULE_2_leaflet__["tileLayer"]('http://t{s}.tianditu.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}', { maxZoom: 18, subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'] }),
            __WEBPACK_IMPORTED_MODULE_2_leaflet__["tileLayer"]('http://t{s}.tianditu.cn/DataServer?T=cia_w&X={x}&Y={y}&L={z}', { maxZoom: 18, subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'] })
        ]);
        this.options = {
            layers: [
                this.map_OpenStreetMap
            ],
            zoom: 13,
            center: __WEBPACK_IMPORTED_MODULE_2_leaflet__["latLng"](3.05, 101.62)
        };
        this.layersControl = {
            baseLayers: {
                'Open Street Map': this.map_OpenStreetMap,
                'Google Normal': this.map_GoogleCNNormalMap,
                'Google Satelite': this.map_GoogleCNSatelliteMap,
                'TianDiTu Normal': this.map_TianDiTuNormal,
                'TianDiTu Satellite': this.map_TianDiTuSatellite
            }
        };
        this.markerOptions = {
            icon: __WEBPACK_IMPORTED_MODULE_2_leaflet__["icon"]({
                iconSize: [25, 41],
                iconAnchor: [13, 41],
                iconUrl: 'assets/marker-icon.png',
                shadowUrl: 'assets/marker-shadow.png'
            })
        };
        this.searchbox_Settings = {};
    }
    // map:any;
    // searchBox:any;
    ProjectLocationComponent.prototype.ngOnInit = function () {
        // this.map = new google.maps.Map(document.getElementById('map'), {
        //           center: { lat: 3.20, lng: 101.70 },
        //           zoom: 8
        //       });
        // google.maps.event.addDomListener(window, 'load', this.initAutocomplete());
    };
    ProjectLocationComponent.prototype.searchbox_AutoCompleteCallback = function (selectedData) {
        console.log(selectedData);
        if (selectedData.response) {
            this.group.controls["projectLocation"].patchValue(selectedData.data.formatted_address);
            var latlng = selectedData.data.geometry.location; //the latlng <- but idk where u wanna get it larr
            this.group.controls["projectLatLng"].patchValue(JSON.stringify(latlng));
            var map = this.map;
            map.setView(latlng);
            map.eachLayer(function (layer) {
                if ('_level' in layer)
                    return;
                map.removeLayer(layer);
            });
            this.layer = __WEBPACK_IMPORTED_MODULE_2_leaflet__["marker"](latlng, this.markerOptions);
            map.addLayer(this.layer);
            this.map = map;
        }
    };
    ;
    ProjectLocationComponent.prototype.onMapReady = function (map) {
        this.map = map;
        var layer = this.layer;
        var markerOptions = this.markerOptions;
        var searchbox = (document.getElementById('searchbox'));
        var http = this.http;
        var group = this.group;
        var CallApi = this.CallApi;
        this.map.on('click', function (e) {
            console.log(e.latlng); // getting the lat lng from mouse
            var updateSearchbox = searchbox.firstElementChild.firstElementChild.firstElementChild.firstElementChild;
            group.controls["projectLatLng"].patchValue(JSON.stringify(e.latlng));
            CallApi.getLocationByLatLng(http, e.latlng, group).subscribe(function (data) {
                // console.log(data);
                group.controls["projectLocation"].patchValue(data);
                updateSearchbox.value = data;
            });
            map.setView(e.latlng);
            map.eachLayer(function (layer) {
                if ('_level' in layer)
                    return;
                map.removeLayer(layer);
            });
            layer = __WEBPACK_IMPORTED_MODULE_2_leaflet__["marker"](e.latlng, markerOptions);
            map.addLayer(layer);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
    ], ProjectLocationComponent.prototype, "group", void 0);
    ProjectLocationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-location',
            template: __webpack_require__("../../../../../src/app/component/projects/add-project/project-location/project-location.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/projects/add-project/project-location/project-location.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_4__shared_services__["c" /* CallApiService */]])
    ], ProjectLocationComponent);
    return ProjectLocationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/projects/add-project/project-workers/project-workers.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"group\">\r\n<!-- <div class=\"row padding-top\">\r\n  <div class=\"col-lg-4\">\r\n    <p>{{\"Ok\"|translate}}Number of workers:</p>\r\n  </div>\r\n  <div class=\"col-lg-1\">\r\n    <p>:</p>\r\n  </div>\r\n  <div class=\"col-lg-7\">\r\n    <input class=\"form-control\" formControlName=\"projectNumberOfWorkers\" type=\"text\" /> -->\r\n    <!-- <div class=\"alert\" *ngIf=\"!group.controls['projectNumberOfWorkers'].valid&&group.controls['projectNumberOfWorkers'].touched\">This is required</div> -->\r\n  <!-- </div>\r\n</div> -->\r\n</div>\r\n<div class=\"row padding-top\">\r\n  <div class=\"col-lg-4\">\r\n    <p>{{\"EmployeesToAssign\"|translate}}</p>\r\n  </div>\r\n  <div class=\"col-lg-1\">\r\n    <p>:</p>\r\n  </div>\r\n  <div class=\"col-lg-7\">\r\n    <div class=\"dropdown-list\" *ngIf=\"employees\">\r\n      <div class=\"form-group\">\r\n        <label>{{\"FilterByWorkersName\"|translate}}:</label>\r\n        <input type=\"text\" class=\"form-control\" [ngClass]=\"{search:!filterQuery}\" [(ngModel)]=\"filterQuery\" [placeholder]=\"'Search'|translate\">\r\n      </div>\r\n      <ul *ngFor=\"let employee of employees |dataFilter:filterQuery:'projectEmployeesName'\">\r\n        <li>\r\n          <!-- <div [formGroup]=\"group\"> -->\r\n          <label class=\"custom-control custom-checkbox\">\r\n            <input type=\"checkbox\" class=\"custom-control-input\" [value]=\"employee.w_id\" [checked]=\"selectedEmployees.indexOf(employee.w_id) > -1\" (change)=\"toggleEmployeeSelection(employee.w_id)\" required />\r\n            <span class=\"custom-control-indicator\"></span>\r\n            <span class=\"custom-control-description\">{{employee.w_id}} - {{employee.w_name_photo.w_name}}</span>\r\n          </label>\r\n        <!-- </div> -->\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/component/projects/add-project/project-workers/project-workers.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown-list {\n  float: left;\n  width: 100%;\n  border: 3px solid black;\n  padding: 10px 12px;\n  height: 300px;\n  overflow-y: scroll; }\n  .dropdown-list input[type=\"search\"] {\n    padding: 5px 0; }\n  .dropdown-list ul {\n    margin: 0;\n    max-height: 200px;\n    overflow-y: auto;\n    list-style-type: none; }\n    .dropdown-list ul input[type=\"checkbox\"] {\n      position: relative;\n      top: 2px;\n      right: 10px; }\n\n.padding-top {\n  padding-top: 5px; }\n\n.warn {\n  background: #f2edda;\n  padding: 7px;\n  font-size: .9em;\n  margin-bottom: 20px;\n  display: inline-block;\n  -webkit-animation: 0.5s alertAnim forwards;\n          animation: 0.5s alertAnim forwards; }\n\n@-webkit-keyframes alertAnim {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n@keyframes alertAnim {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/projects/add-project/project-workers/project-workers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectWorkersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectWorkersComponent = (function () {
    function ProjectWorkersComponent(callApi) {
        this.callApi = callApi;
        this.selectedEmployees = [];
        this.getWorkerList(__WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].workerList);
    }
    ProjectWorkersComponent.prototype.ngOnInit = function () {
        // this.employees=[{w_id:"w1033",w_name:"john legent"},{w_id:"w103",w_name:"john smith"},{w_id:"w93",w_name:"Hello"}]
        console.log(this.employees);
    };
    ProjectWorkersComponent.prototype.toggleEmployeeSelection = function (employee) {
        var formArray = this.group.get('projectWorkers');
        var idx = this.selectedEmployees.indexOf(employee);
        // Is currently selected
        if (idx > -1) {
            this.selectedEmployees.splice(idx, 1);
            // find the unselected element
            var i_1 = 0;
            formArray.controls.forEach(function (ctrl) {
                if (ctrl.value == employee) {
                    // Remove the unselected element from the arrayForm
                    formArray.removeAt(i_1);
                    return;
                }
                i_1++;
            });
        }
        else {
            // Add a new control in the arrayForm
            formArray.push(new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](employee));
            this.selectedEmployees.push(employee);
        }
        console.log(this.selectedEmployees);
    };
    ProjectWorkersComponent.prototype.getWorkerList = function (url) {
        var _this = this;
        this.callApi.getData(url)
            .subscribe(function (data) {
            _this.employees = data;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
    ], ProjectWorkersComponent.prototype, "group", void 0);
    ProjectWorkersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-workers',
            template: __webpack_require__("../../../../../src/app/component/projects/add-project/project-workers/project-workers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/projects/add-project/project-workers/project-workers.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services__["c" /* CallApiService */]])
    ], ProjectWorkersComponent);
    return ProjectWorkersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/projects/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__add_project_add_project_component__ = __webpack_require__("../../../../../src/app/component/projects/add-project/add-project.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__view_project_view_project_component__ = __webpack_require__("../../../../../src/app/component/projects/view-project/view-project.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__view_project_view_project_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__projects_table_projects_table_component__ = __webpack_require__("../../../../../src/app/component/projects/projects-table/projects-table.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projects_component__ = __webpack_require__("../../../../../src/app/component/projects/projects.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__projects_component__["a"]; });






/***/ }),

/***/ "../../../../../src/app/component/projects/projects-table/projects-table.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"alert alert-success alert-dismissable\" *ngIf=\"formSubmitted\">\r\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"closeAlert()\">&times;</button>\r\n  <strong>{{\"Success\"|translate}}!</strong> {{\"NewProjectFormsIsSubmitted\"|translate}}\r\n</div> -->\r\n<app-feedback [(showFeedback)]=\"formSubmitted\" [message]=\"indicationMessage\"></app-feedback>\r\n\r\n<div>\r\n  <div class=\"row\" style=\"width:100%;\">\r\n    <div class=\"offset-lg-5 col-lg-2\">\r\n      <button class=\"btn btn-block btn-success\" (click)=\"openModalBox()\">{{\"AddNewProject\"|translate}}</button>\r\n    </div>\r\n    <div class=\"col-lg-5\">\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"filterQuery\" [placeholder]=\"'EnterGroupIDorName'|translate\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel panel-default\">\r\n    <table class=\"table table-striped\" [mfData]=\"projects|dataFilter:filterQuery:'projects'\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n      <thead>\r\n        <tr>\r\n          <th style=\"width: 14.28%\">\r\n            <mfDefaultSorter by=\"p_id\">{{\"ProjectID\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 14.28%\">\r\n            <mfDefaultSorter by=\"p_data.p_name\">{{\"ProjectName\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 14.28%\">\r\n            <mfDefaultSorter by=\"p_data.p_location\">{{\"ProjectLocation\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 14.28%\">\r\n            <mfDefaultSorter by=\"workernum\">{{\"NumberOfWorkers\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 14.28%\">\r\n            <mfDefaultSorter by=\"p_data.p_floor\">{{\"NumberOfFloor\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 14.28%\">\r\n            <mfDefaultSorter by=\"p_data.p_area\">{{\"Size\"|translate}} (ft²)</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 14.28%\">\r\n            <mfDefaultSorter by=\"p_admin.u_name\">{{\"ProjectManager\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let project of mf.data\">\r\n          <td><a [routerLink]=\"['/projects',project.p_id]\">{{project.p_id}}</a></td>\r\n          <td>{{project.p_data.p_name}}</td>\r\n          <td>{{project.p_data.p_location}}</td>\r\n          <td>{{project.workernum}}</td>\r\n          <td>{{project.p_data.p_floor}}</td>\r\n          <td>{{project.p_data.p_area}}</td>\r\n          <td>{{project.p_admin}}</td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <td colspan=\"7\">\r\n            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n          </td>\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n</div>\r\n\r\n<!-- modal box to add project-->\r\n<div *ngIf=\"displayModel\" class=\"modal\">\r\n  <div [ngClass]=\"{'modal-content':true}\">\r\n    <span class=\"close\" (click)=\"closeModalBox()\">&times;</span>\r\n    <app-add-project (formSubmitSuccess)=\"formSubmit($event)\"></app-add-project>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/projects/projects-table/projects-table.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\n  display: block;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 4;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */ }\n\n/* Modal Content/Box */\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto;\n  /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 50%;\n  /* Could be more or less, depending on screen size */ }\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  position: absolute;\n  right: 10px;\n  font-size: 28px;\n  font-weight: bold; }\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer; }\n\n.padding-top {\n  padding-top: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/projects/projects-table/projects-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsTableComponent = (function () {
    function ProjectsTableComponent() {
        this.indicationMessage = ["Success", "NewProjectFormsIsSubmitted"];
        //whether the model of app-add-project is being display or not
        this.displayModel = false;
        this.filterQuery = "";
        this.rowsOnPage = 10;
        this.sortBy = "p_id";
        this.sortOrder = "asc";
    }
    ProjectsTableComponent.prototype.ngOnInit = function () {
    };
    ProjectsTableComponent.prototype.ngOnChanges = function (simpleChange) {
        if (simpleChange['projects']) {
            // console.log("input of projects in projects tables changes");
            console.log(this.projects);
        }
    };
    ProjectsTableComponent.prototype.openModalBox = function () {
        this.displayModel = true;
    };
    ProjectsTableComponent.prototype.closeModalBox = function () {
        this.displayModel = false;
    };
    //accept eventEmitter to let use know form submitted
    ProjectsTableComponent.prototype.formSubmit = function (event) {
        this.displayModel = false;
        this.formSubmitted = event;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])() //input the projects array from the element of projects that use this table
        ,
        __metadata("design:type", Array)
    ], ProjectsTableComponent.prototype, "projects", void 0);
    ProjectsTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-projects-table',
            template: __webpack_require__("../../../../../src/app/component/projects/projects-table/projects-table.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/projects/projects-table/projects-table.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsTableComponent);
    return ProjectsTableComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n    \t<h1>{{\"ProjectList\"|translate}}</h1>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"currentTab==='All'\">\r\n    <app-projects-table [projects]=\"allProjects\"></app-projects-table>\r\n  </div>\r\n  <div *ngIf=\"currentTab==='Ongoing'\">\r\n    <app-projects-table [projects]=\"ongoingProjects\"></app-projects-table>\r\n  </div>\r\n\r\n    <!-- please change the allProjects -->\r\n  <!-- <div *ngIf=\"currentTab==='Attached'\">\r\n    <app-projects-table [projects]=\"attachedProjects\" *ngIf=\"attachedProjects\"></app-projects-table>\r\n  </div> -->\r\n\r\n    <!-- please change the allProjects -->\r\n  <div *ngIf=\"currentTab==='Past'\">\r\n    <app-projects-table [projects]=\"pastProjects\"></app-projects-table>\r\n  </div>\r\n  <app-loading [apiCallFinish]=\"allProjects\"></app-loading>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/projects/projects.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectsComponent = (function () {
    function ProjectsComponent(tabService, reloadService, callApi, authService) {
        var _this = this;
        this.tabService = tabService;
        this.reloadService = reloadService;
        this.callApi = callApi;
        this.authService = authService;
        // attachedProjects:any[] = [];
        // set current content display the first tab
        this.currentTab = "ongoingProjects";
        this.currentTab = this.tabService.currentProject;
        this.tabService.currentProjectTab$.subscribe(function (tab) {
            //set currentTab to clicked tab from tab.services.
            // console.log("tab changes "+tab);
            _this.currentTab = tab;
        });
        //reload list when new project is added
        this.reloadService.reload$.subscribe(function (reload) {
            if (reload) {
                _this.allProjects = null;
                _this.ongoingProjects = null;
                _this.pastProjects = null;
                // this.attachedProjects=null;
                setTimeout(function () { _this.getAllList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].projectList), _this.getOngoingList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].projectListOngoing), _this.getPastList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].projectListPast); }, 2000);
            }
        });
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.getAllList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].projectList);
        this.getOngoingList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].projectListOngoing);
        this.getPastList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].projectListPast);
        this.profile = this.authService.getUserData();
        // this.attachedProjects = this.attachedProjects.concat(this.profile.project);
        // for(let i=0;i<this.attachedProjects.length;i++){
        //   this.attachedProjects[i]['p_admin'] = this.profile.u_name;
        // }
    };
    // get project list
    ProjectsComponent.prototype.getAllList = function (url) {
        var _this = this;
        this.callApi.getData(url)
            .subscribe(function (data) {
            _this.allProjects = data;
        });
    };
    //get ongoing project list
    ProjectsComponent.prototype.getOngoingList = function (url) {
        var _this = this;
        this.callApi.getData(url)
            .subscribe(function (data) {
            _this.ongoingProjects = data;
        });
    };
    //get past project list
    ProjectsComponent.prototype.getPastList = function (url) {
        var _this = this;
        this.callApi.getData(url)
            .subscribe(function (data) {
            _this.pastProjects = data;
        });
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__("../../../../../src/app/component/projects/projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/projects/projects.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["f" /* TabService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services__["b" /* ApiReloadService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services__["c" /* CallApiService */],
            __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* AuthService */]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/projects/view-project/edit-project/edit-project.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h1>{{\"EditProject\"|translate}}</h1>\r\n  <hr />\r\n  <form [formGroup]=\"projectToBeEdit\" (ngSubmit)=\"onSubmit(projectToBeEdit.value)\">\r\n    <div class=\"padding-top row\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"ProjectName\"|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <input class=\"form-control\" formControlName=\"projectName\" type=\"text\" placeholder=\"Project99\" />\r\n        <div class=\"warn\" *ngIf=\"!projectToBeEdit.controls['projectName'].valid&&projectToBeEdit.controls['projectName'].touched\">Please\r\n          enter group name in less than 50 character</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"ProjectPhoto\"|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-5\">\r\n        <input class=\"form-control\" type=\"file\" (change)=\"fileUpload($event)\" accept=\"image/*\" #fileInput />\r\n      </div>\r\n      <div class=\"col-lg-2\">\r\n        <img *ngIf=\"preview else nofile\" [src]=\"preview\" height=\"40px\" alt=\"image preview\" />\r\n        <ng-template #nofile>\r\n          <p>{{\"NoPreview\"|translate}}</p>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"ProjectManager\"|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <p>{{project.p_admin}}</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"StartDate\"|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <input type=\"text\" class=\"form-control\" id=\"startDate\" #dp=\"bsDatepicker\" [bsConfig]=\"bsConfig\" bsDatepicker\r\n          [(bsValue)]=\"bsValue\" formControlName=\"projectStartDate\">\r\n        <div class=\"warn\" *ngIf=\"!projectToBeEdit.controls['projectStartDate'].valid&&projectToBeEdit.controls['projectStartDate'].touched\">Please\r\n          Select a valid date</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"ProjectLocation\"|translate}}:</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <input formControlName=\"projectLocation\" class=\"form-control\" type=\"text\" placeholder=\"Enter location\" style=\"display:none\" />\r\n        <div class=\"warn\" *ngIf=\"!projectToBeEdit.controls['projectLocation'].valid&&projectToBeEdit.controls['projectLocation'].touched\">Please\r\n          enter group location in less than 80 character</div>\r\n      </div>\r\n      <div style=\"width:100%; padding-left:5%; padding-right: 5%;\">\r\n        <div style=\"\">\r\n          <ng4geo-autocomplete id=\"searchbox\" [ngModel]=\"locationInitialVal\" [ngModelOptions]=\"{standalone: true}\" [userSettings]=\"searchbox_Settings\" (componentCallback)=\"searchbox_AutoCompleteCallback($event)\"></ng4geo-autocomplete>\r\n        </div>\r\n        <div style=\"height: 300px;width:100%;overflow:hidden; z-index:5\" leaflet [leafletOptions]=\"options\"\r\n          [leafletLayersControl]=\"layersControl\" (leafletMapReady)=\"onMapReady($event)\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"Size\"|translate}} (ft²):</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <input class=\"form-control\" formControlName=\"projectSize\" type=\"text\" placeholder=\"\" default />\r\n        <!-- <div class=\"warn\" *ngIf=\"!projectToBeEdit.controls['projectSize'].valid&&projectToBeEdit.controls['projectSize'].touched\">This is required</div> -->\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"NumberOfFloor\"|translate}}:</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <input class=\"form-control\" formControlName=\"projectStories\" type=\"text\" placeholder=\"\" />\r\n        <!-- <div class=\"warn\" *ngIf=\"!projectToBeEdit.controls['projectStories'].valid&&projectToBeEdit.controls['projectStories'].touched\">This is required</div> -->\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row\">\r\n      <div class=\"col-lg-4 offset-lg-8\">\r\n        <!-- <input type=\"submit\" value=\"submit\"/> -->\r\n        <button type=\"submit\" class=\"btn btn-block btn-success\" [disabled]=\"!projectToBeEdit.valid\">{{\"SaveChanges\"|translate}}</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/projects/view-project/edit-project/edit-project.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".padding-top {\n  padding-top: 5px; }\n\n.warn {\n  background: #f2edda;\n  padding: 7px;\n  font-size: .9em;\n  margin-bottom: 20px;\n  display: inline-block;\n  -webkit-animation: 0.5s alertAnim forwards;\n          animation: 0.5s alertAnim forwards; }\n\n@-webkit-keyframes alertAnim {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n@keyframes alertAnim {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n.ui-select-choices.dropdown-menu {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/projects/view-project/edit-project/edit-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditProjectComponent = (function () {
    function EditProjectComponent(fb, callApi, reloadService, http) {
        this.fb = fb;
        this.callApi = callApi;
        this.reloadService = reloadService;
        this.http = http;
        this.formSubmitSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.initialAdmin = [];
        this.items = [];
        //datepicker config
        this.bsConfig = { containerClass: "theme-default", /*locale: "en-gb",*/ showWeekNumbers: false, dateInputFormat: 'YYYY/MM/DD ' };
        // map related api
        this.editableLayers = new __WEBPACK_IMPORTED_MODULE_3_leaflet__["FeatureGroup"]();
        this.map_OpenStreetMap = __WEBPACK_IMPORTED_MODULE_3_leaflet__["tileLayer"]('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 });
        this.map_GoogleCNNormalMap = __WEBPACK_IMPORTED_MODULE_3_leaflet__["tileLayer"]('http://www.google.cn/maps/vt?lyrs=m@189&gl=cn&x={x}&y={y}&z={z}', { maxZoom: 18 });
        this.map_GoogleCNSatelliteMap = __WEBPACK_IMPORTED_MODULE_3_leaflet__["tileLayer"]('http://www.google.cn/maps/vt?lyrs=s,h@189&gl=cn&x={x}&y={y}&z={z}', { maxZoom: 18 });
        this.map_TianDiTuNormal = __WEBPACK_IMPORTED_MODULE_3_leaflet__["layerGroup"]([
            __WEBPACK_IMPORTED_MODULE_3_leaflet__["tileLayer"]('http://t{s}.tianditu.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}', { maxZoom: 18, subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'] }),
            __WEBPACK_IMPORTED_MODULE_3_leaflet__["tileLayer"]('http://t{s}.tianditu.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}', { maxZoom: 18, subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'] })
        ]);
        this.map_TianDiTuSatellite = __WEBPACK_IMPORTED_MODULE_3_leaflet__["layerGroup"]([
            __WEBPACK_IMPORTED_MODULE_3_leaflet__["tileLayer"]('http://t{s}.tianditu.cn/DataServer?T=img_w&X={x}&Y={y}&L={z}', { maxZoom: 18, subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'] }),
            __WEBPACK_IMPORTED_MODULE_3_leaflet__["tileLayer"]('http://t{s}.tianditu.cn/DataServer?T=cia_w&X={x}&Y={y}&L={z}', { maxZoom: 18, subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'] })
        ]);
        this.options = {
            layers: [
                this.map_OpenStreetMap
            ],
            zoom: 13,
            center: __WEBPACK_IMPORTED_MODULE_3_leaflet__["latLng"](3.05, 101.62)
        };
        this.layersControl = {
            baseLayers: {
                'Open Street Map': this.map_OpenStreetMap,
                'Google Normal': this.map_GoogleCNNormalMap,
                'Google Satelite': this.map_GoogleCNSatelliteMap,
                'TianDiTu Normal': this.map_TianDiTuNormal,
                'TianDiTu Satellite': this.map_TianDiTuSatellite
            }
        };
        this.markerOptions = {
            icon: __WEBPACK_IMPORTED_MODULE_3_leaflet__["icon"]({
                iconSize: [25, 41],
                iconAnchor: [13, 41],
                iconUrl: 'assets/marker-icon.png',
                shadowUrl: 'assets/marker-shadow.png'
            })
        };
        this.searchbox_Settings = {};
    }
    EditProjectComponent.prototype.ngOnInit = function () {
        console.log(this.project);
        // this.getManagerList(ApiCmd.managerList);
        this.projectToBeEdit = this.fb.group({
            projectId: [this.project.p_id, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
            projectName: [this.project.p_data.p_name, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
            projectStartDate: [new Date(this.project.p_data.p_start_date), [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            projectLocation: [this.project.p_data.p_location, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(80)]],
            projectLatLng: [''],
            projectSize: [String(this.project.p_data.p_area)],
            projectStories: [String(this.project.p_data.p_floor)]
        });
        console.log(this.project);
        var lnglat = { lat: this.project.p_data.p_latitude, lng: this.project.p_data.p_longitude };
        this.locationInitialVal = this.projectToBeEdit.controls["projectLocation"].value;
        this.previousGeoData = {
            response: true,
            data: {
                formatted_address: this.projectToBeEdit.controls["projectLocation"].value,
                geometry: {
                    location: lnglat
                }
            }
        }; //initialize last data
    };
    EditProjectComponent.prototype.fileUpload = function (event) {
        var _this = this;
        //preview
        if (event.target.files && event.target.files[0] && this.isImage(event)) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = function (event) {
                _this.preview = event.target.result;
            };
            this.photo = event.srcElement.files;
        }
        else {
            alert("Please upload image only");
            this.fileInput.nativeElement.value = "";
            this.preview = null;
        }
    };
    EditProjectComponent.prototype.isImage = function (event) {
        var file = event.target.files[0];
        var fileType = file["type"];
        fileType = fileType.split("/");
        if (fileType[0] == "image") {
            return true;
        }
        return false;
    };
    EditProjectComponent.prototype.getManagerList = function (url) {
        var _this = this;
        this.callApi.getData(url)
            .subscribe(function (data) {
            _this.manager = data;
            // console.log(manager);
            _this.assignToDropdown();
        });
    };
    EditProjectComponent.prototype.assignToDropdown = function () {
        var _this = this;
        this.manager.forEach(function (admin) {
            _this.items.push({
                id: admin.u_id,
                text: admin.u_name
            });
        });
        var adminId = this.projectToBeEdit.controls["projectAdmin"].value;
        this.initialAdmin = this.items.filter(function (obj) {
            return obj.id == adminId;
        });
        console.log(adminId);
        console.log(this.initialAdmin);
    };
    EditProjectComponent.prototype.selected = function (value) {
        this.projectToBeEdit.controls["projectAdmin"].patchValue(value.id);
        console.log('Selected value is: ', value);
    };
    EditProjectComponent.prototype.onSubmit = function (value) {
        var _this = this;
        console.log(value);
        value['projectStartDate'] = (new Date(value['projectStartDate'])).toISOString();
        if (value['projectSize'] === '')
            value['projectSize'] = '0';
        if (value['projectStories'] === '')
            value['projectStories'] = '0';
        this.callApi.postWithFile(__WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].editProject, value, this.photo)
            .subscribe(function (response) {
            _this.formSubmitSuccess.emit(true);
            console.log(response);
            _this.reloadService.setReload();
        }, function (error) {
            alert("There's something wrong");
        });
    };
    EditProjectComponent.prototype.searchbox_AutoCompleteCallback = function (selectedData) {
        if (selectedData.response) {
            this.projectToBeEdit.controls["projectLocation"].patchValue(selectedData.data.formatted_address);
            var latlng = selectedData.data.geometry.location; //the latlng <- but idk where u wanna get it larr
            this.projectToBeEdit.controls["projectLatLng"].patchValue(JSON.stringify(latlng));
            var map = this.map;
            map.setView(latlng);
            map.eachLayer(function (layer) {
                if ('_level' in layer)
                    return;
                map.removeLayer(layer);
            });
            this.layer = __WEBPACK_IMPORTED_MODULE_3_leaflet__["marker"](latlng, this.markerOptions);
            map.addLayer(this.layer);
            this.map = map;
        }
    };
    ;
    EditProjectComponent.prototype.onMapReady = function (map) {
        this.map = map;
        this.searchbox_AutoCompleteCallback(this.previousGeoData); //initialize the address field
        var layer = this.layer;
        var markerOptions = this.markerOptions;
        var searchbox = (document.getElementById('searchbox'));
        var http = this.http;
        var group = this.projectToBeEdit;
        var CallApi = this.callApi;
        this.map.on('click', function (e) {
            console.log(e.latlng); // getting the lat lng from mouse
            var updateSearchbox = searchbox.firstElementChild.firstElementChild.firstElementChild.firstElementChild;
            group.controls["projectLatLng"].patchValue(JSON.stringify(e.latlng));
            CallApi.getLocationByLatLng(http, e.latlng, group).subscribe(function (data) {
                // console.log(data);
                group.controls["projectLocation"].patchValue(data);
                updateSearchbox.value = data;
            });
            map.setView(e.latlng);
            map.eachLayer(function (layer) {
                if ('_level' in layer)
                    return;
                map.removeLayer(layer);
            });
            layer = __WEBPACK_IMPORTED_MODULE_3_leaflet__["marker"](e.latlng, markerOptions);
            map.addLayer(layer);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], EditProjectComponent.prototype, "formSubmitSuccess", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EditProjectComponent.prototype, "project", void 0);
    EditProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-project',
            template: __webpack_require__("../../../../../src/app/component/projects/view-project/edit-project/edit-project.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../../src/app/component/projects/view-project/edit-project/edit-project.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_2__shared_services__["c" /* CallApiService */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* ApiReloadService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"]])
    ], EditProjectComponent);
    return EditProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/projects/view-project/project-info/project-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row project-photo\">\r\n  <div>\r\n    <img [src]=\"project['p_data']['p_photo']\" alt=\"project photo\"/>\r\n  </div>\r\n</div>\r\n<hr/> \r\n<app-info-row [title]=\"'ProjectLocation'\" [value]=\"project['p_data']['p_location']\"></app-info-row>\r\n<app-info-row [title]=\"'NumberOfWorkers'\" [value]=\"project['workernum']\"></app-info-row>\r\n<app-info-row [title]=\"'NumberOfFloor'\" [value]=\"project['p_data']['p_floor']\"></app-info-row>\r\n<app-info-row [title]=\"'Size'\" [value]=\"project['p_data']['p_area']\"></app-info-row>\r\n<app-info-row [title]=\"'ProjectManager'\" [value]=\"project['p_admin']\"></app-info-row>\r\n<app-info-row [title]=\"'StartDate'\" [value]=\"project['p_data']['p_start_date']|date:('FormatDate'|translate)\"></app-info-row>\r\n<div class=\"row\">\r\n  <div class=\"col-lg-5 bold\">\r\n    <p>{{\"TimeElapsed\"|translate}}</p>\r\n  </div>\r\n  <div class=\"col-lg-1\">\r\n    <p style=\"text-align: center\">:</p>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <p>\r\n      <span *ngIf=\"week>0\">{{week}} {{\"Week\"|translate}}<span *ngIf=\"week>1\">s</span></span>\r\n      <span *ngIf=\"day>0\"> {{day}} {{\"Day\"|translate}}<span *ngIf=\"day>1\">s</span></span>\r\n    </p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/projects/view-project/project-info/project-info.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".project-photo {\n  max-height: 33vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.project-photo > div > img {\n  height: auto;\n  max-height: 33vh;\n  width: auto;\n  max-width: 100%;\n  padding-right: 2.5%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/projects/view-project/project-info/project-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectInfoComponent = (function () {
    function ProjectInfoComponent() {
        this.oneday = 1000 * 60 * 60 * 24;
    }
    ProjectInfoComponent.prototype.ngOnInit = function () {
    };
    //not using yet
    ProjectInfoComponent.prototype.ngOnChanges = function (changes) {
        if (changes['project']) {
            this.dayElapsed = +(new Date(Date.now())).getTime() - +(new Date(this.project['p_data']['p_start_date'])).getTime();
            this.day = Math.floor(this.dayElapsed / (this.oneday));
            this.week = Math.floor(this.day / 7);
            this.day = this.day - 7 * this.week;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectInfoComponent.prototype, "project", void 0);
    ProjectInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-info',
            template: __webpack_require__("../../../../../src/app/component/projects/view-project/project-info/project-info.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/projects/view-project/project-info/project-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectInfoComponent);
    return ProjectInfoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/projects/view-project/project-map/project-map.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row \">\r\n    <div class=\"offset-lg-4 col-lg-4\">\r\n  \t <input id=\"pac-input\" [disabled]=\"true\" [(ngModel)]=\"location\" class=\"controls\" type=\"text\" placeholder=\"Type to search\">\r\n    </div>\r\n  </div>\r\n  <div class=\"row pt-3 pb-3\">\r\n    <div class=\"col-lg-12\">\r\n      <!-- this creates a google map on the page with the given lat/lng from -->\r\n      <div id=\"map\" class=\"outerline\"></div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/component/projects/view-project/project-map/project-map.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#map {\n  height: 500px; }\n\n#pac-input {\n  background-color: #fff;\n  font-family: Roboto;\n  font-size: 15px;\n  font-weight: 300;\n  margin-left: 12px;\n  padding: 0 11px 0 13px;\n  text-overflow: ellipsis;\n  width: 400px; }\n\n#pac-input:focus {\n  border-color: #4d90fe; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/projects/view-project/project-map/project-map.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectMapComponent = (function () {
    function ProjectMapComponent() {
        //polygon array with location only
        this.polygonArrays = [];
        //polygon arrays already initialized with setPolygon function
        this.initializedPolygonArrays = [];
    }
    // myLatLng:object = {lat: 3.14, lng: 103.3};
    ProjectMapComponent.prototype.ngOnInit = function () {
        //initialize the project location in map
        var lat = +this.project['p_latitude'];
        var long = +this.project['p_longitude'];
        this.location = this.project['p_location'];
        if (lat != null && long != null) {
            console.log("lat: " + lat + ",long: " + long);
            this.initMap(lat, long);
            this.createManyMarkers();
        }
    };
    //create workers markers
    ProjectMapComponent.prototype.createManyMarkers = function () {
        var _this = this;
        this.project['p_workers'].forEach(function (worker) {
            var coordinate = { lat: +worker.latitude, lng: +worker.longitude };
            var latlng = new google.maps.LatLng(+worker.latitude, +worker.longitude);
            console.log(latlng);
            _this.createOneMarker(coordinate, worker.u_name);
        });
    };
    //add one marker to the map
    ProjectMapComponent.prototype.createOneMarker = function (latlong, name) {
        var marker = new google.maps.Marker({
            position: latlong,
            map: this.map,
            title: name
        });
        // if(google.maps.geometry.poly.containsLocation(marker.getPosition(), this.initializedPolygonArrays[0])){
        //   alert('inside');
        // }
    };
    ProjectMapComponent.prototype.initMap = function (latitude, long) {
        var _this = this;
        this.map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: latitude, lng: long },
            zoom: 8
        });
        var projectLocation = new google.maps.Marker({
            map: this.map,
            title: this.project['p_id'],
            position: { lat: latitude, lng: long }
        });
        // Create the search box and link it to the UI element.
        var input = document.getElementById('pac-input');
        this.searchBox = new google.maps.places.SearchBox(input);
        this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
        projectLocation.addListener('click', function () {
            this.map.setZoom(25);
            this.map.setCenter(projectLocation.getPosition());
        });
        // Construct the polygon.
        this.polygonArrays.forEach(function (poly) {
            _this.setPolygon(poly.location, poly.zoneName);
        });
    };
    ProjectMapComponent.prototype.setPolygon = function (polygon, zone) {
        var area = new google.maps.Polygon({
            paths: polygon,
            strokeColor: '#FF0000',
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: '#FF0000',
            fillOpacity: 0.35
        });
        area.setMap(this.map);
        this.initializedPolygonArrays.push(area);
        // Add a listener for the click event.
        area.addListener('click', this.showZone(polygon[0], zone));
    };
    //zoom in to the location clicked
    ProjectMapComponent.prototype.showZone = function (coordinate, zone) {
        var infoWindow = new google.maps.InfoWindow;
        // Replace the info window's content and position.
        infoWindow.setContent("Zone: " + zone);
        infoWindow.setPosition(coordinate);
        infoWindow.open(this.map);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ProjectMapComponent.prototype, "project", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ProjectMapComponent.prototype, "polygonArrays", void 0);
    ProjectMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-map',
            template: __webpack_require__("../../../../../src/app/component/projects/view-project/project-map/project-map.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/projects/view-project/project-map/project-map.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectMapComponent);
    return ProjectMapComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/projects/view-project/project-view-workers/project-view-workers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"padding-top:1%\">\r\n  <div class=\"offset-lg-7 col-lg-2\">\r\n    <button class=\"btn btn-block btn-primary\" *ngIf=\"!edit else done\" (click)=\"edit=!edit\">{{\"Edit\"|translate}}</button>\r\n    <ng-template #done>\r\n      <button class=\"btn btn-block btn-info\" (click)=\"edit=!edit\">{{\"Done\"|translate}}</button>\r\n    </ng-template>\r\n  </div>\r\n  <div class=\"col-lg-3\">\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"filterQuery\" [placeholder]=\"'EnterUserIDorUserName' | translate\">\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"panel panel-default\" *ngIf=\"project\">\r\n  <div class=\"row\" *ngIf=\"edit\">\r\n    <div class=\"col-lg-9 form-group\">\r\n      <input class=\"form-control\" type=\"text\" [placeholder]=\"'EmployeeID' | translate\" #workerId>\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n      <button class=\"btn btn-block btn-success\" (click)=\"addWorkerToProject(project.p_id,workerId.value)\">{{\"AddToProject\"|translate}}</button>\r\n    </div>\r\n  </div>\r\n  <table class=\"table table-striped\" [mfData]=\"project.worker|dataFilter:filterQuery:'projectViewWorkers'\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n    <thead>\r\n      <tr>\r\n        <th style=\"width: 10%\">\r\n          <mfDefaultSorter by=\"health_status\">{{\"Status\"|translate}}</mfDefaultSorter>\r\n        </th>\r\n        <th style=\"width: 10%\">\r\n          <mfDefaultSorter by=\"id\">{{\"EmployeeID\"|translate}}</mfDefaultSorter>\r\n        </th>\r\n        <th style=\"width: 10%\">\r\n          <mfDefaultSorter by=\"u_name\">{{\"EmployeeName\"|translate}}</mfDefaultSorter>\r\n        </th>\r\n        <th style=\"width: 10%\">\r\n          <mfDefaultSorter by=\"hr\">{{\"HeartRate\"|translate}} (bpm)</mfDefaultSorter>\r\n        </th>\r\n        <!-- <th style=\"width: 10%\">\r\n          <mfDefaultSorter by=\"spo2\">Sp02</mfDefaultSorter>\r\n        </th>\r\n        <th style=\"width: 10%\">\r\n          <mfDefaultSorter by=\"temp\">Temperature</mfDefaultSorter>\r\n        </th> -->\r\n        <th style=\"width: 10%\">\r\n          <mfDefaultSorter by=\"zone\">{{\"Zone\"|translate}}</mfDefaultSorter>\r\n        </th>\r\n        <th style=\"width: 10%\">\r\n          <mfDefaultSorter by=\"level\">{{\"Level\"|translate}}</mfDefaultSorter>\r\n        </th>\r\n        <th style=\"width: 10%\" *ngIf=\"edit\">\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let employee of mf.data\">\r\n        <td [ngClass]=\"{'red':employee.w_status.health_status=='Unhealthy'}\">{{employee.w_status.health_status}}</td>\r\n        <td><a [routerLink]=\"['/employee',employee.w_id]\">{{employee.w_id}}</a></td>\r\n        <td>{{employee.w_name_photo.w_name}}</td>\r\n        <td>{{employee.w_sensor_data_.hr}}</td>\r\n        <!-- <td>{{employee.spo2}}</td> -->\r\n        <!-- <td>{{employee.temp}}</td> -->\r\n        <td>{{employee.w_zone ? (employee.w_zone.zone_id ? employee.w_zone.zone_id : \"Not in range\") : (employee.w_dev_data.zone||\"Not in range\")}}</td>\r\n        <td>{{employee.w_zone ? (employee.w_zone.level ? employee.w_zone.level : \"-\") : (employee.w_dev_data.floor||\"-\")}}</td>\r\n        <td *ngIf=\"edit\"><button class=\"btn btn-block btn-danger\" (click)=\"removeWorkerFromProject(project.p_id,employee.w_id)\">{{\"Remove\"|translate}}</button></td>\r\n      </tr>\r\n    </tbody>\r\n    <tfoot>\r\n      <tr>\r\n        <td colspan=\"8\" *ngIf=\"!edit else editing\">\r\n          <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n        </td>\r\n        <ng-template #editing>\r\n          <td colspan=\"9\">\r\n            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n          </td>\r\n        </ng-template>\r\n      </tr>\r\n    </tfoot>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/projects/view-project/project-view-workers/project-view-workers.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".red {\n  background-color: red;\n  color: white; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/projects/view-project/project-view-workers/project-view-workers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectViewWorkersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectViewWorkersComponent = (function () {
    function ProjectViewWorkersComponent(callApi, reloadService) {
        this.callApi = callApi;
        this.reloadService = reloadService;
        //polygon arrays already initialized with setPolygon function
        this.initializedPolygonArrays = [];
        this.edit = false; //to add/remove workers from project
        this.rowsOnPage = 10;
        this.sortBy = "w_id";
        this.sortOrder = "asc";
        this.filterQuery = "";
        this.defaultNull = "-";
    }
    ProjectViewWorkersComponent.prototype.ngOnChanges = function (simpleChanges) {
        if (simpleChanges['project']) {
            console.log("project-view-workers input changes");
        }
    };
    ProjectViewWorkersComponent.prototype.ngOnInit = function () {
        console.log(this.project);
        console.log(this.polygonArrays);
        // this.makePolygon();
    };
    ProjectViewWorkersComponent.prototype.makePolygon = function () {
        // this.polygonArrays.forEach((poly)=>{
        //         this.setPolygon(poly.location,poly.zoneName);
        //       });
        //       console.log(this.initializedPolygonArrays);
        this.checkZone();
    };
    ProjectViewWorkersComponent.prototype.setPolygon = function (polygon, name) {
        var area = new google.maps.Polygon({
            paths: polygon
        });
        this.initializedPolygonArrays.push({ area: area, name: name });
    };
    ProjectViewWorkersComponent.prototype.checkZone = function () {
        var _this = this;
        var pad = 10e15;
        this.project['p_workers'].forEach(function (worker) {
            _this.project['zone'].forEach(function (zone) {
                var x = worker.latitude * pad, y = worker.longitude * pad;
                var poly = zone.zone_latlng[0];
                var inside = false;
                for (var i = 0, j = poly.length - 1; i < poly.length; j = i++) {
                    var xi = poly[i].lat * pad, yi = poly[i].lng * pad;
                    var xj = poly[j].lat * pad, yj = poly[j].lng * pad;
                    var intersect = ((yi > y) != (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
                    if (intersect)
                        inside = !inside;
                }
                if (inside) {
                    worker.zone = zone.zone_id;
                }
            });
            // let coordinate={lat: +worker.latitude,lng: +worker.longitude } as object;
            // let marker = new google.maps.Marker({
            //     position: coordinate
            //  });
            //check if inside polygon
            // this.initializedPolygonArrays.forEach((polygon)=>{
            // 	if(google.maps.geometry.poly.containsLocation(marker.getPosition(), polygon.area)){
            // 		worker.zone=polygon.name;
            // 	}	
            // });
        });
    };
    ProjectViewWorkersComponent.prototype.addWorkerToProject = function (projectId, employeeId) {
        var _this = this;
        var add = {
            newp_id: projectId,
            w_id: employeeId,
            p_id: ''
        };
        add = JSON.stringify(add);
        console.log(add);
        this.callApi.postData(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].addOrRemoveWorker, add)
            .subscribe(function (response) {
            console.log(response);
            _this.reloadService.setReload();
        });
    };
    ProjectViewWorkersComponent.prototype.removeWorkerFromProject = function (projectId, employeeId) {
        var _this = this;
        //{"type":"add/remove","p_id":"xxx","w_id":"xxx"}
        var remove = {
            p_id: projectId,
            w_id: employeeId,
            newp_id: ''
        };
        remove = JSON.stringify(remove);
        console.log(remove);
        this.callApi.postData(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].addOrRemoveWorker, remove)
            .subscribe(function (response) {
            console.log(response);
            _this.reloadService.setReload();
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ProjectViewWorkersComponent.prototype, "project", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ProjectViewWorkersComponent.prototype, "polygonArrays", void 0);
    ProjectViewWorkersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-project-view-workers',
            template: __webpack_require__("../../../../../src/app/component/projects/view-project/project-view-workers/project-view-workers.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/projects/view-project/project-view-workers/project-view-workers.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["c" /* CallApiService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services__["b" /* ApiReloadService */]])
    ], ProjectViewWorkersComponent);
    return ProjectViewWorkersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/projects/view-project/view-project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <app-feedback [(showFeedback)]=\"formSubmitted\" [message]=\"indicationMessage\"></app-feedback>  \r\n  <div *ngIf=\"project\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4\">\r\n        <h1>{{project.p_id}} - {{project.p_data.p_name}}</h1>\r\n      </div>\r\n      <div class=\"offset-lg-7 col-lg-1\">\r\n        <fa name=\"times\" class=\"close\" [routerLink]=\"['/projects']\"></fa>\r\n      </div>\r\n      <hr/>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"offset-lg-6 col-lg-4\">\r\n        <ul class=\"view-project-tab\" style=\"margin-bottom:0px\">\r\n          <div class=\"row\">\r\n            <div class=\"tab front col-lg-6\" [ngClass]=\"{active:tab=='map'}\" (click)=\"viewTab('map')\">\r\n              <li>\r\n                {{\"Map\"|translate}}\r\n              </li>\r\n            </div>\r\n            <div class=\"tab behind col-lg-6\" [ngClass]=\"{active:tab=='workers'}\" (click)=\"viewTab('workers')\">\r\n              <li>\r\n                {{\"Employee\"|translate}}\r\n              </li>\r\n            </div>\r\n          </div>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div style=\"border-top:thick solid #8a6f6a\">\r\n      <div class=\"row pt-2\">\r\n        <div class=\"col-lg-4\" style=\"border-right:thin solid #8a6f6a; padding-top: 1vh\">\r\n          <app-project-info [project]=\"project\"></app-project-info>\r\n        </div>\r\n        <div class=\"col-lg-8 border\">\r\n          <div *ngIf=\"tab=='map' else workers \">\r\n            <!-- <app-project-map [project]=\"project\" [polygonArrays]=\"polygonArrays\"></app-project-map> -->\r\n            <app-map [height]=\"mapHeight\" [collapsibleNeeded]=\"mapCollapsibleNeeded\"></app-map>\r\n          </div>\r\n          <ng-template #workers >\r\n            <app-project-view-workers [project]=\"project\" [polygonArrays]=\"polygonArrays\"></app-project-view-workers>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row pt-3\">\r\n\r\n    <div class=\"offset-lg-8 col-lg-2\">\r\n      <button class=\"btn btn-block btn-primary\" (click)=\"openEditProjectModel()\">\r\n        {{\"Edit\"|translate}}\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"col-lg-2\">\r\n      <button class=\"btn btn-block btn-danger\" (click) = \"deleteProject(project['p_id'])\">\r\n        {{\"Delete\"|translate}}\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <app-loading [apiCallFinish]=\"project\"></app-loading>\r\n</div>\r\n\r\n<!-- modal box to add project-->\r\n<div *ngIf=\"displayEditProjectModel\" class=\"modal\">\r\n  <div [ngClass]=\"{'modal-content':true}\">\r\n    <span class=\"close\" (click)=\"closeModalBox()\">&times;</span>\r\n    <app-edit-project (formSubmitSuccess)=\"formSubmit($event)\" [project]=\"project\"></app-edit-project>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/projects/view-project/view-project.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\n  display: block;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 4;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */ }\n\n/* Modal Content/Box */\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto;\n  /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 50%;\n  /* Could be more or less, depending on screen size */ }\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  position: absolute;\n  right: 10px;\n  font-size: 28px;\n  font-weight: bold; }\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer; }\n\nul.view-project-tab {\n  font-size: 15px;\n  line-height: 3;\n  font-weight: 400;\n  list-style: none;\n  text-align: center;\n  color: white;\n  margin-left: 0;\n  padding-left: 0; }\n\n.tab.active {\n  background-color: #896e69; }\n\n/*li,.background-black{\t\r\n\tcursor:default;\r\n\t&:hover{\r\n\t\tbackground-color:black;\r\n\t};\r\n}*/\n.tab {\n  display: inline;\n  cursor: pointer;\n  background-color: #707070; }\n  .tab:hover {\n    background-color: #896e69; }\n\n.front {\n  border-radius: 10px 0 0 0px; }\n\n.behind {\n  border-radius: 0 10px 0px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/projects/view-project/view-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var ViewProjectComponent = (function () {
    // polygonArrays:any[]=[
    //    {
    //      zoneName:"A",
    //      location:
    //      [
    //        {lat: 3.111336917569428, lng: 101.61873668432236},
    //        {lat: 3.11093517919701, lng: 101.6193374991417},
    //        {lat: 3.1110851615406268, lng: 101.61945551633835},
    //        {lat: 3.1115351084434275, lng: 101.61888152360916}
    //      ]
    //    },
    //  {
    //    zoneName:"B",
    //    location:[
    //    {lat:3.110761092521411, lng:101.61822438240051},
    //    {lat:3.1113262045481496, lng:101.6187259554863},
    //    {lat:3.1109217879152875, lng:101.61932945251465},
    //    {lat:3.110270971418823, lng:101.61886543035507}
    //  ]},{
    //    zoneName:"C",
    //    location:[
    //  	{lat:3.1040707859004284, lng:101.59848868846893},
    //  	{lat:3.1029191275618713, lng:101.5985906124115},
    //  	{lat:3.102983406199884,lng: 101.59928798675537},
    //  {lat:3.1041297079211962,lng:101.59920752048492}
    //  ]},{
    //    zoneName:"D",
    //    location:[
    //  	{lat:3.1028709185807917, lng:101.59859597682953},
    //  	{lat:3.102903057901757, lng:101.59928798675537},
    //  	{lat:3.1016442671004474, lng:101.59933626651764},
    //  	{lat:3.101601414621248, lng:101.59864962100983}
    //  ]}];
    function ViewProjectComponent(tabService, _route, callApi, location, router, reloadService, translate) {
        var _this = this;
        this.tabService = tabService;
        this._route = _route;
        this.callApi = callApi;
        this.location = location;
        this.router = router;
        this.reloadService = reloadService;
        this.translate = translate;
        //dummy
        // data:string='[{"_id": "42318493912faa7c44065f93ee42fa97", "_rev": "1-40e50fb849cbe1ea04f2c8a71d68b5df", "type": "project", "p_id": "PJ001", "p_name": "Project 1", "p_location": "Jalan SS2/27, Petaling Jaya", "p_admin": {"id": "A001", "u_name": "James Bond", "u_photo": "https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png"}, "p_latitude": "4.23567", "p_longitude": "120.489213", "p_photo": "https://preview.ibb.co/mEXyk6/property_default_placeholder.gif", "p_area": "80,000 ft", "p_injuries": 2, "p_workers_number": "2", "p_workers": [{"id": "W003", "u_name": "Abu Abim", "u_photo": "https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png"}, {"id": "W005", "u_name": "John Steve", "u_photo": "https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png"}], "p_start_date": "2017-10-20T00:00:00Z"}]'
        //project data
        this.mapHeight = "65vh";
        this.mapCollapsibleNeeded = false;
        this.tab = 'map';
        this.waitTimeout = 2000;
        this.displayEditProjectModel = false;
        this.indicationMessage = ["Success", "ProjectEditIsSubmitted"];
        //reload list when new project is added
        this.reloadService.reload$.subscribe(function (reload) {
            if (reload) {
                console.log("view project reload");
                setTimeout(function () { _this.getProjectDetail(__WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].projectList + "/" + _this.id); }, 2000);
            }
        });
    }
    ViewProjectComponent.prototype.ngOnInit = function () {
        this.id = this._route.snapshot.paramMap.get('id');
        //uncomment below when api is up
        console.log(this.id);
        this.getProjectDetail(__WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].projectList + "/" + this.id);
        //watch for the parent tab changes;
        this.tabService.currentProjectTab$.subscribe(function (tab) { return function (tab) {
            return __awaiter(this, void 0, void 0, function () {
                var currentUrl, count;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            currentUrl = this.router.url;
                            currentUrl = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);
                            console.log('current url: ' + currentUrl);
                            count = 0;
                            _a.label = 1;
                        case 1:
                            if (!(this.project == null && count++ < 10)) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.sleep(this.waitTimeout / 10)];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 1];
                        case 3:
                            if (this.project != null) {
                                console.log(this.project);
                                if (currentUrl == this.project['p_id']) {
                                    this.router.navigate(['/projects']);
                                }
                            }
                            return [2 /*return*/];
                    }
                });
            });
        }; });
    };
    ViewProjectComponent.prototype.sleep = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    //call api to get this id project's data
    ViewProjectComponent.prototype.getProjectDetail = function (url) {
        var _this = this;
        this.callApi.getData(url)
            .subscribe(function (data) {
            //use data[0] because the array only contain one data
            _this.project = data[0];
            console.log('get project: ' + _this.project['p_id']);
        });
    };
    ViewProjectComponent.prototype.viewTab = function (tab) {
        this.tab = tab;
    };
    ViewProjectComponent.prototype.ngOnChanges = function (changes) {
        if (changes['tab']) {
            console.log(this.tab);
        }
    };
    ViewProjectComponent.prototype.deleteProject = function (id) {
        var _this = this;
        var data = {
            "p_id": id
        };
        this.translate.get("DeleteProjectPrompt", { id: id }).subscribe(function (message) {
            if (confirm(message)) {
                _this.callApi.postData(__WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].removeProject, JSON.stringify(data))
                    .subscribe(function (res) {
                    console.log("deleted project " + id);
                    _this.location.back();
                    console.log(res);
                });
            }
        });
    };
    ViewProjectComponent.prototype.openEditProjectModel = function () {
        console.log("open modal");
        this.displayEditProjectModel = true;
    };
    ViewProjectComponent.prototype.closeModalBox = function () {
        this.displayEditProjectModel = false;
    };
    //accept eventEmitter to let use know form submitted
    ViewProjectComponent.prototype.formSubmit = function (event) {
        this.displayEditProjectModel = false;
        this.formSubmitted = event;
    };
    ViewProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-project',
            template: __webpack_require__("../../../../../src/app/component/projects/view-project/view-project.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../../src/app/component/projects/view-project/view-project.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services__["f" /* TabService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services__["c" /* CallApiService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* ApiReloadService */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_translate__["b" /* TranslateService */]])
    ], ViewProjectComponent);
    return ViewProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/report/report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-6\">\r\n\t\t\t<h1>{{\"Report\"|translate}}</h1>\r\n\t\t</div>\r\n\t</div>\r\n\t<div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"offset-lg-2 col-lg-8 row\">\r\n\t\t\t\t<div class=\"col-lg-5 bold\"><p>{{'Type'|translate}}</p></div>\r\n\t\t\t\t<span class=\"col-lg-1\" style=\"text-align: center\"><p>:</p></span>\r\n\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t<!-- <input class=\"form-control\" type=\"text\" [(ngModel)] = \"group\"/> -->\r\n\t\t\t\t\t<ng-select [allowClear]=\"true\"\r\n\t\t\t\t\t[items]=\"typeList|selectOptionsTranslate\"\r\n\t\t\t\t\t(selected)=\"selectedType($event)\" *ngIf=\"typeList[0]!=null\"\r\n\t\t\t\t\t>\r\n\t\t\t\t</ng-select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"offset-lg-2 col-lg-8 row\">\r\n\t\t\t\t<div class=\"col-lg-5 bold\"><p>{{'DeviceOrProject'|translate}}</p></div>\r\n\t\t\t\t<span class=\"col-lg-1\" style=\"text-align: center\"><p>:</p></span>\r\n\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t<!-- <input class=\"form-control\" type=\"text\" [(ngModel)] = \"group\"/> -->\r\n\t\t\t\t\t<ng-select [allowClear]=\"true\"\r\n\t\t\t\t\t[items]=\"deviceOrProjectList|selectOptionsTranslate\"\r\n\t\t\t\t\t(selected)=\"selectedDeviceOrProject($event)\" *ngIf=\"deviceOrProjectList[0]!=null\"\r\n\t\t\t\t\t>\r\n\t\t\t\t</ng-select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\" *ngIf = \"projectOrDevice == 'project'\">\r\n\t\t\t<div class=\"offset-lg-2 col-lg-8 row\">\r\n\t\t\t\t<div class=\"col-lg-5 bold\"><p>{{'Projects'|translate}}</p></div>\r\n\t\t\t\t<span class=\"col-lg-1\" style=\"text-align: center\"><p>:</p></span>\r\n\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t<!-- <input class=\"form-control\" type=\"text\" [(ngModel)] = \"group\"/> -->\r\n\t\t\t\t\t<ng-select [allowClear]=\"true\"\r\n\t\t\t\t\t[items]=\"projectList\"\r\n\t\t\t\t\t(selected)=\"selectedID($event)\" *ngIf=\"projectList[0]!=null\"\r\n\t\t\t\t\t>\r\n\t\t\t\t</ng-select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\" *ngIf = \"projectOrDevice == 'device'\">\r\n\t\t\t<div class=\"offset-lg-2 col-lg-8 row\">\r\n\t\t\t\t<div class=\"col-lg-5 bold\"><p>{{'Employee'|translate}}</p></div>\r\n\t\t\t\t<span class=\"col-lg-1\" style=\"text-align: center\"><p>:</p></span>\r\n\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t<!-- <input class=\"form-control\" type=\"text\" [(ngModel)] = \"group\"/> -->\r\n\t\t\t\t\t<ng-select [allowClear]=\"true\"\r\n\t\t\t\t\t[items]=\"userList\"\r\n\t\t\t\t\t(selected)=\"selectedID($event)\" *ngIf=\"userList[0]!=null\"\r\n\t\t\t\t\t>\r\n\t\t\t\t</ng-select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"offset-lg-2 col-lg-8 row\">\r\n\t\t\t\t<div class=\"col-lg-5 bold\"><p>{{'StartDate'|translate}}</p></div>\r\n\t\t\t\t<span class=\"col-lg-1\" style=\"text-align: center\"><p>:</p></span>\r\n\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t<input type=\"text\"\r\n\t\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t#dp=\"bsDatepicker\"\r\n\t\t\t\t\t\t[bsConfig]=\"bsConfig\"\r\n\t\t\t\t\t\tbsDatepicker [(bsValue)]=\"startDate\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"row\">\r\n\t\t\t<div class=\"offset-lg-2 col-lg-8 row\">\r\n\t\t\t\t<div class=\"col-lg-5 bold\"><p>{{'EndDate'|translate}}</p></div>\r\n\t\t\t\t<span class=\"col-lg-1\" style=\"text-align: center\"><p>:</p></span>\r\n\t\t\t\t<div class=\"col-lg-6\">\r\n\t\t\t\t\t<!-- <input class=\"form-control\" type=\"text\" [(ngModel)] = \"group\"/> -->\r\n\t\t\t\t\t<input type=\"text\"\r\n\t\t\t\t\tclass=\"form-control\"\r\n\t\t\t\t\t\t#dp=\"bsDatepicker\"\r\n\t\t\t\t\t\t[bsConfig]=\"bsConfig\"\r\n\t\t\t\t\t\tbsDatepicker [(bsValue)]=\"endDate\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\t\r\n\r\n\r\n\t<div class=\"row\">\r\n\t\t\t<div class=\"col-md-2 offset-md-10\">\r\n\t\t\t\t<button class=\"btn btn-block btn-success\" (click)=\"download()\">\r\n\t\t\t\t\t{{\"Download\"|translate}}\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/report/report.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ui-select-choices.dropdown-menu {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/report/report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportComponent; });
/* unused harmony export mock */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_csv_Angular2_csv__ = __webpack_require__("../../../../angular2-csv/Angular2-csv.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_csv_Angular2_csv___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_csv_Angular2_csv__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReportComponent = (function () {
    function ReportComponent(callApi, datePipe, translate) {
        this.callApi = callApi;
        this.datePipe = datePipe;
        this.translate = translate;
        this.typeOption = ["hr", "steps", "location", "sos", "alert"];
        this.deviceOrProjectOption = ["project", "device"];
        this.typeList = [];
        this.projectList = [];
        this.userList = [];
        this.deviceOrProjectList = [];
        this.bsConfig = { containerClass: "theme-default", /*locale: "en-gb",*/ showWeekNumbers: false, dateInputFormat: 'YYYY/MM/DD ' };
    }
    ReportComponent.prototype.ngOnInit = function () {
        this.getProjectList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].projectList);
        this.getUserList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].workerList);
        this.generateDropdownList(this.typeOption, this.typeList);
        this.generateDropdownList(this.deviceOrProjectOption, this.deviceOrProjectList);
    };
    // download(){
    // 	new Angular2Csv(mock.data, 'test');
    // }
    ReportComponent.prototype.selectedID = function (item) {
        this.id = item.id;
        console.log(this.id);
    };
    ReportComponent.prototype.selectedType = function (item) {
        this.type = item.id;
        console.log(this.type);
    };
    ReportComponent.prototype.selectedDeviceOrProject = function (item) {
        if (this.projectOrDevice != item) {
            this.id = null;
        }
        this.projectOrDevice = item.id;
        console.log(this.projectOrDevice);
    };
    ReportComponent.prototype.download = function () {
        var _this = this;
        var options = {
            fieldSeparator: ',',
            quoteStrings: '"',
            decimalseparator: '.',
            showLabels: false,
            headers: [],
            showTitle: false,
            title: 'Report',
            useBom: false,
            removeNewLines: true
        };
        // /wecare/api.php/mdt_sandbox/print/{type}/{project/device}/{projectid/deviceid}/{startdate}/{enddate}
        var url = __WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].reportDownload + "/" + this.type + "/" + this.projectOrDevice + "/" + this.id + "/" + this.datePipe.transform(this.startDate, 'yyyyMMdd') + "/" + this.datePipe.transform(this.endDate, 'yyyyMMdd');
        console.log(url);
        this.callApi.getData(url)
            .subscribe(function (data) {
            var dataNeeded = data; //data[0].dev_common;
            // console.log(dataNeeded);
            for (var key in dataNeeded[0]) {
                options.headers.push(key);
            }
            console.log(options.headers);
            if (dataNeeded.length == 0 || dataNeeded === undefined) {
                _this.translate.get("DownloadDataFail").subscribe(function (res) {
                    alert(res);
                });
            }
            else {
                new __WEBPACK_IMPORTED_MODULE_2_angular2_csv_Angular2_csv__["Angular2Csv"](dataNeeded, "Report-" + _this.id, options);
                console.log(data);
            }
        });
    };
    ReportComponent.prototype.getProjectList = function (url) {
        var _this = this;
        this.callApi.getData(url)
            .subscribe(function (data) {
            console.log(data);
            data.forEach(function (item) {
                _this.projectList.push({
                    id: item.p_id,
                    text: item.p_data.p_name
                });
            });
            console.log(_this.projectList);
        });
    };
    ReportComponent.prototype.getUserList = function (url) {
        var _this = this;
        this.callApi.getData(url)
            .subscribe(function (data) {
            console.log(data);
            data.forEach(function (item) {
                _this.userList.push({
                    id: item.dev_id,
                    text: item.w_id
                });
            });
            console.log(_this.userList);
        });
    };
    ReportComponent.prototype.generateDropdownList = function (option, list) {
        // this.typeOption.forEach((item) => {
        // 	this.typeList.push({
        // 		id: item,
        // 		text: item
        // 	})
        // });
        option.forEach(function (item) {
            list.push({
                id: item,
                text: item
            });
        });
    };
    ReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-report',
            template: __webpack_require__("../../../../../src/app/component/report/report.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../../src/app/component/report/report.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["c" /* CallApiService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["DatePipe"],
            __WEBPACK_IMPORTED_MODULE_4_ng2_translate__["b" /* TranslateService */]])
    ], ReportComponent);
    return ReportComponent;
}());

var mock = (function () {
    function mock() {
    }
    mock.data = [
        {
            "_id": "??",
            "_rev": "??",
            "type": "report",
            "id": "report0002",
            "employee": [{
                    "id": "W002",
                    "name": "Lee Yi"
                }, {
                    "id": "W003",
                    "name": "test"
                }],
            "details": {
                "absent": "5",
                "no_wear": "11",
                "work_hour": "456",
                "work_day": "92"
            }
        },
        {
            "_id": "??",
            "_rev": "??",
            "type": "report",
            "id": "report0006",
            "employee": {
                "id": "W006",
                "name": "Karl Marx"
            },
            "details": {
                "absent": "11",
                "no_wear": "11",
                "work_hour": "232",
                "work_day": "47"
            }
        },
        {
            "_id": "??",
            "_rev": "??",
            "type": "report",
            "id": "report0001",
            "employee": {
                "id": "W002",
                "name": "Adam Smith"
            },
            "details": {
                "absent": "9",
                "no_wear": "10",
                "work_hour": "621",
                "work_day": "152"
            }
        },
        {
            "_id": "??",
            "_rev": "??",
            "type": "report",
            "id": "report0004",
            "employee": {
                "id": "W004",
                "name": "Hegel"
            },
            "details": {
                "absent": "3",
                "no_wear": "3",
                "work_hour": "676",
                "work_day": "180"
            }
        },
        {
            "_id": "??",
            "_rev": "??",
            "type": "report",
            "id": "report0003",
            "employee": {
                "id": "W003",
                "name": "Abu Abim"
            },
            "details": {
                "absent": "1",
                "no_wear": "1",
                "work_hour": "200",
                "work_day": "30"
            }
        },
        {
            "_id": "??",
            "_rev": "??",
            "type": "report",
            "id": "report0005",
            "employee": {
                "id": "W005",
                "name": "John Steve"
            },
            "details": {
                "absent": "0",
                "no_wear": "0",
                "work_hour": "321",
                "work_day": "40"
            }
        }
    ];
    return mock;
}());



/***/ }),

/***/ "../../../../../src/app/component/router/add-router/add-router.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{\"AddNewRouter\"|translate}}</h1>\r\n<app-form [formData]=\"routerForm\" *ngIf=\"routerForm\" (formSubmitSuccess)=\"formSubmit($event)\"></app-form>"

/***/ }),

/***/ "../../../../../src/app/component/router/add-router/add-router.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/router/add-router/add-router.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddRouterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddRouterComponent = (function () {
    function AddRouterComponent(fb) {
        this.fb = fb;
        this.formSubmitSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    AddRouterComponent.prototype.ngOnInit = function () {
        console.log(this.LatLngSelected);
        if (this.LatLngSelected != null) {
            this.group = this.fb.group({
                p_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
                ssid: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
                mac: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"]]],
                zone: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
                lat: [this.LatLngSelected.lat, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
                lng: [this.LatLngSelected.lng, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
            });
        }
        else {
            this.group = this.fb.group({
                p_id: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
                ssid: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
                mac: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"]]],
                zone: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
                lat: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
                lng: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
            });
        }
        this.constructRouterForm();
    };
    AddRouterComponent.prototype.formSubmit = function (event) {
        console.log("add-router form submitted successfully? " + event);
        this.formSubmitSuccess.emit(event);
    };
    AddRouterComponent.prototype.constructRouterForm = function () {
        this.routerForm = [
            {
                form_group: this.group,
                submit_url: __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].addRouter,
                contain_image: false,
                button_name: "Add",
                form_control_names: [
                    {
                        "input_name": "ProjectID",
                        "form_control_name": "p_id",
                        "type": { type: "text", options: [], accept: "" },
                        "placeholder": "TT001",
                        "error_message": "RequiredError"
                    },
                    {
                        "input_name": "SSID",
                        "form_control_name": "ssid",
                        "type": { type: "text", options: [], accept: "" },
                        "placeholder": "Office_Floor_1",
                        "error_message": "RequiredError"
                    },
                    {
                        "input_name": "MAC",
                        "form_control_name": "mac",
                        "type": { type: "text", options: [], accept: "" },
                        "placeholder": "1a:1a:1a:1a:1a:1a",
                        "error_message": "RequiredError"
                    },
                    {
                        "input_name": "Zone",
                        "form_control_name": "zone",
                        "special": { type: "select", url: __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].getZoneList, kind: "zone", var_loc: 0 },
                        "type": { type: "text", options: [], accept: "" },
                        "placeholder": "NoZoneSelected",
                        "error_message": "RequiredError"
                    },
                    {
                        "input_name": "Latitude",
                        "form_control_name": "lat",
                        "type": { type: "number", options: [], accept: "" },
                        "placeholder": "1.0000000",
                        "error_message": "RequiredError"
                    },
                    {
                        "input_name": "Longitude",
                        "form_control_name": "lng",
                        "type": { type: "number", options: [], accept: "" },
                        "placeholder": "1.0000000",
                        "error_message": "RequiredError"
                    },
                ]
            }
        ];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AddRouterComponent.prototype, "formSubmitSuccess", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AddRouterComponent.prototype, "LatLngSelected", void 0);
    AddRouterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-router',
            template: __webpack_require__("../../../../../src/app/component/router/add-router/add-router.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/router/add-router/add-router.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], AddRouterComponent);
    return AddRouterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/router/router.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  \t<app-feedback [(showFeedback)]=\"addFormSubmitted\" [message]=\"addFormIndicationMessage\"></app-feedback>\r\n  \t<app-feedback [(showFeedback)]=\"deleteRouterSubmitted\" [message]=\"deleteRouterIndicationMessage\"></app-feedback>\r\n    <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <h1>{{\"Routerconfig\"|translate}}</h1>\r\n        </div>\r\n      </div>\r\n    <div  style=\"height: 50vh; width: 100%; overflow:hidden; display:block;z-index: 1\"\r\n      leaflet\r\n      [leafletOptions]=\"options\" \r\n      (leafletMapReady)=\"onMapReady($event)\"\r\n      >\r\n    </div>\r\n    <div class=\"panel panel-default\" *ngIf=\"routers\">\r\n        <table class=\"table table-striped\" [mfData]=\"routers\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n          <thead>\r\n          <tr>\r\n            <th style=\"width: 10%\">\r\n              <mfDefaultSorter by=\"\"></mfDefaultSorter>\r\n            </th>\r\n            <th style=\"width: 10%\">\r\n              <mfDefaultSorter by=\"project_id\">{{\"ProjectID\"|translate}}</mfDefaultSorter>\r\n            </th>\r\n            <th style=\"width: 20%\">\r\n              <mfDefaultSorter by=\"zone_id\">{{\"Zone\"|translate}}</mfDefaultSorter>\r\n            </th>\r\n            <th style=\"width: 20%\">\r\n              <mfDefaultSorter by=\"level\">{{\"Level\"|translate}}</mfDefaultSorter>\r\n            </th>\r\n            <th style=\"width: 20%\">\r\n              <mfDefaultSorter by=\"ssid\">{{\"SSID\"|translate}}</mfDefaultSorter>\r\n            </th>\r\n            <th style=\"width: 20%\">\r\n                <mfDefaultSorter by=\"mac_id\">{{\"MAC\"|translate}}</mfDefaultSorter>\r\n            </th>\r\n            <th style=\"width: 10%\">\r\n                <mfDefaultSorter by=\"lat\">{{\"Latitude\"|translate}}</mfDefaultSorter>\r\n            </th>\r\n            <th style=\"width: 10%\">\r\n              <mfDefaultSorter by=\"lng\">{{\"Longitude\"|translate}}</mfDefaultSorter>\r\n            </th>\r\n          \r\n          </tr>\r\n          </thead>\r\n          <tbody>\r\n          <tr *ngFor=\"let router of mf.data\">\r\n            <td><input type=\"checkbox\" [value]=\"router.mac_id\" (change)=\"toggleRouterDeletion(router.mac_id)\"/></td>\r\n            <td>{{router.project_id}}</td>\r\n            <td>{{router.zone_id}}</td>\r\n            <td>{{router.level}}</td>\r\n            <td>{{router.ssid}}</td>\r\n            <td>{{router.mac_id}}</td>\r\n            <td>{{router.lat}}</td>\r\n            <td>{{router.lng}}</td>\r\n            </tr>\r\n          </tbody>\r\n          <tfoot>\r\n          <tr>\r\n            <td colspan=\"8\">\r\n            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n            </td>\r\n          </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n      <div class=\"row\">\r\n          <div class=\"offset-lg-3 col-lg-3\">\r\n            <button class=\"btn btn-block btn-success\" (click)=\"openAddModalBox()\">{{\"Add\"|translate}}</button>\r\n          </div>\r\n          <div class=\"col-lg-3\">\r\n            <button class=\"btn btn-block btn-danger\" (click)=\"deleteRouters()\">{{\"Delete\"|translate}}</button>\r\n          </div>\r\n      </div>\r\n    <app-loading [apiCallFinish]=\"routers\"></app-loading>\t\t\r\n</div>\r\n\r\n<!-- display add router model box -->\r\n<div *ngIf=\"displayAddModel\" class=\"modal\">\r\n\t<div [ngClass]=\"{'modal-content':true}\">\r\n\t\t<span class=\"close\" (click)=\"closeAddModalBox()\">&times;</span>\r\n\t\t\t<app-add-router [LatLngSelected] = \"clickedLatLng\" (formSubmitSuccess)=\"addFormSubmit($event)\"></app-add-router>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/router/router.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\n  display: block;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 4;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */ }\n\n/* Modal Content/Box */\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto;\n  /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 50%;\n  /* Could be more or less, depending on screen size */ }\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  position: absolute;\n  right: 10px;\n  font-size: 28px;\n  font-weight: bold; }\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/router/router.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RouterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet__ = __webpack_require__("../../../../leaflet/dist/leaflet-src.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_leaflet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_leaflet__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// routerList
var RouterComponent = (function () {
    function RouterComponent(CallApi, reloadService, http) {
        var _this = this;
        this.CallApi = CallApi;
        this.reloadService = reloadService;
        this.http = http;
        this.initZoom = 8;
        this.initLatlng = [2.893666551820528, 102.77709960937501];
        // table
        this.rowsOnPage = 10;
        this.sortBy = "";
        this.sortOrder = "";
        //add router 
        this.deleteRouterIndicationMessage = ["Deleted", "DeleteRouterFormsIsSubmitted"];
        this.deleteRouterSubmitted = false;
        this.addFormIndicationMessage = ["Success", "NewRouterFormsIsSubmitted"];
        this.addFormSubmitted = false;
        this.displayAddModel = false;
        // router delete checkbox
        this.routerToBeDelete = [];
        this.map_OpenStreetMap = __WEBPACK_IMPORTED_MODULE_3_leaflet__["tileLayer"]('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 });
        this.map_TianDiTuNormal = __WEBPACK_IMPORTED_MODULE_3_leaflet__["layerGroup"]([
            __WEBPACK_IMPORTED_MODULE_3_leaflet__["tileLayer"]('http://t{s}.tianditu.cn/DataServer?T=vec_w&X={x}&Y={y}&L={z}', { maxZoom: 18, subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'] }),
            __WEBPACK_IMPORTED_MODULE_3_leaflet__["tileLayer"]('http://t{s}.tianditu.cn/DataServer?T=cva_w&X={x}&Y={y}&L={z}', { maxZoom: 18, subdomains: ['0', '1', '2', '3', '4', '5', '6', '7'] })
        ]);
        /* Initial settings */
        this.options = {
            layers: [
                this.map_OpenStreetMap
            ],
            zoom: this.initZoom,
            center: this.initLatlng
        };
        this.reloadService.reload$.subscribe(function (reload) {
            if (reload) {
                // console.log("reload employees");
                _this.routers = null;
                //reload list when new employee is added
                setTimeout(function () { return _this.getRouterList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].routerList); }, 2000);
            }
        });
    }
    RouterComponent.prototype.ngOnInit = function () {
        this.getRouterList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].routerList);
    };
    RouterComponent.prototype.setSelectedLatLng = function (e) {
        this.clickedLatLng = e;
        console.log(this.clickedLatLng);
    };
    /* All map functions */
    RouterComponent.prototype.onMapReady = function (map) {
        var self = this;
        var clickMarker;
        var clickMarkerIcon = __WEBPACK_IMPORTED_MODULE_3_leaflet__["icon"]({
            iconUrl: '../assets/images/clickmarker.png',
            iconAnchor: [12.5, 41]
        });
        var tableMarkerIcon = __WEBPACK_IMPORTED_MODULE_3_leaflet__["icon"]({
            iconUrl: '../assets/images/tablemarker.png',
            iconAnchor: [12.5, 41]
        });
        map.addEventListener('click', function (e) {
            self.setSelectedLatLng(e.latlng);
            if (map.hasLayer(clickMarker))
                map.removeLayer(clickMarker);
            clickMarker = __WEBPACK_IMPORTED_MODULE_3_leaflet__["marker"](e.latlng, { icon: clickMarkerIcon });
            clickMarker.addTo(map);
        });
        var tableListener = setInterval(function () {
            console.log(self.routers);
            if (self.routers !== null) {
                for (var router in self.routers) {
                    var latlng = [/*lat: */ self.routers[router].lat, /*lng: */ self.routers[router].lng];
                    __WEBPACK_IMPORTED_MODULE_3_leaflet__["marker"](latlng, { icon: tableMarkerIcon }).addTo(map);
                }
                clearInterval(tableListener);
            }
        }, 200);
    };
    RouterComponent.prototype.getRouterList = function (url) {
        var _this = this;
        this.CallApi.getData(url)
            .subscribe(function (data) {
            _this.routers = data;
            console.log(data);
        });
    };
    RouterComponent.prototype.toggleRouterDeletion = function (mac) {
        var idx = this.routerToBeDelete.indexOf(mac);
        // Is currently selected
        if (idx > -1) {
            this.routerToBeDelete.splice(idx, 1);
        }
        else {
            this.routerToBeDelete.push(mac);
        }
        console.log(this.routerToBeDelete);
    };
    RouterComponent.prototype.deleteRouters = function () {
        var _this = this;
        var url = __WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].removeRouter;
        var data = JSON.stringify({ "data": this.routerToBeDelete });
        if (confirm("Are you sure you want to remove the selected Access Point?")) {
            this.CallApi.postData(url, data)
                .subscribe(function (response) {
                _this.reloadService.setReload();
                _this.deleteRouterSubmitted = true;
                console.log(response);
            });
        }
    };
    RouterComponent.prototype.addFormSubmit = function (event) {
        this.closeAddModalBox();
        console.log("addFormSubmit function event: " + event);
        this.addFormSubmitted = event;
    };
    RouterComponent.prototype.openAddModalBox = function () {
        this.displayAddModel = true;
    };
    RouterComponent.prototype.closeAddModalBox = function () {
        this.displayAddModel = false;
    };
    RouterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-router',
            template: __webpack_require__("../../../../../src/app/component/router/router.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/router/router.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["c" /* CallApiService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services__["b" /* ApiReloadService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"]])
    ], RouterComponent);
    return RouterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <!-- <div *ngIf=\"currentTab==='User'\">\r\n    <h1>{{\"UserProfile\"|translate}}</h1>\r\n    <div>\r\n      <div class=\"rect-host\"></div>\r\n      <h4>  {{\"AccountManagement\"|translate}}</h4>\r\n    </div>\r\n    <div>\r\n      <div class=\"rect\"></div>\r\n      <p>   {{\"SimCard\"|translate}}:      {{profile.info.u_contact}}</p>\r\n    </div>\r\n    <div>\r\n      <div class=\"rect\"></div>\r\n      <p>   {{\"EmailAddress\"|translate}}: {{profile.u_login.u_email}}</p>\r\n    </div>\r\n    <div>\r\n      <div class=\"rect\"></div>\r\n      <p>   {{\"Password\"|translate}}:        ********</p>\r\n    </div>\r\n  </div> -->\r\n  <!-- profile -->\r\n  <div *ngIf=\"currentTab==='Profile'\">\r\n    <div *ngIf=\"al!=3\">\r\n        <h1>{{\"Settings\"|translate}}</h1>\r\n    </div>\r\n    <div *ngIf=\"al==3\">\r\n    <h1>{{\"UserProfile\"|translate}}</h1>\r\n      <app-feedback [(showFeedback)]=\"formSubmitted\" [message]=\"indicationMessage\"></app-feedback>\r\n      <div class=\"row\">\r\n        <div class=\"offset-lg-9 col-lg-3\">\r\n          <button type=\"button\" *ngIf=\"!editDetail else profileSaveButton\" class=\"btn btn-block btn-info\" (click)=\"editDetails()\"><fa name=\"pencil-square-o\"></fa>{{\"EditDetails\"|translate}}</button>\r\n          <ng-template #profileSaveButton>\r\n            <form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit(profileForm.value)\">\r\n              <input type=\"submit\" class=\"btn btn-block btn-success\" [value]=\"'SaveChanges'|translate\"/>\r\n            </form>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-3 text-center profile-photo\">\r\n          <div>\r\n            <img [src]=\"profile.info.photo\" alt=\"your photo\"/>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 bold\">\r\n              <p>{{\"Name\"|translate}}</p>\r\n              <p>{{\"Age\"|translate}}</p>\r\n              <p>{{\"EmailAddress\"|translate}}</p>\r\n              <p>{{\"Contact\"|translate}}</p>\r\n              <p>{{\"Position\"|translate}}</p>\r\n              <p *ngIf=\"editDetail\">{{\"NewPhoto\"|translate}}</p>\r\n            </div>\r\n            <div class=\"col-lg-1\">\r\n              <p>:</p>\r\n              <p>:</p>\r\n              <p>:</p>\r\n              <p>:</p>\r\n              <p>:</p>\r\n              <p *ngIf=\"editDetail\">:</p>\r\n            </div>\r\n            <div class=\"col-lg-8\">\r\n              <div *ngIf=\"editDetail else detail\">\r\n                <form [formGroup]=\"profileForm\">\r\n                  <input class=\"form-control\" formControlName=\"name\" type=\"text\"/>\r\n                  <input class=\"form-control\" formControlName=\"dob\" type=\"text\"/>\r\n                  <input class=\"form-control\" formControlName=\"email\" type=\"text\"/>\r\n                  <input class=\"form-control\" formControlName=\"contact\" type=\"text\"/>\r\n                  <input class=\"form-control\" formControlName=\"position\" type=\"text\"/>\r\n                  <div class=\"row\">\r\n                    <div class=\"col-lg-8\">\r\n                      <input class=\"form-control\" type=\"file\" (change)=\"fileUpload($event,cropper)\" accept=\"image/*\" #fileInput/>\r\n                    </div>\r\n                    <div class=\"col-lg-4\">\r\n                      <!-- <img *ngIf=\"file else nofile\" [src]=\"file\" height=\"30px\" alt=\"image preview\"/>\r\n                      <ng-template #nofile>\r\n                        <p>{{\"NoPreview\"|translate}}</p>\r\n                      </ng-template> -->\r\n                    </div>\r\n                  </div>\r\n                </form>\r\n              </div>\r\n              <ng-template #detail>\r\n                <div>\r\n                  <p>{{profile.info.name}}</p>\r\n                  <p>{{profile.info.dob}}</p>\r\n                  <p>{{profile.email}}</p>\r\n                  <p>{{profile.info.contact}}</p>\r\n                  <p>{{profile.info.position}}</p>\r\n                </div>\r\n              </ng-template>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-3 text-center profile-photo\" style=\"border:none\">\r\n          <div *ngIf=\"file\">\r\n            <img src=\"{{file}}\">\r\n            <!-- <image-cropper\r\n              [imageChangedEvent]=\"imageChangedEvent\"\r\n              [maintainAspectRatio]=\"true\"\r\n              [aspectRatio]=\"4 / 3\"\r\n              [resizeToWidth]=\"128\"\r\n              format=\"png\"\r\n              (imageCropped)=\"imageCropped($event)\"\r\n            ></image-cropper> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <hr/>\r\n      <!-- table -->\r\n      <div>\r\n        <h2>{{\"AttachedProjects\"|translate}}</h2>\r\n        <div class=\"panel panel-default\">\r\n          <table class=\"table table-striped\" [mfData]=\"project\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n            <thead>\r\n              <tr>\r\n                <th style=\"width: 10%\">\r\n                  <mfDefaultSorter by=\"w_p_id\">{{\"ProjectID\"|translate}}</mfDefaultSorter>\r\n                </th>\r\n                <th style=\"width: 10%\">\r\n                  <mfDefaultSorter by=\"w_name\">{{\"ProjectName\"|translate}}</mfDefaultSorter>\r\n                </th>\r\n                <th style=\"width: 10%\">\r\n                  <mfDefaultSorter by=\"p_location\">{{\"ProjectLocation\"|translate}}</mfDefaultSorter>\r\n                </th>\r\n                <th style=\"width: 10%\">\r\n                  <mfDefaultSorter by=\"p_workers_number\">{{\"NumberOfWorkers\"|translate}}</mfDefaultSorter>\r\n                </th>\r\n                <th style=\"width: 10%\">\r\n                  <mfDefaultSorter by=\"p_injuries\">{{\"NumberOfFloor\"|translate}}</mfDefaultSorter>\r\n                </th>\r\n                <th style=\"width: 10%\">\r\n                  <mfDefaultSorter by=\"p_area\">{{\"Size\"|translate}}</mfDefaultSorter>\r\n                </th>\r\n                <th style=\"width: 10%\">\r\n                  <mfDefaultSorter by=\"p_admin\">{{\"ProjectManager\"|translate}}</mfDefaultSorter>\r\n                </th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let proj of mf.data\">\r\n                <td><a [routerLink]=\"['/projects',proj.p_id]\">{{proj.p_id}}</a></td>\r\n                <td>{{proj.p_data.p_name}}</td>\r\n                <td>{{proj.p_data.p_location}}</td>\r\n                <td>{{proj.workernum}}</td>\r\n                <td>{{proj.p_data.p_floor}}</td>\r\n                <td>{{proj.p_data.p_area}}</td>\r\n                <td>{{profile.id}}</td>            \r\n              </tr>\r\n            </tbody>\r\n            <tfoot>\r\n              <tr>\r\n                <td colspan=\"7\">\r\n                  <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n                </td>\r\n              </tr>\r\n            </tfoot>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"displayCheckForm\" class=\"modal\">\r\n        <div [ngClass]=\"{'modal-content':true}\">\r\n          <span class=\"close\" (click)=\"closeModalBox()\">&times;</span>\r\n          <form (ngSubmit)=checkPassword(checkForm.value) [formGroup]=\"checkForm\" class=\"form-group\">\r\n            <div>{{\"PleaseEnterPassword\" | translate}}: </div>\r\n            <div><input class=\"form-control\" formControlName=\"password\" type=\"password\" [placeholder]=\"'Password' | translate\" /></div>\r\n            <div *ngIf=\"editInvalid\" class=\"warn\"> {{\"InvalidCredential\" | translate}}</div>\r\n            <div class=\"padding-top row\">\r\n              <div class=\"col-lg-2 offset-lg-10\">\r\n                <button type=\"submit\" [disabled]=\"!checkForm.valid\" class=\"btn btn-block btn-success\">{{\"Submit\" | translate}}</button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- logout button -->\r\n  <div class=\"row\">\r\n    <div class=\"offset-lg-10 col-lg-2\">\r\n      <button class=\"btn btn-block btn-brown\" (click)=\"logout()\">{{\"Logout\"|translate}}</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/settings/settings.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bold {\n  font-weight: bold; }\n\np, h4 {\n  white-space: pre; }\n\n.rect-host {\n  width: 5px;\n  height: 35px;\n  background-color: #896e69;\n  display: inline;\n  position: absolute; }\n\n.rect {\n  width: 5px;\n  height: 40px;\n  background-color: #af9490;\n  display: inline;\n  position: absolute; }\n\n.close {\n  color: #aaa;\n  position: absolute;\n  right: 10px;\n  font-size: 28px;\n  font-weight: bold; }\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer; }\n\n.modal {\n  display: block;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 4;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */ }\n\n/* Modal Content/Box */\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto;\n  /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 50%;\n  /* Could be more or less, depending on screen size */ }\n\n.padding-top {\n  padding-top: 5px; }\n\n.profile-photo {\n  max-height: 25vh;\n  border-right: 1px solid;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.profile-photo > div > img {\n  height: auto;\n  max-height: 25vh;\n  width: auto;\n  max-width: 100%;\n  padding-right: 2.5%; }\n\n.warn {\n  background: #f2edda;\n  padding: 7px;\n  font-size: .9em;\n  margin-bottom: 20px;\n  display: inline-block;\n  -webkit-animation: 0.5s alertAnim forwards;\n          animation: 0.5s alertAnim forwards; }\n\n@-webkit-keyframes alertAnim {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n\n@keyframes alertAnim {\n  from {\n    opacity: 0;\n    -webkit-transform: translateY(-20px);\n            transform: translateY(-20px); }\n  to {\n    opacity: 1;\n    -webkit-transform: translateY(0);\n            transform: translateY(0); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_user__ = __webpack_require__("../../../../../src/app/component/login/user.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingsComponent = (function () {
    function SettingsComponent(tabService, authService, fb, callApi) {
        var _this = this;
        this.tabService = tabService;
        this.authService = authService;
        this.fb = fb;
        this.callApi = callApi;
        //edit button is clicked
        this.editDetail = false;
        this.indicationMessage = ["Success", "ProfileEditSuccessfully"];
        this.displayCheckForm = false;
        this.editInvalid = false;
        this.currentTab = "Profile";
        //initial settings for the table
        this.rowsOnPage = 5;
        this.sortBy = "w_id";
        this.sortOrder = "asc";
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.al = this.authService.getUserAccessLevel();
        this.tabService.currentProjectTab$.subscribe(function (tab) {
            //set currentTab to clicked tab from tab.services.
            _this.currentTab = tab;
        });
    }
    SettingsComponent.prototype.ngOnInit = function () {
        if (this.al == 3) {
            this.initData();
            this.checkForm = this.fb.group({
                password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]]
            });
        }
    };
    SettingsComponent.prototype.initData = function () {
        this.profile = this.authService.getUserData();
        console.log(this.profile);
        this.getAttachedList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].projectListAttached);
        this.profileForm = this.fb.group({
            name: [this.profile.info.name],
            dob: [this.profile.info.dob],
            email: [this.profile.email],
            contact: [this.profile.info.contact],
            position: [this.profile.info.position],
        });
    };
    SettingsComponent.prototype.editDetails = function () {
        this.editDetail = true;
    };
    //submit the edited data
    SettingsComponent.prototype.onSubmit = function (value) {
        value['id'] = this.profile.id;
        this.profileFormValue = value;
        console.log(this.profileFormValue);
        //do crosschecking for whether password input is valid
        //call a modal box to request for use input password
        this.displayCheckForm = true;
    };
    SettingsComponent.prototype.checkPassword = function (value) {
        var _this = this;
        this.checkForm.reset();
        value['id'] = this.profile.id;
        this.callApi.getData("" + __WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].authenticate + value['id'] + "/" + value['password'])
            .subscribe(function (response) {
            if (response.length > 0 && response[0].u_id == _this.profile.id) {
                _this.callApi.postWithFile("" + __WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].editProfile, _this.profileFormValue, _this.photo)
                    .subscribe(function (response) {
                    // console.log(response);
                    _this.editDetail = false;
                    _this.formSubmitted = true;
                    _this.displayCheckForm = false;
                    _this.editInvalid = false;
                    _this.file = null;
                    //re-retrieve user data
                    var user = new __WEBPACK_IMPORTED_MODULE_4__login_user__["a" /* User */]();
                    var cred = {
                        id: _this.profileFormValue.email,
                        pw: value['password']
                    };
                    // .subscribe(data=>{});
                    // this.callApi.getData(`${}${}/${}`)
                    _this.callApi.postLoginData(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].loginCredential, JSON.stringify(cred))
                        .subscribe(function (response) {
                        response = response[0];
                        console.log(response);
                        // uncomment when jwt is ready
                        if (response && response.jwt_token) {
                            console.log("valid");
                            localStorage.setItem('token', response.jwt_token);
                            _this.authService.refreshCurrentUser();
                            _this.initData();
                        }
                        // let userData=[];
                        // userData=response;
                        // if(userData[0] == null){
                        // 	console.log("userData is empty"+userData);
                        // }else{
                        // 	// uncomment when jwt is ready
                        // 	//save the login credentials to the sessionStorage
                        // 	sessionStorage.setItem('currentUser', JSON.stringify(userData));
                        // 	this.authService.setUserData(userData);
                        // 	this.initData();
                        // }
                    });
                });
            }
            else {
                _this.editInvalid = true;
            }
        });
    };
    SettingsComponent.prototype.closeModalBox = function () {
        this.displayCheckForm = false;
    };
    SettingsComponent.prototype.logout = function () {
        this.authService.logout();
    };
    SettingsComponent.prototype.getAttachedList = function (url) {
        var _this = this;
        this.callApi.getData(url + "/" + this.profile.id)
            .subscribe(function (data) {
            _this.project = data;
            for (var i = 0; i < _this.project.length; i++) {
                _this.project[i]['p_admin'] = _this.profile.u_name;
            }
        });
    };
    SettingsComponent.prototype.fileUpload = function (event) {
        var _this = this;
        console.log(event);
        //preview
        if (event.target.files && event.target.files[0] && this.isImage(event)) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = function (event) {
                _this.file = event.target.result;
            };
            this.photo = event.srcElement.files;
            this.imageChangedEvent = event;
            console.log(this.photo);
        }
        else {
            alert("Please upload image only");
            this.fileInput.nativeElement.value = "";
            this.file = null;
            this.photo = null;
        }
    };
    SettingsComponent.prototype.isImage = function (event) {
        var file = event.target.files[0];
        var fileType = file["type"];
        fileType = fileType.split("/");
        if (fileType[0] == "image") {
            return true;
        }
        return false;
    };
    SettingsComponent.prototype.imageCropped = function (image) {
        var img = new Image();
        img.src = image;
        // console.log(img);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], SettingsComponent.prototype, "fileInput", void 0);
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/component/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/settings/settings.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["f" /* TabService */],
            __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1__shared_services__["c" /* CallApiService */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/site-supervisor/add-site-supervisor/add-site-supervisor.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{\"AddNewSupervisor\"|translate}}</h1>\r\n<app-form [formData]=\"supervisorForm\" *ngIf=\"supervisorForm\" (formSubmitSuccess)=\"formSubmit($event)\"></app-form>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/site-supervisor/add-site-supervisor/add-site-supervisor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/site-supervisor/add-site-supervisor/add-site-supervisor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddSiteSupervisorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddSiteSupervisorComponent = (function () {
    function AddSiteSupervisorComponent(fb) {
        this.fb = fb;
        this.formSubmitSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.group = this.fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8)]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(15)]],
            position: ['Supervisor'],
            projectID: [''],
            dob: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
            photo: [''],
            blood: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__shared_services__["d" /* CustomValidators */].validateBloodType, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(3)]],
            emergencyContactName: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
            emergencyContactPhone: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(15)]],
            height: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].min(0), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].max(280)]],
            weight: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].min(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].max(200)]],
            devid: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]]
        });
    }
    AddSiteSupervisorComponent.prototype.ngOnInit = function () {
        this.constructSupervisorForm();
    };
    AddSiteSupervisorComponent.prototype.formSubmit = function (event) {
        console.log("add-supervisor form submitted successfully? " + event);
        this.formSubmitSuccess.emit(event);
    };
    AddSiteSupervisorComponent.prototype.constructSupervisorForm = function () {
        this.supervisorForm = [
            {
                form_group: this.group,
                submit_url: __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].addSupervisor,
                contain_image: true,
                button_name: "Add",
                form_control_names: [
                    {
                        "input_name": "Name",
                        "form_control_name": "name",
                        "type": { type: "text", options: [], accept: "" },
                        "placeholder": "ExampleName",
                        "error_message": "NameError"
                    },
                    {
                        "input_name": "EmailAddress",
                        "form_control_name": "email",
                        "type": { type: "email", options: [], accept: "" },
                        "placeholder": "ExampleEmail",
                        "error_message": "EmailError"
                    },
                    {
                        "input_name": "Password",
                        "form_control_name": "password",
                        "type": { type: "password", options: [], accept: "" },
                        "placeholder": "",
                        "error_message": "RequiredError"
                    },
                    {
                        "input_name": "PhoneNumber",
                        "form_control_name": "phone",
                        "type": { type: "text", options: [], accept: "" },
                        "placeholder": "ExamplePhone",
                        "error_message": "RequiredError"
                    },
                    {
                        "input_name": "ProjectID",
                        "form_control_name": "projectID",
                        "special": { type: "select", url: __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].projectListOngoing, kind: "project", var_loc: 1 },
                        "type": { type: "text", options: [], accept: "" },
                        "placeholder": "",
                        "error_message": "RequiredError"
                    },
                    {
                        "input_name": "DOB",
                        "form_control_name": "dob",
                        "special": { type: "date" },
                        "type": { type: "text", options: [], accept: "" },
                        "placeholder": "",
                        "error_message": "RequiredError"
                    },
                    {
                        "input_name": "Photo",
                        "form_control_name": "photo",
                        "type": { type: "file", options: [], accept: "image/*" },
                        "placeholder": "",
                        "error_message": ""
                    },
                    {
                        "input_name": "Blood",
                        "form_control_name": "blood",
                        "special": { type: "blood", var_loc: 0 },
                        "type": { type: "text", options: [], accept: "" },
                        "placeholder": "",
                        "error_message": "RequiredError"
                    },
                    {
                        "input_name": "emergencyContactName",
                        "form_control_name": "emergencyContactName",
                        "type": { type: "text", options: [], accept: "" },
                        "placeholder": "",
                        "error_message": "RequiredError"
                    },
                    {
                        "input_name": "emergencyContactPhone",
                        "form_control_name": "emergencyContactPhone",
                        "type": { type: "text", options: [], accept: "" },
                        "placeholder": "",
                        "error_message": "RequiredError"
                    },
                    {
                        "input_name": "Height",
                        "form_control_name": "height",
                        "type": { type: "number", options: [], accept: "" },
                        "placeholder": "",
                        "error_message": "RequiredError"
                    },
                    {
                        "input_name": "Weight",
                        "form_control_name": "weight",
                        "type": { type: "number", options: [], accept: "" },
                        "placeholder": "",
                        "error_message": "RequiredError"
                    },
                    {
                        "input_name": "DeviceID",
                        "form_control_name": "devid",
                        "type": { type: "text", options: [], accept: "" },
                        "placeholder": "",
                        "error_message": "RequiredError"
                    },
                ]
                // form_control_names:[
                // 	{
                // 		"input_name":"Name",
                // 		"form_control_name":"name",
                // 		"type":{type:"text",options:[],accept:""},
                // 		"placeholder":"ExampleName",
                // 		"error_message":"NameError"
                // 	},{
                // 		"input_name":"EmailAddress",
                // 		"form_control_name":"email",
                // 		"type":{type:"email",options:[],accept:""},
                // 		"placeholder":"ExampleEmail",
                // 		"error_message":"EmailError"
                // 	},{
                // 		"input_name":"Password",
                // 		"form_control_name":"password",
                // 		"type":{type:"password",options:[],accept:""},
                // 		"placeholder":"",
                // 		"error_message":"PasswordError"
                // 	},{
                // 		"input_name":"CompanyID",
                // 		"form_control_name":"companyID",
                // 		"type":{type:"text",options:[],accept:""},
                // 		"placeholder":"",
                // 		"error_message":"RequiredError"
                // 	},{
                // 		"input_name":"Contact",
                // 		"form_control_name":"phone",
                // 		"type":{type:"text",options:[],accept:""},
                // 		"placeholder":"ExamplePhone",
                // 		"error_message":"ContactError"
                // 	},{
                // 		"input_name":"Photo",
                // 		"form_control_name":"photo",
                // 		"type":{type:"file",options:[],accept:"image/*"},
                // 		"placeholder":"",
                // 		"errorMessage":""
                // 	}
                // ]
            }
        ];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], AddSiteSupervisorComponent.prototype, "formSubmitSuccess", void 0);
    AddSiteSupervisorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-add-site-supervisor',
            template: __webpack_require__("../../../../../src/app/component/site-supervisor/add-site-supervisor/add-site-supervisor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/site-supervisor/add-site-supervisor/add-site-supervisor.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], AddSiteSupervisorComponent);
    return AddSiteSupervisorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/site-supervisor/edit-site-supervisor/edit-site-supervisor.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>{{\"EditSupervisor\"|translate}}</h1>\r\n<app-form [formData]=\"editSupervisorForm\" *ngIf=\"editSupervisorForm\" (formSubmitSuccess)=\"formSubmit($event)\"></app-form>"

/***/ }),

/***/ "../../../../../src/app/component/site-supervisor/edit-site-supervisor/edit-site-supervisor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/site-supervisor/edit-site-supervisor/edit-site-supervisor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditSiteSupervisorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditSiteSupervisorComponent = (function () {
    function EditSiteSupervisorComponent(fb) {
        this.fb = fb;
        this.formSubmitSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    EditSiteSupervisorComponent.prototype.ngOnInit = function () {
        console.log(this.supervisorToBeEdit);
        this.group = this.fb.group({
            id: [this.supervisorToBeEdit.u_id],
            name: [this.supervisorToBeEdit.u_name, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
            email: [this.supervisorToBeEdit.u_email, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8)]],
            phone: [this.supervisorToBeEdit.u_contact, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(15)]],
            position: ['Supervisor'],
            projectID: [''],
            dob: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
            photo: [''],
            blood: [this.supervisorToBeEdit.u_blood, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2__shared_services__["d" /* CustomValidators */].validateBloodType, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(3)]],
            emergencyContactName: [this.supervisorToBeEdit.u_emName, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
            emergencyContactPhone: [this.supervisorToBeEdit.u_emContact, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(15)]],
            height: [this.supervisorToBeEdit.u_height, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].min(0), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].max(280)]],
            weight: [this.supervisorToBeEdit.u_weight, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].min(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].max(200)]]
        });
        this.constructSupervisorForm();
    };
    EditSiteSupervisorComponent.prototype.formSubmit = function (event) {
        console.log("add-admin form submitted successfully? " + event);
        this.formSubmitSuccess.emit(event);
    };
    EditSiteSupervisorComponent.prototype.constructSupervisorForm = function () {
        this.editSupervisorForm = [
            {
                form_group: this.group,
                submit_url: __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].updateSupervisor,
                contain_image: true,
                button_name: "Edit",
                form_control_names: [
                    {
                        "input_name": "Name",
                        "form_control_name": "name",
                        "type": { type: "text", options: [], accept: "" },
                        "placeholder": "ExampleName",
                        "error_message": "NameError"
                    },
                    {
                        "input_name": "EmailAddress",
                        "form_control_name": "email",
                        "type": { type: "email", options: [], accept: "" },
                        "placeholder": "ExampleEmail",
                        "error_message": "EmailError"
                    },
                    {
                        "input_name": "Password",
                        "form_control_name": "password",
                        "type": { type: "password", options: [], accept: "" },
                        "placeholder": "",
                        "error_message": "RequiredError"
                    },
                    {
                        "input_name": "PhoneNumber",
                        "form_control_name": "phone",
                        "type": { type: "text", options: [], accept: "" },
                        "placeholder": "ExamplePhone",
                        "error_message": "RequiredError"
                    },
                    {
                        "input_name": "ProjectID",
                        "form_control_name": "projectID",
                        "special": { type: "select", url: __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].projectListOngoing, kind: "project", var_loc: 1 },
                        "type": { type: "text", options: [], accept: "" },
                        "placeholder": "",
                        "error_message": "RequiredError"
                    },
                    {
                        "input_name": "DOB",
                        "form_control_name": "dob",
                        "special": { type: "date" },
                        "type": { type: "text", options: [], accept: "" },
                        "placeholder": "",
                        "error_message": "RequiredError"
                    },
                    {
                        "input_name": "Photo",
                        "form_control_name": "photo",
                        "type": { type: "file", options: [], accept: "image/*" },
                        "placeholder": "",
                        "error_message": ""
                    },
                    {
                        "input_name": "Blood",
                        "form_control_name": "blood",
                        "special": { type: "blood", var_loc: 0 },
                        "type": { type: "text", options: [], accept: "" },
                        "placeholder": "",
                        "error_message": "RequiredError"
                    },
                    {
                        "input_name": "emergencyContactName",
                        "form_control_name": "emergencyContactName",
                        "type": { type: "text", options: [], accept: "" },
                        "placeholder": "",
                        "error_message": "RequiredError"
                    },
                    {
                        "input_name": "emergencyContactPhone",
                        "form_control_name": "emergencyContactPhone",
                        "type": { type: "text", options: [], accept: "" },
                        "placeholder": "",
                        "error_message": "RequiredError"
                    },
                    {
                        "input_name": "Height",
                        "form_control_name": "height",
                        "type": { type: "number", options: [], accept: "" },
                        "placeholder": "",
                        "error_message": "RequiredError"
                    },
                    {
                        "input_name": "Weight",
                        "form_control_name": "weight",
                        "type": { type: "number", options: [], accept: "" },
                        "placeholder": "",
                        "error_message": "RequiredError"
                    }
                ]
                // form_control_names:[
                // 	{
                // 		"input_name":"Name",
                // 		"form_control_name":"name",
                // 		"type":{type:"text",options:[],accept:""},
                // 		"placeholder":"ExampleName",
                // 		"error_message":"NameError"
                // 	},{
                // 		"input_name":"EmailAddress",
                // 		"form_control_name":"email",
                // 		"type":{type:"email",options:[],accept:""},
                // 		"placeholder":"ExampleEmail",
                // 		"error_message":"EmailError"
                // 	},{
                // 		"input_name":"Password",
                // 		"form_control_name":"password",
                // 		"type":{type:"password",options:[],accept:""},
                // 		"placeholder":"",
                // 		"error_message":"PasswordError"
                // 	},{
                // 		"input_name":"CompanyID",
                // 		"form_control_name":"companyID",
                // 		"type":{type:"text",options:[],accept:""},
                // 		"placeholder":"",
                // 		"error_message":"RequiredError"
                // 	},{
                // 		"input_name":"Contact",
                // 		"form_control_name":"phone",
                // 		"type":{type:"text",options:[],accept:""},
                // 		"placeholder":"ExamplePhone",
                // 		"error_message":"ContactError"
                // 	},{
                // 		"input_name":"Photo",
                // 		"form_control_name":"photo",
                // 		"type":{type:"file",options:[],accept:"image/*"},
                // 		"placeholder":"",
                // 		"errorMessage":""
                // 	}
                // ]
            }
        ];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], EditSiteSupervisorComponent.prototype, "supervisorToBeEdit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], EditSiteSupervisorComponent.prototype, "formSubmitSuccess", void 0);
    EditSiteSupervisorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-edit-site-supervisor',
            template: __webpack_require__("../../../../../src/app/component/site-supervisor/edit-site-supervisor/edit-site-supervisor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/site-supervisor/edit-site-supervisor/edit-site-supervisor.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], EditSiteSupervisorComponent);
    return EditSiteSupervisorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/site-supervisor/site-supervisor.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t\r\n    <app-feedback [(showFeedback)]=\"addFormSubmitted\" [message]=\"addFormIndicationMessage\"></app-feedback>\r\n    <app-feedback [(showFeedback)]=\"editFormSubmitted\" [message]=\"addFormIndicationMessage\"></app-feedback>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6\">\r\n        <h1>{{\"Supervisor\"|translate}}</h1>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"offset-lg-5 col-lg-2\">\r\n        <button class=\"btn btn-block btn-success\" (click)=\"openAddModalBox()\">{{\"Add\"|translate}}</button>\r\n      </div>\r\n      <div class=\"col-lg-5\">\r\n        <div class=\"form-group\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"filterQuery\" [placeholder]=\"'EnterSupervisorIDorUserName'|translate\">\r\n        </div>\r\n      </div>\r\n      </div>\r\n      <div class=\"panel panel-default\" *ngIf=\"supervisors\">\r\n      <table class=\"table table-striped\" [mfData]=\"supervisors|dataFilter:filterQuery:'supervisors'\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n        <thead>\r\n        <tr>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"u_id\">{{\"ID\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 20%\">\r\n            <mfDefaultSorter by=\"u_email\">{{\"Username\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 20%\">\r\n            <mfDefaultSorter by=\"u_name\">{{\"Name\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 20%\">\r\n              <mfDefaultSorter by=\"company_id\">{{\"CompanyID\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 10%\">\r\n              <mfDefaultSorter by=\"u_contact\">{{\"Contact\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"\"></mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"\"></mfDefaultSorter>\r\n          </th>\r\n        \r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr *ngFor=\"let supervisor of mf.data\">\r\n          <td>{{supervisor.u_id}}</td>\r\n          <td>{{supervisor.u_email}}</td>\r\n          <td>{{supervisor.u_name}}</td>\r\n          <td>{{supervisor.company_id}}</td>\r\n          <td>{{supervisor.u_contact}}</td>\r\n          <td><button class=\"btn btn-block btn-warning\" (click)=\"editSupervisor(supervisor)\">Edit</button></td>\r\n          <td><button class=\"btn btn-block btn-danger\" (click)=\"deleteSupervisor(supervisor.u_id)\">Delete</button></td>\r\n          </tr>\r\n        </tbody>\r\n        <tfoot>\r\n        <tr>\r\n          <td colspan=\"7\">\r\n          <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n          </td>\r\n        </tr>\r\n        </tfoot>\r\n      </table>\r\n      </div>\r\n      <app-loading [apiCallFinish]=\"supervisors\"></app-loading>\t\t\r\n  </div>\r\n  \r\n  <!-- modal box to add superuser -->\r\n  <div *ngIf=\"displayAddModel\" class=\"modal\">\r\n    <div [ngClass]=\"{'modal-content':true}\">\r\n      <span class=\"close\" (click)=\"closeAddModalBox()\">&times;</span>\r\n        <app-add-site-supervisor (formSubmitSuccess)=\"addFormSubmit($event)\"></app-add-site-supervisor>\r\n    </div>\r\n  </div>\r\n  \r\n  <!-- modal box to edit superuser -->\r\n  <div *ngIf=\"displayEditModel\" class=\"modal\">\r\n    <div [ngClass]=\"{'modal-content':true}\">\r\n      <span class=\"close\" (click)=\"closeEditModalBox()\">&times;</span>\r\n        <app-edit-site-supervisor (formSubmitSuccess)=\"editFormSubmit($event)\" [supervisorToBeEdit]=\"supervisorEdit\"></app-edit-site-supervisor>\r\n    </div>\r\n  </div>\r\n  "

/***/ }),

/***/ "../../../../../src/app/component/site-supervisor/site-supervisor.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".modal {\n  display: block;\n  /* Hidden by default */\n  position: fixed;\n  /* Stay in place */\n  z-index: 4;\n  /* Sit on top */\n  left: 0;\n  top: 0;\n  width: 100%;\n  /* Full width */\n  height: 100%;\n  /* Full height */\n  overflow: auto;\n  /* Enable scroll if needed */\n  background-color: black;\n  /* Fallback color */\n  background-color: rgba(0, 0, 0, 0.4);\n  /* Black w/ opacity */ }\n\n/* Modal Content/Box */\n.modal-content {\n  background-color: #fefefe;\n  margin: 5% auto;\n  /* 15% from the top and centered */\n  padding: 20px;\n  border: 1px solid #888;\n  width: 50%;\n  /* Could be more or less, depending on screen size */ }\n\n/* The Close Button */\n.close {\n  color: #aaa;\n  position: absolute;\n  right: 10px;\n  font-size: 28px;\n  font-weight: bold; }\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/site-supervisor/site-supervisor.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SiteSupervisorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SiteSupervisorComponent = (function () {
    function SiteSupervisorComponent(callApi, reloadService) {
        var _this = this;
        this.callApi = callApi;
        this.reloadService = reloadService;
        this.addFormSubmitted = false;
        this.editFormSubmitted = false;
        this.displayAddModel = false;
        this.displayEditModel = false;
        //configuration for feedback message
        this.addFormIndicationMessage = ["Success", "NewSupervisorFormsIsSubmitted"];
        this.editFormIndicationMessage = ["Success", "ProfileEditSuccessfully"];
        // configuratoin for data table
        this.rowsOnPage = 10;
        this.sortBy = "";
        this.sortOrder = "";
        this.filterQuery = "";
        this.reloadService.reload$.subscribe(function (reload) {
            if (reload) {
                // console.log("reload employees");
                _this.supervisors = null;
                //reload list when new employee is added
                setTimeout(function () { return _this.getSupervisorsList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].supervisorList); }, 2000);
            }
        });
    }
    SiteSupervisorComponent.prototype.ngOnInit = function () {
        this.getSupervisorsList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].supervisorList);
    };
    SiteSupervisorComponent.prototype.getSupervisorsList = function (url) {
        var _this = this;
        this.callApi.getData(url)
            .subscribe(function (data) {
            _this.supervisors = data;
        });
    };
    //accept eventEmitter to let use know form submitted
    SiteSupervisorComponent.prototype.addFormSubmit = function (event) {
        this.closeAddModalBox();
        this.addFormSubmitted = event;
    };
    SiteSupervisorComponent.prototype.editFormSubmit = function (event) {
        this.closeEditModalBox();
        this.editFormSubmitted = event;
    };
    SiteSupervisorComponent.prototype.editSupervisor = function (supervisor) {
        this.supervisorEdit = supervisor;
        this.openEditModalBox();
        console.log("Edit " + "supervisor" + " is clicked");
    };
    SiteSupervisorComponent.prototype.deleteSupervisor = function (supervisorID) {
        var _this = this;
        console.log("Delete " + supervisorID + " is clicked");
        var removeData = { u_id: supervisorID };
        this.callApi.postData(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].removeSupervisor, JSON.stringify(removeData))
            .subscribe(function (data) {
            console.log("deleted " + supervisorID);
            console.log(data);
            _this.reloadService.setReload();
        });
    };
    SiteSupervisorComponent.prototype.openAddModalBox = function () {
        this.displayAddModel = true;
    };
    SiteSupervisorComponent.prototype.closeAddModalBox = function () {
        this.displayAddModel = false;
    };
    SiteSupervisorComponent.prototype.openEditModalBox = function () {
        this.displayEditModel = true;
    };
    SiteSupervisorComponent.prototype.closeEditModalBox = function () {
        this.displayEditModel = false;
    };
    SiteSupervisorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-site-supervisor',
            template: __webpack_require__("../../../../../src/app/component/site-supervisor/site-supervisor.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/site-supervisor/site-supervisor.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["c" /* CallApiService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services__["b" /* ApiReloadService */]])
    ], SiteSupervisorComponent);
    return SiteSupervisorComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layouts/home-layout/home-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header sticky-position\" style=\"overflow:hidden\">\r\n\t<app-header (onShow)=\"onShow($event)\"></app-header>\r\n</div>\r\n<!-- [@showIt] and [@move] is animation trigger -->\r\n<app-sidenav [@showIt]=\"show\" [show]=\"show\"></app-sidenav>\r\n<div [@move]=\"move\">\r\n    <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/layouts/home-layout/home-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeLayoutComponent = (function () {
    function HomeLayoutComponent() {
        this.show = 'showAll';
        this.move = 'sideBarWithDesc';
    }
    HomeLayoutComponent.prototype.ngOnInit = function () {
    };
    //for changng the sidebar state and content state to trigger animation
    HomeLayoutComponent.prototype.onShow = function (show) {
        //show manage the animation of the content
        this.show = show;
        //move manage the animation of the sidebar
        this.move = this.move === 'sideBarWithDesc' ? 'sideBarWithIcon' : 'sideBarWithDesc';
    };
    HomeLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home-layout',
            template: __webpack_require__("../../../../../src/app/layouts/home-layout/home-layout.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: ['./home-layout.scss'],
            animations: [
                //animation of sidebar
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('showIt', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('showAll', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                        transform: 'translate3D(0,0,0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('showIcon', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                        transform: 'translate3D(-60%,0,0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('showAll=>showIcon', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms ease-in-out')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('showIcon=>showAll', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms ease-in-out'))
                ]),
                //animation of content when sidebar move
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('move', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('sideBarWithDesc', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                        padding: "0 0 0 200px"
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('sideBarWithIcon', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                        padding: "0 0 0 80px"
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('sideBarWithDesc=>sideBarWithIcon', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms ease-in-out')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('sideBarWithIcon=>sideBarWithDesc', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms ease-in-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [])
    ], HomeLayoutComponent);
    return HomeLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layouts/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_layout_home_layout_component__ = __webpack_require__("../../../../../src/app/layouts/home-layout/home-layout.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_layout_home_layout_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_layout_login_layout_component__ = __webpack_require__("../../../../../src/app/layouts/login-layout/login-layout.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__login_layout_login_layout_component__["a"]; });




/***/ }),

/***/ "../../../../../src/app/layouts/login-layout/login-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginLayoutComponent = (function () {
    function LoginLayoutComponent() {
    }
    LoginLayoutComponent.prototype.ngOnInit = function () {
    };
    LoginLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login-layout',
            template: "\n    <router-outlet></router-outlet>\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], LoginLayoutComponent);
    return LoginLayoutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/auth/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/shared/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthGuard = (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        return this.authService.isLoggedIn
            .take(1)
            .map(function (isLoggedIn) {
            if (isLoggedIn) {
                return true;
            }
            else {
                _this.router.navigate(['/login']);
                return false;
            }
        });
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/shared/auth/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    function AuthService(router, callApi) {
        this.router = router;
        this.callApi = callApi;
        this.loggedIn = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.logoutWhenTokenExpired();
        var token = localStorage.getItem('token');
        if (token != null) {
            var jwt = new __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["JwtHelper"]();
            this.currentUser = (jwt.decodeToken(token));
            if (this.currentUser != null) {
                this.loggedIn.next(true);
            }
        }
    }
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        // private userData:any[];
        get: function () {
            return this.loggedIn.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.logoutWhenTokenExpired = function () {
        var token = localStorage.getItem('token');
        if (token != null) {
            var jwt = new __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["JwtHelper"]();
            if (jwt.isTokenExpired(token)) {
                alert("Your session expired, please login again");
                this.logout();
            }
        }
    };
    AuthService.prototype.login = function (user) {
        if (user.username !== '' && user.password != '') {
            // this.getCredential(`${ApiCmd.loginCredential}u/${user.username}/p/${user.password}`);
            // console.log(sha256(user.password));
            // testing
            // let jwt = new JwtHelper();
            // console.log("fake jwt");
            // console.log(jwt.decodeToken(this.fakejwt));
            this.getCredential(__WEBPACK_IMPORTED_MODULE_4__shared_services__["a" /* ApiCmd */].loginCredential, user);
        }
        else {
            this.loggedIn.next(false);
        }
    };
    //login directly if cache have this infomation
    AuthService.prototype.checkStorage = function () {
        // uncomment when jwt is ready
        this.logoutWhenTokenExpired();
        var token = localStorage.getItem('token');
        if (token != null) {
            var jwt = new __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["JwtHelper"]();
            this.currentUser = (jwt.decodeToken(token));
            if (this.currentUser != null) {
                this.loggedIn.next(true);
                if (this.getUserAccessLevel() == 1) {
                    this.router.navigate(['/admin']);
                }
                else {
                    this.router.navigate(['/']);
                }
            }
        }
        // console.log(this.userData);
        // if(this.userData!=null){
        //     this.loggedIn.next(true);
        //     if(this.getUserAccessLevel()==1){
        //       this.router.navigate(['/admin']);
        //     }else{
        //       this.router.navigate(['/']);      
        //     }
        // }
    };
    AuthService.prototype.setUserData = function (userData) {
        // uncomment when jwt is ready
        this.currentUser = userData;
        // this.userData = userData;
    };
    AuthService.prototype.getUserData = function () {
        // uncomment when jwt is ready    
        return this.currentUser;
        // return this.userData[0];
    };
    AuthService.prototype.refreshCurrentUser = function () {
        var jwt = new __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["JwtHelper"]();
        this.currentUser = jwt.decodeToken(localStorage.getItem('token'));
    };
    AuthService.prototype.getUserAccessLevel = function () {
        // uncomment when jwt is ready    
        return this.currentUser.al;
        // return this.userData[0].al;
    };
    // Get the data based on the credential
    AuthService.prototype.getCredential = function (url, user) {
        var _this = this;
        // this.callApi.getData(url)
        var cred = {
            id: user.username,
            pw: user.password
        };
        this.callApi.postLoginData(url, JSON.stringify(cred))
            .subscribe(function (data) {
            // let result = response.json();
            _this.currentUser = [];
            data = data[0];
            console.log(data);
            // uncomment when jwt is ready
            if (data && data.jwt_token) {
                console.log(data.jwt_token);
                localStorage.setItem('token', data.jwt_token);
                var jwt = new __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["JwtHelper"]();
                _this.currentUser = jwt.decodeToken(localStorage.getItem('token'));
                // wrong password or username
                if (_this.currentUser.id == null) {
                    _this.loggedIn.next(false);
                    return false;
                }
                _this.loggedIn.next(true);
                if (_this.getUserAccessLevel() == 1) {
                    _this.router.navigate(['/admin']);
                }
                else {
                    _this.router.navigate(['/']);
                }
                return true;
            }
            else {
                console.log("currentUser is empty" + _this.currentUser);
                _this.loggedIn.next(false);
                return false;
            }
            // this.userData=[];
            // this.userData=data;
            // if(this.userData[0] == null){
            //       console.log("userData is empty"+this.userData);
            //       this.loggedIn.next(false);
            //   }else{
            //     //save the login credentials to the sessionStorage
            //     sessionStorage.setItem('currentUser', JSON.stringify(this.userData));
            //     this.loggedIn.next(true);
            //     console.log(this.getUserAccessLevel());
            //     if(this.getUserAccessLevel()==1){
            //       this.router.navigate(['/admin']);
            //     }else{
            //       this.router.navigate(['/']);
            //     }
            //   }
        });
    };
    AuthService.prototype.logout = function () {
        // uncomment when jwt is ready    
        localStorage.removeItem('token');
        this.currentUser = null;
        // this.userData=[];
        // sessionStorage.removeItem("currentUser");                          
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
        this.callApi.logout();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__shared_services__["c" /* CallApiService */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/auth/user-access-auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAccessAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__("../../../../../src/app/shared/auth/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserAccessAuthGuard = (function () {
    function UserAccessAuthGuard(pageArrayService, authService, router) {
        this.pageArrayService = pageArrayService;
        this.authService = authService;
        this.router = router;
    }
    UserAccessAuthGuard.prototype.canActivate = function (route, state) {
        var userAccessLevel = this.authService.getUserAccessLevel();
        console.log(userAccessLevel);
        var page = route.data.page;
        var pages = this.pageArrayService.getPagesArray();
        // 1 = system admin (mdt)
        // 2 = superuser
        // 3 = project
        switch (userAccessLevel) {
            case 1:
                if (page == pages[7] || page == pages[8] || page == pages[6])
                    return true;
                break;
            case 2:
                if (page == pages[0] || page == pages[1] || page == pages[2] || page == pages[3] || page == pages[4] || page == pages[5] || page == pages[6] || page == pages[9])
                    return true;
                break;
            case 3:
                if (page == pages[0] || page == pages[1] || page == pages[2] || page == pages[3] || page == pages[4] || page == pages[5] || page == pages[6])
                    return true;
                break;
        }
        this.router.navigate(['/no-access']);
        return false;
    };
    UserAccessAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services__["e" /* PagesArrayService */],
            __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], UserAccessAuthGuard);
    return UserAccessAuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/shared/card/card.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"padding-top:10px\">\r\n  <div class=\"boxshadow\">\r\n    <div class=\"content\" style=\"overflow-x:hidden; overflow-y:hidden\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/card/card.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".boxshadow {\n  position: relative;\n  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);\n  padding: 10px;\n  background: #fafafa !important;\n  z-index: 1;\n  border-radius: 5px;\n  /*box-shadow: 5px 5px rgba(172, 151, 67, 0.5);*/\n  /*padding:2px;*/ }\n  .boxshadow::after {\n    content: '';\n    position: absolute;\n    z-index: 0;\n    /* hide shadow behind image */\n    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);\n    width: 70%;\n    left: 15%;\n    /* one half of the remaining 30% */\n    height: 10px;\n    bottom: 0px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/card/card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    CardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-card',
            template: __webpack_require__("../../../../../src/app/shared/card/card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/card/card.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/feedback/feedback.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-success alert-dismissable\" *ngIf=\"showFeedback&&message\">\r\n  <button type=\"button\" class=\"close\" data-dismiss=\"alert\" (click)=\"closeAlert()\">&times;</button>\r\n  <strong>{{message[0]|translate}}!</strong> {{message[1]|translate}}\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/feedback/feedback.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* The Close Button */\n.close {\n  color: #aaa;\n  position: absolute;\n  right: 10px;\n  font-size: 28px;\n  font-weight: bold; }\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/feedback/feedback.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedbackComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeedbackComponent = (function () {
    function FeedbackComponent() {
        this.showFeedback = false;
        this.showFeedbackChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FeedbackComponent.prototype.ngOnInit = function () {
    };
    FeedbackComponent.prototype.ngOnChanges = function (simpleChange) {
        var _this = this;
        if (simpleChange['showFeedback']) {
            console.log(this.showFeedback);
            console.log(this.message);
            if (this.showFeedback)
                setTimeout(function () { return _this.closeAlert(); }, 5000);
            // this.show=this.showFeedback;
        }
    };
    // showAlert(){
    //   this.show=true;
    //   setTimeout(()=>this.closeAlert(),5000);
    // }
    //function to close the notification alert
    FeedbackComponent.prototype.closeAlert = function () {
        this.showFeedback = null;
        this.showFeedbackChange.emit(this.showFeedback);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], FeedbackComponent.prototype, "showFeedback", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], FeedbackComponent.prototype, "showFeedbackChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], FeedbackComponent.prototype, "message", void 0);
    FeedbackComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-feedback',
            template: __webpack_require__("../../../../../src/app/shared/feedback/feedback.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/feedback/feedback.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FeedbackComponent);
    return FeedbackComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  footer works!\r\n</p>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/form/form.component.html":
/***/ (function(module, exports) {

module.exports = "<form *ngIf=\"formForm\" (ngSubmit)=\"onSubmit(formForm.value)\" [formGroup]=\"formForm\" novalidate>\r\n    <div class=\"padding-top row form-group\" *ngFor=\"let d of data\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{d['input_name']|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\" *ngIf=\"d['type']['type']!='file';else containImage\">\r\n        <!-- Normal -->\r\n        <input class=\"form-control\" *ngIf=\"!d['special']\" [formControlName]=\"d['form_control_name']\" [type]=\"d['type']['type']\" [placeholder]=\"d['placeholder']|translate\" />\r\n        \r\n        <!-- Dropdown list -->\r\n        <div *ngIf=\"d['special']?.type=='select'||d['special']?.type=='blood'\">\r\n          <ng-select [allowClear]=\"true\"\r\n            [items]=\"itemsArray[d['special']['var_loc']]\"\r\n            (selected)=\"selected(d['form_control_name'],$event)\" *ngIf=\"itemsArray[d['special']['var_loc']][0]!=null\"\r\n            [placeholder]=\"d['placeholder']|translate\">\r\n          </ng-select>\r\n        </div>\r\n\r\n        <!-- Date -->\r\n        <div *ngIf=\"d['special']?.type=='date'\">\r\n          <input type=\"text\"\r\n             class=\"form-control\"\r\n             id = \"startDate\"\r\n             #dp=\"bsDatepicker\"\r\n             bsConfig=\"{ containerClass: 'theme-default', /*locale: 'en-gb',*/ showWeekNumbers: false, dateInputFormat: 'YYYY/MM/DD ' }\"\r\n             bsDatepicker\r\n             [formControlName]=\"d['form_control_name']\">\r\n        </div>\r\n\r\n        <div class=\"warn\" *ngIf=\"!formForm.controls[d['form_control_name']].valid&&formForm.controls[d['form_control_name']].touched\">{{d['error_message']|translate}}</div>\r\n      </div>\r\n\r\n\r\n      <ng-template #containImage>\r\n      \t<div class=\"col-lg-5\">\r\n      \t        <input class=\"form-control\" type=\"file\" (change)=\"fileUpload($event)\" accept=\"image/*\" #fileInput/>\r\n        </div>\r\n        <div class=\"col-lg-2\">\r\n          <img *ngIf=\"file else nofile\" [src]=\"file\" height=\"40px\" alt=\"image preview\"/>\r\n          <ng-template #nofile>\r\n            <p>{{\"NoPreview\"|translate}}</p>\r\n          </ng-template>\r\n        </div>\r\n      </ng-template>\r\n    </div>\r\n    <div class=\"padding-top row\">\r\n      <div class=\"col-lg-2 offset-lg-10\">\r\n        <button type=\"submit\" [disabled]=\"!formForm.valid\" class=\"btn btn-block btn-success\">{{buttonName|translate}}</button>\r\n      </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/shared/form/form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".warn {\n  background: #f2edda;\n  padding: 7px;\n  font-size: .9em;\n  margin-bottom: 20px;\n  display: inline-block;\n  -webkit-animation: 0.5s alertAnim forwards;\n          animation: 0.5s alertAnim forwards; }\n\n.ui-select-choices.dropdown-menu {\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/form/form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormComponent = (function () {
    function FormComponent(callApi, reloadService) {
        this.callApi = callApi;
        this.reloadService = reloadService;
        this.bloodType = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "o-"];
        this.formSubmitSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.itemsArray = [];
    }
    FormComponent.prototype.ngOnInit = function () {
        this.formForm = this.formData[0].form_group;
        this.data = this.formData[0].form_control_names;
        this.gotImage = this.formData[0].contain_image;
        this.url = this.formData[0].submit_url;
        this.buttonName = this.formData[0].button_name;
        this.findSpecial(this.data);
        console.log(this.formForm);
        console.log(this.data);
    };
    FormComponent.prototype.onSubmit = function (event) {
        // this.employeeForm.controls["projectID"].patchValue(value.id);
        // event.password=sha256(event.password);
        if (event['dob'] != null) {
            event['dob'] = (new Date(event['dob'])).toISOString();
        }
        console.log(event);
        console.log(this.gotImage);
        if (this.gotImage)
            this.gotImageSubmit(event);
        else
            this.noImageSubmit(event);
    };
    FormComponent.prototype.gotImageSubmit = function (event) {
        var _this = this;
        console.log("form to be submit:");
        console.log(event);
        this.callApi.postWithFile(this.url, event, this.photo)
            .subscribe(function (response) {
            var responseBody = response;
            if (responseBody == null || responseBody == "") {
                _this.formSubmitSuccess.emit(true);
                _this.reloadService.setReload();
            }
            else {
                var firstWordOfResponse = responseBody.split(" ")[0];
                console.log(firstWordOfResponse);
                if (firstWordOfResponse == "Duplicate") {
                    alert("Email Address have been registered, please use another email address");
                }
                else {
                    alert(responseBody);
                }
            }
            console.log('response: ');
            console.log(response);
        });
    };
    FormComponent.prototype.noImageSubmit = function (event) {
        var _this = this;
        console.log("form to be submit:");
        console.log(event);
        this.callApi.postData(this.url, JSON.stringify(event))
            .subscribe(function (response) {
            var responseBody = response;
            if (responseBody == null || responseBody == "") {
                _this.formSubmitSuccess.emit(true);
                _this.reloadService.setReload();
            }
            else {
                var firstWordOfResponse = responseBody.split(" ")[0];
                console.log(firstWordOfResponse);
                if (firstWordOfResponse == "Duplicate") {
                    alert("Email Address have been registered, please use another email address");
                }
                else {
                    alert(responseBody);
                }
            }
            console.log('response: ');
            console.log(response);
        });
    };
    FormComponent.prototype.fileUpload = function (event) {
        var _this = this;
        //preview
        if (event.target.files && event.target.files[0] && this.isImage(event)) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.onload = function (event) {
                _this.file = event.target.result;
            };
            this.photo = event.srcElement.files;
            console.log(this.photo);
        }
        else {
            alert("Please upload image only");
            this.fileInput.nativeElement.value = "";
        }
    };
    FormComponent.prototype.isImage = function (event) {
        var file = event.target.files[0];
        var fileType = file["type"];
        fileType = fileType.split("/");
        if (fileType[0] == "image") {
            return true;
        }
        return false;
    };
    FormComponent.prototype.findSpecial = function (data) {
        var _this = this;
        data.forEach(function (formElement) {
            if (formElement.special && formElement.special.type == "select") {
                _this.getAndAssignToDropdown(formElement.special.url, formElement.special.kind);
                console.log("this element got select");
            }
            else if (formElement.special && formElement.special.type == "blood") {
                _this.assignBloodTypeToDropdown();
                console.log("this element got blood type selection");
            }
        });
    };
    FormComponent.prototype.assignBloodTypeToDropdown = function () {
        var items = [];
        this.bloodType.forEach(function (blood) {
            items.push({
                id: blood,
                text: blood
            });
        });
        this.itemsArray.push(items);
    };
    //assign to items variable accroding to ng2-select
    FormComponent.prototype.getAndAssignToDropdown = function (url, kind) {
        var _this = this;
        var items = [];
        // call api to get the list
        this.callApi.getData(url)
            .subscribe(function (data) {
            // assign data to variable items
            data.forEach(function (item) {
                if (kind == "zone") {
                    items.push({
                        id: item.zone_id,
                        text: item.zone_id
                    });
                }
                else if (kind == "project") {
                    items.push({
                        id: item.p_id,
                        text: item.p_data.p_name
                    });
                }
            });
            _this.itemsArray.push(items);
        });
    };
    FormComponent.prototype.selected = function (groupName, value) {
        this.formForm.controls[groupName].patchValue(value.id);
        console.log('Selected value is: ', value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "formData", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "formSubmitSuccess", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('fileInput'),
        __metadata("design:type", Object)
    ], FormComponent.prototype, "fileInput", void 0);
    FormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-form',
            template: __webpack_require__("../../../../../src/app/shared/form/form.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../../src/app/shared/form/form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["c" /* CallApiService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services__["b" /* ApiReloadService */]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-dark bg-inverse clearfix\">\r\n  <div class=\"row nav\" [@move]=\"headerTitleShow\">\r\n    <div class=\"col-lg-8\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-5 row\" style=\"padding-top:5px\" >\r\n          <button class=\"hamburger\" (click)=\"toggleCollapse()\" style=\"position:relative\">&#9776;</button>\r\n          <h3 class=\"white unselectable\" style=\"margin-left:15px\">{{title|titlecase|translate}}</h3>\r\n        </div>\r\n        <div class=\"col-lg-7\" style=\"margin-bottom:-20px\">\r\n          <app-tabs *ngIf=\"title=='projects'\">\r\n            <app-tab tabTitle=\"All\">\r\n            </app-tab>\r\n            <app-tab tabTitle=\"Ongoing\">\r\n            </app-tab>\r\n            <app-tab tabTitle=\"Past\">\r\n            </app-tab>\r\n          </app-tabs>\r\n          <app-tabs *ngIf=\"title=='report'\" style=\"display:none\">\r\n            <app-tab tabTitle=\"All\">\r\n            </app-tab>\r\n            <app-tab tabTitle=\"Current\">\r\n            </app-tab>\r\n            <app-tab tabTitle=\"Graph\">\r\n            </app-tab>\r\n          </app-tabs>\r\n          <app-tabs *ngIf=\"title=='settings'\" style=\"display:none\">\r\n            <app-tab tabTitle=\"User\">\r\n            </app-tab>\r\n            <app-tab tabTitle=\"Profile\">\r\n            </app-tab>\r\n          </app-tabs>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"offset-lg-1 col-lg-1\">\r\n        <select class=\"form-control\" #langSelect (change)=\"changeLanguage(langSelect.value)\">\r\n          <option class=\"form-control\" *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\" [selected]=\"lang === translate.currentLang\">{{ lang }}</option>\r\n        </select>\r\n    </div>\r\n    <div class=\"col-lg-2 unselectable clickable\" *ngIf=\"al==3\" [routerLink]=\"['/settings']\">\r\n      <img [src]=\"profile['info']['photo']\" class=\"profilePic\"/>\r\n      <p class=\"white user\">&nbsp;{{profile['info']['name']}}</p>\r\n    </div>\r\n    <div class=\"col-lg-2 unselectable\" *ngIf=\"al==2||al==1\">\r\n      <img [src]=\"profile['info']['photo']\" class=\"profilePic\"/>\r\n      <p class=\"white user\">&nbsp;{{profile['info']['name']}}</p>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* #90A4AE */\n/* #455A64 */\n.orange {\n  color: #d08966; }\n\n.white {\n  color: white; }\n\n.nav {\n  padding-top: 3px; }\n\n.logo {\n  padding-top: 5px; }\n\n.hamburger {\n  background: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  /*  line-height:45px;\r\n  padding:5px 15px 0px 15px;*/\n  color: #FFF;\n  border: 0;\n  font-size: 1.4em;\n  font-weight: bold;\n  cursor: pointer;\n  outline: none;\n  z-index: 10000000000000; }\n\n.user {\n  display: inline;\n  padding-top: 3px; }\n\n.navbar {\n  z-index: 1; }\n\n.profilePic {\n  display: inline;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  background: #73AD21;\n  /*rgb(160,178,140)*/ }\n\n.clickable {\n  cursor: pointer; }\n  .clickable:hover p {\n    color: #8a6f6a; }\n  .clickable:hover img {\n    background: #8a6f6a; }\n\n.unselectable {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HeaderComponent = (function () {
    function HeaderComponent(router, activatedRoute, authService, tabService, translate) {
        var _this = this;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.authService = authService;
        this.tabService = tabService;
        this.translate = translate;
        this.headeroffsetShow = "200px";
        this.headeroffsetHide = "80px";
        this.headerTitleShow = "sideBarWithDesc";
        this.onShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.show = "showAll";
        //get the signin in user data
        this.profile = authService.getUserData();
        this.al = authService.getUserAccessLevel();
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]) {
                _this.title = _this.getTitle(router.routerState, router.routerState.root).join('-');
                // console.log('title', this.title);
                //set the default tab for each page
                // console.log("current tab "+this.tabService.currentProject);
                if (_this.title == "projects" && !(_this.tabService.currentProject == "All" || _this.tabService.currentProject == "Ongoing" || _this.tabService.currentProject == "Attached" || _this.tabService.currentProject == "Past")) {
                    // console.log("aiya project");
                    _this.tabService.setTab("Ongoing");
                }
                else if (_this.title == "report" && !(_this.tabService.currentProject == "All" || _this.tabService.currentProject == "Current" || _this.tabService.currentProject == "Graph")) {
                    // console.log("aiya report");
                    _this.tabService.setTab("All");
                }
                else if (_this.title == "settings" && !(_this.tabService.currentProject == "User" || _this.tabService.currentProject == "Profile")) {
                    // console.log("aiya settings");
                    _this.tabService.setTab("Profile");
                }
            }
        });
        this.translate.addLangs(["en", "ch"]);
        // this.translate.setDefaultLang('en');
        // translate.setDefaultLang('en');
        //  	translate.use('en');
        // let browserLang = translate.getBrowserLang();
        // translate.use(browserLang.match(/en|ch/) ? browserLang : 'en');
        // console.log(this.profile);
    }
    //get the title from data of the route
    HeaderComponent.prototype.getTitle = function (state, parent) {
        var data = [];
        if (parent && parent.snapshot.data && parent.snapshot.data.page) {
            data.push(parent.snapshot.data.page);
        }
        if (state && parent) {
            data.push.apply(data, this.getTitle(state, state.firstChild(parent)));
        }
        return data;
    };
    HeaderComponent.prototype.ngOnInit = function () {
        this.headerTitle = document.getElementById("headerTitle");
    };
    HeaderComponent.prototype.toggleCollapse = function () {
        this.show = this.show === "showAll" ? "showIcon" : "showAll";
        this.onShow.emit(this.show);
        this.headerTitleShow = this.headerTitleShow === 'sideBarWithDesc' ? 'sideBarWithIcon' : 'sideBarWithDesc';
    };
    HeaderComponent.prototype.changeLanguage = function (lang) {
        this.translate.use(lang);
        this.changeMapScript(lang);
    };
    HeaderComponent.prototype.changeMapScript = function (lang) {
        // console.log("change map script "+lang);
        var s = document.createElement("script");
        s.type = "text/javascript";
        if (lang == "en")
            s.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyA5kw0UrHPHP-wMM162HPHz2fPEc3u4m2o&libraries=drawing,places,geometry";
        else if (lang == "ch")
            s.src = "https://www.google.cn/maps/api/js?v=3&libraries=places&region=cn&language=zh-CN&key=AIzaSyA5kw0UrHPHP-wMM162HPHz2fPEc3u4m2o";
        else
            console.log("problem at changeRegion");
        s.innerHTML = null;
        s.id = "map";
        document.getElementById("googleMap").innerHTML = "";
        document.getElementById("googleMap").appendChild(s);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "onShow", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/shared/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/header/header.component.scss")],
            animations: [
                //animation of content when sidebar move
                Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["trigger"])('move', [
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["state"])('sideBarWithDesc', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["style"])({
                        'margin-left': '200px'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["state"])('sideBarWithIcon', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["style"])({
                        'margin-left': '80px'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["transition"])('sideBarWithDesc=>sideBarWithIcon', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["animate"])('400ms ease-in-out')),
                    Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["transition"])('sideBarWithIcon=>sideBarWithDesc', Object(__WEBPACK_IMPORTED_MODULE_4__angular_animations__["animate"])('400ms ease-in-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services__["f" /* TabService */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_translate__["b" /* TranslateService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/helpers/jwt.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var JwtInterceptor = (function () {
    function JwtInterceptor() {
    }
    JwtInterceptor.prototype.intercept = function (request, next) {
        // add authorization header with jwt token if available
        var token = localStorage.getItem('token');
        // console.log(token);
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: "Bearer " + token
                }
            });
        }
        return next.handle(request);
    };
    JwtInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], JwtInterceptor);
    return JwtInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tab_tab_component__ = __webpack_require__("../../../../../src/app/shared/tab/tab.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabs_tabs_component__ = __webpack_require__("../../../../../src/app/shared/tabs/tabs.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pipes_data_filter_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/data-filter.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__pipes_data_filter_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_select_options_translate_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/select-options-translate.pipe.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_3__pipes_select_options_translate_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__testing_data_mock__ = __webpack_require__("../../../../../src/testing/data.mock.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__language_english__ = __webpack_require__("../../../../../src/app/shared/language/english.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth/auth.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__auth_auth_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_guard__ = __webpack_require__("../../../../../src/app/shared/auth/auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_7__auth_auth_guard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_user_access_auth_guard__ = __webpack_require__("../../../../../src/app/shared/auth/user-access-auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_8__auth_user_access_auth_guard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile__ = __webpack_require__("../../../../../src/app/shared/profile.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__feedback_feedback_component__ = __webpack_require__("../../../../../src/app/shared/feedback/feedback.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_10__feedback_feedback_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__info_row_info_row_component__ = __webpack_require__("../../../../../src/app/shared/info-row/info-row.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_11__info_row_info_row_component__["a"]; });
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__loading_loading_component__ = __webpack_require__("../../../../../src/app/shared/loading/loading.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_12__loading_loading_component__["a"]; });




//provide mock data












/***/ }),

/***/ "../../../../../src/app/shared/info-row/info-row.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n\t<div class=\"col-lg-5 bold\"><p>{{title|translate}}</p></div>\r\n\t<span class=\"col-lg-1\" style=\"text-align: center\"><p>:</p></span>\r\n\t<div class=\"col-lg-6\" *ngIf=\"!edit else noEdit\"><p>{{value}}</p></div>\r\n\t<ng-template #noEdit>\r\n\t\t\t<div class=\"col-lg-6\" *ngIf=\"group\" [formGroup]=\"group\">\r\n\t\t\t\t<input class=\"form-control\" *ngIf=\"controlName\" [formControlName]=\"controlName\" type=\"text\"/>\r\n\t\t\t</div>\r\n\t</ng-template>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/shared/info-row/info-row.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/info-row/info-row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoRowComponent = (function () {
    function InfoRowComponent() {
    }
    InfoRowComponent.prototype.ngOnChanges = function () {
        // console.log(this.title, this.value);
        if (this.value === '' || this.value === null || typeof this.value === 'undefined') {
            this.value = '-';
        }
        // console.log("info-row: "+this.edit);
    };
    InfoRowComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], InfoRowComponent.prototype, "title", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], InfoRowComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], InfoRowComponent.prototype, "edit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"])
    ], InfoRowComponent.prototype, "group", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], InfoRowComponent.prototype, "controlName", void 0);
    InfoRowComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-info-row',
            template: __webpack_require__("../../../../../src/app/shared/info-row/info-row.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/info-row/info-row.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InfoRowComponent);
    return InfoRowComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/language/english.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Language */
var Language = (function () {
    function Language() {
    }
    Language.language = [{
            Dashboard: {
                "EmployeeOnDuty": "Employee on Duty"
            }
        }];
    return Language;
}());



/***/ }),

/***/ "../../../../../src/app/shared/loading/loading.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!apiCallFinish&&!loadOver5Sec\" class=\"text-center\">\r\n  <fa name=\"spinner\" animation=\"spin\" size=\"4x\"></fa>\r\n  <h2 style=\"margin-top: 0px\" >{{\"Loading\"|translate}}...</h2>\r\n</div>\r\n<div *ngIf=\"!apiCallFinish&&loadOver5Sec\" class=\"text-center\">\r\n  <h2 style=\"margin-top: 0px\" >{{\"LoadingFail\"|translate}}</h2>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/loading/loading.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/loading/loading.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoadingComponent = (function () {
    function LoadingComponent() {
        var _this = this;
        this.loadOver5Sec = false;
        setTimeout(function () {
            if (_this.apiCallFinish == null) {
                _this.loadOver5Sec = true;
            }
        }, 5000);
    }
    LoadingComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LoadingComponent.prototype, "apiCallFinish", void 0);
    LoadingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loading',
            template: __webpack_require__("../../../../../src/app/shared/loading/loading.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/loading/loading.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoadingComponent);
    return LoadingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/pipes/data-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DataFilterPipe = (function () {
    function DataFilterPipe() {
    }
    DataFilterPipe.prototype.transform = function (array, query, type) {
        if (query) {
            if (type === "employeesName") {
                return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) {
                    return (row.w_name_photo.w_name.toLowerCase().indexOf(query.toLowerCase()) > -1) || (row.w_id.toLowerCase().indexOf(query.toLowerCase()) > -1) || (row.dev_id.toLowerCase().indexOf(query.toLowerCase()) > -1);
                });
            }
            else if (type === "projects") {
                return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) {
                    return (row.p_data.p_name.toLowerCase().indexOf(query.toLowerCase()) > -1) || (row.p_id.toLowerCase().indexOf(query.toLowerCase()) > -1);
                });
            }
            else if (type === "alertEmployeeName") {
                return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) {
                    return (row.w_name_photo.w_name.toLowerCase().indexOf(query.toLowerCase()) > -1) || (row.w_id.toLowerCase().indexOf(query.toLowerCase()) > -1);
                });
            }
            else if (type === "projectViewWorkers") {
                return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) {
                    return (row.w_name_photo.w_name.toLowerCase().indexOf(query.toLowerCase()) > -1) || (row.w_id.toLowerCase().indexOf(query.toLowerCase()) > -1);
                });
                //for search in project-workers.component in add-project folder
            }
            else if (type === "projectEmployeesName") {
                return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) {
                    return (row.w_name_photo.w_name.toLowerCase().indexOf(query.toLowerCase()) > -1) || (row.w_id.toLowerCase().indexOf(query.toLowerCase()) > -1);
                });
            }
            else if (type === "superuserName") {
                return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) {
                    return (row.s_name.toLowerCase().indexOf(query.toLowerCase()) > -1) || (row.s_id.toString().toLowerCase().indexOf(query.toLowerCase()) > -1);
                });
            }
            else if (type === "supervisors") {
                return __WEBPACK_IMPORTED_MODULE_0_lodash__["filter"](array, function (row) {
                    return (row.u_name.toLowerCase().indexOf(query.toLowerCase()) > -1) || (row.u_id.toString().toLowerCase().indexOf(query.toLowerCase()) > -1);
                });
            }
            else {
                console.log("something wrong at data-filter pipe");
            }
        }
        return array;
    };
    DataFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Pipe"])({
            name: 'dataFilter'
        })
    ], DataFilterPipe);
    return DataFilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/pipes/date-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DateFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DateFilterPipe = (function () {
    function DateFilterPipe() {
    }
    DateFilterPipe.prototype.transform = function (value, min, max) {
        // console.log(typeof(min));
        // console.log(min.getTime());
        var date1 = min.getTime();
        var date2 = max.getTime();
        return __WEBPACK_IMPORTED_MODULE_1_lodash__["filter"](value, function (row) {
            return (new Date(row.timestamp).getTime() >= date1 && new Date(row.timestamp).getTime() <= date2);
        });
    };
    DateFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'dateFilter'
        })
    ], DateFilterPipe);
    return DateFilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/pipes/select-options-translate.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectOptionsTranslatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_translate_ng2_translate__ = __webpack_require__("../../../../ng2-translate/ng2-translate.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SelectOptionsTranslatePipe = (function () {
    function SelectOptionsTranslatePipe(translateService) {
        this.translateService = translateService;
    }
    SelectOptionsTranslatePipe.prototype.transform = function (items, args) {
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            item.text = this.translateService.instant(item.text);
        }
        return items;
    };
    SelectOptionsTranslatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'selectOptionsTranslate'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng2_translate_ng2_translate__["a" /* TranslateService */]])
    ], SelectOptionsTranslatePipe);
    return SelectOptionsTranslatePipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared/profile.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Profile */
/* unused harmony export Login */
/* unused harmony export Info */
/* unused harmony export Project */
/* unused harmony export Details */
var Profile = (function () {
    function Profile() {
    }
    return Profile;
}());

var Login = (function () {
    function Login() {
    }
    return Login;
}());

var Info = (function () {
    function Info() {
    }
    return Info;
}());

var Project = (function () {
    function Project() {
    }
    return Project;
}());

var Details = (function () {
    function Details() {
    }
    return Details;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/api-reload/api-reload.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiReloadService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiReloadService = (function () {
    function ApiReloadService() {
        this.reload = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
        this.reload$ = this.reload.asObservable();
    }
    ApiReloadService.prototype.setReload = function () {
        this.reload.next(true);
    };
    ApiReloadService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ApiReloadService);
    return ApiReloadService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/call-apis/api-cmd.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiCmd; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");

var apiDom = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].apiUrl;
// apiUrl:"http://wecarev2.mybluemix.net/api/"
// apiUrl: 'http://localhost/wecare/api/'
var ApiCmd = (function () {
    function ApiCmd() {
    }
    ApiCmd.getApiCallerInfo = "https://ipapi.co/json/";
    //Login
    //GET
    ApiCmd.loginCredential = apiDom + 'login';
    // static loginCredential:string=apiDom+'login/';
    ApiCmd.authenticate = apiDom + 'auth/';
    //Dashboard
    //GET
    ApiCmd.injuryGraph = apiDom + "v1/graph";
    ApiCmd.dutyList = apiDom + "onduty";
    ApiCmd.dutyChart = apiDom + "ondutychart";
    //POST
    //Map
    //GET
    ApiCmd.map = apiDom + "list/project";
    //POST
    ApiCmd.geofencing = apiDom + "geofence/";
    ApiCmd.zoning = apiDom + "zone/";
    ApiCmd.wifi = apiDom + "wifi/";
    //Projects
    //GET
    ApiCmd.projectList = apiDom + "list/project";
    //attached projects
    ApiCmd.projectListAttached = apiDom + "project_attached";
    //ongoing porjects
    ApiCmd.projectListOngoing = apiDom + "project_ongoing";
    //past projects
    ApiCmd.projectListPast = apiDom + "project_past";
    ApiCmd.managerList = apiDom + "list/user";
    //get the managerList to assign to project
    // static noProjectWorker:string=apiDom+"list/worker_free"
    //POST
    ApiCmd.newProject = apiDom + "project/add";
    ApiCmd.addOrRemoveWorker = apiDom + "worker/editproject"; //add or remove worker
    ApiCmd.updateWorker = apiDom + "worker/edit";
    ApiCmd.removeWorker = apiDom + "worker/remove";
    ApiCmd.removeProject = apiDom + "project/remove";
    ApiCmd.editProject = apiDom + "project/edit";
    //Employee
    //GETList
    ApiCmd.workerList = apiDom + "list/worker";
    ApiCmd.workerHisLoc = apiDom + "location";
    ApiCmd.deviceHisLoc = apiDom + "print/location/device";
    //POST
    ApiCmd.newEmployee = apiDom + "worker/add";
    ApiCmd.newAdmin = apiDom + "user/add";
    //Report
    //GET
    ApiCmd.reportAll = apiDom + "list/report/";
    ApiCmd.reportSummary = apiDom + "list/report/";
    ApiCmd.reportDownload = apiDom + "print";
    //POST
    //Alert
    //GET
    ApiCmd.numList = apiDom + "unsolved/num";
    ApiCmd.sosList = apiDom + "unsolved/sos";
    ApiCmd.alertList = apiDom + "unsolved/alert";
    // /{{id}}
    ApiCmd.resolveAlert = apiDom + "alert/resolve";
    // /{{id}}
    ApiCmd.resolveSOS = apiDom + "sos/resolve";
    //POST
    //Settings page
    //GET
    //POST
    ApiCmd.editProfile = apiDom + "user/edit";
    //Device commmand
    ApiCmd.sendCommand = apiDom + "command/";
    //superuser
    ApiCmd.addSuperuser = apiDom + "admin/add";
    ApiCmd.removeSuperuser = apiDom + "admin/remove";
    ApiCmd.superuserList = apiDom + "list/admin";
    ApiCmd.updateSuperuser = apiDom + "admin/edit";
    // router
    ApiCmd.routerList = apiDom + "list/wifi";
    ApiCmd.addRouter = apiDom + "wifi/add";
    ApiCmd.removeRouter = apiDom + "wifi/remove";
    ApiCmd.getZoneList = apiDom + "list/zone";
    // supervisor
    ApiCmd.supervisorList = apiDom + "list/supervisor";
    ApiCmd.addSupervisor = apiDom + "supervisor/add";
    ApiCmd.removeSupervisor = apiDom + "supervisor/remove";
    ApiCmd.updateSupervisor = apiDom + "supervisor/edit";
    // push notification
    ApiCmd.updatePushToken = apiDom + "user/webtoken";
    ApiCmd.updateAdmin = apiDom + "admin/webtoken";
    return ApiCmd;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/call-apis/call-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__call_apis_api_cmd__ = __webpack_require__("../../../../../src/app/shared/services/call-apis/api-cmd.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CallApiService = (function () {
    function CallApiService(http) {
        this.http = http;
    }
    CallApiService.prototype.logout = function () {
        this.currentUser = null;
    };
    // getAdminData(url):Observable<any>{
    // 	return this.http.get(url)
    // 		// .do(response=>{console.log('All: ' +JSON.stringify(response))})
    // 		.catch(this.handleError);
    // }
    CallApiService.prototype.getCompanyID = function () {
        return this.currentUser.company_id;
    };
    CallApiService.prototype.getData = function (url) {
        var jwt = new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["JwtHelper"]();
        var token = localStorage.getItem('token');
        if (this.currentUser == null && token != null)
            this.currentUser = (jwt.decodeToken(token));
        // if(this.userData != null) 
        // console.log(this.currentUser.company_id);
        // console.log(url.search('login'));
        if (url.search('login') < 0) {
            if (url.search('localhost') >= 0)
                url = url.replace('api/', 'api/' + this.currentUser.company_id + '/');
            else if (url.search('mmdt') >= 0)
                url = url.replace('api.php/', 'api.php/' + this.currentUser.company_id + '/');
            else
                url = url.replace('api.php/', 'api.php/' + this.currentUser.company_id + '/');
        }
        return this.http.get(url)
            .catch(this.handleError);
    };
    CallApiService.prototype.postLoginData = function (url, postData) {
        var formData = new FormData();
        postData = JSON.parse(postData);
        if (postData !== "" && postData !== undefined && postData !== null) {
            for (var property in postData) {
                if (postData.hasOwnProperty(property)) {
                    formData.append(property, postData[property]);
                }
            }
            console.log(formData);
            return this.http.post(url, formData, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]() }).map(function (res) { return res; });
        }
    };
    CallApiService.prototype.postData = function (url, postData) {
        // let headers = new Headers({'Content-Type':'application/json'});
        // let options = new RequestOptions({ headers: headers});
        //   let httpOptions = {
        // 	headers: new HttpHeaders({
        // 	  'Content-Type':  'application/json',
        // 	  'Authorization': 'my-auth-token'
        // 	});
        var formData = new FormData();
        postData = JSON.parse(postData);
        if (postData !== "" && postData !== undefined && postData !== null) {
            for (var property in postData) {
                if (postData.hasOwnProperty(property)) {
                    formData.append(property, postData[property]);
                }
            }
            formData.append('c_id', this.currentUser.company_id);
            return this.http.post(url, formData, { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]() }).map(function (res) { return res; });
        }
    };
    //Dunno how to inspect formData
    CallApiService.prototype.postWithFile = function (url, postData, files) {
        var formData = new FormData();
        if (files != null)
            formData.append('files', files[0], files[0].name);
        // For multiple files
        // for (let i = 0; i < files.length; i++) {
        //     formData.append(`files[]`, files[i], files[i].name);
        // }
        if (postData !== "" && postData !== undefined && postData !== null) {
            for (var property in postData) {
                if (postData.hasOwnProperty(property)) {
                    formData.append(property, postData[property]);
                }
            }
            formData.append('c_id', this.currentUser.company_id);
            return this.http.post(url, formData, {
                headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]()
            }).map(function (res) { return res; });
            // .subscribe(
            //           res => {
            //             this.responseData = res.json();
            //             resolve(this.responseData);
            //           },
            //           error => {
            //             this.router.navigate(['/login']);
            //             reject(error);
            //           }
            //       );
        } //);
        // return returnReponse;
    };
    CallApiService.prototype.handleError = function (error) {
        console.log('An error occurred', error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error.message);
    };
    CallApiService.prototype.sendCommand = function (command, dev_id) {
        var commandJson = {
            command: command
        };
        if (dev_id !== '' && dev_id !== null) {
            commandJson['device'] = dev_id;
            commandJson['c_id'] = this.currentUser.company_id;
        }
        console.log(commandJson);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__call_apis_api_cmd__["a" /* ApiCmd */].sendCommand, JSON.stringify(commandJson), { headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]() }).map(function (res) { return res; });
    };
    //function to get location from lat lng
    CallApiService.prototype.getLocationByLatLng = function (http, location, group) {
        var url = "https://maps.google.cn/maps/api/geocode/json?latlng=";
        var key = "&key=AIzaSyA5kw0UrHPHP-wMM162HPHz2fPEc3u4m2o";
        url = url.concat(location.lat, ',', location.lng, key);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            getData(http, url).subscribe(function (data) {
                observer.next(extractLocation(data));
            });
        });
        function getData(http, url) {
            return http.get(url)
                .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(err); });
        }
        function extractLocation(result) {
            var body = JSON.parse(result._body);
            // console.log(body);
            if ('error_message' in body) {
                console.log(body.error_message); //log the error
            }
            else {
                var address = body.results[0].formatted_address;
                // console.log(address);
                return address;
            }
        }
    };
    CallApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], CallApiService);
    return CallApiService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tab_tab_service__ = __webpack_require__("../../../../../src/app/shared/services/tab/tab.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_0__tab_tab_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__call_apis_call_api_service__ = __webpack_require__("../../../../../src/app/shared/services/call-apis/call-api.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__call_apis_call_api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_reload_api_reload_service__ = __webpack_require__("../../../../../src/app/shared/services/api-reload/api-reload.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__api_reload_api_reload_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__call_apis_api_cmd__ = __webpack_require__("../../../../../src/app/shared/services/call-apis/api-cmd.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__call_apis_api_cmd__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_custom_validator__ = __webpack_require__("../../../../../src/app/shared/services/validators/custom-validator.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__validators_custom_validator__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_array_pages_array_service__ = __webpack_require__("../../../../../src/app/shared/services/pages-array/pages-array.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_5__pages_array_pages_array_service__["a"]; });








/***/ }),

/***/ "../../../../../src/app/shared/services/messaging/messaging.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app__ = __webpack_require__("../../../../firebase/app/dist/index.cjs.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_messaging__ = __webpack_require__("../../../../firebase/messaging/dist/index.esm.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_take__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/take.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__call_apis_call_api_service__ = __webpack_require__("../../../../../src/app/shared/services/call-apis/call-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__call_apis_api_cmd__ = __webpack_require__("../../../../../src/app/shared/services/call-apis/api-cmd.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import * as firebase from 'firebase';







var MessagingService = (function () {
    function MessagingService(callApi, authService) {
        this.callApi = callApi;
        this.authService = authService;
        this.messaging = __WEBPACK_IMPORTED_MODULE_1_firebase_app__["messaging"]();
        this.currentMessage = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](null);
    }
    MessagingService.prototype.updateToken = function (token) {
        var userData = this.authService.getUserData();
        var data = {
            // c_id: userData.company_id,
            id: userData.id,
            token: token
        };
        console.log(data);
        console.log("update token");
        // this.callApi.postData(ApiCmd.updatePushToken,JSON.stringify(data))  
        this.callApi.postData(__WEBPACK_IMPORTED_MODULE_6__call_apis_api_cmd__["a" /* ApiCmd */].updateAdmin, JSON.stringify(data))
            .subscribe((function (response) {
            console.log("response from token sent to server");
            console.log(response);
        }));
    };
    MessagingService.prototype.getPermission = function () {
        var _this = this;
        this.messaging.requestPermission()
            .then(function () {
            console.log('Notification permission granted.');
            return _this.messaging.getToken();
        })
            .then(function (token) {
            console.log(token);
            _this.updateToken(token);
        })
            .catch(function (err) {
            console.log('Unable to get permission to notify.', err);
        });
    };
    MessagingService.prototype.receiveMessage = function () {
        var _this = this;
        this.messaging.onMessage(function (payload) {
            console.log("Message received. ", payload);
            _this.currentMessage.next(payload);
        });
    };
    MessagingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__call_apis_call_api_service__["a" /* CallApiService */],
            __WEBPACK_IMPORTED_MODULE_7__auth_auth_service__["a" /* AuthService */]])
    ], MessagingService);
    return MessagingService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/pages-array/pages-array.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesArrayService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PagesArrayService = (function () {
    function PagesArrayService() {
        this.pages = ["dashboard", "map", "projects", "employee", "report", "alert", "settings", "superuser", "routerconfig", "supervisor"];
    }
    PagesArrayService.prototype.getPagesArray = function () {
        return this.pages;
    };
    PagesArrayService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PagesArrayService);
    return PagesArrayService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/tab/tab.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabService = (function () {
    function TabService() {
        //Observable string sources
        this.currentProjectTab = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
        //Observable string streams
        this.currentProjectTab$ = this.currentProjectTab.asObservable();
        //Observable string sources in view-project
        this.currentViewProjectTab = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
        //Observable string streams
        this.currentViewProjectTab$ = this.currentViewProjectTab.asObservable();
    }
    TabService.prototype.setTab = function (tab) {
        //set the clicked tab from header
        this.currentProjectTab.next(tab);
        this.currentProject = tab;
    };
    TabService.prototype.setProjectViewTab = function (tab) {
        this.currentViewProjectTab.next(tab);
    };
    TabService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], TabService);
    return TabService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/validators/custom-validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomValidators; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

// setup simple regex for white listed blood
var validBlood = /^(A|B|AB|O)[+-]?/;
//2017-12-05T13:15:16.000Z
var validDate = /^d{4}-d{2}-d{2}Td{2}:d{2}:d{2}\.+/;
// create your class that extends the angular validator class
var CustomValidators = (function (_super) {
    __extends(CustomValidators, _super);
    function CustomValidators() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // create a static method for your validation
    CustomValidators.validateBloodType = function (control) {
        // first check if the control has a value
        if (control.value && control.value.length > 0) {
            // match the control value against the regular expression
            var matches = control.value.match(validBlood);
            // if there are matches return an object, else return null.
            return matches && matches.length ? null : { valid: matches };
        }
        else {
            return null;
        }
    };
    CustomValidators.validateSelect = function (control) {
        // console.log(control.value);
        if (control.value > 0) {
            return { valid: control.value };
        }
        else {
            return null;
        }
    };
    return CustomValidators;
}(__WEBPACK_IMPORTED_MODULE_0__angular_forms__["Validators"]));



/***/ }),

/***/ "../../../../../src/app/shared/sidenav/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\r\n  <li class=\"background-black py-1\">\r\n    <span [@move]=\"show\"><img src=\"./assets/images/logo.png\" width=\"30px\" alt=\"Wecare Logo\"></span>\r\n    <span [@title]=\"show\" style=\"padding-left:10px\"><span class=\"white\">   WE</span><span class=\"orange\">Care</span></span>\r\n  </li>\r\n  <!-- <ng-template #small>\r\n    <li class=\"background-black\">\r\n      <img class=\"icon\" src=\"./assets/images/logo.png\" width=\"30px\" alt=\"Wecare Logo\">\r\n    </li>\r\n  </ng-template> -->\r\n  <!--     \r\n    // 1 = system admin (mdt)\r\n    // 2 = superuser\r\n    // 3 = project -->\r\n  <li *ngIf=\"al==2||al==3\" class=\"pre\" [routerLink]=\"['/dashboard']\" routerLinkActive=\"active\">\r\n    <div>\r\n      <span>{{\"Dashboard\"|translate}}</span>\r\n      <span><img src=\"/assets/images/dashboard.png\"/></span>\r\n    </div>\r\n  </li>\r\n  <li *ngIf=\"al==2||al==3\" class=\"pre\" [routerLink]=\"['/map']\" routerLinkActive=\"active\">\r\n    <div>\r\n      <span>{{\"Map\"|translate}}</span>\r\n      <span><img src=\"/assets/images/map.png\"/></span>\r\n    </div>\r\n  </li>\r\n  <li *ngIf=\"al==2||al==3\" class=\"pre\" [routerLink]=\"['/projects']\" routerLinkActive=\"active\">\r\n    <div>\r\n      <span>{{\"Projects\"|translate}}</span>\r\n      <span><img src=\"/assets/images/presentation.png\"/></span>\r\n    </div>\r\n  </li>\r\n  <li *ngIf=\"al==2||al==3\" class=\"pre\" [routerLink]=\"['/employee']\" routerLinkActive=\"active\">\r\n    <div>\r\n      <span>{{\"Employee\"|translate}}</span>\r\n      <span><img src=\"/assets/images/engineer.png\"/></span>\r\n    </div>\r\n  </li>\r\n  <li *ngIf=\"al==2||al==3\" class=\"pre\" [routerLink]=\"['/report']\" routerLinkActive=\"active\">\r\n    <div>\r\n      <span>{{\"Report\"|translate}}</span>\r\n      <span><img src=\"/assets/images/newspaper.png\"/></span>\r\n    </div>\r\n  </li>\r\n  <li *ngIf=\"al==2||al==3\" class=\"pre\" [routerLink]=\"['/alert']\" routerLinkActive=\"active\">\r\n    <div>\r\n      <span>{{\"Alert\"|translate}}</span>\r\n      <span class=\"alert-notification\">\r\n        <span class=\"alert-notification-image\"><img src=\"/assets/images/notification.png\"/></span>\r\n        <span class=\"alert-notification-text\" [ngClass]=\"{'blink-elem':numberAlert>0}\"><div>{{numberAlert}}</div></span>\r\n      </span>\r\n    </div>\r\n  </li>\r\n  <li *ngIf=\"al==2\" class=\"pre\" [routerLink]=\"['/site-supervisor']\" routerLinkActive=\"active\">\r\n    <div>\r\n      <span>{{\"Supervisor\"|translate}}</span>\r\n      <span><img src=\"/assets/images/site-supervisor.png\"/></span>\r\n    </div>\r\n  </li>\r\n  <li *ngIf=\"al==1\" class=\"pre\" [routerLink]=\"['/admin']\" routerLinkActive=\"active\">\r\n    <div>\r\n      <span>{{\"Superuser\"|translate}}</span>\r\n      <span><img src=\"/assets/images/admin.png\"/></span>\r\n    </div>\r\n  </li>\r\n  <li *ngIf=\"al==1\" class=\"pre\" [routerLink]=\"['/router']\" routerLinkActive=\"active\">\r\n    <div>\r\n      <span>{{\"Routerconfig\"|translate}}</span>\r\n      <span><img src=\"/assets/images/wifi.png\"/></span>\r\n    </div>\r\n  </li>\r\n  <li *ngIf=\"al==2||al==3||al==1\" class=\"pre\" [routerLink]=\"['/settings']\" routerLinkActive=\"active\">\r\n    <div>\r\n      <span>{{\"Settings\"|translate}}</span>\r\n      <span><img src=\"/assets/images/gear-option.png\"/></span>\r\n    </div>\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "../../../../../src/app/shared/sidenav/sidenav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* #8a6f6a */\n/* #af9490 */\nul {\n  font-size: 18px;\n  line-height: 3;\n  font-weight: 400;\n  list-style: none;\n  margin-left: -40px; }\n\n.hide {\n  display: none; }\n\nli.background-black {\n  padding-top: 2.5px;\n  background-color: #292b2c;\n  cursor: default;\n  padding-left: 0px;\n  text-align: center;\n  padding-right: 0px; }\n  li.background-black:hover {\n    background-color: #292b2c; }\n\nli {\n  padding-left: 25px;\n  padding-right: 25px;\n  cursor: pointer; }\n  li:hover {\n    background-color: #af9490; }\n\n:host {\n  background: #707070;\n  color: #fff;\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: auto;\n  bottom: 0;\n  width: 10%;\n  min-width: 200px;\n  z-index: 2;\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif; }\n\n.active {\n  background-color: #8a6f6a; }\n\n.orange {\n  color: #d08966; }\n\n.white {\n  color: white; }\n\n.icon {\n  position: relative;\n  left: 125px; }\n\n.pre {\n  /*white-space:pre;*/ }\n\n.pre > div {\n  height: 50px; }\n\n.pre > div > span > img {\n  width: auto;\n  height: 30px;\n  position: fixed;\n  margin: 10px 25px 10px 0px;\n  right: 0; }\n\n.alert-notification {\n  position: fixed;\n  right: 0; }\n\n.alert-notification-image {\n  margin-right: -5px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.alert-notification-image > img {\n  width: auto;\n  height: 30px; }\n\n.alert-notification-text {\n  display: inline-block;\n  width: 25px;\n  text-align: center;\n  background: orangered;\n  height: 30px;\n  margin-top: 10px; }\n\n.alert-notification-text > div {\n  height: inherit;\n  top: 0;\n  position: absolute;\n  margin: auto;\n  left: 50%;\n  right: 0; }\n\n.blink-elem {\n  -webkit-animation-duration: 500ms;\n          animation-duration: 500ms;\n  -webkit-animation-name: blink;\n          animation-name: blink;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-direction: alternate;\n          animation-direction: alternate; }\n\n@-webkit-keyframes blink {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n@keyframes blink {\n  from {\n    opacity: 1; }\n  to {\n    opacity: 0; } }\n\n.unselectable, li {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/sidenav/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidenavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SidenavComponent = (function () {
    function SidenavComponent(CallApi, authService) {
        this.CallApi = CallApi;
        this.authService = authService;
        //variable to control the variable sidenav title
        this.smallIcon = false;
        this.numberAlert = 0;
        this.al = this.authService.getUserAccessLevel();
    }
    SidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.CallApi.getData(__WEBPACK_IMPORTED_MODULE_2__services__["a" /* ApiCmd */].numList).subscribe(function (value) {
            _this.numberAlert = value[0].alert_num + value[0].sos_num;
        });
        this.intervalHook = setInterval(function () {
            _this.CallApi.getData(__WEBPACK_IMPORTED_MODULE_2__services__["a" /* ApiCmd */].numList).subscribe(function (value) {
                _this.numberAlert = value[0].alert_num + value[0].sos_num;
            });
        }, 3000);
    };
    SidenavComponent.prototype.ngOnChanges = function (changes) {
        if (changes['show']) {
            console.log(this.show);
            if (this.show === 'showIcon')
                this.smallIcon = true;
            else
                this.smallIcon = false;
        }
    };
    SidenavComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.intervalHook);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], SidenavComponent.prototype, "show", void 0);
    SidenavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__("../../../../../src/app/shared/sidenav/sidenav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/sidenav/sidenav.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('move', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('showAll', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                        'margin-left': '0px'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('showIcon', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                        'margin-left': '125px'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('showAll=>showIcon', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms ease-in-out')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('showIcon=>showAll', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms ease-in-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('title', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('showAll', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({})),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('showIcon', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                        'display': 'none'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('true=>false', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms ease-in-out')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('false=>true', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms ease-in-out'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["c" /* CallApiService */],
            __WEBPACK_IMPORTED_MODULE_3__auth_auth_service__["a" /* AuthService */]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/tab/tab.component.html":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "../../../../../src/app/shared/tab/tab.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/tab/tab.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tabs_tabs_component__ = __webpack_require__("../../../../../src/app/shared/tabs/tabs.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabComponent = (function () {
    function TabComponent(tabs) {
        this.tabs = tabs;
    }
    TabComponent.prototype.ngOnInit = function () {
        this.tabs.addTab(this);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TabComponent.prototype, "tabTitle", void 0);
    TabComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tab',
            template: __webpack_require__("../../../../../src/app/shared/tab/tab.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/tab/tab.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__tabs_tabs_component__["a" /* TabsComponent */]])
    ], TabComponent);
    return TabComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/tabs/tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\r\n  <div class=\"row\">\r\n    <div class=\"tab\" [ngClass]=\"{'col-lg-3':tabs?.length==4,'col-lg-4':tabs?.length==3,'col-lg-6':tabs?.length==2,'front':idx===0,'behind':idx===tabs?.length-1,'active':tab.active}\" *ngFor=\"let tab of tabs;let idx = index\" (click)=\"selectTab(tab)\">\r\n      <li>\r\n        {{tab.tabTitle|translate}}\r\n      </li>\r\n    </div>\r\n  </div>\r\n</ul>\r\n<!-- <ng-content></ng-content> -->\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/tabs/tabs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* #8a6f6a */\n/* #af9490 */\nul {\n  font-size: 15px;\n  line-height: 3;\n  font-weight: 400;\n  list-style: none;\n  text-align: center;\n  color: white;\n  margin-left: 0;\n  padding-left: 0; }\n\n.tab.active {\n  background-color: #8a6f6a; }\n\n/*li,.background-black{\t\r\n\tcursor:default;\r\n\t&:hover{\r\n\t\tbackground-color:black;\r\n\t};\r\n}*/\n.tab {\n  display: inline;\n  cursor: pointer;\n  background-color: #707070; }\n  .tab:hover {\n    background-color: #af9490; }\n\n.front {\n  border-radius: 10px 0 0 0px; }\n\n.behind {\n  border-radius: 0 10px 0px 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/tabs/tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsComponent = (function () {
    function TabsComponent(tabService) {
        this.tabService = tabService;
        this.tabs = [];
    }
    TabsComponent.prototype.ngOnInit = function () {
    };
    TabsComponent.prototype.addTab = function (tab) {
        // if(this.tabs.length === 0){
        // 	tab.active = true;
        // }
        if (this.tabService.currentProject == tab.tabTitle) {
            this.selectTab(tab);
        }
        this.tabs.push(tab);
    };
    TabsComponent.prototype.selectTab = function (tab) {
        this.tabs.forEach(function (tab) {
            tab.active = false;
        });
        tab.active = true;
        this.tabService.setTab(tab.tabTitle);
    };
    TabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__("../../../../../src/app/shared/tabs/tabs.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/tabs/tabs.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["f" /* TabService */]])
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/images/login_background2.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "login_background2.15ee8c34ae2463f8bc5e.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    // apiUrl: 'http://18.222.213.106:8081/wecare/api.php/'
    // http://169.56.129.146:8081
    // apiUrl: 'https://mmdt2.ddns.net:8081/wecare/api.php/',
    // apiUrl: 'http://mmdt2.ddns.net:8081/wecare/api.php/',
    apiUrl: 'https://mmdt3.ddns.net:8081/wecare/api.php/',
    firebase: {
        apiKey: "AIzaSyAfx2mp1gvLSJajdB9GGjktl78tGcOW4IY",
        authDomain: "wecare-1511832076628.firebaseapp.com",
        databaseURL: "https://wecare-1511832076628.firebaseio.com",
        projectId: "wecare-1511832076628",
        storageBucket: "wecare-1511832076628.appspot.com",
        messagingSenderId: "725116391845"
    }
    // http://14.116.147.247:8081/wecare/api.php/login/admin001@gmail.com/123456
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ "../../../../../src/testing/data.mock.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Data */
var Data = (function () {
    function Data() {
    }
    Data.employees = [{
            id: "0001",
            name: "Ong Jia Aun",
            healthStatus: "unhealthy",
            projectId: "001"
        }, {
            id: "0002",
            name: "Lily",
            healthStatus: "healthy",
            projectId: "002"
        }, {
            id: "0003",
            name: "Rose",
            healthStatus: "unhealthy",
            projectId: "001"
        }, {
            id: "0004",
            name: "Wang Zhong Qi",
            healthStatus: "healthy",
            projectId: "002"
        }, {
            id: "0005",
            name: "Musfiqur",
            healthStatus: "unhealthy",
            projectId: "006"
        }, {
            id: "0006",
            name: "Rosen",
            healthStatus: "healthy",
            projectId: "006"
        },];
    Data.alerts = [
        {
            id: "0001",
            alertDesc: "Rose have low Heart rate"
        }, {
            id: "0002",
            alertDesc: "Musfiqur have low Spo2 level"
        }
    ];
    Data.sosAlerts = [
        {
            id: "0001",
            name: "John gg",
            location: "Jalan SS2/26,Petaling Jaya",
            projectId: "PJ007",
            projectName: "Project1",
            timestamp: "2/5/2017 17:02:44"
        },
        {
            id: "0010",
            name: "Ong Jia Aun",
            location: "Jalan SS2/23,Petaling Jaya",
            projectId: "PJ003",
            projectName: "Project3",
            timestamp: "2/5/2017 17:02:54"
        },
        {
            id: "0051",
            name: "Lily",
            location: "Jalan SS17/10,Petaling Jaya",
            projectId: "PJ002",
            projectName: "Project2",
            timestamp: "2/3/2017 17:01:00"
        }
    ];
    Data.unsafeWorkers = [
        {
            "year": "2013", "number": "1500"
        },
        {
            "year": "2014", "number": "1329",
        },
        {
            "year": "2015", "number": "1000",
        },
        {
            "year": "2016", "number": "500",
        },
        {
            "year": "2017", "number": "300",
        }
    ];
    Data.accidentRate = [
        {
            "year": "2013", "percentage": "90"
        },
        {
            "year": "2014", "percentage": "87",
        },
        {
            "year": "2015", "percentage": "64",
        },
        {
            "year": "2016", "percentage": "32",
        },
        {
            "year": "2017", "percentage": "20",
        }
    ];
    Data.onduty = [
        {
            "name": "Germany",
            "series": [
                {
                    "name": "2010",
                    "value": 7300000
                },
                {
                    "name": "2011",
                    "value": 8940000
                }
            ]
        },
        {
            "name": "USA",
            "series": [
                {
                    "name": "2010",
                    "value": 7870000
                },
                {
                    "name": "2011",
                    "value": 8270000
                }
            ]
        },
        {
            "name": "France",
            "series": [
                {
                    "name": "2010",
                    "value": 5000002
                },
                {
                    "name": "2011",
                    "value": 5800000
                }
            ]
        }
    ];
    return Data;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map