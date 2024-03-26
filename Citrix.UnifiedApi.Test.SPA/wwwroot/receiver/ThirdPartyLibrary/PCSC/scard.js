(function() {
    var d, h = this;
    function k(a) {
        return void 0 !== a
    }
    function aa() {}
    function ba(a) {
        var b = typeof a;
        if ("object" == b)
            if (a) {
                if (a instanceof Array)
                    return "array";
                if (a instanceof Object)
                    return b;
                var c = Object.prototype.toString.call(a);
                if ("[object Window]" == c)
                    return "object";
                if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice"))
                    return "array";
                if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call"))
                    return "function"
            } else
                return "null";
        else if ("function" == b && "undefined" == typeof a.call)
            return "object";
        return b
    }
    function m(a) {
        return "string" == typeof a
    }
    function ca(a) {
        return "function" == ba(a)
    }
    function n(a) {
        var b = typeof a;
        return "object" == b && null  != a || "function" == b
    }
    var da = "closure_uid_" + (1E9 * Math.random() >>> 0)
      , ea = 0;
    function fa(a, b, c) {
        return a.call.apply(a.bind, arguments)
    }
    function ga(a, b, c) {
        if (!a)
            throw Error();
        if (2 < arguments.length) {
            var e = Array.prototype.slice.call(arguments, 2);
            return function() {
                var c = Array.prototype.slice.call(arguments);
                Array.prototype.unshift.apply(c, e);
                return a.apply(b, c)
            }
        }
        return function() {
            return a.apply(b, arguments)
        }
    }
    function q(a, b, c) {
        q = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? fa : ga;
        return q.apply(null , arguments)
    }
    function ha(a, b) {
        var c = Array.prototype.slice.call(arguments, 1);
        return function() {
            var b = c.slice();
            b.push.apply(b, arguments);
            return a.apply(this, b)
        }
    }
    var ia = Date.now || function() {
        return +new Date
    }
    ;
    function r(a, b) {
        var c = a.split(".")
          , e = h;
        c[0] in e || !e.execScript || e.execScript("var " + c[0]);
        for (var f; c.length && (f = c.shift()); )
            !c.length && k(b) ? e[f] = b : e[f] ? e = e[f] : e = e[f] = {}
    }
    function t(a, b) {
        function c() {}
        c.prototype = b.prototype;
        a.A = b.prototype;
        a.prototype = new c;
        a.prototype.constructor = a;
        a.l = function(a, c, g) {
            for (var l = Array(arguments.length - 2), p = 2; p < arguments.length; p++)
                l[p - 2] = arguments[p];
            b.prototype[c].apply(a, l)
        }
    }
    ;function u(a) {
        if (Error.captureStackTrace)
            Error.captureStackTrace(this, u);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    }
    t(u, Error);
    u.prototype.name = "CustomError";
    function ja(a, b) {
        for (var c = a.split("%s"), e = "", f = Array.prototype.slice.call(arguments, 1); f.length && 1 < c.length; )
            e += c.shift() + f.shift();
        return e + c.join("%s")
    }
    var ka = String.prototype.trim ? function(a) {
        return a.trim()
    }
     : function(a) {
        return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
    }
    ;
    function la(a, b) {
        return a < b ? -1 : a > b ? 1 : 0
    }
    ;function ma(a, b) {
        b.unshift(a);
        u.call(this, ja.apply(null , b));
        b.shift()
    }
    t(ma, u);
    ma.prototype.name = "AssertionError";
    function na(a, b) {
        throw new ma("Failure" + (a ? ": " + a : ""),Array.prototype.slice.call(arguments, 1));
    }
    ;var oa = Array.prototype.indexOf ? function(a, b, c) {
        return Array.prototype.indexOf.call(a, b, c)
    }
     : function(a, b, c) {
        c = null  == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
        if (m(a))
            return m(b) && 1 == b.length ? a.indexOf(b, c) : -1;
        for (; c < a.length; c++)
            if (c in a && a[c] === b)
                return c;
        return -1
    }
      , pa = Array.prototype.forEach ? function(a, b, c) {
        Array.prototype.forEach.call(a, b, c)
    }
     : function(a, b, c) {
        for (var e = a.length, f = m(a) ? a.split("") : a, g = 0; g < e; g++)
            g in f && b.call(c, f[g], g, a)
    }
    ;
    function qa(a, b, c) {
        return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c)
    }
    function ra(a, b) {
        return a > b ? 1 : a < b ? -1 : 0
    }
    ;function sa(a) {
        var b = 0, c;
        for (c in a)
            b++;
        return b
    }
    function v(a, b) {
        return null  !== a && b in a
    }
    ;var ta;
    a: {
        var ua = h.navigator;
        if (ua) {
            var va = ua.userAgent;
            if (va) {
                ta = va;
                break a
            }
        }
        ta = ""
    }
    function w(a) {
        return -1 != ta.indexOf(a)
    }
    ;function wa() {
        this.b = "";
        this.a = null 
    }
    function xa(a) {
        var b = new wa;
        b.b = a;
        b.a = 0
    }
    xa("<!DOCTYPE html>");
    xa("");
    xa("<br>");
    var ya = w("Opera") || w("OPR")
      , za = w("Trident") || w("MSIE")
      , Aa = w("Edge")
      , Da = w("Gecko") && !(-1 != ta.toLowerCase().indexOf("webkit") && !w("Edge")) && !(w("Trident") || w("MSIE")) && !w("Edge")
      , Ea = -1 != ta.toLowerCase().indexOf("webkit") && !w("Edge");
    function Fa() {
        var a = ta;
        if (Da)
            return /rv\:([^\);]+)(\)|;)/.exec(a);
        if (Aa)
            return /Edge\/([\d\.]+)/.exec(a);
        if (za)
            return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Ea)
            return /WebKit\/(\S+)/.exec(a)
    }
    var Ga = function() {
        if (ya && h.opera) {
            var a;
            var b = h.opera.version;
            try {
                a = b()
            } catch (c) {
                a = b
            }
            return a
        }
        a = "";
        (b = Fa()) && (a = b ? b[1] : "");
        return za && (b = (b = h.document) ? b.documentMode : void 0,
        null  != b && b > parseFloat(a)) ? String(b) : a
    }()
      , Ha = {};
    function x(a) {
        var b;
        if (!(b = Ha[a])) {
            b = 0;
            for (var c = ka(String(Ga)).split("."), e = ka(String(a)).split("."), f = Math.max(c.length, e.length), g = 0; 0 == b && g < f; g++) {
                var l = c[g] || ""
                  , p = e[g] || ""
                  , G = RegExp("(\\d*)(\\D*)", "g")
                  , N = RegExp("(\\d*)(\\D*)", "g");
                do {
                    var Ba = G.exec(l) || ["", "", ""]
                      , Ca = N.exec(p) || ["", "", ""];
                    if (0 == Ba[0].length && 0 == Ca[0].length)
                        break;
                    b = la(0 == Ba[1].length ? 0 : parseInt(Ba[1], 10), 0 == Ca[1].length ? 0 : parseInt(Ca[1], 10)) || la(0 == Ba[2].length, 0 == Ca[2].length) || la(Ba[2], Ca[2])
                } while (0 == b)
            }
            b = Ha[a] = 0 <= b
        }
        return b
    }
    ;var Ia = "StopIteration" in h ? h.StopIteration : {
        message: "StopIteration",
        stack: ""
    };
    function Ja() {}
    Ja.prototype.next = function() {
        throw Ia;
    }
    ;
    function Ka() {
        var a = 0
          , b = k(void 0) ? void 0 : 1
          , c = new Ja;
        c.next = function() {
            var c = a;
            a += b;
            return c
        }
        ;
        return c
    }
    ;function La(a, b) {
        this.b = {};
        this.a = [];
        this.c = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2)
                throw Error("Uneven number of arguments");
            for (var e = 0; e < c; e += 2)
                this.set(arguments[e], arguments[e + 1])
        } else if (a) {
            var f;
            if (a instanceof La)
                f = a.H(),
                e = a.M();
            else {
                var c = []
                  , g = 0;
                for (f in a)
                    c[g++] = f;
                f = c;
                c = [];
                g = 0;
                for (e in a)
                    c[g++] = a[e];
                e = c
            }
            for (c = 0; c < f.length; c++)
                this.set(f[c], e[c])
        }
    }
    d = La.prototype;
    d.C = function() {
        return this.c
    }
    ;
    d.M = function() {
        Ma(this);
        for (var a = [], b = 0; b < this.a.length; b++)
            a.push(this.b[this.a[b]]);
        return a
    }
    ;
    d.H = function() {
        Ma(this);
        return this.a.concat()
    }
    ;
    d.clear = function() {
        this.b = {};
        this.c = this.a.length = 0
    }
    ;
    d.remove = function(a) {
        return y(this.b, a) ? (delete this.b[a],
        this.c--,
        this.a.length > 2 * this.c && Ma(this),
        !0) : !1
    }
    ;
    function Ma(a) {
        if (a.c != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length; ) {
                var e = a.a[b];
                y(a.b, e) && (a.a[c++] = e);
                b++
            }
            a.a.length = c
        }
        if (a.c != a.a.length) {
            for (var f = {}, c = b = 0; b < a.a.length; )
                e = a.a[b],
                y(f, e) || (a.a[c++] = e,
                f[e] = 1),
                b++;
            a.a.length = c
        }
    }
    d.get = function(a, b) {
        return y(this.b, a) ? this.b[a] : b
    }
    ;
    d.set = function(a, b) {
        y(this.b, a) || (this.c++,
        this.a.push(a));
        this.b[a] = b
    }
    ;
    d.forEach = function(a, b) {
        for (var c = this.H(), e = 0; e < c.length; e++) {
            var f = c[e]
              , g = this.get(f);
            a.call(b, g, f, this)
        }
    }
    ;
    d.clone = function() {
        return new La(this)
    }
    ;
    function y(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }
    ;function z(a, b, c, e, f) {
        this.reset(a, b, c, e, f)
    }
    z.prototype.g = 0;
    z.prototype.f = null ;
    var Na = 0;
    d = z.prototype;
    d.reset = function(a, b, c, e, f) {
        this.g = "number" == typeof f ? f : Na++;
        this.c = e || ia();
        this.b = a;
        this.h = b;
        this.a = c;
        delete this.f
    }
    ;
    d.qa = function() {
        return this.a
    }
    ;
    d.pa = function() {
        return this.f
    }
    ;
    d.Z = function(a) {
        this.f = a
    }
    ;
    d.Da = function(a) {
        this.a = a
    }
    ;
    d.ua = function() {
        return this.b
    }
    ;
    d.va = function(a) {
        this.b = a
    }
    ;
    d.getMessage = function() {
        return this.h
    }
    ;
    d.Ea = function(a) {
        this.h = a
    }
    ;
    d.ra = function() {
        return this.c
    }
    ;
    d.Fa = function(a) {
        this.c = a
    }
    ;
    d.sa = function() {
        return this.g
    }
    ;
    function A(a) {
        this.b = a;
        this.a = this.g = this.f = this.c = null 
    }
    function B(a, b) {
        this.name = a;
        this.value = b
    }
    B.prototype.toString = function() {
        return this.name
    }
    ;
    var Oa = new B("OFF",Infinity)
      , Pa = new B("SHOUT",1200)
      , Qa = new B("SEVERE",1E3)
      , Ra = new B("WARNING",900)
      , Sa = new B("INFO",800)
      , Ta = new B("CONFIG",700)
      , Ua = new B("FINE",500)
      , Va = new B("FINER",400)
      , Wa = new B("FINEST",300)
      , Xa = new B("ALL",0)
      , Ya = [Oa, Pa, Qa, Ra, Sa, Ta, Ua, Va, Wa, Xa]
      , C = null ;
    function Za() {
        C = {};
        for (var a = 0, b; b = Ya[a]; a++)
            C[b.value] = b,
            C[b.name] = b
    }
    function $a(a) {
        C || Za();
        return C[a] || null 
    }
    function ab(a) {
        h.console && (h.console.timeStamp ? h.console.timeStamp(a) : h.console.markTimeline && h.console.markTimeline(a));
        h.msWriteProfilerMark && h.msWriteProfilerMark(a)
    }
    d = A.prototype;
    d.xa = function() {
        return this.b
    }
    ;
    d.F = function(a) {
        this.a || (this.a = []);
        this.a.push(a)
    }
    ;
    d.Y = function(a) {
        var b = this.a, c;
        if (c = !!b)
            a = oa(b, a),
            (c = 0 <= a) && Array.prototype.splice.call(b, a, 1);
        return c
    }
    ;
    d.ya = function() {
        return this.c
    }
    ;
    d.getChildren = function() {
        this.g || (this.g = {});
        return this.g
    }
    ;
    d.J = function(a) {
        this.f = a
    }
    ;
    d.wa = function() {
        return this.f
    }
    ;
    d.L = function() {
        if (this.f)
            return this.f;
        if (this.c)
            return this.c.L();
        na("Root logger has no level set.");
        return null 
    }
    ;
    d.N = function(a) {
        return a.value >= this.L().value
    }
    ;
    d.log = function(a, b, c) {
        this.N(a) && (ca(b) && (b = b()),
        bb(this, this.V(a, b, c)))
    }
    ;
    d.V = function(a, b, c) {
        a = new z(a,String(b),this.b);
        c && a.Z(c);
        return a
    }
    ;
    d.Ga = function(a, b) {
        this.log(Pa, a, b)
    }
    ;
    d.$ = function(a, b) {
        this.log(Qa, a, b)
    }
    ;
    d.B = function(a, b) {
        this.log(Ra, a, b)
    }
    ;
    d.I = function(a, b) {
        this.log(Sa, a, b)
    }
    ;
    d.ja = function(a, b) {
        this.log(Ta, a, b)
    }
    ;
    d.i = function(a, b) {
        this.log(Ua, a, b)
    }
    ;
    d.na = function(a, b) {
        this.log(Va, a, b)
    }
    ;
    d.w = function(a, b) {
        this.log(Wa, a, b)
    }
    ;
    d.Ba = function(a) {
        this.N(a.b) && bb(this, a)
    }
    ;
    function bb(a, b) {
        ab("log:" + b.getMessage());
        for (var c = a; c; ) {
            var e = c
              , f = b;
            if (e.a)
                for (var g = 0, l = void 0; l = e.a[g]; g++)
                    l(f);
            c = c.c
        }
    }
    var cb = {}
      , db = null ;
    function eb() {
        db || (db = new A(""),
        cb[""] = db,
        db.J(Ta))
    }
    function fb(a) {
        eb();
        var b;
        if (!(b = cb[a])) {
            b = new A(a);
            var c = a.lastIndexOf(".")
              , e = a.substr(c + 1)
              , c = fb(a.substr(0, c));
            c.getChildren()[e] = b;
            b.c = c;
            cb[a] = b
        }
        return b
    }
    ;function gb(a, b) {
        var c = fb(a);
        b && c && c.J(b);
        return c
    }
    function hb(a, b, c) {
        a && a.B(b, c)
    }
    ;function ib(a) {
        this.b = 0;
        this.c = a || 100;
        this.a = []
    }
    d = ib.prototype;
    d.get = function(a) {
        a = jb(this, a);
        return this.a[a]
    }
    ;
    d.set = function(a, b) {
        a = jb(this, a);
        this.a[a] = b
    }
    ;
    d.C = function() {
        return this.a.length
    }
    ;
    d.clear = function() {
        this.b = this.a.length = 0
    }
    ;
    d.M = function() {
        for (var a = this.C(), b = [], c = this.C() - this.C(); c < a; c++)
            b.push(this.get(c));
        return b
    }
    ;
    d.H = function() {
        for (var a = [], b = this.C(), c = 0; c < b; c++)
            a[c] = c;
        return a
    }
    ;
    function jb(a, b) {
        if (b >= a.a.length)
            throw Error("Out of bounds exception");
        return a.a.length < a.c ? b : (a.b + Number(b)) % a.c
    }
    ;function kb() {
        this.a = ia()
    }
    var lb = new kb;
    kb.prototype.set = function(a) {
        this.a = a
    }
    ;
    kb.prototype.reset = function() {
        this.set(ia())
    }
    ;
    kb.prototype.get = function() {
        return this.a
    }
    ;
    function mb(a) {
        this.f = a || "";
        this.g = lb
    }
    mb.prototype.a = !0;
    mb.prototype.b = !0;
    mb.prototype.c = !1;
    function D(a) {
        return 10 > a ? "0" + a : String(a)
    }
    function nb(a, b) {
        var c = (a.c - b) / 1E3
          , e = c.toFixed(3)
          , f = 0;
        if (1 > c)
            f = 2;
        else
            for (; 100 > c; )
                f++,
                c *= 10;
        for (; 0 < f--; )
            e = " " + e;
        return e
    }
    function ob(a) {
        mb.call(this, a)
    }
    t(ob, mb);
    function pb(a, b) {
        this.b = b;
        this.c = a / 2;
        this.a = [];
        this.f = new ib(a - this.c)
    }
    function qb() {}
    pb.prototype.getState = function() {
        var a = this.a
          , b = a.length;
        if (0 < b)
            for (var c = Array(b), e = 0; e < b; e++)
                c[e] = a[e];
        return new qb(this.f.M())
    }
    ;
    pb.prototype.g = function(a) {
        var b = [];
        this.b && b.push(this.b);
        a.a && b.push(a.a);
        b = b.join(".");
        a = new z(a.b,a.getMessage(),b,a.c,a.g);
        this.a.length < this.c ? this.a.push(a) : (b = this.f,
        b.a[b.b] = a,
        b.b = (b.b + 1) % b.c)
    }
    ;
    function rb() {
        this.h = q(this.f, this);
        this.a = new ob;
        this.a.b = !1;
        this.a.c = !1;
        this.b = this.a.a = !1;
        this.c = "";
        this.g = {}
    }
    rb.prototype.f = function(a) {
        if (!this.g[a.a]) {
            var b;
            b = this.a;
            var c = [];
            c.push(b.f, " ");
            if (b.b) {
                var e = new Date(a.c);
                c.push("[", D(e.getFullYear() - 2E3) + D(e.getMonth() + 1) + D(e.getDate()) + " " + D(e.getHours()) + ":" + D(e.getMinutes()) + ":" + D(e.getSeconds()) + "." + D(Math.floor(e.getMilliseconds() / 10)), "] ")
            }
            c.push("[", nb(a, b.g.get()), "s] ");
            c.push("[", a.a, "] ");
            c.push(a.getMessage());
            b.c && (e = a.f) && c.push("\n", e instanceof Error ? e.message : e.toString());
            b.a && c.push("\n");
            b = c.join("");
            if (c = sb)
                switch (a.b) {
                case Pa:
                    tb(c, 
                    "info", b);
                    break;
                case Qa:
                    tb(c, "error", b);
                    break;
                case Ra:
                    tb(c, "warn", b);
                    break;
                default:
                    tb(c, "debug", b)
                }
            else
                this.c += b
        }
    }
    ;
    var sb = h.console;
    function tb(a, b, c) {
        if (a[b])
            a[b](c);
        else
            a.log(c)
    }
    ;var ub = gb("")
      , vb = gb("GoogleSmartCard")
      , wb = !1;
    function xb(a) {
        a = gb(a, void 0);
        yb(a);
        return a
    }
    function zb(a) {
        var b = "GoogleSmartCard";
        a && (b += "." + a);
        return xb(b)
    }
    function yb(a, b, c) {
        a || Ab(b, Array.prototype.slice.call(arguments, 2))
    }
    function E(a, b) {
        b || F(a, void 0, void 0)
    }
    function Ab(a, b) {
        na(a, Array.prototype.slice.call(arguments, 1))
    }
    function F(a, b, c) {
        var e = "Failure in " + a.b;
        k(b) && (e += ": " + ja(b, Array.prototype.slice.call(arguments, 2)));
        na(e)
    }
    if (!wb) {
        var wb = !0
          , Bb = new rb;
        1 != Bb.b && (eb(),
        db.F(Bb.h),
        Bb.b = !0);
        ub.J(Sa);
        vb.i("Logging was set up with level=" + Sa.name + " and enabled logging to JS console");
        var Cb;
        if (v(window, "googleSmartCardLogBuffer"))
            Cb = window.googleSmartCardLogBuffer,
            vb.i("Detected an existing LogBuffer instance, attaching it to the root logger");
        else {
            var Db = ja("<%s:%s>", chrome.runtime.id, document.location.pathname);
            Cb = new pb(1E3,Db);
            window.googleSmartCardLogBuffer = Cb;
            vb.i("Created a new LogBuffer instance, attaching it to the root logger")
        }
        var Eb = 
        Cb;
        ub.F(Eb.g.bind(Eb))
    }
    ;function H(a, b) {
        this.a = [];
        this.b = b;
        for (var c = !0, e = a.length - 1; 0 <= e; e--) {
            var f = a[e] | 0;
            c && f == b || (this.a[e] = f,
            c = !1)
        }
    }
    var Fb = {};
    function Gb(a) {
        if (-128 <= a && 128 > a) {
            var b = Fb[a];
            if (b)
                return b
        }
        b = new H([a | 0],0 > a ? -1 : 0);
        -128 <= a && 128 > a && (Fb[a] = b);
        return b
    }
    function Hb(a) {
        if (isNaN(a) || !isFinite(a))
            return Ib;
        if (0 > a)
            return I(Hb(-a));
        for (var b = [], c = 1, e = 0; a >= c; e++)
            b[e] = a / c | 0,
            c *= Jb;
        return new H(b,0)
    }
    var Jb = 4294967296
      , Ib = Gb(0)
      , Kb = Gb(1)
      , Lb = Gb(16777216);
    function Mb(a) {
        return 0 < a.a.length ? a.a[0] : a.b
    }
    function Nb(a) {
        if (-1 == a.b)
            return -Nb(I(a));
        for (var b = 0, c = 1, e = 0; e < a.a.length; e++)
            var f = J(a, e)
              , b = b + (0 <= f ? f : Jb + f) * c
              , c = c * Jb;
        return b
    }
    H.prototype.toString = function(a) {
        a = a || 10;
        if (2 > a || 36 < a)
            throw Error("radix out of range: " + a);
        if (K(this))
            return "0";
        if (-1 == this.b)
            return "-" + I(this).toString(a);
        for (var b = Hb(Math.pow(a, 6)), c = this, e = ""; ; ) {
            var f = Ob(c, b)
              , g = (Mb(Pb(c, Qb(f, b))) >>> 0).toString(a)
              , c = f;
            if (K(c))
                return g + e;
            for (; 6 > g.length; )
                g = "0" + g;
            e = "" + g + e
        }
    }
    ;
    function J(a, b) {
        return 0 > b ? 0 : b < a.a.length ? a.a[b] : a.b
    }
    function K(a) {
        if (0 != a.b)
            return !1;
        for (var b = 0; b < a.a.length; b++)
            if (0 != a.a[b])
                return !1;
        return !0
    }
    function Rb(a, b) {
        var c = Pb(a, b);
        return -1 == c.b ? -1 : K(c) ? 0 : 1
    }
    function I(a) {
        for (var b = a.a.length, c = [], e = 0; e < b; e++)
            c[e] = ~a.a[e];
        a = new H(c,~a.b);
        return Sb(a, Kb)
    }
    function Sb(a, b) {
        for (var c = Math.max(a.a.length, b.a.length), e = [], f = 0, g = 0; g <= c; g++) {
            var l = f + (J(a, g) & 65535) + (J(b, g) & 65535)
              , p = (l >>> 16) + (J(a, g) >>> 16) + (J(b, g) >>> 16)
              , f = p >>> 16
              , l = l & 65535
              , p = p & 65535;
            e[g] = p << 16 | l
        }
        return new H(e,e[e.length - 1] & -2147483648 ? -1 : 0)
    }
    function Pb(a, b) {
        return Sb(a, I(b))
    }
    function Qb(a, b) {
        if (K(a) || K(b))
            return Ib;
        if (-1 == a.b)
            return -1 == b.b ? Qb(I(a), I(b)) : I(Qb(I(a), b));
        if (-1 == b.b)
            return I(Qb(a, I(b)));
        if (0 > Rb(a, Lb) && 0 > Rb(b, Lb))
            return Hb(Nb(a) * Nb(b));
        for (var c = a.a.length + b.a.length, e = [], f = 0; f < 2 * c; f++)
            e[f] = 0;
        for (f = 0; f < a.a.length; f++)
            for (var g = 0; g < b.a.length; g++) {
                var l = J(a, f) >>> 16
                  , p = J(a, f) & 65535
                  , G = J(b, g) >>> 16
                  , N = J(b, g) & 65535;
                e[2 * f + 2 * g] += p * N;
                Tb(e, 2 * f + 2 * g);
                e[2 * f + 2 * g + 1] += l * N;
                Tb(e, 2 * f + 2 * g + 1);
                e[2 * f + 2 * g + 1] += p * G;
                Tb(e, 2 * f + 2 * g + 1);
                e[2 * f + 2 * g + 2] += l * G;
                Tb(e, 2 * f + 2 * g + 2)
            }
        for (f = 0; f < c; f++)
            e[f] = 
            e[2 * f + 1] << 16 | e[2 * f];
        for (f = c; f < 2 * c; f++)
            e[f] = 0;
        return new H(e,0)
    }
    function Tb(a, b) {
        for (; (a[b] & 65535) != a[b]; )
            a[b + 1] += a[b] >>> 16,
            a[b] &= 65535
    }
    function Ob(a, b) {
        if (K(b))
            throw Error("division by zero");
        if (K(a))
            return Ib;
        if (-1 == a.b)
            return -1 == b.b ? Ob(I(a), I(b)) : I(Ob(I(a), b));
        if (-1 == b.b)
            return I(Ob(a, I(b)));
        if (30 < a.a.length) {
            if (-1 == a.b || -1 == b.b)
                throw Error("slowDivide_ only works with positive integers.");
            for (var c = Kb, e = b; 0 >= Rb(e, a); )
                c = Ub(c),
                e = Ub(e);
            for (var f = Vb(c, 1), g = Vb(e, 1), l, e = Vb(e, 2), c = Vb(c, 2); !K(e); )
                l = Sb(g, e),
                0 >= Rb(l, a) && (f = Sb(f, c),
                g = l),
                e = Vb(e, 1),
                c = Vb(c, 1);
            return f
        }
        c = Ib;
        for (e = a; 0 <= Rb(e, b); ) {
            f = Math.max(1, Math.floor(Nb(e) / Nb(b)));
            g = Math.ceil(Math.log(f) / 
            Math.LN2);
            g = 48 >= g ? 1 : Math.pow(2, g - 48);
            l = Hb(f);
            for (var p = Qb(l, b); -1 == p.b || 0 < Rb(p, e); )
                f -= g,
                l = Hb(f),
                p = Qb(l, b);
            K(l) && (l = Kb);
            c = Sb(c, l);
            e = Pb(e, p)
        }
        return c
    }
    function Ub(a) {
        for (var b = a.a.length + 0 + 1, c = [], e = 0; e < b; e++)
            c[e] = J(a, e - 0) << 1 | J(a, e - 0 - 1) >>> 31;
        return new H(c,a.b)
    }
    function Vb(a, b) {
        for (var c = b >> 5, e = b % 32, f = a.a.length - c, g = [], l = 0; l < f; l++)
            g[l] = 0 < e ? J(a, l + c) >>> e | J(a, l + c + 1) << 32 - e : J(a, l + c);
        return new H(g,a.b)
    }
    ;function L(a) {
        return Mb(Hb(a))
    }
    ;function Wb(a, b, c) {
        this.f = c;
        this.c = a;
        this.g = b;
        this.b = 0;
        this.a = null 
    }
    Wb.prototype.get = function() {
        var a;
        0 < this.b ? (this.b--,
        a = this.a,
        this.a = a.next,
        a.next = null ) : a = this.c();
        return a
    }
    ;
    function Xb(a, b) {
        a.g(b);
        a.b < a.f && (a.b++,
        b.next = a.a,
        a.a = b)
    }
    ;function Yb() {
        this.b = this.a = null 
    }
    var $b = new Wb(function() {
        return new Zb
    }
    ,function(a) {
        a.reset()
    }
    ,100);
    Yb.prototype.remove = function() {
        var a = null ;
        this.a && (a = this.a,
        this.a = this.a.next,
        this.a || (this.b = null ),
        a.next = null );
        return a
    }
    ;
    function Zb() {
        this.next = this.b = this.a = null 
    }
    Zb.prototype.set = function(a, b) {
        this.a = a;
        this.b = b;
        this.next = null 
    }
    ;
    Zb.prototype.reset = function() {
        this.next = this.b = this.a = null 
    }
    ;
    function ac(a) {
        h.setTimeout(function() {
            throw a;
        }, 0)
    }
    function bc(a, b) {
        var c = a;
        b && (c = q(a, b));
        !ca(h.setImmediate) || h.Window && h.Window.prototype && !w("Edge") && h.Window.prototype.setImmediate == h.setImmediate ? (cc || (cc = dc()),
        cc(c)) : h.setImmediate(c)
    }
    var cc;
    function dc() {
        var a = h.MessageChannel;
        "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && !w("Presto") && (a = function() {
            var a = document.createElement("IFRAME");
            a.style.display = "none";
            a.src = "";
            document.documentElement.appendChild(a);
            var b = a.contentWindow
              , a = b.document;
            a.open();
            a.write("");
            a.close();
            var c = "callImmediate" + Math.random()
              , e = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host
              , a = q(function(a) {
                if (("*" == e || a.origin == e) && a.data == 
                c)
                    this.port1.onmessage()
            }, this);
            b.addEventListener("message", a, !1);
            this.port1 = {};
            this.port2 = {
                postMessage: function() {
                    b.postMessage(c, e)
                }
            }
        }
        );
        if ("undefined" !== typeof a && !w("Trident") && !w("MSIE")) {
            var b = new a
              , c = {}
              , e = c;
            b.port1.onmessage = function() {
                if (k(c.next)) {
                    c = c.next;
                    var a = c.U;
                    c.U = null ;
                    a()
                }
            }
            ;
            return function(a) {
                e.next = {
                    U: a
                };
                e = e.next;
                b.port2.postMessage(0)
            }
        }
        return "undefined" !== typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(a) {
            var b = document.createElement("SCRIPT");
            b.onreadystatechange = 
            function() {
                b.onreadystatechange = null ;
                b.parentNode.removeChild(b);
                b = null ;
                a();
                a = null 
            }
            ;
            document.documentElement.appendChild(b)
        }
         : function(a) {
            h.setTimeout(a, 0)
        }
    }
    ;function ec(a, b) {
        fc || gc();
        hc || (fc(),
        hc = !0);
        var c = ic
          , e = $b.get();
        e.set(a, b);
        c.b ? c.b.next = e : c.a = e;
        c.b = e
    }
    var fc;
    function gc() {
        if (h.Promise && h.Promise.resolve) {
            var a = h.Promise.resolve(void 0);
            fc = function() {
                a.then(jc)
            }
        } else
            fc = function() {
                bc(jc)
            }
    }
    var hc = !1
      , ic = new Yb;
    function jc() {
        for (var a = null ; a = ic.remove(); ) {
            try {
                a.a.call(a.b)
            } catch (b) {
                ac(b)
            }
            Xb($b, a)
        }
        hc = !1
    }
    ;function M(a, b) {
        this.a = O;
        this.o = void 0;
        this.f = this.b = this.c = null ;
        this.g = this.h = !1;
        if (a != aa)
            try {
                var c = this;
                a.call(b, function(a) {
                    P(c, kc, a)
                }, function(a) {
                    P(c, Q, a)
                })
            } catch (e) {
                P(this, Q, e)
            }
    }
    var O = 0
      , kc = 2
      , Q = 3;
    function lc() {
        this.next = this.f = this.b = this.g = this.a = null ;
        this.c = !1
    }
    lc.prototype.reset = function() {
        this.f = this.b = this.g = this.a = null ;
        this.c = !1
    }
    ;
    var mc = new Wb(function() {
        return new lc
    }
    ,function(a) {
        a.reset()
    }
    ,100);
    function nc(a, b, c) {
        var e = mc.get();
        e.g = a;
        e.b = b;
        e.f = c;
        return e
    }
    function oc(a) {
        return new M(function(b, c) {
            c(a)
        }
        )
    }
    function pc(a, b, c) {
        qc(a, b, c, null ) || ec(ha(b, a))
    }
    function rc() {
        var a, b, c = new M(function(c, f) {
            a = c;
            b = f
        }
        );
        return new sc(c,a,b)
    }
    M.prototype.then = function(a, b, c) {
        return tc(this, ca(a) ? a : null , ca(b) ? b : null , c)
    }
    ;
    M.prototype.then = M.prototype.then;
    M.prototype.$goog_Thenable = !0;
    d = M.prototype;
    d.aa = function(a, b) {
        var c = nc(a, a, b);
        c.c = !0;
        uc(this, c);
        return this
    }
    ;
    d.Ha = function(a, b) {
        return tc(this, null , a, b)
    }
    ;
    d.ta = function(a) {
        this.a == O && ec(function() {
            var b = new vc(a);
            wc(this, b)
        }, this)
    }
    ;
    function wc(a, b) {
        if (a.a == O)
            if (a.c) {
                var c = a.c;
                if (c.b) {
                    for (var e = 0, f = null , g = null , l = c.b; l && (l.c || (e++,
                    l.a == a && (f = l),
                    !(f && 1 < e))); l = l.next)
                        f || (g = l);
                    f && (c.a == O && 1 == e ? wc(c, b) : (g ? (e = g,
                    e.next == c.f && (c.f = e),
                    e.next = e.next.next) : xc(c),
                    yc(c, f, Q, b)))
                }
                a.c = null 
            } else
                P(a, Q, b)
    }
    function uc(a, b) {
        a.b || a.a != kc && a.a != Q || zc(a);
        a.f ? a.f.next = b : a.b = b;
        a.f = b
    }
    function tc(a, b, c, e) {
        var f = nc(null , null , null );
        f.a = new M(function(a, l) {
            f.g = b ? function(c) {
                try {
                    var f = b.call(e, c);
                    a(f)
                } catch (N) {
                    l(N)
                }
            }
             : a;
            f.b = c ? function(b) {
                try {
                    var f = c.call(e, b);
                    !k(f) && b instanceof vc ? l(b) : a(f)
                } catch (N) {
                    l(N)
                }
            }
             : l
        }
        );
        f.a.c = a;
        uc(a, f);
        return f.a
    }
    d.Ia = function(a) {
        this.a = O;
        P(this, kc, a)
    }
    ;
    d.Ja = function(a) {
        this.a = O;
        P(this, Q, a)
    }
    ;
    function P(a, b, c) {
        a.a == O && (a == c && (b = Q,
        c = new TypeError("Promise cannot resolve to itself")),
        a.a = 1,
        qc(c, a.Ia, a.Ja, a) || (a.o = c,
        a.a = b,
        a.c = null ,
        zc(a),
        b != Q || c instanceof vc || Ac(a, c)))
    }
    function qc(a, b, c, e) {
        if (a instanceof M)
            return uc(a, nc(b || aa, c || null , e)),
            !0;
        var f;
        if (a)
            try {
                f = !!a.$goog_Thenable
            } catch (l) {
                f = !1
            }
        else
            f = !1;
        if (f)
            return a.then(b, c, e),
            !0;
        if (n(a))
            try {
                var g = a.then;
                if (ca(g))
                    return Bc(a, g, b, c, e),
                    !0
            } catch (l) {
                return c.call(e, l),
                !0
            }
        return !1
    }
    function Bc(a, b, c, e, f) {
        function g(a) {
            p || (p = !0,
            e.call(f, a))
        }
        function l(a) {
            p || (p = !0,
            c.call(f, a))
        }
        var p = !1;
        try {
            b.call(a, l, g)
        } catch (G) {
            g(G)
        }
    }
    function zc(a) {
        a.h || (a.h = !0,
        ec(a.ma, a))
    }
    function xc(a) {
        var b = null ;
        a.b && (b = a.b,
        a.b = b.next,
        b.next = null );
        a.b || (a.f = null );
        return b
    }
    d.ma = function() {
        for (var a = null ; a = xc(this); )
            yc(this, a, this.a, this.o);
        this.h = !1
    }
    ;
    function yc(a, b, c, e) {
        if (c == Q && b.b && !b.c)
            for (; a && a.g; a = a.c)
                a.g = !1;
        if (b.a)
            b.a.c = null ,
            Cc(b, c, e);
        else
            try {
                b.c ? b.g.call(b.f) : Cc(b, c, e)
            } catch (f) {
                Dc.call(null , f)
            }
        Xb(mc, b)
    }
    function Cc(a, b, c) {
        b == kc ? a.g.call(a.f, c) : a.b && a.b.call(a.f, c)
    }
    function Ac(a, b) {
        a.g = !0;
        ec(function() {
            a.g && Dc.call(null , b)
        })
    }
    var Dc = ac;
    function vc(a) {
        u.call(this, a)
    }
    t(vc, u);
    vc.prototype.name = "cancel";
    function sc(a, b, c) {
        this.c = a;
        this.b = b;
        this.a = c
    }
    ;function Ec(a) {
        a = String(a);
        if (/^\s*$/.test(a) ? 0 : /^[\],:{}\s\u2028\u2029]*$/.test(a.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, "")))
            try {
                return eval("(" + a + ")")
            } catch (b) {}
        throw Error("Invalid JSON string: " + a);
    }
    function Fc() {}
    function Gc(a, b, c) {
        if (null  == b)
            c.push("null");
        else {
            if ("object" == typeof b) {
                if ("array" == ba(b)) {
                    var e = b;
                    b = e.length;
                    c.push("[");
                    for (var f = "", g = 0; g < b; g++)
                        c.push(f),
                        Gc(a, e[g], c),
                        f = ",";
                    c.push("]");
                    return
                }
                if (b instanceof String || b instanceof Number || b instanceof Boolean)
                    b = b.valueOf();
                else {
                    c.push("{");
                    f = "";
                    for (e in b)
                        Object.prototype.hasOwnProperty.call(b, e) && (g = b[e],
                        "function" != typeof g && (c.push(f),
                        Hc(e, c),
                        c.push(":"),
                        Gc(a, g, c),
                        f = ","));
                    c.push("}");
                    return
                }
            }
            switch (typeof b) {
            case "string":
                Hc(b, c);
                break;
            case "number":
                c.push(isFinite(b) && 
                !isNaN(b) ? String(b) : "null");
                break;
            case "boolean":
                c.push(String(b));
                break;
            case "function":
                c.push("null");
                break;
            default:
                throw Error("Unknown type: " + typeof b);
            }
        }
    }
    var Ic = {
        '"': '\\"',
        "\\": "\\\\",
        "/": "\\/",
        "\b": "\\b",
        "\f": "\\f",
        "\n": "\\n",
        "\r": "\\r",
        "\t": "\\t",
        "\x0B": "\\u000b"
    }
      , Jc = /\uffff/.test("\uffff") ? /[\\\"\x00-\x1f\x7f-\uffff]/g : /[\\\"\x00-\x1f\x7f-\xff]/g;
    function Hc(a, b) {
        b.push('"', a.replace(Jc, function(a) {
            var b = Ic[a];
            b || (b = "\\u" + (a.charCodeAt(0) | 65536).toString(16).substr(1),
            Ic[a] = b);
            return b
        }), '"')
    }
    ;var R;
    R = function() {
        return "<stripped value>"
    }
    ;
    function S() {
        0 != Kc && (Lc[this[da] || (this[da] = ++ea)] = this);
        this.s = this.s;
        this.f = this.f
    }
    var Kc = 0
      , Lc = {};
    d = S.prototype;
    d.s = !1;
    d.Aa = function() {
        return this.s
    }
    ;
    d.m = function() {
        if (!this.s && (this.s = !0,
        this.u(),
        0 != Kc)) {
            var a = this[da] || (this[da] = ++ea);
            delete Lc[a]
        }
    }
    ;
    d.G = function(a, b) {
        this.s ? a.call(b) : (this.f || (this.f = []),
        this.f.push(k(b) ? q(a, b) : a))
    }
    ;
    d.u = function() {
        if (this.f)
            for (; this.f.length; )
                this.f.shift()()
    }
    ;
    function T() {
        S.call(this);
        this.h = {}
    }
    t(T, S);
    d = T.prototype;
    d.j = gb("goog.messaging.AbstractChannel");
    d.connect = function(a) {
        a && a()
    }
    ;
    d.za = function() {
        return !0
    }
    ;
    d.K = function(a, b, c) {
        this.h[a] = {
            T: b,
            W: !!c
        }
    }
    ;
    d.X = function(a) {
        this.g = a
    }
    ;
    d.getService = function(a, b) {
        var c = this.h[a];
        if (c)
            return c;
        if (this.g)
            return {
                T: ha(this.g, a),
                W: n(b)
            };
        hb(this.j, 'Unknown service name "' + a + '"');
        return null 
    }
    ;
    d.u = function() {
        T.A.u.call(this);
        delete this.j;
        delete this.h;
        delete this.g
    }
    ;
    za && x("9");
    !Ea || x("528");
    Da && x("1.9b") || za && x("8") || ya && x("9.5") || Ea && x("528");
    Da && !x("8") || za && x("9");
    function Mc(a, b, c) {
        if (ca(a))
            c && (a = q(a, c));
        else if (a && "function" == typeof a.handleEvent)
            a = q(a.handleEvent, a);
        else
            throw Error("Invalid listener argument");
        return 2147483647 < Number(b) ? -1 : h.setTimeout(a, b || 0)
    }
    ;function Nc() {
        var a = new Uint8Array(6);
        window.crypto.getRandomValues(a);
        var b = 0;
        pa(a, function(a) {
            b = 256 * b + a
        });
        return b
    }
    ;function U(a, b, c) {
        S.call(this);
        this.a = xb(b.b + ".Pinger");
        this.c = a;
        this.c.K("pong", this.v.bind(this), !0);
        this.g = k(c) ? c : null ;
        this.b = this.h = null ;
        Oc(this);
        bc(this.o, this)
    }
    t(U, S);
    U.prototype.u = function() {
        Pc(this);
        this.c = this.g = null ;
        U.A.u.call(this)
    }
    ;
    U.prototype.v = function(a) {
        E(this.a, n(a));
        this.s || (v(a, "channel_id") ? (a = a.channel_id,
        "number" == typeof a ? null  === this.h ? (this.a.i("Received the first pong response (remote channel id is " + a + "). The message channel is considered established"),
        this.h = a,
        this.g && (this.g(),
        this.g = null )) : this.h == a ? (this.a.w("Received a pong response with the correct channel id, so the remote end considered alive"),
        Pc(this),
        Oc(this)) : (this.a.B("Received a pong response with a channel id different from the expected one (expected " + 
        this.h + ", received " + a + "). Disposing..."),
        this.m()) : (this.a.B("Received pong message has wrong format: channel id is not a number. Disposing..."),
        this.m())) : (this.a.B('Received pong message has wrong format: no "channel_id" field is present. Disposing...'),
        this.m()))
    }
    ;
    U.prototype.o = function() {
        this.s || (this.a.w("Sending a ping request..."),
        this.c.send("ping", {}),
        Mc(this.o, 1E4, this))
    }
    ;
    function Oc(a) {
        E(a.a, null  === a.b);
        a.b = Mc(a.D, 6E5, a)
    }
    function Pc(a) {
        null  !== a.b && (h.clearTimeout(a.b),
        a.b = null )
    }
    U.prototype.D = function() {
        this.s || (this.a.B("No pong response received in time, the remote end is dead. Disposing the messaging channel..."),
        this.m(),
        this.c.m())
    }
    ;
    function Qc(a, b) {
        this.a = xb(b.b + ".PingResponder");
        this.b = a;
        this.b.K("ping", this.f.bind(this), !0);
        this.c = Nc();
        this.a.i("Initialized (generated channel id is " + this.c + ")")
    }
    Qc.prototype.f = function() {
        this.a.w("Received a ping request, sending pong response...");
        this.b.send("pong", {
            channel_id: this.c
        })
    }
    ;
    function Rc(a, b) {
        this.type = a;
        this.data = b
    }
    ;function Sc(a, b) {
        T.call(this);
        this.a = a;
        var c;
        v(a, "sender") ? (c = a.sender,
        E(this.j, n(c)),
        v(c, "id") ? (c = c.id,
        E(this.j, m(c))) : c = null ) : c = null ;
        this.o = c;
        this.j = zb('PortMessageChannel<"' + a.name + '"' + (null  === this.o ? "" : ', id="' + this.o + '"') + ">");
        this.b = this.la.bind(this);
        this.a.onDisconnect.addListener(this.b);
        this.c = this.Ca.bind(this);
        this.a.onMessage.addListener(this.c);
        this.X(this.ka.bind(this));
        new Qc(this,this.j);
        this.v = new U(this,this.j,b);
        this.j.i("Initialized successfully")
    }
    t(Sc, T);
    d = Sc.prototype;
    d.send = function(a, b) {
        E(this.j, n(b));
        var c;
        c = new Rc(a,b);
        c = {
            type: c.type,
            data: c.data
        };
        this.j.w("Posting a message: " + R());
        this.s && F(this.j, "Failed to post message: the channel is already disposed");
        try {
            this.a.postMessage(c)
        } catch (e) {
            this.m(),
            F(this.j, "Failed to post message: " + e)
        }
    }
    ;
    d.u = function() {
        this.v.m();
        this.v = null ;
        this.a.onMessage.removeListener(this.c);
        this.c = null ;
        this.a.onDisconnect.removeListener(this.b);
        this.b = null ;
        this.a.disconnect();
        this.a = null ;
        this.j.i("Disposed");
        Sc.A.u.call(this)
    }
    ;
    d.la = function() {
        this.j.i("Port was disconnected, disposing...");
        this.m()
    }
    ;
    d.Ca = function(a) {
        this.j.w("Received a message: " + R());
        var b = 2 == sa(a) && v(a, "type") && m(a.type) && v(a, "data") && n(a.data) ? new Rc(a.type,a.data) : null ;
        b || F(this.j, "Failed to parse the received message: " + R());
        a = b.type;
        var b = b.data
          , c = this.getService(a, b);
        if (c) {
            var e;
            a: {
                var f = c.W;
                if (f && m(b))
                    try {
                        e = Ec(b);
                        break a
                    } catch (g) {
                        hb(this.j, "Expected JSON payload for " + a + ', was "' + b + '"');
                        e = null ;
                        break a
                    }
                else if (!f && !m(b)) {
                    e = [];
                    Gc(new Fc, b, e);
                    e = e.join("");
                    break a
                }
                e = b
            }
            null  != e && c.T(e)
        }
    }
    ;
    d.ka = function(a) {
        F(this.j, 'Unhandled message received: serviceName="' + a + '", payload=' + R())
    }
    ;
    function Tc(a, b) {
        this.a = a;
        this.b = b
    }
    ;function Uc(a, b) {
        this.b = a;
        this.a = b
    }
    function Vc(a, b, c) {
        this.f = a;
        this.c = b;
        this.a = c;
        E(this.b, !k(b) || !k(c))
    }
    Vc.prototype.b = zb("RequesterMessage.ResponseMessageData");
    function Wc(a, b) {
        S.call(this);
        this.a = zb('Requester<"' + a + '">');
        this.g = a;
        this.c = b;
        this.o = Ka();
        this.b = new La;
        this.c.K(this.g + "::response", this.v.bind(this), !0);
        this.c.G(this.h.bind(this))
    }
    t(Wc, S);
    Wc.prototype.u = function() {
        var a = this.b.H();
        a.sort(ra);
        pa(a, function(a) {
            isFinite(a) && (a = String(a));
            Xc(this, m(a) ? /^\s*-?0x/i.test(a) ? parseInt(a, 16) : parseInt(a, 10) : NaN, "The requester is disposed")
        }, this);
        this.c = this.b = null ;
        this.a.i("Disposed");
        Wc.A.u.call(this)
    }
    ;
    Wc.prototype.h = function() {
        this.s || (this.a.I("Message channel was disposed, disposing..."),
        this.m())
    }
    ;
    Wc.prototype.v = function(a) {
        E(this.a, n(a));
        var b;
        2 == sa(a) && v(a, "request_id") && "number" == typeof a.request_id ? (b = a.request_id,
        b = v(a, "payload") ? new Vc(b,a.payload) : v(a, "error") && m(a.error) ? new Vc(b,void 0,a.error) : null ) : b = null ;
        null  === b && F(this.a, "Failed to parse the received response message: " + R());
        a = b.f;
        y(this.b.b, a) || F(this.a, "Received a response for unknown request with identifier " + a);
        k(b.a) ? (E(b.b, !!k(b.a)),
        E(b.b, m(b.a)),
        Xc(this, a, b.a)) : (E(b.b, !k(b.a)),
        b = b.c,
        this.a.i("The request with identifier " + 
        a + " succeeded with the following result: " + R()),
        Yc(this, a).b(b))
    }
    ;
    function Xc(a, b, c) {
        a.a.i("The request with identifier " + b + " failed: " + c);
        Yc(a, b).a(Error(c))
    }
    function Yc(a, b) {
        var c = a.b.get(b);
        E(a.a, k(c));
        a.b.remove(b);
        return c
    }
    ;r("goog.log.getLogger", gb);
    r("goog.log.addHandler", function(a, b) {
        a && a.F(b)
    });
    r("goog.log.removeHandler", function(a, b) {
        return a ? a.Y(b) : !1
    });
    r("goog.log.log", function(a, b, c, e) {
        a && a.log(b, c, e)
    });
    r("goog.log.error", function(a, b, c) {
        a && a.$(b, c)
    });
    r("goog.log.warning", hb);
    r("goog.log.info", function(a, b, c) {
        a && a.I(b, c)
    });
    r("goog.log.fine", function(a, b, c) {
        a && a.i(b, c)
    });
    r("goog.log.LogRecord", z);
    z.prototype.reset = z.prototype.reset;
    z.prototype.getLoggerName = z.prototype.qa;
    z.prototype.getException = z.prototype.pa;
    z.prototype.setException = z.prototype.Z;
    z.prototype.setLoggerName = z.prototype.Da;
    z.prototype.getLevel = z.prototype.ua;
    z.prototype.setLevel = z.prototype.va;
    z.prototype.getMessage = z.prototype.getMessage;
    z.prototype.setMessage = z.prototype.Ea;
    z.prototype.getMillis = z.prototype.ra;
    z.prototype.setMillis = z.prototype.Fa;
    z.prototype.getSequenceNumber = z.prototype.sa;
    r("goog.log.Level", B);
    B.OFF = Oa;
    B.SHOUT = Pa;
    B.SEVERE = Qa;
    B.WARNING = Ra;
    B.INFO = Sa;
    B.CONFIG = Ta;
    B.FINE = Ua;
    B.FINER = Va;
    B.FINEST = Wa;
    B.ALL = Xa;
    B.PREDEFINED_LEVELS = Ya;
    B.getPredefinedLevel = $a;
    B.getPredefinedLevelByValue = function(a) {
        C || Za();
        if (a in C)
            return C[a];
        for (var b = 0; b < Ya.length; ++b) {
            var c = Ya[b];
            if (c.value <= a)
                return c
        }
        return null 
    }
    ;
    B.getPredefinedLevel = $a;
    B.getPredefinedLevel = $a;
    B.prototype.toString = B.prototype.toString;
    r("goog.log.Logger", A);
    A.ROOT_LOGGER_NAME = "";
    A.Level = B;
    A.getLogger = function(a) {
        return fb(a)
    }
    ;
    A.logToProfilers = ab;
    A.prototype.getName = A.prototype.xa;
    A.prototype.addHandler = A.prototype.F;
    A.prototype.removeHandler = A.prototype.Y;
    A.prototype.getParent = A.prototype.ya;
    A.prototype.getChildren = A.prototype.getChildren;
    A.prototype.setLevel = A.prototype.J;
    A.prototype.getLevel = A.prototype.wa;
    A.prototype.getEffectiveLevel = A.prototype.L;
    A.prototype.isLoggable = A.prototype.N;
    A.prototype.log = A.prototype.log;
    A.prototype.getLogRecord = A.prototype.V;
    A.prototype.shout = A.prototype.Ga;
    A.prototype.severe = A.prototype.$;
    A.prototype.warning = A.prototype.B;
    A.prototype.info = A.prototype.I;
    A.prototype.config = A.prototype.ja;
    A.prototype.fine = A.prototype.i;
    A.prototype.finer = A.prototype.na;
    A.prototype.finest = A.prototype.w;
    A.prototype.logRecord = A.prototype.Ba;
    r("goog.Promise", M);
    M.resolve = function(a) {
        if (a instanceof M)
            return a;
        var b = new M(aa);
        P(b, kc, a);
        return b
    }
    ;
    M.reject = oc;
    M.race = function(a) {
        return new M(function(b, c) {
            a.length || b(void 0);
            for (var e = 0, f; e < a.length; e++)
                f = a[e],
                pc(f, b, c)
        }
        )
    }
    ;
    M.all = function(a) {
        return new M(function(b, c) {
            var e = a.length
              , f = [];
            if (e)
                for (var g = function(a, c) {
                    e--;
                    f[a] = c;
                    0 == e && b(f)
                }
                , l = function(a) {
                    c(a)
                }
                , p = 0, G; p < a.length; p++)
                    G = a[p],
                    pc(G, ha(g, p), l);
            else
                b(f)
        }
        )
    }
    ;
    M.allSettled = function(a) {
        return new M(function(b) {
            var c = a.length
              , e = [];
            if (c)
                for (var f = function(a, f, g) {
                    c--;
                    e[a] = f ? {
                        oa: !0,
                        value: g
                    } : {
                        oa: !1,
                        reason: g
                    };
                    0 == c && b(e)
                }
                , g = 0, l; g < a.length; g++)
                    l = a[g],
                    pc(l, ha(f, g, !0), ha(f, g, !1));
            else
                b(e)
        }
        )
    }
    ;
    M.firstFulfilled = function(a) {
        return new M(function(b, c) {
            var e = a.length
              , f = [];
            if (e)
                for (var g = function(a) {
                    b(a)
                }
                , l = function(a, b) {
                    e--;
                    f[a] = b;
                    0 == e && c(f)
                }
                , p = 0, G; p < a.length; p++)
                    G = a[p],
                    pc(G, g, ha(l, p));
            else
                b(void 0)
        }
        )
    }
    ;
    M.withResolver = rc;
    M.setUnhandledRejectionHandler = function(a) {
        Dc = a
    }
    ;
    M.CancellationError = vc;
    M.prototype.then = M.prototype.then;
    M.prototype.thenAlways = M.prototype.aa;
    M.prototype.thenCatch = M.prototype.Ha;
    M.prototype.cancel = M.prototype.ta;
    M.prototype.thenAlways = M.prototype.aa;
    r("goog.Disposable", S);
    S.prototype.isDisposed = S.prototype.Aa;
    S.prototype.dispose = S.prototype.m;
    S.prototype.addOnDisposeCallback = S.prototype.G;
    r("goog.messaging.AbstractChannel", T);
    T.prototype.connect = T.prototype.connect;
    T.prototype.isConnected = T.prototype.za;
    T.prototype.registerService = T.prototype.K;
    T.prototype.registerDefaultService = T.prototype.X;
    T.prototype.send = T.prototype.send;
    r("GoogleSmartCard.PcscLiteCommon.Constants.SERVER_OFFICIAL_APP_ID", "khpfeaanjngmcnplbdlpegiifgpfgdco");
    function V(a) {
        S.call(this);
        this.a = zb("PcscLiteClient.API");
        this.b = a;
        this.b.G(this.g.bind(this));
        this.c = new Wc("pcsc_lite_function_call",this.b);
        this.a.i("Initialized")
    }
    t(V, S);
    r("GoogleSmartCard.PcscLiteClient.API", V);
    V.MAX_ATR_SIZE = 33;
    var Zc = L(0);
    V.SCARD_S_SUCCESS = Zc;
    var $c = L(2148532225);
    V.SCARD_F_INTERNAL_ERROR = $c;
    var ad = L(2148532226);
    V.SCARD_E_CANCELLED = ad;
    var bd = L(2148532227);
    V.SCARD_E_INVALID_HANDLE = bd;
    var cd = L(2148532228);
    V.SCARD_E_INVALID_PARAMETER = cd;
    var dd = L(2148532229);
    V.SCARD_E_INVALID_TARGET = dd;
    var ed = L(2148532230);
    V.SCARD_E_NO_MEMORY = ed;
    var fd = L(2148532231);
    V.SCARD_F_WAITED_TOO_LONG = fd;
    var gd = L(2148532232);
    V.SCARD_E_INSUFFICIENT_BUFFER = gd;
    var hd = L(2148532233);
    V.SCARD_E_UNKNOWN_READER = hd;
    var id = L(2148532234);
    V.SCARD_E_TIMEOUT = id;
    var jd = L(2148532235);
    V.SCARD_E_SHARING_VIOLATION = jd;
    var kd = L(2148532236);
    V.SCARD_E_NO_SMARTCARD = kd;
    var ld = L(2148532237);
    V.SCARD_E_UNKNOWN_CARD = ld;
    var md = L(2148532238);
    V.SCARD_E_CANT_DISPOSE = md;
    var nd = L(2148532239);
    V.SCARD_E_PROTO_MISMATCH = nd;
    var od = L(2148532240);
    V.SCARD_E_NOT_READY = od;
    var pd = L(2148532241);
    V.SCARD_E_INVALID_VALUE = pd;
    var qd = L(2148532242);
    V.SCARD_E_SYSTEM_CANCELLED = qd;
    var rd = L(2148532243);
    V.SCARD_F_COMM_ERROR = rd;
    var sd = L(2148532244);
    V.SCARD_F_UNKNOWN_ERROR = sd;
    var td = L(2148532245);
    V.SCARD_E_INVALID_ATR = td;
    var ud = L(2148532246);
    V.SCARD_E_NOT_TRANSACTED = ud;
    var vd = L(2148532247);
    V.SCARD_E_READER_UNAVAILABLE = vd;
    var wd = L(2148532248);
    V.SCARD_P_SHUTDOWN = wd;
    var xd = L(2148532249);
    V.SCARD_E_PCI_TOO_SMALL = xd;
    var yd = L(2148532250);
    V.SCARD_E_READER_UNSUPPORTED = yd;
    var zd = L(2148532251);
    V.SCARD_E_DUPLICATE_READER = zd;
    var Ad = L(2148532252);
    V.SCARD_E_CARD_UNSUPPORTED = Ad;
    var Bd = L(2148532253);
    V.SCARD_E_NO_SERVICE = Bd;
    var Cd = L(2148532254);
    V.SCARD_E_SERVICE_STOPPED = Cd;
    var Dd = L(2148532255);
    V.SCARD_E_UNEXPECTED = Dd;
    var Ed = L(2148532255);
    V.SCARD_E_UNSUPPORTED_FEATURE = Ed;
    var Fd = L(2148532256);
    V.SCARD_E_ICC_INSTALLATION = Fd;
    var Gd = L(2148532257);
    V.SCARD_E_ICC_CREATEORDER = Gd;
    var Hd = L(2148532259);
    V.SCARD_E_DIR_NOT_FOUND = Hd;
    var Id = L(2148532260);
    V.SCARD_E_FILE_NOT_FOUND = Id;
    var Jd = L(2148532261);
    V.SCARD_E_NO_DIR = Jd;
    var Kd = L(2148532262);
    V.SCARD_E_NO_FILE = Kd;
    var Ld = L(2148532263);
    V.SCARD_E_NO_ACCESS = Ld;
    var Md = L(2148532264);
    V.SCARD_E_WRITE_TOO_MANY = Md;
    var Nd = L(2148532265);
    V.SCARD_E_BAD_SEEK = Nd;
    var Od = L(2148532266);
    V.SCARD_E_INVALID_CHV = Od;
    var Pd = L(2148532267);
    V.SCARD_E_UNKNOWN_RES_MNG = Pd;
    var Qd = L(2148532268);
    V.SCARD_E_NO_SUCH_CERTIFICATE = Qd;
    var Rd = L(2148532269);
    V.SCARD_E_CERTIFICATE_UNAVAILABLE = Rd;
    var Sd = L(2148532270);
    V.SCARD_E_NO_READERS_AVAILABLE = Sd;
    var Td = L(2148532271);
    V.SCARD_E_COMM_DATA_LOST = Td;
    var Ud = L(2148532272);
    V.SCARD_E_NO_KEY_CONTAINER = Ud;
    var Vd = L(2148532273);
    V.SCARD_E_SERVER_TOO_BUSY = Vd;
    var Wd = L(2148532325);
    V.SCARD_W_UNSUPPORTED_CARD = Wd;
    var Xd = L(2148532326);
    V.SCARD_W_UNRESPONSIVE_CARD = Xd;
    var Yd = L(2148532327);
    V.SCARD_W_UNPOWERED_CARD = Yd;
    var Zd = L(2148532328);
    V.SCARD_W_RESET_CARD = Zd;
    var $d = L(2148532329);
    V.SCARD_W_REMOVED_CARD = $d;
    var ae = L(2148532330);
    V.SCARD_W_SECURITY_VIOLATION = ae;
    var be = L(2148532331);
    V.SCARD_W_WRONG_CHV = be;
    var ce = L(2148532332);
    V.SCARD_W_CHV_BLOCKED = ce;
    var de = L(2148532333);
    V.SCARD_W_EOF = de;
    var ee = L(2148532334);
    V.SCARD_W_CANCELLED_BY_USER = ee;
    var fe = L(2148532335);
    V.SCARD_W_CARD_NOT_AUTHENTICATED = fe;
    var ge = L(4294967295);
    V.SCARD_AUTOALLOCATE = ge;
    V.SCARD_SCOPE_USER = 0;
    V.SCARD_SCOPE_TERMINAL = 1;
    V.SCARD_SCOPE_SYSTEM = 2;
    V.SCARD_PROTOCOL_UNDEFINED = 0;
    V.SCARD_PROTOCOL_UNSET = 0;
    V.SCARD_PROTOCOL_T0 = 1;
    V.SCARD_PROTOCOL_T1 = 2;
    V.SCARD_PROTOCOL_RAW = 4;
    V.SCARD_PROTOCOL_T15 = 8;
    V.SCARD_PROTOCOL_ANY = 3;
    V.SCARD_SHARE_EXCLUSIVE = 1;
    V.SCARD_SHARE_SHARED = 2;
    V.SCARD_SHARE_DIRECT = 3;
    V.SCARD_LEAVE_CARD = 0;
    V.SCARD_RESET_CARD = 1;
    V.SCARD_UNPOWER_CARD = 2;
    V.SCARD_EJECT_CARD = 3;
    V.SCARD_UNKNOWN = 1;
    V.SCARD_ABSENT = 2;
    V.SCARD_PRESENT = 4;
    V.SCARD_SWALLOWED = 8;
    V.SCARD_POWERED = 16;
    V.SCARD_NEGOTIABLE = 32;
    V.SCARD_SPECIFIC = 64;
    V.SCARD_STATE_UNAWARE = 0;
    V.SCARD_STATE_IGNORE = 1;
    V.SCARD_STATE_CHANGED = 2;
    V.SCARD_STATE_UNKNOWN = 4;
    V.SCARD_STATE_UNAVAILABLE = 8;
    V.SCARD_STATE_EMPTY = 16;
    V.SCARD_STATE_PRESENT = 32;
    V.SCARD_STATE_ATRMATCH = 64;
    V.SCARD_STATE_EXCLUSIVE = 128;
    V.SCARD_STATE_INUSE = 256;
    V.SCARD_STATE_MUTE = 512;
    V.SCARD_STATE_UNPOWERED = 1024;
    var he = L(4294967295);
    V.INFINITE = he;
    V.PCSCLITE_MAX_READERS_CONTEXTS = 16;
    V.MAX_READERNAME = 128;
    V.SCARD_ATR_LENGTH = 33;
    V.MAX_BUFFER_SIZE = 264;
    V.MAX_BUFFER_SIZE_EXTENDED = 65548;
    V.SCARD_ATTR_VALUE = function(a, b) {
        return a << 16 | b
    }
    ;
    V.SCARD_CLASS_VENDOR_INFO = 1;
    V.SCARD_CLASS_COMMUNICATIONS = 2;
    V.SCARD_CLASS_PROTOCOL = 3;
    V.SCARD_CLASS_POWER_MGMT = 4;
    V.SCARD_CLASS_SECURITY = 5;
    V.SCARD_CLASS_MECHANICAL = 6;
    V.SCARD_CLASS_VENDOR_DEFINED = 7;
    V.SCARD_CLASS_IFD_PROTOCOL = 8;
    V.SCARD_CLASS_ICC_STATE = 9;
    V.SCARD_CLASS_SYSTEM = 32767;
    V.SCARD_ATTR_VENDOR_NAME = 65792;
    V.SCARD_ATTR_VENDOR_IFD_TYPE = 65793;
    V.SCARD_ATTR_VENDOR_IFD_VERSION = 65794;
    V.SCARD_ATTR_VENDOR_IFD_SERIAL_NO = 65795;
    V.SCARD_ATTR_CHANNEL_ID = 131344;
    V.SCARD_ATTR_ASYNC_PROTOCOL_TYPES = 196896;
    V.SCARD_ATTR_DEFAULT_CLK = 196897;
    V.SCARD_ATTR_MAX_CLK = 196898;
    V.SCARD_ATTR_DEFAULT_DATA_RATE = 196899;
    V.SCARD_ATTR_MAX_DATA_RATE = 196900;
    V.SCARD_ATTR_MAX_IFSD = 196901;
    V.SCARD_ATTR_SYNC_PROTOCOL_TYPES = 196902;
    V.SCARD_ATTR_POWER_MGMT_SUPPORT = 262449;
    V.SCARD_ATTR_USER_TO_CARD_AUTH_DEVICE = 328E3;
    V.SCARD_ATTR_USER_AUTH_INPUT_DEVICE = 328002;
    V.SCARD_ATTR_CHARACTERISTICS = 393552;
    V.SCARD_ATTR_CURRENT_PROTOCOL_TYPE = 524801;
    V.SCARD_ATTR_CURRENT_CLK = 524802;
    V.SCARD_ATTR_CURRENT_F = 524803;
    V.SCARD_ATTR_CURRENT_D = 524804;
    V.SCARD_ATTR_CURRENT_N = 524805;
    V.SCARD_ATTR_CURRENT_W = 524806;
    V.SCARD_ATTR_CURRENT_IFSC = 524807;
    V.SCARD_ATTR_CURRENT_IFSD = 524808;
    V.SCARD_ATTR_CURRENT_BWT = 524809;
    V.SCARD_ATTR_CURRENT_CWT = 524810;
    V.SCARD_ATTR_CURRENT_EBC_ENCODING = 524811;
    V.SCARD_ATTR_EXTENDED_BWT = 524812;
    V.SCARD_ATTR_ICC_PRESENCE = 590592;
    V.SCARD_ATTR_ICC_INTERFACE_STATUS = 590593;
    V.SCARD_ATTR_CURRENT_IO_STATE = 590594;
    V.SCARD_ATTR_ATR_STRING = 590595;
    V.SCARD_ATTR_ICC_TYPE_PER_ATR = 590596;
    V.SCARD_ATTR_ESC_RESET = 499712;
    V.SCARD_ATTR_ESC_CANCEL = 499715;
    V.SCARD_ATTR_ESC_AUTHREQUEST = 499717;
    V.SCARD_ATTR_MAXINPUT = 499719;
    V.SCARD_ATTR_DEVICE_UNIT = 2147418113;
    V.SCARD_ATTR_DEVICE_IN_USE = 2147418114;
    V.SCARD_ATTR_DEVICE_FRIENDLY_NAME_A = 2147418115;
    V.SCARD_ATTR_DEVICE_SYSTEM_NAME_A = 2147418116;
    V.SCARD_ATTR_DEVICE_FRIENDLY_NAME_W = 2147418117;
    V.SCARD_ATTR_DEVICE_SYSTEM_NAME_W = 2147418118;
    V.SCARD_ATTR_SUPRESS_T1_IFS_REQUEST = 2147418119;
    V.SCARD_ATTR_DEVICE_FRIENDLY_NAME = 2147418117;
    V.SCARD_ATTR_DEVICE_SYSTEM_NAME = 2147418118;
    function ie(a) {
        return L(1107296256) + a
    }
    V.SCARD_CTL_CODE = ie;
    var je = ie(3400);
    V.CM_IOCTL_GET_FEATURE_REQUEST = je;
    V.FEATURE_VERIFY_PIN_START = 1;
    V.FEATURE_VERIFY_PIN_FINISH = 2;
    V.FEATURE_MODIFY_PIN_START = 3;
    V.FEATURE_MODIFY_PIN_FINISH = 4;
    V.FEATURE_GET_KEY_PRESSED = 5;
    V.FEATURE_VERIFY_PIN_DIRECT = 6;
    V.FEATURE_MODIFY_PIN_DIRECT = 7;
    V.FEATURE_MCT_READER_DIRECT = 8;
    V.FEATURE_MCT_UNIVERSAL = 9;
    V.FEATURE_IFD_PIN_PROPERTIES = 10;
    V.FEATURE_ABORT = 11;
    V.FEATURE_SET_SPE_MESSAGE = 12;
    V.FEATURE_VERIFY_PIN_DIRECT_APP_ID = 13;
    V.FEATURE_MODIFY_PIN_DIRECT_APP_ID = 14;
    V.FEATURE_WRITE_DISPLAY = 15;
    V.FEATURE_GET_KEY = 16;
    V.FEATURE_IFD_DISPLAY_PROPERTIES = 17;
    V.FEATURE_GET_TLV_PROPERTIES = 18;
    V.FEATURE_CCID_ESC_COMMAND = 19;
    V.FEATURE_EXECUTE_PACE = 32;
    V.PCSCv2_PART10_PROPERTY_wLcdLayout = 1;
    V.PCSCv2_PART10_PROPERTY_bEntryValidationCondition = 2;
    V.PCSCv2_PART10_PROPERTY_bTimeOut2 = 3;
    V.PCSCv2_PART10_PROPERTY_wLcdMaxCharacters = 4;
    V.PCSCv2_PART10_PROPERTY_wLcdMaxLines = 5;
    V.PCSCv2_PART10_PROPERTY_bMinPINSize = 6;
    V.PCSCv2_PART10_PROPERTY_bMaxPINSize = 7;
    V.PCSCv2_PART10_PROPERTY_sFirmwareID = 8;
    V.PCSCv2_PART10_PROPERTY_bPPDUSupport = 9;
    V.PCSCv2_PART10_PROPERTY_dwMaxAPDUDataSize = 10;
    V.PCSCv2_PART10_PROPERTY_wIdVendor = 11;
    V.PCSCv2_PART10_PROPERTY_wIdProduct = 12;
    function ke(a) {
        this.protocol = a
    }
    V.SCARD_IO_REQUEST = ke;
    V.SCARD_PCI_T0 = new ke(1);
    V.SCARD_PCI_T1 = new ke(2);
    V.SCARD_PCI_RAW = new ke(4);
    V.SCARD_READERSTATE_IN = function(a, b, c) {
        this.reader_name = a;
        this.current_state = b;
        k(c) && (this.user_data = c)
    }
    ;
    V.SCARD_READERSTATE_OUT = function(a, b, c, e, f) {
        this.reader_name = a;
        this.current_state = b;
        this.event_state = c;
        this.atr = e;
        k(f) && (this.user_data = f)
    }
    ;
    function W(a) {
        E(this.f, 1 <= a.length);
        this.g = a[0];
        this.b = void 0;
        this.c() && (this.b = qa(a, 1))
    }
    V.ResultOrErrorCode = W;
    W.prototype.f = zb("PcscLiteClient.API.ResultOrErrorCode");
    W.prototype.a = function(a, b, c) {
        this.c() ? (E(this.f, this.b.length == a),
        b && b.apply(void 0, this.b)) : c && c.apply(void 0, [this.g])
    }
    ;
    W.prototype.getBase = W.prototype.a;
    W.prototype.c = function() {
        return this.g == Zc
    }
    ;
    W.prototype.isSuccessful = W.prototype.c;
    W.prototype.h = function() {
        E(this.f, this.c());
        E(this.f, k(this.b));
        return this.b
    }
    ;
    W.prototype.getResult = W.prototype.h;
    V.prototype.ia = function(a) {
        var b = this.a;
        return X(this, "pcsc_stringify_error", [a], function(a) {
            E(b, 1 == a.length);
            E(b, m(a[0]));
            return a[0]
        })
    }
    ;
    V.prototype.pcsc_stringify_error = V.prototype.ia;
    V.prototype.R = function(a, b, c) {
        k(b) || (b = null );
        k(c) || (c = null );
        return X(this, "SCardEstablishContext", [a, b, c], function(a) {
            return new le(a)
        })
    }
    ;
    V.prototype.SCardEstablishContext = V.prototype.R;
    function le(a) {
        W.call(this, a)
    }
    t(le, W);
    V.SCardEstablishContextResult = le;
    le.prototype.get = function(a, b) {
        return this.a(1, a, b)
    }
    ;
    le.prototype.get = le.prototype.get;
    V.prototype.ea = function(a) {
        return X(this, "SCardReleaseContext", [a], function(a) {
            return new me(a)
        })
    }
    ;
    V.prototype.SCardReleaseContext = V.prototype.ea;
    function me(a) {
        W.call(this, a)
    }
    t(me, W);
    V.SCardReleaseContextResult = me;
    me.prototype.get = function(a, b) {
        return this.a(0, a, b)
    }
    ;
    me.prototype.get = me.prototype.get;
    V.prototype.v = function(a, b, c, e) {
        return X(this, "SCardConnect", [a, b, c, e], function(a) {
            return new Y(a)
        })
    }
    ;
    V.prototype.SCardConnect = V.prototype.v;
    function Y(a) {
        Y.l(this, "constructor", a)
    }
    V.SCardConnectResult = Y;
    t(Y, W);
    Y.prototype.get = function(a, b) {
        return this.a(2, a, b)
    }
    ;
    Y.prototype.get = Y.prototype.get;
    V.prototype.da = function(a, b, c, e) {
        return X(this, "SCardReconnect", [a, b, c, e], function(a) {
            return new ne(a)
        })
    }
    ;
    V.prototype.SCardReconnect = V.prototype.da;
    function ne(a) {
        ne.l(this, "constructor", a)
    }
    V.SCardReconnectResult = ne;
    t(ne, W);
    ne.prototype.get = function(a, b) {
        return this.a(1, a, b)
    }
    ;
    ne.prototype.get = ne.prototype.get;
    V.prototype.O = function(a, b) {
        return X(this, "SCardDisconnect", [a, b], function(a) {
            return new oe(a)
        })
    }
    ;
    V.prototype.SCardDisconnect = V.prototype.O;
    function oe(a) {
        oe.l(this, "constructor", a)
    }
    V.SCardDisconnectResult = oe;
    t(oe, W);
    oe.prototype.get = function(a, b) {
        return this.a(0, a, b)
    }
    ;
    oe.prototype.get = oe.prototype.get;
    V.prototype.h = function(a) {
        return X(this, "SCardBeginTransaction", [a], function(a) {
            return new pe(a)
        })
    }
    ;
    V.prototype.SCardBeginTransaction = V.prototype.h;
    function pe(a) {
        pe.l(this, "constructor", a)
    }
    V.SCardBeginTransactionResult = pe;
    t(pe, W);
    pe.prototype.get = function(a, b) {
        return this.a(0, a, b)
    }
    ;
    pe.prototype.get = pe.prototype.get;
    V.prototype.P = function(a, b) {
        return X(this, "SCardEndTransaction", [a, b], function(a) {
            return new qe(a)
        })
    }
    ;
    V.prototype.SCardEndTransaction = V.prototype.P;
    function qe(a) {
        qe.l(this, "constructor", a)
    }
    V.SCardEndTransactionResult = qe;
    t(qe, W);
    qe.prototype.get = function(a, b) {
        return this.a(0, a, b)
    }
    ;
    qe.prototype.get = qe.prototype.get;
    V.prototype.ga = function(a) {
        return X(this, "SCardStatus", [a], function(a) {
            return new re(a)
        })
    }
    ;
    V.prototype.SCardStatus = V.prototype.ga;
    function re(a) {
        re.l(this, "constructor", a)
    }
    V.SCardStatusResult = re;
    t(re, W);
    re.prototype.get = function(a, b) {
        return this.a(4, a, b)
    }
    ;
    re.prototype.get = re.prototype.get;
    V.prototype.Ka = function(a, b, c) {
        return X(this, "SCardGetStatusChange", [a, b, c], function(a) {
            return new se(a)
        })
    }
    ;
    V.prototype.SCardGetStatusChange = V.prototype.Ka;
    function se(a) {
        se.l(this, "constructor", a)
    }
    V.SCardGetStatusChangeResult = se;
    t(se, W);
    se.prototype.get = function(a, b) {
        return this.a(1, a, b)
    }
    ;
    se.prototype.get = se.prototype.get;
    V.prototype.D = function(a, b, c) {
        return X(this, "SCardControl", [a, b, c], function(a) {
            return new te(a)
        })
    }
    ;
    V.prototype.SCardControl = V.prototype.D;
    function te(a) {
        te.l(this, "constructor", a)
    }
    V.SCardControlResult = te;
    t(te, W);
    te.prototype.get = function(a, b) {
        return this.a(1, a, b)
    }
    ;
    te.prototype.get = te.prototype.get;
    V.prototype.S = function(a, b) {
        return X(this, "SCardGetAttrib", [a, b], function(a) {
            return new ue(a)
        })
    }
    ;
    V.prototype.SCardGetAttrib = V.prototype.S;
    function ue(a) {
        ue.l(this, "constructor", a)
    }
    V.SCardGetAttribResult = ue;
    t(ue, W);
    ue.prototype.get = function(a, b) {
        return this.a(1, a, b)
    }
    ;
    ue.prototype.get = ue.prototype.get;
    V.prototype.fa = function(a, b, c) {
        return X(this, "SCardSetAttrib", [a, b, c], function(a) {
            return new ve(a)
        })
    }
    ;
    V.prototype.SCardSetAttrib = V.prototype.fa;
    function ve(a) {
        ve.l(this, "constructor", a)
    }
    V.SCardSetAttribResult = ve;
    t(ve, W);
    ve.prototype.get = function(a, b) {
        return this.a(0, a, b)
    }
    ;
    ve.prototype.get = ve.prototype.get;
    V.prototype.ha = function(a, b, c, e) {
        return X(this, "SCardTransmit", [a, b, c, e], function(a) {
            return new we(a)
        })
    }
    ;
    V.prototype.SCardTransmit = V.prototype.ha;
    function we(a) {
        we.l(this, "constructor", a)
    }
    V.SCardTransmitResult = we;
    t(we, W);
    we.prototype.get = function(a, b) {
        return this.a(2, a, b)
    }
    ;
    we.prototype.get = we.prototype.get;
    V.prototype.ca = function(a, b) {
        return X(this, "SCardListReaders", [a, b], function(a) {
            return new xe(a)
        })
    }
    ;
    V.prototype.SCardListReaders = V.prototype.ca;
    function xe(a) {
        xe.l(this, "constructor", a)
    }
    V.SCardListReadersResult = xe;
    t(xe, W);
    xe.prototype.get = function(a, b) {
        return this.a(1, a, b)
    }
    ;
    xe.prototype.get = xe.prototype.get;
    V.prototype.ba = function(a) {
        return X(this, "SCardListReaderGroups", [a], function(a) {
            return new ye(a)
        })
    }
    ;
    V.prototype.SCardListReaderGroups = V.prototype.ba;
    function ye(a) {
        ye.l(this, "constructor", a)
    }
    V.SCardListReaderGroupsResult = ye;
    t(ye, W);
    ye.prototype.get = function(a, b) {
        return this.a(1, a, b)
    }
    ;
    ye.prototype.get = ye.prototype.get;
    V.prototype.o = function(a) {
        return X(this, "SCardCancel", [a], function(a) {
            return new ze(a)
        })
    }
    ;
    V.prototype.SCardCancel = V.prototype.o;
    function ze(a) {
        ze.l(this, "constructor", a)
    }
    V.SCardCancelResult = ze;
    t(ze, W);
    ze.prototype.get = function(a, b) {
        return this.a(0, a, b)
    }
    ;
    ze.prototype.get = ze.prototype.get;
    V.prototype.La = function(a) {
        return X(this, "SCardIsValidContext", [a], function(a) {
            return new Ae(a)
        })
    }
    ;
    V.prototype.SCardIsValidContext = V.prototype.La;
    function Ae(a) {
        Ae.l(this, "constructor", a)
    }
    V.SCardIsValidContextResult = Ae;
    t(Ae, W);
    Ae.prototype.get = function(a, b) {
        return this.a(0, a, b)
    }
    ;
    Ae.prototype.get = Ae.prototype.get;
    V.prototype.u = function() {
        this.c.m();
        this.b = this.c = null ;
        this.a.i("Disposed");
        V.A.u.call(this)
    }
    ;
    V.prototype.g = function() {
        this.s || (this.a.I("Message channel was disposed, disposing..."),
        this.m())
    }
    ;
    function X(a, b, c, e) {
        if (a.s)
            return oc(Error("The API instance is already disposed"));
        b = new Tc(b,c);
        a = a.c;
        c = {
            function_name: b.a,
            arguments: b.b
        };
        var f = a.o.next();
        a.a.i("Starting a request with identifier " + f + ", the payload is: " + R());
        b = rc();
        E(a.a, !y(a.b.b, f));
        a.b.set(f, b);
        a.s ? Xc(a, f, "The requester is already disposed") : (c = new Uc(f,c),
        a.c.send(a.g + "::request", {
            request_id: c.b,
            payload: c.a
        }));
        a = b.c;
        return a.then(e)
    }
    ;function Z(a, b) {
        S.call(this);
        this.a = null ;
        this.h = a;
        this.o = k(b) ? b : "khpfeaanjngmcnplbdlpegiifgpfgdco";
        this.c = null ;
        this.g = [];
        this.b.i("Constructed")
    }
    t(Z, S);
    r("GoogleSmartCard.PcscLiteClient.Context", Z);
    Z.prototype.b = zb("PcscLiteClient.Context");
    Z.prototype.logger = Z.prototype.b;
    Z.prototype.R = function() {
        this.b.i('Opening a connection to the server app (id "' + this.o + '")...');
        var a = chrome.runtime.connect(this.o, {
            name: this.h
        });
        this.c = new Sc(a,this.S.bind(this));
        this.c.G(this.v.bind(this))
    }
    ;
    Z.prototype.initialize = Z.prototype.R;
    Z.prototype.D = function(a) {
        null  === this.a ? this.g.push(a) : a(this.a)
    }
    ;
    Z.prototype.addOnInitializedCallback = Z.prototype.D;
    Z.prototype.O = function() {
        return this.a
    }
    ;
    Z.prototype.getApi = Z.prototype.O;
    Z.prototype.P = function() {
        return this.h
    }
    ;
    Z.prototype.getClientTitle = Z.prototype.P;
    Z.prototype.u = function() {
        this.a && (this.a.m(),
        this.a = null );
        this.c && (this.c.m(),
        this.c = null );
        this.b.i("Disposed");
        Z.A.u.call(this)
    }
    ;
    Z.prototype.S = function() {
        this.b.i("Message channel was established successfully");
        E(this.b, null  === this.a);
        E(this.b, null  !== this.c);
        this.a = new V(this.c);
        pa(this.g, function(a) {
            a(this.a)
        }, this);
        this.g = []
    }
    ;
    Z.prototype.v = function() {
        this.b.i("Message channel was disposed, disposing...");
        this.m()
    }
    ;
})();
