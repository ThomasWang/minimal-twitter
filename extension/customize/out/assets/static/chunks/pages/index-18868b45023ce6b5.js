;(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8581: function (e, t, n) {
      ;(window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return n(4549)
        }
      ])
    },
    4549: function (e, t, n) {
      "use strict"
      n.r(t),
        n.d(t, {
          default: function () {
            return ht
          }
        })
      var r,
        o = n(5893),
        i =
          (n(2469),
          function (e) {
            var t = e.children
            return (0, o.jsx)("div", {
              className: "flex justify-center w-full",
              children: (0, o.jsx)("div", {
                className: "flex flex-col p-1 font-sans text-white w-[420px]",
                children: t
              })
            })
          }),
        l = function () {
          return (0, o.jsxs)("header", {
            className: "text-center",
            children: [
              (0, o.jsx)("h1", {
                className: "text-xl font-extrabold",
                children: (0, o.jsx)("span", { children: "Customize more" })
              }),
              (0, o.jsxs)("p", {
                className: "text-[#8899a6] leading-5 text-[15px] pb-5 pt-3",
                children: [
                  "Manage feed width, navigation, and extras. ",
                  (0, o.jsx)("br", {}),
                  "Or go to display settings at",
                  " ",
                  (0, o.jsx)("a", {
                    href: "https://twitter.com/i/display",
                    className: "text-twitterBlue hover:underline",
                    children: "twitter.com/i/display"
                  }),
                  "."
                ]
              })
            ]
          })
        },
        s = function () {
          return (0, o.jsx)("footer", {
            className: "flex justify-center w-full pt-6",
            children: (0, o.jsx)("button", {
              type: "button",
              className:
                "inline-flex items-center px-4 py-2 text-[15px] font-bold text-white border border-transparent rounded-full shadow-sm bg-[#1d9bf0] hover:bg-[#1a8cd8] focus:outline-none w-fit",
              children: "Done"
            })
          })
        },
        a = n(7294),
        c = "colors",
        d = "sizes",
        u = "space",
        f = {
          gap: u,
          gridGap: u,
          columnGap: u,
          gridColumnGap: u,
          rowGap: u,
          gridRowGap: u,
          inset: u,
          insetBlock: u,
          insetBlockEnd: u,
          insetBlockStart: u,
          insetInline: u,
          insetInlineEnd: u,
          insetInlineStart: u,
          margin: u,
          marginTop: u,
          marginRight: u,
          marginBottom: u,
          marginLeft: u,
          marginBlock: u,
          marginBlockEnd: u,
          marginBlockStart: u,
          marginInline: u,
          marginInlineEnd: u,
          marginInlineStart: u,
          padding: u,
          paddingTop: u,
          paddingRight: u,
          paddingBottom: u,
          paddingLeft: u,
          paddingBlock: u,
          paddingBlockEnd: u,
          paddingBlockStart: u,
          paddingInline: u,
          paddingInlineEnd: u,
          paddingInlineStart: u,
          top: u,
          right: u,
          bottom: u,
          left: u,
          scrollMargin: u,
          scrollMarginTop: u,
          scrollMarginRight: u,
          scrollMarginBottom: u,
          scrollMarginLeft: u,
          scrollMarginX: u,
          scrollMarginY: u,
          scrollMarginBlock: u,
          scrollMarginBlockEnd: u,
          scrollMarginBlockStart: u,
          scrollMarginInline: u,
          scrollMarginInlineEnd: u,
          scrollMarginInlineStart: u,
          scrollPadding: u,
          scrollPaddingTop: u,
          scrollPaddingRight: u,
          scrollPaddingBottom: u,
          scrollPaddingLeft: u,
          scrollPaddingX: u,
          scrollPaddingY: u,
          scrollPaddingBlock: u,
          scrollPaddingBlockEnd: u,
          scrollPaddingBlockStart: u,
          scrollPaddingInline: u,
          scrollPaddingInlineEnd: u,
          scrollPaddingInlineStart: u,
          fontSize: "fontSizes",
          background: c,
          backgroundColor: c,
          backgroundImage: c,
          borderImage: c,
          border: c,
          borderBlock: c,
          borderBlockEnd: c,
          borderBlockStart: c,
          borderBottom: c,
          borderBottomColor: c,
          borderColor: c,
          borderInline: c,
          borderInlineEnd: c,
          borderInlineStart: c,
          borderLeft: c,
          borderLeftColor: c,
          borderRight: c,
          borderRightColor: c,
          borderTop: c,
          borderTopColor: c,
          caretColor: c,
          color: c,
          columnRuleColor: c,
          fill: c,
          outline: c,
          outlineColor: c,
          stroke: c,
          textDecorationColor: c,
          fontFamily: "fonts",
          fontWeight: "fontWeights",
          lineHeight: "lineHeights",
          letterSpacing: "letterSpacings",
          blockSize: d,
          minBlockSize: d,
          maxBlockSize: d,
          inlineSize: d,
          minInlineSize: d,
          maxInlineSize: d,
          width: d,
          minWidth: d,
          maxWidth: d,
          height: d,
          minHeight: d,
          maxHeight: d,
          flexBasis: d,
          gridTemplateColumns: d,
          gridTemplateRows: d,
          borderWidth: "borderWidths",
          borderTopWidth: "borderWidths",
          borderRightWidth: "borderWidths",
          borderBottomWidth: "borderWidths",
          borderLeftWidth: "borderWidths",
          borderStyle: "borderStyles",
          borderTopStyle: "borderStyles",
          borderRightStyle: "borderStyles",
          borderBottomStyle: "borderStyles",
          borderLeftStyle: "borderStyles",
          borderRadius: "radii",
          borderTopLeftRadius: "radii",
          borderTopRightRadius: "radii",
          borderBottomRightRadius: "radii",
          borderBottomLeftRadius: "radii",
          boxShadow: "shadows",
          textShadow: "shadows",
          transition: "transitions",
          zIndex: "zIndices"
        },
        p = (e, t) =>
          "function" == typeof t
            ? { "()": Function.prototype.toString.call(t) }
            : t,
        m = () => {
          const e = Object.create(null)
          return (t, n, ...r) => {
            const o = ((e) => JSON.stringify(e, p))(t)
            return o in e ? e[o] : (e[o] = n(t, ...r))
          }
        },
        h = Symbol.for("sxs.internal"),
        g = (e, t) =>
          Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)),
        b = (e) => {
          for (const t in e) return !0
          return !1
        },
        { hasOwnProperty: x } = Object.prototype,
        S = (e) =>
          e.includes("-")
            ? e
            : e.replace(/[A-Z]/g, (e) => "-" + e.toLowerCase()),
        y = /\s+(?![^()]*\))/,
        v = (e) => (t) =>
          e(...("string" == typeof t ? String(t).split(y) : [t])),
        w = {
          appearance: (e) => ({ WebkitAppearance: e, appearance: e }),
          backfaceVisibility: (e) => ({
            WebkitBackfaceVisibility: e,
            backfaceVisibility: e
          }),
          backdropFilter: (e) => ({
            WebkitBackdropFilter: e,
            backdropFilter: e
          }),
          backgroundClip: (e) => ({
            WebkitBackgroundClip: e,
            backgroundClip: e
          }),
          boxDecorationBreak: (e) => ({
            WebkitBoxDecorationBreak: e,
            boxDecorationBreak: e
          }),
          clipPath: (e) => ({ WebkitClipPath: e, clipPath: e }),
          content: (e) => ({
            content:
              e.includes('"') ||
              e.includes("'") ||
              /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(
                e
              )
                ? e
                : `"${e}"`
          }),
          hyphens: (e) => ({ WebkitHyphens: e, hyphens: e }),
          maskImage: (e) => ({ WebkitMaskImage: e, maskImage: e }),
          maskSize: (e) => ({ WebkitMaskSize: e, maskSize: e }),
          tabSize: (e) => ({ MozTabSize: e, tabSize: e }),
          textSizeAdjust: (e) => ({
            WebkitTextSizeAdjust: e,
            textSizeAdjust: e
          }),
          userSelect: (e) => ({ WebkitUserSelect: e, userSelect: e }),
          marginBlock: v((e, t) => ({
            marginBlockStart: e,
            marginBlockEnd: t || e
          })),
          marginInline: v((e, t) => ({
            marginInlineStart: e,
            marginInlineEnd: t || e
          })),
          maxSize: v((e, t) => ({ maxBlockSize: e, maxInlineSize: t || e })),
          minSize: v((e, t) => ({ minBlockSize: e, minInlineSize: t || e })),
          paddingBlock: v((e, t) => ({
            paddingBlockStart: e,
            paddingBlockEnd: t || e
          })),
          paddingInline: v((e, t) => ({
            paddingInlineStart: e,
            paddingInlineEnd: t || e
          }))
        },
        k = /([\d.]+)([^]*)/,
        E = (e, t) =>
          e.length
            ? e.reduce(
                (e, n) => (
                  e.push(
                    ...t.map((e) =>
                      e.includes("&")
                        ? e.replace(
                            /&/g,
                            /[ +>|~]/.test(n) && /&.*&/.test(e)
                              ? `:is(${n})`
                              : n
                          )
                        : n + " " + e
                    )
                  ),
                  e
                ),
                []
              )
            : t,
        R = (e, t) =>
          e in j && "string" == typeof t
            ? t.replace(
                /^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,
                (t, n, r, o) =>
                  n +
                  ("stretch" === r
                    ? `-moz-available${o};${S(e)}:${n}-webkit-fill-available`
                    : `-moz-fit-content${o};${S(e)}:${n}fit-content`) +
                  o
              )
            : String(t),
        j = {
          blockSize: 1,
          height: 1,
          inlineSize: 1,
          maxBlockSize: 1,
          maxHeight: 1,
          maxInlineSize: 1,
          maxWidth: 1,
          minBlockSize: 1,
          minHeight: 1,
          minInlineSize: 1,
          minWidth: 1,
          width: 1
        },
        B = (e) => (e ? e + "-" : ""),
        M = (e, t, n) =>
          e.replace(
            /([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,
            (e, r, o, i, l) =>
              ("$" == i) == !!o
                ? e
                : (r || "--" == i ? "calc(" : "") +
                  "var(--" +
                  ("$" === i
                    ? B(t) +
                      (l.includes("$") ? "" : B(n)) +
                      l.replace(/\$/g, "-")
                    : l) +
                  ")" +
                  (r || "--" == i ? "*" + (r || "") + (o || "1") + ")" : "")
          ),
        C = /\s*,\s*(?![^()]*\))/,
        N = Object.prototype.toString,
        $ = (e, t, n, r, o) => {
          let i, l, s
          const a = (e, t, n) => {
            let c, d
            const u = (e) => {
              for (c in e) {
                const m = 64 === c.charCodeAt(0),
                  h = m && Array.isArray(e[c]) ? e[c] : [e[c]]
                for (d of h) {
                  const e = /[A-Z]/.test((p = c))
                      ? p
                      : p.replace(/-[^]/g, (e) => e[1].toUpperCase()),
                    h =
                      "object" == typeof d &&
                      d &&
                      d.toString === N &&
                      (!r.utils[e] || !t.length)
                  if (e in r.utils && !h) {
                    const t = r.utils[e]
                    if (t !== l) {
                      ;(l = t), u(t(d)), (l = null)
                      continue
                    }
                  } else if (e in w) {
                    const t = w[e]
                    if (t !== s) {
                      ;(s = t), u(t(d)), (s = null)
                      continue
                    }
                  }
                  if (
                    (m &&
                      ((f =
                        c.slice(1) in r.media
                          ? "@media " + r.media[c.slice(1)]
                          : c),
                      (c = f.replace(
                        /\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,
                        (e, t, n, r, o, i) => {
                          const l = k.test(t),
                            s = 0.0625 * (l ? -1 : 1),
                            [a, c] = l ? [r, t] : [t, r]
                          return (
                            "(" +
                            ("=" === n[0]
                              ? ""
                              : (">" === n[0]) === l
                              ? "max-"
                              : "min-") +
                            a +
                            ":" +
                            ("=" !== n[0] && 1 === n.length
                              ? c.replace(
                                  k,
                                  (e, t, r) =>
                                    Number(t) + s * (">" === n ? 1 : -1) + r
                                )
                              : c) +
                            (o
                              ? ") and (" +
                                (">" === o[0] ? "min-" : "max-") +
                                a +
                                ":" +
                                (1 === o.length
                                  ? i.replace(
                                      k,
                                      (e, t, n) =>
                                        Number(t) + s * (">" === o ? -1 : 1) + n
                                    )
                                  : i)
                              : "") +
                            ")"
                          )
                        }
                      ))),
                    h)
                  ) {
                    const e = m ? n.concat(c) : [...n],
                      r = m ? [...t] : E(t, c.split(C))
                    void 0 !== i && o(I(...i)), (i = void 0), a(d, r, e)
                  } else
                    void 0 === i && (i = [[], t, n]),
                      (c =
                        m || 36 !== c.charCodeAt(0)
                          ? c
                          : `--${B(r.prefix)}${c
                              .slice(1)
                              .replace(/\$/g, "-")}`),
                      (d = h
                        ? d
                        : "number" == typeof d
                        ? d && e in z
                          ? String(d) + "px"
                          : String(d)
                        : M(R(e, null == d ? "" : d), r.prefix, r.themeMap[e])),
                      i[0].push(`${m ? `${c} ` : `${S(c)}:`}${d}`)
                }
              }
              var f, p
            }
            u(e), void 0 !== i && o(I(...i)), (i = void 0)
          }
          a(e, t, n)
        },
        I = (e, t, n) =>
          `${n.map((e) => `${e}{`).join("")}${
            t.length ? `${t.join(",")}{` : ""
          }${e.join(";")}${t.length ? "}" : ""}${Array(
            n.length ? n.length + 1 : 0
          ).join("}")}`,
        z = {
          animationDelay: 1,
          animationDuration: 1,
          backgroundSize: 1,
          blockSize: 1,
          border: 1,
          borderBlock: 1,
          borderBlockEnd: 1,
          borderBlockEndWidth: 1,
          borderBlockStart: 1,
          borderBlockStartWidth: 1,
          borderBlockWidth: 1,
          borderBottom: 1,
          borderBottomLeftRadius: 1,
          borderBottomRightRadius: 1,
          borderBottomWidth: 1,
          borderEndEndRadius: 1,
          borderEndStartRadius: 1,
          borderInlineEnd: 1,
          borderInlineEndWidth: 1,
          borderInlineStart: 1,
          borderInlineStartWidth: 1,
          borderInlineWidth: 1,
          borderLeft: 1,
          borderLeftWidth: 1,
          borderRadius: 1,
          borderRight: 1,
          borderRightWidth: 1,
          borderSpacing: 1,
          borderStartEndRadius: 1,
          borderStartStartRadius: 1,
          borderTop: 1,
          borderTopLeftRadius: 1,
          borderTopRightRadius: 1,
          borderTopWidth: 1,
          borderWidth: 1,
          bottom: 1,
          columnGap: 1,
          columnRule: 1,
          columnRuleWidth: 1,
          columnWidth: 1,
          containIntrinsicSize: 1,
          flexBasis: 1,
          fontSize: 1,
          gap: 1,
          gridAutoColumns: 1,
          gridAutoRows: 1,
          gridTemplateColumns: 1,
          gridTemplateRows: 1,
          height: 1,
          inlineSize: 1,
          inset: 1,
          insetBlock: 1,
          insetBlockEnd: 1,
          insetBlockStart: 1,
          insetInline: 1,
          insetInlineEnd: 1,
          insetInlineStart: 1,
          left: 1,
          letterSpacing: 1,
          margin: 1,
          marginBlock: 1,
          marginBlockEnd: 1,
          marginBlockStart: 1,
          marginBottom: 1,
          marginInline: 1,
          marginInlineEnd: 1,
          marginInlineStart: 1,
          marginLeft: 1,
          marginRight: 1,
          marginTop: 1,
          maxBlockSize: 1,
          maxHeight: 1,
          maxInlineSize: 1,
          maxWidth: 1,
          minBlockSize: 1,
          minHeight: 1,
          minInlineSize: 1,
          minWidth: 1,
          offsetDistance: 1,
          offsetRotate: 1,
          outline: 1,
          outlineOffset: 1,
          outlineWidth: 1,
          overflowClipMargin: 1,
          padding: 1,
          paddingBlock: 1,
          paddingBlockEnd: 1,
          paddingBlockStart: 1,
          paddingBottom: 1,
          paddingInline: 1,
          paddingInlineEnd: 1,
          paddingInlineStart: 1,
          paddingLeft: 1,
          paddingRight: 1,
          paddingTop: 1,
          perspective: 1,
          right: 1,
          rowGap: 1,
          scrollMargin: 1,
          scrollMarginBlock: 1,
          scrollMarginBlockEnd: 1,
          scrollMarginBlockStart: 1,
          scrollMarginBottom: 1,
          scrollMarginInline: 1,
          scrollMarginInlineEnd: 1,
          scrollMarginInlineStart: 1,
          scrollMarginLeft: 1,
          scrollMarginRight: 1,
          scrollMarginTop: 1,
          scrollPadding: 1,
          scrollPaddingBlock: 1,
          scrollPaddingBlockEnd: 1,
          scrollPaddingBlockStart: 1,
          scrollPaddingBottom: 1,
          scrollPaddingInline: 1,
          scrollPaddingInlineEnd: 1,
          scrollPaddingInlineStart: 1,
          scrollPaddingLeft: 1,
          scrollPaddingRight: 1,
          scrollPaddingTop: 1,
          shapeMargin: 1,
          textDecoration: 1,
          textDecorationThickness: 1,
          textIndent: 1,
          textUnderlineOffset: 1,
          top: 1,
          transitionDelay: 1,
          transitionDuration: 1,
          verticalAlign: 1,
          width: 1,
          wordSpacing: 1
        },
        P = (e) => String.fromCharCode(e + (e > 25 ? 39 : 97)),
        T = (e) =>
          ((e) => {
            let t,
              n = ""
            for (t = Math.abs(e); t > 52; t = (t / 52) | 0) n = P(t % 52) + n
            return P(t % 52) + n
          })(
            ((e, t) => {
              let n = t.length
              for (; n; ) e = (33 * e) ^ t.charCodeAt(--n)
              return e
            })(5381, JSON.stringify(e)) >>> 0
          ),
        W = [
          "themed",
          "global",
          "styled",
          "onevar",
          "resonevar",
          "allvar",
          "inline"
        ],
        O = (e) => {
          if (e.href && !e.href.startsWith(location.origin)) return !1
          try {
            return e.cssRules, !0
          } catch (e) {
            return !1
          }
        },
        A = (e) => {
          let t
          const n = () => {
            if (t) {
              const { rules: e, sheet: n } = t
              if (!n.deleteRule) {
                for (; 3 === Object(Object(n.cssRules)[0]).type; )
                  n.cssRules.splice(0, 1)
                n.cssRules = []
              }
              for (const t in e) delete e[t]
            }
            const r = Object(e).styleSheets || []
            for (const e of r)
              if (O(e)) {
                for (let r = 0, o = e.cssRules; o[r]; ++r) {
                  const i = Object(o[r])
                  if (1 !== i.type) continue
                  const l = Object(o[r + 1])
                  if (4 !== l.type) continue
                  ++r
                  const { cssText: s } = i
                  if (!s.startsWith("--sxs")) continue
                  const a = s.slice(14, -3).trim().split(/\s+/),
                    c = W[a[0]]
                  c &&
                    (t || (t = { sheet: e, reset: n, rules: {} }),
                    (t.rules[c] = { group: l, index: r, cache: new Set(a) }))
                }
                if (t) break
              }
            if (!t) {
              const r = (e, t) => ({
                type: t,
                cssRules: [],
                insertRule(e, t) {
                  this.cssRules.splice(
                    t,
                    0,
                    r(
                      e,
                      { import: 3, undefined: 1 }[
                        (e.toLowerCase().match(/^@([a-z]+)/) || [])[1]
                      ] || 4
                    )
                  )
                },
                get cssText() {
                  return "@media{}" === e
                    ? `@media{${[].map
                        .call(this.cssRules, (e) => e.cssText)
                        .join("")}}`
                    : e
                }
              })
              t = {
                sheet: e
                  ? (e.head || e).appendChild(document.createElement("style"))
                      .sheet
                  : r("", "text/css"),
                rules: {},
                reset: n,
                toString() {
                  const { cssRules: e } = t.sheet
                  return [].map
                    .call(e, (n, r) => {
                      const { cssText: o } = n
                      let i = ""
                      if (o.startsWith("--sxs")) return ""
                      if (
                        e[r - 1] &&
                        (i = e[r - 1].cssText).startsWith("--sxs")
                      ) {
                        if (!n.cssRules.length) return ""
                        for (const e in t.rules)
                          if (t.rules[e].group === n)
                            return `--sxs{--sxs:${[...t.rules[e].cache].join(
                              " "
                            )}}${o}`
                        return n.cssRules.length ? `${i}${o}` : ""
                      }
                      return o
                    })
                    .join("")
                }
              }
            }
            const { sheet: o, rules: i } = t
            for (let e = W.length - 1; e >= 0; --e) {
              const t = W[e]
              if (!i[t]) {
                const n = W[e + 1],
                  r = i[n] ? i[n].index : o.cssRules.length
                o.insertRule("@media{}", r),
                  o.insertRule(`--sxs{--sxs:${e}}`, r),
                  (i[t] = {
                    group: o.cssRules[r + 1],
                    index: r,
                    cache: new Set([e])
                  })
              }
              _(i[t])
            }
          }
          return n(), t
        },
        _ = (e) => {
          const t = e.group
          let n = t.cssRules.length
          e.apply = (e) => {
            try {
              t.insertRule(e, n), ++n
            } catch {}
          }
        },
        D = Symbol(),
        L = m(),
        H = (e, t) =>
          L(e, () => (...n) => {
            let r = { type: null, composers: new Set() }
            for (const t of n)
              if (null != t)
                if (t[h]) {
                  null == r.type && (r.type = t[h].type)
                  for (const e of t[h].composers) r.composers.add(e)
                } else
                  t.constructor !== Object || t.$$typeof
                    ? null == r.type && (r.type = t)
                    : r.composers.add(q(t, e))
            return (
              null == r.type && (r.type = "span"),
              r.composers.size || r.composers.add(["PJLV", {}, [], [], {}, []]),
              F(e, r, t)
            )
          }),
        q = (
          { variants: e, compoundVariants: t, defaultVariants: n, ...r },
          o
        ) => {
          const i = `${B(o.prefix)}c-${T(r)}`,
            l = [],
            s = [],
            a = Object.create(null),
            c = []
          for (const f in n) a[f] = String(n[f])
          if ("object" == typeof e && e)
            for (const f in e) {
              ;(d = a), (u = f), x.call(d, u) || (a[f] = "undefined")
              const t = e[f]
              for (const e in t) {
                const n = { [f]: String(e) }
                "undefined" === String(e) && c.push(f)
                const r = t[e],
                  o = [n, r, !b(r)]
                l.push(o)
              }
            }
          var d, u
          if ("object" == typeof t && t)
            for (const f of t) {
              let { css: e, ...t } = f
              e = ("object" == typeof e && e) || {}
              for (const r in t) t[r] = String(t[r])
              const n = [t, e, !b(e)]
              s.push(n)
            }
          return [i, r, l, s, a, c]
        },
        F = (e, t, n) => {
          const [r, o, i, l] = V(t.composers),
            s =
              "function" == typeof t.type || t.type.$$typeof
                ? ((e) => {
                    function t() {
                      for (let n = 0; n < t[D].length; n++) {
                        const [r, o] = t[D][n]
                        e.rules[r].apply(o)
                      }
                      return (t[D] = []), null
                    }
                    return (
                      (t[D] = []),
                      (t.rules = {}),
                      W.forEach(
                        (e) =>
                          (t.rules[e] = { apply: (n) => t[D].push([e, n]) })
                      ),
                      t
                    )
                  })(n)
                : null,
            a = (s || n).rules,
            c = `.${r}${
              o.length > 1 ? `:where(.${o.slice(1).join(".")})` : ""
            }`,
            d = (d) => {
              d = ("object" == typeof d && d) || K
              const { css: u, ...f } = d,
                p = {}
              for (const e in i)
                if ((delete f[e], e in d)) {
                  let t = d[e]
                  "object" == typeof t && t
                    ? (p[e] = { "@initial": i[e], ...t })
                    : ((t = String(t)),
                      (p[e] = "undefined" !== t || l.has(e) ? t : i[e]))
                } else p[e] = i[e]
              const m = new Set([...o])
              for (const [r, o, i, l] of t.composers) {
                n.rules.styled.cache.has(r) ||
                  (n.rules.styled.cache.add(r),
                  $(o, [`.${r}`], [], e, (e) => {
                    a.styled.apply(e)
                  }))
                const t = U(i, p, e.media),
                  s = U(l, p, e.media, !0)
                for (const o of t)
                  if (void 0 !== o)
                    for (const [t, i, l] of o) {
                      const o = `${r}-${T(i)}-${t}`
                      m.add(o)
                      const s = (l ? n.rules.resonevar : n.rules.onevar).cache,
                        c = l ? a.resonevar : a.onevar
                      s.has(o) ||
                        (s.add(o),
                        $(i, [`.${o}`], [], e, (e) => {
                          c.apply(e)
                        }))
                    }
                for (const o of s)
                  if (void 0 !== o)
                    for (const [t, i] of o) {
                      const o = `${r}-${T(i)}-${t}`
                      m.add(o),
                        n.rules.allvar.cache.has(o) ||
                          (n.rules.allvar.cache.add(o),
                          $(i, [`.${o}`], [], e, (e) => {
                            a.allvar.apply(e)
                          }))
                    }
              }
              if ("object" == typeof u && u) {
                const t = `${r}-i${T(u)}-css`
                m.add(t),
                  n.rules.inline.cache.has(t) ||
                    (n.rules.inline.cache.add(t),
                    $(u, [`.${t}`], [], e, (e) => {
                      a.inline.apply(e)
                    }))
              }
              for (const e of String(d.className || "")
                .trim()
                .split(/\s+/))
                e && m.add(e)
              const h = (f.className = [...m].join(" "))
              return {
                type: t.type,
                className: h,
                selector: c,
                props: f,
                toString: () => h,
                deferredInjector: s
              }
            }
          return g(d, {
            className: r,
            selector: c,
            [h]: t,
            toString: () => (n.rules.styled.cache.has(r) || d(), r)
          })
        },
        V = (e) => {
          let t = ""
          const n = [],
            r = {},
            o = []
          for (const [i, , , , l, s] of e) {
            "" === t && (t = i), n.push(i), o.push(...s)
            for (const e in l) {
              const t = l[e]
              ;(void 0 === r[e] || "undefined" !== t || s.includes(t)) &&
                (r[e] = t)
            }
          }
          return [t, n, r, new Set(o)]
        },
        U = (e, t, n, r) => {
          const o = []
          e: for (let [i, l, s] of e) {
            if (s) continue
            let e,
              a = 0,
              c = !1
            for (e in i) {
              const r = i[e]
              let o = t[e]
              if (o !== r) {
                if ("object" != typeof o || !o) continue e
                {
                  let e,
                    t,
                    i = 0
                  for (const l in o) {
                    if (r === String(o[l])) {
                      if ("@initial" !== l) {
                        const e = l.slice(1)
                        ;(t = t || []).push(
                          e in n ? n[e] : l.replace(/^@media ?/, "")
                        ),
                          (c = !0)
                      }
                      ;(a += i), (e = !0)
                    }
                    ++i
                  }
                  if (
                    (t && t.length && (l = { ["@media " + t.join(", ")]: l }),
                    !e)
                  )
                    continue e
                }
              }
            }
            ;(o[a] = o[a] || []).push([r ? "cv" : `${e}-${i[e]}`, l, c])
          }
          return o
        },
        K = {},
        G = m(),
        X = (e, t) =>
          G(e, () => (...n) => {
            const r = () => {
              for (let r of n) {
                r = ("object" == typeof r && r) || {}
                let n = T(r)
                if (!t.rules.global.cache.has(n)) {
                  if ((t.rules.global.cache.add(n), "@import" in r)) {
                    let e =
                      [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) -
                      1
                    for (let n of [].concat(r["@import"]))
                      (n = n.includes('"') || n.includes("'") ? n : `"${n}"`),
                        t.sheet.insertRule(`@import ${n};`, e++)
                    delete r["@import"]
                  }
                  $(r, [], [], e, (e) => {
                    t.rules.global.apply(e)
                  })
                }
              }
              return ""
            }
            return g(r, { toString: r })
          }),
        Y = m(),
        Z = (e, t) =>
          Y(e, () => (n) => {
            const r = `${B(e.prefix)}k-${T(n)}`,
              o = () => {
                if (!t.rules.global.cache.has(r)) {
                  t.rules.global.cache.add(r)
                  const o = []
                  $(n, [], [], e, (e) => o.push(e))
                  const i = `@keyframes ${r}{${o.join("")}}`
                  t.rules.global.apply(i)
                }
                return r
              }
            return g(o, {
              get name() {
                return o()
              },
              toString: o
            })
          }),
        J = class {
          constructor(e, t, n, r) {
            ;(this.token = null == e ? "" : String(e)),
              (this.value = null == t ? "" : String(t)),
              (this.scale = null == n ? "" : String(n)),
              (this.prefix = null == r ? "" : String(r))
          }
          get computedValue() {
            return "var(" + this.variable + ")"
          }
          get variable() {
            return "--" + B(this.prefix) + B(this.scale) + this.token
          }
          toString() {
            return this.computedValue
          }
        },
        Q = m(),
        ee = (e, t) =>
          Q(e, () => (n, r) => {
            r = ("object" == typeof n && n) || Object(r)
            const o = `.${(n =
                (n = "string" == typeof n ? n : "") ||
                `${B(e.prefix)}t-${T(r)}`)}`,
              i = {},
              l = []
            for (const t in r) {
              i[t] = {}
              for (const n in r[t]) {
                const o = `--${B(e.prefix)}${t}-${n}`,
                  s = M(String(r[t][n]), e.prefix, t)
                ;(i[t][n] = new J(n, s, t, e.prefix)), l.push(`${o}:${s}`)
              }
            }
            const s = () => {
              if (l.length && !t.rules.themed.cache.has(n)) {
                t.rules.themed.cache.add(n)
                const o = `${r === e.theme ? ":root," : ""}.${n}{${l.join(
                  ";"
                )}}`
                t.rules.themed.apply(o)
              }
              return n
            }
            return {
              ...i,
              get className() {
                return s()
              },
              selector: o,
              toString: s
            }
          }),
        te = m(),
        ne = m(),
        re = () =>
          r ||
          (r = ((e) => {
            const t = ((e) => {
              let t = !1
              const n = te(e, (e) => {
                t = !0
                const n =
                    "prefix" in (e = ("object" == typeof e && e) || {})
                      ? String(e.prefix)
                      : "",
                  r = ("object" == typeof e.media && e.media) || {},
                  o =
                    "object" == typeof e.root
                      ? e.root || null
                      : globalThis.document || null,
                  i = ("object" == typeof e.theme && e.theme) || {},
                  l = {
                    prefix: n,
                    media: r,
                    theme: i,
                    themeMap: ("object" == typeof e.themeMap && e.themeMap) || {
                      ...f
                    },
                    utils: ("object" == typeof e.utils && e.utils) || {}
                  },
                  s = A(o),
                  a = {
                    css: H(l, s),
                    globalCss: X(l, s),
                    keyframes: Z(l, s),
                    createTheme: ee(l, s),
                    reset() {
                      s.reset(), a.theme.toString()
                    },
                    theme: {},
                    sheet: s,
                    config: l,
                    prefix: n,
                    getCssText: s.toString,
                    toString: s.toString
                  }
                return String((a.theme = a.createTheme(i))), a
              })
              return t || n.reset(), n
            })(e)
            return (
              (t.styled = (({ config: e, sheet: t }) =>
                ne(e, () => {
                  const n = H(e, t)
                  return (...e) => {
                    const t = n(...e),
                      r = t[h].type,
                      o = a.forwardRef((e, n) => {
                        const o = (e && e.as) || r,
                          { props: i, deferredInjector: l } = t(e)
                        return (
                          delete i.as,
                          (i.ref = n),
                          l
                            ? a.createElement(
                                a.Fragment,
                                null,
                                a.createElement(o, i),
                                a.createElement(l, null)
                              )
                            : a.createElement(o, i)
                        )
                      })
                    return (
                      (o.className = t.className),
                      (o.displayName = `Styled.${
                        r.displayName || r.name || r
                      }`),
                      (o.selector = t.selector),
                      (o.toString = () => t.selector),
                      (o[h] = t[h]),
                      o
                    )
                  }
                }))(t)),
              t
            )
          })()),
        oe = (...e) => re().styled(...e)
      function ie(...e) {
        return (t) =>
          e.forEach((e) =>
            (function (e, t) {
              "function" == typeof e ? e(t) : null != e && (e.current = t)
            })(e, t)
          )
      }
      function le(...e) {
        return a.useCallback(ie(...e), e)
      }
      function se() {
        return (se =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t]
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
          }).apply(this, arguments)
      }
      const ae = a.forwardRef((e, t) => {
        const { children: n, ...r } = e
        return a.Children.toArray(n).some(ue)
          ? a.createElement(
              a.Fragment,
              null,
              a.Children.map(n, (e) =>
                ue(e)
                  ? a.createElement(ce, se({}, r, { ref: t }), e.props.children)
                  : e
              )
            )
          : a.createElement(ce, se({}, r, { ref: t }), n)
      })
      ae.displayName = "Slot"
      const ce = a.forwardRef((e, t) => {
        const { children: n, ...r } = e
        return a.isValidElement(n)
          ? a.cloneElement(n, { ...fe(r, n.props), ref: ie(t, n.ref) })
          : a.Children.count(n) > 1
          ? a.Children.only(null)
          : null
      })
      ce.displayName = "SlotClone"
      const de = ({ children: e }) => a.createElement(a.Fragment, null, e)
      function ue(e) {
        return a.isValidElement(e) && e.type === de
      }
      function fe(e, t) {
        const n = { ...t }
        for (const r in t) {
          const o = e[r],
            i = t[r]
          ;/^on[A-Z]/.test(r)
            ? (n[r] = (...e) => {
                null == i || i(...e), null == o || o(...e)
              })
            : "style" === r
            ? (n[r] = { ...o, ...i })
            : "className" === r && (n[r] = [o, i].filter(Boolean).join(" "))
        }
        return { ...e, ...n }
      }
      function pe(e, t = []) {
        let n = []
        const r = () => {
          const t = n.map((e) => a.createContext(e))
          return function (n) {
            const r = (null == n ? void 0 : n[e]) || t
            return a.useMemo(
              () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
              [n, r]
            )
          }
        }
        return (
          (r.scopeName = e),
          [
            function (t, r) {
              const o = a.createContext(r),
                i = n.length
              function l(t) {
                const { scope: n, children: r, ...l } = t,
                  s = (null == n ? void 0 : n[e][i]) || o,
                  c = a.useMemo(() => l, Object.values(l))
                return a.createElement(s.Provider, { value: c }, r)
              }
              return (
                (n = [...n, r]),
                (l.displayName = t + "Provider"),
                [
                  l,
                  function (n, l) {
                    const s = (null == l ? void 0 : l[e][i]) || o,
                      c = a.useContext(s)
                    if (c) return c
                    if (void 0 !== r) return r
                    throw new Error(`\`${n}\` must be used within \`${t}\``)
                  }
                ]
              )
            },
            me(r, ...t)
          ]
        )
      }
      function me(...e) {
        const t = e[0]
        if (1 === e.length) return t
        const n = () => {
          const n = e.map((e) => ({ useScope: e(), scopeName: e.scopeName }))
          return function (e) {
            const r = n.reduce(
              (t, { useScope: n, scopeName: r }) => ({
                ...t,
                ...n(e)[`__scope${r}`]
              }),
              {}
            )
            return a.useMemo(() => ({ [`__scope${t.scopeName}`]: r }), [r])
          }
        }
        return (n.scopeName = t.scopeName), n
      }
      const he = [
          "a",
          "button",
          "div",
          "h2",
          "h3",
          "img",
          "li",
          "nav",
          "p",
          "span",
          "svg",
          "ul"
        ].reduce(
          (e, t) => ({
            ...e,
            [t]: a.forwardRef((e, n) => {
              const { asChild: r, ...o } = e,
                i = r ? ae : t
              return (
                a.useEffect(() => {
                  window[Symbol.for("radix-ui")] = !0
                }, []),
                e.as && console.error(ge),
                a.createElement(i, se({}, o, { ref: n }))
              )
            })
          }),
          {}
        ),
        ge =
          "Warning: The `as` prop has been removed in favour of `asChild`. For details, see https://radix-ui.com/docs/primitives/overview/styling#changing-the-rendered-element"
      function be(e) {
        const [t, n] = a.useState(void 0)
        return (
          a.useEffect(() => {
            if (e) {
              const t = new ResizeObserver((t) => {
                if (!Array.isArray(t)) return
                if (!t.length) return
                const r = t[0]
                let o, i
                if ("borderBoxSize" in r) {
                  const e = r.borderBoxSize,
                    t = Array.isArray(e) ? e[0] : e
                  ;(o = t.inlineSize), (i = t.blockSize)
                } else {
                  const t = e.getBoundingClientRect()
                  ;(o = t.width), (i = t.height)
                }
                n({ width: o, height: i })
              })
              return (
                t.observe(e, { box: "border-box" }),
                () => {
                  n(void 0), t.unobserve(e)
                }
              )
            }
          }, [e]),
          t
        )
      }
      function xe(e) {
        const t = a.useRef(e)
        return (
          a.useEffect(() => {
            t.current = e
          }, [e]),
          t.current
        )
      }
      function Se(e) {
        const t = a.useRef(e)
        return (
          a.useEffect(() => {
            t.current = e
          }),
          a.useMemo(
            () =>
              (...e) => {
                var n
                return null === (n = t.current) || void 0 === n
                  ? void 0
                  : n.call(t, ...e)
              },
            []
          )
        )
      }
      function ye({ prop: e, defaultProp: t, onChange: n = () => {} }) {
        const [r, o] = (function ({ defaultProp: e, onChange: t }) {
            const n = a.useState(e),
              [r] = n,
              o = a.useRef(r),
              i = Se(t)
            return (
              a.useEffect(() => {
                o.current !== r && (i(r), (o.current = r))
              }, [r, o, i]),
              n
            )
          })({ defaultProp: t, onChange: n }),
          i = void 0 !== e,
          l = i ? e : r,
          s = Se(n)
        return [
          l,
          a.useCallback(
            (t) => {
              if (i) {
                const n = t,
                  r = "function" == typeof t ? n(e) : t
                r !== e && s(r)
              } else o(t)
            },
            [i, e, o, s]
          )
        ]
      }
      function ve(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((null == e || e(r), !1 === n || !r.defaultPrevented))
            return null == t ? void 0 : t(r)
        }
      }
      const we = ["PageUp", "PageDown"],
        ke = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
        Ee = {
          ltr: ["ArrowDown", "Home", "ArrowLeft", "PageDown"],
          rtl: ["ArrowDown", "Home", "ArrowRight", "PageDown"]
        },
        [Re, je, Be] = (function (e) {
          const t = e + "CollectionProvider",
            [n, r] = pe(t),
            [o, i] = n(t, {
              collectionRef: { current: null },
              itemMap: new Map()
            }),
            l = e + "CollectionSlot",
            s = e + "CollectionItemSlot",
            c = "data-radix-collection-item"
          return [
            {
              Provider: (e) => {
                const { scope: t, children: n } = e,
                  r = a.useRef(null),
                  i = a.useRef(new Map()).current
                return a.createElement(
                  o,
                  { scope: t, itemMap: i, collectionRef: r },
                  n
                )
              },
              Slot: a.forwardRef((e, t) => {
                const { scope: n, children: r } = e,
                  o = le(t, i(l, n).collectionRef)
                return a.createElement(ae, { ref: o }, r)
              }),
              ItemSlot: a.forwardRef((e, t) => {
                const { scope: n, children: r, ...o } = e,
                  l = a.useRef(null),
                  d = le(t, l),
                  u = i(s, n)
                return (
                  a.useEffect(
                    () => (
                      u.itemMap.set(l, { ref: l, ...o }),
                      () => {
                        u.itemMap.delete(l)
                      }
                    )
                  ),
                  a.createElement(ae, { [c]: "", ref: d }, r)
                )
              })
            },
            function (t) {
              const n = i(e + "CollectionConsumer", t)
              return a.useCallback(() => {
                const e = n.collectionRef.current
                if (!e) return []
                const t = Array.from(e.querySelectorAll(`[${c}]`))
                return Array.from(n.itemMap.values()).sort(
                  (e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current)
                )
              }, [n.collectionRef, n.itemMap])
            },
            r
          ]
        })("Slider"),
        [Me, Ce] = pe("Slider", [Be]),
        [Ne, $e] = Me("Slider"),
        Ie = a.forwardRef((e, t) => {
          const {
              name: n,
              min: r = 0,
              max: o = 100,
              step: i = 1,
              orientation: l = "horizontal",
              disabled: s = !1,
              minStepsBetweenThumbs: c = 0,
              defaultValue: d = [r],
              value: u,
              onValueChange: f = () => {},
              ...p
            } = e,
            [m, h] = a.useState(null),
            g = le(t, (e) => h(e)),
            b = a.useRef(new Set()),
            x = a.useRef(0),
            S = "horizontal" === l,
            y = !m || Boolean(m.closest("form")),
            v = S ? Te : We,
            [w = [], k] = ye({
              prop: u,
              defaultProp: d,
              onChange: (e) => {
                var t
                null === (t = [...b.current][x.current]) ||
                  void 0 === t ||
                  t.focus(),
                  f(e)
              }
            })
          function E(e, t) {
            const n = (function (e) {
                return (String(e).split(".")[1] || "").length
              })(i),
              l = (function (e, [t, n]) {
                return Math.min(n, Math.max(t, e))
              })(
                (function (e, t) {
                  const n = Math.pow(10, t)
                  return Math.round(e * n) / n
                })(Math.round((e - r) / i) * i + r, n),
                [r, o]
              )
            k((e = []) => {
              const n = (function (e = [], t, n) {
                const r = [...e]
                return (r[n] = t), r.sort((e, t) => e - t)
              })(e, l, t)
              return (function (e, t) {
                if (t > 0) {
                  const n = (function (e) {
                    return e.slice(0, -1).map((t, n) => e[n + 1] - t)
                  })(e)
                  return Math.min(...n) >= t
                }
                return !0
              })(n, c * i)
                ? ((x.current = n.indexOf(l)), String(n) === String(e) ? e : n)
                : e
            })
          }
          return a.createElement(
            Ne,
            {
              scope: e.__scopeSlider,
              disabled: s,
              min: r,
              max: o,
              valueIndexToChangeRef: x,
              thumbs: b.current,
              values: w,
              orientation: l
            },
            a.createElement(
              Re.Provider,
              { scope: e.__scopeSlider },
              a.createElement(
                Re.Slot,
                { scope: e.__scopeSlider },
                a.createElement(
                  v,
                  se(
                    { "aria-disabled": s, "data-disabled": s ? "" : void 0 },
                    p,
                    {
                      ref: g,
                      min: r,
                      max: o,
                      onSlideStart: s
                        ? void 0
                        : function (e) {
                            E(
                              e,
                              (function (e, t) {
                                if (1 === e.length) return 0
                                const n = e.map((e) => Math.abs(e - t)),
                                  r = Math.min(...n)
                                return n.indexOf(r)
                              })(w, e)
                            )
                          },
                      onSlideMove: s
                        ? void 0
                        : function (e) {
                            E(e, x.current)
                          },
                      onHomeKeyDown: () => !s && E(r, 0),
                      onEndKeyDown: () => !s && E(o, w.length - 1),
                      onStepKeyDown: ({ event: e, direction: t }) => {
                        if (!s) {
                          const n =
                              we.includes(e.key) ||
                              (e.shiftKey && ke.includes(e.key))
                                ? 10
                                : 1,
                            r = x.current
                          E(w[r] + i * n * t, r)
                        }
                      }
                    }
                  )
                )
              )
            ),
            y &&
              w.map((e, t) =>
                a.createElement(He, {
                  key: t,
                  name: n ? n + (w.length > 1 ? "[]" : "") : void 0,
                  value: e
                })
              )
          )
        }),
        [ze, Pe] = Me("Slider", {
          startEdge: "left",
          endEdge: "right",
          size: "width",
          direction: 1
        }),
        Te = a.forwardRef((e, t) => {
          const {
              min: n,
              max: r,
              dir: o,
              onSlideStart: i,
              onSlideMove: l,
              onStepKeyDown: s,
              ...c
            } = e,
            [d, u] = a.useState(null),
            f = le(t, (e) => u(e)),
            p = a.useRef(),
            m = (function (e, t) {
              const [n, r] = a.useState("ltr"),
                [o, i] = a.useState(),
                l = a.useRef(0)
              return (
                a.useEffect(() => {
                  if (void 0 === t && null != e && e.parentElement) {
                    const t = getComputedStyle(e.parentElement)
                    i(t)
                  }
                }, [e, t]),
                a.useEffect(
                  () => (
                    void 0 === t &&
                      (function e() {
                        l.current = requestAnimationFrame(() => {
                          const t = null == o ? void 0 : o.direction
                          t && r(t), e()
                        })
                      })(),
                    () => cancelAnimationFrame(l.current)
                  ),
                  [o, t, r]
                ),
                t || n
              )
            })(d, o),
            h = "ltr" === m
          function g(e) {
            const t = p.current || d.getBoundingClientRect(),
              o = Fe([0, t.width], h ? [n, r] : [r, n])
            return (p.current = t), o(e - t.left)
          }
          return a.createElement(
            ze,
            {
              scope: e.__scopeSlider,
              startEdge: h ? "left" : "right",
              endEdge: h ? "right" : "left",
              direction: h ? 1 : -1,
              size: "width"
            },
            a.createElement(
              Oe,
              se({ "data-orientation": "horizontal" }, c, {
                ref: f,
                style: {
                  ...c.style,
                  "--radix-slider-thumb-transform": "translateX(-50%)"
                },
                onSlideStart: (e) => {
                  const t = g(e.clientX)
                  null == i || i(t)
                },
                onSlideMove: (e) => {
                  const t = g(e.clientX)
                  null == l || l(t)
                },
                onSlideEnd: () => (p.current = void 0),
                onStepKeyDown: (e) => {
                  const t = Ee[m].includes(e.key)
                  null == s || s({ event: e, direction: t ? -1 : 1 })
                }
              })
            )
          )
        }),
        We = a.forwardRef((e, t) => {
          const {
              min: n,
              max: r,
              onSlideStart: o,
              onSlideMove: i,
              onStepKeyDown: l,
              ...s
            } = e,
            c = a.useRef(null),
            d = le(t, c),
            u = a.useRef()
          function f(e) {
            const t = u.current || c.current.getBoundingClientRect(),
              o = Fe([0, t.height], [r, n])
            return (u.current = t), o(e - t.top)
          }
          return a.createElement(
            ze,
            {
              scope: e.__scopeSlider,
              startEdge: "bottom",
              endEdge: "top",
              size: "height",
              direction: 1
            },
            a.createElement(
              Oe,
              se({ "data-orientation": "vertical" }, s, {
                ref: d,
                style: {
                  ...s.style,
                  "--radix-slider-thumb-transform": "translateY(50%)"
                },
                onSlideStart: (e) => {
                  const t = f(e.clientY)
                  null == o || o(t)
                },
                onSlideMove: (e) => {
                  const t = f(e.clientY)
                  null == i || i(t)
                },
                onSlideEnd: () => (u.current = void 0),
                onStepKeyDown: (e) => {
                  const t = Ee.ltr.includes(e.key)
                  null == l || l({ event: e, direction: t ? -1 : 1 })
                }
              })
            )
          )
        }),
        Oe = a.forwardRef((e, t) => {
          const {
              __scopeSlider: n,
              onSlideStart: r,
              onSlideMove: o,
              onSlideEnd: i,
              onHomeKeyDown: l,
              onEndKeyDown: s,
              onStepKeyDown: c,
              ...d
            } = e,
            u = $e("Slider", n)
          return a.createElement(
            he.span,
            se({}, d, {
              ref: t,
              onKeyDown: ve(e.onKeyDown, (e) => {
                "Home" === e.key
                  ? l(e)
                  : "End" === e.key
                  ? s(e)
                  : we.concat(ke).includes(e.key) && (c(e), e.preventDefault())
              }),
              onPointerDown: ve(e.onPointerDown, (e) => {
                const t = e.target
                t.setPointerCapture(e.pointerId),
                  e.preventDefault(),
                  u.thumbs.has(t) ? t.focus() : r(e)
              }),
              onPointerMove: ve(e.onPointerMove, (e) => {
                e.target.hasPointerCapture(e.pointerId) && o(e)
              }),
              onPointerUp: ve(e.onPointerUp, (e) => {
                const t = e.target
                t.hasPointerCapture(e.pointerId) &&
                  (t.releasePointerCapture(e.pointerId), i(e))
              })
            })
          )
        }),
        Ae = a.forwardRef((e, t) => {
          const { __scopeSlider: n, ...r } = e,
            o = $e("SliderTrack", n)
          return a.createElement(
            he.span,
            se(
              {
                "data-disabled": o.disabled ? "" : void 0,
                "data-orientation": o.orientation
              },
              r,
              { ref: t }
            )
          )
        }),
        _e = a.forwardRef((e, t) => {
          const { __scopeSlider: n, ...r } = e,
            o = $e("SliderRange", n),
            i = Pe("SliderRange", n),
            l = le(t, a.useRef(null)),
            s = o.values.length,
            c = o.values.map((e) => qe(e, o.min, o.max)),
            d = s > 1 ? Math.min(...c) : 0,
            u = 100 - Math.max(...c)
          return a.createElement(
            he.span,
            se(
              {
                "data-orientation": o.orientation,
                "data-disabled": o.disabled ? "" : void 0
              },
              r,
              {
                ref: l,
                style: {
                  ...e.style,
                  [i.startEdge]: d + "%",
                  [i.endEdge]: u + "%"
                }
              }
            )
          )
        }),
        De = a.forwardRef((e, t) => {
          const n = je(e.__scopeSlider),
            [r, o] = a.useState(null),
            i = le(t, (e) => o(e)),
            l = a.useMemo(
              () => (r ? n().findIndex((e) => e.ref.current === r) : -1),
              [n, r]
            )
          return a.createElement(Le, se({}, e, { ref: i, index: l }))
        }),
        Le = a.forwardRef((e, t) => {
          const { __scopeSlider: n, index: r, ...o } = e,
            i = $e("SliderThumb", n),
            l = Pe("SliderThumb", n),
            [s, c] = a.useState(null),
            d = le(t, (e) => c(e)),
            u = be(s),
            f = i.values[r],
            p = void 0 === f ? 0 : qe(f, i.min, i.max),
            m = (function (e, t) {
              return t > 2
                ? `Value ${e + 1} of ${t}`
                : 2 === t
                ? ["Minimum", "Maximum"][e]
                : void 0
            })(r, i.values.length),
            h = null == u ? void 0 : u[l.size],
            g = h
              ? (function (e, t, n) {
                  const r = e / 2
                  return (r - Fe([0, 50], [0, r])(t) * n) * n
                })(h, p, l.direction)
              : 0
          return (
            a.useEffect(() => {
              if (s)
                return (
                  i.thumbs.add(s),
                  () => {
                    i.thumbs.delete(s)
                  }
                )
            }, [s, i.thumbs]),
            a.createElement(
              "span",
              {
                style: {
                  transform: "var(--radix-slider-thumb-transform)",
                  position: "absolute",
                  [l.startEdge]: `calc(${p}% + ${g}px)`
                }
              },
              a.createElement(
                Re.ItemSlot,
                { scope: e.__scopeSlider },
                a.createElement(
                  he.span,
                  se(
                    {
                      role: "slider",
                      "aria-label": e["aria-label"] || m,
                      "aria-valuemin": i.min,
                      "aria-valuenow": f,
                      "aria-valuemax": i.max,
                      "aria-orientation": i.orientation,
                      "data-orientation": i.orientation,
                      "data-disabled": i.disabled ? "" : void 0,
                      tabIndex: i.disabled ? void 0 : 0
                    },
                    o,
                    {
                      ref: d,
                      style: void 0 === f ? { display: "none" } : e.style,
                      onFocus: ve(e.onFocus, () => {
                        i.valueIndexToChangeRef.current = r
                      })
                    }
                  )
                )
              )
            )
          )
        }),
        He = (e) => {
          const { value: t, ...n } = e,
            r = a.useRef(null),
            o = xe(t)
          return (
            a.useEffect(() => {
              const e = r.current,
                n = window.HTMLInputElement.prototype,
                i = Object.getOwnPropertyDescriptor(n, "value").set
              if (o !== t && i) {
                const n = new Event("input", { bubbles: !0 })
                i.call(e, t), e.dispatchEvent(n)
              }
            }, [o, t]),
            a.createElement(
              "input",
              se({ style: { display: "none" } }, n, { ref: r, defaultValue: t })
            )
          )
        }
      function qe(e, t, n) {
        return (100 / (n - t)) * (e - t)
      }
      function Fe(e, t) {
        return (n) => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0]
          const r = (t[1] - t[0]) / (e[1] - e[0])
          return t[0] + r * (n - e[0])
        }
      }
      const Ve = Ae,
        Ue = _e,
        Ke = De
      var Ge = oe(Ie, {
          position: "relative",
          display: "flex",
          alignItems: "center",
          userSelect: "none",
          touchAction: "none",
          width: "100%",
          cursor: "pointer",
          '&[data-orientation="horizontal"]': { height: 20 },
          '&[data-orientation="vertical"]': {
            flexDirection: "column",
            width: 20,
            height: 100
          }
        }),
        Xe = oe(Ve, {
          backgroundColor: "#8ecdf8",
          position: "relative",
          flexGrow: 1,
          borderRadius: "9999px",
          '&[data-orientation="horizontal"]': { height: 4 },
          '&[data-orientation="vertical"]': { width: 4 }
        }),
        Ye = oe(Ue, {
          position: "absolute",
          display: "flex",
          alignItems: "center",
          backgroundColor: "#1DA1F2",
          borderRadius: "9999px",
          height: "100%"
        }),
        Ze = oe(Ke, {
          all: "unset",
          display: "block",
          width: 16,
          height: 16,
          backgroundColor: "#1DA1F2",
          borderRadius: 10,
          boxShadow:
            "rgb(101 119 134 / 20%) 0px 0px 7px, rgb(101 119 134 / 15%) 0px 1px 3px 1px",
          "&:hover": { boxShadow: "0 0 0 5px rgba(29, 155, 240, 0.1)" },
          "&:focus": { boxShadow: "0 0 0 5px rgba(29, 155, 240, 0.1)" }
        }),
        Je = function () {
          var e = (0, a.useState)(700),
            t = e[0],
            n = e[1]
          return (0, o.jsxs)("form", {
            className:
              "bg-[#192734] rounded-2xl p-4 flex items-center space-x-3",
            children: [
              (0, o.jsx)("span", {
                className: "text-xs font-medium",
                children: "600px"
              }),
              (0, o.jsxs)(Ge, {
                onValueChange: function (e) {
                  n(e[0])
                },
                defaultValue: [t],
                min: 600,
                max: 800,
                step: 50,
                "aria-label": "Feed Width Slider",
                children: [
                  (0, o.jsx)(Xe, { children: (0, o.jsx)(Ye, {}) }),
                  (0, o.jsx)(Ze, { title: "".concat(t, "px") }),
                  (0, o.jsx)("span", {
                    className:
                      "absolute left-0 right-0 flex items-center justify-center w-[94%] m-auto -translate-x-[6px]",
                    children: [600, 650, 700, 750, 800].map(function (e, n) {
                      return (0,
                      o.jsx)("span", { title: "".concat(e, "px"), style: { left: "".concat(Math.abs(((800 - e) / 200) * 100 - 100), "%"), backgroundColor: e > t ? "#8ecdf8" : "#1d9bf0" }, className: "absolute w-3 h-3 rounded-full" }, "track-".concat(n))
                    })
                  })
                ]
              }),
              (0, o.jsx)("span", {
                className: "text-lg font-medium",
                children: "800px"
              })
            ]
          })
        }
      const Qe = Boolean(
          null === globalThis || void 0 === globalThis
            ? void 0
            : globalThis.document
        )
          ? a.useLayoutEffect
          : () => {},
        et = (e) => {
          const { present: t, children: n } = e,
            r = (function (e) {
              const [t, n] = a.useState(),
                r = a.useRef({}),
                o = a.useRef(e),
                i = a.useRef("none"),
                l = e ? "mounted" : "unmounted",
                [s, c] = (function (e, t) {
                  return a.useReducer((e, n) => {
                    const r = t[e][n]
                    return null != r ? r : e
                  }, e)
                })(l, {
                  mounted: {
                    UNMOUNT: "unmounted",
                    ANIMATION_OUT: "unmountSuspended"
                  },
                  unmountSuspended: {
                    MOUNT: "mounted",
                    ANIMATION_END: "unmounted"
                  },
                  unmounted: { MOUNT: "mounted" }
                })
              return (
                a.useEffect(() => {
                  const e = tt(r.current)
                  i.current = "mounted" === s ? e : "none"
                }, [s]),
                Qe(() => {
                  const t = r.current,
                    n = o.current
                  if (n !== e) {
                    const r = i.current,
                      l = tt(t)
                    if (e) c("MOUNT")
                    else if (
                      "none" === l ||
                      "none" === (null == t ? void 0 : t.display)
                    )
                      c("UNMOUNT")
                    else {
                      const e = r !== l
                      c(n && e ? "ANIMATION_OUT" : "UNMOUNT")
                    }
                    o.current = e
                  }
                }, [e, c]),
                Qe(() => {
                  if (t) {
                    const e = (e) => {
                        const n = tt(r.current).includes(e.animationName)
                        e.target === t && n && c("ANIMATION_END")
                      },
                      n = (e) => {
                        e.target === t && (i.current = tt(r.current))
                      }
                    return (
                      t.addEventListener("animationstart", n),
                      t.addEventListener("animationcancel", e),
                      t.addEventListener("animationend", e),
                      () => {
                        t.removeEventListener("animationstart", n),
                          t.removeEventListener("animationcancel", e),
                          t.removeEventListener("animationend", e)
                      }
                    )
                  }
                }, [t, c]),
                {
                  isPresent: ["mounted", "unmountSuspended"].includes(s),
                  ref: a.useCallback((e) => {
                    e && (r.current = getComputedStyle(e)), n(e)
                  }, [])
                }
              )
            })(t),
            o =
              "function" == typeof n
                ? n({ present: r.isPresent })
                : a.Children.only(n),
            i = le(r.ref, o.ref)
          return "function" == typeof n || r.isPresent
            ? a.cloneElement(o, { ref: i })
            : null
        }
      function tt(e) {
        return (null == e ? void 0 : e.animationName) || "none"
      }
      et.displayName = "Presence"
      const [nt, rt] = (function (e, t) {
          const n = a.createContext(t)
          function r(e) {
            const { children: t, ...r } = e,
              o = a.useMemo(() => r, Object.values(r))
            return a.createElement(n.Provider, { value: o }, t)
          }
          return (
            (r.displayName = e + "Provider"),
            [
              r,
              function (r) {
                const o = a.useContext(n)
                if (o) return o
                if (void 0 !== t) return t
                throw new Error(`\`${r}\` must be used within \`${e}\``)
              }
            ]
          )
        })("Label", { id: void 0, controlRef: { current: null } }),
        [ot, it] = pe("Checkbox"),
        [lt, st] = ot("Checkbox"),
        at = a.forwardRef((e, t) => {
          const {
              __scopeCheckbox: n,
              "aria-labelledby": r,
              name: o,
              checked: i,
              defaultChecked: l,
              required: s,
              disabled: c,
              value: d = "on",
              onCheckedChange: u,
              ...f
            } = e,
            [p, m] = a.useState(null),
            h = le(t, (e) => m(e)),
            g = ((e) => {
              const t = rt("LabelConsumer"),
                { controlRef: n } = t
              return (
                a.useEffect(() => {
                  e && (n.current = e)
                }, [e, n]),
                t.id
              )
            })(p),
            b = r || g,
            x = a.useRef(!1),
            S = !p || Boolean(p.closest("form")),
            [y = !1, v] = ye({ prop: i, defaultProp: l, onChange: u })
          return a.createElement(
            lt,
            { scope: n, state: y, disabled: c },
            a.createElement(
              he.button,
              se(
                {
                  type: "button",
                  role: "checkbox",
                  "aria-checked": dt(y) ? "mixed" : y,
                  "aria-labelledby": b,
                  "aria-required": s,
                  "data-state": ut(y),
                  "data-disabled": c ? "" : void 0,
                  disabled: c,
                  value: d
                },
                f,
                {
                  ref: h,
                  onClick: ve(e.onClick, (e) => {
                    v((e) => !!dt(e) || !e),
                      S &&
                        ((x.current = e.isPropagationStopped()),
                        x.current || e.stopPropagation())
                  })
                }
              )
            ),
            S &&
              a.createElement(ct, {
                control: p,
                bubbles: !x.current,
                name: o,
                value: d,
                checked: y,
                required: s,
                disabled: c,
                style: { transform: "translateX(-100%)" }
              })
          )
        }),
        ct = (e) => {
          const { control: t, checked: n, bubbles: r = !0, ...o } = e,
            i = a.useRef(null),
            l = xe(n),
            s = be(t)
          return (
            a.useEffect(() => {
              const e = i.current,
                t = window.HTMLInputElement.prototype,
                o = Object.getOwnPropertyDescriptor(t, "checked").set
              if (l !== n && o) {
                const t = new Event("click", { bubbles: r })
                ;(e.indeterminate = dt(n)),
                  o.call(e, !dt(n) && n),
                  e.dispatchEvent(t)
              }
            }, [l, n, r]),
            a.createElement(
              "input",
              se(
                {
                  type: "checkbox",
                  "aria-hidden": !0,
                  defaultChecked: !dt(n) && n
                },
                o,
                {
                  tabIndex: -1,
                  ref: i,
                  style: {
                    ...e.style,
                    ...s,
                    position: "absolute",
                    pointerEvents: "none",
                    opacity: 0,
                    margin: 0
                  }
                }
              )
            )
          )
        }
      function dt(e) {
        return "indeterminate" === e
      }
      function ut(e) {
        return dt(e) ? "indeterminate" : e ? "checked" : "unchecked"
      }
      const ft = at,
        pt = a.forwardRef((e, t) => {
          const { __scopeCheckbox: n, forceMount: r, ...o } = e,
            i = st("CheckboxIndicator", n)
          return a.createElement(
            et,
            { present: r || dt(i.state) || !0 === i.state },
            a.createElement(
              he.span,
              se(
                {
                  "data-state": ut(i.state),
                  "data-disabled": i.disabled ? "" : void 0
                },
                o,
                { ref: t, style: { pointerEvents: "none", ...e.style } }
              )
            )
          )
        })
      var mt = function () {
        return (0, o.jsxs)("form", {
          className:
            "bg-[#192734] rounded-2xl p-3 flex items-center justify-between",
          children: [
            (0, o.jsxs)(ft, {
              className:
                "bg-[#192734] p-3 w-fit rounded-full border-[3px] border-twitterBlue",
              children: [
                (0, o.jsx)(pt, {}),
                (0, o.jsx)("svg", {
                  width: 25,
                  height: 25,
                  ariaHidden: "true",
                  className:
                    "r-jwli3a r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr",
                  viewBox: "0 0 24 24",
                  children: (0, o.jsx)("path", {
                    className: "fill-white",
                    d: "M21 7.337h-3.93l.372-4.272a.751.751 0 00-.682-.812.752.752 0 00-.812.683l-.383 4.4h-6.32l.37-4.27a.75.75 0 00-.68-.813.751.751 0 00-.813.683l-.382 4.4H3.782a.75.75 0 000 1.5H7.61l-.55 6.327H3a.75.75 0 000 1.5h3.93l-.372 4.272a.751.751 0 00.682.812l.066.003a.75.75 0 00.746-.686l.383-4.4h6.32l-.37 4.27a.751.751 0 00.682.813l.066.003a.75.75 0 00.746-.686l.382-4.4h3.957c.413 0 .75-.337.75-.75s-.337-.75-.75-.75H16.39l.55-6.327H21a.75.75 0 000-1.5zm-6.115 7.826h-6.32l.55-6.326h6.32l-.55 6.326z"
                  })
                })
              ]
            }),
            (0, o.jsxs)(ft, {
              className:
                "bg-[#192734] p-3 w-fit rounded-full border-[3px] border-twitterBlue",
              children: [
                (0, o.jsx)(pt, {}),
                (0, o.jsx)("svg", {
                  width: 25,
                  height: 25,
                  ariaHidden: "true",
                  className:
                    "r-jwli3a r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr",
                  viewBox: "0 0 24 24",
                  children: (0, o.jsx)("path", {
                    className: "fill-white",
                    d: "M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03a.75.75 0 00.447 1.353h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514a.747.747 0 00-.263-.838zM12 20.478a2.84 2.84 0 01-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z"
                  })
                })
              ]
            }),
            (0, o.jsxs)(ft, {
              className:
                "bg-[#192734] p-3 w-fit rounded-full border-[3px] border-twitterBlue",
              children: [
                (0, o.jsx)(pt, {}),
                (0, o.jsx)("svg", {
                  width: 25,
                  height: 25,
                  ariaHidden: "true",
                  className:
                    "r-jwli3a r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr",
                  viewBox: "0 0 24 24",
                  children: (0, o.jsx)("path", {
                    className: "fill-white",
                    d: "M19.25 3.018H4.75A2.753 2.753 0 002 5.77v12.495a2.754 2.754 0 002.75 2.753h14.5A2.754 2.754 0 0022 18.265V5.77a2.753 2.753 0 00-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367a.81.81 0 01-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83a2.265 2.265 0 002.52.001l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z"
                  })
                })
              ]
            }),
            (0, o.jsxs)(ft, {
              className:
                "bg-[#192734] p-3 w-fit rounded-full border-[3px] border-twitterBlue",
              children: [
                (0, o.jsx)(pt, {}),
                (0, o.jsx)("svg", {
                  width: 25,
                  height: 25,
                  ariaHidden: "true",
                  className:
                    "r-jwli3a r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr",
                  viewBox: "0 0 24 24",
                  children: (0, o.jsx)("path", {
                    className: "fill-white",
                    d: "M19.9 23.5a.755.755 0 01-.442-.144L12 17.928l-7.458 5.43a.75.75 0 01-1.192-.607V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15a.749.749 0 01-.75.75zM12 16.25a.74.74 0 01.44.144l6.71 4.883V5.6a.752.752 0 00-.75-.75H5.6a.752.752 0 00-.75.75v15.677l6.71-4.883a.74.74 0 01.44-.144z"
                  })
                })
              ]
            }),
            (0, o.jsxs)(ft, {
              className:
                "bg-[#192734] p-3 w-fit rounded-full border-[3px] border-twitterBlue",
              children: [
                (0, o.jsx)(pt, {}),
                (0, o.jsxs)("svg", {
                  width: 25,
                  height: 25,
                  ariaHidden: "true",
                  className:
                    "r-jwli3a r-4qtqp9 r-yyyyoo r-lwhw9o r-dnmrzs r-bnwqim r-1plcrui r-lrvibr",
                  viewBox: "0 0 24 24",
                  children: [
                    (0, o.jsx)("path", {
                      className: "fill-white",
                      d: "M14.057 12.559c.289 1.042.34 2.351-.395 3.712l-.059.106c-.094.169-.617 1.015-1.717 1.068l-.074.002c-.808 0-1.162-.709-1.272-.999-.12-.327.041-.989.165-1.202.246-.375.693-.661 1.258-1.023.624-.4 1.386-.888 2.094-1.664m.177-2.805a.27.27 0 00-.244.158c-1.24 2.85-3.49 2.91-4.54 4.51-.27.41-.66 1.61-.32 2.54.414 1.099 1.368 1.984 2.68 1.984.049 0 .099-.001.15-.004 2.08-.1 2.95-1.84 2.96-1.85 1.82-3.23.21-6.2-.48-7.23a.25.25 0 00-.206-.108z"
                    }),
                    (0, o.jsx)("path", {
                      className: "fill-white",
                      d: "M12.023 22.748c-2.11 0-4.151-.74-5.755-2.115a8.607 8.607 0 01-3.018-6.532c0-.203.018-.404.039-.617a8.476 8.476 0 011.943-4.847c.036-.047.077-.093.113-.126.031-.057.1-.149.203-.242.266-.31 1.102-1.484 1.031-2.427-.038-.572.306-.866.61-.946.623-.166 1.278.447 1.938 1.82.187.383.315.794.385 1.232a7.638 7.638 0 00.915-1.75c.406-1.114.61-2.636.557-4.172a.75.75 0 011.102-.689c.072.039 7.347 4.069 8.478 10.984a8.44 8.44 0 01-.388 4.844 8.698 8.698 0 01-8.153 5.583zM6.422 9.551l-.026.034a6.979 6.979 0 00-1.611 4.007c-.019.199-.035.354-.035.51a7.11 7.11 0 002.494 5.393c1.618 1.389 3.78 1.994 5.929 1.666a7.196 7.196 0 005.602-4.533v-.001a7.01 7.01 0 00.314-4.028c-.77-4.701-4.684-7.919-6.621-9.25-.068 1.24-.288 2.421-.633 3.368-.974 2.623-2.649 3.729-2.721 3.775a.748.748 0 01-1.142-.777c.18-.905.119-1.686-.182-2.321a6.956 6.956 0 01-1.181 1.931l-.072.082a1.96 1.96 0 01-.115.144z"
                    })
                  ]
                })
              ]
            })
          ]
        })
      }
      var ht = function () {
        return (0, o.jsxs)(i, {
          children: [
            (0, o.jsx)(l, {}),
            (0, o.jsxs)("main", {
              className:
                "flex flex-col p-2 space-y-4 max-h-[600px] overflow-y-scroll",
              children: [
                (0, o.jsxs)("section", {
                  className: "flex flex-col space-y-2",
                  children: [
                    (0, o.jsx)("label", {
                      htmlFor: "user-control-feed-width",
                      className: "text-sm font-bold text-[#8899a6]",
                      children: "Feed Width"
                    }),
                    (0, o.jsx)(Je, { id: "user-control-feed-width" })
                  ]
                }),
                (0, o.jsxs)("section", {
                  className: "flex flex-col space-y-2",
                  children: [
                    (0, o.jsx)("label", {
                      htmlFor: "user-control-navigation-buttons",
                      className: "text-sm font-bold text-[#8899a6]",
                      children: "Navigation Buttons"
                    }),
                    (0, o.jsx)(mt, { id: "user-control-navigation-buttons" })
                  ]
                }),
                (0, o.jsx)("section", {
                  className: "flex flex-col space-y-2",
                  children: (0, o.jsxs)("label", {
                    htmlFor: "user-control-extras",
                    className: "text-sm font-bold text-[#8899a6]",
                    children: [
                      "Extras \xb7 ",
                      (0, o.jsx)("a", {
                        className: "font-normal text-twitterBlue",
                        children: "Show"
                      })
                    ]
                  })
                })
              ]
            }),
            (0, o.jsx)(s, {})
          ]
        })
      }
    }
  },
  function (e) {
    e.O(0, [409, 774, 888, 179], function () {
      return (t = 8581), e((e.s = t))
      var t
    })
    var t = e.O()
    _N_E = t
  }
])
