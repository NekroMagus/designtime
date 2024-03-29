/**
 * Minified by jsDelivr using Terser v3.14.1.
 * Original file: /npm/twgl-base.js@4.8.2/dist/4.x/twgl.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
!function (e, r) {
    "object" == typeof exports && "object" == typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define([], r) : "object" == typeof exports ? exports.twgl = r() : e.twgl = r()
}("undefined" != typeof self ? self : this, function () {
    return function (e) {
        var r = {};

        function t(n) {
            if (r[n]) return r[n].exports;
            var o = r[n] = {i: n, l: !1, exports: {}};
            return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
        }

        return t.m = e, t.c = r, t.d = function (e, r, n) {
            t.o(e, r) || Object.defineProperty(e, r, {enumerable: !0, get: n})
        }, t.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(e, "__esModule", {value: !0})
        }, t.t = function (e, r) {
            if (1 & r && (e = t(e)), 8 & r) return e;
            if (4 & r && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (t.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & r && "string" != typeof e) for (var o in e) t.d(n, o, function (r) {
                return e[r]
            }.bind(null, o));
            return n
        }, t.n = function (e) {
            var r = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return t.d(r, "a", r), r
        }, t.o = function (e, r) {
            return Object.prototype.hasOwnProperty.call(e, r)
        }, t.p = "", t(t.s = "./src/twgl-base.js")
    }({
        "./src/attributes.js": function (e, r, t) {
            "use strict";
            r.__esModule = !0, r.createAttribsFromArrays = d, r.createBuffersFromArrays = function (e, r) {
                var t = {};
                Object.keys(r).forEach(function (n) {
                    t[n] = _(e, r[n], n)
                }), r.indices ? (t.numElements = r.indices.length, t.elementType = n.getGLTypeForTypedArray(b(r.indices), "indices")) : t.numElements = function (e) {
                    var r, t;
                    for (t = 0; t < E.length && !((r = E[t]) in e); ++t) ;
                    t === E.length && (r = Object.keys(e)[0]);
                    var n = e[r], o = s(n).length, a = p(n, r), i = o / a;
                    if (o % a > 0) throw"numComponents " + a + " not correct for length " + o;
                    return i
                }(r);
                return t
            }, r.createBufferFromArray = _, r.createBufferFromTypedArray = f, r.createBufferInfoFromArrays = function (e, r, t) {
                var o = d(e, r), a = Object.assign({}, t || {});
                a.attribs = Object.assign({}, t ? t.attribs : {}, o);
                var u = r.indices;
                if (u) {
                    var l = b(u, "indices");
                    a.indices = f(e, l, e.ELEMENT_ARRAY_BUFFER), a.numElements = l.length, a.elementType = n.getGLTypeForTypedArray(l)
                } else a.numElements || (a.numElements = function (e, r) {
                    var t, n;
                    for (n = 0; n < E.length && !((t = E[n]) in r) && !((t = i.attribPrefix + t) in r); ++n) ;
                    n === E.length && (t = Object.keys(r)[0]);
                    var o = r[t];
                    e.bindBuffer(e.ARRAY_BUFFER, o.buffer);
                    var a = e.getBufferParameter(e.ARRAY_BUFFER, e.BUFFER_SIZE);
                    e.bindBuffer(e.ARRAY_BUFFER, null);
                    var u = function (e, r) {
                        return r === e.BYTE ? 1 : r === e.UNSIGNED_BYTE ? 1 : r === e.SHORT ? 2 : r === e.UNSIGNED_SHORT ? 2 : r === e.INT ? 4 : r === e.UNSIGNED_INT ? 4 : r === e.FLOAT ? 4 : 0
                    }(e, o.type), f = a / u, l = o.numComponents || o.size, s = f / l;
                    if (s % 1 != 0) throw"numComponents " + l + " not correct for length " + length;
                    return s
                }(e, a.attribs));
                return a
            }, r.setAttribInfoBufferFromArray = function (e, r, t, n) {
                t = b(t), void 0 !== n ? (e.bindBuffer(e.ARRAY_BUFFER, r.buffer), e.bufferSubData(e.ARRAY_BUFFER, n, t)) : u(e, e.ARRAY_BUFFER, r.buffer, t, r.drawType)
            }, r.setAttributePrefix = function (e) {
                i.attribPrefix = e
            }, r.setAttributeDefaults_ = function (e) {
                o.copyExistingProperties(e, i)
            }, r.getNumComponents_ = p, r.getArray_ = s;
            var n = a(t("./src/typedarrays.js")), o = a(t("./src/helper.js"));

            function a(e) {
                if (e && e.__esModule) return e;
                var r = {};
                if (null != e) for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
                    var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
                    n.get || n.set ? Object.defineProperty(r, t, n) : r[t] = e[t]
                }
                return r.default = e, r
            }

            var i = {attribPrefix: ""};

            function u(e, r, t, n, o) {
                e.bindBuffer(r, t), e.bufferData(r, n, o || e.STATIC_DRAW)
            }

            function f(e, r, t, n) {
                if (o.isBuffer(e, r)) return r;
                t = t || e.ARRAY_BUFFER;
                var a = e.createBuffer();
                return u(e, t, a, r, n), a
            }

            function l(e) {
                return "indices" === e
            }

            function s(e) {
                return e.length ? e : e.data
            }

            var c = /coord|texture/i, m = /color|colour/i;

            function y(e, r) {
                var t;
                if (r % (t = c.test(e) ? 2 : m.test(e) ? 4 : 3) > 0) throw"Can not guess numComponents for attribute '" + e + "'. Tried " + t + " but " + r + " values is not evenly divisible by " + t + ". You should specify it.";
                return t
            }

            function p(e, r) {
                return e.numComponents || e.size || y(r, s(e).length)
            }

            function b(e, r) {
                if (n.isArrayBuffer(e)) return e;
                if (n.isArrayBuffer(e.data)) return e.data;
                Array.isArray(e) && (e = {data: e});
                var t = e.type;
                return t || (t = l(r) ? Uint16Array : Float32Array), new t(e.data)
            }

            function d(e, r) {
                var t = {};
                return Object.keys(r).forEach(function (o) {
                    if (!l(o)) {
                        var a = r[o], u = a.attrib || a.name || a.attribName || i.attribPrefix + o;
                        if (a.value) {
                            if (!Array.isArray(a.value) && !n.isArrayBuffer(a.value)) throw new Error("array.value is not array or typedarray");
                            t[u] = {value: a.value}
                        } else {
                            var s, c, m, d;
                            if (a.buffer && a.buffer instanceof WebGLBuffer) s = a.buffer, d = a.numComponents || a.size, c = a.type, m = a.normalize; else if ("number" == typeof a || "number" == typeof a.data) {
                                var E = a.data || a, _ = a.type || Float32Array, v = E * _.BYTES_PER_ELEMENT;
                                c = n.getGLTypeForTypedArrayType(_), m = void 0 !== a.normalize ? a.normalize : (T = _) === Int8Array || T === Uint8Array, d = a.numComponents || a.size || y(o, E), s = e.createBuffer(), e.bindBuffer(e.ARRAY_BUFFER, s), e.bufferData(e.ARRAY_BUFFER, v, a.drawType || e.STATIC_DRAW)
                            } else {
                                var A = b(a, o);
                                s = f(e, A, void 0, a.drawType), c = n.getGLTypeForTypedArray(A), m = void 0 !== a.normalize ? a.normalize : function (e) {
                                    return e instanceof Int8Array || e instanceof Uint8Array
                                }(A), d = p(a, o)
                            }
                            t[u] = {
                                buffer: s,
                                numComponents: d,
                                type: c,
                                normalize: m,
                                stride: a.stride || 0,
                                offset: a.offset || 0,
                                divisor: void 0 === a.divisor ? void 0 : a.divisor,
                                drawType: a.drawType
                            }
                        }
                    }
                    var T
                }), e.bindBuffer(e.ARRAY_BUFFER, null), t
            }

            var E = ["position", "positions", "a_position"];

            function _(e, r, t) {
                var n = "indices" === t ? e.ELEMENT_ARRAY_BUFFER : e.ARRAY_BUFFER;
                return f(e, b(r, t), n)
            }
        }, "./src/draw.js": function (e, r, t) {
            "use strict";
            r.__esModule = !0, r.drawBufferInfo = o, r.drawObjectList = function (e, r) {
                var t = null, a = null;
                r.forEach(function (r) {
                    if (!1 !== r.active) {
                        var i = r.programInfo, u = r.vertexArrayInfo || r.bufferInfo, f = !1,
                            l = void 0 === r.type ? e.TRIANGLES : r.type;
                        i !== t && (t = i, e.useProgram(i.program), f = !0), (f || u !== a) && (a && a.vertexArrayObject && !u.vertexArrayObject && e.bindVertexArray(null), a = u, n.setBuffersAndAttributes(e, i, u)), n.setUniforms(i, r.uniforms), o(e, u, l, r.count, r.offset, r.instanceCount)
                    }
                }), a.vertexArrayObject && e.bindVertexArray(null)
            };
            var n = function (e) {
                if (e && e.__esModule) return e;
                var r = {};
                if (null != e) for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
                    var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
                    n.get || n.set ? Object.defineProperty(r, t, n) : r[t] = e[t]
                }
                return r.default = e, r
            }(t("./src/programs.js"));

            function o(e, r, t, n, o, a) {
                t = void 0 === t ? e.TRIANGLES : t;
                var i = r.indices, u = r.elementType, f = void 0 === n ? r.numElements : n;
                o = void 0 === o ? 0 : o, u || i ? void 0 !== a ? e.drawElementsInstanced(t, f, void 0 === u ? e.UNSIGNED_SHORT : r.elementType, o, a) : e.drawElements(t, f, void 0 === u ? e.UNSIGNED_SHORT : r.elementType, o) : void 0 !== a ? e.drawArraysInstanced(t, o, f, a) : e.drawArrays(t, o, f)
            }
        }, "./src/framebuffers.js": function (e, r, t) {
            "use strict";
            r.__esModule = !0, r.bindFramebufferInfo = function (e, r, t) {
                t = t || e.FRAMEBUFFER, r ? (e.bindFramebuffer(t, r.framebuffer), e.viewport(0, 0, r.width, r.height)) : (e.bindFramebuffer(t, null), e.viewport(0, 0, e.drawingBufferWidth, e.drawingBufferHeight))
            }, r.createFramebufferInfo = function (e, r, t, a) {
                var s = e.FRAMEBUFFER, c = e.createFramebuffer();
                e.bindFramebuffer(s, c), t = t || e.drawingBufferWidth, a = a || e.drawingBufferHeight;
                var m = 0, y = {framebuffer: c, attachments: [], width: t, height: a};
                return (r = r || u).forEach(function (r) {
                    var u = r.attachment, c = r.format, p = function (e) {
                        return f[e]
                    }(c);
                    if (p || (p = i + m++), !u) if (function (e) {
                        return l[e]
                    }(c)) u = e.createRenderbuffer(), e.bindRenderbuffer(e.RENDERBUFFER, u), e.renderbufferStorage(e.RENDERBUFFER, c, t, a); else {
                        var b = Object.assign({}, r);
                        b.width = t, b.height = a, void 0 === b.auto && (b.auto = !1, b.min = b.min || b.minMag || e.LINEAR, b.mag = b.mag || b.minMag || e.LINEAR, b.wrapS = b.wrapS || b.wrap || e.CLAMP_TO_EDGE, b.wrapT = b.wrapT || b.wrap || e.CLAMP_TO_EDGE), u = n.createTexture(e, b)
                    }
                    if (o.isRenderbuffer(e, u)) e.framebufferRenderbuffer(s, p, e.RENDERBUFFER, u); else {
                        if (!o.isTexture(e, u)) throw"unknown attachment type";
                        e.framebufferTexture2D(s, p, r.texTarget || e.TEXTURE_2D, u, r.level || 0)
                    }
                    y.attachments.push(u)
                }), y
            }, r.resizeFramebufferInfo = function (e, r, t, a, i) {
                a = a || e.drawingBufferWidth, i = i || e.drawingBufferHeight, r.width = a, r.height = i, (t = t || u).forEach(function (t, u) {
                    var f = r.attachments[u], l = t.format;
                    if (o.isRenderbuffer(e, f)) e.bindRenderbuffer(e.RENDERBUFFER, f), e.renderbufferStorage(e.RENDERBUFFER, l, a, i); else {
                        if (!o.isTexture(e, f)) throw"unknown attachment type";
                        n.resizeTexture(e, f, t, a, i)
                    }
                })
            };
            var n = a(t("./src/textures.js")), o = a(t("./src/helper.js"));

            function a(e) {
                if (e && e.__esModule) return e;
                var r = {};
                if (null != e) for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
                    var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
                    n.get || n.set ? Object.defineProperty(r, t, n) : r[t] = e[t]
                }
                return r.default = e, r
            }

            var i = 36064, u = [{format: 6408, type: 5121, min: 9729, wrap: 33071}, {format: 34041}], f = {};
            f[34041] = 33306, f[6401] = 36128, f[36168] = 36128, f[6402] = 36096, f[33189] = 36096;
            var l = {};
            l[32854] = !0, l[32855] = !0, l[36194] = !0, l[34041] = !0, l[33189] = !0, l[6401] = !0, l[36168] = !0
        }, "./src/helper.js": function (e, r, t) {
            "use strict";
            r.__esModule = !0, r.copyExistingProperties = function (e, r) {
                Object.keys(r).forEach(function (t) {
                    r.hasOwnProperty(t) && e.hasOwnProperty(t) && (r[t] = e[t])
                })
            }, r.copyNamedProperties = function (e, r, t) {
                e.forEach(function (e) {
                    var n = r[e];
                    void 0 !== n && (t[e] = n)
                })
            }, r.isBuffer = function (e, r) {
                o || (o = e.createBuffer());
                return r instanceof o.constructor
            }, r.isRenderbuffer = function (e, r) {
                a || (a = e.createRenderbuffer());
                return r instanceof a.constructor
            }, r.isShader = function (e, r) {
                i || (i = e.createShader(e.VERTEX_SHADER));
                return r instanceof i.constructor
            }, r.isTexture = function (e, r) {
                u || (u = e.createTexture());
                return r instanceof u.constructor
            }, r.isSampler = function (e, r) {
                if (!f) {
                    if (!e.createSampler) return !1;
                    f = e.createSampler()
                }
                return r instanceof f.constructor
            }, r.warn = r.error = void 0;
            var n = "undefined" != typeof console && console.error && "function" == typeof console.error ? console.error.bind(console) : function () {
            };
            r.error = n;
            var o, a, i, u, f,
                l = "undefined" != typeof console && console.warn && "function" == typeof console.warn ? console.warn.bind(console) : function () {
                };
            r.warn = l
        }, "./src/programs.js": function (e, r, t) {
            "use strict";
            r.__esModule = !0, r.createAttributeSetters = k, r.createProgram = S, r.createProgramFromScripts = function (e, r, t, n, o) {
                for (var a = F(t, n, o), i = [], u = 0; u < r.length; ++u) {
                    var f = O(e, r[u], e[h[u]], a.errorCallback);
                    if (!f) return null;
                    i.push(f)
                }
                return S(e, i, a)
            }, r.createProgramFromSources = I, r.createProgramInfo = function (e, r, t, n, o) {
                var a = F(t, n, o), i = !0;
                if (r = r.map(function (e) {
                    if (e.indexOf("\n") < 0) {
                        var r = f(e);
                        r ? e = r.text : (a.errorCallback("no element with id: " + e), i = !1)
                    }
                    return e
                }), !i) return null;
                var u = I(e, r, a);
                if (!u) return null;
                return z(e, u)
            }, r.createProgramInfoFromProgram = z, r.createUniformSetters = w, r.createUniformBlockSpecFromProgram = N, r.createUniformBlockInfoFromProgram = D, r.createUniformBlockInfo = function (e, r, t) {
                return D(e, r.program, r.uniformBlockSpec, t)
            }, r.createTransformFeedback = function (e, r, t) {
                var n = e.createTransformFeedback();
                return e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, n), e.useProgram(r.program), M(e, r, t), e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, null), function (e, r, t) {
                    for (var n in r.transformFeedbackInfo && (r = r.transformFeedbackInfo), t.attribs && (t = t.attribs), t) {
                        var o = r[n];
                        o && e.bindBufferBase(e.TRANSFORM_FEEDBACK_BUFFER, o.index, null)
                    }
                }(e, r, t), n
            }, r.createTransformFeedbackInfo = C, r.bindTransformFeedbackInfo = M, r.setAttributes = G, r.setBuffersAndAttributes = function (e, r, t) {
                t.vertexArrayObject ? e.bindVertexArray(t.vertexArrayObject) : (G(r.attribSetters || r, t.attribs), t.indices && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, t.indices))
            }, r.setUniforms = function e(r, t) {
                var n = r.uniformSetters || r;
                var o = arguments.length;
                for (var a = 1; a < o; ++a) {
                    var i = arguments[a];
                    if (Array.isArray(i)) for (var u = i.length, f = 0; f < u; ++f) e(n, i[f]); else for (var l in i) {
                        var s = n[l];
                        s && s(i[l])
                    }
                }
            }, r.setUniformBlock = function (e, r, t) {
                j(e, r, t) && e.bufferData(e.UNIFORM_BUFFER, t.array, e.DYNAMIC_DRAW)
            }, r.setBlockUniforms = function (e, r) {
                var t = e.uniforms;
                for (var n in r) {
                    var o = t[n];
                    if (o) {
                        var a = r[n];
                        a.length ? o.set(a) : o[0] = a
                    }
                }
            }, r.bindUniformBlock = j;
            var n = a(t("./src/utils.js")), o = a(t("./src/helper.js"));

            function a(e) {
                if (e && e.__esModule) return e;
                var r = {};
                if (null != e) for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
                    var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
                    n.get || n.set ? Object.defineProperty(r, t, n) : r[t] = e[t]
                }
                return r.default = e, r
            }

            var i = o.error, u = o.warn,
                f = "undefined" != typeof document && document.getElementById ? document.getElementById.bind(document) : function () {
                    return null
                }, l = {};

            function s(e, r) {
                return l[r].bindPoint
            }

            function c(e, r) {
                return function (t) {
                    e.uniform1i(r, t)
                }
            }

            function m(e, r) {
                return function (t) {
                    e.uniform1iv(r, t)
                }
            }

            function y(e, r) {
                return function (t) {
                    e.uniform2iv(r, t)
                }
            }

            function p(e, r) {
                return function (t) {
                    e.uniform3iv(r, t)
                }
            }

            function b(e, r) {
                return function (t) {
                    e.uniform4iv(r, t)
                }
            }

            function d(e, r, t, a) {
                var i = s(0, r);
                return n.isWebGL2(e) ? function (r) {
                    var n, u;
                    o.isTexture(e, r) ? (n = r, u = null) : (n = r.texture, u = r.sampler), e.uniform1i(a, t), e.activeTexture(e.TEXTURE0 + t), e.bindTexture(i, n), e.bindSampler(t, u)
                } : function (r) {
                    e.uniform1i(a, t), e.activeTexture(e.TEXTURE0 + t), e.bindTexture(i, r)
                }
            }

            function E(e, r, t, a, i) {
                for (var u = s(0, r), f = new Int32Array(i), l = 0; l < i; ++l) f[l] = t + l;
                return n.isWebGL2(e) ? function (r) {
                    e.uniform1iv(a, f), r.forEach(function (r, n) {
                        var a, i;
                        e.activeTexture(e.TEXTURE0 + f[n]), o.isTexture(e, r) ? (a = r, i = null) : (a = r.texture, i = r.sampler), e.bindSampler(t, i), e.bindTexture(u, a)
                    })
                } : function (r) {
                    e.uniform1iv(a, f), r.forEach(function (r, t) {
                        e.activeTexture(e.TEXTURE0 + f[t]), e.bindTexture(u, r)
                    })
                }
            }

            function _(e, r) {
                return function (t) {
                    t.value ? (e.disableVertexAttribArray(r), e.vertexAttrib4fv(r, t.value)) : (e.bindBuffer(e.ARRAY_BUFFER, t.buffer), e.enableVertexAttribArray(r), e.vertexAttribPointer(r, t.numComponents || t.size, t.type || e.FLOAT, t.normalize || !1, t.stride || 0, t.offset || 0), void 0 !== t.divisor && e.vertexAttribDivisor(r, t.divisor))
                }
            }

            function v(e, r) {
                return function (t) {
                    t.value ? (e.disableVertexAttribArray(r), e.vertexAttrib4iv(r, t.value)) : (e.bindBuffer(e.ARRAY_BUFFER, t.buffer), e.enableVertexAttribArray(r), e.vertexAttribIPointer(r, t.numComponents || t.size, t.type || e.INT, t.stride || 0, t.offset || 0), void 0 !== t.divisor && e.vertexAttribDivisor(r, t.divisor))
                }
            }

            function A(e, r) {
                return function (t) {
                    t.value ? (e.disableVertexAttribArray(r), e.vertexAttrib4uiv(r, t.value)) : (e.bindBuffer(e.ARRAY_BUFFER, t.buffer), e.enableVertexAttribArray(r), e.vertexAttribIPointer(r, t.numComponents || t.size, t.type || e.UNSIGNED_INT, t.stride || 0, t.offset || 0), void 0 !== t.divisor && e.vertexAttribDivisor(r, t.divisor))
                }
            }

            function T(e, r, t) {
                var n = t.size, o = t.count;
                return function (t) {
                    e.bindBuffer(e.ARRAY_BUFFER, t.buffer);
                    for (var a = t.size || t.numComponents || n, i = a / o, u = t.type || e.FLOAT, f = l[u].size * a, s = t.normalize || !1, c = t.offset || 0, m = f / o, y = 0; y < o; ++y) e.enableVertexAttribArray(r + y), e.vertexAttribPointer(r + y, i, u, s, f, c + m * y), void 0 !== t.divisor && e.vertexAttribDivisor(r + y, t.divisor)
                }
            }

            l[5126] = {
                Type: Float32Array, size: 4, setter: function (e, r) {
                    return function (t) {
                        e.uniform1f(r, t)
                    }
                }, arraySetter: function (e, r) {
                    return function (t) {
                        e.uniform1fv(r, t)
                    }
                }
            }, l[35664] = {
                Type: Float32Array, size: 8, setter: function (e, r) {
                    return function (t) {
                        e.uniform2fv(r, t)
                    }
                }
            }, l[35665] = {
                Type: Float32Array, size: 12, setter: function (e, r) {
                    return function (t) {
                        e.uniform3fv(r, t)
                    }
                }
            }, l[35666] = {
                Type: Float32Array, size: 16, setter: function (e, r) {
                    return function (t) {
                        e.uniform4fv(r, t)
                    }
                }
            }, l[5124] = {Type: Int32Array, size: 4, setter: c, arraySetter: m}, l[35667] = {
                Type: Int32Array,
                size: 8,
                setter: y
            }, l[35668] = {Type: Int32Array, size: 12, setter: p}, l[35669] = {
                Type: Int32Array,
                size: 16,
                setter: b
            }, l[5125] = {
                Type: Uint32Array, size: 4, setter: function (e, r) {
                    return function (t) {
                        e.uniform1ui(r, t)
                    }
                }, arraySetter: function (e, r) {
                    return function (t) {
                        e.uniform1uiv(r, t)
                    }
                }
            }, l[36294] = {
                Type: Uint32Array, size: 8, setter: function (e, r) {
                    return function (t) {
                        e.uniform2uiv(r, t)
                    }
                }
            }, l[36295] = {
                Type: Uint32Array, size: 12, setter: function (e, r) {
                    return function (t) {
                        e.uniform3uiv(r, t)
                    }
                }
            }, l[36296] = {
                Type: Uint32Array, size: 16, setter: function (e, r) {
                    return function (t) {
                        e.uniform4uiv(r, t)
                    }
                }
            }, l[35670] = {Type: Uint32Array, size: 4, setter: c, arraySetter: m}, l[35671] = {
                Type: Uint32Array,
                size: 8,
                setter: y
            }, l[35672] = {Type: Uint32Array, size: 12, setter: p}, l[35673] = {
                Type: Uint32Array,
                size: 16,
                setter: b
            }, l[35674] = {
                Type: Float32Array, size: 16, setter: function (e, r) {
                    return function (t) {
                        e.uniformMatrix2fv(r, !1, t)
                    }
                }
            }, l[35675] = {
                Type: Float32Array, size: 36, setter: function (e, r) {
                    return function (t) {
                        e.uniformMatrix3fv(r, !1, t)
                    }
                }
            }, l[35676] = {
                Type: Float32Array, size: 64, setter: function (e, r) {
                    return function (t) {
                        e.uniformMatrix4fv(r, !1, t)
                    }
                }
            }, l[35685] = {
                Type: Float32Array, size: 24, setter: function (e, r) {
                    return function (t) {
                        e.uniformMatrix2x3fv(r, !1, t)
                    }
                }
            }, l[35686] = {
                Type: Float32Array, size: 32, setter: function (e, r) {
                    return function (t) {
                        e.uniformMatrix2x4fv(r, !1, t)
                    }
                }
            }, l[35687] = {
                Type: Float32Array, size: 24, setter: function (e, r) {
                    return function (t) {
                        e.uniformMatrix3x2fv(r, !1, t)
                    }
                }
            }, l[35688] = {
                Type: Float32Array, size: 48, setter: function (e, r) {
                    return function (t) {
                        e.uniformMatrix3x4fv(r, !1, t)
                    }
                }
            }, l[35689] = {
                Type: Float32Array, size: 32, setter: function (e, r) {
                    return function (t) {
                        e.uniformMatrix4x2fv(r, !1, t)
                    }
                }
            }, l[35690] = {
                Type: Float32Array, size: 48, setter: function (e, r) {
                    return function (t) {
                        e.uniformMatrix4x3fv(r, !1, t)
                    }
                }
            }, l[35678] = {Type: null, size: 0, setter: d, arraySetter: E, bindPoint: 3553}, l[35680] = {
                Type: null,
                size: 0,
                setter: d,
                arraySetter: E,
                bindPoint: 34067
            }, l[35679] = {Type: null, size: 0, setter: d, arraySetter: E, bindPoint: 32879}, l[35682] = {
                Type: null,
                size: 0,
                setter: d,
                arraySetter: E,
                bindPoint: 3553
            }, l[36289] = {Type: null, size: 0, setter: d, arraySetter: E, bindPoint: 35866}, l[36292] = {
                Type: null,
                size: 0,
                setter: d,
                arraySetter: E,
                bindPoint: 35866
            }, l[36293] = {Type: null, size: 0, setter: d, arraySetter: E, bindPoint: 34067}, l[36298] = {
                Type: null,
                size: 0,
                setter: d,
                arraySetter: E,
                bindPoint: 3553
            }, l[36299] = {Type: null, size: 0, setter: d, arraySetter: E, bindPoint: 32879}, l[36300] = {
                Type: null,
                size: 0,
                setter: d,
                arraySetter: E,
                bindPoint: 34067
            }, l[36303] = {Type: null, size: 0, setter: d, arraySetter: E, bindPoint: 35866}, l[36306] = {
                Type: null,
                size: 0,
                setter: d,
                arraySetter: E,
                bindPoint: 3553
            }, l[36307] = {Type: null, size: 0, setter: d, arraySetter: E, bindPoint: 32879}, l[36308] = {
                Type: null,
                size: 0,
                setter: d,
                arraySetter: E,
                bindPoint: 34067
            }, l[36311] = {Type: null, size: 0, setter: d, arraySetter: E, bindPoint: 35866};
            var x = {};
            x[5126] = {size: 4, setter: _}, x[35664] = {size: 8, setter: _}, x[35665] = {
                size: 12,
                setter: _
            }, x[35666] = {size: 16, setter: _}, x[5124] = {size: 4, setter: v}, x[35667] = {
                size: 8,
                setter: v
            }, x[35668] = {size: 12, setter: v}, x[35669] = {size: 16, setter: v}, x[5125] = {
                size: 4,
                setter: A
            }, x[36294] = {size: 8, setter: A}, x[36295] = {size: 12, setter: A}, x[36296] = {
                size: 16,
                setter: A
            }, x[35670] = {size: 4, setter: v}, x[35671] = {size: 8, setter: v}, x[35672] = {
                size: 12,
                setter: v
            }, x[35673] = {size: 16, setter: v}, x[35674] = {size: 4, setter: T, count: 2}, x[35675] = {
                size: 9,
                setter: T,
                count: 3
            }, x[35676] = {size: 16, setter: T, count: 4};
            var R = /^[ \t]*\n/;

            function g(e, r, t, n) {
                var o = n || i, a = e.createShader(t), u = 0;
                if (R.test(r) && (u = 1, r = r.replace(R, "")), e.shaderSource(a, r), e.compileShader(a), !e.getShaderParameter(a, e.COMPILE_STATUS)) {
                    var f = e.getShaderInfoLog(a);
                    return o(function (e, r) {
                        return r = r || 0, ++r, e.split("\n").map(function (e, t) {
                            return t + r + ": " + e
                        }).join("\n")
                    }(r, u) + "\n*** Error compiling shader: " + f), e.deleteShader(a), null
                }
                return a
            }

            function F(e, r, t) {
                var n;
                if ("function" == typeof r && (t = r, r = void 0), "function" == typeof e) t = e, e = void 0; else if (e && !Array.isArray(e)) {
                    if (e.errorCallback) return e;
                    var o = e;
                    t = o.errorCallback, e = o.attribLocations, n = o.transformFeedbackVaryings
                }
                var a = {errorCallback: t || i, transformFeedbackVaryings: n};
                if (e) {
                    var u = {};
                    Array.isArray(e) ? e.forEach(function (e, t) {
                        u[e] = r ? r[t] : t
                    }) : u = e, a.attribLocations = u
                }
                return a
            }

            var h = ["VERTEX_SHADER", "FRAGMENT_SHADER"];

            function P(e, r) {
                return r.indexOf("frag") >= 0 ? e.FRAGMENT_SHADER : r.indexOf("vert") >= 0 ? e.VERTEX_SHADER : void 0
            }

            function U(e, r) {
                r.forEach(function (r) {
                    e.deleteShader(r)
                })
            }

            function S(e, r, t, n, a) {
                for (var i = F(t, n, a), u = [], l = [], s = 0; s < r.length; ++s) {
                    var c = r[s];
                    if ("string" == typeof c) {
                        var m = f(c), y = m ? m.text : c, p = e[h[s]];
                        m && m.type && (p = P(e, m.type) || p), c = g(e, y, p, i.errorCallback), l.push(c)
                    }
                    o.isShader(e, c) && u.push(c)
                }
                if (u.length !== r.length) return i.errorCallback("not enough shaders for program"), U(e, l), null;
                var b = e.createProgram();
                u.forEach(function (r) {
                    e.attachShader(b, r)
                }), i.attribLocations && Object.keys(i.attribLocations).forEach(function (r) {
                    e.bindAttribLocation(b, i.attribLocations[r], r)
                });
                var d = i.transformFeedbackVaryings;
                if (d && (d.attribs && (d = d.attribs), Array.isArray(d) || (d = Object.keys(d)), e.transformFeedbackVaryings(b, d, i.transformFeedbackMode || e.SEPARATE_ATTRIBS)), e.linkProgram(b), !e.getProgramParameter(b, e.LINK_STATUS)) {
                    var E = e.getProgramInfoLog(b);
                    return i.errorCallback("Error in program linking:" + E), e.deleteProgram(b), U(e, l), null
                }
                return b
            }

            function O(e, r, t, n) {
                var o, a = f(r);
                if (!a) throw"*** Error: unknown script element" + r;
                o = a.text;
                var i = t || P(e, a.type);
                if (!i) throw"*** Error: unknown shader type";
                return g(e, o, i, n)
            }

            function I(e, r, t, n, o) {
                for (var a = F(t, n, o), i = [], u = 0; u < r.length; ++u) {
                    var f = g(e, r[u], e[h[u]], a.errorCallback);
                    if (!f) return null;
                    i.push(f)
                }
                return S(e, i, a)
            }

            function B(e) {
                var r = e.name;
                return r.startsWith("gl_") || r.startsWith("webgl_")
            }

            function w(e, r) {
                var t = 0;

                function n(r, n) {
                    var o, a = e.getUniformLocation(r, n.name), i = n.size > 1 && "[0]" === n.name.substr(-3),
                        u = n.type, f = l[u];
                    if (!f) throw"unknown type: 0x" + u.toString(16);
                    if (f.bindPoint) {
                        var s = t;
                        t += n.size, o = i ? f.arraySetter(e, u, s, a, n.size) : f.setter(e, u, s, a, n.size)
                    } else o = f.arraySetter && i ? f.arraySetter(e, a) : f.setter(e, a);
                    return o.location = a, o
                }

                for (var o = {}, a = e.getProgramParameter(r, e.ACTIVE_UNIFORMS), i = 0; i < a; ++i) {
                    var u = e.getActiveUniform(r, i);
                    if (!B(u)) {
                        var f = u.name;
                        "[0]" === f.substr(-3) && (f = f.substr(0, f.length - 3));
                        var s = n(r, u);
                        o[f] = s
                    }
                }
                return o
            }

            function C(e, r) {
                for (var t = {}, n = e.getProgramParameter(r, e.TRANSFORM_FEEDBACK_VARYINGS), o = 0; o < n; ++o) {
                    var a = e.getTransformFeedbackVarying(r, o);
                    t[a.name] = {index: o, type: a.type, size: a.size}
                }
                return t
            }

            function M(e, r, t) {
                for (var n in r.transformFeedbackInfo && (r = r.transformFeedbackInfo), t.attribs && (t = t.attribs), t) {
                    var o = r[n];
                    if (o) {
                        var a = t[n];
                        a.offset ? e.bindBufferRange(e.TRANSFORM_FEEDBACK_BUFFER, o.index, a.buffer, a.offset, a.size) : e.bindBufferBase(e.TRANSFORM_FEEDBACK_BUFFER, o.index, a.buffer)
                    }
                }
            }

            function N(e, r) {
                for (var t = e.getProgramParameter(r, e.ACTIVE_UNIFORMS), n = [], o = [], a = 0; a < t; ++a) {
                    o.push(a), n.push({});
                    var i = e.getActiveUniform(r, a);
                    if (B(i)) break;
                    n[a].name = i.name
                }
                [["UNIFORM_TYPE", "type"], ["UNIFORM_SIZE", "size"], ["UNIFORM_BLOCK_INDEX", "blockNdx"], ["UNIFORM_OFFSET", "offset"]].forEach(function (t) {
                    var a = t[0], i = t[1];
                    e.getActiveUniforms(r, o, e[a]).forEach(function (e, r) {
                        n[r][i] = e
                    })
                });
                for (var u = {}, f = e.getProgramParameter(r, e.ACTIVE_UNIFORM_BLOCKS), l = 0; l < f; ++l) {
                    var s = e.getActiveUniformBlockName(r, l), c = {
                        index: l,
                        usedByVertexShader: e.getActiveUniformBlockParameter(r, l, e.UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER),
                        usedByFragmentShader: e.getActiveUniformBlockParameter(r, l, e.UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER),
                        size: e.getActiveUniformBlockParameter(r, l, e.UNIFORM_BLOCK_DATA_SIZE),
                        uniformIndices: e.getActiveUniformBlockParameter(r, l, e.UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES)
                    };
                    c.used = c.usedByVertexSahder || c.usedByFragmentShader, u[s] = c
                }
                return {blockSpecs: u, uniformData: n}
            }

            var L = /\[\d+\]\.$/;

            function D(e, r, t, n) {
                var o = t.blockSpecs, a = t.uniformData, i = o[n];
                if (!i) return u("no uniform block object named:", n), {name: n, uniforms: {}};
                var f = new ArrayBuffer(i.size), s = e.createBuffer(), c = i.index;
                e.bindBuffer(e.UNIFORM_BUFFER, s), e.uniformBlockBinding(r, i.index, c);
                var m = n + ".";
                L.test(m) && (m = m.replace(L, "."));
                var y = {};
                return i.uniformIndices.forEach(function (e) {
                    var r = a[e], t = l[r.type], n = t.Type, o = r.size * t.size, i = r.name;
                    i.substr(0, m.length) === m && (i = i.substr(m.length)), y[i] = new n(f, r.offset, o / n.BYTES_PER_ELEMENT)
                }), {name: n, array: f, asFloat: new Float32Array(f), buffer: s, uniforms: y}
            }

            function j(e, r, t) {
                var n = (r.uniformBlockSpec || r).blockSpecs[t.name];
                if (n) {
                    var o = n.index;
                    return e.bindBufferRange(e.UNIFORM_BUFFER, o, t.buffer, t.offset || 0, t.array.byteLength), !0
                }
                return !1
            }

            function k(e, r) {
                for (var t = {}, n = e.getProgramParameter(r, e.ACTIVE_ATTRIBUTES), o = 0; o < n; ++o) {
                    var a = e.getActiveAttrib(r, o);
                    if (!B(a)) {
                        var i = e.getAttribLocation(r, a.name), u = x[a.type], f = u.setter(e, i, u);
                        f.location = i, t[a.name] = f
                    }
                }
                return t
            }

            function G(e, r) {
                for (var t in r) {
                    var n = e[t];
                    n && n(r[t])
                }
            }

            function z(e, r) {
                var t = {program: r, uniformSetters: w(e, r), attribSetters: k(e, r)};
                return n.isWebGL2(e) && (t.uniformBlockSpec = N(e, r), t.transformFeedbackInfo = C(e, r)), t
            }
        }, "./src/textures.js": function (e, r, t) {
            "use strict";
            r.__esModule = !0, r.setTextureDefaults_ = function (e) {
                a.copyExistingProperties(e, u), e.textureColor && R(e.textureColor)
            }, r.createSampler = B, r.createSamplers = function (e, r) {
                var t = {};
                return Object.keys(r).forEach(function (n) {
                    t[n] = B(e, r[n])
                }), t
            }, r.setSamplerParameters = I, r.createTexture = Z, r.setEmptyTexture = H, r.setTextureFromArray = V, r.loadTextureFromUrl = Y, r.setTextureFromElement = L, r.setTextureFilteringForSize = w, r.setTextureParameters = O, r.setDefaultTextureColor = R, r.createTextures = function (e, r, t) {
                t = t || D;
                var n = 0, o = [], a = {}, i = {};

                function u() {
                    0 === n && setTimeout(function () {
                        t(o.length ? o : void 0, a, i)
                    }, 0)
                }

                return Object.keys(r).forEach(function (t) {
                    var f, l, s = r[t];
                    ("string" == typeof (l = s.src) || Array.isArray(l) && "string" == typeof l[0]) && (f = function (e, r, a) {
                        i[t] = a, --n, e && o.push(e), u()
                    }, ++n), a[t] = Z(e, s, f)
                }), u(), a
            }, r.resizeTexture = function (e, r, t, n, o) {
                n = n || t.width, o = o || t.height;
                var a = t.target || e.TEXTURE_2D;
                e.bindTexture(a, r);
                var i, u = t.level || 0, l = t.internalFormat || t.format || e.RGBA, s = E(l), c = t.format || s.format,
                    m = t.src;
                i = m && (f(m) || Array.isArray(m) && "number" == typeof m[0]) ? t.type || T(e, m, s.type) : t.type || s.type;
                if (a === e.TEXTURE_CUBE_MAP) for (var y = 0; y < 6; ++y) e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + y, u, l, n, o, 0, c, i, null); else e.texImage2D(a, u, l, n, o, 0, c, i, null)
            }, r.canGenerateMipmap = v, r.canFilter = A, r.getNumComponentsForFormat = function (e) {
                var r = m[e];
                if (!r) throw"unknown format: " + e;
                return r.numColorComponents
            }, r.getBytesPerElementForInternalFormat = d, r.getFormatAndTypeForInternalFormat = E;
            var n = i(t("./src/utils.js")), o = i(t("./src/typedarrays.js")), a = i(t("./src/helper.js"));

            function i(e) {
                if (e && e.__esModule) return e;
                var r = {};
                if (null != e) for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
                    var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
                    n.get || n.set ? Object.defineProperty(r, t, n) : r[t] = e[t]
                }
                return r.default = e, r
            }

            var u = {textureColor: new Uint8Array([128, 192, 255, 255]), textureOptions: {}, crossOrigin: void 0},
                f = o.isArrayBuffer,
                l = "undefined" != typeof document && document.createElement ? document.createElement("canvas").getContext("2d") : null,
                s = 6407, c = 33319, m = {}, y = m;
            y[6406] = {numColorComponents: 1}, y[6409] = {numColorComponents: 1}, y[6410] = {numColorComponents: 2}, y[s] = {numColorComponents: 3}, y[6408] = {numColorComponents: 4}, y[6403] = {numColorComponents: 1}, y[36244] = {numColorComponents: 1}, y[c] = {numColorComponents: 2}, y[33320] = {numColorComponents: 2}, y[s] = {numColorComponents: 3}, y[36248] = {numColorComponents: 3}, y[6408] = {numColorComponents: 4}, y[36249] = {numColorComponents: 4}, y[6402] = {numColorComponents: 1}, y[34041] = {numColorComponents: 2};
            var p = {}, b = p;

            function d(e, r) {
                var t = p[e];
                if (!t) throw"unknown internal format";
                var n = t.bytesPerElementMap[r];
                if (void 0 === n) throw"unknown internal format";
                return n
            }

            function E(e) {
                var r = p[e];
                if (!r) throw"unknown internal format";
                return {format: r.textureFormat, type: r.type[0]}
            }

            function _(e) {
                return 0 == (e & e - 1)
            }

            function v(e, r, t, o) {
                if (!n.isWebGL2(e)) return _(r) && _(t);
                var a = p[o];
                if (!a) throw"unknown internal format";
                return a.colorRenderable && a.textureFilterable
            }

            function A(e) {
                var r = p[e];
                if (!r) throw"unknown internal format";
                return r.textureFilterable
            }

            function T(e, r, t) {
                return f(r) ? o.getGLTypeForTypedArray(r) : t || e.UNSIGNED_BYTE
            }

            function x(e, r, t, n, o) {
                if (o % 1 != 0) throw"can't guess dimensions";
                if (t || n) {
                    if (n) {
                        if (!t && (t = o / n) % 1) throw"can't guess dimensions"
                    } else if ((n = o / t) % 1) throw"can't guess dimensions"
                } else {
                    var a = Math.sqrt(o / (r === e.TEXTURE_CUBE_MAP ? 6 : 1));
                    a % 1 == 0 ? (t = a, n = a) : (t = o, n = 1)
                }
                return {width: t, height: n}
            }

            function R(e) {
                u.textureColor = new Uint8Array([255 * e[0], 255 * e[1], 255 * e[2], 255 * e[3]])
            }

            b[6406] = {
                textureFormat: 6406,
                colorRenderable: !0,
                textureFilterable: !0,
                bytesPerElement: [1, 2, 2, 4],
                type: [5121, 5131, 36193, 5126]
            }, b[6409] = {
                textureFormat: 6409,
                colorRenderable: !0,
                textureFilterable: !0,
                bytesPerElement: [1, 2, 2, 4],
                type: [5121, 5131, 36193, 5126]
            }, b[6410] = {
                textureFormat: 6410,
                colorRenderable: !0,
                textureFilterable: !0,
                bytesPerElement: [2, 4, 4, 8],
                type: [5121, 5131, 36193, 5126]
            }, b[s] = {
                textureFormat: s,
                colorRenderable: !0,
                textureFilterable: !0,
                bytesPerElement: [3, 6, 6, 12, 2],
                type: [5121, 5131, 36193, 5126, 33635]
            }, b[6408] = {
                textureFormat: 6408,
                colorRenderable: !0,
                textureFilterable: !0,
                bytesPerElement: [4, 8, 8, 16, 2, 2],
                type: [5121, 5131, 36193, 5126, 32819, 32820]
            }, b[33321] = {
                textureFormat: 6403,
                colorRenderable: !0,
                textureFilterable: !0,
                bytesPerElement: [1],
                type: [5121]
            }, b[36756] = {
                textureFormat: 6403,
                colorRenderable: !1,
                textureFilterable: !0,
                bytesPerElement: [1],
                type: [5120]
            }, b[33325] = {
                textureFormat: 6403,
                colorRenderable: !1,
                textureFilterable: !0,
                bytesPerElement: [4, 2],
                type: [5126, 5131]
            }, b[33326] = {
                textureFormat: 6403,
                colorRenderable: !1,
                textureFilterable: !1,
                bytesPerElement: [4],
                type: [5126]
            }, b[33330] = {
                textureFormat: 36244,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [1],
                type: [5121]
            }, b[33329] = {
                textureFormat: 36244,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [1],
                type: [5120]
            }, b[33332] = {
                textureFormat: 36244,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [2],
                type: [5123]
            }, b[33331] = {
                textureFormat: 36244,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [2],
                type: [5122]
            }, b[33334] = {
                textureFormat: 36244,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [4],
                type: [5125]
            }, b[33333] = {
                textureFormat: 36244,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [4],
                type: [5124]
            }, b[33323] = {
                textureFormat: c,
                colorRenderable: !0,
                textureFilterable: !0,
                bytesPerElement: [2],
                type: [5121]
            }, b[36757] = {
                textureFormat: c,
                colorRenderable: !1,
                textureFilterable: !0,
                bytesPerElement: [2],
                type: [5120]
            }, b[33327] = {
                textureFormat: c,
                colorRenderable: !1,
                textureFilterable: !0,
                bytesPerElement: [8, 4],
                type: [5126, 5131]
            }, b[33328] = {
                textureFormat: c,
                colorRenderable: !1,
                textureFilterable: !1,
                bytesPerElement: [8],
                type: [5126]
            }, b[33336] = {
                textureFormat: 33320,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [2],
                type: [5121]
            }, b[33335] = {
                textureFormat: 33320,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [2],
                type: [5120]
            }, b[33338] = {
                textureFormat: 33320,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [4],
                type: [5123]
            }, b[33337] = {
                textureFormat: 33320,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [4],
                type: [5122]
            }, b[33340] = {
                textureFormat: 33320,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [8],
                type: [5125]
            }, b[33339] = {
                textureFormat: 33320,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [8],
                type: [5124]
            }, b[32849] = {
                textureFormat: s,
                colorRenderable: !0,
                textureFilterable: !0,
                bytesPerElement: [3],
                type: [5121]
            }, b[35905] = {
                textureFormat: s,
                colorRenderable: !1,
                textureFilterable: !0,
                bytesPerElement: [3],
                type: [5121]
            }, b[36194] = {
                textureFormat: s,
                colorRenderable: !0,
                textureFilterable: !0,
                bytesPerElement: [3, 2],
                type: [5121, 33635]
            }, b[36758] = {
                textureFormat: s,
                colorRenderable: !1,
                textureFilterable: !0,
                bytesPerElement: [3],
                type: [5120]
            }, b[35898] = {
                textureFormat: s,
                colorRenderable: !1,
                textureFilterable: !0,
                bytesPerElement: [12, 6, 4],
                type: [5126, 5131, 35899]
            }, b[35901] = {
                textureFormat: s,
                colorRenderable: !1,
                textureFilterable: !0,
                bytesPerElement: [12, 6, 4],
                type: [5126, 5131, 35902]
            }, b[34843] = {
                textureFormat: s,
                colorRenderable: !1,
                textureFilterable: !0,
                bytesPerElement: [12, 6],
                type: [5126, 5131]
            }, b[34837] = {
                textureFormat: s,
                colorRenderable: !1,
                textureFilterable: !1,
                bytesPerElement: [12],
                type: [5126]
            }, b[36221] = {
                textureFormat: 36248,
                colorRenderable: !1,
                textureFilterable: !1,
                bytesPerElement: [3],
                type: [5121]
            }, b[36239] = {
                textureFormat: 36248,
                colorRenderable: !1,
                textureFilterable: !1,
                bytesPerElement: [3],
                type: [5120]
            }, b[36215] = {
                textureFormat: 36248,
                colorRenderable: !1,
                textureFilterable: !1,
                bytesPerElement: [6],
                type: [5123]
            }, b[36233] = {
                textureFormat: 36248,
                colorRenderable: !1,
                textureFilterable: !1,
                bytesPerElement: [6],
                type: [5122]
            }, b[36209] = {
                textureFormat: 36248,
                colorRenderable: !1,
                textureFilterable: !1,
                bytesPerElement: [12],
                type: [5125]
            }, b[36227] = {
                textureFormat: 36248,
                colorRenderable: !1,
                textureFilterable: !1,
                bytesPerElement: [12],
                type: [5124]
            }, b[32856] = {
                textureFormat: 6408,
                colorRenderable: !0,
                textureFilterable: !0,
                bytesPerElement: [4],
                type: [5121]
            }, b[35907] = {
                textureFormat: 6408,
                colorRenderable: !0,
                textureFilterable: !0,
                bytesPerElement: [4],
                type: [5121]
            }, b[36759] = {
                textureFormat: 6408,
                colorRenderable: !1,
                textureFilterable: !0,
                bytesPerElement: [4],
                type: [5120]
            }, b[32855] = {
                textureFormat: 6408,
                colorRenderable: !0,
                textureFilterable: !0,
                bytesPerElement: [4, 2, 4],
                type: [5121, 32820, 33640]
            }, b[32854] = {
                textureFormat: 6408,
                colorRenderable: !0,
                textureFilterable: !0,
                bytesPerElement: [4, 2],
                type: [5121, 32819]
            }, b[32857] = {
                textureFormat: 6408,
                colorRenderable: !0,
                textureFilterable: !0,
                bytesPerElement: [4],
                type: [33640]
            }, b[34842] = {
                textureFormat: 6408,
                colorRenderable: !1,
                textureFilterable: !0,
                bytesPerElement: [16, 8],
                type: [5126, 5131]
            }, b[34836] = {
                textureFormat: 6408,
                colorRenderable: !1,
                textureFilterable: !1,
                bytesPerElement: [16],
                type: [5126]
            }, b[36220] = {
                textureFormat: 36249,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [4],
                type: [5121]
            }, b[36238] = {
                textureFormat: 36249,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [4],
                type: [5120]
            }, b[36975] = {
                textureFormat: 36249,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [4],
                type: [33640]
            }, b[36214] = {
                textureFormat: 36249,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [8],
                type: [5123]
            }, b[36232] = {
                textureFormat: 36249,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [8],
                type: [5122]
            }, b[36226] = {
                textureFormat: 36249,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [16],
                type: [5124]
            }, b[36208] = {
                textureFormat: 36249,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [16],
                type: [5125]
            }, b[33189] = {
                textureFormat: 6402,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [2, 4],
                type: [5123, 5125]
            }, b[33190] = {
                textureFormat: 6402,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [4],
                type: [5125]
            }, b[36012] = {
                textureFormat: 6402,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [4],
                type: [5126]
            }, b[35056] = {
                textureFormat: 34041,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [4],
                type: [34042]
            }, b[36013] = {
                textureFormat: 34041,
                colorRenderable: !0,
                textureFilterable: !1,
                bytesPerElement: [4],
                type: [36269]
            }, Object.keys(b).forEach(function (e) {
                var r = b[e];
                r.bytesPerElementMap = {}, r.bytesPerElement.forEach(function (e, t) {
                    var n = r.type[t];
                    r.bytesPerElementMap[n] = e
                })
            });
            var g = {};

            function F(e, r) {
                void 0 !== r.colorspaceConversion && (g.colorspaceConversion = e.getParameter(e.UNPACK_COLORSPACE_CONVERSION_WEBGL), e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, r.colorspaceConversion)), void 0 !== r.premultiplyAlpha && (g.premultiplyAlpha = e.getParameter(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL), e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, r.premultiplyAlpha)), void 0 !== r.flipY && (g.flipY = e.getParameter(e.UNPACK_FLIP_Y_WEBGL), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, r.flipY))
            }

            function h(e, r) {
                void 0 !== r.colorspaceConversion && e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL, g.colorspaceConversion), void 0 !== r.premultiplyAlpha && e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, g.premultiplyAlpha), void 0 !== r.flipY && e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, g.flipY)
            }

            function P(e) {
                g.unpackAlignment = e.getParameter(e.UNPACK_ALIGNMENT), n.isWebGL2(e) && (g.unpackRowLength = e.getParameter(e.UNPACK_ROW_LENGTH), g.unpackImageHeight = e.getParameter(e.UNPACK_IMAGE_HEIGHT), g.unpackSkipPixels = e.getParameter(e.UNPACK_SKIP_PIXELS), g.unpackSkipRows = e.getParameter(e.UNPACK_SKIP_ROWS), g.unpackSkipImages = e.getParameter(e.UNPACK_SKIP_IMAGES))
            }

            function U(e) {
                e.pixelStorei(e.UNPACK_ALIGNMENT, g.unpackAlignment), n.isWebGL2(e) && (e.pixelStorei(e.UNPACK_ROW_LENGTH, g.unpackRowLength), e.pixelStorei(e.UNPACK_IMAGE_HEIGHT, g.unpackImageHeight), e.pixelStorei(e.UNPACK_SKIP_PIXELS, g.unpackSkipPixels), e.pixelStorei(e.UNPACK_SKIP_ROWS, g.unpackSkipRows), e.pixelStorei(e.UNPACK_SKIP_IMAGES, g.unpackSkipImages))
            }

            function S(e, r, t, n) {
                n.minMag && (t.call(e, r, e.TEXTURE_MIN_FILTER, n.minMag), t.call(e, r, e.TEXTURE_MAG_FILTER, n.minMag)), n.min && t.call(e, r, e.TEXTURE_MIN_FILTER, n.min), n.mag && t.call(e, r, e.TEXTURE_MAG_FILTER, n.mag), n.wrap && (t.call(e, r, e.TEXTURE_WRAP_S, n.wrap), t.call(e, r, e.TEXTURE_WRAP_T, n.wrap), (r === e.TEXTURE_3D || a.isSampler(e, r)) && t.call(e, r, e.TEXTURE_WRAP_R, n.wrap)), n.wrapR && t.call(e, r, e.TEXTURE_WRAP_R, n.wrapR), n.wrapS && t.call(e, r, e.TEXTURE_WRAP_S, n.wrapS), n.wrapT && t.call(e, r, e.TEXTURE_WRAP_T, n.wrapT), n.minLod && t.call(e, r, e.TEXTURE_MIN_LOD, n.minLod), n.maxLod && t.call(e, r, e.TEXTURE_MAX_LOD, n.maxLod), n.baseLevel && t.call(e, r, e.TEXTURE_BASE_LEVEL, n.baseLevel), n.maxLevel && t.call(e, r, e.TEXTURE_MAX_LEVEL, n.maxLevel)
            }

            function O(e, r, t) {
                var n = t.target || e.TEXTURE_2D;
                e.bindTexture(n, r), S(e, n, e.texParameteri, t)
            }

            function I(e, r, t) {
                S(e, r, e.samplerParameteri, t)
            }

            function B(e, r) {
                var t = e.createSampler();
                return I(e, t, r), t
            }

            function w(e, r, t, n, o, a, i) {
                t = t || u.textureOptions, a = a || e.RGBA, i = i || e.UNSIGNED_BYTE;
                var f = t.target || e.TEXTURE_2D;
                if (n = n || t.width, o = o || t.height, e.bindTexture(f, r), v(e, n, o, a)) e.generateMipmap(f); else {
                    var l = A(a) ? e.LINEAR : e.NEAREST;
                    e.texParameteri(f, e.TEXTURE_MIN_FILTER, l), e.texParameteri(f, e.TEXTURE_MAG_FILTER, l), e.texParameteri(f, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(f, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE)
                }
            }

            function C(e) {
                return !0 === e.auto || void 0 === e.auto && void 0 === e.level
            }

            function M(e, r) {
                return (r = r || {}).cubeFaceOrder || [e.TEXTURE_CUBE_MAP_POSITIVE_X, e.TEXTURE_CUBE_MAP_NEGATIVE_X, e.TEXTURE_CUBE_MAP_POSITIVE_Y, e.TEXTURE_CUBE_MAP_NEGATIVE_Y, e.TEXTURE_CUBE_MAP_POSITIVE_Z, e.TEXTURE_CUBE_MAP_NEGATIVE_Z]
            }

            function N(e, r) {
                var t = M(e, r).map(function (e, r) {
                    return {face: e, ndx: r}
                });
                return t.sort(function (e, r) {
                    return e.face - r.face
                }), t
            }

            function L(e, r, t, n) {
                var o = (n = n || u.textureOptions).target || e.TEXTURE_2D, a = n.level || 0, i = t.width, f = t.height,
                    s = n.internalFormat || n.format || e.RGBA, c = E(s), m = n.format || c.format,
                    y = n.type || c.type;
                if (F(e, n), e.bindTexture(o, r), o === e.TEXTURE_CUBE_MAP) {
                    var p, b, d = t.width, _ = t.height;
                    if (d / 6 === _) p = _, b = [0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5, 0]; else if (_ / 6 === d) p = d, b = [0, 0, 0, 1, 0, 2, 0, 3, 0, 4, 0, 5]; else if (d / 3 == _ / 2) p = d / 3, b = [0, 0, 1, 0, 2, 0, 0, 1, 1, 1, 2, 1]; else {
                        if (d / 2 != _ / 3) throw"can't figure out cube map from element: " + (t.src ? t.src : t.nodeName);
                        p = d / 2, b = [0, 0, 1, 0, 0, 1, 1, 1, 0, 2, 1, 2]
                    }
                    l ? (l.canvas.width = p, l.canvas.height = p, i = p, f = p, N(e, n).forEach(function (r) {
                        var n = b[2 * r.ndx + 0] * p, o = b[2 * r.ndx + 1] * p;
                        l.drawImage(t, n, o, p, p, 0, 0, p, p), e.texImage2D(r.face, a, s, m, y, l.canvas)
                    }), l.canvas.width = 1, l.canvas.height = 1) : "undefined" != typeof createImageBitmap && (i = p, f = p, N(e, n).forEach(function (u) {
                        var l = b[2 * u.ndx + 0] * p, c = b[2 * u.ndx + 1] * p;
                        e.texImage2D(u.face, a, s, p, p, 0, m, y, null), createImageBitmap(t, l, c, p, p, {
                            premultiplyAlpha: "none",
                            colorSpaceConversion: "none"
                        }).then(function (t) {
                            F(e, n), e.bindTexture(o, r), e.texImage2D(u.face, a, s, m, y, t), h(e, n), C(n) && w(e, r, n, i, f, s, y)
                        })
                    }))
                } else if (o === e.TEXTURE_3D || o === e.TEXTURE_2D_ARRAY) {
                    var v = Math.min(t.width, t.height), A = Math.max(t.width, t.height), T = A / v;
                    if (T % 1 != 0) throw"can not compute 3D dimensions of element";
                    var x = t.width === A ? 1 : 0, R = t.height === A ? 1 : 0;
                    P(e), e.pixelStorei(e.UNPACK_ALIGNMENT, 1), e.pixelStorei(e.UNPACK_ROW_LENGTH, t.width), e.pixelStorei(e.UNPACK_IMAGE_HEIGHT, 0), e.pixelStorei(e.UNPACK_SKIP_IMAGES, 0), e.texImage3D(o, a, s, v, v, v, 0, m, y, null);
                    for (var g = 0; g < T; ++g) {
                        var S = g * v * x, I = g * v * R;
                        e.pixelStorei(e.UNPACK_SKIP_PIXELS, S), e.pixelStorei(e.UNPACK_SKIP_ROWS, I), e.texSubImage3D(o, a, 0, 0, g, v, v, 1, m, y, t)
                    }
                    U(e)
                } else e.texImage2D(o, a, s, m, y, t);
                h(e, n), C(n) && w(e, r, n, i, f, s, y), O(e, r, n)
            }

            function D() {
            }

            var j = function () {
                if ("undefined" != typeof document) {
                    var e = document.createElement("a");
                    return function (r) {
                        return e.href = r, e.hostname === location.hostname && e.port === location.port && e.protocol === location.protocol
                    }
                }
                var r = new URL(location.href).origin;
                return function (e) {
                    return new URL(e, location.href).origin === r
                }
            }();

            function k(e, r, t) {
                var n;
                if (t = t || D, r = void 0 !== r ? r : u.crossOrigin, r = function (e, r) {
                    return void 0 !== r || j(e) ? r : "anonymous"
                }(e, r), "undefined" != typeof Image) {
                    n = new Image, void 0 !== r && (n.crossOrigin = r);
                    var o = function () {
                        n.removeEventListener("error", i), n.removeEventListener("load", f), n = null
                    }, i = function () {
                        var r = "couldn't load image: " + e;
                        a.error(r), t(r, n), o()
                    }, f = function () {
                        t(null, n), o()
                    };
                    return n.addEventListener("error", i), n.addEventListener("load", f), n.src = e, n
                }
                if ("undefined" != typeof ImageBitmap) {
                    var l, s, c = function () {
                        t(l, s)
                    }, m = {};
                    r && (m.mode = "cors"), fetch(e, m).then(function (e) {
                        if (!e.ok) throw e;
                        return e.blob()
                    }).then(function (e) {
                        return createImageBitmap(e, {premultiplyAlpha: "none", colorSpaceConversion: "none"})
                    }).then(function (e) {
                        s = e, setTimeout(c)
                    }).catch(function (e) {
                        l = e, setTimeout(c)
                    }), n = null
                }
                return n
            }

            function G(e) {
                return "undefined" != typeof ImageBitmap && e instanceof ImageBitmap || "undefined" != typeof ImageData && e instanceof ImageData || "undefined" != typeof HTMLElement && e instanceof HTMLElement
            }

            function z(e, r, t) {
                return G(e) ? (setTimeout(function () {
                    t(null, e)
                }), e) : k(e, r, t)
            }

            function X(e, r, t) {
                var n = (t = t || u.textureOptions).target || e.TEXTURE_2D;
                if (e.bindTexture(n, r), !1 !== t.color) {
                    var o = function (e) {
                        return e = e || u.textureColor, f(e) ? e : new Uint8Array([255 * e[0], 255 * e[1], 255 * e[2], 255 * e[3]])
                    }(t.color);
                    if (n === e.TEXTURE_CUBE_MAP) for (var a = 0; a < 6; ++a) e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + a, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, o); else n === e.TEXTURE_3D || n === e.TEXTURE_2D_ARRAY ? e.texImage3D(n, 0, e.RGBA, 1, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, o) : e.texImage2D(n, 0, e.RGBA, 1, 1, 0, e.RGBA, e.UNSIGNED_BYTE, o)
                }
            }

            function Y(e, r, t, n) {
                return n = n || D, t = t || u.textureOptions, X(e, r, t), z((t = Object.assign({}, t)).src, t.crossOrigin, function (o, a) {
                    o ? n(o, r, a) : (L(e, r, a, t), n(null, r, a))
                })
            }

            function W(e, r, t, n) {
                n = n || D;
                var o = t.src;
                if (6 !== o.length) throw"there must be 6 urls for a cubemap";
                var a = t.level || 0, i = t.internalFormat || t.format || e.RGBA, u = E(i), f = t.format || u.format,
                    l = t.type || e.UNSIGNED_BYTE, s = t.target || e.TEXTURE_2D;
                if (s !== e.TEXTURE_CUBE_MAP) throw"target must be TEXTURE_CUBE_MAP";
                X(e, r, t), t = Object.assign({}, t);
                var c, m = 6, y = [], p = M(e, t);
                c = o.map(function (o, u) {
                    return z(o, t.crossOrigin, (b = p[u], function (o, u) {
                        --m, o ? y.push(o) : u.width !== u.height ? y.push("cubemap face img is not a square: " + u.src) : (F(e, t), e.bindTexture(s, r), 5 === m ? M(e).forEach(function (r) {
                            e.texImage2D(r, a, i, f, l, u)
                        }) : e.texImage2D(b, a, i, f, l, u), h(e, t), C(t) && e.generateMipmap(s)), 0 === m && n(y.length ? y : void 0, r, c)
                    }));
                    var b
                })
            }

            function K(e, r, t, n) {
                n = n || D;
                var o = t.src, a = t.internalFormat || t.format || e.RGBA, i = E(a), u = t.format || i.format,
                    f = t.type || e.UNSIGNED_BYTE, s = t.target || e.TEXTURE_2D_ARRAY;
                if (s !== e.TEXTURE_3D && s !== e.TEXTURE_2D_ARRAY) throw"target must be TEXTURE_3D or TEXTURE_2D_ARRAY";
                X(e, r, t), t = Object.assign({}, t);
                var c, m = o.length, y = [], p = t.level || 0, b = t.width, d = t.height, _ = o.length, v = !0;
                c = o.map(function (o, i) {
                    return z(o, t.crossOrigin, (E = i, function (o, i) {
                        if (--m, o) y.push(o); else {
                            if (F(e, t), e.bindTexture(s, r), v) {
                                v = !1, b = t.width || i.width, d = t.height || i.height, e.texImage3D(s, p, a, b, d, _, 0, u, f, null);
                                for (var A = 0; A < _; ++A) e.texSubImage3D(s, p, 0, 0, A, b, d, 1, u, f, i)
                            } else {
                                var T = i;
                                i.width === b && i.height === d || (T = l.canvas, l.canvas.width = b, l.canvas.height = d, l.drawImage(i, 0, 0, b, d)), e.texSubImage3D(s, p, 0, 0, E, b, d, 1, u, f, T), T === l.canvas && (l.canvas.width = 0, l.canvas.height = 0)
                            }
                            h(e, t), C(t) && e.generateMipmap(s)
                        }
                        0 === m && n(y.length ? y : void 0, r, c)
                    }));
                    var E
                })
            }

            function V(e, r, t, a) {
                var i = (a = a || u.textureOptions).target || e.TEXTURE_2D;
                e.bindTexture(i, r);
                var l = a.width, s = a.height, c = a.depth, m = a.level || 0,
                    y = a.internalFormat || a.format || e.RGBA, p = E(y), b = a.format || p.format,
                    _ = a.type || T(e, t, p.type);
                if (f(t)) t instanceof Uint8ClampedArray && (t = new Uint8Array(t.buffer)); else {
                    var v = o.getTypedArrayTypeForGLType(_);
                    t = new v(t)
                }
                var A, R = d(y, _), g = t.byteLength / R;
                if (g % 1) throw"length wrong size for format: " + n.glEnumToString(e, b);
                if (i === e.TEXTURE_3D) if (l || s || c) !l || s && c ? !s || l && c ? (A = x(e, i, l, s, g / c), l = A.width, s = A.height) : (A = x(e, i, l, c, g / s), l = A.width, c = A.height) : (A = x(e, i, s, c, g / l), s = A.width, c = A.height); else {
                    var S = Math.cbrt(g);
                    if (S % 1 != 0) throw"can't guess cube size of array of numElements: " + g;
                    l = S, s = S, c = S
                } else A = x(e, i, l, s, g), l = A.width, s = A.height;
                if (P(e), e.pixelStorei(e.UNPACK_ALIGNMENT, a.unpackAlignment || 1), F(e, a), i === e.TEXTURE_CUBE_MAP) {
                    var O = g / 6 * (R / t.BYTES_PER_ELEMENT);
                    N(e, a).forEach(function (r) {
                        var n = O * r.ndx, o = t.subarray(n, n + O);
                        e.texImage2D(r.face, m, y, l, s, 0, b, _, o)
                    })
                } else i === e.TEXTURE_3D ? e.texImage3D(i, m, y, l, s, c, 0, b, _, t) : e.texImage2D(i, m, y, l, s, 0, b, _, t);
                return h(e, a), U(e), {width: l, height: s, depth: c, type: _}
            }

            function H(e, r, t) {
                var n = t.target || e.TEXTURE_2D;
                e.bindTexture(n, r);
                var o = t.level || 0, a = t.internalFormat || t.format || e.RGBA, i = E(a), u = t.format || i.format,
                    f = t.type || i.type;
                if (F(e, t), n === e.TEXTURE_CUBE_MAP) for (var l = 0; l < 6; ++l) e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X + l, o, a, t.width, t.height, 0, u, f, null); else n === e.TEXTURE_3D ? e.texImage3D(n, o, a, t.width, t.height, t.depth, 0, u, f, null) : e.texImage2D(n, o, a, t.width, t.height, 0, u, f, null);
                h(e, t)
            }

            function Z(e, r, t) {
                t = t || D, r = r || u.textureOptions;
                var n = e.createTexture(), o = r.target || e.TEXTURE_2D, a = r.width || 1, i = r.height || 1,
                    l = r.internalFormat || e.RGBA, s = E(l), c = r.type || s.type;
                e.bindTexture(o, n), o === e.TEXTURE_CUBE_MAP && (e.texParameteri(o, e.TEXTURE_WRAP_S, e.CLAMP_TO_EDGE), e.texParameteri(o, e.TEXTURE_WRAP_T, e.CLAMP_TO_EDGE));
                var m = r.src;
                if (m) if ("function" == typeof m && (m = m(e, r)), "string" == typeof m) Y(e, n, r, t); else if (f(m) || Array.isArray(m) && ("number" == typeof m[0] || Array.isArray(m[0]) || f(m[0]))) {
                    var y = V(e, n, m, r);
                    a = y.width, i = y.height, c = y.type
                } else if (Array.isArray(m) && ("string" == typeof m[0] || G(m[0]))) o === e.TEXTURE_CUBE_MAP ? W(e, n, r, t) : K(e, n, r, t); else {
                    if (!G(m)) throw"unsupported src type";
                    L(e, n, m, r), a = m.width, i = m.height
                } else H(e, n, r);
                return C(r) && w(e, n, r, a, i, l, c), O(e, n, r), n
            }
        }, "./src/twgl-base.js": function (e, r, t) {
            "use strict";
            r.__esModule = !0;
            var n = t("./src/twgl.js");
            Object.keys(n).forEach(function (e) {
                "default" !== e && "__esModule" !== e && (r[e] = n[e])
            })
        }, "./src/twgl.js": function (e, r, t) {
            "use strict";
            r.__esModule = !0;
            var n = {
                addExtensionsToContext: !0,
                getContext: !0,
                getWebGLContext: !0,
                resizeCanvasToDisplaySize: !0,
                setDefaults: !0
            };
            r.addExtensionsToContext = _, r.getContext = function (e, r) {
                return function (e, r) {
                    for (var t = ["webgl2", "webgl", "experimental-webgl"], n = null, o = 0; o < t.length; ++o) if (n = e.getContext(t[o], r)) {
                        p.addExtensionsToContext && _(n);
                        break
                    }
                    return n
                }(e, r)
            }, r.getWebGLContext = function (e, r) {
                return function (e, r) {
                    for (var t = ["webgl", "experimental-webgl"], n = null, o = 0; o < t.length; ++o) if (n = e.getContext(t[o], r)) {
                        p.addExtensionsToContext && _(n);
                        break
                    }
                    return n
                }(e, r)
            }, r.resizeCanvasToDisplaySize = function (e, r) {
                r = r || 1, r = Math.max(0, r);
                var t = e.clientWidth * r | 0, n = e.clientHeight * r | 0;
                if (e.width !== t || e.height !== n) return e.width = t, e.height = n, !0;
                return !1
            }, r.setDefaults = function (e) {
                i.copyExistingProperties(e, p), o.setAttributeDefaults_(e), a.setTextureDefaults_(e)
            };
            var o = y(t("./src/attributes.js"));
            Object.keys(o).forEach(function (e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || (r[e] = o[e]))
            });
            var a = y(t("./src/textures.js"));
            Object.keys(a).forEach(function (e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || (r[e] = a[e]))
            });
            var i = y(t("./src/helper.js")), u = y(t("./src/utils.js"));
            Object.keys(u).forEach(function (e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || (r[e] = u[e]))
            });
            var f = t("./src/draw.js");
            Object.keys(f).forEach(function (e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || (r[e] = f[e]))
            });
            var l = t("./src/framebuffers.js");
            Object.keys(l).forEach(function (e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || (r[e] = l[e]))
            });
            var s = t("./src/programs.js");
            Object.keys(s).forEach(function (e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || (r[e] = s[e]))
            });
            var c = t("./src/typedarrays.js");
            Object.keys(c).forEach(function (e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || (r[e] = c[e]))
            });
            var m = t("./src/vertex-arrays.js");

            function y(e) {
                if (e && e.__esModule) return e;
                var r = {};
                if (null != e) for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
                    var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
                    n.get || n.set ? Object.defineProperty(r, t, n) : r[t] = e[t]
                }
                return r.default = e, r
            }

            Object.keys(m).forEach(function (e) {
                "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || (r[e] = m[e]))
            });
            var p = {addExtensionsToContext: !0};
            var b = /^(.*?)_/;

            function d(e, r) {
                u.glEnumToString(e, 0);
                var t = e.getExtension(r);
                if (t) {
                    var n = {}, o = b.exec(r)[1], a = "_" + o;
                    for (var f in t) {
                        var l = t[f], s = "function" == typeof l, c = s ? o : a, m = f;
                        f.endsWith(c) && (m = f.substring(0, f.length - c.length)), void 0 !== e[m] ? s || e[m] === l || i.warn(m, e[m], l, f) : s ? e[m] = function (e) {
                            return function () {
                                return e.apply(t, arguments)
                            }
                        }(l) : (e[m] = l, n[m] = l)
                    }
                    n.constructor = {name: t.constructor.name}, u.glEnumToString(n, 0)
                }
                return t
            }

            var E = ["ANGLE_instanced_arrays", "EXT_blend_minmax", "EXT_color_buffer_float", "EXT_color_buffer_half_float", "EXT_disjoint_timer_query", "EXT_disjoint_timer_query_webgl2", "EXT_frag_depth", "EXT_sRGB", "EXT_shader_texture_lod", "EXT_texture_filter_anisotropic", "OES_element_index_uint", "OES_standard_derivatives", "OES_texture_float", "OES_texture_float_linear", "OES_texture_half_float", "OES_texture_half_float_linear", "OES_vertex_array_object", "WEBGL_color_buffer_float", "WEBGL_compressed_texture_atc", "WEBGL_compressed_texture_etc1", "WEBGL_compressed_texture_pvrtc", "WEBGL_compressed_texture_s3tc", "WEBGL_compressed_texture_s3tc_srgb", "WEBGL_depth_texture", "WEBGL_draw_buffers"];

            function _(e) {
                for (var r = 0; r < E.length; ++r) d(e, E[r])
            }
        }, "./src/typedarrays.js": function (e, r, t) {
            "use strict";
            r.__esModule = !0, r.getGLTypeForTypedArray = function (e) {
                if (e instanceof Int8Array) return n;
                if (e instanceof Uint8Array) return o;
                if (e instanceof Uint8ClampedArray) return o;
                if (e instanceof Int16Array) return a;
                if (e instanceof Uint16Array) return i;
                if (e instanceof Int32Array) return u;
                if (e instanceof Uint32Array) return f;
                if (e instanceof Float32Array) return l;
                throw"unsupported typed array type"
            }, r.getGLTypeForTypedArrayType = function (e) {
                if (e === Int8Array) return n;
                if (e === Uint8Array) return o;
                if (e === Uint8ClampedArray) return o;
                if (e === Int16Array) return a;
                if (e === Uint16Array) return i;
                if (e === Int32Array) return u;
                if (e === Uint32Array) return f;
                if (e === Float32Array) return l;
                throw"unsupported typed array type"
            }, r.getTypedArrayTypeForGLType = function (e) {
                var r = s[e];
                if (!r) throw"unknown gl type";
                return r
            }, r.isArrayBuffer = void 0;
            var n = 5120, o = 5121, a = 5122, i = 5123, u = 5124, f = 5125, l = 5126, s = {}, c = s;
            c[n] = Int8Array, c[o] = Uint8Array, c[a] = Int16Array, c[i] = Uint16Array, c[u] = Int32Array, c[f] = Uint32Array, c[l] = Float32Array, c[32819] = Uint16Array, c[32820] = Uint16Array, c[33635] = Uint16Array, c[5131] = Uint16Array, c[33640] = Uint32Array, c[35899] = Uint32Array, c[35902] = Uint32Array, c[36269] = Uint32Array, c[34042] = Uint32Array;
            var m = "undefined" != typeof SharedArrayBuffer ? function (e) {
                return e && e.buffer && (e.buffer instanceof ArrayBuffer || e.buffer instanceof SharedArrayBuffer)
            } : function (e) {
                return e && e.buffer && e.buffer instanceof ArrayBuffer
            };
            r.isArrayBuffer = m
        }, "./src/utils.js": function (e, r, t) {
            "use strict";
            r.__esModule = !0, r.isWebGL1 = function (e) {
                return !e.texStorage2D
            }, r.isWebGL2 = function (e) {
                return !!e.texStorage2D
            }, r.glEnumToString = void 0;
            var n = function () {
                var e = {}, r = {};
                return function (t, n) {
                    return function (t) {
                        var n = t.constructor.name;
                        if (!e[n]) {
                            for (var o in t) if ("number" == typeof t[o]) {
                                var a = r[t[o]];
                                r[t[o]] = a ? "".concat(a, " | ").concat(o) : o
                            }
                            e[n] = !0
                        }
                    }(t), r[n] || "0x" + n.toString(16)
                }
            }();
            r.glEnumToString = n
        }, "./src/vertex-arrays.js": function (e, r, t) {
            "use strict";
            r.__esModule = !0, r.createVertexArrayInfo = function (e, r, t) {
                var o = e.createVertexArray();
                e.bindVertexArray(o), r.length || (r = [r]);
                return r.forEach(function (r) {
                    n.setBuffersAndAttributes(e, r, t)
                }), e.bindVertexArray(null), {
                    numElements: t.numElements,
                    elementType: t.elementType,
                    vertexArrayObject: o
                }
            }, r.createVAOAndSetAttributes = o, r.createVAOFromBufferInfo = function (e, r, t) {
                return o(e, r.attribSetters || r, t.attribs, t.indices)
            };
            var n = function (e) {
                if (e && e.__esModule) return e;
                var r = {};
                if (null != e) for (var t in e) if (Object.prototype.hasOwnProperty.call(e, t)) {
                    var n = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(e, t) : {};
                    n.get || n.set ? Object.defineProperty(r, t, n) : r[t] = e[t]
                }
                return r.default = e, r
            }(t("./src/programs.js"));

            function o(e, r, t, o) {
                var a = e.createVertexArray();
                return e.bindVertexArray(a), n.setAttributes(r, t), o && e.bindBuffer(e.ELEMENT_ARRAY_BUFFER, o), e.bindVertexArray(null), a
            }
        }
    })
});
//# sourceMappingURL=/sm/4dec6d4cda03a2adeb107f90f260ce8b8e058a9a5d5817009709a7e0a690bba7.map