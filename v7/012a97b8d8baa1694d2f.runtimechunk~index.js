(() => {
"use strict";
var e, t, r, o, n, a = {}, i = {};
function c(e) {
var t = i[e];
if (void 0 !== t) return t.exports;
var r = i[e] = {
id: e,
loaded: !1,
exports: {}
};
return a[e].call(r.exports, r, r.exports, c), r.loaded = !0, r.exports;
}
c.m = a, e = [], c.O = (t, r, o, n) => {
if (!r) {
var a = 1 / 0;
for (f = 0; f < e.length; f++) {
for (var [r, o, n] = e[f], i = !0, l = 0; l < r.length; l++) (!1 & n || a >= n) && Object.keys(c.O).every(e => c.O[e](r[l])) ? r.splice(l--, 1) : (i = !1, 
n < a && (a = n));
if (i) {
e.splice(f--, 1);
var d = o();
void 0 !== d && (t = d);
}
}
return t;
}
n = n || 0;
for (var f = e.length; f > 0 && e[f - 1][2] > n; f--) e[f] = e[f - 1];
e[f] = [ r, o, n ];
}, c.n = e => {
var t = e && e.__esModule ? () => e.default : () => e;
return c.d(t, {
a: t
}), t;
}, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, 
c.t = function(e, o) {
if (1 & o && (e = this(e)), 8 & o) return e;
if ("object" == typeof e && e) {
if (4 & o && e.__esModule) return e;
if (16 & o && "function" == typeof e.then) return e;
}
var n = Object.create(null);
c.r(n);
var a = {};
t = t || [ null, r({}), r([]), r(r) ];
for (var i = 2 & o && e; ("object" == typeof i || "function" == typeof i) && !~t.indexOf(i); i = r(i)) Object.getOwnPropertyNames(i).forEach(t => a[t] = () => e[t]);
return a.default = () => e, c.d(n, a), n;
}, c.d = (e, t) => {
for (var r in t) c.o(t, r) && !c.o(e, r) && Object.defineProperty(e, r, {
enumerable: !0,
get: t[r]
});
}, c.f = {}, c.e = e => Promise.all(Object.keys(c.f).reduce((t, r) => (c.f[r](e, t), 
t), [])), c.u = e => e + "." + {
187: "f0dac401eb42735ee6a7",
216: "27ac8cb601a692727808",
221: "6396a36b8f9b95efd1c6",
299: "7bf5b931671e23ec9998",
392: "3f57ac0656a9a71572f9",
430: "8761ae8310874147b93e",
548: "e7c4452bc6cc0c73b3bf",
605: "a20c213737d8c82a8149",
632: "67fa9c12ae0e2e00113d",
770: "dbf7d2932f73005a8c7b"
}[e] + ".js", c.g = function() {
if ("object" == typeof globalThis) return globalThis;
try {
return this || new Function("return this")();
} catch (e) {
if ("object" == typeof window) return window;
}
}(), c.hmd = e => ((e = Object.create(e)).children || (e.children = []), Object.defineProperty(e, "exports", {
enumerable: !0,
set: () => {
throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: " + e.id);
}
}), e), c.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), o = {}, n = "@delta/client:", 
c.l = (e, t, r, a) => {
if (o[e]) o[e].push(t); else {
var i, l;
if (void 0 !== r) for (var d = document.getElementsByTagName("script"), f = 0; f < d.length; f++) {
var u = d[f];
if (u.getAttribute("src") == e || u.getAttribute("data-webpack") == n + r) {
i = u;
break;
}
}
i || (l = !0, (i = document.createElement("script")).charset = "utf-8", c.nc && i.setAttribute("nonce", c.nc), 
i.setAttribute("data-webpack", n + r), i.src = e), o[e] = [ t ];
var s = (t, r) => {
i.onerror = i.onload = null, clearTimeout(p);
var n = o[e];
if (delete o[e], i.parentNode && i.parentNode.removeChild(i), n && n.forEach(e => e(r)), 
t) return t(r);
}, p = setTimeout(s.bind(null, void 0, {
type: "timeout",
target: i
}), 12e4);
i.onerror = s.bind(null, i.onerror), i.onload = s.bind(null, i.onload), l && document.head.appendChild(i);
}
}, c.r = e => {
"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
value: "Module"
}), Object.defineProperty(e, "__esModule", {
value: !0
});
}, c.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
var e;
c.g.importScripts && (e = c.g.location + "");
var t = c.g.document;
if (!e && t && (t.currentScript && "SCRIPT" === t.currentScript.tagName.toUpperCase() && (e = t.currentScript.src), 
!e)) {
var r = t.getElementsByTagName("script");
if (r.length) for (var o = r.length - 1; o > -1 && (!e || !/^http(s?):/.test(e)); ) e = r[o--].src;
}
if (!e) throw new Error("Automatic publicPath is not supported in this browser");
e = e.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), 
c.p = e;
})(), (() => {
c.b = "undefined" != typeof document && document.baseURI || self.location.href;
var e = {
506: 0
};
c.f.j = (t, r) => {
var o = c.o(e, t) ? e[t] : void 0;
if (0 !== o) if (o) r.push(o[2]); else if (506 != t) {
var n = new Promise((r, n) => o = e[t] = [ r, n ]);
r.push(o[2] = n);
var a = c.p + c.u(t), i = new Error;
c.l(a, r => {
if (c.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
var n = r && ("load" === r.type ? "missing" : r.type), a = r && r.target && r.target.src;
i.message = "Loading chunk " + t + " failed.\n(" + n + ": " + a + ")", i.name = "ChunkLoadError", 
i.type = n, i.request = a, o[1](i);
}
}, "chunk-" + t, t);
} else e[t] = 0;
}, c.O.j = t => 0 === e[t];
var t = (t, r) => {
var o, n, [a, i, l] = r, d = 0;
if (a.some(t => 0 !== e[t])) {
for (o in i) c.o(i, o) && (c.m[o] = i[o]);
if (l) var f = l(c);
}
for (t && t(r); d < a.length; d++) n = a[d], c.o(e, n) && e[n] && e[n][0](), e[n] = 0;
return c.O(f);
}, r = self.webpackChunk_delta_client = self.webpackChunk_delta_client || [];
r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r));
})(), c.nc = void 0;
})();