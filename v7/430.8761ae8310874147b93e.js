"use strict";

(self.webpackChunk_delta_client = self.webpackChunk_delta_client || []).push([ [ 430 ], {
78430(n, r, e) {
e.r(r), e.d(r, {
Module: () => a
});
var t, o = e(33674), a = void 0 !== a ? a : {}, i = {};
for (t in a) a.hasOwnProperty(t) && (i[t] = a[t]);
var u, f, c = [], s = function(n, r) {
throw r;
}, l = "object" === ("undefined" == typeof window ? "undefined" : (0, o.a)(window)), p = "function" == typeof importScripts, d = "object" === ("undefined" == typeof process ? "undefined" : (0, 
o.a)(process)) && "object" === (0, o.a)(process.versions) && "string" == typeof process.versions.node, v = "";
d || (l || p) && (p ? v = self.location.href : "undefined" != typeof document && document.currentScript && (v = document.currentScript.src), 
v = 0 !== v.indexOf("blob:") ? v.substr(0, v.lastIndexOf("/") + 1) : "", p && (f = function(n) {
var r = new XMLHttpRequest;
return r.open("GET", n, !1), r.responseType = "arraybuffer", r.send(null), new Uint8Array(r.response);
}), u = function(n, r, e) {
var t = new XMLHttpRequest;
t.open("GET", n, !0), t.responseType = "arraybuffer", t.onload = function() {
200 == t.status || 0 == t.status && t.response ? r(t.response) : e();
}, t.onerror = e, t.send(null);
});
a.print || console.log.bind(console);
var h, y = a.printErr || console.warn.bind(console);
for (t in i) i.hasOwnProperty(t) && (a[t] = i[t]);
i = null, a.arguments && (c = a.arguments), a.thisProgram && a.thisProgram, a.quit && (s = a.quit), 
a.wasmBinary && (h = a.wasmBinary);
var g, m = a.noExitRuntime || !0;
"object" !== ("undefined" == typeof WebAssembly ? "undefined" : (0, o.a)(WebAssembly)) && K("no native wasm support detected");
var w, b = !1;
var T = "undefined" != typeof TextDecoder ? new TextDecoder("utf8") : void 0;
function A(n, r) {
return n ? function(n, r, e) {
for (var t = r + e, o = r; n[o] && !(o >= t); ) ++o;
if (o - r > 16 && n.subarray && T) return T.decode(n.subarray(r, o));
for (var a = ""; r < o; ) {
var i = n[r++];
if (128 & i) {
var u = 63 & n[r++];
if (192 != (224 & i)) {
var f = 63 & n[r++];
if ((i = 224 == (240 & i) ? (15 & i) << 12 | u << 6 | f : (7 & i) << 18 | u << 12 | f << 6 | 63 & n[r++]) < 65536) a += String.fromCharCode(i); else {
var c = i - 65536;
a += String.fromCharCode(55296 | c >> 10, 56320 | 1023 & c);
}
} else a += String.fromCharCode((31 & i) << 6 | u);
} else a += String.fromCharCode(i);
}
return a;
}(P, n, r) : "";
}
var _, C, P, E, k, W, F, R, S, I = "undefined" != typeof TextDecoder ? new TextDecoder("utf-16le") : void 0;
function U(n, r) {
for (var e = n, t = e >> 1, o = t + r / 2; !(t >= o) && k[t]; ) ++t;
if ((e = t << 1) - n > 32 && I) return I.decode(P.subarray(n, e));
for (var a = "", i = 0; !(i >= r / 2); ++i) {
var u = E[n + 2 * i >> 1];
if (0 == u) break;
a += String.fromCharCode(u);
}
return a;
}
function O(n, r, e) {
if (void 0 === e && (e = 2147483647), e < 2) return 0;
for (var t = r, o = (e -= 2) < 2 * n.length ? e / 2 : n.length, a = 0; a < o; ++a) {
var i = n.charCodeAt(a);
E[r >> 1] = i, r += 2;
}
return E[r >> 1] = 0, r - t;
}
function j(n) {
return 2 * n.length;
}
function x(n, r) {
for (var e = 0, t = ""; !(e >= r / 4); ) {
var o = W[n + 4 * e >> 2];
if (0 == o) break;
if (++e, o >= 65536) {
var a = o - 65536;
t += String.fromCharCode(55296 | a >> 10, 56320 | 1023 & a);
} else t += String.fromCharCode(o);
}
return t;
}
function D(n, r, e) {
if (void 0 === e && (e = 2147483647), e < 4) return 0;
for (var t = r, o = t + e - 4, a = 0; a < n.length; ++a) {
var i = n.charCodeAt(a);
if (i >= 55296 && i <= 57343) i = 65536 + ((1023 & i) << 10) | 1023 & n.charCodeAt(++a);
if (W[r >> 2] = i, (r += 4) + 4 > o) break;
}
return W[r >> 2] = 0, r - t;
}
function M(n) {
for (var r = 0, e = 0; e < n.length; ++e) {
var t = n.charCodeAt(e);
t >= 55296 && t <= 57343 && ++e, r += 4;
}
return r;
}
a.INITIAL_MEMORY;
var V, H = [], B = [], q = [], z = [];
function L() {
return m || !1;
}
function N(n) {
H.unshift(n);
}
function G(n) {
z.unshift(n);
}
var $ = 0, J = null, X = null;
function K(n) {
throw a.onAbort && a.onAbort(n), y(n += ""), b = !0, w = 1, n = "abort(" + n + "). Build with -s ASSERTIONS=1 for more info.", 
new WebAssembly.RuntimeError(n);
}
a.preloadedImages = {}, a.preloadedAudios = {};
function Y(n) {
return n.startsWith("data:application/octet-stream;base64,");
}
function Z(n) {
return n.startsWith("file://");
}
var Q = "https://senpa.io/web/static/js/bundle.wasm";
function nn(n) {
try {
if (n == Q && h) return new Uint8Array(h);
if (f) return f(n);
throw "both async and sync fetching of the wasm failed";
} catch (n) {
K(n);
}
}
function rn(n) {
if (!n.ok) throw "failed to load wasm binary file at '" + Q + "'";
return n.arrayBuffer();
}
function en() {
return nn(Q);
}
function tn(n, r) {
u(Q, function(r) {
n(new Uint8Array(r));
}, r);
}
function on() {
return nn(Q);
}
function an(n, r) {
var e, t, o = n.exports;
a.asm = o, g = a.asm.F, e = g.buffer, _ = e, a.HEAP8 = C = new Int8Array(e), a.HEAP16 = E = new Int16Array(e), 
a.HEAP32 = W = new Int32Array(e), a.HEAPU8 = P = new Uint8Array(e), a.HEAPU16 = k = new Uint16Array(e), 
a.HEAPU32 = F = new Uint32Array(e), a.HEAPF32 = R = new Float32Array(e), a.HEAPF64 = S = new Float64Array(e), 
V = a.asm.J, t = a.asm.G, B.unshift(t), function() {
if ($--, a.monitorRunDependencies && a.monitorRunDependencies($), 0 == $ && (null !== J && (clearInterval(J), 
J = null), X)) {
var n = X;
X = null, n();
}
}();
}
function un(n) {
an(n.instance);
}
function fn(n) {
return n;
}
function cn(n) {
y("failed to asynchronously prepare wasm: " + n), K(n);
}
function sn(n) {
for (;n.length > 0; ) {
var r = n.shift();
if ("function" != typeof r) {
var e = r.func;
"number" == typeof e ? void 0 === r.arg ? V.get(e)() : V.get(e)(r.arg) : e(void 0 === r.arg ? null : r.arg);
} else r(a);
}
}
function ln(n) {
switch (n) {
case 1:
return 0;

case 2:
return 1;

case 4:
return 2;

case 8:
return 3;

default:
throw new TypeError("Unknown type size: " + n);
}
}
Y(Q);
var pn = void 0;
function dn(n) {
for (var r = "", e = n; P[e]; ) r += pn[P[e++]];
return r;
}
var vn = {}, hn = {}, yn = {};
function gn(n) {
if (void 0 === n) return "_unknown";
var r = (n = n.replace(/[^a-zA-Z0-9_]/g, "$")).charCodeAt(0);
return r >= 48 && r <= 57 ? "_" + n : n;
}
function mn(n, r) {
return n = gn(n), new Function("body", "return function " + n + '() {\n    "use strict";    return body.apply(this, arguments);\n};\n')(r);
}
function wn() {
return void 0 === this.message ? this.name : this.name + ": " + this.message;
}
function bn(n, r) {
var e = mn(r, function(n) {
this.name = r, this.message = n;
var e = new Error(n).stack;
void 0 !== e && (this.stack = this.toString() + "\n" + e.replace(/^Error(:[^\n]*)?\n/, ""));
});
return e.prototype = Object.create(n.prototype), e.prototype.constructor = e, e.prototype.toString = wn, 
e;
}
var Tn = void 0;
function An(n) {
throw new Tn(n);
}
var _n = void 0;
function Cn(n) {
throw new _n(n);
}
function Pn(n) {
n();
}
function En(n, r, e) {
if (e = e || {}, !("argPackAdvance" in r)) throw new TypeError("registerType registeredInstance requires argPackAdvance");
var t = r.name;
if (n || An('type "' + t + '" must have a positive integer typeid pointer'), hn.hasOwnProperty(n)) {
if (e.ignoreDuplicateRegistrations) return;
An("Cannot register type '" + t + "' twice");
}
if (hn[n] = r, delete yn[n], vn.hasOwnProperty(n)) {
var o = vn[n];
delete vn[n], o.forEach(Pn);
}
}
function kn(n) {
return !!n;
}
var Wn = [], Fn = [ {}, {
value: void 0
}, {
value: null
}, {
value: !0
}, {
value: !1
} ];
function Rn(n) {
n > 4 && 0 === --Fn[n].refcount && (Fn[n] = void 0, Wn.push(n));
}
function Sn() {
for (var n = 0, r = 5; r < Fn.length; ++r) void 0 !== Fn[r] && ++n;
return n;
}
function In() {
for (var n = 5; n < Fn.length; ++n) if (void 0 !== Fn[n]) return Fn[n];
return null;
}
function Un(n) {
switch (n) {
case void 0:
return 1;

case null:
return 2;

case !0:
return 3;

case !1:
return 4;

default:
var r = Wn.length ? Wn.pop() : Fn.length;
return Fn[r] = {
refcount: 1,
value: n
}, r;
}
}
function On(n) {
return this.fromWireType(F[n >> 2]);
}
function jn(n) {
var r = Fn[n].value;
return Rn(n), r;
}
function xn(n, r) {
return Un(r);
}
function Dn(n) {
if (null === n) return "null";
var r = (0, o.a)(n);
return "object" === r || "array" === r || "function" === r ? n.toString() : "" + n;
}
function Mn(n) {
return this.fromWireType(R[n >> 2]);
}
function Vn(n) {
return this.fromWireType(S[n >> 3]);
}
function Hn(n, r) {
switch (r) {
case 2:
return Mn;

case 3:
return Vn;

default:
throw new TypeError("Unknown float type: " + n);
}
}
function Bn(n) {
return n;
}
function qn(n, r) {
if ("number" != typeof r && "boolean" != typeof r) throw new TypeError('Cannot convert "' + Dn(r) + '" to ' + this.name);
return r;
}
function zn() {}
function Ln(n, r) {
var e = mn(n.name || "unknownFunctionName", zn);
e.prototype = n.prototype;
var t = new e, o = n.apply(t, r);
return o instanceof Object ? o : t;
}
function Nn(n) {
for (;n.length; ) {
var r = n.pop();
n.pop()(r);
}
}
function Gn(n, r, e) {
a.hasOwnProperty(n) ? ((void 0 === e || void 0 !== a[n].overloadTable && void 0 !== a[n].overloadTable[e]) && An("Cannot register public name '" + n + "' twice"), 
function(n, r, e) {
if (void 0 === n[r].overloadTable) {
var t = n[r];
n[r] = function() {
return n[r].overloadTable.hasOwnProperty(arguments.length) || An("Function '" + e + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + n[r].overloadTable + ")!"), 
n[r].overloadTable[arguments.length].apply(this, arguments);
}, n[r].overloadTable = [], n[r].overloadTable[t.argCount] = t;
}
}(a, n, n), a.hasOwnProperty(e) && An("Cannot register multiple overloads of a function with the same number of arguments (" + e + ")!"), 
a[n].overloadTable[e] = r) : (a[n] = r, void 0 !== e && (a[n].numArguments = e));
}
function $n(n, r, e) {
return n.includes("j") ? function(n, r, e) {
var t = a["dynCall_" + n];
return e && e.length ? t.apply(null, [ r ].concat(e)) : t.call(null, r);
}(n, r, e) : V.get(r).apply(null, e);
}
function Jn(n, r) {
var e, t, o, a = (n = dn(n)).includes("j") ? (e = n, t = r, o = [], function() {
o.length = arguments.length;
for (var n = 0; n < arguments.length; n++) o[n] = arguments[n];
return $n(e, t, o);
}) : V.get(r);
return "function" != typeof a && An("unknown function pointer with signature " + n + ": " + r), 
a;
}
var Xn = void 0;
function Kn(n) {
var r = _r(n), e = dn(r);
return Cr(r), e;
}
function Yn(n) {
return C[n];
}
function Zn(n) {
return P[n];
}
function Qn(n) {
return E[n >> 1];
}
function nr(n) {
return k[n >> 1];
}
function rr(n) {
return W[n >> 2];
}
function er(n) {
return F[n >> 2];
}
function tr(n, r, e) {
switch (r) {
case 0:
return e ? Yn : Zn;

case 1:
return e ? Qn : nr;

case 2:
return e ? rr : er;

default:
throw new TypeError("Unknown integer type: " + n);
}
}
function or(n) {
return n;
}
function ar(n) {
Cr(n);
}
function ir() {
return k;
}
function ur() {
return F;
}
function fr(n) {
Cr(n);
}
function cr() {}
function sr(n, r) {}
function lr(n) {
return n || An("Cannot use deleted val. handle = " + n), Fn[n].value;
}
function pr(n, r) {
var e = hn[n];
return void 0 === e && An(r + " has unknown type " + Kn(n)), e;
}
function dr(n, r) {
for (var e = new Array(n), t = 0; t < n; ++t) e[t] = pr(W[(r >> 2) + t], "parameter " + t);
return e;
}
var vr = {};
function hr(n) {
var r = vr[n];
return void 0 === r ? dn(n) : r;
}
var yr = [];
function gr() {
return "object" === ("undefined" == typeof globalThis ? "undefined" : (0, o.a)(globalThis)) ? globalThis : Function("return this")();
}
function mr(n) {
return n.name;
}
var wr = {};
!function() {
for (var n = new Array(256), r = 0; r < 256; ++r) n[r] = String.fromCharCode(r);
pn = n;
}(), Tn = a.BindingError = bn(Error, "BindingError"), _n = a.InternalError = bn(Error, "InternalError"), 
a.count_emval_handles = Sn, a.get_first_emval = In, Xn = a.UnboundTypeError = bn(Error, "UnboundTypeError");
var br, Tr = {
t: function(n, r, e, t, o) {},
w: function(n, r, e, t, o) {
var a = ln(e);
En(n, {
name: r = dn(r),
fromWireType: kn,
toWireType: function(n, r) {
return r ? t : o;
},
argPackAdvance: 8,
readValueFromPointer: function(n) {
var t;
if (1 === e) t = C; else if (2 === e) t = E; else {
if (4 !== e) throw new TypeError("Unknown boolean type size: " + r);
t = W;
}
return this.fromWireType(t[n >> a]);
},
destructorFunction: null
});
},
v: function(n, r) {
En(n, {
name: r = dn(r),
fromWireType: jn,
toWireType: xn,
argPackAdvance: 8,
readValueFromPointer: On,
destructorFunction: null
});
},
o: function(n, r, e) {
var t = ln(e);
En(n, {
name: r = dn(r),
fromWireType: Bn,
toWireType: qn,
argPackAdvance: 8,
readValueFromPointer: Hn(r, t),
destructorFunction: null
});
},
l: function(n, r, e, t, o, i) {
var u = function(n, r) {
for (var e = [], t = 0; t < n; t++) e.push(W[(r >> 2) + t]);
return e;
}(r, e);
n = dn(n), o = Jn(t, o), Gn(n, function() {
!function(n, r) {
var e = [], t = {};
throw r.forEach(function n(r) {
t[r] || hn[r] || (yn[r] ? yn[r].forEach(n) : (e.push(r), t[r] = !0));
}), new Xn(n + ": " + e.map(Kn).join([ ", " ]));
}("Cannot call " + n + " due to unbound types", u);
}, r - 1), function(n, r, e) {
function t(r) {
var t = e(r);
t.length !== n.length && Cn("Mismatched type converter count");
for (var o = 0; o < n.length; ++o) En(n[o], t[o]);
}
n.forEach(function(n) {
yn[n] = r;
});
var o = new Array(r.length), a = [], i = 0;
r.forEach(function(n, r) {
hn.hasOwnProperty(n) ? o[r] = hn[n] : (a.push(n), vn.hasOwnProperty(n) || (vn[n] = []), 
vn[n].push(function() {
o[r] = hn[n], ++i === a.length && t(o);
}));
}), 0 === a.length && t(o);
}([], u, function(e) {
var t = [ e[0], null ].concat(e.slice(1));
return function(n, r, e) {
a.hasOwnProperty(n) || Cn("Replacing nonexistant public symbol"), void 0 !== a[n].overloadTable && void 0 !== e ? a[n].overloadTable[e] = r : (a[n] = r, 
a[n].argCount = e);
}(n, function(n, r, e, t, o) {
var a = r.length;
a < 2 && An("argTypes array size mismatch! Must at least get return value and 'this' types!");
for (var i = null !== r[1] && null !== e, u = !1, f = 1; f < r.length; ++f) if (null !== r[f] && void 0 === r[f].destructorFunction) {
u = !0;
break;
}
var c = "void" !== r[0].name, s = "", l = "";
for (f = 0; f < a - 2; ++f) s += (0 !== f ? ", " : "") + "arg" + f, l += (0 !== f ? ", " : "") + "arg" + f + "Wired";
var p = "return function " + gn(n) + "(" + s + ") {\nif (arguments.length !== " + (a - 2) + ") {\nthrowBindingError('function " + n + " called with ' + arguments.length + ' arguments, expected " + (a - 2) + " args!');\n}\n";
u && (p += "var destructors = [];\n");
var d = u ? "destructors" : "null", v = [ "throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam" ], h = [ An, t, o, Nn, r[0], r[1] ];
for (i && (p += "var thisWired = classParam.toWireType(" + d + ", this);\n"), f = 0; f < a - 2; ++f) p += "var arg" + f + "Wired = argType" + f + ".toWireType(" + d + ", arg" + f + "); // " + r[f + 2].name + "\n", 
v.push("argType" + f), h.push(r[f + 2]);
if (i && (l = "thisWired" + (l.length > 0 ? ", " : "") + l), p += (c ? "var rv = " : "") + "invoker(fn" + (l.length > 0 ? ", " : "") + l + ");\n", 
u) p += "runDestructors(destructors);\n"; else for (f = i ? 1 : 2; f < r.length; ++f) {
var y = 1 === f ? "thisWired" : "arg" + (f - 2) + "Wired";
null !== r[f].destructorFunction && (p += y + "_dtor(" + y + "); // " + r[f].name + "\n", 
v.push(y + "_dtor"), h.push(r[f].destructorFunction));
}
return c && (p += "var ret = retType.fromWireType(rv);\nreturn ret;\n"), p += "}\n", 
v.push(p), Ln(Function, v).apply(null, h);
}(n, t, null, o, i), r - 1), [];
});
},
d: function(n, r, e, t, o) {
r = dn(r), -1 === o && (o = 4294967295);
var a = ln(e), i = or;
if (0 === t) {
var u = 32 - 8 * e;
i = function(n) {
return n << u >>> u;
};
}
var f = r.includes("unsigned");
En(n, {
name: r,
fromWireType: i,
toWireType: function(n, e) {
if ("number" != typeof e && "boolean" != typeof e) throw new TypeError('Cannot convert "' + Dn(e) + '" to ' + this.name);
if (e < t || e > o) throw new TypeError('Passing a number "' + Dn(e) + '" from JS side to C/C++ side to an argument of type "' + r + '", which is outside the valid range [' + t + ", " + o + "]!");
return f ? e >>> 0 : 0 | e;
},
argPackAdvance: 8,
readValueFromPointer: tr(r, a, 0 !== t),
destructorFunction: null
});
},
c: function(n, r, e) {
var t = [ Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array ][r];
function o(n) {
var r = F, e = r[n >>= 2], o = r[n + 1];
return new t(_, o, e);
}
En(n, {
name: e = dn(e),
fromWireType: o,
argPackAdvance: 8,
readValueFromPointer: o
}, {
ignoreDuplicateRegistrations: !0
});
},
p: function(n, r) {
var e = "std::string" === (r = dn(r));
En(n, {
name: r,
fromWireType: function(n) {
var r, t = F[n >> 2];
if (e) for (var o = n + 4, a = 0; a <= t; ++a) {
var i = n + 4 + a;
if (a == t || 0 == P[i]) {
var u = A(o, i - o);
void 0 === r ? r = u : (r += String.fromCharCode(0), r += u), o = i + 1;
}
} else {
var f = new Array(t);
for (a = 0; a < t; ++a) f[a] = String.fromCharCode(P[n + 4 + a]);
r = f.join("");
}
return Cr(n), r;
},
toWireType: function(n, r) {
var t;
r instanceof ArrayBuffer && (r = new Uint8Array(r));
var o = "string" == typeof r;
o || r instanceof Uint8Array || r instanceof Uint8ClampedArray || r instanceof Int8Array || An("Cannot pass non-string to std::string"), 
t = e && o ? function() {
return function(n) {
for (var r = 0, e = 0; e < n.length; ++e) {
var t = n.charCodeAt(e);
t >= 55296 && t <= 57343 && (t = 65536 + ((1023 & t) << 10) | 1023 & n.charCodeAt(++e)), 
t <= 127 ? ++r : r += t <= 2047 ? 2 : t <= 65535 ? 3 : 4;
}
return r;
}(r);
} : function() {
return r.length;
};
var a = t(), i = Ar(4 + a + 1);
if (F[i >> 2] = a, e && o) (function(n, r, e, t) {
if (!(t > 0)) return 0;
for (var o = e, a = e + t - 1, i = 0; i < n.length; ++i) {
var u = n.charCodeAt(i);
if (u >= 55296 && u <= 57343 && (u = 65536 + ((1023 & u) << 10) | 1023 & n.charCodeAt(++i)), 
u <= 127) {
if (e >= a) break;
r[e++] = u;
} else if (u <= 2047) {
if (e + 1 >= a) break;
r[e++] = 192 | u >> 6, r[e++] = 128 | 63 & u;
} else if (u <= 65535) {
if (e + 2 >= a) break;
r[e++] = 224 | u >> 12, r[e++] = 128 | u >> 6 & 63, r[e++] = 128 | 63 & u;
} else {
if (e + 3 >= a) break;
r[e++] = 240 | u >> 18, r[e++] = 128 | u >> 12 & 63, r[e++] = 128 | u >> 6 & 63, 
r[e++] = 128 | 63 & u;
}
}
r[e] = 0;
})(r, P, i + 4, a + 1); else if (o) for (var u = 0; u < a; ++u) {
var f = r.charCodeAt(u);
f > 255 && (Cr(i), An("String has UTF-16 code units that do not fit in 8 bits")), 
P[i + 4 + u] = f;
} else for (u = 0; u < a; ++u) P[i + 4 + u] = r[u];
return null !== n && n.push(Cr, i), i;
},
argPackAdvance: 8,
readValueFromPointer: On,
destructorFunction: ar
});
},
j: function(n, r, e) {
var t, o, a, i, u;
e = dn(e), 2 === r ? (t = U, o = O, i = j, a = ir, u = 1) : 4 === r && (t = x, o = D, 
i = M, a = ur, u = 2), En(n, {
name: e,
fromWireType: function(n) {
for (var e, o = F[n >> 2], i = a(), f = n + 4, c = 0; c <= o; ++c) {
var s = n + 4 + c * r;
if (c == o || 0 == i[s >> u]) {
var l = t(f, s - f);
void 0 === e ? e = l : (e += String.fromCharCode(0), e += l), f = s + r;
}
}
return Cr(n), e;
},
toWireType: function(n, t) {
"string" != typeof t && An("Cannot pass non-string to C++ string type " + e);
var a = i(t), f = Ar(4 + a + r);
return F[f >> 2] = a >> u, o(t, f + 4, a + r), null !== n && n.push(Cr, f), f;
},
argPackAdvance: 8,
readValueFromPointer: On,
destructorFunction: fr
});
},
x: function(n, r) {
En(n, {
isVoid: !0,
name: r = dn(r),
argPackAdvance: 0,
fromWireType: cr,
toWireType: sr
});
},
g: function(n, r, e) {
n = lr(n), r = pr(r, "emval::as");
var t = [], o = Un(t);
return W[e >> 2] = o, r.toWireType(t, n);
},
D: function(n, r, e, t) {
n = lr(n);
for (var o = dr(r, e), a = new Array(r), i = 0; i < r; ++i) {
var u = o[i];
a[i] = u.readValueFromPointer(t), t += u.argPackAdvance;
}
return Un(n.apply(void 0, a));
},
b: function(n, r, e, t, o) {
return (n = yr[n])(r = lr(r), e = hr(e), function(n) {
var r = [];
return W[n >> 2] = Un(r), r;
}(t), o);
},
f: function(n, r, e, t) {
(n = yr[n])(r = lr(r), e = hr(e), null, t);
},
m: Rn,
y: function(n) {
return 0 === n ? Un(gr()) : (n = hr(n), Un(gr()[n]));
},
a: function(n, r) {
for (var e = dr(n, r), t = e[0], o = t.name + "_$" + e.slice(1).map(mr).join("_") + "$", a = [ "retType" ], i = [ t ], u = "", f = 0; f < n - 1; ++f) u += (0 !== f ? ", " : "") + "arg" + f, 
a.push("argType" + f), i.push(e[1 + f]);
var c = "return function " + gn("methodCaller_" + o) + "(handle, name, destructors, args) {\n", s = 0;
for (f = 0; f < n - 1; ++f) c += "    var arg" + f + " = argType" + f + ".readValueFromPointer(args" + (s ? "+" + s : "") + ");\n", 
s += e[f + 1].argPackAdvance;
for (c += "var rv = handle[name](" + u + ");\n", f = 0; f < n - 1; ++f) e[f + 1].deleteObject && (c += "    argType" + f + ".deleteObject(arg" + f + ");\n");
t.isVoid || (c += "    return retType.toWireType(destructors, rv);\n"), c += "};\n", 
a.push(c);
var l, p, d = Ln(Function, a).apply(null, i);
return l = d, p = yr.length, yr.push(l), p;
},
r: function(n) {
return n = hr(n), Un(a[n]);
},
i: function(n, r) {
return Un((n = lr(n))[r = lr(r)]);
},
h: function(n) {
n > 4 && (Fn[n].refcount += 1);
},
q: function(n, r) {
return (n = lr(n)) instanceof (r = lr(r));
},
s: function(n, r, e, t) {
n = lr(n);
var o = wr[r];
return o || (o = function(n) {
for (var r = "", e = 0; e < n; ++e) r += (0 !== e ? ", " : "") + "arg" + e;
var t = "return function emval_allocator_" + n + "(constructor, argTypes, args) {\n";
for (e = 0; e < n; ++e) t += "var argType" + e + " = requireRegisteredType(Module['HEAP32'][(argTypes >>> 2) + " + e + '], "parameter ' + e + '");\nvar arg' + e + " = argType" + e + ".readValueFromPointer(args);\nargs += argType" + e + "['argPackAdvance'];\n";
return t += "var obj = new constructor(" + r + ");\nreturn __emval_register(obj);\n}\n", 
new Function("requireRegisteredType", "Module", "__emval_register", t)(pr, a, Un);
}(r), wr[r] = o), o(n, e, t);
},
C: function() {
return Un([]);
},
z: function(n) {
return Un(hr(n));
},
E: function() {
return Un({});
},
A: function(n) {
Nn(Fn[n].value), Rn(n);
},
e: function(n, r, e) {
n = lr(n), r = lr(r), e = lr(e), n[r] = e;
},
k: function(n, r) {
return Un((n = pr(n, "_emval_take_value")).readValueFromPointer(r));
},
B: function(n) {
return n = lr(n), Un((0, o.a)(n));
},
n: function() {
K();
},
u: function(n) {
P.length, K("OOM");
}
}, Ar = (function() {
var n = {
a: Tr
};
function r(r) {
return WebAssembly.instantiate(r, n);
}
function t(n) {
return function() {
if (!h && (l || p)) {
if ("function" == typeof fetch && !Z(Q)) return fetch(Q, {
credentials: "same-origin"
}).then(rn).catch(en);
if (u) return new Promise(tn);
}
return Promise.resolve().then(on);
}().then(r).then(fn).then(n, cn);
}
function o(n) {
return y("wasm streaming compile failed: " + n), y("falling back to ArrayBuffer instantiation"), 
t(un);
}
function i(r) {
return WebAssembly.instantiateStreaming(r, n).then(un, o);
}
if ($++, a.monitorRunDependencies && a.monitorRunDependencies($), a.instantiateWasm) try {
return a.instantiateWasm(n, an);
} catch (n) {
return y("Module.instantiateWasm callback failed with error: " + n), !1;
}
h || "function" != typeof WebAssembly.instantiateStreaming || Y(Q) || Z(Q) || "function" != typeof fetch ? t(un) : fetch(new URL(e(88319), e.b).toString(), {
credentials: "same-origin"
}).then(i);
}(), a.___wasm_call_ctors = function() {
return (a.___wasm_call_ctors = a.asm.G).apply(null, arguments);
}, a._malloc = function() {
return (Ar = a._malloc = a.asm.H).apply(null, arguments);
}), _r = (a._main = function() {
return (a._main = a.asm.I).apply(null, arguments);
}, a.___getTypeName = function() {
return (_r = a.___getTypeName = a.asm.K).apply(null, arguments);
}), Cr = (a.___embind_register_native_and_builtin_types = function() {
return (a.___embind_register_native_and_builtin_types = a.asm.L).apply(null, arguments);
}, a._free = function() {
return (Cr = a._free = a.asm.M).apply(null, arguments);
});
function Pr(n) {
this.name = "ExitStatus", this.message = "Program terminated with exit(" + n + ")", 
this.status = n;
}
function Er(n) {
var r = a._main;
try {
var e = r(0, 0);
return function(n) {
w = n, L() || !0;
!function(n) {
w = n, L() || (a.onExit && a.onExit(n), b = !0);
s(n, new Pr(n));
}(n);
}(e), e;
} catch (n) {
return function(n) {
if (n instanceof Pr || "unwind" == n) return w;
y("exception thrown: " + n), s(1, n);
}(n);
} finally {
0;
}
}
function kr() {
a.setStatus("");
}
function Wr(n) {
function r() {
br || (br = !0, a.calledRun = !0, b || (sn(B), sn(q), a.onRuntimeInitialized && a.onRuntimeInitialized(), 
Fr && Er(), function() {
if (a.postRun) for ("function" == typeof a.postRun && (a.postRun = [ a.postRun ]); a.postRun.length; ) G(a.postRun.shift());
sn(z);
}()));
}
n = n || c, $ > 0 || (!function() {
if (a.preRun) for ("function" == typeof a.preRun && (a.preRun = [ a.preRun ]); a.preRun.length; ) N(a.preRun.shift());
sn(H);
}(), $ > 0 || (a.setStatus ? (a.setStatus("Running..."), setTimeout(function() {
setTimeout(kr, 1), r();
}, 1)) : r()));
}
if (X = function n() {
br || Wr(), br || (X = n);
}, a.run = Wr, a.preInit) for ("function" == typeof a.preInit && (a.preInit = [ a.preInit ]); a.preInit.length > 0; ) a.preInit.pop()();
var Fr = !0;
a.noInitialRun && (Fr = !1), Wr(), window.Module = a;
},
88319(n, r, e) {
n.exports = e.p + "c51c683181e1a6c84878.wasm";
}
} ]);