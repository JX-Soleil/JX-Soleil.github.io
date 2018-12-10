! function(t) {
    function i(r) { if (e[r]) return e[r].exports; var o = e[r] = { i: r, l: !1, exports: {} }; return t[r].call(o.exports, o, o.exports, i), o.l = !0, o.exports } var e = {};
    i.m = t, i.c = e, i.d = function(t, e, r) { i.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: r }) }, i.n = function(t) { var e = t && t.__esModule ? function() { return t.default } : function() { return t }; return i.d(e, "a", e), e }, i.o = function(t, i) { return Object.prototype.hasOwnProperty.call(t, i) }, i.p = "", i(i.s = 4) }([function(t, i, e) { "use strict";

    function r() { this.live2DModel = null, this.modelMatrix = null, this.eyeBlink = null, this.physics = null, this.pose = null, this.debugMode = !1, this.initialized = !1, this.updating = !1, this.alpha = 1, this.accAlpha = 0, this.lipSync = !1, this.lipSyncValue = 0, this.accelX = 0, this.accelY = 0, this.accelZ = 0, this.dragX = 0, this.dragY = 0, this.startTimeMSec = null, this.mainMotionManager = new h, this.expressionManager = new h, this.motions = {}, this.expressions = {}, this.isTexLoaded = !1 }

    function o() { AMotion.prototype.constructor.call(this), this.paramList = new Array }

    function n() { this.id = "", this.type = -1, this.value = null }

    function s() { this.nextBlinkTime = null, this.stateStartTime = null, this.blinkIntervalMsec = null, this.eyeState = g.STATE_FIRST, this.blinkIntervalMsec = 4e3, this.closingMotionMsec = 100, this.closedMotionMsec = 50, this.openingMotionMsec = 150, this.closeIfZero = !0, this.eyeID_L = "PARAM_EYE_L_OPEN", this.eyeID_R = "PARAM_EYE_R_OPEN" }

    function _() { this.tr = new Float32Array(16), this.identity() }

    function a(t, i) { _.prototype.constructor.call(this), this.width = t, this.height = i }

    function h() { MotionQueueManager.prototype.constructor.call(this), this.currentPriority = null, this.reservePriority = null, this.super = MotionQueueManager.prototype }

    function l() { this.physicsList = new Array, this.startTimeMSec = UtSystem.getUserTimeMSec() }

    function jQuery() { this.lastTime = 0, this.lastModel = null, this.partsGroups = new Array }

    function u(t) { this.paramIndex = -1, this.partsIndex = -1, this.link = null, this.id = t }

    function p() { this.EPSILON = .01, this.faceTargetX = 0, this.faceTargetY = 0, this.faceX = 0, this.faceY = 0, this.faceVX = 0, this.faceVY = 0, this.lastTimeSec = 0 }

    function f() { _.prototype.constructor.call(this), this.screenLeft = null, this.screenRight = null, this.screenTop = null, this.screenBottom = null, this.maxLeft = null, this.maxRight = null, this.maxTop = null, this.maxBottom = null, this.max = Number.MAX_VALUE, this.min = 0 }

    function c() {} var d = 0;
    r.prototype.getModelMatrix = function() { return this.modelMatrix }, r.prototype.setAlpha = function(t) { t > .999 && (t = 1), t < .001 && (t = 0), this.alpha = t }, r.prototype.getAlpha = function() { return this.alpha }, r.prototype.isInitialized = function() { return this.initialized }, r.prototype.setInitialized = function(t) { this.initialized = t }, r.prototype.isUpdating = function() { return this.updating }, r.prototype.setUpdating = function(t) { this.updating = t }, r.prototype.getLive2DModel = function() { return this.live2DModel }, r.prototype.setLipSync = function(t) { this.lipSync = t }, r.prototype.setLipSyncValue = function(t) { this.lipSyncValue = t }, r.prototype.setAccel = function(t, i, e) { this.accelX = t, this.accelY = i, this.accelZ = e }, r.prototype.setDrag = function(t, i) { this.dragX = t, this.dragY = i }, r.prototype.getMainMotionManager = function() { return this.mainMotionManager }, r.prototype.getExpressionManager = function() { return this.expressionManager }, r.prototype.loadModelData = function(t, i) { var e = c.getPlatformManager();
        this.debugMode && e.log("Load model : " + t); var r = this;
        e.loadLive2DModel(t, function(t) { if (r.live2DModel = t, r.live2DModel.saveParam(), 0 != Live2D.getError()) return void console.error("Error : Failed to loadModelData().");
            r.modelMatrix = new a(r.live2DModel.getCanvasWidth(), r.live2DModel.getCanvasHeight()), r.modelMatrix.setWidth(2), r.modelMatrix.setCenterPosition(0, 0), i(r.live2DModel) }) }, r.prototype.loadTexture = function(t, i, e) { d++; var r = c.getPlatformManager();
        this.debugMode && r.log("Load Texture : " + i); var o = this;
        r.loadTexture(this.live2DModel, t, i, function() { d--, 0 == d && (o.isTexLoaded = !0), "function" == typeof e && e() }) }, r.prototype.loadMotion = function(t, i, e) { var r = c.getPlatformManager();
        this.debugMode && r.log("Load Motion : " + i); var o = null,
            n = this;
        r.loadBytes(i, function(i) { o = Live2DMotion.loadMotion(i), null != t && (n.motions[t] = o), e(o) }) }, r.prototype.loadExpression = function(t, i, e) { var r = c.getPlatformManager();
        this.debugMode && r.log("Load Expression : " + i); var n = this;
        r.loadBytes(i, function(i) { null != t && (n.expressions[t] = o.loadJson(i)), "function" == typeof e && e() }) }, r.prototype.loadPose = function(t, i) { var e = c.getPlatformManager();
        this.debugMode && e.log("Load Pose : " + t); var r = this; try { e.loadBytes(t, function(t) { r.pose = jQuery.load(t), "function" == typeof i && i() }) } catch (t) { console.warn(t) } }, r.prototype.loadPhysics = function(t) { var i = c.getPlatformManager();
        this.debugMode && i.log("Load Physics : " + t); var e = this; try { i.loadBytes(t, function(t) { e.physics = l.load(t) }) } catch (t) { console.warn(t) } }, r.prototype.hitTestSimple = function(t, i, e) { if (null === this.live2DModel) return !1; var r = this.live2DModel.getDrawDataIndex(t); if (r < 0) return !1; for (var o = this.live2DModel.getTransformedPoints(r), n = this.live2DModel.getCanvasWidth(), s = 0, _ = this.live2DModel.getCanvasHeight(), a = 0, h = 0; h < o.length; h += 2) { var l = o[h],
                jQuery = o[h + 1];
            l < n && (n = l), l > s && (s = l), jQuery < _ && (_ = jQuery), jQuery > a && (a = jQuery) } var u = this.modelMatrix.invertTransformX(i),
            p = this.modelMatrix.invertTransformY(e); return n <= u && u <= s && _ <= p && p <= a }, r.prototype.hitTestSimpleCustom = function(t, i, e, r) { return null !== this.live2DModel && (e >= t[0] && e <= i[0] && r <= t[1] && r >= i[1]) }, o.prototype = new AMotion, o.EXPRESSION_DEFAULT = "DEFAULT", o.TYPE_SET = 0, o.TYPE_ADD = 1, o.TYPE_MULT = 2, o.loadJson = function(t) { var i = new o,
            e = c.getPlatformManager(),
            r = e.jsonParseFromBytes(t); if (i.setFadeIn(parseInt(r.fade_in) > 0 ? parseInt(r.fade_in) : 1e3), i.setFadeOut(parseInt(r.fade_out) > 0 ? parseInt(r.fade_out) : 1e3), null == r.params) return i; var s = r.params,
            _ = s.length;
        i.paramList = []; for (var a = 0; a < _; a++) { var h = s[a],
                l = h.id.toString(),
                jQuery = parseFloat(h.val),
                u = o.TYPE_ADD,
                p = null != h.calc ? h.calc.toString() : "add"; if ((u = "add" === p ? o.TYPE_ADD : "mult" === p ? o.TYPE_MULT : "set" === p ? o.TYPE_SET : o.TYPE_ADD) == o.TYPE_ADD) { var f = null == h.def ? 0 : parseFloat(h.def);
                jQuery -= f } else if (u == o.TYPE_MULT) { var f = null == h.def ? 1 : parseFloat(h.def);
                0 == f && (f = 1), jQuery /= f } var d = new n;
            d.id = l, d.type = u, d.value = jQuery, i.paramList.push(d) } return i }, o.prototype.updateParamExe = function(t, i, e, r) { for (var n = this.paramList.length - 1; n >= 0; --n) { var s = this.paramList[n];
            s.type == o.TYPE_ADD ? t.addToParamFloat(s.id, s.value, e) : s.type == o.TYPE_MULT ? t.multParamFloat(s.id, s.value, e) : s.type == o.TYPE_SET && t.setParamFloat(s.id, s.value, e) } }, s.prototype.calcNextBlink = function() { return UtSystem.getUserTimeMSec() + Math.random() * (2 * this.blinkIntervalMsec - 1) }, s.prototype.setInterval = function(t) { this.blinkIntervalMsec = t }, s.prototype.setEyeMotion = function(t, i, e) { this.closingMotionMsec = t, this.closedMotionMsec = i, this.openingMotionMsec = e }, s.prototype.updateParam = function(t) { var i, e = UtSystem.getUserTimeMSec(),
            r = 0; switch (this.eyeState) {
            case g.STATE_CLOSING:
                r = (e - this.stateStartTime) / this.closingMotionMsec, r >= 1 && (r = 1, this.eyeState = g.STATE_CLOSED, this.stateStartTime = e), i = 1 - r; break;
            case g.STATE_CLOSED:
                r = (e - this.stateStartTime) / this.closedMotionMsec, r >= 1 && (this.eyeState = g.STATE_OPENING, this.stateStartTime = e), i = 0; break;
            case g.STATE_OPENING:
                r = (e - this.stateStartTime) / this.openingMotionMsec, r >= 1 && (r = 1, this.eyeState = g.STATE_INTERVAL, this.nextBlinkTime = this.calcNextBlink()), i = r; break;
            case g.STATE_INTERVAL:
                this.nextBlinkTime < e && (this.eyeState = g.STATE_CLOSING, this.stateStartTime = e), i = 1; break;
            case g.STATE_FIRST:
            default:
                this.eyeState = g.STATE_INTERVAL, this.nextBlinkTime = this.calcNextBlink(), i = 1 } this.closeIfZero || (i = -i), t.setParamFloat(this.eyeID_L, i), t.setParamFloat(this.eyeID_R, i) }; var g = function() {};
    g.STATE_FIRST = "STATE_FIRST", g.STATE_INTERVAL = "STATE_INTERVAL", g.STATE_CLOSING = "STATE_CLOSING", g.STATE_CLOSED = "STATE_CLOSED", g.STATE_OPENING = "STATE_OPENING", _.mul = function(t, i, e) { var r, o, n, s = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; for (r = 0; r < 4; r++)
            for (o = 0; o < 4; o++)
                for (n = 0; n < 4; n++) s[r + 4 * o] += t[r + 4 * n] * i[n + 4 * o]; for (r = 0; r < 16; r++) e[r] = s[r] }, _.prototype.identity = function() { for (var t = 0; t < 16; t++) this.tr[t] = t % 5 == 0 ? 1 : 0 }, _.prototype.getArray = function() { return this.tr }, _.prototype.getCopyMatrix = function() { return new Float32Array(this.tr) }, _.prototype.setMatrix = function(t) { if (null != this.tr && this.tr.length == this.tr.length)
            for (var i = 0; i < 16; i++) this.tr[i] = t[i] }, _.prototype.getScaleX = function() { return this.tr[0] }, _.prototype.getScaleY = function() { return this.tr[5] }, _.prototype.transformX = function(t) { return this.tr[0] * t + this.tr[12] }, _.prototype.transformY = function(t) { return this.tr[5] * t + this.tr[13] }, _.prototype.invertTransformX = function(t) { return (t - this.tr[12]) / this.tr[0] }, _.prototype.invertTransformY = function(t) { return (t - this.tr[13]) / this.tr[5] }, _.prototype.multTranslate = function(t, i) { var e = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, i, 0, 1];
        _.mul(e, this.tr, this.tr) }, _.prototype.translate = function(t, i) { this.tr[12] = t, this.tr[13] = i }, _.prototype.translateX = function(t) { this.tr[12] = t }, _.prototype.translateY = function(t) { this.tr[13] = t }, _.prototype.multScale = function(t, i) { var e = [t, 0, 0, 0, 0, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
        _.mul(e, this.tr, this.tr) }, _.prototype.scale = function(t, i) { this.tr[0] = t, this.tr[5] = i }, a.prototype = new _, a.prototype.setPosition = function(t, i) { this.translate(t, i) }, a.prototype.setCenterPosition = function(t, i) { var e = this.width * this.getScaleX(),
            r = this.height * this.getScaleY();
        this.translate(t - e / 2, i - r / 2) }, a.prototype.top = function(t) { this.setY(t) }, a.prototype.bottom = function(t) { var i = this.height * this.getScaleY();
        this.translateY(t - i) }, a.prototype.left = function(t) { this.setX(t) }, a.prototype.right = function(t) { var i = this.width * this.getScaleX();
        this.translateX(t - i) }, a.prototype.centerX = function(t) { var i = this.width * this.getScaleX();
        this.translateX(t - i / 2) }, a.prototype.centerY = function(t) { var i = this.height * this.getScaleY();
        this.translateY(t - i / 2) }, a.prototype.setX = function(t) { this.translateX(t) }, a.prototype.setY = function(t) { this.translateY(t) }, a.prototype.setHeight = function(t) { var i = t / this.height,
            e = -i;
        this.scale(i, e) }, a.prototype.setWidth = function(t) { var i = t / this.width,
            e = -i;
        this.scale(i, e) }, h.prototype = new MotionQueueManager, h.prototype.getCurrentPriority = function() { return this.currentPriority }, h.prototype.getReservePriority = function() { return this.reservePriority }, h.prototype.reserveMotion = function(t) { return !(this.reservePriority >= t) && (!(this.currentPriority >= t) && (this.reservePriority = t, !0)) }, h.prototype.setReservePriority = function(t) { this.reservePriority = t }, h.prototype.updateParam = function(t) { var i = MotionQueueManager.prototype.updateParam.call(this, t); return this.isFinished() && (this.currentPriority = 0), i }, h.prototype.startMotionPrio = function(t, i) { return i == this.reservePriority && (this.reservePriority = 0), this.currentPriority = i, this.startMotion(t, !1) }, l.load = function(t) { for (var i = new l, e = c.getPlatformManager(), r = e.jsonParseFromBytes(t), o = r.physics_hair, n = o.length, s = 0; s < n; s++) { var _ = o[s],
                a = new PhysicsHair,
                h = _.setup,
                jQuery = parseFloat(h.length),
                u = parseFloat(h.regist),
                p = parseFloat(h.mass);
            a.setup(jQuery, u, p); for (var f = _.src, d = f.length, g = 0; g < d; g++) { var y = f[g],
                    m = y.id,
                    T = PhysicsHair.Src.SRC_TO_X,
                    P = y.ptype; "x" === P ? T = PhysicsHair.Src.SRC_TO_X : "y" === P ? T = PhysicsHair.Src.SRC_TO_Y : "angle" === P ? T = PhysicsHair.Src.SRC_TO_G_ANGLE : UtDebug.error("live2d", "Invalid parameter:PhysicsHair.Src"); var S = parseFloat(y.scale),
                    v = parseFloat(y.weight);
                a.addSrcParam(T, m, S, v) } for (var L = _.targets, M = L.length, g = 0; g < M; g++) { var E = L[g],
                    m = E.id,
                    T = PhysicsHair.Target.TARGET_FROM_ANGLE,
                    P = E.ptype; "angle" === P ? T = PhysicsHair.Target.TARGET_FROM_ANGLE : "angle_v" === P ? T = PhysicsHair.Target.TARGET_FROM_ANGLE_V : UtDebug.error("live2d", "Invalid parameter:PhysicsHair.Target"); var S = parseFloat(E.scale),
                    v = parseFloat(E.weight);
                a.addTargetParam(T, m, S, v) } i.physicsList.push(a) } return i }, l.prototype.updateParam = function(t) { for (var i = UtSystem.getUserTimeMSec() - this.startTimeMSec, e = 0; e < this.physicsList.length; e++) this.physicsList[e].update(t, i) }, jQuery.load = function(t) { for (var i = new jQuery, e = c.getPlatformManager(), r = e.jsonParseFromBytes(t), o = r.parts_visible, n = o.length, s = 0; s < n; s++) { for (var _ = o[s], a = _.group, h = a.length, l = new Array, p = 0; p < h; p++) { var f = a[p],
                    d = new u(f.id); if (l[p] = d, null != f.link) { var g = f.link,
                        y = g.length;
                    d.link = new Array; for (var m = 0; m < y; m++) { var T = new u(g[m]);
                        d.link.push(T) } } } i.partsGroups.push(l) } return i }, jQuery.prototype.updateParam = function(t) { if (null != t) { t != this.lastModel && this.initParam(t), this.lastModel = t; var i = UtSystem.getUserTimeMSec(),
                e = 0 == this.lastTime ? 0 : (i - this.lastTime) / 1e3;
            this.lastTime = i, e < 0 && (e = 0); for (var r = 0; r < this.partsGroups.length; r++) this.normalizePartsOpacityGroup(t, this.partsGroups[r], e), this.copyOpacityOtherParts(t, this.partsGroups[r]) } }, jQuery.prototype.initParam = function(t) { if (null != t)
            for (var i = 0; i < this.partsGroups.length; i++)
                for (var e = this.partsGroups[i], r = 0; r < e.length; r++) { e[r].initIndex(t); var o = e[r].partsIndex,
                        n = e[r].paramIndex; if (!(o < 0)) { var s = 0 != t.getParamFloat(n); if (t.setPartsOpacity(o, s ? 1 : 0), t.setParamFloat(n, s ? 1 : 0), null != e[r].link)
                            for (var _ = 0; _ < e[r].link.length; _++) e[r].link[_].initIndex(t) } } }, jQuery.prototype.normalizePartsOpacityGroup = function(t, i, e) { for (var r = -1, o = 1, n = 0; n < i.length; n++) { var s = i[n].partsIndex,
                _ = i[n].paramIndex; if (!(s < 0) && 0 != t.getParamFloat(_)) { if (r >= 0) break;
                r = n, o = t.getPartsOpacity(s), o += e / .5, o > 1 && (o = 1) } } r < 0 && (r = 0, o = 1); for (var n = 0; n < i.length; n++) { var s = i[n].partsIndex; if (!(s < 0))
                if (r == n) t.setPartsOpacity(s, o);
                else { var a, h = t.getPartsOpacity(s);
                    a = o < .5 ? -.5 * o / .5 + 1 : .5 * (1 - o) / .5; var l = (1 - a) * (1 - o);
                    l > .15 && (a = 1 - .15 / (1 - o)), h > a && (h = a), t.setPartsOpacity(s, h) } } }, jQuery.prototype.copyOpacityOtherParts = function(t, i) { for (var e = 0; e < i.length; e++) { var r = i[e]; if (null != r.link && !(r.partsIndex < 0))
                for (var o = t.getPartsOpacity(r.partsIndex), n = 0; n < r.link.length; n++) { var s = r.link[n];
                    s.partsIndex < 0 || t.setPartsOpacity(s.partsIndex, o) } } }, u.prototype.initIndex = function(t) { this.paramIndex = t.getParamIndex("VISIBLE:" + this.id), this.partsIndex = t.getPartsDataIndex(PartsDataID.getID(this.id)), t.setParamFloat(this.paramIndex, 1) }, p.FRAME_RATE = 30, p.prototype.setPoint = function(t, i) { this.faceTargetX = t, this.faceTargetY = i }, p.prototype.getX = function() { return this.faceX }, p.prototype.getY = function() { return this.faceY }, p.prototype.update = function() { var t = 40 / 7.5 / p.FRAME_RATE; if (0 == this.lastTimeSec) return void(this.lastTimeSec = UtSystem.getUserTimeMSec()); var i = UtSystem.getUserTimeMSec(),
            e = (i - this.lastTimeSec) * p.FRAME_RATE / 1e3;
        this.lastTimeSec = i; var r = .15 * p.FRAME_RATE,
            o = e * t / r,
            n = this.faceTargetX - this.faceX,
            s = this.faceTargetY - this.faceY; if (!(Math.abs(n) <= this.EPSILON && Math.abs(s) <= this.EPSILON)) { var _ = Math.sqrt(n * n + s * s),
                a = t * n / _,
                h = t * s / _,
                l = a - this.faceVX,
                jQuery = h - this.faceVY,
                u = Math.sqrt(l * l + jQuery * jQuery);
            (u < -o || u > o) && (l *= o / u, jQuery *= o / u, u = o), this.faceVX += l, this.faceVY += jQuery; var f = .5 * (Math.sqrt(o * o + 16 * o * _ - 8 * o * _) - o),
                c = Math.sqrt(this.faceVX * this.faceVX + this.faceVY * this.faceVY);
            c > f && (this.faceVX *= f / c, this.faceVY *= f / c), this.faceX += this.faceVX, this.faceY += this.faceVY } }, f.prototype = new _, f.prototype.getMaxScale = function() { return this.max }, f.prototype.getMinScale = function() { return this.min }, f.prototype.setMaxScale = function(t) { this.max = t }, f.prototype.setMinScale = function(t) { this.min = t }, f.prototype.isMaxScale = function() { return this.getScaleX() == this.max }, f.prototype.isMinScale = function() { return this.getScaleX() == this.min }, f.prototype.adjustTranslate = function(t, i) { this.tr[0] * this.maxLeft + (this.tr[12] + t) > this.screenLeft && (t = this.screenLeft - this.tr[0] * this.maxLeft - this.tr[12]), this.tr[0] * this.maxRight + (this.tr[12] + t) < this.screenRight && (t = this.screenRight - this.tr[0] * this.maxRight - this.tr[12]), this.tr[5] * this.maxTop + (this.tr[13] + i) < this.screenTop && (i = this.screenTop - this.tr[5] * this.maxTop - this.tr[13]), this.tr[5] * this.maxBottom + (this.tr[13] + i) > this.screenBottom && (i = this.screenBottom - this.tr[5] * this.maxBottom - this.tr[13]); var e = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, i, 0, 1];
        _.mul(e, this.tr, this.tr) }, f.prototype.adjustScale = function(t, i, e) { var r = e * this.tr[0];
        r < this.min ? this.tr[0] > 0 && (e = this.min / this.tr[0]) : r > this.max && this.tr[0] > 0 && (e = this.max / this.tr[0]); var o = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, i, 0, 1],
            n = [e, 0, 0, 0, 0, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
            s = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, -t, -i, 0, 1];
        _.mul(s, this.tr, this.tr), _.mul(n, this.tr, this.tr), _.mul(o, this.tr, this.tr) }, f.prototype.setScreenRect = function(t, i, e, r) { this.screenLeft = t, this.screenRight = i, this.screenTop = r, this.screenBottom = e }, f.prototype.setMaxScreenRect = function(t, i, e, r) { this.maxLeft = t, this.maxRight = i, this.maxTop = r, this.maxBottom = e }, f.prototype.getScreenLeft = function() { return this.screenLeft }, f.prototype.getScreenRight = function() { return this.screenRight }, f.prototype.getScreenBottom = function() { return this.screenBottom }, f.prototype.getScreenTop = function() { return this.screenTop }, f.prototype.getMaxLeft = function() { return this.maxLeft }, f.prototype.getMaxRight = function() { return this.maxRight }, f.prototype.getMaxBottom = function() { return this.maxBottom }, f.prototype.getMaxTop = function() { return this.maxTop }, c.platformManager = null, c.getPlatformManager = function() { return c.platformManager }, c.setPlatformManager = function(t) { c.platformManager = t }, t.exports = { L2DTargetPoint: p, Live2DFramework: c, L2DViewMatrix: f, L2DPose: jQuery, L2DPartsParam: u, L2DPhysics: l, L2DMotionManager: h, L2DModelMatrix: a, L2DMatrix44: _, EYE_STATE: g, L2DEyeBlink: s, L2DExpressionParam: n, L2DExpressionMotion: o, L2DBaseModel: r } }, function(t, i, e) { "use strict"; var r = { DEBUG_LOG: !1, DEBUG_MOUSE_LOG: !1, DEBUG_DRAW_HIT_AREA: !1, DEBUG_DRAW_ALPHA_MODEL: !1, VIEW_MAX_SCALE: 2, VIEW_MIN_SCALE: .8, VIEW_LOGICAL_LEFT: -1, VIEW_LOGICAL_RIGHT: 1, VIEW_LOGICAL_MAX_LEFT: -2, VIEW_LOGICAL_MAX_RIGHT: 2, VIEW_LOGICAL_MAX_BOTTOM: -2, VIEW_LOGICAL_MAX_TOP: 2, PRIORITY_NONE: 0, PRIORITY_IDLE: 1, PRIORITY_SLEEPY: 2, PRIORITY_NORMAL: 3, PRIORITY_FORCE: 4, MOTION_GROUP_IDLE: "idle", MOTION_GROUP_SLEEPY: "sleepy", MOTION_GROUP_TAP_BODY: "tap_body", MOTION_GROUP_FLICK_HEAD: "flick_head", MOTION_GROUP_PINCH_IN: "pinch_in", MOTION_GROUP_PINCH_OUT: "pinch_out", MOTION_GROUP_SHAKE: "shake", HIT_AREA_HEAD: "head", HIT_AREA_BODY: "body" };
    t.exports = r }, function(t, i, e) { "use strict";

    function r(t) { n = t }

    function o() { return n } Object.defineProperty(i, "__esModule", { value: !0 }), i.setContext = r, i.getContext = o; var n = void 0 }, function(t, i, e) { "use strict";

    function r() {} r.matrixStack = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], r.depth = 0, r.currentMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1], r.tmp = new Array(16), r.reset = function() { this.depth = 0 }, r.loadIdentity = function() { for (var t = 0; t < 16; t++) this.currentMatrix[t] = t % 5 == 0 ? 1 : 0 }, r.push = function() { var t = (this.depth, 16 * (this.depth + 1));
        this.matrixStack.length < t + 16 && (this.matrixStack.length = t + 16); for (var i = 0; i < 16; i++) this.matrixStack[t + i] = this.currentMatrix[i];
        this.depth++ }, r.pop = function() {--this.depth < 0 && (myError("Invalid matrix stack."), this.depth = 0); for (var t = 16 * this.depth, i = 0; i < 16; i++) this.currentMatrix[i] = this.matrixStack[t + i] }, r.getMatrix = function() { return this.currentMatrix }, r.multMatrix = function(t) { var i, e, r; for (i = 0; i < 16; i++) this.tmp[i] = 0; for (i = 0; i < 4; i++)
            for (e = 0; e < 4; e++)
                for (r = 0; r < 4; r++) this.tmp[i + 4 * e] += this.currentMatrix[i + 4 * r] * t[r + 4 * e]; for (i = 0; i < 16; i++) this.currentMatrix[i] = this.tmp[i] }, t.exports = r }, function(t, i, e) { t.exports = e(5) }, function(t, i, e) { "use strict";

    function r(t) { return t && t.__esModule ? t : { default: t } }

    function o(t) { C = document.getElementById(t), C.addEventListener && (window.addEventListener("click", g), window.addEventListener("mousedown", g), window.addEventListener("mousemove", g), window.addEventListener("mouseup", g), document.addEventListener("mouseout", g), window.addEventListener("touchstart", y), window.addEventListener("touchend", y), window.addEventListener("touchmove", y)) }

    function n(t) { var i = C.width,
            e = C.height;
        N = new M.L2DTargetPoint; var r = e / i,
            o = x.default.VIEW_LOGICAL_LEFT,
            n = x.default.VIEW_LOGICAL_RIGHT,
            _ = -r,
            h = r; if (B = new M.L2DViewMatrix, B.setScreenRect(o, n, _, h), B.setMaxScreenRect(x.default.VIEW_LOGICAL_MAX_LEFT, x.default.VIEW_LOGICAL_MAX_RIGHT, x.default.VIEW_LOGICAL_MAX_BOTTOM, x.default.VIEW_LOGICAL_MAX_TOP), B.setMaxScale(x.default.VIEW_MAX_SCALE), B.setMinScale(x.default.VIEW_MIN_SCALE), U = new M.L2DMatrix44, U.multScale(1, i / e), G = new M.L2DMatrix44, G.multTranslate(-i / 2, -e / 2), G.multScale(2 / i, -2 / i), F = v(), (0, D.setContext)(F), !F) return console.error("Failed to create WebGL context."), void(window.WebGLRenderingContext && console.error("Your browser don't support WebGL, check https://get.webgl.org/ for futher information."));
        window.Live2D.setGL(F), F.clearColor(0, 0, 0, 0), a(t), s() }

    function s() { b || (b = !0, function t() { _(), (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame)(t, C) }()) }

    function _() { O.default.reset(), O.default.loadIdentity(), N.update(), R.setDrag(N.getX(), N.getY()), F.clear(F.COLOR_BUFFER_BIT), O.default.multMatrix(U.getArray()), O.default.multMatrix(B.getArray()), O.default.push(); for (var t = 0; t < R.numModels(); t++) { var i = R.getModel(t); if (null == i) return;
            i.initialized && !i.updating && (i.update(), i.draw(F)) } O.default.pop() }

    function a(t) { R.reloadFlg = !0, R.count++, R.changeModel(F, t) }

    function h(t, i) { return t.x * i.x + t.y * i.y }

    function l(t, i) { var e = Math.sqrt(t * t + i * i); return { x: t / e, y: i / e } }

    function jQuery(t, i, e) {
        function r(t, i) { return 180 * Math.acos(h({ x: 0, y: 1 }, l(t, i))) / Math.PI } if (i.x < e.left + e.width && i.y < e.top + e.height && i.x > e.left && i.y > e.top) return i; var o = t.x - i.x,
            n = t.y - i.y,
            s = r(o, n);
        i.x < t.x && (s = 360 - s); var _ = 360 - r(e.left - t.x, -1 * (e.top - t.y)),
            a = 360 - r(e.left - t.x, -1 * (e.top + e.height - t.y)),
            jQuery = r(e.left + e.width - t.x, -1 * (e.top - t.y)),
            u = r(e.left + e.width - t.x, -1 * (e.top + e.height - t.y)),
            p = n / o,
            f = {}; if (s < jQuery) { var c = e.top - t.y,
                d = c / p;
            f = { y: t.y + c, x: t.x + d } } else if (s < u) { var g = e.left + e.width - t.x,
                y = g * p;
            f = { y: t.y + y, x: t.x + g } } else if (s < a) { var m = e.top + e.height - t.y,
                T = m / p;
            f = { y: t.y + m, x: t.x + T } } else if (s < _) { var P = t.x - e.left,
                S = P * p;
            f = { y: t.y - S, x: t.x - P } } else { var v = e.top - t.y,
                L = v / p;
            f = { y: t.y + v, x: t.x + L } } return f }

    function u(t) { Y = !0; var i = C.getBoundingClientRect(),
            e = P(t.clientX - i.left),
            r = S(t.clientY - i.top),
            o = jQuery({ x: i.left + i.width / 2, y: i.top + i.height * X }, { x: t.clientX, y: t.clientY }, i),
            n = m(o.x - i.left),
            s = T(o.y - i.top);
        x.default.DEBUG_MOUSE_LOG && console.log("onMouseMove device( x:" + t.clientX + " y:" + t.clientY + " ) view( x:" + n + " y:" + s + ")"), k = e, V = r, N.setPoint(n, s) }

    function p(t) { Y = !0; var i = C.getBoundingClientRect(),
            e = P(t.clientX - i.left),
            r = S(t.clientY - i.top),
            o = jQuery({ x: i.left + i.width / 2, y: i.top + i.height * X }, { x: t.clientX, y: t.clientY }, i),
            n = m(o.x - i.left),
            s = T(o.y - i.top);
        x.default.DEBUG_MOUSE_LOG && console.log("onMouseDown device( x:" + t.clientX + " y:" + t.clientY + " ) view( x:" + n + " y:" + s + ")"), k = e, V = r, R.tapEvent(n, s) }

    function f(t) { var i = C.getBoundingClientRect(),
            e = P(t.clientX - i.left),
            r = S(t.clientY - i.top),
            o = jQuery({ x: i.left + i.width / 2, y: i.top + i.height * X }, { x: t.clientX, y: t.clientY }, i),
            n = m(o.x - i.left),
            s = T(o.y - i.top);
        x.default.DEBUG_MOUSE_LOG && console.log("onMouseMove device( x:" + t.clientX + " y:" + t.clientY + " ) view( x:" + n + " y:" + s + ")"), Y && (k = e, V = r, N.setPoint(n, s)) }

    function c() { Y && (Y = !1), N.setPoint(0, 0) }

    function d() { x.default.DEBUG_LOG && console.log("Set Session Storage."), sessionStorage.setItem("Sleepy", "1") }

    function g(t) { if ("mousewheel" == t.type);
        else if ("mousedown" == t.type) p(t);
        else if ("mousemove" == t.type) { var i = sessionStorage.getItem("Sleepy"); "1" === i && sessionStorage.setItem("Sleepy", "0"), u(t) } else if ("mouseup" == t.type) { if ("button" in t && 0 != t.button) return } else if ("mouseout" == t.type) { x.default.DEBUG_LOG && console.log("Mouse out Window."), c(); var e = sessionStorage.getItem("SleepyTimer");
            window.clearTimeout(e), e = window.setTimeout(d, 5e4), sessionStorage.setItem("SleepyTimer", e) } }

    function y(t) { var i = t.touches[0]; "touchstart" == t.type ? 1 == t.touches.length && u(i) : "touchmove" == t.type ? f(i) : "touchend" == t.type && c() }

    function m(t) { var i = G.transformX(t); return B.invertTransformX(i) }

    function T(t) { var i = G.transformY(t); return B.invertTransformY(i) }

    function P(t) { return G.transformX(t) }

    function S(t) { return G.transformY(t) }

    function v() { for (var t = ["webgl", "experimental-webgl", "webkit-3d", "moz-webgl"], i = 0; i < t.length; i++) try { var e = C.getContext(t[i], { premultipliedAlpha: !0 }); if (e) return e } catch (t) {}
        return null }

    function L(t, i, e) { X = void 0 === e ? .5 : e, o(t), n(i) } e(6); var M = e(0),
        E = e(8),
        A = r(E),
        I = e(1),
        x = r(I),
        w = e(3),
        O = r(w),
        D = e(2),
        R = (window.navigator.platform.toLowerCase(), new A.default),
        b = !1,
        F = null,
        C = null,
        N = null,
        B = null,
        U = null,
        G = null,
        Y = !1,
        k = 0,
        V = 0,
        X = .5;
    window.loadlive2d = L }, function(t, i, e) { "use strict";
    (function(t) {! function() {
            function i() { At || (this._jQueryMT = null, this._jQuery5S = null, this._jQueryNP = 0, i._jQuery42++, this._jQuery5S = new Y(this)) }

            function e(t) { if (!At) { this.clipContextList = new Array, this.glcontext = t.gl, this.dp_webgl = t, this.curFrameNo = 0, this.firstError_clipInNotUpdate = !0, this.colorBuffer = 0, this.isInitGLFBFunc = !1, this.tmpBoundsOnModel = new S, at.glContext.length > at.frameBuffers.length && (this.curFrameNo = this.getMaskRenderTexture()), this.tmpModelToViewMatrix = new R, this.tmpMatrix2 = new R, this.tmpMatrixForMask = new R, this.tmpMatrixForDraw = new R, this.CHANNEL_COLORS = new Array; var i = new A;
                    i = new A, i.r = 0, i.g = 0, i.b = 0, i.a = 1, this.CHANNEL_COLORS.push(i), i = new A, i.r = 1, i.g = 0, i.b = 0, i.a = 0, this.CHANNEL_COLORS.push(i), i = new A, i.r = 0, i.g = 1, i.b = 0, i.a = 0, this.CHANNEL_COLORS.push(i), i = new A, i.r = 0, i.g = 0, i.b = 1, i.a = 0, this.CHANNEL_COLORS.push(i); for (var e = 0; e < this.CHANNEL_COLORS.length; e++) this.dp_webgl.setChannelFlagAsColor(e, this.CHANNEL_COLORS[e]) } }

            function r(t, i, e) { this.clipIDList = new Array, this.clipIDList = e, this.clippingMaskDrawIndexList = new Array; for (var r = 0; r < e.length; r++) this.clippingMaskDrawIndexList.push(i.getDrawDataIndex(e[r]));
                this.clippedDrawContextList = new Array, this.isUsing = !0, this.layoutChannelNo = 0, this.layoutBounds = new S, this.allClippedDrawRect = new S, this.matrixForMask = new Float32Array(16), this.matrixForDraw = new Float32Array(16), this.owner = t }

            function o(t, i) { this._jQuerygP = t, this.drawDataIndex = i }

            function n() { At || (this.color = null) }

            function s() { At || (this._jQuerydP = null, this._jQueryeo = null, this._jQueryV0 = null, this._jQuerydP = 1e3, this._jQueryeo = 1e3, this._jQueryV0 = 1, this._jQuerya0()) }

            function _() {}

            function a() { this._jQueryr = null, this._jQuery0S = null }

            function h() { At || (this.x = null, this.y = null, this.width = null, this.height = null) }

            function l(t) { At || et.prototype.constructor.call(this, t) }

            function jQuery() {}

            function u(t) { At || et.prototype.constructor.call(this, t) }

            function p() { At || (this._jQueryvo = null, this._jQueryF2 = null, this._jQueryao = 400, this._jQuery1S = 400, p._jQuery42++) }

            function f() { At || (this.p1 = new c, this.p2 = new c, this._jQueryFo = 0, this._jQueryDb = 0, this._jQueryL2 = 0, this._jQueryM2 = 0, this._jQueryks = 0, this._jQuery9b = 0, this._jQueryiP = 0, this._jQueryiT = 0, this._jQuerylL = new Array, this._jQueryqP = new Array, this.setup(.3, .5, .1)) }

            function c() { this._jQueryp = 1, this.x = 0, this.y = 0, this.vx = 0, this.vy = 0, this.ax = 0, this.ay = 0, this.fx = 0, this.fy = 0, this._jQuerys0 = 0, this._jQuery70 = 0, this._jQuery7L = 0, this._jQueryHL = 0 }

            function d(t, i, e) { this._jQuerywL = null, this.scale = null, this._jQueryV0 = null, this._jQuerywL = t, this.scale = i, this._jQueryV0 = e }

            function g(t, i, e, r) { d.prototype.constructor.call(this, i, e, r), this._jQuerytL = null, this._jQuerytL = t }

            function y(t, i, e) { this._jQuerywL = null, this.scale = null, this._jQueryV0 = null, this._jQuerywL = t, this.scale = i, this._jQueryV0 = e }

            function T(t, i, e, r) { y.prototype.constructor.call(this, i, e, r), this._jQueryYP = null, this._jQueryYP = t }

            function P() { At || (this._jQueryfL = 0, this._jQuerygL = 0, this._jQueryB0 = 1, this._jQueryz0 = 1, this._jQueryqT = 0, this.reflectX = !1, this.reflectY = !1) }

            function S() { At || (this.x = null, this.y = null, this.width = null, this.height = null) }

            function v() {}

            function L() { At || (this.x = null, this.y = null) }

            function M() { At || (this._jQuerygP = null, this._jQuerydr = null, this._jQueryGS = null, this._jQueryqb = null, this._jQueryLb = null, this._jQuerymS = null, this.clipID = null, this.clipIDList = new Array) }

            function E() { At || (this._jQueryEb = E._jQueryps, this._jQuerylT = 1, this._jQueryC0 = 1, this._jQuerytT = 1, this._jQueryWL = 1, this.culling = !1, this.matrix4x4 = new Float32Array(16), this.premultipliedAlpha = !1, this.anisotropy = 0, this.clippingProcess = E.CLIPPING_PROCESS_NONE, this.clipBufPre_clipContextMask = null, this.clipBufPre_clipContextDraw = null, this.CHANNEL_COLORS = new Array) }

            function A() { At || (this.a = 1, this.r = 1, this.g = 1, this.b = 1, this.scale = 1, this._jQueryho = 1, this.blendMode = at.L2D_COLOR_BLEND_MODE_MULT) }

            function I() { At || (this._jQuerykP = null, this._jQuerydr = null, this._jQueryAi = !0, this._jQuerymS = null) }

            function x() {}

            function w() { At || (this._jQueryVP = 0, this._jQuerywL = null, this._jQueryGP = null, this._jQuery8o = w._jQueryds, this._jQuery2r = -1, this._jQueryO2 = 0, this._jQueryri = 0) }

            function O() {}

            function D() { At || (this._jQueryOb = null) }

            function R() { this.m = new Float32Array(16), this.identity() }

            function b(t) { At || et.prototype.constructor.call(this, t) }

            function F() { At || (this._jQuery7 = 1, this._jQueryf = 0, this._jQueryH = 0, this._jQueryg = 1, this._jQueryk = 0, this._jQueryw = 0, this._jQueryhi = STATE_IDENTITY, this._jQueryZ = _jQuerypS) }

            function C() { At || (s.prototype.constructor.call(this), this.motions = new Array, this._jQuery7r = null, this._jQuery7r = C._jQueryCo++, this._jQueryD0 = 30, this._jQueryyT = 0, this._jQueryE = !0, this.loopFadeIn = !0, this._jQueryAS = -1, _jQuerya0()) }

            function N() { this._jQueryP = new Float32Array(100), this.size = 0 }

            function B() { this._jQuery4P = null, this._jQueryI0 = null, this._jQueryRP = null }

            function U() {}

            function G() {}

            function Y(t) { At || (this._jQueryQT = !0, this._jQueryco = -1, this._jQueryqo = 0, this._jQuerypb = new Array(Y._jQueryis), this._jQuery_2 = new Float32Array(Y._jQueryis), this._jQueryvr = new Float32Array(Y._jQueryis), this._jQueryRr = new Float32Array(Y._jQueryis), this._jQueryOr = new Float32Array(Y._jQueryis), this._jQueryfs = new Float32Array(Y._jQueryis), this._jQueryJs = new Array(Y._jQueryis), this._jQuery3S = new Array, this._jQueryaS = new Array, this._jQueryBo = null, this._jQueryF2 = new Array, this._jQuerydb = new Array, this._jQuery8b = new Array, this._jQueryHr = new Array, this._jQueryWs = null, this._jQueryVs = null, this._jQueryEr = null, this._jQueryEs = new Int16Array(U._jQueryQb), this._jQueryZP = new Float32Array(2 * U._jQuery1r), this._jQueryRi = t, this._jQueryb0 = Y._jQueryHP++, this.clipManager = null, this.dp_webgl = null) }

            function k() {}

            function V() { At || (this._jQuery12 = null, this._jQuerybb = null, this._jQuery_L = null, this._jQueryjo = null, this._jQueryiL = null, this._jQuery0L = null, this._jQueryBr = null, this._jQueryDr = null, this._jQueryCb = null, this._jQuerymr = null, this._jQuery_L = xt.STATE_FIRST, this._jQueryBr = 4e3, this._jQueryDr = 100, this._jQueryCb = 50, this._jQuerymr = 150, this._jQueryjo = !0, this._jQueryiL = "PARAM_EYE_L_OPEN", this._jQuery0L = "PARAM_EYE_R_OPEN") }

            function X() { At || (E.prototype.constructor.call(this), this._jQuerysb = new Int32Array(X._jQueryAs), this._jQueryU2 = new Array, this.transform = null, this.gl = null, null == X._jQueryNT && (X._jQueryNT = X._jQuery9r(256), X._jQueryvS = X._jQuery9r(256), X._jQueryno = X._jQueryvb(256))) }

            function z() { At || (I.prototype.constructor.call(this), this._jQueryGS = null, this._jQueryY0 = null) }

            function H(t) { _t.prototype.constructor.call(this, t), this._jQuery8r = I._jQueryur, this._jQueryYr = null, this._jQueryWr = null }

            function W() { At || (M.prototype.constructor.call(this), this._jQuerygP = null, this._jQuerydr = null, this._jQueryGS = null, this._jQueryqb = null, this._jQueryLb = null, this._jQuerymS = null) }

            function j() { At || (this._jQueryNL = null, this._jQuery3S = null, this._jQueryaS = null, j._jQuery42++) }

            function q() { At || (i.prototype.constructor.call(this), this._jQueryzo = new X) }

            function J() { At || (s.prototype.constructor.call(this), this.motions = new Array, this._jQueryo2 = null, this._jQuery7r = J._jQueryCo++, this._jQueryD0 = 30, this._jQueryyT = 0, this._jQueryE = !1, this.loopFadeIn = !0, this._jQueryrr = -1, this._jQueryeP = 0) }

            function Q(t, i) { return String.fromCharCode(t.getUint8(i)) }

            function N() { this._jQueryP = new Float32Array(100), this.size = 0 }

            function B() { this._jQuery4P = null, this._jQueryI0 = null, this._jQueryRP = null }

            function Z() { At || (I.prototype.constructor.call(this), this._jQueryo = 0, this._jQueryA = 0, this._jQueryGS = null, this._jQueryEo = null) }

            function K(t) { _t.prototype.constructor.call(this, t), this._jQuery8r = I._jQueryur, this._jQueryCr = null, this._jQueryhr = null }

            function tt() { At || (this.visible = !0, this._jQueryg0 = !1, this._jQueryNL = null, this._jQuery3S = null, this._jQueryaS = null, tt._jQuery42++) }

            function it(t) { this._jQueryVS = null, this._jQuerye0 = null, this._jQuerye0 = t }

            function et(t) { At || (this.id = t) }

            function rt() {}

            function ot() { At || (this._jQuery4S = null) }

            function nt(t, i) { this.canvas = t, this.context = i, this.viewport = new Array(0, 0, t.width, t.height), this._jQuery6r = 1, this._jQueryxP = 0, this._jQuery3r = 1, this._jQueryuP = 0, this._jQueryQo = -1, this.cacheImages = {} }

            function st() { At || (this._jQueryTT = null, this._jQueryLT = null, this._jQueryFS = null, this._jQuerywL = null) }

            function _t(t) { At || (this._jQuerye0 = null, this._jQueryIP = null, this._jQueryJS = !1, this._jQueryAT = !0, this._jQuerye0 = t, this.totalScale = 1, this._jQuery7s = 1, this.totalOpacity = 1) }

            function at() {}

            function ht() {}

            function lt(t) { At || (this._jQueryib = t) }

            function jQueryt() { At || (W.prototype.constructor.call(this), this._jQueryLP = -1, this._jQueryd0 = 0, this._jQueryYo = 0, this._jQueryJP = null, this._jQuery5P = null, this._jQueryBP = null, this._jQueryEo = null, this._jQueryQi = null, this._jQuery6s = jQueryt._jQueryms, this.culling = !0, this.gl_cacheImage = null, this.instanceNo = jQueryt._jQuery42++) }

            function ut(t) { Mt.prototype.constructor.call(this, t), this._jQuery8r = W._jQueryur, this._jQueryCr = null, this._jQueryhr = null }

            function pt() { At || (this.x = null, this.y = null) }

            function ft(t) { At || (i.prototype.constructor.call(this), this.drawParamWebGL = new mt(t), this.drawParamWebGL.setGL(at.getGL(t))) }

            function ct() { At || (this.motions = null, this._jQueryeb = !1, this.motions = new Array) }

            function dt() { this._jQueryw0 = null, this._jQueryAT = !0, this._jQuery9L = !1, this._jQueryz2 = -1, this._jQuerybs = -1, this._jQueryDo = -1, this._jQuerysr = null, this._jQuerysr = dt._jQueryGs++ }

            function gt() { this.m = new Array(1, 0, 0, 0, 1, 0, 0, 0, 1) }

            function yt(t) { At || et.prototype.constructor.call(this, t) }

            function mt(t) { At || (E.prototype.constructor.call(this), this.textures = new Array, this.transform = null, this.gl = null, this.glno = t, this.firstDraw = !0, this.anisotropyExt = null, this.maxAnisotropy = 0, this._jQueryAs = 32, this._jQueryGr = !1, this._jQueryNT = null, this._jQueryvS = null, this._jQueryno = null, this.vertShader = null, this.fragShader = null, this.vertShaderOff = null, this.fragShaderOff = null) }

            function Tt(t, i, e) { return null == i && (i = t.createBuffer()), t.bindBuffer(t.ARRAY_BUFFER, i), t.bufferData(t.ARRAY_BUFFER, e, t.DYNAMIC_DRAW), i }

            function Pt(t, i, e) { return null == i && (i = t.createBuffer()), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, i), t.bufferData(t.ELEMENT_ARRAY_BUFFER, e, t.DYNAMIC_DRAW), i }

            function St(t) { At || (this._jQueryP = new Int8Array(8), this._jQueryR0 = new DataView(this._jQueryP.buffer), this._jQuery3i = new Int8Array(1e3), this._jQueryhL = 0, this._jQueryv0 = 0, this._jQueryS2 = 0, this._jQueryKo = new Array, this._jQueryT = t, this._jQueryF = 0) }

            function vt() {}

            function Lt() {}

            function Mt(t) { At || (this._jQuerye0 = null, this._jQueryIP = null, this._jQueryUs = null, this._jQuery7s = null, this._jQueryIS = [!1], this._jQueryVS = null, this._jQueryAT = !0, this.baseOpacity = 1, this.clipBufPre_clipContext = null, this._jQuerye0 = t) }

            function Et() {} var At = !0;
            i._jQuery0s = 1, i._jQuery4s = 2, i._jQuery42 = 0, i._jQuery62 = function(t, e) { try { if (e instanceof ArrayBuffer && (e = new DataView(e)), !(e instanceof DataView)) throw new lt("_jQuerySS#loadModel(b) / b _jQueryx be DataView or ArrayBuffer"); var r, o = new St(e),
                        n = o._jQueryST(),
                        s = o._jQueryST(),
                        a = o._jQueryST(); if (109 != n || 111 != s || 99 != a) throw new lt("_jQuerygi _jQueryC _jQueryli , _jQueryQ0 _jQueryP0."); if (r = o._jQueryST(), o._jQuerygr(r), r > G._jQueryT7) { t._jQueryNP |= i._jQuery4s; throw new lt("_jQuerygi _jQueryC _jQueryli , _jQueryn0 _jQuery_ version _jQueryli ( SDK : " + G._jQueryT7 + " < _jQueryf0 : " + r + " )@_jQuerySS#loadModel()\n") } var h = o._jQuerynP(); if (r >= G._jQuerys7) { var l = o._jQuery9T(),
                            jQuery = o._jQuery9T(); if (-30584 != l || -30584 != jQuery) throw t._jQueryNP |= i._jQuery0s, new lt("_jQuerygi _jQueryC _jQueryli , _jQuery0 _jQuery6 _jQueryUi.") } t._jQueryKS(h); var u = t.getModelContext();
                    u.setDrawParam(t.getDrawParam()), u.init() } catch (t) { _._jQueryRb(t) } }, i.prototype._jQueryKS = function(t) { this._jQueryMT = t }, i.prototype.getModelImpl = function() { return null == this._jQueryMT && (this._jQueryMT = new p, this._jQueryMT._jQueryzP()), this._jQueryMT }, i.prototype.getCanvasWidth = function() { return null == this._jQueryMT ? 0 : this._jQueryMT.getCanvasWidth() }, i.prototype.getCanvasHeight = function() { return null == this._jQueryMT ? 0 : this._jQueryMT.getCanvasHeight() }, i.prototype.getParamFloat = function(t) { return "number" != typeof t && (t = this._jQuery5S.getParamIndex(u.getID(t))), this._jQuery5S.getParamFloat(t) }, i.prototype.setParamFloat = function(t, i, e) { "number" != typeof t && (t = this._jQuery5S.getParamIndex(u.getID(t))), arguments.length < 3 && (e = 1), this._jQuery5S.setParamFloat(t, this._jQuery5S.getParamFloat(t) * (1 - e) + i * e) }, i.prototype.addToParamFloat = function(t, i, e) { "number" != typeof t && (t = this._jQuery5S.getParamIndex(u.getID(t))), arguments.length < 3 && (e = 1), this._jQuery5S.setParamFloat(t, this._jQuery5S.getParamFloat(t) + i * e) }, i.prototype.multParamFloat = function(t, i, e) { "number" != typeof t && (t = this._jQuery5S.getParamIndex(u.getID(t))), arguments.length < 3 && (e = 1), this._jQuery5S.setParamFloat(t, this._jQuery5S.getParamFloat(t) * (1 + (i - 1) * e)) }, i.prototype.getParamIndex = function(t) { return this._jQuery5S.getParamIndex(u.getID(t)) }, i.prototype.loadParam = function() { this._jQuery5S.loadParam() }, i.prototype.saveParam = function() { this._jQuery5S.saveParam() }, i.prototype.init = function() { this._jQuery5S.init() }, i.prototype.update = function() { this._jQuery5S.update() }, i.prototype._jQueryRs = function() { return _._jQueryli("_jQuery60 _jQueryPT _jQueryRs()"), -1 }, i.prototype._jQueryDs = function(t) { _._jQueryli("_jQuery60 _jQueryPT _jQuerySS#_jQueryDs() \n") }, i.prototype._jQueryK2 = function() {}, i.prototype.draw = function() {}, i.prototype.getModelContext = function() { return this._jQuery5S }, i.prototype._jQuerys2 = function() { return this._jQueryNP }, i.prototype._jQueryP7 = function(t, i, e, r) { var o = -1,
                    n = 0,
                    s = this; if (0 != e)
                    if (1 == t.length) { var _ = t[0],
                            a = 0 != s.getParamFloat(_),
                            h = i[0],
                            l = s.getPartsOpacity(h),
                            jQuery = e / r;
                        a ? (l += jQuery) > 1 && (l = 1) : (l -= jQuery) < 0 && (l = 0), s.setPartsOpacity(h, l) } else { for (var u = 0; u < t.length; u++) { var _ = t[u],
                                p = 0 != s.getParamFloat(_); if (p) { if (o >= 0) break;
                                o = u; var h = i[u];
                                n = s.getPartsOpacity(h), n += e / r, n > 1 && (n = 1) } } o < 0 && (console.log("No _jQuerywi _jQueryq0/ _jQueryU default[%s]", t[0]), o = 0, n = 1, s.loadParam(), s.setParamFloat(t[o], n), s.saveParam()); for (var u = 0; u < t.length; u++) { var h = i[u]; if (o == u) s.setPartsOpacity(h, n);
                            else { var f, c = s.getPartsOpacity(h);
                                f = n < .5 ? -.5 * n / .5 + 1 : .5 * (1 - n) / .5; var d = (1 - f) * (1 - n);
                                d > .15 && (f = 1 - .15 / (1 - n)), c > f && (c = f), s.setPartsOpacity(h, c) } } } else
                    for (var u = 0; u < t.length; u++) { var _ = t[u],
                            h = i[u],
                            p = 0 != s.getParamFloat(_);
                        s.setPartsOpacity(h, p ? 1 : 0) } }, i.prototype.setPartsOpacity = function(t, i) { "number" != typeof t && (t = this._jQuery5S.getPartsDataIndex(l.getID(t))), this._jQuery5S.setPartsOpacity(t, i) }, i.prototype.getPartsDataIndex = function(t) { return t instanceof l || (t = l.getID(t)), this._jQuery5S.getPartsDataIndex(t) }, i.prototype.getPartsOpacity = function(t) { return "number" != typeof t && (t = this._jQuery5S.getPartsDataIndex(l.getID(t))), t < 0 ? 0 : this._jQuery5S.getPartsOpacity(t) }, i.prototype.getDrawParam = function() {}, i.prototype.getDrawDataIndex = function(t) { return this._jQuery5S.getDrawDataIndex(b.getID(t)) }, i.prototype.getDrawData = function(t) { return this._jQuery5S.getDrawData(t) }, i.prototype.getTransformedPoints = function(t) { var i = this._jQuery5S._jQueryC2(t); return i instanceof ut ? i.getTransformedPoints() : null }, i.prototype.getIndexArray = function(t) { if (t < 0 || t >= this._jQuery5S._jQueryaS.length) return null; var i = this._jQuery5S._jQueryaS[t]; return null != i && i.getType() == W._jQuerywb && i instanceof jQueryt ? i.getIndexArray() : null }, e.CHANNEL_COUNT = 4, e.RENDER_TEXTURE_USE_MIPMAP = !1, e.NOT_USED_FRAME = -100, e.prototype._jQueryL7 = function() { if (this.tmpModelToViewMatrix && (this.tmpModelToViewMatrix = null), this.tmpMatrix2 && (this.tmpMatrix2 = null), this.tmpMatrixForMask && (this.tmpMatrixForMask = null), this.tmpMatrixForDraw && (this.tmpMatrixForDraw = null), this.tmpBoundsOnModel && (this.tmpBoundsOnModel = null), this.CHANNEL_COLORS) { for (var t = this.CHANNEL_COLORS.length - 1; t >= 0; --t) this.CHANNEL_COLORS.splice(t, 1);
                    this.CHANNEL_COLORS = [] } this.releaseShader() }, e.prototype.releaseShader = function() { for (var t = at.frameBuffers.length, i = 0; i < t; i++) this.gl.deleteFramebuffer(at.frameBuffers[i].framebuffer);
                at.frameBuffers = [], at.glContext = [] }, e.prototype.init = function(t, i, e) { for (var o = 0; o < i.length; o++) { var n = i[o].getClipIDList(); if (null != n) { var s = this.findSameClip(n);
                        null == s && (s = new r(this, t, n), this.clipContextList.push(s)); var _ = i[o].getDrawDataID(),
                            a = t.getDrawDataIndex(_);
                        s.addClippedDrawData(_, a);
                        e[o].clipBufPre_clipContext = s } } }, e.prototype.getMaskRenderTexture = function() { var t = null; return t = this.dp_webgl.createFramebuffer(), at.frameBuffers[this.dp_webgl.glno] = t, this.dp_webgl.glno }, e.prototype.setupClip = function(t, i) { for (var e = 0, r = 0; r < this.clipContextList.length; r++) { var o = this.clipContextList[r];
                    this.calcClippedDrawTotalBounds(t, o), o.isUsing && e++ } if (e > 0) { var n = i.gl.getParameter(i.gl.FRAMEBUFFER_BINDING),
                        s = new Array(4);
                    s[0] = 0, s[1] = 0, s[2] = i.gl.canvas.width, s[3] = i.gl.canvas.height, i.gl.viewport(0, 0, at.clippingMaskBufferSize, at.clippingMaskBufferSize), this.setupLayoutBounds(e), i.gl.bindFramebuffer(i.gl.FRAMEBUFFER, at.frameBuffers[this.curFrameNo].framebuffer), i.gl.clearColor(0, 0, 0, 0), i.gl.clear(i.gl.COLOR_BUFFER_BIT); for (var r = 0; r < this.clipContextList.length; r++) { var o = this.clipContextList[r],
                            _ = o.allClippedDrawRect,
                            a = (o.layoutChannelNo, o.layoutBounds);
                        this.tmpBoundsOnModel._jQueryjL(_), this.tmpBoundsOnModel.expand(.05 * _.width, .05 * _.height); var h = a.width / this.tmpBoundsOnModel.width,
                            l = a.height / this.tmpBoundsOnModel.height;
                        this.tmpMatrix2.identity(), this.tmpMatrix2.translate(-1, -1, 0), this.tmpMatrix2.scale(2, 2, 1), this.tmpMatrix2.translate(a.x, a.y, 0), this.tmpMatrix2.scale(h, l, 1), this.tmpMatrix2.translate(-this.tmpBoundsOnModel.x, -this.tmpBoundsOnModel.y, 0), this.tmpMatrixForMask.setMatrix(this.tmpMatrix2.m), this.tmpMatrix2.identity(), this.tmpMatrix2.translate(a.x, a.y, 0), this.tmpMatrix2.scale(h, l, 1), this.tmpMatrix2.translate(-this.tmpBoundsOnModel.x, -this.tmpBoundsOnModel.y, 0), this.tmpMatrixForDraw.setMatrix(this.tmpMatrix2.m); for (var jQuery = this.tmpMatrixForMask.getArray(), u = 0; u < 16; u++) o.matrixForMask[u] = jQuery[u]; for (var p = this.tmpMatrixForDraw.getArray(), u = 0; u < 16; u++) o.matrixForDraw[u] = p[u]; for (var f = o.clippingMaskDrawIndexList.length, c = 0; c < f; c++) { var d = o.clippingMaskDrawIndexList[c],
                                g = t.getDrawData(d),
                                y = t._jQueryC2(d);
                            i.setClipBufPre_clipContextForMask(o), g.draw(i, t, y) } } i.gl.bindFramebuffer(i.gl.FRAMEBUFFER, n), i.setClipBufPre_clipContextForMask(null), i.gl.viewport(s[0], s[1], s[2], s[3]) } }, e.prototype.getColorBuffer = function() { return this.colorBuffer }, e.prototype.findSameClip = function(t) { for (var i = 0; i < this.clipContextList.length; i++) { var e = this.clipContextList[i],
                        r = e.clipIDList.length; if (r == t.length) { for (var o = 0, n = 0; n < r; n++)
                            for (var s = e.clipIDList[n], _ = 0; _ < r; _++)
                                if (t[_] == s) { o++; break } if (o == r) return e } } return null }, e.prototype.calcClippedDrawTotalBounds = function(t, i) { for (var e = t._jQueryRi.getModelImpl().getCanvasWidth(), r = t._jQueryRi.getModelImpl().getCanvasHeight(), o = e > r ? e : r, n = o, s = o, _ = 0, a = 0, h = i.clippedDrawContextList.length, l = 0; l < h; l++) { var jQuery = i.clippedDrawContextList[l],
                        u = jQuery.drawDataIndex,
                        p = t._jQueryC2(u); if (p._jQueryyo()) { for (var f = p.getTransformedPoints(), c = f.length, d = [], g = [], y = 0, m = U._jQueryi2; m < c; m += U._jQueryNo) d[y] = f[m], g[y] = f[m + 1], y++; var T = Math.min.apply(null, d),
                            P = Math.min.apply(null, g),
                            S = Math.max.apply(null, d),
                            v = Math.max.apply(null, g);
                        T < n && (n = T), P < s && (s = P), S > _ && (_ = S), v > a && (a = v) } } if (n == o) i.allClippedDrawRect.x = 0, i.allClippedDrawRect.y = 0, i.allClippedDrawRect.width = 0, i.allClippedDrawRect.height = 0, i.isUsing = !1;
                else { var L = _ - n,
                        M = a - s;
                    i.allClippedDrawRect.x = n, i.allClippedDrawRect.y = s, i.allClippedDrawRect.width = L, i.allClippedDrawRect.height = M, i.isUsing = !0 } }, e.prototype.setupLayoutBounds = function(t) { var i = t / e.CHANNEL_COUNT,
                    r = t % e.CHANNEL_COUNT;
                i = ~~i, r = ~~r; for (var o = 0, n = 0; n < e.CHANNEL_COUNT; n++) { var s = i + (n < r ? 1 : 0); if (0 == s);
                    else if (1 == s) { var a = this.clipContextList[o++];
                        a.layoutChannelNo = n, a.layoutBounds.x = 0, a.layoutBounds.y = 0, a.layoutBounds.width = 1, a.layoutBounds.height = 1 } else if (2 == s)
                        for (var h = 0; h < s; h++) { var l = h % 2,
                                jQuery = 0;
                            l = ~~l; var a = this.clipContextList[o++];
                            a.layoutChannelNo = n, a.layoutBounds.x = .5 * l, a.layoutBounds.y = 0, a.layoutBounds.width = .5, a.layoutBounds.height = 1 } else if (s <= 4)
                            for (var h = 0; h < s; h++) { var l = h % 2,
                                    jQuery = h / 2;
                                l = ~~l, jQuery = ~~jQuery; var a = this.clipContextList[o++];
                                a.layoutChannelNo = n, a.layoutBounds.x = .5 * l, a.layoutBounds.y = .5 * jQuery, a.layoutBounds.width = .5, a.layoutBounds.height = .5 } else if (s <= 9)
                                for (var h = 0; h < s; h++) { var l = h % 3,
                                        jQuery = h / 3;
                                    l = ~~l, jQuery = ~~jQuery; var a = this.clipContextList[o++];
                                    a.layoutChannelNo = n, a.layoutBounds.x = l / 3, a.layoutBounds.y = jQuery / 3, a.layoutBounds.width = 1 / 3, a.layoutBounds.height = 1 / 3 } else _._jQueryli("_jQuery6 _jQuery0P mask count : %d", s) } }, r.prototype.addClippedDrawData = function(t, i) { var e = new o(t, i);
                this.clippedDrawContextList.push(e) }, s._jQueryJT = function(t, i, e) { var r = t / i,
                    o = e / i,
                    n = o,
                    s = 1 - (1 - o) * (1 - o),
                    _ = 1 - (1 - n) * (1 - n),
                    a = 1 / 3 * (1 - o) * s + (n * (2 / 3) + 1 / 3 * (1 - n)) * (1 - s),
                    h = (n + 2 / 3 * (1 - n)) * _ + (o * (1 / 3) + 2 / 3 * (1 - o)) * (1 - _),
                    l = 1 - 3 * h + 3 * a - 0,
                    jQuery = 3 * h - 6 * a + 0,
                    u = 3 * a - 0; if (r <= 0) return 0; if (r >= 1) return 1; var p = r,
                    f = p * p; return l * (p * f) + jQuery * f + u * p + 0 }, s.prototype._jQuerya0 = function() {}, s.prototype.setFadeIn = function(t) { this._jQuerydP = t }, s.prototype.setFadeOut = function(t) { this._jQueryeo = t }, s.prototype._jQuerypT = function(t) { this._jQueryV0 = t }, s.prototype.getFadeOut = function() { return this._jQueryeo }, s.prototype._jQuery4T = function() { return this._jQueryeo }, s.prototype._jQuerymT = function() { return this._jQueryV0 }, s.prototype.getDurationMSec = function() { return -1 }, s.prototype.getLoopDurationMSec = function() { return -1 }, s.prototype.updateParam = function(t, i) { if (i._jQueryAT && !i._jQuery9L) { var e = x.getUserTimeMSec(); if (i._jQueryz2 < 0) { i._jQueryz2 = e, i._jQuerybs = e; var r = this.getDurationMSec();
                        i._jQueryDo < 0 && (i._jQueryDo = r <= 0 ? -1 : i._jQueryz2 + r) } var o = this._jQueryV0;
                    o = o * (0 == this._jQuerydP ? 1 : ht._jQueryr2((e - i._jQuerybs) / this._jQuerydP)) * (0 == this._jQueryeo || i._jQueryDo < 0 ? 1 : ht._jQueryr2((i._jQueryDo - e) / this._jQueryeo)), 0 <= o && o <= 1 || console.log("### assert!! ### "), this.updateParamExe(t, e, o, i), i._jQueryDo > 0 && i._jQueryDo < e && (i._jQuery9L = !0) } }, s.prototype.updateParamExe = function(t, i, e, r) {}, _._jQuery8s = 0, _._jQueryfT = new Object, _.start = function(t) { var i = _._jQueryfT[t];
                null == i && (i = new a, i._jQueryr = t, _._jQueryfT[t] = i), i._jQuery0S = x.getSystemTimeMSec() }, _.dump = function(t) { var i = _._jQueryfT[t]; if (null != i) { var e = x.getSystemTimeMSec(),
                        r = e - i._jQuery0S; return console.log(t + " : " + r + "ms"), r } return -1 }, _.end = function(t) { var i = _._jQueryfT[t]; if (null != i) { return x.getSystemTimeMSec() - i._jQuery0S } return -1 }, _._jQueryli = function(t, i) { console.log("_jQueryli : " + t + "\n", i) }, _._jQueryJi = function(t, i) { console.log(t, i) }, _._jQuerydL = function(t, i) { console.log(t, i), console.log("\n") }, _._jQueryKL = function(t, i) { for (var e = 0; e < i; e++) e % 16 == 0 && e > 0 ? console.log("\n") : e % 8 == 0 && e > 0 && console.log("  "), console.log("%02X ", 255 & t[e]);
                console.log("\n") }, _._jQuerynr = function(t, i, e) { console.log("%s\n", t); for (var r = i.length, o = 0; o < r; ++o) console.log("%5d", i[o]), console.log("%s\n", e), console.log(",");
                console.log("\n") }, _._jQueryRb = function(t) { console.log("dump exception : " + t), console.log("stack :: " + t.stack) }, h.prototype._jQuery8P = function() { return .5 * (this.x + this.x + this.width) }, h.prototype._jQuery6P = function() { return .5 * (this.y + this.y + this.height) }, h.prototype._jQueryEL = function() { return this.x + this.width }, h.prototype._jQuery5T = function() { return this.y + this.height }, h.prototype._jQueryjL = function(t, i, e, r) { this.x = t, this.y = i, this.width = e, this.height = r }, h.prototype._jQueryjL = function(t) { this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height }, l.prototype = new et, l._jQuerytP = new Object, l._jQuery27 = function() { l._jQuerytP.clear() }, l.getID = function(t) { var i = l._jQuerytP[t]; return null == i && (i = new l(t), l._jQuerytP[t] = i), i }, l.prototype._jQuery3s = function() { return new l }, u.prototype = new et, u._jQuerytP = new Object, u._jQuery27 = function() { u._jQuerytP.clear() }, u.getID = function(t) { var i = u._jQuerytP[t]; return null == i && (i = new u(t), u._jQuerytP[t] = i), i }, u.prototype._jQuery3s = function() { return new u }, p._jQuery42 = 0, p.prototype._jQueryzP = function() { null == this._jQueryvo && (this._jQueryvo = new ot), null == this._jQueryF2 && (this._jQueryF2 = new Array) }, p.prototype.getCanvasWidth = function() { return this._jQueryao }, p.prototype.getCanvasHeight = function() { return this._jQuery1S }, p.prototype._jQueryF0 = function(t) { this._jQueryvo = t._jQuerynP(), this._jQueryF2 = t._jQuerynP(), this._jQueryao = t._jQuery6L(), this._jQuery1S = t._jQuery6L() }, p.prototype._jQuery6S = function(t) { this._jQueryF2.push(t) }, p.prototype._jQueryXr = function() { return this._jQueryF2 }, p.prototype._jQueryE2 = function() { return this._jQueryvo }, f.prototype.setup = function(t, i, e) { this._jQueryks = this._jQueryYb(), this.p2._jQueryxT(), 3 == arguments.length && (this._jQueryFo = t, this._jQueryL2 = i, this.p1._jQueryp = e, this.p2._jQueryp = e, this.p2.y = t, this.setup()) }, f.prototype.getPhysicsPoint1 = function() { return this.p1 }, f.prototype.getPhysicsPoint2 = function() { return this.p2 }, f.prototype._jQueryqr = function() { return this._jQueryDb }, f.prototype._jQuerypr = function(t) { this._jQueryDb = t }, f.prototype._jQuery5r = function() { return this._jQueryM2 }, f.prototype._jQueryCs = function() { return this._jQuery9b }, f.prototype._jQueryYb = function() { return -180 * Math.atan2(this.p1.x - this.p2.x, -(this.p1.y - this.p2.y)) / Math.PI }, f.prototype.addSrcParam = function(t, i, e, r) { var o = new g(t, i, e, r);
                this._jQuerylL.push(o) }, f.prototype.addTargetParam = function(t, i, e, r) { var o = new T(t, i, e, r);
                this._jQueryqP.push(o) }, f.prototype.update = function(t, i) { if (0 == this._jQueryiP) return this._jQueryiP = this._jQueryiT = i, void(this._jQueryFo = Math.sqrt((this.p1.x - this.p2.x) * (this.p1.x - this.p2.x) + (this.p1.y - this.p2.y) * (this.p1.y - this.p2.y))); var e = (i - this._jQueryiT) / 1e3; if (0 != e) { for (var r = this._jQuerylL.length - 1; r >= 0; --r) { this._jQuerylL[r]._jQueryoP(t, this) } this._jQueryoo(t, e), this._jQueryM2 = this._jQueryYb(), this._jQuery9b = (this._jQueryM2 - this._jQueryks) / e, this._jQueryks = this._jQueryM2 } for (var r = this._jQueryqP.length - 1; r >= 0; --r) { this._jQueryqP[r]._jQueryYS(t, this) } this._jQueryiT = i }, f.prototype._jQueryoo = function(t, i) { i < .033 && (i = .033); var e = 1 / i;
                this.p1.vx = (this.p1.x - this.p1._jQuerys0) * e, this.p1.vy = (this.p1.y - this.p1._jQuery70) * e, this.p1.ax = (this.p1.vx - this.p1._jQuery7L) * e, this.p1.ay = (this.p1.vy - this.p1._jQueryHL) * e, this.p1.fx = this.p1.ax * this.p1._jQueryp, this.p1.fy = this.p1.ay * this.p1._jQueryp, this.p1._jQueryxT(); var r, o, n = -Math.atan2(this.p1.y - this.p2.y, this.p1.x - this.p2.x),
                    s = Math.cos(n),
                    _ = Math.sin(n),
                    a = 9.8 * this.p2._jQueryp,
                    h = this._jQueryDb * Lt._jQuerybS,
                    l = a * Math.cos(n - h);
                r = l * _, o = l * s; var jQuery = -this.p1.fx * _ * _,
                    u = -this.p1.fy * _ * s,
                    p = -this.p2.vx * this._jQueryL2,
                    f = -this.p2.vy * this._jQueryL2;
                this.p2.fx = r + jQuery + p, this.p2.fy = o + u + f, this.p2.ax = this.p2.fx / this.p2._jQueryp, this.p2.ay = this.p2.fy / this.p2._jQueryp, this.p2.vx += this.p2.ax * i, this.p2.vy += this.p2.ay * i, this.p2.x += this.p2.vx * i, this.p2.y += this.p2.vy * i; var c = Math.sqrt((this.p1.x - this.p2.x) * (this.p1.x - this.p2.x) + (this.p1.y - this.p2.y) * (this.p1.y - this.p2.y));
                this.p2.x = this.p1.x + this._jQueryFo * (this.p2.x - this.p1.x) / c, this.p2.y = this.p1.y + this._jQueryFo * (this.p2.y - this.p1.y) / c, this.p2.vx = (this.p2.x - this.p2._jQuerys0) * e, this.p2.vy = (this.p2.y - this.p2._jQuery70) * e, this.p2._jQueryxT() }, c.prototype._jQueryxT = function() { this._jQuerys0 = this.x, this._jQuery70 = this.y, this._jQuery7L = this.vx, this._jQueryHL = this.vy }, d.prototype._jQueryoP = function(t, i) {}, g.prototype = new d, g.prototype._jQueryoP = function(t, i) { var e = this.scale * t.getParamFloat(this._jQuerywL),
                    r = i.getPhysicsPoint1(); switch (this._jQuerytL) {
                    default:
                    case f.Src.SRC_TO_X:
                        r.x = r.x + (e - r.x) * this._jQueryV0; break;
                    case f.Src.SRC_TO_Y:
                        r.y = r.y + (e - r.y) * this._jQueryV0; break;
                    case f.Src.SRC_TO_G_ANGLE:
                        var o = i._jQueryqr();
                        o += (e - o) * this._jQueryV0, i._jQuerypr(o) } }, y.prototype._jQueryYS = function(t, i) {}, T.prototype = new y, T.prototype._jQueryYS = function(t, i) { switch (this._jQueryYP) {
                    default:
                    case f.Target.TARGET_FROM_ANGLE:
                        t.setParamFloat(this._jQuerywL, this.scale * i._jQuery5r(), this._jQueryV0); break;
                    case f.Target.TARGET_FROM_ANGLE_V:
                        t.setParamFloat(this._jQuerywL, this.scale * i._jQueryCs(), this._jQueryV0) } }, f.Src = function() {}, f.Src.SRC_TO_X = "SRC_TO_X", f.Src.SRC_TO_Y = "SRC_TO_Y", f.Src.SRC_TO_G_ANGLE = "SRC_TO_G_ANGLE", f.Target = function() {}, f.Target.TARGET_FROM_ANGLE = "TARGET_FROM_ANGLE", f.Target.TARGET_FROM_ANGLE_V = "TARGET_FROM_ANGLE_V", P.prototype.init = function(t) { this._jQueryfL = t._jQueryfL, this._jQuerygL = t._jQuerygL, this._jQueryB0 = t._jQueryB0, this._jQueryz0 = t._jQueryz0, this._jQueryqT = t._jQueryqT, this.reflectX = t.reflectX, this.reflectY = t.reflectY }, P.prototype._jQueryF0 = function(t) { this._jQueryfL = t._jQuery_T(), this._jQuerygL = t._jQuery_T(), this._jQueryB0 = t._jQuery_T(), this._jQueryz0 = t._jQuery_T(), this._jQueryqT = t._jQuery_T(), t.getFormatVersion() >= G.LIVE2D_FORMAT_VERSION_V2_10_SDK2 && (this.reflectX = t._jQuerypo(), this.reflectY = t._jQuerypo()) }, P.prototype._jQuerye = function() {}; var It = function() {};
            It._jQueryni = function(t, i, e, r, o, n, s, _, a) { var h = s * n - _ * o; if (0 == h) return null; var l, jQuery = ((t - e) * n - (i - r) * o) / h; return l = 0 != o ? (t - e - jQuery * s) / o : (i - r - jQuery * _) / n, isNaN(l) && (l = (t - e - jQuery * s) / o, isNaN(l) && (l = (i - r - jQuery * _) / n), isNaN(l) && (console.log("a is NaN @UtVector#_jQueryni() "), console.log("v1x : " + o), console.log("v1x != 0 ? " + (0 != o)))), null == a ? new Array(l, jQuery) : (a[0] = l, a[1] = jQuery, a) }, S.prototype._jQuery8P = function() { return this.x + .5 * this.width }, S.prototype._jQuery6P = function() { return this.y + .5 * this.height }, S.prototype._jQueryEL = function() { return this.x + this.width }, S.prototype._jQuery5T = function() { return this.y + this.height }, S.prototype._jQueryjL = function(t, i, e, r) { this.x = t, this.y = i, this.width = e, this.height = r }, S.prototype._jQueryjL = function(t) { this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height }, S.prototype.contains = function(t, i) { return this.x <= this.x && this.y <= this.y && this.x <= this.x + this.width && this.y <= this.y + this.height }, S.prototype.expand = function(t, i) { this.x -= t, this.y -= i, this.width += 2 * t, this.height += 2 * i }, v._jQueryZ2 = function(t, i, e, r) { var o = i._jQueryQ2(t, e),
                    n = t._jQueryvs(),
                    s = t._jQueryTr(); if (i._jQueryzr(n, s, o), o <= 0) return r[n[0]]; if (1 == o) { var _ = r[n[0]],
                        a = r[n[1]],
                        h = s[0]; return _ + (a - _) * h | 0 } if (2 == o) { var _ = r[n[0]],
                        a = r[n[1]],
                        l = r[n[2]],
                        jQuery = r[n[3]],
                        h = s[0],
                        u = s[1],
                        p = _ + (a - _) * h | 0,
                        f = l + (jQuery - l) * h | 0; return p + (f - p) * u | 0 } if (3 == o) { var c = r[n[0]],
                        d = r[n[1]],
                        g = r[n[2]],
                        y = r[n[3]],
                        m = r[n[4]],
                        T = r[n[5]],
                        P = r[n[6]],
                        S = r[n[7]],
                        h = s[0],
                        u = s[1],
                        v = s[2],
                        _ = c + (d - c) * h | 0,
                        a = g + (y - g) * h | 0,
                        l = m + (T - m) * h | 0,
                        jQuery = P + (S - P) * h | 0,
                        p = _ + (a - _) * u | 0,
                        f = l + (jQuery - l) * u | 0; return p + (f - p) * v | 0 } if (4 == o) { var L = r[n[0]],
                        M = r[n[1]],
                        E = r[n[2]],
                        A = r[n[3]],
                        I = r[n[4]],
                        x = r[n[5]],
                        w = r[n[6]],
                        O = r[n[7]],
                        D = r[n[8]],
                        R = r[n[9]],
                        b = r[n[10]],
                        F = r[n[11]],
                        C = r[n[12]],
                        N = r[n[13]],
                        B = r[n[14]],
                        U = r[n[15]],
                        h = s[0],
                        u = s[1],
                        v = s[2],
                        G = s[3],
                        c = L + (M - L) * h | 0,
                        d = E + (A - E) * h | 0,
                        g = I + (x - I) * h | 0,
                        y = w + (O - w) * h | 0,
                        m = D + (R - D) * h | 0,
                        T = b + (F - b) * h | 0,
                        P = C + (N - C) * h | 0,
                        S = B + (U - B) * h | 0,
                        _ = c + (d - c) * u | 0,
                        a = g + (y - g) * u | 0,
                        l = m + (T - m) * u | 0,
                        jQuery = P + (S - P) * u | 0,
                        p = _ + (a - _) * v | 0,
                        f = l + (jQuery - l) * v | 0; return p + (f - p) * G | 0 } for (var Y = 1 << o, k = new Float32Array(Y), V = 0; V < Y; V++) { for (var X = V, z = 1, H = 0; H < o; H++) z *= X % 2 == 0 ? 1 - s[H] : s[H], X /= 2;
                    k[V] = z } for (var W = new Float32Array(Y), j = 0; j < Y; j++) W[j] = r[n[j]]; for (var q = 0, j = 0; j < Y; j++) q += k[j] * W[j]; return q + .5 | 0 }, v._jQuerybr = function(t, i, e, r) { var o = i._jQueryQ2(t, e),
                    n = t._jQueryvs(),
                    s = t._jQueryTr(); if (i._jQueryzr(n, s, o), o <= 0) return r[n[0]]; if (1 == o) { var _ = r[n[0]],
                        a = r[n[1]],
                        h = s[0]; return _ + (a - _) * h } if (2 == o) { var _ = r[n[0]],
                        a = r[n[1]],
                        l = r[n[2]],
                        jQuery = r[n[3]],
                        h = s[0],
                        u = s[1]; return (1 - u) * (_ + (a - _) * h) + u * (l + (jQuery - l) * h) } if (3 == o) { var p = r[n[0]],
                        f = r[n[1]],
                        c = r[n[2]],
                        d = r[n[3]],
                        g = r[n[4]],
                        y = r[n[5]],
                        m = r[n[6]],
                        T = r[n[7]],
                        h = s[0],
                        u = s[1],
                        P = s[2]; return (1 - P) * ((1 - u) * (p + (f - p) * h) + u * (c + (d - c) * h)) + P * ((1 - u) * (g + (y - g) * h) + u * (m + (T - m) * h)) } if (4 == o) { var S = r[n[0]],
                        v = r[n[1]],
                        L = r[n[2]],
                        M = r[n[3]],
                        E = r[n[4]],
                        A = r[n[5]],
                        I = r[n[6]],
                        x = r[n[7]],
                        w = r[n[8]],
                        O = r[n[9]],
                        D = r[n[10]],
                        R = r[n[11]],
                        b = r[n[12]],
                        F = r[n[13]],
                        C = r[n[14]],
                        N = r[n[15]],
                        h = s[0],
                        u = s[1],
                        P = s[2],
                        B = s[3]; return (1 - B) * ((1 - P) * ((1 - u) * (S + (v - S) * h) + u * (L + (M - L) * h)) + P * ((1 - u) * (E + (A - E) * h) + u * (I + (x - I) * h))) + B * ((1 - P) * ((1 - u) * (w + (O - w) * h) + u * (D + (R - D) * h)) + P * ((1 - u) * (b + (F - b) * h) + u * (C + (N - C) * h))) } for (var U = 1 << o, G = new Float32Array(U), Y = 0; Y < U; Y++) { for (var k = Y, V = 1, X = 0; X < o; X++) V *= k % 2 == 0 ? 1 - s[X] : s[X], k /= 2;
                    G[Y] = V } for (var z = new Float32Array(U), H = 0; H < U; H++) z[H] = r[n[H]]; for (var W = 0, H = 0; H < U; H++) W += G[H] * z[H]; return W }, v._jQueryVr = function(t, i, e, r, o, n, s, _) { var a = i._jQueryQ2(t, e),
                    h = t._jQueryvs(),
                    l = t._jQueryTr();
                i._jQueryzr(h, l, a); var jQuery = 2 * r,
                    u = s; if (a <= 0) { var p = h[0],
                        f = o[p]; if (2 == _ && 0 == s) x._jQueryjT(f, 0, n, 0, jQuery);
                    else
                        for (var c = 0; c < jQuery;) n[u] = f[c++], n[u + 1] = f[c++], u += _ } else if (1 == a)
                    for (var f = o[h[0]], d = o[h[1]], g = l[0], y = 1 - g, c = 0; c < jQuery;) n[u] = f[c] * y + d[c] * g, ++c, n[u + 1] = f[c] * y + d[c] * g, ++c, u += _;
                else if (2 == a)
                    for (var f = o[h[0]], d = o[h[1]], m = o[h[2]], T = o[h[3]], g = l[0], P = l[1], y = 1 - g, S = 1 - P, v = S * y, L = S * g, M = P * y, E = P * g, c = 0; c < jQuery;) n[u] = v * f[c] + L * d[c] + M * m[c] + E * T[c], ++c, n[u + 1] = v * f[c] + L * d[c] + M * m[c] + E * T[c], ++c, u += _;
                else if (3 == a)
                    for (var A = o[h[0]], I = o[h[1]], w = o[h[2]], O = o[h[3]], D = o[h[4]], R = o[h[5]], b = o[h[6]], F = o[h[7]], g = l[0], P = l[1], C = l[2], y = 1 - g, S = 1 - P, N = 1 - C, B = N * S * y, U = N * S * g, G = N * P * y, Y = N * P * g, k = C * S * y, V = C * S * g, X = C * P * y, z = C * P * g, c = 0; c < jQuery;) n[u] = B * A[c] + U * I[c] + G * w[c] + Y * O[c] + k * D[c] + V * R[c] + X * b[c] + z * F[c], ++c, n[u + 1] = B * A[c] + U * I[c] + G * w[c] + Y * O[c] + k * D[c] + V * R[c] + X * b[c] + z * F[c], ++c, u += _;
                else if (4 == a)
                    for (var H = o[h[0]], W = o[h[1]], j = o[h[2]], q = o[h[3]], J = o[h[4]], Q = o[h[5]], Z = o[h[6]], K = o[h[7]], tt = o[h[8]], it = o[h[9]], et = o[h[10]], rt = o[h[11]], ot = o[h[12]], nt = o[h[13]], st = o[h[14]], _t = o[h[15]], g = l[0], P = l[1], C = l[2], at = l[3], y = 1 - g, S = 1 - P, N = 1 - C, ht = 1 - at, lt = ht * N * S * y, jQueryt = ht * N * S * g, ut = ht * N * P * y, pt = ht * N * P * g, ft = ht * C * S * y, ct = ht * C * S * g, dt = ht * C * P * y, gt = ht * C * P * g, yt = at * N * S * y, mt = at * N * S * g, Tt = at * N * P * y, Pt = at * N * P * g, St = at * C * S * y, vt = at * C * S * g, Lt = at * C * P * y, Mt = at * C * P * g, c = 0; c < jQuery;) n[u] = lt * H[c] + jQueryt * W[c] + ut * j[c] + pt * q[c] + ft * J[c] + ct * Q[c] + dt * Z[c] + gt * K[c] + yt * tt[c] + mt * it[c] + Tt * et[c] + Pt * rt[c] + St * ot[c] + vt * nt[c] + Lt * st[c] + Mt * _t[c], ++c, n[u + 1] = lt * H[c] + jQueryt * W[c] + ut * j[c] + pt * q[c] + ft * J[c] + ct * Q[c] + dt * Z[c] + gt * K[c] + yt * tt[c] + mt * it[c] + Tt * et[c] + Pt * rt[c] + St * ot[c] + vt * nt[c] + Lt * st[c] + Mt * _t[c], ++c, u += _;
                else { for (var Et = 1 << a, At = new Float32Array(Et), It = 0; It < Et; It++) { for (var xt = It, wt = 1, Ot = 0; Ot < a; Ot++) wt *= xt % 2 == 0 ? 1 - l[Ot] : l[Ot], xt /= 2;
                        At[It] = wt } for (var Dt = new Float32Array(Et), Rt = 0; Rt < Et; Rt++) Dt[Rt] = o[h[Rt]]; for (var c = 0; c < jQuery;) { for (var bt = 0, Ft = 0, Ct = c + 1, Rt = 0; Rt < Et; Rt++) bt += At[Rt] * Dt[Rt][c], Ft += At[Rt] * Dt[Rt][Ct];
                        c += 2, n[u] = bt, n[u + 1] = Ft, u += _ } } }, L.prototype._jQueryHT = function(t, i) { this.x = t, this.y = i }, L.prototype._jQueryHT = function(t) { this.x = t.x, this.y = t.y }, M._jQueryur = -2, M._jQueryES = 500, M._jQuerywb = 2, M._jQuery8S = 3, M._jQuery52 = M._jQueryES, M._jQueryR2 = M._jQueryES, M._jQueryor = function() { return M._jQuery52 }, M._jQueryPr = function() { return M._jQueryR2 }, M.prototype.convertClipIDForV2_11 = function(t) { var i = []; return null == t ? null : 0 == t.length ? null : /,/.test(t) ? i = t.id.split(",") : (i.push(t.id), i) }, M.prototype._jQueryF0 = function(t) { this._jQuerygP = t._jQuerynP(), this._jQuerydr = t._jQuerynP(), this._jQueryGS = t._jQuerynP(), this._jQueryqb = t._jQuery6L(), this._jQueryLb = t._jQuerycS(), this._jQuerymS = t._jQueryTb(), t.getFormatVersion() >= G._jQueryT7 ? (this.clipID = t._jQuerynP(), this.clipIDList = this.convertClipIDForV2_11(this.clipID)) : this.clipIDList = [], this._jQueryMS(this._jQueryLb) }, M.prototype.getClipIDList = function() { return this.clipIDList }, M.prototype.init = function(t) {}, M.prototype._jQueryNr = function(t, i) { if (i._jQueryIS[0] = !1, i._jQueryUs = v._jQueryZ2(t, this._jQueryGS, i._jQueryIS, this._jQueryLb), at._jQueryZs);
                else if (i._jQueryIS[0]) return;
                i._jQuery7s = v._jQuerybr(t, this._jQueryGS, i._jQueryIS, this._jQuerymS) }, M.prototype._jQuery2b = function(t, i) {}, M.prototype.getDrawDataID = function() { return this._jQuerygP }, M.prototype._jQueryj2 = function(t) { this._jQuerygP = t }, M.prototype.getOpacity = function(t, i) { return i._jQuery7s }, M.prototype._jQueryzS = function(t, i) { return i._jQueryUs }, M.prototype._jQueryMS = function(t) { for (var i = t.length - 1; i >= 0; --i) { var e = t[i];
                    e < M._jQuery52 ? M._jQuery52 = e : e > M._jQueryR2 && (M._jQueryR2 = e) } }, M.prototype.getTargetBaseDataID = function() { return this._jQuerydr }, M.prototype._jQuerygs = function(t) { this._jQuerydr = t }, M.prototype._jQuery32 = function() { return null != this._jQuerydr && this._jQuerydr != yt._jQuery2o() }, M.prototype.preDraw = function(t, i, e) {}, M.prototype.draw = function(t, i, e) {}, M.prototype.getType = function() {}, M.prototype._jQueryB2 = function(t, i, e) {}, E._jQueryps = 32, E.CLIPPING_PROCESS_NONE = 0, E.CLIPPING_PROCESS_OVERWRITE_ALPHA = 1, E.CLIPPING_PROCESS_MULTIPLY_ALPHA = 2, E.CLIPPING_PROCESS_DRAW = 3, E.CLIPPING_PROCESS_CLEAR_ALPHA = 4, E.prototype.setChannelFlagAsColor = function(t, i) { this.CHANNEL_COLORS[t] = i }, E.prototype.getChannelFlagAsColor = function(t) { return this.CHANNEL_COLORS[t] }, E.prototype._jQueryZT = function() {}, E.prototype._jQueryUo = function(t, i, e, r, o, n, s) {}, E.prototype._jQueryRs = function() { return -1 }, E.prototype._jQueryDs = function(t) {}, E.prototype.setBaseColor = function(t, i, e, r) { t < 0 ? t = 0 : t > 1 && (t = 1), i < 0 ? i = 0 : i > 1 && (i = 1), e < 0 ? e = 0 : e > 1 && (e = 1), r < 0 ? r = 0 : r > 1 && (r = 1), this._jQuerylT = t, this._jQueryC0 = i, this._jQuerytT = e, this._jQueryWL = r }, E.prototype._jQueryWP = function(t) { this.culling = t }, E.prototype.setMatrix = function(t) { for (var i = 0; i < 16; i++) this.matrix4x4[i] = t[i] }, E.prototype._jQueryIT = function() { return this.matrix4x4 }, E.prototype.setPremultipliedAlpha = function(t) { this.premultipliedAlpha = t }, E.prototype.isPremultipliedAlpha = function() { return this.premultipliedAlpha }, E.prototype.setAnisotropy = function(t) { this.anisotropy = t }, E.prototype.getAnisotropy = function() { return this.anisotropy }, E.prototype.getClippingProcess = function() { return this.clippingProcess }, E.prototype.setClippingProcess = function(t) { this.clippingProcess = t }, E.prototype.setClipBufPre_clipContextForMask = function(t) { this.clipBufPre_clipContextMask = t }, E.prototype.getClipBufPre_clipContextMask = function() { return this.clipBufPre_clipContextMask }, E.prototype.setClipBufPre_clipContextForDraw = function(t) { this.clipBufPre_clipContextDraw = t }, E.prototype.getClipBufPre_clipContextDraw = function() { return this.clipBufPre_clipContextDraw }, I._jQueryur = -2, I._jQueryc2 = 1, I._jQuery_b = 2, I.prototype._jQueryF0 = function(t) { this._jQuerykP = t._jQuerynP(), this._jQuerydr = t._jQuerynP() }, I.prototype.readV2_opacity = function(t) { t.getFormatVersion() >= G.LIVE2D_FORMAT_VERSION_V2_10_SDK2 && (this._jQuerymS = t._jQueryTb()) }, I.prototype.init = function(t) {}, I.prototype._jQueryNr = function(t, i) {}, I.prototype.interpolateOpacity = function(t, i, e, r) { null == this._jQuerymS ? e.setInterpolatedOpacity(1) : e.setInterpolatedOpacity(v._jQuerybr(t, i, r, this._jQuerymS)) }, I.prototype._jQuery2b = function(t, i) {}, I.prototype._jQuerynb = function(t, i, e, r, o, n, s) {}, I.prototype.getType = function() {}, I.prototype._jQuerygs = function(t) { this._jQuerydr = t }, I.prototype._jQuerya2 = function(t) { this._jQuerykP = t }, I.prototype.getTargetBaseDataID = function() { return this._jQuerydr }, I.prototype.getBaseDataID = function() { return this._jQuerykP }, I.prototype._jQuery32 = function() { return null != this._jQuerydr && this._jQuerydr != yt._jQuery2o() }, x._jQueryW2 = 0, x._jQueryCS = x._jQueryW2, x._jQueryMo = function() { return !0 }, x._jQueryXP = function(t) { try { for (var i = getTimeMSec(); getTimeMSec() - i < t;); } catch (t) { t._jQueryRb() } }, x.getUserTimeMSec = function() { return x._jQueryCS == x._jQueryW2 ? x.getSystemTimeMSec() : x._jQueryCS }, x.setUserTimeMSec = function(t) { x._jQueryCS = t }, x.updateUserTimeMSec = function() { return x._jQueryCS = x.getSystemTimeMSec() }, x.getTimeMSec = function() { return (new Date).getTime() }, x.getSystemTimeMSec = function() { return (new Date).getTime() }, x._jQueryQ = function(t) {}, x._jQueryjT = function(t, i, e, r, o) { for (var n = 0; n < o; n++) e[r + n] = t[i + n] }, w._jQueryds = -2, w.prototype._jQueryF0 = function(t) { this._jQuerywL = t._jQuerynP(), this._jQueryVP = t._jQuery6L(), this._jQueryGP = t._jQuerynP() }, w.prototype.getParamIndex = function(t) { return this._jQuery2r != t && (this._jQuery8o = w._jQueryds), this._jQuery8o }, w.prototype._jQueryPb = function(t, i) { this._jQuery8o = t, this._jQuery2r = i }, w.prototype.getParamID = function() { return this._jQuerywL }, w.prototype._jQueryyP = function(t) { this._jQuerywL = t }, w.prototype._jQueryN2 = function() { return this._jQueryVP }, w.prototype._jQueryd2 = function() { return this._jQueryGP }, w.prototype._jQueryt2 = function(t, i) { this._jQueryVP = t, this._jQueryGP = i }, w.prototype._jQueryLr = function() { return this._jQueryO2 }, w.prototype._jQuerywr = function(t) { this._jQueryO2 = t }, w.prototype._jQuerySL = function() { return this._jQueryri }, w.prototype._jQueryAL = function(t) { this._jQueryri = t }, O.startsWith = function(t, i, e) { var r = i + e.length; if (r >= t.length) return !1; for (var o = i; o < r; o++)
                    if (O.getChar(t, o) != e.charAt(o - i)) return !1; return !0 }, O.getChar = function(t, i) { return String.fromCharCode(t.getUint8(i)) }, O.createString = function(t, i, e) { for (var r = new ArrayBuffer(2 * e), o = new Uint16Array(r), n = 0; n < e; n++) o[n] = t.getUint8(i + n); return String.fromCharCode.apply(null, o) }, O._jQueryLS = function(t, i, e, r) { t instanceof ArrayBuffer && (t = new DataView(t)); var o = e,
                    n = !1,
                    s = !1,
                    _ = 0,
                    a = O.getChar(t, o); "-" == a && (n = !0, o++); for (var h = !1; o < i; o++) { switch (a = O.getChar(t, o)) {
                        case "0":
                            _ *= 10; break;
                        case "1":
                            _ = 10 * _ + 1; break;
                        case "2":
                            _ = 10 * _ + 2; break;
                        case "3":
                            _ = 10 * _ + 3; break;
                        case "4":
                            _ = 10 * _ + 4; break;
                        case "5":
                            _ = 10 * _ + 5; break;
                        case "6":
                            _ = 10 * _ + 6; break;
                        case "7":
                            _ = 10 * _ + 7; break;
                        case "8":
                            _ = 10 * _ + 8; break;
                        case "9":
                            _ = 10 * _ + 9; break;
                        case ".":
                            s = !0, o++, h = !0; break;
                        default:
                            h = !0 } if (h) break } if (s)
                    for (var l = .1, jQuery = !1; o < i; o++) { switch (a = O.getChar(t, o)) {
                            case "0":
                                break;
                            case "1":
                                _ += 1 * l; break;
                            case "2":
                                _ += 2 * l; break;
                            case "3":
                                _ += 3 * l; break;
                            case "4":
                                _ += 4 * l; break;
                            case "5":
                                _ += 5 * l; break;
                            case "6":
                                _ += 6 * l; break;
                            case "7":
                                _ += 7 * l; break;
                            case "8":
                                _ += 8 * l; break;
                            case "9":
                                _ += 9 * l; break;
                            default:
                                jQuery = !0 } if (l *= .1, jQuery) break }
                return n && (_ = -_), r[0] = o, _ }, D.prototype._jQueryzP = function() { this._jQueryOb = new Array }, D.prototype._jQueryF0 = function(t) { this._jQueryOb = t._jQuerynP() }, D.prototype._jQueryUr = function(t) { if (t._jQueryWS()) return !0; for (var i = t._jQueryv2(), e = this._jQueryOb.length - 1; e >= 0; --e) { var r = this._jQueryOb[e].getParamIndex(i); if (r == w._jQueryds && (r = t.getParamIndex(this._jQueryOb[e].getParamID())), t._jQueryXb(r)) return !0 } return !1 }, D.prototype._jQueryQ2 = function(t, i) { for (var e, r, o = this._jQueryOb.length, n = t._jQueryv2(), s = 0, _ = 0; _ < o; _++) { var a = this._jQueryOb[_]; if (e = a.getParamIndex(n), e == w._jQueryds && (e = t.getParamIndex(a.getParamID()), a._jQueryPb(e, n)), e < 0) throw new Exception("err 23242 : " + a.getParamID()); var h = e < 0 ? 0 : t.getParamFloat(e);
                    r = a._jQueryN2(); var l, jQuery, u = a._jQueryd2(),
                        p = -1,
                        f = 0; if (r < 1);
                    else if (1 == r) l = u[0], l - U._jQueryJ < h && h < l + U._jQueryJ ? (p = 0, f = 0) : (p = 0, i[0] = !0);
                    else if (l = u[0], h < l - U._jQueryJ) p = 0, i[0] = !0;
                    else if (h < l + U._jQueryJ) p = 0;
                    else { for (var c = !1, d = 1; d < r; ++d) { if (jQuery = u[d], h < jQuery + U._jQueryJ) { jQuery - U._jQueryJ < h ? p = d : (p = d - 1, f = (h - l) / (jQuery - l), s++), c = !0; break } l = jQuery } c || (p = r - 1, f = 0, i[0] = !0) } a._jQuerywr(p), a._jQueryAL(f) } return s }, D.prototype._jQueryzr = function(t, i, e) { var r = 1 << e;
                r + 1 > U._jQueryQb && console.log("err 23245\n"); for (var o = this._jQueryOb.length, n = 1, s = 1, _ = 0, a = 0; a < r; ++a) t[a] = 0; for (var h = 0; h < o; ++h) { var l = this._jQueryOb[h]; if (0 == l._jQuerySL()) { var jQuery = l._jQueryLr() * n; if (jQuery < 0 && at._jQuery3T) throw new Exception("err 23246"); for (var a = 0; a < r; ++a) t[a] += jQuery } else { for (var jQuery = n * l._jQueryLr(), u = n * (l._jQueryLr() + 1), a = 0; a < r; ++a) t[a] += (a / s | 0) % 2 == 0 ? jQuery : u;
                        i[_++] = l._jQuerySL(), s *= 2 } n *= l._jQueryN2() } t[r] = 65535, i[_] = -1 }, D.prototype._jQueryh2 = function(t, i, e) { for (var r = new Float32Array(i), o = 0; o < i; ++o) r[o] = e[o]; var n = new w;
                n._jQueryyP(t), n._jQueryt2(i, r), this._jQueryOb.push(n) }, D.prototype._jQueryJ2 = function(t) { for (var i = t, e = this._jQueryOb.length, r = 0; r < e; ++r) { var o = this._jQueryOb[r],
                        n = o._jQueryN2(),
                        s = i % o._jQueryN2(),
                        _ = o._jQueryd2()[s];
                    console.log("%s[%d]=%7.2f / ", o.getParamID(), s, _), i /= n } console.log("\n") }, D.prototype.getParamCount = function() { return this._jQueryOb.length }, D.prototype._jQueryzs = function() { return this._jQueryOb }, R.prototype.identity = function() { for (var t = 0; t < 16; t++) this.m[t] = t % 5 == 0 ? 1 : 0 }, R.prototype.getArray = function() { return this.m }, R.prototype.getCopyMatrix = function() { return new Float32Array(this.m) }, R.prototype.setMatrix = function(t) { if (null != t && 16 == t.length)
                    for (var i = 0; i < 16; i++) this.m[i] = t[i] }, R.prototype.mult = function(t, i, e) { return null == i ? null : (this == i ? this.mult_safe(this.m, t.m, i.m, e) : this.mult_fast(this.m, t.m, i.m, e), i) }, R.prototype.mult_safe = function(t, i, e, r) { if (t == e) { var o = new Array(16);
                    this.mult_fast(t, i, o, r); for (var n = 15; n >= 0; --n) e[n] = o[n] } else this.mult_fast(t, i, e, r) }, R.prototype.mult_fast = function(t, i, e, r) { r ? (e[0] = t[0] * i[0] + t[4] * i[1] + t[8] * i[2], e[4] = t[0] * i[4] + t[4] * i[5] + t[8] * i[6], e[8] = t[0] * i[8] + t[4] * i[9] + t[8] * i[10], e[12] = t[0] * i[12] + t[4] * i[13] + t[8] * i[14] + t[12], e[1] = t[1] * i[0] + t[5] * i[1] + t[9] * i[2], e[5] = t[1] * i[4] + t[5] * i[5] + t[9] * i[6], e[9] = t[1] * i[8] + t[5] * i[9] + t[9] * i[10], e[13] = t[1] * i[12] + t[5] * i[13] + t[9] * i[14] + t[13], e[2] = t[2] * i[0] + t[6] * i[1] + t[10] * i[2], e[6] = t[2] * i[4] + t[6] * i[5] + t[10] * i[6], e[10] = t[2] * i[8] + t[6] * i[9] + t[10] * i[10], e[14] = t[2] * i[12] + t[6] * i[13] + t[10] * i[14] + t[14], e[3] = e[7] = e[11] = 0, e[15] = 1) : (e[0] = t[0] * i[0] + t[4] * i[1] + t[8] * i[2] + t[12] * i[3], e[4] = t[0] * i[4] + t[4] * i[5] + t[8] * i[6] + t[12] * i[7], e[8] = t[0] * i[8] + t[4] * i[9] + t[8] * i[10] + t[12] * i[11], e[12] = t[0] * i[12] + t[4] * i[13] + t[8] * i[14] + t[12] * i[15], e[1] = t[1] * i[0] + t[5] * i[1] + t[9] * i[2] + t[13] * i[3], e[5] = t[1] * i[4] + t[5] * i[5] + t[9] * i[6] + t[13] * i[7], e[9] = t[1] * i[8] + t[5] * i[9] + t[9] * i[10] + t[13] * i[11], e[13] = t[1] * i[12] + t[5] * i[13] + t[9] * i[14] + t[13] * i[15], e[2] = t[2] * i[0] + t[6] * i[1] + t[10] * i[2] + t[14] * i[3], e[6] = t[2] * i[4] + t[6] * i[5] + t[10] * i[6] + t[14] * i[7], e[10] = t[2] * i[8] + t[6] * i[9] + t[10] * i[10] + t[14] * i[11], e[14] = t[2] * i[12] + t[6] * i[13] + t[10] * i[14] + t[14] * i[15], e[3] = t[3] * i[0] + t[7] * i[1] + t[11] * i[2] + t[15] * i[3], e[7] = t[3] * i[4] + t[7] * i[5] + t[11] * i[6] + t[15] * i[7], e[11] = t[3] * i[8] + t[7] * i[9] + t[11] * i[10] + t[15] * i[11], e[15] = t[3] * i[12] + t[7] * i[13] + t[11] * i[14] + t[15] * i[15]) }, R.prototype.translate = function(t, i, e) { this.m[12] = this.m[0] * t + this.m[4] * i + this.m[8] * e + this.m[12], this.m[13] = this.m[1] * t + this.m[5] * i + this.m[9] * e + this.m[13], this.m[14] = this.m[2] * t + this.m[6] * i + this.m[10] * e + this.m[14], this.m[15] = this.m[3] * t + this.m[7] * i + this.m[11] * e + this.m[15] }, R.prototype.scale = function(t, i, e) { this.m[0] *= t, this.m[4] *= i, this.m[8] *= e, this.m[1] *= t, this.m[5] *= i, this.m[9] *= e, this.m[2] *= t, this.m[6] *= i, this.m[10] *= e, this.m[3] *= t, this.m[7] *= i, this.m[11] *= e }, R.prototype.rotateX = function(t) { var i = Lt.fcos(t),
                    e = Lt._jQuery9(t),
                    r = this.m[4];
                this.m[4] = r * i + this.m[8] * e, this.m[8] = r * -e + this.m[8] * i, r = this.m[5], this.m[5] = r * i + this.m[9] * e, this.m[9] = r * -e + this.m[9] * i, r = this.m[6], this.m[6] = r * i + this.m[10] * e, this.m[10] = r * -e + this.m[10] * i, r = this.m[7], this.m[7] = r * i + this.m[11] * e, this.m[11] = r * -e + this.m[11] * i }, R.prototype.rotateY = function(t) { var i = Lt.fcos(t),
                    e = Lt._jQuery9(t),
                    r = this.m[0];
                this.m[0] = r * i + this.m[8] * -e, this.m[8] = r * e + this.m[8] * i, r = this.m[1], this.m[1] = r * i + this.m[9] * -e, this.m[9] = r * e + this.m[9] * i, r = m[2], this.m[2] = r * i + this.m[10] * -e, this.m[10] = r * e + this.m[10] * i, r = m[3], this.m[3] = r * i + this.m[11] * -e, this.m[11] = r * e + this.m[11] * i }, R.prototype.rotateZ = function(t) { var i = Lt.fcos(t),
                    e = Lt._jQuery9(t),
                    r = this.m[0];
                this.m[0] = r * i + this.m[4] * e, this.m[4] = r * -e + this.m[4] * i, r = this.m[1], this.m[1] = r * i + this.m[5] * e, this.m[5] = r * -e + this.m[5] * i, r = this.m[2], this.m[2] = r * i + this.m[6] * e, this.m[6] = r * -e + this.m[6] * i, r = this.m[3], this.m[3] = r * i + this.m[7] * e, this.m[7] = r * -e + this.m[7] * i }, b.prototype = new et, b._jQuerytP = new Object, b._jQuery27 = function() { b._jQuerytP.clear() }, b.getID = function(t) { var i = b._jQuerytP[t]; return null == i && (i = new b(t), b._jQuerytP[t] = i), i }, b.prototype._jQuery3s = function() { return new b }, F._jQuerykS = -1, F._jQuerypS = 0, F._jQueryhb = 1, F.STATE_IDENTITY = 0, F._jQuerygb = 1, F._jQueryfo = 2, F._jQuerygo = 4, F.prototype.transform = function(t, i, e) { var r, o, n, s, _, a, h = 0,
                    l = 0; switch (this._jQueryhi) {
                    default:
                        return;
                    case F._jQuerygo | F._jQueryfo | F._jQuerygb:
                        for (r = this._jQuery7, o = this._jQueryH, n = this._jQueryk, s = this._jQueryf, _ = this._jQueryg, a = this._jQueryw; --e >= 0;) { var jQuery = t[h++],
                                u = t[h++];
                            i[l++] = r * jQuery + o * u + n, i[l++] = s * jQuery + _ * u + a } return;
                    case F._jQuerygo | F._jQueryfo:
                        for (r = this._jQuery7, o = this._jQueryH, s = this._jQueryf, _ = this._jQueryg; --e >= 0;) { var jQuery = t[h++],
                                u = t[h++];
                            i[l++] = r * jQuery + o * u, i[l++] = s * jQuery + _ * u } return;
                    case F._jQuerygo | F._jQuerygb:
                        for (o = this._jQueryH, n = this._jQueryk, s = this._jQueryf, a = this._jQueryw; --e >= 0;) { var jQuery = t[h++];
                            i[l++] = o * t[h++] + n, i[l++] = s * jQuery + a } return;
                    case F._jQuerygo:
                        for (o = this._jQueryH, s = this._jQueryf; --e >= 0;) { var jQuery = t[h++];
                            i[l++] = o * t[h++], i[l++] = s * jQuery } return;
                    case F._jQueryfo | F._jQuerygb:
                        for (r = this._jQuery7, n = this._jQueryk, _ = this._jQueryg, a = this._jQueryw; --e >= 0;) i[l++] = r * t[h++] + n, i[l++] = _ * t[h++] + a; return;
                    case F._jQueryfo:
                        for (r = this._jQuery7, _ = this._jQueryg; --e >= 0;) i[l++] = r * t[h++], i[l++] = _ * t[h++]; return;
                    case F._jQuerygb:
                        for (n = this._jQueryk, a = this._jQueryw; --e >= 0;) i[l++] = t[h++] + n, i[l++] = t[h++] + a; return;
                    case F.STATE_IDENTITY:
                        return void(t == i && h == l || x._jQueryjT(t, h, i, l, 2 * e)) } }, F.prototype.update = function() { 0 == this._jQueryH && 0 == this._jQueryf ? 1 == this._jQuery7 && 1 == this._jQueryg ? 0 == this._jQueryk && 0 == this._jQueryw ? (this._jQueryhi = F.STATE_IDENTITY, this._jQueryZ = F._jQuerypS) : (this._jQueryhi = F._jQuerygb, this._jQueryZ = F._jQueryhb) : 0 == this._jQueryk && 0 == this._jQueryw ? (this._jQueryhi = F._jQueryfo, this._jQueryZ = F._jQuerykS) : (this._jQueryhi = F._jQueryfo | F._jQuerygb, this._jQueryZ = F._jQuerykS) : 0 == this._jQuery7 && 0 == this._jQueryg ? 0 == this._jQueryk && 0 == this._jQueryw ? (this._jQueryhi = F._jQuerygo, this._jQueryZ = F._jQuerykS) : (this._jQueryhi = F._jQuerygo | F._jQuerygb, this._jQueryZ = F._jQuerykS) : 0 == this._jQueryk && 0 == this._jQueryw ? (this._jQueryhi = F._jQuerygo | F._jQueryfo, this._jQueryZ = F._jQuerykS) : (this._jQueryhi = F._jQuerygo | F._jQueryfo | F._jQuerygb, this._jQueryZ = F._jQuerykS) }, F.prototype._jQueryRT = function(t) { this._jQueryIT(t); var i = t[0],
                    e = t[2],
                    r = t[1],
                    o = t[3],
                    n = Math.sqrt(i * i + r * r),
                    s = i * o - e * r;
                0 == n ? at._jQueryso && console.log("affine._jQueryRT() / rt==0") : (t[0] = n, t[1] = s / n, t[2] = (r * o + i * e) / s, t[3] = Math.atan2(r, i)) }, F.prototype._jQueryho = function(t, i, e, r) { var o = new Float32Array(6),
                    n = new Float32Array(6);
                t._jQueryRT(o), i._jQueryRT(n); var s = new Float32Array(6);
                s[0] = o[0] + (n[0] - o[0]) * e, s[1] = o[1] + (n[1] - o[1]) * e, s[2] = o[2] + (n[2] - o[2]) * e, s[3] = o[3] + (n[3] - o[3]) * e, s[4] = o[4] + (n[4] - o[4]) * e, s[5] = o[5] + (n[5] - o[5]) * e, r._jQueryCT(s) }, F.prototype._jQueryCT = function(t) { var i = Math.cos(t[3]),
                    e = Math.sin(t[3]);
                this._jQuery7 = t[0] * i, this._jQueryf = t[0] * e, this._jQueryH = t[1] * (t[2] * i - e), this._jQueryg = t[1] * (t[2] * e + i), this._jQueryk = t[4], this._jQueryw = t[5], this.update() }, F.prototype._jQueryIT = function(t) { t[0] = this._jQuery7, t[1] = this._jQueryf, t[2] = this._jQueryH, t[3] = this._jQueryg, t[4] = this._jQueryk, t[5] = this._jQueryw }, C.prototype = new s, C._jQuerycs = "VISIBLE:", C._jQueryar = "LAYOUT:", C._jQueryCo = 0, C._jQueryD2 = [], C._jQuery1T = 1, C.loadMotion = function(t) { var i = new C,
                    e = [0],
                    r = t.length;
                i._jQueryyT = 0; for (var o = 0; o < r; ++o) { var n = 255 & t[o]; if ("\n" != n && "\r" != n)
                        if ("#" != n)
                            if ("jQuery" != n) { if ("a" <= n && n <= "z" || "A" <= n && n <= "Z" || "_" == n) { for (var s = o, _ = -1; o < r && ("\r" != (n = 255 & t[o]) && "\n" != n); ++o)
                                        if ("=" == n) { _ = o; break } if (_ >= 0) { var a = new B;
                                        O.startsWith(t, s, C._jQuerycs) ? (a._jQueryRP = B._jQueryhs, a._jQuery4P = new String(t, s, _ - s)) : O.startsWith(t, s, C._jQueryar) ? (a._jQuery4P = new String(t, s + 7, _ - s - 7), O.startsWith(t, s + 7, "ANCHOR_X") ? a._jQueryRP = B._jQueryxs : O.startsWith(t, s + 7, "ANCHOR_Y") ? a._jQueryRP = B._jQueryus : O.startsWith(t, s + 7, "SCALE_X") ? a._jQueryRP = B._jQueryqs : O.startsWith(t, s + 7, "SCALE_Y") ? a._jQueryRP = B._jQueryYs : O.startsWith(t, s + 7, "X") ? a._jQueryRP = B._jQueryws : O.startsWith(t, s + 7, "Y") && (a._jQueryRP = B._jQueryNs)) : (a._jQueryRP = B._jQueryFr, a._jQuery4P = new String(t, s, _ - s)), i.motions.push(a); var h = 0; for (C._jQueryD2.clear(), o = _ + 1; o < r && ("\r" != (n = 255 & t[o]) && "\n" != n); ++o)
                                            if ("," != n && " " != n && "\t" != n) { var l = O._jQueryLS(t, r, o, e); if (e[0] > 0) { C._jQueryD2.push(l), h++; var jQuery = e[0]; if (jQuery < o) { console.log("_jQueryn0 _jQueryhi . @Live2DMotion loadMotion()\n"); break } o = jQuery } } a._jQueryI0 = C._jQueryD2._jQueryBL(), h > i._jQueryyT && (i._jQueryyT = h) } } } else { for (var s = o, _ = -1; o < r && ("\r" != (n = 255 & t[o]) && "\n" != n); ++o)
                                    if ("=" == n) { _ = o; break } var u = !1; if (_ >= 0)
                                    for (_ == s + 4 && "f" == t[s + 1] && "p" == t[s + 2] && "s" == t[s + 3] && (u = !0), o = _ + 1; o < r && ("\r" != (n = 255 & t[o]) && "\n" != n); ++o)
                                        if ("," != n && " " != n && "\t" != n) { var l = O._jQueryLS(t, r, o, e);
                                            e[0] > 0 && u && 5 < l && l < 121 && (i._jQueryD0 = l), o = e[0] } for (; o < r && ("\n" != t[o] && "\r" != t[o]); ++o); } else
                        for (; o < r && ("\n" != t[o] && "\r" != t[o]); ++o); } return i._jQueryAS = 1e3 * i._jQueryyT / i._jQueryD0 | 0, i }, C.prototype.getDurationMSec = function() { return this._jQueryAS }, C.prototype.dump = function() { for (var t = 0; t < this.motions.length; t++) { var i = this.motions[t];
                    console.log("_jQuerywL[%s] [%d]. ", i._jQuery4P, i._jQueryI0.length); for (var e = 0; e < i._jQueryI0.length && e < 10; e++) console.log("%5.2f ,", i._jQueryI0[e]);
                    console.log("\n") } }, C.prototype.updateParamExe = function(t, i, e, r) { for (var o = i - r._jQueryz2, n = o * this._jQueryD0 / 1e3, s = 0 | n, _ = n - s, a = 0; a < this.motions.length; a++) { var h = this.motions[a],
                        l = h._jQueryI0.length,
                        jQuery = h._jQuery4P; if (h._jQueryRP == B._jQueryhs) { var u = h._jQueryI0[s >= l ? l - 1 : s];
                        t.setParamFloat(jQuery, u) } else if (B._jQueryws <= h._jQueryRP && h._jQueryRP <= B._jQueryYs);
                    else { var p = t.getParamFloat(jQuery),
                            f = h._jQueryI0[s >= l ? l - 1 : s],
                            c = h._jQueryI0[s + 1 >= l ? l - 1 : s + 1],
                            d = f + (c - f) * _,
                            g = p + (d - p) * e;
                        t.setParamFloat(jQuery, g) } } s >= this._jQueryyT && (this._jQueryE ? (r._jQueryz2 = i, this.loopFadeIn && (r._jQuerybs = i)) : r._jQuery9L = !0) }, C.prototype._jQueryr0 = function() { return this._jQueryE }, C.prototype._jQueryaL = function(t) { this._jQueryE = t }, C.prototype.isLoopFadeIn = function() { return this.loopFadeIn }, C.prototype.setLoopFadeIn = function(t) { this.loopFadeIn = t }, N.prototype.clear = function() { this.size = 0 }, N.prototype.add = function(t) { if (this._jQueryP.length <= this.size) { var i = new Float32Array(2 * this.size);
                    x._jQueryjT(this._jQueryP, 0, i, 0, this.size), this._jQueryP = i } this._jQueryP[this.size++] = t }, N.prototype._jQueryBL = function() { var t = new Float32Array(this.size); return x._jQueryjT(this._jQueryP, 0, t, 0, this.size), t }, B._jQueryFr = 0, B._jQueryhs = 1, B._jQueryws = 100, B._jQueryNs = 101, B._jQueryxs = 102, B._jQueryus = 103, B._jQueryqs = 104, B._jQueryYs = 105, U._jQueryMs = 1, U._jQueryQs = 2, U._jQueryi2 = 0, U._jQueryNo = 2, U._jQuerydo = U._jQueryMs, U._jQueryLs = !0, U._jQuery1r = 5, U._jQueryQb = 65, U._jQueryJ = 1e-4, U._jQueryFT = .001, U._jQuerySs = 3, G._jQueryo7 = 6, G._jQueryS7 = 7, G._jQuerys7 = 8, G._jQuery77 = 9, G.LIVE2D_FORMAT_VERSION_V2_10_SDK2 = 10, G.LIVE2D_FORMAT_VERSION_V2_11_SDK2_1 = 11, G._jQueryT7 = G.LIVE2D_FORMAT_VERSION_V2_11_SDK2_1, G._jQueryIs = -2004318072, G._jQueryh0 = 0, G._jQuery4L = 23, G._jQuery7P = 33, G._jQueryuT = function(t) { console.log("_jQuerybo :: _jQuery6 _jQuerymo _jQueryE0 : %d\n", t) }, G._jQuery9o = function(t) { if (t < 40) return G._jQueryuT(t), null; if (t < 50) return G._jQueryuT(t), null; if (t < 60) return G._jQueryuT(t), null; if (t < 100) switch (t) {
                    case 65:
                        return new Z;
                    case 66:
                        return new D;
                    case 67:
                        return new w;
                    case 68:
                        return new z;
                    case 69:
                        return new P;
                    case 70:
                        return new jQueryt;
                    default:
                        return G._jQueryuT(t), null } else if (t < 150) switch (t) {
                    case 131:
                        return new st;
                    case 133:
                        return new tt;
                    case 136:
                        return new p;
                    case 137:
                        return new ot;
                    case 142:
                        return new j }
                return G._jQueryuT(t), null }, Y._jQueryHP = 0, Y._jQuery_0 = !0;
            Y._jQueryV2 = -1, Y._jQueryW0 = -1, Y._jQueryjr = !1, Y._jQueryZS = !0, Y._jQuerytr = -1e6, Y._jQuerylr = 1e6, Y._jQueryis = 32, Y._jQuerye = !1, Y.prototype.getDrawDataIndex = function(t) { for (var i = this._jQueryaS.length - 1; i >= 0; --i)
                    if (null != this._jQueryaS[i] && this._jQueryaS[i].getDrawDataID() == t) return i; return -1 }, Y.prototype.getDrawData = function(t) { if (t instanceof b) { if (null == this._jQueryBo) { this._jQueryBo = new Object; for (var i = this._jQueryaS.length, e = 0; e < i; e++) { var r = this._jQueryaS[e],
                                o = r.getDrawDataID();
                            null != o && (this._jQueryBo[o] = r) } } return this._jQueryBo[id] } return t < this._jQueryaS.length ? this._jQueryaS[t] : null }, Y.prototype.release = function() { this._jQuery3S.clear(), this._jQueryaS.clear(), this._jQueryF2.clear(), null != this._jQueryBo && this._jQueryBo.clear(), this._jQuerydb.clear(), this._jQuery8b.clear(), this._jQueryHr.clear() }, Y.prototype.init = function() { this._jQueryco++, this._jQueryF2.length > 0 && this.release(); for (var t = this._jQueryRi.getModelImpl(), i = t._jQueryXr(), r = i.length, o = new Array, n = new Array, s = 0; s < r; ++s) { var _ = i[s];
                    this._jQueryF2.push(_), this._jQueryHr.push(_.init(this)); for (var a = _.getBaseData(), h = a.length, l = 0; l < h; ++l) o.push(a[l]); for (var l = 0; l < h; ++l) { var jQuery = a[l].init(this);
                        jQuery._jQueryl2(s), n.push(jQuery) } for (var u = _.getDrawData(), p = u.length, l = 0; l < p; ++l) { var f = u[l],
                            c = f.init(this);
                        c._jQueryIP = s, this._jQueryaS.push(f), this._jQuery8b.push(c) } } for (var d = o.length, g = yt._jQuery2o();;) { for (var y = !1, s = 0; s < d; ++s) { var m = o[s]; if (null != m) { var T = m.getTargetBaseDataID();
                            (null == T || T == g || this.getBaseDataIndex(T) >= 0) && (this._jQuery3S.push(m), this._jQuerydb.push(n[s]), o[s] = null, y = !0) } } if (!y) break } var P = t._jQueryE2(); if (null != P) { var S = P._jQuery1s(); if (null != S)
                        for (var v = S.length, s = 0; s < v; ++s) { var L = S[s];
                            null != L && this._jQuery02(L.getParamID(), L.getDefaultValue(), L.getMinValue(), L.getMaxValue()) } } this.clipManager = new e(this.dp_webgl), this.clipManager.init(this, this._jQueryaS, this._jQuery8b), this._jQueryQT = !0 }, Y.prototype.update = function() { Y._jQuerye && _.start("_jQueryzL"); for (var t = this._jQuery_2.length, i = 0; i < t; i++) this._jQuery_2[i] != this._jQueryvr[i] && (this._jQueryJs[i] = Y._jQueryZS, this._jQueryvr[i] = this._jQuery_2[i]); var e = this._jQuery3S.length,
                    r = this._jQueryaS.length,
                    o = W._jQueryor(),
                    n = W._jQueryPr(),
                    s = n - o + 1;
                (null == this._jQueryWs || this._jQueryWs.length < s) && (this._jQueryWs = new Int16Array(s), this._jQueryVs = new Int16Array(s)); for (var i = 0; i < s; i++) this._jQueryWs[i] = Y._jQueryV2, this._jQueryVs[i] = Y._jQueryV2;
                (null == this._jQueryEr || this._jQueryEr.length < r) && (this._jQueryEr = new Int16Array(r)); for (var i = 0; i < r; i++) this._jQueryEr[i] = Y._jQueryW0;
                Y._jQuerye && _.dump("_jQueryzL"), Y._jQuerye && _.start("_jQueryUL"); for (var a = null, h = 0; h < e; ++h) { var l = this._jQuery3S[h],
                        jQuery = this._jQuerydb[h]; try { l._jQueryNr(this, jQuery), l._jQuery2b(this, jQuery) } catch (t) { null == a && (a = t) } } null != a && Y._jQuery_0 && _._jQueryRb(a), Y._jQuerye && _.dump("_jQueryUL"), Y._jQuerye && _.start("_jQueryDL"); for (var u = null, p = 0; p < r; ++p) { var f = this._jQueryaS[p],
                        c = this._jQuery8b[p]; try { if (f._jQueryNr(this, c), c._jQueryu2()) continue;
                        f._jQuery2b(this, c); var d, g = Math.floor(f._jQueryzS(this, c) - o); try { d = this._jQueryVs[g] } catch (t) { console.log("_jQueryli :: %s / %s \t\t\t\t@@_jQueryfS\n", t.toString(), f.getDrawDataID().toString()), g = Math.floor(f._jQueryzS(this, c) - o); continue } d == Y._jQueryV2 ? this._jQueryWs[g] = p : this._jQueryEr[d] = p, this._jQueryVs[g] = p } catch (t) { null == u && (u = t, at._jQuerysT(at._jQueryH7)) } } null != u && Y._jQuery_0 && _._jQueryRb(u), Y._jQuerye && _.dump("_jQueryDL"), Y._jQuerye && _.start("_jQueryeL"); for (var i = this._jQueryJs.length - 1; i >= 0; i--) this._jQueryJs[i] = Y._jQueryjr; return this._jQueryQT = !1, Y._jQuerye && _.dump("_jQueryeL"), !1 }, Y.prototype.preDraw = function(t) { null != this.clipManager && (t._jQueryZT(), this.clipManager.setupClip(this, t)) }, Y.prototype.draw = function(t) { if (null == this._jQueryWs) return void _._jQueryli("call _jQueryRi.update() before _jQueryRi.draw() "); var i = this._jQueryWs.length;
                t._jQueryZT(); for (var e = 0; e < i; ++e) { var r = this._jQueryWs[e]; if (r != Y._jQueryV2)
                        for (;;) { var o = this._jQueryaS[r],
                                n = this._jQuery8b[r]; if (n._jQueryyo()) { var s = n._jQueryIP,
                                    a = this._jQueryHr[s];
                                n._jQueryVS = a.getPartsOpacity(), o.draw(t, this, n) } var h = this._jQueryEr[r]; if (h <= r || h == Y._jQueryW0) break;
                            r = h } } }, Y.prototype.getParamIndex = function(t) { for (var i = this._jQuerypb.length - 1; i >= 0; --i)
                    if (this._jQuerypb[i] == t) return i; return this._jQuery02(t, 0, Y._jQuerytr, Y._jQuerylr) }, Y.prototype._jQueryBS = function(t) { return this.getBaseDataIndex(t) }, Y.prototype.getBaseDataIndex = function(t) { for (var i = this._jQuery3S.length - 1; i >= 0; --i)
                    if (null != this._jQuery3S[i] && this._jQuery3S[i].getBaseDataID() == t) return i; return -1 }, Y.prototype._jQueryUT = function(t, i) { var e = new Float32Array(i); return x._jQueryjT(t, 0, e, 0, t.length), e }, Y.prototype._jQuery02 = function(t, i, e, r) { if (this._jQueryqo >= this._jQuerypb.length) { var o = this._jQuerypb.length,
                        n = new Array(2 * o);
                    x._jQueryjT(this._jQuerypb, 0, n, 0, o), this._jQuerypb = n, this._jQuery_2 = this._jQueryUT(this._jQuery_2, 2 * o), this._jQueryvr = this._jQueryUT(this._jQueryvr, 2 * o), this._jQueryRr = this._jQueryUT(this._jQueryRr, 2 * o), this._jQueryOr = this._jQueryUT(this._jQueryOr, 2 * o); var s = new Array;
                    x._jQueryjT(this._jQueryJs, 0, s, 0, o), this._jQueryJs = s } return this._jQuerypb[this._jQueryqo] = t, this._jQuery_2[this._jQueryqo] = i, this._jQueryvr[this._jQueryqo] = i, this._jQueryRr[this._jQueryqo] = e, this._jQueryOr[this._jQueryqo] = r, this._jQueryJs[this._jQueryqo] = Y._jQueryZS, this._jQueryqo++ }, Y.prototype._jQueryZo = function(t, i) { this._jQuery3S[t] = i }, Y.prototype.setParamFloat = function(t, i) { i < this._jQueryRr[t] && (i = this._jQueryRr[t]), i > this._jQueryOr[t] && (i = this._jQueryOr[t]), this._jQuery_2[t] = i }, Y.prototype.loadParam = function() { var t = this._jQuery_2.length;
                t > this._jQueryfs.length && (t = this._jQueryfs.length), x._jQueryjT(this._jQueryfs, 0, this._jQuery_2, 0, t) }, Y.prototype.saveParam = function() { var t = this._jQuery_2.length;
                t > this._jQueryfs.length && (this._jQueryfs = new Float32Array(t)), x._jQueryjT(this._jQuery_2, 0, this._jQueryfs, 0, t) }, Y.prototype._jQueryv2 = function() { return this._jQueryco }, Y.prototype._jQueryWS = function() { return this._jQueryQT }, Y.prototype._jQueryXb = function(t) { return this._jQueryJs[t] == Y._jQueryZS }, Y.prototype._jQueryvs = function() { return this._jQueryEs }, Y.prototype._jQueryTr = function() { return this._jQueryZP }, Y.prototype.getBaseData = function(t) { return this._jQuery3S[t] }, Y.prototype.getParamFloat = function(t) { return this._jQuery_2[t] }, Y.prototype.getParamMax = function(t) { return this._jQueryOr[t] }, Y.prototype.getParamMin = function(t) { return this._jQueryRr[t] }, Y.prototype.setPartsOpacity = function(t, i) { this._jQueryHr[t].setPartsOpacity(i) }, Y.prototype.getPartsOpacity = function(t) { return this._jQueryHr[t].getPartsOpacity() }, Y.prototype.getPartsDataIndex = function(t) { for (var i = this._jQueryF2.length - 1; i >= 0; --i)
                    if (null != this._jQueryF2[i] && this._jQueryF2[i]._jQueryp2() == t) return i; return -1 }, Y.prototype._jQueryq2 = function(t) { return this._jQuerydb[t] }, Y.prototype._jQueryC2 = function(t) { return this._jQuery8b[t] }, Y.prototype._jQueryBb = function(t) { return this._jQueryHr[t] }, Y.prototype._jQuery5s = function(t, i) { for (var e = this._jQueryWs.length, r = t, o = 0; o < e; ++o) { var n = this._jQueryWs[o]; if (n != Y._jQueryV2)
                        for (;;) { var s = this._jQuery8b[n];
                            s._jQueryyo() && (s._jQueryGT()._jQueryB2(this, s, r), r += i); var _ = this._jQueryEr[n]; if (_ <= n || _ == Y._jQueryW0) break;
                            n = _ } } }, Y.prototype.setDrawParam = function(t) { this.dp_webgl = t }, Y.prototype.getDrawParam = function() { return this.dp_webgl }, k._jQuery0T = function(t) { return k._jQuery0T(new _jQuery5(t)) }, k._jQuery0T = function(t) { if (!t.exists()) throw new _jQueryls(t._jQuery3b()); for (var i, e = t.length(), r = new Int8Array(e), o = new _jQueryXs(new _jQuerykb(t), 8192), n = 0;
                    (i = o.read(r, n, e - n)) > 0;) n += i; return r }, k._jQueryC = function(t) { var i = null,
                    e = null; try { i = t instanceof Array ? t : new _jQueryXs(t, 8192), e = new _jQueryjs; for (var r, o = new Int8Array(1e3);
                        (r = i.read(o)) > 0;) e.write(o, 0, r); return e._jQueryTS() } finally { null != t && t.close(), null != e && (e.flush(), e.close()) } }, V.prototype._jQueryT2 = function() { return x.getUserTimeMSec() + Math._jQuery10() * (2 * this._jQueryBr - 1) }, V.prototype._jQueryuo = function(t) { this._jQueryBr = t }, V.prototype._jQueryQS = function(t, i, e) { this._jQueryDr = t, this._jQueryCb = i, this._jQuerymr = e }, V.prototype._jQuery7T = function(t) { var i, e = x.getUserTimeMSec(),
                    r = 0; switch (this._jQuery_L) {
                    case STATE_CLOSING:
                        r = (e - this._jQuerybb) / this._jQueryDr, r >= 1 && (r = 1, this._jQuery_L = xt.STATE_CLOSED, this._jQuerybb = e), i = 1 - r; break;
                    case STATE_CLOSED:
                        r = (e - this._jQuerybb) / this._jQueryCb, r >= 1 && (this._jQuery_L = xt.STATE_OPENING, this._jQuerybb = e), i = 0; break;
                    case STATE_OPENING:
                        r = (e - this._jQuerybb) / this._jQuerymr, r >= 1 && (r = 1, this._jQuery_L = xt.STATE_INTERVAL, this._jQuery12 = this._jQueryT2()), i = r; break;
                    case STATE_INTERVAL:
                        this._jQuery12 < e && (this._jQuery_L = xt.STATE_CLOSING, this._jQuerybb = e), i = 1; break;
                    case STATE_FIRST:
                    default:
                        this._jQuery_L = xt.STATE_INTERVAL, this._jQuery12 = this._jQueryT2(), i = 1 } this._jQueryjo || (i = -i), t.setParamFloat(this._jQueryiL, i), t.setParamFloat(this._jQuery0L, i) }; var xt = function() {};
            xt.STATE_FIRST = "STATE_FIRST", xt.STATE_INTERVAL = "STATE_INTERVAL", xt.STATE_CLOSING = "STATE_CLOSING", xt.STATE_CLOSED = "STATE_CLOSED", xt.STATE_OPENING = "STATE_OPENING", X.prototype = new E, X._jQueryAs = 32, X._jQueryGr = !1, X._jQueryNT = null, X._jQueryvS = null, X._jQueryno = null, X._jQuery9r = function(t) { return new Float32Array(t) }, X._jQueryvb = function(t) { return new Int16Array(t) }, X._jQuerycr = function(t, i) { return null == t || t._jQueryyL() < i.length ? (t = X._jQuery9r(2 * i.length), t.put(i), t._jQueryoT(0)) : (t.clear(), t.put(i), t._jQueryoT(0)), t }, X._jQuerymb = function(t, i) { return null == t || t._jQueryyL() < i.length ? (t = X._jQueryvb(2 * i.length), t.put(i), t._jQueryoT(0)) : (t.clear(), t.put(i), t._jQueryoT(0)), t }, X._jQueryHs = function() { return X._jQueryGr }, X._jQueryas = function(t) { X._jQueryGr = t }, X.prototype.setGL = function(t) { this.gl = t }, X.prototype.setTransform = function(t) { this.transform = t }, X.prototype._jQueryZT = function() {}, X.prototype._jQueryUo = function(t, i, e, r, o, n, s, _) { if (!(n < .01)) { var a = this._jQueryU2[t],
                        h = n > .9 ? at.EXPAND_W : 0;
                    this.gl.drawElements(a, e, r, o, n, h, this.transform, _) } }, X.prototype._jQueryRs = function() { throw new Error("_jQueryRs") }, X.prototype._jQueryDs = function(t) { throw new Error("_jQueryDs") }, X.prototype._jQueryK2 = function() { for (var t = 0; t < this._jQuerysb.length; t++) { 0 != this._jQuerysb[t] && (this.gl._jQuerySr(1, this._jQuerysb, t), this._jQuerysb[t] = 0) } }, X.prototype.setTexture = function(t, i) { this._jQuerysb.length < t + 1 && this._jQuerynS(t), this._jQuerysb[t] = i }, X.prototype.setTexture = function(t, i) { this._jQuerysb.length < t + 1 && this._jQuerynS(t), this._jQueryU2[t] = i }, X.prototype._jQuerynS = function(t) { var i = Math.max(2 * this._jQuerysb.length, t + 1 + 10),
                    e = new Int32Array(i);
                x._jQueryjT(this._jQuerysb, 0, e, 0, this._jQuerysb.length), this._jQuerysb = e; var r = new Array;
                x._jQueryjT(this._jQueryU2, 0, r, 0, this._jQueryU2.length), this._jQueryU2 = r }, z.prototype = new I, z._jQueryXo = new Float32Array(2), z._jQueryio = new Float32Array(2), z._jQuery0o = new Float32Array(2), z._jQueryLo = new Float32Array(2), z._jQueryTo = new Float32Array(2), z._jQueryPo = new Float32Array(2), z._jQuerygT = new Array, z.prototype._jQueryzP = function() { this._jQueryGS = new D, this._jQueryGS._jQueryzP(), this._jQueryY0 = new Array }, z.prototype.getType = function() { return I._jQueryc2 }, z.prototype._jQueryF0 = function(t) { I.prototype._jQueryF0.call(this, t), this._jQueryGS = t._jQuerynP(), this._jQueryY0 = t._jQuerynP(), I.prototype.readV2_opacity.call(this, t) }, z.prototype.init = function(t) { var i = new H(this); return i._jQueryYr = new P, this._jQuery32() && (i._jQueryWr = new P), i }, z.prototype._jQueryNr = function(t, i) { this != i._jQueryGT() && console.log("### assert!! ### "); var e = i; if (this._jQueryGS._jQueryUr(t)) { var r = z._jQuerygT;
                    r[0] = !1; var o = this._jQueryGS._jQueryQ2(t, r);
                    i._jQueryIb(r[0]), this.interpolateOpacity(t, this._jQueryGS, i, r); var n = t._jQueryvs(),
                        s = t._jQueryTr(); if (this._jQueryGS._jQueryzr(n, s, o), o <= 0) { var _ = this._jQueryY0[n[0]];
                        e._jQueryYr.init(_) } else if (1 == o) { var _ = this._jQueryY0[n[0]],
                            a = this._jQueryY0[n[1]],
                            h = s[0];
                        e._jQueryYr._jQueryfL = _._jQueryfL + (a._jQueryfL - _._jQueryfL) * h, e._jQueryYr._jQuerygL = _._jQuerygL + (a._jQuerygL - _._jQuerygL) * h, e._jQueryYr._jQueryB0 = _._jQueryB0 + (a._jQueryB0 - _._jQueryB0) * h, e._jQueryYr._jQueryz0 = _._jQueryz0 + (a._jQueryz0 - _._jQueryz0) * h, e._jQueryYr._jQueryqT = _._jQueryqT + (a._jQueryqT - _._jQueryqT) * h } else if (2 == o) { var _ = this._jQueryY0[n[0]],
                            a = this._jQueryY0[n[1]],
                            l = this._jQueryY0[n[2]],
                            jQuery = this._jQueryY0[n[3]],
                            h = s[0],
                            u = s[1],
                            p = _._jQueryfL + (a._jQueryfL - _._jQueryfL) * h,
                            f = l._jQueryfL + (jQuery._jQueryfL - l._jQueryfL) * h;
                        e._jQueryYr._jQueryfL = p + (f - p) * u, p = _._jQuerygL + (a._jQuerygL - _._jQuerygL) * h, f = l._jQuerygL + (jQuery._jQuerygL - l._jQuerygL) * h, e._jQueryYr._jQuerygL = p + (f - p) * u, p = _._jQueryB0 + (a._jQueryB0 - _._jQueryB0) * h, f = l._jQueryB0 + (jQuery._jQueryB0 - l._jQueryB0) * h, e._jQueryYr._jQueryB0 = p + (f - p) * u, p = _._jQueryz0 + (a._jQueryz0 - _._jQueryz0) * h, f = l._jQueryz0 + (jQuery._jQueryz0 - l._jQueryz0) * h, e._jQueryYr._jQueryz0 = p + (f - p) * u, p = _._jQueryqT + (a._jQueryqT - _._jQueryqT) * h, f = l._jQueryqT + (jQuery._jQueryqT - l._jQueryqT) * h, e._jQueryYr._jQueryqT = p + (f - p) * u } else if (3 == o) { var c = this._jQueryY0[n[0]],
                            d = this._jQueryY0[n[1]],
                            g = this._jQueryY0[n[2]],
                            y = this._jQueryY0[n[3]],
                            m = this._jQueryY0[n[4]],
                            T = this._jQueryY0[n[5]],
                            P = this._jQueryY0[n[6]],
                            S = this._jQueryY0[n[7]],
                            h = s[0],
                            u = s[1],
                            v = s[2],
                            p = c._jQueryfL + (d._jQueryfL - c._jQueryfL) * h,
                            f = g._jQueryfL + (y._jQueryfL - g._jQueryfL) * h,
                            L = m._jQueryfL + (T._jQueryfL - m._jQueryfL) * h,
                            M = P._jQueryfL + (S._jQueryfL - P._jQueryfL) * h;
                        e._jQueryYr._jQueryfL = (1 - v) * (p + (f - p) * u) + v * (L + (M - L) * u), p = c._jQuerygL + (d._jQuerygL - c._jQuerygL) * h, f = g._jQuerygL + (y._jQuerygL - g._jQuerygL) * h, L = m._jQuerygL + (T._jQuerygL - m._jQuerygL) * h, M = P._jQuerygL + (S._jQuerygL - P._jQuerygL) * h, e._jQueryYr._jQuerygL = (1 - v) * (p + (f - p) * u) + v * (L + (M - L) * u), p = c._jQueryB0 + (d._jQueryB0 - c._jQueryB0) * h, f = g._jQueryB0 + (y._jQueryB0 - g._jQueryB0) * h, L = m._jQueryB0 + (T._jQueryB0 - m._jQueryB0) * h, M = P._jQueryB0 + (S._jQueryB0 - P._jQueryB0) * h, e._jQueryYr._jQueryB0 = (1 - v) * (p + (f - p) * u) + v * (L + (M - L) * u), p = c._jQueryz0 + (d._jQueryz0 - c._jQueryz0) * h, f = g._jQueryz0 + (y._jQueryz0 - g._jQueryz0) * h, L = m._jQueryz0 + (T._jQueryz0 - m._jQueryz0) * h, M = P._jQueryz0 + (S._jQueryz0 - P._jQueryz0) * h, e._jQueryYr._jQueryz0 = (1 - v) * (p + (f - p) * u) + v * (L + (M - L) * u), p = c._jQueryqT + (d._jQueryqT - c._jQueryqT) * h, f = g._jQueryqT + (y._jQueryqT - g._jQueryqT) * h, L = m._jQueryqT + (T._jQueryqT - m._jQueryqT) * h, M = P._jQueryqT + (S._jQueryqT - P._jQueryqT) * h, e._jQueryYr._jQueryqT = (1 - v) * (p + (f - p) * u) + v * (L + (M - L) * u) } else if (4 == o) { var E = this._jQueryY0[n[0]],
                            A = this._jQueryY0[n[1]],
                            I = this._jQueryY0[n[2]],
                            x = this._jQueryY0[n[3]],
                            w = this._jQueryY0[n[4]],
                            O = this._jQueryY0[n[5]],
                            D = this._jQueryY0[n[6]],
                            R = this._jQueryY0[n[7]],
                            b = this._jQueryY0[n[8]],
                            F = this._jQueryY0[n[9]],
                            C = this._jQueryY0[n[10]],
                            N = this._jQueryY0[n[11]],
                            B = this._jQueryY0[n[12]],
                            U = this._jQueryY0[n[13]],
                            G = this._jQueryY0[n[14]],
                            Y = this._jQueryY0[n[15]],
                            h = s[0],
                            u = s[1],
                            v = s[2],
                            k = s[3],
                            p = E._jQueryfL + (A._jQueryfL - E._jQueryfL) * h,
                            f = I._jQueryfL + (x._jQueryfL - I._jQueryfL) * h,
                            L = w._jQueryfL + (O._jQueryfL - w._jQueryfL) * h,
                            M = D._jQueryfL + (R._jQueryfL - D._jQueryfL) * h,
                            V = b._jQueryfL + (F._jQueryfL - b._jQueryfL) * h,
                            X = C._jQueryfL + (N._jQueryfL - C._jQueryfL) * h,
                            H = B._jQueryfL + (U._jQueryfL - B._jQueryfL) * h,
                            W = G._jQueryfL + (Y._jQueryfL - G._jQueryfL) * h;
                        e._jQueryYr._jQueryfL = (1 - k) * ((1 - v) * (p + (f - p) * u) + v * (L + (M - L) * u)) + k * ((1 - v) * (V + (X - V) * u) + v * (H + (W - H) * u)), p = E._jQuerygL + (A._jQuerygL - E._jQuerygL) * h, f = I._jQuerygL + (x._jQuerygL - I._jQuerygL) * h, L = w._jQuerygL + (O._jQuerygL - w._jQuerygL) * h, M = D._jQuerygL + (R._jQuerygL - D._jQuerygL) * h, V = b._jQuerygL + (F._jQuerygL - b._jQuerygL) * h, X = C._jQuerygL + (N._jQuerygL - C._jQuerygL) * h, H = B._jQuerygL + (U._jQuerygL - B._jQuerygL) * h, W = G._jQuerygL + (Y._jQuerygL - G._jQuerygL) * h, e._jQueryYr._jQuerygL = (1 - k) * ((1 - v) * (p + (f - p) * u) + v * (L + (M - L) * u)) + k * ((1 - v) * (V + (X - V) * u) + v * (H + (W - H) * u)), p = E._jQueryB0 + (A._jQueryB0 - E._jQueryB0) * h, f = I._jQueryB0 + (x._jQueryB0 - I._jQueryB0) * h, L = w._jQueryB0 + (O._jQueryB0 - w._jQueryB0) * h, M = D._jQueryB0 + (R._jQueryB0 - D._jQueryB0) * h, V = b._jQueryB0 + (F._jQueryB0 - b._jQueryB0) * h, X = C._jQueryB0 + (N._jQueryB0 - C._jQueryB0) * h, H = B._jQueryB0 + (U._jQueryB0 - B._jQueryB0) * h, W = G._jQueryB0 + (Y._jQueryB0 - G._jQueryB0) * h, e._jQueryYr._jQueryB0 = (1 - k) * ((1 - v) * (p + (f - p) * u) + v * (L + (M - L) * u)) + k * ((1 - v) * (V + (X - V) * u) + v * (H + (W - H) * u)), p = E._jQueryz0 + (A._jQueryz0 - E._jQueryz0) * h, f = I._jQueryz0 + (x._jQueryz0 - I._jQueryz0) * h, L = w._jQueryz0 + (O._jQueryz0 - w._jQueryz0) * h, M = D._jQueryz0 + (R._jQueryz0 - D._jQueryz0) * h, V = b._jQueryz0 + (F._jQueryz0 - b._jQueryz0) * h, X = C._jQueryz0 + (N._jQueryz0 - C._jQueryz0) * h, H = B._jQueryz0 + (U._jQueryz0 - B._jQueryz0) * h, W = G._jQueryz0 + (Y._jQueryz0 - G._jQueryz0) * h, e._jQueryYr._jQueryz0 = (1 - k) * ((1 - v) * (p + (f - p) * u) + v * (L + (M - L) * u)) + k * ((1 - v) * (V + (X - V) * u) + v * (H + (W - H) * u)), p = E._jQueryqT + (A._jQueryqT - E._jQueryqT) * h, f = I._jQueryqT + (x._jQueryqT - I._jQueryqT) * h, L = w._jQueryqT + (O._jQueryqT - w._jQueryqT) * h, M = D._jQueryqT + (R._jQueryqT - D._jQueryqT) * h, V = b._jQueryqT + (F._jQueryqT - b._jQueryqT) * h, X = C._jQueryqT + (N._jQueryqT - C._jQueryqT) * h, H = B._jQueryqT + (U._jQueryqT - B._jQueryqT) * h, W = G._jQueryqT + (Y._jQueryqT - G._jQueryqT) * h, e._jQueryYr._jQueryqT = (1 - k) * ((1 - v) * (p + (f - p) * u) + v * (L + (M - L) * u)) + k * ((1 - v) * (V + (X - V) * u) + v * (H + (W - H) * u)) } else { for (var j = 0 | Math.pow(2, o), q = new Float32Array(j), J = 0; J < j; J++) { for (var Q = J, Z = 1, K = 0; K < o; K++) Z *= Q % 2 == 0 ? 1 - s[K] : s[K], Q /= 2;
                            q[J] = Z } for (var tt = new Array, it = 0; it < j; it++) tt[it] = this._jQueryY0[n[it]]; for (var et = 0, rt = 0, ot = 0, nt = 0, st = 0, it = 0; it < j; it++) et += q[it] * tt[it]._jQueryfL, rt += q[it] * tt[it]._jQuerygL, ot += q[it] * tt[it]._jQueryB0, nt += q[it] * tt[it]._jQueryz0, st += q[it] * tt[it]._jQueryqT;
                        e._jQueryYr._jQueryfL = et, e._jQueryYr._jQuerygL = rt, e._jQueryYr._jQueryB0 = ot, e._jQueryYr._jQueryz0 = nt, e._jQueryYr._jQueryqT = st } var _ = this._jQueryY0[n[0]];
                    e._jQueryYr.reflectX = _.reflectX, e._jQueryYr.reflectY = _.reflectY } }, z.prototype._jQuery2b = function(t, i) { this != i._jQueryGT() && console.log("### assert!! ### "); var e = i; if (e._jQueryhS(!0), this._jQuery32()) { var r = this.getTargetBaseDataID(); if (e._jQuery8r == I._jQueryur && (e._jQuery8r = t.getBaseDataIndex(r)), e._jQuery8r < 0) at._jQueryso && _._jQueryli("_jQueryL _jQuery0P _jQueryG :: %s", r), e._jQueryhS(!1);
                    else { var o = t.getBaseData(e._jQuery8r); if (null != o) { var n = t._jQueryq2(e._jQuery8r),
                                s = z._jQueryXo;
                            s[0] = e._jQueryYr._jQueryfL, s[1] = e._jQueryYr._jQuerygL; var a = z._jQueryio;
                            a[0] = 0, a[1] = -.1;
                            n._jQueryGT().getType() == I._jQueryc2 ? a[1] = -10 : a[1] = -.1; var h = z._jQuery0o;
                            this._jQueryJr(t, o, n, s, a, h); var l = Lt._jQuery92(a, h);
                            o._jQuerynb(t, n, s, s, 1, 0, 2), e._jQueryWr._jQueryfL = s[0], e._jQueryWr._jQuerygL = s[1], e._jQueryWr._jQueryB0 = e._jQueryYr._jQueryB0, e._jQueryWr._jQueryz0 = e._jQueryYr._jQueryz0, e._jQueryWr._jQueryqT = e._jQueryYr._jQueryqT - l * Lt._jQueryNS; var jQuery = n.getTotalScale();
                            e.setTotalScale_notForClient(jQuery * e._jQueryWr._jQueryB0); var u = n.getTotalOpacity();
                            e.setTotalOpacity(u * e.getInterpolatedOpacity()), e._jQueryWr.reflectX = e._jQueryYr.reflectX, e._jQueryWr.reflectY = e._jQueryYr.reflectY, e._jQueryhS(n._jQueryyo()) } else e._jQueryhS(!1) } } else e.setTotalScale_notForClient(e._jQueryYr._jQueryB0), e.setTotalOpacity(e.getInterpolatedOpacity()) }, z.prototype._jQuerynb = function(t, i, e, r, o, n, s) { this != i._jQueryGT() && console.log("### assert!! ### "); for (var _, a, h = i, l = null != h._jQueryWr ? h._jQueryWr : h._jQueryYr, jQuery = Math.sin(Lt._jQuerybS * l._jQueryqT), u = Math.cos(Lt._jQuerybS * l._jQueryqT), p = h.getTotalScale(), f = l.reflectX ? -1 : 1, c = l.reflectY ? -1 : 1, d = u * p * f, g = -jQuery * p * c, y = jQuery * p * f, m = u * p * c, T = l._jQueryfL, P = l._jQuerygL, S = o * s, v = n; v < S; v += s) _ = e[v], a = e[v + 1], r[v] = d * _ + g * a + T, r[v + 1] = y * _ + m * a + P }, z.prototype._jQueryJr = function(t, i, e, r, o, n) { i != e._jQueryGT() && console.log("### assert!! ### "); var s = z._jQueryLo;
                z._jQueryLo[0] = r[0], z._jQueryLo[1] = r[1], i._jQuerynb(t, e, s, s, 1, 0, 2); for (var _ = z._jQueryTo, a = z._jQueryPo, h = 1, l = 0; l < 10; l++) { if (a[0] = r[0] + h * o[0], a[1] = r[1] + h * o[1], i._jQuerynb(t, e, a, _, 1, 0, 2), _[0] -= s[0], _[1] -= s[1], 0 != _[0] || 0 != _[1]) return n[0] = _[0], void(n[1] = _[1]); if (a[0] = r[0] - h * o[0], a[1] = r[1] - h * o[1], i._jQuerynb(t, e, a, _, 1, 0, 2), _[0] -= s[0], _[1] -= s[1], 0 != _[0] || 0 != _[1]) return _[0] = -_[0], _[0] = -_[0], n[0] = _[0], void(n[1] = _[1]);
                    h *= .1 } at._jQueryso && console.log("_jQueryL0 to transform _jQuerySP\n") }, H.prototype = new _t, W.prototype = new M, W._jQueryur = -2, W._jQueryES = 500, W._jQuerywb = 2, W._jQuery8S = 3, W._jQueryos = 4, W._jQuery52 = W._jQueryES, W._jQueryR2 = W._jQueryES, W._jQuerySb = function(t) { for (var i = t.length - 1; i >= 0; --i) { var e = t[i];
                    e < W._jQuery52 ? W._jQuery52 = e : e > W._jQueryR2 && (W._jQueryR2 = e) } }, W._jQueryor = function() { return W._jQuery52 }, W._jQueryPr = function() { return W._jQueryR2 }, W.prototype._jQueryF0 = function(t) { this._jQuerygP = t._jQuerynP(), this._jQuerydr = t._jQuerynP(), this._jQueryGS = t._jQuerynP(), this._jQueryqb = t._jQuery6L(), this._jQueryLb = t._jQuerycS(), this._jQuerymS = t._jQueryTb(), t.getFormatVersion() >= G._jQueryT7 ? (this.clipID = t._jQuerynP(), this.clipIDList = this.convertClipIDForV2_11(this.clipID)) : this.clipIDList = null, W._jQuerySb(this._jQueryLb) }, W.prototype.getClipIDList = function() { return this.clipIDList }, W.prototype._jQueryNr = function(t, i) { if (i._jQueryIS[0] = !1, i._jQueryUs = v._jQueryZ2(t, this._jQueryGS, i._jQueryIS, this._jQueryLb), at._jQueryZs);
                else if (i._jQueryIS[0]) return;
                i._jQuery7s = v._jQuerybr(t, this._jQueryGS, i._jQueryIS, this._jQuerymS) }, W.prototype._jQuery2b = function(t) {}, W.prototype.getDrawDataID = function() { return this._jQuerygP }, W.prototype._jQueryj2 = function(t) { this._jQuerygP = t }, W.prototype.getOpacity = function(t, i) { return i._jQuery7s }, W.prototype._jQueryzS = function(t, i) { return i._jQueryUs }, W.prototype.getTargetBaseDataID = function() { return this._jQuerydr }, W.prototype._jQuerygs = function(t) { this._jQuerydr = t }, W.prototype._jQuery32 = function() { return null != this._jQuerydr && this._jQuerydr != yt._jQuery2o() }, W.prototype.getType = function() {}, j._jQuery42 = 0, j.prototype._jQuery1b = function() { return this._jQuery3S }, j.prototype.getDrawDataList = function() { return this._jQueryaS }, j.prototype._jQueryF0 = function(t) { this._jQueryNL = t._jQuerynP(), this._jQueryaS = t._jQuerynP(), this._jQuery3S = t._jQuerynP() }, j.prototype._jQuerykr = function(t) { t._jQueryZo(this._jQuery3S), t._jQueryxo(this._jQueryaS), this._jQuery3S = null, this._jQueryaS = null }, q.prototype = new i, q.loadModel = function(t) { var e = new q; return i._jQuery62(e, t), e }, q.loadModel = function(t) { var e = new q; return i._jQuery62(e, t), e }, q._jQueryto = function() { return new q }, q._jQueryer = function(t) { var i = new _jQuery5("../_jQuery_r/_jQueryt0/_jQueryRi/_jQuery_P._jQueryd"); if (0 == i.exists()) throw new _jQueryls("_jQueryt0 _jQuery_ _jQuery6 _jQueryUi :: " + i._jQueryPL()); for (var e = ["../_jQuery_r/_jQueryt0/_jQueryRi/_jQuery_P.512/_jQueryCP._jQuery1", "../_jQuery_r/_jQueryt0/_jQueryRi/_jQuery_P.512/_jQueryvP._jQuery1", "../_jQuery_r/_jQueryt0/_jQueryRi/_jQuery_P.512/_jQueryEP._jQuery1", "../_jQuery_r/_jQueryt0/_jQueryRi/_jQuery_P.512/_jQuerypP._jQuery1"], r = q.loadModel(i._jQuery3b()), o = 0; o < e.length; o++) { var n = new _jQuery5(e[o]); if (0 == n.exists()) throw new _jQueryls("_jQueryt0 _jQuery_ _jQuery6 _jQueryUi :: " + n._jQueryPL());
                    r.setTexture(o, _jQuerynL._jQuery_o(t, n._jQuery3b())) } return r }, q.prototype.setGL = function(t) { this._jQueryzo.setGL(t) }, q.prototype.setTransform = function(t) { this._jQueryzo.setTransform(t) }, q.prototype.draw = function() { this._jQuery5S.draw(this._jQueryzo) }, q.prototype._jQueryK2 = function() { this._jQueryzo._jQueryK2() }, q.prototype.setTexture = function(t, i) { null == this._jQueryzo && _._jQueryli("_jQueryYi for QT _jQueryki / _jQueryXS() is _jQuery6 _jQueryui!!"), this._jQueryzo.setTexture(t, i) }, q.prototype.setTexture = function(t, i) { null == this._jQueryzo && _._jQueryli("_jQueryYi for QT _jQueryki / _jQueryXS() is _jQuery6 _jQueryui!!"), this._jQueryzo.setTexture(t, i) }, q.prototype._jQueryRs = function() { return this._jQueryzo._jQueryRs() }, q.prototype._jQueryDs = function(t) { this._jQueryzo._jQueryDs(t) }, q.prototype.getDrawParam = function() { return this._jQueryzo }, J.prototype = new s, J._jQuerycs = "VISIBLE:", J._jQueryar = "LAYOUT:", J.MTN_PREFIX_FADEIN = "FADEIN:", J.MTN_PREFIX_FADEOUT = "FADEOUT:", J._jQueryCo = 0, J._jQuery1T = 1, J.loadMotion = function(t) { var i = k._jQueryC(t); return J.loadMotion(i) }, J.loadMotion = function(t) { t instanceof ArrayBuffer && (t = new DataView(t)); var i = new J,
                    e = [0],
                    r = t.byteLength;
                i._jQueryyT = 0; for (var o = 0; o < r; ++o) { var n = Q(t, o),
                        s = n.charCodeAt(0); if ("\n" != n && "\r" != n)
                        if ("#" != n)
                            if ("jQuery" != n) { if (97 <= s && s <= 122 || 65 <= s && s <= 90 || "_" == n) { for (var _ = o, a = -1; o < r && ("\r" != (n = Q(t, o)) && "\n" != n); ++o)
                                        if ("=" == n) { a = o; break } if (a >= 0) { var h = new B;
                                        O.startsWith(t, _, J._jQuerycs) ? (h._jQueryRP = B._jQueryhs, h._jQuery4P = O.createString(t, _, a - _)) : O.startsWith(t, _, J._jQueryar) ? (h._jQuery4P = O.createString(t, _ + 7, a - _ - 7), O.startsWith(t, _ + 7, "ANCHOR_X") ? h._jQueryRP = B._jQueryxs : O.startsWith(t, _ + 7, "ANCHOR_Y") ? h._jQueryRP = B._jQueryus : O.startsWith(t, _ + 7, "SCALE_X") ? h._jQueryRP = B._jQueryqs : O.startsWith(t, _ + 7, "SCALE_Y") ? h._jQueryRP = B._jQueryYs : O.startsWith(t, _ + 7, "X") ? h._jQueryRP = B._jQueryws : O.startsWith(t, _ + 7, "Y") && (h._jQueryRP = B._jQueryNs)) : (h._jQueryRP = B._jQueryFr, h._jQuery4P = O.createString(t, _, a - _)), i.motions.push(h); var l = 0,
                                            jQuery = []; for (o = a + 1; o < r && ("\r" != (n = Q(t, o)) && "\n" != n); ++o)
                                            if ("," != n && " " != n && "\t" != n) { var u = O._jQueryLS(t, r, o, e); if (e[0] > 0) { jQuery.push(u), l++; var p = e[0]; if (p < o) { console.log("_jQueryn0 _jQueryhi . @Live2DMotion loadMotion()\n"); break } o = p - 1 } } h._jQueryI0 = new Float32Array(jQuery), l > i._jQueryyT && (i._jQueryyT = l) } } } else { for (var _ = o, a = -1; o < r && ("\r" != (n = Q(t, o)) && "\n" != n); ++o)
                                    if ("=" == n) { a = o; break } var f = !1; if (a >= 0)
                                    for (a == _ + 4 && "f" == Q(t, _ + 1) && "p" == Q(t, _ + 2) && "s" == Q(t, _ + 3) && (f = !0), o = a + 1; o < r && ("\r" != (n = Q(t, o)) && "\n" != n); ++o)
                                        if ("," != n && " " != n && "\t" != n) { var u = O._jQueryLS(t, r, o, e);
                                            e[0] > 0 && f && 5 < u && u < 121 && (i._jQueryD0 = u), o = e[0] } for (; o < r && ("\n" != Q(t, o) && "\r" != Q(t, o)); ++o); } else
                        for (; o < r && ("\n" != Q(t, o) && "\r" != Q(t, o)); ++o); } return i._jQueryrr = 1e3 * i._jQueryyT / i._jQueryD0 | 0, i }, J.prototype.getDurationMSec = function() { return this._jQueryE ? -1 : this._jQueryrr }, J.prototype.getLoopDurationMSec = function() { return this._jQueryrr }, J.prototype.dump = function() { for (var t = 0; t < this.motions.length; t++) { var i = this.motions[t];
                    console.log("_jQuerywL[%s] [%d]. ", i._jQuery4P, i._jQueryI0.length); for (var e = 0; e < i._jQueryI0.length && e < 10; e++) console.log("%5.2f ,", i._jQueryI0[e]);
                    console.log("\n") } }, J.prototype.updateParamExe = function(t, i, e, r) { for (var o = i - r._jQueryz2, n = o * this._jQueryD0 / 1e3, s = 0 | n, _ = n - s, a = 0; a < this.motions.length; a++) { var h = this.motions[a],
                        l = h._jQueryI0.length,
                        jQuery = h._jQuery4P; if (h._jQueryRP == B._jQueryhs) { var u = h._jQueryI0[s >= l ? l - 1 : s];
                        t.setParamFloat(jQuery, u) } else if (B._jQueryws <= h._jQueryRP && h._jQueryRP <= B._jQueryYs);
                    else { var p, f = t.getParamIndex(jQuery),
                            c = t.getModelContext(),
                            d = c.getParamMax(f),
                            g = c.getParamMin(f),
                            y = .4 * (d - g),
                            m = c.getParamFloat(f),
                            T = h._jQueryI0[s >= l ? l - 1 : s],
                            P = h._jQueryI0[s + 1 >= l ? l - 1 : s + 1];
                        p = T < P && P - T > y || T > P && T - P > y ? T : T + (P - T) * _; var S = m + (p - m) * e;
                        t.setParamFloat(jQuery, S) } } s >= this._jQueryyT && (this._jQueryE ? (r._jQueryz2 = i, this.loopFadeIn && (r._jQuerybs = i)) : r._jQuery9L = !0), this._jQueryeP = e }, J.prototype._jQueryr0 = function() { return this._jQueryE }, J.prototype._jQueryaL = function(t) { this._jQueryE = t }, J.prototype._jQueryS0 = function() { return this._jQueryD0 }, J.prototype._jQueryU0 = function(t) { this._jQueryD0 = t }, J.prototype.isLoopFadeIn = function() { return this.loopFadeIn }, J.prototype.setLoopFadeIn = function(t) { this.loopFadeIn = t }, N.prototype.clear = function() { this.size = 0 }, N.prototype.add = function(t) { if (this._jQueryP.length <= this.size) { var i = new Float32Array(2 * this.size);
                    x._jQueryjT(this._jQueryP, 0, i, 0, this.size), this._jQueryP = i } this._jQueryP[this.size++] = t }, N.prototype._jQueryBL = function() { var t = new Float32Array(this.size); return x._jQueryjT(this._jQueryP, 0, t, 0, this.size), t }, B._jQueryFr = 0, B._jQueryhs = 1, B._jQueryws = 100, B._jQueryNs = 101, B._jQueryxs = 102, B._jQueryus = 103, B._jQueryqs = 104, B._jQueryYs = 105, Z.prototype = new I, Z._jQuerygT = new Array, Z.prototype._jQueryzP = function() { this._jQueryGS = new D, this._jQueryGS._jQueryzP() }, Z.prototype._jQueryF0 = function(t) { I.prototype._jQueryF0.call(this, t), this._jQueryA = t._jQuery6L(), this._jQueryo = t._jQuery6L(), this._jQueryGS = t._jQuerynP(), this._jQueryEo = t._jQuerynP(), I.prototype.readV2_opacity.call(this, t) }, Z.prototype.init = function(t) { var i = new K(this),
                    e = (this._jQueryo + 1) * (this._jQueryA + 1); return null != i._jQueryCr && (i._jQueryCr = null), i._jQueryCr = new Float32Array(2 * e), null != i._jQueryhr && (i._jQueryhr = null), this._jQuery32() ? i._jQueryhr = new Float32Array(2 * e) : i._jQueryhr = null, i }, Z.prototype._jQueryNr = function(t, i) { var e = i; if (this._jQueryGS._jQueryUr(t)) { var r = this._jQueryVT(),
                        o = Z._jQuerygT;
                    o[0] = !1, v._jQueryVr(t, this._jQueryGS, o, r, this._jQueryEo, e._jQueryCr, 0, 2), i._jQueryIb(o[0]), this.interpolateOpacity(t, this._jQueryGS, i, o) } }, Z.prototype._jQuery2b = function(t, i) { var e = i; if (e._jQueryhS(!0), this._jQuery32()) { var r = this.getTargetBaseDataID(); if (e._jQuery8r == I._jQueryur && (e._jQuery8r = t.getBaseDataIndex(r)), e._jQuery8r < 0) at._jQueryso && _._jQueryli("_jQueryL _jQuery0P _jQueryG :: %s", r), e._jQueryhS(!1);
                    else { var o = t.getBaseData(e._jQuery8r),
                            n = t._jQueryq2(e._jQuery8r); if (null != o && n._jQueryyo()) { var s = n.getTotalScale();
                            e.setTotalScale_notForClient(s); var a = n.getTotalOpacity();
                            e.setTotalOpacity(a * e.getInterpolatedOpacity()), o._jQuerynb(t, n, e._jQueryCr, e._jQueryhr, this._jQueryVT(), 0, 2), e._jQueryhS(!0) } else e._jQueryhS(!1) } } else e.setTotalOpacity(e.getInterpolatedOpacity()) }, Z.prototype._jQuerynb = function(t, i, e, r, o, n, s) { var _ = i,
                    a = null != _._jQueryhr ? _._jQueryhr : _._jQueryCr;
                Z.transformPoints_sdk2(e, r, o, n, s, a, this._jQueryo, this._jQueryA) }, Z.transformPoints_sdk2 = function(i, e, r, o, n, s, _, a) { for (var h, l, jQuery, u = r * n, p = 0, f = 0, c = 0, d = 0, g = 0, y = 0, m = !1, T = o; T < u; T += n) { var P, S, v, L; if (v = i[T], L = i[T + 1], P = v * _, S = L * a, P < 0 || S < 0 || _ <= P || a <= S) { var M = _ + 1; if (!m) { m = !0, p = .25 * (s[2 * (0 + 0 * M)] + s[2 * (_ + 0 * M)] + s[2 * (0 + a * M)] + s[2 * (_ + a * M)]), f = .25 * (s[2 * (0 + 0 * M) + 1] + s[2 * (_ + 0 * M) + 1] + s[2 * (0 + a * M) + 1] + s[2 * (_ + a * M) + 1]); var E = s[2 * (_ + a * M)] - s[2 * (0 + 0 * M)],
                                A = s[2 * (_ + a * M) + 1] - s[2 * (0 + 0 * M) + 1],
                                I = s[2 * (_ + 0 * M)] - s[2 * (0 + a * M)],
                                x = s[2 * (_ + 0 * M) + 1] - s[2 * (0 + a * M) + 1];
                            c = .5 * (E + I), d = .5 * (A + x), g = .5 * (E - I), y = .5 * (A - x), p -= .5 * (c + g), f -= .5 * (d + y) } if (-2 < v && v < 3 && -2 < L && L < 3)
                            if (v <= 0)
                                if (L <= 0) { var w = s[2 * (0 + 0 * M)],
                                        O = s[2 * (0 + 0 * M) + 1],
                                        D = p - 2 * c,
                                        R = f - 2 * d,
                                        b = p - 2 * g,
                                        F = f - 2 * y,
                                        C = p - 2 * c - 2 * g,
                                        N = f - 2 * d - 2 * y,
                                        B = .5 * (v - -2),
                                        U = .5 * (L - -2);
                                    B + U <= 1 ? (e[T] = C + (b - C) * B + (D - C) * U, e[T + 1] = N + (F - N) * B + (R - N) * U) : (e[T] = w + (D - w) * (1 - B) + (b - w) * (1 - U), e[T + 1] = O + (R - O) * (1 - B) + (F - O) * (1 - U)) } else if (L >= 1) { var b = s[2 * (0 + a * M)],
                                F = s[2 * (0 + a * M) + 1],
                                C = p - 2 * c + 1 * g,
                                N = f - 2 * d + 1 * y,
                                w = p + 3 * g,
                                O = f + 3 * y,
                                D = p - 2 * c + 3 * g,
                                R = f - 2 * d + 3 * y,
                                B = .5 * (v - -2),
                                U = .5 * (L - 1);
                            B + U <= 1 ? (e[T] = C + (b - C) * B + (D - C) * U, e[T + 1] = N + (F - N) * B + (R - N) * U) : (e[T] = w + (D - w) * (1 - B) + (b - w) * (1 - U), e[T + 1] = O + (R - O) * (1 - B) + (F - O) * (1 - U)) } else { var G = 0 | S;
                            G == a && (G = a - 1); var B = .5 * (v - -2),
                                U = S - G,
                                Y = G / a,
                                k = (G + 1) / a,
                                b = s[2 * (0 + G * M)],
                                F = s[2 * (0 + G * M) + 1],
                                w = s[2 * (0 + (G + 1) * M)],
                                O = s[2 * (0 + (G + 1) * M) + 1],
                                C = p - 2 * c + Y * g,
                                N = f - 2 * d + Y * y,
                                D = p - 2 * c + k * g,
                                R = f - 2 * d + k * y;
                            B + U <= 1 ? (e[T] = C + (b - C) * B + (D - C) * U, e[T + 1] = N + (F - N) * B + (R - N) * U) : (e[T] = w + (D - w) * (1 - B) + (b - w) * (1 - U), e[T + 1] = O + (R - O) * (1 - B) + (F - O) * (1 - U)) } else if (1 <= v)
                            if (L <= 0) { var D = s[2 * (_ + 0 * M)],
                                    R = s[2 * (_ + 0 * M) + 1],
                                    w = p + 3 * c,
                                    O = f + 3 * d,
                                    C = p + 1 * c - 2 * g,
                                    N = f + 1 * d - 2 * y,
                                    b = p + 3 * c - 2 * g,
                                    F = f + 3 * d - 2 * y,
                                    B = .5 * (v - 1),
                                    U = .5 * (L - -2);
                                B + U <= 1 ? (e[T] = C + (b - C) * B + (D - C) * U, e[T + 1] = N + (F - N) * B + (R - N) * U) : (e[T] = w + (D - w) * (1 - B) + (b - w) * (1 - U), e[T + 1] = O + (R - O) * (1 - B) + (F - O) * (1 - U)) } else if (L >= 1) { var C = s[2 * (_ + a * M)],
                                N = s[2 * (_ + a * M) + 1],
                                b = p + 3 * c + 1 * g,
                                F = f + 3 * d + 1 * y,
                                D = p + 1 * c + 3 * g,
                                R = f + 1 * d + 3 * y,
                                w = p + 3 * c + 3 * g,
                                O = f + 3 * d + 3 * y,
                                B = .5 * (v - 1),
                                U = .5 * (L - 1);
                            B + U <= 1 ? (e[T] = C + (b - C) * B + (D - C) * U, e[T + 1] = N + (F - N) * B + (R - N) * U) : (e[T] = w + (D - w) * (1 - B) + (b - w) * (1 - U), e[T + 1] = O + (R - O) * (1 - B) + (F - O) * (1 - U)) } else { var G = 0 | S;
                            G == a && (G = a - 1); var B = .5 * (v - 1),
                                U = S - G,
                                Y = G / a,
                                k = (G + 1) / a,
                                C = s[2 * (_ + G * M)],
                                N = s[2 * (_ + G * M) + 1],
                                D = s[2 * (_ + (G + 1) * M)],
                                R = s[2 * (_ + (G + 1) * M) + 1],
                                b = p + 3 * c + Y * g,
                                F = f + 3 * d + Y * y,
                                w = p + 3 * c + k * g,
                                O = f + 3 * d + k * y;
                            B + U <= 1 ? (e[T] = C + (b - C) * B + (D - C) * U, e[T + 1] = N + (F - N) * B + (R - N) * U) : (e[T] = w + (D - w) * (1 - B) + (b - w) * (1 - U), e[T + 1] = O + (R - O) * (1 - B) + (F - O) * (1 - U)) } else if (L <= 0) { var V = 0 | P;
                            V == _ && (V = _ - 1); var B = P - V,
                                U = .5 * (L - -2),
                                X = V / _,
                                z = (V + 1) / _,
                                D = s[2 * (V + 0 * M)],
                                R = s[2 * (V + 0 * M) + 1],
                                w = s[2 * (V + 1 + 0 * M)],
                                O = s[2 * (V + 1 + 0 * M) + 1],
                                C = p + X * c - 2 * g,
                                N = f + X * d - 2 * y,
                                b = p + z * c - 2 * g,
                                F = f + z * d - 2 * y;
                            B + U <= 1 ? (e[T] = C + (b - C) * B + (D - C) * U, e[T + 1] = N + (F - N) * B + (R - N) * U) : (e[T] = w + (D - w) * (1 - B) + (b - w) * (1 - U), e[T + 1] = O + (R - O) * (1 - B) + (F - O) * (1 - U)) } else if (L >= 1) { var V = 0 | P;
                            V == _ && (V = _ - 1); var B = P - V,
                                U = .5 * (L - 1),
                                X = V / _,
                                z = (V + 1) / _,
                                C = s[2 * (V + a * M)],
                                N = s[2 * (V + a * M) + 1],
                                b = s[2 * (V + 1 + a * M)],
                                F = s[2 * (V + 1 + a * M) + 1],
                                D = p + X * c + 3 * g,
                                R = f + X * d + 3 * y,
                                w = p + z * c + 3 * g,
                                O = f + z * d + 3 * y;
                            B + U <= 1 ? (e[T] = C + (b - C) * B + (D - C) * U, e[T + 1] = N + (F - N) * B + (R - N) * U) : (e[T] = w + (D - w) * (1 - B) + (b - w) * (1 - U), e[T + 1] = O + (R - O) * (1 - B) + (F - O) * (1 - U)) } else t.err.printf("_jQueryli calc : %.4f , %.4f\t\t\t\t\t@@BDBoxGrid\n", v, L);
                        else e[T] = p + v * c + L * g, e[T + 1] = f + v * d + L * y } else l = P - (0 | P), jQuery = S - (0 | S), h = 2 * ((0 | P) + (0 | S) * (_ + 1)), l + jQuery < 1 ? (e[T] = s[h] * (1 - l - jQuery) + s[h + 2] * l + s[h + 2 * (_ + 1)] * jQuery, e[T + 1] = s[h + 1] * (1 - l - jQuery) + s[h + 3] * l + s[h + 2 * (_ + 1) + 1] * jQuery) : (e[T] = s[h + 2 * (_ + 1) + 2] * (l - 1 + jQuery) + s[h + 2 * (_ + 1)] * (1 - l) + s[h + 2] * (1 - jQuery), e[T + 1] = s[h + 2 * (_ + 1) + 3] * (l - 1 + jQuery) + s[h + 2 * (_ + 1) + 1] * (1 - l) + s[h + 3] * (1 - jQuery)) } }, Z.prototype.transformPoints_sdk1 = function(t, i, e, r, o, n, s) { for (var _, a, h, l, jQuery, u, p, f = i, c = this._jQueryo, d = this._jQueryA, g = o * s, y = null != f._jQueryhr ? f._jQueryhr : f._jQueryCr, m = n; m < g; m += s) at._jQueryts ? (_ = e[m], a = e[m + 1], _ < 0 ? _ = 0 : _ > 1 && (_ = 1), a < 0 ? a = 0 : a > 1 && (a = 1), _ *= c, a *= d, h = 0 | _, l = 0 | a, h > c - 1 && (h = c - 1), l > d - 1 && (l = d - 1), u = _ - h, p = a - l, jQuery = 2 * (h + l * (c + 1))) : (_ = e[m] * c, a = e[m + 1] * d, u = _ - (0 | _), p = a - (0 | a), jQuery = 2 * ((0 | _) + (0 | a) * (c + 1))), u + p < 1 ? (r[m] = y[jQuery] * (1 - u - p) + y[jQuery + 2] * u + y[jQuery + 2 * (c + 1)] * p, r[m + 1] = y[jQuery + 1] * (1 - u - p) + y[jQuery + 3] * u + y[jQuery + 2 * (c + 1) + 1] * p) : (r[m] = y[jQuery + 2 * (c + 1) + 2] * (u - 1 + p) + y[jQuery + 2 * (c + 1)] * (1 - u) + y[jQuery + 2] * (1 - p), r[m + 1] = y[jQuery + 2 * (c + 1) + 3] * (u - 1 + p) + y[jQuery + 2 * (c + 1) + 1] * (1 - u) + y[jQuery + 3] * (1 - p)) }, Z.prototype._jQueryVT = function() { return (this._jQueryo + 1) * (this._jQueryA + 1) }, Z.prototype.getType = function() { return I._jQuery_b }, K.prototype = new _t, tt._jQuery42 = 0, tt.prototype._jQueryzP = function() { this._jQuery3S = new Array, this._jQueryaS = new Array }, tt.prototype._jQueryF0 = function(t) { this._jQueryg0 = t._jQuery8L(), this.visible = t._jQuery8L(), this._jQueryNL = t._jQuerynP(), this._jQuery3S = t._jQuerynP(), this._jQueryaS = t._jQuerynP() }, tt.prototype.init = function(t) { var i = new it(this); return i.setPartsOpacity(this.isVisible() ? 1 : 0), i }, tt.prototype._jQuery6o = function(t) { if (null == this._jQuery3S) throw new Error("_jQuery3S _jQuery6 _jQueryWo@_jQuery6o");
                this._jQuery3S.push(t) }, tt.prototype._jQuery3o = function(t) { if (null == this._jQueryaS) throw new Error("_jQueryaS _jQuery6 _jQueryWo@_jQuery3o");
                this._jQueryaS.push(t) }, tt.prototype._jQueryZo = function(t) { this._jQuery3S = t }, tt.prototype._jQueryxo = function(t) { this._jQueryaS = t }, tt.prototype.isVisible = function() { return this.visible }, tt.prototype._jQueryuL = function() { return this._jQueryg0 }, tt.prototype._jQueryKP = function(t) { this.visible = t }, tt.prototype._jQueryET = function(t) { this._jQueryg0 = t }, tt.prototype.getBaseData = function() { return this._jQuery3S }, tt.prototype.getDrawData = function() { return this._jQueryaS }, tt.prototype._jQueryp2 = function() { return this._jQueryNL }, tt.prototype._jQueryob = function(t) { this._jQueryNL = t }, tt.prototype.getPartsID = function() { return this._jQueryNL }, tt.prototype._jQueryMP = function(t) { this._jQueryNL = t }, it.prototype = new jQuery, it.prototype.getPartsOpacity = function() { return this._jQueryVS }, it.prototype.setPartsOpacity = function(t) { this._jQueryVS = t }, et._jQueryL7 = function() { u._jQuery27(), yt._jQuery27(), b._jQuery27(), l._jQuery27() }, et.prototype.toString = function() { return this.id }, rt.prototype._jQueryF0 = function(t) {}, ot.prototype._jQuery1s = function() { return this._jQuery4S }, ot.prototype._jQueryzP = function() { this._jQuery4S = new Array }, ot.prototype._jQueryF0 = function(t) { this._jQuery4S = t._jQuerynP() }, ot.prototype._jQueryKs = function(t) { this._jQuery4S.push(t) }, nt.tr = new gt, nt._jQuery50 = new gt, nt._jQueryTi = new Array(0, 0), nt._jQueryPi = new Array(0, 0), nt._jQueryB = new Array(0, 0), nt.prototype._jQuerylP = function(t, i, e, r) { this.viewport = new Array(t, i, e, r) }, nt.prototype._jQuerybL = function() { this.context.save(); var t = this.viewport;
                null != t && (this.context.beginPath(), this.context._jQueryLi(t[0], t[1], t[2], t[3]), this.context.clip()) }, nt.prototype._jQueryei = function() { this.context.restore() }, nt.prototype.drawElements = function(t, i, e, r, o, n, s, a) { try { o != this._jQueryQo && (this._jQueryQo = o, this.context.globalAlpha = o); for (var h = i.length, l = t.width, jQuery = t.height, u = this.context, p = this._jQueryxP, f = this._jQueryuP, c = this._jQuery6r, d = this._jQuery3r, g = nt.tr, y = nt._jQueryTi, m = nt._jQueryPi, T = nt._jQueryB, P = 0; P < h; P += 3) { u.save(); var S = i[P],
                            v = i[P + 1],
                            L = i[P + 2],
                            M = p + c * e[2 * S],
                            E = f + d * e[2 * S + 1],
                            A = p + c * e[2 * v],
                            I = f + d * e[2 * v + 1],
                            x = p + c * e[2 * L],
                            w = f + d * e[2 * L + 1];
                        s && (s._jQueryPS(M, E, T), M = T[0], E = T[1], s._jQueryPS(A, I, T), A = T[0], I = T[1], s._jQueryPS(x, w, T), x = T[0], w = T[1]); var O = l * r[2 * S],
                            D = jQuery - jQuery * r[2 * S + 1],
                            R = l * r[2 * v],
                            b = jQuery - jQuery * r[2 * v + 1],
                            F = l * r[2 * L],
                            C = jQuery - jQuery * r[2 * L + 1],
                            N = Math.atan2(b - D, R - O),
                            B = Math.atan2(I - E, A - M),
                            U = A - M,
                            G = I - E,
                            Y = Math.sqrt(U * U + G * G),
                            k = R - O,
                            V = b - D,
                            X = Math.sqrt(k * k + V * V),
                            z = Y / X;
                        It._jQueryni(F, C, O, D, R - O, b - D, -(b - D), R - O, y), It._jQueryni(x, w, M, E, A - M, I - E, -(I - E), A - M, m); var H = (m[0] - y[0]) / y[1],
                            W = Math.min(O, R, F),
                            j = Math.max(O, R, F),
                            q = Math.min(D, b, C),
                            J = Math.max(D, b, C),
                            Q = Math.floor(W),
                            Z = Math.floor(q),
                            K = Math.ceil(j),
                            tt = Math.ceil(J);
                        g.identity(), g.translate(M, E), g.rotate(B), g.scale(1, m[1] / y[1]), g.shear(H, 0), g.scale(z, z), g.rotate(-N), g.translate(-O, -D), g.setContext(u); if (n || (n = 1.2), at.IGNORE_EXPAND && (n = 0), at.USE_CACHED_POLYGON_IMAGE) { var it = a._jQuerye0; if (it.gl_cacheImage = it.gl_cacheImage || {}, !it.gl_cacheImage[P]) { var et = nt.createCanvas(K - Q, tt - Z);
                                at.DEBUG_DATA.LDGL_CANVAS_MB = at.DEBUG_DATA.LDGL_CANVAS_MB || 0, at.DEBUG_DATA.LDGL_CANVAS_MB += (K - Q) * (tt - Z) * 4; var rt = et.getContext("2d");
                                rt.translate(-Q, -Z), nt.clip(rt, g, n, Y, O, D, R, b, F, C, M, E, A, I, x, w), rt.drawImage(t, 0, 0), it.gl_cacheImage[P] = { cacheCanvas: et, cacheContext: rt } } u.drawImage(it.gl_cacheImage[P].cacheCanvas, Q, Z) } else at.IGNORE_CLIP || nt.clip(u, g, n, Y, O, D, R, b, F, C, M, E, A, I, x, w), at.USE_ADJUST_TRANSLATION && (W = 0, j = l, q = 0, J = jQuery), u.drawImage(t, W, q, j - W, J - q, W, q, j - W, J - q);
                        u.restore() } } catch (t) { _._jQueryRb(t) } }, nt.clip = function(t, i, e, r, o, n, s, _, a, h, l, jQuery, u, p, f, c) { e > .02 ? nt.expandClip(t, i, e, r, l, jQuery, u, p, f, c) : nt.clipWithTransform(t, null, o, n, s, _, a, h) }, nt.expandClip = function(t, i, e, r, o, n, s, _, a, h) { var l = s - o,
                    jQuery = _ - n,
                    u = a - o,
                    p = h - n,
                    f = l * p - jQuery * u > 0 ? e : -e,
                    c = -jQuery,
                    d = l,
                    g = a - s,
                    y = h - _,
                    m = -y,
                    T = g,
                    P = Math.sqrt(g * g + y * y),
                    S = -p,
                    v = u,
                    L = Math.sqrt(u * u + p * p),
                    M = o - f * c / r,
                    E = n - f * d / r,
                    A = s - f * c / r,
                    I = _ - f * d / r,
                    x = s - f * m / P,
                    w = _ - f * T / P,
                    O = a - f * m / P,
                    D = h - f * T / P,
                    R = o + f * S / L,
                    b = n + f * v / L,
                    F = a + f * S / L,
                    C = h + f * v / L,
                    N = nt._jQuery50; return null != i._jQueryP2(N) && (nt.clipWithTransform(t, N, M, E, A, I, x, w, O, D, F, C, R, b), !0) }, nt.clipWithTransform = function(t, i, e, r, o, n, s, a) { if (arguments.length < 7) return void _._jQueryli("err : @LDGL.clip()"); if (!(arguments[1] instanceof gt)) return void _._jQueryli("err : a[0] is _jQuery6 LDTransform @LDGL.clip()"); var h = nt._jQueryB,
                    l = i,
                    jQuery = arguments; if (t.beginPath(), l) { l._jQueryPS(jQuery[2], jQuery[3], h), t.moveTo(h[0], h[1]); for (var u = 4; u < jQuery.length; u += 2) l._jQueryPS(jQuery[u], jQuery[u + 1], h), t.lineTo(h[0], h[1]) } else { t.moveTo(jQuery[2], jQuery[3]); for (var u = 4; u < jQuery.length; u += 2) t.lineTo(jQuery[u], jQuery[u + 1]) } t.clip() }, nt.createCanvas = function(t, i) { var e = document.createElement("canvas"); return e.setAttribute("width", t), e.setAttribute("height", i), e || _._jQueryli("err : " + e), e }, nt.dumpValues = function() { for (var t = "", i = 0; i < arguments.length; i++) t += "[" + i + "]= " + arguments[i].toFixed(3) + " , ";
                console.log(t) }, st.prototype._jQueryF0 = function(t) { this._jQueryTT = t._jQuery_T(), this._jQueryLT = t._jQuery_T(), this._jQueryFS = t._jQuery_T(), this._jQuerywL = t._jQuerynP() }, st.prototype.getMinValue = function() { return this._jQueryTT }, st.prototype.getMaxValue = function() { return this._jQueryLT }, st.prototype.getDefaultValue = function() { return this._jQueryFS }, st.prototype.getParamID = function() { return this._jQuerywL }, _t.prototype._jQueryyo = function() { return this._jQueryAT && !this._jQueryJS }, _t.prototype._jQueryhS = function(t) { this._jQueryAT = t }, _t.prototype._jQueryGT = function() { return this._jQuerye0 }, _t.prototype._jQueryl2 = function(t) { this._jQueryIP = t }, _t.prototype.getPartsIndex = function() { return this._jQueryIP }, _t.prototype._jQueryx2 = function() { return this._jQueryJS }, _t.prototype._jQueryIb = function(t) { this._jQueryJS = t }, _t.prototype.getTotalScale = function() { return this.totalScale }, _t.prototype.setTotalScale_notForClient = function(t) { this.totalScale = t }, _t.prototype.getInterpolatedOpacity = function() { return this._jQuery7s }, _t.prototype.setInterpolatedOpacity = function(t) { this._jQuery7s = t }, _t.prototype.getTotalOpacity = function(t) { return this.totalOpacity }, _t.prototype.setTotalOpacity = function(t) { this.totalOpacity = t }, at._jQuery2s = "2.1.00_1", at._jQueryKr = 201001e3, at._jQuerysP = !0, at._jQueryso = !0, at._jQuerycb = !1, at._jQuery3T = !0, at._jQueryTs = !0, at._jQueryfb = !0, at._jQueryts = !0, at.L2D_DEFORMER_EXTEND = !0, at._jQueryWb = !1;
            at._jQueryyr = !1, at._jQueryZs = !1, at.L2D_NO_ERROR = 0, at._jQueryi7 = 1e3, at._jQuery9s = 1001, at._jQueryes = 1100, at._jQueryr7 = 2e3, at._jQuery07 = 2001, at._jQueryb7 = 2002, at._jQueryH7 = 4e3, at.L2D_COLOR_BLEND_MODE_MULT = 0, at.L2D_COLOR_BLEND_MODE_ADD = 1, at.L2D_COLOR_BLEND_MODE_INTERPOLATE = 2, at._jQuery6b = !0, at._jQuerycT = 0, at.clippingMaskBufferSize = 256, at.glContext = new Array, at.frameBuffers = new Array, at.fTexture = new Array, at.IGNORE_CLIP = !1, at.IGNORE_EXPAND = !1, at.EXPAND_W = 2, at.USE_ADJUST_TRANSLATION = !0, at.USE_CANVAS_TRANSFORM = !0, at.USE_CACHED_POLYGON_IMAGE = !1, at.DEBUG_DATA = {}, at.PROFILE_IOS_SPEED = { PROFILE_NAME: "iOS Speed", USE_ADJUST_TRANSLATION: !0, USE_CACHED_POLYGON_IMAGE: !0, EXPAND_W: 4 }, at.PROFILE_IOS_QUALITY = { PROFILE_NAME: "iOS HiQ", USE_ADJUST_TRANSLATION: !0, USE_CACHED_POLYGON_IMAGE: !1, EXPAND_W: 2 }, at.PROFILE_IOS_DEFAULT = at.PROFILE_IOS_QUALITY, at.PROFILE_ANDROID = { PROFILE_NAME: "Android", USE_ADJUST_TRANSLATION: !1, USE_CACHED_POLYGON_IMAGE: !1, EXPAND_W: 2 }, at.PROFILE_DESKTOP = { PROFILE_NAME: "Desktop", USE_ADJUST_TRANSLATION: !1, USE_CACHED_POLYGON_IMAGE: !1, EXPAND_W: 2 }, at.initProfile = function() { Et.isIOS() ? at.setupProfile(at.PROFILE_IOS_DEFAULT) : Et.isAndroid() ? at.setupProfile(at.PROFILE_ANDROID) : at.setupProfile(at.PROFILE_DESKTOP) }, at.setupProfile = function(t, i) { if ("number" == typeof t) switch (t) {
                    case 9901:
                        t = at.PROFILE_IOS_SPEED; break;
                    case 9902:
                        t = at.PROFILE_IOS_QUALITY; break;
                    case 9903:
                        t = at.PROFILE_IOS_DEFAULT; break;
                    case 9904:
                        t = at.PROFILE_ANDROID; break;
                    case 9905:
                        t = at.PROFILE_DESKTOP; break;
                    default:
                        alert("profile _jQuery6 _jQueryUi : " + t) } arguments.length < 2 && (i = !0), i && console.log("profile : " + t.PROFILE_NAME); for (var e in t) at[e] = t[e], i && console.log("  [" + e + "] = " + t[e]) }, at.init = function() { if (at._jQuery6b) { console.log("Live2D %s", at._jQuery2s), at._jQuery6b = !1;!0, at.initProfile() } }, at.getVersionStr = function() { return at._jQuery2s }, at.getVersionNo = function() { return at._jQueryKr }, at._jQuerysT = function(t) { at._jQuerycT = t }, at.getError = function() { var t = at._jQuerycT; return at._jQuerycT = 0, t }, at.dispose = function() { at.glContext = [], at.frameBuffers = [], at.fTexture = [] }, at.setGL = function(t, i) { var e = i || 0;
                at.glContext[e] = t }, at.getGL = function(t) { return at.glContext[t] }, at.setClippingMaskBufferSize = function(t) { at.clippingMaskBufferSize = t }, at.getClippingMaskBufferSize = function() { return at.clippingMaskBufferSize }, at.deleteBuffer = function(t) { at.getGL(t).deleteFramebuffer(at.frameBuffers[t].framebuffer), delete at.frameBuffers[t], delete at.glContext[t] }, ht._jQueryr2 = function(t) { return t < 0 ? 0 : t > 1 ? 1 : .5 - .5 * Math.cos(t * Lt.PI_F) }, lt._jQueryfr = -1, lt.prototype.toString = function() { return this._jQueryib }, jQueryt.prototype = new W, jQueryt._jQuery42 = 0, jQueryt._jQueryOs = 30, jQueryt._jQueryms = 0, jQueryt._jQueryns = 1, jQueryt._jQuery_s = 2, jQueryt._jQuerygT = new Array, jQueryt.prototype._jQuery_S = function(t) { this._jQueryLP = t }, jQueryt.prototype.getTextureNo = function() { return this._jQueryLP }, jQueryt.prototype._jQueryZL = function() { return this._jQueryQi }, jQueryt.prototype._jQueryH2 = function() { return this._jQueryJP }, jQueryt.prototype.getNumPoints = function() { return this._jQueryd0 }, jQueryt.prototype.getType = function() { return W._jQuerywb }, jQueryt.prototype._jQueryB2 = function(t, i, e) { var r = i,
                    o = null != r._jQueryhr ? r._jQueryhr : r._jQueryCr; switch (U._jQuerydo) {
                    default:
                    case U._jQueryMs:
                        throw new Error("_jQueryL _jQueryro ");
                    case U._jQueryQs:
                        for (var n = this._jQueryd0 - 1; n >= 0; --n) o[n * U._jQueryNo + 4] = e } }, jQueryt.prototype._jQueryzP = function() { this._jQueryGS = new D, this._jQueryGS._jQueryzP() }, jQueryt.prototype._jQueryF0 = function(t) { W.prototype._jQueryF0.call(this, t), this._jQueryLP = t._jQuery6L(), this._jQueryd0 = t._jQuery6L(), this._jQueryYo = t._jQuery6L(); var i = t._jQuerynP();
                this._jQueryBP = new Int16Array(3 * this._jQueryYo); for (var e = 3 * this._jQueryYo - 1; e >= 0; --e) this._jQueryBP[e] = i[e]; if (this._jQueryEo = t._jQuerynP(), this._jQueryQi = t._jQuerynP(), t.getFormatVersion() >= G._jQuerys7) { if (this._jQueryJP = t._jQuery6L(), 0 != this._jQueryJP) { if (0 != (1 & this._jQueryJP)) { var r = t._jQuery6L();
                            null == this._jQuery5P && (this._jQuery5P = new Object), this._jQuery5P._jQueryHb = parseInt(r) } 0 != (this._jQueryJP & jQueryt._jQueryOs) ? this._jQuery6s = (this._jQueryJP & jQueryt._jQueryOs) >> 1 : this._jQuery6s = jQueryt._jQueryms, 0 != (32 & this._jQueryJP) && (this.culling = !1) } } else this._jQueryJP = 0 }, jQueryt.prototype.init = function(t) { var i = new ut(this),
                    e = this._jQueryd0 * U._jQueryNo,
                    r = this._jQuery32(); switch (null != i._jQueryCr && (i._jQueryCr = null), i._jQueryCr = new Float32Array(e), null != i._jQueryhr && (i._jQueryhr = null), i._jQueryhr = r ? new Float32Array(e) : null, U._jQuerydo) {
                    default:
                    case U._jQueryMs:
                        if (U._jQueryLs)
                            for (var o = this._jQueryd0 - 1; o >= 0; --o) { var n = o << 1;
                                this._jQueryQi[n + 1] = 1 - this._jQueryQi[n + 1] }
                        break;
                    case U._jQueryQs:
                        for (var o = this._jQueryd0 - 1; o >= 0; --o) { var n = o << 1,
                                s = o * U._jQueryNo,
                                _ = this._jQueryQi[n],
                                a = this._jQueryQi[n + 1];
                            i._jQueryCr[s] = _, i._jQueryCr[s + 1] = a, i._jQueryCr[s + 4] = 0, r && (i._jQueryhr[s] = _, i._jQueryhr[s + 1] = a, i._jQueryhr[s + 4] = 0) } } return i }, jQueryt.prototype._jQueryNr = function(t, i) { var e = i; if (this != e._jQueryGT() && console.log("### assert!! ### "), this._jQueryGS._jQueryUr(t) && (W.prototype._jQueryNr.call(this, t, e), !e._jQueryIS[0])) { var r = jQueryt._jQuerygT;
                    r[0] = !1, v._jQueryVr(t, this._jQueryGS, r, this._jQueryd0, this._jQueryEo, e._jQueryCr, U._jQueryi2, U._jQueryNo) } }, jQueryt.prototype._jQuery2b = function(t, i) { try { this != i._jQueryGT() && console.log("### assert!! ### "); var e = !1;
                    i._jQueryIS[0] && (e = !0); var r = i; if (!e && (W.prototype._jQuery2b.call(this, t), this._jQuery32())) { var o = this.getTargetBaseDataID(); if (r._jQuery8r == W._jQueryur && (r._jQuery8r = t.getBaseDataIndex(o)), r._jQuery8r < 0) at._jQueryso && _._jQueryli("_jQueryL _jQuery0P _jQueryG :: %s", o);
                        else { var n = t.getBaseData(r._jQuery8r),
                                s = t._jQueryq2(r._jQuery8r);
                            null == n || s._jQueryx2() ? r._jQueryAT = !1 : (n._jQuerynb(t, s, r._jQueryCr, r._jQueryhr, this._jQueryd0, U._jQueryi2, U._jQueryNo), r._jQueryAT = !0), r.baseOpacity = s.getTotalOpacity() } } } catch (t) { throw t } }, jQueryt.prototype.draw = function(t, i, e) { if (this != e._jQueryGT() && console.log("### assert!! ### "), !e._jQueryIS[0]) { var r = e,
                        o = this._jQueryLP;
                    o < 0 && (o = 1); var n = this.getOpacity(i, r) * e._jQueryVS * e.baseOpacity,
                        s = null != r._jQueryhr ? r._jQueryhr : r._jQueryCr;
                    t.setClipBufPre_clipContextForDraw(e.clipBufPre_clipContext), t._jQueryWP(this.culling), t._jQueryUo(o, 3 * this._jQueryYo, this._jQueryBP, s, this._jQueryQi, n, this._jQuery6s, r) } }, jQueryt.prototype.dump = function() { console.log("  _jQueryyi( %d ) , _jQueryd0( %d ) , _jQueryYo( %d ) \n", this._jQueryLP, this._jQueryd0, this._jQueryYo), console.log("  _jQueryOi _jQuerydi = { "); for (var t = 0; t < this._jQueryBP.length; t++) console.log("%5d ,", this._jQueryBP[t]);
                console.log("\n  _jQuery5i _jQuery30"); for (var t = 0; t < this._jQueryEo.length; t++) { console.log("\n    _jQuery30[%d] = ", t); for (var i = this._jQueryEo[t], e = 0; e < i.length; e++) console.log("%6.2f, ", i[e]) } console.log("\n") }, jQueryt.prototype._jQuery72 = function(t) { return null == this._jQuery5P ? null : this._jQuery5P[t] }, jQueryt.prototype.getIndexArray = function() { return this._jQueryBP }, ut.prototype = new Mt, ut.prototype.getTransformedPoints = function() { return null != this._jQueryhr ? this._jQueryhr : this._jQueryCr }, pt.prototype._jQueryHT = function(t) { this.x = t.x, this.y = t.y }, pt.prototype._jQueryHT = function(t, i) { this.x = t, this.y = i }, ft.prototype = new i, ft.loadModel = function(t) { var e = new ft; return i._jQuery62(e, t), e }, ft.loadModel = function(t, e) { var r = e || 0,
                    o = new ft(r); return i._jQuery62(o, t), o }, ft._jQueryto = function() { return new ft }, ft._jQueryer = function(t) { var i = new _jQuery5("../_jQuery_r/_jQueryt0/_jQueryRi/_jQuery_P._jQueryd"); if (0 == i.exists()) throw new _jQueryls("_jQueryt0 _jQuery_ _jQuery6 _jQueryUi :: " + i._jQueryPL()); for (var e = ["../_jQuery_r/_jQueryt0/_jQueryRi/_jQuery_P.512/_jQueryCP._jQuery1", "../_jQuery_r/_jQueryt0/_jQueryRi/_jQuery_P.512/_jQueryvP._jQuery1", "../_jQuery_r/_jQueryt0/_jQueryRi/_jQuery_P.512/_jQueryEP._jQuery1", "../_jQuery_r/_jQueryt0/_jQueryRi/_jQuery_P.512/_jQuerypP._jQuery1"], r = ft.loadModel(i._jQuery3b()), o = 0; o < e.length; o++) { var n = new _jQuery5(e[o]); if (0 == n.exists()) throw new _jQueryls("_jQueryt0 _jQuery_ _jQuery6 _jQueryUi :: " + n._jQueryPL());
                    r.setTexture(o, _jQuerynL._jQuery_o(t, n._jQuery3b())) } return r }, ft.prototype.setGL = function(t) { at.setGL(t) }, ft.prototype.setTransform = function(t) { this.drawParamWebGL.setTransform(t) }, ft.prototype.update = function() { this._jQuery5S.update(), this._jQuery5S.preDraw(this.drawParamWebGL) }, ft.prototype.draw = function() { this._jQuery5S.draw(this.drawParamWebGL) }, ft.prototype._jQueryK2 = function() { this.drawParamWebGL._jQueryK2() }, ft.prototype.setTexture = function(t, i) { null == this.drawParamWebGL && _._jQueryli("_jQueryYi for QT _jQueryki / _jQueryXS() is _jQuery6 _jQueryui!!"), this.drawParamWebGL.setTexture(t, i) }, ft.prototype.setTexture = function(t, i) { null == this.drawParamWebGL && _._jQueryli("_jQueryYi for QT _jQueryki / _jQueryXS() is _jQuery6 _jQueryui!!"), this.drawParamWebGL.setTexture(t, i) }, ft.prototype._jQueryRs = function() { return this.drawParamWebGL._jQueryRs() }, ft.prototype._jQueryDs = function(t) { this.drawParamWebGL._jQueryDs(t) }, ft.prototype.getDrawParam = function() { return this.drawParamWebGL }, ft.prototype.setMatrix = function(t) { this.drawParamWebGL.setMatrix(t) }, ft.prototype.setPremultipliedAlpha = function(t) { this.drawParamWebGL.setPremultipliedAlpha(t) }, ft.prototype.isPremultipliedAlpha = function() { return this.drawParamWebGL.isPremultipliedAlpha() }, ft.prototype.setAnisotropy = function(t) { this.drawParamWebGL.setAnisotropy(t) }, ft.prototype.getAnisotropy = function() { return this.drawParamWebGL.getAnisotropy() }, ct.prototype._jQuerytb = function() { return this.motions }, ct.prototype.startMotion = function(t, i) { for (var e = null, r = this.motions.length, o = 0; o < r; ++o) null != (e = this.motions[o]) && (e._jQueryqS(e._jQueryw0.getFadeOut()), this._jQueryeb && _._jQueryJi("MotionQueueManager[size:%2d]->startMotion() / start _jQueryK _jQuery3 (m%d)\n", r, e._jQuerysr)); if (null == t) return -1;
                e = new dt, e._jQueryw0 = t, this.motions.push(e); var n = e._jQuerysr; return this._jQueryeb && _._jQueryJi("MotionQueueManager[size:%2d]->startMotion() / new _jQueryw0 (m%d)\n", r, n), n }, ct.prototype.updateParam = function(t) { try { for (var i = !1, e = 0; e < this.motions.length; e++) { var r = this.motions[e]; if (null != r) { var o = r._jQueryw0;
                            null != o ? (o.updateParam(t, r), i = !0, r.isFinished() && (this._jQueryeb && _._jQueryJi("MotionQueueManager[size:%2d]->updateParam() / _jQueryT0 _jQueryw0 (m%d)\n", this.motions.length - 1, r._jQuerysr), this.motions.splice(e, 1), e--)) : (this.motions = this.motions.splice(e, 1), e--) } else this.motions.splice(e, 1), e-- } return i } catch (t) { return _._jQueryli(t), !0 } }, ct.prototype.isFinished = function(t) { if (arguments.length >= 1) { for (var i = 0; i < this.motions.length; i++) { var e = this.motions[i]; if (null != e && (e._jQuerysr == t && !e.isFinished())) return !1 } return !0 } for (var i = 0; i < this.motions.length; i++) { var e = this.motions[i]; if (null != e) { if (null != e._jQueryw0) { if (!e.isFinished()) return !1 } else this.motions.splice(i, 1), i-- } else this.motions.splice(i, 1), i-- } return !0 }, ct.prototype.stopAllMotions = function() { for (var t = 0; t < this.motions.length; t++) { var i = this.motions[t]; if (null != i) { i._jQueryw0;
                        this.motions.splice(t, 1), t-- } else this.motions.splice(t, 1), t-- } }, ct.prototype._jQueryZr = function(t) { this._jQueryeb = t }, ct.prototype._jQuerye = function() { console.log("-- _jQueryR --\n"); for (var t = 0; t < this.motions.length; t++) { var i = this.motions[t],
                        e = i._jQueryw0;
                    console.log("MotionQueueEnt[%d] :: %s\n", this.motions.length, e.toString()) } }, dt._jQueryGs = 0, dt.prototype.isFinished = function() { return this._jQuery9L }, dt.prototype._jQueryqS = function(t) { var i = x.getUserTimeMSec(),
                    e = i + t;
                (this._jQueryDo < 0 || e < this._jQueryDo) && (this._jQueryDo = e) }, dt.prototype._jQueryBs = function() { return this._jQuerysr }, gt.prototype.setContext = function(t) { var i = this.m;
                t.transform(i[0], i[1], i[3], i[4], i[6], i[7]) }, gt.prototype.toString = function() { for (var t = "LDTransform { ", i = 0; i < 9; i++) t += this.m[i].toFixed(2) + " ,"; return t += " }" }, gt.prototype.identity = function() { var t = this.m;
                t[0] = t[4] = t[8] = 1, t[1] = t[2] = t[3] = t[5] = t[6] = t[7] = 0 }, gt.prototype._jQueryPS = function(t, i, e) { null == e && (e = new Array(0, 0)); var r = this.m; return e[0] = r[0] * t + r[3] * i + r[6], e[1] = r[1] * t + r[4] * i + r[7], e }, gt.prototype._jQueryP2 = function(t) { t || (t = new gt); var i = this.m,
                    e = i[0],
                    r = i[1],
                    o = i[2],
                    n = i[3],
                    s = i[4],
                    _ = i[5],
                    a = i[6],
                    h = i[7],
                    l = i[8],
                    jQuery = e * s * l + r * _ * a + o * n * h - e * _ * h - o * s * a - r * n * l; if (0 == jQuery) return null; var u = 1 / jQuery; return t.m[0] = u * (s * l - h * _), t.m[1] = u * (h * o - r * l), t.m[2] = u * (r * _ - s * o), t.m[3] = u * (a * _ - n * l), t.m[4] = u * (e * l - a * o), t.m[5] = u * (n * o - e * _), t.m[6] = u * (n * h - a * s), t.m[7] = u * (a * r - e * h), t.m[8] = u * (e * s - n * r), t }, gt.prototype.transform = function(t, i, e) { null == e && (e = new Array(0, 0)); var r = this.m; return e[0] = r[0] * t + r[3] * i + r[6], e[1] = r[1] * t + r[4] * i + r[7], e }, gt.prototype.translate = function(t, i) { var e = this.m;
                e[6] = e[0] * t + e[3] * i + e[6], e[7] = e[1] * t + e[4] * i + e[7], e[8] = e[2] * t + e[5] * i + e[8] }, gt.prototype.scale = function(t, i) { var e = this.m;
                e[0] *= t, e[1] *= t, e[2] *= t, e[3] *= i, e[4] *= i, e[5] *= i }, gt.prototype.shear = function(t, i) { var e = this.m,
                    r = e[0] + e[3] * i,
                    o = e[1] + e[4] * i,
                    n = e[2] + e[5] * i;
                e[3] = e[0] * t + e[3], e[4] = e[1] * t + e[4], e[5] = e[2] * t + e[5], e[0] = r, e[1] = o, e[2] = n }, gt.prototype.rotate = function(t) { var i = this.m,
                    e = Math.cos(t),
                    r = Math.sin(t),
                    o = i[0] * e + i[3] * r,
                    n = i[1] * e + i[4] * r,
                    s = i[2] * e + i[5] * r;
                i[3] = -i[0] * r + i[3] * e, i[4] = -i[1] * r + i[4] * e, i[5] = -i[2] * r + i[5] * e, i[0] = o, i[1] = n, i[2] = s }, gt.prototype.concatenate = function(t) { var i = this.m,
                    e = t.m,
                    r = i[0] * e[0] + i[3] * e[1] + i[6] * e[2],
                    o = i[1] * e[0] + i[4] * e[1] + i[7] * e[2],
                    n = i[2] * e[0] + i[5] * e[1] + i[8] * e[2],
                    s = i[0] * e[3] + i[3] * e[4] + i[6] * e[5],
                    _ = i[1] * e[3] + i[4] * e[4] + i[7] * e[5],
                    a = i[2] * e[3] + i[5] * e[4] + i[8] * e[5],
                    h = i[0] * e[6] + i[3] * e[7] + i[6] * e[8],
                    l = i[1] * e[6] + i[4] * e[7] + i[7] * e[8],
                    jQuery = i[2] * e[6] + i[5] * e[7] + i[8] * e[8];
                m[0] = r, m[1] = o, m[2] = n, m[3] = s, m[4] = _, m[5] = a, m[6] = h, m[7] = l, m[8] = jQuery }, yt.prototype = new et, yt._jQueryeT = null, yt._jQuerytP = new Object, yt._jQuery2o = function() { return null == yt._jQueryeT && (yt._jQueryeT = yt.getID("DST_BASE")), yt._jQueryeT }, yt._jQuery27 = function() { yt._jQuerytP.clear(), yt._jQueryeT = null }, yt.getID = function(t) { var i = yt._jQuerytP[t]; return null == i && (i = new yt(t), yt._jQuerytP[t] = i), i }, yt.prototype._jQuery3s = function() { return new yt }, mt.prototype = new E, mt._jQuery9r = function(t) { return new Float32Array(t) }, mt._jQueryvb = function(t) { return new Int16Array(t) }, mt._jQuerycr = function(t, i) { return null == t || t._jQueryyL() < i.length ? (t = mt._jQuery9r(2 * i.length), t.put(i), t._jQueryoT(0)) : (t.clear(), t.put(i), t._jQueryoT(0)), t }, mt._jQuerymb = function(t, i) { return null == t || t._jQueryyL() < i.length ? (t = mt._jQueryvb(2 * i.length), t.put(i), t._jQueryoT(0)) : (t.clear(), t.put(i), t._jQueryoT(0)), t }, mt._jQueryHs = function() { return this._jQueryGr }, mt._jQueryas = function(t) { this._jQueryGr = t }, mt.prototype.getGL = function() { return this.gl }, mt.prototype.setGL = function(t) { this.gl = t }, mt.prototype.setTransform = function(t) { this.transform = t }, mt.prototype._jQueryZT = function() { var t = this.gl;
                this.firstDraw && (this.initShader(), this.firstDraw = !1, this.anisotropyExt = t.getExtension("EXT_texture_filter_anisotropic") || t.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || t.getExtension("MOZ_EXT_texture_filter_anisotropic"), this.anisotropyExt && (this.maxAnisotropy = t.getParameter(this.anisotropyExt.MAX_TEXTURE_MAX_ANISOTROPY_EXT))), t.disable(t.SCISSOR_TEST), t.disable(t.STENCIL_TEST), t.disable(t.DEPTH_TEST), t.frontFace(t.CW), t.enable(t.BLEND), t.colorMask(1, 1, 1, 1), t.bindBuffer(t.ARRAY_BUFFER, null), t.bindBuffer(t.ELEMENT_ARRAY_BUFFER, null) }, mt.prototype._jQueryUo = function(t, i, e, r, o, n, s, _) { if (!(n < .01 && null == this.clipBufPre_clipContextMask)) { var a = (n > .9 && at.EXPAND_W, this.gl); if (null == this.gl) throw new Error("gl is null"); var h = 1 * this._jQueryC0 * n,
                        l = 1 * this._jQuerytT * n,
                        jQuery = 1 * this._jQueryWL * n,
                        u = this._jQuerylT * n; if (null != this.clipBufPre_clipContextMask) { a.frontFace(a.CCW), a.useProgram(this.shaderProgram), this._jQueryvS = Tt(a, this._jQueryvS, r), this._jQueryno = Pt(a, this._jQueryno, e), a.enableVertexAttribArray(this.a_position_Loc), a.vertexAttribPointer(this.a_position_Loc, 2, a.FLOAT, !1, 0, 0), this._jQueryNT = Tt(a, this._jQueryNT, o), a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, this.textures[t]), a.uniform1i(this.s_texture0_Loc, 1), a.enableVertexAttribArray(this.a_texCoord_Loc), a.vertexAttribPointer(this.a_texCoord_Loc, 2, a.FLOAT, !1, 0, 0), a.uniformMatrix4fv(this.u_matrix_Loc, !1, this.getClipBufPre_clipContextMask().matrixForMask); var p = this.getClipBufPre_clipContextMask().layoutChannelNo,
                            f = this.getChannelFlagAsColor(p);
                        a.uniform4f(this.u_channelFlag, f.r, f.g, f.b, f.a); var c = this.getClipBufPre_clipContextMask().layoutBounds;
                        a.uniform4f(this.u_baseColor_Loc, 2 * c.x - 1, 2 * c.y - 1, 2 * c._jQueryEL() - 1, 2 * c._jQuery5T() - 1), a.uniform1i(this.u_maskFlag_Loc, !0) } else if (null != this.getClipBufPre_clipContextDraw()) { a.useProgram(this.shaderProgramOff), this._jQueryvS = Tt(a, this._jQueryvS, r), this._jQueryno = Pt(a, this._jQueryno, e), a.enableVertexAttribArray(this.a_position_Loc_Off), a.vertexAttribPointer(this.a_position_Loc_Off, 2, a.FLOAT, !1, 0, 0), this._jQueryNT = Tt(a, this._jQueryNT, o), a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, this.textures[t]), a.uniform1i(this.s_texture0_Loc_Off, 1), a.enableVertexAttribArray(this.a_texCoord_Loc_Off), a.vertexAttribPointer(this.a_texCoord_Loc_Off, 2, a.FLOAT, !1, 0, 0), a.uniformMatrix4fv(this.u_clipMatrix_Loc_Off, !1, this.getClipBufPre_clipContextDraw().matrixForDraw), a.uniformMatrix4fv(this.u_matrix_Loc_Off, !1, this.matrix4x4), a.activeTexture(a.TEXTURE2), a.bindTexture(a.TEXTURE_2D, at.fTexture[this.glno]), a.uniform1i(this.s_texture1_Loc_Off, 2); var p = this.getClipBufPre_clipContextDraw().layoutChannelNo,
                            f = this.getChannelFlagAsColor(p);
                        a.uniform4f(this.u_channelFlag_Loc_Off, f.r, f.g, f.b, f.a), a.uniform4f(this.u_baseColor_Loc_Off, h, l, jQuery, u) } else a.useProgram(this.shaderProgram), this._jQueryvS = Tt(a, this._jQueryvS, r), this._jQueryno = Pt(a, this._jQueryno, e), a.enableVertexAttribArray(this.a_position_Loc), a.vertexAttribPointer(this.a_position_Loc, 2, a.FLOAT, !1, 0, 0), this._jQueryNT = Tt(a, this._jQueryNT, o), a.activeTexture(a.TEXTURE1), a.bindTexture(a.TEXTURE_2D, this.textures[t]), a.uniform1i(this.s_texture0_Loc, 1), a.enableVertexAttribArray(this.a_texCoord_Loc), a.vertexAttribPointer(this.a_texCoord_Loc, 2, a.FLOAT, !1, 0, 0), a.uniformMatrix4fv(this.u_matrix_Loc, !1, this.matrix4x4), a.uniform4f(this.u_baseColor_Loc, h, l, jQuery, u), a.uniform1i(this.u_maskFlag_Loc, !1);
                    this.culling ? this.gl.enable(a.CULL_FACE) : this.gl.disable(a.CULL_FACE), this.gl.enable(a.BLEND); var d, g, y, m; if (null != this.clipBufPre_clipContextMask) d = a.ONE, g = a.ONE_MINUS_SRC_ALPHA, y = a.ONE, m = a.ONE_MINUS_SRC_ALPHA;
                    else switch (s) {
                        case jQueryt._jQueryms:
                            d = a.ONE, g = a.ONE_MINUS_SRC_ALPHA, y = a.ONE, m = a.ONE_MINUS_SRC_ALPHA; break;
                        case jQueryt._jQueryns:
                            d = a.ONE, g = a.ONE, y = a.ZERO, m = a.ONE; break;
                        case jQueryt._jQuery_s:
                            d = a.DST_COLOR, g = a.ONE_MINUS_SRC_ALPHA, y = a.ZERO, m = a.ONE } a.blendEquationSeparate(a.FUNC_ADD, a.FUNC_ADD), a.blendFuncSeparate(d, g, y, m), this.anisotropyExt && a.texParameteri(a.TEXTURE_2D, this.anisotropyExt.TEXTURE_MAX_ANISOTROPY_EXT, this.maxAnisotropy); var T = e.length;
                    a.drawElements(a.TRIANGLES, T, a.UNSIGNED_SHORT, 0), a.bindTexture(a.TEXTURE_2D, null) } }, mt.prototype._jQueryRs = function() { throw new Error("_jQueryRs") }, mt.prototype._jQueryDs = function(t) { throw new Error("_jQueryDs") }, mt.prototype._jQueryK2 = function() { for (var t = 0; t < this.textures.length; t++) { 0 != this.textures[t] && (this.gl._jQueryK2(1, this.textures, t), this.textures[t] = null) } }, mt.prototype.setTexture = function(t, i) { this.textures[t] = i }, mt.prototype.initShader = function() { var t = this.gl;
                this.loadShaders2(), this.a_position_Loc = t.getAttribLocation(this.shaderProgram, "a_position"), this.a_texCoord_Loc = t.getAttribLocation(this.shaderProgram, "a_texCoord"), this.u_matrix_Loc = t.getUniformLocation(this.shaderProgram, "u_mvpMatrix"), this.s_texture0_Loc = t.getUniformLocation(this.shaderProgram, "s_texture0"), this.u_channelFlag = t.getUniformLocation(this.shaderProgram, "u_channelFlag"), this.u_baseColor_Loc = t.getUniformLocation(this.shaderProgram, "u_baseColor"), this.u_maskFlag_Loc = t.getUniformLocation(this.shaderProgram, "u_maskFlag"), this.a_position_Loc_Off = t.getAttribLocation(this.shaderProgramOff, "a_position"), this.a_texCoord_Loc_Off = t.getAttribLocation(this.shaderProgramOff, "a_texCoord"), this.u_matrix_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "u_mvpMatrix"), this.u_clipMatrix_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "u_ClipMatrix"), this.s_texture0_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "s_texture0"), this.s_texture1_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "s_texture1"), this.u_channelFlag_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "u_channelFlag"), this.u_baseColor_Loc_Off = t.getUniformLocation(this.shaderProgramOff, "u_baseColor") }, mt.prototype.disposeShader = function() { var t = this.gl;
                this.shaderProgram && (t.deleteProgram(this.shaderProgram), this.shaderProgram = null), this.shaderProgramOff && (t.deleteProgram(this.shaderProgramOff), this.shaderProgramOff = null) }, mt.prototype.compileShader = function(t, i) { var e = this.gl,
                    r = i,
                    o = e.createShader(t); if (null == o) return _._jQueryJi("_jQueryL0 to create shader"), null; if (e.shaderSource(o, r), e.compileShader(o), !e.getShaderParameter(o, e.COMPILE_STATUS)) { var n = e.getShaderInfoLog(o); return _._jQueryJi("_jQueryL0 to compile shader : " + n), e.deleteShader(o), null } return o }, mt.prototype.loadShaders2 = function() { var t = this.gl; if (this.shaderProgram = t.createProgram(), !this.shaderProgram) return !1; if (this.shaderProgramOff = t.createProgram(), !this.shaderProgramOff) return !1; if (this.vertShader = this.compileShader(t.VERTEX_SHADER, "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform mat4       u_mvpMatrix;void main(){    gl_Position = u_mvpMatrix * a_position;    v_ClipPos = u_mvpMatrix * a_position;    v_texCoord = a_texCoord;}"), !this.vertShader) return _._jQueryJi("Vertex shader compile _jQueryli!"), !1; if (this.vertShaderOff = this.compileShader(t.VERTEX_SHADER, "attribute vec4     a_position;attribute vec2     a_texCoord;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform mat4       u_mvpMatrix;uniform mat4       u_ClipMatrix;void main(){    gl_Position = u_mvpMatrix * a_position;    v_ClipPos = u_ClipMatrix * a_position;    v_texCoord = a_texCoord ;}"), !this.vertShaderOff) return _._jQueryJi("OffVertex shader compile _jQueryli!"), !1; if (this.fragShader = this.compileShader(t.FRAGMENT_SHADER, "precision mediump float;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform sampler2D  s_texture0;uniform vec4       u_channelFlag;uniform vec4       u_baseColor;uniform bool       u_maskFlag;void main(){    vec4 smpColor;     if(u_maskFlag){        float isInside =             step(u_baseColor.x, v_ClipPos.x/v_ClipPos.w)          * step(u_baseColor.y, v_ClipPos.y/v_ClipPos.w)          * step(v_ClipPos.x/v_ClipPos.w, u_baseColor.z)          * step(v_ClipPos.y/v_ClipPos.w, u_baseColor.w);        smpColor = u_channelFlag * texture2D(s_texture0 , v_texCoord).a * isInside;    }else{        smpColor = texture2D(s_texture0 , v_texCoord) * u_baseColor;    }    gl_FragColor = smpColor;}"), !this.fragShader) return _._jQueryJi("Fragment shader compile _jQueryli!"), !1; if (this.fragShaderOff = this.compileShader(t.FRAGMENT_SHADER, "precision mediump float ;varying vec2       v_texCoord;varying vec4       v_ClipPos;uniform sampler2D  s_texture0;uniform sampler2D  s_texture1;uniform vec4       u_channelFlag;uniform vec4       u_baseColor ;void main(){    vec4 col_formask = texture2D(s_texture0, v_texCoord) * u_baseColor;    vec4 clipMask = texture2D(s_texture1, v_ClipPos.xy / v_ClipPos.w) * u_channelFlag;    float maskVal = clipMask.r + clipMask.g + clipMask.b + clipMask.a;    col_formask = col_formask * maskVal;    gl_FragColor = col_formask;}"), !this.fragShaderOff) return _._jQueryJi("OffFragment shader compile _jQueryli!"), !1; if (t.attachShader(this.shaderProgram, this.vertShader), t.attachShader(this.shaderProgram, this.fragShader), t.attachShader(this.shaderProgramOff, this.vertShaderOff), t.attachShader(this.shaderProgramOff, this.fragShaderOff), t.linkProgram(this.shaderProgram), t.linkProgram(this.shaderProgramOff), !t.getProgramParameter(this.shaderProgram, t.LINK_STATUS)) { var i = t.getProgramInfoLog(this.shaderProgram); return _._jQueryJi("_jQueryL0 to link program: " + i), this.vertShader && (t.deleteShader(this.vertShader), this.vertShader = 0), this.fragShader && (t.deleteShader(this.fragShader), this.fragShader = 0), this.shaderProgram && (t.deleteProgram(this.shaderProgram), this.shaderProgram = 0), this.vertShaderOff && (t.deleteShader(this.vertShaderOff), this.vertShaderOff = 0), this.fragShaderOff && (t.deleteShader(this.fragShaderOff), this.fragShaderOff = 0), this.shaderProgramOff && (t.deleteProgram(this.shaderProgramOff), this.shaderProgramOff = 0), !1 } return !0 }, mt.prototype.createFramebuffer = function() { var t = this.gl,
                    i = at.clippingMaskBufferSize,
                    e = t.createFramebuffer();
                t.bindFramebuffer(t.FRAMEBUFFER, e); var r = t.createRenderbuffer();
                t.bindRenderbuffer(t.RENDERBUFFER, r), t.renderbufferStorage(t.RENDERBUFFER, t.RGBA4, i, i), t.framebufferRenderbuffer(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.RENDERBUFFER, r); var o = t.createTexture(); return t.bindTexture(t.TEXTURE_2D, o), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, i, i, 0, t.RGBA, t.UNSIGNED_BYTE, null), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MIN_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_S, t.CLAMP_TO_EDGE), t.texParameteri(t.TEXTURE_2D, t.TEXTURE_WRAP_T, t.CLAMP_TO_EDGE), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, o, 0), t.bindTexture(t.TEXTURE_2D, null), t.bindRenderbuffer(t.RENDERBUFFER, null), t.bindFramebuffer(t.FRAMEBUFFER, null), at.fTexture[this.glno] = o, { framebuffer: e, renderbuffer: r, texture: at.fTexture[this.glno] } }, St.prototype._jQueryfP = function() { var t, i, e, r = this._jQueryST(); if (0 == (128 & r)) return 255 & r; if (0 == (128 & (t = this._jQueryST()))) return (127 & r) << 7 | 127 & t; if (0 == (128 & (i = this._jQueryST()))) return (127 & r) << 14 | (127 & t) << 7 | 255 & i; if (0 == (128 & (e = this._jQueryST()))) return (127 & r) << 21 | (127 & t) << 14 | (127 & i) << 7 | 255 & e; throw new lt("_jQueryL _jQuery0P  _") }, St.prototype.getFormatVersion = function() { return this._jQueryS2 }, St.prototype._jQuerygr = function(t) { this._jQueryS2 = t }, St.prototype._jQuery3L = function() { return this._jQueryfP() }, St.prototype._jQuerymP = function() { return this._jQueryzT(), this._jQueryF += 8, this._jQueryT.getFloat64(this._jQueryF - 8) }, St.prototype._jQuery_T = function() { return this._jQueryzT(), this._jQueryF += 4, this._jQueryT.getFloat32(this._jQueryF - 4) }, St.prototype._jQuery6L = function() { return this._jQueryzT(), this._jQueryF += 4, this._jQueryT.getInt32(this._jQueryF - 4) }, St.prototype._jQueryST = function() { return this._jQueryzT(), this._jQueryT.getInt8(this._jQueryF++) }, St.prototype._jQuery9T = function() { return this._jQueryzT(), this._jQueryF += 2, this._jQueryT.getInt16(this._jQueryF - 2) }, St.prototype._jQuery2T = function() { throw this._jQueryzT(), this._jQueryF += 8, new lt("_jQueryL _jQueryq read long") }, St.prototype._jQuerypo = function() { return this._jQueryzT(), 0 != this._jQueryT.getInt8(this._jQueryF++) }; var wt = !0;
            St.prototype._jQuerybT = function() { this._jQueryzT(); var t = this._jQuery3L(),
                    i = null; if (wt) try { var e = new ArrayBuffer(2 * t);
                    i = new Uint16Array(e); for (var r = 0; r < t; ++r) i[r] = this._jQueryT.getUint8(this._jQueryF++); return String.fromCharCode.apply(null, i) } catch (t) { wt = !1 }
                try { var o = new Array; if (null == i)
                        for (var r = 0; r < t; ++r) o[r] = this._jQueryT.getUint8(this._jQueryF++);
                    else
                        for (var r = 0; r < t; ++r) o[r] = i[r]; return String.fromCharCode.apply(null, o) } catch (t) { console.log("read utf8 / _jQueryrT _jQueryL0 !! : " + t) } }, St.prototype._jQuerycS = function() { this._jQueryzT(); for (var t = this._jQuery3L(), i = new Int32Array(t), e = 0; e < t; e++) i[e] = this._jQueryT.getInt32(this._jQueryF), this._jQueryF += 4; return i }, St.prototype._jQueryTb = function() { this._jQueryzT(); for (var t = this._jQuery3L(), i = new Float32Array(t), e = 0; e < t; e++) i[e] = this._jQueryT.getFloat32(this._jQueryF), this._jQueryF += 4; return i }, St.prototype._jQuery5b = function() { this._jQueryzT(); for (var t = this._jQuery3L(), i = new Float64Array(t), e = 0; e < t; e++) i[e] = this._jQueryT.getFloat64(this._jQueryF), this._jQueryF += 8; return i }, St.prototype._jQuerynP = function() { return this._jQueryJb(-1) }, St.prototype._jQueryJb = function(t) { if (this._jQueryzT(), t < 0 && (t = this._jQuery3L()), t == G._jQuery7P) { var i = this._jQuery6L(); if (0 <= i && i < this._jQueryKo.length) return this._jQueryKo[i]; throw new lt("_jQuerysL _jQuery4i @_jQuerym0") } var e = this._jQuery4b(t); return this._jQueryKo.push(e), e }, St.prototype._jQuery4b = function(t) { if (0 == t) return null; if (50 == t) { var i = this._jQuerybT(),
                        e = b.getID(i); return e } if (51 == t) { var i = this._jQuerybT(),
                        e = yt.getID(i); return e } if (134 == t) { var i = this._jQuerybT(),
                        e = l.getID(i); return e } if (60 == t) { var i = this._jQuerybT(),
                        e = u.getID(i); return e } if (t >= 48) { var r = G._jQuery9o(t); return null != r ? (r._jQueryF0(this), r) : null } switch (t) {
                    case 1:
                        return this._jQuerybT();
                    case 10:
                        return new n(this._jQuery6L(), !0);
                    case 11:
                        return new S(this._jQuerymP(), this._jQuerymP(), this._jQuerymP(), this._jQuerymP());
                    case 12:
                        return new S(this._jQuery_T(), this._jQuery_T(), this._jQuery_T(), this._jQuery_T());
                    case 13:
                        return new L(this._jQuerymP(), this._jQuerymP());
                    case 14:
                        return new L(this._jQuery_T(), this._jQuery_T());
                    case 15:
                        for (var o = this._jQuery3L(), e = new Array(o), s = 0; s < o; s++) e[s] = this._jQuerynP(); return e;
                    case 17:
                        var e = new F(this._jQuerymP(), this._jQuerymP(), this._jQuerymP(), this._jQuerymP(), this._jQuerymP(), this._jQuerymP()); return e;
                    case 21:
                        return new h(this._jQuery6L(), this._jQuery6L(), this._jQuery6L(), this._jQuery6L());
                    case 22:
                        return new pt(this._jQuery6L(), this._jQuery6L());
                    case 23:
                        throw new Error("_jQueryL _jQueryro ");
                    case 16:
                    case 25:
                        return this._jQuerycS();
                    case 26:
                        return this._jQuery5b();
                    case 27:
                        return this._jQueryTb();
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                    case 6:
                    case 7:
                    case 8:
                    case 9:
                    case 18:
                    case 19:
                    case 20:
                    case 24:
                    case 28:
                        throw new lt("_jQuery6 _jQueryq : _jQuerynP() of 2-9 ,18,19,20,24,28 : " + t);
                    default:
                        throw new lt("_jQuery6 _jQueryq : _jQuerynP() NO _jQueryi : " + t) } }, St.prototype._jQuery8L = function() { return 0 == this._jQueryhL ? this._jQueryv0 = this._jQueryST() : 8 == this._jQueryhL && (this._jQueryv0 = this._jQueryST(), this._jQueryhL = 0), 1 == (this._jQueryv0 >> 7 - this._jQueryhL++ & 1) }, St.prototype._jQueryzT = function() { 0 != this._jQueryhL && (this._jQueryhL = 0) }, vt.prototype._jQuerywP = function(t, i, e) { for (var r = 0; r < e; r++) { for (var o = 0; o < i; o++) { var n = 2 * (o + r * i);
                        console.log("(% 7.3f , % 7.3f) , ", t[n], t[n + 1]) } console.log("\n") } console.log("\n") }, Lt._jQuery2S = Math.PI / 180, Lt._jQuerybS = Math.PI / 180, Lt._jQuerywS = 180 / Math.PI, Lt._jQueryNS = 180 / Math.PI, Lt.PI_F = Math.PI, Lt._jQuerykT = [0, .012368, .024734, .037097, .049454, .061803, .074143, .086471, .098786, .111087, .12337, .135634, .147877, .160098, .172295, .184465, .196606, .208718, .220798, .232844, .244854, .256827, .268761, .280654, .292503, .304308, .316066, .327776, .339436, .351044, .362598, .374097, .385538, .396921, .408243, .419502, .430697, .441826, .452888, .463881, .474802, .485651, .496425, .507124, .517745, .528287, .538748, .549126, .559421, .56963, .579752, .589785, .599728, .609579, .619337, .629, .638567, .648036, .657406, .666676, .675843, .684908, .693867, .70272, .711466, .720103, .72863, .737045, .745348, .753536, .76161, .769566, .777405, .785125, .792725, .800204, .807561, .814793, .821901, .828884, .835739, .842467, .849066, .855535, .861873, .868079, .874153, .880093, .885898, .891567, .897101, .902497, .907754, .912873, .917853, .922692, .92739, .931946, .936359, .940629, .944755, .948737, .952574, .956265, .959809, .963207, .966457, .96956, .972514, .97532, .977976, .980482, .982839, .985045, .987101, .989006, .990759, .992361, .993811, .995109, .996254, .997248, .998088, .998776, .999312, .999694, .999924, 1], Lt._jQuery92 = function(t, i) { var e = Math.atan2(t[1], t[0]),
                    r = Math.atan2(i[1], i[0]); return Lt._jQuerytS(e, r) }, Lt._jQuerytS = function(t, i) { for (var e = t - i; e < -Math.PI;) e += 2 * Math.PI; for (; e > Math.PI;) e -= 2 * Math.PI; return e }, Lt._jQuery9 = function(t) { return Math.sin(t) }, Lt.fcos = function(t) { return Math.cos(t) }, Mt.prototype._jQueryu2 = function() { return this._jQueryIS[0] }, Mt.prototype._jQueryyo = function() { return this._jQueryAT && !this._jQueryIS[0] }, Mt.prototype._jQueryGT = function() { return this._jQuerye0 }, Et._jQueryW2 = 0, Et.SYSTEM_INFO = null, Et.USER_AGENT = navigator.userAgent, Et.isIPhone = function() { return Et.SYSTEM_INFO || Et.setup(), Et.SYSTEM_INFO._isIPhone }, Et.isIOS = function() { return Et.SYSTEM_INFO || Et.setup(), Et.SYSTEM_INFO._isIPhone || Et.SYSTEM_INFO._isIPad }, Et.isAndroid = function() { return Et.SYSTEM_INFO || Et.setup(), Et.SYSTEM_INFO._isAndroid }, Et.getOSVersion = function() { return Et.SYSTEM_INFO || Et.setup(), Et.SYSTEM_INFO.version }, Et.getOS = function() { return Et.SYSTEM_INFO || Et.setup(), Et.SYSTEM_INFO._isIPhone || Et.SYSTEM_INFO._isIPad ? "iOS" : Et.SYSTEM_INFO._isAndroid ? "Android" : "_jQueryQ0 OS" }, Et.setup = function() {
                function t(t, i) { for (var e = t.substring(i).split(/[ _,;\.]/), r = 0, o = 0; o <= 2 && !isNaN(e[o]); o++) { var n = parseInt(e[o]); if (n < 0 || n > 999) { _._jQueryli("err : " + n + " @UtHtml5.setup()"), r = 0; break } r += n * Math.pow(1e3, 2 - o) } return r } var i, e = Et.USER_AGENT,
                    r = Et.SYSTEM_INFO = { userAgent: e }; if ((i = e.indexOf("iPhone OS ")) >= 0) r.os = "iPhone", r._isIPhone = !0, r.version = t(e, i + "iPhone OS ".length);
                else if ((i = e.indexOf("iPad")) >= 0) { if ((i = e.indexOf("CPU OS")) < 0) return void _._jQueryli(" err : " + e + " @UtHtml5.setup()");
                    r.os = "iPad", r._isIPad = !0, r.version = t(e, i + "CPU OS ".length) } else(i = e.indexOf("Android")) >= 0 ? (r.os = "Android", r._isAndroid = !0, r.version = t(e, i + "Android ".length)) : (r.os = "-", r.version = -1) }, window.UtSystem = x, window.UtDebug = _, window.LDTransform = gt, window.LDGL = nt, window.Live2D = at, window.Live2DModelWebGL = ft, window.Live2DModelJS = q, window.Live2DMotion = J, window.MotionQueueManager = ct, window.PhysicsHair = f, window.AMotion = s, window.PartsDataID = l, window.DrawDataID = b, window.BaseDataID = yt, window.ParamID = u, at.init(); var At = !1 }() }).call(i, e(7)) }, function(t, i) { t.exports = { import: function() { throw new Error("System.import cannot be used indirectly") } } }, function(t, i, e) { "use strict";

    function r(t) { return t && t.__esModule ? t : { default: t } }

    function o() { this.models = [], this.count = -1, this.reloadFlg = !1, Live2D.init(), n.Live2DFramework.setPlatformManager(new _.default) } Object.defineProperty(i, "__esModule", { value: !0 }), i.default = o; var n = e(0),
        s = e(9),
        _ = r(s),
        a = e(10),
        h = r(a),
        l = e(1),
        jQuery = r(l);
    o.prototype.createModel = function() { var t = new h.default; return this.models.push(t), t }, o.prototype.changeModel = function(t, i) { if (this.reloadFlg) { this.reloadFlg = !1;
            this.releaseModel(0, t), this.createModel(), this.models[0].load(t, i) } }, o.prototype.getModel = function(t) { return t >= this.models.length ? null : this.models[t] }, o.prototype.releaseModel = function(t, i) { this.models.length <= t || (this.models[t].release(i), delete this.models[t], this.models.splice(t, 1)) }, o.prototype.numModels = function() { return this.models.length }, o.prototype.setDrag = function(t, i) { for (var e = 0; e < this.models.length; e++) this.models[e].setDrag(t, i) }, o.prototype.maxScaleEvent = function() { jQuery.default.DEBUG_LOG && console.log("Max scale event."); for (var t = 0; t < this.models.length; t++) this.models[t].startRandomMotion(jQuery.default.MOTION_GROUP_PINCH_IN, jQuery.default.PRIORITY_NORMAL) }, o.prototype.minScaleEvent = function() { jQuery.default.DEBUG_LOG && console.log("Min scale event."); for (var t = 0; t < this.models.length; t++) this.models[t].startRandomMotion(jQuery.default.MOTION_GROUP_PINCH_OUT, jQuery.default.PRIORITY_NORMAL) }, o.prototype.tapEvent = function(t, i) { jQuery.default.DEBUG_LOG && console.log("tapEvent view x:" + t + " y:" + i); for (var e = 0; e < this.models.length; e++) this.models[e].hitTest(jQuery.default.HIT_AREA_HEAD, t, i) ? (jQuery.default.DEBUG_LOG && console.log("Tap face."), this.models[e].setRandomExpression()) : this.models[e].hitTest(jQuery.default.HIT_AREA_BODY, t, i) ? (jQuery.default.DEBUG_LOG && console.log("Tap body. models[" + e + "]"), this.models[e].startRandomMotion(jQuery.default.MOTION_GROUP_TAP_BODY, jQuery.default.PRIORITY_NORMAL)) : this.models[e].hitTestCustom("head", t, i) ? (jQuery.default.DEBUG_LOG && console.log("Tap face."), this.models[e].startRandomMotion(jQuery.default.MOTION_GROUP_FLICK_HEAD, jQuery.default.PRIORITY_NORMAL)) : this.models[e].hitTestCustom("body", t, i) && (jQuery.default.DEBUG_LOG && console.log("Tap body. models[" + e + "]"), this.models[e].startRandomMotion(jQuery.default.MOTION_GROUP_TAP_BODY, jQuery.default.PRIORITY_NORMAL)); return !0 } }, function(t, i, e) { "use strict";

    function r() {} Object.defineProperty(i, "__esModule", { value: !0 }), i.default = r; var o = e(2);
    r.prototype.loadBytes = function(t, i) { var e = new XMLHttpRequest;
        e.open("GET", t, !0), e.responseType = "arraybuffer", e.onload = function() { switch (e.status) {
                case 200:
                    i(e.response); break;
                default:
                    console.error("Failed to load (" + e.status + ") : " + t) } }, e.send(null) }, r.prototype.loadString = function(t) { this.loadBytes(t, function(t) { return t }) }, r.prototype.loadLive2DModel = function(t, i) { var e = null;
        this.loadBytes(t, function(t) { e = Live2DModelWebGL.loadModel(t), i(e) }) }, r.prototype.loadTexture = function(t, i, e, r) { var n = new Image;
        n.src = e;
        n.onload = function() { var e = (0, o.getContext)(),
                s = e.createTexture(); if (!s) return console.error("Failed to generate gl texture name."), -1;
            0 == t.isPremultipliedAlpha() && e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, 1), e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, 1), e.activeTexture(e.TEXTURE0), e.bindTexture(e.TEXTURE_2D, s), e.texImage2D(e.TEXTURE_2D, 0, e.RGBA, e.RGBA, e.UNSIGNED_BYTE, n), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, e.LINEAR), e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, e.LINEAR_MIPMAP_NEAREST), e.generateMipmap(e.TEXTURE_2D), t.setTexture(i, s), s = null, "function" == typeof r && r() }, n.onerror = function() { console.error("Failed to load image : " + e) } }, r.prototype.jsonParseFromBytes = function(t) { var i, e = new Uint8Array(t, 0, 3); return i = 239 == e[0] && 187 == e[1] && 191 == e[2] ? String.fromCharCode.apply(null, new Uint8Array(t, 3)) : String.fromCharCode.apply(null, new Uint8Array(t)), JSON.parse(i) }, r.prototype.log = function(t) {} }, function(t, i, e) { "use strict";

    function r(t) { return t && t.__esModule ? t : { default: t } }

    function o() { n.L2DBaseModel.prototype.constructor.call(this), this.modelHomeDir = "", this.modelSetting = null, this.tmpMatrix = [] } Object.defineProperty(i, "__esModule", { value: !0 }), i.default = o; var n = e(0),
        s = e(11),
        _ = r(s),
        a = e(1),
        h = r(a),
        l = e(3),
        jQuery = r(l);
    o.prototype = new n.L2DBaseModel, o.prototype.load = function(t, i, e) { this.setUpdating(!0), this.setInitialized(!1), this.modelHomeDir = i.substring(0, i.lastIndexOf("/") + 1), this.modelSetting = new _.default; var r = this;
        this.modelSetting.loadModelSetting(i, function() { var t = r.modelHomeDir + r.modelSetting.getModelFile();
            r.loadModelData(t, function(t) { for (var i = 0; i < r.modelSetting.getTextureNum(); i++) { var o = r.modelHomeDir + r.modelSetting.getTextureFile(i);
                    r.loadTexture(i, o, function() { if (r.isTexLoaded) { if (r.modelSetting.getExpressionNum() > 0) { r.expressions = {}; for (var t = 0; t < r.modelSetting.getExpressionNum(); t++) { var i = r.modelSetting.getExpressionName(t),
                                        o = r.modelHomeDir + r.modelSetting.getExpressionFile(t);
                                    r.loadExpression(i, o) } } else r.expressionManager = null, r.expressions = {}; if (r.eyeBlink, null != r.modelSetting.getPhysicsFile() ? r.loadPhysics(r.modelHomeDir + r.modelSetting.getPhysicsFile()) : r.physics = null, null != r.modelSetting.getPoseFile() ? r.loadPose(r.modelHomeDir + r.modelSetting.getPoseFile(), function() { r.pose.updateParam(r.live2DModel) }) : r.pose = null, null != r.modelSetting.getLayout()) { var n = r.modelSetting.getLayout();
                                null != n.width && r.modelMatrix.setWidth(n.width), null != n.height && r.modelMatrix.setHeight(n.height), null != n.x && r.modelMatrix.setX(n.x), null != n.y && r.modelMatrix.setY(n.y), null != n.center_x && r.modelMatrix.centerX(n.center_x), null != n.center_y && r.modelMatrix.centerY(n.center_y), null != n.top && r.modelMatrix.top(n.top), null != n.bottom && r.modelMatrix.bottom(n.bottom), null != n.left && r.modelMatrix.left(n.left), null != n.right && r.modelMatrix.right(n.right) } if (null != r.modelSetting.getHitAreasCustom()) { var s = r.modelSetting.getHitAreasCustom();
                                null != s.head_x && (h.default.hit_areas_custom_head_x = s.head_x), null != s.head_y && (h.default.hit_areas_custom_head_y = s.head_y), null != s.body_x && (h.default.hit_areas_custom_body_x = s.body_x), null != s.body_y && (h.default.hit_areas_custom_body_y = s.body_y) } for (var t = 0; t < r.modelSetting.getInitParamNum(); t++) r.live2DModel.setParamFloat(r.modelSetting.getInitParamID(t), r.modelSetting.getInitParamValue(t)); for (var t = 0; t < r.modelSetting.getInitPartsVisibleNum(); t++) r.live2DModel.setPartsOpacity(r.modelSetting.getInitPartsVisibleID(t), r.modelSetting.getInitPartsVisibleValue(t));
                            r.live2DModel.saveParam(), r.preloadMotionGroup(h.default.MOTION_GROUP_IDLE), r.preloadMotionGroup(h.default.MOTION_GROUP_SLEEPY), r.mainMotionManager.stopAllMotions(), r.setUpdating(!1), r.setInitialized(!0), "function" == typeof e && e() } }) } }) }) }, o.prototype.release = function(t) { var i = n.Live2DFramework.getPlatformManager();
        t.deleteTexture(i.texture) }, o.prototype.preloadMotionGroup = function(t) { for (var i = this, e = 0; e < this.modelSetting.getMotionNum(t); e++) { var r = this.modelSetting.getMotionFile(t, e);
            this.loadMotion(r, this.modelHomeDir + r, function(r) { r.setFadeIn(i.modelSetting.getMotionFadeIn(t, e)), r.setFadeOut(i.modelSetting.getMotionFadeOut(t, e)) }) } }, o.prototype.update = function() { if (null == this.live2DModel) return void(h.default.DEBUG_LOG && console.error("Failed to update.")); var t = UtSystem.getUserTimeMSec() - this.startTimeMSec,
            i = t / 1e3,
            e = 2 * i * Math.PI; if (this.mainMotionManager.isFinished()) { "1" === sessionStorage.getItem("Sleepy") ? this.startRandomMotion(h.default.MOTION_GROUP_SLEEPY, h.default.PRIORITY_SLEEPY) : this.startRandomMotion(h.default.MOTION_GROUP_IDLE, h.default.PRIORITY_IDLE) } this.live2DModel.loadParam(), this.mainMotionManager.updateParam(this.live2DModel) || null != this.eyeBlink && this.eyeBlink.updateParam(this.live2DModel), this.live2DModel.saveParam(), null == this.expressionManager || null == this.expressions || this.expressionManager.isFinished() || this.expressionManager.updateParam(this.live2DModel), this.live2DModel.addToParamFloat("PARAM_ANGLE_X", 30 * this.dragX, 1), this.live2DModel.addToParamFloat("PARAM_ANGLE_Y", 30 * this.dragY, 1), this.live2DModel.addToParamFloat("PARAM_ANGLE_Z", this.dragX * this.dragY * -30, 1), this.live2DModel.addToParamFloat("PARAM_BODY_ANGLE_X", 10 * this.dragX, 1), this.live2DModel.addToParamFloat("PARAM_EYE_BALL_X", this.dragX, 1), this.live2DModel.addToParamFloat("PARAM_EYE_BALL_Y", this.dragY, 1), this.live2DModel.addToParamFloat("PARAM_ANGLE_X", Number(15 * Math.sin(e / 6.5345)), .5), this.live2DModel.addToParamFloat("PARAM_ANGLE_Y", Number(8 * Math.sin(e / 3.5345)), .5), this.live2DModel.addToParamFloat("PARAM_ANGLE_Z", Number(10 * Math.sin(e / 5.5345)), .5), this.live2DModel.addToParamFloat("PARAM_BODY_ANGLE_X", Number(4 * Math.sin(e / 15.5345)), .5), this.live2DModel.setParamFloat("PARAM_BREATH", Number(.5 + .5 * Math.sin(e / 3.2345)), 1), null != this.physics && this.physics.updateParam(this.live2DModel), null == this.lipSync && this.live2DModel.setParamFloat("PARAM_MOUTH_OPEN_Y", this.lipSyncValue), null != this.pose && this.pose.updateParam(this.live2DModel), this.live2DModel.update() }, o.prototype.setRandomExpression = function() { var t = []; for (var i in this.expressions) t.push(i); var e = parseInt(Math.random() * t.length);
        this.setExpression(t[e]) }, o.prototype.startRandomMotion = function(t, i) { var e = this.modelSetting.getMotionNum(t),
            r = parseInt(Math.random() * e);
        this.startMotion(t, r, i) }, o.prototype.startMotion = function(t, i, e) { var r = this.modelSetting.getMotionFile(t, i); if (null == r || "" == r) return void(h.default.DEBUG_LOG && console.error("Failed to motion.")); if (e == h.default.PRIORITY_FORCE) this.mainMotionManager.setReservePriority(e);
        else if (!this.mainMotionManager.reserveMotion(e)) return void(h.default.DEBUG_LOG && console.log("Motion is running.")); var o, n = this;
        null == this.motions[t] ? this.loadMotion(null, this.modelHomeDir + r, function(r) { o = r, n.setFadeInFadeOut(t, i, e, o) }) : (o = this.motions[t], n.setFadeInFadeOut(t, i, e, o)) }, o.prototype.setFadeInFadeOut = function(t, i, e, r) { var o = this.modelSetting.getMotionFile(t, i); if (r.setFadeIn(this.modelSetting.getMotionFadeIn(t, i)), r.setFadeOut(this.modelSetting.getMotionFadeOut(t, i)), h.default.DEBUG_LOG && console.log("Start motion : " + o), null == this.modelSetting.getMotionSound(t, i)) this.mainMotionManager.startMotionPrio(r, e);
        else { var n = this.modelSetting.getMotionSound(t, i),
                s = document.createElement("audio");
            s.src = this.modelHomeDir + n, h.default.DEBUG_LOG && console.log("Start sound : " + n), s.play(), this.mainMotionManager.startMotionPrio(r, e) } }, o.prototype.setExpression = function(t) { var i = this.expressions[t];
        h.default.DEBUG_LOG && console.log("Expression : " + t), this.expressionManager.startMotion(i, !1) }, o.prototype.draw = function(t) { jQuery.default.push(), jQuery.default.multMatrix(this.modelMatrix.getArray()), this.tmpMatrix = jQuery.default.getMatrix(), this.live2DModel.setMatrix(this.tmpMatrix), this.live2DModel.draw(), jQuery.default.pop() }, o.prototype.hitTest = function(t, i, e) { for (var r = this.modelSetting.getHitAreaNum(), o = 0; o < r; o++)
            if (t == this.modelSetting.getHitAreaName(o)) { var n = this.modelSetting.getHitAreaID(o); return this.hitTestSimple(n, i, e) } return !1 }, o.prototype.hitTestCustom = function(t, i, e) { return "head" == t ? this.hitTestSimpleCustom(h.default.hit_areas_custom_head_x, h.default.hit_areas_custom_head_y, i, e) : "body" == t && this.hitTestSimpleCustom(h.default.hit_areas_custom_body_x, h.default.hit_areas_custom_body_y, i, e) } }, function(t, i, e) { "use strict";

    function r() { this.NAME = "name", this.ID = "id", this.MODEL = "model", this.TEXTURES = "textures", this.HIT_AREAS = "hit_areas", this.PHYSICS = "physics", this.POSE = "pose", this.EXPRESSIONS = "expressions", this.MOTION_GROUPS = "motions", this.SOUND = "sound", this.FADE_IN = "fade_in", this.FADE_OUT = "fade_out", this.LAYOUT = "layout", this.HIT_AREAS_CUSTOM = "hit_areas_custom", this.INIT_PARAM = "init_param", this.INIT_PARTS_VISIBLE = "init_parts_visible", this.VALUE = "val", this.FILE = "file", this.json = {} } Object.defineProperty(i, "__esModule", { value: !0 }), i.default = r; var o = e(0);
    r.prototype.loadModelSetting = function(t, i) { var e = this;
        o.Live2DFramework.getPlatformManager().loadBytes(t, function(t) { var r = String.fromCharCode.apply(null, new Uint8Array(t));
            e.json = JSON.parse(r), i() }) }, r.prototype.getTextureFile = function(t) { return null == this.json[this.TEXTURES] || null == this.json[this.TEXTURES][t] ? null : this.json[this.TEXTURES][t] }, r.prototype.getModelFile = function() { return this.json[this.MODEL] }, r.prototype.getTextureNum = function() { return null == this.json[this.TEXTURES] ? 0 : this.json[this.TEXTURES].length }, r.prototype.getHitAreaNum = function() { return null == this.json[this.HIT_AREAS] ? 0 : this.json[this.HIT_AREAS].length }, r.prototype.getHitAreaID = function(t) { return null == this.json[this.HIT_AREAS] || null == this.json[this.HIT_AREAS][t] ? null : this.json[this.HIT_AREAS][t][this.ID] }, r.prototype.getHitAreaName = function(t) { return null == this.json[this.HIT_AREAS] || null == this.json[this.HIT_AREAS][t] ? null : this.json[this.HIT_AREAS][t][this.NAME] }, r.prototype.getPhysicsFile = function() { return this.json[this.PHYSICS] }, r.prototype.getPoseFile = function() { return this.json[this.POSE] }, r.prototype.getExpressionNum = function() { return null == this.json[this.EXPRESSIONS] ? 0 : this.json[this.EXPRESSIONS].length }, r.prototype.getExpressionFile = function(t) { return null == this.json[this.EXPRESSIONS] ? null : this.json[this.EXPRESSIONS][t][this.FILE] }, r.prototype.getExpressionName = function(t) { return null == this.json[this.EXPRESSIONS] ? null : this.json[this.EXPRESSIONS][t][this.NAME] }, r.prototype.getLayout = function() { return this.json[this.LAYOUT] }, r.prototype.getHitAreasCustom = function() { return this.json[this.HIT_AREAS_CUSTOM] }, r.prototype.getInitParamNum = function() { return null == this.json[this.INIT_PARAM] ? 0 : this.json[this.INIT_PARAM].length }, r.prototype.getMotionNum = function(t) { return null == this.json[this.MOTION_GROUPS] || null == this.json[this.MOTION_GROUPS][t] ? 0 : this.json[this.MOTION_GROUPS][t].length }, r.prototype.getMotionFile = function(t, i) { return null == this.json[this.MOTION_GROUPS] || null == this.json[this.MOTION_GROUPS][t] || null == this.json[this.MOTION_GROUPS][t][i] ? null : this.json[this.MOTION_GROUPS][t][i][this.FILE] }, r.prototype.getMotionSound = function(t, i) { return null == this.json[this.MOTION_GROUPS] || null == this.json[this.MOTION_GROUPS][t] || null == this.json[this.MOTION_GROUPS][t][i] || null == this.json[this.MOTION_GROUPS][t][i][this.SOUND] ? null : this.json[this.MOTION_GROUPS][t][i][this.SOUND] }, r.prototype.getMotionFadeIn = function(t, i) { return null == this.json[this.MOTION_GROUPS] || null == this.json[this.MOTION_GROUPS][t] || null == this.json[this.MOTION_GROUPS][t][i] || null == this.json[this.MOTION_GROUPS][t][i][this.FADE_IN] ? 1e3 : this.json[this.MOTION_GROUPS][t][i][this.FADE_IN] }, r.prototype.getMotionFadeOut = function(t, i) { return null == this.json[this.MOTION_GROUPS] || null == this.json[this.MOTION_GROUPS][t] || null == this.json[this.MOTION_GROUPS][t][i] || null == this.json[this.MOTION_GROUPS][t][i][this.FADE_OUT] ? 1e3 : this.json[this.MOTION_GROUPS][t][i][this.FADE_OUT] }, r.prototype.getInitParamID = function(t) { return null == this.json[this.INIT_PARAM] || null == this.json[this.INIT_PARAM][t] ? null : this.json[this.INIT_PARAM][t][this.ID] }, r.prototype.getInitParamValue = function(t) { return null == this.json[this.INIT_PARAM] || null == this.json[this.INIT_PARAM][t] ? NaN : this.json[this.INIT_PARAM][t][this.VALUE] }, r.prototype.getInitPartsVisibleNum = function() { return null == this.json[this.INIT_PARTS_VISIBLE] ? 0 : this.json[this.INIT_PARTS_VISIBLE].length }, r.prototype.getInitPartsVisibleID = function(t) { return null == this.json[this.INIT_PARTS_VISIBLE] || null == this.json[this.INIT_PARTS_VISIBLE][t] ? null : this.json[this.INIT_PARTS_VISIBLE][t][this.ID] }, r.prototype.getInitPartsVisibleValue = function(t) { return null == this.json[this.INIT_PARTS_VISIBLE] || null == this.json[this.INIT_PARTS_VISIBLE][t] ? NaN : this.json[this.INIT_PARTS_VISIBLE][t][this.VALUE] } }]);