! function(e, o) { "object" == typeof exports && "object" == typeof module ? module.exports = o() : "function" == typeof define && define.amd ? define([], o) : "object" == typeof exports ? exports.whats_wrong = o() : e.whats_wrong = o() }(this, (function() { return (() => { "use strict"; var e = { d: (o, t) => { for (var n in t) e.o(t, n) && !e.o(o, n) && Object.defineProperty(o, n, { enumerable: !0, get: t[n] }) }, o: (e, o) => Object.prototype.hasOwnProperty.call(e, o), r: e => { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) } },
            o = {};

        function t(e) { return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) { return typeof e } : function(e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e }, t(e) }

        function n(e) { var o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""; "object" === t(e) && (e = JSON.stringify(e)); var r = { error: e, location: o, expected: n },
                f = JSON.stringify(r); return console.log("\n*** check ***\n" + f + "\n*** end ***\n"), r } return e.r(o), e.d(o, { upset: () => n }), o })() }));