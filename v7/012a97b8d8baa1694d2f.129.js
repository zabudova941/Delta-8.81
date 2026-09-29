(self.webpackChunk_delta_client = self.webpackChunk_delta_client || []).push([ [ 129 ], {
98351(t, e, n) {
"use strict";
n.d(e, {
a: () => l
});
var r = n(1389), o = n(9549);
function i(t, e, n) {
if (null == t) return 0;
var r = this.wasm.__new(n, 1) >>> 0;
return new Uint8Array(this.wasm.memory.buffer).set(new Uint8Array(t, e, n), r), 
r;
}
function a(t) {
if (!t) return 0;
for (var e = t.length, n = this.wasm.__new(e << 1, 1), r = new Uint16Array(this.wasm.memory.buffer), o = n >>> 1, i = 0; i < e; i++) r[o + i] = t.charCodeAt(i);
return n;
}
function s() {
var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
if (!Number.isInteger(t)) throw Error("Invalid pointer");
this.pointer = t, this.wasm_memory_buffer = null;
}
function c() {
if (this.wasm_memory_buffer && 0 !== this.wasm_memory_buffer.byteLength) return !1;
var t = this.wasm_memory_buffer = this.wasm.memory.buffer;
return this.view = new DataView(t, this.pointer, this.targetBytelength > 0 ? this.targetBytelength : t.byteLength), 
this.F64 = new Float64Array(t), this.F32 = new Float32Array(t), this.U32 = new Uint32Array(t), 
this.I32 = new Int32Array(t), this.U16 = new Uint16Array(t), this.I16 = new Int16Array(t), 
this.U8 = new Uint8Array(t), this.I8 = new Int8Array(t), !0;
}
function u() {
this.destroyed = !0, this.pointer = null;
}
var l = function() {
return (0, o.a)(function t(e) {
var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
(0, r.a)(this, t), this.destroyed = !1, this.pointer = null, this.targetBytelength = 0, 
this.wasm_memory_buffer = null, this.wasm = e, this.targetBytelength = n;
}, [ {
key: "lowerMemory",
value: i
}, {
key: "lowerString",
value: a
}, {
key: "setPointer",
value: s
}, {
key: "checkView",
value: c
}, {
key: "destroy",
value: u
} ]);
}();
l.dummy_view = new DataView(new ArrayBuffer(0));
},
8002(t, e, n) {
"use strict";
n.d(e, {
a: () => P,
b: () => E
});
var r = n(1389), o = n(9549), i = n(33630), a = n(95338), s = n(33637), c = new TextDecoder("utf-8"), u = new TextDecoder("utf-16le"), l = new TextEncoder, f = {
bool: {
size: 1,
get: function(t, e) {
return 0 !== t.root.U8[t.pointer + e];
},
set: function(t, e, n) {
return t.root.U8[t.pointer + e] = n ? 1 : 0, n;
}
},
u8: {
size: 1,
get: function(t, e) {
return t.root.U8[t.pointer + e];
},
set: function(t, e, n) {
return t.root.U8[t.pointer + e] = n;
}
},
i8: {
size: 1,
get: function(t, e) {
return t.root.I8[t.pointer + e];
},
set: function(t, e, n) {
return t.root.I8[t.pointer + e] = n;
}
},
f32: {
size: 4,
get: function(t, e) {
return t.root.view.getFloat32(t.pointer + e, !0);
},
set: function(t, e, n) {
return t.root.view.setFloat32(t.pointer + e, n, !0), n;
}
},
u32: {
size: 4,
get: function(t, e) {
return t.root.U32[t.pointer + e >> 2];
},
set: function(t, e, n) {
return t.root.U32[t.pointer + e >> 2] = n;
}
},
f64: {
size: 8,
get: function(t, e) {
return t.root.view.getFloat64(t.pointer + e, !0);
},
set: function(t, e, n) {
return t.root.view.setFloat64(t.pointer + e, n, !0), n;
}
},
u64: {
size: 8,
get: function(t, e) {
var n = Number(t.root.U32[t.pointer + e >> 2]);
return Number(t.root.U32[t.pointer + e + 4 >> 2]) << 32 | n;
},
set: function(t, e, n) {
return t.root.U32[t.pointer + e >> 2] = Number(4294967295 & n), t.root.U32[t.pointer + e + 4 >> 2] = Number(n >> 32), 
n;
}
},
usize: {
size: 4,
get: function(t, e) {
return f.u32.get(t, e);
},
set: function(t, e, n) {
return f.u32.set(t, e, n);
}
},
i32: {
size: 4,
get: function(t, e) {
return t.root.I32[t.pointer + e >> 2];
},
set: function(t, e, n) {
return t.root.I32[t.pointer + e >> 2] = n;
}
},
u16: {
size: 2,
get: function(t, e) {
return t.root.U16[t.pointer + e >> 1];
},
set: function(t, e, n) {
return t.root.U16[t.pointer + e >> 1] = n;
}
},
i16: {
size: 2,
get: function(t, e) {
return t.root.I16[t.pointer + e >> 1];
},
set: function(t, e, n) {
return t.root.I16[t.pointer + e >> 1] = n;
}
},
string: {
size: 4,
get: function(t, e) {
t.root.checkView();
var n = t.root.U32[t.pointer + e >>> 2];
if (!n) return "";
var r = t.root.U32[n - 4 >>> 2];
return u.decode(new Uint8Array(t.root.view.buffer, n, r));
},
set: function(t, e, n) {
var r = n.length, o = t.root.wasm.__new(r << 1, 1);
t.root.checkView();
for (var i = t.root.U16, a = o >>> 1, s = 0; s < r; ++s) i[a + s] = n.charCodeAt(s);
return t.root.view.setUint32(t.pointer + e, o, !0), n;
}
},
utf8: {
size: 4,
get: function(t, e) {
t.root.checkView();
var n = t.root.U32[t.pointer + e >>> 2];
if (!n) return "";
for (var r = t.root.U32[n - 4 >>> 2] >>> 1, o = t.root.U16, i = n >>> 1, a = new Uint8Array(r), s = 0; s < r; s++) a[s] = o[i + s];
return c.decode(a);
},
set: function(t, e, n) {
var r = l.encode(n), o = r.length, i = t.root.wasm.__new(o << 1, 1);
t.root.checkView();
for (var a = t.root.U16, s = i >>> 1, c = 0; c < o; ++c) a[s + c] = r[c];
return t.root.view.setUint32(t.pointer + e, i, !0), n;
}
},
utf16: {
size: 4,
get: function(t, e) {
t.root.checkView();
var n = t.root.U32[t.pointer + e >>> 2];
if (!n) return "";
var r = t.root.U32[n - 4 >>> 2];
return u.decode(new Uint8Array(t.root.view.buffer, n, r));
},
set: function(t, e, n) {
var r = n.length, o = t.root.wasm.__new(r << 1, 2);
t.root.checkView();
for (var i = t.root.U16, a = o >>> 1, s = 0; s < r; ++s) i[a + s] = n.charCodeAt(s);
return t.root.view.setUint32(t.pointer + e, o, !0), n;
}
}
};
const h = f;
function p(t, e, n) {
return e = (0, a.a)(e), (0, i.a)(t, d() ? Reflect.construct(e, n || [], (0, a.a)(t).constructor) : e.apply(t, n));
}
function d() {
try {
var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
} catch (t) {}
return (d = function() {
return !!t;
})();
}
function v(t, e) {
var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
if (!n) {
if (Array.isArray(t) || (n = function(t, e) {
if (t) {
if ("string" == typeof t) return y(t, e);
var n = {}.toString.call(t).slice(8, -1);
return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? y(t, e) : void 0;
}
}(t)) || e && t && "number" == typeof t.length) {
n && (t = n);
var r = 0, o = function() {};
return {
s: o,
n: function() {
return r >= t.length ? {
done: !0
} : {
done: !1,
value: t[r++]
};
},
e: function(t) {
throw t;
},
f: o
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var i, a = !0, s = !1;
return {
s: function() {
n = n.call(t);
},
n: function() {
var t = n.next();
return a = t.done, t;
},
e: function(t) {
s = !0, i = t;
},
f: function() {
try {
a || null == n.return || n.return();
} finally {
if (s) throw i;
}
}
};
}
function y(t, e) {
(null == e || e > t.length) && (e = t.length);
for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
return r;
}
function m(t, e, n) {
var r = (null == n ? void 0 : n.prototype) || {}, o = function() {
var n = t[i].t, o = t[i].o, a = function(t, e) {
if (!h[t]) throw Error('Not found type "'.concat(t, '" for "').concat(e, '"'));
return h[t];
}(n, i), s = a.get, c = a.set, u = function(t) {
return function() {
return this.root.checkView(), s(this, t);
};
}(o), l = function(t) {
return function(e) {
return this.root.checkView(), c(this, t, e);
};
}(o);
e && (u = u.bind(e), l = l.bind(e)), Object.defineProperty(r, i, {
get: u,
set: l,
enumerable: !0,
configurable: !0
});
};
for (var i in t) o();
return n;
}
function g(t, e) {
var n = e.contexts;
return function() {
var e = n.get(arguments[0]);
if (!e) throw new Error("AscBridge: Not found context for pointer ".concat(arguments[0], ', method "').concat(t, '". changetype<usize>(this) must be 1st argument'));
var r = e[t], o = arguments.length;
if (!r) throw new Error('AscBridge: Not found method "'.concat(t, '" for pointer ').concat(arguments[0]));
if (0 === o) throw new Error("No context provided");
return 1 === o ? r.call(e) : 2 === o ? r.call(e, arguments[1]) : 3 === o ? r.call(e, arguments[1], arguments[2]) : 4 === o ? r.call(e, arguments[1], arguments[2], arguments[3]) : 5 === o ? r.call(e, arguments[1], arguments[2], arguments[3], arguments[4]) : 6 === o ? r.call(e, arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]) : (arguments[0] = e, 
r.call.apply(r, arguments));
};
}
function b() {
return this._cfg_pointer;
}
function w() {
this.setPointer(0), this.root.wasm.__unpin(this.pointer);
}
function k() {
this.root.wasm.__pin(this.pointer);
}
function S() {
var t = {};
for (var e in this.descriptions) t[e] = this[e];
return t;
}
function _(t, e) {
if (!this.__tempInstance) {
this.__tempInstance = new this(t, e, null);
}
return this.__tempInstance._cfg_pointer = e, this.__tempInstance;
}
function x(t, e) {
return new this(t, e, null);
}
function C(t, e) {
var n = this.prototype.__idToMethod.get(t);
void 0 !== n ? this.prototype[n](e) : console.error("AscClass: Not found method for id", t);
}
function A(t) {
var e;
function n(t) {
return i._cfg_use_contexts && (0 !== this._cfg_pointer && i.contexts.delete(this._cfg_pointer), 
0 !== t && i.contexts.set(t, this)), this._cfg_pointer = t, this;
}
var i = (e = function(t) {
function e(t, n, o) {
var i;
return (0, r.a)(this, e), (i = p(this, e))._cfg_pointer = 0, i.root = t, i.descriptions = n, 
i.setPointer(o), i;
}
return (0, s.a)(e, t), (0, o.a)(e, [ {
key: "pointer",
get: b
}, {
key: "setPointer",
value: n
}, {
key: "__unpin",
value: w
}, {
key: "__pin",
value: k
}, {
key: "toJSON",
value: S
} ], [ {
key: "quick",
value: _
}, {
key: "from",
value: x
}, {
key: "onPointer",
value: C
} ]);
}(t), e._cfg_use_contexts = !0, e.contexts = new Map, e.__tempInstance = null, e.saveOwnPointer = function(t, n) {
e.contexts.delete(t), e.contexts.set(t, n);
}, e.onPointer = e.onPointer.bind(e), e);
return i;
}
A((0, o.a)(function t() {
(0, r.a)(this, t);
}));
function O(t, e) {
var n = t % e;
return 0 === n ? t : t + e - n;
}
function P(t) {
for (var e = 0, n = {}, r = 0, o = Object.keys(t); r < o.length; r++) {
var i = o[r], a = t[i].t, s = h[a].size;
if (void 0 === s) throw new Error('Not found type "'.concat(String(a), '" for "').concat(String(i), '"'));
e = O(e, s), n[i] = {
t: a,
o: e
}, e += s;
}
return {
size: e,
fields: n
};
}
function E(t, e, n) {
var r = function(t, e) {
var n = e.prototype, r = new Map, o = 0;
function i(t, e) {
return function r(o) {
if (void 0 === o) {
var i = this.constructor.name || "<unknown>", a = 'Method "'.concat(i, ":").concat(t, ":").concat(e, '" not linked to class');
console.error(a, this);
} else if (n[t] !== r) {
var s = this.constructor.name || "<unknown>", c = 'Method "'.concat(s, ":").concat(t, ":").concat(e, '" already linked to class');
console.error(c, this);
} else Object.defineProperty(n, t, {
value: function() {
var e = this.root.wasm.table.get(o), n = arguments.length, r = this.pointer;
if (0 === r && "construct" !== t) throw new Error("Pointer is ".concat(r, ', for method "').concat(this.constructor.name || "<unknown>", ":").concat(t, '"'));
return 0 === n ? e(this.pointer) : 1 === n ? e(this.pointer, arguments[0]) : 2 === n ? e(this.pointer, arguments[0], arguments[1]) : 3 === n ? e(this.pointer, arguments[0], arguments[1], arguments[2]) : 4 === n ? e(this.pointer, arguments[0], arguments[1], arguments[2], arguments[3]) : e.apply(void 0, [ this.pointer ].concat(Array.prototype.slice.call(arguments)));
},
writable: !0,
enumerable: !1,
configurable: !1
});
};
}
for (var a in t) {
var s = o++;
r.set(s, a), Object.defineProperty(n, a, {
value: i(a, s),
writable: !0,
enumerable: !1,
configurable: !1
});
}
return Object.defineProperty(n, "__idToMethod", {
value: r,
writable: !1,
enumerable: !1,
configurable: !1
}), Object.defineProperty(n, "_asc_methods", {
value: t,
writable: !1,
enumerable: !1,
configurable: !1
}), e;
}(e || {}, m(t, void 0, new Function)), o = A(r);
return function(t, e) {
var n, r = v(e);
try {
for (r.s(); !(n = r.n()).done; ) {
var o = n.value;
Object.defineProperty(t, o, {
value: g(o, t),
writable: !0,
enumerable: !1,
configurable: !1
});
}
} catch (t) {
r.e(t);
} finally {
r.f();
}
}(o, n || []), o;
}
},
54260(t, e, n) {
"use strict";
n.d(e, {
a: () => y
});
var r = n(1389), o = n(9549), i = n(33630), a = n(95338), s = n(33637), c = n(8002);
function u(t, e, n) {
return e = (0, a.a)(e), (0, i.a)(t, l() ? Reflect.construct(e, n || [], (0, a.a)(t).constructor) : e.apply(t, n));
}
function l() {
try {
var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
} catch (t) {}
return (l = function() {
return !!t;
})();
}
var f = (0, c.a)({
byteArray: {
t: "usize",
o: 0
},
length: {
t: "i32",
o: 0
},
byteLength: {
t: "i32",
o: 0
}
});
function h() {
return this.updateBuffer(), this.bufferU8;
}
function p() {
var t, e;
if (void 0 === (null === (t = this.bufferU8) || void 0 === t ? void 0 : t.byteLength) || 0 === (null === (e = this.bufferU8) || void 0 === e ? void 0 : e.byteLength)) {
this.root.checkView();
var n = this.byteArray + this.root.U8[this.byteArray], r = this.byteArray + this.root.U8[this.byteArray] + this.byteLength;
return this.bufferU8 = new Uint8Array(this.root.wasm_memory_buffer).subarray(n, r);
}
return this.bufferU8;
}
function d(t) {
var e = t / 8 | 0, n = t % 8;
return 0 !== (this.bufferU8[e] >> n & 1);
}
function v(t, e) {
var n = t / 8 | 0, r = t % 8;
!0 === e ? this.bufferU8[n] |= 1 << r : this.bufferU8[n] &= ~(1 << r);
}
var y = function(t) {
function e(t, n) {
return (0, r.a)(this, e), u(this, e, [ t, f.fields, n, !1 ]);
}
return (0, s.a)(e, t), (0, o.a)(e, [ {
key: "buffer",
get: h
}, {
key: "updateBuffer",
value: p
}, {
key: "get",
value: d
}, {
key: "set",
value: v
} ]);
}((0, c.b)(f.fields, {}));
},
68323(t, e, n) {
"use strict";
n.d(e, {
a: () => v
});
var r = n(1389), o = n(9549), i = n(33630), a = n(95338), s = n(33637), c = n(8002), u = n(22271);
function l(t, e, n) {
return e = (0, a.a)(e), (0, i.a)(t, f() ? Reflect.construct(e, n || [], (0, a.a)(t).constructor) : e.apply(t, n));
}
function f() {
try {
var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
} catch (t) {}
return (f = function() {
return !!t;
})();
}
var h = (0, c.a)({
id: {
t: "u16"
},
mouseX: {
t: "f32"
},
mouseY: {
t: "f32"
},
view_rect_x: {
t: "f32"
},
view_rect_y: {
t: "f32"
},
view_rect_w: {
t: "f32"
},
view_rect_h: {
t: "f32"
},
view_scale: {
t: "f32"
},
view_w: {
t: "f32"
},
view_h: {
t: "f32"
},
ejectAttempts: {
t: "u8"
},
splitAttempts: {
t: "u8"
},
lockDirectionPressed: {
t: "bool"
},
lockDirection: {
t: "bool"
},
ejectMacroPressed: {
t: "bool"
},
ejectMacroProcessed: {
t: "bool"
},
spawnRequested: {
t: "bool"
},
deathRequested: {
t: "bool"
},
spawnAt: {
t: "f64"
},
deathAt: {
t: "f64"
},
disposeAt: {
t: "f64"
},
extraDecayMultiplier: {
t: "f32"
},
view_scale_mult: {
t: "f32"
},
ejectTick: {
t: "f64"
},
color: {
t: "u32"
},
world_ptr: {
t: "usize"
},
controller_ptr: {
t: "usize"
},
playerNick: {
t: "string"
},
playerSkin: {
t: "string"
},
score: {
t: "f32"
},
lbposition: {
t: "u32"
},
state: {
t: "i8"
},
cells: {
t: "usize"
},
last_cells_size: {
t: "u32"
},
type: {
t: "u8"
},
flags: {
t: "u8"
}
});
function p() {
return 0 === this.state;
}
function d() {
this.setPointer(0);
}
var v = function(t) {
function e(t, n, o) {
var i;
return (0, r.a)(this, e), (i = l(this, e, [ t, h.fields, 0, !1 ])).groupedBehavior = .5, 
i.cursorGroup = -1, i.range = new u.a(0, 0, 0, 0), i.vHash = 0, i.hX1 = void 0, 
i.hY1 = void 0, i.hX2 = void 0, i.hY2 = void 0, i.didTurn = !1, i.isMatched = !1, 
i.setPointer(n), i.connection = o, i;
}
return (0, s.a)(e, t), (0, o.a)(e, [ {
key: "isPlay",
get: p
}, {
key: "destroy",
value: d
} ]);
}((0, c.b)(h.fields, {
construct: {},
$remOwnCells: {}
}));
},
91409(t, e, n) {
"use strict";
n.d(e, {
a: () => pe
});
var r = n(95114), o = n(46997), i = n(23067), a = n(98001), s = n(32859), c = n(1389), u = n(9549), l = n(33630), f = n(95338), h = n(33637), p = n(1674), d = n.n(p), v = n(82175), y = n(2411), m = n(3580);
async function g(t, e = {}) {
const n = e.Controller, r = e.World, o = e.utils, i = e.ServerHandle, a = e.Player, s = e.index, c = {
env: Object.setPrototypeOf({
abort(t, e, n, r) {
t = f(t >>> 0), e = f(e >>> 0), n >>>= 0, r >>>= 0, (() => {
throw Error(`${t} in ${e}:${n}:${r}`);
})();
},
seed: () => Date.now() * Math.random(),
trace(t, e, n, r, o, i, a) {
t = f(t >>> 0), console.log(t, ...[ n, r, o, i, a ].slice(0, e));
},
"console.error"(t) {
t = f(t >>> 0), console.error(t);
},
"performance.now": () => performance.now(),
"Date.now": () => Date.now()
}, Object.assign(Object.create(globalThis), e.env || {})),
Controller: Object.setPrototypeOf({
$closeListener(t, e, r) {
t >>>= 0, r = f(r >>> 0), n.$closeListener(t, e, r);
},
$onPlayerAttach(t, e) {
t >>>= 0, e >>>= 0, n.$onPlayerAttach(t, e);
},
$onPlayerDetach(t, e) {
t >>>= 0, e >>>= 0, n.$onPlayerDetach(t, e);
},
$emitBuffer(t, e, r) {
t >>>= 0, e >>>= 0, n.$emitBuffer(t, e, r);
},
$onProtocolAssigned(t) {
t >>>= 0, n.$onProtocolAssigned(t);
},
$closeUnexpectedMessage(t, e, r) {
t >>>= 0, r = f(r >>> 0), n.$closeUnexpectedMessage(t, e, r);
},
$onProtocolChecksDone(t) {
t >>>= 0, n.$onProtocolChecksDone(t);
},
$getUrl: t => (t >>>= 0, n.$getUrl(t)),
$getCaptchaId: t => (t >>>= 0, n.$getCaptchaId(t)),
$verifyCaptchaResponse(t, e, r) {
t >>>= 0, r = f(r >>> 0), n.$verifyCaptchaResponse(t, e, r);
},
$onAuthToken: (t, e) => (t >>>= 0, e = f(e >>> 0), n.$onAuthToken(t, e)),
$getProtocol: t => (t >>>= 0, n.$getProtocol(t))
}, n),
World: Object.setPrototypeOf({
onControllerAdded(t, e) {
t >>>= 0, e >>>= 0, r.onControllerAdded(t, e);
},
onPlayerAdded(t, e) {
t >>>= 0, e >>>= 0, r.onPlayerAdded(t, e);
},
onPlayerRemoved(t, e) {
t >>>= 0, e >>>= 0, r.onPlayerRemoved(t, e);
},
onControllerRemoved(t, e) {
t >>>= 0, e >>>= 0, r.onControllerRemoved(t, e);
},
onMapUpdate(t) {
t >>>= 0, r.onMapUpdate(t);
}
}, r),
utils: Object.setPrototypeOf({
$maxSegments: (t, e) => (t = f(t >>> 0), h(o.$maxSegments(t, e)) || p())
}, o),
ServerHandle: Object.setPrototypeOf({
$onWorldAdded(t, e) {
t >>>= 0, e >>>= 0, i.$onWorldAdded(t, e);
},
$onWorldRemoved(t, e) {
t >>>= 0, e >>>= 0, i.$onWorldRemoved(t, e);
}
}, i),
Player: a,
index: Object.setPrototypeOf({
report_controller(t, e, n, r) {
t >>>= 0, n = f(n >>> 0), r = 0 != r, s.report_controller(t, e, n, r);
}
}, s)
}, {exports: u} = await WebAssembly.instantiate(t, c), l = u.memory || e.env.memory;
function f(t) {
if (!t) return null;
const e = t + new Uint32Array(l.buffer)[t - 4 >>> 2] >>> 1, n = new Uint16Array(l.buffer);
let r = t >>> 1, o = "";
for (;e - r > 1024; ) o += String.fromCharCode(...n.subarray(r, r += 1024));
return o + String.fromCharCode(...n.subarray(r, e));
}
function h(t) {
if (null == t) return 0;
const e = t.length, n = u.__new(e << 1, 2) >>> 0, r = new Uint16Array(l.buffer);
for (let o = 0; o < e; ++o) r[(n >>> 1) + o] = t.charCodeAt(o);
return n;
}
function p() {
throw TypeError("value must not be null");
}
return Object.setPrototypeOf({
ticked: {
valueOf() {
return this.value;
},
get value() {
return u.ticked.value >>> 0;
},
set value(t) {
u.ticked.value = t;
}
},
debugLevel: {
valueOf() {
return this.value;
},
get value() {
return u.debugLevel.value >>> 0;
}
},
DeltaProtocolPointer: {
valueOf() {
return this.value;
},
get value() {
return u.DeltaProtocolPointer.value >>> 0;
}
},
LegacyProtocolPointer: {
valueOf() {
return this.value;
},
get value() {
return u.LegacyProtocolPointer.value >>> 0;
}
},
SenpaProtocolPointer: {
valueOf() {
return this.value;
},
get value() {
return u.SenpaProtocolPointer.value >>> 0;
}
},
get_settings_pointer: () => u.get_settings_pointer() >>> 0,
report_controller(t, e, n, r) {
n = h(n) || p(), r = r ? 1 : 0, u.report_controller(t, e, n, r);
}
}, u);
}
var b = n(98351), w = n(16558), k = n(68323), S = n(59500), _ = n(8002);
function x(t) {
this.pointer = t, this.updateBuffer(!0);
}
function C() {
return this.updateBuffer(), this.bufferU32;
}
function A(t) {
var e, n;
if (void 0 === (null === (e = this.bufferU32) || void 0 === e ? void 0 : e.byteLength) || 0 === (null === (n = this.bufferU32) || void 0 === n ? void 0 : n.byteLength)) {
this.module.checkView();
var r = this.module.U32[this.pointer >> 2], o = this.module.U32[this.pointer >> 2] + this.byteLength;
this.bufferU32 = new Uint32Array(this.module.wasm_memory_buffer).subarray(r >> 2, o >> 2);
}
}
function O() {
return this.module.checkView(), this.module.U32[this.pointer + 8 >>> 2];
}
function P() {
return this.module.checkView(), this.module.U32[this.pointer + 12 >>> 2];
}
function E(t) {
this.module.checkView(), this.module.U32[this.pointer + 12 >>> 2] = t;
}
var D = function() {
return (0, u.a)(function t(e, n) {
(0, c.a)(this, t), this.pointer = 0, this.module = e, this.pointer = 0, this.setPointer(n), 
this.updateBuffer(), this._byteLength = 0;
}, [ {
key: "setPointer",
value: x
}, {
key: "buffer",
get: C
}, {
key: "updateBuffer",
value: A
}, {
key: "byteLength",
get: O
}, {
key: "length",
get: P,
set: E
} ]);
}(), B = n(22271);
function T(t, e) {
var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
if (!n) {
if (Array.isArray(t) || (n = function(t, e) {
if (t) {
if ("string" == typeof t) return I(t, e);
var n = {}.toString.call(t).slice(8, -1);
return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? I(t, e) : void 0;
}
}(t)) || e && t && "number" == typeof t.length) {
n && (t = n);
var r = 0, o = function() {};
return {
s: o,
n: function() {
return r >= t.length ? {
done: !0
} : {
done: !1,
value: t[r++]
};
},
e: function(t) {
throw t;
},
f: o
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var i, a = !0, s = !1;
return {
s: function() {
n = n.call(t);
},
n: function() {
var t = n.next();
return a = t.done, t;
},
e: function(t) {
s = !0, i = t;
},
f: function() {
try {
a || null == n.return || n.return();
} finally {
if (s) throw i;
}
}
};
}
function I(t, e) {
(null == e || e > t.length) && (e = t.length);
for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
return r;
}
function U(t, e, n) {
return e = (0, f.a)(e), (0, l.a)(t, M() ? Reflect.construct(e, n || [], (0, f.a)(t).constructor) : e.apply(t, n));
}
function M() {
try {
var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
} catch (t) {}
return (M = function() {
return !!t;
})();
}
var L = (0, _.a)({
id: {
t: "u8"
},
border_x: {
t: "f32"
},
border_y: {
t: "f32"
},
border_w: {
t: "f32"
},
border_h: {
t: "f32"
},
leaderboard_ptr: {
t: "usize"
}
}), W = (0, _.b)(L.fields, {
$mergePlayerCells: {},
$logPlayers: {},
$resizeMapDebug: {},
log: {},
$removeAllControllers: {}
}, [ "onControllerRemoved", "onControllerAdded", "onPlayerAdded", "onPlayerRemoved", "onMapUpdate" ]);
function R() {
return (0, r.a)(this.controllers.values());
}
function j() {
this.cursorQT = new B.b(new B.a(this.border_x, this.border_y, this.border_w, this.border_h), 16, 16);
}
function z() {
var t, e = this.players.size, n = Math.pow(Math.max(150, 100 + 2 * e), 2), r = new Map, i = T(this.players);
try {
for (i.s(); !(t = i.n()).done; ) {
var a = (0, o.a)(t.value, 2), s = (a[0], a[1]);
if (0 === s.state && 0 !== s.controller_ptr) if (void 0 !== s.hX1) {
var c = ((s.mouseX - s.hX1) / 2 | 0) << 16 | 65535 & ((s.mouseY - s.hY1) / 2 | 0), u = ((s.hX1 - s.hX2) / 2 | 0) << 16 | 65535 & ((s.hY1 - s.hY2) / 2 | 0);
s.didTurn = c !== u && 0 !== c && 0 !== u, s.vHash = c, s.isMatched = !1, s.hX2 = s.hX1, 
s.hY2 = s.hY1, s.hX1 = s.mouseX, s.hY1 = s.mouseY, 0 !== c && (r.has(c) || r.set(c, []), 
r.get(c).push(s));
} else s.hX1 = s.mouseX, s.hY1 = s.mouseY, s.hX2 = s.mouseX, s.hY2 = s.mouseY, s.groupedBehavior = 0;
}
} catch (t) {
i.e(t);
} finally {
i.f();
}
var l, f = T(r);
try {
for (f.s(); !(l = f.n()).done; ) {
var h = (0, o.a)(l.value, 2), p = (h[0], h[1]), d = p.length;
if (!(d < 2)) for (var v = 0; v < d; v++) for (var y = p[v], m = v + 1; m < d; m++) {
var g = p[m];
if (y.connection !== g.connection) {
var b = y.mouseX - g.mouseX, w = y.mouseY - g.mouseY;
b * b + w * w < n && (y.isMatched = !0, g.isMatched = !0);
}
}
}
} catch (t) {
f.e(t);
} finally {
f.f();
}
var k, S = T(this.players);
try {
for (S.s(); !(k = S.n()).done; ) {
var _ = (0, o.a)(k.value, 2), x = (_[0], _[1]);
0 === x.state && void 0 !== x.vHash && (x.isMatched ? x.groupedBehavior += x.didTurn ? .3 : .1 : x.groupedBehavior -= .15, 
x.groupedBehavior > 1 ? x.groupedBehavior = 1 : x.groupedBehavior < 0 && (x.groupedBehavior = 0), 
x.groupedBehavior >= 1 && console.log("Group cursor detected, banning player", x.id, "with score", x.groupedBehavior));
}
} catch (t) {
S.e(t);
} finally {
S.f();
}
}
function N() {
var t, e = this, n = T(this.players);
try {
for (n.s(); !(t = n.n()).done; ) {
var r = (0, o.a)(t.value, 2), i = (r[0], r[1]);
0 == i.state && (i.range.x = i.mouseX, i.range.y = i.mouseY, i.range.w = 20, i.range.h = 20, 
this.cursorQT.insert(i));
}
} catch (t) {
n.e(t);
} finally {
n.f();
}
var a, s = new Map, c = function(t) {
if (0 !== t.state || 0 === t.controller_ptr) return 1;
-1 == t.cursorGroup && (t.cursorGroup = 1e3 * Math.random() | 0, s.has(t.cursorGroup) || s.set(t.cursorGroup, [ t ])), 
e.cursorQT.search({
x: t.mouseX,
y: t.mouseY,
w: 200,
h: 200
}, function(e) {
e !== t && -1 == e.cursorGroup && e.connection != t.connection && (e.cursorGroup = t.cursorGroup, 
s.get(t.cursorGroup).push(e));
});
}, u = T(this.players);
try {
for (u.s(); !(a = u.n()).done; ) {
c((0, o.a)(a.value, 2)[1]);
}
} catch (t) {
u.e(t);
} finally {
u.f();
}
var l, f = T(this.players);
try {
for (f.s(); !(l = f.n()).done; ) {
(0, o.a)(l.value, 2)[1].cursorGroup = -1;
}
} catch (t) {
f.e(t);
} finally {
f.f();
}
var h, p = function() {
var t = v.length;
v.forEach(function(e) {
t > 5 ? e.groupedBehavior += .1 : e.groupedBehavior -= .1, e.groupedBehavior = Math.min(1, Math.max(0, e.groupedBehavior));
});
}, d = T(s);
try {
for (d.s(); !(h = d.n()).done; ) {
var v = (0, o.a)(h.value, 2)[1];
p();
}
} catch (t) {
d.e(t);
} finally {
d.f();
}
this.cursorQT.destroy();
var y, m = T(this.players);
try {
for (m.s(); !(y = m.n()).done; ) {
var g = (0, o.a)(y.value, 2)[1];
g.groupedBehavior >= 1 && this.server.banByController(g.connection, 6e5, "Group cursor detected");
}
} catch (t) {
m.e(t);
} finally {
m.f();
}
}
function F() {
this.updBotDetectionTool();
}
function $(t) {
var e = w.a.from(this.root, t);
this.controllers.set(t, e);
}
function V(t) {
this.controllers.delete(t);
}
function G(t) {
if (0 === k.a.quick(this.root, t).type) {
var e = k.a.from(this.root, t);
this.players.set(t, e);
}
}
function q(t) {
this.players.delete(t);
}
var Y = function(t) {
function e(t, n) {
var r;
return (0, c.a)(this, e), (r = U(this, e, [ t.module, L.fields, n ])).players = new Map, 
r.controllers = new Map, r.server = t, r.leaderboard = new D(t.module, r.leaderboard_ptr), 
r.updBotDetectionTool(), r;
}
return (0, h.a)(e, t), (0, u.a)(e, [ {
key: "_c",
get: R
}, {
key: "updBotDetectionTool",
value: j
}, {
key: "calcBotDetection2",
value: z
}, {
key: "calcBotDetection",
value: N
}, {
key: "onMapUpdate",
value: F
}, {
key: "onControllerAdded",
value: $
}, {
key: "onControllerRemoved",
value: V
}, {
key: "onPlayerAdded",
value: G
}, {
key: "onPlayerRemoved",
value: q
} ]);
}((0, y.EventMixin)(W));
function X(t, e, n) {
return e = (0, f.a)(e), (0, l.a)(t, Q() ? Reflect.construct(e, n || [], (0, f.a)(t).constructor) : e.apply(t, n));
}
function Q() {
try {
var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
} catch (t) {}
return (Q = function() {
return !!t;
})();
}
var H = (0, _.a)({});
function K(t) {
var e = new Y(this.ds, t);
this.worlds.set(t, e);
}
function Z(t) {
this.worlds.delete(t);
}
function J() {
this.root.wasm.__unpin(this.pointer), this.setPointer(0);
}
var tt = function(t) {
function e(t, n) {
var r;
return (0, c.a)(this, e), (r = X(this, e, [ t, H.fields, 0 ])).ds = n, r.worlds = new Map, 
r.setPointer(r.construct()), t.wasm.__pin(r.pointer), r;
}
return (0, h.a)(e, t), (0, u.a)(e, [ {
key: "$onWorldAdded",
value: K
}, {
key: "$onWorldRemoved",
value: Z
}, {
key: "destroy",
value: J
} ]);
}((0, _.b)(H.fields, {
addController: {},
remController: {},
tick: {},
construct: {}
}, [ "$onWorldAdded", "$onWorldRemoved" ]));
function et(t, e, n) {
return e = (0, f.a)(e), (0, l.a)(t, nt() ? Reflect.construct(e, n || [], (0, f.a)(t).constructor) : e.apply(t, n));
}
function nt() {
try {
var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
} catch (t) {}
return (nt = function() {
return !!t;
})();
}
var rt, ot = (0, _.a)({
systemMaxConcurentAccounts: {
t: "i32"
},
serverName: {
t: "utf8"
},
WORLD_SIZE_SCALE_ENABLED: {
t: "bool"
},
WORLD_SIZE_SCALE_STEP: {
t: "f32"
},
WORLD_SIZE_SCALE_MIN: {
t: "f32"
},
WORLD_SIZE_SCALE_MAX: {
t: "f32"
},
WORLD_SIZE_SCALE_MASS_DENSITY_HIGH: {
t: "f32"
},
WORLD_SIZE_SCALE_MASS_DENSITY_LOW: {
t: "f32"
},
worldCriticalMassRemoval: {
t: "bool"
},
worldMapX: {
t: "f32"
},
worldMapY: {
t: "f32"
},
worldMapW: {
t: "f32"
},
worldMapH: {
t: "f32"
},
worldFinderMaxLevel: {
t: "i8"
},
worldFinderMaxItems: {
t: "i8"
},
worldSafeSpawnTries: {
t: "f32"
},
worldSafeSpawnFromEjectedChance: {
t: "f32"
},
worldScramblingEnabled: {
t: "bool"
},
worldPlayerDisposeDelay: {
t: "f32"
},
worldTimeScale: {
t: "f32"
},
worldDeltaClamping: {
t: "bool"
},
worldEatMult: {
t: "f32"
},
worldEatOverlapDiv: {
t: "f32"
},
worldPlayerBotsPerWorld: {
t: "i32"
},
worldMinionsPerPlayer: {
t: "i32"
},
worldMaxControllers: {
t: "i32"
},
worldMaxSpectators: {
t: "i32"
},
worldPlayersPerController: {
t: "u8"
},
worldMinCount: {
t: "u32"
},
worldMaxCount: {
t: "u32"
},
matchmakerNeedsQueuing: {
t: "bool"
},
matchmakerBulkSize: {
t: "u32"
},
minionName: {
t: "utf8"
},
minionSpawnSize: {
t: "f32"
},
minionSpawnNear: {
t: "bool"
},
minionSpawnNearDistance: {
t: "f32"
},
minionEnableERTPControls: {
t: "bool"
},
minionEnableQBasedControl: {
t: "bool"
},
boosterCount: {
t: "u32"
},
boosterSize: {
t: "f32"
},
boosterSizeGiven: {
t: "f32"
},
boostingResolveEnabled: {
t: "bool"
},
pelletMinSize: {
t: "u16"
},
pelletMaxSize: {
t: "u16"
},
pelletGrowTicks: {
t: "f32"
},
pelletCount: {
t: "u32"
},
pelletSafeSpawnTries: {
t: "f32"
},
pelletSafeDistanceScale: {
t: "f32"
},
pelletSpawnPerTick: {
t: "i32"
},
pelletSpawnUseGradient: {
t: "bool"
},
cellsBoostDuration: {
t: "f32"
},
virusMinCount: {
t: "u32"
},
virusMaxCount: {
t: "u32"
},
virusSize: {
t: "f32"
},
virusFeedTimes: {
t: "f32"
},
virusFeedSpawnProtectionMs: {
t: "f32"
},
virusPushing: {
t: "bool"
},
virusSplitBoost: {
t: "f32"
},
virusPushBoost: {
t: "f32"
},
virusMonotonePops: {
t: "bool"
},
ejectedMaxAge: {
t: "f32"
},
ejectedNoCollideDelay: {
t: "f32"
},
ejectedRigidEnabled: {
t: "bool"
},
ejectedSize: {
t: "f32"
},
ejectingLoss: {
t: "f32"
},
ejectDispersion: {
t: "f32"
},
ejectedCellBoost: {
t: "f32"
},
mothercellSize: {
t: "f32"
},
mothercellCount: {
t: "u32"
},
mothercellPassiveSpawnChance: {
t: "f32"
},
mothercellActiveSpawnSpeed: {
t: "f32"
},
mothercellPelletBoost: {
t: "f32"
},
mothercellMaxPellets: {
t: "u32"
},
mothercellMaxSize: {
t: "f32"
},
playerAntiSuicideTreshold: {
t: "i32"
},
playerAntiSuicideDelay: {
t: "f32"
},
playerAntiSuicidePenaltyDelay: {
t: "f32"
},
playerDeathRequestCooldownMs: {
t: "f32"
},
playerRoamSpeed: {
t: "f32"
},
playerRoamViewScale: {
t: "f32"
},
playerViewScaleMult: {
t: "f32"
},
playerMinViewScale: {
t: "f32"
},
playerCenterweightView: {
t: "bool"
},
playerMaxNameLength: {
t: "u32"
},
playerAllowSkinInName: {
t: "bool"
},
playerLockDirectionEnabled: {
t: "bool"
},
playerBotSpawnSize: {
t: "f32"
},
playerCellsCheapRemoving: {
t: "bool"
},
playerMinSize: {
t: "f32"
},
playerSpawnSize: {
t: "f32"
},
playerSpawnMultiAtCursor: {
t: "bool"
},
playerSpawnMultiAtCursorDistance: {
t: "f32"
},
playerSpawnMultiAtCursorOffset: {
t: "f32"
},
playerSpawnMultiAtCursorOwnerDistance: {
t: "f32"
},
playerSpawnMultiNear: {
t: "bool"
},
playerSpawnSpectAtCursor: {
t: "bool"
},
playerStickyMacroEjectEnabled: {
t: "bool"
},
playerAutosplitAtCursor: {
t: "bool"
},
playerAutosplitAtCursorSpread: {
t: "f32"
},
playerAutosplitAtSameTick: {
t: "bool"
},
playerAutosplitDelay: {
t: "f32"
},
playerAutosplitOverflow: {
t: "bool"
},
playerBoostByEjected: {
t: "bool"
},
playerMaxSize: {
t: "f32"
},
playerMinSplitSize: {
t: "f32"
},
playerMinEjectSize: {
t: "f32"
},
playerSplitCap: {
t: "i32"
},
playerEjectDelay: {
t: "u8"
},
playerMaxCells: {
t: "u32"
},
playerNormalizeTreshMass: {
t: "f32"
},
playerExtraDecayEnabled: {
t: "bool"
},
playerExtraDecayBase: {
t: "f32"
},
playerExtraDecayCompensation: {
t: "f32"
},
playerExtraDecayEjectLoss: {
t: "f32"
},
playerExtraDecaySplitLoss: {
t: "f32"
},
playerExtraDecayVirusPopLoss: {
t: "f32"
},
playerMoveMult: {
t: "f32"
},
playerSortCells: {
t: "bool"
},
playerSplitSizeDiv: {
t: "f32"
},
playerSplitDistance: {
t: "f32"
},
playerSplitBoost: {
t: "f32"
},
playerNoCollideDelay: {
t: "f32"
},
playerNoMergeDelay: {
t: "f32"
},
playerNewMergeVersion: {
t: "bool"
},
playerMergeTime: {
t: "f32"
},
playerMergeTimeIncrease: {
t: "f32"
},
playerDecayMult: {
t: "f32"
},
decayFn: {
t: "bool"
},
fuckercellCount: {
t: "u32"
},
fuckercellSize: {
t: "f32"
},
fuckercellPassiveSpawnChance: {
t: "f32"
},
fuckercellActiveSpawnSpeed: {
t: "f32"
},
fuckercellVirusBoost: {
t: "f32"
},
fuckercellMaxViruses: {
t: "u32"
},
fuckercellMaxSize: {
t: "f32"
},
_compensateRigidBoostA: {
t: "bool"
},
_compensateRigidBoostB: {
t: "bool"
},
systemCompressionEnabled: {
t: "bool"
}
}), it = function(t) {
function e() {
return (0, c.a)(this, e), et(this, e, arguments);
}
return (0, h.a)(e, t), (0, u.a)(e);
}((0, _.b)(ot.fields, {}, []));
function at() {
this._start || (this._start = this._lap = performance.now());
}
function st() {
var t = performance.now() - (this._lap || 0);
return this._lap = performance.now(), t;
}
function ct() {
return performance.now() - (this._start || 0);
}
function ut() {
this._start = this._lap = void 0;
}
function lt() {
this._start = this._lap = performance.now();
}
!function(t) {
t.IP = "ip", t.FP = "fp";
}(rt || (rt = {}));
var ft = function() {
return (0, u.a)(function t() {
(0, c.a)(this, t);
}, [ {
key: "begin",
value: at
}, {
key: "lap",
value: st
}, {
key: "elapsed",
value: ct
}, {
key: "stop",
value: ut
}, {
key: "reset",
value: lt
} ]);
}(), ht = n(27923);
function pt(t, e) {
var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
if (!n) {
if (Array.isArray(t) || (n = function(t, e) {
if (t) {
if ("string" == typeof t) return dt(t, e);
var n = {}.toString.call(t).slice(8, -1);
return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? dt(t, e) : void 0;
}
}(t)) || e && t && "number" == typeof t.length) {
n && (t = n);
var r = 0, o = function() {};
return {
s: o,
n: function() {
return r >= t.length ? {
done: !0
} : {
done: !1,
value: t[r++]
};
},
e: function(t) {
throw t;
},
f: o
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var i, a = !0, s = !1;
return {
s: function() {
n = n.call(t);
},
n: function() {
var t = n.next();
return a = t.done, t;
},
e: function(t) {
s = !0, i = t;
},
f: function() {
try {
a || null == n.return || n.return();
} finally {
if (s) throw i;
}
}
};
}
function dt(t, e) {
(null == e || e > t.length) && (e = t.length);
for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
return r;
}
function vt(t) {
function e(e, n) {
return t.apply(this, arguments);
}
return e.toString = function() {
return t.toString();
}, e;
}
function yt(t, e) {
return setTimeout(t, e);
}
function mt(t) {
function e(e) {
return t.apply(this, arguments);
}
return e.toString = function() {
return t.toString();
}, e;
}
function gt(t) {
return clearTimeout(t);
}
function bt(t) {
if (!(t instanceof Function)) throw new TypeError("given object isn't a function");
return this.callbacks.push(t), this;
}
function wt(t) {
if (!(t instanceof Function)) throw new TypeError("given object isn't a function");
var e = this.callbacks.indexOf(t);
if (-1 === e) throw new Error("given function wasn't added");
return this.callbacks.splice(e, 1), this;
}
function kt(t) {
this.msPerUpdate = 1e3 / t, this.dt = this.msPerUpdate / 1e3;
}
function St() {
var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 25;
if (this.running) throw new Error("Ticker уже запущен");
this.running = !0, e && (this.msPerUpdate = 1e3 / e, this.dt = this.msPerUpdate / 1e3);
var n = Date.now();
return 0 === this.time && (this.timeInfo.start = n), this.timeInfo.lastUpdate = n, 
this.delta = 0, this._timeoutId = this.setTimeout(function() {
return t.tick();
}, this.msPerUpdate), this;
}
function _t() {
if (!this.running) throw new Error("Ticker не запущен");
return this.clearTimeout(this._timeoutId), this._timeoutId = null, this.running = !1, 
this;
}
function xt() {
if (!this.running && 0 === this.time) throw new Error("Ticker не запущен");
return this.running && this.pause(), this.time = 0, this.prev_time = 0, this.timeInfo.start = 0, 
this.timeInfo.lastUpdate = 0, this;
}
var Ct = function() {
return (0, u.a)(function t(e) {
var n = this;
function r() {
return n.tick();
}
(0, c.a)(this, t), this.tick = (0, s.a)(d().mark(function t() {
var e, o, i, a, s, c, u, l, f;
return d().wrap(function(t) {
for (;;) switch (t.prev = t.next) {
case 0:
if (n.running) {
t.next = 1;
break;
}
return t.abrupt("return");

case 1:
e = Date.now(), o = e - n.timeInfo.lastUpdate, n.timeInfo.lastUpdate = e, n.prev_time = n.time, 
n.time += o, i = Math.min(o, n.msPerUpdate), a = o / 1e3, s = i / 1e3, c = pt(n.callbacks);
try {
for (c.s(); !(u = c.n()).done; ) (0, u.value)(s, a);
} catch (t) {
c.e(t);
} finally {
c.f();
}
l = Date.now() - e, f = Math.max(0, n.msPerUpdate - l), n._timeoutId = n.setTimeout(r, f);

case 2:
case "end":
return t.stop();
}
}, t);
})), "undefined" != typeof window ? Object.assign(this, {
setTimeout: ht.b,
clearTimeout: ht.a
}) : Object.assign(this, {
setTimeout: vt(yt),
clearTimeout: mt(gt)
}), this.running = !1, this.callbacks = [], this.timeInfo = {
start: 0,
lastUpdate: 0
}, this.prev_time = 0, this.time = 0, this.msPerUpdate = 1e3 / e, this.dt = this.msPerUpdate / 1e3, 
this.delta = 0, this._timeoutId = null;
}, [ {
key: "add",
value: bt
}, {
key: "remove",
value: wt
}, {
key: "setUpdatesPerSecond",
value: kt
}, {
key: "start",
value: St
}, {
key: "pause",
value: _t
}, {
key: "stop",
value: xt
} ]);
}();
const At = Ct;
var Ot = n(90512), Pt = n(14003), Et = n(28022).Buffer;
function Dt(t, e) {
var n = Object.keys(t);
if (Object.getOwnPropertySymbols) {
var r = Object.getOwnPropertySymbols(t);
e && (r = r.filter(function(e) {
return Object.getOwnPropertyDescriptor(t, e).enumerable;
})), n.push.apply(n, r);
}
return n;
}
function Bt(t) {
for (var e = 1; e < arguments.length; e++) {
var n = null != arguments[e] ? arguments[e] : {};
e % 2 ? Dt(Object(n), !0).forEach(function(e) {
(0, i.a)(t, e, n[e]);
}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Dt(Object(n)).forEach(function(e) {
Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
});
}
return t;
}
function Tt(t, e, n) {
return e = (0, f.a)(e), (0, l.a)(t, It() ? Reflect.construct(e, n || [], (0, f.a)(t).constructor) : e.apply(t, n));
}
function It() {
try {
var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
} catch (t) {}
return (It = function() {
return !!t;
})();
}
globalThis.module = {
hot: null,
id: "delta-server"
};
function Ut(t, e) {
return 1;
}
function Mt() {
return 1;
}
function Lt(t) {
for (;;) switch (t.prev = t.next) {
case 0:
return t.abrupt("return", !0);

case 1:
case "end":
return t.stop();
}
}
function Wt() {
return d().wrap(Lt, Wt);
}
function Rt(t) {
for (;;) switch (t.prev = t.next) {
case 0:
return t.abrupt("return", void 0);

case 1:
case "end":
return t.stop();
}
}
function jt() {
return d().wrap(Rt, jt);
}
function zt(t) {
for (;;) switch (t.prev = t.next) {
case 0:
return t.abrupt("return", void 0);

case 1:
case "end":
return t.stop();
}
}
function Nt() {
return d().wrap(zt, Nt);
}
function Ft(t) {
for (;;) switch (t.prev = t.next) {
case 0:
if (!this.wasm) {
t.next = 1;
break;
}
throw Error("Already initialized");

case 1:
return this.log("Module Initialization ..."), t.next = 2, this.loadAssembly();

case 2:
this.wasm = t.sent, this.module = new b.a(this.wasm), Object.assign(globalThis, {
wasm: this.wasm
}), this.runTicker(), this.serverHandle = new tt(this.module, this), this.settings = new it(this.module, ot.fields, this.wasm.get_settings_pointer()), 
this.wasm.tests_runner(), this.tick(0, 0), this.log("Done.");

case 3:
case "end":
return t.stop();
}
}
function $t() {
return d().wrap(Ft, $t, this);
}
function Vt(t) {
return t.default;
}
function Gt(t) {
return t.arrayBuffer();
}
function qt(t) {
var e = (0, o.a)(t, 2), n = e[0], r = e[1], i = new Uint8Array(r), a = n.SetSourceMapURL(i, "".toString());
return WebAssembly.compile(a);
}
function Yt(t) {}
function Xt() {}
function Qt() {
var t, e, r, o, i, l, f, p, y;
function m(e) {
for (;;) switch (e.prev = e.next) {
case 0:
return e.abrupt("return", Promise.all([ n.e(187).then(n.bind(n, 74187)).then(Vt), fetch(t.toString()).then(Gt) ]).then(qt));

case 1:
case "end":
return e.stop();
}
}
function b() {
return d().wrap(m, b);
}
function S() {
return (i = (0, s.a)(d().mark(b))).apply(this, arguments);
}
function _() {
return i.apply(this, arguments);
}
function x() {
var e, r, o, i, a, c;
function u() {
var t, e, n;
return d().wrap(function(o) {
for (;;) switch (o.prev = o.next) {
case 0:
return o.next = 1, i.readFile(c);

case 1:
return t = o.sent, e = Et.from(t).toString("base64"), n = r.SetSourceMapURL(a, "data:application/json;base64," + e), 
o.abrupt("return", globalThis.WebAssembly.compile(n));

case 2:
case "end":
return o.stop();
}
}, u);
}
function l() {
return console.log("Fixme: Cant read source map file", c, t.toString()), globalThis.WebAssembly.compile(a);
}
return d().wrap(function(f) {
for (;;) switch (f.prev = f.next) {
case 0:
return f.next = 1, n.e(187).then(n.bind(n, 74187));

case 1:
return r = f.sent.default, o = (null === (e = t.pathname.match(/:(.+)/)) || void 0 === e ? void 0 : e[1]) || t.pathname, 
f.next = 2, import("fs/".concat("promises"));

case 2:
return i = f.sent, f.next = 3, i.readFile(o);

case 3:
return a = f.sent, c = (t.toString() + ".map").replace(/file:\/\//, "").replace(/\/.:/, ""), 
f.abrupt("return", i.access(c).then((0, s.a)(d().mark(u))).catch(l));

case 4:
case "end":
return f.stop();
}
}, x);
}
function C() {
return (r = (0, s.a)(d().mark(x))).apply(this, arguments);
}
function A() {
return r.apply(this, arguments);
}
function O() {
return "undefined" != typeof process && null != process.versions && null != process.versions.node ? e() : o();
}
function P() {
var t;
return (null === (t = f.wasm) || void 0 === t ? void 0 : t.memory) || new WebAssembly.Memory({
initial: 55216
});
}
function E(t) {
function e(t) {
var n;
(0, c.a)(this, e);
var r = {
getMemory: P,
oninfo: Yt,
onerror: Xt
};
return setTimeout(function() {
n.memory = f.wasm.memory, n.syncShadow(), console.log("Rtrace initialized with memory:", (0, 
a.a)(n));
}, 100), n = Tt(this, e, [ Bt(Bt({}, t), r) ]), Object.assign(globalThis, {
rtrace: n
}), n;
}
return (0, h.a)(e, t), (0, u.a)(e);
}
function D(t, e, n, r) {
var o = w.a.quick(f.module, t), i = f.connections.find(function(t) {
return t.id === o.id;
});
i && !1 === i.outboundDisabled && f.banByController(i, e, n, r);
}
return d().wrap(function(a) {
for (;;) switch (a.prev = a.next) {
case 0:
return i = S, o = _, r = C, e = A, t = new URL(n(92198), n.b), l = O, E(v.a), f = this, 
a.next = 1, l();

case 1:
return p = a.sent, a.next = 2, g(p, {
env: {},
Controller: w.a,
World: Y,
Player: k.a,
ServerHandle: tt,
utils: {
$maxSegments: Pt.b
},
index: {
report_controller: D
}
});

case 2:
return y = a.sent, a.abrupt("return", y);

case 3:
case "end":
return a.stop();
}
}, Qt, this);
}
function Ht() {
this.ticker.start(25), this.ticker.add(this.tick);
}
function Kt() {
this.ticker.stop(), this.ticker.remove(this.tick), clearInterval(this.interval);
}
function Zt() {
if (!this.wasm) throw Error("Not initialized");
var t = new w.a(this.module, this);
return this.connections.push(t), t;
}
function Jt(t) {
t.wasm_new_controller();
}
function te(t) {
var e;
return d().wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
if ((e = this.connections.indexOf(t)) > -1 && this.connections.splice(e, 1), t.closeStack, 
0 !== t.pointer) {
n.next = 1;
break;
}
return n.abrupt("return");

case 1:
this.serverHandle.remController(t.pointer), 0 !== t.pointer && (t.$destroy(), t.destroy());

case 2:
case "end":
return n.stop();
}
}, te, this);
}
function ee(t, e, n) {
this.on_disconnect(t);
}
function ne() {
return this.connections.length > this.config.requireCaptchaForControllersAmount && -1 !== this.config.requireCaptchaForControllersAmount || this.config.requireCaptcha ? this.config.captchaType : -1;
}
function re(t, e, n) {
t[e] = n;
}
function oe(t) {
if (t) {
var e = this.settings, n = this.settings.descriptions;
for (var r in n) Object.getOwnPropertyDescriptor(n, r) && t.hasOwnProperty(r) && re(e, r, t[r]);
}
}
function ie(t, e) {
return !this.checkIsBanned(t) && !this.checkIsBanned(e);
}
function ae(t, e) {
var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "Too many failed checks", r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1, o = this.registerFail2BanTarget(rt.IP, t, n, r), i = this.registerFail2BanTarget(rt.FP, e, n, r);
return o || i;
}
function se(t, e, n, r) {
if (!e) return !1;
var o = "".concat(t, ":").concat(e), i = this.fail2ban_cache.get(o) || {
attempts: 0,
banLevel: 0
};
if (i.attempts += Math.max(1, 0 | r), i.attempts < 5) return this.fail2ban_cache.set(o, i), 
!1;
i.banLevel += 1;
var a = Math.min(6e4 * (1 << i.banLevel - 1), 36e5);
return this.banByString(t, e, a, "fail2ban: ".concat(n)), this.fail2ban_cache.set(o, {
attempts: 0,
banLevel: i.banLevel
}), !0;
}
function ce(t) {
var e = this.ban_cache.get(t);
if (e && void 0 !== e.time) {
if (e.time < Date.now() && this.pardon(t), e.time > Date.now()) return !0;
if (-1 === e.time) return !0;
}
return !1;
}
function ue(t, e, n) {
var o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
this.banByString(rt.IP, t.ip, e, n), this.banByString(rt.FP, t.fp, e, n), o && t.closeListener.apply(t, (0, 
r.a)(S.a.CHECKS_FAILED));
}
function le(t, e, n, r) {
var o = void 0 !== n ? Date.now() + n : void 0;
this.ban_cache.set(e, {
type: t,
target: e,
time: o,
reason: r
});
}
function fe() {
this.ban_cache.clear();
}
function he(t) {
this.ban_cache.delete(t);
}
var pe = function(t) {
function e() {
var t;
return (0, c.a)(this, e), (t = Tt(this, e)).config = {
fatalPingDelay: 1e4,
fatalLastActivityDelay: 6e4,
requireCaptcha: !1,
captchaType: -1,
requireCaptchaForControllersAmount: -1,
usePuzzle: !0
}, t.runtime = performance.now(), t.updateInterval = null, t.interval = null, t.ticker = new At(25), 
t.connections = [], t.averageTickTime = 0, t.ban_cache = new m.a({
max: 500,
maxSize: 5e3,
sizeCalculation: Ut,
ttl: 6e5,
allowStale: !1,
updateAgeOnGet: !1,
updateAgeOnHas: !1
}), t.fail2ban_cache = new m.a({
max: 3e3,
maxSize: 3e3,
sizeCalculation: Mt,
ttl: 12e4,
allowStale: !1,
updateAgeOnGet: !1,
updateAgeOnHas: !1
}), t.trafficCollector = new Ot.a({
interval: 5e3,
capacity: 36e3
}), t.stopwatch = new ft, t.checkCaptcha = (0, s.a)(d().mark(Wt)), t.getCaptchaPuzzle = (0, 
s.a)(d().mark(jt)), t.onAuthToken = (0, s.a)(d().mark(Nt)), t.i = 0, t.tick = function(e, n) {
t.runtime = performance.now(), t.stopwatch.begin();
var r = 1e3 * (t.settings.worldDeltaClamping ? e : n) * t.settings.worldTimeScale;
t.serverHandle.tick(t.ticker.time, t.ticker.prev_time, r);
for (var o = 0; o < t.connections.length; o++) {
var i = t.connections[o];
i.listenerClosed || 0 === i.pointer || i.protocolAssigned && (t.runtime - i.lastPing < 3e3 || (i.lastPing = t.runtime, 
i.$sendPing()));
}
t.averageTickTime = t.stopwatch.elapsed(), t.stopwatch.stop();
}, t.setPrefix("[[95mDeltArena[39m]:"), t.initPromise = t.init(), t;
}
return (0, h.a)(e, t), (0, u.a)(e, [ {
key: "init",
value: (o = (0, s.a)(d().mark($t)), function() {
return o.apply(this, arguments);
})
}, {
key: "loadAssembly",
value: (r = (0, s.a)(d().mark(Qt)), function() {
return r.apply(this, arguments);
})
}, {
key: "runTicker",
value: Ht
}, {
key: "stop",
value: Kt
}, {
key: "createConnection",
value: Zt
}, {
key: "acceptConnection",
value: Jt
}, {
key: "on_disconnect",
value: (n = (0, s.a)(d().mark(te)), function(t) {
return n.apply(this, arguments);
})
}, {
key: "onCloseConnection",
value: ee
}, {
key: "getCaptchaId",
value: ne
}, {
key: "importSettings",
value: oe
}, {
key: "verifyConnection",
value: ie
}, {
key: "registerFail2Ban",
value: ae
}, {
key: "registerFail2BanTarget",
value: se
}, {
key: "checkIsBanned",
value: ce
}, {
key: "banByController",
value: ue
}, {
key: "banByString",
value: le
}, {
key: "pardonAll",
value: fe
}, {
key: "pardon",
value: he
} ]);
var n, r, o;
}((0, y.DebuggerMixin)(y.Eventify));
},
22881(t, e, n) {
"use strict";
n.d(e, {
a: () => v
});
var r = n(95114), o = n(1389), i = n(9549), a = n(33630), s = n(95338), c = n(33637), u = n(2411), l = n(59500);
function f(t, e, n) {
return e = (0, s.a)(e), (0, a.a)(t, h() ? Reflect.construct(e, n || [], (0, s.a)(t).constructor) : e.apply(t, n));
}
function h() {
try {
var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
} catch (t) {}
return (h = function() {
return !!t;
})();
}
function p(t) {
return t.closeListener.apply(t, (0, r.a)(l.a.SERVER_EXIT));
}
function d() {
var t;
null === (t = this.server) || void 0 === t || t.connections.forEach(p), this.close();
}
var v = function(t) {
function e() {
var t;
return (0, o.a)(this, e), (t = f(this, e)).logger = new u.Debgr, t.logger.setPrefix(""), 
t;
}
return (0, c.a)(e, t), (0, i.a)(e, [ {
key: "beforeExit",
value: d
} ]);
}(u.Eventify);
},
39385(t, e, n) {
"use strict";
n.d(e, {
a: () => h
});
var r = n(1389), o = n(9549), i = n(33630), a = n(95338), s = n(33637);
function c(t, e, n) {
return e = (0, a.a)(e), (0, i.a)(t, u() ? Reflect.construct(e, n || [], (0, a.a)(t).constructor) : e.apply(t, n));
}
function u() {
try {
var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
} catch (t) {}
return (u = function() {
return !!t;
})();
}
function l() {}
function f() {}
var h = function(t) {
function e(t) {
var n;
return (0, r.a)(this, e), (n = c(this, e)).server = t, n.connections = [], n;
}
return (0, s.a)(e, t), (0, o.a)(e, [ {
key: "close",
value: l
}, {
key: "onOpen",
value: f
} ]);
}(n(2411).Debgr);
},
21140(t, e, n) {
"use strict";
n.d(e, {
a: () => _
});
var r = n(32859), o = n(95114), i = n(1389), a = n(9549), s = n(33630), c = n(95338), u = n(33637), l = n(1674), f = n.n(l), h = n(59500);
function p(t, e) {
var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
if (!n) {
if (Array.isArray(t) || (n = function(t, e) {
if (t) {
if ("string" == typeof t) return d(t, e);
var n = {}.toString.call(t).slice(8, -1);
return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? d(t, e) : void 0;
}
}(t)) || e && t && "number" == typeof t.length) {
n && (t = n);
var r = 0, o = function() {};
return {
s: o,
n: function() {
return r >= t.length ? {
done: !0
} : {
done: !1,
value: t[r++]
};
},
e: function(t) {
throw t;
},
f: o
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var i, a = !0, s = !1;
return {
s: function() {
n = n.call(t);
},
n: function() {
var t = n.next();
return a = t.done, t;
},
e: function(t) {
s = !0, i = t;
},
f: function() {
try {
a || null == n.return || n.return();
} finally {
if (s) throw i;
}
}
};
}
function d(t, e) {
(null == e || e > t.length) && (e = t.length);
for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
return r;
}
function v(t, e, n) {
return e = (0, c.a)(e), (0, s.a)(t, y() ? Reflect.construct(e, n || [], (0, c.a)(t).constructor) : e.apply(t, n));
}
function y() {
try {
var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
} catch (t) {}
return (y = function() {
return !!t;
})();
}
function m() {
var t = this;
return new Promise(function(e) {
e(void 0), t.onOpen();
});
}
function g() {
var t, e = p(this.connections);
try {
for (e.s(); !(t = e.n()).done; ) {
var n = t.value;
n.closeListener.apply(n, (0, o.a)(h.a.LISTENER_SHUTDOWN));
}
} catch (t) {
e.e(t);
} finally {
e.f();
}
console.log("js listener closed");
}
function b(t) {
var e, n, r, i, a, s;
function c(t) {
n({
data: t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength)
});
}
function u(t, e, n) {
a.onDisconnection(t, e, n), r();
}
function l() {
s.closeListener.apply(s, (0, o.a)(h.a.NORMAL));
}
function p(t) {
s.onSocketMessage(t);
}
return f().wrap(function(o) {
for (;;) switch (o.prev = o.next) {
case 0:
if (e = t.onopen, n = t.onmessage, r = t.onclose, i = t.fingerprint, a = this, s = this.server.createConnection()) {
o.next = 1;
break;
}
throw Error("Server is full or not initialized");

case 1:
return s.setIO({
send: c,
close: u
}), this.connections.push(s), s.ip = "127.0.0.1", s.fp = i, this.server.acceptConnection(s), 
e(s, {
closeSignal: l,
receiveMessage: p
}), o.abrupt("return", {
connection: s
});

case 2:
case "end":
return o.stop();
}
}, b, this);
}
function w(t) {
for (;;) switch (t.prev = t.next) {
case 0:
case "end":
return t.stop();
}
}
function k(t, e, n) {
return f().wrap(w, k);
}
function S() {}
var _ = function(t) {
function e(t) {
var n;
return (0, i.a)(this, e), (n = v(this, e, [ t ])).onDisconnection = function(t, e, r) {
t.afterCloseFunction(e, r), n.info("Disconnected (", t.ip, e, r, ")");
var o = n.connections.indexOf(t);
-1 !== o && n.connections.splice(o, 1);
}, n;
}
return (0, u.a)(e, t), (0, a.a)(e, [ {
key: "open",
value: m
}, {
key: "close",
value: g
}, {
key: "onConnectRequest",
value: (o = (0, r.a)(f().mark(b)), function(t) {
return o.apply(this, arguments);
})
}, {
key: "verifyClient",
value: (n = (0, r.a)(f().mark(k)), function(t, e, r) {
return n.apply(this, arguments);
})
}, {
key: "onOpen",
value: S
} ]);
var n, o;
}(n(39385).a);
},
82408(t, e, n) {
"use strict";
n.d(e, {
a: () => D
});
var r = n(95114), o = n(32859), i = n(1389), a = n(9549), s = n(33630), c = n(95338), u = n(33637), l = n(1674), f = n.n(l), h = n(2411), p = n(59689), d = n.n(p), v = n(59500), y = n(39385);
function m(t, e) {
var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
if (!n) {
if (Array.isArray(t) || (n = function(t, e) {
if (t) {
if ("string" == typeof t) return g(t, e);
var n = {}.toString.call(t).slice(8, -1);
return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? g(t, e) : void 0;
}
}(t)) || e && t && "number" == typeof t.length) {
n && (t = n);
var r = 0, o = function() {};
return {
s: o,
n: function() {
return r >= t.length ? {
done: !0
} : {
done: !1,
value: t[r++]
};
},
e: function(t) {
throw t;
},
f: o
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var i, a = !0, s = !1;
return {
s: function() {
n = n.call(t);
},
n: function() {
var t = n.next();
return a = t.done, t;
},
e: function(t) {
s = !0, i = t;
},
f: function() {
try {
a || null == n.return || n.return();
} finally {
if (s) throw i;
}
}
};
}
function g(t, e) {
(null == e || e > t.length) && (e = t.length);
for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
return r;
}
function b(t, e, n) {
return e = (0, c.a)(e), (0, s.a)(t, w() ? Reflect.construct(e, n || [], (0, c.a)(t).constructor) : e.apply(t, n));
}
function w() {
try {
var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
} catch (t) {}
return (w = function() {
return !!t;
})();
}
Object.assign(globalThis, {
SimplePeer: d()
});
var k = new h.WebTorrent("wss://tracker.openwebtorrent.com");
function S() {}
function _() {}
function x() {
var t = this, e = new h.MicroPeer({
info_hash: this.info_hash
}, k);
this.micropeer = e, this.log("Rtc opened", "hash://" + this.info_hash);
var n = this;
function i(e) {
var o;
function a(t) {
if (null !== e._channel && "open" === e._channel.readyState) {
var n = new Uint8Array(t, 0, t.byteLength);
e.send(n);
}
}
function s(t, r, o) {
t.setIO({
send: S,
close: _
}), e.destroy(), n.onDisconnection(t, r, o);
}
function c() {
t.onDisconnection.apply(t, [ o ].concat((0, r.a)(v.a.CLOSED_BY_RTCDATACHANNEL)));
}
return f().wrap(function(n) {
for (;;) switch (n.prev = n.next) {
case 0:
if (o = t.server.createConnection()) {
n.next = 1;
break;
}
return n.abrupt("return", console.log("Server is full"));

case 1:
o.setIO({
send: a,
close: s
}), t.connections.push(o), e.on("data", o.onSocketMessage.bind(o)), e.once("close", c), 
t.server.acceptConnection(o);

case 2:
case "end":
return n.stop();
}
}, i);
}
return e.on("connect", function() {
var t = (0, o.a)(f().mark(i));
return function(e) {
return t.apply(this, arguments);
};
}()), e.announce({}), e.socket.once("open", function() {
t.log("Webtorrent relay opened"), e.announce({
event: "started",
downloaded: 705581,
numwant: 0,
uploaded: 0,
left: void 0
});
}), e.on("announceinterval", function() {
e.announce({
event: "started",
downloaded: 705581,
numwant: 0,
uploaded: 0,
left: void 0
});
}), new Promise(function(e) {
t.onOpen(), e();
});
}
function C() {
var t, e = m(this.connections);
try {
for (e.s(); !(t = e.n()).done; ) {
var n = t.value;
n.closeListener.apply(n, (0, r.a)(v.a.LISTENER_SHUTDOWN));
}
} catch (t) {
e.e(t);
} finally {
e.f();
}
this.micropeer = null, this.log("Closed");
}
function A(t) {
var e, n, r, o, i = this;
function a(t) {
n({
data: t.buffer.slice(t.byteOffset, t.byteLength)
});
}
function s(t, e, n) {
i.onDisconnection(t, e, n), r();
}
return f().wrap(function(i) {
for (;;) switch (i.prev = i.next) {
case 0:
if (e = t.onopen, n = t.onmessage, r = t.onclose, o = this.server.createConnection()) {
i.next = 1;
break;
}
return i.abrupt("return", this.log("Server is full"));

case 1:
return o.setIO({
send: a,
close: s
}), this.connections.push(o), this.server.acceptConnection(o), e(), i.abrupt("return", o);

case 2:
case "end":
return i.stop();
}
}, A, this);
}
function O(t) {
for (;;) switch (t.prev = t.next) {
case 0:
case "end":
return t.stop();
}
}
function P() {
return f().wrap(O, P);
}
function E() {
this.log("Opened");
}
var D = function(t) {
function e(t) {
var n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0e923e47688b443cbc58";
return (0, i.a)(this, e), (n = b(this, e, [ t ])).info_hash = r, n.listenerSocket = new h.Eventify, 
n.micropeer = null, n.onDisconnection = function(t, e, r) {
t.afterCloseFunction(e, r), n.log("DISCONNECTION FROM (".concat(e, " '").concat(r, "')"));
var o = n.connections.indexOf(t);
-1 !== o && n.connections.splice(o, 1);
}, n.setPrefix("[[33mRTC Listener[39m]:"), n;
}
return (0, u.a)(e, t), (0, a.a)(e, [ {
key: "open",
value: x
}, {
key: "close",
value: C
}, {
key: "onConnectRequest",
value: (r = (0, o.a)(f().mark(A)), function(t) {
return r.apply(this, arguments);
})
}, {
key: "verifyClient",
value: (n = (0, o.a)(f().mark(P)), function() {
return n.apply(this, arguments);
})
}, {
key: "onOpen",
value: E
} ]);
var n, r;
}(y.a);
},
59500(t, e, n) {
"use strict";
n.d(e, {
a: () => r
});
var r = {
PING_TIMEOUT: [ 1001, "Ping timeout" ],
ACTIVITY_TIMEOUT: [ 1001, "Activity timeout" ],
UNEXPECTED_MESSAGE_FORMAT: [ 1007, "Unexpected message format" ],
UNEXPECTED_MESSAGE_SIZE: [ 1009, "Unexpected message size" ],
CHECKS_FAILED: [ 1008, "Checks failed" ],
CHECKS_TIMEOUT: [ 1001, "Checks timeout" ],
NORMAL: [ 1e3, "Normal Closure" ],
AMBIGUOUS_PROTOCOL: [ 1002, "Ambiguous protocol" ],
SERVER_EXIT: [ 1012, "Server exit" ],
UNEXPECTED_PROTOCOL_FAIL: [ 1002, "Unexpected protocol fail" ],
LISTENER_SHUTDOWN: [ 1001, "Listener shutdown" ],
CLOSED_BY_RTCDATACHANNEL: [ 1001, "Closed by RTCDataChannel" ],
CLOSED_BY_SERVER: [ 1e3, "Closed by server" ],
RTC_UPGRADED: [ 1010, "RTC upgraded" ],
NO_STATUS_RECEIVED: [ 1005, "No status received" ]
};
},
22271(t, e, n) {
"use strict";
n.d(e, {
a: () => a,
b: () => S
});
var r = n(1389), o = n(9549);
function i(t, e) {
this.x = t, this.y = e;
}
var a = function() {
return (0, o.a)(function t(e, n, o, i) {
(0, r.a)(this, t), this.x = 0, this.y = 0, this.w = 0, this.h = 0, this.x = e, this.y = n, 
this.w = o, this.h = i;
}, [ {
key: "setPosition",
value: i
} ]);
}(), s = function(t, e) {
return t.x - t.w <= e.x + e.w && t.x + t.w >= e.x - e.w && t.y - t.h <= e.y + e.h && t.y + t.h >= e.y - e.h;
}, c = function(t, e) {
return t.x - t.w >= e.x + e.w && t.x + t.w <= e.x - e.w && t.y - t.h >= e.y + e.h && t.y + t.h <= e.y - e.h;
}, u = function(t, e) {
return {
t: t.y - t.h < e.y || t.y + t.h < e.y,
b: t.y - t.h > e.y || t.y + t.h > e.y,
l: t.x - t.w < e.x || t.x + t.w < e.x,
r: t.x - t.w > e.x || t.x + t.w > e.x
};
}, l = function(t, e) {
return {
t: t.y - t.h < e.y && t.y + t.h < e.y,
b: t.y - t.h > e.y && t.y + t.h > e.y,
l: t.x - t.w < e.x && t.x + t.w < e.x,
r: t.x - t.w > e.x && t.x + t.w > e.x
};
};
function f() {
for (var t = 0, e = this.items.length; t < e; t++) delete this.items[t].__root;
if (this.items.length = 0, this.hasSplit) for (var n = 0; n < 4; n++) this.branches[n].destroy();
}
function h(t) {
for (var e = this; e.hasSplit; ) {
var n = e.getQuadrant(t.range);
if (-1 === n) break;
e = e.branches[n];
}
t.__root = e, e.items.push(t), e.split();
}
function p(t) {
for (var e = t.__root, n = t.__root; n.root && (n = n.root, !c(n.range, t.range)); ) ;
for (;n.hasSplit; ) {
var r = n.getQuadrant(t.range);
if (-1 === r) break;
n = n.branches[r];
}
e !== n && (e.items.splice(e.items.indexOf(t), 1), n.items.push(t), t.__root = n, 
e.merge(), n.split());
}
function d(t) {
var e = t.__root;
e.items.splice(e.items.indexOf(t), 1), delete t.__root, e.merge();
}
function v() {
for (var t = this; null != t; ) if (t.hasSplit) {
for (var e, n = 0; n < 4; n++) if ((e = t.branches[n]).hasSplit || e.items.length > 0) return;
t.hasSplit = !1, delete t.branches;
} else t = t.root;
}
function y(t, e) {
for (var n, r = 0, o = this.items.length; r < o; r++) s(t, (n = this.items[r]).range) && e(n);
if (this.hasSplit) {
var i = u(t, this.range);
i.t && (i.l && this.branches[0].search(t, e), i.r && this.branches[1].search(t, e)), 
i.b && (i.l && this.branches[2].search(t, e), i.r && this.branches[3].search(t, e));
}
}
function m(t, e) {
for (var n, r = 0, o = this.items.length; r < o; r++) if (s(t, (n = this.items[r]).range) && (!e || e(n))) return !0;
if (!this.hasSplit) return !1;
var i = u(t, this.range);
if (i.t) {
if (i.l && this.branches[0].containsAny(t, e)) return !0;
if (i.r && this.branches[1].containsAny(t, e)) return !0;
}
if (i.b) {
if (i.l && this.branches[2].containsAny(t, e)) return !0;
if (i.r && this.branches[3].containsAny(t, e)) return !0;
}
return !1;
}
function g() {
return this.hasSplit ? this.items.length + this.branches[0].getItemCount() + this.branches[1].getItemCount() + this.branches[2].getItemCount() + this.branches[3].getItemCount() : this.items.length;
}
function b() {
return this.hasSplit ? 1 + this.branches[0].getBranchCount() + this.branches[1].getBranchCount() + this.branches[2].getBranchCount() + this.branches[3].getBranchCount() : 1;
}
function w() {
var t = "items ".concat(this.items.length, "/").concat(this.maxItems, "/").concat(this.getItemCount(), " level ").concat(this.level, " x ").concat(this.range.x, " y ").concat(this.range.y, " w ").concat(this.range.w, " h ").concat(this.range.h, "\n");
return this.hasSplit && (t += new Array(1 + 2 * this.level).join(" ") + this.branches[0].debugStr(), 
t += new Array(1 + 2 * this.level).join(" ") + this.branches[1].debugStr(), t += new Array(1 + 2 * this.level).join(" ") + this.branches[2].debugStr(), 
t += new Array(1 + 2 * this.level).join(" ") + this.branches[3].debugStr()), t;
}
function k(t) {
var e = l(t, this.range);
if (e.t) {
if (e.l) return 0;
if (e.r) return 1;
}
if (e.b) {
if (e.l) return 2;
if (e.r) return 3;
}
return -1;
}
const S = function() {
function t(e, n, o, i) {
(0, r.a)(this, t), i && (this.root = i), this.level = i ? i.level + 1 : 1, this.maxLevel = n, 
this.maxItems = o, this.range = e, this.items = [], this.hasSplit = !1;
}
return (0, o.a)(t, [ {
key: "destroy",
value: f
}, {
key: "insert",
value: h
}, {
key: "update",
value: p
}, {
key: "remove",
value: d
}, {
key: "split",
value: function() {
if (!(this.hasSplit || this.level > this.maxLevel || this.items.length < this.maxItems)) {
this.hasSplit = !0;
var e = this.range.x, n = this.range.y, r = this.range.w / 2, o = this.range.h / 2;
this.branches = [ new t({
x: e - r,
y: n - o,
w: r,
h: o
}, this.maxLevel, this.maxItems, this), new t({
x: e + r,
y: n - o,
w: r,
h: o
}, this.maxLevel, this.maxItems, this), new t({
x: e - r,
y: n + o,
w: r,
h: o
}, this.maxLevel, this.maxItems, this), new t({
x: e + r,
y: n + o,
w: r,
h: o
}, this.maxLevel, this.maxItems, this) ];
for (var i, a = 0, s = this.items.length; a < s; a++) -1 !== (i = this.getQuadrant(this.items[a].range)) && (delete this.items[a].__root, 
this.branches[i].insert(this.items[a]), this.items.splice(a, 1), a--, s--);
}
}
}, {
key: "merge",
value: v
}, {
key: "search",
value: y
}, {
key: "containsAny",
value: m
}, {
key: "getItemCount",
value: g
}, {
key: "getBranchCount",
value: b
}, {
key: "debugStr",
value: w
}, {
key: "getQuadrant",
value: k
} ]);
}();
},
90512(t, e, n) {
"use strict";
n.d(e, {
a: () => P
});
var r = n(33630), o = n(95338), i = n(33637), a = n(1389), s = n(9549), c = n(2411);
function u(t, e, n) {
return e = (0, o.a)(e), (0, r.a)(t, l() ? Reflect.construct(e, n || [], (0, o.a)(t).constructor) : e.apply(t, n));
}
function l() {
try {
var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
} catch (t) {}
return (l = function() {
return !!t;
})();
}
var f, h = function(t, e, n, r) {
if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
if ("function" == typeof e ? t !== e || !r : !e.has(t)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
return "m" === n ? r : "a" === n ? r.call(t) : r ? r.value : e.get(t);
}, p = function(t, e, n, r, o) {
if ("m" === r) throw new TypeError("Private method is not writable");
if ("a" === r && !o) throw new TypeError("Private accessor was defined without a setter");
if ("function" == typeof e ? t !== e || !o : !e.has(t)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
return "a" === r ? o.call(t, n) : o ? o.value = n : e.set(t, n), n;
}, d = function(t, e) {
return (t % e + e) % e;
};
function v() {
return h(this, f, "f");
}
function y(t) {
if (t < 0) throw new Error("Size must be greater than 0");
if (t > this.capacity) throw new Error("Size must be less than capacity");
p(this, f, t, "f");
}
function m() {
this.size = Math.min(this.size + 1, this.capacity);
}
function g() {
this.index = d(this.index + 1, this.capacity);
}
function b(t) {
if (t >= this.tracks) throw new Error("Track ".concat(t, " is out of range"));
}
function w(t, e) {
this.checkTrackIndex(t);
var n = d(e, this.size);
return this.data[n * this.tracks + t];
}
function k(t, e, n) {
this.checkTrackIndex(t);
var r = d(e, this.size);
this.data[r * this.tracks + t] = n;
}
var S = function() {
return (0, s.a)(function t(e, n) {
if ((0, a.a)(this, t), f.set(this, 0), e < 1) throw new Error("Tracks count must be greater than 0");
if (n < 1) throw new Error("Capacity must be greater than 0");
this.tracks = e, this.capacity = n, this.data = new Uint32Array(e * n), this.index = 0;
}, [ {
key: "size",
get: v,
set: y
}, {
key: "growSize",
value: m
}, {
key: "moveIndex",
value: g
}, {
key: "checkTrackIndex",
value: b
}, {
key: "getDataByTrack",
value: w
}, {
key: "setDataByTrack",
value: k
} ]);
}();
function _(t) {
this._totals.setDataByTrack(1, 0, this._totals.getDataByTrack(1, 0) + t);
}
function x(t) {
this._totals.setDataByTrack(2, 0, this._totals.getDataByTrack(2, 0) + t);
}
function C() {
this._data.growSize(), this._data.setDataByTrack(0, this._data.index, Date.now() / 1e3);
for (var t = 1; this.tracks > t; t++) {
var e = this._totals.getDataByTrack(t, 0) - this._totals.getDataByTrack(t, 1);
this._data.setDataByTrack(t, this._data.index, e), this._totals.setDataByTrack(t, 1, this._totals.getDataByTrack(t, 0));
}
var n = this._data.data.subarray(this._data.index * this._data.tracks, this._data.index * this._data.tracks + this._data.tracks);
this.emit("update", n), this._data.moveIndex();
}
function A() {
var t = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.min(this._data.capacity, this._data.size);
if (n = Math.min(n, this._data.capacity, this._data.size), 0 == e) {
for (var r = new Uint32Array(n * this._data.tracks), o = n; o--; ) for (var i = 0; this._data.tracks > i; i++) r[o * this._data.tracks + i] = this._data.getDataByTrack(i, this._data.index - o - 1);
return r;
}
if (1 == e) {
for (var a = [], s = function() {
var e = d(t._data.index - c - 1, t._data.capacity), n = Array.from({
length: t._data.tracks
}, function(n, r) {
return t._data.getDataByTrack(r, e);
});
a.push(n);
}, c = n; c--; ) s();
return a;
}
return [];
}
function O() {
clearInterval(this.intervalId), this.unlisten();
}
f = new WeakMap;
var P = function(t) {
function e(t) {
var n, r = t.interval, o = void 0 === r ? 6e4 : r, i = t.capacity, s = void 0 === i ? 1440 : i;
return (0, a.a)(this, e), (n = u(this, e)).struct = [ 0, 1, 2 ], n.tracks = n.struct.length, 
n.interval = o, n.intervalId = null, n.interval > 0 && (n.intervalId = setInterval(n.putData.bind(n), n.interval)), 
n._totals = new S(n.tracks, 2), n._totals.size = 2, n._data = new S(n.tracks, s), 
n;
}
return (0, i.a)(e, t), (0, s.a)(e, [ {
key: "incrementRecv",
value: _
}, {
key: "incrementSend",
value: x
}, {
key: "putData",
value: C
}, {
key: "getData",
value: A
}, {
key: "destroy",
value: O
} ]);
}(c.Eventify);
},
3901(t, e, n) {
"use strict";
n.d(e, {
a: () => d
});
var r = n(32859), o = n(23067), i = n(95114), a = n(75316), s = n(1674), c = n.n(s);
function u(t, e) {
var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
if (!n) {
if (Array.isArray(t) || (n = function(t, e) {
if (t) {
if ("string" == typeof t) return l(t, e);
var n = {}.toString.call(t).slice(8, -1);
return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(t, e) : void 0;
}
}(t)) || e && t && "number" == typeof t.length) {
n && (t = n);
var r = 0, o = function() {};
return {
s: o,
n: function() {
return r >= t.length ? {
done: !0
} : {
done: !1,
value: t[r++]
};
},
e: function(t) {
throw t;
},
f: o
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var i, a = !0, s = !1;
return {
s: function() {
n = n.call(t);
},
n: function() {
var t = n.next();
return a = t.done, t;
},
e: function(t) {
s = !0, i = t;
},
f: function() {
try {
a || null == n.return || n.return();
} finally {
if (s) throw i;
}
}
};
}
function l(t, e) {
(null == e || e > t.length) && (e = t.length);
for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
return r;
}
function f(t, e) {
var n = Object.keys(t);
if (Object.getOwnPropertySymbols) {
var r = Object.getOwnPropertySymbols(t);
e && (r = r.filter(function(e) {
return Object.getOwnPropertyDescriptor(t, e).enumerable;
})), n.push.apply(n, r);
}
return n;
}
function h(t) {
for (var e = 1; e < arguments.length; e++) {
var n = null != arguments[e] ? arguments[e] : {};
e % 2 ? f(Object(n), !0).forEach(function(e) {
(0, o.a)(t, e, n[e]);
}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach(function(e) {
Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
});
}
return t;
}
function p(t, e) {
if (Array.isArray(e) || "object" !== (0, a.a)(e) || null === e) return e;
for (var n = Array.isArray(t) ? (0, i.a)(t) : h({}, t), r = 0, o = Object.keys(e); r < o.length; r++) {
var s = o[r], c = e[s], u = n[s];
c && "object" === (0, a.a)(c) && !Array.isArray(c) && u && "object" === (0, a.a)(u) && !Array.isArray(u) ? n[s] = p(u, c) : n[s] = c;
}
return n;
}
function d(t, e) {
return y.apply(this, arguments);
}
function v(t, e) {
var n, o, i, a;
function s(t) {
var r, i, a, l, f, d, v, y, m, g;
return c().wrap(function(s) {
for (;;) switch (s.prev = s.next) {
case 0:
if (r = h({}, t), i = r.$extends, delete r.$extends, a = {}, !i) {
s.next = 10;
break;
}
l = Array.isArray(i) ? i : [ i ], f = u(l), s.prev = 1, f.s();

case 2:
if ((d = f.n()).done) {
s.next = 7;
break;
}
if (v = d.value, !n.has(v)) {
s.next = 3;
break;
}
throw new Error("Circular $extends detected: ".concat(v));

case 3:
return n.add(v), s.next = 4, e(v);

case 4:
return y = s.sent, s.next = 5, o(y);

case 5:
m = s.sent, a = p(a, m), n.delete(v);

case 6:
s.next = 2;
break;

case 7:
s.next = 9;
break;

case 8:
s.prev = 8, g = s.catch(1), f.e(g);

case 9:
return s.prev = 9, f.f(), s.finish(9);

case 10:
return s.abrupt("return", p(a, r));

case 11:
case "end":
return s.stop();
}
}, s, null, [ [ 1, 8, 9, 10 ] ]);
}
function l() {
return (i = (0, r.a)(c().mark(s))).apply(this, arguments);
}
function f(t) {
return i.apply(this, arguments);
}
return c().wrap(function(r) {
for (;;) switch (r.prev = r.next) {
case 0:
return i = l, o = f, n = new Set, r.next = 1, e(t);

case 1:
return a = r.sent, r.abrupt("return", o(a));

case 2:
case "end":
return r.stop();
}
}, v);
}
function y() {
return (y = (0, r.a)(c().mark(v))).apply(this, arguments);
}
},
77891(t, e, n) {
"use strict";
},
79781() {},
46259(t, e, n) {
"use strict";
n.d(e, {
a: () => D,
b: () => E
});
var r = n(95114), o = n(1389), i = n(9549), a = n(33630), s = n(95338), c = n(33637);
function u(t, e, n) {
return e = (0, s.a)(e), (0, a.a)(t, l() ? Reflect.construct(e, n || [], (0, s.a)(t).constructor) : e.apply(t, n));
}
function l() {
try {
var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
} catch (t) {}
return (l = function() {
return !!t;
})();
}
function f() {}
function h() {}
function p() {
this.bindings = {};
}
function d() {
return this.resetBindings(), this._useProxy;
}
function v(t) {
this.resetBindings(), this._useProxy = t;
}
function y() {
this.resetBindings();
for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
this.prefix = e;
}
function m(t) {
var e, n, o = this;
if (!this.isLogging) return this.dummy;
var i, a, s = this.timeLogging ? (new Date).toLocaleTimeString(void 0, {
hour: "numeric",
minute: "numeric",
second: "numeric",
hourCycle: "h23"
}) : null;
return s && (this.bindings[t] = void 0), this.useProxy ? this.bindings[t] || (this.bindings[t] = new Proxy(console[t].bind(console[t]), {
apply: function(e, n, i) {
return o.proxyPrefix ? o.proxy(t, [].concat((0, r.a)(o.prefix), (0, r.a)(i))) : o.proxy(t, i), 
Reflect.apply(e, n, i);
}
})) : (null !== (e = (n = this.bindings)[t]) && void 0 !== e || (n[t] = this.timeLogging ? (i = console[t]).bind.apply(i, [ console ].concat((0, 
r.a)(this.prefix), [ s ])) : (a = console[t]).bind.apply(a, [ console ].concat((0, 
r.a)(this.prefix)))), this.bindings[t]);
}
function g() {
return this.getBindinng("info");
}
function b() {
return this.getBindinng("log");
}
function w() {
return this.getBindinng("warn");
}
function k() {
return this.getBindinng("warn");
}
function S() {
return this.getBindinng("debug");
}
function _() {
return this.getBindinng("error");
}
function x() {
return this.getBindinng("error");
}
function C() {
return this.getBindinng("log");
}
function A() {
return this.getBindinng("trace");
}
function O() {
return this.getBindinng("groupCollapsed");
}
function P(t) {
function e() {
var t;
return (0, o.a)(this, e), (t = u(this, e, arguments)).bindings = {}, t.prefix = [], 
t.proxyPrefix = !1, t.timeLogging = !1, t._useProxy = !1, t.isLogging = !0, t.proxy = f, 
t;
}
return (0, c.a)(e, t), (0, i.a)(e, [ {
key: "dummy",
value: h
}, {
key: "resetBindings",
value: p
}, {
key: "useProxy",
get: d,
set: v
}, {
key: "setPrefix",
value: y
}, {
key: "getBindinng",
value: m
}, {
key: "info",
get: g
}, {
key: "log",
get: b
}, {
key: "warn",
get: w
}, {
key: "access",
get: k
}, {
key: "debug",
get: S
}, {
key: "error",
get: _
}, {
key: "fatal",
get: x
}, {
key: "print",
get: C
}, {
key: "trace",
get: A
}, {
key: "groupCollapsed",
get: O
} ]);
}
function E(t) {
return P(t);
}
var D = function(t) {
function e() {
return (0, o.a)(this, e), u(this, e, arguments);
}
return (0, c.a)(e, t), (0, i.a)(e);
}(E((0, i.a)(function t() {
(0, o.a)(this, t);
})));
},
12998(t, e, n) {
"use strict";
n.d(e, {
a: () => r
});
var r = function(t, e) {
var n, r;
return function() {
for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
var s = n;
n = Date.now(), s && n - s <= e && r && clearTimeout(r), r = setTimeout(function() {
return t.apply(void 0, i);
}, e);
};
};
},
75176(t, e, n) {
"use strict";
n.d(e, {
a: () => l
});
var r, o = n(1389), i = n(9549), a = d;
function s(t, e) {
t -= 292;
var n = c(), r = n[t];
if (void 0 === s.mYcQbM) {
s.gSIAxn = function(t) {
for (var e, n, r = "", o = "", i = 0, a = 0; n = t.charAt(a++); ~n && (e = i % 4 ? 64 * e + n : n, 
i++ % 4) ? r += String.fromCharCode(255 & e >> (-2 * i & 6)) : 0) n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(n);
for (var s = 0, c = r.length; s < c; s++) o += "%" + ("00" + r.charCodeAt(s).toString(16)).slice(-2);
return decodeURIComponent(o);
}, s.PvcFCb = {}, s.mYcQbM = !0;
}
var o = t + n[0], i = s.PvcFCb[o];
return i ? r = i : (r = s.gSIAxn(r), s.PvcFCb[o] = r), r;
}
function c() {
var t = [ "LPbaA", "mtbVB1bttMK", "i8kYBCo3WRO", "DvLPyKK", "OErba", "WP7dKXbBW7ucm8kRdNu", "twvZC2fNzq", "decode", "22VjJQVZ", "pLDNfCks", "umkFWQ7cVftdLmoiWP7cIulcKqpcPa", "W5JdO2PFDbJcR8oRkLxdRCky", "stringify", "W40UgSoZW4q", "dSNLq", "cbOVW5BdLmkZgSoqW5C0jqZdHq", "Zuxxr", "mtu4nte4merrvMDSyG", "FxKS", "parse", "tLzYDgm", "iwRdU8k2W6xcG8kEW74SFq", "AezyuuW", "ASkrig/dJq", "length", "tIHZWRbwW51gW4G", "YUxpa", "GTmzV", "W4VcGLSkWRfADSkAiLNdImoNW4O", "wNfUzKK", "D2fPDezVCKvUza", "W7RdJv7cNCku", "x2xdKmovW4a", "uYibI", "WP/cLaWAna", "sSo9uSoitq", "set", "FXytI", "mhW0Fdn8mNWX", "pHDkWOddQG4KiWJdLKFdMq", "EqFfe", "UPAlY", "vwTnAvu", "2xHdUWi", "A3HhBuq", "pmkZW6etCq", "C8kbw8oRwCkh", "W5ddU2/cVSkp", "s8oUWQb7oSotWPmcWQKG", "rTGwq", "zgvZy3jPChrPBW", "576138WymJUS", "VYifv", "699920oRXLKs", "WPmQdCoUtW", "FwYLj", "WPZdOcLUW7i", "WRxdH8oLW61G", "omozWRymW54", "jcOen", "q8kXWOjjWP7dK8orWRpdQIC", "AML3swe", "lMCAV", "mtq4mJyXnuvfq09ova", "CgfYC2u", "decodeSign", "Dwb7d3m", "4|2|5|0|1|", "xJAPL", "z0usW5BcRv4", "C1j5sKm", "CWRgi", "wgrvChC", "slice", "WOKJWRxdMdBcKH/dPCk6WO3dS8kyWOC", "wSoNWRH3aG", "W5vQW7lcQMS", "WOVdUXfHW4S", "WQLKWQWOftDoWPxcSmoMW7NdSxi", "vhPUywW", "y0TUC2O", "ZLOnz", "DYddL8oAFG", "2521323CkaUXd", "crsDg", "mxW1Fdr8m3WYFa", "dSopW7ldQHpcJG", "C3bSAxq", "Bmkbqq", "3lggwbr", "tfear", "WO18W6xcSI4", "vfDrAeS", "jmoLF8k1W6G", "zw5JB2rLu2LNBG", "WQhdGCkUWRdcLJhdUq00W4m", "B8oiwCoivG", "me9lWPzC", "zCohWRz/nW", "howSn", "WOVdS8kNWOhcIa", "encode", "wvv4Cge", "codes", "rNDztgO", "F31wo8keWRldTG", "C0X4zfa", "AfFcZ", "nJK5otiWB1jyteTZ", "tNSqt", "WP7dMSo+W7X/", "CLvfExK", "x8oXxSoiyG", "BgvUz3rO", "WOCpjCoQEW", "CxDlDgW", "mZK1ndqZre1rsMLv", "WQpdO8kTWOxcTW", "B2HVzuq", "hayWe" ];
return (c = function() {
return t;
})();
}
function u(t) {
for (var e = 367, n = 394, r = "bF[!", o = 332, i = 362, a = "wYD&", c = 296, u = 406, l = "HsHX", v = f, y = d, m = s, g = {
FXytI: m(295) + "0",
lMCAV: function(t, e) {
return t(e);
},
AxGvA: function(t, e) {
return t < e;
},
nxvBm: function(t, e) {
return t !== e;
}
}, b = g[y(e)][m(297)]("|"), w = 0; ;) {
switch (b[w++]) {
case "0":
return S;

case "1":
var k = 1;
continue;

case "2":
var S = JSON[m(n)](_);
continue;

case "3":
var _ = (new TextDecoder)[y(337)](g[y(392)](p, g[v(324, r)](h, t[v(o, "To]m")](k, x))));
continue;

case "4":
for (x = k; g[v(i, a)](x, t[v(c, "EhVr")]) && g[v(u, l)](t[x], 0); x++) ;
continue;

case "5":
var x = k;
continue;
}
break;
}
}
!function(t) {
for (var e = 326, n = 315, r = "9G18", o = ")Orx", i = 381, a = 293, c = 408, u = 393, l = 338, h = d, p = f, v = s, y = t(); ;) try {
if (198535 === parseInt(v(e)) / 1 * (parseInt(p(n, r)) / 2) + -parseInt(h(299)) / 3 * (-parseInt(v(347)) / 4) + -parseInt(p(355, o)) / 5 * (parseInt(h(i)) / 6) + -parseInt(h(a)) / 7 + parseInt(p(c, "D]S!")) / 8 + -parseInt(v(u)) / 9 + -parseInt(v(318)) / 10 * (parseInt(h(l)) / 11)) break;
y.push(y.shift());
} catch (t) {
y.push(y.shift());
}
}(c), function(t) {
var e = 351, n = 333, r = "&F7&", o = "VL%Y", i = 343, a = 391, c = d, u = s, l = f, h = {};
h[l(339, "9G18")] = l(e, "8Yss"), h[u(n)] = l(335, "Bm6o") + "n", h[l(375, r)] = l(305, "2$VK") + "e";
var p = h;
t[t[p[u(400)]] = 200] = p[l(303, o)], t[t[p[l(i, "U[!#")]] = 201] = p[c(363)], t[t[p[u(a)]] = 202] = p[l(353, "^JnV")];
}(r || (r = {}));
var l = function() {
var t = 317, e = 390, n = "YjKm", r = "9G18", a = 395, c = "2$VK", l = 334, v = 344, y = "NmLU", m = 371, g = "S7Fs", b = 366, w = 354, k = 313, S = 380, _ = 385, x = 379, C = 346, A = 298, O = 387, P = 297, E = 337, D = "tp7N", B = 301, T = 302, I = 411, U = 307, M = s, L = f, W = d, R = {
OWWIZ: function(t, e, n) {
return t(e, n);
},
GTmzV: W(397) + "3",
LWdaW: function(t, e) {
return t(e);
},
NVrtc: function(t, e) {
return t(e);
},
ZLOnz: function(t, e) {
return t < e;
},
XdUpw: function(t, e) {
return t !== e;
},
ZqnfI: L(320, "pFL9"),
UPAlY: W(t),
EqFfe: L(e, n) + L(348, r),
FwYLj: function(t, e) {
return t + e;
},
rTGwq: function(t, e) {
return t(e);
},
Zuxxr: function(t, e) {
return t(e);
},
nCpAL: function(t, e, n, r) {
return t(e, n, r);
},
OErba: M(304) + "al",
dSNLq: W(a) + "al"
};
function j() {
var t = M;
R[L(U, ")Orx")](o.a, this, j), this[t(360) + t(336)] = !1;
}
return R[L(327, c)](i.a, j, null, [ {
key: R[W(l)],
value: function(t) {
var e = 402, n = 350, r = "iEUN", o = M, i = L, a = W, c = {
EGVIj: R[a(357)],
YLbUt: function(t, e) {
return R[f(292, r)](t, e);
},
hayWe: function(t, e) {
return R[s(n)](t, e);
},
lQDgI: function(t, e) {
return R[a(I)](t, e);
},
TWQhK: function(t, n) {
return R[s(e)](t, n);
}
};
if (R[i(361, y)](R[o(359)], R[a(m)])) for (var u = R[a(370)][i(405, g)]("|"), l = 0; ;) {
switch (u[l++]) {
case "0":
v[a(b)](U, d[a(w)]);
continue;

case "1":
var d = [ j[a(k)][o(S) + "n"] ];
continue;

case "2":
return v;

case "3":
var v = new Uint8Array(R[o(314)](R[a(_)](d[a(w)], U[i(378, g)]), 1));
continue;

case "4":
R[a(x)](h, R[a(C)](p, U));
continue;

case "5":
var U = (new TextEncoder)[a(311)](JSON[a(342)](t));
continue;

case "6":
v[i(A, "]cr%")](d, 0);
continue;
}
break;
} else for (var z = c[i(O, "pFL9")][o(P)]("|"), N = 0; ;) {
switch (z[N++]) {
case "0":
var F = (new _0x34e475)[a(E)](ELluJe[i(388, D)](_0x132550, ELluJe[a(329)](_0x17a71c, _0x28d772[a(403)](G, V))));
continue;

case "1":
var $ = _0x5d33ae[a(349)](F);
continue;

case "2":
var V = G;
continue;

case "3":
return $;

case "4":
var G = 1;
continue;

case "5":
for (V = G; ELluJe[i(B, "Gg&$")](V, _0x17b448[a(354)]) && ELluJe[o(T)](_0x18933e[V], 0); V++) ;
continue;
}
break;
}
}
}, {
key: R[W(v)],
value: u
} ]);
}();
function f(t, e) {
t -= 292;
var n = c(), r = n[t];
if (void 0 === f.pSQckQ) {
f.JqnDxS = function(t, e) {
var n, r, o = [], i = 0, a = "";
for (t = function(t) {
for (var e, n, r = "", o = "", i = 0, a = 0; n = t.charAt(a++); ~n && (e = i % 4 ? 64 * e + n : n, 
i++ % 4) ? r += String.fromCharCode(255 & e >> (-2 * i & 6)) : 0) n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=".indexOf(n);
for (var s = 0, c = r.length; s < c; s++) o += "%" + ("00" + r.charCodeAt(s).toString(16)).slice(-2);
return decodeURIComponent(o);
}(t), r = 0; r < 256; r++) o[r] = r;
for (r = 0; r < 256; r++) i = (i + o[r] + e.charCodeAt(r % e.length)) % 256, n = o[r], 
o[r] = o[i], o[i] = n;
r = 0, i = 0;
for (var s = 0; s < t.length; s++) i = (i + o[r = (r + 1) % 256]) % 256, n = o[r], 
o[r] = o[i], o[i] = n, a += String.fromCharCode(t.charCodeAt(s) ^ o[(o[r] + o[i]) % 256]);
return a;
}, f.SOEtzi = {}, f.pSQckQ = !0;
}
var o = t + n[0], i = f.SOEtzi[o];
return i ? r = i : (void 0 === f.ZiQOzr && (f.ZiQOzr = !0), r = f.JqnDxS(r, e), 
f.SOEtzi[o] = r), r;
}
function h(t) {
var e = 372, n = 323, r = 410, o = "Bm6o", i = 300, c = "NmLU", u = 360, l = a, h = s, p = f, d = {
Tznal: function(t, e, n) {
return t(e, n);
},
hFXQL: function(t, e) {
return t > e;
},
cKnsj: function(t, e) {
return t !== e;
},
LPbaA: function(t, e) {
return t > e;
},
fVJVu: function(t, e) {
return t !== e;
},
kxGmD: function(t, e) {
return t - e;
},
ohoeD: function(t, e) {
return t - e;
},
crsDg: function(t, e) {
return t < e;
},
tfear: function(t, e) {
return t !== e;
},
jcOen: p(306, "Rw4y"),
rRdSl: h(e)
}, v = d[h(352)](arguments[h(n)], 1) && d[h(r)](arguments[1], void 0) ? arguments[1] : 0, y = d[l(330)](arguments[p(399, "0r4l")], 2) && d[p(386, o)](arguments[2], void 0) ? arguments[2] : t[p(376, "]cr%")];
d[p(308, "S7Fs")](d[h(374)](y, v), t[h(323)]) && (y = d[h(328)](t[l(354)], v));
for (var m = v; d[l(294)](m, y); m++) d[l(i)](d[l(389)], d[p(377, c)]) ? t[m] ^= 128 : (vbIvFy[h(409)](_0x37a091, this, _0x593e7f), 
this[h(u) + h(336)] = !1);
return t;
}
function p(t) {
for (var e = 325, n = 297, r = 365, o = "Rw4y", i = 321, c = 384, u = "bF[!", l = "2$VK", h = 309, p = 323, d = 401, y = 316, m = 354, g = a, b = f, w = s, k = {
qwKtl: w(368),
mFMPc: function(t, e) {
return t > e;
},
rUEyy: function(t, e) {
return t !== e;
},
xhkEb: function(t, e) {
return t < e;
},
VYifv: function(t, e) {
return t(e);
},
FSzEs: function(t, e) {
return t > e;
},
howSn: function(t, e) {
return t - e;
},
CWRgi: function(t, e) {
return t > e;
},
sLxdP: function(t, e) {
return t !== e;
}
}, S = k[w(e)][w(n)]("|"), _ = 0; ;) {
switch (S[_++]) {
case "0":
var x = k[b(r, o)](arguments[g(354)], 1) && k[w(i)](arguments[1], void 0) ? arguments[1] : 0;
continue;

case "1":
return t;

case "2":
for (var C = x; k[b(c, u)](C, A); C++) t[C] = k[g(382)](v, t[C]);
continue;

case "3":
k[b(310, l)](k[g(h)](A, x), t[w(p)]) && (A = k[g(h)](t[w(323)], x));
continue;

case "4":
var A = k[g(d)](arguments[w(323)], 2) && k[w(y)](arguments[2], void 0) ? arguments[2] : t[g(m)];
continue;
}
break;
}
}
function d(t, e) {
return t -= 292, c()[t];
}
l[a(313)] = r;
var v = function(t) {
var e = 322, n = 407, r = "cQce", o = 396, i = 312, c = s, u = f, l = a, h = {};
h[l(319)] = function(t, e) {
return t & e;
}, h[u(e, "Rw4y")] = function(t, e) {
return t | e;
}, h[u(n, "Bm6o")] = function(t, e) {
return t << e;
}, h[l(356)] = function(t, e) {
return t >> e;
};
var p = h;
return p[u(364, r)](p[l(398)](p[u(o, "dzwq")](t, 4), p[c(i)](t, 4)), 255);
};
},
92198(t, e, n) {
"use strict";
t.exports = n.p + "d05da5171d1b51af855d.wasm";
},
92883(t, e, n) {
"use strict";
t.exports = n.p + "a7ba3379af9b40f98113.json";
},
42333(t, e, n) {
"use strict";
t.exports = n.p + "ea7ebfb1289dcc4d1c11.json";
},
55314(t, e, n) {
"use strict";
t.exports = n.p + "41036af50e20cb0fd9c7.json";
},
89116(t, e, n) {
"use strict";
t.exports = n.p + "d91bec1ea2c46743cc45.json";
},
46522(t, e, n) {
"use strict";
t.exports = n.p + "f7336c39a4891d02f7c8.json";
},
95974(t, e, n) {
"use strict";
t.exports = n.p + "8e9287e87fcec2cd9d34.json";
},
76542(t, e, n) {
"use strict";
t.exports = n.p + "216efd3959c6f6b0e229.json";
},
58593(t, e, n) {
"use strict";
t.exports = n.p + "248a3b6c1bdfbf47e631.json";
},
81101(t, e, n) {
"use strict";
t.exports = n.p + "7aa8212d93792937f62f.json";
},
50496(t, e, n) {
"use strict";
t.exports = n.p + "8bae353ac12fd3cdf8e5.json";
},
65277(t, e, n) {
"use strict";
t.exports = n.p + "01ce501ae5df6550f292.json";
},
37521(t, e, n) {
"use strict";
t.exports = n.p + "9556031ad23aff991008.json";
},
50508(t, e, n) {
"use strict";
t.exports = n.p + "6ce3448b4d372cec2815.json";
},
98408() {},
14098() {}
} ]);