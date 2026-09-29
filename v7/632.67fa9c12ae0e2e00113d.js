"use strict";

(self.webpackChunk_delta_client = self.webpackChunk_delta_client || []).push([ [ 632 ], {
67632(e, t, i) {
i.r(t), i.d(t, {
default: () => Pi
});
var s = i(17939), r = i(12429), n = i(5223), a = i(51091), h = i(46788), l = i(59296), o = i(11495), u = i(13632), f = i.n(u), c = i(2411), d = i(87590), v = i(73299), b = i(40337), _ = i(77210), g = i(25196);
function x(e, t) {
var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
if (!i) {
if (Array.isArray(e) || (i = function(e, t) {
if (e) {
if ("string" == typeof e) return m(e, t);
var i = {}.toString.call(e).slice(8, -1);
return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? m(e, t) : void 0;
}
}(e)) || t && e && "number" == typeof e.length) {
i && (e = i);
var s = 0, r = function() {};
return {
s: r,
n: function() {
return s >= e.length ? {
done: !0
} : {
done: !1,
value: e[s++]
};
},
e: function(e) {
throw e;
},
f: r
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var n, a = !0, h = !1;
return {
s: function() {
i = i.call(e);
},
n: function() {
var e = i.next();
return a = e.done, e;
},
e: function(e) {
h = !0, n = e;
},
f: function() {
try {
a || null == i.return || i.return();
} finally {
if (h) throw n;
}
}
};
}
function m(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var i = 0, s = Array(t); i < t; i++) s[i] = e[i];
return s;
}
function p(e, t, i) {
var s, r = e, n = 0, a = x(r);
try {
for (a.s(); !(s = a.n()).done; ) {
var h = s.value;
h[4] = n, n += h[0] * h[3];
}
} catch (e) {
a.e(e);
} finally {
a.f();
}
var l, o = x(r);
try {
for (o.s(); !(l = o.n()).done; ) {
var u = l.value;
i.addAttribute(u[5], t, u[0], u[2], u[1], n, u[4]);
}
} catch (e) {
o.e(e);
} finally {
o.f();
}
return {
vertexSize: n
};
}
function y(e, t) {
var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
if (!i) {
if (Array.isArray(e) || (i = function(e, t) {
if (e) {
if ("string" == typeof e) return w(e, t);
var i = {}.toString.call(e).slice(8, -1);
return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? w(e, t) : void 0;
}
}(e)) || t && e && "number" == typeof e.length) {
i && (e = i);
var s = 0, r = function() {};
return {
s: r,
n: function() {
return s >= e.length ? {
done: !0
} : {
done: !1,
value: e[s++]
};
},
e: function(e) {
throw e;
},
f: r
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var n, a = !0, h = !1;
return {
s: function() {
i = i.call(e);
},
n: function() {
var e = i.next();
return a = e.done, e;
},
e: function(e) {
h = !0, n = e;
},
f: function() {
try {
a || null == i.return || i.return();
} finally {
if (h) throw n;
}
}
};
}
function w(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var i = 0, s = Array(t); i < t; i++) s[i] = e[i];
return s;
}
function k(e, t, i) {
return t = (0, l.a)(t), (0, h.a)(e, T() ? Reflect.construct(t, i || [], (0, l.a)(e).constructor) : t.apply(e, i));
}
function T() {
try {
var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
} catch (e) {}
return (T = function() {
return !!e;
})();
}
function S(e) {
e.texture = d.x.from("./assets/rainbow5.png");
}
function C() {
this.p_buffer = new d.d(this.buffer.buffer), this.generateVAO(), this.mesh = new d.o(this.geometry, void 0, null, d.g.TRIANGLES), 
this.mesh.visible = !1, this.loadShader(), this.generateBuffer();
}
function A() {
var e = new d.r("precision highp float;\n\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\n// Текущий масштаб (зум) сцены, передаётся из draw():\n// this.shaderData.u_scale = this.render.stage.scale;\n// При зуме в карту растёт (>1), при отдалении уменьшается (<1)\nuniform float u_scale;\n\nattribute vec2 a_position;\nattribute vec4 b_color;\n// Положение вершины относительно краёв линии:\n//  0.0  — центр линии (полностью непрозрачный)\n// ±1.0  — внешний край линии (полностью прозрачный)\nattribute float a_edge;\n\nvarying vec4 v_color;\nvarying float v_edge;\n// Нижний порог smoothstep — начало зоны затухания.\n// При большом зуме (u_scale >> 1) → w маленький → v_aa1 близко к 1.0 → край чёткий.\n// При малом зуме (u_scale << 1) → w большой → v_aa1 далеко от 1.0 → край размытый.\nvarying float v_aa1;\n// Верхний порог smoothstep — конец зоны затухания (за этим значением alpha = 0).\n// Всегда чуть больше 1.0, чтобы зона перехода существовала даже при большом зуме.\nvarying float v_aa2;\n\nvoid main() {\n    v_color = b_color;\n    v_edge = a_edge;\n\n    // Ширина зоны сглаживания:\n    // делим на u_scale дважды (u_scale²), потому что при зуме\n    // один пиксель экрана покрывает меньше единиц мира — \n    // линия визуально толще и нужно меньше сглаживания.\n    // 0.01 — базовая ширина зоны, подобрана эмпирически.\n    float w = 0.1 / max(u_scale * u_scale, 0.0001);\n\n    v_aa1 = 0.95 - w;  // начало растворения края\n    v_aa2 = 1.0 + w; // конец растворения края (полная прозрачность)\n\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(a_position, 1.0)).xy, 0.0, 1.0);\n}", "precision highp float;\n\nvarying vec4 v_color;\nvarying float v_edge;\nvarying float v_aa1;\nvarying float v_aa2;\n\nvoid main() {\n    float alpha = 1.0 - smoothstep(v_aa1, v_aa2, abs(v_edge));\n    gl_FragColor = v_color * alpha;\n}");
this.shader = new d.t(e, this.shaderData), this.mesh.shader = this.shader, this.mesh.visible = !0;
}
function z() {
this.geometry = new d.j, p([ [ 2, d.v.FLOAT, !1, 4, 0, "a_position" ], [ 1, d.v.FLOAT, !1, 4, 0, "a_edge" ], [ 4, d.v.UNSIGNED_BYTE, !0, 1, 0, "b_color" ] ], this.p_buffer, this.geometry);
}
function D() {
var e, t = 2166136261, i = y(this.render.app.clients.render);
try {
for (i.s(); !(e = i.n()).done; ) {
var s = e.value;
s.protocol instanceof g.a && (t ^= 65535 & s.ID | (255 & s.renderZindex) << 16, 
t = Math.imul(t, 16777619), t ^= s.protocol.quadtreeVersion >>> 0, t = Math.imul(t, 16777619));
}
} catch (e) {
i.e(e);
} finally {
i.f();
}
var r = this.render.stage.quadtree;
if (null == r ? void 0 : r.root) for (var n = [ r.root ], a = 0; a < n.length; a++) {
var h = n[a];
t ^= 1024 * h.x | 0, t = Math.imul(t, 16777619), t ^= 1024 * h.y | 0, t = Math.imul(t, 16777619), 
t ^= 1024 * h.w | 0, t = Math.imul(t, 16777619), t ^= 1024 * h.h | 0, t = Math.imul(t, 16777619);
var l = h.children;
if (t ^= l ? l.length : 0, t = Math.imul(t, 16777619), null == l ? void 0 : l.length) for (var o = 0; o < l.length; o++) n.push(l[o]);
}
return t >>> 0;
}
function M(e, t, i, s) {
return !(this.index + 4 > this.buffer.length) && (this.buffer[this.index++] = e, 
this.buffer[this.index++] = t, this.buffer[this.index++] = i, this.bufferu32[this.index++] = s, 
!0);
}
function B(e, t, i, s, r, n, a, h, l, o) {
return this.writeVertex(e, t, i, o) && this.writeVertex(s, r, n, o) && this.writeVertex(a, h, l, o);
}
function R(e, t, i, s, r) {
return i - e > s - t ? this.writeTriangle(e, t, -1, i, t, -1, e, s, 1, r) && this.writeTriangle(i, t, -1, i, s, 1, e, s, 1, r) : this.writeTriangle(e, t, -1, i, t, 1, e, s, -1, r) && this.writeTriangle(i, t, 1, i, s, 1, e, s, -1, r);
}
function U(e, t, i, s, r, n) {
var a = i - e, h = s - t;
if (a <= 0 || h <= 0) return !0;
var l = Math.min(.5 * r, .49 * a, .49 * h);
if (l <= 0) return !0;
var o = e - l, u = t - l, f = i + l, c = s + l, d = e + l, v = t + l, b = i - l, _ = s - l;
return d >= b || v >= _ ? this.writeTriangle(o, u, 0, f, u, 0, o, c, 0, n) && this.writeTriangle(f, u, 0, f, c, 0, o, c, 0, n) : this.writeTriangle(o, u, 1, f, u, 1, d, v, -1, n) && this.writeTriangle(f, u, 1, b, v, -1, d, v, -1, n) && this.writeTriangle(f, u, 1, f, c, 1, b, v, -1, n) && this.writeTriangle(f, c, 1, b, _, -1, b, v, -1, n) && this.writeTriangle(f, c, 1, o, c, 1, b, _, -1, n) && this.writeTriangle(o, c, 1, d, _, -1, b, _, -1, n) && this.writeTriangle(o, c, 1, o, u, 1, d, _, -1, n) && this.writeTriangle(o, u, 1, d, v, -1, d, _, -1, n);
}
function E() {
if (v.a.raw.debug.value) {
var e, t = Math.max(.5 * v.b.raw.sectorsWidth.value, 2 / Math.max(this.render.stage.scale, 1e-4)), i = y(this.render.app.clients.render);
try {
for (i.s(); !(e = i.n()).done; ) {
var s = e.value;
if (s.protocol instanceof g.a) {
var r = s.protocol, n = r.quadtreeRects, a = Math.min(r.quadtreeNodeCount, n.length / 4 | 0);
if (a <= 0) continue;
for (var h = 0 === s.renderZindex ? v.b.raw.bordersColor.microcolor.u32 : v.b.raw.gridColor.microcolor.u32, l = 0; l < a; l++) {
var o = 4 * l, u = n[o], f = n[o + 1], c = n[o + 2], d = n[o + 3];
if (!(c <= 0 || d <= 0)) {
var b = u - c, _ = f - d, x = u + c, m = f + d;
if (this.render.stage.boxInDisplay(b, _, x - b, m - _) && !this.writeRectOutline(b, _, x, m, t, h)) return;
}
}
}
}
} catch (e) {
i.e(e);
} finally {
i.f();
}
}
}
function O() {
var e = this.render.stage.quadtree;
if (null == e ? void 0 : e.root) for (var t = 1 / this.render.stage.scale, i = v.b.raw.bordersColor.microcolor.u32, s = [ e.root ], r = 0; r < s.length; r++) {
var n = s[r], a = n.x, h = n.y;
if (n.w > 0 && n.h > 0 && this.render.stage.boxInDisplay(a, h, n.w, n.h) && !this.writeRectOutline(a, h, a + n.w, h + n.h, t, i)) return;
var l = n.children;
if (null == l ? void 0 : l.length) for (var o = 0; o < l.length; o++) s.push(l[o]);
}
}
function F() {
for (var e = v.b.raw.sectorsX.value, t = v.b.raw.sectorsY.value, i = v.b.raw.gridColor.microcolor.u32, s = .5 * v.b.raw.sectorsWidth.value, r = this.render.app._server.mapBounds, n = this.render.app._server.mapSize.x / e, a = this.render.app._server.mapSize.y / t, h = 1; h < e; h++) {
var l = r.minX + n * h;
this.writeAALine(l - s, r.minY, l + s, r.maxY, i);
}
for (var o = 1; o < t; o++) {
var u = r.minY + a * o;
this.writeAALine(r.minX, u - s, r.maxX, u + s, i);
}
}
function L() {
var e = v.b.raw.bordersColor.microcolor.u32, t = v.b.raw.bordersWidth.value, i = this.render.app._server.mapBounds, s = i.minX - t / 2, r = i.minY - t / 2, n = i.maxX + t / 2, a = i.maxY + t / 2;
this.writeRectOutline(s, r, n, a, t, e);
}
function P() {
this.index = 0, v.a.raw.showBgSectors.value && this.generateBgSectorsBuffer(), v.a.raw.showMapBorders.value && this.generateMapBordersBuffer(), 
v.a.raw.debug.value && v.a.raw.jellyPhysics.value && this.generatePointQuadtreeBuffer(), 
this.generateQuadtreeBuffer();
}
function I() {
var e = this, t = this.sectorsTextStyle;
function i() {
t.fontFamily = v.b.raw.sectorsfont.fontFamily, e.updSectorTexts(!0);
}
this.render.listenTo(v.b, "sectorsfont", function() {
v.b.raw.sectorsfont.load().then(i);
})(), this.render.listenTo(v.b, "sectorsColor", "sectorsfontSize", function() {
t.fontWeight = v.b.raw.sectorsfont.fontWeight, t.fontSize = v.b.raw.sectorsfontSize.value / 10, 
t.fill = v.b.raw.sectorsColor.microcolor.toRgb(!0), e.updSectorTexts(!0);
})();
}
function j() {
var e, t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], i = this.sectorsTextsContainer, s = v.b.raw.sectorsX.value, r = v.b.raw.sectorsY.value, n = this.render.app._server.mapBounds.minX, a = this.render.app._server.mapBounds.minY, h = ~~((this.render.app._server.mapBounds.maxX - n) / s), l = ~~((this.render.app._server.mapBounds.maxY - a) / r), o = y(i.children);
try {
for (o.s(); !(e = o.n()).done; ) {
e.value.visible = !1;
}
} catch (e) {
o.e(e);
} finally {
o.f();
}
for (var u = 0, f = 0; f < r; f++) for (var c = 0; c < s; c++, u++) {
var b = i.children[u] || i.addChild(new d.y("", this.sectorsTextStyle));
(t || 0 === b.text.length) && (b.anchor.set(.5, .55), b.scale.set(10), b.text = v.a.raw.customBgSectorsSymbol.value || String.fromCharCode(65 + f) + (c + 1)), 
b.visible = v.a.raw.showBgSectors.value && this.render.stage.boxInDisplay(n + c * h, a + f * l, h, l);
var _ = ~~(n + h / 2 + c * h), g = ~~(a + l / 2 + f * l);
b.position.set(_, g);
}
for (var x = i.children.length - 1; x >= u; x--) i.removeChild(i.children[x]);
}
function N() {
var e = this;
if (this.rainbowBorderContainer.visible) {
var t = this.render.app._server;
this.rainbowBorderContainer.children.forEach(function(i, s) {
var r = 25 / (t.mapSize.x / 14141), n = 25 / (t.mapSize.y / 14141), a = 720;
if (i.anchor.set(.5), s % 2) {
var h = s % 4 - 1, l = h ? 1 : -1, o = h ? t.mapBounds.maxY : -t.mapBounds.minY;
i.position.y = o * l, i.rotation = 1.5 * Math.PI, i.scale.x = -l, i.scale.y = -l, 
i.scale.x *= 14141 / (a - r), i.scale.y *= t.mapSize.x / (a - r);
}
if ((s + 1) % 2) {
var u = s % 4, f = u ? -1 : 1, c = u ? -t.mapBounds.minX : t.mapBounds.maxX;
i.position.x = c * f, i.rotation = Math.PI * f, i.scale.x = -f, i.scale.y = -f, 
i.scale.x *= 14141 / (a - n), i.scale.y *= t.mapSize.y / (a - n);
}
i.filters = [ e.rainbowColorMatrix ];
});
}
}
function W() {
if (v.a.raw.debug.value) {
var e = this.getQuadtreeSnapshotHash();
this.quadtreeDebugVisible && e === this.quadtreeSnapshotHash || (this.quadtreeDebugVisible = !0, 
this.quadtreeSnapshotHash = e, this.generateBuffer());
} else this.quadtreeDebugVisible && (this.quadtreeDebugVisible = !1, this.generateBuffer());
this.rainbowBorderContainer.visible && function(e, t) {
var i = e / 180 * Math.PI, s = Math.cos(i), r = Math.sin(i), n = Math.sqrt(1 / 3), a = 1 / 3, h = s + (1 - s) * a, l = a * (1 - s) - n * r, o = a * (1 - s) + n * r, u = a * (1 - s) + n * r, f = s + a * (1 - s), c = a * (1 - s) - n * r, d = a * (1 - s) - n * r, v = a * (1 - s) + n * r, b = s + a * (1 - s);
t[0] = h, t[1] = l, t[2] = o, t[5] = u, t[6] = f, t[7] = c, t[10] = d, t[11] = v, 
t[12] = b;
}(Date.now() / 2 * v.a.raw.rainbowMapBordersSpeed.value % 360, this.rainbowColorMatrix.matrix), 
this.shaderData.u_scale = this.render.stage.scale, this.p_buffer.update(this.buffer.subarray(0, this.index)), 
this.mesh.position.set(-this.render.stage.camera.x * this.render.stage.scale + this.render.stage.canvasCenter.x, -this.render.stage.camera.y * this.render.stage.scale + this.render.stage.canvasCenter.y), 
this.mesh.scale.set(this.render.stage.scale, this.render.stage.scale), this.container.position.set(this.render.canvasWidth / 2 - this.render.stage.camera.x * this.render.stage.scale, this.render.canvasHeight / 2 - this.render.stage.camera.y * this.render.stage.scale), 
this.container.scale.set(this.render.stage.scale, this.render.stage.scale), this.sectorsTextsContainer.position.copyFrom(this.container.position), 
this.sectorsTextsContainer.scale.copyFrom(this.container.scale), this.bg.position.set(0, 0);
var t = Math.max(this.bg.texture.baseTexture.width, this.bg.texture.baseTexture.height), i = Math.min(this.bg.texture.baseTexture.width, this.bg.texture.baseTexture.height);
this.bg.texture.frame.x = this.bg.texture.baseTexture.width > i ? (t - i) / 2 : 0, 
this.bg.texture.frame.y = this.bg.texture.baseTexture.height > i ? (t - i) / 2 : 0, 
this.bg.texture.frame.width = i, this.bg.texture.frame.height = i, this.bg.texture.updateUvs(), 
this.bg.anchor.set(.5), this.bg.scale.set(Math.max(this.render.app._server.mapSize.x / this.bg.texture.width, this.render.app._server.mapSize.y / this.bg.texture.height));
}
var V = function(e) {
function t(e) {
var i;
(0, n.a)(this, t), (i = k(this, t)).render = e, i.shaderData = {
u_scale: 1e-4
}, i.buffer = new Float32Array(1572864), i.bufferu32 = new Uint32Array(i.buffer.buffer), 
i.container = new d.f, i.bg = new d.u, i.logo = new d.u, i.sectorsTextStyle = new d.w({}), 
i.sectorsTextsContainer = new d.f, i.rainbowBorderContainer = new d.f, i.rainbowColorMatrix = new d.e, 
i.index = 0, i.quadtreeSnapshotHash = 0, i.quadtreeDebugVisible = !1, i.container.addChild(i.bg), 
i.container.addChild(i.logo), i.logo.anchor.set(.5), i.logo.scale.set(2.6), i.logo.alpha = .2, 
i.logo.position.set(0, 0), i.sectorsTextStyle = new d.w({}), i.sectorsTextsContainer = new d.f, 
i.initSectorTexts(), i.updSectorTexts(!0), i.container.addChild(i.rainbowBorderContainer);
for (var s = 4; s--; ) {
var r = new d.u;
i.rainbowBorderContainer.addChild(r);
}
return i.render.listenTo(v.b, "customMapTexture", function() {
v.b.proxy.customMapTexture ? (i.bg.visible = !0, i.bg.texture = d.x.from(v.b.proxy.customMapTexture)) : i.bg.visible = !1;
})(), i.render.listenTo(v.b, "customMapLogo", function() {
v.b.proxy.customMapLogo ? (i.logo.visible = !0, i.logo.texture = d.x.from(v.b.proxy.customMapLogo, {
resourceOptions: {
crossorigin: "anonymous"
}
})) : i.logo.visible = !1;
})(), i.rainbowBorderContainer.children.forEach(S), i.render.listenTo(v.a, "rainbowMapBorders", function() {
i.rainbowBorderContainer.visible = v.a.raw.rainbowMapBorders.value, i.updMapBorders();
})(), i.render.listenTo(v.a, "showBgSectors", "showMapBorders", function() {
i.generateBuffer(), i.updSectorTexts();
}), i.render.listenTo(v.a, "customBgSectorsSymbol", function() {
i.updSectorTexts(!0);
}), i.render.listenTo(v.b, "sectorsX", "sectorsY", "gridColor", "bordersColor", "sectorsWidth", "bordersWidth", function() {
i.generateBuffer(), i.updSectorTexts();
}), i.render.listenTo(i.render.app.server, "estabilished", function() {
i.generateBuffer(), i.updSectorTexts(), i.updMapBorders();
}), i;
}
return (0, o.a)(t, e), (0, a.a)(t, [ {
key: "init",
value: C
}, {
key: "loadShader",
value: A
}, {
key: "generateVAO",
value: z
}, {
key: "getQuadtreeSnapshotHash",
value: D
}, {
key: "writeVertex",
value: M
}, {
key: "writeTriangle",
value: B
}, {
key: "writeAALine",
value: R
}, {
key: "writeRectOutline",
value: U
}, {
key: "generateQuadtreeBuffer",
value: E
}, {
key: "generatePointQuadtreeBuffer",
value: O
}, {
key: "generateBgSectorsBuffer",
value: F
}, {
key: "generateMapBordersBuffer",
value: L
}, {
key: "generateBuffer",
value: P
}, {
key: "initSectorTexts",
value: I
}, {
key: "updSectorTexts",
value: j
}, {
key: "updMapBorders",
value: N
}, {
key: "draw",
value: W
} ]);
}(c.Eventify);
new Float32Array([ 255, 255, 255, 0, 0, 255, 255, 255, 0, 0, 255, 255, 255, 0, 0, 0, 0, 0, 1, 0 ]);
var G = i(60976), H = i(98654), X = i(97920), Y = i(52644), q = i(94429), $ = i(7542), K = i(60123), Q = i(90940), J = i(77725), Z = i(69634);
function ee(e, t) {
var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
if (!i) {
if (Array.isArray(e) || (i = function(e, t) {
if (e) {
if ("string" == typeof e) return te(e, t);
var i = {}.toString.call(e).slice(8, -1);
return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? te(e, t) : void 0;
}
}(e)) || t && e && "number" == typeof e.length) {
i && (e = i);
var s = 0, r = function() {};
return {
s: r,
n: function() {
return s >= e.length ? {
done: !0
} : {
done: !1,
value: e[s++]
};
},
e: function(e) {
throw e;
},
f: r
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var n, a = !0, h = !1;
return {
s: function() {
i = i.call(e);
},
n: function() {
var e = i.next();
return a = e.done, e;
},
e: function(e) {
h = !0, n = e;
},
f: function() {
try {
a || null == i.return || i.return();
} finally {
if (h) throw n;
}
}
};
}
function te(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var i = 0, s = Array(t); i < t; i++) s[i] = e[i];
return s;
}
function ie(e, t, i) {
return t = (0, l.a)(t), (0, h.a)(e, se() ? Reflect.construct(t, i || [], (0, l.a)(e).constructor) : t.apply(e, i));
}
function se() {
try {
var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
} catch (e) {}
return (se = function() {
return !!e;
})();
}
var re = "0123456789.k".split("");
re.length;
function ne() {
return this.render.stage;
}
function ae() {
var e = new d.r("precision highp float;\n\nuniform mat3 _translationMatrix_;\nuniform mat3 projectionMatrix_;\nuniform vec2 uTranslate;\nuniform vec2 uScale;\n\nattribute vec2 vertexPos;\nattribute vec2 texturePos;\nattribute float b_alpha;\nattribute float texture_id;\n\nvarying float v_alpha;\nvarying vec2 texCoord;\n\nvoid main(void) {\n    v_alpha = b_alpha;\n    // gl_Position = vec4((vec2(vertexPos.x,vertexPos.y) - uTranslate) * uScale, 1.0, 0.0);\n    gl_Position = vec4((_translationMatrix_ * vec3(vertexPos.xy , 1.0)).xy, 0.0, 1.0);\n    // gl_Position = vec4( -projectionMatrix * vec3(vec2(vertexPos.x,vertexPos.y), 0.0), 1.0);\n    texCoord = vec2(texturePos.x, texturePos.y);\n}", "precision highp float;\n\nuniform sampler2D tex;\n\nvarying lowp vec2 texCoord;\nvarying float v_alpha;\n\nvoid main(void) {\n    gl_FragColor = texture2D(tex, texCoord) * v_alpha;\n    // gl_FragColor = vec4(1.0, 0.5, 1.0, 0.5);\n}");
this.shader = new d.t(e, this.shaderData), this.mesh.shader = this.shader, this.mesh.visible = !0;
}
function he() {
return this.texture = d.b.from(this.canvas, {}), !0;
}
function le(e) {
function t() {
return (0, n.a)(this, t), ie(this, t, arguments);
}
return (0, o.a)(t, e), (0, a.a)(t, [ {
key: "updateTexture",
value: he
} ]);
}
function oe() {
var e = this;
this.font = new (le(J.a))("", {
lineSize: 1.2,
size: 100,
strokeStyle: v.b.raw.massStrokeColor.string,
lineWidth: !1 === v.a.raw.massStroke.value ? 0 : 10 * v.b.raw.strokeScale.value,
lineJoin: "round",
miterLimit: 0,
fillStyle: v.b.raw.massColor.string,
characters: re.join(""),
fontWeight: v.b.raw.massfont.fontWeight,
scale: 1
});
var t = (0, Q.b)(function() {
var t;
e.font.canvasStyles.fontFamily = v.b.raw.massfont.fontFamily, e.font.canvasStyles.fillStyle = v.b.raw.massColor.string, 
e.font.canvasStyles.strokeStyle = v.b.raw.massStrokeColor.string, e.font.canvasStyles.lineWidth = !1 === v.a.raw.massStroke.value ? 0 : 10 * v.b.raw.strokeScale.value, 
e.font.setScale(1), e.font.setLinesize(1.2), e.font.canvasStyles.fontWeight = v.b.raw.massfont.fontWeight, 
e.gl = e.render.renderer.gl, e.font.deleteSheet(), Z.a.unregister(e.font.texture), 
null === (t = e.font.texture) || void 0 === t || t.destroy(), delete e.font.texture, 
e.font.deleteSheet(), e.font.createSheet(), e.font.resetSheet(), e.font.fontLoaded();
}, 5);
this.render.listenTo(v.a, "massStroke", t), this.render.listenTo(v.a, "canvasScale", t), 
this.render.listenTo(v.b, "massColor", t), this.render.listenTo(v.b, "massStrokeColor", t), 
this.render.listenTo(v.b, "strokeScale", t), this.render.listenTo(v.b, "massfont", t)(), 
this.mesh = new d.o(this.geometry, void 0, null, d.g.TRIANGLES), this.mesh.visible = !1;
var i = function(e) {
console.log("WebGL context lost, reinitializing Masses"), t(), K.a.cleaner("nick"), 
K.a.cleaner("mass");
};
this.render.canvas.addEventListener("webglcontextlost", i, !1), this.render.listenSelf("destroy", function() {
e.render.canvas.removeEventListener("webglcontextlost", i);
}), this.generateVAO(), this.loadShader();
}
function ue() {
this.geometry = new d.j, p([ [ 2, d.v.FLOAT, !1, 4, 0, "vertexPos" ], [ 2, d.v.FLOAT, !1, 4, 0, "texturePos" ], [ 1, d.v.FLOAT, !1, 4, 0, "b_alpha" ], [ 1, d.v.FLOAT, !1, 4, 0, "texture_id" ] ], this.p_buffer, this.geometry);
}
function fe() {
this.index = 0, this.massBuffer.fill(0);
}
function ce() {
var e;
if (this.index = 0, this.font.canvas && !1 !== this.mesh.visible) {
var t = this.font.texture;
if (t) for (var i = Z.a.register(t), s = this.texturesCounts, r = this.font, n = 0, a = [ this.stage.removedCellsSet, this.stage.cellsFrame ], h = 0, l = a.length; h < l; h++) {
var o, u = ee(a[h]);
try {
for (u.s(); !(o = u.n()).done; ) {
var f = o.value, c = n;
s[n] = 0;
var d = ++n;
s[n] = 0, n++;
var b = f.isPlayerCell || null !== f.playerOriginUnit, _ = K.a.nick(1500, 1, v.b.raw.namesScale.value, (null === (e = f.player) || void 0 === e ? void 0 : e.name) || ""), g = !1 === v.a.raw.showNames.value || this.render.setAutoHideCellInfoNick(f.size) || null !== f.playerOriginUnit && v.a.raw.hideMyName.value;
if (_ && !g) {
_.texture && _.pixiTexture || _.savePixiTexture();
var x = _.originW * f.size * v.b.raw.namesScale.value / 2, m = _.originH * f.size * v.b.raw.namesScale.value / 2, p = f.x, y = f.y, w = p - x, k = y - m;
this.writeBuffer(w, k, 2 * x, 2 * m, 0, 0, 1, 1, f.alpha, _.pixiId), s[c] += 1;
}
if (f.type == H.c.Type.virus) {
if (0 === v.a.raw.virMassType.value || 3 === v.a.raw.virMassType.value && f.size < 148) continue;
} else if (!v.a.raw.showMass.value || this.render.setAutoHideCellInfoMass(f.size) || !this.stage.isInDisplay(f.targetX, f.targetY, f.targetSize) || b && v.a.raw.hideMyMass.value) continue;
var T = f.x, S = f.y, C = f.size, A = C * C * .01, z = "";
if (f.type === H.c.Type.cell) z = v.a.raw.shortMass.value && A > 1e3 ? (A / 1e3).toFixed(1) + "k" : Math.round(A).toString(); else if (f.type === H.c.Type.virus) {
var D = ~~(f.targetSize * f.targetSize / 100);
z = 2 === v.a.raw.virMassType.value && D < 200 ? String(this.render.calcVirusShots(D)) : String(D);
}
for (var M = 0, B = 0, R = 0, U = .0031 * (f.type === H.c.Type.cell ? v.b.raw.massScale.value / 2 : v.b.raw.virMassScale.value), E = 0; E < z.length; E++) {
var O = r.getCharacter(z[E]).width * C * U;
0;
var F = (!1 === v.a.raw.massStroke.value ? 0 : -10 * v.b.raw.strokeScale.value) * C * U;
R += F, B += O + F;
}
M = (-B + (R /= z.length)) / 2, s[d] += z.length;
for (var L = 0, P = z.length; L < P; L += 1) {
var I = r.getCharacter(z[L]), j = I.textureCoords, N = f.type === H.c.Type.virus ? -.1 : f.type !== H.c.Type.cell || !v.a.raw.showNames.value || null !== f.playerOriginUnit && v.a.raw.hideMyName.value ? -.05 : .39, W = I.width * C * U, V = I.height * C * U, G = S - (v.a.raw.massStroke.value, 
0) - .5 * V + C * N, X = M + T;
if (M += W + R, j) {
var Y = j.x, q = j.y, $ = j.width, Q = j.height;
this.writeBuffer(X, G, W, V, Y, q, $, Q, f.alpha, i);
} else s[d] -= 1;
}
}
} catch (e) {
u.e(e);
} finally {
u.f();
}
}
}
}
function de(e, t, i, s, r, n, a, h, l, o) {
this.massBuffer[this.index++] = e, this.massBuffer[this.index++] = t, this.massBuffer[this.index++] = r, 
this.massBuffer[this.index++] = n, this.massBuffer[this.index++] = l, this.massBuffer[this.index++] = o, 
this.massBuffer[this.index++] = e + i, this.massBuffer[this.index++] = t, this.massBuffer[this.index++] = r + a, 
this.massBuffer[this.index++] = n, this.massBuffer[this.index++] = l, this.massBuffer[this.index++] = o, 
this.massBuffer[this.index++] = e, this.massBuffer[this.index++] = t + s, this.massBuffer[this.index++] = r, 
this.massBuffer[this.index++] = n + h, this.massBuffer[this.index++] = l, this.massBuffer[this.index++] = o, 
this.massBuffer[this.index++] = e + i, this.massBuffer[this.index++] = t, this.massBuffer[this.index++] = r + a, 
this.massBuffer[this.index++] = n, this.massBuffer[this.index++] = l, this.massBuffer[this.index++] = o, 
this.massBuffer[this.index++] = e, this.massBuffer[this.index++] = t + s, this.massBuffer[this.index++] = r, 
this.massBuffer[this.index++] = n + h, this.massBuffer[this.index++] = l, this.massBuffer[this.index++] = o, 
this.massBuffer[this.index++] = e + i, this.massBuffer[this.index++] = t + s, this.massBuffer[this.index++] = r + a, 
this.massBuffer[this.index++] = n + h, this.massBuffer[this.index++] = l, this.massBuffer[this.index++] = o;
}
function ve() {
this.generateBuffer(), this.p_buffer.update(this.massBuffer.subarray(0, this.index)), 
this.projectionMatrix.set(2 / this.render.canvasWidth, 0, 0, 2 / -this.render.canvasHeight, -1, 1), 
this.translationMatrix.identity().translate(this.stage.canvasCenter.x / this.stage.scale - this.stage.camera.x, this.stage.canvasCenter.y / this.stage.scale - this.stage.camera.y).scale(this.stage.scale, this.stage.scale), 
this.projectionMatrix.append(this.translationMatrix), this.shaderData._translationMatrix_ = this.projectionMatrix.toArray(!0, this.shaderData._translationMatrix_);
}
var be = function() {
return (0, a.a)(function e(t) {
(0, n.a)(this, e), this.render = t, this.shaderData = {
_translationMatrix_: new Float32Array(9)
}, this.massWidths = new Float32Array(256), this.texturesCounts = new Uint8Array(65536), 
this.massBuffer = new Float32Array(3145728), this.index = 0, this.p_buffer = new d.d(this.massBuffer.buffer), 
this.geometry = new d.j([ this.p_buffer ]), this.translationMatrix = new d.n, this.projectionMatrix = new d.n;
}, [ {
key: "stage",
get: ne
}, {
key: "loadShader",
value: ae
}, {
key: "init",
value: oe
}, {
key: "generateVAO",
value: ue
}, {
key: "clear",
value: fe
}, {
key: "generateBuffer",
value: ce
}, {
key: "writeBuffer",
value: de
}, {
key: "draw",
value: ve
} ]);
}();
function _e(e, t) {
var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
if (!i) {
if (Array.isArray(e) || (i = function(e, t) {
if (e) {
if ("string" == typeof e) return ge(e, t);
var i = {}.toString.call(e).slice(8, -1);
return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? ge(e, t) : void 0;
}
}(e)) || t && e && "number" == typeof e.length) {
i && (e = i);
var s = 0, r = function() {};
return {
s: r,
n: function() {
return s >= e.length ? {
done: !0
} : {
done: !1,
value: e[s++]
};
},
e: function(e) {
throw e;
},
f: r
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var n, a = !0, h = !1;
return {
s: function() {
i = i.call(e);
},
n: function() {
var e = i.next();
return a = e.done, e;
},
e: function(e) {
h = !0, n = e;
},
f: function() {
try {
a || null == i.return || i.return();
} finally {
if (h) throw n;
}
}
};
}
function ge(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var i = 0, s = Array(t); i < t; i++) s[i] = e[i];
return s;
}
function xe(e, t, i) {
return t = (0, l.a)(t), (0, h.a)(e, me() ? Reflect.construct(t, i || [], (0, l.a)(e).constructor) : t.apply(e, i));
}
function me() {
try {
var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
} catch (e) {}
return (me = function() {
return !!e;
})();
}
var pe = function(e) {
function t(e, i, s, r) {
var a;
return (0, n.a)(this, t), (a = xe(this, t, [ e, i, s, r ])).pixiRenderer = null, 
a._renderDefault = function(e) {
var t = a.pixiRenderer, i = a.shader;
i.update && i.update(), e.batch.flush(), i.uniforms.translationMatrix = a.transform.worldTransform.toArray(!0), 
e.shader.bind(i), e.state.set(a.state), e.geometry.bind(a.geometry, i);
for (var s = t.cells.masses, r = 0, n = 0, h = 0, l = -1, o = 0, u = function() {
h > 0 && (e.geometry.draw(d.g.TRIANGLES, h, n), n += h, h = 0);
}, f = 0, c = t.cells.cells_index; f < c; f++) {
var v = t.cells.jellyPointsBuffer[f], b = t.cells.cellVerticesBuffer[f], _ = t.cells.buffer[14 * r + 10], g = s.texturesCounts[2 * f + 0], x = s.texturesCounts[2 * f + 1], m = x > 0 || g > 0;
if ((_ !== l || m) && (u(), _ !== l)) {
if (_ >= 1) {
var p = X.a.cache[_];
p.pixiTexture && t.renderer.texture.bind(p.pixiTexture);
} else t.renderer.texture.unbind();
l = _;
}
if (m) {
if (e.geometry.draw(d.g.TRIANGLES, v, n), n += v, e.shader.bind(s.shader), e.geometry.bind(s.geometry, s.shader), 
g) {
var y = 6 * g, w = 0 | t.cells.masses.massBuffer[6 * o + 5], k = Z.a.get(w);
k && (t.renderer.texture.bind(k), e.geometry.draw(d.g.TRIANGLES, y, o), t.renderer.texture.unbind()), 
o += y;
}
if (x) {
var T = 6 * x, S = 0 | t.cells.masses.massBuffer[6 * o + 5], C = Z.a.get(S);
C && (t.renderer.texture.bind(C), e.geometry.draw(d.g.TRIANGLES, T, o), t.renderer.texture.unbind()), 
o += T;
}
e.shader.bind(i), e.geometry.bind(a.geometry, i), l = -1;
} else h += v;
r += b;
}
u();
}, a;
}
return (0, o.a)(t, e), (0, a.a)(t, [ {
key: "_render",
value: function() {
var e, i, s, r, n;
(e = t, i = "_render", s = this, r = 1, n = (0, G.a)((0, l.a)(1 & r ? e.prototype : e), i, s), 
2 & r && "function" == typeof n ? function(e) {
return n.apply(s, e);
} : n).apply(this, arguments);
}
} ]);
}(d.o);
function ye() {
return this.render.stage;
}
function we() {
var e = new d.r("precision highp float;\nvec3 brightnessContrast(vec3 value, float brightness, float contrast){\n    return (value - 0.5) * contrast + 0.5 + brightness;\n}\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\nuniform float u_scale;\nuniform vec4 u_merge_indicator_color;\n\nattribute vec2 pos;\nattribute vec2 uv;\nattribute float uv_scale;\nattribute vec4 b_cell_color;\nattribute vec4 b_cell_stroke;\nattribute float cell_alpha;\nattribute float b_stroke_alpha;\nattribute float b_stroke_width; // ex 4.0\nattribute float b_skin_id;\nattribute float b_merge_scale;\nattribute float b_cellsize;\nattribute vec4 b_multibox_stroke_color;\n\nvarying float skin_id;\nvarying vec2 tex_uv;\nvarying vec2 center_uv;\nvarying vec2 border_uv;\nvarying vec4 fill;\nvarying vec2 cell_uv;\nvarying float v_smoothering ;\nvarying float v_cellsize ;\nvarying vec4 v_cell_stroke;\nvarying vec4 v_merge_indicator_color;\nvarying float v_merge_scale;\nvarying float v_stroke_width;\nvarying vec4 v_stroke_color;\nvarying vec4 v_multibox_stroke_color;\nvoid main() {\n    v_cellsize = b_cellsize;\n    v_multibox_stroke_color = b_multibox_stroke_color;\n    // обводка со скинами - тоньше в 2 раза\n    v_merge_scale = b_merge_scale;\n    v_stroke_width = (b_stroke_width / 2.0) / uv_scale;\n    v_smoothering = 1.0 / u_scale / b_cellsize / 4.0;\n    skin_id = b_skin_id;\n    cell_uv = uv;\n\n    if(v_stroke_width != 0.0) v_cell_stroke = vec4(b_cell_stroke.rgb, b_stroke_alpha);\n    if(v_merge_scale != 0.0)  v_merge_indicator_color = u_merge_indicator_color;\n\n    float line_width = (v_stroke_width / b_cellsize) ;\n    float u_Thickness = (line_width +  (3.5 / u_scale / b_cellsize));\n    float u_Radius = u_Thickness;\n    float overlap =  b_cellsize * u_Radius;\n    // gl_Position = vec4((pos + (uv * overlap ) - uTranslate) * uScale, 0.0, 1.0);\n    gl_Position = vec4(projectionMatrix * translationMatrix * vec3(pos + (uv * overlap ), 1.0), 1.0);\n\n    vec2 vecc = (vec2(.5, .5) + (u_Radius * 0.5 / uv_scale));\n    center_uv = uv * vecc + vec2(.5,.5); // zoom 2x + offset\n    border_uv = uv * (vec2(1.0, 1.0) + (u_Radius / uv_scale));\n    tex_uv = uv * vecc * uv_scale + vec2(.5,.5); // zoom 2x + offset\n\n    fill = vec4(b_cell_color.rgb, cell_alpha);\n\n    v_stroke_color = vec4(brightnessContrast(v_cell_stroke.rgb, -0.09, 0.95), 1.0) ; // цвет контура с использованием затемнения\n}", "precision highp float;\n\n#define DONUT_THICKNESS 0.037\n#define DONUT_RADIUS 0.5 + DONUT_THICKNESS\n#define PI2 6.28318530718\n#define PI 3.14159265359\n#define PI05 PI * 0.5\n\nfloat AntiAliasedCircleLength(float d, float r, float blur) {\n    return smoothstep(r + blur, r - blur, d);\n}\n\nfloat DrawCircle(vec2 uv, vec2 p, float r, float AA) {\n    return smoothstep(r + AA, r - AA, length(uv + p));\n}\n\nvec2 RotationUV(vec2 uv, float d) {\n    float s = sin(d);\n    float c = cos(d);\n    return uv * mat2(c, -s, s, c);\n}\n\nuniform float u_skins_alpha;\nuniform sampler2D u_texture;\nuniform float u_scale;\nuniform float u_mb_ring_width;\n\nvarying vec4 v_merge_indicator_color;\nvarying float v_stroke_width;\nvarying float skin_id;\nvarying float v_merge_scale;\nvarying vec4 v_cell_stroke;\nvarying vec2 tex_uv;\nvarying vec2 center_uv;\nvarying vec2 border_uv;\nvarying vec2 cell_uv;\nvarying vec4 fill;\nvarying vec4 v_stroke_color;\nvarying float v_smoothering;\nvarying float v_cellsize;\nvarying vec4 v_multibox_stroke_color;\n\nvoid main() {\n   // 1. Считаем длину от центра (0.0 в центре, ~0.5 на краях круга)\n    float dist_center = length(center_uv - vec2(0.5));\n    float base_circle = AntiAliasedCircleLength(dist_center, 0.5, v_smoothering);\n    \n    // --- ГРАДИЕНТ ПРОЗРАЧНОСТИ В ЦЕНТРЕ С ЛИМИТОМ ---\n    float min_alpha = 0.6; // Минимальная непрозрачность в центре (30%)\n    \n    // smoothstep всё так же возвращает от 0.0 до 1.0.\n    // mix(min_alpha, 1.0, smoothstep(...)) плавно переведет значение \n    // из 0.3 в центре до 1.0 на краях.\n    float gradient_mask = mix(min_alpha, 1.0, smoothstep(0.01, 0.55, dist_center));\n    \n    // Умножаем маску градиента на общую маску круга\n    // base_circle *= gradient_mask;\n    // --------------------------------------\n\n    // 2. Базовая заливка\n    vec4 final_color;\n    \n    if (skin_id >= 1.0) {\n        vec4 texture_skin = texture2D(u_texture, tex_uv);\n        vec3 skinColor = texture_skin.rgb / max(texture_skin.a, 0.0001);\n        float skinAlpha = texture_skin.a * u_skins_alpha;\n        \n        vec3 mixedColor = mix(fill.rgb, skinColor, skinAlpha);\n        \n        // base_circle теперь содержит градиентную прозрачность\n        final_color = vec4(mixedColor * base_circle, base_circle) * fill.a;\n    } else {\n        final_color = vec4(fill.rgb * base_circle, base_circle) * fill.a;\n    }\n\n    // 3. Обводки (вычисляем length(border_uv) один раз для обеих обводок)\n    float dist_border = 0.0;\n    float inv_scale = 1.0 / u_scale; // Умножение быстрее деления\n    \n    if (v_stroke_width > 0.0 || v_multibox_stroke_color.a > 0.0) {\n        dist_border = length(border_uv);\n    }\n\n    if (v_stroke_width > 0.0) {\n        float u_Thickness = v_stroke_width / v_cellsize;\n        float u_Radius = 1.0 - (u_Thickness * 0.2);\n\n        if (skin_id >= 1.0) {\n            u_Radius += u_Thickness * 0.5;\n            u_Thickness *= 0.5;\n        }\n        \n        float shape_stroke = smoothstep(\n            (1.0 / v_cellsize) * inv_scale, // Упрощенная математика сглаживания\n            0.0,\n            abs(dist_border - u_Radius) - u_Thickness\n        );\n        final_color = mix(final_color, v_stroke_color * v_cell_stroke.a, shape_stroke);\n    }\n    \n    if (skin_id == 0.1) { \n        // virus tension\n        float radius = 1.5 - (150.0 / v_cellsize); // Упрощено алгебраически\n        float tension = AntiAliasedCircleLength(length(tex_uv - vec2(0.5)), radius, v_smoothering);\n        final_color = mix(final_color, v_stroke_color * v_cell_stroke.a, tension);\n    }\n\n    if (v_multibox_stroke_color.a > 0.0) {\n        float u_Thickness = u_mb_ring_width * 0.5;\n        float u_Radius = 1.0 - u_Thickness;\n        \n        float shape_stroke = smoothstep(\n            (2.0 / v_cellsize) * inv_scale, // Упрощено (linewidth сократился)\n            0.0,\n            abs(dist_border - u_Radius) - u_Thickness\n        );\n        final_color = mix(final_color, vec4(v_multibox_stroke_color.rgb, 1.0), shape_stroke * v_multibox_stroke_color.a);\n    }\n\n    // 4. Индикатор слияния (Merge) - ВЕРНУЛ ОРИГИНАЛЬНУЮ ЛОГИКУ\n    if (v_merge_scale > 0.0) {\n        float AA = (0.5 / v_cellsize) * inv_scale;\n        \n        vec2 uv = vec2(tex_uv.x - 0.5, -tex_uv.y + 0.5);\n        float radial = atan(uv.x, uv.y) / PI05;\n        float time = v_merge_scale;\n        radial += time;\n        \n        float circle = smoothstep(DONUT_RADIUS + AA, DONUT_RADIUS - AA, abs(length(uv) - DONUT_RADIUS) + DONUT_RADIUS - DONUT_THICKNESS);\n        circle *= step(fract(radial), fract(time));\n\n        circle = max(circle, DrawCircle(uv, vec2(0.0, -DONUT_RADIUS), DONUT_THICKNESS, AA));\n        circle = max(circle, DrawCircle(RotationUV(vec2(-uv.x, uv.y), PI2 * time), vec2(0.0, -DONUT_RADIUS), DONUT_THICKNESS, AA));\n\n        final_color = mix(final_color, v_merge_indicator_color, circle);\n    }\n\n    gl_FragColor = final_color;\n}");
this.shader = new d.t(e, this.shaderData), this.mesh.shader = this.shader, this.mesh.visible = !0;
}
function ke() {
var e = this;
this.masses = new be(this.render), this.masses.init(), this.generateVAO(), this.mesh = new pe(this.geometry, void 0, null, d.g.TRIANGLES), 
this.mesh.visible = !1, this.mesh.pixiRenderer = this.render, this.loadShader(), 
this.render.listenTo(v.b, "skinsAlpha", function() {
e.shaderData.u_skins_alpha = v.b.raw.skinsAlpha.value;
})(), this.render.listenTo(Y.b, "hk-transparentSkins:down", function() {
e.shaderData.u_skins_alpha = v.b.raw.skinsAlpha.value !== e.shaderData.u_skins_alpha ? 0 : v.b.raw.skinsAlpha.value;
}), this.render.listenTo(v.a, "cellStroke", function() {
e.shaderData.u_stroke_enabled = v.a.raw.cellStroke.value ? 1 : 0;
})(), this.render.listenTo(v.b, "mergeIndicatorColor", function() {
e.shaderData.u_merge_indicator_color = v.b.raw.mergeIndicatorColor.microcolor.vector;
})(), this.render.listenTo(v.b, "mbRingWidth", function() {
e.shaderData.u_mb_ring_width = v.b.raw.mbRingWidth.value / 100;
})();
}
function Te() {
this.geometry = new d.j, p([ [ 2, d.v.FLOAT, !1, 4, 0, "pos" ], [ 2, d.v.FLOAT, !1, 4, 0, "uv" ], [ 1, d.v.FLOAT, !1, 4, 0, "uv_scale" ], [ 4, d.v.UNSIGNED_BYTE, !0, 1, 0, "b_cell_color" ], [ 4, d.v.UNSIGNED_BYTE, !0, 1, 0, "b_cell_stroke" ], [ 1, d.v.FLOAT, !1, 4, 0, "cell_alpha" ], [ 1, d.v.FLOAT, !1, 4, 0, "b_stroke_alpha" ], [ 1, d.v.FLOAT, !1, 4, 0, "b_stroke_width" ], [ 1, d.v.FLOAT, !1, 4, 0, "b_skin_id" ], [ 1, d.v.FLOAT, !1, 4, 0, "b_merge_scale" ], [ 1, d.v.FLOAT, !1, 4, 0, "b_cellsize" ], [ 4, d.v.UNSIGNED_BYTE, !0, 1, 0, "b_multibox_stroke_color" ] ], this.p_buffer, this.geometry), 
this.geometry.addIndex(this.p_index_buffer);
}
function Se() {
this.index = 0, this.buffer.fill(0);
}
function Ce() {
this.index = 0, this.cells_index = 0, this.index_buffer_pos = 0, this.total_vertices = 0;
var e, t = _e(this.stage.removedCellsSet);
try {
for (t.s(); !(e = t.n()).done; ) {
var i = e.value;
this.writeCellBuffer(i), this.cells_index++;
}
} catch (e) {
t.e(e);
} finally {
t.f();
}
for (var s = 0, r = this.stage.cellsFrame.length; s < r; s++) this.writeCellBuffer(this.stage.cellsFrame[s]), 
this.cells_index++;
}
function Ae(e) {
var t, i = this.render.app.unitManager.activeUnit, s = e.c.unitManager.activeUnit;
if (q.i.showAnySkins) {
if (v.a.raw.vanillaSkins.value && e.player) {
var r = e.player;
r.hasVanillaNamedSkin ? t = X.a.getVanillaSkin(r.nameSkin) : r.hasVanillaCustomSkin ? t = X.a.getVanillaCustomSkin(r.skin) : r.hasUrlSkin ? t = X.a.getUrlSkin(r.skin) : r.skin && (t = X.a.getVanillaSkin(r.skin));
}
if (v.a.raw.customSkins.value && e.player) {
var n = X.a.getCustomSkin(e.player.name, e.colorInt);
n && (t = n);
}
t && t.canvas && !t.pixiTexture && (t.savePixiTexture(), t.listenTo(this.render, "destroy", function() {
return t.destroyTexture();
}));
}
null == t || t.move(0);
var a = e.isPlayerCell || null !== e.playerOriginUnit, h = e.x, l = e.y, o = e.size, u = e.type == H.c.Type.virus && 3 === v.a.raw.virMassType.value && e.size < 148 ? .1 : t && t.pixiTexture ? t.id : 0, f = e.type == H.c.Type.virus ? v.a.raw.virColors.value && (null == s ? void 0 : s.play) ? this.render.setVirusColor(e.size, s).u32 : v.b.raw.virusColor.microcolor.u32 : 0 == u || t.skinAlpha < this.render.minimumSkinAlpha || (null == s ? void 0 : s.play) && !a && v.a.raw.oppColors.value ? a ? e.shader_color : (null == s ? void 0 : s.play) && v.a.raw.oppColors.value && e.oppColor ? e.oppColor.microcolor.u32 : e.shader_color : e.shader_color, c = e.type === H.c.Type.virus ? e.size <= 147 ? v.b.raw.virusColor.microcolor.vector[3] * e.alpha : v.b.raw.mothercellColor.microcolor.vector[3] * e.alpha : e.alpha * v.b.raw.cellsAlpha.value, d = e.type === H.c.Type.virus ? v.a.raw.virColors.value && (null == s ? void 0 : s.play) ? this.render.setVirusStrokeColor(e.size, s).u32 : e.size <= 147 ? v.b.raw.virusStrokeColor.microcolor.u32 : v.b.raw.mothercellStrokeColor.microcolor.u32 : a && v.a.raw.cellStrokePlayer.value ? this.render.player_color_yellow.u32 : 0 == u || t.skinAlpha < this.render.minimumSkinAlpha || (null == s ? void 0 : s.play) && !a && v.a.raw.oppColors.value ? a ? e.shader_color : (null == s ? void 0 : s.play) && v.a.raw.oppColors.value && e.oppColor ? e.oppColor.microcolor.u32 : e.shader_color : t.skinColorU32, b = e.type === H.c.Type.virus ? e.size <= 147 ? v.b.raw.virusStrokeColor.microcolor.vector[3] * e.alpha : v.b.raw.mothercellStrokeColor.microcolor.vector[3] * e.alpha : e.alpha, _ = 0, g = e.type === H.c.Type.cell ? v.a.raw.cellStroke.value ? a && v.a.raw.cellStrokePlayer.value ? Math.min(Math.max(e.size / 50, 4), 4) : Math.min(Math.max(e.size / 50, 8), 8) : 0 : e.type === H.c.Type.virus ? v.b.raw.virusStrokeSize.value : 4, x = v.a.raw.mergeIndicator.value && s === e.playerOriginUnit ? (e.calcMerge(), 
(_ = e.mergeTimeLeft / e.cellMergeFull) >= 0 ? _ : 0) : 0, m = v.a.raw.mbRings.value && this.stage.app.unitManager.totalPlay > 1, p = a && m ? i === e.playerOriginUnit ? $.a.multiplyAlpha(v.b.raw.mboxActiveCellStroke.microcolor.u32, e.alpha) : $.a.multiplyAlpha(v.b.raw.mboxUnactiveCellStroke.microcolor.u32, e.alpha) : 0, y = h - o, w = h + o, k = l - o, T = l + o;
if (!e.removed && v.a.raw.jellyPhysics.value && e.points && e.points.length) {
var S = e.points.length + 2;
this.cellVerticesBuffer[this.cells_index] = S, this.jellyPointsBuffer[this.cells_index] = 3 * (S - 2), 
this.buffer[this.index++] = h, this.buffer[this.index++] = l, this.buffer[this.index++] = 0, 
this.buffer[this.index++] = 0, this.buffer[this.index++] = 1, this.bufferU32[this.index++] = f, 
this.bufferU32[this.index++] = d, this.buffer[this.index++] = c, this.buffer[this.index++] = b, 
this.buffer[this.index++] = g, this.buffer[this.index++] = u, this.buffer[this.index++] = x, 
this.buffer[this.index++] = o, this.bufferU32[this.index++] = p;
for (var C = 0, A = e.points.length; A > C; C++) {
var z = e.points[C];
this.buffer[this.index++] = z.x, this.buffer[this.index++] = z.y, this.buffer[this.index++] = z.u, 
this.buffer[this.index++] = z.v, this.buffer[this.index++] = z.rl / o, this.bufferU32[this.index++] = f, 
this.bufferU32[this.index++] = d, this.buffer[this.index++] = c, this.buffer[this.index++] = b, 
this.buffer[this.index++] = g, this.buffer[this.index++] = u, this.buffer[this.index++] = x, 
this.buffer[this.index++] = o, this.bufferU32[this.index++] = p;
}
var D = e.points[0];
this.buffer[this.index++] = D.x, this.buffer[this.index++] = D.y, this.buffer[this.index++] = D.u, 
this.buffer[this.index++] = D.v, this.buffer[this.index++] = D.rl / o, this.bufferU32[this.index++] = f, 
this.bufferU32[this.index++] = d, this.buffer[this.index++] = c, this.buffer[this.index++] = b, 
this.buffer[this.index++] = g, this.buffer[this.index++] = u, this.buffer[this.index++] = x, 
this.buffer[this.index++] = o, this.bufferU32[this.index++] = p;
} else if (e.type === H.c.Type.virus && (v.a.raw.spikedViruses.value || v.a.raw.jellyPhysics.value)) {
var M = 2 * Math.PI / 100;
this.cellVerticesBuffer[this.cells_index] = 102, this.jellyPointsBuffer[this.cells_index] = 300;
var B = 0, R = 0, U = 0, E = 0, O = 0, F = 0, L = 0;
for (this.buffer[this.index++] = h, this.buffer[this.index++] = l, this.buffer[this.index++] = 0, 
this.buffer[this.index++] = 0, this.buffer[this.index++] = 1, this.bufferU32[this.index++] = f, 
this.bufferU32[this.index++] = d, this.buffer[this.index++] = c, this.buffer[this.index++] = b, 
this.buffer[this.index++] = g, this.buffer[this.index++] = u, this.buffer[this.index++] = x, 
this.buffer[this.index++] = o, this.bufferU32[this.index++] = p; B < 101; B++) R = B * M, 
F = h + (O = o - 3 + B % 2 * 6) * (U = Math.sin(R)), L = l + O * (E = Math.cos(R)), 
this.buffer[this.index++] = F, this.buffer[this.index++] = L, this.buffer[this.index++] = U, 
this.buffer[this.index++] = E, this.buffer[this.index++] = O / o, this.bufferU32[this.index++] = f, 
this.bufferU32[this.index++] = d, this.buffer[this.index++] = c, this.buffer[this.index++] = b, 
this.buffer[this.index++] = g, this.buffer[this.index++] = u, this.buffer[this.index++] = x, 
this.buffer[this.index++] = o, this.bufferU32[this.index++] = p;
} else {
this.cellVerticesBuffer[this.cells_index] = 6, this.jellyPointsBuffer[this.cells_index] = 12, 
this.buffer[this.index++] = h, this.buffer[this.index++] = l, this.buffer[this.index++] = 0, 
this.buffer[this.index++] = 0, this.buffer[this.index++] = 1, this.bufferU32[this.index++] = f, 
this.bufferU32[this.index++] = d, this.buffer[this.index++] = c, this.buffer[this.index++] = b, 
this.buffer[this.index++] = g, this.buffer[this.index++] = u, this.buffer[this.index++] = x, 
this.buffer[this.index++] = o, this.bufferU32[this.index++] = p, this.buffer[this.index++] = y, 
this.buffer[this.index++] = k, this.buffer[this.index++] = -1, this.buffer[this.index++] = -1, 
this.buffer[this.index++] = 1, this.bufferU32[this.index++] = f, this.bufferU32[this.index++] = d, 
this.buffer[this.index++] = c, this.buffer[this.index++] = b, this.buffer[this.index++] = g, 
this.buffer[this.index++] = u, this.buffer[this.index++] = x, this.buffer[this.index++] = o, 
this.bufferU32[this.index++] = p, this.buffer[this.index++] = w, this.buffer[this.index++] = k, 
this.buffer[this.index++] = 1, this.buffer[this.index++] = -1, this.buffer[this.index++] = 1, 
this.bufferU32[this.index++] = f, this.bufferU32[this.index++] = d, this.buffer[this.index++] = c, 
this.buffer[this.index++] = b, this.buffer[this.index++] = g, this.buffer[this.index++] = u, 
this.buffer[this.index++] = x, this.buffer[this.index++] = o, this.bufferU32[this.index++] = p, 
this.buffer[this.index++] = w, this.buffer[this.index++] = T, this.buffer[this.index++] = 1, 
this.buffer[this.index++] = 1, this.buffer[this.index++] = 1, this.bufferU32[this.index++] = f, 
this.bufferU32[this.index++] = d, this.buffer[this.index++] = c, this.buffer[this.index++] = b, 
this.buffer[this.index++] = g, this.buffer[this.index++] = u, this.buffer[this.index++] = x, 
this.buffer[this.index++] = o, this.bufferU32[this.index++] = p, this.buffer[this.index++] = y, 
this.buffer[this.index++] = T, this.buffer[this.index++] = -1, this.buffer[this.index++] = 1, 
this.buffer[this.index++] = 1, this.bufferU32[this.index++] = f, this.bufferU32[this.index++] = d, 
this.buffer[this.index++] = c, this.buffer[this.index++] = b, this.buffer[this.index++] = g, 
this.buffer[this.index++] = u, this.buffer[this.index++] = x, this.buffer[this.index++] = o, 
this.bufferU32[this.index++] = p, this.buffer[this.index++] = y, this.buffer[this.index++] = k, 
this.buffer[this.index++] = -1, this.buffer[this.index++] = -1, this.buffer[this.index++] = 1, 
this.bufferU32[this.index++] = f, this.bufferU32[this.index++] = d, this.buffer[this.index++] = c, 
this.buffer[this.index++] = b, this.buffer[this.index++] = g, this.buffer[this.index++] = u, 
this.buffer[this.index++] = x, this.buffer[this.index++] = o, this.bufferU32[this.index++] = p;
}
for (var P = this.cellVerticesBuffer[this.cells_index], I = this.index_buffer, j = this.total_vertices, N = 1; N < P - 1; N++) I[this.index_buffer_pos++] = j + 0, 
I[this.index_buffer_pos++] = j + N, I[this.index_buffer_pos++] = j + N + 1;
this.total_vertices += P;
}
function ze() {
this.generateBuffer(), this.p_buffer.update(this.buffer.subarray(0, this.index)), 
this.p_index_buffer.update(this.index_buffer.subarray(0, this.index_buffer_pos)), 
this.mesh.position.set(-this.stage.camera.x * this.stage.scale + this.stage.canvasCenter.x, -this.stage.camera.y * this.stage.scale + this.stage.canvasCenter.y), 
this.mesh.scale.set(this.stage.scale, this.stage.scale), this.shaderData.u_scale = this.stage.scale, 
this.masses.draw();
}
var De = function() {
return (0, a.a)(function e(t) {
(0, n.a)(this, e), this.render = t, this.shaderData = {
u_scale: 1e-4,
u_glowscale: 0,
u_uvs: new Float32Array([ 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0 ]),
u_skins_alpha: 1,
u_stroke_enabled: 1,
u_merge_indicator_color: v.b.raw.mergeIndicatorColor.microcolor.vector,
u_mb_ring_width: 0
}, this.buffer = new Float32Array(3932160), this.bufferU32 = new Uint32Array(this.buffer.buffer), 
this.index_buffer = new Uint32Array(new ArrayBuffer(15728640)), this.index_buffer_pos = 0, 
this.jellyPointsBuffer = new Uint16Array(new ArrayBuffer(131070)), this.cellVerticesBuffer = new Uint8Array(new ArrayBuffer(65535)), 
this.total_vertices = 0, this.index = 0, this.cells_index = 0, this.p_buffer = new d.d(this.buffer.buffer), 
this.p_index_buffer = new d.d(this.index_buffer.buffer), this.p_jellyPointsBuffer = new d.d(this.jellyPointsBuffer.buffer);
}, [ {
key: "stage",
get: ye
}, {
key: "loadShader",
value: we
}, {
key: "init",
value: ke
}, {
key: "generateVAO",
value: Te
}, {
key: "clear",
value: Se
}, {
key: "generateBuffer",
value: Ce
}, {
key: "writeCellBuffer",
value: Ae
}, {
key: "draw",
value: ze
} ]);
}();
function Me(e, t) {
var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
if (!i) {
if (Array.isArray(e) || (i = function(e, t) {
if (e) {
if ("string" == typeof e) return Be(e, t);
var i = {}.toString.call(e).slice(8, -1);
return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Be(e, t) : void 0;
}
}(e)) || t && e && "number" == typeof e.length) {
i && (e = i);
var s = 0, r = function() {};
return {
s: r,
n: function() {
return s >= e.length ? {
done: !0
} : {
done: !1,
value: e[s++]
};
},
e: function(e) {
throw e;
},
f: r
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var n, a = !0, h = !1;
return {
s: function() {
i = i.call(e);
},
n: function() {
var e = i.next();
return a = e.done, e;
},
e: function(e) {
h = !0, n = e;
},
f: function() {
try {
a || null == i.return || i.return();
} finally {
if (h) throw n;
}
}
};
}
function Be(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var i = 0, s = Array(t); i < t; i++) s[i] = e[i];
return s;
}
function Re() {
return this.render.stage;
}
function Ue() {
var e = new d.r("precision highp float;\n\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\n\nattribute vec2 vert_pos;\nattribute vec2 u_uvs;\nattribute vec2 origin;\nattribute vec4 color;\nattribute float alpha;\nattribute float rotation;\n\nvarying vec2 uv;\nvarying vec4 fill;\n\nvoid main() {\n    vec2 pos = vert_pos - origin;\n    float s = pos.x;\n    pos.x = s*cos(rotation) - pos.y*sin(rotation);\n    pos.y = s*sin(rotation) + pos.y*cos(rotation);\n    pos += origin;\n    gl_Position = vec4( projectionMatrix * translationMatrix * vec3(pos , 1.0), 1.0);\n    fill = color;\n    fill.a = alpha;\n    uv = u_uvs;\n}", "precision highp float;\n\nuniform float u_scale;\n\nvarying vec4 fill;\nvarying vec2 uv;\n\nvoid main() {\n    float h = 0.5;\n    float c = 1.0 - smoothstep(h - (0.1 + (0.02 / u_scale)), h, abs(uv.x-0.5));\n    gl_FragColor = vec4(fill.rgb * c * fill.a, fill.a  * c * fill.a);\n}");
this.shader = new d.t(e, this.shaderData), this.mesh.shader = this.shader, this.mesh.visible = !0;
}
function Ee() {
this.generateVAO(), this.mesh = new d.o(this.geometry, void 0, null, d.g.TRIANGLES), 
this.mesh.visible = !1, this.loadShader();
}
function Oe() {
this.geometry = new d.j, p([ [ 2, d.v.FLOAT, !1, 4, 0, "vert_pos" ], [ 2, d.v.FLOAT, !1, 4, 0, "u_uvs" ], [ 2, d.v.FLOAT, !1, 4, 0, "origin" ], [ 4, d.v.UNSIGNED_BYTE, !0, 1, 0, "color" ], [ 1, d.v.FLOAT, !1, 4, 0, "alpha" ], [ 1, d.v.FLOAT, !1, 4, 0, "rotation" ] ], this.p_buffer, this.geometry);
}
function Fe() {
this.index = 0, this.buffer.fill(0);
}
function Le() {
if (v.a.raw.cursorTracking.value) {
var e, t = 0, i = Me(this.render.app.clients.render);
try {
for (i.s(); !(e = i.n()).done; ) for (var s = e.value, r = 0, n = s.unitManager.units.length; n > r; r++) {
var a = s.unitManager.units[r];
a.client.isAgario;
if (this.render.app.unitManager.activeUnit == a || v.a.raw.mbMultiCursorTracking.value) {
var h = 0, l = 0;
a.useAi ? (h = a.target.x, l = a.target.y) : a._cursorContinousMovement ? (h = a.client.targetX, 
l = a.client.targetY) : (h = a.cursor.x, l = a.cursor.y);
for (var o = a.cells, u = 0, f = o.length; u < f; u++) {
var c = o[u], d = c.x, b = c.y, _ = v.b.raw.cursorTrackingColor.microcolor.u32, g = v.b.raw.cursorTrackingColor.microcolor.vector[3], x = v.b.raw.cursorTrackingSize.value + 0 + 1.5 / this.stage.scale;
g = c.canNextSplit ? g : .3 * g, t += this.writeLine(d, b, h, l, x, _, g);
}
}
}
} catch (e) {
i.e(e);
} finally {
i.f();
}
this.triangles += t;
}
}
function Pe() {
var e, t = 0, i = Me(this.render.app.clients.render);
try {
for (i.s(); !(e = i.n()).done; ) for (var s = e.value, r = 0, n = s.cells.length; n > r; r++) {
var a = s.cells[r];
if (a.player) {
var h = a.x, l = a.y;
if (h != 1 / 0 || l != 1 / 0) {
var o = a.player, u = o.tx, f = o.ty, c = a.shader_color, d = .7 * v.b.raw.cursorTrackingColor.microcolor.vector[3], b = v.b.raw.cursorTrackingSize.value + 1.5 / this.stage.scale;
t += this.writeLine(h, l, u, f, b, c, d);
}
}
}
} catch (e) {
i.e(e);
} finally {
i.f();
}
this.triangles += t;
}
function Ie(e, t, i, s, r, n, a) {
var h = -e - (i - 2 * e), l = -t - (s - 2 * t), o = Math.sqrt(h * h + l * l), u = Math.atan(h / l), f = (t < s ? 0 : Math.PI) - u, c = e + -r / 2, d = e + +r / 2, v = t, b = v + o, _ = e, g = t;
return this.buffer[this.index++] = c, this.buffer[this.index++] = v, this.buffer[this.index++] = this.shaderData.u_uvs[0], 
this.buffer[this.index++] = this.shaderData.u_uvs[1], this.buffer[this.index++] = _, 
this.buffer[this.index++] = g, this.bufferU32[this.index++] = n, this.buffer[this.index++] = a, 
this.buffer[this.index++] = f, this.buffer[this.index++] = d, this.buffer[this.index++] = v, 
this.buffer[this.index++] = this.shaderData.u_uvs[2], this.buffer[this.index++] = this.shaderData.u_uvs[3], 
this.buffer[this.index++] = _, this.buffer[this.index++] = g, this.bufferU32[this.index++] = n, 
this.buffer[this.index++] = a, this.buffer[this.index++] = f, this.buffer[this.index++] = c, 
this.buffer[this.index++] = b, this.buffer[this.index++] = this.shaderData.u_uvs[4], 
this.buffer[this.index++] = this.shaderData.u_uvs[5], this.buffer[this.index++] = _, 
this.buffer[this.index++] = g, this.bufferU32[this.index++] = n, this.buffer[this.index++] = a, 
this.buffer[this.index++] = f, this.buffer[this.index++] = d, this.buffer[this.index++] = v, 
this.buffer[this.index++] = this.shaderData.u_uvs[6], this.buffer[this.index++] = this.shaderData.u_uvs[7], 
this.buffer[this.index++] = _, this.buffer[this.index++] = g, this.bufferU32[this.index++] = n, 
this.buffer[this.index++] = a, this.buffer[this.index++] = f, this.buffer[this.index++] = c, 
this.buffer[this.index++] = b, this.buffer[this.index++] = this.shaderData.u_uvs[8], 
this.buffer[this.index++] = this.shaderData.u_uvs[9], this.buffer[this.index++] = _, 
this.buffer[this.index++] = g, this.bufferU32[this.index++] = n, this.buffer[this.index++] = a, 
this.buffer[this.index++] = f, this.buffer[this.index++] = d, this.buffer[this.index++] = b, 
this.buffer[this.index++] = this.shaderData.u_uvs[10], this.buffer[this.index++] = this.shaderData.u_uvs[11], 
this.buffer[this.index++] = _, this.buffer[this.index++] = g, this.bufferU32[this.index++] = n, 
this.buffer[this.index++] = a, this.buffer[this.index++] = f, 6;
}
function je() {
this.index = 0, this.triangles = 0, this.writeOwnCursorLines(), this.writeOthersCursorLines(), 
this.p_buffer.update(this.buffer.subarray(0, this.index)), this.mesh.position.set(this.stage.camera.x * -this.stage.scale + this.render.stage.canvasCenter.x, this.stage.camera.y * -this.stage.scale + this.render.stage.canvasCenter.y), 
this.mesh.scale.set(this.stage.scale, this.stage.scale), this.shaderData.u_scale = this.stage.scale;
}
var Ne = function() {
return (0, a.a)(function e(t) {
(0, n.a)(this, e), this.render = t, this.shaderData = {
u_alpha: 1,
u_scale: 1e-4,
u_uvs: new Float32Array([ 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0 ])
}, this.buffer = new Float32Array(86016), this.bufferU32 = new Uint32Array(this.buffer.buffer), 
this.total_vertices = 0, this.index = 0, this.cells_index = 0, this.triangles = 0, 
this.p_buffer = new d.d(this.buffer.buffer);
}, [ {
key: "stage",
get: Re
}, {
key: "loadShader",
value: Ue
}, {
key: "init",
value: Ee
}, {
key: "generateVAO",
value: Oe
}, {
key: "clear",
value: Fe
}, {
key: "writeOwnCursorLines",
value: Le
}, {
key: "writeOthersCursorLines",
value: Pe
}, {
key: "writeLine",
value: Ie
}, {
key: "draw",
value: je
} ]);
}();
function We(e, t) {
var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
if (!i) {
if (Array.isArray(e) || (i = function(e, t) {
if (e) {
if ("string" == typeof e) return Ve(e, t);
var i = {}.toString.call(e).slice(8, -1);
return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? Ve(e, t) : void 0;
}
}(e)) || t && e && "number" == typeof e.length) {
i && (e = i);
var s = 0, r = function() {};
return {
s: r,
n: function() {
return s >= e.length ? {
done: !0
} : {
done: !1,
value: e[s++]
};
},
e: function(e) {
throw e;
},
f: r
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var n, a = !0, h = !1;
return {
s: function() {
i = i.call(e);
},
n: function() {
var e = i.next();
return a = e.done, e;
},
e: function(e) {
h = !0, n = e;
},
f: function() {
try {
a || null == i.return || i.return();
} finally {
if (h) throw n;
}
}
};
}
function Ve(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var i = 0, s = Array(t); i < t; i++) s[i] = e[i];
return s;
}
function Ge() {
return this.render.stage;
}
function He() {
var e = new d.r("precision highp float;\n\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\nuniform float u_scale;\n\nattribute vec2 pos;\nattribute vec2 uv;\nattribute vec4 b_color;\nattribute float b_alpha;\nattribute float b_cellsize;\nattribute float b_linewidth;\n\nvarying vec2 center_uv;\nvarying vec4 fill;\nvarying vec2 cell_uv;\nvarying float v_cellsize ;\nvarying float v_linewidth ;\n\nvoid main() {\n    v_cellsize = b_cellsize;\n    v_linewidth = b_linewidth;\n    \n    float line_width = (1.0 - ((b_cellsize - v_linewidth) / b_cellsize ));\n    float u_Thickness = line_width +  (1.0 - (b_cellsize - 3.5/ u_scale) / b_cellsize);\n    float u_Radius =  u_Thickness; \n    // float u_Radius =  1.0 / (b_cellsize );\n    vec2 kuda = vec2((uv.x - 0.5) * 2.0, (uv.y - 0.5) *  2.0);\n    vec2 kuda_flip = vec2(kuda.x, -kuda.y);\n    float overlap_cell_scale = 0.0 + u_Radius;\n    // gl_Position = u_proj * vec4(pos , 0.0f, 1.0f);\n    gl_Position = vec4(projectionMatrix * translationMatrix * vec3(pos + (b_cellsize * overlap_cell_scale / kuda_flip)  , 1.0), 1.0);\n    cell_uv = uv * vec2(.5, .5) * 2.0;\n    center_uv = uv + (kuda * 0.5 * overlap_cell_scale);\n\n    vec4 tint = b_color;\n    fill = vec4(tint.xyz,  b_alpha*b_alpha);\n}", "precision highp float;\n\nuniform sampler2D u_texture;\nuniform sampler2D u_mask;\nuniform float u_scale;\nuniform bool u_stroke_enabled;\n\nvarying vec2 center_uv;\nvarying vec2 cell_uv;\nvarying vec4 fill;\nvarying float v_cellsize;\nvarying float v_linewidth;\n\nfloat AntiAliasedCircle(vec2 uv, vec2 pos, float r, float blur) {\n    float d = length(uv-pos);\n    return smoothstep(r + blur, r - blur, d);\n}\nconst vec2 center = vec2(0.5);\n\nvoid main() {\n    float u_Thickness =  (1.0 - ((v_cellsize - v_linewidth) / v_cellsize)) * 0.5;\n    float u_Radius =  0.5 + (u_Thickness);\n    float l = length(center_uv - 0.5);\n    float stroke_alpha = smoothstep(0.5 / (v_cellsize * u_scale) + u_Thickness  , 0.0, abs(l - u_Radius + u_Thickness) );   \n\n    float aa = 0.4 / (v_cellsize * u_scale);\n    float shape = AntiAliasedCircle(center_uv, center, .5, aa);\n    gl_FragColor = vec4(fill.rgb * shape * fill.a, shape * fill.a);\n\n    gl_FragColor = mix(gl_FragColor, fill* fill.a, stroke_alpha * fill.a);\n}\n");
this.shader = new d.t(e, this.shaderData), this.mesh.shader = this.shader, this.mesh.visible = !0;
}
function Xe() {
this.bufPosition = new d.d(this.buffer.buffer), this.generateVAO(), this.mesh = new d.o(this.geometry, this.shader), 
this.mesh.visible = !1, this.mesh.blendMode = d.a.NORMAL, this.loadShader();
}
function Ye() {
this.geometry = new d.j, p([ [ 2, d.v.FLOAT, !1, 4, 0, "pos" ], [ 2, d.v.FLOAT, !1, 4, 0, "uv" ], [ 4, d.v.UNSIGNED_BYTE, !0, 1, 0, "b_color" ], [ 1, d.v.FLOAT, !1, 4, 0, "b_alpha" ], [ 1, d.v.FLOAT, !1, 4, 0, "b_cellsize" ], [ 1, d.v.FLOAT, !1, 4, 0, "b_linewidth" ] ], this.bufPosition, this.geometry);
}
function qe() {
this.index = 0, this.buffer.fill(0);
}
function $e() {
if (this.index = 0, v.a.raw.showGhostCells.value) {
var e, t = v.b.raw.ghostCellsColor.microcolor.vector[3], i = We(this.render.app.leaderboard.ghostCells);
try {
for (i.s(); !(e = i.n()).done; ) {
var s = e.value;
if (!s.inView && this.stage.isInDisplay(s.x, s.y, s.size)) {
var r = v.b.raw.ghostCellsColor.microcolor.float, n = s.x, a = s.y, h = s.size;
this.writeArcBuffer(n, a, h, 600, r, t);
}
}
} catch (e) {
i.e(e);
} finally {
i.f();
}
}
}
function Ke(e, t, i, s, r, n) {
var a = e - i, h = e + i, l = t - i, o = t + i;
this.buffer[this.index++] = a, this.buffer[this.index++] = l, this.buffer[this.index++] = this.shaderData.u_uvs[0], 
this.buffer[this.index++] = this.shaderData.u_uvs[1], this.buffer[this.index++] = r, 
this.buffer[this.index++] = n, this.buffer[this.index++] = i, this.buffer[this.index++] = s, 
this.buffer[this.index++] = h, this.buffer[this.index++] = l, this.buffer[this.index++] = this.shaderData.u_uvs[2], 
this.buffer[this.index++] = this.shaderData.u_uvs[3], this.buffer[this.index++] = r, 
this.buffer[this.index++] = n, this.buffer[this.index++] = i, this.buffer[this.index++] = s, 
this.buffer[this.index++] = a, this.buffer[this.index++] = o, this.buffer[this.index++] = this.shaderData.u_uvs[4], 
this.buffer[this.index++] = this.shaderData.u_uvs[5], this.buffer[this.index++] = r, 
this.buffer[this.index++] = n, this.buffer[this.index++] = i, this.buffer[this.index++] = s, 
this.buffer[this.index++] = h, this.buffer[this.index++] = l, this.buffer[this.index++] = this.shaderData.u_uvs[6], 
this.buffer[this.index++] = this.shaderData.u_uvs[7], this.buffer[this.index++] = r, 
this.buffer[this.index++] = n, this.buffer[this.index++] = i, this.buffer[this.index++] = s, 
this.buffer[this.index++] = a, this.buffer[this.index++] = o, this.buffer[this.index++] = this.shaderData.u_uvs[8], 
this.buffer[this.index++] = this.shaderData.u_uvs[9], this.buffer[this.index++] = r, 
this.buffer[this.index++] = n, this.buffer[this.index++] = i, this.buffer[this.index++] = s, 
this.buffer[this.index++] = h, this.buffer[this.index++] = o, this.buffer[this.index++] = this.shaderData.u_uvs[10], 
this.buffer[this.index++] = this.shaderData.u_uvs[11], this.buffer[this.index++] = r, 
this.buffer[this.index++] = n, this.buffer[this.index++] = i, this.buffer[this.index++] = s;
}
function Qe() {
this.generateBuffer(), this.bufPosition.update(this.buffer.subarray(0, this.index)), 
this.mesh.position.set(this.stage.camera.x * -this.stage.scale + this.render.stage.canvasCenter.x, this.stage.camera.y * -this.stage.scale + this.render.stage.canvasCenter.y), 
this.mesh.scale.set(this.stage.scale, this.stage.scale), this.shaderData.u_scale = this.stage.scale;
}
var Je = function() {
return (0, a.a)(function e(t) {
(0, n.a)(this, e), this.render = t, this.shaderData = {
u_scale: 1e-4,
u_glowscale: 0,
u_uvs: new Float32Array([ 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0 ])
}, this.buffer = new Float32Array(2359296), this.index = 0, this.triangles = 0;
}, [ {
key: "stage",
get: Ge
}, {
key: "loadShader",
value: He
}, {
key: "init",
value: Xe
}, {
key: "generateVAO",
value: Ye
}, {
key: "clear",
value: qe
}, {
key: "generateBuffer",
value: $e
}, {
key: "writeArcBuffer",
value: Ke
}, {
key: "draw",
value: Qe
} ]);
}();
function Ze(e, t, i) {
return t = (0, l.a)(t), (0, h.a)(e, et() ? Reflect.construct(t, i || [], (0, l.a)(e).constructor) : t.apply(e, i));
}
function et() {
try {
var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
} catch (e) {}
return (et = function() {
return !!e;
})();
}
function tt() {
this.gridProgram = new d.r("precision highp float;\n\nuniform float u_stage_scale;\n\nattribute vec2 aPosition;\n\nvarying float v_aa1;\nvarying float v_aa2;\n\nvoid main() {\n    \n    gl_Position = vec4(aPosition, 0.0, 1.0);\n    // v_aa1 =  0.96 - (0.07 / u_stage_scale);\n    // v_aa2 =  0.99 + (0.1 / u_stage_scale);\n    v_aa1 = 0.998 - (0.01 / u_stage_scale/ u_stage_scale);\n    v_aa2 = 0.9999 + (0.01 / u_stage_scale/ u_stage_scale);\n}", "precision highp float;\n\n#define PI 3.141592\n// size of a square in pixel\n#define N 25.0\n\nfloat hexSdf(vec2 p, float scale) {\n        p.x *= 0.57735*2.0;\n        p.y += mod(floor(p.x/scale), 2.0)*0.5*scale;\n        p = abs((mod(p/scale, 1.0) - 0.5));\n        return 1.0-abs(max(p.x*1.5 + p.y, p.y*2.0) - 1.0);\n}\n\n\nfloat miv(vec2 a){return min(a.y,a.x);}//return max domain of vector.\nfloat miv(vec3 a){return min(a.z,miv(a.xy));}\nfloat miv(vec4 a){return min(miv(a.zw),miv(a.xy));}\n#define mav(a) -miv(-a)\n#define grid(u) mav(abs(fract(u)*2.0-1.0))\n\nuniform float u_stage_scale;\nuniform float alpha;\nuniform vec2 offset;\nuniform vec3 gridColor;\n\nvarying float v_aa1;\nvarying float v_aa2;\n\nfloat zoom = 10.0;//2d scaling (ширина квадрата)\n\nvoid main(){\n    // GRID\n    // vec2 muv = (offset + gl_FragCoord.xy) / (500.0 * u_stage_scale);\n    // float gr = smoothstep(v_aa1, v_aa2, grid(muv * zoom));\n    // gl_FragColor = vec4(gridColor * gr, gr) * alpha;\n    // HEX\n    // float shape = hexSdf((offset + gl_FragCoord.xy) / 50.0, u_stage_scale);\n    // shape = smoothstep(v_aa1, v_aa2, shape);\n    // gl_FragColor = vec4(gridColor * shape, shape) * alpha;\n\n    // vec2 u = (offset + gl_FragCoord.xy) / (50.0 * u_stage_scale);\n    // vec2 s = vec2(1.,1.732);\n    // vec2 a = mod(u     ,s)*2.-s;\n    // vec2 b = mod(u+s*.5,s)*2.-s;\n    // float shape = .7 * min(dot(a,a), dot(b,b));\n    // gl_FragColor = vec4(gridColor * shape, shape) * alpha;\n\n    vec2 muv = (offset + gl_FragCoord.xy) / (u_stage_scale);\n    // rotation\n    muv = cos(PI/N*muv);\n\tfloat shape = smoothstep(v_aa1, v_aa2, max(muv.x,muv.y));\n    gl_FragColor = vec4(gridColor * shape, shape) * alpha;\n}"), 
this.gridShader = new d.t(this.gridProgram, this.uniforms), this.mesh.shader = this.gridShader, 
this.mesh.visible = !0;
}
function it() {
var e = this;
this.gridGeometry = new d.j, this.mesh = new d.o(this.gridGeometry, void 0), this.mesh.visible = !1, 
this.loadShader();
var t = new d.d(new Float32Array([ -1, 1, 1, 1, -1, -1, 1, 1, -1, -1, 1, -1 ]));
this.gridGeometry.addAttribute("aPosition", t, 2, !1, d.v.FLOAT, 8, 0), this.render.listenTo(v.a, "showGrid", function() {
e.mesh.renderable = v.a.raw.showGrid.value;
})();
}
function st(e, t, i, s, r) {
var n = e / i / 2 - s, a = -t / i / 2 - r;
this.uniforms.offset[0] = -n * i, this.uniforms.offset[1] = a * i, this.uniforms.alpha = Math.min(1, i >= .1 ? 1 * i - .1 : 0), 
this.uniforms.gridLineThickness = 30 / (500 * i), this.uniforms.gridColor[0] = v.b.raw.gridColor.microcolor.vector[0], 
this.uniforms.gridColor[1] = v.b.raw.gridColor.microcolor.vector[1], this.uniforms.gridColor[2] = v.b.raw.gridColor.microcolor.vector[2], 
this.uniforms.u_stage_scale = i;
}
var rt = function(e) {
function t(e) {
var i;
return (0, n.a)(this, t), (i = Ze(this, t)).render = e, i.uniforms = {
u_stage_scale: 1,
offset: new Float32Array([ 0, 0 ]),
gridColor: new Float32Array([ 0, 0, 0 ]),
alpha: 1,
gridLineThickness: .01
}, i.render = e, i;
}
return (0, o.a)(t, e), (0, a.a)(t, [ {
key: "loadShader",
value: tt
}, {
key: "init",
value: it
}, {
key: "renderGrid",
value: st
} ]);
}(c.Eventify);
function nt() {
return this.render.stage;
}
function at() {
var e = new d.r("precision highp float;\n\nuniform float u_scale;\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\n\nattribute vec2 pos;\nattribute vec2 uv;\nattribute vec4 b_color;\nattribute float b_cellsize;\n\nvarying vec2 center_uv;\nvarying vec4 fill;\n// varying vec2 cell_uv;\nvarying float v_cellsize ;\nvoid main() {\n    float u_Radius =   1.0 - (b_cellsize / (b_cellsize + (38.0 )) - (1.0 - (b_cellsize - 3.5/ u_scale) / b_cellsize));\n    vec2 kuda = vec2((uv.x - 0.5) * 2.0, (uv.y - 0.5) *  2.0);\n    vec2 kuda_flip = vec2(kuda.x, -kuda.y);\n    float overlap_cell_scale = 0.0 + u_Radius;\n    float overlap =  b_cellsize * overlap_cell_scale;\n    gl_Position = vec4(projectionMatrix * translationMatrix * vec3(pos + (b_cellsize * overlap_cell_scale / kuda_flip) , 1.0)  , 1.0);\n    v_cellsize = b_cellsize;\n    // cell_uv = uv * vec2(.5, .5) * 2.0;\n    center_uv = uv + (kuda * 0.5 * overlap_cell_scale);\n\n    vec4 tint = b_color;\n    fill = vec4(tint.xyz,1.);\n}", "precision highp float;\nuniform float u_scale;\n\nvarying vec2 center_uv;\nvarying vec4 fill;\nvarying float v_cellsize;\n\nvoid main() {\n    float u_Radius =  0.5 / (v_cellsize / (v_cellsize + (14.0 + 2.0 / u_scale))); // Крайняя граница круга\n    float u_Thickness = (1.0 - (v_cellsize - 3.5) / v_cellsize); // толщина контура в от 0 до 1\n    // vec4 stroke_color = vec4(fill.xyz * 0.925 ,1.0); // цвет контура с использованием затемнения\n    vec4 stroke_color = fill; // цвет контура с использованием затемнения\n    u_Radius = u_Radius - u_Thickness * 0.05 * u_scale; // у радиуса отняли пол контура\n    float l = length(center_uv - 0.5);\n    float stroke_alpha = smoothstep(u_Thickness, 0.0, (abs(l - u_Radius) - u_Thickness) * u_scale * 6.0 );       \n    gl_FragColor = mix(gl_FragColor, stroke_color * 0.8, stroke_alpha * 0.8);\n    // color += vec4(0.0, 0.5, 0.5, 0.5);\n}");
this.shader = new d.t(e, this.shaderData), this.mesh.shader = this.shader, this.mesh.visible = !0;
}
function ht() {
this.generateVAO(), this.mesh = new d.o(this.geometry, void 0), this.mesh.visible = !1, 
this.loadShader();
}
function lt() {
this.geometry = new d.j, p([ [ 2, d.v.FLOAT, !1, 4, 0, "pos" ], [ 2, d.v.FLOAT, !1, 4, 0, "uv" ], [ 4, d.v.UNSIGNED_BYTE, !0, 1, 0, "b_color" ], [ 1, d.v.FLOAT, !1, 4, 0, "b_cellsize" ] ], this.bufPosition, this.geometry);
}
function ot() {
this.index = 0, this.buffer.fill(0);
}
function ut() {
this.index = 0;
var e = 0, t = this.render.app.unitManager.activeUnit;
if (this.render.app.unitManager.anyPlay && v.a.raw.oppRings.value) {
for (var i = [ t.biggerHSTECellsCache, v.b.raw.bHSTEColor.microcolor.float, t.biggerDSTECellsCache, v.b.raw.bDSTEColor.microcolor.float, t.biggerSTECellsCache, v.b.raw.bSTEColor.microcolor.float, t.biggerCellsCache, v.b.raw.bColor.microcolor.float, t.smallerCellsCache, v.b.raw.sColor.microcolor.float, t.smallerSTECellsCache, v.b.raw.sSTEColor.microcolor.float, t.smallerDSTECellsCache, v.b.raw.sDSTEColor.microcolor.float, t.smallerHSTECellsCache, v.b.raw.sHSTEColor.microcolor.float ], s = 0; s < i.length; s += 2) for (var r = i[s + 1], n = i[s], a = 0, h = n.length; a < h; a++) {
var l = n[a], o = l.x, u = l.y, f = l.size, c = o - f, d = o + f, b = u - f, _ = u + f;
this.buffer[this.index++] = c, this.buffer[this.index++] = b, this.buffer[this.index++] = this.shaderData.u_uvs[0], 
this.buffer[this.index++] = this.shaderData.u_uvs[1], this.buffer[this.index++] = r, 
this.buffer[this.index++] = f, this.buffer[this.index++] = d, this.buffer[this.index++] = b, 
this.buffer[this.index++] = this.shaderData.u_uvs[2], this.buffer[this.index++] = this.shaderData.u_uvs[3], 
this.buffer[this.index++] = r, this.buffer[this.index++] = f, this.buffer[this.index++] = c, 
this.buffer[this.index++] = _, this.buffer[this.index++] = this.shaderData.u_uvs[4], 
this.buffer[this.index++] = this.shaderData.u_uvs[5], this.buffer[this.index++] = r, 
this.buffer[this.index++] = f, this.buffer[this.index++] = d, this.buffer[this.index++] = b, 
this.buffer[this.index++] = this.shaderData.u_uvs[6], this.buffer[this.index++] = this.shaderData.u_uvs[7], 
this.buffer[this.index++] = r, this.buffer[this.index++] = f, this.buffer[this.index++] = c, 
this.buffer[this.index++] = _, this.buffer[this.index++] = this.shaderData.u_uvs[8], 
this.buffer[this.index++] = this.shaderData.u_uvs[9], this.buffer[this.index++] = r, 
this.buffer[this.index++] = f, this.buffer[this.index++] = d, this.buffer[this.index++] = _, 
this.buffer[this.index++] = this.shaderData.u_uvs[10], this.buffer[this.index++] = this.shaderData.u_uvs[11], 
this.buffer[this.index++] = r, this.buffer[this.index++] = f, e += 6;
}
return e;
}
}
function ft() {
this.generateBuffer(), this.bufPosition.update(this.buffer.subarray(0, this.index)), 
this.mesh.position.set(this.stage.camera.x * -this.stage.scale + this.render.stage.canvasCenter.x, this.stage.camera.y * -this.stage.scale + this.render.stage.canvasCenter.y), 
this.mesh.scale.set(this.stage.scale, this.stage.scale), this.shaderData.u_scale = this.stage.scale;
}
var ct = function() {
return (0, a.a)(function e(t) {
(0, n.a)(this, e), this.render = t, this.shaderData = {
u_scale: 1e-4,
u_uvs: new Float32Array([ 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0 ])
}, this.buffer = new Float32Array(2359296), this.index = 0, this.bufPosition = new d.d(this.buffer.buffer);
}, [ {
key: "stage",
get: nt
}, {
key: "loadShader",
value: at
}, {
key: "init",
value: ht
}, {
key: "generateVAO",
value: lt
}, {
key: "clear",
value: ot
}, {
key: "generateBuffer",
value: ut
}, {
key: "draw",
value: ft
} ]);
}();
function dt(e, t) {
var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
if (!i) {
if (Array.isArray(e) || (i = function(e, t) {
if (e) {
if ("string" == typeof e) return vt(e, t);
var i = {}.toString.call(e).slice(8, -1);
return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? vt(e, t) : void 0;
}
}(e)) || t && e && "number" == typeof e.length) {
i && (e = i);
var s = 0, r = function() {};
return {
s: r,
n: function() {
return s >= e.length ? {
done: !0
} : {
done: !1,
value: e[s++]
};
},
e: function(e) {
throw e;
},
f: r
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var n, a = !0, h = !1;
return {
s: function() {
i = i.call(e);
},
n: function() {
var e = i.next();
return a = e.done, e;
},
e: function(e) {
h = !0, n = e;
},
f: function() {
try {
a || null == i.return || i.return();
} finally {
if (h) throw n;
}
}
};
}
function vt(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var i = 0, s = Array(t); i < t; i++) s[i] = e[i];
return s;
}
function bt() {
return this.render.stage;
}
function _t() {
var e = new d.r("precision highp float;\n#pragma glslify: vert\nuniform float u_scale;\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\n\nattribute vec2 pos;\nattribute vec2 uv;\nattribute float b_cellsize;\nattribute float b_glowsize;\nattribute vec4 b_color;\nattribute float b_alpha;\n\nvarying float v_cellsize;\nvarying float v_linewidth_scale;\nvarying vec2 cell_uv;\nvarying vec2 center_uv;\nvarying vec4 fill;\n\nvoid main() {\n    v_cellsize = b_cellsize;\n    float v_linewidth = b_cellsize * b_glowsize;\n    float line_width = v_linewidth / b_cellsize;\n    v_linewidth_scale = line_width;\n    float u_Thickness = line_width +  (1.5 / u_scale / b_cellsize);\n    float u_Radius =  u_Thickness; \n    // float u_Radius =  1.0 / (b_cellsize );\n    // vec2 uv = u_uvs[gl_VertexID % 6];\n    vec2 dir = (uv - 0.5) * 2.0;\n    float overlap_cell_scale = 0.0 + u_Radius;\n    // gl_Position = u_proj * vec4(pos , 0.0f, 1.0f);\n    // gl_Position =  vec4((pos + (b_cellsize * overlap_cell_scale / dir) - uTranslate) * uScale , 0.0, 1.0);\n    gl_Position = vec4(projectionMatrix * translationMatrix * vec3(pos + (b_cellsize * overlap_cell_scale / dir), 1.0) , 1.0);\n    \n    cell_uv = uv - vec2(.5) + (overlap_cell_scale/ dir);\n    center_uv = uv + (dir * 0.5 * overlap_cell_scale);\n\n    fill = b_color;\n    fill.a = b_alpha;\n}", "precision highp float;\nuniform float u_scale;\n\nfloat AntiAliasedCircle(vec2 uv, vec2 pos, float r, float blur) {\n    float d = length(uv-pos);\n    return smoothstep(r + blur, r - blur, d);\n}\n\nvarying vec2 center_uv;\nvarying float v_cellsize;\nvarying vec2 cell_uv;\nvarying vec4 fill;\nvarying float v_linewidth_scale;\n\nconst vec2 center = vec2(0.5);\n\nvoid main() {\n\tfloat aa = 0.4 / (v_cellsize * u_scale);\n    float shape = AntiAliasedCircle(center_uv, center, .5, aa);\n\n    if(v_linewidth_scale == 0.0){\n        gl_FragColor = vec4(fill.rgb, shape * fill.a);\n    }else{\n        float shadow = AntiAliasedCircle(center_uv, center, 0.5, v_linewidth_scale*.5 + aa) * 0.5;\n        // float Radius = 0.0;\n        // float shadow = (1.0 - length(cell_uv/v_linewidth_scale)+(Radius/v_linewidth_scale)) * 0.25;\n        gl_FragColor = vec4(fill.rgb, max(shadow,shape) * fill.a);\n    }\n}");
this.shader = new d.t(e, this.shaderData), this.mesh.shader = this.shader, this.mesh.visible = !0;
}
function gt() {
this.bufPosition = new d.d, this.geometry = new d.j;
var e = p([ [ 2, d.v.FLOAT, !1, 4, 0, "pos" ], [ 2, d.v.FLOAT, !1, 4, 0, "uv" ], [ 1, d.v.FLOAT, !1, 4, 0, "b_cellsize" ], [ 1, d.v.FLOAT, !1, 4, 0, "b_glowsize" ], [ 4, d.v.UNSIGNED_BYTE, !0, 1, 0, "b_color" ], [ 1, d.v.FLOAT, !1, 4, 0, "b_alpha" ] ], this.bufPosition, this.geometry).vertexSize;
this.buffer = new Float32Array(e / 4 * 6 * 65535), this.bufPosition.update(this.buffer.buffer), 
this.bufferU32 = new Uint32Array(this.buffer.buffer), this.mesh = new d.o(this.geometry, void 0), 
this.mesh.visible = !1, this.mesh.blendMode = d.a.NORMAL_NPM, this.loadShader();
}
function xt() {}
function mt() {
this.index = 0, this.buffer.fill(0);
}
function pt() {
Date.now();
if (this.index = 0, this.triangles = 0, !this.render.foodIsHidden(this.render.app.unitManager.activeUnit)) {
var e, t = v.a.raw.rainbowFood.value, i = v.b.raw.foodColor.microcolor.u32, s = v.b.raw.foodSize.value, r = dt(this.stage.removedPelletsSet);
try {
for (r.s(); !(e = r.n()).done; ) {
var n = e.value;
this.writeBuffer(n.x, n.y, n.size + s, 10 * v.b.raw.foodGlowSize.value, t ? n.shader_color : i, n.alpha);
}
} catch (e) {
r.e(e);
} finally {
r.f();
}
for (var a = 0, h = this.stage.app.clients.render.length; a < h; a++) {
var l = this.stage.app.clients.render[a];
if (this.stage.boxInDisplay(l.bounds.minX, l.bounds.minY, l.bounds.maxX - l.bounds.minX, l.bounds.maxY - l.bounds.minY)) for (var o = 0, u = this.stage.app.clients.render[a].foods.length; o < u; o++) {
var f = this.stage.app.clients.render[a].foods[o];
this.writeBuffer(f.x, f.y, f.size + s, 10 * v.b.raw.foodGlowSize.value, t ? f.shader_color : i, f.alpha);
}
}
return this.index;
}
}
function yt(e, t, i, s, r, n) {
var a = e - i, h = e + i, l = t - i, o = t + i;
this.buffer[this.index++] = a, this.buffer[this.index++] = o, this.buffer[this.index++] = this.shaderData.u_uvs[0], 
this.buffer[this.index++] = this.shaderData.u_uvs[1], this.buffer[this.index++] = i, 
this.buffer[this.index++] = s, this.bufferU32[this.index++] = r, this.buffer[this.index++] = n, 
this.buffer[this.index++] = h, this.buffer[this.index++] = o, this.buffer[this.index++] = this.shaderData.u_uvs[2], 
this.buffer[this.index++] = this.shaderData.u_uvs[3], this.buffer[this.index++] = i, 
this.buffer[this.index++] = s, this.bufferU32[this.index++] = r, this.buffer[this.index++] = n, 
this.buffer[this.index++] = a, this.buffer[this.index++] = l, this.buffer[this.index++] = this.shaderData.u_uvs[4], 
this.buffer[this.index++] = this.shaderData.u_uvs[5], this.buffer[this.index++] = i, 
this.buffer[this.index++] = s, this.bufferU32[this.index++] = r, this.buffer[this.index++] = n, 
this.buffer[this.index++] = h, this.buffer[this.index++] = o, this.buffer[this.index++] = this.shaderData.u_uvs[6], 
this.buffer[this.index++] = this.shaderData.u_uvs[7], this.buffer[this.index++] = i, 
this.buffer[this.index++] = s, this.bufferU32[this.index++] = r, this.buffer[this.index++] = n, 
this.buffer[this.index++] = a, this.buffer[this.index++] = l, this.buffer[this.index++] = this.shaderData.u_uvs[8], 
this.buffer[this.index++] = this.shaderData.u_uvs[9], this.buffer[this.index++] = i, 
this.buffer[this.index++] = s, this.bufferU32[this.index++] = r, this.buffer[this.index++] = n, 
this.buffer[this.index++] = h, this.buffer[this.index++] = l, this.buffer[this.index++] = this.shaderData.u_uvs[10], 
this.buffer[this.index++] = this.shaderData.u_uvs[11], this.buffer[this.index++] = i, 
this.buffer[this.index++] = s, this.bufferU32[this.index++] = r, this.buffer[this.index++] = n, 
this.triangles += 2;
}
function wt() {
this.generateBuffer(), this.bufPosition.update(this.buffer.subarray(0, this.index)), 
this.mesh.position.set(this.stage.camera.x * -this.stage.scale + this.render.stage.canvasCenter.x, this.stage.camera.y * -this.stage.scale + this.render.stage.canvasCenter.y), 
this.mesh.scale.set(this.stage.scale, this.stage.scale), this.shaderData.u_scale = this.stage.scale;
}
const kt = function() {
return (0, a.a)(function e(t) {
(0, n.a)(this, e), this.render = t, this.shaderData = {
u_scale: 1e-4,
u_uvs: new Float32Array([ 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0 ])
}, this.buffer = new Float32Array(1), this.index = 0, this.triangles = 0;
}, [ {
key: "stage",
get: bt
}, {
key: "loadShader",
value: _t
}, {
key: "init",
value: gt
}, {
key: "generateVAO",
value: xt
}, {
key: "clear",
value: mt
}, {
key: "generateBuffer",
value: pt
}, {
key: "writeBuffer",
value: yt
}, {
key: "draw",
value: wt
} ]);
}();
function Tt() {
return this.render.stage;
}
function St() {
var e = new d.r("precision highp float;\nuniform float u_scale;\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\n\nattribute vec2 pos;\nattribute vec2 uv;\nattribute vec4 b_packed;\nattribute float b_alpha;\nattribute float b_cellsize;\nattribute float b_linewidth;\n\nvarying vec2 center_uv;\nvarying vec4 fill;\nvarying vec2 cell_uv;\nvarying float v_cellsize;\nvarying float v_linewidth;\n\nvoid main() {\n    v_cellsize = b_cellsize;\n    v_linewidth = b_linewidth;\n    // float lineWidth = 12.0 + 1.0 / u_scale;\n    \n    // float u_Radius =   1.0 - (b_cellsize / (b_cellsize + (38.0 )) - (1.0 - (b_cellsize - 3.5/ u_scale) / b_cellsize));\n    float line_width = (1.0 - ((b_cellsize - v_linewidth) / b_cellsize ));\n    float u_Thickness = line_width +  (1.0 - (b_cellsize - 3.5/ u_scale) / b_cellsize);\n    float u_Radius =  u_Thickness; \n    // float u_Radius =  1.0 / (b_cellsize );\n    vec2 kuda = vec2((uv.x - 0.5) * 2.0, (uv.y - 0.5) *  2.0);\n    vec2 kuda_flip = vec2(kuda.x, -kuda.y);\n    float overlap_cell_scale = 0.0 + u_Radius;\n    // gl_Position = u_proj * vec4(pos , 0.0f, 1.0f);\n    gl_Position = vec4( projectionMatrix * translationMatrix * vec3(pos + (b_cellsize * overlap_cell_scale / kuda_flip), 1.0) , 1.0);\n    cell_uv = uv * vec2(.5, .5) * 2.0;\n    center_uv = uv + (kuda * 0.5 * overlap_cell_scale);\n\n    vec4 tint = b_packed;\n    fill = vec4(tint.xyz,  b_alpha - (1.0 / u_scale / 180.0) );\n}", "precision highp float;\n\nuniform sampler2D u_texture;\nuniform sampler2D u_mask;\nuniform float u_scale;\nuniform bool u_stroke_enabled;\n\nvarying vec2 center_uv;\nvarying vec2 cell_uv;\nvarying vec4 fill;\nvarying float v_cellsize;\nvarying float v_linewidth;\n\nvoid main() {\n     float lineWidth = v_linewidth;//(12.0 + 1.0 / u_scale);\n    // float u_Radius =  0.5 / (v_cellsize / lineWidth ); // Крайняя граница круг 111111111111111111111111111\n    float u_Thickness =  1.0 - ((v_cellsize - lineWidth / 4.5) / v_cellsize); // <------------\n    float u_Radius =  0.5 + (u_Thickness);// (v_cellsize / ( lineWidth));\n    // vec4 stroke_color = vec4(fill.xyz * 0.925 ,1.0); // цвет контура с использованием затемнения\n    // u_Radius = u_Radius - u_Thickness * 0.05 * u_scale; // у радиуса отняли пол контура\n    float l = length(center_uv - 0.5);\n    // float stroke_alpha = smoothstep(u_Thickness / u_Thickness / v_cellsize  , 0.0, abs(l - u_Radius + u_Thickness * 2.0) - u_Thickness);   \n    float stroke_alpha = smoothstep(0.5 / (v_cellsize * u_scale)  , 0.0, abs(l - u_Radius + u_Thickness * 2.0) - u_Thickness);   \n    // float stroke_alpha = smoothstep(u_Thickness , 0.0, (abs(l - u_Radius) - u_Thickness) * u_scale * 6.0 );      // backup  \n    gl_FragColor = mix(gl_FragColor, fill, stroke_alpha * fill.a);\n    // color += vec4(0.13, 0.44, 0.44, 0.31);\n}\n");
this.shader = new d.t(e, this.shaderData), this.mesh.shader = this.shader, this.mesh.visible = !0;
}
function Ct() {
var e = this;
this.bufPosition = new d.d(this.buffer.buffer), this.generateVAO(), this.mesh = new d.o(this.geometry, void 0), 
this.mesh.visible = !1, this.loadShader(), this.render.listenTo(v.b, "foodGlowSize", function() {
e.shaderData.u_glowscale = 10 * v.b.raw.foodGlowSize.value;
})();
}
function At() {
this.geometry = new d.j, p([ [ 2, d.v.FLOAT, !1, 4, 0, "pos" ], [ 2, d.v.FLOAT, !1, 4, 0, "uv" ], [ 4, d.v.UNSIGNED_BYTE, !0, 1, 0, "b_packed" ], [ 1, d.v.FLOAT, !1, 4, 0, "b_alpha" ], [ 1, d.v.FLOAT, !1, 4, 0, "b_cellsize" ], [ 1, d.v.FLOAT, !1, 4, 0, "b_linewidth" ] ], this.bufPosition, this.geometry);
}
function zt() {
this.index = 0, this.buffer.fill(0);
}
function Dt() {
var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.render.app.unitManager.activeUnit;
if (this.render.app.unitManager.anyPlay && v.a.raw.splitRange.value) {
for (var t = q.i.selectBiggestCell, i = e.cells, s = [ e.biggerHSTECellsCache, e.biggerDSTECellsCache, e.biggerSTECellsCache ], r = 0; r < s.length; r++) for (var n = s[r], a = 0; n.length > a; a++) {
var h = n[a], l = .4 * h.alpha, o = h.size + 760 + 2;
this.writeArcBuffer(h.x, h.y, o, 4, v.b.raw.bSTEColor.microcolor.float, l);
}
if (i.length) {
var u = t ? i.length - 1 : 0;
this.writeArcBuffer(i[u].x, i[u].y, i[u].size + 760 + 3, 6, v.b.raw.splitRangeColor.microcolor.float, v.b.raw.darkTheme.value ? .7 : .35);
}
if (v.a.raw.doubleSplitRange.value) {
for (var f = [ e.biggerHSTECellsCache, e.biggerDSTECellsCache ], c = 0; c < f.length; c++) for (var d = f[c], b = 0; d.length > b; b++) {
var _ = d[b], g = .4 * _.alpha, x = _.size + 1520 + 2;
this.writeArcBuffer(_.x, _.y, x, 4, v.b.raw.bDSTEColor.microcolor.float, g);
}
if (i.length) {
var m = t ? i.length - 1 : 0;
if (i[m].size * i[m].size / 100 < 666) return;
this.writeArcBuffer(i[m].x, i[m].y, i[m].size + 1520 + 2, 4, v.b.raw.splitRangeColor.microcolor.float, v.b.raw.darkTheme.value ? .7 : .35);
}
}
if (v.a.raw.tripleSplitRange.value) for (var p = [ e.biggerHSTECellsCache ], y = 0; y < p.length; y++) for (var w = p[y], k = 0; w.length > k; k++) {
var T = w[k], S = .4 * T.alpha, C = T.size + 2280 + 2;
this.writeArcBuffer(T.x, T.y, C, 4, v.b.raw.bHSTEColor.microcolor.float, S);
}
}
}
function Mt() {
for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.render.app.unitManager.activeUnit, t = [ e.biggerHSTECellsCache, v.b.raw.bHSTEColor.microcolor.float, e.biggerDSTECellsCache, v.b.raw.bDSTEColor.microcolor.float, e.biggerSTECellsCache, v.b.raw.bSTEColor.microcolor.float, e.biggerCellsCache, v.b.raw.bColor.microcolor.float, e.smallerCellsCache, v.b.raw.sColor.microcolor.float, e.smallerSTECellsCache, v.b.raw.sSTEColor.microcolor.float, e.smallerDSTECellsCache, v.b.raw.sDSTEColor.microcolor.float, e.smallerHSTECellsCache, v.b.raw.sHSTEColor.microcolor.float ], i = 14 + 2 / this.stage.scale, s = 12 + 1 / this.stage.scale, r = 0; r < t.length; r += 2) for (var n = t[r + 1], a = t[r], h = 0, l = a.length; h < l; h++) {
var o = a[h], u = o.x, f = o.y, c = o.size + i + s / 2;
this.writeArcBuffer(u, f, c, s, n, .75 * o.alpha);
}
}
function Bt() {
this.index = 0;
for (var e = 0, t = this.render.app.unitManager.units.length; t > e; e++) {
var i = this.render.app.unitManager.units[e];
i.play && (0 == e || v.a.raw.mbMultiSplitRange.value) && v.a.raw.splitRange.value && this.generateSpiltRange(i), 
i.play && 0 == e && v.a.raw.oppRings.value && this.generateOppRingsBuffer(i);
}
}
function Rt(e, t, i, s, r, n) {
var a = e - i, h = e + i, l = t - i, o = t + i;
this.buffer[this.index++] = a, this.buffer[this.index++] = l, this.buffer[this.index++] = this.shaderData.u_uvs[0], 
this.buffer[this.index++] = this.shaderData.u_uvs[1], this.buffer[this.index++] = r, 
this.buffer[this.index++] = n, this.buffer[this.index++] = i, this.buffer[this.index++] = s, 
this.buffer[this.index++] = h, this.buffer[this.index++] = l, this.buffer[this.index++] = this.shaderData.u_uvs[2], 
this.buffer[this.index++] = this.shaderData.u_uvs[3], this.buffer[this.index++] = r, 
this.buffer[this.index++] = n, this.buffer[this.index++] = i, this.buffer[this.index++] = s, 
this.buffer[this.index++] = a, this.buffer[this.index++] = o, this.buffer[this.index++] = this.shaderData.u_uvs[4], 
this.buffer[this.index++] = this.shaderData.u_uvs[5], this.buffer[this.index++] = r, 
this.buffer[this.index++] = n, this.buffer[this.index++] = i, this.buffer[this.index++] = s, 
this.buffer[this.index++] = h, this.buffer[this.index++] = l, this.buffer[this.index++] = this.shaderData.u_uvs[6], 
this.buffer[this.index++] = this.shaderData.u_uvs[7], this.buffer[this.index++] = r, 
this.buffer[this.index++] = n, this.buffer[this.index++] = i, this.buffer[this.index++] = s, 
this.buffer[this.index++] = a, this.buffer[this.index++] = o, this.buffer[this.index++] = this.shaderData.u_uvs[8], 
this.buffer[this.index++] = this.shaderData.u_uvs[9], this.buffer[this.index++] = r, 
this.buffer[this.index++] = n, this.buffer[this.index++] = i, this.buffer[this.index++] = s, 
this.buffer[this.index++] = h, this.buffer[this.index++] = o, this.buffer[this.index++] = this.shaderData.u_uvs[10], 
this.buffer[this.index++] = this.shaderData.u_uvs[11], this.buffer[this.index++] = r, 
this.buffer[this.index++] = n, this.buffer[this.index++] = i, this.buffer[this.index++] = s;
}
function Ut() {
this.generateBuffer(), this.bufPosition.update(this.buffer.subarray(0, this.index)), 
this.mesh.position.set(this.stage.camera.x * -this.stage.scale + this.render.stage.canvasCenter.x, this.stage.camera.y * -this.stage.scale + this.render.stage.canvasCenter.y), 
this.mesh.scale.set(this.stage.scale, this.stage.scale), this.shaderData.u_scale = this.stage.scale;
}
var Et = function() {
return (0, a.a)(function e(t) {
(0, n.a)(this, e), this.render = t, this.shaderData = {
u_scale: 1e-4,
u_glowscale: 0,
u_uvs: new Float32Array([ 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0 ])
}, this.buffer = new Float32Array(3145680), this.index = 0, this.triangles = 0;
}, [ {
key: "stage",
get: Tt
}, {
key: "loadShader",
value: St
}, {
key: "init",
value: Ct
}, {
key: "generateVAO",
value: At
}, {
key: "clear",
value: zt
}, {
key: "generateSpiltRange",
value: Dt
}, {
key: "generateOppRingsBuffer",
value: Mt
}, {
key: "generateBuffer",
value: Bt
}, {
key: "writeArcBuffer",
value: Rt
}, {
key: "draw",
value: Ut
} ]);
}();
function Ot() {
return this.render.stage;
}
function Ft() {
var e = new d.r("precision highp float;\n\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\nuniform float u_scale;\n\nattribute vec2 pos;\nattribute vec2 uv;\nattribute vec4 b_color;\nattribute float b_alpha;\nattribute float b_cellsize;\nattribute float b_linewidth;\n\nvarying vec2 center_uv;\nvarying vec4 fill;\nvarying vec2 cell_uv;\nvarying float v_cellsize ;\nvarying float v_linewidth ;\n\nvoid main() {\n    v_cellsize = b_cellsize;\n    v_linewidth = b_linewidth;\n    \n    float line_width = (1.0 - ((b_cellsize - v_linewidth) / b_cellsize ));\n    float u_Thickness = line_width +  (1.0 - (b_cellsize - 3.5/ u_scale) / b_cellsize);\n    float u_Radius =  u_Thickness; \n    // float u_Radius =  1.0 / (b_cellsize );\n    vec2 kuda = vec2((uv.x - 0.5) * 2.0, (uv.y - 0.5) *  2.0);\n    vec2 kuda_flip = vec2(kuda.x, -kuda.y);\n    float overlap_cell_scale = 0.0 + u_Radius;\n    // gl_Position = u_proj * vec4(pos , 0.0f, 1.0f);\n    gl_Position = vec4(projectionMatrix * translationMatrix * vec3(pos + (b_cellsize * overlap_cell_scale / kuda_flip), 1.0) , 1.0);\n    cell_uv = uv * vec2(.5, .5) * 2.0;\n    center_uv = uv + (kuda * 0.5 * overlap_cell_scale);\n\n    fill = vec4(b_color.rgb,  b_alpha - (1.0 / u_scale / 180.0) );\n}", "precision highp float;\n\nuniform sampler2D u_texture;\nuniform sampler2D u_mask;\nuniform float u_scale;\nuniform bool u_stroke_enabled;\n\nvarying vec2 center_uv;\nvarying vec2 cell_uv;\nvarying vec4 fill;\nvarying float v_cellsize;\nvarying float v_linewidth;\n\nvoid main() {\n    float u_Thickness =  (1.0 - ((v_cellsize - v_linewidth) / v_cellsize)) * 0.5; // <------------\n    float u_Radius =  0.5 + (u_Thickness);// (v_cellsize / ( lineWidth));\n    float l = length(center_uv - 0.5);\n    // arg центр градиента\n    float stroke_alpha = smoothstep(0.5 / (v_cellsize * u_scale) + u_Thickness  , 0.0, abs(l - u_Radius + u_Thickness) );   \n    // float stroke_alpha = smoothstep(0.5 / (v_cellsize * u_scale)  , 0.0, abs(l - u_Radius) - u_Thickness);   \n    // float stroke_alpha = smoothstep(u_Thickness , 0.0, (abs(l - u_Radius) - u_Thickness) * u_scale * 6.0 );      // backup  \n    gl_FragColor = mix(gl_FragColor, fill, stroke_alpha * fill.a);\n    // color += vec4(0.13, 0.44, 0.44, 0.31);\n}\n");
this.shader = new d.t(e, this.shaderData), this.mesh.shader = this.shader, this.mesh.visible = !0;
}
function Lt() {
this.bufPosition = new d.d(this.buffer.buffer), this.generateVAO(), this.mesh = new d.o(this.geometry, this.shader), 
this.mesh.visible = !1, this.loadShader();
}
function Pt() {
this.geometry = new d.j, p([ [ 2, d.v.FLOAT, !1, 4, 0, "pos" ], [ 2, d.v.FLOAT, !1, 4, 0, "uv" ], [ 4, d.v.UNSIGNED_BYTE, !0, 1, 0, "b_color" ], [ 1, d.v.FLOAT, !1, 4, 0, "b_alpha" ], [ 1, d.v.FLOAT, !1, 4, 0, "b_cellsize" ], [ 1, d.v.FLOAT, !1, 4, 0, "b_linewidth" ] ], this.bufPosition, this.geometry);
}
function It() {
this.index = 0;
}
function jt() {
this.index = 0;
for (var e = this.stage.cellsFrame, t = v.b.raw.bColor.microcolor.float, i = 0, s = e.length; i < s; i++) {
var r = e[i], n = r.x, a = r.y, h = r.size;
this.writeArcBuffer(n, a, h, .3 * h, t, .75);
}
}
function Nt() {
if (this.index = 0, this.render.app.unitManager.totalPlay > 1) for (var e = .01 * v.b.raw.mbRingWidth.value, t = this.render.app.unitManager.units.length; t--; ) {
var i = this.render.app.unitManager.units[t], s = 0, r = .75;
if (i.play && this.render.app.unitManager.activeUnit == i ? (s = v.b.raw.mboxActiveCellStroke.microcolor.float, 
r = v.b.raw.mboxActiveCellStroke.microcolor.vector[3] * r) : (s = v.b.raw.mboxUnactiveCellStroke.microcolor.float, 
r = v.b.raw.mboxUnactiveCellStroke.microcolor.vector[3] * r), 0 != r) for (var n = 0, a = i.cells.length; n < a; n++) {
var h = i.cells[n], l = h.x, o = h.y, u = h.size;
this.writeArcBuffer(l, o, u, u * e, s, r);
}
}
}
function Wt(e, t, i, s, r, n) {
var a = e - i, h = e + i, l = t - i, o = t + i;
this.buffer[this.index++] = a, this.buffer[this.index++] = l, this.buffer[this.index++] = this.shaderData.u_uvs[0], 
this.buffer[this.index++] = this.shaderData.u_uvs[1], this.buffer[this.index++] = r, 
this.buffer[this.index++] = n, this.buffer[this.index++] = i, this.buffer[this.index++] = s, 
this.buffer[this.index++] = h, this.buffer[this.index++] = l, this.buffer[this.index++] = this.shaderData.u_uvs[2], 
this.buffer[this.index++] = this.shaderData.u_uvs[3], this.buffer[this.index++] = r, 
this.buffer[this.index++] = n, this.buffer[this.index++] = i, this.buffer[this.index++] = s, 
this.buffer[this.index++] = a, this.buffer[this.index++] = o, this.buffer[this.index++] = this.shaderData.u_uvs[4], 
this.buffer[this.index++] = this.shaderData.u_uvs[5], this.buffer[this.index++] = r, 
this.buffer[this.index++] = n, this.buffer[this.index++] = i, this.buffer[this.index++] = s, 
this.buffer[this.index++] = h, this.buffer[this.index++] = l, this.buffer[this.index++] = this.shaderData.u_uvs[6], 
this.buffer[this.index++] = this.shaderData.u_uvs[7], this.buffer[this.index++] = r, 
this.buffer[this.index++] = n, this.buffer[this.index++] = i, this.buffer[this.index++] = s, 
this.buffer[this.index++] = a, this.buffer[this.index++] = o, this.buffer[this.index++] = this.shaderData.u_uvs[8], 
this.buffer[this.index++] = this.shaderData.u_uvs[9], this.buffer[this.index++] = r, 
this.buffer[this.index++] = n, this.buffer[this.index++] = i, this.buffer[this.index++] = s, 
this.buffer[this.index++] = h, this.buffer[this.index++] = o, this.buffer[this.index++] = this.shaderData.u_uvs[10], 
this.buffer[this.index++] = this.shaderData.u_uvs[11], this.buffer[this.index++] = r, 
this.buffer[this.index++] = n, this.buffer[this.index++] = i, this.buffer[this.index++] = s;
}
function Vt() {
this.shader && (this.clear(), !0 === v.a.raw.mbShadows.value ? (this.mesh.visible = !0, 
this.generateBuffer(), this.bufPosition.update(this.buffer.subarray(0, this.index)), 
this.mesh.position.set(this.stage.camera.x * -this.stage.scale + this.render.stage.canvasCenter.x, this.stage.camera.y * -this.stage.scale + this.render.stage.canvasCenter.y), 
this.mesh.scale.set(this.stage.scale, this.stage.scale), this.shaderData.u_scale = this.stage.scale) : this.mesh.visible = !1);
}
var Gt = function() {
return (0, a.a)(function e(t) {
(0, n.a)(this, e), this.render = t, this.shaderData = {
u_scale: 1e-4,
u_glowscale: 0,
u_uvs: new Float32Array([ 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0 ])
}, this.buffer = new Float32Array(3145680), this.index = 0, this.triangles = 0;
}, [ {
key: "stage",
get: Ot
}, {
key: "loadShader",
value: Ft
}, {
key: "init",
value: Lt
}, {
key: "generateVAO",
value: Pt
}, {
key: "clear",
value: It
}, {
key: "generateTestBuffer",
value: jt
}, {
key: "generateBuffer",
value: Nt
}, {
key: "writeArcBuffer",
value: Wt
}, {
key: "draw",
value: Vt
} ]);
}();
function Ht(e, t, i) {
return t = (0, l.a)(t), (0, h.a)(e, Xt() ? Reflect.construct(t, i || [], (0, l.a)(e).constructor) : t.apply(e, i));
}
function Xt() {
try {
var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
} catch (e) {}
return (Xt = function() {
return !!e;
})();
}
function Yt() {
return this.render.stage;
}
function qt() {
var e = new d.r("precision highp float;\n\nuniform float u_scale;\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\n\nattribute vec2 pos;\nattribute vec2 uv;\nattribute vec4 b_color;\nattribute float b_cellsize;\nattribute float b_linewidth;\n\nvarying vec2 center_uv;\nvarying vec4 fill;\nvarying vec2 cell_uv;\nvarying float v_cellsize ;\nvarying float v_linewidth ;\nvoid main() {\n    v_cellsize = b_cellsize;\n    v_linewidth = b_linewidth;\n    float u_Radius =  1.0 / (b_cellsize / ( 5.0 / u_scale));\n    // vec2 uv = u_uvs[gl_VertexID % 6];\n    vec2 kuda = vec2((uv.x - 0.5) * 2.0, (uv.y - 0.5) *  2.0);\n    vec2 kuda_flip = vec2(kuda.x, -kuda.y);\n    float overlap_cell_scale = 0.0 + u_Radius;\n    // gl_Position = u_proj * vec4(pos , 0.0f, 1.0f);\n    // gl_Position = vec4((pos + (b_cellsize * overlap_cell_scale / kuda_flip) - uTranslate) * uScale , 0.0, 1.0);\n    gl_Position = vec4(projectionMatrix * translationMatrix * vec3(pos + (b_cellsize * overlap_cell_scale / kuda_flip), 1.0), 1.0);\n    cell_uv = uv * vec2(.5, .5) * 2.0;\n    center_uv = uv + (kuda * 0.5 * overlap_cell_scale);\n\n    fill = b_color;\n}", "precision highp float;\n\nuniform float u_scale;\n\nvarying vec2 center_uv;\nvarying vec4 fill;\nvarying float v_cellsize;\n\nvoid main() {\n    float u_Thickness =  0.5; \n    float u_Radius =  0.5 + (u_Thickness);\n    float l = length(center_uv - 0.5);\n    float stroke_alpha = smoothstep(0.5 / (v_cellsize * u_scale), 0.0, abs(l - u_Radius + u_Thickness * 2.0) - u_Thickness);\n    gl_FragColor = vec4(fill * stroke_alpha);\n}\n");
this.shader = new d.t(e, this.shaderData), this.mesh.shader = this.shader, this.mesh.visible = !0;
}
function $t() {
var e = this;
this.p_buffer = new d.d(this.buffer.buffer), this.generateVAO(), this.mesh = new d.o(this.geometry, this.shader, null, d.g.TRIANGLES), 
this.mesh.blendMode = d.a.NORMAL_NPM, this.mesh.visible = !1, this.loadShader();
var t = new ri;
t.alpha = .1, this.stage.listenTo(v.a, "antialiasing", function() {
Number(v.a.raw.antialiasing.value) >= 2 ? (e.mesh.filters = [ t ], e.mesh.filterArea = e.render.renderer.screen, 
e.mesh.blendMode = d.a.NORMAL, t.resolution = .5 * e.render.renderer.resolution) : (e.mesh.filters = [], 
e.mesh.blendMode = d.a.NORMAL_NPM);
})();
}
function Kt() {
this.geometry = new d.j, p([ [ 2, d.v.FLOAT, !1, 4, 0, "pos" ], [ 2, d.v.FLOAT, !1, 4, 0, "uv" ], [ 4, d.v.UNSIGNED_BYTE, !0, 1, 0, "b_color" ], [ 1, d.v.FLOAT, !1, 4, 0, "b_cellsize" ], [ 1, d.v.FLOAT, !1, 4, 0, "b_linewidth" ] ], this.p_buffer, this.geometry);
}
function Qt() {
if (this.index = 0, !1 !== v.a.raw.virusesRange.value) for (var e = this.stage.virusesFrame, t = Number(v.a.raw.antialiasing.value) >= 2 ? 1 : .1, i = v.b.raw.virusRangeColor.microcolor.getIntShader(), s = 0, r = e.length; s < r; s++) {
var n = e[s], a = n.x, h = n.y, l = n.size + 820;
this.writeArcBuffer(a, h, l, 0, i | 255 * t << 24);
}
}
function Jt() {
this.index = 0, this.generateTestBuffer();
}
function Zt(e, t, i, s, r) {
var n = e - i, a = e + i, h = t - i, l = t + i;
this.buffer[this.index++] = n, this.buffer[this.index++] = h, this.buffer[this.index++] = this.shaderData.u_uvs[0], 
this.buffer[this.index++] = this.shaderData.u_uvs[1], this.bufferU32[this.index++] = r, 
this.buffer[this.index++] = i, this.buffer[this.index++] = s, this.buffer[this.index++] = a, 
this.buffer[this.index++] = h, this.buffer[this.index++] = this.shaderData.u_uvs[2], 
this.buffer[this.index++] = this.shaderData.u_uvs[3], this.bufferU32[this.index++] = r, 
this.buffer[this.index++] = i, this.buffer[this.index++] = s, this.buffer[this.index++] = n, 
this.buffer[this.index++] = l, this.buffer[this.index++] = this.shaderData.u_uvs[4], 
this.buffer[this.index++] = this.shaderData.u_uvs[5], this.bufferU32[this.index++] = r, 
this.buffer[this.index++] = i, this.buffer[this.index++] = s, this.buffer[this.index++] = a, 
this.buffer[this.index++] = h, this.buffer[this.index++] = this.shaderData.u_uvs[6], 
this.buffer[this.index++] = this.shaderData.u_uvs[7], this.bufferU32[this.index++] = r, 
this.buffer[this.index++] = i, this.buffer[this.index++] = s, this.buffer[this.index++] = n, 
this.buffer[this.index++] = l, this.buffer[this.index++] = this.shaderData.u_uvs[8], 
this.buffer[this.index++] = this.shaderData.u_uvs[9], this.bufferU32[this.index++] = r, 
this.buffer[this.index++] = i, this.buffer[this.index++] = s, this.buffer[this.index++] = a, 
this.buffer[this.index++] = l, this.buffer[this.index++] = this.shaderData.u_uvs[10], 
this.buffer[this.index++] = this.shaderData.u_uvs[11], this.bufferU32[this.index++] = r, 
this.buffer[this.index++] = i, this.buffer[this.index++] = s;
}
function ei() {
this.generateBuffer(), this.p_buffer.update(this.buffer.subarray(0, this.index)), 
this.mesh.position.set(this.stage.camera.x * -this.stage.scale + this.render.canvasWidth / 2, this.stage.camera.y * -this.stage.scale + this.render.canvasHeight / 2), 
this.mesh.scale.set(this.stage.scale, this.stage.scale), this.shaderData.u_scale = this.stage.scale;
}
var ti = function() {
return (0, a.a)(function e(t) {
(0, n.a)(this, e), this.render = t, this.shaderData = {
u_scale: 1e-4,
u_glowscale: 0,
u_uvs: new Float32Array([ 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0 ])
}, this.buffer = new Float32Array(2752470), this.bufferU32 = new Uint32Array(this.buffer.buffer), 
this.total_vertices = 0, this.index = 0, this.cells_index = 0, this.triangles = 0, 
this.vert = "", this.frag = "";
}, [ {
key: "stage",
get: Yt
}, {
key: "loadShader",
value: qt
}, {
key: "init",
value: $t
}, {
key: "generateVAO",
value: Kt
}, {
key: "generateTestBuffer",
value: Qt
}, {
key: "generateBuffer",
value: Jt
}, {
key: "writeArcBuffer",
value: Zt
}, {
key: "draw",
value: ei
} ]);
}();
function ii() {
return this.uniforms.uAlpha;
}
function si(e) {
this.uniforms.uAlpha = e;
}
var ri = function(e) {
function t() {
var e;
return (0, n.a)(this, t), (e = Ht(this, t, [ "\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nuniform mat3 projectionMatrix;\nuniform mat3 translationMatrix;\n\nvarying vec2 vTextureCoord;\nvoid main(void) {\n    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n    vTextureCoord = aTextureCoord;\n}\n", "\nvarying vec2 vTextureCoord;\nuniform sampler2D uSampler;\nuniform float uAlpha;\nvoid main(void) {\n    gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;\n}\n" ])).alpha = 1, 
e;
}
return (0, o.a)(t, e), (0, a.a)(t, [ {
key: "alpha",
get: ii,
set: si
} ]);
}(d.i);
function ni(e, t) {
var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
if (!i) {
if (Array.isArray(e) || (i = function(e, t) {
if (e) {
if ("string" == typeof e) return ai(e, t);
var i = {}.toString.call(e).slice(8, -1);
return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? ai(e, t) : void 0;
}
}(e)) || t && e && "number" == typeof e.length) {
i && (e = i);
var s = 0, r = function() {};
return {
s: r,
n: function() {
return s >= e.length ? {
done: !0
} : {
done: !1,
value: e[s++]
};
},
e: function(e) {
throw e;
},
f: r
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var n, a = !0, h = !1;
return {
s: function() {
i = i.call(e);
},
n: function() {
var e = i.next();
return a = e.done, e;
},
e: function(e) {
h = !0, n = e;
},
f: function() {
try {
a || null == i.return || i.return();
} finally {
if (h) throw n;
}
}
};
}
function ai(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var i = 0, s = Array(t); i < t; i++) s[i] = e[i];
return s;
}
function hi() {
return this.render.stage;
}
function li() {
var e = new d.r("precision highp float;\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\nuniform float u_scale;\n\nattribute vec2 pos;\nattribute vec2 uv;\nattribute float b_cellsize;\nattribute vec4 b_color;\nattribute float b_tex_id;\n\nvarying vec4 fill;\nvarying float v_cellsize;\nvarying float v_linewidth;\nvarying vec2 center_uv;\nvoid main() {\n    v_cellsize = b_cellsize;\n    v_linewidth = 12.0 + 1.0 / u_scale;\n    float line_width = (1.0 - ((b_cellsize - v_linewidth) / b_cellsize ));\n    float u_Thickness = line_width +  (1.0 - (b_cellsize - 3.5/ u_scale) / b_cellsize);\n    float u_Radius =  u_Thickness; \n    // float u_Radius =  1.0 / (b_cellsize );\n    vec2 kuda = vec2((uv.x - 0.5) * 2.0, (uv.y - 0.5) *  2.0);\n    vec2 kuda_flip = vec2(kuda.x, -kuda.y);\n    float overlap_cell_scale = 0.0 + u_Radius;\n    gl_Position = vec4(projectionMatrix * translationMatrix * vec3(pos + (b_cellsize * overlap_cell_scale / kuda_flip) , 1.0), 1.0);\n\n    center_uv = uv + (kuda * 0.5 * overlap_cell_scale);\n\n    // uv = u_uvs[gl_VertexID % 6];\n    fill = b_color;\n}\n", "precision highp float;\n\nfloat AntiAliasedCircle(vec2 uv, vec2 pos, float r, float blur) {\n    float d = length(uv-pos);\n    return smoothstep(r + blur, r - blur, d);\n}\n\nuniform sampler2D u_texture;\nuniform float u_scale;\n\nvarying float v_cellsize;\nvarying float v_linewidth;\nvarying vec2 center_uv;\nvarying float alpha;\nvarying vec4 fill;\n\nvoid main() {\n    float lineWidth = v_linewidth;\n    float u_Thickness =  1.0 - ((v_cellsize - lineWidth / 4.5) / v_cellsize); // <------------\n    float u_Radius =  0.5 + u_Thickness;\n    float l = length(center_uv - 0.5);\n\n    float v_smoothering = 1.0 / u_scale / v_cellsize / 4.0;\n    float radar = smoothstep(0.4 - u_Thickness, .6 + u_Thickness , l) * 2.0 * AntiAliasedCircle(center_uv,  vec2(.5, .5), 0.5, v_smoothering);\n    float a = clamp(radar * fill.a, 0.0, 1.0);\n    gl_FragColor = vec4(fill.rgb, a);\n}\n");
this.shader = new d.t(e, this.shaderData), this.mesh.shader = this.shader, this.mesh.visible = !0;
}
function oi() {
var e = this;
this.bufPosition = new d.d(this.buffer.buffer), this.geometry = new d.j, this.generateVAO(), 
this.mesh = new d.o(this.geometry, void 0), this.mesh.visible = !1, this.mesh.blendMode = d.a.NORMAL_NPM, 
this.loadShader(), this.render.listenTo(v.b, "foodGlowSize", function() {
e.shaderData.u_glowscale = 10 * v.b.raw.foodGlowSize.value;
})();
}
function ui() {
this.geometry = new d.j, p([ [ 2, d.v.FLOAT, !1, 4, 0, "pos" ], [ 2, d.v.FLOAT, !1, 4, 0, "uv" ], [ 1, d.v.FLOAT, !1, 4, 0, "b_cellsize" ], [ 4, d.v.UNSIGNED_BYTE, !0, 1, 0, "b_color" ], [ 1, d.v.FLOAT, !1, 4, 0, "b_tex_id" ] ], this.bufPosition, this.geometry);
}
function fi() {
this.index = 0, this.buffer.fill(0);
}
function ci() {
this.index = 0, this.object_index = 0;
var e, t = ni(this.render.stage.waves);
try {
for (t.s(); !(e = t.n()).done; ) {
var i = e.value;
this.writeCellBuffer(i), this.object_index++;
}
} catch (e) {
t.e(e);
} finally {
t.f();
}
}
function di(e) {
var t = e.x, i = e.y, s = e.animSize, r = $.a.multiplyAlpha(e.colorInt, e.alpha), n = t - s, a = t + s, h = i - s, l = i + s;
this.buffer[this.index++] = n, this.buffer[this.index++] = h, this.buffer[this.index++] = this.shaderData.u_uvs[0], 
this.buffer[this.index++] = this.shaderData.u_uvs[1], this.buffer[this.index++] = s, 
this.bufferu32[this.index++] = r, this.buffer[this.index++] = 0, this.buffer[this.index++] = a, 
this.buffer[this.index++] = h, this.buffer[this.index++] = this.shaderData.u_uvs[2], 
this.buffer[this.index++] = this.shaderData.u_uvs[3], this.buffer[this.index++] = s, 
this.bufferu32[this.index++] = r, this.buffer[this.index++] = 0, this.buffer[this.index++] = n, 
this.buffer[this.index++] = l, this.buffer[this.index++] = this.shaderData.u_uvs[4], 
this.buffer[this.index++] = this.shaderData.u_uvs[5], this.buffer[this.index++] = s, 
this.bufferu32[this.index++] = r, this.buffer[this.index++] = 0, this.buffer[this.index++] = a, 
this.buffer[this.index++] = h, this.buffer[this.index++] = this.shaderData.u_uvs[6], 
this.buffer[this.index++] = this.shaderData.u_uvs[7], this.buffer[this.index++] = s, 
this.bufferu32[this.index++] = r, this.buffer[this.index++] = 0, this.buffer[this.index++] = n, 
this.buffer[this.index++] = l, this.buffer[this.index++] = this.shaderData.u_uvs[8], 
this.buffer[this.index++] = this.shaderData.u_uvs[9], this.buffer[this.index++] = s, 
this.bufferu32[this.index++] = r, this.buffer[this.index++] = 0, this.buffer[this.index++] = a, 
this.buffer[this.index++] = l, this.buffer[this.index++] = this.shaderData.u_uvs[10], 
this.buffer[this.index++] = this.shaderData.u_uvs[11], this.buffer[this.index++] = s, 
this.bufferu32[this.index++] = r, this.buffer[this.index++] = 0;
}
function vi() {
this.generateBuffer(), this.bufPosition.update(this.buffer.subarray(0, this.index)), 
this.mesh.position.set(this.stage.camera.x * -this.stage.scale + this.render.stage.canvasCenter.x, this.stage.camera.y * -this.stage.scale + this.render.stage.canvasCenter.y), 
this.mesh.scale.set(this.stage.scale, this.stage.scale), this.shaderData.u_scale = this.stage.scale;
}
var bi = function() {
return (0, a.a)(function e(t) {
(0, n.a)(this, e), this.render = t, this.shaderData = {
u_scale: 1e-4,
u_glowscale: 0,
u_uvs: new Float32Array([ 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0 ])
}, this.buffer = new Float32Array(42e3), this.bufferu32 = new Uint32Array(this.buffer.buffer), 
this.index = 0, this.object_index = 0, this.triangles = 0;
}, [ {
key: "stage",
get: hi
}, {
key: "loadShader",
value: li
}, {
key: "init",
value: oi
}, {
key: "generateVAO",
value: ui
}, {
key: "clear",
value: fi
}, {
key: "generateBuffer",
value: ci
}, {
key: "writeCellBuffer",
value: di
}, {
key: "draw",
value: vi
} ]);
}();
function _i(e, t, i) {
return t = (0, l.a)(t), (0, h.a)(e, gi() ? Reflect.construct(t, i || [], (0, l.a)(e).constructor) : t.apply(e, i));
}
function gi() {
try {
var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
} catch (e) {}
return (gi = function() {
return !!e;
})();
}
function xi() {
b.b.stop(), b.b.start(), console.log("Restarting ticker...");
}
function mi() {
return this.stage.canvasWidth;
}
function pi() {
return this.stage.canvasHeight;
}
function yi() {
this.destroyRender(), this.renderer = new d.s({
view: this.canvas,
antialias: Number(v.a.raw.antialiasing.value) > 1,
powerPreference: "default",
backgroundColor: 0
}), this.renderer.plugins.accessibility.destroy(), delete this.renderer.plugins.accessibility, 
globalThis.__PIXI_STAGE__ = this.display, globalThis.__PIXI_RENDERER__ = this.renderer, 
this.renderer.context.initFromOptions({
alpha: !0,
depth: !1,
premultipliedAlpha: !0,
precision: "hihghp",
powerPreference: "high-performance",
preserveDrawingBuffer: !0
}), this.resizeCanvas(this.stage.canvasWidth, this.stage.canvasHeight, this.stage.canvasStyleWidth, this.stage.canvasStyleHeight), 
this.onBgColorChange();
}
function wi() {
this.renderer && (this.remCanvas(), this.renderer.destroy(!1), this.setCanvas(), 
this.renderer = null);
}
function ki() {
var e = this;
function t() {
e.dirtyResize = !0;
}
function i() {
e.dirtyResize || b.b.once(b.a.UPDATE, t);
}
return f().wrap(function(e) {
for (;;) switch (e.prev = e.next) {
case 0:
if (1 != this.initialized) {
e.next = 1;
break;
}
return e.abrupt("return");

case 1:
this.initialized = !0, this.setCanvas(), this.listenTo(this.stage, "resize", i)(), 
this.initRender(), this.listenTo(v.a, "antialiasing", this.setCanvasAntialiasing)(Number(v.a.raw.antialiasing.value)), 
this.listenTo(v.b, "bgColor", this.onBgColorChange)(), this.bg.init(), this.display.addChild(this.bg.container), 
this.grid.init(), this.display.addChild(this.grid.mesh), this.display.addChild(this.bg.mesh), 
this.display.addChild(this.bg.sectorsTextsContainer), this.ghostcells.init(), this.display.addChild(this.ghostcells.mesh), 
this.virusesrange.init(), this.display.addChild(this.virusesrange.mesh), this.shadows.init(), 
this.display.addChild(this.shadows.mesh), this.rings.init(), this.display.addChild(this.rings.mesh), 
this.helpers.init(), this.display.addChild(this.helpers.mesh), this.pellets.init(), 
this.display.addChild(this.pellets.mesh), this.cursorlines.init(), this.display.addChild(this.cursorlines.mesh), 
this.cells.init(), this.display.addChild(this.cells.mesh), this.waves.init(), this.display.addChild(this.waves.mesh), 
this.listenTo(this.stage, "render", this.render);

case 2:
case "end":
return e.stop();
}
}, ki, this);
}
function Ti() {
var e = (0, r.a)(f().mark(ki));
return function() {
return e.apply(this, arguments);
};
}
function Si() {
this.emit("destroy"), this.unlisten(), this.initialized = !1, this.remCanvas(), 
this.renderer.destroy(!1);
}
function Ci(e) {
return e.preventDefault();
}
function Ai() {
this.canvas = document.createElement("canvas"), document.querySelector("#app_canvas").appendChild(this.canvas), 
this.canvas.classList.add("canvas"), this.canvas.addEventListener("contextmenu", Ci);
}
function zi() {
this.canvas.parentElement.removeChild(this.canvas);
}
function Di() {
var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
this.canvas.style.imageRendering = e ? "" : "pixelated";
}
function Mi(e, t, i, s) {
this.renderer.resize(e, t), this.canvas.style.width = i + "px", this.canvas.style.height = s + "px";
}
function Bi(e) {
return e.text();
}
function Ri(e) {
return e;
}
function Ui(e) {
return console.error("Failed load assets", e), "";
}
function Ei(e) {
var t = (0, s.a)(e, 2), i = (t[0], t[1]);
return fetch(i.href).then(Bi).then(Ri).catch(Ui);
}
function Oi(e) {
var t = Object.entries(e).map(Ei);
return Promise.all(t);
}
function Fi() {
this.renderer.gl.getExtension("WEBGL_lose_context").loseContext();
}
var Li = function(e) {
function t(e, i) {
var s;
return (0, n.a)(this, t), (s = _i(this, t, [ e, i ])).dirtyResize = !0, s.onBgColorChange = function() {
s.renderer.background && (s.renderer.background.color = v.b.raw.bgColor.microcolor.vector);
}, s.setCanvasAntialiasing = function() {
var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
if (void 0 !== (e = Number(e))) {
switch ((e > 1 && 0 == s.renderer.options.antialias || e <= 1 && 1 == s.renderer.options.antialias) && s.initRender(), 
e) {
case 0:
case 4:
s.setCanvasSmoothing(!1);
break;

case 1:
case 2:
case 3:
s.setCanvasSmoothing(!0);
}
}
}, s.render = function() {
s.dirtyResize && (s.dirtyResize = !1, s.resizeCanvas(s.stage.canvasWidth, s.stage.canvasHeight, s.stage.canvasStyleWidth, s.stage.canvasStyleHeight), 
s.setCanvasAntialiasing(Number(v.a.raw.antialiasing.value))), s.bg.draw(), s.bg.updSectorTexts(), 
s.grid.renderGrid(s.canvasWidth, s.canvasHeight, s.stage.scale, s.stage.camera.x, s.stage.camera.y), 
s.helpers.draw(), s.shadows.draw(), s.pellets.draw(), s.ghostcells.draw(), s.virusesrange.draw(), 
s.cursorlines.draw(), s.cells.draw(), s.rings.draw(), s.waves.draw();
try {
s.renderer.render(s.display);
} catch (e) {
e.message.includes("disposeRunner") ? s.restartTicker() : e instanceof Event ? (window.dispatchEvent(e), 
console.error(e)) : console.error(new Error(e));
}
}, s.restartTicker = (0, c.debounce)(xi, 300), s.stage = i, s.app = e, s.display = new d.f, 
s.bg = new V(s), s.ghostcells = new Je(s), s.rings = new Et(s), s.shadows = new Gt(s), 
s.grid = new rt(s), s.virusesrange = new ti(s), s.helpers = new ct(s), s.pellets = new kt(s), 
s.cursorlines = new Ne(s), s.cells = new De(s), s.waves = new bi(s), s.init(), s;
}
return (0, o.a)(t, e), (0, a.a)(t, [ {
key: "canvasWidth",
get: mi
}, {
key: "canvasHeight",
get: pi
}, {
key: "initRender",
value: yi
}, {
key: "destroyRender",
value: wi
}, {
key: "init",
value: Ti()
}, {
key: "destroy",
value: Si
}, {
key: "setCanvas",
value: Ai
}, {
key: "remCanvas",
value: zi
}, {
key: "setCanvasSmoothing",
value: Di
}, {
key: "resizeCanvas",
value: Mi
}, {
key: "glslLoader",
value: Oi
}, {
key: "simulatelostcontext",
value: Fi
} ]);
}(_.a);
const Pi = Li;
},
77210(e, t, i) {
i.d(t, {
a: () => T
});
var s = i(5223), r = i(51091), n = i(46788), a = i(59296), h = i(11495), l = i(2411), o = i(94429), u = i(73299), f = i(7542);
function c(e, t, i) {
return t = (0, a.a)(t), (0, n.a)(e, d() ? Reflect.construct(t, i || [], (0, a.a)(e).constructor) : t.apply(e, i));
}
function d() {
try {
var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
} catch (e) {}
return (d = function() {
return !!e;
})();
}
function v(e, t) {
return Math.floor(e * e / 100) > 183 ? this.virus_color_danger : u.b.raw.virusColor.microcolor;
}
function b(e, t) {
return t ? Math.floor(e * e / 100) / (o.i.selectBiggestCell ? t.maxMass : t.minMass) > .76 ? this.virus_color_normal : t.cellsLengthCached >= t.client.playerMaxCells ? this.virus_color_eatable : this.virus_color_danger : this.virus_color_normal;
}
function _() {}
function g(e, t, i, s) {}
function x() {}
function m() {
this.emit("destroy"), this.unlisten();
}
function p(e) {
return ~~((200 - e) / 14);
}
function y(e) {
return e <= 40 || this.stage.scale < .5 && e < 17 / this.stage.scale;
}
function w(e) {
return e <= 40 || this.stage.scale < .5 && e < 27 / this.stage.scale;
}
function k(e) {
return !1 === u.a.raw.showFood.value || (!(u.a.raw.showFood.value && !(u.a.raw.autoHideFoodOnZoom.value && this.stage.scale < .2)) || !!(u.a.raw.autoHideFood.value && e && e.mass > 1e3));
}
const T = function(e) {
function t(e, i) {
var r;
return (0, s.a)(this, t), (r = c(this, t)).app = e, r.stage = i, r.virus_color_danger = new f.a(200, 0, 0), 
r.virus_color_normal = new f.a(255, 220, 0), r.virus_color_eatable = new f.a(255, 109, 167), 
r.player_color_yellow = new f.a(255, 249, 6), r.minimumSkinAlpha = 232, r.canvas = null, 
r.initialized = !1, r.listenTo(u.b, "virusColor", function() {
r.virus_color_danger.a = u.b.raw.virusColor.microcolor.a, r.virus_color_danger.updVector(), 
r.virus_color_normal.a = u.b.raw.virusColor.microcolor.a, r.virus_color_normal.updVector(), 
r.virus_color_eatable.a = u.b.raw.virusColor.microcolor.a, r.virus_color_eatable.updVector();
})(), r;
}
return (0, h.a)(t, e), (0, r.a)(t, [ {
key: "setVirusColor",
value: v
}, {
key: "setVirusStrokeColor",
value: b
}, {
key: "setCanvas",
value: _
}, {
key: "resizeCanvas",
value: g
}, {
key: "init",
value: x
}, {
key: "destroy",
value: m
}, {
key: "calcVirusShots",
value: p
}, {
key: "setAutoHideCellInfoNick",
value: y
}, {
key: "setAutoHideCellInfoMass",
value: w
}, {
key: "foodIsHidden",
value: k
} ]);
}(l.Eventify);
},
77725(e, t, i) {
i.d(t, {
a: () => z
});
var s = i(5223), r = i(51091);
function n(e, t) {
var i = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
if (!i) {
if (Array.isArray(e) || (i = function(e, t) {
if (e) {
if ("string" == typeof e) return a(e, t);
var i = {}.toString.call(e).slice(8, -1);
return "Object" === i && e.constructor && (i = e.constructor.name), "Map" === i || "Set" === i ? Array.from(e) : "Arguments" === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? a(e, t) : void 0;
}
}(e)) || t && e && "number" == typeof e.length) {
i && (e = i);
var s = 0, r = function() {};
return {
s: r,
n: function() {
return s >= e.length ? {
done: !0
} : {
done: !1,
value: e[s++]
};
},
e: function(e) {
throw e;
},
f: r
};
}
throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var n, h = !0, l = !1;
return {
s: function() {
i = i.call(e);
},
n: function() {
var e = i.next();
return h = e.done, e;
},
e: function(e) {
l = !0, n = e;
},
f: function() {
try {
h || null == i.return || i.return();
} finally {
if (l) throw n;
}
}
};
}
function a(e, t) {
(null == t || t > e.length) && (t = e.length);
for (var i = 0, s = Array(t); i < t; i++) s[i] = e[i];
return s;
}
var h = /\s/gm;
function l() {}
function o() {}
function u(e) {
e > 0 && (this.scale = e);
}
function f(e) {
e > 0 && (this.lineSize = e);
}
function c() {
this.createSheet(), this.addChars(this.characters), this.gl && this.updateTexture();
}
function d() {
var e = this.gl, t = this.texture;
if (!e) return !1;
t || (t = this.gl.createTexture(), e.activeTexture(e.TEXTURE1), e.bindTexture(e.TEXTURE_2D, t), 
e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, !1), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !0), 
e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, this.canvas), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), 
e.texParameteri(e.TEXTURE_2D, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), 
e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR_MIPMAP_LINEAR), e.generateMipmap(e.TEXTURE_2D), 
e.bindTexture(e.TEXTURE_2D, null), this.texture = t, this._resolve());
}
function v() {
this.texture && (this.gl.activeTexture(this.gl.TEXTURE1), this.gl.deleteTexture(this.texture), 
delete this.texture);
}
function b(e) {
this.deleteTexture(), this.gl = e, this.updateTexture();
}
function _() {
if (!this.canvas || !this.ctx) {
var e = new OffscreenCanvas(1, 1);
e.width = this.sheetWidth * this.scale, e.height = this.sheetHeight * this.scale;
var t = e.getContext("2d");
t.font = this.canvasStyles.fontWeight + " " + this.size * this.scale + "px " + this.canvasStyles.fontFamily, 
t.textBaseline = "top", t.strokeStyle = this.canvasStyles.strokeStyle, t.lineWidth = this.canvasStyles.lineWidth, 
t.lineJoin = "round", t.miterLimit = 0, t.fillStyle = this.canvasStyles.fillStyle, 
this.spaceWidth = t.measureText(" ").width, this.canvas = e, this.ctx = t;
var i = {
width: this.spaceWidth,
height: this.size * this.lineSize,
index: this.characterList.length,
textureCoords: null
};
this.characterList.push(i), this.characterMap[" "] = i;
}
}
function g() {
this.canvas && (this.canvas.width = 1, this.canvas.height = 1, delete this.ctx, 
delete this.canvas);
}
function x() {
Object.keys(this.characterMap).join("");
this.sheetHeight *= 2, this.canvas.width = this.sheetWidth * this.scale, this.canvas.height = this.sheetHeight * this.scale, 
this.ctx.font = this.size * this.scale + "px " + this.canvasStyles.fontFamily, this.ctx.strokeStyle = this.canvasStyles.strokeStyle, 
this.ctx.lineWidth = this.canvasStyles.lineWidth, this.ctx.lineJoin = "round", this.ctx.miterLimit = 0, 
this.ctx.fillStyle = this.canvasStyles.fillStyle, this.resetSheet();
}
function m(e) {
if (this.characterMap[e]) return !1;
var t = this.ctx, i = this.scale;
t.textBaseline = "middle", t.strokeStyle = this.canvasStyles.strokeStyle, t.lineWidth = 0, 
t.lineJoin = "round", t.miterLimit = 0, t.fillStyle = this.canvasStyles.fillStyle;
var s = this.ctx.measureText(e), r = this.canvasStyles.lineWidth / 2, n = s.width + this.canvasStyles.lineWidth;
t.lineWidth = this.canvasStyles.lineWidth;
var a = (this.size + r) * i * this.lineSize, h = this.nextSheetX - r, l = this.nextSheetY;
if (h + n > this.canvas.width && (h = 10, (l += a) + a > this.canvas.height)) return this.biggerSheet(), 
this.addCharacter(e);
var o = {
index: this.characterList.length,
width: n / i,
height: a / i,
textureCoords: {
x: h / this.canvas.width,
y: l / this.canvas.height,
width: n / this.canvas.width,
height: a / this.canvas.height
}
};
this.characterList.push(o), this.characterMap[e] = o, this.characters += e, Object.assign(t, this.canvasStyles);
var u = this.scale * this.size * .7;
return this.canvasStyles.lineWidth > 0 && t.strokeText(e, h + r, l + .5 * r + u), 
t.fillText(e, h + r, l + .5 * r + u), h += n + 10, this.nextSheetY = l, this.nextSheetX = h, 
!0;
}
function p(e) {
var t, i = !1, s = n(e.replace(h, "").split(""));
try {
for (s.s(); !(t = s.n()).done; ) {
var r = t.value;
i = this.addCharacter(r);
}
} catch (e) {
s.e(e);
} finally {
s.f();
}
return i;
}
function y(e) {
this.addChars(e) && this.gl && this.updateTexture();
}
function w() {
this.canvas ? this.ctx.clearRect(0, 0, this.sheetWidth, this.sheetHeight) : this.createSheet(), 
this.nextSheetX = 10, this.nextSheetY = 10, this.characterList.length = 0, delete this.characterMap, 
this.characterMap = {
" ": {
width: this.spaceWidth,
height: this.size * this.lineSize,
index: this.characterList.length,
textureCoords: null
}
}, this.characterList.push(this.characterMap[" "]), this.addChars(this.characters), 
this.updateTexture();
}
function k(e) {
return this.addCharacter(e), this.characterMap[e];
}
function T() {
this.deleteTexture(), this.deleteSheet();
}
function S() {
return this.texture;
}
function C(e) {
if (this.canvas && this.ctx) return !1;
var t, i = 0, s = n(e.split(""));
try {
for (s.s(); !(t = s.n()).done; ) {
var r = t.value;
i += this.getCharacter(r).width;
}
} catch (e) {
s.e(e);
} finally {
s.f();
}
return i;
}
function A() {
return this._promise;
}
const z = function() {
return (0, r.a)(function e(t, i) {
var r, n, a = this;
(0, s.a)(this, e), this.size = 30, this.scale = devicePixelRatio ? (r = devicePixelRatio, 
n = 2, Math.pow(n, Math.ceil(Math.log(r) / Math.log(n)))) : 1, this.lineSize = 1.3, 
this.sheetWidth = 512, this.sheetHeight = 256, this.nextSheetX = 0, this.nextSheetY = 0, 
this.characters = "", this.characterMap = {}, this.characterIndex = 0, this.characterList = [], 
this.canvas = null, this.ctx = null, this._resolve = l, this._reject = o, i && (i.gl && (this.gl = i.gl), 
i.scale > 0 && this.setScale(i.scale), i.size > 0 && (this.size = i.size), i.lineSize > 0 && this.setLinesize(i.lineSize), 
i.characters && (this.characters = "" + i.characters)), this.canvasStyles = {
fontWeight: 700,
fontFamily: "Ubuntu"
}, Object.assign(this.canvasStyles, i), this._promise = new Promise(function(e, t) {
a._resolve = e, a._reject = t;
}), this.characterMap = {}, this.characterIndex = 0, this.characterList = [];
}, [ {
key: "setScale",
value: u
}, {
key: "setLinesize",
value: f
}, {
key: "fontLoaded",
value: c
}, {
key: "updateTexture",
value: d
}, {
key: "deleteTexture",
value: v
}, {
key: "setGL",
value: b
}, {
key: "createSheet",
value: _
}, {
key: "deleteSheet",
value: g
}, {
key: "biggerSheet",
value: x
}, {
key: "addCharacter",
value: m
}, {
key: "addChars",
value: p
}, {
key: "addCharacters",
value: y
}, {
key: "resetSheet",
value: w
}, {
key: "getCharacter",
value: k
}, {
key: "destroy",
value: T
}, {
key: "isReady",
value: S
}, {
key: "textWidth",
value: C
}, {
key: "ready",
get: A
} ]);
}();
}
} ]);