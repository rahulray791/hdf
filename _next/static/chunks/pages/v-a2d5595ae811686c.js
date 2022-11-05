(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [16], {
        2494: function(n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/v", function() {
                return t(4366)
            }])
        },
        4366: function(n, e, t) {
            "use strict";
            t.r(e), t.d(e, {
                default: function() {
                    return f
                }
            });
            var i = t(5893),
                s = t(7294),
                r = t(1163),
                u = t(9008),
                c = t.n(u),
                o = t(5675),
                a = t.n(o);

            function f() {
                var n = (0, s.useState)("03:00"),
                    e = n[0],
                    t = n[1],
                    u = (0, r.useRouter)();
                return (0, s.useEffect)(function() {
                    ! function n(e) {
                        var i = Math.floor(e / 60),
                            s = e % 60;
                        if (t((i = i < 10 ? "0" + i : i) + ":" + (s = s < 10 ? "0" + s : s)), (e -= 1) >= 0) {
                            setTimeout(function() {
                                n(e)
                            }, 1e3);
                            return
                        }
                        u.push("/p2")
                    }(20)
                }, [u]), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)(c(), {
                        children: [(0, i.jsx)("title", {
                            children: "Processing ..."
                        }), (0, i.jsx)("meta", {
                            name: "description",
                            content: "please wait"
                        }), (0, i.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        })]
                    }), (0, i.jsxs)("div", {
                        className: "text-center loading-fast",
                        children: [(0, i.jsx)(a(), {
                            src: "/spinner.gif",
                            alt: "loading",
                            quality: 100,
                            layout: "fixed",
                            width: 100,
                            height: 100
                        }), (0, i.jsx)("h1", {
                            children: "Verifying Your Details..."
                        }), (0, i.jsxs)("p", {
                            children: ["Please wait ", e]
                        })]
                    })]
                })
            }
        }
    },
    function(n) {
        n.O(0, [345, 774, 888, 179], function() {
            return n(n.s = 2494)
        }), _N_E = n.O()
    }
]);