/*! For license information please see 012a97b8d8baa1694d2f.487.js.LICENSE.txt */
(self.webpackChunk_delta_client = self.webpackChunk_delta_client || []).push([ [ 487 ], {
3580(t, e, r) {
"use strict";
r.d(e, {
a: () => p
});
var n = {
hasSubscribers: !1
}, i = n, o = n, s = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date, a = () => i.hasSubscribers || o.hasSubscribers, u = new Set, h = "object" == typeof process && process ? process : {}, l = (Symbol("type"), 
t => !!t && t === Math.floor(t) && t > 0 && isFinite(t)), f = t => l(t) ? t <= Math.pow(2, 8) ? Uint8Array : t <= Math.pow(2, 16) ? Uint16Array : t <= Math.pow(2, 32) ? Uint32Array : t <= Number.MAX_SAFE_INTEGER ? c : null : null, c = class extends Array {
constructor(t) {
super(t), this.fill(0);
}
}, d = class t {
heap;
length;
static #t=!1;
static create(e) {
let r = f(e);
if (!r) return [];
t.#t = !0;
let n = new t(e, r);
return t.#t = !1, n;
}
constructor(e, r) {
if (!t.#t) throw new TypeError("instantiate Stack using Stack.create(n)");
this.heap = new r(e), this.length = 0;
}
push(t) {
this.heap[this.length++] = t;
}
pop() {
return this.heap[--this.length];
}
}, p = class t {
#t;
#e;
#r;
#n;
#i;
#o;
#s;
#a;
get perf() {
return this.#a;
}
ttl;
ttlResolution;
ttlAutopurge;
updateAgeOnGet;
updateAgeOnHas;
allowStale;
noDisposeOnSet;
noUpdateTTL;
maxEntrySize;
sizeCalculation;
noDeleteOnFetchRejection;
noDeleteOnStaleGet;
allowStaleOnFetchAbort;
allowStaleOnFetchRejection;
ignoreFetchAbort;
#u;
#h;
#l;
#f;
#c;
#d;
#p;
#g;
#y;
#b;
#m;
#w;
#v;
#_;
#E;
#S;
#T;
#R;
#C;
static unsafeExposeInternals(t) {
return {
starts: t.#v,
ttls: t.#_,
autopurgeTimers: t.#E,
sizes: t.#w,
keyMap: t.#l,
keyList: t.#f,
valList: t.#c,
next: t.#d,
prev: t.#p,
get head() {
return t.#g;
},
get tail() {
return t.#y;
},
free: t.#b,
isBackgroundFetch: e => t.#A(e),
backgroundFetch: (e, r, n, i) => t.#O(e, r, n, i),
moveToTail: e => t.#k(e),
indexes: e => t.#x(e),
rindexes: e => t.#I(e),
isStale: e => t.#L(e)
};
}
get max() {
return this.#t;
}
get maxSize() {
return this.#e;
}
get calculatedSize() {
return this.#h;
}
get size() {
return this.#u;
}
get fetchMethod() {
return this.#o;
}
get memoMethod() {
return this.#s;
}
get dispose() {
return this.#r;
}
get onInsert() {
return this.#n;
}
get disposeAfter() {
return this.#i;
}
constructor(e) {
let {max: r = 0, ttl: n, ttlResolution: i = 1, ttlAutopurge: o, updateAgeOnGet: a, updateAgeOnHas: c, allowStale: p, dispose: g, onInsert: y, disposeAfter: b, noDisposeOnSet: m, noUpdateTTL: w, maxSize: v = 0, maxEntrySize: _ = 0, sizeCalculation: E, fetchMethod: S, memoMethod: T, noDeleteOnFetchRejection: R, noDeleteOnStaleGet: C, allowStaleOnFetchRejection: A, allowStaleOnFetchAbort: O, ignoreFetchAbort: k, perf: x} = e;
if (void 0 !== x && "function" != typeof x?.now) throw new TypeError("perf option must have a now() method if specified");
if (this.#a = x ?? s, 0 !== r && !l(r)) throw new TypeError("max option must be a nonnegative integer");
let I = r ? f(r) : Array;
if (!I) throw new Error("invalid max value: " + r);
if (this.#t = r, this.#e = v, this.maxEntrySize = _ || this.#e, this.sizeCalculation = E, 
this.sizeCalculation) {
if (!this.#e && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function");
}
if (void 0 !== T && "function" != typeof T) throw new TypeError("memoMethod must be a function if defined");
if (this.#s = T, void 0 !== S && "function" != typeof S) throw new TypeError("fetchMethod must be a function if specified");
if (this.#o = S, this.#T = !!S, this.#l = new Map, this.#f = Array.from({
length: r
}).fill(void 0), this.#c = Array.from({
length: r
}).fill(void 0), this.#d = new I(r), this.#p = new I(r), this.#g = 0, this.#y = 0, 
this.#b = d.create(r), this.#u = 0, this.#h = 0, "function" == typeof g && (this.#r = g), 
"function" == typeof y && (this.#n = y), "function" == typeof b ? (this.#i = b, 
this.#m = []) : (this.#i = void 0, this.#m = void 0), this.#S = !!this.#r, this.#C = !!this.#n, 
this.#R = !!this.#i, this.noDisposeOnSet = !!m, this.noUpdateTTL = !!w, this.noDeleteOnFetchRejection = !!R, 
this.allowStaleOnFetchRejection = !!A, this.allowStaleOnFetchAbort = !!O, this.ignoreFetchAbort = !!k, 
0 !== this.maxEntrySize) {
if (0 !== this.#e && !l(this.#e)) throw new TypeError("maxSize must be a positive integer if specified");
if (!l(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
this.#B();
}
if (this.allowStale = !!p, this.noDeleteOnStaleGet = !!C, this.updateAgeOnGet = !!a, 
this.updateAgeOnHas = !!c, this.ttlResolution = l(i) || 0 === i ? i : 1, this.ttlAutopurge = !!o, 
this.ttl = n || 0, this.ttl) {
if (!l(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
this.#M();
}
if (0 === this.#t && 0 === this.ttl && 0 === this.#e) throw new TypeError("At least one of max, maxSize, or ttl is required");
if (!this.ttlAutopurge && !this.#t && !this.#e) {
let e = "LRU_CACHE_UNBOUNDED";
(t => !u.has(t))(e) && (u.add(e), ((t, e, r, n) => {
"function" == typeof h.emitWarning ? h.emitWarning(t, e, r, n) : console.error(`[${r}] ${e}: ${t}`);
})("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", e, t));
}
}
getRemainingTTL(t) {
return this.#l.has(t) ? 1 / 0 : 0;
}
#M() {
let t = new c(this.#t), e = new c(this.#t);
this.#_ = t, this.#v = e;
let r = this.ttlAutopurge ? Array.from({
length: this.#t
}) : void 0;
this.#E = r, this.#N = (r, i, o = this.#a.now()) => {
e[r] = 0 !== i ? o : 0, t[r] = i, n(r, i);
}, this.#F = r => {
e[r] = 0 !== t[r] ? this.#a.now() : 0, n(r, t[r]);
};
let n = this.ttlAutopurge ? (t, e) => {
if (r?.[t] && (clearTimeout(r[t]), r[t] = void 0), e && 0 !== e && r) {
let n = setTimeout(() => {
this.#L(t) && this.#U(this.#f[t], "expire");
}, e + 1);
n.unref && n.unref(), r[t] = n;
}
} : () => {};
this.#P = (r, n) => {
if (t[n]) {
let s = t[n], a = e[n];
if (!s || !a) return;
r.ttl = s, r.start = a, r.now = i || o();
let u = r.now - a;
r.remainingTTL = s - u;
}
};
let i = 0, o = () => {
let t = this.#a.now();
if (this.ttlResolution > 0) {
i = t;
let e = setTimeout(() => i = 0, this.ttlResolution);
e.unref && e.unref();
}
return t;
};
this.getRemainingTTL = r => {
let n = this.#l.get(r);
if (void 0 === n) return 0;
let s = t[n], a = e[n];
return s && a ? s - ((i || o()) - a) : 1 / 0;
}, this.#L = r => {
let n = e[r], s = t[r];
return !!s && !!n && (i || o()) - n > s;
};
}
#F=() => {};
#P=() => {};
#N=() => {};
#L=() => !1;
#B() {
let t = new c(this.#t);
this.#h = 0, this.#w = t, this.#j = e => {
this.#h -= t[e], t[e] = 0;
}, this.#D = (t, e, r, n) => {
if (this.#A(e)) return 0;
if (!l(r)) {
if (!n) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
if ("function" != typeof n) throw new TypeError("sizeCalculation must be a function");
if (r = n(e, t), !l(r)) throw new TypeError("sizeCalculation return invalid (expect positive integer)");
}
return r;
}, this.#z = (e, r, n) => {
if (t[e] = r, this.#e) {
let r = this.#e - t[e];
for (;this.#h > r; ) this.#W(!0);
}
this.#h += t[e], n && (n.entrySize = r, n.totalCalculatedSize = this.#h);
};
}
#j=t => {};
#z=(t, e, r) => {};
#D=(t, e, r, n) => {
if (r || n) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
return 0;
};
* #x({allowStale: t = this.allowStale} = {}) {
if (this.#u) for (let e = this.#y; this.#q(e) && ((t || !this.#L(e)) && (yield e), 
e !== this.#g); ) e = this.#p[e];
}
* #I({allowStale: t = this.allowStale} = {}) {
if (this.#u) for (let e = this.#g; this.#q(e) && ((t || !this.#L(e)) && (yield e), 
e !== this.#y); ) e = this.#d[e];
}
#q(t) {
return void 0 !== t && this.#l.get(this.#f[t]) === t;
}
* entries() {
for (let t of this.#x()) void 0 !== this.#c[t] && void 0 !== this.#f[t] && !this.#A(this.#c[t]) && (yield [ this.#f[t], this.#c[t] ]);
}
* rentries() {
for (let t of this.#I()) void 0 !== this.#c[t] && void 0 !== this.#f[t] && !this.#A(this.#c[t]) && (yield [ this.#f[t], this.#c[t] ]);
}
* keys() {
for (let t of this.#x()) {
let e = this.#f[t];
void 0 !== e && !this.#A(this.#c[t]) && (yield e);
}
}
* rkeys() {
for (let t of this.#I()) {
let e = this.#f[t];
void 0 !== e && !this.#A(this.#c[t]) && (yield e);
}
}
* values() {
for (let t of this.#x()) void 0 !== this.#c[t] && !this.#A(this.#c[t]) && (yield this.#c[t]);
}
* rvalues() {
for (let t of this.#I()) void 0 !== this.#c[t] && !this.#A(this.#c[t]) && (yield this.#c[t]);
}
[Symbol.iterator]() {
return this.entries();
}
[Symbol.toStringTag]="LRUCache";
find(t, e = {}) {
for (let r of this.#x()) {
let n = this.#c[r], i = this.#A(n) ? n.__staleWhileFetching : n;
if (void 0 !== i && t(i, this.#f[r], this)) return this.#G(this.#f[r], e);
}
}
forEach(t, e = this) {
for (let r of this.#x()) {
let n = this.#c[r], i = this.#A(n) ? n.__staleWhileFetching : n;
void 0 !== i && t.call(e, i, this.#f[r], this);
}
}
rforEach(t, e = this) {
for (let r of this.#I()) {
let n = this.#c[r], i = this.#A(n) ? n.__staleWhileFetching : n;
void 0 !== i && t.call(e, i, this.#f[r], this);
}
}
purgeStale() {
let t = !1;
for (let e of this.#I({
allowStale: !0
})) this.#L(e) && (this.#U(this.#f[e], "expire"), t = !0);
return t;
}
info(t) {
let e = this.#l.get(t);
if (void 0 === e) return;
let r = this.#c[e], n = this.#A(r) ? r.__staleWhileFetching : r;
if (void 0 === n) return;
let i = {
value: n
};
if (this.#_ && this.#v) {
let t = this.#_[e], r = this.#v[e];
if (t && r) {
let e = t - (this.#a.now() - r);
i.ttl = e, i.start = Date.now();
}
}
return this.#w && (i.size = this.#w[e]), i;
}
dump() {
let t = [];
for (let e of this.#x({
allowStale: !0
})) {
let r = this.#f[e], n = this.#c[e], i = this.#A(n) ? n.__staleWhileFetching : n;
if (void 0 === i || void 0 === r) continue;
let o = {
value: i
};
if (this.#_ && this.#v) {
o.ttl = this.#_[e];
let t = this.#a.now() - this.#v[e];
o.start = Math.floor(Date.now() - t);
}
this.#w && (o.size = this.#w[e]), t.unshift([ r, o ]);
}
return t;
}
load(t) {
this.clear();
for (let [e, r] of t) {
if (r.start) {
let t = Date.now() - r.start;
r.start = this.#a.now() - t;
}
this.#$(e, r.value, r);
}
}
set(t, e, r = {}) {
let {status: n = (i.hasSubscribers ? {} : void 0)} = r;
r.status = n, n && (n.op = "set", n.key = t, void 0 !== e && (n.value = e));
let o = this.#$(t, e, r);
return n && i.hasSubscribers && i.publish(n), o;
}
#$(t, e, r = {}) {
let {ttl: n = this.ttl, start: i, noDisposeOnSet: o = this.noDisposeOnSet, sizeCalculation: s = this.sizeCalculation, status: a} = r;
if (void 0 === e) return a && (a.set = "deleted"), this.delete(t), this;
let {noUpdateTTL: u = this.noUpdateTTL} = r;
a && !this.#A(e) && (a.value = e);
let h = this.#D(t, e, r.size || 0, s, a);
if (this.maxEntrySize && h > this.maxEntrySize) return this.#U(t, "set"), a && (a.set = "miss", 
a.maxEntrySizeExceeded = !0), this;
let l = 0 === this.#u ? void 0 : this.#l.get(t);
if (void 0 === l) l = 0 === this.#u ? this.#y : 0 !== this.#b.length ? this.#b.pop() : this.#u === this.#t ? this.#W(!1) : this.#u, 
this.#f[l] = t, this.#c[l] = e, this.#l.set(t, l), this.#d[this.#y] = l, this.#p[l] = this.#y, 
this.#y = l, this.#u++, this.#z(l, h, a), a && (a.set = "add"), u = !1, this.#C && this.#n?.(e, t, "add"); else {
this.#k(l);
let r = this.#c[l];
if (e !== r) {
if (this.#T && this.#A(r)) {
r.__abortController.abort(new Error("replaced"));
let {__staleWhileFetching: e} = r;
void 0 !== e && !o && (this.#S && this.#r?.(e, t, "set"), this.#R && this.#m?.push([ e, t, "set" ]));
} else o || (this.#S && this.#r?.(r, t, "set"), this.#R && this.#m?.push([ r, t, "set" ]));
if (this.#j(l), this.#z(l, h, a), this.#c[l] = e, a) {
a.set = "replace";
let t = r && this.#A(r) ? r.__staleWhileFetching : r;
void 0 !== t && (a.oldValue = t);
}
} else a && (a.set = "update");
this.#C && this.onInsert?.(e, t, e === r ? "update" : "replace");
}
if (0 !== n && !this.#_ && this.#M(), this.#_ && (u || this.#N(l, n, i), a && this.#P(a, l)), 
!o && this.#R && this.#m) {
let t, e = this.#m;
for (;t = e?.shift(); ) this.#i?.(...t);
}
return this;
}
pop() {
try {
for (;this.#u; ) {
let t = this.#c[this.#g];
if (this.#W(!0), this.#A(t)) {
if (t.__staleWhileFetching) return t.__staleWhileFetching;
} else if (void 0 !== t) return t;
}
} finally {
if (this.#R && this.#m) {
let t, e = this.#m;
for (;t = e?.shift(); ) this.#i?.(...t);
}
}
}
#W(t) {
let e = this.#g, r = this.#f[e], n = this.#c[e];
return this.#T && this.#A(n) ? n.__abortController.abort(new Error("evicted")) : (this.#S || this.#R) && (this.#S && this.#r?.(n, r, "evict"), 
this.#R && this.#m?.push([ n, r, "evict" ])), this.#j(e), this.#E?.[e] && (clearTimeout(this.#E[e]), 
this.#E[e] = void 0), t && (this.#f[e] = void 0, this.#c[e] = void 0, this.#b.push(e)), 
1 === this.#u ? (this.#g = this.#y = 0, this.#b.length = 0) : this.#g = this.#d[e], 
this.#l.delete(r), this.#u--, e;
}
has(t, e = {}) {
let {status: r = (i.hasSubscribers ? {} : void 0)} = e;
e.status = r, r && (r.op = "has", r.key = t);
let n = this.#H(t, e);
return i.hasSubscribers && i.publish(r), n;
}
#H(t, e = {}) {
let {updateAgeOnHas: r = this.updateAgeOnHas, status: n} = e, i = this.#l.get(t);
if (void 0 !== i) {
let t = this.#c[i];
if (this.#A(t) && void 0 === t.__staleWhileFetching) return !1;
if (!this.#L(i)) return r && this.#F(i), n && (n.has = "hit", this.#P(n, i)), !0;
n && (n.has = "stale", this.#P(n, i));
} else n && (n.has = "miss");
return !1;
}
peek(t, e = {}) {
let {status: r = (a() ? {} : void 0)} = e;
r && (r.op = "peek", r.key = t), e.status = r;
let n = this.#Y(t, e);
return i.hasSubscribers && i.publish(r), n;
}
#Y(t, e) {
let {status: r, allowStale: n = this.allowStale} = e, i = this.#l.get(t);
if (void 0 === i || !n && this.#L(i)) return void (r && (r.peek = void 0 === i ? "miss" : "stale"));
let o = this.#c[i], s = this.#A(o) ? o.__staleWhileFetching : o;
return r && (void 0 !== s ? (r.peek = "hit", r.value = s) : r.peek = "miss"), s;
}
#O(t, e, r, n) {
let i = void 0 === e ? void 0 : this.#c[e];
if (this.#A(i)) return i;
let o = new AbortController, {signal: s} = r;
s?.addEventListener("abort", () => o.abort(s.reason), {
signal: o.signal
});
let a = {
signal: o.signal,
options: r,
context: n
}, u = (n, i = !1) => {
let {aborted: s} = o.signal, u = r.ignoreFetchAbort && void 0 !== n, f = r.ignoreFetchAbort || !(!r.allowStaleOnFetchAbort || void 0 === n);
if (r.status && (s && !i ? (r.status.fetchAborted = !0, r.status.fetchError = o.signal.reason, 
u && (r.status.fetchAbortIgnored = !0)) : r.status.fetchResolved = !0), s && !u && !i) return h(o.signal.reason, f);
let c = l, d = this.#c[e];
return (d === l || void 0 === d && u && i) && (void 0 === n ? void 0 !== c.__staleWhileFetching ? this.#c[e] = c.__staleWhileFetching : this.#U(t, "fetch") : (r.status && (r.status.fetchUpdated = !0), 
this.#$(t, n, a.options))), n;
}, h = (n, i) => {
let {aborted: s} = o.signal, a = s && r.allowStaleOnFetchAbort, u = a || r.allowStaleOnFetchRejection, h = u || r.noDeleteOnFetchRejection, f = l;
if (this.#c[e] === l && (!h || !i && void 0 === f.__staleWhileFetching ? this.#U(t, "fetch") : a || (this.#c[e] = f.__staleWhileFetching)), 
u) return r.status && void 0 !== f.__staleWhileFetching && (r.status.returnedStale = !0), 
f.__staleWhileFetching;
if (f.__returned === f) throw n;
};
r.status && (r.status.fetchDispatched = !0);
let l = new Promise((e, n) => {
let s = this.#o?.(t, i, a);
s && s instanceof Promise && s.then(t => e(void 0 === t ? void 0 : t), n), o.signal.addEventListener("abort", () => {
(!r.ignoreFetchAbort || r.allowStaleOnFetchAbort) && (e(void 0), r.allowStaleOnFetchAbort && (e = t => u(t, !0)));
});
}).then(u, t => (r.status && (r.status.fetchRejected = !0, r.status.fetchError = t), 
h(t, !1))), f = Object.assign(l, {
__abortController: o,
__staleWhileFetching: i,
__returned: void 0
});
return void 0 === e ? (this.#$(t, f, {
...a.options,
status: void 0
}), e = this.#l.get(t)) : this.#c[e] = f, f;
}
#A(t) {
if (!this.#T) return !1;
let e = t;
return !!e && e instanceof Promise && e.hasOwnProperty("__staleWhileFetching") && e.__abortController instanceof AbortController;
}
fetch(t, e = {}) {
let r = o.hasSubscribers, {status: n = (a() ? {} : void 0)} = e;
e.status = n, n && e.context && (n.context = e.context);
let i = this.#V(t, e);
return n && r && (n.trace = !0, o.tracePromise(() => i, n).catch(() => {})), i;
}
async #V(t, e = {}) {
let {allowStale: r = this.allowStale, updateAgeOnGet: n = this.updateAgeOnGet, noDeleteOnStaleGet: i = this.noDeleteOnStaleGet, ttl: o = this.ttl, noDisposeOnSet: s = this.noDisposeOnSet, size: a = 0, sizeCalculation: u = this.sizeCalculation, noUpdateTTL: h = this.noUpdateTTL, noDeleteOnFetchRejection: l = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection: f = this.allowStaleOnFetchRejection, ignoreFetchAbort: c = this.ignoreFetchAbort, allowStaleOnFetchAbort: d = this.allowStaleOnFetchAbort, context: p, forceRefresh: g = !1, status: y, signal: b} = e;
if (y && (y.op = "fetch", y.key = t, g && (y.forceRefresh = !0)), !this.#T) return y && (y.fetch = "get"), 
this.#G(t, {
allowStale: r,
updateAgeOnGet: n,
noDeleteOnStaleGet: i,
status: y
});
let m = {
allowStale: r,
updateAgeOnGet: n,
noDeleteOnStaleGet: i,
ttl: o,
noDisposeOnSet: s,
size: a,
sizeCalculation: u,
noUpdateTTL: h,
noDeleteOnFetchRejection: l,
allowStaleOnFetchRejection: f,
allowStaleOnFetchAbort: d,
ignoreFetchAbort: c,
status: y,
signal: b
}, w = this.#l.get(t);
if (void 0 === w) {
y && (y.fetch = "miss");
let e = this.#O(t, w, m, p);
return e.__returned = e;
}
{
let e = this.#c[w];
if (this.#A(e)) {
let t = r && void 0 !== e.__staleWhileFetching;
return y && (y.fetch = "inflight", t && (y.returnedStale = !0)), t ? e.__staleWhileFetching : e.__returned = e;
}
let i = this.#L(w);
if (!g && !i) return y && (y.fetch = "hit"), this.#k(w), n && this.#F(w), y && this.#P(y, w), 
e;
let o = this.#O(t, w, m, p), s = void 0 !== o.__staleWhileFetching && r;
return y && (y.fetch = i ? "stale" : "refresh", s && i && (y.returnedStale = !0)), 
s ? o.__staleWhileFetching : o.__returned = o;
}
}
forceFetch(t, e = {}) {
let r = o.hasSubscribers, {status: n = (a() ? {} : void 0)} = e;
e.status = n, n && e.context && (n.context = e.context);
let i = this.#K(t, e);
return n && r && (n.trace = !0, o.tracePromise(() => i, n).catch(() => {})), i;
}
async #K(t, e = {}) {
let r = await this.#V(t, e);
if (void 0 === r) throw new Error("fetch() returned undefined");
return r;
}
memo(t, e = {}) {
let {status: r = (i.hasSubscribers ? {} : void 0)} = e;
e.status = r, r && (r.op = "memo", r.key = t, e.context && (r.context = e.context));
let n = this.#X(t, e);
return r && (r.value = n), i.hasSubscribers && i.publish(r), n;
}
#X(t, e = {}) {
let r = this.#s;
if (!r) throw new Error("no memoMethod provided to constructor");
let {context: n, status: i, forceRefresh: o, ...s} = e;
i && o && (i.forceRefresh = !0);
let a = this.#G(t, s), u = o || void 0 === a;
if (i && (i.memo = u ? "miss" : "hit", u || (i.value = a)), !u) return a;
let h = r(t, a, {
options: s,
context: n
});
return i && (i.value = h), this.#$(t, h, s), h;
}
get(t, e = {}) {
let {status: r = (i.hasSubscribers ? {} : void 0)} = e;
e.status = r, r && (r.op = "get", r.key = t);
let n = this.#G(t, e);
return r && (void 0 !== n && (r.value = n), i.hasSubscribers && i.publish(r)), n;
}
#G(t, e = {}) {
let {allowStale: r = this.allowStale, updateAgeOnGet: n = this.updateAgeOnGet, noDeleteOnStaleGet: i = this.noDeleteOnStaleGet, status: o} = e, s = this.#l.get(t);
if (void 0 === s) return void (o && (o.get = "miss"));
let a = this.#c[s], u = this.#A(a);
return o && this.#P(o, s), this.#L(s) ? u ? (o && (o.get = "stale-fetching"), r && void 0 !== a.__staleWhileFetching ? (o && (o.returnedStale = !0), 
a.__staleWhileFetching) : void 0) : (i || this.#U(t, "expire"), o && (o.get = "stale"), 
r ? (o && (o.returnedStale = !0), a) : void 0) : (o && (o.get = u ? "fetching" : "hit"), 
this.#k(s), n && this.#F(s), u ? a.__staleWhileFetching : a);
}
#J(t, e) {
this.#p[e] = t, this.#d[t] = e;
}
#k(t) {
t !== this.#y && (t === this.#g ? this.#g = this.#d[t] : this.#J(this.#p[t], this.#d[t]), 
this.#J(this.#y, t), this.#y = t);
}
delete(t) {
return this.#U(t, "delete");
}
#U(t, e) {
i.hasSubscribers && i.publish({
op: "delete",
delete: e,
key: t
});
let r = !1;
if (0 !== this.#u) {
let n = this.#l.get(t);
if (void 0 !== n) if (this.#E?.[n] && (clearTimeout(this.#E?.[n]), this.#E[n] = void 0), 
r = !0, 1 === this.#u) this.#Z(e); else {
this.#j(n);
let r = this.#c[n];
if (this.#A(r) ? r.__abortController.abort(new Error("deleted")) : (this.#S || this.#R) && (this.#S && this.#r?.(r, t, e), 
this.#R && this.#m?.push([ r, t, e ])), this.#l.delete(t), this.#f[n] = void 0, 
this.#c[n] = void 0, n === this.#y) this.#y = this.#p[n]; else if (n === this.#g) this.#g = this.#d[n]; else {
let t = this.#p[n];
this.#d[t] = this.#d[n];
let e = this.#d[n];
this.#p[e] = this.#p[n];
}
this.#u--, this.#b.push(n);
}
}
if (this.#R && this.#m?.length) {
let t, e = this.#m;
for (;t = e?.shift(); ) this.#i?.(...t);
}
return r;
}
clear() {
return this.#Z("delete");
}
#Z(t) {
for (let e of this.#I({
allowStale: !0
})) {
let r = this.#c[e];
if (this.#A(r)) r.__abortController.abort(new Error("deleted")); else {
let n = this.#f[e];
this.#S && this.#r?.(r, n, t), this.#R && this.#m?.push([ r, n, t ]);
}
}
if (this.#l.clear(), this.#c.fill(void 0), this.#f.fill(void 0), this.#_ && this.#v) {
this.#_.fill(0), this.#v.fill(0);
for (let t of this.#E ?? []) void 0 !== t && clearTimeout(t);
this.#E?.fill(void 0);
}
if (this.#w && this.#w.fill(0), this.#g = 0, this.#y = 0, this.#b.length = 0, this.#h = 0, 
this.#u = 0, this.#R && this.#m) {
let t, e = this.#m;
for (;t = e?.shift(); ) this.#i?.(...t);
}
}
};
},
82175(t, e, r) {
"use strict";
r.d(e, {
a: () => h
});
const n = Uint32Array;
function i(t) {
if (!t) throw Error("assertion failed");
return t;
}
function o(t, e) {
return t.split(/\r?\n/).slice(1 + e);
}
Error.stackTraceLimit = 15;
const s = "undefined" != typeof performance && performance.now ? performance.now : "undefined" != typeof process && process.hrtime ? () => {
let t = process.hrtime();
return 1e3 * t[0] + t[1] / 1e6;
} : Date.now, a = [ "", "FREE", "LEFTFREE", "FREE+LEFTFREE" ], u = [ "BLACK/WHITE", "WHITE/BLACK", "GRAY", "INVALID" ];
class h {
constructor(t) {
this.options = t || {}, this.onerror = this.options.onerror || function() {}, this.oninfo = this.options.oninfo || function() {}, 
this.oncollect_ = this.options.oncollect || function() {}, this.memory = null, this.shadow = null, 
this.shadowStart = 4294967296, this.blocks = new Map, this.allocSites = new Map, 
this.freedBlocks = new Map, this.gcProfileStart = 0, this.gcProfile = [], this.allocCount = 0, 
this.resizeCount = 0, this.moveCount = 0, this.freeCount = 0, this.heapBase = 4294967296;
}
install(t) {
return t || (t = {}), t.rtrace = Object.assign(t.rtrace || {}, {
oninit: this.oninit.bind(this),
onalloc: this.onalloc.bind(this),
onresize: this.onresize.bind(this),
onmove: this.onmove.bind(this),
onvisit: this.onvisit.bind(this),
onfree: this.onfree.bind(this),
oninterrupt: this.oninterrupt.bind(this),
onyield: this.onyield.bind(this),
oncollect: this.oncollect.bind(this),
onstore: this.onstore.bind(this),
onload: this.onload.bind(this)
}), t;
}
syncShadow() {
if (this.memory) {
let t = this.memory.buffer.byteLength - this.shadow.buffer.byteLength;
t > 0 && this.shadow.grow(t >>> 16);
} else this.memory = i(this.options.getMemory()), this.shadow = new WebAssembly.Memory({
initial: (this.memory.buffer.byteLength + 65535 & -65536) >>> 16
});
}
markShadow(t, e = 0) {
i(this.shadow && this.shadow.byteLength == this.memory.byteLength), i(!(3 & t.size)), 
t.ptr < this.shadowStart && (this.shadowStart = t.ptr);
let r = t.size >>> 2, o = new n(this.shadow.buffer, t.ptr, r), s = !1, a = e >>> 2;
for (let e = 0; e < a; ++e) o[e] == t.ptr || s || (this.onerror(Error("shadow region mismatch: " + o[e] + " != " + t.ptr), t), 
s = !0);
s = !1;
for (let e = a; e < r; ++e) 0 == o[e] || s || (this.onerror(Error("shadow region already in use: " + o[e] + " != 0"), t), 
s = !0), o[e] = t.ptr;
}
unmarkShadow(t, e = t.size) {
i(this.shadow && this.shadow.byteLength == this.memory.byteLength);
let r = e >>> 2, o = new n(this.shadow.buffer, t.ptr, r), s = !1, a = 0;
e != t.size && (i(e > t.size), a = t.size >>> 2);
for (let e = 0; e < r; ++e) o[e] == t.ptr || s || (this.onerror(Error("shadow region mismatch: " + o[e] + " != " + t.ptr), t), 
s = !0), e >= a && (o[e] = 0);
}
accessShadow(t, e, r, n) {
if (this.syncShadow(), t < this.shadowStart) return;
if (0 == new Uint32Array(this.shadow.buffer, -4 & t, 1)[0] && !n) {
let n = o((new Error).stack, 2);
this.onerror(new Error("OOB " + (r ? "load" : "store") + 8 * e + " at address " + t + "\n" + n.join("\n")));
}
}
getBlockInfo(t) {
const [e, r, n, i, o] = new Uint32Array(this.memory.buffer, t, 5), s = -4 & e;
return {
ptr: t,
size: 4 + s,
mmInfo: {
tags: a[3 & e],
size: s
},
gcInfo: {
color: u[3 & r],
next: -4 & r,
prev: n
},
rtId: i,
rtSize: o
};
}
get active() {
return Boolean(this.allocCount || this.resizeCount || this.moveCount || this.freeCount);
}
check() {
if (this.oninfo) for (let [t, e] of this.blocks) this.oninfo("LIVE " + t + "\n" + e.allocStack.join("\n"));
return this.blocks.size;
}
oninit(t) {
this.heapBase = t, this.gcProfileStart = 0, this.gcProfile.length = 0, this.oninfo("INIT heapBase=" + t);
}
onalloc(t) {
this.syncShadow(), ++this.allocCount;
let e = this.getBlockInfo(t);
if (this.blocks.has(t)) this.onerror(Error("duplicate alloc: " + t), e); else {
this.oninfo("ALLOC " + t + ".." + (t + e.size)), this.markShadow(e);
let r = o((new Error).stack, 1);
this.blocks.set(t, Object.assign(e, {
allocStack: r
}));
}
}
onresize(t, e) {
this.syncShadow(), ++this.resizeCount;
const r = this.getBlockInfo(t);
if (this.blocks.has(t)) {
const n = this.blocks.get(t);
n.size != e && this.onerror(Error(`size mismatch upon resize: ${t} (${n.size} != ${e})`), r);
const i = r.size;
this.oninfo("RESIZE " + t + ".." + (t + i) + " (" + e + "->" + i + ")"), this.blocks.set(t, Object.assign(r, {
allocStack: n.allocStack
})), i > e ? this.markShadow(r, e) : i < e && this.unmarkShadow(r, e);
} else this.onerror(Error("orphaned resize: " + t), r);
}
onmove(t, e) {
this.syncShadow(), ++this.moveCount;
let r = this.getBlockInfo(t), n = this.getBlockInfo(e);
if (this.blocks.has(t)) if (this.blocks.has(e)) {
const i = this.blocks.get(t), o = r.size, s = n.size;
i.size != o && this.onerror(Error(`size mismatch upon move: ${t} (${i.size} != ${o})`), r), 
this.oninfo("MOVE " + t + ".." + (t + o) + " -> " + e + ".." + (e + s));
} else this.onerror(Error("orphaned move (new): " + e), n); else this.onerror(Error("orphaned move (old): " + t), r);
}
onvisit(t) {
if (t > this.heapBase && !this.blocks.has(t)) {
let e = Error("orphaned visit: " + t), r = this.freedBlocks.get(t);
return r && (e.stack += "\n^ allocated at:\n" + r.allocStack.join("\n"), e.stack += "\n^ freed at:\n" + r.freeStack.join("\n")), 
this.onerror(e, null), !1;
}
return !0;
}
onfree(t) {
this.syncShadow(), ++this.freeCount;
let e = this.getBlockInfo(t);
if (this.blocks.has(t)) {
const r = this.blocks.get(t);
e.size != r.size && this.onerror(Error(`size mismatch upon free: ${t} (${r.size} != ${e.size})`), e), 
this.oninfo("FREE " + t + ".." + (t + e.size)), this.unmarkShadow(e);
const n = this.blocks.get(t);
this.blocks.delete(t);
const i = n.allocStack, s = o((new Error).stack, 1);
this.freedBlocks.set(t, {
allocStack: i,
freeStack: s
});
} else this.onerror(Error("orphaned free: " + t), e);
}
oncollect(t) {
this.oninfo(`COLLECT at ${t}`), this.plot(t), this.oncollect_();
}
plot(t, e = 0) {
this.gcProfileStart || (this.gcProfileStart = Date.now()), this.gcProfile.push([ Date.now() - this.gcProfileStart, t, e ]);
}
oninterrupt(t) {
this.interruptStart = s(), this.plot(t);
}
onyield(t) {
let e = s() - this.interruptStart;
e >= 1 && console.log("interrupted for " + e.toFixed(1) + "ms"), this.plot(t, e);
}
onstore(t, e, r, n) {
return this.accessShadow(t + e, r, !1, n), t;
}
onload(t, e, r, n) {
return this.accessShadow(t + e, r, !0, n), t;
}
}
},
7670(t) {
t.exports = function(t, e) {
this.v = t, this.k = e;
}, t.exports.__esModule = !0, t.exports.default = t.exports;
},
12913(t, e, r) {
"use strict";
function n(t, e) {
(null == e || e > t.length) && (e = t.length);
for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
return n;
}
r.d(e, {
a: () => n
});
},
34617(t, e, r) {
"use strict";
function n(t) {
if (Array.isArray(t)) return t;
}
r.d(e, {
a: () => n
});
},
68136(t, e, r) {
"use strict";
r.d(e, {
a: () => i
});
var n = r(12913);
function i(t) {
if (Array.isArray(t)) return (0, n.a)(t);
}
},
98001(t, e, r) {
"use strict";
function n(t) {
if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
return t;
}
r.d(e, {
a: () => n
});
},
32859(t, e, r) {
"use strict";
function n(t, e, r, n, i, o, s) {
try {
var a = t[o](s), u = a.value;
} catch (t) {
return void r(t);
}
a.done ? e(u) : Promise.resolve(u).then(n, i);
}
function i(t) {
return function() {
var e = this, r = arguments;
return new Promise(function(i, o) {
var s = t.apply(e, r);
function a(t) {
n(s, i, o, a, u, "next", t);
}
function u(t) {
n(s, i, o, a, u, "throw", t);
}
a(void 0);
});
};
}
r.d(e, {
a: () => i
});
},
1389(t, e, r) {
"use strict";
function n(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}
r.d(e, {
a: () => n
});
},
88412(t, e, r) {
"use strict";
r.d(e, {
a: () => o
});
var n = r(26987), i = r(77750);
function o(t, e, r) {
if ((0, n.a)()) return Reflect.construct.apply(null, arguments);
var o = [ null ];
o.push.apply(o, e);
var s = new (t.bind.apply(t, o));
return r && (0, i.a)(s, r.prototype), s;
}
},
9549(t, e, r) {
"use strict";
r.d(e, {
a: () => o
});
var n = r(95722);
function i(t, e) {
for (var r = 0; r < e.length; r++) {
var i = e[r];
i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
Object.defineProperty(t, (0, n.a)(i.key), i);
}
}
function o(t, e, r) {
return e && i(t.prototype, e), r && i(t, r), Object.defineProperty(t, "prototype", {
writable: !1
}), t;
}
},
23067(t, e, r) {
"use strict";
r.d(e, {
a: () => i
});
var n = r(95722);
function i(t, e, r) {
return (e = (0, n.a)(e)) in t ? Object.defineProperty(t, e, {
value: r,
enumerable: !0,
configurable: !0,
writable: !0
}) : t[e] = r, t;
}
},
95338(t, e, r) {
"use strict";
function n(t) {
return n = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
return t.__proto__ || Object.getPrototypeOf(t);
}, n(t);
}
r.d(e, {
a: () => n
});
},
33637(t, e, r) {
"use strict";
r.d(e, {
a: () => i
});
var n = r(77750);
function i(t, e) {
if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
t.prototype = Object.create(e && e.prototype, {
constructor: {
value: t,
writable: !0,
configurable: !0
}
}), Object.defineProperty(t, "prototype", {
writable: !1
}), e && (0, n.a)(t, e);
}
},
78866(t, e, r) {
"use strict";
function n(t) {
try {
return -1 !== Function.toString.call(t).indexOf("[native code]");
} catch (e) {
return "function" == typeof t;
}
}
r.d(e, {
a: () => n
});
},
26987(t, e, r) {
"use strict";
function n() {
try {
var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
} catch (t) {}
return (n = function() {
return !!t;
})();
}
r.d(e, {
a: () => n
});
},
64989(t, e, r) {
"use strict";
function n(t) {
if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t);
}
r.d(e, {
a: () => n
});
},
114(t, e, r) {
"use strict";
function n(t, e) {
var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
if (null != r) {
var n, i, o, s, a = [], u = !0, h = !1;
try {
if (o = (r = r.call(t)).next, 0 === e) {
if (Object(r) !== r) return;
u = !1;
} else for (;!(u = (n = o.call(r)).done) && (a.push(n.value), a.length !== e); u = !0) ;
} catch (t) {
h = !0, i = t;
} finally {
try {
if (!u && null != r.return && (s = r.return(), Object(s) !== s)) return;
} finally {
if (h) throw i;
}
}
return a;
}
}
r.d(e, {
a: () => n
});
},
25530(t, e, r) {
"use strict";
function n() {
throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
r.d(e, {
a: () => n
});
},
18415(t, e, r) {
"use strict";
function n() {
throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
r.d(e, {
a: () => n
});
},
33630(t, e, r) {
"use strict";
r.d(e, {
a: () => o
});
var n = r(75316), i = r(98001);
function o(t, e) {
if (e && ("object" == (0, n.a)(e) || "function" == typeof e)) return e;
if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
return (0, i.a)(t);
}
},
77750(t, e, r) {
"use strict";
function n(t, e) {
return n = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
return t.__proto__ = e, t;
}, n(t, e);
}
r.d(e, {
a: () => n
});
},
46997(t, e, r) {
"use strict";
r.d(e, {
a: () => a
});
var n = r(34617), i = r(114), o = r(40768), s = r(25530);
function a(t, e) {
return (0, n.a)(t) || (0, i.a)(t, e) || (0, o.a)(t, e) || (0, s.a)();
}
},
95114(t, e, r) {
"use strict";
r.d(e, {
a: () => a
});
var n = r(68136), i = r(64989), o = r(40768), s = r(18415);
function a(t) {
return (0, n.a)(t) || (0, i.a)(t) || (0, o.a)(t) || (0, s.a)();
}
},
37135(t, e, r) {
"use strict";
r.d(e, {
a: () => i
});
var n = r(75316);
function i(t, e) {
if ("object" != (0, n.a)(t) || !t) return t;
var r = t[Symbol.toPrimitive];
if (void 0 !== r) {
var i = r.call(t, e || "default");
if ("object" != (0, n.a)(i)) return i;
throw new TypeError("@@toPrimitive must return a primitive value.");
}
return ("string" === e ? String : Number)(t);
}
},
95722(t, e, r) {
"use strict";
r.d(e, {
a: () => o
});
var n = r(75316), i = r(37135);
function o(t) {
var e = (0, i.a)(t, "string");
return "symbol" == (0, n.a)(e) ? e : e + "";
}
},
75316(t, e, r) {
"use strict";
function n(t) {
return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, n(t);
}
r.d(e, {
a: () => n
});
},
40768(t, e, r) {
"use strict";
r.d(e, {
a: () => i
});
var n = r(12913);
function i(t, e) {
if (t) {
if ("string" == typeof t) return (0, n.a)(t, e);
var r = {}.toString.call(t).slice(8, -1);
return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? (0, 
n.a)(t, e) : void 0;
}
}
},
23011(t, e, r) {
"use strict";
r.d(e, {
a: () => a
});
var n = r(95338), i = r(77750), o = r(78866), s = r(88412);
function a(t) {
var e = "function" == typeof Map ? new Map : void 0;
return a = function(t) {
if (null === t || !(0, o.a)(t)) return t;
if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
if (void 0 !== e) {
if (e.has(t)) return e.get(t);
e.set(t, r);
}
function r() {
return (0, s.a)(t, arguments, (0, n.a)(this).constructor);
}
return r.prototype = Object.create(t.prototype, {
constructor: {
value: r,
enumerable: !1,
writable: !0,
configurable: !0
}
}), (0, i.a)(r, t);
}, a(t);
}
},
15643(t, e, r) {
var n = r(8156);
function i() {
var e, r, o = "function" == typeof Symbol ? Symbol : {}, s = o.iterator || "@@iterator", a = o.toStringTag || "@@toStringTag";
function u(t, i, o, s) {
var a = i && i.prototype instanceof l ? i : l, u = Object.create(a.prototype);
return n(u, "_invoke", function(t, n, i) {
var o, s, a, u = 0, l = i || [], f = !1, c = {
p: 0,
n: 0,
v: e,
a: d,
f: d.bind(e, 4),
d: function(t, r) {
return o = t, s = 0, a = e, c.n = r, h;
}
};
function d(t, n) {
for (s = t, a = n, r = 0; !f && u && !i && r < l.length; r++) {
var i, o = l[r], d = c.p, p = o[2];
t > 3 ? (i = p === n) && (a = o[(s = o[4]) ? 5 : (s = 3, 3)], o[4] = o[5] = e) : o[0] <= d && ((i = t < 2 && d < o[1]) ? (s = 0, 
c.v = n, c.n = o[1]) : d < p && (i = t < 3 || o[0] > n || n > p) && (o[4] = t, o[5] = n, 
c.n = p, s = 0));
}
if (i || t > 1) return h;
throw f = !0, n;
}
return function(i, l, p) {
if (u > 1) throw TypeError("Generator is already running");
for (f && 1 === l && d(l, p), s = l, a = p; (r = s < 2 ? e : a) || !f; ) {
o || (s ? s < 3 ? (s > 1 && (c.n = -1), d(s, a)) : c.n = a : c.v = a);
try {
if (u = 2, o) {
if (s || (i = "next"), r = o[i]) {
if (!(r = r.call(o, a))) throw TypeError("iterator result is not an object");
if (!r.done) return r;
a = r.value, s < 2 && (s = 0);
} else 1 === s && (r = o.return) && r.call(o), s < 2 && (a = TypeError("The iterator does not provide a '" + i + "' method"), 
s = 1);
o = e;
} else if ((r = (f = c.n < 0) ? a : t.call(n, c)) !== h) break;
} catch (t) {
o = e, s = 1, a = t;
} finally {
u = 1;
}
}
return {
value: r,
done: f
};
};
}(t, o, s), !0), u;
}
var h = {};
function l() {}
function f() {}
function c() {}
r = Object.getPrototypeOf;
var d = [][s] ? r(r([][s]())) : (n(r = {}, s, function() {
return this;
}), r), p = c.prototype = l.prototype = Object.create(d);
function g(t) {
return Object.setPrototypeOf ? Object.setPrototypeOf(t, c) : (t.__proto__ = c, n(t, a, "GeneratorFunction")), 
t.prototype = Object.create(p), t;
}
return f.prototype = c, n(p, "constructor", c), n(c, "constructor", f), f.displayName = "GeneratorFunction", 
n(c, a, "GeneratorFunction"), n(p), n(p, a, "Generator"), n(p, s, function() {
return this;
}), n(p, "toString", function() {
return "[object Generator]";
}), (t.exports = i = function() {
return {
w: u,
m: g
};
}, t.exports.__esModule = !0, t.exports.default = t.exports)();
}
t.exports = i, t.exports.__esModule = !0, t.exports.default = t.exports;
},
33239(t, e, r) {
var n = r(58533);
t.exports = function(t, e, r, i, o) {
var s = n(t, e, r, i, o);
return s.next().then(function(t) {
return t.done ? t.value : s.next();
});
}, t.exports.__esModule = !0, t.exports.default = t.exports;
},
58533(t, e, r) {
var n = r(15643), i = r(47957);
t.exports = function(t, e, r, o, s) {
return new i(n().w(t, e, r, o), s || Promise);
}, t.exports.__esModule = !0, t.exports.default = t.exports;
},
47957(t, e, r) {
var n = r(7670), i = r(8156);
t.exports = function t(e, r) {
function o(t, i, s, a) {
try {
var u = e[t](i), h = u.value;
return h instanceof n ? r.resolve(h.v).then(function(t) {
o("next", t, s, a);
}, function(t) {
o("throw", t, s, a);
}) : r.resolve(h).then(function(t) {
u.value = t, s(u);
}, function(t) {
return o("throw", t, s, a);
});
} catch (t) {
a(t);
}
}
var s;
this.next || (i(t.prototype), i(t.prototype, "function" == typeof Symbol && Symbol.asyncIterator || "@asyncIterator", function() {
return this;
})), i(this, "_invoke", function(t, e, n) {
function i() {
return new r(function(e, r) {
o(t, n, e, r);
});
}
return s = s ? s.then(i, i) : i();
}, !0);
}, t.exports.__esModule = !0, t.exports.default = t.exports;
},
8156(t) {
function e(r, n, i, o) {
var s = Object.defineProperty;
try {
s({}, "", {});
} catch (r) {
s = 0;
}
t.exports = e = function(t, r, n, i) {
function o(r, n) {
e(t, r, function(t) {
return this._invoke(r, n, t);
});
}
r ? s ? s(t, r, {
value: n,
enumerable: !i,
configurable: !i,
writable: !i
}) : t[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
}, t.exports.__esModule = !0, t.exports.default = t.exports, e(r, n, i, o);
}
t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports;
},
92919(t) {
t.exports = function(t) {
var e = Object(t), r = [];
for (var n in e) r.unshift(n);
return function t() {
for (;r.length; ) if ((n = r.pop()) in e) return t.value = n, t.done = !1, t;
return t.done = !0, t;
};
}, t.exports.__esModule = !0, t.exports.default = t.exports;
},
46567(t, e, r) {
var n = r(7670), i = r(15643), o = r(33239), s = r(58533), a = r(47957), u = r(92919), h = r(6589);
function l() {
"use strict";
var e = i(), r = e.m(l), f = (Object.getPrototypeOf ? Object.getPrototypeOf(r) : r.__proto__).constructor;
function c(t) {
var e = "function" == typeof t && t.constructor;
return !!e && (e === f || "GeneratorFunction" === (e.displayName || e.name));
}
var d = {
throw: 1,
return: 2,
break: 3,
continue: 3
};
function p(t) {
var e, r;
return function(n) {
e || (e = {
stop: function() {
return r(n.a, 2);
},
catch: function() {
return n.v;
},
abrupt: function(t, e) {
return r(n.a, d[t], e);
},
delegateYield: function(t, i, o) {
return e.resultName = i, r(n.d, h(t), o);
},
finish: function(t) {
return r(n.f, t);
}
}, r = function(t, r, i) {
n.p = e.prev, n.n = e.next;
try {
return t(r, i);
} finally {
e.next = n.n;
}
}), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, 
e.next = n.n;
try {
return t.call(this, e);
} finally {
n.p = e.prev, n.n = e.next;
}
};
}
return (t.exports = l = function() {
return {
wrap: function(t, r, n, i) {
return e.w(p(t), r, n, i && i.reverse());
},
isGeneratorFunction: c,
mark: e.m,
awrap: function(t, e) {
return new n(t, e);
},
AsyncIterator: a,
async: function(t, e, r, n, i) {
return (c(e) ? s : o)(p(t), e, r, n, i);
},
keys: u,
values: h
};
}, t.exports.__esModule = !0, t.exports.default = t.exports)();
}
t.exports = l, t.exports.__esModule = !0, t.exports.default = t.exports;
},
6589(t, e, r) {
var n = r(81792).default;
t.exports = function(t) {
if (null != t) {
var e = t["function" == typeof Symbol && Symbol.iterator || "@@iterator"], r = 0;
if (e) return e.call(t);
if ("function" == typeof t.next) return t;
if (!isNaN(t.length)) return {
next: function() {
return t && r >= t.length && (t = void 0), {
value: t && t[r++],
done: !t
};
}
};
}
throw new TypeError(n(t) + " is not iterable");
}, t.exports.__esModule = !0, t.exports.default = t.exports;
},
81792(t) {
function e(r) {
return t.exports = e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, t.exports.__esModule = !0, t.exports.default = t.exports, e(r);
}
t.exports = e, t.exports.__esModule = !0, t.exports.default = t.exports;
},
1674(t, e, r) {
var n = r(46567)();
t.exports = n;
try {
regeneratorRuntime = n;
} catch (t) {
"object" == typeof globalThis ? globalThis.regeneratorRuntime = n : Function("r", "regeneratorRuntime = r")(n);
}
},
17829(t, e) {
"use strict";
e.byteLength = function(t) {
var e = a(t), r = e[0], n = e[1];
return 3 * (r + n) / 4 - n;
}, e.toByteArray = function(t) {
var e, r, o = a(t), s = o[0], u = o[1], h = new i(function(t, e, r) {
return 3 * (e + r) / 4 - r;
}(0, s, u)), l = 0, f = u > 0 ? s - 4 : s;
for (r = 0; r < f; r += 4) e = n[t.charCodeAt(r)] << 18 | n[t.charCodeAt(r + 1)] << 12 | n[t.charCodeAt(r + 2)] << 6 | n[t.charCodeAt(r + 3)], 
h[l++] = e >> 16 & 255, h[l++] = e >> 8 & 255, h[l++] = 255 & e;
2 === u && (e = n[t.charCodeAt(r)] << 2 | n[t.charCodeAt(r + 1)] >> 4, h[l++] = 255 & e);
1 === u && (e = n[t.charCodeAt(r)] << 10 | n[t.charCodeAt(r + 1)] << 4 | n[t.charCodeAt(r + 2)] >> 2, 
h[l++] = e >> 8 & 255, h[l++] = 255 & e);
return h;
}, e.fromByteArray = function(t) {
for (var e, n = t.length, i = n % 3, o = [], s = 16383, a = 0, u = n - i; a < u; a += s) o.push(h(t, a, a + s > u ? u : a + s));
1 === i ? (e = t[n - 1], o.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === i && (e = (t[n - 2] << 8) + t[n - 1], 
o.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "="));
return o.join("");
};
for (var r = [], n = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0; s < 64; ++s) r[s] = o[s], 
n[o.charCodeAt(s)] = s;
function a(t) {
var e = t.length;
if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
var r = t.indexOf("=");
return -1 === r && (r = e), [ r, r === e ? 0 : 4 - r % 4 ];
}
function u(t) {
return r[t >> 18 & 63] + r[t >> 12 & 63] + r[t >> 6 & 63] + r[63 & t];
}
function h(t, e, r) {
for (var n, i = [], o = e; o < r; o += 3) n = (t[o] << 16 & 16711680) + (t[o + 1] << 8 & 65280) + (255 & t[o + 2]), 
i.push(u(n));
return i.join("");
}
n["-".charCodeAt(0)] = 62, n["_".charCodeAt(0)] = 63;
},
28022(t, e, r) {
"use strict";
var n = r(17829), i = r(65436), o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
e.Buffer = u, e.SlowBuffer = function(t) {
+t != t && (t = 0);
return u.alloc(+t);
}, e.INSPECT_MAX_BYTES = 50;
var s = 2147483647;
function a(t) {
if (t > s) throw new RangeError('The value "' + t + '" is invalid for option "size"');
var e = new Uint8Array(t);
return Object.setPrototypeOf(e, u.prototype), e;
}
function u(t, e, r) {
if ("number" == typeof t) {
if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
return f(t);
}
return h(t, e, r);
}
function h(t, e, r) {
if ("string" == typeof t) return function(t, e) {
"string" == typeof e && "" !== e || (e = "utf8");
if (!u.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
var r = 0 | g(t, e), n = a(r), i = n.write(t, e);
i !== r && (n = n.slice(0, i));
return n;
}(t, e);
if (ArrayBuffer.isView(t)) return function(t) {
if (z(t, Uint8Array)) {
var e = new Uint8Array(t);
return d(e.buffer, e.byteOffset, e.byteLength);
}
return c(t);
}(t);
if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
if (z(t, ArrayBuffer) || t && z(t.buffer, ArrayBuffer)) return d(t, e, r);
if ("undefined" != typeof SharedArrayBuffer && (z(t, SharedArrayBuffer) || t && z(t.buffer, SharedArrayBuffer))) return d(t, e, r);
if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
var n = t.valueOf && t.valueOf();
if (null != n && n !== t) return u.from(n, e, r);
var i = function(t) {
if (u.isBuffer(t)) {
var e = 0 | p(t.length), r = a(e);
return 0 === r.length || t.copy(r, 0, 0, e), r;
}
if (void 0 !== t.length) return "number" != typeof t.length || W(t.length) ? a(0) : c(t);
if ("Buffer" === t.type && Array.isArray(t.data)) return c(t.data);
}(t);
if (i) return i;
if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return u.from(t[Symbol.toPrimitive]("string"), e, r);
throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
}
function l(t) {
if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"');
}
function f(t) {
return l(t), a(t < 0 ? 0 : 0 | p(t));
}
function c(t) {
for (var e = t.length < 0 ? 0 : 0 | p(t.length), r = a(e), n = 0; n < e; n += 1) r[n] = 255 & t[n];
return r;
}
function d(t, e, r) {
if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
if (t.byteLength < e + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
var n;
return n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r), 
Object.setPrototypeOf(n, u.prototype), n;
}
function p(t) {
if (t >= s) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
return 0 | t;
}
function g(t, e) {
if (u.isBuffer(t)) return t.length;
if (ArrayBuffer.isView(t) || z(t, ArrayBuffer)) return t.byteLength;
if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
var r = t.length, n = arguments.length > 2 && !0 === arguments[2];
if (!n && 0 === r) return 0;
for (var i = !1; ;) switch (e) {
case "ascii":
case "latin1":
case "binary":
return r;

case "utf8":
case "utf-8":
return P(t).length;

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return 2 * r;

case "hex":
return r >>> 1;

case "base64":
return j(t).length;

default:
if (i) return n ? -1 : P(t).length;
e = ("" + e).toLowerCase(), i = !0;
}
}
function y(t, e, r) {
var n = !1;
if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
if ((r >>>= 0) <= (e >>>= 0)) return "";
for (t || (t = "utf8"); ;) switch (t) {
case "hex":
return x(this, e, r);

case "utf8":
case "utf-8":
return C(this, e, r);

case "ascii":
return O(this, e, r);

case "latin1":
case "binary":
return k(this, e, r);

case "base64":
return R(this, e, r);

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return I(this, e, r);

default:
if (n) throw new TypeError("Unknown encoding: " + t);
t = (t + "").toLowerCase(), n = !0;
}
}
function b(t, e, r) {
var n = t[e];
t[e] = t[r], t[r] = n;
}
function m(t, e, r, n, i) {
if (0 === t.length) return -1;
if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), 
W(r = +r) && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
if (i) return -1;
r = t.length - 1;
} else if (r < 0) {
if (!i) return -1;
r = 0;
}
if ("string" == typeof e && (e = u.from(e, n)), u.isBuffer(e)) return 0 === e.length ? -1 : w(t, e, r, n, i);
if ("number" == typeof e) return e &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : w(t, [ e ], r, n, i);
throw new TypeError("val must be string, number or Buffer");
}
function w(t, e, r, n, i) {
var o, s = 1, a = t.length, u = e.length;
if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
if (t.length < 2 || e.length < 2) return -1;
s = 2, a /= 2, u /= 2, r /= 2;
}
function h(t, e) {
return 1 === s ? t[e] : t.readUInt16BE(e * s);
}
if (i) {
var l = -1;
for (o = r; o < a; o++) if (h(t, o) === h(e, -1 === l ? 0 : o - l)) {
if (-1 === l && (l = o), o - l + 1 === u) return l * s;
} else -1 !== l && (o -= o - l), l = -1;
} else for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
for (var f = !0, c = 0; c < u; c++) if (h(t, o + c) !== h(e, c)) {
f = !1;
break;
}
if (f) return o;
}
return -1;
}
function v(t, e, r, n) {
r = Number(r) || 0;
var i = t.length - r;
n ? (n = Number(n)) > i && (n = i) : n = i;
var o = e.length;
n > o / 2 && (n = o / 2);
for (var s = 0; s < n; ++s) {
var a = parseInt(e.substr(2 * s, 2), 16);
if (W(a)) return s;
t[r + s] = a;
}
return s;
}
function _(t, e, r, n) {
return D(P(e, t.length - r), t, r, n);
}
function E(t, e, r, n) {
return D(function(t) {
for (var e = [], r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
return e;
}(e), t, r, n);
}
function S(t, e, r, n) {
return D(j(e), t, r, n);
}
function T(t, e, r, n) {
return D(function(t, e) {
for (var r, n, i, o = [], s = 0; s < t.length && !((e -= 2) < 0); ++s) n = (r = t.charCodeAt(s)) >> 8, 
i = r % 256, o.push(i), o.push(n);
return o;
}(e, t.length - r), t, r, n);
}
function R(t, e, r) {
return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r));
}
function C(t, e, r) {
r = Math.min(t.length, r);
for (var n = [], i = e; i < r; ) {
var o, s, a, u, h = t[i], l = null, f = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
if (i + f <= r) switch (f) {
case 1:
h < 128 && (l = h);
break;

case 2:
128 == (192 & (o = t[i + 1])) && (u = (31 & h) << 6 | 63 & o) > 127 && (l = u);
break;

case 3:
o = t[i + 1], s = t[i + 2], 128 == (192 & o) && 128 == (192 & s) && (u = (15 & h) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (u < 55296 || u > 57343) && (l = u);
break;

case 4:
o = t[i + 1], s = t[i + 2], a = t[i + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && (u = (15 & h) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && u < 1114112 && (l = u);
}
null === l ? (l = 65533, f = 1) : l > 65535 && (l -= 65536, n.push(l >>> 10 & 1023 | 55296), 
l = 56320 | 1023 & l), n.push(l), i += f;
}
return function(t) {
var e = t.length;
if (e <= A) return String.fromCharCode.apply(String, t);
var r = "", n = 0;
for (;n < e; ) r += String.fromCharCode.apply(String, t.slice(n, n += A));
return r;
}(n);
}
e.kMaxLength = s, u.TYPED_ARRAY_SUPPORT = function() {
try {
var t = new Uint8Array(1), e = {
foo: function() {
return 42;
}
};
return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 
42 === t.foo();
} catch (t) {
return !1;
}
}(), u.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), 
Object.defineProperty(u.prototype, "parent", {
enumerable: !0,
get: function() {
if (u.isBuffer(this)) return this.buffer;
}
}), Object.defineProperty(u.prototype, "offset", {
enumerable: !0,
get: function() {
if (u.isBuffer(this)) return this.byteOffset;
}
}), u.poolSize = 8192, u.from = function(t, e, r) {
return h(t, e, r);
}, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array), 
u.alloc = function(t, e, r) {
return function(t, e, r) {
return l(t), t <= 0 ? a(t) : void 0 !== e ? "string" == typeof r ? a(t).fill(e, r) : a(t).fill(e) : a(t);
}(t, e, r);
}, u.allocUnsafe = function(t) {
return f(t);
}, u.allocUnsafeSlow = function(t) {
return f(t);
}, u.isBuffer = function(t) {
return null != t && !0 === t._isBuffer && t !== u.prototype;
}, u.compare = function(t, e) {
if (z(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), z(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)), 
!u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
if (t === e) return 0;
for (var r = t.length, n = e.length, i = 0, o = Math.min(r, n); i < o; ++i) if (t[i] !== e[i]) {
r = t[i], n = e[i];
break;
}
return r < n ? -1 : n < r ? 1 : 0;
}, u.isEncoding = function(t) {
switch (String(t).toLowerCase()) {
case "hex":
case "utf8":
case "utf-8":
case "ascii":
case "latin1":
case "binary":
case "base64":
case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return !0;

default:
return !1;
}
}, u.concat = function(t, e) {
if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
if (0 === t.length) return u.alloc(0);
var r;
if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
var n = u.allocUnsafe(e), i = 0;
for (r = 0; r < t.length; ++r) {
var o = t[r];
if (z(o, Uint8Array)) i + o.length > n.length ? u.from(o).copy(n, i) : Uint8Array.prototype.set.call(n, o, i); else {
if (!u.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
o.copy(n, i);
}
i += o.length;
}
return n;
}, u.byteLength = g, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
var t = this.length;
if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
for (var e = 0; e < t; e += 2) b(this, e, e + 1);
return this;
}, u.prototype.swap32 = function() {
var t = this.length;
if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
for (var e = 0; e < t; e += 4) b(this, e, e + 3), b(this, e + 1, e + 2);
return this;
}, u.prototype.swap64 = function() {
var t = this.length;
if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
for (var e = 0; e < t; e += 8) b(this, e, e + 7), b(this, e + 1, e + 6), b(this, e + 2, e + 5), 
b(this, e + 3, e + 4);
return this;
}, u.prototype.toString = function() {
var t = this.length;
return 0 === t ? "" : 0 === arguments.length ? C(this, 0, t) : y.apply(this, arguments);
}, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(t) {
if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
return this === t || 0 === u.compare(this, t);
}, u.prototype.inspect = function() {
var t = "", r = e.INSPECT_MAX_BYTES;
return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), 
"<Buffer " + t + ">";
}, o && (u.prototype[o] = u.prototype.inspect), u.prototype.compare = function(t, e, r, n, i) {
if (z(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), !u.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), 
void 0 === i && (i = this.length), e < 0 || r > t.length || n < 0 || i > this.length) throw new RangeError("out of range index");
if (n >= i && e >= r) return 0;
if (n >= i) return -1;
if (e >= r) return 1;
if (this === t) return 0;
for (var o = (i >>>= 0) - (n >>>= 0), s = (r >>>= 0) - (e >>>= 0), a = Math.min(o, s), h = this.slice(n, i), l = t.slice(e, r), f = 0; f < a; ++f) if (h[f] !== l[f]) {
o = h[f], s = l[f];
break;
}
return o < s ? -1 : s < o ? 1 : 0;
}, u.prototype.includes = function(t, e, r) {
return -1 !== this.indexOf(t, e, r);
}, u.prototype.indexOf = function(t, e, r) {
return m(this, t, e, r, !0);
}, u.prototype.lastIndexOf = function(t, e, r) {
return m(this, t, e, r, !1);
}, u.prototype.write = function(t, e, r, n) {
if (void 0 === e) n = "utf8", r = this.length, e = 0; else if (void 0 === r && "string" == typeof e) n = e, 
r = this.length, e = 0; else {
if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
}
var i = this.length - e;
if ((void 0 === r || r > i) && (r = i), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
n || (n = "utf8");
for (var o = !1; ;) switch (n) {
case "hex":
return v(this, t, e, r);

case "utf8":
case "utf-8":
return _(this, t, e, r);

case "ascii":
case "latin1":
case "binary":
return E(this, t, e, r);

case "base64":
return S(this, t, e, r);

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return T(this, t, e, r);

default:
if (o) throw new TypeError("Unknown encoding: " + n);
n = ("" + n).toLowerCase(), o = !0;
}
}, u.prototype.toJSON = function() {
return {
type: "Buffer",
data: Array.prototype.slice.call(this._arr || this, 0)
};
};
var A = 4096;
function O(t, e, r) {
var n = "";
r = Math.min(t.length, r);
for (var i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
return n;
}
function k(t, e, r) {
var n = "";
r = Math.min(t.length, r);
for (var i = e; i < r; ++i) n += String.fromCharCode(t[i]);
return n;
}
function x(t, e, r) {
var n = t.length;
(!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
for (var i = "", o = e; o < r; ++o) i += q[t[o]];
return i;
}
function I(t, e, r) {
for (var n = t.slice(e, r), i = "", o = 0; o < n.length - 1; o += 2) i += String.fromCharCode(n[o] + 256 * n[o + 1]);
return i;
}
function L(t, e, r) {
if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
if (t + e > r) throw new RangeError("Trying to access beyond buffer length");
}
function B(t, e, r, n, i, o) {
if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
if (r + n > t.length) throw new RangeError("Index out of range");
}
function M(t, e, r, n, i, o) {
if (r + n > t.length) throw new RangeError("Index out of range");
if (r < 0) throw new RangeError("Index out of range");
}
function N(t, e, r, n, o) {
return e = +e, r >>>= 0, o || M(t, 0, r, 4), i.write(t, e, r, n, 23, 4), r + 4;
}
function F(t, e, r, n, o) {
return e = +e, r >>>= 0, o || M(t, 0, r, 8), i.write(t, e, r, n, 52, 8), r + 8;
}
u.prototype.slice = function(t, e) {
var r = this.length;
(t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), 
e < t && (e = t);
var n = this.subarray(t, e);
return Object.setPrototypeOf(n, u.prototype), n;
}, u.prototype.readUintLE = u.prototype.readUIntLE = function(t, e, r) {
t >>>= 0, e >>>= 0, r || L(t, e, this.length);
for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); ) n += this[t + o] * i;
return n;
}, u.prototype.readUintBE = u.prototype.readUIntBE = function(t, e, r) {
t >>>= 0, e >>>= 0, r || L(t, e, this.length);
for (var n = this[t + --e], i = 1; e > 0 && (i *= 256); ) n += this[t + --e] * i;
return n;
}, u.prototype.readUint8 = u.prototype.readUInt8 = function(t, e) {
return t >>>= 0, e || L(t, 1, this.length), this[t];
}, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(t, e) {
return t >>>= 0, e || L(t, 2, this.length), this[t] | this[t + 1] << 8;
}, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(t, e) {
return t >>>= 0, e || L(t, 2, this.length), this[t] << 8 | this[t + 1];
}, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(t, e) {
return t >>>= 0, e || L(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
}, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(t, e) {
return t >>>= 0, e || L(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
}, u.prototype.readIntLE = function(t, e, r) {
t >>>= 0, e >>>= 0, r || L(t, e, this.length);
for (var n = this[t], i = 1, o = 0; ++o < e && (i *= 256); ) n += this[t + o] * i;
return n >= (i *= 128) && (n -= Math.pow(2, 8 * e)), n;
}, u.prototype.readIntBE = function(t, e, r) {
t >>>= 0, e >>>= 0, r || L(t, e, this.length);
for (var n = e, i = 1, o = this[t + --n]; n > 0 && (i *= 256); ) o += this[t + --n] * i;
return o >= (i *= 128) && (o -= Math.pow(2, 8 * e)), o;
}, u.prototype.readInt8 = function(t, e) {
return t >>>= 0, e || L(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
}, u.prototype.readInt16LE = function(t, e) {
t >>>= 0, e || L(t, 2, this.length);
var r = this[t] | this[t + 1] << 8;
return 32768 & r ? 4294901760 | r : r;
}, u.prototype.readInt16BE = function(t, e) {
t >>>= 0, e || L(t, 2, this.length);
var r = this[t + 1] | this[t] << 8;
return 32768 & r ? 4294901760 | r : r;
}, u.prototype.readInt32LE = function(t, e) {
return t >>>= 0, e || L(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
}, u.prototype.readInt32BE = function(t, e) {
return t >>>= 0, e || L(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
}, u.prototype.readFloatLE = function(t, e) {
return t >>>= 0, e || L(t, 4, this.length), i.read(this, t, !0, 23, 4);
}, u.prototype.readFloatBE = function(t, e) {
return t >>>= 0, e || L(t, 4, this.length), i.read(this, t, !1, 23, 4);
}, u.prototype.readDoubleLE = function(t, e) {
return t >>>= 0, e || L(t, 8, this.length), i.read(this, t, !0, 52, 8);
}, u.prototype.readDoubleBE = function(t, e) {
return t >>>= 0, e || L(t, 8, this.length), i.read(this, t, !1, 52, 8);
}, u.prototype.writeUintLE = u.prototype.writeUIntLE = function(t, e, r, n) {
(t = +t, e >>>= 0, r >>>= 0, n) || B(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
var i = 1, o = 0;
for (this[e] = 255 & t; ++o < r && (i *= 256); ) this[e + o] = t / i & 255;
return e + r;
}, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(t, e, r, n) {
(t = +t, e >>>= 0, r >>>= 0, n) || B(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
var i = r - 1, o = 1;
for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); ) this[e + i] = t / o & 255;
return e + r;
}, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(t, e, r) {
return t = +t, e >>>= 0, r || B(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1;
}, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(t, e, r) {
return t = +t, e >>>= 0, r || B(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, 
e + 2;
}, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(t, e, r) {
return t = +t, e >>>= 0, r || B(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, 
e + 2;
}, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(t, e, r) {
return t = +t, e >>>= 0, r || B(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, 
this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4;
}, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(t, e, r) {
return t = +t, e >>>= 0, r || B(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, 
this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4;
}, u.prototype.writeIntLE = function(t, e, r, n) {
if (t = +t, e >>>= 0, !n) {
var i = Math.pow(2, 8 * r - 1);
B(this, t, e, r, i - 1, -i);
}
var o = 0, s = 1, a = 0;
for (this[e] = 255 & t; ++o < r && (s *= 256); ) t < 0 && 0 === a && 0 !== this[e + o - 1] && (a = 1), 
this[e + o] = (t / s | 0) - a & 255;
return e + r;
}, u.prototype.writeIntBE = function(t, e, r, n) {
if (t = +t, e >>>= 0, !n) {
var i = Math.pow(2, 8 * r - 1);
B(this, t, e, r, i - 1, -i);
}
var o = r - 1, s = 1, a = 0;
for (this[e + o] = 255 & t; --o >= 0 && (s *= 256); ) t < 0 && 0 === a && 0 !== this[e + o + 1] && (a = 1), 
this[e + o] = (t / s | 0) - a & 255;
return e + r;
}, u.prototype.writeInt8 = function(t, e, r) {
return t = +t, e >>>= 0, r || B(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), 
this[e] = 255 & t, e + 1;
}, u.prototype.writeInt16LE = function(t, e, r) {
return t = +t, e >>>= 0, r || B(this, t, e, 2, 32767, -32768), this[e] = 255 & t, 
this[e + 1] = t >>> 8, e + 2;
}, u.prototype.writeInt16BE = function(t, e, r) {
return t = +t, e >>>= 0, r || B(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, 
this[e + 1] = 255 & t, e + 2;
}, u.prototype.writeInt32LE = function(t, e, r) {
return t = +t, e >>>= 0, r || B(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, 
this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4;
}, u.prototype.writeInt32BE = function(t, e, r) {
return t = +t, e >>>= 0, r || B(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), 
this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, 
e + 4;
}, u.prototype.writeFloatLE = function(t, e, r) {
return N(this, t, e, !0, r);
}, u.prototype.writeFloatBE = function(t, e, r) {
return N(this, t, e, !1, r);
}, u.prototype.writeDoubleLE = function(t, e, r) {
return F(this, t, e, !0, r);
}, u.prototype.writeDoubleBE = function(t, e, r) {
return F(this, t, e, !1, r);
}, u.prototype.copy = function(t, e, r, n) {
if (!u.isBuffer(t)) throw new TypeError("argument should be a Buffer");
if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), 
e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0;
if (0 === t.length || 0 === this.length) return 0;
if (e < 0) throw new RangeError("targetStart out of bounds");
if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
if (n < 0) throw new RangeError("sourceEnd out of bounds");
n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
var i = n - r;
return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, r, n) : Uint8Array.prototype.set.call(t, this.subarray(r, n), e), 
i;
}, u.prototype.fill = function(t, e, r, n) {
if ("string" == typeof t) {
if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, 
r = this.length), void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
if ("string" == typeof n && !u.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
if (1 === t.length) {
var i = t.charCodeAt(0);
("utf8" === n && i < 128 || "latin1" === n) && (t = i);
}
} else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
if (r <= e) return this;
var o;
if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t) for (o = e; o < r; ++o) this[o] = t; else {
var s = u.isBuffer(t) ? t : u.from(t, n), a = s.length;
if (0 === a) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
for (o = 0; o < r - e; ++o) this[o + e] = s[o % a];
}
return this;
};
var U = /[^+/0-9A-Za-z-_]/g;
function P(t, e) {
var r;
e = e || 1 / 0;
for (var n = t.length, i = null, o = [], s = 0; s < n; ++s) {
if ((r = t.charCodeAt(s)) > 55295 && r < 57344) {
if (!i) {
if (r > 56319) {
(e -= 3) > -1 && o.push(239, 191, 189);
continue;
}
if (s + 1 === n) {
(e -= 3) > -1 && o.push(239, 191, 189);
continue;
}
i = r;
continue;
}
if (r < 56320) {
(e -= 3) > -1 && o.push(239, 191, 189), i = r;
continue;
}
r = 65536 + (i - 55296 << 10 | r - 56320);
} else i && (e -= 3) > -1 && o.push(239, 191, 189);
if (i = null, r < 128) {
if ((e -= 1) < 0) break;
o.push(r);
} else if (r < 2048) {
if ((e -= 2) < 0) break;
o.push(r >> 6 | 192, 63 & r | 128);
} else if (r < 65536) {
if ((e -= 3) < 0) break;
o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
} else {
if (!(r < 1114112)) throw new Error("Invalid code point");
if ((e -= 4) < 0) break;
o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
}
}
return o;
}
function j(t) {
return n.toByteArray(function(t) {
if ((t = (t = t.split("=")[0]).trim().replace(U, "")).length < 2) return "";
for (;t.length % 4 != 0; ) t += "=";
return t;
}(t));
}
function D(t, e, r, n) {
for (var i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) e[i + r] = t[i];
return i;
}
function z(t, e) {
return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name;
}
function W(t) {
return t != t;
}
var q = function() {
for (var t = "0123456789abcdef", e = new Array(256), r = 0; r < 16; ++r) for (var n = 16 * r, i = 0; i < 16; ++i) e[n + i] = t[r] + t[i];
return e;
}();
},
82866(t, e, r) {
e.formatArgs = function(e) {
if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), 
!this.useColors) return;
const r = "color: " + this.color;
e.splice(1, 0, r, "color: inherit");
let n = 0, i = 0;
e[0].replace(/%[a-zA-Z%]/g, t => {
"%%" !== t && (n++, "%c" === t && (i = n));
}), e.splice(i, 0, r);
}, e.save = function(t) {
try {
t ? e.storage.setItem("debug", t) : e.storage.removeItem("debug");
} catch (t) {}
}, e.load = function() {
let t;
try {
t = e.storage.getItem("debug") || e.storage.getItem("DEBUG");
} catch (t) {}
!t && "undefined" != typeof process && "env" in process && (t = process.env.DEBUG);
return t;
}, e.useColors = function() {
if ("undefined" != typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return !0;
if ("undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
let t;
return "undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && (t = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(t[1], 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}, e.storage = function() {
try {
return localStorage;
} catch (t) {}
}(), e.destroy = (() => {
let t = !1;
return () => {
t || (t = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
};
})(), e.colors = [ "#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33" ], 
e.log = console.debug || console.log || (() => {}), t.exports = r(18301)(e);
const {formatters: n} = t.exports;
n.j = function(t) {
try {
return JSON.stringify(t);
} catch (t) {
return "[UnexpectedJSONParseError]: " + t.message;
}
};
},
18301(t, e, r) {
t.exports = function(t) {
function e(t) {
let r, i, o, s = null;
function a(...t) {
if (!a.enabled) return;
const n = a, i = Number(new Date), o = i - (r || i);
n.diff = o, n.prev = r, n.curr = i, r = i, t[0] = e.coerce(t[0]), "string" != typeof t[0] && t.unshift("%O");
let s = 0;
t[0] = t[0].replace(/%([a-zA-Z%])/g, (r, i) => {
if ("%%" === r) return "%";
s++;
const o = e.formatters[i];
if ("function" == typeof o) {
const e = t[s];
r = o.call(n, e), t.splice(s, 1), s--;
}
return r;
}), e.formatArgs.call(n, t);
(n.log || e.log).apply(n, t);
}
return a.namespace = t, a.useColors = e.useColors(), a.color = e.selectColor(t), 
a.extend = n, a.destroy = e.destroy, Object.defineProperty(a, "enabled", {
enumerable: !0,
configurable: !1,
get: () => null !== s ? s : (i !== e.namespaces && (i = e.namespaces, o = e.enabled(t)), 
o),
set: t => {
s = t;
}
}), "function" == typeof e.init && e.init(a), a;
}
function n(t, r) {
const n = e(this.namespace + (void 0 === r ? ":" : r) + t);
return n.log = this.log, n;
}
function i(t, e) {
let r = 0, n = 0, i = -1, o = 0;
for (;r < t.length; ) if (n < e.length && (e[n] === t[r] || "*" === e[n])) "*" === e[n] ? (i = n, 
o = r, n++) : (r++, n++); else {
if (-1 === i) return !1;
n = i + 1, o++, r = o;
}
for (;n < e.length && "*" === e[n]; ) n++;
return n === e.length;
}
return e.debug = e, e.default = e, e.coerce = function(t) {
if (t instanceof Error) return t.stack || t.message;
return t;
}, e.disable = function() {
const t = [ ...e.names, ...e.skips.map(t => "-" + t) ].join(",");
return e.enable(""), t;
}, e.enable = function(t) {
e.save(t), e.namespaces = t, e.names = [], e.skips = [];
const r = ("string" == typeof t ? t : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
for (const t of r) "-" === t[0] ? e.skips.push(t.slice(1)) : e.names.push(t);
}, e.enabled = function(t) {
for (const r of e.skips) if (i(t, r)) return !1;
for (const r of e.names) if (i(t, r)) return !0;
return !1;
}, e.humanize = r(39924), e.destroy = function() {
console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
}, Object.keys(t).forEach(r => {
e[r] = t[r];
}), e.names = [], e.skips = [], e.formatters = {}, e.selectColor = function(t) {
let r = 0;
for (let e = 0; e < t.length; e++) r = (r << 5) - r + t.charCodeAt(e), r |= 0;
return e.colors[Math.abs(r) % e.colors.length];
}, e.enable(e.load()), e;
};
},
16399(t) {
"use strict";
function e(t, e) {
for (const r in e) Object.defineProperty(t, r, {
value: e[r],
enumerable: !0,
configurable: !0
});
return t;
}
t.exports = function(t, r, n) {
if (!t || "string" == typeof t) throw new TypeError("Please pass an Error to err-code");
n || (n = {}), "object" == typeof r && (n = r, r = ""), r && (n.code = r);
try {
return e(t, n);
} catch (r) {
n.message = t.message, n.stack = t.stack;
const i = function() {};
i.prototype = Object.create(Object.getPrototypeOf(t));
return e(new i, n);
}
};
},
89628(t) {
"use strict";
var e, r = "object" == typeof Reflect ? Reflect : null, n = r && "function" == typeof r.apply ? r.apply : function(t, e, r) {
return Function.prototype.apply.call(t, e, r);
};
e = r && "function" == typeof r.ownKeys ? r.ownKeys : Object.getOwnPropertySymbols ? function(t) {
return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t));
} : function(t) {
return Object.getOwnPropertyNames(t);
};
var i = Number.isNaN || function(t) {
return t != t;
};
function o() {
o.init.call(this);
}
t.exports = o, t.exports.once = function(t, e) {
return new Promise(function(r, n) {
function i(r) {
t.removeListener(e, o), n(r);
}
function o() {
"function" == typeof t.removeListener && t.removeListener("error", i), r([].slice.call(arguments));
}
g(t, e, o, {
once: !0
}), "error" !== e && function(t, e, r) {
"function" == typeof t.on && g(t, "error", e, r);
}(t, i, {
once: !0
});
});
}, o.EventEmitter = o, o.prototype._events = void 0, o.prototype._eventsCount = 0, 
o.prototype._maxListeners = void 0;
var s = 10;
function a(t) {
if ("function" != typeof t) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof t);
}
function u(t) {
return void 0 === t._maxListeners ? o.defaultMaxListeners : t._maxListeners;
}
function h(t, e, r, n) {
var i, o, s, h;
if (a(r), void 0 === (o = t._events) ? (o = t._events = Object.create(null), t._eventsCount = 0) : (void 0 !== o.newListener && (t.emit("newListener", e, r.listener ? r.listener : r), 
o = t._events), s = o[e]), void 0 === s) s = o[e] = r, ++t._eventsCount; else if ("function" == typeof s ? s = o[e] = n ? [ r, s ] : [ s, r ] : n ? s.unshift(r) : s.push(r), 
(i = u(t)) > 0 && s.length > i && !s.warned) {
s.warned = !0;
var l = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(e) + " listeners added. Use emitter.setMaxListeners() to increase limit");
l.name = "MaxListenersExceededWarning", l.emitter = t, l.type = e, l.count = s.length, 
h = l, console && console.warn && console.warn(h);
}
return t;
}
function l() {
if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 
0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments);
}
function f(t, e, r) {
var n = {
fired: !1,
wrapFn: void 0,
target: t,
type: e,
listener: r
}, i = l.bind(n);
return i.listener = r, n.wrapFn = i, i;
}
function c(t, e, r) {
var n = t._events;
if (void 0 === n) return [];
var i = n[e];
return void 0 === i ? [] : "function" == typeof i ? r ? [ i.listener || i ] : [ i ] : r ? function(t) {
for (var e = new Array(t.length), r = 0; r < e.length; ++r) e[r] = t[r].listener || t[r];
return e;
}(i) : p(i, i.length);
}
function d(t) {
var e = this._events;
if (void 0 !== e) {
var r = e[t];
if ("function" == typeof r) return 1;
if (void 0 !== r) return r.length;
}
return 0;
}
function p(t, e) {
for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
return r;
}
function g(t, e, r, n) {
if ("function" == typeof t.on) n.once ? t.once(e, r) : t.on(e, r); else {
if ("function" != typeof t.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof t);
t.addEventListener(e, function i(o) {
n.once && t.removeEventListener(e, i), r(o);
});
}
}
Object.defineProperty(o, "defaultMaxListeners", {
enumerable: !0,
get: function() {
return s;
},
set: function(t) {
if ("number" != typeof t || t < 0 || i(t)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + t + ".");
s = t;
}
}), o.init = function() {
void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), 
this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0;
}, o.prototype.setMaxListeners = function(t) {
if ("number" != typeof t || t < 0 || i(t)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + t + ".");
return this._maxListeners = t, this;
}, o.prototype.getMaxListeners = function() {
return u(this);
}, o.prototype.emit = function(t) {
for (var e = [], r = 1; r < arguments.length; r++) e.push(arguments[r]);
var i = "error" === t, o = this._events;
if (void 0 !== o) i = i && void 0 === o.error; else if (!i) return !1;
if (i) {
var s;
if (e.length > 0 && (s = e[0]), s instanceof Error) throw s;
var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
throw a.context = s, a;
}
var u = o[t];
if (void 0 === u) return !1;
if ("function" == typeof u) n(u, this, e); else {
var h = u.length, l = p(u, h);
for (r = 0; r < h; ++r) n(l[r], this, e);
}
return !0;
}, o.prototype.addListener = function(t, e) {
return h(this, t, e, !1);
}, o.prototype.on = o.prototype.addListener, o.prototype.prependListener = function(t, e) {
return h(this, t, e, !0);
}, o.prototype.once = function(t, e) {
return a(e), this.on(t, f(this, t, e)), this;
}, o.prototype.prependOnceListener = function(t, e) {
return a(e), this.prependListener(t, f(this, t, e)), this;
}, o.prototype.removeListener = function(t, e) {
var r, n, i, o, s;
if (a(e), void 0 === (n = this._events)) return this;
if (void 0 === (r = n[t])) return this;
if (r === e || r.listener === e) 0 === --this._eventsCount ? this._events = Object.create(null) : (delete n[t], 
n.removeListener && this.emit("removeListener", t, r.listener || e)); else if ("function" != typeof r) {
for (i = -1, o = r.length - 1; o >= 0; o--) if (r[o] === e || r[o].listener === e) {
s = r[o].listener, i = o;
break;
}
if (i < 0) return this;
0 === i ? r.shift() : function(t, e) {
for (;e + 1 < t.length; e++) t[e] = t[e + 1];
t.pop();
}(r, i), 1 === r.length && (n[t] = r[0]), void 0 !== n.removeListener && this.emit("removeListener", t, s || e);
}
return this;
}, o.prototype.off = o.prototype.removeListener, o.prototype.removeAllListeners = function(t) {
var e, r, n;
if (void 0 === (r = this._events)) return this;
if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), 
this._eventsCount = 0) : void 0 !== r[t] && (0 === --this._eventsCount ? this._events = Object.create(null) : delete r[t]), 
this;
if (0 === arguments.length) {
var i, o = Object.keys(r);
for (n = 0; n < o.length; ++n) "removeListener" !== (i = o[n]) && this.removeAllListeners(i);
return this.removeAllListeners("removeListener"), this._events = Object.create(null), 
this._eventsCount = 0, this;
}
if ("function" == typeof (e = r[t])) this.removeListener(t, e); else if (void 0 !== e) for (n = e.length - 1; n >= 0; n--) this.removeListener(t, e[n]);
return this;
}, o.prototype.listeners = function(t) {
return c(this, t, !0);
}, o.prototype.rawListeners = function(t) {
return c(this, t, !1);
}, o.listenerCount = function(t, e) {
return "function" == typeof t.listenerCount ? t.listenerCount(e) : d.call(t, e);
}, o.prototype.listenerCount = d, o.prototype.eventNames = function() {
return this._eventsCount > 0 ? e(this._events) : [];
};
},
62904(t, e) {
!function(t) {
"use strict";
var e = function(t) {
return function(e) {
var r = t(e);
return e.add(r), r;
};
}, r = function(t) {
return function(e, r) {
return t.set(e, r), r;
};
}, n = void 0 === Number.MAX_SAFE_INTEGER ? 9007199254740991 : Number.MAX_SAFE_INTEGER, i = 536870912, o = 2 * i, s = function(t, e) {
return function(r) {
var s = e.get(r), a = void 0 === s ? r.size : s < o ? s + 1 : 0;
if (!r.has(a)) return t(r, a);
if (r.size < i) {
for (;r.has(a); ) a = Math.floor(Math.random() * o);
return t(r, a);
}
if (r.size > n) throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");
for (;r.has(a); ) a = Math.floor(Math.random() * n);
return t(r, a);
};
}, a = new WeakMap, u = r(a), h = s(u, a), l = e(h);
t.addUniqueNumber = l, t.generateUniqueNumber = h;
}(e);
},
95591(t) {
t.exports = function() {
if ("undefined" == typeof globalThis) return null;
var t = {
RTCPeerConnection: globalThis.RTCPeerConnection || globalThis.mozRTCPeerConnection || globalThis.webkitRTCPeerConnection,
RTCSessionDescription: globalThis.RTCSessionDescription || globalThis.mozRTCSessionDescription || globalThis.webkitRTCSessionDescription,
RTCIceCandidate: globalThis.RTCIceCandidate || globalThis.mozRTCIceCandidate || globalThis.webkitRTCIceCandidate
};
return t.RTCPeerConnection ? t : null;
};
},
65436(t, e) {
e.read = function(t, e, r, n, i) {
var o, s, a = 8 * i - n - 1, u = (1 << a) - 1, h = u >> 1, l = -7, f = r ? i - 1 : 0, c = r ? -1 : 1, d = t[e + f];
for (f += c, o = d & (1 << -l) - 1, d >>= -l, l += a; l > 0; o = 256 * o + t[e + f], 
f += c, l -= 8) ;
for (s = o & (1 << -l) - 1, o >>= -l, l += n; l > 0; s = 256 * s + t[e + f], f += c, 
l -= 8) ;
if (0 === o) o = 1 - h; else {
if (o === u) return s ? NaN : 1 / 0 * (d ? -1 : 1);
s += Math.pow(2, n), o -= h;
}
return (d ? -1 : 1) * s * Math.pow(2, o - n);
}, e.write = function(t, e, r, n, i, o) {
var s, a, u, h = 8 * o - i - 1, l = (1 << h) - 1, f = l >> 1, c = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d = n ? 0 : o - 1, p = n ? 1 : -1, g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, s = l) : (s = Math.floor(Math.log(e) / Math.LN2), 
e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (e += s + f >= 1 ? c / u : c * Math.pow(2, 1 - f)) * u >= 2 && (s++, 
u /= 2), s + f >= l ? (a = 0, s = l) : s + f >= 1 ? (a = (e * u - 1) * Math.pow(2, i), 
s += f) : (a = e * Math.pow(2, f - 1) * Math.pow(2, i), s = 0)); i >= 8; t[r + d] = 255 & a, 
d += p, a /= 256, i -= 8) ;
for (s = s << i | a, h += i; h > 0; t[r + d] = 255 & s, d += p, s /= 256, h -= 8) ;
t[r + d - p] |= 128 * g;
};
},
50801(t) {
"function" == typeof Object.create ? t.exports = function(t, e) {
e && (t.super_ = e, t.prototype = Object.create(e.prototype, {
constructor: {
value: t,
enumerable: !1,
writable: !0,
configurable: !0
}
}));
} : t.exports = function(t, e) {
if (e) {
t.super_ = e;
var r = function() {};
r.prototype = e.prototype, t.prototype = new r, t.prototype.constructor = t;
}
};
},
39924(t) {
var e = 1e3, r = 60 * e, n = 60 * r, i = 24 * n, o = 7 * i, s = 365.25 * i;
function a(t, e, r, n) {
var i = e >= 1.5 * r;
return Math.round(t / r) + " " + n + (i ? "s" : "");
}
t.exports = function(t, u) {
u = u || {};
var h = typeof t;
if ("string" === h && t.length > 0) return function(t) {
if ((t = String(t)).length > 100) return;
var a = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);
if (!a) return;
var u = parseFloat(a[1]);
switch ((a[2] || "ms").toLowerCase()) {
case "years":
case "year":
case "yrs":
case "yr":
case "y":
return u * s;

case "weeks":
case "week":
case "w":
return u * o;

case "days":
case "day":
case "d":
return u * i;

case "hours":
case "hour":
case "hrs":
case "hr":
case "h":
return u * n;

case "minutes":
case "minute":
case "mins":
case "min":
case "m":
return u * r;

case "seconds":
case "second":
case "secs":
case "sec":
case "s":
return u * e;

case "milliseconds":
case "millisecond":
case "msecs":
case "msec":
case "ms":
return u;

default:
return;
}
}(t);
if ("number" === h && isFinite(t)) return u.long ? function(t) {
var o = Math.abs(t);
if (o >= i) return a(t, o, i, "day");
if (o >= n) return a(t, o, n, "hour");
if (o >= r) return a(t, o, r, "minute");
if (o >= e) return a(t, o, e, "second");
return t + " ms";
}(t) : function(t) {
var o = Math.abs(t);
if (o >= i) return Math.round(t / i) + "d";
if (o >= n) return Math.round(t / n) + "h";
if (o >= r) return Math.round(t / r) + "m";
if (o >= e) return Math.round(t / e) + "s";
return t + "ms";
}(t);
throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(t));
};
},
8085(t) {
var e, r, n = t.exports = {};
function i() {
throw new Error("setTimeout has not been defined");
}
function o() {
throw new Error("clearTimeout has not been defined");
}
function s(t) {
if (e === setTimeout) return setTimeout(t, 0);
if ((e === i || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
try {
return e(t, 0);
} catch (r) {
try {
return e.call(null, t, 0);
} catch (r) {
return e.call(this, t, 0);
}
}
}
!function() {
try {
e = "function" == typeof setTimeout ? setTimeout : i;
} catch (t) {
e = i;
}
try {
r = "function" == typeof clearTimeout ? clearTimeout : o;
} catch (t) {
r = o;
}
}();
var a, u = [], h = !1, l = -1;
function f() {
h && a && (h = !1, a.length ? u = a.concat(u) : l = -1, u.length && c());
}
function c() {
if (!h) {
var t = s(f);
h = !0;
for (var e = u.length; e; ) {
for (a = u, u = []; ++l < e; ) a && a[l].run();
l = -1, e = u.length;
}
a = null, h = !1, function(t) {
if (r === clearTimeout) return clearTimeout(t);
if ((r === o || !r) && clearTimeout) return r = clearTimeout, clearTimeout(t);
try {
return r(t);
} catch (e) {
try {
return r.call(null, t);
} catch (e) {
return r.call(this, t);
}
}
}(t);
}
}
function d(t, e) {
this.fun = t, this.array = e;
}
function p() {}
n.nextTick = function(t) {
var e = new Array(arguments.length - 1);
if (arguments.length > 1) for (var r = 1; r < arguments.length; r++) e[r - 1] = arguments[r];
u.push(new d(t, e)), 1 !== u.length || h || s(c);
}, d.prototype.run = function() {
this.fun.apply(null, this.array);
}, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", 
n.versions = {}, n.on = p, n.addListener = p, n.once = p, n.off = p, n.removeListener = p, 
n.removeAllListeners = p, n.emit = p, n.prependListener = p, n.prependOnceListener = p, 
n.listeners = function(t) {
return [];
}, n.binding = function(t) {
throw new Error("process.binding is not supported");
}, n.cwd = function() {
return "/";
}, n.chdir = function(t) {
throw new Error("process.chdir is not supported");
}, n.umask = function() {
return 0;
};
},
44091(t, e, r) {
let n;
t.exports = "function" == typeof queueMicrotask ? queueMicrotask.bind("undefined" != typeof window ? window : r.g) : t => (n || (n = Promise.resolve())).then(t).catch(t => setTimeout(() => {
throw t;
}, 0));
},
73238(t, e, r) {
"use strict";
var n = 65536, i = 4294967295;
var o = r(82950).Buffer, s = r.g.crypto || r.g.msCrypto;
s && s.getRandomValues ? t.exports = function(t, e) {
if (t > i) throw new RangeError("requested too many random bytes");
var r = o.allocUnsafe(t);
if (t > 0) if (t > n) for (var a = 0; a < t; a += n) s.getRandomValues(r.slice(a, a + n)); else s.getRandomValues(r);
if ("function" == typeof e) return process.nextTick(function() {
e(null, r);
});
return r;
} : t.exports = function() {
throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11");
};
},
44649(t) {
"use strict";
var e = {};
function r(t, r, n) {
n || (n = Error);
var i = function(t) {
var e, n;
function i(e, n, i) {
return t.call(this, function(t, e, n) {
return "string" == typeof r ? r : r(t, e, n);
}(e, n, i)) || this;
}
return n = t, (e = i).prototype = Object.create(n.prototype), e.prototype.constructor = e, 
e.__proto__ = n, i;
}(n);
i.prototype.name = n.name, i.prototype.code = t, e[t] = i;
}
function n(t, e) {
if (Array.isArray(t)) {
var r = t.length;
return t = t.map(function(t) {
return String(t);
}), r > 2 ? "one of ".concat(e, " ").concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1] : 2 === r ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1]) : "of ".concat(e, " ").concat(t[0]);
}
return "of ".concat(e, " ").concat(String(t));
}
r("ERR_INVALID_OPT_VALUE", function(t, e) {
return 'The value "' + e + '" is invalid for option "' + t + '"';
}, TypeError), r("ERR_INVALID_ARG_TYPE", function(t, e, r) {
var i, o, s, a;
if ("string" == typeof e && (o = "not ", e.substr(!s || s < 0 ? 0 : +s, o.length) === o) ? (i = "must not be", 
e = e.replace(/^not /, "")) : i = "must be", function(t, e, r) {
return (void 0 === r || r > t.length) && (r = t.length), t.substring(r - e.length, r) === e;
}(t, " argument")) a = "The ".concat(t, " ").concat(i, " ").concat(n(e, "type")); else {
var u = function(t, e, r) {
return "number" != typeof r && (r = 0), !(r + e.length > t.length) && -1 !== t.indexOf(e, r);
}(t, ".") ? "property" : "argument";
a = 'The "'.concat(t, '" ').concat(u, " ").concat(i, " ").concat(n(e, "type"));
}
return a += ". Received type ".concat(typeof r);
}, TypeError), r("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), r("ERR_METHOD_NOT_IMPLEMENTED", function(t) {
return "The " + t + " method is not implemented";
}), r("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), r("ERR_STREAM_DESTROYED", function(t) {
return "Cannot call " + t + " after a stream was destroyed";
}), r("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), r("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), 
r("ERR_STREAM_WRITE_AFTER_END", "write after end"), r("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), 
r("ERR_UNKNOWN_ENCODING", function(t) {
return "Unknown encoding: " + t;
}, TypeError), r("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), 
t.exports.a = e;
},
63475(t, e, r) {
"use strict";
var n = Object.keys || function(t) {
var e = [];
for (var r in t) e.push(r);
return e;
};
t.exports = h;
var i = r(51329), o = r(85153);
r(50801)(h, i);
for (var s = n(o.prototype), a = 0; a < s.length; a++) {
var u = s[a];
h.prototype[u] || (h.prototype[u] = o.prototype[u]);
}
function h(t) {
if (!(this instanceof h)) return new h(t);
i.call(this, t), o.call(this, t), this.allowHalfOpen = !0, t && (!1 === t.readable && (this.readable = !1), 
!1 === t.writable && (this.writable = !1), !1 === t.allowHalfOpen && (this.allowHalfOpen = !1, 
this.once("end", l)));
}
function l() {
this._writableState.ended || process.nextTick(f, this);
}
function f(t) {
t.end();
}
Object.defineProperty(h.prototype, "writableHighWaterMark", {
enumerable: !1,
get: function() {
return this._writableState.highWaterMark;
}
}), Object.defineProperty(h.prototype, "writableBuffer", {
enumerable: !1,
get: function() {
return this._writableState && this._writableState.getBuffer();
}
}), Object.defineProperty(h.prototype, "writableLength", {
enumerable: !1,
get: function() {
return this._writableState.length;
}
}), Object.defineProperty(h.prototype, "destroyed", {
enumerable: !1,
get: function() {
return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed);
},
set: function(t) {
void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = t, 
this._writableState.destroyed = t);
}
});
},
6143(t, e, r) {
"use strict";
t.exports = i;
var n = r(12597);
function i(t) {
if (!(this instanceof i)) return new i(t);
n.call(this, t);
}
r(50801)(i, n), i.prototype._transform = function(t, e, r) {
r(null, t);
};
},
51329(t, e, r) {
"use strict";
var n;
t.exports = T, T.ReadableState = S;
r(89628).EventEmitter;
var i = function(t, e) {
return t.listeners(e).length;
}, o = r(26398), s = r(28022).Buffer, a = (void 0 !== r.g ? r.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {};
var u, h = r(14098);
u = h && h.debuglog ? h.debuglog("stream") : function() {};
var l, f, c, d = r(21612), p = r(73533), g = r(8430).getHighWaterMark, y = r(44649).a, b = y.ERR_INVALID_ARG_TYPE, m = y.ERR_STREAM_PUSH_AFTER_EOF, w = y.ERR_METHOD_NOT_IMPLEMENTED, v = y.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
r(50801)(T, o);
var _ = p.errorOrDestroy, E = [ "error", "close", "destroy", "pause", "resume" ];
function S(t, e, i) {
n = n || r(63475), t = t || {}, "boolean" != typeof i && (i = e instanceof n), this.objectMode = !!t.objectMode, 
i && (this.objectMode = this.objectMode || !!t.readableObjectMode), this.highWaterMark = g(this, t, "readableHighWaterMark", i), 
this.buffer = new d, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, 
this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, 
this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, 
this.paused = !0, this.emitClose = !1 !== t.emitClose, this.autoDestroy = !!t.autoDestroy, 
this.destroyed = !1, this.defaultEncoding = t.defaultEncoding || "utf8", this.awaitDrain = 0, 
this.readingMore = !1, this.decoder = null, this.encoding = null, t.encoding && (l || (l = r(24158).a), 
this.decoder = new l(t.encoding), this.encoding = t.encoding);
}
function T(t) {
if (n = n || r(63475), !(this instanceof T)) return new T(t);
var e = this instanceof n;
this._readableState = new S(t, this, e), this.readable = !0, t && ("function" == typeof t.read && (this._read = t.read), 
"function" == typeof t.destroy && (this._destroy = t.destroy)), o.call(this);
}
function R(t, e, r, n, i) {
u("readableAddChunk", e);
var o, h = t._readableState;
if (null === e) h.reading = !1, function(t, e) {
if (u("onEofChunk"), e.ended) return;
if (e.decoder) {
var r = e.decoder.end();
r && r.length && (e.buffer.push(r), e.length += e.objectMode ? 1 : r.length);
}
e.ended = !0, e.sync ? k(t) : (e.needReadable = !1, e.emittedReadable || (e.emittedReadable = !0, 
x(t)));
}(t, h); else if (i || (o = function(t, e) {
var r;
n = e, s.isBuffer(n) || n instanceof a || "string" == typeof e || void 0 === e || t.objectMode || (r = new b("chunk", [ "string", "Buffer", "Uint8Array" ], e));
var n;
return r;
}(h, e)), o) _(t, o); else if (h.objectMode || e && e.length > 0) if ("string" == typeof e || h.objectMode || Object.getPrototypeOf(e) === s.prototype || (e = function(t) {
return s.from(t);
}(e)), n) h.endEmitted ? _(t, new v) : C(t, h, e, !0); else if (h.ended) _(t, new m); else {
if (h.destroyed) return !1;
h.reading = !1, h.decoder && !r ? (e = h.decoder.write(e), h.objectMode || 0 !== e.length ? C(t, h, e, !1) : I(t, h)) : C(t, h, e, !1);
} else n || (h.reading = !1, I(t, h));
return !h.ended && (h.length < h.highWaterMark || 0 === h.length);
}
function C(t, e, r, n) {
e.flowing && 0 === e.length && !e.sync ? (e.awaitDrain = 0, t.emit("data", r)) : (e.length += e.objectMode ? 1 : r.length, 
n ? e.buffer.unshift(r) : e.buffer.push(r), e.needReadable && k(t)), I(t, e);
}
Object.defineProperty(T.prototype, "destroyed", {
enumerable: !1,
get: function() {
return void 0 !== this._readableState && this._readableState.destroyed;
},
set: function(t) {
this._readableState && (this._readableState.destroyed = t);
}
}), T.prototype.destroy = p.destroy, T.prototype._undestroy = p.undestroy, T.prototype._destroy = function(t, e) {
e(t);
}, T.prototype.push = function(t, e) {
var r, n = this._readableState;
return n.objectMode ? r = !0 : "string" == typeof t && ((e = e || n.defaultEncoding) !== n.encoding && (t = s.from(t, e), 
e = ""), r = !0), R(this, t, e, !1, r);
}, T.prototype.unshift = function(t) {
return R(this, t, null, !0, !1);
}, T.prototype.isPaused = function() {
return !1 === this._readableState.flowing;
}, T.prototype.setEncoding = function(t) {
l || (l = r(24158).a);
var e = new l(t);
this._readableState.decoder = e, this._readableState.encoding = this._readableState.decoder.encoding;
for (var n = this._readableState.buffer.head, i = ""; null !== n; ) i += e.write(n.data), 
n = n.next;
return this._readableState.buffer.clear(), "" !== i && this._readableState.buffer.push(i), 
this._readableState.length = i.length, this;
};
var A = 1073741824;
function O(t, e) {
return t <= 0 || 0 === e.length && e.ended ? 0 : e.objectMode ? 1 : t != t ? e.flowing && e.length ? e.buffer.head.data.length : e.length : (t > e.highWaterMark && (e.highWaterMark = function(t) {
return t >= A ? t = A : (t--, t |= t >>> 1, t |= t >>> 2, t |= t >>> 4, t |= t >>> 8, 
t |= t >>> 16, t++), t;
}(t)), t <= e.length ? t : e.ended ? e.length : (e.needReadable = !0, 0));
}
function k(t) {
var e = t._readableState;
u("emitReadable", e.needReadable, e.emittedReadable), e.needReadable = !1, e.emittedReadable || (u("emitReadable", e.flowing), 
e.emittedReadable = !0, process.nextTick(x, t));
}
function x(t) {
var e = t._readableState;
u("emitReadable_", e.destroyed, e.length, e.ended), e.destroyed || !e.length && !e.ended || (t.emit("readable"), 
e.emittedReadable = !1), e.needReadable = !e.flowing && !e.ended && e.length <= e.highWaterMark, 
F(t);
}
function I(t, e) {
e.readingMore || (e.readingMore = !0, process.nextTick(L, t, e));
}
function L(t, e) {
for (;!e.reading && !e.ended && (e.length < e.highWaterMark || e.flowing && 0 === e.length); ) {
var r = e.length;
if (u("maybeReadMore read 0"), t.read(0), r === e.length) break;
}
e.readingMore = !1;
}
function B(t) {
var e = t._readableState;
e.readableListening = t.listenerCount("readable") > 0, e.resumeScheduled && !e.paused ? e.flowing = !0 : t.listenerCount("data") > 0 && t.resume();
}
function M(t) {
u("readable nexttick read 0"), t.read(0);
}
function N(t, e) {
u("resume", e.reading), e.reading || t.read(0), e.resumeScheduled = !1, t.emit("resume"), 
F(t), e.flowing && !e.reading && t.read(0);
}
function F(t) {
var e = t._readableState;
for (u("flow", e.flowing); e.flowing && null !== t.read(); ) ;
}
function U(t, e) {
return 0 === e.length ? null : (e.objectMode ? r = e.buffer.shift() : !t || t >= e.length ? (r = e.decoder ? e.buffer.join("") : 1 === e.buffer.length ? e.buffer.first() : e.buffer.concat(e.length), 
e.buffer.clear()) : r = e.buffer.consume(t, e.decoder), r);
var r;
}
function P(t) {
var e = t._readableState;
u("endReadable", e.endEmitted), e.endEmitted || (e.ended = !0, process.nextTick(j, e, t));
}
function j(t, e) {
if (u("endReadableNT", t.endEmitted, t.length), !t.endEmitted && 0 === t.length && (t.endEmitted = !0, 
e.readable = !1, e.emit("end"), t.autoDestroy)) {
var r = e._writableState;
(!r || r.autoDestroy && r.finished) && e.destroy();
}
}
function D(t, e) {
for (var r = 0, n = t.length; r < n; r++) if (t[r] === e) return r;
return -1;
}
T.prototype.read = function(t) {
u("read", t), t = parseInt(t, 10);
var e = this._readableState, r = t;
if (0 !== t && (e.emittedReadable = !1), 0 === t && e.needReadable && ((0 !== e.highWaterMark ? e.length >= e.highWaterMark : e.length > 0) || e.ended)) return u("read: emitReadable", e.length, e.ended), 
0 === e.length && e.ended ? P(this) : k(this), null;
if (0 === (t = O(t, e)) && e.ended) return 0 === e.length && P(this), null;
var n, i = e.needReadable;
return u("need readable", i), (0 === e.length || e.length - t < e.highWaterMark) && u("length less than watermark", i = !0), 
e.ended || e.reading ? u("reading or ended", i = !1) : i && (u("do read"), e.reading = !0, 
e.sync = !0, 0 === e.length && (e.needReadable = !0), this._read(e.highWaterMark), 
e.sync = !1, e.reading || (t = O(r, e))), null === (n = t > 0 ? U(t, e) : null) ? (e.needReadable = e.length <= e.highWaterMark, 
t = 0) : (e.length -= t, e.awaitDrain = 0), 0 === e.length && (e.ended || (e.needReadable = !0), 
r !== t && e.ended && P(this)), null !== n && this.emit("data", n), n;
}, T.prototype._read = function(t) {
_(this, new w("_read()"));
}, T.prototype.pipe = function(t, e) {
var r = this, n = this._readableState;
switch (n.pipesCount) {
case 0:
n.pipes = t;
break;

case 1:
n.pipes = [ n.pipes, t ];
break;

default:
n.pipes.push(t);
}
n.pipesCount += 1, u("pipe count=%d opts=%j", n.pipesCount, e);
var o = (!e || !1 !== e.end) && t !== process.stdout && t !== process.stderr ? a : g;
function s(e, i) {
u("onunpipe"), e === r && i && !1 === i.hasUnpiped && (i.hasUnpiped = !0, u("cleanup"), 
t.removeListener("close", d), t.removeListener("finish", p), t.removeListener("drain", h), 
t.removeListener("error", c), t.removeListener("unpipe", s), r.removeListener("end", a), 
r.removeListener("end", g), r.removeListener("data", f), l = !0, !n.awaitDrain || t._writableState && !t._writableState.needDrain || h());
}
function a() {
u("onend"), t.end();
}
n.endEmitted ? process.nextTick(o) : r.once("end", o), t.on("unpipe", s);
var h = function(t) {
return function() {
var e = t._readableState;
u("pipeOnDrain", e.awaitDrain), e.awaitDrain && e.awaitDrain--, 0 === e.awaitDrain && i(t, "data") && (e.flowing = !0, 
F(t));
};
}(r);
t.on("drain", h);
var l = !1;
function f(e) {
u("ondata");
var i = t.write(e);
u("dest.write", i), !1 === i && ((1 === n.pipesCount && n.pipes === t || n.pipesCount > 1 && -1 !== D(n.pipes, t)) && !l && (u("false write response, pause", n.awaitDrain), 
n.awaitDrain++), r.pause());
}
function c(e) {
u("onerror", e), g(), t.removeListener("error", c), 0 === i(t, "error") && _(t, e);
}
function d() {
t.removeListener("finish", p), g();
}
function p() {
u("onfinish"), t.removeListener("close", d), g();
}
function g() {
u("unpipe"), r.unpipe(t);
}
return r.on("data", f), function(t, e, r) {
if ("function" == typeof t.prependListener) return t.prependListener(e, r);
t._events && t._events[e] ? Array.isArray(t._events[e]) ? t._events[e].unshift(r) : t._events[e] = [ r, t._events[e] ] : t.on(e, r);
}(t, "error", c), t.once("close", d), t.once("finish", p), t.emit("pipe", r), n.flowing || (u("pipe resume"), 
r.resume()), t;
}, T.prototype.unpipe = function(t) {
var e = this._readableState, r = {
hasUnpiped: !1
};
if (0 === e.pipesCount) return this;
if (1 === e.pipesCount) return t && t !== e.pipes || (t || (t = e.pipes), e.pipes = null, 
e.pipesCount = 0, e.flowing = !1, t && t.emit("unpipe", this, r)), this;
if (!t) {
var n = e.pipes, i = e.pipesCount;
e.pipes = null, e.pipesCount = 0, e.flowing = !1;
for (var o = 0; o < i; o++) n[o].emit("unpipe", this, {
hasUnpiped: !1
});
return this;
}
var s = D(e.pipes, t);
return -1 === s || (e.pipes.splice(s, 1), e.pipesCount -= 1, 1 === e.pipesCount && (e.pipes = e.pipes[0]), 
t.emit("unpipe", this, r)), this;
}, T.prototype.on = function(t, e) {
var r = o.prototype.on.call(this, t, e), n = this._readableState;
return "data" === t ? (n.readableListening = this.listenerCount("readable") > 0, 
!1 !== n.flowing && this.resume()) : "readable" === t && (n.endEmitted || n.readableListening || (n.readableListening = n.needReadable = !0, 
n.flowing = !1, n.emittedReadable = !1, u("on readable", n.length, n.reading), n.length ? k(this) : n.reading || process.nextTick(M, this))), 
r;
}, T.prototype.addListener = T.prototype.on, T.prototype.removeListener = function(t, e) {
var r = o.prototype.removeListener.call(this, t, e);
return "readable" === t && process.nextTick(B, this), r;
}, T.prototype.removeAllListeners = function(t) {
var e = o.prototype.removeAllListeners.apply(this, arguments);
return "readable" !== t && void 0 !== t || process.nextTick(B, this), e;
}, T.prototype.resume = function() {
var t = this._readableState;
return t.flowing || (u("resume"), t.flowing = !t.readableListening, function(t, e) {
e.resumeScheduled || (e.resumeScheduled = !0, process.nextTick(N, t, e));
}(this, t)), t.paused = !1, this;
}, T.prototype.pause = function() {
return u("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (u("pause"), 
this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, 
this;
}, T.prototype.wrap = function(t) {
var e = this, r = this._readableState, n = !1;
for (var i in t.on("end", function() {
if (u("wrapped end"), r.decoder && !r.ended) {
var t = r.decoder.end();
t && t.length && e.push(t);
}
e.push(null);
}), t.on("data", function(i) {
(u("wrapped data"), r.decoder && (i = r.decoder.write(i)), r.objectMode && null == i) || (r.objectMode || i && i.length) && (e.push(i) || (n = !0, 
t.pause()));
}), t) void 0 === this[i] && "function" == typeof t[i] && (this[i] = function(e) {
return function() {
return t[e].apply(t, arguments);
};
}(i));
for (var o = 0; o < E.length; o++) t.on(E[o], this.emit.bind(this, E[o]));
return this._read = function(e) {
u("wrapped _read", e), n && (n = !1, t.resume());
}, this;
}, "function" == typeof Symbol && (T.prototype[Symbol.asyncIterator] = function() {
return void 0 === f && (f = r(91675)), f(this);
}), Object.defineProperty(T.prototype, "readableHighWaterMark", {
enumerable: !1,
get: function() {
return this._readableState.highWaterMark;
}
}), Object.defineProperty(T.prototype, "readableBuffer", {
enumerable: !1,
get: function() {
return this._readableState && this._readableState.buffer;
}
}), Object.defineProperty(T.prototype, "readableFlowing", {
enumerable: !1,
get: function() {
return this._readableState.flowing;
},
set: function(t) {
this._readableState && (this._readableState.flowing = t);
}
}), T._fromList = U, Object.defineProperty(T.prototype, "readableLength", {
enumerable: !1,
get: function() {
return this._readableState.length;
}
}), "function" == typeof Symbol && (T.from = function(t, e) {
return void 0 === c && (c = r(29710)), c(T, t, e);
});
},
12597(t, e, r) {
"use strict";
t.exports = l;
var n = r(44649).a, i = n.ERR_METHOD_NOT_IMPLEMENTED, o = n.ERR_MULTIPLE_CALLBACK, s = n.ERR_TRANSFORM_ALREADY_TRANSFORMING, a = n.ERR_TRANSFORM_WITH_LENGTH_0, u = r(63475);
function h(t, e) {
var r = this._transformState;
r.transforming = !1;
var n = r.writecb;
if (null === n) return this.emit("error", new o);
r.writechunk = null, r.writecb = null, null != e && this.push(e), n(t);
var i = this._readableState;
i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
}
function l(t) {
if (!(this instanceof l)) return new l(t);
u.call(this, t), this._transformState = {
afterTransform: h.bind(this),
needTransform: !1,
transforming: !1,
writecb: null,
writechunk: null,
writeencoding: null
}, this._readableState.needReadable = !0, this._readableState.sync = !1, t && ("function" == typeof t.transform && (this._transform = t.transform), 
"function" == typeof t.flush && (this._flush = t.flush)), this.on("prefinish", f);
}
function f() {
var t = this;
"function" != typeof this._flush || this._readableState.destroyed ? c(this, null, null) : this._flush(function(e, r) {
c(t, e, r);
});
}
function c(t, e, r) {
if (e) return t.emit("error", e);
if (null != r && t.push(r), t._writableState.length) throw new a;
if (t._transformState.transforming) throw new s;
return t.push(null);
}
r(50801)(l, u), l.prototype.push = function(t, e) {
return this._transformState.needTransform = !1, u.prototype.push.call(this, t, e);
}, l.prototype._transform = function(t, e, r) {
r(new i("_transform()"));
}, l.prototype._write = function(t, e, r) {
var n = this._transformState;
if (n.writecb = r, n.writechunk = t, n.writeencoding = e, !n.transforming) {
var i = this._readableState;
(n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
}
}, l.prototype._read = function(t) {
var e = this._transformState;
null === e.writechunk || e.transforming ? e.needTransform = !0 : (e.transforming = !0, 
this._transform(e.writechunk, e.writeencoding, e.afterTransform));
}, l.prototype._destroy = function(t, e) {
u.prototype._destroy.call(this, t, function(t) {
e(t);
});
};
},
85153(t, e, r) {
"use strict";
function n(t) {
var e = this;
this.next = null, this.entry = null, this.finish = function() {
!function(t, e, r) {
var n = t.entry;
t.entry = null;
for (;n; ) {
var i = n.callback;
e.pendingcb--, i(r), n = n.next;
}
e.corkedRequestsFree.next = t;
}(e, t);
};
}
var i;
t.exports = T, T.WritableState = S;
var o = {
deprecate: r(6830)
}, s = r(26398), a = r(28022).Buffer, u = (void 0 !== r.g ? r.g : "undefined" != typeof window ? window : "undefined" != typeof self ? self : {}).Uint8Array || function() {};
var h, l = r(73533), f = r(8430).getHighWaterMark, c = r(44649).a, d = c.ERR_INVALID_ARG_TYPE, p = c.ERR_METHOD_NOT_IMPLEMENTED, g = c.ERR_MULTIPLE_CALLBACK, y = c.ERR_STREAM_CANNOT_PIPE, b = c.ERR_STREAM_DESTROYED, m = c.ERR_STREAM_NULL_VALUES, w = c.ERR_STREAM_WRITE_AFTER_END, v = c.ERR_UNKNOWN_ENCODING, _ = l.errorOrDestroy;
function E() {}
function S(t, e, o) {
i = i || r(63475), t = t || {}, "boolean" != typeof o && (o = e instanceof i), this.objectMode = !!t.objectMode, 
o && (this.objectMode = this.objectMode || !!t.writableObjectMode), this.highWaterMark = f(this, t, "writableHighWaterMark", o), 
this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, 
this.destroyed = !1;
var s = !1 === t.decodeStrings;
this.decodeStrings = !s, this.defaultEncoding = t.defaultEncoding || "utf8", this.length = 0, 
this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, 
this.onwrite = function(t) {
!function(t, e) {
var r = t._writableState, n = r.sync, i = r.writecb;
if ("function" != typeof i) throw new g;
if (function(t) {
t.writing = !1, t.writecb = null, t.length -= t.writelen, t.writelen = 0;
}(r), e) !function(t, e, r, n, i) {
--e.pendingcb, r ? (process.nextTick(i, n), process.nextTick(x, t, e), t._writableState.errorEmitted = !0, 
_(t, n)) : (i(n), t._writableState.errorEmitted = !0, _(t, n), x(t, e));
}(t, r, n, e, i); else {
var o = O(r) || t.destroyed;
o || r.corked || r.bufferProcessing || !r.bufferedRequest || A(t, r), n ? process.nextTick(C, t, r, o, i) : C(t, r, o, i);
}
}(e, t);
}, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, 
this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== t.emitClose, 
this.autoDestroy = !!t.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new n(this);
}
function T(t) {
var e = this instanceof (i = i || r(63475));
if (!e && !h.call(T, this)) return new T(t);
this._writableState = new S(t, this, e), this.writable = !0, t && ("function" == typeof t.write && (this._write = t.write), 
"function" == typeof t.writev && (this._writev = t.writev), "function" == typeof t.destroy && (this._destroy = t.destroy), 
"function" == typeof t.final && (this._final = t.final)), s.call(this);
}
function R(t, e, r, n, i, o, s) {
e.writelen = n, e.writecb = s, e.writing = !0, e.sync = !0, e.destroyed ? e.onwrite(new b("write")) : r ? t._writev(i, e.onwrite) : t._write(i, o, e.onwrite), 
e.sync = !1;
}
function C(t, e, r, n) {
r || function(t, e) {
0 === e.length && e.needDrain && (e.needDrain = !1, t.emit("drain"));
}(t, e), e.pendingcb--, n(), x(t, e);
}
function A(t, e) {
e.bufferProcessing = !0;
var r = e.bufferedRequest;
if (t._writev && r && r.next) {
var i = e.bufferedRequestCount, o = new Array(i), s = e.corkedRequestsFree;
s.entry = r;
for (var a = 0, u = !0; r; ) o[a] = r, r.isBuf || (u = !1), r = r.next, a += 1;
o.allBuffers = u, R(t, e, !0, e.length, o, "", s.finish), e.pendingcb++, e.lastBufferedRequest = null, 
s.next ? (e.corkedRequestsFree = s.next, s.next = null) : e.corkedRequestsFree = new n(e), 
e.bufferedRequestCount = 0;
} else {
for (;r; ) {
var h = r.chunk, l = r.encoding, f = r.callback;
if (R(t, e, !1, e.objectMode ? 1 : h.length, h, l, f), r = r.next, e.bufferedRequestCount--, 
e.writing) break;
}
null === r && (e.lastBufferedRequest = null);
}
e.bufferedRequest = r, e.bufferProcessing = !1;
}
function O(t) {
return t.ending && 0 === t.length && null === t.bufferedRequest && !t.finished && !t.writing;
}
function k(t, e) {
t._final(function(r) {
e.pendingcb--, r && _(t, r), e.prefinished = !0, t.emit("prefinish"), x(t, e);
});
}
function x(t, e) {
var r = O(e);
if (r && (function(t, e) {
e.prefinished || e.finalCalled || ("function" != typeof t._final || e.destroyed ? (e.prefinished = !0, 
t.emit("prefinish")) : (e.pendingcb++, e.finalCalled = !0, process.nextTick(k, t, e)));
}(t, e), 0 === e.pendingcb && (e.finished = !0, t.emit("finish"), e.autoDestroy))) {
var n = t._readableState;
(!n || n.autoDestroy && n.endEmitted) && t.destroy();
}
return r;
}
r(50801)(T, s), S.prototype.getBuffer = function() {
for (var t = this.bufferedRequest, e = []; t; ) e.push(t), t = t.next;
return e;
}, function() {
try {
Object.defineProperty(S.prototype, "buffer", {
get: o.deprecate(function() {
return this.getBuffer();
}, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
});
} catch (t) {}
}(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (h = Function.prototype[Symbol.hasInstance], 
Object.defineProperty(T, Symbol.hasInstance, {
value: function(t) {
return !!h.call(this, t) || this === T && (t && t._writableState instanceof S);
}
})) : h = function(t) {
return t instanceof this;
}, T.prototype.pipe = function() {
_(this, new y);
}, T.prototype.write = function(t, e, r) {
var n, i = this._writableState, o = !1, s = !i.objectMode && (n = t, a.isBuffer(n) || n instanceof u);
return s && !a.isBuffer(t) && (t = function(t) {
return a.from(t);
}(t)), "function" == typeof e && (r = e, e = null), s ? e = "buffer" : e || (e = i.defaultEncoding), 
"function" != typeof r && (r = E), i.ending ? function(t, e) {
var r = new w;
_(t, r), process.nextTick(e, r);
}(this, r) : (s || function(t, e, r, n) {
var i;
return null === r ? i = new m : "string" == typeof r || e.objectMode || (i = new d("chunk", [ "string", "Buffer" ], r)), 
!i || (_(t, i), process.nextTick(n, i), !1);
}(this, i, t, r)) && (i.pendingcb++, o = function(t, e, r, n, i, o) {
if (!r) {
var s = function(t, e, r) {
t.objectMode || !1 === t.decodeStrings || "string" != typeof e || (e = a.from(e, r));
return e;
}(e, n, i);
n !== s && (r = !0, i = "buffer", n = s);
}
var u = e.objectMode ? 1 : n.length;
e.length += u;
var h = e.length < e.highWaterMark;
h || (e.needDrain = !0);
if (e.writing || e.corked) {
var l = e.lastBufferedRequest;
e.lastBufferedRequest = {
chunk: n,
encoding: i,
isBuf: r,
callback: o,
next: null
}, l ? l.next = e.lastBufferedRequest : e.bufferedRequest = e.lastBufferedRequest, 
e.bufferedRequestCount += 1;
} else R(t, e, !1, u, n, i, o);
return h;
}(this, i, s, t, e, r)), o;
}, T.prototype.cork = function() {
this._writableState.corked++;
}, T.prototype.uncork = function() {
var t = this._writableState;
t.corked && (t.corked--, t.writing || t.corked || t.bufferProcessing || !t.bufferedRequest || A(this, t));
}, T.prototype.setDefaultEncoding = function(t) {
if ("string" == typeof t && (t = t.toLowerCase()), !([ "hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw" ].indexOf((t + "").toLowerCase()) > -1)) throw new v(t);
return this._writableState.defaultEncoding = t, this;
}, Object.defineProperty(T.prototype, "writableBuffer", {
enumerable: !1,
get: function() {
return this._writableState && this._writableState.getBuffer();
}
}), Object.defineProperty(T.prototype, "writableHighWaterMark", {
enumerable: !1,
get: function() {
return this._writableState.highWaterMark;
}
}), T.prototype._write = function(t, e, r) {
r(new p("_write()"));
}, T.prototype._writev = null, T.prototype.end = function(t, e, r) {
var n = this._writableState;
return "function" == typeof t ? (r = t, t = null, e = null) : "function" == typeof e && (r = e, 
e = null), null != t && this.write(t, e), n.corked && (n.corked = 1, this.uncork()), 
n.ending || function(t, e, r) {
e.ending = !0, x(t, e), r && (e.finished ? process.nextTick(r) : t.once("finish", r));
e.ended = !0, t.writable = !1;
}(this, n, r), this;
}, Object.defineProperty(T.prototype, "writableLength", {
enumerable: !1,
get: function() {
return this._writableState.length;
}
}), Object.defineProperty(T.prototype, "destroyed", {
enumerable: !1,
get: function() {
return void 0 !== this._writableState && this._writableState.destroyed;
},
set: function(t) {
this._writableState && (this._writableState.destroyed = t);
}
}), T.prototype.destroy = l.destroy, T.prototype._undestroy = l.undestroy, T.prototype._destroy = function(t, e) {
e(t);
};
},
91675(t, e, r) {
"use strict";
var n;
function i(t, e, r) {
return (e = function(t) {
var e = function(t, e) {
if ("object" != typeof t || null === t) return t;
var r = t[Symbol.toPrimitive];
if (void 0 !== r) {
var n = r.call(t, e || "default");
if ("object" != typeof n) return n;
throw new TypeError("@@toPrimitive must return a primitive value.");
}
return ("string" === e ? String : Number)(t);
}(t, "string");
return "symbol" == typeof e ? e : String(e);
}(e)) in t ? Object.defineProperty(t, e, {
value: r,
enumerable: !0,
configurable: !0,
writable: !0
}) : t[e] = r, t;
}
var o = r(26779), s = Symbol("lastResolve"), a = Symbol("lastReject"), u = Symbol("error"), h = Symbol("ended"), l = Symbol("lastPromise"), f = Symbol("handlePromise"), c = Symbol("stream");
function d(t, e) {
return {
value: t,
done: e
};
}
function p(t) {
var e = t[s];
if (null !== e) {
var r = t[c].read();
null !== r && (t[l] = null, t[s] = null, t[a] = null, e(d(r, !1)));
}
}
function g(t) {
process.nextTick(p, t);
}
var y = Object.getPrototypeOf(function() {}), b = Object.setPrototypeOf((i(n = {
get stream() {
return this[c];
},
next: function() {
var t = this, e = this[u];
if (null !== e) return Promise.reject(e);
if (this[h]) return Promise.resolve(d(void 0, !0));
if (this[c].destroyed) return new Promise(function(e, r) {
process.nextTick(function() {
t[u] ? r(t[u]) : e(d(void 0, !0));
});
});
var r, n = this[l];
if (n) r = new Promise(function(t, e) {
return function(r, n) {
t.then(function() {
e[h] ? r(d(void 0, !0)) : e[f](r, n);
}, n);
};
}(n, this)); else {
var i = this[c].read();
if (null !== i) return Promise.resolve(d(i, !1));
r = new Promise(this[f]);
}
return this[l] = r, r;
}
}, Symbol.asyncIterator, function() {
return this;
}), i(n, "return", function() {
var t = this;
return new Promise(function(e, r) {
t[c].destroy(null, function(t) {
t ? r(t) : e(d(void 0, !0));
});
});
}), n), y);
t.exports = function(t) {
var e, r = Object.create(b, (i(e = {}, c, {
value: t,
writable: !0
}), i(e, s, {
value: null,
writable: !0
}), i(e, a, {
value: null,
writable: !0
}), i(e, u, {
value: null,
writable: !0
}), i(e, h, {
value: t._readableState.endEmitted,
writable: !0
}), i(e, f, {
value: function(t, e) {
var n = r[c].read();
n ? (r[l] = null, r[s] = null, r[a] = null, t(d(n, !1))) : (r[s] = t, r[a] = e);
},
writable: !0
}), e));
return r[l] = null, o(t, function(t) {
if (t && "ERR_STREAM_PREMATURE_CLOSE" !== t.code) {
var e = r[a];
return null !== e && (r[l] = null, r[s] = null, r[a] = null, e(t)), void (r[u] = t);
}
var n = r[s];
null !== n && (r[l] = null, r[s] = null, r[a] = null, n(d(void 0, !0))), r[h] = !0;
}), t.on("readable", g.bind(null, r)), r;
};
},
21612(t, e, r) {
"use strict";
function n(t, e) {
var r = Object.keys(t);
if (Object.getOwnPropertySymbols) {
var n = Object.getOwnPropertySymbols(t);
e && (n = n.filter(function(e) {
return Object.getOwnPropertyDescriptor(t, e).enumerable;
})), r.push.apply(r, n);
}
return r;
}
function i(t) {
for (var e = 1; e < arguments.length; e++) {
var r = null != arguments[e] ? arguments[e] : {};
e % 2 ? n(Object(r), !0).forEach(function(e) {
o(t, e, r[e]);
}) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : n(Object(r)).forEach(function(e) {
Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
});
}
return t;
}
function o(t, e, r) {
return (e = a(e)) in t ? Object.defineProperty(t, e, {
value: r,
enumerable: !0,
configurable: !0,
writable: !0
}) : t[e] = r, t;
}
function s(t, e) {
for (var r = 0; r < e.length; r++) {
var n = e[r];
n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), 
Object.defineProperty(t, a(n.key), n);
}
}
function a(t) {
var e = function(t, e) {
if ("object" != typeof t || null === t) return t;
var r = t[Symbol.toPrimitive];
if (void 0 !== r) {
var n = r.call(t, e || "default");
if ("object" != typeof n) return n;
throw new TypeError("@@toPrimitive must return a primitive value.");
}
return ("string" === e ? String : Number)(t);
}(t, "string");
return "symbol" == typeof e ? e : String(e);
}
var u = r(28022).Buffer, h = r(98408).inspect, l = h && h.custom || "inspect";
function f(t, e, r) {
u.prototype.copy.call(t, e, r);
}
t.exports = function() {
function t() {
!function(t, e) {
if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}(this, t), this.head = null, this.tail = null, this.length = 0;
}
var e, r, n;
return e = t, (r = [ {
key: "push",
value: function(t) {
var e = {
data: t,
next: null
};
this.length > 0 ? this.tail.next = e : this.head = e, this.tail = e, ++this.length;
}
}, {
key: "unshift",
value: function(t) {
var e = {
data: t,
next: this.head
};
0 === this.length && (this.tail = e), this.head = e, ++this.length;
}
}, {
key: "shift",
value: function() {
if (0 !== this.length) {
var t = this.head.data;
return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, 
--this.length, t;
}
}
}, {
key: "clear",
value: function() {
this.head = this.tail = null, this.length = 0;
}
}, {
key: "join",
value: function(t) {
if (0 === this.length) return "";
for (var e = this.head, r = "" + e.data; e = e.next; ) r += t + e.data;
return r;
}
}, {
key: "concat",
value: function(t) {
if (0 === this.length) return u.alloc(0);
for (var e = u.allocUnsafe(t >>> 0), r = this.head, n = 0; r; ) f(r.data, e, n), 
n += r.data.length, r = r.next;
return e;
}
}, {
key: "consume",
value: function(t, e) {
var r;
return t < this.head.data.length ? (r = this.head.data.slice(0, t), this.head.data = this.head.data.slice(t)) : r = t === this.head.data.length ? this.shift() : e ? this._getString(t) : this._getBuffer(t), 
r;
}
}, {
key: "first",
value: function() {
return this.head.data;
}
}, {
key: "_getString",
value: function(t) {
var e = this.head, r = 1, n = e.data;
for (t -= n.length; e = e.next; ) {
var i = e.data, o = t > i.length ? i.length : t;
if (o === i.length ? n += i : n += i.slice(0, t), 0 === (t -= o)) {
o === i.length ? (++r, e.next ? this.head = e.next : this.head = this.tail = null) : (this.head = e, 
e.data = i.slice(o));
break;
}
++r;
}
return this.length -= r, n;
}
}, {
key: "_getBuffer",
value: function(t) {
var e = u.allocUnsafe(t), r = this.head, n = 1;
for (r.data.copy(e), t -= r.data.length; r = r.next; ) {
var i = r.data, o = t > i.length ? i.length : t;
if (i.copy(e, e.length - t, 0, o), 0 === (t -= o)) {
o === i.length ? (++n, r.next ? this.head = r.next : this.head = this.tail = null) : (this.head = r, 
r.data = i.slice(o));
break;
}
++n;
}
return this.length -= n, e;
}
}, {
key: l,
value: function(t, e) {
return h(this, i(i({}, e), {}, {
depth: 0,
customInspect: !1
}));
}
} ]) && s(e.prototype, r), n && s(e, n), Object.defineProperty(e, "prototype", {
writable: !1
}), t;
}();
},
73533(t) {
"use strict";
function e(t, e) {
n(t, e), r(t);
}
function r(t) {
t._writableState && !t._writableState.emitClose || t._readableState && !t._readableState.emitClose || t.emit("close");
}
function n(t, e) {
t.emit("error", e);
}
t.exports = {
destroy: function(t, i) {
var o = this, s = this._readableState && this._readableState.destroyed, a = this._writableState && this._writableState.destroyed;
return s || a ? (i ? i(t) : t && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, 
process.nextTick(n, this, t)) : process.nextTick(n, this, t)), this) : (this._readableState && (this._readableState.destroyed = !0), 
this._writableState && (this._writableState.destroyed = !0), this._destroy(t || null, function(t) {
!i && t ? o._writableState ? o._writableState.errorEmitted ? process.nextTick(r, o) : (o._writableState.errorEmitted = !0, 
process.nextTick(e, o, t)) : process.nextTick(e, o, t) : i ? (process.nextTick(r, o), 
i(t)) : process.nextTick(r, o);
}), this);
},
undestroy: function() {
this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, 
this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, 
this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, 
this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
},
errorOrDestroy: function(t, e) {
var r = t._readableState, n = t._writableState;
r && r.autoDestroy || n && n.autoDestroy ? t.destroy(e) : t.emit("error", e);
}
};
},
26779(t, e, r) {
"use strict";
var n = r(44649).a.ERR_STREAM_PREMATURE_CLOSE;
function i() {}
t.exports = function t(e, r, o) {
if ("function" == typeof r) return t(e, null, r);
r || (r = {}), o = function(t) {
var e = !1;
return function() {
if (!e) {
e = !0;
for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++) n[i] = arguments[i];
t.apply(this, n);
}
};
}(o || i);
var s = r.readable || !1 !== r.readable && e.readable, a = r.writable || !1 !== r.writable && e.writable, u = function() {
e.writable || l();
}, h = e._writableState && e._writableState.finished, l = function() {
a = !1, h = !0, s || o.call(e);
}, f = e._readableState && e._readableState.endEmitted, c = function() {
s = !1, f = !0, a || o.call(e);
}, d = function(t) {
o.call(e, t);
}, p = function() {
var t;
return s && !f ? (e._readableState && e._readableState.ended || (t = new n), o.call(e, t)) : a && !h ? (e._writableState && e._writableState.ended || (t = new n), 
o.call(e, t)) : void 0;
}, g = function() {
e.req.on("finish", l);
};
return !function(t) {
return t.setHeader && "function" == typeof t.abort;
}(e) ? a && !e._writableState && (e.on("end", u), e.on("close", u)) : (e.on("complete", l), 
e.on("abort", p), e.req ? g() : e.on("request", g)), e.on("end", c), e.on("finish", l), 
!1 !== r.error && e.on("error", d), e.on("close", p), function() {
e.removeListener("complete", l), e.removeListener("abort", p), e.removeListener("request", g), 
e.req && e.req.removeListener("finish", l), e.removeListener("end", u), e.removeListener("close", u), 
e.removeListener("finish", l), e.removeListener("end", c), e.removeListener("error", d), 
e.removeListener("close", p);
};
};
},
29710(t) {
t.exports = function() {
throw new Error("Readable.from is not available in the browser");
};
},
10913(t, e, r) {
"use strict";
var n;
var i = r(44649).a, o = i.ERR_MISSING_ARGS, s = i.ERR_STREAM_DESTROYED;
function a(t) {
if (t) throw t;
}
function u(t) {
t();
}
function h(t, e) {
return t.pipe(e);
}
t.exports = function() {
for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
var l, f = function(t) {
return t.length ? "function" != typeof t[t.length - 1] ? a : t.pop() : a;
}(e);
if (Array.isArray(e[0]) && (e = e[0]), e.length < 2) throw new o("streams");
var c = e.map(function(t, i) {
var o = i < e.length - 1;
return function(t, e, i, o) {
o = function(t) {
var e = !1;
return function() {
e || (e = !0, t.apply(void 0, arguments));
};
}(o);
var a = !1;
t.on("close", function() {
a = !0;
}), void 0 === n && (n = r(26779)), n(t, {
readable: e,
writable: i
}, function(t) {
if (t) return o(t);
a = !0, o();
});
var u = !1;
return function(e) {
if (!a && !u) return u = !0, function(t) {
return t.setHeader && "function" == typeof t.abort;
}(t) ? t.abort() : "function" == typeof t.destroy ? t.destroy() : void o(e || new s("pipe"));
};
}(t, o, i > 0, function(t) {
l || (l = t), t && c.forEach(u), o || (c.forEach(u), f(l));
});
});
return e.reduce(h);
};
},
8430(t, e, r) {
"use strict";
var n = r(44649).a.ERR_INVALID_OPT_VALUE;
t.exports = {
getHighWaterMark: function(t, e, r, i) {
var o = function(t, e, r) {
return null != t.highWaterMark ? t.highWaterMark : e ? t[r] : null;
}(e, i, r);
if (null != o) {
if (!isFinite(o) || Math.floor(o) !== o || o < 0) throw new n(i ? r : "highWaterMark", o);
return Math.floor(o);
}
return t.objectMode ? 16 : 16384;
}
};
},
26398(t, e, r) {
t.exports = r(89628).EventEmitter;
},
48414(t, e, r) {
(e = t.exports = r(51329)).Stream = e, e.Readable = e, e.Writable = r(85153), e.Duplex = r(63475), 
e.Transform = r(12597), e.PassThrough = r(6143), e.finished = r(26779), e.pipeline = r(10913);
},
82950(t, e, r) {
var n = r(28022), i = n.Buffer;
function o(t, e) {
for (var r in t) e[r] = t[r];
}
function s(t, e, r) {
return i(t, e, r);
}
i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? t.exports = n : (o(n, e), 
e.Buffer = s), s.prototype = Object.create(i.prototype), o(i, s), s.from = function(t, e, r) {
if ("number" == typeof t) throw new TypeError("Argument must not be a number");
return i(t, e, r);
}, s.alloc = function(t, e, r) {
if ("number" != typeof t) throw new TypeError("Argument must be a number");
var n = i(t);
return void 0 !== e ? "string" == typeof r ? n.fill(e, r) : n.fill(e) : n.fill(0), 
n;
}, s.allocUnsafe = function(t) {
if ("number" != typeof t) throw new TypeError("Argument must be a number");
return i(t);
}, s.allocUnsafeSlow = function(t) {
if ("number" != typeof t) throw new TypeError("Argument must be a number");
return n.SlowBuffer(t);
};
},
59689(t, e, r) {
const n = r(82866)("simple-peer"), i = r(95591), o = r(73238), s = r(48414), a = r(44091), u = r(16399), {Buffer: h} = r(17723), l = 65536;
function f(t) {
return t.replace(/a=ice-options:trickle\s\n/g, "");
}
class c extends s.Duplex {
constructor(t) {
if (super(t = Object.assign({
allowHalfOpen: !1
}, t)), this._id = o(4).toString("hex").slice(0, 7), this._debug("new peer %o", t), 
this.channelName = t.initiator ? t.channelName || o(20).toString("hex") : null, 
this.initiator = t.initiator || !1, this.channelConfig = t.channelConfig || c.channelConfig, 
this.channelNegotiated = this.channelConfig.negotiated, this.config = Object.assign({}, c.config, t.config), 
this.offerOptions = t.offerOptions || {}, this.answerOptions = t.answerOptions || {}, 
this.sdpTransform = t.sdpTransform || (t => t), this.streams = t.streams || (t.stream ? [ t.stream ] : []), 
this.trickle = void 0 === t.trickle || t.trickle, this.allowHalfTrickle = void 0 !== t.allowHalfTrickle && t.allowHalfTrickle, 
this.iceCompleteTimeout = t.iceCompleteTimeout || 5e3, this.destroyed = !1, this.destroying = !1, 
this._connected = !1, this.remoteAddress = void 0, this.remoteFamily = void 0, this.remotePort = void 0, 
this.localAddress = void 0, this.localFamily = void 0, this.localPort = void 0, 
this._wrtc = t.wrtc && "object" == typeof t.wrtc ? t.wrtc : i(), !this._wrtc) throw "undefined" == typeof window ? u(new Error("No WebRTC support: Specify `opts.wrtc` option in this environment"), "ERR_WEBRTC_SUPPORT") : u(new Error("No WebRTC support: Not a supported browser"), "ERR_WEBRTC_SUPPORT");
this._pcReady = !1, this._channelReady = !1, this._iceComplete = !1, this._iceCompleteTimer = null, 
this._channel = null, this._pendingCandidates = [], this._isNegotiating = !1, this._firstNegotiation = !0, 
this._batchedNegotiation = !1, this._queuedNegotiation = !1, this._sendersAwaitingStable = [], 
this._senderMap = new Map, this._closingInterval = null, this._remoteTracks = [], 
this._remoteStreams = [], this._chunk = null, this._cb = null, this._interval = null;
try {
this._pc = new this._wrtc.RTCPeerConnection(this.config);
} catch (t) {
return void this.destroy(u(t, "ERR_PC_CONSTRUCTOR"));
}
this._isReactNativeWebrtc = "number" == typeof this._pc._peerConnectionId, this._pc.oniceconnectionstatechange = () => {
this._onIceStateChange();
}, this._pc.onicegatheringstatechange = () => {
this._onIceStateChange();
}, this._pc.onconnectionstatechange = () => {
this._onConnectionStateChange();
}, this._pc.onsignalingstatechange = () => {
this._onSignalingStateChange();
}, this._pc.onicecandidate = t => {
this._onIceCandidate(t);
}, "object" == typeof this._pc.peerIdentity && this._pc.peerIdentity.catch(t => {
this.destroy(u(t, "ERR_PC_PEER_IDENTITY"));
}), this.initiator || this.channelNegotiated ? this._setupData({
channel: this._pc.createDataChannel(this.channelName, this.channelConfig)
}) : this._pc.ondatachannel = t => {
this._setupData(t);
}, this.streams && this.streams.forEach(t => {
this.addStream(t);
}), this._pc.ontrack = t => {
this._onTrack(t);
}, this._debug("initial negotiation"), this._needsNegotiation(), this._onFinishBound = () => {
this._onFinish();
}, this.once("finish", this._onFinishBound);
}
get bufferSize() {
return this._channel && this._channel.bufferedAmount || 0;
}
get connected() {
return this._connected && "open" === this._channel.readyState;
}
address() {
return {
port: this.localPort,
family: this.localFamily,
address: this.localAddress
};
}
signal(t) {
if (!this.destroying) {
if (this.destroyed) throw u(new Error("cannot signal after peer is destroyed"), "ERR_DESTROYED");
if ("string" == typeof t) try {
t = JSON.parse(t);
} catch (e) {
t = {};
}
this._debug("signal()"), t.renegotiate && this.initiator && (this._debug("got request to renegotiate"), 
this._needsNegotiation()), t.transceiverRequest && this.initiator && (this._debug("got request for transceiver"), 
this.addTransceiver(t.transceiverRequest.kind, t.transceiverRequest.init)), t.candidate && (this._pc.remoteDescription && this._pc.remoteDescription.type ? this._addIceCandidate(t.candidate) : this._pendingCandidates.push(t.candidate)), 
t.sdp && this._pc.setRemoteDescription(new this._wrtc.RTCSessionDescription(t)).then(() => {
this.destroyed || (this._pendingCandidates.forEach(t => {
this._addIceCandidate(t);
}), this._pendingCandidates = [], "offer" === this._pc.remoteDescription.type && this._createAnswer());
}).catch(t => {
this.destroy(u(t, "ERR_SET_REMOTE_DESCRIPTION"));
}), t.sdp || t.candidate || t.renegotiate || t.transceiverRequest || this.destroy(u(new Error("signal() called with invalid signal data"), "ERR_SIGNALING"));
}
}
_addIceCandidate(t) {
const e = new this._wrtc.RTCIceCandidate(t);
this._pc.addIceCandidate(e).catch(t => {
var r;
!e.address || e.address.endsWith(".local") ? (r = "Ignoring unsupported ICE candidate.", 
console.warn(r)) : this.destroy(u(t, "ERR_ADD_ICE_CANDIDATE"));
});
}
send(t) {
if (!this.destroying) {
if (this.destroyed) throw u(new Error("cannot send after peer is destroyed"), "ERR_DESTROYED");
this._channel.send(t);
}
}
addTransceiver(t, e) {
if (!this.destroying) {
if (this.destroyed) throw u(new Error("cannot addTransceiver after peer is destroyed"), "ERR_DESTROYED");
if (this._debug("addTransceiver()"), this.initiator) try {
this._pc.addTransceiver(t, e), this._needsNegotiation();
} catch (t) {
this.destroy(u(t, "ERR_ADD_TRANSCEIVER"));
} else this.emit("signal", {
type: "transceiverRequest",
transceiverRequest: {
kind: t,
init: e
}
});
}
}
addStream(t) {
if (!this.destroying) {
if (this.destroyed) throw u(new Error("cannot addStream after peer is destroyed"), "ERR_DESTROYED");
this._debug("addStream()"), t.getTracks().forEach(e => {
this.addTrack(e, t);
});
}
}
addTrack(t, e) {
if (this.destroying) return;
if (this.destroyed) throw u(new Error("cannot addTrack after peer is destroyed"), "ERR_DESTROYED");
this._debug("addTrack()");
const r = this._senderMap.get(t) || new Map;
let n = r.get(e);
if (n) throw n.removed ? u(new Error("Track has been removed. You should enable/disable tracks that you want to re-add."), "ERR_SENDER_REMOVED") : u(new Error("Track has already been added to that stream."), "ERR_SENDER_ALREADY_ADDED");
n = this._pc.addTrack(t, e), r.set(e, n), this._senderMap.set(t, r), this._needsNegotiation();
}
replaceTrack(t, e, r) {
if (this.destroying) return;
if (this.destroyed) throw u(new Error("cannot replaceTrack after peer is destroyed"), "ERR_DESTROYED");
this._debug("replaceTrack()");
const n = this._senderMap.get(t), i = n ? n.get(r) : null;
if (!i) throw u(new Error("Cannot replace track that was never added."), "ERR_TRACK_NOT_ADDED");
e && this._senderMap.set(e, n), null != i.replaceTrack ? i.replaceTrack(e) : this.destroy(u(new Error("replaceTrack is not supported in this browser"), "ERR_UNSUPPORTED_REPLACETRACK"));
}
removeTrack(t, e) {
if (this.destroying) return;
if (this.destroyed) throw u(new Error("cannot removeTrack after peer is destroyed"), "ERR_DESTROYED");
this._debug("removeSender()");
const r = this._senderMap.get(t), n = r ? r.get(e) : null;
if (!n) throw u(new Error("Cannot remove track that was never added."), "ERR_TRACK_NOT_ADDED");
try {
n.removed = !0, this._pc.removeTrack(n);
} catch (t) {
"NS_ERROR_UNEXPECTED" === t.name ? this._sendersAwaitingStable.push(n) : this.destroy(u(t, "ERR_REMOVE_TRACK"));
}
this._needsNegotiation();
}
removeStream(t) {
if (!this.destroying) {
if (this.destroyed) throw u(new Error("cannot removeStream after peer is destroyed"), "ERR_DESTROYED");
this._debug("removeSenders()"), t.getTracks().forEach(e => {
this.removeTrack(e, t);
});
}
}
_needsNegotiation() {
this._debug("_needsNegotiation"), this._batchedNegotiation || (this._batchedNegotiation = !0, 
a(() => {
this._batchedNegotiation = !1, this.initiator || !this._firstNegotiation ? (this._debug("starting batched negotiation"), 
this.negotiate()) : this._debug("non-initiator initial negotiation request discarded"), 
this._firstNegotiation = !1;
}));
}
negotiate() {
if (!this.destroying) {
if (this.destroyed) throw u(new Error("cannot negotiate after peer is destroyed"), "ERR_DESTROYED");
this.initiator ? this._isNegotiating ? (this._queuedNegotiation = !0, this._debug("already negotiating, queueing")) : (this._debug("start negotiation"), 
setTimeout(() => {
this._createOffer();
}, 0)) : this._isNegotiating ? (this._queuedNegotiation = !0, this._debug("already negotiating, queueing")) : (this._debug("requesting negotiation from initiator"), 
this.emit("signal", {
type: "renegotiate",
renegotiate: !0
})), this._isNegotiating = !0;
}
}
destroy(t) {
this._destroy(t, () => {});
}
_destroy(t, e) {
this.destroyed || this.destroying || (this.destroying = !0, this._debug("destroying (error: %s)", t && (t.message || t)), 
a(() => {
if (this.destroyed = !0, this.destroying = !1, this._debug("destroy (error: %s)", t && (t.message || t)), 
this.readable = this.writable = !1, this._readableState.ended || this.push(null), 
this._writableState.finished || this.end(), this._connected = !1, this._pcReady = !1, 
this._channelReady = !1, this._remoteTracks = null, this._remoteStreams = null, 
this._senderMap = null, clearInterval(this._closingInterval), this._closingInterval = null, 
clearInterval(this._interval), this._interval = null, this._chunk = null, this._cb = null, 
this._onFinishBound && this.removeListener("finish", this._onFinishBound), this._onFinishBound = null, 
this._channel) {
try {
this._channel.close();
} catch (t) {}
this._channel.onmessage = null, this._channel.onopen = null, this._channel.onclose = null, 
this._channel.onerror = null;
}
if (this._pc) {
try {
this._pc.close();
} catch (t) {}
this._pc.oniceconnectionstatechange = null, this._pc.onicegatheringstatechange = null, 
this._pc.onsignalingstatechange = null, this._pc.onicecandidate = null, this._pc.ontrack = null, 
this._pc.ondatachannel = null;
}
this._pc = null, this._channel = null, t && this.emit("error", t), this.emit("close"), 
e();
}));
}
_setupData(t) {
if (!t.channel) return this.destroy(u(new Error("Data channel event is missing `channel` property"), "ERR_DATA_CHANNEL"));
this._channel = t.channel, this._channel.binaryType = "arraybuffer", "number" == typeof this._channel.bufferedAmountLowThreshold && (this._channel.bufferedAmountLowThreshold = l), 
this.channelName = this._channel.label, this._channel.onmessage = t => {
this._onChannelMessage(t);
}, this._channel.onbufferedamountlow = () => {
this._onChannelBufferedAmountLow();
}, this._channel.onopen = () => {
this._onChannelOpen();
}, this._channel.onclose = () => {
this._onChannelClose();
}, this._channel.onerror = t => {
const e = t.error instanceof Error ? t.error : new Error(`Datachannel error: ${t.message} ${t.filename}:${t.lineno}:${t.colno}`);
this.destroy(u(e, "ERR_DATA_CHANNEL"));
};
let e = !1;
this._closingInterval = setInterval(() => {
this._channel && "closing" === this._channel.readyState ? (e && this._onChannelClose(), 
e = !0) : e = !1;
}, 5e3);
}
_read() {}
_write(t, e, r) {
if (this.destroyed) return r(u(new Error("cannot write after peer is destroyed"), "ERR_DATA_CHANNEL"));
if (this._connected) {
try {
this.send(t);
} catch (t) {
return this.destroy(u(t, "ERR_DATA_CHANNEL"));
}
this._channel.bufferedAmount > l ? (this._debug("start backpressure: bufferedAmount %d", this._channel.bufferedAmount), 
this._cb = r) : r(null);
} else this._debug("write before connect"), this._chunk = t, this._cb = r;
}
_onFinish() {
if (this.destroyed) return;
const t = () => {
setTimeout(() => this.destroy(), 1e3);
};
this._connected ? t() : this.once("connect", t);
}
_startIceCompleteTimeout() {
this.destroyed || this._iceCompleteTimer || (this._debug("started iceComplete timeout"), 
this._iceCompleteTimer = setTimeout(() => {
this._iceComplete || (this._iceComplete = !0, this._debug("iceComplete timeout completed"), 
this.emit("iceTimeout"), this.emit("_iceComplete"));
}, this.iceCompleteTimeout));
}
_createOffer() {
this.destroyed || this._pc.createOffer(this.offerOptions).then(t => {
if (this.destroyed) return;
this.trickle || this.allowHalfTrickle || (t.sdp = f(t.sdp)), t.sdp = this.sdpTransform(t.sdp);
const e = () => {
if (this.destroyed) return;
const e = this._pc.localDescription || t;
this._debug("signal"), this.emit("signal", {
type: e.type,
sdp: e.sdp
});
};
this._pc.setLocalDescription(t).then(() => {
this._debug("createOffer success"), this.destroyed || (this.trickle || this._iceComplete ? e() : this.once("_iceComplete", e));
}).catch(t => {
this.destroy(u(t, "ERR_SET_LOCAL_DESCRIPTION"));
});
}).catch(t => {
this.destroy(u(t, "ERR_CREATE_OFFER"));
});
}
_requestMissingTransceivers() {
this._pc.getTransceivers && this._pc.getTransceivers().forEach(t => {
t.mid || !t.sender.track || t.requested || (t.requested = !0, this.addTransceiver(t.sender.track.kind));
});
}
_createAnswer() {
this.destroyed || this._pc.createAnswer(this.answerOptions).then(t => {
if (this.destroyed) return;
this.trickle || this.allowHalfTrickle || (t.sdp = f(t.sdp)), t.sdp = this.sdpTransform(t.sdp);
const e = () => {
if (this.destroyed) return;
const e = this._pc.localDescription || t;
this._debug("signal"), this.emit("signal", {
type: e.type,
sdp: e.sdp
}), this.initiator || this._requestMissingTransceivers();
};
this._pc.setLocalDescription(t).then(() => {
this.destroyed || (this.trickle || this._iceComplete ? e() : this.once("_iceComplete", e));
}).catch(t => {
this.destroy(u(t, "ERR_SET_LOCAL_DESCRIPTION"));
});
}).catch(t => {
this.destroy(u(t, "ERR_CREATE_ANSWER"));
});
}
_onConnectionStateChange() {
this.destroyed || "failed" === this._pc.connectionState && this.destroy(u(new Error("Connection failed."), "ERR_CONNECTION_FAILURE"));
}
_onIceStateChange() {
if (this.destroyed) return;
const t = this._pc.iceConnectionState, e = this._pc.iceGatheringState;
this._debug("iceStateChange (connection: %s) (gathering: %s)", t, e), this.emit("iceStateChange", t, e), 
"connected" !== t && "completed" !== t || (this._pcReady = !0, this._maybeReady()), 
"failed" === t && this.destroy(u(new Error("Ice connection failed."), "ERR_ICE_CONNECTION_FAILURE")), 
"closed" === t && this.destroy(u(new Error("Ice connection closed."), "ERR_ICE_CONNECTION_CLOSED"));
}
getStats(t) {
const e = t => ("[object Array]" === Object.prototype.toString.call(t.values) && t.values.forEach(e => {
Object.assign(t, e);
}), t);
0 === this._pc.getStats.length || this._isReactNativeWebrtc ? this._pc.getStats().then(r => {
const n = [];
r.forEach(t => {
n.push(e(t));
}), t(null, n);
}, e => t(e)) : this._pc.getStats.length > 0 ? this._pc.getStats(r => {
if (this.destroyed) return;
const n = [];
r.result().forEach(t => {
const r = {};
t.names().forEach(e => {
r[e] = t.stat(e);
}), r.id = t.id, r.type = t.type, r.timestamp = t.timestamp, n.push(e(r));
}), t(null, n);
}, e => t(e)) : t(null, []);
}
_maybeReady() {
if (this._debug("maybeReady pc %s channel %s", this._pcReady, this._channelReady), 
this._connected || this._connecting || !this._pcReady || !this._channelReady) return;
this._connecting = !0;
const t = () => {
this.destroyed || this.getStats((e, r) => {
if (this.destroyed) return;
e && (r = []);
const n = {}, i = {}, o = {};
let s = !1;
r.forEach(t => {
"remotecandidate" !== t.type && "remote-candidate" !== t.type || (n[t.id] = t), 
"localcandidate" !== t.type && "local-candidate" !== t.type || (i[t.id] = t), "candidatepair" !== t.type && "candidate-pair" !== t.type || (o[t.id] = t);
});
const a = t => {
s = !0;
let e = i[t.localCandidateId];
e && (e.ip || e.address) ? (this.localAddress = e.ip || e.address, this.localPort = Number(e.port)) : e && e.ipAddress ? (this.localAddress = e.ipAddress, 
this.localPort = Number(e.portNumber)) : "string" == typeof t.googLocalAddress && (e = t.googLocalAddress.split(":"), 
this.localAddress = e[0], this.localPort = Number(e[1])), this.localAddress && (this.localFamily = this.localAddress.includes(":") ? "IPv6" : "IPv4");
let r = n[t.remoteCandidateId];
r && (r.ip || r.address) ? (this.remoteAddress = r.ip || r.address, this.remotePort = Number(r.port)) : r && r.ipAddress ? (this.remoteAddress = r.ipAddress, 
this.remotePort = Number(r.portNumber)) : "string" == typeof t.googRemoteAddress && (r = t.googRemoteAddress.split(":"), 
this.remoteAddress = r[0], this.remotePort = Number(r[1])), this.remoteAddress && (this.remoteFamily = this.remoteAddress.includes(":") ? "IPv6" : "IPv4"), 
this._debug("connect local: %s:%s remote: %s:%s", this.localAddress, this.localPort, this.remoteAddress, this.remotePort);
};
if (r.forEach(t => {
"transport" === t.type && t.selectedCandidatePairId && a(o[t.selectedCandidatePairId]), 
("googCandidatePair" === t.type && "true" === t.googActiveConnection || ("candidatepair" === t.type || "candidate-pair" === t.type) && t.selected) && a(t);
}), s || Object.keys(o).length && !Object.keys(i).length) {
if (this._connecting = !1, this._connected = !0, this._chunk) {
try {
this.send(this._chunk);
} catch (e) {
return this.destroy(u(e, "ERR_DATA_CHANNEL"));
}
this._chunk = null, this._debug('sent chunk from "write before connect"');
const t = this._cb;
this._cb = null, t(null);
}
"number" != typeof this._channel.bufferedAmountLowThreshold && (this._interval = setInterval(() => this._onInterval(), 150), 
this._interval.unref && this._interval.unref()), this._debug("connect"), this.emit("connect");
} else setTimeout(t, 100);
});
};
t();
}
_onInterval() {
!this._cb || !this._channel || this._channel.bufferedAmount > l || this._onChannelBufferedAmountLow();
}
_onSignalingStateChange() {
this.destroyed || ("stable" === this._pc.signalingState && (this._isNegotiating = !1, 
this._debug("flushing sender queue", this._sendersAwaitingStable), this._sendersAwaitingStable.forEach(t => {
this._pc.removeTrack(t), this._queuedNegotiation = !0;
}), this._sendersAwaitingStable = [], this._queuedNegotiation ? (this._debug("flushing negotiation queue"), 
this._queuedNegotiation = !1, this._needsNegotiation()) : (this._debug("negotiated"), 
this.emit("negotiated"))), this._debug("signalingStateChange %s", this._pc.signalingState), 
this.emit("signalingStateChange", this._pc.signalingState));
}
_onIceCandidate(t) {
this.destroyed || (t.candidate && this.trickle ? this.emit("signal", {
type: "candidate",
candidate: {
candidate: t.candidate.candidate,
sdpMLineIndex: t.candidate.sdpMLineIndex,
sdpMid: t.candidate.sdpMid
}
}) : t.candidate || this._iceComplete || (this._iceComplete = !0, this.emit("_iceComplete")), 
t.candidate && this._startIceCompleteTimeout());
}
_onChannelMessage(t) {
if (this.destroyed) return;
let e = t.data;
e instanceof ArrayBuffer && (e = h.from(e)), this.push(e);
}
_onChannelBufferedAmountLow() {
if (this.destroyed || !this._cb) return;
this._debug("ending backpressure: bufferedAmount %d", this._channel.bufferedAmount);
const t = this._cb;
this._cb = null, t(null);
}
_onChannelOpen() {
this._connected || this.destroyed || (this._debug("on channel open"), this._channelReady = !0, 
this._maybeReady());
}
_onChannelClose() {
this.destroyed || (this._debug("on channel close"), this.destroy());
}
_onTrack(t) {
this.destroyed || t.streams.forEach(e => {
this._debug("on track"), this.emit("track", t.track, e), this._remoteTracks.push({
track: t.track,
stream: e
}), this._remoteStreams.some(t => t.id === e.id) || (this._remoteStreams.push(e), 
a(() => {
this._debug("on stream"), this.emit("stream", e);
}));
});
}
_debug() {
const t = [].slice.call(arguments);
t[0] = "[" + this._id + "] " + t[0], n.apply(null, t);
}
}
c.WEBRTC_SUPPORT = !!i(), c.config = {
iceServers: [ {
urls: [ "stun:stun.l.google.com:19302", "stun:global.stun.twilio.com:3478" ]
} ],
sdpSemantics: "unified-plan"
}, c.channelConfig = {}, t.exports = c;
},
17723(t, e, r) {
"use strict";
const n = r(17829), i = r(65436), o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
e.Buffer = u, e.SlowBuffer = function(t) {
+t != t && (t = 0);
return u.alloc(+t);
}, e.INSPECT_MAX_BYTES = 50;
const s = 2147483647;
function a(t) {
if (t > s) throw new RangeError('The value "' + t + '" is invalid for option "size"');
const e = new Uint8Array(t);
return Object.setPrototypeOf(e, u.prototype), e;
}
function u(t, e, r) {
if ("number" == typeof t) {
if ("string" == typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
return f(t);
}
return h(t, e, r);
}
function h(t, e, r) {
if ("string" == typeof t) return function(t, e) {
"string" == typeof e && "" !== e || (e = "utf8");
if (!u.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
const r = 0 | g(t, e);
let n = a(r);
const i = n.write(t, e);
i !== r && (n = n.slice(0, i));
return n;
}(t, e);
if (ArrayBuffer.isView(t)) return function(t) {
if (K(t, Uint8Array)) {
const e = new Uint8Array(t);
return d(e.buffer, e.byteOffset, e.byteLength);
}
return c(t);
}(t);
if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
if (K(t, ArrayBuffer) || t && K(t.buffer, ArrayBuffer)) return d(t, e, r);
if ("undefined" != typeof SharedArrayBuffer && (K(t, SharedArrayBuffer) || t && K(t.buffer, SharedArrayBuffer))) return d(t, e, r);
if ("number" == typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
const n = t.valueOf && t.valueOf();
if (null != n && n !== t) return u.from(n, e, r);
const i = function(t) {
if (u.isBuffer(t)) {
const e = 0 | p(t.length), r = a(e);
return 0 === r.length || t.copy(r, 0, 0, e), r;
}
if (void 0 !== t.length) return "number" != typeof t.length || X(t.length) ? a(0) : c(t);
if ("Buffer" === t.type && Array.isArray(t.data)) return c(t.data);
}(t);
if (i) return i;
if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof t[Symbol.toPrimitive]) return u.from(t[Symbol.toPrimitive]("string"), e, r);
throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
}
function l(t) {
if ("number" != typeof t) throw new TypeError('"size" argument must be of type number');
if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"');
}
function f(t) {
return l(t), a(t < 0 ? 0 : 0 | p(t));
}
function c(t) {
const e = t.length < 0 ? 0 : 0 | p(t.length), r = a(e);
for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
return r;
}
function d(t, e, r) {
if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
if (t.byteLength < e + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
let n;
return n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r), 
Object.setPrototypeOf(n, u.prototype), n;
}
function p(t) {
if (t >= s) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
return 0 | t;
}
function g(t, e) {
if (u.isBuffer(t)) return t.length;
if (ArrayBuffer.isView(t) || K(t, ArrayBuffer)) return t.byteLength;
if ("string" != typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
const r = t.length, n = arguments.length > 2 && !0 === arguments[2];
if (!n && 0 === r) return 0;
let i = !1;
for (;;) switch (e) {
case "ascii":
case "latin1":
case "binary":
return r;

case "utf8":
case "utf-8":
return H(t).length;

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return 2 * r;

case "hex":
return r >>> 1;

case "base64":
return Y(t).length;

default:
if (i) return n ? -1 : H(t).length;
e = ("" + e).toLowerCase(), i = !0;
}
}
function y(t, e, r) {
let n = !1;
if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
if ((r >>>= 0) <= (e >>>= 0)) return "";
for (t || (t = "utf8"); ;) switch (t) {
case "hex":
return x(this, e, r);

case "utf8":
case "utf-8":
return C(this, e, r);

case "ascii":
return O(this, e, r);

case "latin1":
case "binary":
return k(this, e, r);

case "base64":
return R(this, e, r);

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return I(this, e, r);

default:
if (n) throw new TypeError("Unknown encoding: " + t);
t = (t + "").toLowerCase(), n = !0;
}
}
function b(t, e, r) {
const n = t[e];
t[e] = t[r], t[r] = n;
}
function m(t, e, r, n, i) {
if (0 === t.length) return -1;
if ("string" == typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), 
X(r = +r) && (r = i ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
if (i) return -1;
r = t.length - 1;
} else if (r < 0) {
if (!i) return -1;
r = 0;
}
if ("string" == typeof e && (e = u.from(e, n)), u.isBuffer(e)) return 0 === e.length ? -1 : w(t, e, r, n, i);
if ("number" == typeof e) return e &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : w(t, [ e ], r, n, i);
throw new TypeError("val must be string, number or Buffer");
}
function w(t, e, r, n, i) {
let o, s = 1, a = t.length, u = e.length;
if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
if (t.length < 2 || e.length < 2) return -1;
s = 2, a /= 2, u /= 2, r /= 2;
}
function h(t, e) {
return 1 === s ? t[e] : t.readUInt16BE(e * s);
}
if (i) {
let n = -1;
for (o = r; o < a; o++) if (h(t, o) === h(e, -1 === n ? 0 : o - n)) {
if (-1 === n && (n = o), o - n + 1 === u) return n * s;
} else -1 !== n && (o -= o - n), n = -1;
} else for (r + u > a && (r = a - u), o = r; o >= 0; o--) {
let r = !0;
for (let n = 0; n < u; n++) if (h(t, o + n) !== h(e, n)) {
r = !1;
break;
}
if (r) return o;
}
return -1;
}
function v(t, e, r, n) {
r = Number(r) || 0;
const i = t.length - r;
n ? (n = Number(n)) > i && (n = i) : n = i;
const o = e.length;
let s;
for (n > o / 2 && (n = o / 2), s = 0; s < n; ++s) {
const n = parseInt(e.substr(2 * s, 2), 16);
if (X(n)) return s;
t[r + s] = n;
}
return s;
}
function _(t, e, r, n) {
return V(H(e, t.length - r), t, r, n);
}
function E(t, e, r, n) {
return V(function(t) {
const e = [];
for (let r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
return e;
}(e), t, r, n);
}
function S(t, e, r, n) {
return V(Y(e), t, r, n);
}
function T(t, e, r, n) {
return V(function(t, e) {
let r, n, i;
const o = [];
for (let s = 0; s < t.length && !((e -= 2) < 0); ++s) r = t.charCodeAt(s), n = r >> 8, 
i = r % 256, o.push(i), o.push(n);
return o;
}(e, t.length - r), t, r, n);
}
function R(t, e, r) {
return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r));
}
function C(t, e, r) {
r = Math.min(t.length, r);
const n = [];
let i = e;
for (;i < r; ) {
const e = t[i];
let o = null, s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
if (i + s <= r) {
let r, n, a, u;
switch (s) {
case 1:
e < 128 && (o = e);
break;

case 2:
r = t[i + 1], 128 == (192 & r) && (u = (31 & e) << 6 | 63 & r, u > 127 && (o = u));
break;

case 3:
r = t[i + 1], n = t[i + 2], 128 == (192 & r) && 128 == (192 & n) && (u = (15 & e) << 12 | (63 & r) << 6 | 63 & n, 
u > 2047 && (u < 55296 || u > 57343) && (o = u));
break;

case 4:
r = t[i + 1], n = t[i + 2], a = t[i + 3], 128 == (192 & r) && 128 == (192 & n) && 128 == (192 & a) && (u = (15 & e) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & a, 
u > 65535 && u < 1114112 && (o = u));
}
}
null === o ? (o = 65533, s = 1) : o > 65535 && (o -= 65536, n.push(o >>> 10 & 1023 | 55296), 
o = 56320 | 1023 & o), n.push(o), i += s;
}
return function(t) {
const e = t.length;
if (e <= A) return String.fromCharCode.apply(String, t);
let r = "", n = 0;
for (;n < e; ) r += String.fromCharCode.apply(String, t.slice(n, n += A));
return r;
}(n);
}
e.kMaxLength = s, u.TYPED_ARRAY_SUPPORT = function() {
try {
const t = new Uint8Array(1), e = {
foo: function() {
return 42;
}
};
return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 
42 === t.foo();
} catch (t) {
return !1;
}
}(), u.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), 
Object.defineProperty(u.prototype, "parent", {
enumerable: !0,
get: function() {
if (u.isBuffer(this)) return this.buffer;
}
}), Object.defineProperty(u.prototype, "offset", {
enumerable: !0,
get: function() {
if (u.isBuffer(this)) return this.byteOffset;
}
}), u.poolSize = 8192, u.from = function(t, e, r) {
return h(t, e, r);
}, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array), 
u.alloc = function(t, e, r) {
return function(t, e, r) {
return l(t), t <= 0 ? a(t) : void 0 !== e ? "string" == typeof r ? a(t).fill(e, r) : a(t).fill(e) : a(t);
}(t, e, r);
}, u.allocUnsafe = function(t) {
return f(t);
}, u.allocUnsafeSlow = function(t) {
return f(t);
}, u.isBuffer = function(t) {
return null != t && !0 === t._isBuffer && t !== u.prototype;
}, u.compare = function(t, e) {
if (K(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), K(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)), 
!u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
if (t === e) return 0;
let r = t.length, n = e.length;
for (let i = 0, o = Math.min(r, n); i < o; ++i) if (t[i] !== e[i]) {
r = t[i], n = e[i];
break;
}
return r < n ? -1 : n < r ? 1 : 0;
}, u.isEncoding = function(t) {
switch (String(t).toLowerCase()) {
case "hex":
case "utf8":
case "utf-8":
case "ascii":
case "latin1":
case "binary":
case "base64":
case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return !0;

default:
return !1;
}
}, u.concat = function(t, e) {
if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
if (0 === t.length) return u.alloc(0);
let r;
if (void 0 === e) for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
const n = u.allocUnsafe(e);
let i = 0;
for (r = 0; r < t.length; ++r) {
let e = t[r];
if (K(e, Uint8Array)) i + e.length > n.length ? (u.isBuffer(e) || (e = u.from(e)), 
e.copy(n, i)) : Uint8Array.prototype.set.call(n, e, i); else {
if (!u.isBuffer(e)) throw new TypeError('"list" argument must be an Array of Buffers');
e.copy(n, i);
}
i += e.length;
}
return n;
}, u.byteLength = g, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
const t = this.length;
if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
for (let e = 0; e < t; e += 2) b(this, e, e + 1);
return this;
}, u.prototype.swap32 = function() {
const t = this.length;
if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
for (let e = 0; e < t; e += 4) b(this, e, e + 3), b(this, e + 1, e + 2);
return this;
}, u.prototype.swap64 = function() {
const t = this.length;
if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
for (let e = 0; e < t; e += 8) b(this, e, e + 7), b(this, e + 1, e + 6), b(this, e + 2, e + 5), 
b(this, e + 3, e + 4);
return this;
}, u.prototype.toString = function() {
const t = this.length;
return 0 === t ? "" : 0 === arguments.length ? C(this, 0, t) : y.apply(this, arguments);
}, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(t) {
if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
return this === t || 0 === u.compare(this, t);
}, u.prototype.inspect = function() {
let t = "";
const r = e.INSPECT_MAX_BYTES;
return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), 
"<Buffer " + t + ">";
}, o && (u.prototype[o] = u.prototype.inspect), u.prototype.compare = function(t, e, r, n, i) {
if (K(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), !u.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), 
void 0 === i && (i = this.length), e < 0 || r > t.length || n < 0 || i > this.length) throw new RangeError("out of range index");
if (n >= i && e >= r) return 0;
if (n >= i) return -1;
if (e >= r) return 1;
if (this === t) return 0;
let o = (i >>>= 0) - (n >>>= 0), s = (r >>>= 0) - (e >>>= 0);
const a = Math.min(o, s), h = this.slice(n, i), l = t.slice(e, r);
for (let t = 0; t < a; ++t) if (h[t] !== l[t]) {
o = h[t], s = l[t];
break;
}
return o < s ? -1 : s < o ? 1 : 0;
}, u.prototype.includes = function(t, e, r) {
return -1 !== this.indexOf(t, e, r);
}, u.prototype.indexOf = function(t, e, r) {
return m(this, t, e, r, !0);
}, u.prototype.lastIndexOf = function(t, e, r) {
return m(this, t, e, r, !1);
}, u.prototype.write = function(t, e, r, n) {
if (void 0 === e) n = "utf8", r = this.length, e = 0; else if (void 0 === r && "string" == typeof e) n = e, 
r = this.length, e = 0; else {
if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0);
}
const i = this.length - e;
if ((void 0 === r || r > i) && (r = i), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
n || (n = "utf8");
let o = !1;
for (;;) switch (n) {
case "hex":
return v(this, t, e, r);

case "utf8":
case "utf-8":
return _(this, t, e, r);

case "ascii":
case "latin1":
case "binary":
return E(this, t, e, r);

case "base64":
return S(this, t, e, r);

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return T(this, t, e, r);

default:
if (o) throw new TypeError("Unknown encoding: " + n);
n = ("" + n).toLowerCase(), o = !0;
}
}, u.prototype.toJSON = function() {
return {
type: "Buffer",
data: Array.prototype.slice.call(this._arr || this, 0)
};
};
const A = 4096;
function O(t, e, r) {
let n = "";
r = Math.min(t.length, r);
for (let i = e; i < r; ++i) n += String.fromCharCode(127 & t[i]);
return n;
}
function k(t, e, r) {
let n = "";
r = Math.min(t.length, r);
for (let i = e; i < r; ++i) n += String.fromCharCode(t[i]);
return n;
}
function x(t, e, r) {
const n = t.length;
(!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
let i = "";
for (let n = e; n < r; ++n) i += J[t[n]];
return i;
}
function I(t, e, r) {
const n = t.slice(e, r);
let i = "";
for (let t = 0; t < n.length - 1; t += 2) i += String.fromCharCode(n[t] + 256 * n[t + 1]);
return i;
}
function L(t, e, r) {
if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
if (t + e > r) throw new RangeError("Trying to access beyond buffer length");
}
function B(t, e, r, n, i, o) {
if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
if (e > i || e < o) throw new RangeError('"value" argument is out of bounds');
if (r + n > t.length) throw new RangeError("Index out of range");
}
function M(t, e, r, n, i) {
W(e, n, i, t, r, 7);
let o = Number(e & BigInt(4294967295));
t[r++] = o, o >>= 8, t[r++] = o, o >>= 8, t[r++] = o, o >>= 8, t[r++] = o;
let s = Number(e >> BigInt(32) & BigInt(4294967295));
return t[r++] = s, s >>= 8, t[r++] = s, s >>= 8, t[r++] = s, s >>= 8, t[r++] = s, 
r;
}
function N(t, e, r, n, i) {
W(e, n, i, t, r, 7);
let o = Number(e & BigInt(4294967295));
t[r + 7] = o, o >>= 8, t[r + 6] = o, o >>= 8, t[r + 5] = o, o >>= 8, t[r + 4] = o;
let s = Number(e >> BigInt(32) & BigInt(4294967295));
return t[r + 3] = s, s >>= 8, t[r + 2] = s, s >>= 8, t[r + 1] = s, s >>= 8, t[r] = s, 
r + 8;
}
function F(t, e, r, n, i, o) {
if (r + n > t.length) throw new RangeError("Index out of range");
if (r < 0) throw new RangeError("Index out of range");
}
function U(t, e, r, n, o) {
return e = +e, r >>>= 0, o || F(t, 0, r, 4), i.write(t, e, r, n, 23, 4), r + 4;
}
function P(t, e, r, n, o) {
return e = +e, r >>>= 0, o || F(t, 0, r, 8), i.write(t, e, r, n, 52, 8), r + 8;
}
u.prototype.slice = function(t, e) {
const r = this.length;
(t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), 
e < t && (e = t);
const n = this.subarray(t, e);
return Object.setPrototypeOf(n, u.prototype), n;
}, u.prototype.readUintLE = u.prototype.readUIntLE = function(t, e, r) {
t >>>= 0, e >>>= 0, r || L(t, e, this.length);
let n = this[t], i = 1, o = 0;
for (;++o < e && (i *= 256); ) n += this[t + o] * i;
return n;
}, u.prototype.readUintBE = u.prototype.readUIntBE = function(t, e, r) {
t >>>= 0, e >>>= 0, r || L(t, e, this.length);
let n = this[t + --e], i = 1;
for (;e > 0 && (i *= 256); ) n += this[t + --e] * i;
return n;
}, u.prototype.readUint8 = u.prototype.readUInt8 = function(t, e) {
return t >>>= 0, e || L(t, 1, this.length), this[t];
}, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(t, e) {
return t >>>= 0, e || L(t, 2, this.length), this[t] | this[t + 1] << 8;
}, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(t, e) {
return t >>>= 0, e || L(t, 2, this.length), this[t] << 8 | this[t + 1];
}, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(t, e) {
return t >>>= 0, e || L(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3];
}, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(t, e) {
return t >>>= 0, e || L(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]);
}, u.prototype.readBigUInt64LE = Z(function(t) {
q(t >>>= 0, "offset");
const e = this[t], r = this[t + 7];
void 0 !== e && void 0 !== r || G(t, this.length - 8);
const n = e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24, i = this[++t] + 256 * this[++t] + 65536 * this[++t] + r * 2 ** 24;
return BigInt(n) + (BigInt(i) << BigInt(32));
}), u.prototype.readBigUInt64BE = Z(function(t) {
q(t >>>= 0, "offset");
const e = this[t], r = this[t + 7];
void 0 !== e && void 0 !== r || G(t, this.length - 8);
const n = e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t], i = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r;
return (BigInt(n) << BigInt(32)) + BigInt(i);
}), u.prototype.readIntLE = function(t, e, r) {
t >>>= 0, e >>>= 0, r || L(t, e, this.length);
let n = this[t], i = 1, o = 0;
for (;++o < e && (i *= 256); ) n += this[t + o] * i;
return i *= 128, n >= i && (n -= Math.pow(2, 8 * e)), n;
}, u.prototype.readIntBE = function(t, e, r) {
t >>>= 0, e >>>= 0, r || L(t, e, this.length);
let n = e, i = 1, o = this[t + --n];
for (;n > 0 && (i *= 256); ) o += this[t + --n] * i;
return i *= 128, o >= i && (o -= Math.pow(2, 8 * e)), o;
}, u.prototype.readInt8 = function(t, e) {
return t >>>= 0, e || L(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t];
}, u.prototype.readInt16LE = function(t, e) {
t >>>= 0, e || L(t, 2, this.length);
const r = this[t] | this[t + 1] << 8;
return 32768 & r ? 4294901760 | r : r;
}, u.prototype.readInt16BE = function(t, e) {
t >>>= 0, e || L(t, 2, this.length);
const r = this[t + 1] | this[t] << 8;
return 32768 & r ? 4294901760 | r : r;
}, u.prototype.readInt32LE = function(t, e) {
return t >>>= 0, e || L(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24;
}, u.prototype.readInt32BE = function(t, e) {
return t >>>= 0, e || L(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3];
}, u.prototype.readBigInt64LE = Z(function(t) {
q(t >>>= 0, "offset");
const e = this[t], r = this[t + 7];
void 0 !== e && void 0 !== r || G(t, this.length - 8);
const n = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24);
return (BigInt(n) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24);
}), u.prototype.readBigInt64BE = Z(function(t) {
q(t >>>= 0, "offset");
const e = this[t], r = this[t + 7];
void 0 !== e && void 0 !== r || G(t, this.length - 8);
const n = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
return (BigInt(n) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r);
}), u.prototype.readFloatLE = function(t, e) {
return t >>>= 0, e || L(t, 4, this.length), i.read(this, t, !0, 23, 4);
}, u.prototype.readFloatBE = function(t, e) {
return t >>>= 0, e || L(t, 4, this.length), i.read(this, t, !1, 23, 4);
}, u.prototype.readDoubleLE = function(t, e) {
return t >>>= 0, e || L(t, 8, this.length), i.read(this, t, !0, 52, 8);
}, u.prototype.readDoubleBE = function(t, e) {
return t >>>= 0, e || L(t, 8, this.length), i.read(this, t, !1, 52, 8);
}, u.prototype.writeUintLE = u.prototype.writeUIntLE = function(t, e, r, n) {
if (t = +t, e >>>= 0, r >>>= 0, !n) {
B(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
}
let i = 1, o = 0;
for (this[e] = 255 & t; ++o < r && (i *= 256); ) this[e + o] = t / i & 255;
return e + r;
}, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(t, e, r, n) {
if (t = +t, e >>>= 0, r >>>= 0, !n) {
B(this, t, e, r, Math.pow(2, 8 * r) - 1, 0);
}
let i = r - 1, o = 1;
for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); ) this[e + i] = t / o & 255;
return e + r;
}, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(t, e, r) {
return t = +t, e >>>= 0, r || B(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1;
}, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(t, e, r) {
return t = +t, e >>>= 0, r || B(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, 
e + 2;
}, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(t, e, r) {
return t = +t, e >>>= 0, r || B(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, 
e + 2;
}, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(t, e, r) {
return t = +t, e >>>= 0, r || B(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, 
this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4;
}, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(t, e, r) {
return t = +t, e >>>= 0, r || B(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, 
this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4;
}, u.prototype.writeBigUInt64LE = Z(function(t, e = 0) {
return M(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
}), u.prototype.writeBigUInt64BE = Z(function(t, e = 0) {
return N(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"));
}), u.prototype.writeIntLE = function(t, e, r, n) {
if (t = +t, e >>>= 0, !n) {
const n = Math.pow(2, 8 * r - 1);
B(this, t, e, r, n - 1, -n);
}
let i = 0, o = 1, s = 0;
for (this[e] = 255 & t; ++i < r && (o *= 256); ) t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1), 
this[e + i] = (t / o | 0) - s & 255;
return e + r;
}, u.prototype.writeIntBE = function(t, e, r, n) {
if (t = +t, e >>>= 0, !n) {
const n = Math.pow(2, 8 * r - 1);
B(this, t, e, r, n - 1, -n);
}
let i = r - 1, o = 1, s = 0;
for (this[e + i] = 255 & t; --i >= 0 && (o *= 256); ) t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1), 
this[e + i] = (t / o | 0) - s & 255;
return e + r;
}, u.prototype.writeInt8 = function(t, e, r) {
return t = +t, e >>>= 0, r || B(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), 
this[e] = 255 & t, e + 1;
}, u.prototype.writeInt16LE = function(t, e, r) {
return t = +t, e >>>= 0, r || B(this, t, e, 2, 32767, -32768), this[e] = 255 & t, 
this[e + 1] = t >>> 8, e + 2;
}, u.prototype.writeInt16BE = function(t, e, r) {
return t = +t, e >>>= 0, r || B(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, 
this[e + 1] = 255 & t, e + 2;
}, u.prototype.writeInt32LE = function(t, e, r) {
return t = +t, e >>>= 0, r || B(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, 
this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4;
}, u.prototype.writeInt32BE = function(t, e, r) {
return t = +t, e >>>= 0, r || B(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), 
this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, 
e + 4;
}, u.prototype.writeBigInt64LE = Z(function(t, e = 0) {
return M(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
}), u.prototype.writeBigInt64BE = Z(function(t, e = 0) {
return N(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
}), u.prototype.writeFloatLE = function(t, e, r) {
return U(this, t, e, !0, r);
}, u.prototype.writeFloatBE = function(t, e, r) {
return U(this, t, e, !1, r);
}, u.prototype.writeDoubleLE = function(t, e, r) {
return P(this, t, e, !0, r);
}, u.prototype.writeDoubleBE = function(t, e, r) {
return P(this, t, e, !1, r);
}, u.prototype.copy = function(t, e, r, n) {
if (!u.isBuffer(t)) throw new TypeError("argument should be a Buffer");
if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), 
e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0;
if (0 === t.length || 0 === this.length) return 0;
if (e < 0) throw new RangeError("targetStart out of bounds");
if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
if (n < 0) throw new RangeError("sourceEnd out of bounds");
n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
const i = n - r;
return this === t && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, r, n) : Uint8Array.prototype.set.call(t, this.subarray(r, n), e), 
i;
}, u.prototype.fill = function(t, e, r, n) {
if ("string" == typeof t) {
if ("string" == typeof e ? (n = e, e = 0, r = this.length) : "string" == typeof r && (n = r, 
r = this.length), void 0 !== n && "string" != typeof n) throw new TypeError("encoding must be a string");
if ("string" == typeof n && !u.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
if (1 === t.length) {
const e = t.charCodeAt(0);
("utf8" === n && e < 128 || "latin1" === n) && (t = e);
}
} else "number" == typeof t ? t &= 255 : "boolean" == typeof t && (t = Number(t));
if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
if (r <= e) return this;
let i;
if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" == typeof t) for (i = e; i < r; ++i) this[i] = t; else {
const o = u.isBuffer(t) ? t : u.from(t, n), s = o.length;
if (0 === s) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
for (i = 0; i < r - e; ++i) this[i + e] = o[i % s];
}
return this;
};
const j = {};
function D(t, e, r) {
j[t] = class extends r {
constructor() {
super(), Object.defineProperty(this, "message", {
value: e.apply(this, arguments),
writable: !0,
configurable: !0
}), this.name = `${this.name} [${t}]`, this.stack, delete this.name;
}
get code() {
return t;
}
set code(t) {
Object.defineProperty(this, "code", {
configurable: !0,
enumerable: !0,
value: t,
writable: !0
});
}
toString() {
return `${this.name} [${t}]: ${this.message}`;
}
};
}
function z(t) {
let e = "", r = t.length;
const n = "-" === t[0] ? 1 : 0;
for (;r >= n + 4; r -= 3) e = `_${t.slice(r - 3, r)}${e}`;
return `${t.slice(0, r)}${e}`;
}
function W(t, e, r, n, i, o) {
if (t > r || t < e) {
const n = "bigint" == typeof e ? "n" : "";
let i;
throw i = o > 3 ? 0 === e || e === BigInt(0) ? `>= 0${n} and < 2${n} ** ${8 * (o + 1)}${n}` : `>= -(2${n} ** ${8 * (o + 1) - 1}${n}) and < 2 ** ${8 * (o + 1) - 1}${n}` : `>= ${e}${n} and <= ${r}${n}`, 
new j.ERR_OUT_OF_RANGE("value", i, t);
}
!function(t, e, r) {
q(e, "offset"), void 0 !== t[e] && void 0 !== t[e + r] || G(e, t.length - (r + 1));
}(n, i, o);
}
function q(t, e) {
if ("number" != typeof t) throw new j.ERR_INVALID_ARG_TYPE(e, "number", t);
}
function G(t, e, r) {
if (Math.floor(t) !== t) throw q(t, r), new j.ERR_OUT_OF_RANGE(r || "offset", "an integer", t);
if (e < 0) throw new j.ERR_BUFFER_OUT_OF_BOUNDS;
throw new j.ERR_OUT_OF_RANGE(r || "offset", `>= ${r ? 1 : 0} and <= ${e}`, t);
}
D("ERR_BUFFER_OUT_OF_BOUNDS", function(t) {
return t ? `${t} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
}, RangeError), D("ERR_INVALID_ARG_TYPE", function(t, e) {
return `The "${t}" argument must be of type number. Received type ${typeof e}`;
}, TypeError), D("ERR_OUT_OF_RANGE", function(t, e, r) {
let n = `The value of "${t}" is out of range.`, i = r;
return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? i = z(String(r)) : "bigint" == typeof r && (i = String(r), 
(r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (i = z(i)), i += "n"), 
n += ` It must be ${e}. Received ${i}`, n;
}, RangeError);
const $ = /[^+/0-9A-Za-z-_]/g;
function H(t, e) {
let r;
e = e || 1 / 0;
const n = t.length;
let i = null;
const o = [];
for (let s = 0; s < n; ++s) {
if (r = t.charCodeAt(s), r > 55295 && r < 57344) {
if (!i) {
if (r > 56319) {
(e -= 3) > -1 && o.push(239, 191, 189);
continue;
}
if (s + 1 === n) {
(e -= 3) > -1 && o.push(239, 191, 189);
continue;
}
i = r;
continue;
}
if (r < 56320) {
(e -= 3) > -1 && o.push(239, 191, 189), i = r;
continue;
}
r = 65536 + (i - 55296 << 10 | r - 56320);
} else i && (e -= 3) > -1 && o.push(239, 191, 189);
if (i = null, r < 128) {
if ((e -= 1) < 0) break;
o.push(r);
} else if (r < 2048) {
if ((e -= 2) < 0) break;
o.push(r >> 6 | 192, 63 & r | 128);
} else if (r < 65536) {
if ((e -= 3) < 0) break;
o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128);
} else {
if (!(r < 1114112)) throw new Error("Invalid code point");
if ((e -= 4) < 0) break;
o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128);
}
}
return o;
}
function Y(t) {
return n.toByteArray(function(t) {
if ((t = (t = t.split("=")[0]).trim().replace($, "")).length < 2) return "";
for (;t.length % 4 != 0; ) t += "=";
return t;
}(t));
}
function V(t, e, r, n) {
let i;
for (i = 0; i < n && !(i + r >= e.length || i >= t.length); ++i) e[i + r] = t[i];
return i;
}
function K(t, e) {
return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name;
}
function X(t) {
return t != t;
}
const J = function() {
const t = "0123456789abcdef", e = new Array(256);
for (let r = 0; r < 16; ++r) {
const n = 16 * r;
for (let i = 0; i < 16; ++i) e[n + i] = t[r] + t[i];
}
return e;
}();
function Z(t) {
return "undefined" == typeof BigInt ? Q : t;
}
function Q() {
throw new Error("BigInt not supported");
}
},
24158(t, e, r) {
"use strict";
var n = r(82950).Buffer, i = n.isEncoding || function(t) {
switch ((t = "" + t) && t.toLowerCase()) {
case "hex":
case "utf8":
case "utf-8":
case "ascii":
case "binary":
case "base64":
case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
case "raw":
return !0;

default:
return !1;
}
};
function o(t) {
var e;
switch (this.encoding = function(t) {
var e = function(t) {
if (!t) return "utf8";
for (var e; ;) switch (t) {
case "utf8":
case "utf-8":
return "utf8";

case "ucs2":
case "ucs-2":
case "utf16le":
case "utf-16le":
return "utf16le";

case "latin1":
case "binary":
return "latin1";

case "base64":
case "ascii":
case "hex":
return t;

default:
if (e) return;
t = ("" + t).toLowerCase(), e = !0;
}
}(t);
if ("string" != typeof e && (n.isEncoding === i || !i(t))) throw new Error("Unknown encoding: " + t);
return e || t;
}(t), this.encoding) {
case "utf16le":
this.text = u, this.end = h, e = 4;
break;

case "utf8":
this.fillLast = a, e = 4;
break;

case "base64":
this.text = l, this.end = f, e = 3;
break;

default:
return this.write = c, void (this.end = d);
}
this.lastNeed = 0, this.lastTotal = 0, this.lastChar = n.allocUnsafe(e);
}
function s(t) {
return t <= 127 ? 0 : t >> 5 == 6 ? 2 : t >> 4 == 14 ? 3 : t >> 3 == 30 ? 4 : t >> 6 == 2 ? -1 : -2;
}
function a(t) {
var e = this.lastTotal - this.lastNeed, r = function(t, e) {
if (128 != (192 & e[0])) return t.lastNeed = 0, "�";
if (t.lastNeed > 1 && e.length > 1) {
if (128 != (192 & e[1])) return t.lastNeed = 1, "�";
if (t.lastNeed > 2 && e.length > 2 && 128 != (192 & e[2])) return t.lastNeed = 2, 
"�";
}
}(this, t);
return void 0 !== r ? r : this.lastNeed <= t.length ? (t.copy(this.lastChar, e, 0, this.lastNeed), 
this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (t.copy(this.lastChar, e, 0, t.length), 
void (this.lastNeed -= t.length));
}
function u(t, e) {
if ((t.length - e) % 2 == 0) {
var r = t.toString("utf16le", e);
if (r) {
var n = r.charCodeAt(r.length - 1);
if (n >= 55296 && n <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = t[t.length - 2], 
this.lastChar[1] = t[t.length - 1], r.slice(0, -1);
}
return r;
}
return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = t[t.length - 1], 
t.toString("utf16le", e, t.length - 1);
}
function h(t) {
var e = t && t.length ? this.write(t) : "";
if (this.lastNeed) {
var r = this.lastTotal - this.lastNeed;
return e + this.lastChar.toString("utf16le", 0, r);
}
return e;
}
function l(t, e) {
var r = (t.length - e) % 3;
return 0 === r ? t.toString("base64", e) : (this.lastNeed = 3 - r, this.lastTotal = 3, 
1 === r ? this.lastChar[0] = t[t.length - 1] : (this.lastChar[0] = t[t.length - 2], 
this.lastChar[1] = t[t.length - 1]), t.toString("base64", e, t.length - r));
}
function f(t) {
var e = t && t.length ? this.write(t) : "";
return this.lastNeed ? e + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : e;
}
function c(t) {
return t.toString(this.encoding);
}
function d(t) {
return t && t.length ? this.write(t) : "";
}
e.a = o, o.prototype.write = function(t) {
if (0 === t.length) return "";
var e, r;
if (this.lastNeed) {
if (void 0 === (e = this.fillLast(t))) return "";
r = this.lastNeed, this.lastNeed = 0;
} else r = 0;
return r < t.length ? e ? e + this.text(t, r) : this.text(t, r) : e || "";
}, o.prototype.end = function(t) {
var e = t && t.length ? this.write(t) : "";
return this.lastNeed ? e + "�" : e;
}, o.prototype.text = function(t, e) {
var r = function(t, e, r) {
var n = e.length - 1;
if (n < r) return 0;
var i = s(e[n]);
if (i >= 0) return i > 0 && (t.lastNeed = i - 1), i;
if (--n < r || -2 === i) return 0;
if (i = s(e[n]), i >= 0) return i > 0 && (t.lastNeed = i - 2), i;
if (--n < r || -2 === i) return 0;
if (i = s(e[n]), i >= 0) return i > 0 && (2 === i ? i = 0 : t.lastNeed = i - 3), 
i;
return 0;
}(this, t, e);
if (!this.lastNeed) return t.toString("utf8", e);
this.lastTotal = r;
var n = t.length - (r - this.lastNeed);
return t.copy(this.lastChar, 0, n), t.toString("utf8", e, n);
}, o.prototype.fillLast = function(t) {
if (this.lastNeed <= t.length) return t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), 
this.lastChar.toString(this.encoding, 0, this.lastTotal);
t.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, t.length), this.lastNeed -= t.length;
};
},
6830(t, e, r) {
function n(t) {
try {
if (!r.g.localStorage) return !1;
} catch (t) {
return !1;
}
var e = r.g.localStorage[t];
return null != e && "true" === String(e).toLowerCase();
}
t.exports = function(t, e) {
if (n("noDeprecation")) return t;
var r = !1;
return function() {
if (!r) {
if (n("throwDeprecation")) throw new Error(e);
n("traceDeprecation") ? console.trace(e) : console.warn(e), r = !0;
}
return t.apply(this, arguments);
};
};
},
27923(t, e, r) {
"use strict";
r.d(e, {
a: () => g,
b: () => y
});
var n = r(62904);
const i = ((t, e, r, n) => i => {
const o = e(i);
return e => {
const i = t(e);
e.addEventListener("message", ({data: t}) => {
const {id: e} = t;
if (null !== e && i.has(e)) {
const {reject: r, resolve: n} = i.get(e);
i.delete(e), void 0 === t.error ? n(t.result) : r(new Error(t.error.message));
}
}), n(e) && e.start();
const s = (t, n = null, o = []) => new Promise((s, a) => {
const u = r(i);
i.set(u, {
reject: a,
resolve: s
}), null === n ? e.postMessage({
id: u,
method: t
}, o) : e.postMessage({
id: u,
method: t,
params: n
}, o);
}), a = (t, r, n = []) => {
e.postMessage({
id: null,
method: t,
params: r
}, n);
};
let u = {};
for (const [t, e] of Object.entries(o)) u = {
...u,
[t]: e({
call: s,
notify: a
})
};
return {
...u
};
};
})((s = new WeakMap, t => {
if (s.has(t)) return s.get(t);
const e = new Map;
return s.set(t, e), e;
}), (o = new WeakMap, t => ({
...t,
connect: ({call: t}) => async () => {
const {port1: e, port2: r} = new MessageChannel, n = await t("connect", {
port: e
}, [ e ]);
return o.set(r, n), r;
},
disconnect: ({call: t}) => async e => {
const r = o.get(e);
if (void 0 === r) throw new Error("The given port is not connected.");
await t("disconnect", {
portId: r
});
},
isSupported: ({call: t}) => () => t("isSupported")
})), n.generateUniqueNumber, t => "function" == typeof t.start);
var o, s;
const a = new Map([ [ 0, null ] ]), u = new Map([ [ 0, null ] ]), h = (t => e => r => {
"symbol" == typeof t.get(r) && (t.set(r, null), e(r).then(() => {
t.delete(r);
}));
})(a), l = (t => e => r => {
"symbol" == typeof t.get(r) && (t.set(r, null), e(r).then(() => {
t.delete(r);
}));
})(u), f = ((t, e) => r => (n, i = 0, ...o) => {
const s = Symbol(), a = t(e);
e.set(a, s);
const u = () => r(i, a).then(() => {
const t = e.get(a);
if (void 0 === t) throw new Error("The timer is in an undefined state.");
t === s && (n(...o), e.get(a) === s && u());
});
return u(), a;
})(n.generateUniqueNumber, a), c = ((t, e) => r => (n, i = 0, ...o) => {
const s = Symbol(), a = t(e);
return e.set(a, s), r(i, a).then(() => {
const t = e.get(a);
if (void 0 === t) throw new Error("The timer is in an undefined state.");
t === s && (e.delete(a), n(...o));
}), a;
})(n.generateUniqueNumber, u), d = i({
clearInterval: ({call: t}) => h(e => t("clear", {
timerId: e,
timerType: "interval"
})),
clearTimeout: ({call: t}) => l(e => t("clear", {
timerId: e,
timerType: "timeout"
})),
setInterval: ({call: t}) => f((e, r) => t("set", {
delay: e,
now: performance.timeOrigin + performance.now(),
timerId: r,
timerType: "interval"
})),
setTimeout: ({call: t}) => c((e, r) => t("set", {
delay: e,
now: performance.timeOrigin + performance.now(),
timerId: r,
timerType: "timeout"
}))
}), p = ((t, e) => {
let r = null;
return () => {
if (null !== r) return r;
const n = new Blob([ e ], {
type: "application/javascript; charset=utf-8"
}), i = URL.createObjectURL(n);
return r = t(i), setTimeout(() => URL.revokeObjectURL(i)), r;
};
})(t => {
const e = new Worker(t);
return d(e);
}, '(()=>{var e={455(e,t){!function(e){"use strict";var t=function(e){return function(t){var r=e(t);return t.add(r),r}},r=function(e){return function(t,r){return e.set(t,r),r}},n=void 0===Number.MAX_SAFE_INTEGER?9007199254740991:Number.MAX_SAFE_INTEGER,o=536870912,s=2*o,a=function(e,t){return function(r){var a=t.get(r),i=void 0===a?r.size:a<s?a+1:0;if(!r.has(i))return e(r,i);if(r.size<o){for(;r.has(i);)i=Math.floor(Math.random()*s);return e(r,i)}if(r.size>n)throw new Error("Congratulations, you created a collection of unique numbers which uses all available integers!");for(;r.has(i);)i=Math.floor(Math.random()*n);return e(r,i)}},i=new WeakMap,u=r(i),c=a(u,i),l=t(c);e.addUniqueNumber=l,e.generateUniqueNumber=c}(t)}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var s=t[n]={exports:{}};return e[n].call(s.exports,s,s.exports,r),s.exports}(()=>{"use strict";const e=-32603,t=-32602,n=-32601,o=(e,t)=>Object.assign(new Error(e),{status:t}),s=t=>o(\'The handler of the method called "\'.concat(t,\'" returned an unexpected result.\'),e),a=(t,r)=>async({data:{id:a,method:i,params:u}})=>{const c=r[i];try{if(void 0===c)throw(e=>o(\'The requested method called "\'.concat(e,\'" is not supported.\'),n))(i);const r=void 0===u?c():c(u);if(void 0===r)throw(t=>o(\'The handler of the method called "\'.concat(t,\'" returned no required result.\'),e))(i);const l=r instanceof Promise?await r:r;if(null===a){if(void 0!==l.result)throw s(i)}else{if(void 0===l.result)throw s(i);const{result:e,transferables:r=[]}=l;t.postMessage({id:a,result:e},r)}}catch(e){const{message:r,status:n=-32603}=e;t.postMessage({error:{code:n,message:r},id:a})}};var i=r(455);const u=new Map,c=(e,r,n)=>({...r,connect:({port:t})=>{t.start();const n=e(t,r),o=(0,i.generateUniqueNumber)(u);return u.set(o,()=>{n(),t.close(),u.delete(o)}),{result:o}},disconnect:({portId:e})=>{const r=u.get(e);if(void 0===r)throw(e=>o(\'The specified parameter called "portId" with the given value "\'.concat(e,\'" does not identify a port connected to this worker.\'),t))(e);return r(),{result:null}},isSupported:async()=>{if(await new Promise(e=>{const t=new ArrayBuffer(0),{port1:r,port2:n}=new MessageChannel;r.onmessage=({data:t})=>e(null!==t),n.postMessage(t,[t])})){const e=n();return{result:e instanceof Promise?await e:e}}return{result:!1}}}),l=(e,t,r=()=>!0)=>{const n=c(l,t,r),o=a(e,n);return e.addEventListener("message",o),()=>e.removeEventListener("message",o)},d=(e,t)=>r=>{const n=t.get(r);if(void 0===n)return Promise.resolve(!1);const[o,s]=n;return e(o),t.delete(r),s(!1),Promise.resolve(!0)},m=(e,t,r,n)=>(o,s,a)=>{const i=o+s-t.timeOrigin,u=i-t.now();return new Promise(t=>{e.set(a,[r(n,u,i,e,t,a),t])})},f=new Map,h=d(globalThis.clearTimeout,f),p=new Map,v=d(globalThis.clearTimeout,p),w=((e,t)=>{const r=(n,o,s,a)=>{const i=n-e.now();i>0?o.set(a,[t(r,i,n,o,s,a),s]):(o.delete(a),s(!0))};return r})(performance,globalThis.setTimeout),g=m(f,performance,globalThis.setTimeout,w),T=m(p,performance,globalThis.setTimeout,w);l(self,{clear:async({timerId:e,timerType:t})=>({result:await("interval"===t?h(e):v(e))}),set:async({delay:e,now:t,timerId:r,timerType:n})=>({result:await("interval"===n?g:T)(e,t,r)})})})()})();'), g = t => p().clearTimeout(t), y = (...t) => p().setTimeout(...t);
},
52063(t, e, r) {
"use strict";
function n(t, e) {
(null == e || e > t.length) && (e = t.length);
for (var r = 0, n = Array(e); r < e; r++) n[r] = t[r];
return n;
}
r.d(e, {
a: () => n
});
},
86829(t, e, r) {
"use strict";
r.d(e, {
a: () => i
});
var n = r(97864);
function i(t, e, r) {
return (e = (0, n.a)(e)) in t ? Object.defineProperty(t, e, {
value: r,
enumerable: !0,
configurable: !0,
writable: !0
}) : t[e] = r, t;
}
},
17939(t, e, r) {
"use strict";
r.d(e, {
a: () => i
});
var n = r(49666);
function i(t, e) {
return function(t) {
if (Array.isArray(t)) return t;
}(t) || function(t, e) {
var r = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
if (null != r) {
var n, i, o, s, a = [], u = !0, h = !1;
try {
if (o = (r = r.call(t)).next, 0 === e) {
if (Object(r) !== r) return;
u = !1;
} else for (;!(u = (n = o.call(r)).done) && (a.push(n.value), a.length !== e); u = !0) ;
} catch (t) {
h = !0, i = t;
} finally {
try {
if (!u && null != r.return && (s = r.return(), Object(s) !== s)) return;
} finally {
if (h) throw i;
}
}
return a;
}
}(t, e) || (0, n.a)(t, e) || function() {
throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}();
}
},
67509(t, e, r) {
"use strict";
r.d(e, {
a: () => i
});
var n = r(33674);
function i(t, e) {
if ("object" != (0, n.a)(t) || !t) return t;
var r = t[Symbol.toPrimitive];
if (void 0 !== r) {
var i = r.call(t, e || "default");
if ("object" != (0, n.a)(i)) return i;
throw new TypeError("@@toPrimitive must return a primitive value.");
}
return ("string" === e ? String : Number)(t);
}
},
97864(t, e, r) {
"use strict";
r.d(e, {
a: () => o
});
var n = r(33674), i = r(67509);
function o(t) {
var e = (0, i.a)(t, "string");
return "symbol" == (0, n.a)(e) ? e : e + "";
}
},
33674(t, e, r) {
"use strict";
function n(t) {
return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
return typeof t;
} : function(t) {
return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
}, n(t);
}
r.d(e, {
a: () => n
});
},
49666(t, e, r) {
"use strict";
r.d(e, {
a: () => i
});
var n = r(52063);
function i(t, e) {
if (t) {
if ("string" == typeof t) return (0, n.a)(t, e);
var r = {}.toString.call(t).slice(8, -1);
return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? (0, 
n.a)(t, e) : void 0;
}
}
}
} ]);