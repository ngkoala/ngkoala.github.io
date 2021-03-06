"use strict";
var ts = require('typescript');
var collector_1 = require('../src/collector');
var typescript_mocks_1 = require('./typescript.mocks');
describe('Collector', function () {
    var documentRegistry = ts.createDocumentRegistry();
    var host;
    var service;
    var program;
    var collector;
    beforeEach(function () {
        host = new typescript_mocks_1.Host(FILES, [
            '/app/app.component.ts', '/app/cases-data.ts', '/app/error-cases.ts', '/promise.ts',
            '/unsupported-1.ts', '/unsupported-2.ts', 'import-star.ts', 'exported-functions.ts'
        ]);
        service = ts.createLanguageService(host, documentRegistry);
        program = service.getProgram();
        collector = new collector_1.MetadataCollector();
    });
    it('should not have errors in test data', function () { typescript_mocks_1.expectValidSources(service, program); });
    it('should return undefined for modules that have no metadata', function () {
        var sourceFile = program.getSourceFile('app/hero.ts');
        var metadata = collector.getMetadata(sourceFile);
        expect(metadata).toBeUndefined();
    });
    it('should be able to collect a simple component\'s metadata', function () {
        var sourceFile = program.getSourceFile('app/hero-detail.component.ts');
        var metadata = collector.getMetadata(sourceFile);
        expect(metadata).toEqual({
            __symbolic: 'module',
            version: 1,
            metadata: {
                HeroDetailComponent: {
                    __symbolic: 'class',
                    decorators: [{
                            __symbolic: 'call',
                            expression: { __symbolic: 'reference', module: 'angular2/core', name: 'Component' },
                            arguments: [{
                                    selector: 'my-hero-detail',
                                    template: "\n        <div *ngIf=\"hero\">\n          <h2>{{hero.name}} details!</h2>\n          <div><label>id: </label>{{hero.id}}</div>\n          <div>\n            <label>name: </label>\n            <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n          </div>\n        </div>\n      "
                                }]
                        }],
                    members: {
                        hero: [{
                                __symbolic: 'property',
                                decorators: [{
                                        __symbolic: 'call',
                                        expression: { __symbolic: 'reference', module: 'angular2/core', name: 'Input' }
                                    }]
                            }]
                    }
                }
            }
        });
    });
    it('should be able to get a more complicated component\'s metadata', function () {
        var sourceFile = program.getSourceFile('/app/app.component.ts');
        var metadata = collector.getMetadata(sourceFile);
        expect(metadata).toEqual({
            __symbolic: 'module',
            version: 1,
            metadata: {
                AppComponent: {
                    __symbolic: 'class',
                    decorators: [{
                            __symbolic: 'call',
                            expression: { __symbolic: 'reference', module: 'angular2/core', name: 'Component' },
                            arguments: [{
                                    selector: 'my-app',
                                    template: "\n        <h2>My Heroes</h2>\n        <ul class=\"heroes\">\n          <li *ngFor=\"#hero of heroes\"\n            (click)=\"onSelect(hero)\"\n            [class.selected]=\"hero === selectedHero\">\n            <span class=\"badge\">{{hero.id | lowercase}}</span> {{hero.name | uppercase}}\n          </li>\n        </ul>\n        <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n        ",
                                    directives: [
                                        {
                                            __symbolic: 'reference',
                                            module: './hero-detail.component',
                                            name: 'HeroDetailComponent',
                                        },
                                        { __symbolic: 'reference', module: 'angular2/common', name: 'NgFor' }
                                    ],
                                    providers: [{ __symbolic: 'reference', module: './hero.service', default: true }],
                                    pipes: [
                                        { __symbolic: 'reference', module: 'angular2/common', name: 'LowerCasePipe' },
                                        { __symbolic: 'reference', module: 'angular2/common', name: 'UpperCasePipe' }
                                    ]
                                }]
                        }],
                    members: {
                        __ctor__: [{
                                __symbolic: 'constructor',
                                parameters: [{ __symbolic: 'reference', module: './hero.service', default: true }]
                            }],
                        onSelect: [{ __symbolic: 'method' }],
                        ngOnInit: [{ __symbolic: 'method' }],
                        getHeroes: [{ __symbolic: 'method' }]
                    }
                }
            }
        });
    });
    it('should return the values of exported variables', function () {
        var sourceFile = program.getSourceFile('/app/mock-heroes.ts');
        var metadata = collector.getMetadata(sourceFile);
        expect(metadata).toEqual({
            __symbolic: 'module',
            version: 1,
            metadata: {
                HEROES: [
                    { 'id': 11, 'name': 'Mr. Nice' }, { 'id': 12, 'name': 'Narco' },
                    { 'id': 13, 'name': 'Bombasto' }, { 'id': 14, 'name': 'Celeritas' },
                    { 'id': 15, 'name': 'Magneta' }, { 'id': 16, 'name': 'RubberMan' },
                    { 'id': 17, 'name': 'Dynama' }, { 'id': 18, 'name': 'Dr IQ' }, { 'id': 19, 'name': 'Magma' },
                    { 'id': 20, 'name': 'Tornado' }
                ]
            }
        });
    });
    it('should return undefined for modules that have no metadata', function () {
        var sourceFile = program.getSourceFile('/app/error-cases.ts');
        expect(sourceFile).toBeTruthy(sourceFile);
        var metadata = collector.getMetadata(sourceFile);
        expect(metadata).toBeUndefined();
    });
    var casesFile;
    var casesMetadata;
    beforeEach(function () {
        casesFile = program.getSourceFile('/app/cases-data.ts');
        casesMetadata = collector.getMetadata(casesFile);
    });
    it('should provide any reference for an any ctor parameter type', function () {
        var casesAny = casesMetadata.metadata['CaseAny'];
        expect(casesAny).toBeTruthy();
        var ctorData = casesAny.members['__ctor__'];
        expect(ctorData).toEqual([{ __symbolic: 'constructor', parameters: [{ __symbolic: 'reference', name: 'any' }] }]);
    });
    it('should record annotations on set and get declarations', function () {
        var propertyData = {
            name: [{
                    __symbolic: 'property',
                    decorators: [{
                            __symbolic: 'call',
                            expression: { __symbolic: 'reference', module: 'angular2/core', name: 'Input' },
                            arguments: ['firstName']
                        }]
                }]
        };
        var caseGetProp = casesMetadata.metadata['GetProp'];
        expect(caseGetProp.members).toEqual(propertyData);
        var caseSetProp = casesMetadata.metadata['SetProp'];
        expect(caseSetProp.members).toEqual(propertyData);
        var caseFullProp = casesMetadata.metadata['FullProp'];
        expect(caseFullProp.members).toEqual(propertyData);
    });
    it('should record references to parameterized types', function () {
        var casesForIn = casesMetadata.metadata['NgFor'];
        expect(casesForIn).toEqual({
            __symbolic: 'class',
            decorators: [{
                    __symbolic: 'call',
                    expression: { __symbolic: 'reference', module: 'angular2/core', name: 'Injectable' }
                }],
            members: {
                __ctor__: [{
                        __symbolic: 'constructor',
                        parameters: [{
                                __symbolic: 'reference',
                                name: 'ClassReference',
                                arguments: [{ __symbolic: 'reference', name: 'NgForRow' }]
                            }]
                    }]
            }
        });
    });
    it('should report errors for destructured imports', function () {
        var unsupported1 = program.getSourceFile('/unsupported-1.ts');
        var metadata = collector.getMetadata(unsupported1);
        expect(metadata).toEqual({
            __symbolic: 'module',
            version: 1,
            metadata: {
                a: { __symbolic: 'error', message: 'Destructuring not supported', line: 1, character: 16 },
                b: { __symbolic: 'error', message: 'Destructuring not supported', line: 1, character: 18 },
                c: { __symbolic: 'error', message: 'Destructuring not supported', line: 2, character: 16 },
                d: { __symbolic: 'error', message: 'Destructuring not supported', line: 2, character: 18 },
                e: { __symbolic: 'error', message: 'Variable not initialized', line: 3, character: 14 }
            }
        });
    });
    it('should report an error for references to unexpected types', function () {
        var unsupported1 = program.getSourceFile('/unsupported-2.ts');
        var metadata = collector.getMetadata(unsupported1);
        var barClass = metadata.metadata['Bar'];
        var ctor = barClass.members['__ctor__'][0];
        var parameter = ctor.parameters[0];
        expect(parameter).toEqual({
            __symbolic: 'error',
            message: 'Reference to non-exported class',
            line: 1,
            character: 45,
            context: { className: 'Foo' }
        });
    });
    it('should be able to handle import star type references', function () {
        var importStar = program.getSourceFile('/import-star.ts');
        var metadata = collector.getMetadata(importStar);
        var someClass = metadata.metadata['SomeClass'];
        var ctor = someClass.members['__ctor__'][0];
        var parameters = ctor.parameters;
        expect(parameters).toEqual([
            { __symbolic: 'reference', module: 'angular2/common', name: 'NgFor' }
        ]);
    });
    it('should be able to record functions', function () {
        var exportedFunctions = program.getSourceFile('/exported-functions.ts');
        var metadata = collector.getMetadata(exportedFunctions);
        expect(metadata).toEqual({
            __symbolic: 'module',
            version: 1,
            metadata: {
                one: {
                    __symbolic: 'function',
                    parameters: ['a', 'b', 'c'],
                    value: {
                        a: { __symbolic: 'reference', name: 'a' },
                        b: { __symbolic: 'reference', name: 'b' },
                        c: { __symbolic: 'reference', name: 'c' }
                    }
                },
                two: {
                    __symbolic: 'function',
                    parameters: ['a', 'b', 'c'],
                    value: {
                        a: { __symbolic: 'reference', name: 'a' },
                        b: { __symbolic: 'reference', name: 'b' },
                        c: { __symbolic: 'reference', name: 'c' }
                    }
                },
                three: {
                    __symbolic: 'function',
                    parameters: ['a', 'b', 'c'],
                    value: [
                        { __symbolic: 'reference', name: 'a' }, { __symbolic: 'reference', name: 'b' },
                        { __symbolic: 'reference', name: 'c' }
                    ]
                },
                supportsState: {
                    __symbolic: 'function',
                    parameters: [],
                    value: {
                        __symbolic: 'pre',
                        operator: '!',
                        operand: {
                            __symbolic: 'pre',
                            operator: '!',
                            operand: {
                                __symbolic: 'select',
                                expression: {
                                    __symbolic: 'select',
                                    expression: { __symbolic: 'reference', name: 'window' },
                                    member: 'history'
                                },
                                member: 'pushState'
                            }
                        }
                    }
                }
            }
        });
    });
    it('should be able to handle import star type references', function () {
        var importStar = program.getSourceFile('/import-star.ts');
        var metadata = collector.getMetadata(importStar);
        var someClass = metadata.metadata['SomeClass'];
        var ctor = someClass.members['__ctor__'][0];
        var parameters = ctor.parameters;
        expect(parameters).toEqual([
            { __symbolic: 'reference', module: 'angular2/common', name: 'NgFor' }
        ]);
    });
});
// TODO: Do not use \` in a template literal as it confuses clang-format
var FILES = {
    'app': {
        'app.component.ts': "\n      import {Component as MyComponent, OnInit} from 'angular2/core';\n      import * as common from 'angular2/common';\n      import {Hero} from './hero';\n      import {HeroDetailComponent} from './hero-detail.component';\n      import HeroService from './hero.service';\n      // thrown away\n      import 'angular2/core';\n\n      @MyComponent({\n        selector: 'my-app',\n        template:" +
            '`' +
            "\n        <h2>My Heroes</h2>\n        <ul class=\"heroes\">\n          <li *ngFor=\"#hero of heroes\"\n            (click)=\"onSelect(hero)\"\n            [class.selected]=\"hero === selectedHero\">\n            <span class=\"badge\">{{hero.id | lowercase}}</span> {{hero.name | uppercase}}\n          </li>\n        </ul>\n        <my-hero-detail [hero]=\"selectedHero\"></my-hero-detail>\n        " +
            '`' +
            ",\n        directives: [HeroDetailComponent, common.NgFor],\n        providers: [HeroService],\n        pipes: [common.LowerCasePipe, common.UpperCasePipe]\n      })\n      export class AppComponent implements OnInit {\n        public title = 'Tour of Heroes';\n        public heroes: Hero[];\n        public selectedHero: Hero;\n\n        constructor(private _heroService: HeroService) { }\n\n        onSelect(hero: Hero) { this.selectedHero = hero; }\n\n        ngOnInit() {\n            this.getHeroes()\n        }\n\n        getHeroes() {\n          this._heroService.getHeroesSlowly().then(heros => this.heroes = heros);\n        }\n      }",
        'hero.ts': "\n      export interface Hero {\n        id: number;\n        name: string;\n      }",
        'hero-detail.component.ts': "\n      import {Component, Input} from 'angular2/core';\n      import {Hero} from './hero';\n\n      @Component({\n        selector: 'my-hero-detail',\n        template: " +
            '`' +
            "\n        <div *ngIf=\"hero\">\n          <h2>{{hero.name}} details!</h2>\n          <div><label>id: </label>{{hero.id}}</div>\n          <div>\n            <label>name: </label>\n            <input [(ngModel)]=\"hero.name\" placeholder=\"name\"/>\n          </div>\n        </div>\n      " +
            '`' +
            ",\n      })\n      export class HeroDetailComponent {\n        @Input() public hero: Hero;\n      }",
        'mock-heroes.ts': "\n      import {Hero as Hero} from './hero';\n\n      export const HEROES: Hero[] = [\n          {\"id\": 11, \"name\": \"Mr. Nice\"},\n          {\"id\": 12, \"name\": \"Narco\"},\n          {\"id\": 13, \"name\": \"Bombasto\"},\n          {\"id\": 14, \"name\": \"Celeritas\"},\n          {\"id\": 15, \"name\": \"Magneta\"},\n          {\"id\": 16, \"name\": \"RubberMan\"},\n          {\"id\": 17, \"name\": \"Dynama\"},\n          {\"id\": 18, \"name\": \"Dr IQ\"},\n          {\"id\": 19, \"name\": \"Magma\"},\n          {\"id\": 20, \"name\": \"Tornado\"}\n      ];",
        'default-exporter.ts': "\n      let a: string;\n      export default a;\n    ",
        'hero.service.ts': "\n      import {Injectable} from 'angular2/core';\n      import {HEROES} from './mock-heroes';\n      import {Hero} from './hero';\n\n      @Injectable()\n      class HeroService {\n          getHeros() {\n              return Promise.resolve(HEROES);\n          }\n\n          getHeroesSlowly() {\n              return new Promise<Hero[]>(resolve =>\n                setTimeout(()=>resolve(HEROES), 2000)); // 2 seconds\n          }\n      }\n      export default HeroService;",
        'cases-data.ts': "\n      import {Injectable, Input} from 'angular2/core';\n\n      @Injectable()\n      export class CaseAny {\n        constructor(param: any) {}\n      }\n\n      @Injectable()\n      export class GetProp {\n        private _name: string;\n        @Input('firstName') get name(): string {\n          return this._name;\n        }\n      }\n\n      @Injectable()\n      export class SetProp {\n        private _name: string;\n        @Input('firstName') set name(value: string) {\n          this._name = value;\n        }\n      }\n\n      @Injectable()\n      export class FullProp {\n        private _name: string;\n        @Input('firstName') get name(): string {\n          return this._name;\n        }\n        set name(value: string) {\n          this._name = value;\n        }\n      }\n\n      export class ClassReference<T> { }\n      export class NgForRow {\n\n      }\n\n      @Injectable()\n      export class NgFor {\n        constructor (public ref: ClassReference<NgForRow>) {}\n      }\n     ",
        'error-cases.ts': "\n      import HeroService from './hero.service';\n\n      export class CaseCtor {\n        constructor(private _heroService: HeroService) { }\n      }\n    "
    },
    'promise.ts': "\n    interface PromiseLike<T> {\n        then<TResult>(onfulfilled?: (value: T) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => TResult | PromiseLike<TResult>): PromiseLike<TResult>;\n        then<TResult>(onfulfilled?: (value: T) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => void): PromiseLike<TResult>;\n    }\n\n    interface Promise<T> {\n        then<TResult>(onfulfilled?: (value: T) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => TResult | PromiseLike<TResult>): Promise<TResult>;\n        then<TResult>(onfulfilled?: (value: T) => TResult | PromiseLike<TResult>, onrejected?: (reason: any) => void): Promise<TResult>;\n        catch(onrejected?: (reason: any) => T | PromiseLike<T>): Promise<T>;\n        catch(onrejected?: (reason: any) => void): Promise<T>;\n    }\n\n    interface PromiseConstructor {\n        prototype: Promise<any>;\n        new <T>(executor: (resolve: (value?: T | PromiseLike<T>) => void, reject: (reason?: any) => void) => void): Promise<T>;\n        reject(reason: any): Promise<void>;\n        reject<T>(reason: any): Promise<T>;\n        resolve<T>(value: T | PromiseLike<T>): Promise<T>;\n        resolve(): Promise<void>;\n    }\n\n    declare var Promise: PromiseConstructor;\n  ",
    'unsupported-1.ts': "\n    export let {a, b} = {a: 1, b: 2};\n    export let [c, d] = [1, 2];\n    export let e;\n  ",
    'unsupported-2.ts': "\n    import {Injectable} from 'angular2/core';\n\n    class Foo {}\n\n    @Injectable()\n    export class Bar {\n      constructor(private f: Foo) {}\n    }\n  ",
    'import-star.ts': "\n    import {Injectable} from 'angular2/core';\n    import * as common from 'angular2/common';\n\n    @Injectable()\n    export class SomeClass {\n      constructor(private f: common.NgFor) {}\n    }\n  ",
    'exported-functions.ts': "\n    export function one(a: string, b: string, c: string) {\n      return {a: a, b: b, c: c};\n    }\n    export function two(a: string, b: string, c: string) {\n      return {a, b, c};\n    }\n    export function three({a, b, c}: {a: string, b: string, c: string}) {\n      return [a, b, c];\n    }\n    export function supportsState(): boolean {\n     return !!window.history.pushState;\n    }\n  ",
    'node_modules': {
        'angular2': {
            'core.d.ts': "\n          export interface Type extends Function { }\n          export interface TypeDecorator {\n              <T extends Type>(type: T): T;\n              (target: Object, propertyKey?: string | symbol, parameterIndex?: number): void;\n              annotations: any[];\n          }\n          export interface ComponentDecorator extends TypeDecorator { }\n          export interface ComponentFactory {\n              (obj: {\n                  selector?: string;\n                  inputs?: string[];\n                  outputs?: string[];\n                  properties?: string[];\n                  events?: string[];\n                  host?: {\n                      [key: string]: string;\n                  };\n                  bindings?: any[];\n                  providers?: any[];\n                  exportAs?: string;\n                  moduleId?: string;\n                  queries?: {\n                      [key: string]: any;\n                  };\n                  viewBindings?: any[];\n                  viewProviders?: any[];\n                  templateUrl?: string;\n                  template?: string;\n                  styleUrls?: string[];\n                  styles?: string[];\n                  directives?: Array<Type | any[]>;\n                  pipes?: Array<Type | any[]>;\n              }): ComponentDecorator;\n          }\n          export declare var Component: ComponentFactory;\n          export interface InputFactory {\n              (bindingPropertyName?: string): any;\n              new (bindingPropertyName?: string): any;\n          }\n          export declare var Input: InputFactory;\n          export interface InjectableFactory {\n              (): any;\n          }\n          export declare var Injectable: InjectableFactory;\n          export interface OnInit {\n              ngOnInit(): any;\n          }\n      ",
            'common.d.ts': "\n        export declare class NgFor {\n            ngForOf: any;\n            ngForTemplate: any;\n            ngDoCheck(): void;\n        }\n        export declare class LowerCasePipe  {\n          transform(value: string, args?: any[]): string;\n        }\n        export declare class UpperCasePipe {\n            transform(value: string, args?: any[]): string;\n        }\n      "
        }
    }
};
//# sourceMappingURL=collector.spec.js.map