/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
var components = [
    'button',
    'card',
    'checkbox',
    'dialog',
    'grid-list',
    'icon',
    'input',
    'list',
    'menu',
    'progress-bar',
    'progress-circle',
    'radio',
    'sidenav',
    'slider',
    'slide-toggle',
    'button-toggle',
    'tabs',
    'toolbar'
];
/** Map relative paths to URLs. */
var map = {
    '@angular2-material/core': 'core',
};
components.forEach(function (name) { return map[("@angular2-material/" + name)] = "components/" + name; });
/** User packages configuration. */
var packages = {
    '@angular2-material/core': {
        format: 'cjs',
        defaultExtension: 'js'
    },
    // Set the default extension for the root package, because otherwise the demo-app can't
    // be built within the production mode. Due to missing file extensions.
    '.': {
        defaultExtension: 'js'
    }
};
components.forEach(function (name) {
    packages[("@angular2-material/" + name)] = {
        format: 'cjs',
        defaultExtension: 'js'
    };
});
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/forms',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    // App specific barrels.
    'demo-app',
    'button-toggle',
    'gestures',
    'live-announcer',
    'portal',
    'overlay'
].concat(components);
var _cliSystemConfig = {};
barrels.forEach(function (barrelName) {
    _cliSystemConfig[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js'
    },
    packages: _cliSystemConfig
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map