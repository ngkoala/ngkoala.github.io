"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var testing_1 = require('@angular/core/testing');
var testing_2 = require('@angular/compiler/testing');
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var progress_bar_1 = require('./progress-bar');
describe('MdProgressBar', function () {
    var builder;
    beforeEach(testing_1.inject([testing_2.TestComponentBuilder], function (tcb) {
        builder = tcb;
    }));
    it('should apply a mode of "determinate" if no mode is provided.', function (done) {
        builder
            .overrideTemplate(TestApp, '<md-progress-bar></md-progress-bar>')
            .createAsync(TestApp)
            .then(function (fixture) {
            fixture.detectChanges();
            var progressElement = fixture.debugElement.query(platform_browser_1.By.css('md-progress-bar'));
            expect(progressElement.componentInstance.mode).toBe('determinate');
            done();
        });
    });
    it('should not modify the mode if a valid mode is provided.', function (done) {
        builder
            .overrideTemplate(TestApp, '<md-progress-bar mode="buffer"></md-progress-bar>')
            .createAsync(TestApp)
            .then(function (fixture) {
            fixture.detectChanges();
            var progressElement = fixture.debugElement.query(platform_browser_1.By.css('md-progress-bar'));
            expect(progressElement.componentInstance.mode).toBe('buffer');
            done();
        });
    });
    it('should define default values for value and bufferValue attributes', function (done) {
        builder
            .overrideTemplate(TestApp, '<md-progress-bar></md-progress-bar>')
            .createAsync(TestApp)
            .then(function (fixture) {
            fixture.detectChanges();
            var progressElement = fixture.debugElement.query(platform_browser_1.By.css('md-progress-bar'));
            expect(progressElement.componentInstance.value).toBe(0);
            expect(progressElement.componentInstance.bufferValue).toBe(0);
            done();
        });
    });
    it('should clamp value and bufferValue between 0 and 100', function (done) {
        builder
            .overrideTemplate(TestApp, '<md-progress-bar></md-progress-bar>')
            .createAsync(TestApp)
            .then(function (fixture) {
            fixture.detectChanges();
            var progressElement = fixture.debugElement.query(platform_browser_1.By.css('md-progress-bar'));
            var progressComponent = progressElement.componentInstance;
            progressComponent.value = 50;
            expect(progressComponent.value).toBe(50);
            progressComponent.value = 999;
            expect(progressComponent.value).toBe(100);
            progressComponent.value = -10;
            expect(progressComponent.value).toBe(0);
            progressComponent.bufferValue = -29;
            expect(progressComponent.bufferValue).toBe(0);
            progressComponent.bufferValue = 9;
            expect(progressComponent.bufferValue).toBe(9);
            progressComponent.bufferValue = 1320;
            expect(progressComponent.bufferValue).toBe(100);
            done();
        });
    });
    it('should return the transform attribute for bufferValue and mode', function (done) {
        builder
            .overrideTemplate(TestApp, '<md-progress-bar></md-progress-bar>')
            .createAsync(TestApp)
            .then(function (fixture) {
            fixture.detectChanges();
            var progressElement = fixture.debugElement.query(platform_browser_1.By.css('md-progress-bar'));
            var progressComponent = progressElement.componentInstance;
            expect(progressComponent._primaryTransform()).toEqual({ transform: 'scaleX(0)' });
            expect(progressComponent._bufferTransform()).toBe(undefined);
            progressComponent.value = 40;
            expect(progressComponent._primaryTransform()).toEqual({ transform: 'scaleX(0.4)' });
            expect(progressComponent._bufferTransform()).toBe(undefined);
            progressComponent.value = 35;
            progressComponent.bufferValue = 55;
            expect(progressComponent._primaryTransform()).toEqual({ transform: 'scaleX(0.35)' });
            expect(progressComponent._bufferTransform()).toBe(undefined);
            progressComponent.mode = 'buffer';
            expect(progressComponent._primaryTransform()).toEqual({ transform: 'scaleX(0.35)' });
            expect(progressComponent._bufferTransform()).toEqual({ transform: 'scaleX(0.55)' });
            progressComponent.value = 60;
            progressComponent.bufferValue = 60;
            expect(progressComponent._primaryTransform()).toEqual({ transform: 'scaleX(0.6)' });
            expect(progressComponent._bufferTransform()).toEqual({ transform: 'scaleX(0.6)' });
            done();
        });
    });
});
/** Test component that contains an MdButton. */
var TestApp = (function () {
    function TestApp() {
    }
    TestApp = __decorate([
        core_1.Component({
            directives: [progress_bar_1.MdProgressBar],
            template: '',
        }), 
        __metadata('design:paramtypes', [])
    ], TestApp);
    return TestApp;
}());
//# sourceMappingURL=progress-bar.spec.js.map