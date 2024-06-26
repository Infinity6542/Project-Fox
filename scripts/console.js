/*! For license information please see editor-js.js.LICENSE.txt */
// Not my property. Props to Mozilla for this.
// This code is not actively used, although it may be in the future.
"use strict";
(self.webpackChunkinteractive_examples =
  self.webpackChunkinteractive_examples || []).push([
  [52],
  {
    971: (t, e, n) => {
      var r = n(557),
        o = n(451),
        a = n(367),
        i = n(503);
      !(function () {
        const t = document.getElementById("static-js"),
          e = t.dataset.feature,
          n = document.getElementById("execute"),
          c = document.querySelector("#console code"),
          s = document.getElementById("reset");
        let d, u, l;
        function y() {
          const e = document.getElementById("editor");
          d = (0, i.zu)(e, t.textContent || "", (0, i.Uv)());
        }
        r.O(e)
          ? (document.documentElement.classList.add("js"),
            t?.dataset.height &&
              document.getElementById("editor").classList.add(t.dataset.height),
            (u = document.getElementById("static")),
            u.classList.add("hidden"),
            (l = document.getElementById("live")),
            l.classList.remove("hidden"),
            (0, o.A)(),
            a.kz(),
            y(),
            n.addEventListener("click", () => {
              (c.textContent = ""),
                d || y(),
                (function (t) {
                  c.classList.add("fade-in");
                  try {
                    new Function(t)();
                  } catch (t) {
                    c.textContent = "Error: " + t?.message;
                  }
                  c.addEventListener("animationend", () =>
                    c.classList.remove("fade-in")
                  );
                })((0, i.RT)(d));
            }),
            s.addEventListener("click", () => window.location.reload()))
          : console.warn(
              `Feature ${e} is not supported; code editor disabled.`
            );
      })();
    },
    451: (t, e, n) => {
      function r(t) {
        let e = "";
        for (let n = 0, a = t.length; n < a; n++)
          "string" == typeof t[n]
            ? (e += '"' + t[n] + '"')
            : Array.isArray(t[n])
            ? ((e += "Array ["), (e += r(t[n])), (e += "]"))
            : (e += o(t[n])),
            n < t.length - 1 && (e += ", ");
        return e;
      }
      function o(t) {
        return null == t || "boolean" == typeof t
          ? String(t)
          : "number" == typeof t
          ? Object.is(t, -0)
            ? "-0"
            : String(t)
          : "bigint" == typeof t
          ? String(t) + "n"
          : "string" == typeof t
          ? t.includes('"')
            ? "'" + t + "'"
            : '"' + t + '"'
          : Array.isArray(t)
          ? "Array [" + r(t) + "]"
          : (function (t) {
              const e = t.constructor ? t.constructor.name : t;
              if ("String" === e) return `String { "${t.valueOf()}" }`;
              if (t === JSON) return "JSON {}";
              if (
                e.match &&
                e.match(/^(ArrayBuffer|SharedArrayBuffer|DataView)$/)
              )
                return e + " {}";
              if (
                e.match &&
                e.match(
                  /^(Int8Array|Int16Array|Int32Array|Uint8Array|Uint16Array|Uint32Array|Uint8ClampedArray|Float32Array|Float64Array|BigInt64Array|BigUint64Array)$/
                )
              )
                return t.length > 0 ? e + " [" + r(t) + "]" : e + " []";
              if ("Symbol" === e && void 0 !== t) return t.toString();
              if ("Object" === e) {
                let n = "",
                  r = !0;
                for (const e in t)
                  Object.prototype.hasOwnProperty.call(t, e) &&
                    (r ? (r = !1) : (n += ", "), (n = n + e + ": " + o(t[e])));
                return e + " { " + n + " }";
              }
              if (!t.constructor && !t.prototype) {
                let e = "",
                  n = !0;
                for (const r in t)
                  n ? (n = !1) : (e += ", "), (e = e + r + ": " + o(t[r]));
                return "Object { " + e + " }";
              }
              return t;
            })(t);
      }
      function a(t) {
        const e = document.querySelector("#console code"),
          n = e.textContent,
          r = "> " + t + "\n";
        e.textContent = n + r;
      }
      function i(t) {
        const e = t ? t.console : window.console,
          n = e.log,
          r = e.error;
        (e.error = function (t, ...n) {
          a(t), r.apply(e, [t, ...n]);
        }),
          (e.log = function (...t) {
            const r = [];
            for (let e = 0, n = t.length; e < n; e++) {
              const n = o(t[e]);
              r.push(n);
            }
            a(r.join(" ")), n.apply(e, t);
          });
      }
      n.d(e, { A: () => i });
    },
    557: (t, e, n) => {
      function r(t) {
        return (
          void 0 === t ||
          void 0 !==
            (function (t) {
              let e;
              switch (t) {
                case "array-entries":
                  e = Array.prototype.entries;
                  break;
                case "shared-array-buffer":
                  e = window.SharedArrayBuffer;
              }
              return e;
            })(t)
        );
      }
      function o() {
        const t = document.createElement("div"),
          e = "http://www.w3.org/1998/Math/MathML",
          n = document.createElementNS(e, "math"),
          r = document.createElementNS(e, "mspace");
        r.setAttribute("height", "23px"),
          r.setAttribute("width", "77px"),
          n.append(r),
          t.append(n),
          t.classList.add("offscreen");
        const o = document.body.appendChild(t);
        if (!r) return !1;
        const a = r.getBoundingClientRect();
        return (
          document.body.removeChild(o),
          !!a && Math.abs(a.height - 23) <= 1 && Math.abs(a.width - 77) <= 1
        );
      }
      n.d(e, { O: () => r, q: () => o });
    },
  },
  (t) => {
    t((t.s = 971));
  },
]);
