(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        SApp: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/components/svelte/SvelteApp.js", "vendors~SApp" ]);
    return checkDeferredModules();
})({
    "./assets/js/components/svelte/App.svelte": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");\n/* harmony import */ var _Header_svelte__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header.svelte */ "./assets/js/components/svelte/Header.svelte");\n/* assets/js/components/svelte/App.svelte generated by Svelte v3.32.0 */\n\n\n\n\nfunction add_css() {\n\tvar style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* element */ "g"])("style");\n\tstyle.id = "svelte-1mwh9qx-style";\n\tstyle.textContent = "h1.svelte-1mwh9qx{color:red}";\n\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* append */ "b"])(document.head, style);\n}\n\nfunction create_fragment(ctx) {\n\tlet header;\n\tlet t0;\n\tlet div4;\n\tlet current;\n\theader = new _Header_svelte__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"]({});\n\n\treturn {\n\t\tc() {\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* create_component */ "d"])(header.$$.fragment);\n\t\t\tt0 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* space */ "m"])();\n\t\t\tdiv4 = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* element */ "g"])("div");\n\n\t\t\tdiv4.innerHTML = `<div class="Aligner"><div class="Aligner-item"><img alt="CodingPhase Logo" src="/img/logo.png"/> \n            <h1 class="svelte-1mwh9qx">Dev-Starter-Kit</h1> \n            <div class="menu"><ul><li><a href="http://starterkit.codingphase.com" target="new">Documentation</a></li> \n                    <li><a href="http://www.codingphase.com" target="new">CodingPhase.Com</a></li></ul></div> \n            <div class="version-num">version 4.0.2</div> \n            <br/> \n            <a class="github-button" href="https://github.com/codingphasedotcom/Dev-Starter-Kit" data-icon="octicon-star" data-style="mega" data-count-href="/codingphasedotcom/rocky/stargazers" data-count-api="/repos/codingphasedotcom/rocky#stargazers_count" data-count-aria-label="# stargazers on GitHub" aria-label="Star codingphasedotcom/rocky on GitHub">Star</a></div></div>`;\n\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* attr */ "c"])(div4, "class", "home");\n\t\t},\n\t\tm(target, anchor) {\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* mount_component */ "j"])(header, target, anchor);\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* insert */ "i"])(target, t0, anchor);\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* insert */ "i"])(target, div4, anchor);\n\t\t\tcurrent = true;\n\t\t},\n\t\tp: svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "k"],\n\t\ti(local) {\n\t\t\tif (current) return;\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* transition_in */ "n"])(header.$$.fragment, local);\n\t\t\tcurrent = true;\n\t\t},\n\t\to(local) {\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* transition_out */ "o"])(header.$$.fragment, local);\n\t\t\tcurrent = false;\n\t\t},\n\t\td(detaching) {\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* destroy_component */ "e"])(header, detaching);\n\t\t\tif (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* detach */ "f"])(t0);\n\t\t\tif (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* detach */ "f"])(div4);\n\t\t}\n\t};\n}\n\nfunction instance($$self) {\n\tconsole.log("swag");\n\treturn [];\n}\n\nclass App extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* SvelteComponent */ "a"] {\n\tconstructor(options) {\n\t\tsuper();\n\t\tif (!document.getElementById("svelte-1mwh9qx-style")) add_css();\n\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* init */ "h"])(this, options, instance, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* safe_not_equal */ "l"], {});\n\t}\n}\n\n/* harmony default export */ __webpack_exports__["a"] = (App);\n\n//# sourceURL=webpack:///./assets/js/components/svelte/App.svelte?');
    },
    "./assets/js/components/svelte/Header.svelte": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var svelte_internal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! svelte/internal */ "./node_modules/svelte/internal/index.mjs");\n/* assets/js/components/svelte/Header.svelte generated by Svelte v3.32.0 */\n\n\nfunction add_css() {\n\tvar style = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* element */ "g"])("style");\n\tstyle.id = "svelte-sjsaig-style";\n\tstyle.textContent = "header.svelte-sjsaig{background:#676778;color:red;text-align:center;padding:20px;font-size:1.1rem;font-weight:700;color:white}";\n\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* append */ "b"])(document.head, style);\n}\n\nfunction create_fragment(ctx) {\n\tlet header;\n\n\treturn {\n\t\tc() {\n\t\t\theader = Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* element */ "g"])("header");\n\t\t\theader.textContent = "Svelte Setup";\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* attr */ "c"])(header, "id", "header");\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* attr */ "c"])(header, "class", "svelte-sjsaig");\n\t\t},\n\t\tm(target, anchor) {\n\t\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* insert */ "i"])(target, header, anchor);\n\t\t},\n\t\tp: svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "k"],\n\t\ti: svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "k"],\n\t\to: svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* noop */ "k"],\n\t\td(detaching) {\n\t\t\tif (detaching) Object(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* detach */ "f"])(header);\n\t\t}\n\t};\n}\n\nclass Header extends svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* SvelteComponent */ "a"] {\n\tconstructor(options) {\n\t\tsuper();\n\t\tif (!document.getElementById("svelte-sjsaig-style")) add_css();\n\t\tObject(svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* init */ "h"])(this, options, null, create_fragment, svelte_internal__WEBPACK_IMPORTED_MODULE_0__[/* safe_not_equal */ "l"], {});\n\t}\n}\n\n/* harmony default export */ __webpack_exports__["a"] = (Header);\n\n//# sourceURL=webpack:///./assets/js/components/svelte/Header.svelte?');
    },
    "./assets/js/components/svelte/SvelteApp.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_svelte__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.svelte */ "./assets/js/components/svelte/App.svelte");\n\nconst app = new _App_svelte__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"]({\n  target: document.getElementById(\'app\'),\n  props: {\n    name: \'blue\'\n  }\n});\n/* harmony default export */ __webpack_exports__["default"] = (app);\n\n//# sourceURL=webpack:///./assets/js/components/svelte/SvelteApp.js?');
    }
});