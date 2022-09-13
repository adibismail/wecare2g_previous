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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
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
        canActivate: [__WEBPACK_IMPORTED_MODULE_12__shared__["a" /* AuthGuard */]],
        children: [
            { path: '', redirectTo: "/dashboard", pathMatch: 'full' },
            { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_3__component_dashboard_dashboard_component__["a" /* DashboardComponent */], data: { page: "dashboard" } },
            { path: 'map', component: __WEBPACK_IMPORTED_MODULE_4__component_map_map_component__["a" /* MapComponent */], data: { page: "map" } },
            { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_5__component_projects__["a" /* ProjectsComponent */], data: { page: "projects" } },
            { path: 'projects/:id', component: __WEBPACK_IMPORTED_MODULE_5__component_projects__["b" /* ViewProjectComponent */], data: { page: "projects" } },
            { path: 'employee', component: __WEBPACK_IMPORTED_MODULE_6__component_employee__["a" /* EmployeeComponent */], data: { page: "employee" } },
            { path: 'employee/:id', component: __WEBPACK_IMPORTED_MODULE_6__component_employee__["b" /* ViewEmployeeComponent */], data: { page: "employee" } },
            { path: 'report', component: __WEBPACK_IMPORTED_MODULE_7__component_report_report_component__["a" /* ReportComponent */], data: { page: "report" } },
            { path: 'alert', component: __WEBPACK_IMPORTED_MODULE_8__component_alert_alert_component__["a" /* AlertComponent */], data: { page: "alert" } },
            { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_9__component_settings_settings_component__["a" /* SettingsComponent */], data: { page: "settings" } },
            { path: 'admin', component: __WEBPACK_IMPORTED_MODULE_11__component_admin_admin_component__["a" /* AdminComponent */], data: { page: "admin" } }
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
    function AppComponent(translate, callApi) {
        // let userLang=navigator.language.split('-')[0];
        this.translate = translate;
        this.callApi = callApi;
        this.chCountry = ["CN", "HK", "TW", "MY"];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
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
            s.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDRQ1_DGJjK0OqnN_TNGUoQul6QJuhF2VI&libraries=drawing,places,geometry";
        else if (lang == "ch")
            s.src = "http://www.google.cn/maps/api/js?v=3&libraries=places&region=cn&language=zh-CN&key=AIzaSyAeg8uvtlLzc1zwyNL1z_UXZwZzjBw0B2g";
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
            __WEBPACK_IMPORTED_MODULE_2__shared_services__["c" /* CallApiService */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_header_header_component__ = __webpack_require__("../../../../../src/app/shared/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__component_login_login_component__ = __webpack_require__("../../../../../src/app/component/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__component_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/component/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_map__ = __webpack_require__("../../../../../src/app/component/map/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__component_projects___ = __webpack_require__("../../../../../src/app/component/projects/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__component_employee_employee_component__ = __webpack_require__("../../../../../src/app/component/employee/employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__component_report_report_component__ = __webpack_require__("../../../../../src/app/component/report/report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__component_alert_alert_component__ = __webpack_require__("../../../../../src/app/component/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_settings_settings_component__ = __webpack_require__("../../../../../src/app/component/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__shared_sidenav_sidenav_component__ = __webpack_require__("../../../../../src/app/shared/sidenav/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_datatable__ = __webpack_require__("../../../../angular2-datatable/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angular2_datatable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_google_charts__ = __webpack_require__("../../../../ng2-google-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__swimlane_ngx_charts__ = __webpack_require__("../../../../@swimlane/ngx-charts/release/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__swimlane_ngx_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21__swimlane_ngx_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_bootstrap_bs_moment__ = __webpack_require__("../../../../ngx-bootstrap/bs-moment/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ngx_bootstrap_locale__ = __webpack_require__("../../../../ngx-bootstrap/locale.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_select__ = __webpack_require__("../../../../ng2-select/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_select___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_ng2_select__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angular_font_awesome__ = __webpack_require__("../../../../angular-font-awesome/angular-font-awesome.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__asymmetrik_ngx_leaflet__ = __webpack_require__("../../../../@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__asymmetrik_ngx_leaflet_draw__ = __webpack_require__("../../../../@asymmetrik/ngx-leaflet-draw/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_ng4_geoautocomplete__ = __webpack_require__("../../../../ng4-geoautocomplete/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31_ng2_translate_src_translate_service__ = __webpack_require__("../../../../ng2-translate/src/translate.service.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_ngx_image_cropper__ = __webpack_require__("../../../../ngx-image-cropper/ngx-image-cropper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__shared_tab_tab_component__ = __webpack_require__("../../../../../src/app/shared/tab/tab.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__shared_tabs_tabs_component__ = __webpack_require__("../../../../../src/app/shared/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__shared___ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__component_report_report_all_report_all_component__ = __webpack_require__("../../../../../src/app/component/report/report-all/report-all.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__component_report_report_current_report_current_component__ = __webpack_require__("../../../../../src/app/component/report/report-current/report-current.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__component_report_report_graph_report_graph_component__ = __webpack_require__("../../../../../src/app/component/report/report-graph/report-graph.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__component_projects_projects_table_projects_table_component__ = __webpack_require__("../../../../../src/app/component/projects/projects-table/projects-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__component_projects_add_project_add_project_component__ = __webpack_require__("../../../../../src/app/component/projects/add-project/add-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__component_projects_add_project_project_detail_project_detail_component__ = __webpack_require__("../../../../../src/app/component/projects/add-project/project-detail/project-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__component_projects_add_project_project_location_project_location_component__ = __webpack_require__("../../../../../src/app/component/projects/add-project/project-location/project-location.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__component_projects_add_project_project_workers_project_workers_component__ = __webpack_require__("../../../../../src/app/component/projects/add-project/project-workers/project-workers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__component_employee_add_employee_add_employee_component__ = __webpack_require__("../../../../../src/app/component/employee/add-employee/add-employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__layouts_home_layout_home_layout_component__ = __webpack_require__("../../../../../src/app/layouts/home-layout/home-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__layouts_login_layout_login_layout_component__ = __webpack_require__("../../../../../src/app/layouts/login-layout/login-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__component_employee_view_employee_view_employee_component__ = __webpack_require__("../../../../../src/app/component/employee/view-employee/view-employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__component_projects_view_project_project_info_project_info_component__ = __webpack_require__("../../../../../src/app/component/projects/view-project/project-info/project-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__component_projects_view_project_project_map_project_map_component__ = __webpack_require__("../../../../../src/app/component/projects/view-project/project-map/project-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__component_projects_view_project_project_view_workers_project_view_workers_component__ = __webpack_require__("../../../../../src/app/component/projects/view-project/project-view-workers/project-view-workers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__component_report_health_visual_health_visual_component__ = __webpack_require__("../../../../../src/app/component/report/health-visual/health-visual.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__shared_card_card_component__ = __webpack_require__("../../../../../src/app/shared/card/card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__component_employee_view_employee_sensor_data_sensor_data_component__ = __webpack_require__("../../../../../src/app/component/employee/view-employee/sensor-data/sensor-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__component_employee_view_employee_send_command_send_command_component__ = __webpack_require__("../../../../../src/app/component/employee/view-employee/send-command/send-command.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__component_dashboard_on_duty_chart_on_duty_chart_component__ = __webpack_require__("../../../../../src/app/component/dashboard/on-duty-chart/on-duty-chart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__shared_form_form_component__ = __webpack_require__("../../../../../src/app/shared/form/form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__component_admin_admin_component__ = __webpack_require__("../../../../../src/app/component/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__component_employee_view_employee_employee_history_map_employee_history_map_component__ = __webpack_require__("../../../../../src/app/component/employee/view-employee/employee-history-map/employee-history-map.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__shared_pipes_date_filter_pipe__ = __webpack_require__("../../../../../src/app/shared/pipes/date-filter.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















//external library






Object(__WEBPACK_IMPORTED_MODULE_23_ngx_bootstrap_bs_moment__["a" /* defineLocale */])('en-gb', __WEBPACK_IMPORTED_MODULE_24_ngx_bootstrap_locale__["a" /* enGb */]);








//animations



//services


//pipes





















//shared component





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__shared_header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_8__shared_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__component_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_11__component_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_12__component_map__["b" /* MapComponent */],
                __WEBPACK_IMPORTED_MODULE_13__component_projects___["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__component_employee_employee_component__["a" /* EmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__component_report_report_component__["a" /* ReportComponent */],
                __WEBPACK_IMPORTED_MODULE_16__component_alert_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_17__component_settings_settings_component__["a" /* SettingsComponent */],
                __WEBPACK_IMPORTED_MODULE_18__shared_sidenav_sidenav_component__["a" /* SidenavComponent */],
                __WEBPACK_IMPORTED_MODULE_34__shared_tab_tab_component__["a" /* TabComponent */],
                __WEBPACK_IMPORTED_MODULE_35__shared_tabs_tabs_component__["a" /* TabsComponent */],
                __WEBPACK_IMPORTED_MODULE_38__shared___["d" /* DataFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_39__component_report_report_all_report_all_component__["a" /* ReportAllComponent */],
                __WEBPACK_IMPORTED_MODULE_40__component_report_report_current_report_current_component__["a" /* ReportCurrentComponent */],
                __WEBPACK_IMPORTED_MODULE_41__component_report_report_graph_report_graph_component__["a" /* ReportGraphComponent */],
                __WEBPACK_IMPORTED_MODULE_42__component_projects_projects_table_projects_table_component__["a" /* ProjectsTableComponent */],
                __WEBPACK_IMPORTED_MODULE_43__component_projects_add_project_add_project_component__["a" /* AddProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_44__component_projects_add_project_project_detail_project_detail_component__["a" /* ProjectDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_45__component_projects_add_project_project_location_project_location_component__["a" /* ProjectLocationComponent */],
                __WEBPACK_IMPORTED_MODULE_46__component_projects_add_project_project_workers_project_workers_component__["a" /* ProjectWorkersComponent */],
                __WEBPACK_IMPORTED_MODULE_53__component_projects_view_project_project_view_workers_project_view_workers_component__["a" /* ProjectViewWorkersComponent */],
                __WEBPACK_IMPORTED_MODULE_47__component_employee_add_employee_add_employee_component__["a" /* AddEmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_48__layouts_home_layout_home_layout_component__["a" /* HomeLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_49__layouts_login_layout_login_layout_component__["a" /* LoginLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_50__component_employee_view_employee_view_employee_component__["a" /* ViewEmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__component_projects___["b" /* ViewProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_51__component_projects_view_project_project_info_project_info_component__["a" /* ProjectInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_52__component_projects_view_project_project_map_project_map_component__["a" /* ProjectMapComponent */],
                __WEBPACK_IMPORTED_MODULE_54__component_report_health_visual_health_visual_component__["a" /* HealthVisualComponent */],
                __WEBPACK_IMPORTED_MODULE_55__shared_card_card_component__["a" /* CardComponent */],
                __WEBPACK_IMPORTED_MODULE_56__component_employee_view_employee_sensor_data_sensor_data_component__["a" /* SensorDataComponent */],
                __WEBPACK_IMPORTED_MODULE_57__component_employee_view_employee_send_command_send_command_component__["a" /* SendCommandComponent */],
                __WEBPACK_IMPORTED_MODULE_37__shared__["f" /* InfoRowComponent */],
                __WEBPACK_IMPORTED_MODULE_58__component_dashboard_on_duty_chart_on_duty_chart_component__["a" /* OnDutyChartComponent */],
                __WEBPACK_IMPORTED_MODULE_37__shared__["e" /* FeedbackComponent */],
                __WEBPACK_IMPORTED_MODULE_12__component_map__["a" /* CollapsibleComponent */],
                __WEBPACK_IMPORTED_MODULE_59__shared_form_form_component__["a" /* FormComponent */],
                __WEBPACK_IMPORTED_MODULE_60__component_admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_37__shared__["g" /* LoadingComponent */],
                __WEBPACK_IMPORTED_MODULE_61__component_employee_view_employee_employee_history_map_employee_history_map_component__["a" /* EmployeeHistoryMapComponent */],
                __WEBPACK_IMPORTED_MODULE_62__shared_pipes_date_filter_pipe__["a" /* DateFilterPipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_33__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_19_angular2_datatable__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_20_ng2_google_charts__["a" /* Ng2GoogleChartsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_26_angular_font_awesome__["a" /* AngularFontAwesomeModule */],
                __WEBPACK_IMPORTED_MODULE_25_ng2_select__["SelectModule"],
                __WEBPACK_IMPORTED_MODULE_22_ngx_bootstrap__["a" /* BsDatepickerModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_21__swimlane_ngx_charts__["NgxChartsModule"],
                __WEBPACK_IMPORTED_MODULE_27__asymmetrik_ngx_leaflet__["c" /* LeafletModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_28__asymmetrik_ngx_leaflet_draw__["a" /* LeafletDrawModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_29_ng4_geoautocomplete__["a" /* Ng4GeoautocompleteModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_30_ng2_translate__["a" /* TranslateModule */].forRoot({
                    provide: __WEBPACK_IMPORTED_MODULE_31_ng2_translate_src_translate_service__["a" /* TranslateLoader */],
                    useFactory: function (http) { return new __WEBPACK_IMPORTED_MODULE_31_ng2_translate_src_translate_service__["c" /* TranslateStaticLoader */](http, '/assets/i18n', '.json'); },
                    deps: [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]]
                }),
                __WEBPACK_IMPORTED_MODULE_32_ngx_image_cropper__["a" /* ImageCropperModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5__angular_common__["DatePipe"], __WEBPACK_IMPORTED_MODULE_36__shared_services__["e" /* TabService */], __WEBPACK_IMPORTED_MODULE_36__shared_services__["b" /* ApiReloadService */], __WEBPACK_IMPORTED_MODULE_36__shared_services__["c" /* CallApiService */], __WEBPACK_IMPORTED_MODULE_37__shared__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_37__shared__["b" /* AuthService */], { provide: __WEBPACK_IMPORTED_MODULE_5__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_5__angular_common__["HashLocationStrategy"] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/component/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<app-feedback [(showFeedback)]=\"formSubmitted\" [message]=\"indicationMessage\"></app-feedback>\r\n\t<h1>{{\"AddNewAdmin\"|translate}}</h1>\r\n\t<app-form [formData]=\"adminForm\" *ngIf=\"adminForm\" (formSubmitSuccess)=\"formSubmit($event)\"></app-form>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/admin/admin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
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



var AdminComponent = (function () {
    function AdminComponent(fb) {
        this.fb = fb;
        //configuration for feedback message
        this.formSubmitted = false;
        this.indicationMessage = ["Success", "NewAdminFormsIsSubmitted"];
        this.group = this.fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
            age: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
            email: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].email, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(50)]],
            password: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8)]],
            phone: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(8), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].maxLength(15)]],
            photo: ['']
        });
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.constructAdminForm();
    };
    AdminComponent.prototype.formSubmit = function (event) {
        this.formSubmitted = event;
    };
    AdminComponent.prototype.constructAdminForm = function () {
        this.adminForm = [
            {
                form_group: this.group,
                submit_url: __WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].newAdmin,
                contain_image: true,
                form_control_names: [
                    {
                        "input_name": "Name",
                        "form_control_name": "name",
                        "type": { type: "text", options: [], accept: "" },
                        "placeholder": "ExampleName",
                        "error_message": "NameError"
                    }, {
                        "input_name": "Age",
                        "form_control_name": "age",
                        "type": { type: "number", options: [], accept: "" },
                        "placeholder": "30",
                        "error_message": "RequiredError"
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
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/component/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]])
    ], AdminComponent);
    return AdminComponent;
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
        this.CallApi.postData(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].resolveSOS + "/", JSON.stringify({ 'id': id }))
            .subscribe(function (response) {
            _this.getSosList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].sosList);
            console.log(response);
        });
    };
    //resolve alert
    AlertComponent.prototype.resolveAlert = function (id) {
        var _this = this;
        console.log(id);
        this.CallApi.postData(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].resolveAlert + "/", JSON.stringify({ 'id': id }))
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["c" /* CallApiService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n      <!-- <app-card>      \r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-heading\">{{\"EmployeeOnDuty\"|translate}}</div>\r\n          <div style=\"overflow-x: auto\">\r\n            <table class=\"table table-striped\" [mfData]=\"duties\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"10\" [(mfSortBy)]=\"name\" [(mfSortOrder)]=\"asc\">\r\n              <thead>\r\n                <tr>\r\n                  <th style=\"width: 20%\">\r\n                    <mfDefaultSorter by=\"id\">{{\"ID\"|translate}}</mfDefaultSorter>\r\n                  </th>\r\n                  <th style=\"width: 50%\">\r\n                    <mfDefaultSorter by=\"info.u_name\">{{\"Name\"|translate}}</mfDefaultSorter>\r\n                  </th>\r\n                  <th style=\"width: 10%\">\r\n                    <mfDefaultSorter by=\"w_status.health_status\">{{\"HealthStatus\"|translate}}</mfDefaultSorter>\r\n                  </th>\r\n                  <th style=\"width: 20%\">\r\n                    <mfDefaultSorter by=\"project.p_id\">{{\"ProjectID\"|translate}}</mfDefaultSorter>\r\n                  </th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let duty of mf.data\">\r\n                  <td>{{duty.w_id}}</td>\r\n                  <td>{{duty.w_name_photo.w_name}}</td>\r\n                  <td class=\"text-right\">{{duty.w_status.health_status}}</td>\r\n                  <td>{{duty.p_id}}</td>\r\n                </tr>\r\n              </tbody>\r\n              <tfoot>\r\n                <tr>\r\n                  <td colspan=\"4\">\r\n                    <div class=\"text-center\"><a [routerLink]=\"['/employee']\">More</a></div>\r\n                  </td>\r\n                </tr>\r\n              </tfoot>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </app-card> -->\r\n      <app-card>\r\n        <app-on-duty-chart [dutyChart]='dutyChart' style=\"width:100%;height:100%\"></app-on-duty-chart>\r\n      </app-card>\r\n    </div>\r\n    <div class=\"col-lg-6\">\r\n      <app-card>\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-head panel-sos\">\r\n            <span><img src=\"assets/images/sos.png\"></span>\r\n            <span><h3>   {{\"SOS\"|translate}}   </h3></span>\r\n            <span><img src=\"assets/images/sos.png\"></span>\r\n          </div>\r\n          <div style=\"overflow-x: auto\">\r\n            <table class=\"table table-striped\" [mfData]=\"sos\" #mf3=\"mfDataTable\" [mfRowsOnPage]=\"3\" [(mfSortBy)]=\"sos['w_id']\" [(mfSortOrder)]=\"asc\" *ngIf=\"sos\">\r\n              <thead>\r\n                <tr>\r\n                  <th style=\"width: 10%\">\r\n                    <mfDefaultSorter by=\"id\">{{\"ID\"|translate}}</mfDefaultSorter>\r\n                  </th>\r\n                  <th style=\"width: 20%\">\r\n                    <mfDefaultSorter by=\"name\">{{\"Name\"|translate}}</mfDefaultSorter>\r\n                  </th>\r\n                  <th style=\"width: 20%\">\r\n                    <mfDefaultSorter by=\"location\">{{\"Location\"|translate}}</mfDefaultSorter>\r\n                  </th>\r\n                  <th style=\"width: 10%\">\r\n                    <mfDefaultSorter by=\"projectId\">{{\"ProjectID\"|translate}}</mfDefaultSorter>\r\n                  </th>\r\n                  <th style=\"width: 20%\">\r\n                    <mfDefaultSorter by=\"projectName\">{{\"ProjectName\"|translate}}</mfDefaultSorter>\r\n                  </th>\r\n                  <th style=\"width: 20%\">\r\n                    <mfDefaultSorter by=\"timestamp\">{{\"Timestamp\"|translate}}</mfDefaultSorter>\r\n                  </th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let sos of mf3.data\">\r\n                  <td><a [routerLink]=\"['/employee',sos.w_id]\">{{sos.w_id}}</a></td>\r\n                  <td>{{sos.w_name_photo.w_name}}</td>\r\n                  <td>{{sos.w_location ? sos.w_location : \"-\"}}</td>\r\n                  <td><a *ngIf=\"sos.p_id!=null;else default\" [routerLink]=\"['/projects',sos.p_id]\">{{sos.p_id}}</a><ng-template #default>-</ng-template></td>\r\n                  <td>{{sos.p_data ? (sos.p_data.p_name ? sos.p_data.p_name : \"-\" ) : \"-\"}}</td>\r\n                  <td>{{sos.sos_details ? (sos.sos_details.timestamp ? (sos.sos_details.timestamp|date:(\"FormatDate\"|translate)) : \"-\") : \"-\"}}</td>\r\n                </tr>\r\n              </tbody>\r\n              <tfoot>\r\n                <tr>\r\n                  <td colspan=\"6\">\r\n                    <div class=\"text-center\"><a [routerLink]=\"['/alert']\">{{\"More\"|translate}}</a></div>\r\n                  </td>\r\n                </tr>\r\n              </tfoot>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </app-card>\r\n      <app-card> \r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-head panel-alert\">\r\n            <span><img src=\"assets/images/warning.png\"></span>\r\n            <span><h3>   {{\"Alert\"|translate}}   </h3></span>\r\n            <span><img src=\"assets/images/warning.png\"></span>\r\n          </div>\r\n          <div style=\"overflow-x: auto\">\r\n            <table class=\"table table-striped\" [mfData]=\"alerts\" #mf2=\"mfDataTable\" [mfRowsOnPage]=\"3\" [(mfSortBy)]=\"alerts['id']\" [(mfSortOrder)]=\"asc\" *ngIf=\"alerts\">\r\n              <thead>\r\n                <tr>\r\n                  <th style=\"width: 20%\">\r\n                    <mfDefaultSorter by=\"w_id\">{{\"ID\"|translate}}</mfDefaultSorter>\r\n                  </th>\r\n                  <th style=\"width: 20%\">\r\n                    <mfDefaultSorter by=\"w_id\">{{\"Name\"|translate}}</mfDefaultSorter>\r\n                  </th>\r\n                  <th style=\"width: 20%\">\r\n                    <mfDefaultSorter by=\"w_location\">{{\"EmployeeLocation\"|translate}}</mfDefaultSorter>\r\n                  </th>\r\n                  <th style=\"width: 20%\">\r\n                    <mfDefaultSorter by=\"a_type\">{{\"Trigger\"|translate}}</mfDefaultSorter>\r\n                  </th>\r\n                  <th style=\"width: 20%\">\r\n                    <mfDefaultSorter>{{\"Time\"|translate}}</mfDefaultSorter>\r\n                  </th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let alert of mf2.data\">\r\n                  <td><a [routerLink]=\"['/employee',alert.w_id]\">{{alert.w_id}}</a></td>\r\n                  <td>{{alert.w_name_photo.w_name}}</td>\r\n                  <td>{{alert.w_location}}</td>\r\n                  <td>{{alert.alert_details.type[0]|translate}}\r\n                    <span *ngIf=\"alert.alert_details.type[1]!=null&&alert.alert_details.type[2]==null\"> {{alert.alert_details.type[1]}}</span>\r\n                    <span *ngIf=\"alert.alert_details.type[1]!=null&&alert.alert_details.type[2]!=null\"> from {{alert.alert_details.type[1]}} to {{alert.alert_details.type[2]}}</span>\r\n                  </td>\r\n                  <td>{{alert.alert_details.timestamp|date:(\"FormatDate\"|translate)}}</td>\r\n                </tr>\r\n              </tbody>\r\n              <tfoot>\r\n                <tr>\r\n                  <td colspan=\"5\">\r\n                    <div class=\"text-center\"><a [routerLink]=\"['/alert']\">{{\"More\"|translate}}</a></div>\r\n                  </td>\r\n                </tr>\r\n              </tfoot>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </app-card>\r\n    </div>\r\n    \r\n  </div>\r\n  <!-- <div class=\"row\">\r\n  \t<div class=\"col-lg-12\">\r\n\t  \t<h2 class=\"text-center red\">Number of unsafe workers over time</h2>\r\n      <ngx-charts-area-chart *ngIf=\"areaChart\"\r\n        [view]=\"areaChart.view\"\r\n        [scheme]=\"areaChart.colorScheme\"\r\n        [results]=\"areaChart.data\"\r\n        [gradient]=\"areaChart.gradient\"\r\n        [xAxis]=\"areaChart.showXAxis\"\r\n        [yAxis]=\"areaChart.showYAxis\"\r\n        [showXAxisLabel]=\"areaChart.showXAxisLabel\"\r\n        [showYAxisLabel]=\"areaChart.showYAxisLabel\"\r\n        [xAxisLabel]=\"areaChart.xAxisLabel\"\r\n        [yAxisLabel]=\"areaChart.yAxisLabel\"\r\n        [autoScale]=\"areaChart.autoScale\"\r\n        (select)=\"areaChart.onSelect($event)\">\r\n      </ngx-charts-area-chart>\r\n      <ng-template #noLineChart>No Data to Display</ng-template>  -->\r\n      <!--      <google-chart [data]=\"areaChartData\" *ngIf=\"areaChartData;else noLineChart\" ></google-chart>-->\r\n\t<!--  </div>\r\n  </div> -->\r\n  <app-loading [apiCallFinish]=\"duties\"></app-loading>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".panel {\n  padding-top: 10px; }\n\n.panel-sos {\n  background-color: #d93b36;\n  color: white;\n  text-align: center; }\n\n.panel-alert {\n  background-color: #ffcc00;\n  color: white;\n  text-align: center; }\n", ""]);

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
    DashboardComponent.prototype.getWorkerUnsafeData = function (url) {
        var _this = this;
        this.callApi.getData(url)
            .subscribe(function (data) {
            _this.unsafeWorkers = data[0].data;
            _this.getLineChart();
        });
    };
    DashboardComponent.prototype.getLineChart = function () {
        // let areaData=[] as any;
        // areaData.push(['year','Unsafe workers']);
        // for (let worker of this.unsafeWorkers) {
        // 	areaData.push([worker.year,+worker.number]);
        // }
        // this.areaChartData =  {
        //   chartType: 'AreaChart',
        //   dataTable: areaData,
        //   options: {
        //   		'legend':'top',
        //   		'height':600,
        //   		'colors':['red','rgb(192,0,0)']
        //   },
        // };
        var arr = [];
        var series = [];
        this.unsafeWorkers.forEach(function (year) {
            series.push({ name: year.year, value: +year.number });
        });
        arr.push({ name: "worker", series: series });
        console.log(arr);
        this.areaChart = new Chart(arr);
    };
    DashboardComponent.prototype.getDutyChart = function (url) {
        var _this = this;
        this.callApi.getData(url).subscribe(function (data) {
            _this.dutyChart = data;
        });
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/component/dashboard/dashboard.component.html"),
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
        this.dutyChart = [];
        this.category = ["Ok", "Unhealthy", "NotOnDevice"];
        this.translate.onLangChange.subscribe(function (event) {
            // console.log(this.translatedCategory);
            _this.getTranslatedCategory()
                .then(function (value) {
                _this.updateChart(value);
            });
            console.log("update chart via translation change");
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

module.exports = "<div>\r\n  <h1>{{\"AddNewUser\"|translate}}</h1>\r\n  <hr/>\r\n  <form (ngSubmit)=\"onSubmit(employeeForm.value)\" [formGroup]=\"employeeForm\" novalidate>\r\n    <div class=\"padding-top row form-group\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"Name\"|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <input class=\"form-control\" formControlName=\"name\" type=\"text\" placeholder=\"John smith\" />\r\n        <div class=\"warn\" *ngIf=\"!employeeForm.controls['name'].valid&&employeeForm.controls['name'].touched\">Please enter name in less than 50 character</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row form-group\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"PhoneNumber\"|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <input class=\"form-control\" formControlName=\"phone\" type=\"text\" placeholder=\"+6018-8888888\"/>\r\n        <div class=\"warn\" *ngIf=\"!employeeForm.controls['phone'].valid&&employeeForm.controls['phone'].touched\">Please enter valid phone number</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row form-group\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"EmailAddress\"|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <input class=\"form-control\" formControlName=\"email\" type=\"email\" placeholder=\"example@gmail.com\" />\r\n        <div class=\"warn\" *ngIf=\"!employeeForm.controls['email'].valid&&employeeForm.controls['email'].touched\">Please Enter valid email address</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row form-group\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"ProjectID\"|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <div *ngIf=\"projects['length']<=0; else project_select\">\r\n          No group available\r\n        </div>\r\n        <ng-template #project_select>\r\n          <ng-select \r\n            [allowClear]=\"true\"\r\n            [items]=\"projects\"\r\n            (selected)=\"selected($event)\" *ngIf=\"projects[0]!=null\"\r\n            placeholder=\"No group selected\">\r\n          </ng-select>\r\n        </ng-template>\r\n        <div class=\"warn\" *ngIf=\"!employeeForm.controls['projectID'].valid&&employeeForm.controls['projectID'].touched\">This is required</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row form-group\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"Address\"|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <input class=\"form-control\" formControlName=\"address\" type=\"text\" placeholder=\"Enter Address\" />\r\n        <div class=\"warn\" *ngIf=\"!employeeForm.controls['address'].valid&&employeeForm.controls['address'].touched\">Please enter address in less than 80 character</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row form-group\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"Age\"|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <input class=\"form-control\" formControlName=\"age\" type=\"number\" placeholder=\"30\" />\r\n        <div class=\"warn\" *ngIf=\"!employeeForm.controls['age'].valid&&employeeForm.controls['age'].touched\">This is required</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row form-group\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"Photo\"|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-5\">\r\n        <input class=\"form-control\" type=\"file\" (change)=\"fileUpload($event)\" accept=\"image/*\" #fileInput/>\r\n      </div>\r\n      <div class=\"col-lg-2\">\r\n        <img *ngIf=\"file else nofile\" [src]=\"file\" height=\"40px\" alt=\"image preview\"/>\r\n        <ng-template #nofile>\r\n          <p>{{\"NoPreview\"|translate}}</p>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row form-group\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"Position\"|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <ng-select [allowClear]=\"true\"\r\n        [items]=\"position\"\r\n        (selected)=\"selectedPosition($event)\" *ngIf=\"position[0]!=null\"\r\n          placeholder=\"No position selected\">\r\n        </ng-select>\r\n        <div class=\"warn\" *ngIf=\"!employeeForm.controls['position'].valid&&employeeForm.controls['position'].touched\">This is required</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row form-group\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"Blood\"|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <select class=\"form-control\" formControlName=\"blood\">\r\n          <option>A+</option>\r\n          <option>A-</option>\r\n          <option>B+</option>\r\n          <option>B-</option>\r\n          <option>AB+</option>\r\n          <option>AB-</option>\r\n          <option>O+</option>\r\n          <option>O-</option>\r\n        </select>\r\n        <div class=\"warn\" *ngIf=\"!employeeForm.controls['blood'].valid&&employeeForm.controls['blood'].touched\">This is required</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row form-group\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"emergencyContactName\"|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <input class=\"form-control\" formControlName=\"emergencyContactName\" type=\"text\" placeholder=\"John smith\" />\r\n        <div class=\"warn\" *ngIf=\"!employeeForm.controls['emergencyContactName'].valid&&employeeForm.controls['emergencyContactName'].touched\">Please enter name in less than 50 character</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row form-group\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"emergencyContactPhone\"|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <input class=\"form-control\" formControlName=\"emergencyContactPhone\" type=\"text\" placeholder=\"+6018-8888888\"/>\r\n        <div class=\"warn\" *ngIf=\"!employeeForm.controls['emergencyContactPhone'].valid&&employeeForm.controls['emergencyContactPhone'].touched\">Please enter valid phone number</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row form-group\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"Height\"|translate}} (cm)</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <input class=\"form-control\" formControlName=\"height\" type=\"number\" placeholder=\"175\"/>\r\n        <div class=\"warn\" *ngIf=\"!employeeForm.controls['height'].valid&&employeeForm.controls['height'].touched\">Enter between 0 to 280</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row form-group\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"Weight\"|translate}} (kg)</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <input class=\"form-control\" formControlName=\"weight\" type=\"number\" placeholder=\"75\"/>\r\n        <div class=\"warn\" *ngIf=\"!employeeForm.controls['weight'].valid&&employeeForm.controls['weight'].touched\">Enter between 10 to 200</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row form-group\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{\"DeviceID\"|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\">\r\n        <input class=\"form-control\" formControlName=\"devid\" type=\"text\" placeholder=\"\"/>\r\n        <div class=\"warn\" *ngIf=\"!employeeForm.controls['devid'].valid&&employeeForm.controls['devid'].touched\">Enter a device id</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"padding-top row\">\r\n      <div class=\"col-lg-2 offset-lg-10\">\r\n        <button type=\"submit\" [disabled]=\"!employeeForm.valid\" class=\"btn btn-block btn-success\">{{\"Add\"|translate}}</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

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
        this.getProjectList(__WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].projectListOngoing);
        this.assignPositionDropdown();
    }
    AddEmployeeComponent.prototype.ngOnInit = function () {
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

module.exports = "<div class=\"container-fluid\">\r\n  <!-- alert to let user know if form submitted successfully -->\r\n  <app-feedback [(showFeedback)]=\"formSubmitted\" [message]=\"indicationMessage\"></app-feedback>\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n    \t<h1>{{\"EmployeeList\"|translate}}</h1>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"offset-lg-5 col-lg-2\">\r\n      <button class=\"btn btn-block btn-success\" (click)=\"openModalBox()\">{{\"Add\"|translate}}</button>\r\n    </div>\r\n    <div class=\"col-lg-5\">\r\n      <div class=\"form-group\">\r\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"filterQuery\" [placeholder]=\"'EnterUserIDorUserName'|translate\">\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"panel panel-default\">\r\n    <table class=\"table table-striped\" [mfData]=\"employees|dataFilter:filterQuery:'employeesName'\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n      <thead>\r\n        <tr>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"w_id\">{{\"ID\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"w_name_photo.w_name\">{{\"Name\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"p_id\">{{\"ProjectID\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"p_data.p_name\">{{\"ProjectName\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"w_dev_data.floor\">{{\"Level\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"w_dev_data.zone\">{{\"ZoneName\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 20%\">\r\n            <mfDefaultSorter by=\"w.w_location\">{{\"EmployeeLocation\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"w_dev_data.longitude\">{{\"Longitude\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"w_dev_data.latitude\">{{\"Latitude\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"\">{{\"Altitude\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"\">{{\"HeartRate\"|translate}} (Bpm)</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"w_status.health_status\">{{\"Status\"|translate}}</mfDefaultSorter>\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let employee of mf.data\">\r\n          <td><a [routerLink]=\"['/employee',employee.w_id]\">{{employee.w_id}}</a></td>\r\n          <td>{{employee.w_name_photo.w_name}} ({{employee.dev_id}})</td>\r\n          <td>{{employee.p_id ? employee.p_id : defaultNull}}</td>\r\n          <td>{{employee.p_data ? (employee.p_data.p_name ? employee.p_data.p_name : defaultNull) : defaultNull}}</td>\r\n          <td>{{employee.w_dev_data ? (employee.w_dev_data.floor ? employee.w_dev_data.floor : defaultNull) : defaultNull}}</td>\r\n          <td>{{employee.w_dev_data ? (employee.w_dev_data.zone ? employee.w_dev_data.zone : defaultNull) : defaultNull}}</td>\r\n          <td>{{employee.w_location ? employee.w_location : defaultNull}}</td>\r\n          <td>{{employee.w_dev_data ? (employee.w_dev_data.longitude ? employee.w_dev_data.longitude : defaultNull) : defaultNull}}</td>\r\n          <td>{{employee.w_dev_data ? (employee.w_dev_data.latitude ? employee.w_dev_data.latitude : defaultNull) : defaultNull}}</td>\r\n          <td>{{employee.w_dev_data ? (employee.w_dev_data.altitude ? employee.w_dev_data.altitude : defaultNull) : defaultNull}}</td>\r\n          <td>{{employee.w_sensor_data_ ? (employee.w_sensor_data_.hr ? employee.w_sensor_data_.hr : defaultNull) : defaultNull}}</td>\r\n          <td>{{employee.w_status ? (employee.w_status.health_status ? employee.w_status.health_status : defaultNull) : defaultNull}}</td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <td colspan=\"12\">\r\n            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n          </td>\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n  <app-loading [apiCallFinish]=\"employees\"></app-loading>\r\n</div>\r\n\r\n<!-- modal box to add employee -->\r\n<div *ngIf=\"displayModel\" class=\"modal\">\r\n  <div [ngClass]=\"{'modal-content':true}\">\r\n      <span class=\"close\" (click)=\"closeModalBox()\">&times;</span>\r\n      <app-add-employee (formSubmitSuccess)=\"formSubmit($event)\"></app-add-employee>\r\n  </div>\r\n</div>\r\n\r\n"

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
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
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

module.exports = "<div *ngIf=\"dataLoaded\">\r\n\t<!--Map -->\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-1\">\r\n\t\t\t<p>{{\"From\"|translate}} :</p>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-2 form-group\">\r\n\t\t\t<input type=\"text\"\r\n           class=\"form-control\"\r\n           id = \"date1\"\r\n           #dp1=\"bsDatepicker\"\r\n           [bsConfig]=\"bsConfig\"\r\n\t\t   bsDatepicker [(bsValue)]=\"minDate\">\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-1\">\r\n\t\t\t<p>{{\"To\"|translate}} :</p>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-2 form-group\">\r\n\t\t\t<input type=\"text\"\r\n           class=\"form-control\"\r\n           id = \"date2\"\r\n           #dp2=\"bsDatepicker\"\r\n           [bsConfig]=\"bsConfig\"\r\n\t\t   bsDatepicker [(bsValue)]=\"maxDate\">\r\n\t\t</div>\r\n\t\t\r\n\t</div>\r\n\t<div class=\"scrollmenu\">\r\n\t\t<span *ngFor=\"let histTrail of (workerHistTrail | dateFilter:minDate:maxDate)\">\r\n\t\t\t<a (click)=\"clickLatLng(histTrail.timestamp,histTrail.latLng)\">{{histTrail.timestamp}}</a>\r\n\t\t</span>\r\n\t</div>\r\n\t<div style=\"height: 40vh; width: 100%; overflow:hidden; z-index:0; display:block\" leaflet [leafletOptions]=\"options\" (leafletMapReady)=\"onMapReady($event)\">\r\n\t</div>\r\n</div>"

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
        //datepicker config
        this.bsConfig = { containerClass: "theme-default", showWeekNumbers: false, dateInputFormat: 'YYYY/MM/DD' };
        this.minDate = new Date();
        this.maxDate = new Date();
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
        this.minDate.setDate(this.minDate.getDate() - 365);
        this.maxDate.setDate(this.maxDate.getDate() + 1);
    }
    EmployeeHistoryMapComponent.prototype.ngOnInit = function () {
        var id = this._route.snapshot.paramMap.get('id');
        this.getWorkerHistLoc(__WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].workerHisLoc + "/" + id);
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
    EmployeeHistoryMapComponent.prototype.getWorkerHistLoc = function (url) {
        var _this = this;
        this.callApi.getData(url)
            .subscribe(function (data) {
            var hisLoc = data["0"].w_loc;
            _this.classifyWorkerHistLoc(hisLoc);
            _this.options.center = _this.workerHistTrail[_this.workerHistTrail.length - 1].latLng;
            _this.dataLoaded = true;
        });
    };
    EmployeeHistoryMapComponent.prototype.classifyWorkerHistLoc = function (hist) {
        var _this = this;
        console.log(hist);
        hist.forEach(function (loc) {
            var latLng = __WEBPACK_IMPORTED_MODULE_4_leaflet__["latLng"](loc.latitude, loc.longitude);
            _this.workerHistTrail.push({ "timestamp": _this.datePipe.transform(loc.timestamp, 'yyyy/MM/dd HH:mm:ss'), "latLng": latLng });
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
            if (timestamp == text) {
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
            this.newMarker(this.workerHistTrail[i].latLng, this.markerOptions, this.workerHistTrail[i].timestamp).addTo(this.historyLayers);
            workerHistLatLng.push(this.workerHistTrail[i].latLng);
        }
        this.map.addLayer(this.historyLayers);
        var polyline = __WEBPACK_IMPORTED_MODULE_4_leaflet__["polyline"](workerHistLatLng, { color: 'blue' }).addTo(map);
        this.map.fitBounds(polyline.getBounds());
        console.log('map is ready');
    };
    /* Add new stuff */
    EmployeeHistoryMapComponent.prototype.newMarker = function (latlng, options, popup) {
        var marker = __WEBPACK_IMPORTED_MODULE_4_leaflet__["marker"](latlng, options);
        if (popup != null) {
            marker.bindPopup(popup);
        }
        return marker;
    };
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

module.exports = "<div>\r\n\t<div class=\"row container\">\r\n\t\t<button class=\"col-lg-12 btn btn-success\" (click)=\"sendCommand('heartrate')\">\r\n\t\t\t<img src=\"assets/images/heartrate.png\">\r\n\t\t\t<p>{{\"ReadHeartrate\" | translate}}</p>\r\n\t\t</button>\r\n\t</div>\r\n\t<div class=\"row container\">\r\n\t\t<button class=\"col-lg-12 btn btn-danger\" (click)=\"sendCommand('shutdown')\">\r\n\t\t\t<img src=\"assets/images/smartwatch.png\">\r\n\t\t\t<p>{{\"ShutdownDevice\" | translate}}</p>\r\n\t\t</button>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/employee/view-employee/send-command/send-command.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  margin: 10px; }\n\n.container > button > img {\n  height: 100px;\n  width: auto;\n  float: right; }\n\n.container > button > p {\n  position: absolute;\n  bottom: 0;\n  font-size: 1.3rem; }\n", ""]);

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
    function SendCommandComponent(CallApi) {
        this.CallApi = CallApi;
        this.sent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SendCommandComponent.prototype.ngOnInit = function () {
    };
    SendCommandComponent.prototype.sendCommand = function (event) {
        var _this = this;
        console.log(event);
        var indicationMessage = new Array();
        var data = {
            name: event
        };
        if (event == "heartrate") {
            indicationMessage[0] = "Success";
            indicationMessage[1] = "Heart rate reading command have been sent, please wait until the heart rate data is updated (~ 1 min)";
        }
        else if (event == "shutdown") {
            indicationMessage[0] = "Success";
            indicationMessage[1] = "Shut down command have been sent";
        }
        this.CallApi.sendCommand(data, this.workerID).subscribe(function (response) {
            _this.sent.emit({ indicationMessage: indicationMessage, commandSend: true });
            console.log(response);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SendCommandComponent.prototype, "workerID", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SendCommandComponent.prototype, "sent", void 0);
    SendCommandComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-send-command',
            template: __webpack_require__("../../../../../src/app/component/employee/view-employee/send-command/send-command.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/employee/view-employee/send-command/send-command.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["c" /* CallApiService */]])
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

module.exports = "<div class=\"container-fluid\" *ngIf=\"profile\">\r\n  <!-- profile -->\r\n  <div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-8\">\r\n        <h1 class=\"inline\">{{id}} ({{profile.dev_id}})</h1>\r\n          <p class=\"inline green-font\" *ngIf=\"online\">{{\"Online\"|translate}}</p>\r\n          <p class=\"inline grey-font\" *ngIf=\"!online\">{{\"Offline\"|translate}}</p>\r\n      </div>\r\n      <div class=\"offset-lg-3 col-lg-1\">\r\n        <fa name=\"times\" class=\"close\" [routerLink]=\"['/employee']\"></fa>\r\n      </div>\r\n    </div>\r\n\r\n    <div class = \"pt-3\">\r\n      <app-feedback [(showFeedback)]=\"commandSend\" [message]=\"indicationMessage\"></app-feedback>\r\n      <div class=\"row\" style=\"min-height: 33vh\">\r\n        <div class=\"col-lg-3 text-center profile-photo\">\r\n          <div>\r\n              <img [src]=\"profile.w_name_photo.w_photo\" alt=\"your photo\"/>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-lg-6\">\r\n          <app-info-row [title]=\"'Name'\" [value]=\"profile.w_name_photo.w_name\" [edit]=\"editDetails\" [group]=\"userForm\" controlName=\"name\"></app-info-row>\r\n          <app-info-row [title]=\"'Age'\" [value]=\"profile.w_info.w_age\" [edit]=\"editDetails\" [group]=\"userForm\" controlName=\"age\"></app-info-row>\r\n          <app-info-row [title]=\"'EmailAddress'\" [value]=\"profile.w_info.w_email\" [edit]=\"editDetails\" [group]=\"userForm\" controlName=\"emailAddress\"></app-info-row>\r\n          <app-info-row [title]=\"'Contact'\" [value]=\"profile.w_info.w_contact\" [edit]=\"editDetails\" [group]=\"userForm\" controlName=\"contact\"></app-info-row>\r\n          <!-- <app-info-row [title]=\"'EmployeeLocation'\" [value]=\"profile.w_location\" [edit]=\"cannotEdit\" [group]=\"userForm\" controlName=\"none\"></app-info-row> -->\r\n          <app-info-row [title]=\"'Position'\" [value]=\"profile.w_info.w_position\" [edit]=\"editDetails\" [group]=\"userForm\" controlName=\"position\"></app-info-row>\r\n          <app-info-row [title]=\"'emergencyContactName'\" [value]=\"profile.w_emergency.emergencyContactName\" [edit]=\"editDetails\" [group]=\"userForm\" controlName=\"emergencyContactName\"></app-info-row>\r\n          <app-info-row [title]=\"'emergencyContactPhone'\" [value]=\"profile.w_emergency.emergencyContactPhone\" [edit]=\"editDetails\" [group]=\"userForm\" controlName=\"emergencyContactPhone\"></app-info-row>\r\n          <!-- <app-info-row [title]=\"'DeviceID'\" [value]=\"profile.dev_id\" [edit]=\"editDetails\" [group]=\"userForm\" controlName=\"deviceID\"></app-info-row> -->\r\n          <!-- photo upload -->\r\n          <div class=\"row\" *ngIf=\"editDetails\">\r\n              <div class=\"col-lg-5 bold\"><p>{{'NewPhoto'|translate}}</p></div>\r\n              <span class=\"col-lg-1\" style=\"text-align: center\"><p>:</p></span>\r\n              <div class=\"col-lg-4\">\r\n                  <input class=\"form-control\" type=\"file\" (change)=\"fileUpload($event,cropper)\" accept=\"image/*\" #fileInput/>\r\n                </div>\r\n                <div class=\"col-lg-2\">\r\n                  <img *ngIf=\"file else nofile\" [src]=\"file\" height=\"30px\" alt=\"image preview\"/>\r\n                  <ng-template #nofile>\r\n                    <p>{{\"NoPreview\"|translate}}</p>\r\n                  </ng-template>\r\n                </div>\r\n          </div>\r\n        </div>\r\n        <app-send-command class=\"col-lg-3\" [workerID]=\"profile.dev_id\" (sent)=receiveSentStatus($event)></app-send-command>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- graphs -->\r\n    <hr *ngIf=\"sensorData\"/>\r\n    <div class = \"pt-3\">    \r\n      <h2>{{\"SensorData\"|translate}}</h2>    \r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <app-info-row [title]=\"'LastReceiveDate'\" [value]=\"profile.dev_time|date:('FormatDateWithSecond'|translate)\" [edit]=\"false\"></app-info-row>          \r\n          <!-- <p class=\"preserve-white-space\">{{'LastReceiveDate'|translate}}            : {{profile.dev_time|date:('FormatDateWithSecond'|translate)}}</p> -->\r\n          <app-info-row [title]=\"'EmployeeLocation'\" [value]=\"profile.w_location\" [edit]=\"false\"></app-info-row>                    \r\n          <!-- <p>{{'EmployeeLocation'|translate}} (lng,lat) : {{profile.w_dev_data.longitude}},{{profile.w_dev_data.latitude}}</p> -->\r\n          <!-- <app-info-row [title]=\"'LastReceiveDate'\" [value]=\"profile.dev_time|date:('FormatDateWithSecond'|translate)\" [edit]=\"cannotEdit\" controlName=\"none\" [group]=\"userForm\"></app-info-row> -->\r\n        </div>\r\n      </div>\r\n      <div class=\"row\" style=\"overflow-x: auto\">\r\n        <app-sensor-data *ngIf=\"sensorData\" [sensorData]=\"sensorData\"></app-sensor-data>\r\n      </div>\r\n    </div>\r\n    <hr *ngIf=\"project\"/>\r\n\r\n    <!-- History map -->\r\n    <div class = \"pt-3\">\r\n      <h2>{{\"LocationHistory\"|translate}}</h2>\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-12\">\r\n          <app-employee-history-map></app-employee-history-map>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <hr *ngIf=\"project\"/>\r\n    <!-- table -->\r\n    <div class = \"pt-3\">\r\n      <h2>{{\"AttachedProjects\"|translate}}</h2>\r\n      <div class=\"panel panel-default\">\r\n        <table class=\"table table-striped\" [mfData]=\"project\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n          <thead>\r\n            <tr>\r\n              <th style=\"width: 10%\">\r\n                <mfDefaultSorter by=\"w_p_id\">{{\"ProjectID\"|translate}}</mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 10%\">\r\n                <mfDefaultSorter by=\"w_name\">{{\"ProjectName\"|translate}}</mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 10%\">\r\n                <mfDefaultSorter by=\"p_location\">{{\"ProjectLocation\"|translate}}</mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 10%\">\r\n                <mfDefaultSorter by=\"p_workers_number\">{{\"NumberOfWorkers\"|translate}}</mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 10%\">\r\n                <mfDefaultSorter by=\"p_floor\">{{\"NumberOfFloor\"|translate}}</mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 10%\">\r\n                <mfDefaultSorter by=\"p_area\">{{\"Size\"|translate}}</mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 10%\">\r\n                <mfDefaultSorter by=\"p_admin\">{{\"ProjectManager\"|translate}}</mfDefaultSorter>\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let proj of mf.data\">\r\n              <td><a [routerLink]=\"['/projects',proj.p_id]\">{{proj.p_id}}</a></td>\r\n              <td>{{proj.p_data.p_name}}</td>\r\n              <td>{{profile.w_location||\"-\"}}</td>\r\n              <!-- <td>{{proj.workernum}}</td> --><td>2</td>\r\n              <td>{{proj.p_data.p_floor}}</td>\r\n              <td>{{proj.p_data.p_area}}</td>\r\n              <td>{{proj.p_admin}}</td>\r\n            </tr>\r\n          </tbody>\r\n          <tfoot>\r\n            <tr>\r\n              <td colspan=\"7\">\r\n                <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n              </td>\r\n            </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"offset-lg-8 col-lg-2\">\r\n      <button *ngIf=\"!editDetails else SaveButton\" class=\"btn btn-block btn-primary\" (click)=\"edit()\">{{\"EditDetails\"|translate}}</button>\r\n    </div>\r\n\r\n    <ng-template #SaveButton>\r\n      <form [formGroup]=\"userForm\" (ngSubmit)=\"onSubmit(userForm.value)\">\r\n        <input type=\"submit\" class=\"btn btn-block btn-success\" value='{{\"SaveChanges\"|translate}}'/>\r\n      </form>\r\n    </ng-template>\r\n\r\n    <div class=\"col-lg-2\">\r\n      <button class=\"btn btn-block btn-danger\" (click)=\"removeButtonPressed()\">{{\"Delete\"|translate}}</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/employee/view-employee/view-employee.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* The Close Button */\n.close {\n  color: #aaa;\n  position: absolute;\n  right: 10px;\n  font-size: 28px;\n  font-weight: bold; }\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer; }\n\n.profile-photo {\n  max-height: 33vh;\n  border-right: 1px solid;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n\n.profile-photo > div > img {\n  height: auto;\n  max-height: 33vh;\n  width: auto;\n  max-width: 100%;\n  padding-right: 2.5%; }\n\n.green-font {\n  background-color: green;\n  color: white;\n  border-radius: 15%; }\n\n.grey-font {\n  background-color: grey;\n  color: white;\n  border-radius: 15%; }\n\n.inline {\n  display: inline; }\n\n.preserve-white-space {\n  white-space: pre; }\n", ""]);

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
    function ViewEmployeeComponent(_route, callApi, fb, location, http) {
        this._route = _route;
        this.callApi = callApi;
        this.fb = fb;
        this.location = location;
        this.http = http;
        this.rowsOnPage = 5;
        this.sortBy = "w_id";
        this.sortOrder = "asc";
        this.editDetails = false;
        this.cannotEdit = false;
        //configuration for feedback message
        this.commandSend = false;
        //boolean to show if user online
        this.online = null;
    }
    ViewEmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this._route.snapshot.paramMap.get('id');
        this.getWorkerDetail(__WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].workerList + "/" + this.id);
        this.intervalHook = setInterval(function () {
            _this.getWorkerDetail(__WEBPACK_IMPORTED_MODULE_2__shared_services__["a" /* ApiCmd */].workerList + "/" + _this.id);
        }, 20000);
    };
    ViewEmployeeComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.intervalHook);
    };
    //call api to get this id worker's data
    ViewEmployeeComponent.prototype.getWorkerDetail = function (url) {
        var _this = this;
        this.callApi.getData(url)
            .subscribe(function (data) {
            _this.profile = data[0];
            // console.log(this.profile);
            _this.project = _this.profile.project;
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
        console.log("editDetails clicked");
    };
    ViewEmployeeComponent.prototype.removeButtonPressed = function () {
        if (confirm("Confirm to delete " + this.id)) {
            this.removeWorker(this.id);
            console.log(this.id + " is confirm to remove");
        }
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
    //to signified if command send successfully
    ViewEmployeeComponent.prototype.receiveSentStatus = function (event) {
        this.indicationMessage = event['indicationMessage'];
        this.commandSend = event['commandSend'];
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
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* Http */]])
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
    function LoginComponent(authService) {
        var _this = this;
        this.authService = authService;
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
        });
    }
    LoginComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.validating = true;
        this.authService.login(this.user);
        //check for validity~~~~
        //check using user.username and user.password
    };
    LoginComponent.prototype.ngOnInit = function () {
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared__["b" /* AuthService */]])
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

module.exports = "\r\n<div id=\"accordion\" aria-multiselectable=\"true\" *ngIf=\"allProjects\">\r\n    <div class=\"card\" *ngFor=\"let project of allProjects; let i = index\">\r\n      <div class=\"card-header\" role=\"tab\">\r\n        <div data-toggle=\"collapse\" data-parent=\"#accordion\" (click)=\"isCollapsed[i] = !isCollapsed[i]\"\r\n          [attr.aria-expanded]=\"!isCollapsed\" class=\"clickable\">\r\n          <h5 class=\"mb-0\">\r\n            {{project['p_id']}} | {{project['p_data']['p_name']}}\r\n            <span style=\"float:right\" *ngIf=\"!isCollapsed[i] else caretDown\"><i class=\"fa fa-caret-left\" aria-hidden=\"true\"></i></span>\r\n            <ng-template #caretDown>\r\n              <span style=\"float:right\"><i class=\"fa fa-caret-down\" aria-hidden=\"true\"></i></span>\r\n            </ng-template>\r\n          </h5>\r\n        </div>\r\n      </div>\r\n      <div class=\"collapse show\" *ngIf=\"isCollapsed[i]\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-6\">\r\n              <p><strong>{{\"EmployeeID\"|translate}}</strong></p>\r\n            </div>\r\n            <div class=\"col-lg-6\" align=\"right\">\r\n              <p><strong>{{\"DeviceID\"|translate}}</strong></p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngFor=\"let worker of project['worker']\">\r\n            <div class=\"col-lg-4\">\r\n              <p class=\"clickable\" (click)=\"showLoc(worker['w_dev_data']['latitude'],worker['w_dev_data']['longitude'],worker['w_id'])\" >{{worker['w_id']}}</p>\r\n            </div>\r\n            <div class=\"col-lg-4\">\r\n                <p class=\"inline green-font\" *ngIf=\"userOnline(worker['w_dev_data']['timestamp'])\">{{\"Online\"|translate}}</p>\r\n                <p class=\"inline grey-font\" *ngIf=\"!userOnline(worker['w_dev_data']['timestamp'])\">{{\"Offline\"|translate}}</p>\r\n            </div>\r\n            <div class=\"col-lg-4\" align=\"right\">\r\n              <p class=\"inline blue\">{{worker['w_dev']}}</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/component/map/collapsible/collapsible.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".clickable {\n  cursor: pointer; }\n  .clickable:hover {\n    color: blue; }\n\n.green-font {\n  background-color: green;\n  color: white;\n  border-radius: 15%; }\n\n.grey-font {\n  background-color: grey;\n  color: white;\n  border-radius: 15%; }\n\n.inline {\n  display: inline; }\n", ""]);

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
        console.log(timeDifferentInMin);
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

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-3\" style=\"width:inherit; height: 85vh;overflow-y: scroll;\" *ngIf=\"collapsibleNeeded\">\r\n       <app-collapsible (workerLocation)=\"focusOnMap($event)\"></app-collapsible>\r\n    </div>\r\n    <div [ngClass]=\"{'col-lg-9':collapsibleNeeded,'col-lg-12':!collapsibleNeeded}\">\r\n      <div id='height' style=\"width:inherit; height: 85vh; position:relative\">\r\n        <!-- Searchbox -->\r\n        <div>\r\n          <ng4geo-autocomplete \r\n          [userSettings]=\"searchbox_Settings\"\r\n          (componentCallback)=\"searchbox_AutoCompleteCallback($event)\"\r\n          ></ng4geo-autocomplete>\r\n        </div>\r\n        <!-- END OF SEARCH BOX -->\r\n        <!-- Modal box -->\r\n        <div id=\"myModal\" class=\"modal\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\" style=\"padding-top:30px\"></div>\r\n            <form (ngSubmit)=\"modalBox_submit(polygonForm.value)\" [formGroup]=\"polygonForm\" class=\"modal-body\" name=\"polygonForm\">\r\n              <div class=\"row form-group\">\r\n                <div class=\"col-lg-4\"><p>{{\"AddTo\"|translate}}</p></div>\r\n                <div class=\"col-lg-1\"><p>:</p></div>\r\n                <div class=\"col-lg-7\">\r\n                  <select class=\"form-control\" formControlName=\"polygon_project_id\" id=\"polygon_project_id\" name=\"polygon_project_id\" required [(ngModel)]=\"polygon_project_id_valid\">\r\n                    <option style=\"font-style:italic\" value=\"-1\" disabled=\"true\" [selected]=\"!polygon_project_id_valid\">{{\"SelectAProject\"|translate}}</option>\r\n                  </select>\r\n                  <div class=\"alert\" *ngIf=\"!polygonForm.controls['polygon_project_id'].valid && polygonForm.controls['polygon_project_id'].touched\">This is required</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-group\">\r\n                <div class=\"col-lg-4\"><span>{{\"Type\"|translate}}</span></div>\r\n                <div class=\"col-lg-1\"><span>:</span></div>\r\n                <div class=\"col-lg-7\">\r\n                  <select class=\"form-control\" formControlName=\"polygon_type\" id=\"polygon_type\" name=\"polygon_type\" required [(ngModel)]=\"polygon_type_valid\">\r\n                    <option style=\"font-style:italic\" value=\"-1\" disabled=\"true\" [selected]=\"!polygon_type_valid\">{{\"SelectTheTypeOfOperation\"|translate}}</option>\r\n                    <option>{{\"Geofencing\"|translate}}</option>\r\n                    <option>{{\"Zoning\"|translate}}</option>\r\n                  </select>\r\n                  <div class=\"alert\" *ngIf=\"!polygonForm.controls['polygon_type'].valid && polygonForm.controls['polygon_type'].touched\">This is required</div>\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"(polygon_type_valid === 'Zoning' || polygon_type_valid === '分区')\">\r\n                <div class=\"row form-group\">\r\n                  <div class=\"col-lg-4\"><span>{{\"ZoneName\"|translate}}</span></div>\r\n                  <div class=\"col-lg-1\"><span>:</span></div>\r\n                  <div class=\"col-lg-7\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"polygon_zone_name\" id=\"polygon_zone_name\" name=\"polygon_zone_name\" required placeholder=\"Eg. A\">\r\n                    <div class=\"alert\" *ngIf=\"!polygonForm.controls['polygon_zone_name'].valid && polygonForm.controls['polygon_zone_name'].touched\">This is required</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row form-group\">\r\n                  <div class=\"col-lg-4\"><span>{{\"ZoneLevel\"|translate}}</span></div>\r\n                  <div class=\"col-lg-1\"><span>:</span></div>\r\n                  <div class=\"col-lg-7\">\r\n                    <input type=\"text\" class=\"form-control\" formControlName=\"polygon_zone_level\" id=\"polygon_zone_level\" name=\"polygon_zone_level\" required placeholder=\"G\">\r\n                    <div class=\"alert\" *ngIf=\"!polygonForm.controls['polygon_zone_level'].valid && polygonForm.controls['polygon_zone_level'].touched\">This is required</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row form-group\">\r\n                <div class=\"col-lg-4\"></div>\r\n                <div class=\"col-lg-4\">\r\n                  <button type=\"submit\" \r\n                    class=\"btn btn-success btn-block\" \r\n                    [disabled]=\"(!(polygonForm.controls['polygon_type'].valid && polygonForm.controls['polygon_project_id'].valid)) ||\r\n                    (!(((polygon_type_valid === 'Zoning' || polygon_type_valid === '分区') && polygonForm.controls['polygon_zone_name'].valid && polygonForm.controls['polygon_zone_level'].valid) || (polygon_type_valid === 'Geofencing' || polygon_type_valid === '地理围栏')))\"\r\n                    (click)=\"modalBox_valid()\"\r\n                  >\r\n                    {{\"Ok\"|translate}}\r\n                  </button>\r\n                </div>\r\n                <div class=\"col-lg-4\"></div>\r\n                <!-- <span><button type=\"submit\" style=\"width:25%;\" class=\"btn btn-block btn-success\" (click)=\"modalBox_cancel()\">Cancel</button></span> -->\r\n              </div>\r\n            </form>\r\n            <div class=\"modal-footer\" style=\"padding-top:30px\"></div>\r\n          </div>\r\n        </div>\r\n        <!-- END OF MODAL BOX -->\r\n        <!-- Map -->\r\n        <div  style=\"height: 90%; width: 100%; overflow:hidden; z-index:0; display:block\"\r\n          leaflet \r\n          [leafletOptions]=\"options\" \r\n          [leafletLayersControl]=\"layersControl\"\r\n          (leafletMapReady)=\"onMapReady($event)\"\r\n          >\r\n        </div>\r\n      <!-- END OF MAP -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
    function MapComponent(callApi, _route, fb) {
        this.callApi = callApi;
        this._route = _route;
        this.fb = fb;
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
                __WEBPACK_IMPORTED_MODULE_5_leaflet__["tileLayer"]('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 })
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
    };
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
    MapComponent.prototype.newPopup = function (newPopupDetails, id, name, status, photo, location, type, lastReceivedLocation) {
        var popup = newPopupDetails("ID", id) +
            newPopupDetails("Name", name) +
            newPopupDetails("Status", status) +
            newPopupDetails("Location", location) +
            newPopupDetails("Last Received Location", lastReceivedLocation);
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
            popup += "\n            <div style=\"text-align:center\">\n                <button onClick=\"window.location='#/" + type + "/" + id + "'\" style=\" font-family: Roboto; background-color: #4682B4; color: #ffffff; padding: 5px; border: none;\"> More Details </button>\n            </div>\n            ";
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
        this.projectLayers.addLayer(this.newMarker({ lat: project.p_data.p_latitude, lng: project.p_data.p_longitude }, this.markerOptions, this.newPopup(this.newPopupDetails, project.p_id, project.p_data.p_name, null, project.p_data.p_photo, project.p_data.p_location, "projects", null)));
        for (var gpointer in project.geofence) {
            var geofence = project.geofence[gpointer];
            this.editableLayers.addLayer(this.newPolygon(geofence.geofence_latlng, this.polygonOptions, this.newPopup(this.newPopupDetails, project.p_id, null, null, null, null, null, null) + '<div style="display:none;">geofence_id:' + geofence.geofence_id + '</div>').setStyle(this.geofenceOptions));
        }
        for (var zpointer in project.zone) {
            var zone = project.zone[zpointer];
            this.editableLayers.addLayer(this.newPolygon(zone.zone_latlng, this.polygonOptions, this.newPopup(this.newPopupDetails, project.p_id, zone.zone_id, null, null, null, null, null)).setStyle(this.zoneOptions));
        }
        this.setWorker(project);
    };
    MapComponent.prototype.loadFromStorage_worker = function (data) {
        for (var pointer in data) {
            this.setWorker(data[pointer]);
        }
    };
    MapComponent.prototype.setWorker = function (project) {
        var zoomDifference = this.map.getZoom() - this.initZoom;
        var radius = 1.5625 * Math.pow(2, zoomDifference);
        for (var wpointer in project.worker) {
            var worker = project.worker[wpointer];
            if (worker.w_dev_data === false || worker.w_dev_data.length == 0) {
                continue;
            }
            var worker_latlng = { lat: worker.w_dev_data.latitude, lng: worker.w_dev_data.longitude };
            if (worker.w_id in this.worker) {
                var worker_ref = this.worker[worker.w_id];
                var worker_ref_latlng = worker_ref.marker.getLatLng();
                if (worker_ref_latlng.lat == worker_latlng.lat && worker_ref_latlng.lng == worker_latlng.lng) {
                    continue;
                }
                else {
                    this.workerLayers.removeLayer(worker_ref.marker);
                    if ('circle' in worker_ref) {
                        this.workerLocationLayers.removeLayer(worker_ref.circle);
                    }
                }
            }
            var workerPopup = this.newPopup(this.newPopupDetails, worker.w_id, worker.w_name_photo.w_name, worker.w_status.health_status, worker.w_name_photo.w_photo, null, "employee", worker.dev_time);
            var workerMarker = this.newCircleMarker(worker_latlng, null, workerPopup);
            this.workerLayers.addLayer(workerMarker);
            var workerLocMarker = null;
            if (worker.w_latlng_valid === 'V' && (worker.w_dev_data.zone === 'Not in zone' || worker.w_dev_data.zone === '' || !('zone' in worker.w_dev_data))) {
                workerLocMarker = this.newCircleMarker(worker_latlng, null, workerPopup);
                this.workerLocationLayers.addLayer(workerLocMarker);
            }
            if (workerLocMarker !== null) {
                this.worker[worker.w_id] = { marker: workerMarker, circle: workerLocMarker };
            }
            else {
                this.worker[worker.w_id] = { marker: workerMarker };
            }
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
                layer.bindPopup(new __WEBPACK_IMPORTED_MODULE_5_leaflet__["popup"]().setContent(newPopup(newPopupDetails, data.project_id, null, null, null, null, null, null)));
                layer.setStyle(geofenceOptions);
            }
            else {
                layer.bindPopup(new __WEBPACK_IMPORTED_MODULE_5_leaflet__["popup"]().setContent(newPopup(newPopupDetails, data.project_id, data.zone_id, null, null, null, null, null)));
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
            console.log(e);
        });
        legend.onAdd = function (map) {
            var div = __WEBPACK_IMPORTED_MODULE_5_leaflet__["DomUtil"].create('div', 'info legend'), legend = ['User', 'Geofence', 'Zone'], labels = [];
            // loop through our density intervals and generate a label with a colored square for each interval
            for (var i = 0; i < legend.length; i++) {
                div.innerHTML +=
                    '<i style="background:' + getColor(legend[i]) + '">&nbsp;&nbsp;&nbsp;</i> ' +
                        legend[i] + '<br>';
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
            // console.log(worker_id);
            // console.log(w_id);
            if (w_id == worker_id) {
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__shared_services__["c" /* CallApiService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]])
    ], MapComponent);
    return MapComponent;
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

module.exports = "<div [formGroup]=\"group\">\r\n<div class=\"padding-top row\">\r\n  <div class=\"col-lg-4 \">\r\n    <p>{{\"ProjectID\"|translate}}</p>\r\n  </div>\r\n  <div class=\"col-lg-1\">\r\n    <p>:</p>\r\n  </div>\r\n  <div class=\"col-lg-7\">\r\n    <input class=\"form-control\" formControlName=\"projectId\" type=\"text\" placeholder=\"PJ0099\" />\r\n    <div class=\"warn\" *ngIf=\"!group.controls['projectId'].valid&&group.controls['projectId'].touched\">Please enter group id in less than 50 character</div>\r\n  </div>\r\n</div>\r\n<div class=\"padding-top row\">\r\n  <div class=\"col-lg-4 \">\r\n    <p>{{\"ProjectName\"|translate}}</p>\r\n  </div>\r\n  <div class=\"col-lg-1\">\r\n    <p>:</p>\r\n  </div>\r\n  <div class=\"col-lg-7\">\r\n    <input class=\"form-control\" formControlName=\"projectName\" type=\"text\" placeholder=\"Project99\" />\r\n    <div class=\"warn\" *ngIf=\"!group.controls['projectName'].valid&&group.controls['projectName'].touched\">Please enter group name in less than 50 character</div>\r\n  </div>\r\n</div>\r\n<div class=\"padding-top row\">\r\n  <div class=\"col-lg-4 \">\r\n    <p>{{\"ProjectPhoto\"|translate}}</p>\r\n  </div>\r\n  <div class=\"col-lg-1\">\r\n    <p>:</p>\r\n  </div>\r\n  <div class=\"col-lg-5\">\r\n    <input class=\"form-control\" type=\"file\" (change)=\"fileUpload($event)\" accept=\"image/*\" #fileInput />\r\n  </div>\r\n  <div class=\"col-lg-2\">\r\n    <img *ngIf=\"preview else nofile\" [src]=\"preview\" height=\"40px\" alt=\"image preview\"/>\r\n    <ng-template #nofile>\r\n      <p>{{\"NoPreview\"|translate}}</p>\r\n    </ng-template>\r\n  </div>\r\n</div>\r\n<div class=\"padding-top row\">\r\n  <div class=\"col-lg-4 \">\r\n    <p>{{\"ProjectManager\"|translate}}</p>\r\n  </div>\r\n  <div class=\"col-lg-1\">\r\n    <p>:</p>\r\n  </div>\r\n  <div class=\"col-lg-7\">\r\n    <ng-select [allowClear]=\"true\"\r\n              [items]=\"items\"\r\n              (selected)=\"selected($event)\" *ngIf=\"items[0]!=null\"\r\n              placeholder=\"No admin selected\">\r\n    </ng-select>\r\n    <div class=\"warn\" *ngIf=\"!group.controls['projectAdmin'].valid&&group.controls['projectAdmin'].touched\">This is required</div>\r\n  </div>\r\n</div>\r\n<div class=\"padding-top row\">\r\n  <div class=\"col-lg-4 \">\r\n    <p>{{\"StartDate\"|translate}}</p>\r\n  </div>\r\n  <div class=\"col-lg-1\">\r\n    <p>:</p>\r\n  </div>\r\n  <div class=\"col-lg-7\">\r\n    <input type=\"text\"\r\n           class=\"form-control\"\r\n           id = \"startDate\"\r\n           #dp=\"bsDatepicker\"\r\n           [bsConfig]=\"bsConfig\"\r\n           bsDatepicker [(bsValue)]=\"bsValue\"\r\n           formControlName=\"projectStartDate\">\r\n     <div class=\"warn\" *ngIf=\"!group.controls['projectStartDate'].valid&&group.controls['projectStartDate'].touched\">Please Select a valid date</div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n"

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
                __WEBPACK_IMPORTED_MODULE_2_leaflet__["tileLayer"]('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18 })
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__shared_services__["c" /* CallApiService */]])
    ], ProjectLocationComponent);
    return ProjectLocationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/projects/add-project/project-workers/project-workers.component.html":
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"group\">\r\n<!-- <div class=\"row padding-top\">\r\n  <div class=\"col-lg-4\">\r\n    <p>{{\"Ok\"|translate}}Number of workers:</p>\r\n  </div>\r\n  <div class=\"col-lg-1\">\r\n    <p>:</p>\r\n  </div>\r\n  <div class=\"col-lg-7\">\r\n    <input class=\"form-control\" formControlName=\"projectNumberOfWorkers\" type=\"text\" /> -->\r\n    <!-- <div class=\"alert\" *ngIf=\"!group.controls['projectNumberOfWorkers'].valid&&group.controls['projectNumberOfWorkers'].touched\">This is required</div> -->\r\n  <!-- </div>\r\n</div> -->\r\n</div>\r\n<div class=\"row padding-top\">\r\n  <div class=\"col-lg-4\">\r\n    <p>{{\"EmployeesToAssign\"|translate}}</p>\r\n  </div>\r\n  <div class=\"col-lg-1\">\r\n    <p>:</p>\r\n  </div>\r\n  <div class=\"col-lg-7\">\r\n    <div class=\"dropdown-list\" *ngIf=\"employees\">\r\n      <div class=\"form-group\">\r\n        <label>{{\"FilterByWorkersName\"|translate}}:</label>\r\n        <input type=\"text\" class=\"form-control\" [ngClass]=\"{search:!filterQuery}\" [(ngModel)]=\"filterQuery\" placeholder=\"Search\">\r\n      </div>\r\n      <ul *ngFor=\"let employee of employees |dataFilter:filterQuery:'projectEmployeesName'\">\r\n        <li>\r\n          <!-- <div [formGroup]=\"group\"> -->\r\n          <label class=\"custom-control custom-checkbox\">\r\n            <input type=\"checkbox\" class=\"custom-control-input\" [value]=\"employee.w_id\" [checked]=\"selectedEmployees.indexOf(employee.w_id) > -1\" (change)=\"toggleEmployeeSelection(employee.w_id)\" required />\r\n            <span class=\"custom-control-indicator\"></span>\r\n            <span class=\"custom-control-description\">{{employee.w_id}} - {{employee.w_name_photo.w_name}}</span>\r\n          </label>\r\n        <!-- </div> -->\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

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

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6\">\r\n    \t<h1>{{\"ProjectList\"|translate}}</h1>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"currentTab==='All'\">\r\n    <app-projects-table [projects]=\"allProjects\"></app-projects-table>\r\n  </div>\r\n  <div *ngIf=\"currentTab==='Ongoing'\">\r\n    <app-projects-table [projects]=\"ongoingProjects\"></app-projects-table>\r\n  </div>\r\n\r\n    <!-- please change the allProjects -->\r\n  <div *ngIf=\"currentTab==='Attached'\">\r\n    <app-projects-table [projects]=\"attachedProjects\" *ngIf=\"attachedProjects\"></app-projects-table>\r\n  </div>\r\n\r\n    <!-- please change the allProjects -->\r\n  <div *ngIf=\"currentTab==='Past'\">\r\n    <app-projects-table [projects]=\"pastProjects\"></app-projects-table>\r\n  </div>\r\n  <app-loading [apiCallFinish]=\"allProjects\"></app-loading>\r\n</div>\r\n"

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
        this.attachedProjects = [];
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
                _this.attachedProjects = null;
                setTimeout(function () { _this.getAllList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].projectList), _this.getOngoingList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].projectListOngoing), _this.getPastList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].projectListPast), _this.getAttachedList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].projectListAttached); }, 2000);
            }
        });
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.getAllList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].projectList);
        this.getOngoingList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].projectListOngoing);
        this.getPastList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].projectListPast);
        this.profile = this.authService.getUserData();
        this.attachedProjects = this.attachedProjects.concat(this.profile.project);
        for (var i = 0; i < this.attachedProjects.length; i++) {
            this.attachedProjects[i]['p_admin'] = this.profile.u_name;
        }
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
    ProjectsComponent.prototype.getAttachedList = function (url) {
        var _this = this;
        this.callApi.getData(url + "/" + this.profile.u_id)
            .subscribe(function (data) {
            _this.attachedProjects = data;
            for (var i = 0; i < _this.attachedProjects.length; i++) {
                _this.attachedProjects[i]['p_admin'] = _this.profile.u_name;
            }
        });
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__("../../../../../src/app/component/projects/projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/projects/projects.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["e" /* TabService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services__["b" /* ApiReloadService */],
            __WEBPACK_IMPORTED_MODULE_1__shared_services__["c" /* CallApiService */],
            __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* AuthService */]])
    ], ProjectsComponent);
    return ProjectsComponent;
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

module.exports = "<div class=\"row\" style=\"padding-top:1%\">\r\n  <div class=\"offset-lg-7 col-lg-2\">\r\n    <button class=\"btn btn-block btn-primary\" *ngIf=\"!edit else done\" (click)=\"edit=!edit\">{{\"Edit\"|translate}}</button>\r\n    <ng-template #done>\r\n      <button class=\"btn btn-block btn-info\" (click)=\"edit=!edit\">{{\"Done\"|translate}}</button>\r\n    </ng-template>\r\n  </div>\r\n  <div class=\"col-lg-3\">\r\n    <div class=\"form-group\">\r\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"filterQuery\" [placeholder]=\"'EnterUserIDorUserName' | translate\">\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"panel panel-default\" *ngIf=\"project\">\r\n  <div class=\"row\" *ngIf=\"edit\">\r\n    <div class=\"col-lg-9 form-group\">\r\n      <input class=\"form-control\" type=\"text\" placeholder=\"Worker ID\" #workerId>\r\n    </div>\r\n    <div class=\"col-lg-3\">\r\n      <button class=\"btn btn-block btn-success\" (click)=\"addWorkerToProject(project.p_id,workerId.value)\">{{\"AddToProject\"|translate}}</button>\r\n    </div>\r\n  </div>\r\n  <table class=\"table table-striped\" [mfData]=\"project.worker|dataFilter:filterQuery:'projectViewWorkers'\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n    <thead>\r\n      <tr>\r\n        <th style=\"width: 10%\">\r\n          <mfDefaultSorter by=\"health_status\">{{\"Status\"|translate}}</mfDefaultSorter>\r\n        </th>\r\n        <th style=\"width: 10%\">\r\n          <mfDefaultSorter by=\"id\">{{\"EmployeeID\"|translate}}</mfDefaultSorter>\r\n        </th>\r\n        <th style=\"width: 10%\">\r\n          <mfDefaultSorter by=\"u_name\">{{\"EmployeeName\"|translate}}</mfDefaultSorter>\r\n        </th>\r\n        <th style=\"width: 10%\">\r\n          <mfDefaultSorter by=\"hr\">{{\"HeartRate\"|translate}} (bpm)</mfDefaultSorter>\r\n        </th>\r\n        <!-- <th style=\"width: 10%\">\r\n          <mfDefaultSorter by=\"spo2\">Sp02</mfDefaultSorter>\r\n        </th>\r\n        <th style=\"width: 10%\">\r\n          <mfDefaultSorter by=\"temp\">Temperature</mfDefaultSorter>\r\n        </th> -->\r\n        <th style=\"width: 10%\">\r\n          <mfDefaultSorter by=\"zone\">{{\"Zone\"|translate}}</mfDefaultSorter>\r\n        </th>\r\n        <th style=\"width: 10%\">\r\n          <mfDefaultSorter by=\"level\">{{\"Level\"|translate}}</mfDefaultSorter>\r\n        </th>\r\n        <th style=\"width: 10%\" *ngIf=\"edit\">\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let employee of mf.data\">\r\n        <td [ngClass]=\"{'red':employee.w_status.health_status=='Unhealthy'}\">{{employee.w_status.health_status}}</td>\r\n        <td><a [routerLink]=\"['/employee',employee.w_id]\">{{employee.w_id}}</a></td>\r\n        <td>{{employee.w_name_photo.w_name}}</td>\r\n        <td>{{employee.w_sensor_data_.hr}}</td>\r\n        <!-- <td>{{employee.spo2}}</td> -->\r\n        <!-- <td>{{employee.temp}}</td> -->\r\n        <td>{{employee.w_zone ? (employee.w_zone.zone_id ? employee.w_zone.zone_id : \"Not in range\") : (employee.w_dev_data.zone||\"Not in range\")}}</td>\r\n        <td>{{employee.w_zone ? (employee.w_zone.level ? employee.w_zone.level : \"-\") : (employee.w_dev_data.floor||\"-\")}}</td>\r\n        <td *ngIf=\"edit\"><button class=\"btn btn-block btn-danger\" (click)=\"removeWorkerFromProject(project.p_id,employee.w_id)\">{{\"Remove\"|translate}}</button></td>\r\n      </tr>\r\n    </tbody>\r\n    <tfoot>\r\n      <tr>\r\n        <td colspan=\"8\" *ngIf=\"!edit else editing\">\r\n          <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n        </td>\r\n        <ng-template #editing>\r\n          <td colspan=\"9\">\r\n            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n          </td>\r\n        </ng-template>\r\n      </tr>\r\n    </tfoot>\r\n  </table>\r\n</div>\r\n"

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

module.exports = "<div class=\"container-fluid\">\r\n  <div *ngIf=\"project\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4\">\r\n        <h1>{{project.p_id}} - {{project.p_data.p_name}}</h1>\r\n      </div>\r\n      <div class=\"offset-lg-7 col-lg-1\">\r\n        <fa name=\"times\" class=\"close\" [routerLink]=\"['/projects']\"></fa>\r\n      </div>\r\n      <hr/>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"offset-lg-6 col-lg-4\">\r\n        <ul class=\"view-project-tab\" style=\"margin-bottom:0px\">\r\n          <div class=\"row\">\r\n            <div class=\"tab front col-lg-6\" [ngClass]=\"{active:tab=='map'}\" (click)=\"viewTab('map')\">\r\n              <li>\r\n                {{\"Map\"|translate}}\r\n              </li>\r\n            </div>\r\n            <div class=\"tab behind col-lg-6\" [ngClass]=\"{active:tab=='workers'}\" (click)=\"viewTab('workers')\">\r\n              <li>\r\n                {{\"Employee\"|translate}}\r\n              </li>\r\n            </div>\r\n          </div>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n    <div style=\"border-top:thick solid #8a6f6a\">\r\n      <div class=\"row pt-2\">\r\n        <div class=\"col-lg-4\" style=\"border-right:thin solid #8a6f6a; padding-top: 1vh\">\r\n          <app-project-info [project]=\"project\"></app-project-info>\r\n        </div>\r\n        <div class=\"col-lg-8 border\">\r\n          <div *ngIf=\"tab=='map' else workers \">\r\n            <!-- <app-project-map [project]=\"project\" [polygonArrays]=\"polygonArrays\"></app-project-map> -->\r\n            <app-map [height]=\"mapHeight\" [collapsibleNeeded]=\"mapCollapsibleNeeded\"></app-map>\r\n          </div>\r\n          <ng-template #workers >\r\n            <app-project-view-workers [project]=\"project\" [polygonArrays]=\"polygonArrays\"></app-project-view-workers>\r\n          </ng-template>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <app-loading [apiCallFinish]=\"project\"></app-loading>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/projects/view-project/view-project.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* The Close Button */\n.close {\n  color: #aaa;\n  position: absolute;\n  right: 10px;\n  font-size: 28px;\n  font-weight: bold; }\n\n.close:hover,\n.close:focus {\n  color: black;\n  text-decoration: none;\n  cursor: pointer; }\n\nul.view-project-tab {\n  font-size: 15px;\n  line-height: 3;\n  font-weight: 400;\n  list-style: none;\n  text-align: center;\n  color: white;\n  margin-left: 0;\n  padding-left: 0; }\n\n.tab.active {\n  background-color: #896e69; }\n\n/*li,.background-black{\t\r\n\tcursor:default;\r\n\t&:hover{\r\n\t\tbackground-color:black;\r\n\t};\r\n}*/\n.tab {\n  display: inline;\n  cursor: pointer;\n  background-color: #707070; }\n  .tab:hover {\n    background-color: #896e69; }\n\n.front {\n  border-radius: 10px 0 0 0px; }\n\n.behind {\n  border-radius: 0 10px 0px 0; }\n", ""]);

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
    function ViewProjectComponent(tabService, _route, callApi, _location, router, reloadService) {
        var _this = this;
        this.tabService = tabService;
        this._route = _route;
        this.callApi = callApi;
        this._location = _location;
        this.router = router;
        this.reloadService = reloadService;
        //dummy
        // data:string='[{"_id": "42318493912faa7c44065f93ee42fa97", "_rev": "1-40e50fb849cbe1ea04f2c8a71d68b5df", "type": "project", "p_id": "PJ001", "p_name": "Project 1", "p_location": "Jalan SS2/27, Petaling Jaya", "p_admin": {"id": "A001", "u_name": "James Bond", "u_photo": "https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png"}, "p_latitude": "4.23567", "p_longitude": "120.489213", "p_photo": "https://preview.ibb.co/mEXyk6/property_default_placeholder.gif", "p_area": "80,000 ft", "p_injuries": 2, "p_workers_number": "2", "p_workers": [{"id": "W003", "u_name": "Abu Abim", "u_photo": "https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png"}, {"id": "W005", "u_name": "John Steve", "u_photo": "https://image.ibb.co/iLj806/Antu_im_invisible_user_svg.png"}], "p_start_date": "2017-10-20T00:00:00Z"}]'
        //project data
        this.mapHeight = "65vh";
        this.mapCollapsibleNeeded = false;
        this.tab = 'map';
        this.waitTimeout = 2000;
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
    ViewProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-view-project',
            template: __webpack_require__("../../../../../src/app/component/projects/view-project/view-project.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../../src/app/component/projects/view-project/view-project.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__shared_services__["e" /* TabService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services__["c" /* CallApiService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__shared_services__["b" /* ApiReloadService */]])
    ], ViewProjectComponent);
    return ViewProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/report/health-visual/health-visual.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"row\">\r\n\t<!-- <div *ngIf=\"hrArray.data\"> -->\r\n\t\t<app-card class=\"col-lg-6 chartcard\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n\t\t\t<div><h3>{{\"HeartRate\"|translate}} <fa name=\"heartbeat\" style=\"color:red\"></fa></h3></div>\r\n\t\t\t<div class=\"chartcard-report\">\r\n\t\t\t\t<ngx-charts-advanced-pie-chart *ngIf=\"hrArray\"\r\n\t\t\t\t\t[view]=\"hrArray.view\"\r\n\t\t\t\t\t[scheme]=\"hrArray.colorScheme\"\r\n\t\t\t\t\t[gradient]=\"true\"\r\n\t\t\t\t\t[results]=\"hrArray.data\"\r\n\t\t\t\t\t(select)=\"hrArray.onSelect($event)\">\r\n\t\t\t\t</ngx-charts-advanced-pie-chart>\r\n\t\t\t</div>\r\n\t\t\t<!-- <ngx-charts-pie-chart *ngIf=\"hrArray\"\r\n\t\t\t\t[scheme]=\"hrArray.colorScheme\"\r\n\t\t\t\t[results]=\"hrArray.data\"\r\n\t\t\t\t[legend]=\"hrArray.showLegend\"\r\n\t\t\t\t[explodeSlices]=\"hrArray.explodeSlices\"\r\n\t\t\t\t[labels]=\"hrArray.showLabels\"\r\n\t\t\t\t[doughnut]=\"hrArray.doughnut\"\r\n\t\t\t\t(select)=\"hrArray.onSelect($event)\">\r\n\t\t\t</ngx-charts-pie-chart>  -->\r\n\t\t</app-card>\r\n\t\t<app-card class=\"col-lg-6 chartcard text-center\">\t\r\n\t\t\t<h3>{{\"HealthStatus\"|translate}} <fa name=\"medkit\" style=\"color:red\"></fa></h3>\r\n\t\t\t<div class=\"chartcard-report\">\r\n\t\t\t\t<ngx-charts-advanced-pie-chart *ngIf=\"healthStatusArray\"\r\n\t\t\t\t\t[view]=\"hrArray.view\"\r\n\t\t\t\t\t[scheme]=\"healthStatusArray.colorScheme\"\r\n\t\t\t\t\t[results]=\"healthStatusArray.data\"\r\n\t\t\t\t\t(select)=\"healthStatusArray.onSelect($event)\">\r\n\t\t\t\t</ngx-charts-advanced-pie-chart>\r\n\t\t\t</div>\r\n\t\t\t<!-- <ngx-charts-pie-chart *ngIf=\"healthStatusArray\"\r\n\t\t\t\t[view]=\"hrArray.view\"\r\n\t\t\t\t[scheme]=\"healthStatusArray.colorScheme\"\r\n\t\t\t\t[results]=\"healthStatusArray.data\"\r\n\t\t\t\t[legend]=\"healthStatusArray.showLegend\"\r\n\t\t\t\t[explodeSlices]=\"healthStatusArray.explodeSlices\"\r\n\t\t\t\t[labels]=\"healthStatusArray.showLabels\"\r\n\t\t\t\t[doughnut]=\"healthStatusArray.doughnut\"\r\n\t\t\t\t[arcWidth]=\"healthStatusArray.arcWidth\"\r\n\t\t\t\t(select)=\"healthStatusArray.onSelect($event)\">\r\n\t\t\t</ngx-charts-pie-chart> -->\r\n\t\t</app-card>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<app-card class=\"col-lg-12 text-center\">\t\t\r\n\t\t\t<h3>{{\"PresentOrAbsentForWork\"|translate}} <fa name=\"briefcase\" style=\"color:black\"></fa></h3>\r\n\t\t\t<div class=\"chartcard-report\">\r\n\t\t\t\t<ngx-charts-pie-grid *ngIf=\"atWorkArray\"\r\n\t\t\t\t\t[view]=\"atWorkArray.view\"\r\n\t\t\t\t\t[scheme]=\"atWorkArray.colorScheme\"\r\n\t\t\t\t\t[results]=\"atWorkArray.data\"\r\n\t\t\t\t\t(select)=\"atWorkArray.onSelect($event)\">\r\n\t\t\t\t</ngx-charts-pie-grid>\r\n\t\t\t</div>\r\n\t\t</app-card>\r\n\t<!-- </div> -->\r\n</div>\r\n<app-loading [apiCallFinish]=\"dataFilled\"></app-loading>"

/***/ }),

/***/ "../../../../../src/app/component/report/health-visual/health-visual.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".chartcard {\n  /*max-width: 33%;*/\n  text-align: center; }\n\n.chartcard-report {\n  overflow-x: auto;\n  overflow-y: hidden;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/report/health-visual/health-visual.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HealthVisualComponent; });
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


var HealthVisualComponent = (function () {
    function HealthVisualComponent(callApi) {
        this.callApi = callApi;
        this.display = '';
        this.summaryReport = [{ heartrate: '', health_status: '', working: '' }];
        this.dataFilled = false;
        this.interval = 3000;
    }
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
    HealthVisualComponent.prototype.getHrChart = function () {
        var heartrate = this.summaryReport[0].heartrate;
        var arr = [];
        arr.push({ name: 'Normal bpm', value: +heartrate.normal });
        arr.push({ name: '>120 bpm', value: +heartrate.high });
        arr.push({ name: '<60 bpm', value: +heartrate.low });
        this.hrArray = new Chart(arr);
    };
    HealthVisualComponent.prototype.getStatusChart = function () {
        // data.push(['OK', +this.healthStatus.ok]);
        // 	data.push(['Unhealthy', +this.healthStatus.unhealthy]);
        var stat = this.summaryReport[0].health_status;
        var arr = [];
        arr.push({ name: 'OK', value: +stat.ok });
        arr.push({ name: 'Unhealthy', value: +stat.unhealthy });
        this.healthStatusArray = new Chart(arr);
        this.healthStatusArray.explodeSlices = true;
        this.healthStatusArray.doughnut = true;
        this.healthStatusArray.arcWidth = 0.5;
    };
    HealthVisualComponent.prototype.getPresentChart = function () {
        var work = this.summaryReport[0].working;
        var arr = [];
        arr.push({ name: 'Present', value: +work.present });
        arr.push({ name: 'Absent', value: +work.absent });
        this.atWorkArray = new Chart(arr);
        this.atWorkArray.view = [1024, 400];
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
            template: __webpack_require__("../../../../../src/app/component/report/health-visual/health-visual.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/report/health-visual/health-visual.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["c" /* CallApiService */]])
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

/***/ "../../../../../src/app/component/report/report-all/report-all.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- table -->\r\n<!-- <div *ngIf=\"data\">\r\n\t<h2>All Report</h2>\r\n  <div class=\"row\">\r\n  \t<div class=\"offset-lg-10 col-lg-2\" style=\"padding-bottom:5px\">\r\n  \t\t<button class=\"btn btn-block btn-brown\">Export</button>\r\n  \t</div>\r\n  </div>\r\n  <div class=\"panel panel-default\">\r\n    <table class=\"table table-striped\" [mfData]=\"data\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n      <thead>\r\n        <tr>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"w_id\">Employee ID</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"w_name\">Employee Name</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"details.absent\">Days absence (since join)</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"details.no_wear\">Gadget Not Worn (since join)</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"details.work_hour\">Working Hours (Since join)</mfDefaultSorter>\r\n          </th>\r\n          <th style=\"width: 10%\">\r\n            <mfDefaultSorter by=\"details.work_day\">Work day (since join %)</mfDefaultSorter>\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let all of mf.data\">\r\n          <td>{{all.w_id}}</td>\r\n          <td>{{all.w_name}}</td>\r\n          <td>{{all.details.absent}}</td>\r\n          <td>{{all.details.no_wear}}</td>\r\n          <td>{{all.details.work_hour}}</td>\r\n          <td>{{all.details.work_day}}</td>\r\n        </tr>\r\n      </tbody>\r\n      <tfoot>\r\n        <tr>\r\n          <td colspan=\"6\">\r\n            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n          </td>\r\n        </tr>\r\n      </tfoot>\r\n    </table>\r\n  </div>\r\n</div> -->\r\n<app-health-visual [display]=\"display\"></app-health-visual>"

/***/ }),

/***/ "../../../../../src/app/component/report/report-all/report-all.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/report/report-all/report-all.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportAllComponent; });
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

var ReportAllComponent = (function () {
    function ReportAllComponent() {
        this.rowsOnPage = 5;
        this.sortBy = "w_id";
        this.sortOrder = "asc";
    }
    ReportAllComponent.prototype.ngOnInit = function () {
        console.log(this.summaryReport);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ReportAllComponent.prototype, "summaryReport", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ReportAllComponent.prototype, "display", void 0);
    ReportAllComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-report-all',
            template: __webpack_require__("../../../../../src/app/component/report/report-all/report-all.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/report/report-all/report-all.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportAllComponent);
    return ReportAllComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/report/report-current/report-current.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- table -->\r\n    <!-- <div>\r\n      \t<h2>Current Report</h2>\r\n      <div class=\"row\">\r\n      \t<div class=\"offset-lg-10 col-lg-2\" style=\"padding-bottom:5px\">\r\n          <button class=\"btn btn-block btn-brown\">Export</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"panel panel-default\">\r\n        <table class=\"table table-striped\" [mfData]=\"employees\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n          <thead>\r\n            <tr>\r\n              <th style=\"width: 10%\">\r\n                <mfDefaultSorter by=\"w_id\">Employee ID</mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 10%\">\r\n                <mfDefaultSorter by=\"w_name\">Employee Name</mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 10%\">\r\n                <mfDefaultSorter by=\"\">Days absence (since join)</mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 10%\">\r\n                <mfDefaultSorter by=\"\">Gadget Not Worn (since join)</mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 10%\">\r\n                <mfDefaultSorter by=\"\">Working Hours (This month)</mfDefaultSorter>\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n          </tbody>\r\n          <tfoot>\r\n            <tr>\r\n              <td colspan=\"5\">\r\n                <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n              </td>\r\n            </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n   -->"

/***/ }),

/***/ "../../../../../src/app/component/report/report-current/report-current.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/report/report-current/report-current.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportCurrentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReportCurrentComponent = (function () {
    function ReportCurrentComponent() {
    }
    // @Input()
    // data: any[];
    // constructor() { }
    // rowsOnPage: number = 5;
    // sortBy: string = "w_id";
    // sortOrder: string = "asc";
    ReportCurrentComponent.prototype.ngOnInit = function () {
    };
    ReportCurrentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-report-current',
            template: __webpack_require__("../../../../../src/app/component/report/report-current/report-current.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/report/report-current/report-current.component.scss")]
        })
    ], ReportCurrentComponent);
    return ReportCurrentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/report/report-graph/report-graph.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center red\">{{\"AccidentRate\"|translate}} (%) </h2>\r\n<google-chart [data]=\"areaChartData\" *ngIf=\"areaChartData;else noLineChart\" ></google-chart>\r\n<ng-template #noLineChart>{{\"NoDataToDisplay\"|translate}}</ng-template>"

/***/ }),

/***/ "../../../../../src/app/component/report/report-graph/report-graph.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/report/report-graph/report-graph.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportGraphComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared___ = __webpack_require__("../../../../../src/app/shared/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportGraphComponent = (function () {
    function ReportGraphComponent() {
        this.accidentRate = __WEBPACK_IMPORTED_MODULE_1__shared___["c" /* Data */].accidentRate;
    }
    ReportGraphComponent.prototype.ngOnInit = function () {
        this.getLineChart();
    };
    ReportGraphComponent.prototype.getLineChart = function () {
        var areaData = [];
        areaData.push(['year', 'percentage']);
        for (var _i = 0, _a = this.accidentRate; _i < _a.length; _i++) {
            var accident = _a[_i];
            areaData.push([accident.year, +accident.percentage]);
        }
        this.areaChartData = {
            chartType: 'AreaChart',
            dataTable: areaData,
            options: {
                'legend': 'top',
                'height': 600,
                'colors': ['rgb(137,110,105)']
            },
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], ReportGraphComponent.prototype, "data", void 0);
    ReportGraphComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-report-graph',
            template: __webpack_require__("../../../../../src/app/component/report/report-graph/report-graph.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/report/report-graph/report-graph.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ReportGraphComponent);
    return ReportGraphComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/report/report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-lg-6\">\r\n\t\t\t<h1>{{\"Report\"|translate}}</h1>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"row\">\r\n\t\t<div class=\"col-md-12\">\r\n\t\t\t<ng-select *ngIf=\"projects[0]!=null\"  [active]=\"init\" [items]=\"projects\" (selected)=\"selected($event)\" >\r\n      </ng-select>\r\n\t\t</div>\r\n\t</div>\r\n\t<div *ngIf=\"currentTab==='All'\" >\r\n\t\t<app-health-visual [display]=\"currentReport\"></app-health-visual>\r\n\t</div>\r\n\t<div *ngIf=\"currentTab==='Current'\" >\r\n\t\t<!-- for demo purposes only -->\r\n\t\t<app-health-visual [display]=\"currentReport\"></app-health-visual>\r\n\t\t<!-- below one is correct one -->\r\n\t\t<!-- <app-report-current [data]=\"report\"></app-report-current> -->\r\n\t</div>\r\n\t<div *ngIf=\"currentTab==='Graph'\" >\r\n\t\t<app-report-graph [data]=\"report\"></app-report-graph>\r\n\t</div>\r\n</div>\r\n"

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
    function ReportComponent(tabService, callApi) {
        var _this = this;
        this.tabService = tabService;
        this.callApi = callApi;
        this.currentReport = 'All';
        this.currentTab = "All";
        this.projects = [];
        this.init = [];
        this.tabService.currentProjectTab$.subscribe(function (tab) {
            //set currentTab to clicked tab from tab.services.
            _this.currentTab = tab;
        });
    }
    ReportComponent.prototype.ngOnInit = function () {
        this.getProjectList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].projectList);
        // this.getReportList(ApiCmd.reportAll);
        // this.getReportSummary(ApiCmd.reportSummary);
        // console.log("report "+this.report);
    };
    // get report list
    ReportComponent.prototype.getReportList = function (url) {
        var _this = this;
        this.callApi.getData(url)
            .subscribe(function (data) {
            _this.report = data;
        });
    };
    //get summary report
    ReportComponent.prototype.getReportSummary = function (url) {
        var _this = this;
        this.callApi.getData(url)
            .subscribe(function (data) {
            _this.summaryReport = data;
        });
    };
    ReportComponent.prototype.getProjectList = function (url) {
        var _this = this;
        this.callApi.getData(url)
            .subscribe(function (data) {
            _this.projectList = data;
            _this.assignProjectToDropdown();
        });
    };
    ReportComponent.prototype.assignProjectToDropdown = function () {
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
    ReportComponent.prototype.selected = function (value) {
        this.currentReport = value.id;
        // this.getReportSummary(`${ApiCmd.reportSummary}${value.id}`);
        // console.log('Selected value is: ', value.id);
    };
    ReportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-report',
            template: __webpack_require__("../../../../../src/app/component/report/report.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
            styles: [__webpack_require__("../../../../../src/app/component/report/report.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["e" /* TabService */], __WEBPACK_IMPORTED_MODULE_1__shared_services__["c" /* CallApiService */]])
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
            "employee": {
                "id": "W002",
                "name": "Lee Yi"
            },
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

/***/ "../../../../../src/app/component/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <!-- <div *ngIf=\"currentTab==='User'\">\r\n    <h1>{{\"UserProfile\"|translate}}</h1>\r\n    <div>\r\n      <div class=\"rect-host\"></div>\r\n      <h4>  {{\"AccountManagement\"|translate}}</h4>\r\n    </div>\r\n    <div>\r\n      <div class=\"rect\"></div>\r\n      <p>   {{\"SimCard\"|translate}}:      {{profile.u_info.u_contact}}</p>\r\n    </div>\r\n    <div>\r\n      <div class=\"rect\"></div>\r\n      <p>   {{\"EmailAddress\"|translate}}: {{profile.u_login.u_email}}</p>\r\n    </div>\r\n    <div>\r\n      <div class=\"rect\"></div>\r\n      <p>   {{\"Password\"|translate}}:        ********</p>\r\n    </div>\r\n  </div> -->\r\n  <!-- profile -->\r\n  <div *ngIf=\"currentTab==='Profile'\">\r\n    <h1>{{\"UserProfile\"|translate}}</h1>\r\n    <app-feedback [(showFeedback)]=\"formSubmitted\" [message]=\"indicationMessage\"></app-feedback>\r\n    <div class=\"row\">\r\n      <div class=\"offset-lg-9 col-lg-3\">\r\n        <button type=\"button\" *ngIf=\"!editDetail else profileSaveButton\" class=\"btn btn-block btn-info\" (click)=\"editDetails()\"><fa name=\"pencil-square-o\"></fa>{{\"EditDetails\"|translate}}</button>\r\n        <ng-template #profileSaveButton>\r\n          <form [formGroup]=\"profileForm\" (ngSubmit)=\"onSubmit(profileForm.value)\">\r\n            <input type=\"submit\" class=\"btn btn-block btn-success\" [value]=\"'SaveChanges'|translate\"/>\r\n          </form>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-3 text-center profile-photo\">\r\n        <div>\r\n          <img [src]=\"profile.u_info.u_photo\" alt=\"your photo\"/>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-3 bold\">\r\n            <p>{{\"Name\"|translate}}</p>\r\n            <p>{{\"Age\"|translate}}</p>\r\n            <p>{{\"EmailAddress\"|translate}}</p>\r\n            <p>{{\"Contact\"|translate}}</p>\r\n            <p>{{\"Position\"|translate}}</p>\r\n            <p *ngIf=\"editDetail\">{{\"NewPhoto\"|translate}}</p>\r\n          </div>\r\n          <div class=\"col-lg-1\">\r\n            <p>:</p>\r\n            <p>:</p>\r\n            <p>:</p>\r\n            <p>:</p>\r\n            <p>:</p>\r\n            <p *ngIf=\"editDetail\">:</p>\r\n          </div>\r\n          <div class=\"col-lg-8\">\r\n            <div *ngIf=\"editDetail else detail\">\r\n              <form [formGroup]=\"profileForm\">\r\n                <input class=\"form-control\" formControlName=\"name\" type=\"text\"/>\r\n                <input class=\"form-control\" formControlName=\"age\" type=\"text\"/>\r\n                <input class=\"form-control\" formControlName=\"email\" type=\"text\"/>\r\n                <input class=\"form-control\" formControlName=\"contact\" type=\"text\"/>\r\n                <input class=\"form-control\" formControlName=\"position\" type=\"text\"/>\r\n                <div class=\"row\">\r\n                  <div class=\"col-lg-8\">\r\n                    <input class=\"form-control\" type=\"file\" (change)=\"fileUpload($event,cropper)\" accept=\"image/*\" #fileInput/>\r\n                  </div>\r\n                  <div class=\"col-lg-4\">\r\n                    <!-- <img *ngIf=\"file else nofile\" [src]=\"file\" height=\"30px\" alt=\"image preview\"/>\r\n                    <ng-template #nofile>\r\n                      <p>{{\"NoPreview\"|translate}}</p>\r\n                    </ng-template> -->\r\n                  </div>\r\n                </div>\r\n              </form>\r\n            </div>\r\n            <ng-template #detail>\r\n              <div>\r\n                <p>{{profile.u_name}}</p>\r\n                <p>{{profile.u_info.u_age}}</p>\r\n                <p>{{profile.u_login.u_email}}</p>\r\n                <p>{{profile.u_info.u_contact}}</p>\r\n                <p>{{profile.u_info.u_position}}</p>\r\n              </div>\r\n            </ng-template>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-3 text-center profile-photo\" style=\"border:none\">\r\n        <div *ngIf=\"file\">\r\n          <img src=\"{{file}}\">\r\n          <!-- <image-cropper\r\n            [imageChangedEvent]=\"imageChangedEvent\"\r\n            [maintainAspectRatio]=\"true\"\r\n            [aspectRatio]=\"4 / 3\"\r\n            [resizeToWidth]=\"128\"\r\n            format=\"png\"\r\n            (imageCropped)=\"imageCropped($event)\"\r\n          ></image-cropper> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <hr/>\r\n    <!-- table -->\r\n    <div>\r\n      <h2>{{\"AttachedProjects\"|translate}}</h2>\r\n      <div class=\"panel panel-default\">\r\n        <table class=\"table table-striped\" [mfData]=\"project\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"rowsOnPage\" [(mfSortBy)]=\"sortBy\" [(mfSortOrder)]=\"sortOrder\">\r\n          <thead>\r\n            <tr>\r\n              <th style=\"width: 10%\">\r\n                <mfDefaultSorter by=\"w_p_id\">{{\"ProjectID\"|translate}}</mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 10%\">\r\n                <mfDefaultSorter by=\"w_name\">{{\"ProjectName\"|translate}}</mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 10%\">\r\n                <mfDefaultSorter by=\"p_location\">{{\"ProjectLocation\"|translate}}</mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 10%\">\r\n                <mfDefaultSorter by=\"p_workers_number\">{{\"NumberOfWorkers\"|translate}}</mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 10%\">\r\n                <mfDefaultSorter by=\"p_injuries\">{{\"NumberOfFloor\"|translate}}</mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 10%\">\r\n                <mfDefaultSorter by=\"p_area\">{{\"Size\"|translate}}</mfDefaultSorter>\r\n              </th>\r\n              <th style=\"width: 10%\">\r\n                <mfDefaultSorter by=\"p_admin\">{{\"ProjectManager\"|translate}}</mfDefaultSorter>\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let proj of mf.data\">\r\n              <td><a [routerLink]=\"['/projects',proj.p_id]\">{{proj.p_id}}</a></td>\r\n              <td>{{proj.p_data.p_name}}</td>\r\n              <td>{{proj.p_data.p_location}}</td>\r\n              <td>{{proj.workernum}}</td>\r\n              <td>{{proj.p_data.p_floor}}</td>\r\n              <td>{{proj.p_data.p_area}}</td>\r\n              <td>{{profile.u_name}}</td>            \r\n            </tr>\r\n          </tbody>\r\n          <tfoot>\r\n            <tr>\r\n              <td colspan=\"7\">\r\n                <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\r\n              </td>\r\n            </tr>\r\n          </tfoot>\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"displayCheckForm\" class=\"modal\">\r\n      <div [ngClass]=\"{'modal-content':true}\">\r\n        <span class=\"close\" (click)=\"closeModalBox()\">&times;</span>\r\n        <form (ngSubmit)=checkPassword(checkForm.value) [formGroup]=\"checkForm\" class=\"form-group\">\r\n          <div>{{\"PleaseEnterPassword\" | translate}}: </div>\r\n          <div><input class=\"form-control\" formControlName=\"password\" type=\"password\" [placeholder]=\"'Password' | translate\" /></div>\r\n          <div *ngIf=\"editInvalid\" class=\"warn\"> {{\"InvalidCredential\" | translate}}</div>\r\n          <div class=\"padding-top row\">\r\n            <div class=\"col-lg-2 offset-lg-10\">\r\n              <button type=\"submit\" [disabled]=\"!checkForm.valid\" class=\"btn btn-block btn-success\">{{\"Submit\" | translate}}</button>\r\n            </div>\r\n          </div>\r\n        </form>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- logout button -->\r\n  <div class=\"row\">\r\n    <div class=\"offset-lg-10 col-lg-2\">\r\n      <button class=\"btn btn-block btn-brown\" (click)=\"logout()\">{{\"Logout\"|translate}}</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
        this.tabService.currentProjectTab$.subscribe(function (tab) {
            //set currentTab to clicked tab from tab.services.
            _this.currentTab = tab;
        });
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.initData();
        this.checkForm = this.fb.group({
            password: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]]
        });
    };
    SettingsComponent.prototype.initData = function () {
        this.profile = this.authService.getUserData();
        this.getAttachedList(__WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].projectListAttached);
        this.profileForm = this.fb.group({
            name: [this.profile.u_name],
            age: [this.profile.u_info.u_age],
            email: [this.profile.u_login.u_email],
            contact: [this.profile.u_info.u_contact],
            position: [this.profile.u_info.u_position],
        });
    };
    SettingsComponent.prototype.editDetails = function () {
        this.editDetail = true;
    };
    //submit the edited data
    SettingsComponent.prototype.onSubmit = function (value) {
        value['id'] = this.profile.u_id;
        this.profileFormValue = value;
        // console.log(this.profileFormValue);
        //do crosschecking for whether password input is valid
        //call a modal box to request for use input password
        this.displayCheckForm = true;
    };
    SettingsComponent.prototype.checkPassword = function (value) {
        var _this = this;
        this.checkForm.reset();
        value['id'] = this.profile.u_id;
        this.callApi.getData("" + __WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].authenticate + value['id'] + "/" + value['password'])
            .subscribe(function (response) {
            if (response.length > 0 && response[0].u_id == _this.profile.u_id) {
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
                    _this.callApi.getData("" + __WEBPACK_IMPORTED_MODULE_1__shared_services__["a" /* ApiCmd */].loginCredential + _this.profileFormValue.email + "/" + value['password']).subscribe(function (response) {
                        var userData = [];
                        userData = response;
                        if (userData[0] == null) {
                            // console.log("userData is empty"+userData);
                        }
                        else {
                            //save the login credentials to the sessionStorage
                            sessionStorage.setItem('currentUser', JSON.stringify(userData));
                            _this.authService.setUserData(userData);
                            _this.initData();
                        }
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
        this.callApi.getData(url + "/" + this.profile.u_id)
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["e" /* TabService */], __WEBPACK_IMPORTED_MODULE_2__shared__["b" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1__shared_services__["c" /* CallApiService */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/layouts/home-layout/home-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header\" style=\"overflow:hidden\">\r\n\t<app-header (onShow)=\"onShow($event)\"></app-header>\r\n</div>\r\n<!-- [@showIt] and [@move] is animation trigger -->\r\n<app-sidenav [@showIt]=\"show\" [show]=\"show\"></app-sidenav>\r\n<div [@move]=\"move\">\r\n    <router-outlet></router-outlet>\r\n</div>"

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
            if (!isLoggedIn) {
                _this.router.navigate(['/login']);
                return false;
            }
            else {
                return true;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services__ = __webpack_require__("../../../../../src/app/shared/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_js_sha256__ = __webpack_require__("../../../../js-sha256/src/sha256.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_js_sha256___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_js_sha256__);
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
    }
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        get: function () {
            return this.loggedIn.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (user) {
        if (user.username !== '' && user.password != '') {
            // this.getCredential(`${ApiCmd.loginCredential}u/${user.username}/p/${user.password}`);
            console.log(Object(__WEBPACK_IMPORTED_MODULE_4_js_sha256__["sha256"])(user.password));
            this.getCredential("" + __WEBPACK_IMPORTED_MODULE_3__shared_services__["a" /* ApiCmd */].loginCredential + user.username + "/" + user.password);
        }
        else {
            this.loggedIn.next(false);
        }
    };
    //login directly if cache have this infomation
    AuthService.prototype.checkStorage = function () {
        this.userData = (JSON.parse(sessionStorage.getItem('currentUser')));
        if (this.userData != null) {
            if (this.userData[0].u_name != null) {
                this.loggedIn.next(true);
                this.router.navigate(['/']);
            }
        }
    };
    AuthService.prototype.setUserData = function (userData) {
        this.userData = userData;
    };
    AuthService.prototype.getUserData = function () {
        return this.userData[0];
    };
    // Get the data based on the credential
    AuthService.prototype.getCredential = function (url) {
        var _this = this;
        this.callApi.getData(url)
            .subscribe(function (data) {
            _this.userData = [];
            _this.userData = data;
            if (_this.userData[0] == null) {
                console.log("userData is empty" + _this.userData);
                _this.loggedIn.next(false);
            }
            else {
                //save the login credentials to the sessionStorage
                sessionStorage.setItem('currentUser', JSON.stringify(_this.userData));
                _this.loggedIn.next(true);
                _this.router.navigate(['/']);
            }
        });
    };
    AuthService.prototype.logout = function () {
        this.userData = [];
        sessionStorage.removeItem("currentUser");
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
        this.callApi.logout();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__shared_services__["c" /* CallApiService */]])
    ], AuthService);
    return AuthService;
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
exports.push([module.i, ".boxshadow {\n  position: relative;\n  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);\n  padding: 10px;\n  background: #fafafa !important;\n  z-index: 5;\n  border-radius: 5px;\n  /*box-shadow: 5px 5px rgba(172, 151, 67, 0.5);*/\n  /*padding:2px;*/ }\n  .boxshadow::after {\n    content: '';\n    position: absolute;\n    z-index: 0;\n    /* hide shadow behind image */\n    box-shadow: 0 15px 20px rgba(0, 0, 0, 0.3);\n    width: 70%;\n    left: 15%;\n    /* one half of the remaining 30% */\n    height: 10px;\n    bottom: 0px; }\n", ""]);

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

module.exports = "<form *ngIf=\"formForm\" (ngSubmit)=\"onSubmit(formForm.value)\" [formGroup]=\"formForm\" novalidate>\r\n    <div class=\"padding-top row form-group\" *ngFor=\"let d of data\">\r\n      <div class=\"col-lg-4 \">\r\n        <p>{{d['input_name']|translate}}</p>\r\n      </div>\r\n      <div class=\"col-lg-1\">\r\n        <p>:</p>\r\n      </div>\r\n      <div class=\"col-lg-7\" *ngIf=\"d['type']['type']!='file';else containImage\">\r\n        <input class=\"form-control\" [formControlName]=\"d['form_control_name']\" [type]=\"d['type']['type']\" [placeholder]=\"d['placeholder']|translate\" />\r\n        <div class=\"warn\" *ngIf=\"!formForm.controls[d['form_control_name']].valid&&formForm.controls[d['form_control_name']].touched\">{{d['error_message']|translate}}</div>\r\n      </div>\r\n      <ng-template #containImage>\r\n      \t<div class=\"col-lg-5\">\r\n      \t        <input class=\"form-control\" type=\"file\" (change)=\"fileUpload($event)\" accept=\"image/*\" #fileInput/>\r\n\t\t</div>\r\n\t\t<div class=\"col-lg-2\">\r\n\t\t\t<img *ngIf=\"file else nofile\" [src]=\"file\" height=\"40px\" alt=\"image preview\"/>\r\n\t\t\t<ng-template #nofile>\r\n\t\t\t  <p>{{\"NoPreview\"|translate}}</p>\r\n\t\t\t</ng-template>\r\n\t\t</div>\r\n      </ng-template>\r\n    </div>\r\n    <div class=\"padding-top row\">\r\n      <div class=\"col-lg-2 offset-lg-10\">\r\n        <button type=\"submit\" [disabled]=\"!formForm.valid\" class=\"btn btn-block btn-success\">{{\"Add\"|translate}}</button>\r\n      </div>\r\n    </div>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/shared/form/form.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".warn {\n  background: #f2edda;\n  padding: 7px;\n  font-size: .9em;\n  margin-bottom: 20px;\n  display: inline-block;\n  -webkit-animation: 0.5s alertAnim forwards;\n          animation: 0.5s alertAnim forwards; }\n", ""]);

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
    function FormComponent(callApi) {
        this.callApi = callApi;
        this.formSubmitSuccess = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FormComponent.prototype.ngOnInit = function () {
        this.formForm = this.formData[0].form_group;
        this.data = this.formData[0].form_control_names;
        this.gotImage = this.formData[0].contain_image;
        this.url = this.formData[0].submit_url;
        console.log(this.formForm);
        console.log(this.data);
    };
    FormComponent.prototype.onSubmit = function (event) {
        // this.employeeForm.controls["projectID"].patchValue(value.id);
        // event.password=sha256(event.password);
        console.log(event);
        console.log(this.gotImage);
        if (this.gotImage)
            this.gotImageSubmit(event);
        else
            this.noImageSubmit(event);
    };
    FormComponent.prototype.gotImageSubmit = function (event) {
        var _this = this;
        this.callApi.postWithFile(this.url, event, this.photo)
            .subscribe(function (response) {
            _this.formSubmitSuccess.emit(true);
            console.log('response: ' + response);
        });
    };
    FormComponent.prototype.noImageSubmit = function (event) {
        var _this = this;
        this.callApi.postData(this.url, JSON.stringify(event))
            .subscribe(function (response) {
            _this.formSubmitSuccess.emit(true);
            console.log('response: ' + response);
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
            styles: [__webpack_require__("../../../../../src/app/shared/form/form.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["c" /* CallApiService */]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-fixed-top navbar-dark bg-inverse clearfix\">\r\n  <div class=\"row nav\" [@move]=\"headerTitleShow\">\r\n    <div class=\"col-lg-8\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-5 row\" style=\"padding-top:5px\" >\r\n          <button class=\"hamburger\" (click)=\"toggleCollapse()\" style=\"position:relative\">&#9776;</button>\r\n          <h3 class=\"white\" style=\"margin-left:15px\">{{title|titlecase|translate}}</h3>\r\n        </div>\r\n        <div class=\"col-lg-7\" style=\"margin-bottom:-20px\">\r\n          <app-tabs *ngIf=\"title=='projects'\">\r\n            <app-tab tabTitle=\"All\">\r\n            </app-tab>\r\n            <app-tab tabTitle=\"Ongoing\">\r\n            </app-tab>\r\n            <app-tab tabTitle=\"Attached\">\r\n            </app-tab>\r\n            <app-tab tabTitle=\"Past\">\r\n            </app-tab>\r\n          </app-tabs>\r\n          <app-tabs *ngIf=\"title=='report'\" style=\"display:none\">\r\n            <app-tab tabTitle=\"All\">\r\n            </app-tab>\r\n            <app-tab tabTitle=\"Current\">\r\n            </app-tab>\r\n            <app-tab tabTitle=\"Graph\">\r\n            </app-tab>\r\n          </app-tabs>\r\n          <app-tabs *ngIf=\"title=='settings'\" style=\"display:none\">\r\n            <app-tab tabTitle=\"User\">\r\n            </app-tab>\r\n            <app-tab tabTitle=\"Profile\">\r\n            </app-tab>\r\n          </app-tabs>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"offset-lg-1 col-lg-1\">\r\n        <select class=\"form-control\" #langSelect (change)=\"changeLanguage(langSelect.value)\">\r\n          <option class=\"form-control\" *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\" [selected]=\"lang === translate.currentLang\">{{ lang }}</option>\r\n        </select>\r\n    </div>\r\n    <div class=\"col-lg-2 clickable\" [routerLink]=\"['/settings']\">\r\n      <img [src]=\"profile['u_info']['u_photo']\" class=\"profilePic\"/>\r\n      <p class=\"white user\">&nbsp;{{profile['u_name']}}</p>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/shared/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* #90A4AE */\n/* #455A64 */\n.orange {\n  color: #d08966; }\n\n.white {\n  color: white; }\n\n.nav {\n  padding-top: 3px; }\n\n.logo {\n  padding-top: 5px; }\n\n.hamburger {\n  background: none;\n  position: absolute;\n  top: 0;\n  right: 0;\n  /*  line-height:45px;\r\n  padding:5px 15px 0px 15px;*/\n  color: #FFF;\n  border: 0;\n  font-size: 1.4em;\n  font-weight: bold;\n  cursor: pointer;\n  outline: none;\n  z-index: 10000000000000; }\n\n.user {\n  display: inline;\n  padding-top: 3px; }\n\n.navbar {\n  z-index: 1; }\n\n.profilePic {\n  display: inline;\n  border-radius: 50%;\n  width: 40px;\n  height: 40px;\n  background: #73AD21;\n  /*rgb(160,178,140)*/ }\n\n.clickable {\n  cursor: pointer; }\n  .clickable:hover p {\n    color: #8a6f6a; }\n  .clickable:hover img {\n    background: #8a6f6a; }\n", ""]);

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
            s.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDRQ1_DGJjK0OqnN_TNGUoQul6QJuhF2VI&libraries=drawing,places,geometry";
        else if (lang == "ch")
            s.src = "http://www.google.cn/maps/api/js?v=3&libraries=places&region=cn&language=zh-CN&key=AIzaSyAeg8uvtlLzc1zwyNL1z_UXZwZzjBw0B2g";
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
            __WEBPACK_IMPORTED_MODULE_3__shared_services__["e" /* TabService */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_translate__["b" /* TranslateService */]])
    ], HeaderComponent);
    return HeaderComponent;
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
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__pipes_data_filter_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__testing_data_mock__ = __webpack_require__("../../../../../src/testing/data.mock.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__testing_data_mock__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__language_english__ = __webpack_require__("../../../../../src/app/shared/language/english.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_auth_service__ = __webpack_require__("../../../../../src/app/shared/auth/auth.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_5__auth_auth_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_auth_guard__ = __webpack_require__("../../../../../src/app/shared/auth/auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__auth_auth_guard__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile__ = __webpack_require__("../../../../../src/app/shared/profile.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__feedback_feedback_component__ = __webpack_require__("../../../../../src/app/shared/feedback/feedback.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_8__feedback_feedback_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__info_row_info_row_component__ = __webpack_require__("../../../../../src/app/shared/info-row/info-row.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_9__info_row_info_row_component__["a"]; });
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__loading_loading_component__ = __webpack_require__("../../../../../src/app/shared/loading/loading.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_10__loading_loading_component__["a"]; });



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

module.exports = "<div *ngIf=\"!apiCallFinish\" class=\"text-center\">\r\n  <fa name=\"spinner\" animation=\"spin\" size=\"4x\"></fa>\r\n  <h2 style=\"margin-top: 0px\" >{{\"Loading\"|translate}}...</h2>\r\n</div>"

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
    ApiCmd.loginCredential = apiDom + 'login/';
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
    //Employee
    //GETList
    ApiCmd.workerList = apiDom + "list/worker";
    ApiCmd.workerHisLoc = apiDom + "location";
    //POST
    ApiCmd.newEmployee = apiDom + "worker/add";
    ApiCmd.newAdmin = apiDom + "user/add";
    //Report
    //GET
    ApiCmd.reportAll = apiDom + "list/report/";
    ApiCmd.reportSummary = apiDom + "list/report/";
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
    return ApiCmd;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/call-apis/call-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CallApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__call_apis_api_cmd__ = __webpack_require__("../../../../../src/app/shared/services/call-apis/api-cmd.ts");
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
    function CallApiService(http, http2) {
        this.http = http;
        this.http2 = http2;
    }
    CallApiService.prototype.logout = function () {
        this.userData = null;
    };
    CallApiService.prototype.getCompanyID = function () {
        return this.userData[0].company_id;
    };
    CallApiService.prototype.getData = function (url) {
        if (this.userData == null)
            this.userData = JSON.parse(sessionStorage.getItem('currentUser'));
        // if(this.userData != null) console.log(this.userData[0].company_id);
        if (url.search('login') < 0) {
            if (url.search('localhost') >= 0)
                url = url.replace('api/', 'api/' + this.userData[0].company_id + '/');
            else if (url.search('mmdt') >= 0)
                url = url.replace('api.php/', 'api.php/' + this.userData[0].company_id + '/');
        }
        return this.http.get(url)
            .catch(this.handleError);
    };
    CallApiService.prototype.postData = function (url, postData) {
        // let headers = new Headers({'Content-Type':'application/json'});
        // let options = new RequestOptions({ headers: headers});
        var formData = new FormData();
        postData = JSON.parse(postData);
        if (postData !== "" && postData !== undefined && postData !== null) {
            for (var property in postData) {
                if (postData.hasOwnProperty(property)) {
                    formData.append(property, postData[property]);
                }
            }
            formData.append('c_id', this.userData[0].company_id);
            return this.http2.post(url, formData, { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]() }).map(function (res) { return res; });
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
            formData.append('c_id', this.userData[0].company_id);
            return this.http2.post(url, formData, {
                headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]()
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
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(error.message);
    };
    CallApiService.prototype.sendCommand = function (command, dev_id) {
        var commandJson = {
            command: command
        };
        if (dev_id !== '' && dev_id !== null) {
            commandJson['device'] = dev_id;
        }
        console.log(commandJson);
        return this.http2.post(__WEBPACK_IMPORTED_MODULE_4__call_apis_api_cmd__["a" /* ApiCmd */].sendCommand, JSON.stringify(commandJson), { headers: new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */](), method: __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* RequestMethod */].Post }).map(function (res) { return res; });
    };
    //function to get location from lat lng
    CallApiService.prototype.getLocationByLatLng = function (http, location, group) {
        var url = "https://maps.google.cn/maps/api/geocode/json?latlng=";
        var key = "&key=AIzaSyAeg8uvtlLzc1zwyNL1z_UXZwZzjBw0B2g";
        url = url.concat(location.lat, ',', location.lng, key);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].create(function (observer) {
            getData(http, url).subscribe(function (data) {
                observer.next(extractLocation(data));
            });
        });
        function getData(http, url) {
            return http.get(url)
                .catch(function (err) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(err); });
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], CallApiService);
    return CallApiService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tab_tab_service__ = __webpack_require__("../../../../../src/app/shared/services/tab/tab.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__tab_tab_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__call_apis_call_api_service__ = __webpack_require__("../../../../../src/app/shared/services/call-apis/call-api.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__call_apis_call_api_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_reload_api_reload_service__ = __webpack_require__("../../../../../src/app/shared/services/api-reload/api-reload.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__api_reload_api_reload_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__call_apis_api_cmd__ = __webpack_require__("../../../../../src/app/shared/services/call-apis/api-cmd.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_3__call_apis_api_cmd__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_custom_validator__ = __webpack_require__("../../../../../src/app/shared/services/validators/custom-validator.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__validators_custom_validator__["a"]; });







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

module.exports = "<ul>\r\n  <li class=\"background-black\">\r\n    <span [@move]=\"show\"><img src=\"./assets/images/logo.png\" width=\"30px\" alt=\"Wecare Logo\"></span>\r\n    <span [@title]=\"show\" style=\"padding-left:10px\"><span class=\"white\">   WE</span><span class=\"orange\">Care</span></span>\r\n  </li>\r\n  <!-- <ng-template #small>\r\n    <li class=\"background-black\">\r\n      <img class=\"icon\" src=\"./assets/images/logo.png\" width=\"30px\" alt=\"Wecare Logo\">\r\n    </li>\r\n  </ng-template> -->\r\n  <li class=\"pre\" [routerLink]=\"['/dashboard']\" routerLinkActive=\"active\">\r\n    <div>\r\n      <span>{{\"Dashboard\"|translate}}</span>\r\n      <span><img src=\"/assets/images/dashboard.png\"/></span>\r\n    </div>\r\n  </li>\r\n  <li class=\"pre\" [routerLink]=\"['/map']\" routerLinkActive=\"active\">\r\n    <div>\r\n      <span>{{\"Map\"|translate}}</span>\r\n      <span><img src=\"/assets/images/map.png\"/></span>\r\n    </div>\r\n  </li>\r\n  <li class=\"pre\" [routerLink]=\"['/projects']\" routerLinkActive=\"active\">\r\n    <div>\r\n      <span>{{\"Projects\"|translate}}</span>\r\n      <span><img src=\"/assets/images/presentation.png\"/></span>\r\n    </div>\r\n  </li>\r\n  <li class=\"pre\" [routerLink]=\"['/employee']\" routerLinkActive=\"active\">\r\n    <div>\r\n      <span>{{\"Employee\"|translate}}</span>\r\n      <span><img src=\"/assets/images/engineer.png\"/></span>\r\n    </div>\r\n  </li>\r\n  <li class=\"pre\" [routerLink]=\"['/report']\" routerLinkActive=\"active\">\r\n    <div>\r\n      <span>{{\"Report\"|translate}}</span>\r\n      <span><img src=\"/assets/images/newspaper.png\"/></span>\r\n    </div>\r\n  </li>\r\n  <li class=\"pre\" [routerLink]=\"['/alert']\" routerLinkActive=\"active\">\r\n    <div>\r\n      <span>{{\"Alert\"|translate}}</span>\r\n      <span class=\"alert-notification\">\r\n        <span class=\"alert-notification-image\"><img src=\"/assets/images/notification.png\"/></span>\r\n        <span class=\"alert-notification-text\"><div>{{numberAlert}}</div></span>\r\n      </span>\r\n    </div>\r\n  </li>\r\n  <li class=\"pre\" [routerLink]=\"['/settings']\" routerLinkActive=\"active\">\r\n    <div>\r\n      <span>{{\"Settings\"|translate}}</span>\r\n      <span><img src=\"/assets/images/gear-option.png\"/></span>\r\n    </div>\r\n  </li>\r\n  <li class=\"pre\" [routerLink]=\"['/admin']\" routerLinkActive=\"active\">\r\n    <div>\r\n      <span>{{\"Admin\"|translate}}</span>\r\n      <span><img src=\"/assets/images/admin.png\"/></span>\r\n    </div>\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "../../../../../src/app/shared/sidenav/sidenav.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* #8a6f6a */\n/* #af9490 */\nul {\n  font-size: 18px;\n  line-height: 3;\n  font-weight: 400;\n  list-style: none;\n  margin-left: -40px; }\n\n.hide {\n  display: none; }\n\nli.background-black {\n  padding-top: 2.5px;\n  background-color: #292b2c;\n  cursor: default;\n  padding-left: 0px;\n  text-align: center;\n  padding-right: 0px; }\n  li.background-black:hover {\n    background-color: #292b2c; }\n\nli {\n  padding-left: 25px;\n  padding-right: 25px;\n  cursor: pointer; }\n  li:hover {\n    background-color: #af9490; }\n\n:host {\n  background: #707070;\n  color: #fff;\n  position: fixed;\n  left: 0;\n  top: 0;\n  right: auto;\n  bottom: 0;\n  width: 10%;\n  min-width: 200px;\n  z-index: 2;\n  font-family: Arial, \"Helvetica Neue\", Helvetica, sans-serif; }\n\n.active {\n  background-color: #8a6f6a; }\n\n.orange {\n  color: #d08966; }\n\n.white {\n  color: white; }\n\n.icon {\n  position: relative;\n  left: 125px; }\n\n.pre {\n  /*white-space:pre;*/ }\n\n.pre > div {\n  height: 50px; }\n\n.pre > div > span > img {\n  width: auto;\n  height: 30px;\n  position: fixed;\n  margin: 10px 25px 10px 0px;\n  right: 0; }\n\n.alert-notification {\n  position: fixed;\n  right: 0; }\n\n.alert-notification-image {\n  margin-right: -5px;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex; }\n\n.alert-notification-image > img {\n  width: auto;\n  height: 30px; }\n\n.alert-notification-text {\n  display: inline-block;\n  width: 25px;\n  text-align: center;\n  background: orangered;\n  height: 30px;\n  margin-top: 10px; }\n\n.alert-notification-text > div {\n  height: inherit;\n  top: 0;\n  position: absolute;\n  margin: auto;\n  left: 50%;\n  right: 0; }\n", ""]);

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
    function SidenavComponent(CallApi) {
        this.CallApi = CallApi;
        //variable to control the variable sidenav title
        this.smallIcon = false;
        this.numberAlert = 0;
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services__["c" /* CallApiService */]])
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_services__["e" /* TabService */]])
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    // apiUrl:"http://wecarev2.mybluemix.net/api/",
    // apiUrl: 'http://localhost/wecare/api/'
    apiUrl: 'http://mmdt.ddns.net:8081/wecare/api.php/'
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Data; });
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