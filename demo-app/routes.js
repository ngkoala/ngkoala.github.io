"use strict";
var router_1 = require('@angular/router');
var demo_app_1 = require('./demo-app');
var button_demo_1 = require('../button/button-demo');
var baseline_demo_1 = require('../baseline/baseline-demo');
var button_toggle_demo_1 = require('../button-toggle/button-toggle-demo');
var tab_group_demo_1 = require('../tabs/tab-group-demo');
var grid_list_demo_1 = require('../grid-list/grid-list-demo');
var gestures_demo_1 = require('../gestures/gestures-demo');
var live_announcer_demo_1 = require('../live-announcer/live-announcer-demo');
var list_demo_1 = require('../list/list-demo');
var icon_demo_1 = require('../icon/icon-demo');
var toolbar_demo_1 = require('../toolbar/toolbar-demo');
var input_demo_1 = require('../input/input-demo');
var checkbox_demo_1 = require('../checkbox/checkbox-demo');
var overlay_demo_1 = require('../overlay/overlay-demo');
var portal_demo_1 = require('../portal/portal-demo');
var progress_bar_demo_1 = require('../progress-bar/progress-bar-demo');
var progress_circle_demo_1 = require('../progress-circle/progress-circle-demo');
var slide_toggle_demo_1 = require('../slide-toggle/slide-toggle-demo');
var slider_demo_1 = require('../slider/slider-demo');
var sidenav_demo_1 = require('../sidenav/sidenav-demo');
var radio_demo_1 = require('../radio/radio-demo');
var card_demo_1 = require('../card/card-demo');
var menu_demo_1 = require('../menu/menu-demo');
var dialog_demo_1 = require('../dialog/dialog-demo');
var tooltip_demo_1 = require('../tooltip/tooltip-demo');
exports.routes = [
    { path: '', component: demo_app_1.Home },
    { path: 'button', component: button_demo_1.ButtonDemo },
    { path: 'card', component: card_demo_1.CardDemo },
    { path: 'radio', component: radio_demo_1.RadioDemo },
    { path: 'sidenav', component: sidenav_demo_1.SidenavDemo },
    { path: 'slide-toggle', component: slide_toggle_demo_1.SlideToggleDemo },
    { path: 'slider', component: slider_demo_1.SliderDemo },
    { path: 'progress-circle', component: progress_circle_demo_1.ProgressCircleDemo },
    { path: 'progress-bar', component: progress_bar_demo_1.ProgressBarDemo },
    { path: 'portal', component: portal_demo_1.PortalDemo },
    { path: 'overlay', component: overlay_demo_1.OverlayDemo },
    { path: 'checkbox', component: checkbox_demo_1.CheckboxDemo },
    { path: 'input', component: input_demo_1.InputDemo },
    { path: 'toolbar', component: toolbar_demo_1.ToolbarDemo },
    { path: 'icon', component: icon_demo_1.IconDemo },
    { path: 'list', component: list_demo_1.ListDemo },
    { path: 'menu', component: menu_demo_1.MenuDemo },
    { path: 'live-announcer', component: live_announcer_demo_1.LiveAnnouncerDemo },
    { path: 'gestures', component: gestures_demo_1.GesturesDemo },
    { path: 'grid-list', component: grid_list_demo_1.GridListDemo },
    { path: 'tabs', component: tab_group_demo_1.TabsDemo },
    { path: 'button-toggle', component: button_toggle_demo_1.ButtonToggleDemo },
    { path: 'baseline', component: baseline_demo_1.BaselineDemo },
    { path: 'dialog', component: dialog_demo_1.DialogDemo },
    { path: 'tooltip', component: tooltip_demo_1.TooltipDemo },
];
exports.DEMO_APP_ROUTE_PROVIDER = router_1.provideRouter(exports.routes);
//# sourceMappingURL=routes.js.map