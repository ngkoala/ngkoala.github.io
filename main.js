"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var live_announcer_1 = require('@angular2-material/core/a11y/live-announcer');
var MdGestureConfig_1 = require('@angular2-material/core/gestures/MdGestureConfig');
var icon_registry_1 = require('@angular2-material/icon/icon-registry');
var overlay_container_1 = require('@angular2-material/core/overlay/overlay-container');
var demo_app_1 = require('./demo-app/demo-app');
var routes_1 = require('./demo-app/routes');
platform_browser_dynamic_1.bootstrap(demo_app_1.DemoApp, [
    routes_1.DEMO_APP_ROUTE_PROVIDER,
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    live_announcer_1.MdLiveAnnouncer,
    http_1.HTTP_PROVIDERS,
    overlay_container_1.OverlayContainer,
    icon_registry_1.MdIconRegistry,
    { provide: platform_browser_1.HAMMER_GESTURE_CONFIG, useClass: MdGestureConfig_1.MdGestureConfig },
]);
//# sourceMappingURL=main.js.map