(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/client/src/app/components/LoginPage.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/input.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/label.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function LoginPage(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(30);
    if ($[0] !== "7873c30887b30ac50fe3a1983c0eccb4c6b8e678227d6d2224928575bfdefc12") {
        for(let $i = 0; $i < 30; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "7873c30887b30ac50fe3a1983c0eccb4c6b8e678227d6d2224928575bfdefc12";
    }
    const { onLogin } = t0;
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            {
                id: "1",
                email: "john@example.com",
                password: "password",
                name: "John Smith",
                unit: "Unit A-101",
                role: "Resident"
            },
            {
                id: "2",
                email: "sarah@example.com",
                password: "password",
                name: "Sarah Johnson",
                unit: "Unit B-205",
                role: "Resident"
            },
            {
                id: "3",
                email: "admin@example.com",
                password: "admin",
                name: "Admin User",
                unit: "Management Office",
                role: "Admin"
            }
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const mockUsers = t1;
    let t2;
    if ($[2] !== email || $[3] !== onLogin || $[4] !== password) {
        t2 = ({
            "LoginPage[handleLogin]": (e)=>{
                e.preventDefault();
                setIsLoading(true);
                setTimeout({
                    "LoginPage[handleLogin > setTimeout()]": ()=>{
                        const user = mockUsers.find({
                            "LoginPage[handleLogin > setTimeout() > mockUsers.find()]": (u)=>u.email === email && u.password === password
                        }["LoginPage[handleLogin > setTimeout() > mockUsers.find()]"]);
                        if (user) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Login successful!");
                            onLogin({
                                id: user.id,
                                name: user.name,
                                email: user.email,
                                unit: user.unit,
                                role: user.role
                            });
                        } else {
                            __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Invalid email or password");
                        }
                        setIsLoading(false);
                    }
                }["LoginPage[handleLogin > setTimeout()]"], 1000);
            }
        })["LoginPage[handleLogin]"];
        $[2] = email;
        $[3] = onLogin;
        $[4] = password;
        $[5] = t2;
    } else {
        t2 = $[5];
    }
    const handleLogin = t2;
    let t3;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            className: "space-y-1 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                        className: "h-8 w-8 text-white"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/LoginPage.jsx",
                        lineNumber: 92,
                        columnNumber: 154
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/LoginPage.jsx",
                    lineNumber: 92,
                    columnNumber: 56
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    className: "text-2xl",
                    children: "ResidentPro"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/LoginPage.jsx",
                    lineNumber: 92,
                    columnNumber: 204
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                    children: "Smart Residential Management System"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/LoginPage.jsx",
                    lineNumber: 92,
                    columnNumber: 259
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/LoginPage.jsx",
            lineNumber: 92,
            columnNumber: 10
        }, this);
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    let t4;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "email",
            children: "Email"
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/LoginPage.jsx",
            lineNumber: 99,
            columnNumber: 10
        }, this);
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
            className: "absolute left-3 top-3 h-4 w-4 text-gray-400"
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/LoginPage.jsx",
            lineNumber: 106,
            columnNumber: 10
        }, this);
        $[8] = t5;
    } else {
        t5 = $[8];
    }
    let t6;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = ({
            "LoginPage[<Input>.onChange]": (e_0)=>setEmail(e_0.target.value)
        })["LoginPage[<Input>.onChange]"];
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== email) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        t5,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            id: "email",
                            type: "email",
                            placeholder: "Enter your email",
                            value: email,
                            onChange: t6,
                            className: "pl-10",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/LoginPage.jsx",
                            lineNumber: 122,
                            columnNumber: 71
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/LoginPage.jsx",
                    lineNumber: 122,
                    columnNumber: 41
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/LoginPage.jsx",
            lineNumber: 122,
            columnNumber: 10
        }, this);
        $[10] = email;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "password",
            children: "Password"
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/LoginPage.jsx",
            lineNumber: 130,
            columnNumber: 10
        }, this);
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
            className: "absolute left-3 top-3 h-4 w-4 text-gray-400"
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/LoginPage.jsx",
            lineNumber: 137,
            columnNumber: 10
        }, this);
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = ({
            "LoginPage[<Input>.onChange]": (e_1)=>setPassword(e_1.target.value)
        })["LoginPage[<Input>.onChange]"];
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== password) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t8,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative",
                    children: [
                        t9,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            id: "password",
                            type: "password",
                            placeholder: "Enter your password",
                            value: password,
                            onChange: t10,
                            className: "pl-10",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/LoginPage.jsx",
                            lineNumber: 153,
                            columnNumber: 72
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/LoginPage.jsx",
                    lineNumber: 153,
                    columnNumber: 42
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/LoginPage.jsx",
            lineNumber: 153,
            columnNumber: 11
        }, this);
        $[15] = password;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    const t12 = isLoading ? "Signing in..." : "Sign In";
    let t13;
    if ($[17] !== isLoading || $[18] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "submit",
            className: "w-full",
            disabled: isLoading,
            children: t12
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/LoginPage.jsx",
            lineNumber: 162,
            columnNumber: 11
        }, this);
        $[17] = isLoading;
        $[18] = t12;
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] !== handleLogin || $[21] !== t11 || $[22] !== t13 || $[23] !== t7) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleLogin,
            className: "space-y-4",
            children: [
                t7,
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/LoginPage.jsx",
            lineNumber: 171,
            columnNumber: 11
        }, this);
        $[20] = handleLogin;
        $[21] = t11;
        $[22] = t13;
        $[23] = t7;
        $[24] = t14;
    } else {
        t14 = $[24];
    }
    let t15;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-2 text-sm",
            children: "Demo Credentials:"
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/LoginPage.jsx",
            lineNumber: 182,
            columnNumber: 11
        }, this);
        $[25] = t15;
    } else {
        t15 = $[25];
    }
    let t16;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-600",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                    children: "Resident:"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/LoginPage.jsx",
                    lineNumber: 189,
                    columnNumber: 48
                }, this),
                " john@example.com / password"
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/LoginPage.jsx",
            lineNumber: 189,
            columnNumber: 11
        }, this);
        $[26] = t16;
    } else {
        t16 = $[26];
    }
    let t17;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-6 rounded-lg bg-blue-50 p-4",
            children: [
                t15,
                t16,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xs text-gray-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "Admin:"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/LoginPage.jsx",
                            lineNumber: 196,
                            columnNumber: 106
                        }, this),
                        " admin@example.com / admin"
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/LoginPage.jsx",
                    lineNumber: 196,
                    columnNumber: 69
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/LoginPage.jsx",
            lineNumber: 196,
            columnNumber: 11
        }, this);
        $[27] = t17;
    } else {
        t17 = $[27];
    }
    let t18;
    if ($[28] !== t14) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex min-h-screen items-center justify-center bg-linear-to-br from-blue-50 to-indigo-100 p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                className: "w-full max-w-md",
                children: [
                    t3,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: [
                            t14,
                            t17
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/LoginPage.jsx",
                        lineNumber: 203,
                        columnNumber: 159
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/LoginPage.jsx",
                lineNumber: 203,
                columnNumber: 121
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/LoginPage.jsx",
            lineNumber: 203,
            columnNumber: 11
        }, this);
        $[28] = t14;
        $[29] = t18;
    } else {
        t18 = $[29];
    }
    return t18;
}
_s(LoginPage, "yspgUKwL8+ls5NvZJ6y/WXStyVE=");
_c = LoginPage;
var _c;
__turbopack_context__.k.register(_c, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/app/components/Dashboard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/badge.jsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function Dashboard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(51);
    if ($[0] !== "455acfebe3a7e7b4ab0edc04ecfd967a9020e2bc8ebf9601781fd1d34e3110ad") {
        for(let $i = 0; $i < 51; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "455acfebe3a7e7b4ab0edc04ecfd967a9020e2bc8ebf9601781fd1d34e3110ad";
    }
    const { user } = t0;
    const isAdmin = user.role === "Admin";
    let t1;
    if ($[1] !== isAdmin) {
        t1 = isAdmin ? [
            {
                title: "Total Residents",
                value: "150",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                description: "Active residents",
                color: "text-blue-600",
                bgColor: "bg-blue-50"
            },
            {
                title: "Pending Approvals",
                value: "8",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
                description: "Bookings & requests",
                color: "text-orange-600",
                bgColor: "bg-orange-50"
            },
            {
                title: "Active Visitors",
                value: "12",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                description: "Currently checked in",
                color: "text-purple-600",
                bgColor: "bg-purple-50"
            },
            {
                title: "Total Revenue",
                value: "$67,500",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
                description: "This month",
                color: "text-green-600",
                bgColor: "bg-green-50"
            }
        ] : [
            {
                title: "Upcoming Bookings",
                value: "3",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
                description: "Next 7 days",
                color: "text-blue-600",
                bgColor: "bg-blue-50"
            },
            {
                title: "Pending Payments",
                value: "$450",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
                description: "Maintenance fee due",
                color: "text-green-600",
                bgColor: "bg-green-50"
            },
            {
                title: "Active Visitors",
                value: "2",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                description: "Registered today",
                color: "text-purple-600",
                bgColor: "bg-purple-50"
            },
            {
                title: "Open Requests",
                value: "1",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
                description: "Pending response",
                color: "text-orange-600",
                bgColor: "bg-orange-50"
            }
        ];
        $[1] = isAdmin;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const stats = t1;
    let T0;
    let T1;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let upcomingEvents;
    if ($[3] !== stats || $[4] !== user.name) {
        const recentActivities = [
            {
                id: 1,
                type: "booking",
                title: "Tennis Court Booking Confirmed",
                description: "October 25, 2025 at 2:00 PM",
                time: "2 hours ago",
                status: "success"
            },
            {
                id: 2,
                type: "payment",
                title: "Maintenance Fee Payment Due",
                description: "Amount: $450 - Due: October 31, 2025",
                time: "1 day ago",
                status: "pending"
            },
            {
                id: 3,
                type: "complaint",
                title: "Maintenance Request Updated",
                description: "Air conditioning repair in progress",
                time: "2 days ago",
                status: "progress"
            },
            {
                id: 4,
                type: "visitor",
                title: "Visitor Check-in",
                description: "John Doe checked in at main entrance",
                time: "3 days ago",
                status: "success"
            }
        ];
        let t9;
        if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = [
                {
                    id: 1,
                    title: "Community BBQ Event",
                    date: "October 28, 2025",
                    time: "6:00 PM - 9:00 PM",
                    location: "Event Hall"
                },
                {
                    id: 2,
                    title: "Yoga Class",
                    date: "October 26, 2025",
                    time: "7:00 AM - 8:00 AM",
                    location: "Sports Center"
                },
                {
                    id: 3,
                    title: "Building Maintenance",
                    date: "October 30, 2025",
                    time: "9:00 AM - 5:00 PM",
                    location: "Tower A"
                }
            ];
            $[15] = t9;
        } else {
            t9 = $[15];
        }
        upcomingEvents = t9;
        const getStatusIcon = _DashboardGetStatusIcon;
        t6 = "space-y-6";
        let t10;
        if ($[16] !== user.name) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mb-1",
                children: [
                    "Welcome back, ",
                    user.name,
                    "!"
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/Dashboard.jsx",
                lineNumber: 154,
                columnNumber: 13
            }, this);
            $[16] = user.name;
            $[17] = t10;
        } else {
            t10 = $[17];
        }
        let t11;
        if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-gray-600",
                children: "Here's what's happening with your residence"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/Dashboard.jsx",
                lineNumber: 162,
                columnNumber: 13
            }, this);
            $[18] = t11;
        } else {
            t11 = $[18];
        }
        if ($[19] !== t10) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t10,
                    t11
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/Dashboard.jsx",
                lineNumber: 168,
                columnNumber: 12
            }, this);
            $[19] = t10;
            $[20] = t7;
        } else {
            t7 = $[20];
        }
        if ($[21] !== stats) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
                children: stats.map(_DashboardStatsMap)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/Dashboard.jsx",
                lineNumber: 175,
                columnNumber: 12
            }, this);
            $[21] = stats;
            $[22] = t8;
        } else {
            t8 = $[22];
        }
        t5 = "grid gap-6 lg:grid-cols-2";
        T1 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"];
        if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
            t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    children: "Recent Activities"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/Dashboard.jsx",
                    lineNumber: 184,
                    columnNumber: 24
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/Dashboard.jsx",
                lineNumber: 184,
                columnNumber: 12
            }, this);
            $[23] = t4;
        } else {
            t4 = $[23];
        }
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"];
        t2 = "space-y-4";
        t3 = recentActivities.map({
            "Dashboard[recentActivities.map()]": (activity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-1",
                            children: getStatusIcon(activity.status)
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/Dashboard.jsx",
                            lineNumber: 192,
                            columnNumber: 114
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: activity.title
                                }, void 0, false, {
                                    fileName: "[project]/client/src/app/components/Dashboard.jsx",
                                    lineNumber: 192,
                                    columnNumber: 198
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500",
                                    children: activity.description
                                }, void 0, false, {
                                    fileName: "[project]/client/src/app/components/Dashboard.jsx",
                                    lineNumber: 192,
                                    columnNumber: 241
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/src/app/components/Dashboard.jsx",
                            lineNumber: 192,
                            columnNumber: 174
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-400",
                            children: activity.time
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/Dashboard.jsx",
                            lineNumber: 192,
                            columnNumber: 310
                        }, this)
                    ]
                }, activity.id, true, {
                    fileName: "[project]/client/src/app/components/Dashboard.jsx",
                    lineNumber: 192,
                    columnNumber: 56
                }, this)
        }["Dashboard[recentActivities.map()]"]);
        $[3] = stats;
        $[4] = user.name;
        $[5] = T0;
        $[6] = T1;
        $[7] = t2;
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
        $[12] = t7;
        $[13] = t8;
        $[14] = upcomingEvents;
    } else {
        T0 = $[5];
        T1 = $[6];
        t2 = $[7];
        t3 = $[8];
        t4 = $[9];
        t5 = $[10];
        t6 = $[11];
        t7 = $[12];
        t8 = $[13];
        upcomingEvents = $[14];
    }
    let t9;
    if ($[24] !== t2 || $[25] !== t3) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: t3
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/Dashboard.jsx",
            lineNumber: 220,
            columnNumber: 10
        }, this);
        $[24] = t2;
        $[25] = t3;
        $[26] = t9;
    } else {
        t9 = $[26];
    }
    let t10;
    if ($[27] !== T0 || $[28] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            children: t9
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/Dashboard.jsx",
            lineNumber: 229,
            columnNumber: 11
        }, this);
        $[27] = T0;
        $[28] = t9;
        $[29] = t10;
    } else {
        t10 = $[29];
    }
    let t11;
    if ($[30] !== T1 || $[31] !== t10 || $[32] !== t4) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T1, {
            children: [
                t4,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/Dashboard.jsx",
            lineNumber: 238,
            columnNumber: 11
        }, this);
        $[30] = T1;
        $[31] = t10;
        $[32] = t4;
        $[33] = t11;
    } else {
        t11 = $[33];
    }
    let t12;
    if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                children: "Upcoming Events"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/Dashboard.jsx",
                lineNumber: 248,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/Dashboard.jsx",
            lineNumber: 248,
            columnNumber: 11
        }, this);
        $[34] = t12;
    } else {
        t12 = $[34];
    }
    let t13;
    if ($[35] !== upcomingEvents) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                t12,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: upcomingEvents.map(_DashboardUpcomingEventsMap)
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/Dashboard.jsx",
                        lineNumber: 255,
                        columnNumber: 35
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/Dashboard.jsx",
                    lineNumber: 255,
                    columnNumber: 22
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/Dashboard.jsx",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        $[35] = upcomingEvents;
        $[36] = t13;
    } else {
        t13 = $[36];
    }
    let t14;
    if ($[37] !== t11 || $[38] !== t13 || $[39] !== t5) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t11,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/Dashboard.jsx",
            lineNumber: 263,
            columnNumber: 11
        }, this);
        $[37] = t11;
        $[38] = t13;
        $[39] = t5;
        $[40] = t14;
    } else {
        t14 = $[40];
    }
    let t15;
    if ($[41] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                children: "Quick Actions"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/Dashboard.jsx",
                lineNumber: 273,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/Dashboard.jsx",
            lineNumber: 273,
            columnNumber: 11
        }, this);
        $[41] = t15;
    } else {
        t15 = $[41];
    }
    let t16;
    if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "rounded-lg border border-gray-200 p-4 text-left transition hover:border-blue-500 hover:bg-blue-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                    className: "mb-2 h-5 w-5 text-blue-600"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/Dashboard.jsx",
                    lineNumber: 280,
                    columnNumber: 129
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm",
                    children: "Register Visitor"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/Dashboard.jsx",
                    lineNumber: 280,
                    columnNumber: 177
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/Dashboard.jsx",
            lineNumber: 280,
            columnNumber: 11
        }, this);
        $[42] = t16;
    } else {
        t16 = $[42];
    }
    let t17;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "rounded-lg border border-gray-200 p-4 text-left transition hover:border-green-500 hover:bg-green-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                    className: "mb-2 h-5 w-5 text-green-600"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/Dashboard.jsx",
                    lineNumber: 287,
                    columnNumber: 131
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm",
                    children: "Book Facility"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/Dashboard.jsx",
                    lineNumber: 287,
                    columnNumber: 183
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/Dashboard.jsx",
            lineNumber: 287,
            columnNumber: 11
        }, this);
        $[43] = t17;
    } else {
        t17 = $[43];
    }
    let t18;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "rounded-lg border border-gray-200 p-4 text-left transition hover:border-purple-500 hover:bg-purple-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                    className: "mb-2 h-5 w-5 text-purple-600"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/Dashboard.jsx",
                    lineNumber: 294,
                    columnNumber: 133
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm",
                    children: "Pay Fees"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/Dashboard.jsx",
                    lineNumber: 294,
                    columnNumber: 188
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/Dashboard.jsx",
            lineNumber: 294,
            columnNumber: 11
        }, this);
        $[44] = t18;
    } else {
        t18 = $[44];
    }
    let t19;
    if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
                        children: [
                            t16,
                            t17,
                            t18,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "rounded-lg border border-gray-200 p-4 text-left transition hover:border-orange-500 hover:bg-orange-50",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                        className: "mb-2 h-5 w-5 text-orange-600"
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/Dashboard.jsx",
                                        lineNumber: 301,
                                        columnNumber: 230
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm",
                                        children: "Submit Request"
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/Dashboard.jsx",
                                        lineNumber: 301,
                                        columnNumber: 288
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/src/app/components/Dashboard.jsx",
                                lineNumber: 301,
                                columnNumber: 108
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/Dashboard.jsx",
                        lineNumber: 301,
                        columnNumber: 35
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/Dashboard.jsx",
                    lineNumber: 301,
                    columnNumber: 22
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/Dashboard.jsx",
            lineNumber: 301,
            columnNumber: 11
        }, this);
        $[45] = t19;
    } else {
        t19 = $[45];
    }
    let t20;
    if ($[46] !== t14 || $[47] !== t6 || $[48] !== t7 || $[49] !== t8) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t7,
                t8,
                t14,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/Dashboard.jsx",
            lineNumber: 308,
            columnNumber: 11
        }, this);
        $[46] = t14;
        $[47] = t6;
        $[48] = t7;
        $[49] = t8;
        $[50] = t20;
    } else {
        t20 = $[50];
    }
    return t20;
}
_c = Dashboard;
function _DashboardUpcomingEventsMap(event) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-lg border p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start justify-between",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm",
                            children: event.title
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/Dashboard.jsx",
                            lineNumber: 320,
                            columnNumber: 119
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-xs text-gray-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                    className: "mr-1 inline h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/client/src/app/components/Dashboard.jsx",
                                    lineNumber: 320,
                                    columnNumber: 201
                                }, this),
                                event.date
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/src/app/components/Dashboard.jsx",
                            lineNumber: 320,
                            columnNumber: 159
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-xs text-gray-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                    className: "mr-1 inline h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/client/src/app/components/Dashboard.jsx",
                                    lineNumber: 320,
                                    columnNumber: 303
                                }, this),
                                event.time
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/src/app/components/Dashboard.jsx",
                            lineNumber: 320,
                            columnNumber: 261
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/Dashboard.jsx",
                    lineNumber: 320,
                    columnNumber: 114
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    variant: "outline",
                    children: event.location
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/Dashboard.jsx",
                    lineNumber: 320,
                    columnNumber: 366
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/Dashboard.jsx",
            lineNumber: 320,
            columnNumber: 64
        }, this)
    }, event.id, false, {
        fileName: "[project]/client/src/app/components/Dashboard.jsx",
        lineNumber: 320,
        columnNumber: 10
    }, this);
}
function _DashboardStatsMap(stat) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600",
                                children: stat.title
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/Dashboard.jsx",
                                lineNumber: 323,
                                columnNumber: 118
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-2xl",
                                children: stat.value
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/Dashboard.jsx",
                                lineNumber: 323,
                                columnNumber: 171
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs text-gray-500",
                                children: stat.description
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/Dashboard.jsx",
                                lineNumber: 323,
                                columnNumber: 216
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/Dashboard.jsx",
                        lineNumber: 323,
                        columnNumber: 113
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${stat.bgColor} rounded-lg p-3`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                            className: `h-6 w-6 ${stat.color}`
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/Dashboard.jsx",
                            lineNumber: 323,
                            columnNumber: 336
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/Dashboard.jsx",
                        lineNumber: 323,
                        columnNumber: 286
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/Dashboard.jsx",
                lineNumber: 323,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/Dashboard.jsx",
            lineNumber: 323,
            columnNumber: 33
        }, this)
    }, stat.title, false, {
        fileName: "[project]/client/src/app/components/Dashboard.jsx",
        lineNumber: 323,
        columnNumber: 10
    }, this);
}
function _DashboardGetStatusIcon(status) {
    switch(status){
        case "success":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                    className: "h-5 w-5 text-green-600"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/Dashboard.jsx",
                    lineNumber: 329,
                    columnNumber: 16
                }, this);
            }
        case "pending":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                    className: "h-5 w-5 text-orange-600"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/Dashboard.jsx",
                    lineNumber: 333,
                    columnNumber: 16
                }, this);
            }
        case "progress":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                    className: "h-5 w-5 text-blue-600"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/Dashboard.jsx",
                    lineNumber: 337,
                    columnNumber: 16
                }, this);
            }
        default:
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "h-5 w-5 text-gray-600"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/Dashboard.jsx",
                    lineNumber: 341,
                    columnNumber: 16
                }, this);
            }
    }
}
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/app/components/AdminDashboard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/building-2.js [app-client] (ecmascript) <export default as Building2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/badge.jsx [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function AdminDashboard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(11);
    if ($[0] !== "84052542b576ffdfd20a6479363ea8a248430d13b50d28cfbc67685a814b7d77") {
        for(let $i = 0; $i < 11; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "84052542b576ffdfd20a6479363ea8a248430d13b50d28cfbc67685a814b7d77";
    }
    let t1;
    let t2;
    let t3;
    let t4;
    let t5;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        const stats = [
            {
                title: "Total Residents",
                value: "150",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                description: "Active residents",
                color: "text-blue-600",
                bgColor: "bg-blue-50",
                change: "+5 this month"
            },
            {
                title: "Active Visitors",
                value: "12",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"],
                description: "Currently checked in",
                color: "text-purple-600",
                bgColor: "bg-purple-50",
                change: "8 today"
            },
            {
                title: "Pending Requests",
                value: "8",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
                description: "Awaiting response",
                color: "text-orange-600",
                bgColor: "bg-orange-50",
                change: "3 high priority"
            },
            {
                title: "Monthly Revenue",
                value: "$67,500",
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"],
                description: "October 2025",
                color: "text-green-600",
                bgColor: "bg-green-50",
                change: "+12% vs last month"
            }
        ];
        const recentActivities = [
            {
                id: 1,
                type: "resident",
                title: "New Resident Registration",
                description: "Emily Chen registered in Unit D-401",
                time: "1 hour ago",
                status: "success"
            },
            {
                id: 2,
                type: "complaint",
                title: "High Priority Maintenance Request",
                description: "Unit B-205: Elevator malfunction reported",
                time: "2 hours ago",
                status: "urgent"
            },
            {
                id: 3,
                type: "payment",
                title: "Payment Received",
                description: "Unit A-101: $450 maintenance fee paid",
                time: "3 hours ago",
                status: "success"
            },
            {
                id: 4,
                type: "booking",
                title: "Event Hall Booking",
                description: "Unit C-304: Main Hall booked for Nov 15",
                time: "4 hours ago",
                status: "pending"
            },
            {
                id: 5,
                type: "visitor",
                title: "Multiple Visitor Check-ins",
                description: "8 visitors checked in across all units",
                time: "5 hours ago",
                status: "info"
            }
        ];
        const buildingOccupancy = [
            {
                building: "Tower A",
                total: 50,
                occupied: 48,
                occupancy: 96
            },
            {
                building: "Tower B",
                total: 50,
                occupied: 45,
                occupancy: 90
            },
            {
                building: "Tower C",
                total: 50,
                occupied: 47,
                occupancy: 94
            },
            {
                building: "Tower D",
                total: 50,
                occupied: 10,
                occupancy: 20
            }
        ];
        const pendingApprovals = [
            {
                id: 1,
                type: "Booking",
                item: "Event Hall - Wedding Reception",
                requester: "Sarah Johnson (Unit B-205)",
                date: "Nov 20, 2025",
                priority: "high"
            },
            {
                id: 2,
                type: "Maintenance",
                item: "AC Installation Request",
                requester: "John Smith (Unit A-101)",
                date: "Oct 25, 2025",
                priority: "medium"
            },
            {
                id: 3,
                type: "Complaint",
                item: "Noise Complaint - Late Hours",
                requester: "Mike Wilson (Unit C-304)",
                date: "Oct 24, 2025",
                priority: "low"
            }
        ];
        const getStatusIcon = _AdminDashboardGetStatusIcon;
        const getPriorityBadge = _AdminDashboardGetPriorityBadge;
        t1 = "space-y-6";
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Admin Dashboard"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                    lineNumber: 136,
                    columnNumber: 15
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: "Manage and monitor the entire residential community"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                    lineNumber: 136,
                    columnNumber: 39
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
            lineNumber: 136,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4",
            children: stats.map(_AdminDashboardStatsMap)
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
            lineNumber: 137,
            columnNumber: 10
        }, this);
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-6 lg:grid-cols-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                children: "Recent Activities"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                                lineNumber: 138,
                                columnNumber: 71
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                            lineNumber: 138,
                            columnNumber: 59
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: recentActivities.map({
                                    "AdminDashboard[recentActivities.map()]": (activity)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-start gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1",
                                                    children: getStatusIcon(activity.status)
                                                }, void 0, false, {
                                                    fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                                                    lineNumber: 139,
                                                    columnNumber: 127
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm",
                                                            children: activity.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                                                            lineNumber: 139,
                                                            columnNumber: 211
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-500",
                                                            children: activity.description
                                                        }, void 0, false, {
                                                            fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                                                            lineNumber: 139,
                                                            columnNumber: 254
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                                                    lineNumber: 139,
                                                    columnNumber: 187
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-400",
                                                    children: activity.time
                                                }, void 0, false, {
                                                    fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                                                    lineNumber: 139,
                                                    columnNumber: 323
                                                }, this)
                                            ]
                                        }, activity.id, true, {
                                            fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                                            lineNumber: 139,
                                            columnNumber: 69
                                        }, this)
                                }["AdminDashboard[recentActivities.map()]"])
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                                lineNumber: 138,
                                columnNumber: 137
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                            lineNumber: 138,
                            columnNumber: 124
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                    lineNumber: 138,
                    columnNumber: 53
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                                children: "Building Occupancy"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                                lineNumber: 140,
                                columnNumber: 103
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                            lineNumber: 140,
                            columnNumber: 91
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: buildingOccupancy.map(_AdminDashboardBuildingOccupancyMap)
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                                lineNumber: 140,
                                columnNumber: 170
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                            lineNumber: 140,
                            columnNumber: 157
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                    lineNumber: 140,
                    columnNumber: 85
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
            lineNumber: 138,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: "Pending Approvals"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                        lineNumber: 141,
                        columnNumber: 28
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                    lineNumber: 141,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: pendingApprovals.map({
                            "AdminDashboard[pendingApprovals.map()]": (approval)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between rounded-lg border p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                            variant: "outline",
                                                            children: approval.type
                                                        }, void 0, false, {
                                                            fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                                                            lineNumber: 142,
                                                            columnNumber: 223
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm",
                                                            children: approval.item
                                                        }, void 0, false, {
                                                            fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                                                            lineNumber: 142,
                                                            columnNumber: 271
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                                                    lineNumber: 142,
                                                    columnNumber: 182
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-xs text-gray-500",
                                                    children: [
                                                        approval.requester,
                                                        " • ",
                                                        approval.date
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                                                    lineNumber: 142,
                                                    columnNumber: 319
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                                            lineNumber: 142,
                                            columnNumber: 158
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: getPriorityBadge(approval.priority)
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                                            lineNumber: 142,
                                            columnNumber: 409
                                        }, this)
                                    ]
                                }, approval.id, true, {
                                    fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                                    lineNumber: 142,
                                    columnNumber: 67
                                }, this)
                        }["AdminDashboard[pendingApprovals.map()]"])
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                        lineNumber: 141,
                        columnNumber: 94
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                    lineNumber: 141,
                    columnNumber: 81
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
            lineNumber: 141,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
        $[4] = t4;
        $[5] = t5;
    } else {
        t1 = $[1];
        t2 = $[2];
        t3 = $[3];
        t4 = $[4];
        t5 = $[5];
    }
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                children: "Quick Actions"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                lineNumber: 158,
                columnNumber: 22
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
            lineNumber: 158,
            columnNumber: 10
        }, this);
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "rounded-lg border border-gray-200 p-4 text-left transition hover:border-blue-500 hover:bg-blue-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {
                    className: "mb-2 h-5 w-5 text-blue-600"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                    lineNumber: 165,
                    columnNumber: 128
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm",
                    children: "Manage Residents"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                    lineNumber: 165,
                    columnNumber: 176
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
            lineNumber: 165,
            columnNumber: 10
        }, this);
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    let t8;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "rounded-lg border border-gray-200 p-4 text-left transition hover:border-green-500 hover:bg-green-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                    className: "mb-2 h-5 w-5 text-green-600"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                    lineNumber: 172,
                    columnNumber: 130
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm",
                    children: "Review Requests"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                    lineNumber: 172,
                    columnNumber: 187
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
            lineNumber: 172,
            columnNumber: 10
        }, this);
        $[8] = t8;
    } else {
        t8 = $[8];
    }
    let t9;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "rounded-lg border border-gray-200 p-4 text-left transition hover:border-purple-500 hover:bg-purple-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                    className: "mb-2 h-5 w-5 text-purple-600"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                    lineNumber: 179,
                    columnNumber: 132
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm",
                    children: "Financial Reports"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                    lineNumber: 179,
                    columnNumber: 187
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
            lineNumber: 179,
            columnNumber: 10
        }, this);
        $[9] = t9;
    } else {
        t9 = $[9];
    }
    let t10;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t1,
            children: [
                t2,
                t3,
                t4,
                t5,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                    children: [
                        t6,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
                                children: [
                                    t7,
                                    t8,
                                    t9,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "rounded-lg border border-gray-200 p-4 text-left transition hover:border-orange-500 hover:bg-orange-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "mb-2 h-5 w-5 text-orange-600"
                                            }, void 0, false, {
                                                fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                                                lineNumber: 186,
                                                columnNumber: 262
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm",
                                                children: "View All Bookings"
                                            }, void 0, false, {
                                                fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                                                lineNumber: 186,
                                                columnNumber: 315
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                                        lineNumber: 186,
                                        columnNumber: 140
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                                lineNumber: 186,
                                columnNumber: 70
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                            lineNumber: 186,
                            columnNumber: 57
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                    lineNumber: 186,
                    columnNumber: 47
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
            lineNumber: 186,
            columnNumber: 11
        }, this);
        $[10] = t10;
    } else {
        t10 = $[10];
    }
    return t10;
}
_c = AdminDashboard;
function _AdminDashboardBuildingOccupancyMap(building) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building2$3e$__["Building2"], {
                                className: "h-4 w-4 text-gray-500"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                                lineNumber: 194,
                                columnNumber: 153
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-sm",
                                children: building.building
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                                lineNumber: 194,
                                columnNumber: 200
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                        lineNumber: 194,
                        columnNumber: 112
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm",
                        children: [
                            building.occupied,
                            "/",
                            building.total,
                            " units (",
                            building.occupancy,
                            "%)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                        lineNumber: 194,
                        columnNumber: 258
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                lineNumber: 194,
                columnNumber: 61
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-2 w-full overflow-hidden rounded-full bg-gray-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full bg-blue-600 transition-all",
                    style: {
                        width: `${building.occupancy}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                    lineNumber: 194,
                    columnNumber: 432
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                lineNumber: 194,
                columnNumber: 363
            }, this)
        ]
    }, building.building, true, {
        fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
        lineNumber: 194,
        columnNumber: 10
    }, this);
}
function _AdminDashboardStatsMap(stat) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
            className: "p-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600",
                                children: stat.title
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                                lineNumber: 199,
                                columnNumber: 118
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-2xl",
                                children: stat.value
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                                lineNumber: 199,
                                columnNumber: 171
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs text-gray-500",
                                children: stat.description
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                                lineNumber: 199,
                                columnNumber: 216
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-1 text-xs text-green-600",
                                children: stat.change
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                                lineNumber: 199,
                                columnNumber: 280
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                        lineNumber: 199,
                        columnNumber: 113
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${stat.bgColor} rounded-lg p-3`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(stat.icon, {
                            className: `h-6 w-6 ${stat.color}`
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                            lineNumber: 199,
                            columnNumber: 396
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                        lineNumber: 199,
                        columnNumber: 346
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                lineNumber: 199,
                columnNumber: 62
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
            lineNumber: 199,
            columnNumber: 33
        }, this)
    }, stat.title, false, {
        fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
        lineNumber: 199,
        columnNumber: 10
    }, this);
}
function _AdminDashboardGetPriorityBadge(priority) {
    switch(priority){
        case "high":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-red-100 text-red-800",
                    children: "High Priority"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                    lineNumber: 205,
                    columnNumber: 16
                }, this);
            }
        case "medium":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-orange-100 text-orange-800",
                    children: "Medium"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                    lineNumber: 209,
                    columnNumber: 16
                }, this);
            }
        case "low":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-gray-100 text-gray-800",
                    children: "Low"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                    lineNumber: 213,
                    columnNumber: 16
                }, this);
            }
        default:
            {
                return null;
            }
    }
}
function _AdminDashboardGetStatusIcon(status) {
    switch(status){
        case "success":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                    className: "h-5 w-5 text-green-600"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                    lineNumber: 225,
                    columnNumber: 16
                }, this);
            }
        case "pending":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                    className: "h-5 w-5 text-orange-600"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                    lineNumber: 229,
                    columnNumber: 16
                }, this);
            }
        case "urgent":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "h-5 w-5 text-red-600"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                    lineNumber: 233,
                    columnNumber: 16
                }, this);
            }
        case "info":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                    className: "h-5 w-5 text-blue-600"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                    lineNumber: 237,
                    columnNumber: 16
                }, this);
            }
        default:
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "h-5 w-5 text-gray-600"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/AdminDashboard.jsx",
                    lineNumber: 241,
                    columnNumber: 16
                }, this);
            }
    }
}
var _c;
__turbopack_context__.k.register(_c, "AdminDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/app/components/ResidentManagement.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/input.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/table.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/badge.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/user-x.js [app-client] (ecmascript) <export default as UserX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/house.js [app-client] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/dialog.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/label.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
function ResidentManagement(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(167);
    if ($[0] !== "3437e3758d53fdb0e46ae19c7011d1a9c82780cc8519e6152b718b7dd26d3a80") {
        for(let $i = 0; $i < 167; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3437e3758d53fdb0e46ae19c7011d1a9c82780cc8519e6152b718b7dd26d3a80";
    }
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            {
                id: "1",
                name: "John Smith",
                email: "john@example.com",
                phone: "+1-555-0101",
                unit: "Unit A-101",
                moveInDate: "2023-01-15",
                status: "active",
                paymentStatus: "current",
                balance: 0
            },
            {
                id: "2",
                name: "Sarah Johnson",
                email: "sarah@example.com",
                phone: "+1-555-0102",
                unit: "Unit B-205",
                moveInDate: "2023-03-20",
                status: "active",
                paymentStatus: "current",
                balance: 0
            },
            {
                id: "3",
                name: "Mike Wilson",
                email: "mike@example.com",
                phone: "+1-555-0103",
                unit: "Unit C-304",
                moveInDate: "2022-11-10",
                status: "active",
                paymentStatus: "overdue",
                balance: 450
            },
            {
                id: "4",
                name: "Emily Chen",
                email: "emily@example.com",
                phone: "+1-555-0104",
                unit: "Unit D-401",
                moveInDate: "2025-10-01",
                status: "active",
                paymentStatus: "current",
                balance: 0
            },
            {
                id: "5",
                name: "David Brown",
                email: "david@example.com",
                phone: "+1-555-0105",
                unit: "Unit A-203",
                moveInDate: "2024-05-15",
                status: "inactive",
                paymentStatus: "current",
                balance: 0
            }
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [residents, setResidents] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isDialogOpen, setIsDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingResident, setEditingResident] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            name: "",
            email: "",
            phone: "",
            unit: "",
            moveInDate: ""
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const [newResident, setNewResident] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    let t3;
    if ($[3] !== newResident.email || $[4] !== newResident.moveInDate || $[5] !== newResident.name || $[6] !== newResident.phone || $[7] !== newResident.unit || $[8] !== residents) {
        t3 = ({
            "ResidentManagement[handleAddResident]": (e)=>{
                e.preventDefault();
                const resident = {
                    id: Date.now().toString(),
                    name: newResident.name,
                    email: newResident.email,
                    phone: newResident.phone,
                    unit: newResident.unit,
                    moveInDate: newResident.moveInDate,
                    status: "active",
                    paymentStatus: "current",
                    balance: 0
                };
                setResidents([
                    ...residents,
                    resident
                ]);
                setNewResident({
                    name: "",
                    email: "",
                    phone: "",
                    unit: "",
                    moveInDate: ""
                });
                setIsDialogOpen(false);
                __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Resident added successfully!");
            }
        })["ResidentManagement[handleAddResident]"];
        $[3] = newResident.email;
        $[4] = newResident.moveInDate;
        $[5] = newResident.name;
        $[6] = newResident.phone;
        $[7] = newResident.unit;
        $[8] = residents;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    const handleAddResident = t3;
    let t4;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "ResidentManagement[handleEditResident]": (resident_0)=>{
                setEditingResident(resident_0);
                setNewResident({
                    name: resident_0.name,
                    email: resident_0.email,
                    phone: resident_0.phone,
                    unit: resident_0.unit,
                    moveInDate: resident_0.moveInDate
                });
                setIsDialogOpen(true);
            }
        })["ResidentManagement[handleEditResident]"];
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    const handleEditResident = t4;
    let t5;
    if ($[11] !== editingResident || $[12] !== newResident.email || $[13] !== newResident.moveInDate || $[14] !== newResident.name || $[15] !== newResident.phone || $[16] !== newResident.unit || $[17] !== residents) {
        t5 = ({
            "ResidentManagement[handleUpdateResident]": (e_0)=>{
                e_0.preventDefault();
                if (editingResident) {
                    setResidents(residents.map({
                        "ResidentManagement[handleUpdateResident > residents.map()]": (r)=>r.id === editingResident.id ? {
                                ...r,
                                name: newResident.name,
                                email: newResident.email,
                                phone: newResident.phone,
                                unit: newResident.unit,
                                moveInDate: newResident.moveInDate
                            } : r
                    }["ResidentManagement[handleUpdateResident > residents.map()]"]));
                    setEditingResident(null);
                    setNewResident({
                        name: "",
                        email: "",
                        phone: "",
                        unit: "",
                        moveInDate: ""
                    });
                    setIsDialogOpen(false);
                    __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Resident updated successfully!");
                }
            }
        })["ResidentManagement[handleUpdateResident]"];
        $[11] = editingResident;
        $[12] = newResident.email;
        $[13] = newResident.moveInDate;
        $[14] = newResident.name;
        $[15] = newResident.phone;
        $[16] = newResident.unit;
        $[17] = residents;
        $[18] = t5;
    } else {
        t5 = $[18];
    }
    const handleUpdateResident = t5;
    let t6;
    if ($[19] !== residents) {
        t6 = ({
            "ResidentManagement[handleDeleteResident]": (id)=>{
                if (window.confirm("Are you sure you want to delete this resident?")) {
                    setResidents(residents.filter({
                        "ResidentManagement[handleDeleteResident > residents.filter()]": (r_0)=>r_0.id !== id
                    }["ResidentManagement[handleDeleteResident > residents.filter()]"]));
                    __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Resident deleted successfully!");
                }
            }
        })["ResidentManagement[handleDeleteResident]"];
        $[19] = residents;
        $[20] = t6;
    } else {
        t6 = $[20];
    }
    const handleDeleteResident = t6;
    let t7;
    if ($[21] !== residents) {
        t7 = ({
            "ResidentManagement[handleToggleStatus]": (id_0)=>{
                setResidents(residents.map({
                    "ResidentManagement[handleToggleStatus > residents.map()]": (r_1)=>r_1.id === id_0 ? {
                            ...r_1,
                            status: r_1.status === "active" ? "inactive" : "active"
                        } : r_1
                }["ResidentManagement[handleToggleStatus > residents.map()]"]));
                __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Resident status updated!");
            }
        })["ResidentManagement[handleToggleStatus]"];
        $[21] = residents;
        $[22] = t7;
    } else {
        t7 = $[22];
    }
    const handleToggleStatus = t7;
    let T0;
    let T1;
    let T2;
    let T3;
    let t10;
    let t11;
    let t12;
    let t13;
    let t8;
    let t9;
    if ($[23] !== editingResident || $[24] !== handleAddResident || $[25] !== handleDeleteResident || $[26] !== handleToggleStatus || $[27] !== handleUpdateResident || $[28] !== isDialogOpen || $[29] !== newResident || $[30] !== residents || $[31] !== searchTerm) {
        let t14;
        if ($[42] !== searchTerm) {
            t14 = ({
                "ResidentManagement[residents.filter()]": (r_2)=>r_2.name.toLowerCase().includes(searchTerm.toLowerCase()) || r_2.email.toLowerCase().includes(searchTerm.toLowerCase()) || r_2.unit.toLowerCase().includes(searchTerm.toLowerCase())
            })["ResidentManagement[residents.filter()]"];
            $[42] = searchTerm;
            $[43] = t14;
        } else {
            t14 = $[43];
        }
        const filteredResidents = residents.filter(t14);
        let t15;
        if ($[44] !== residents) {
            t15 = residents.filter(_ResidentManagementResidentsFilter);
            $[44] = residents;
            $[45] = t15;
        } else {
            t15 = $[45];
        }
        const activeResidents = t15.length;
        let t16;
        if ($[46] !== residents) {
            t16 = residents.filter(_ResidentManagementResidentsFilter2);
            $[46] = residents;
            $[47] = t16;
        } else {
            t16 = $[47];
        }
        const overduePayments = t16.length;
        let t17;
        if ($[48] !== residents) {
            t17 = residents.reduce(_ResidentManagementResidentsReduce, 0);
            $[48] = residents;
            $[49] = t17;
        } else {
            t17 = $[49];
        }
        const totalBalance = t17;
        t11 = "space-y-6";
        let t18;
        if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Resident Management"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                        lineNumber: 286,
                        columnNumber: 18
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600",
                        children: "Manage all residents in the community"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                        lineNumber: 286,
                        columnNumber: 46
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 286,
                columnNumber: 13
            }, this);
            $[50] = t18;
        } else {
            t18 = $[50];
        }
        let t19;
        if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
            t19 = ({
                "ResidentManagement[<Dialog>.onOpenChange]": (open)=>{
                    setIsDialogOpen(open);
                    if (!open) {
                        setEditingResident(null);
                        setNewResident({
                            name: "",
                            email: "",
                            phone: "",
                            unit: "",
                            moveInDate: ""
                        });
                    }
                }
            })["ResidentManagement[<Dialog>.onOpenChange]"];
            $[51] = t19;
        } else {
            t19 = $[51];
        }
        let t20;
        if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            className: "mr-2 h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                            lineNumber: 314,
                            columnNumber: 51
                        }, this),
                        "Add Resident"
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                    lineNumber: 314,
                    columnNumber: 43
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 314,
                columnNumber: 13
            }, this);
            $[52] = t20;
        } else {
            t20 = $[52];
        }
        const t21 = editingResident ? "Edit Resident" : "Add New Resident";
        let t22;
        if ($[53] !== t21) {
            t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                children: t21
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 322,
                columnNumber: 13
            }, this);
            $[53] = t21;
            $[54] = t22;
        } else {
            t22 = $[54];
        }
        const t23 = editingResident ? "Update resident information" : "Enter details to add a new resident";
        let t24;
        if ($[55] !== t23) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                children: t23
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 331,
                columnNumber: 13
            }, this);
            $[55] = t23;
            $[56] = t24;
        } else {
            t24 = $[56];
        }
        let t25;
        if ($[57] !== t22 || $[58] !== t24) {
            t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                children: [
                    t22,
                    t24
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 339,
                columnNumber: 13
            }, this);
            $[57] = t22;
            $[58] = t24;
            $[59] = t25;
        } else {
            t25 = $[59];
        }
        const t26 = editingResident ? handleUpdateResident : handleAddResident;
        let t27;
        if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
            t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                htmlFor: "name",
                children: "Full Name"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 349,
                columnNumber: 13
            }, this);
            $[60] = t27;
        } else {
            t27 = $[60];
        }
        let t28;
        if ($[61] !== newResident) {
            t28 = ({
                "ResidentManagement[<Input>.onChange]": (e_1)=>setNewResident({
                        ...newResident,
                        name: e_1.target.value
                    })
            })["ResidentManagement[<Input>.onChange]"];
            $[61] = newResident;
            $[62] = t28;
        } else {
            t28 = $[62];
        }
        let t29;
        if ($[63] !== newResident.name || $[64] !== t28) {
            t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    t27,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "name",
                        value: newResident.name,
                        onChange: t28,
                        placeholder: "Enter full name",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                        lineNumber: 369,
                        columnNumber: 45
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 369,
                columnNumber: 13
            }, this);
            $[63] = newResident.name;
            $[64] = t28;
            $[65] = t29;
        } else {
            t29 = $[65];
        }
        let t30;
        if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
            t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                htmlFor: "email",
                children: "Email"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 378,
                columnNumber: 13
            }, this);
            $[66] = t30;
        } else {
            t30 = $[66];
        }
        let t31;
        if ($[67] !== newResident) {
            t31 = ({
                "ResidentManagement[<Input>.onChange]": (e_2)=>setNewResident({
                        ...newResident,
                        email: e_2.target.value
                    })
            })["ResidentManagement[<Input>.onChange]"];
            $[67] = newResident;
            $[68] = t31;
        } else {
            t31 = $[68];
        }
        let t32;
        if ($[69] !== newResident.email || $[70] !== t31) {
            t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    t30,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "email",
                        type: "email",
                        value: newResident.email,
                        onChange: t31,
                        placeholder: "email@example.com",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                        lineNumber: 398,
                        columnNumber: 45
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 398,
                columnNumber: 13
            }, this);
            $[69] = newResident.email;
            $[70] = t31;
            $[71] = t32;
        } else {
            t32 = $[71];
        }
        let t33;
        if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
            t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                htmlFor: "phone",
                children: "Phone Number"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 407,
                columnNumber: 13
            }, this);
            $[72] = t33;
        } else {
            t33 = $[72];
        }
        let t34;
        if ($[73] !== newResident) {
            t34 = ({
                "ResidentManagement[<Input>.onChange]": (e_3)=>setNewResident({
                        ...newResident,
                        phone: e_3.target.value
                    })
            })["ResidentManagement[<Input>.onChange]"];
            $[73] = newResident;
            $[74] = t34;
        } else {
            t34 = $[74];
        }
        let t35;
        if ($[75] !== newResident.phone || $[76] !== t34) {
            t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    t33,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "phone",
                        type: "tel",
                        value: newResident.phone,
                        onChange: t34,
                        placeholder: "+1-555-0100",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                        lineNumber: 427,
                        columnNumber: 45
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 427,
                columnNumber: 13
            }, this);
            $[75] = newResident.phone;
            $[76] = t34;
            $[77] = t35;
        } else {
            t35 = $[77];
        }
        let t36;
        if ($[78] === Symbol.for("react.memo_cache_sentinel")) {
            t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                htmlFor: "unit",
                children: "Unit Number"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 436,
                columnNumber: 13
            }, this);
            $[78] = t36;
        } else {
            t36 = $[78];
        }
        let t37;
        if ($[79] !== newResident) {
            t37 = ({
                "ResidentManagement[<Input>.onChange]": (e_4)=>setNewResident({
                        ...newResident,
                        unit: e_4.target.value
                    })
            })["ResidentManagement[<Input>.onChange]"];
            $[79] = newResident;
            $[80] = t37;
        } else {
            t37 = $[80];
        }
        let t38;
        if ($[81] !== newResident.unit || $[82] !== t37) {
            t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    t36,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "unit",
                        value: newResident.unit,
                        onChange: t37,
                        placeholder: "e.g., Unit A-101",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                        lineNumber: 456,
                        columnNumber: 45
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 456,
                columnNumber: 13
            }, this);
            $[81] = newResident.unit;
            $[82] = t37;
            $[83] = t38;
        } else {
            t38 = $[83];
        }
        let t39;
        if ($[84] === Symbol.for("react.memo_cache_sentinel")) {
            t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                htmlFor: "moveInDate",
                children: "Move-in Date"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 465,
                columnNumber: 13
            }, this);
            $[84] = t39;
        } else {
            t39 = $[84];
        }
        let t40;
        if ($[85] !== newResident) {
            t40 = ({
                "ResidentManagement[<Input>.onChange]": (e_5)=>setNewResident({
                        ...newResident,
                        moveInDate: e_5.target.value
                    })
            })["ResidentManagement[<Input>.onChange]"];
            $[85] = newResident;
            $[86] = t40;
        } else {
            t40 = $[86];
        }
        let t41;
        if ($[87] !== newResident.moveInDate || $[88] !== t40) {
            t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    t39,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "moveInDate",
                        type: "date",
                        value: newResident.moveInDate,
                        onChange: t40,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                        lineNumber: 485,
                        columnNumber: 45
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 485,
                columnNumber: 13
            }, this);
            $[87] = newResident.moveInDate;
            $[88] = t40;
            $[89] = t41;
        } else {
            t41 = $[89];
        }
        const t42 = editingResident ? "Update Resident" : "Add Resident";
        let t43;
        if ($[90] !== t42) {
            t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "submit",
                className: "w-full",
                children: t42
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 495,
                columnNumber: 13
            }, this);
            $[90] = t42;
            $[91] = t43;
        } else {
            t43 = $[91];
        }
        let t44;
        if ($[92] !== t26 || $[93] !== t29 || $[94] !== t32 || $[95] !== t35 || $[96] !== t38 || $[97] !== t41 || $[98] !== t43) {
            t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: t26,
                className: "space-y-4",
                children: [
                    t29,
                    t32,
                    t35,
                    t38,
                    t41,
                    t43
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 503,
                columnNumber: 13
            }, this);
            $[92] = t26;
            $[93] = t29;
            $[94] = t32;
            $[95] = t35;
            $[96] = t38;
            $[97] = t41;
            $[98] = t43;
            $[99] = t44;
        } else {
            t44 = $[99];
        }
        let t45;
        if ($[100] !== t25 || $[101] !== t44) {
            t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                children: [
                    t25,
                    t44
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 517,
                columnNumber: 13
            }, this);
            $[100] = t25;
            $[101] = t44;
            $[102] = t45;
        } else {
            t45 = $[102];
        }
        if ($[103] !== isDialogOpen || $[104] !== t45) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    t18,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                        open: isDialogOpen,
                        onOpenChange: t19,
                        children: [
                            t20,
                            t45
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                        lineNumber: 525,
                        columnNumber: 69
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 525,
                columnNumber: 13
            }, this);
            $[103] = isDialogOpen;
            $[104] = t45;
            $[105] = t12;
        } else {
            t12 = $[105];
        }
        let t46;
        if ($[106] === Symbol.for("react.memo_cache_sentinel")) {
            t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-600",
                children: "Total Residents"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 534,
                columnNumber: 13
            }, this);
            $[106] = t46;
        } else {
            t46 = $[106];
        }
        let t47;
        if ($[107] !== residents.length) {
            t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-2xl",
                children: residents.length
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 541,
                columnNumber: 13
            }, this);
            $[107] = residents.length;
            $[108] = t47;
        } else {
            t47 = $[108];
        }
        let t48;
        if ($[109] !== activeResidents) {
            t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-xs text-gray-500",
                children: [
                    activeResidents,
                    " active"
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 549,
                columnNumber: 13
            }, this);
            $[109] = activeResidents;
            $[110] = t48;
        } else {
            t48 = $[110];
        }
        let t49;
        if ($[111] !== t47 || $[112] !== t48) {
            t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t46,
                    t47,
                    t48
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 557,
                columnNumber: 13
            }, this);
            $[111] = t47;
            $[112] = t48;
            $[113] = t49;
        } else {
            t49 = $[113];
        }
        let t50;
        if ($[114] === Symbol.for("react.memo_cache_sentinel")) {
            t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg bg-blue-50 p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                    className: "h-6 w-6 text-blue-600"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                    lineNumber: 566,
                    columnNumber: 56
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 566,
                columnNumber: 13
            }, this);
            $[114] = t50;
        } else {
            t50 = $[114];
        }
        let t51;
        if ($[115] !== t49) {
            t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            t49,
                            t50
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                        lineNumber: 573,
                        columnNumber: 48
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                    lineNumber: 573,
                    columnNumber: 19
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 573,
                columnNumber: 13
            }, this);
            $[115] = t49;
            $[116] = t51;
        } else {
            t51 = $[116];
        }
        let t52;
        if ($[117] === Symbol.for("react.memo_cache_sentinel")) {
            t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-600",
                children: "Overdue Payments"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 581,
                columnNumber: 13
            }, this);
            $[117] = t52;
        } else {
            t52 = $[117];
        }
        let t53;
        if ($[118] !== overduePayments) {
            t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-2xl",
                children: overduePayments
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 588,
                columnNumber: 13
            }, this);
            $[118] = overduePayments;
            $[119] = t53;
        } else {
            t53 = $[119];
        }
        let t54;
        if ($[120] === Symbol.for("react.memo_cache_sentinel")) {
            t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-xs text-gray-500",
                children: "Require attention"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 596,
                columnNumber: 13
            }, this);
            $[120] = t54;
        } else {
            t54 = $[120];
        }
        let t55;
        if ($[121] !== t53) {
            t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t52,
                    t53,
                    t54
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 603,
                columnNumber: 13
            }, this);
            $[121] = t53;
            $[122] = t55;
        } else {
            t55 = $[122];
        }
        let t56;
        if ($[123] === Symbol.for("react.memo_cache_sentinel")) {
            t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg bg-red-50 p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__["UserX"], {
                    className: "h-6 w-6 text-red-600"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                    lineNumber: 611,
                    columnNumber: 55
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 611,
                columnNumber: 13
            }, this);
            $[123] = t56;
        } else {
            t56 = $[123];
        }
        let t57;
        if ($[124] !== t55) {
            t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            t55,
                            t56
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                        lineNumber: 618,
                        columnNumber: 48
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                    lineNumber: 618,
                    columnNumber: 19
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 618,
                columnNumber: 13
            }, this);
            $[124] = t55;
            $[125] = t57;
        } else {
            t57 = $[125];
        }
        let t58;
        if ($[126] === Symbol.for("react.memo_cache_sentinel")) {
            t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-600",
                children: "Total Balance"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 626,
                columnNumber: 13
            }, this);
            $[126] = t58;
        } else {
            t58 = $[126];
        }
        let t59;
        if ($[127] !== totalBalance) {
            t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-2xl text-red-600",
                children: [
                    "$",
                    totalBalance
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 633,
                columnNumber: 13
            }, this);
            $[127] = totalBalance;
            $[128] = t59;
        } else {
            t59 = $[128];
        }
        let t60;
        if ($[129] === Symbol.for("react.memo_cache_sentinel")) {
            t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-1 text-xs text-gray-500",
                children: "Outstanding"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 641,
                columnNumber: 13
            }, this);
            $[129] = t60;
        } else {
            t60 = $[129];
        }
        let t61;
        if ($[130] !== t59) {
            t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t58,
                    t59,
                    t60
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 648,
                columnNumber: 13
            }, this);
            $[130] = t59;
            $[131] = t61;
        } else {
            t61 = $[131];
        }
        let t62;
        if ($[132] === Symbol.for("react.memo_cache_sentinel")) {
            t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg bg-orange-50 p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"], {
                    className: "h-6 w-6 text-orange-600"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                    lineNumber: 656,
                    columnNumber: 58
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 656,
                columnNumber: 13
            }, this);
            $[132] = t62;
        } else {
            t62 = $[132];
        }
        let t63;
        if ($[133] !== t61) {
            t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            t61,
                            t62
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                        lineNumber: 663,
                        columnNumber: 48
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                    lineNumber: 663,
                    columnNumber: 19
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 663,
                columnNumber: 13
            }, this);
            $[133] = t61;
            $[134] = t63;
        } else {
            t63 = $[134];
        }
        if ($[135] !== t51 || $[136] !== t57 || $[137] !== t63) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 sm:grid-cols-3",
                children: [
                    t51,
                    t57,
                    t63
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 670,
                columnNumber: 13
            }, this);
            $[135] = t51;
            $[136] = t57;
            $[137] = t63;
            $[138] = t13;
        } else {
            t13 = $[138];
        }
        T3 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"];
        let t64;
        if ($[139] === Symbol.for("react.memo_cache_sentinel")) {
            t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                children: "All Residents"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 681,
                columnNumber: 13
            }, this);
            $[139] = t64;
        } else {
            t64 = $[139];
        }
        let t65;
        if ($[140] === Symbol.for("react.memo_cache_sentinel")) {
            t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                className: "absolute left-3 top-3 h-4 w-4 text-gray-400"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 688,
                columnNumber: 13
            }, this);
            $[140] = t65;
        } else {
            t65 = $[140];
        }
        let t66;
        if ($[141] === Symbol.for("react.memo_cache_sentinel")) {
            t66 = ({
                "ResidentManagement[<Input>.onChange]": (e_6)=>setSearchTerm(e_6.target.value)
            })["ResidentManagement[<Input>.onChange]"];
            $[141] = t66;
        } else {
            t66 = $[141];
        }
        if ($[142] !== searchTerm) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        t64,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-64",
                            children: [
                                t65,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "Search residents...",
                                    value: searchTerm,
                                    onChange: t66,
                                    className: "pl-10"
                                }, void 0, false, {
                                    fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                                    lineNumber: 703,
                                    columnNumber: 117
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                            lineNumber: 703,
                            columnNumber: 81
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                    lineNumber: 703,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 703,
                columnNumber: 13
            }, this);
            $[142] = searchTerm;
            $[143] = t10;
        } else {
            t10 = $[143];
        }
        T2 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"];
        T1 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"];
        if ($[144] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                            children: "Name"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                            lineNumber: 712,
                            columnNumber: 35
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                            lineNumber: 712,
                            columnNumber: 62
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                            children: "Unit"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                            lineNumber: 712,
                            columnNumber: 92
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                            children: "Move-in Date"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                            lineNumber: 712,
                            columnNumber: 119
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                            children: "Status"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                            lineNumber: 712,
                            columnNumber: 154
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                            children: "Payment"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                            lineNumber: 712,
                            columnNumber: 183
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                            children: "Balance"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                            lineNumber: 712,
                            columnNumber: 213
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                            children: "Actions"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                            lineNumber: 712,
                            columnNumber: 243
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                    lineNumber: 712,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                lineNumber: 712,
                columnNumber: 12
            }, this);
            $[144] = t9;
        } else {
            t9 = $[144];
        }
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"];
        let t67;
        if ($[145] !== handleDeleteResident || $[146] !== handleToggleStatus) {
            t67 = ({
                "ResidentManagement[filteredResidents.map()]": (resident_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: resident_1.name
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                                lineNumber: 721,
                                columnNumber: 100
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    className: "h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                                                    lineNumber: 721,
                                                    columnNumber: 227
                                                }, this),
                                                resident_1.email
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                                            lineNumber: 721,
                                            columnNumber: 178
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-1 text-xs",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                    className: "h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                                                    lineNumber: 721,
                                                    columnNumber: 328
                                                }, this),
                                                resident_1.phone
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                                            lineNumber: 721,
                                            columnNumber: 279
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                                    lineNumber: 721,
                                    columnNumber: 151
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                                lineNumber: 721,
                                columnNumber: 140
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: resident_1.unit
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                                lineNumber: 721,
                                columnNumber: 399
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: new Date(resident_1.moveInDate).toLocaleDateString()
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                                lineNumber: 721,
                                columnNumber: 439
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: resident_1.status === "active" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    className: "bg-green-100 text-green-800",
                                    children: "Active"
                                }, void 0, false, {
                                    fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                                    lineNumber: 721,
                                    columnNumber: 561
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    className: "bg-gray-100 text-gray-800",
                                    children: "Inactive"
                                }, void 0, false, {
                                    fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                                    lineNumber: 721,
                                    columnNumber: 625
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                                lineNumber: 721,
                                columnNumber: 516
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: resident_1.paymentStatus === "current" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    className: "bg-green-100 text-green-800",
                                    children: "Current"
                                }, void 0, false, {
                                    fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                                    lineNumber: 721,
                                    columnNumber: 752
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    className: "bg-red-100 text-red-800",
                                    children: "Overdue"
                                }, void 0, false, {
                                    fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                                    lineNumber: 721,
                                    columnNumber: 817
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                                lineNumber: 721,
                                columnNumber: 699
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: resident_1.balance > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-red-600",
                                    children: [
                                        "$",
                                        resident_1.balance
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                                    lineNumber: 721,
                                    columnNumber: 925
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-green-600",
                                    children: "$0"
                                }, void 0, false, {
                                    fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                                    lineNumber: 721,
                                    columnNumber: 987
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                                lineNumber: 721,
                                columnNumber: 888
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "outline",
                                            onClick: {
                                                "ResidentManagement[filteredResidents.map() > <Button>.onClick]": ()=>handleEditResident(resident_1)
                                            }["ResidentManagement[filteredResidents.map() > <Button>.onClick]"],
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                                                lineNumber: 723,
                                                columnNumber: 84
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                                            lineNumber: 721,
                                            columnNumber: 1081
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "outline",
                                            onClick: {
                                                "ResidentManagement[filteredResidents.map() > <Button>.onClick]": ()=>handleToggleStatus(resident_1.id)
                                            }["ResidentManagement[filteredResidents.map() > <Button>.onClick]"],
                                            children: resident_1.status === "active" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__["UserX"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                                                lineNumber: 725,
                                                columnNumber: 118
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                                                lineNumber: 725,
                                                columnNumber: 150
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                                            lineNumber: 723,
                                            columnNumber: 121
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "outline",
                                            onClick: {
                                                "ResidentManagement[filteredResidents.map() > <Button>.onClick]": ()=>handleDeleteResident(resident_1.id)
                                            }["ResidentManagement[filteredResidents.map() > <Button>.onClick]"],
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                className: "h-4 w-4 text-red-600"
                                            }, void 0, false, {
                                                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                                                lineNumber: 727,
                                                columnNumber: 84
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                                            lineNumber: 725,
                                            columnNumber: 193
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                                    lineNumber: 721,
                                    columnNumber: 1053
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                                lineNumber: 721,
                                columnNumber: 1042
                            }, this)
                        ]
                    }, resident_1.id, true, {
                        fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
                        lineNumber: 721,
                        columnNumber: 70
                    }, this)
            })["ResidentManagement[filteredResidents.map()]"];
            $[145] = handleDeleteResident;
            $[146] = handleToggleStatus;
            $[147] = t67;
        } else {
            t67 = $[147];
        }
        t8 = filteredResidents.map(t67);
        $[23] = editingResident;
        $[24] = handleAddResident;
        $[25] = handleDeleteResident;
        $[26] = handleToggleStatus;
        $[27] = handleUpdateResident;
        $[28] = isDialogOpen;
        $[29] = newResident;
        $[30] = residents;
        $[31] = searchTerm;
        $[32] = T0;
        $[33] = T1;
        $[34] = T2;
        $[35] = T3;
        $[36] = t10;
        $[37] = t11;
        $[38] = t12;
        $[39] = t13;
        $[40] = t8;
        $[41] = t9;
    } else {
        T0 = $[32];
        T1 = $[33];
        T2 = $[34];
        T3 = $[35];
        t10 = $[36];
        t11 = $[37];
        t12 = $[38];
        t13 = $[39];
        t8 = $[40];
        t9 = $[41];
    }
    let t14;
    if ($[148] !== T0 || $[149] !== t8) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            children: t8
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
            lineNumber: 769,
            columnNumber: 11
        }, this);
        $[148] = T0;
        $[149] = t8;
        $[150] = t14;
    } else {
        t14 = $[150];
    }
    let t15;
    if ($[151] !== T1 || $[152] !== t14 || $[153] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T1, {
            children: [
                t9,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
            lineNumber: 778,
            columnNumber: 11
        }, this);
        $[151] = T1;
        $[152] = t14;
        $[153] = t9;
        $[154] = t15;
    } else {
        t15 = $[154];
    }
    let t16;
    if ($[155] !== T2 || $[156] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T2, {
            children: t15
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
            lineNumber: 788,
            columnNumber: 11
        }, this);
        $[155] = T2;
        $[156] = t15;
        $[157] = t16;
    } else {
        t16 = $[157];
    }
    let t17;
    if ($[158] !== T3 || $[159] !== t10 || $[160] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T3, {
            children: [
                t10,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
            lineNumber: 797,
            columnNumber: 11
        }, this);
        $[158] = T3;
        $[159] = t10;
        $[160] = t16;
        $[161] = t17;
    } else {
        t17 = $[161];
    }
    let t18;
    if ($[162] !== t11 || $[163] !== t12 || $[164] !== t13 || $[165] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t11,
            children: [
                t12,
                t13,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentManagement.jsx",
            lineNumber: 807,
            columnNumber: 11
        }, this);
        $[162] = t11;
        $[163] = t12;
        $[164] = t13;
        $[165] = t17;
        $[166] = t18;
    } else {
        t18 = $[166];
    }
    return t18;
}
_s(ResidentManagement, "U6jE/wajkgetSXGR4h1zDvUNX/c=");
_c = ResidentManagement;
function _ResidentManagementResidentsReduce(sum, r_5) {
    return sum + r_5.balance;
}
function _ResidentManagementResidentsFilter2(r_4) {
    return r_4.paymentStatus === "overdue";
}
function _ResidentManagementResidentsFilter(r_3) {
    return r_3.status === "active";
}
const __TURBOPACK__default__export__ = ResidentManagement;
var _c;
__turbopack_context__.k.register(_c, "ResidentManagement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/app/components/VisitorRegister.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VisitorRegister
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/input.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/label.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/table.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/dialog.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/badge.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/tabs.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/user-x.js [app-client] (ecmascript) <export default as UserX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
function VisitorRegister(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(74);
    if ($[0] !== "774ba06d43ce86097ffe71c6014d3cf3650a665f4c8a99cd98cf9ab393a032d1") {
        for(let $i = 0; $i < 74; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "774ba06d43ce86097ffe71c6014d3cf3650a665f4c8a99cd98cf9ab393a032d1";
    }
    const { user } = t0;
    const isAdmin = user.role === "Admin";
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            {
                id: "1",
                name: "John Doe",
                phone: "+1-555-0101",
                purpose: "Personal Visit",
                checkIn: "2025-10-24 10:30 AM",
                checkOut: null,
                status: "checked-in",
                unit: "Unit A-101"
            },
            {
                id: "2",
                name: "Jane Smith",
                phone: "+1-555-0102",
                purpose: "Delivery",
                checkIn: "2025-10-24 09:15 AM",
                checkOut: "2025-10-24 09:30 AM",
                status: "checked-out",
                unit: "Unit B-205"
            },
            {
                id: "3",
                name: "Mike Wilson",
                phone: "+1-555-0103",
                purpose: "Maintenance",
                checkIn: "2025-10-23 02:00 PM",
                checkOut: "2025-10-23 04:30 PM",
                status: "checked-out",
                unit: "Unit A-101"
            },
            {
                id: "4",
                name: "Sarah Brown",
                phone: "+1-555-0104",
                purpose: "Personal Visit",
                checkIn: "2025-10-22 06:00 PM",
                checkOut: "2025-10-22 08:30 PM",
                status: "checked-out",
                unit: "Unit C-304"
            },
            {
                id: "5",
                name: "Tom Anderson",
                phone: "+1-555-0105",
                purpose: "Personal Visit",
                checkIn: "2025-10-24 02:15 PM",
                checkOut: null,
                status: "checked-in",
                unit: "Unit B-205"
            },
            {
                id: "6",
                name: "Emily Davis",
                phone: "+1-555-0106",
                purpose: "Contractor",
                checkIn: "2025-10-24 11:00 AM",
                checkOut: null,
                status: "checked-in",
                unit: "Unit D-401"
            },
            {
                id: "7",
                name: "Robert Lee",
                phone: "+1-555-0107",
                purpose: "Package Delivery",
                checkIn: "2025-10-24 08:45 AM",
                checkOut: "2025-10-24 08:50 AM",
                status: "checked-out",
                unit: "Unit C-304"
            },
            {
                id: "8",
                name: "Lisa Martinez",
                phone: "+1-555-0108",
                purpose: "Personal Visit",
                checkIn: "2025-10-23 03:30 PM",
                checkOut: "2025-10-23 05:00 PM",
                status: "checked-out",
                unit: "Unit A-203"
            }
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [visitors, setVisitors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isDialogOpen, setIsDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            name: "",
            phone: "",
            purpose: ""
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const [newVisitor, setNewVisitor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    let t3;
    if ($[3] !== newVisitor.name || $[4] !== newVisitor.phone || $[5] !== newVisitor.purpose || $[6] !== user.unit || $[7] !== visitors) {
        t3 = ({
            "VisitorRegister[handleRegisterVisitor]": (e)=>{
                e.preventDefault();
                const visitor = {
                    id: Date.now().toString(),
                    name: newVisitor.name,
                    phone: newVisitor.phone,
                    purpose: newVisitor.purpose,
                    checkIn: new Date().toLocaleString("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true
                    }),
                    checkOut: null,
                    status: "checked-in",
                    unit: user.unit
                };
                setVisitors([
                    visitor,
                    ...visitors
                ]);
                setNewVisitor({
                    name: "",
                    phone: "",
                    purpose: ""
                });
                setIsDialogOpen(false);
                __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Visitor registered successfully!");
            }
        })["VisitorRegister[handleRegisterVisitor]"];
        $[3] = newVisitor.name;
        $[4] = newVisitor.phone;
        $[5] = newVisitor.purpose;
        $[6] = user.unit;
        $[7] = visitors;
        $[8] = t3;
    } else {
        t3 = $[8];
    }
    const handleRegisterVisitor = t3;
    let t4;
    if ($[9] !== visitors) {
        t4 = ({
            "VisitorRegister[handleCheckOut]": (id)=>{
                setVisitors(visitors.map({
                    "VisitorRegister[handleCheckOut > visitors.map()]": (v)=>v.id === id ? {
                            ...v,
                            checkOut: new Date().toLocaleString("en-US", {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: true
                            }),
                            status: "checked-out"
                        } : v
                }["VisitorRegister[handleCheckOut > visitors.map()]"]));
                __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Visitor checked out successfully!");
            }
        })["VisitorRegister[handleCheckOut]"];
        $[9] = visitors;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    const handleCheckOut = t4;
    let T0;
    let T1;
    let T2;
    let T3;
    let t10;
    let t11;
    let t12;
    let t13;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[11] !== handleCheckOut || $[12] !== handleRegisterVisitor || $[13] !== isAdmin || $[14] !== isDialogOpen || $[15] !== newVisitor || $[16] !== searchTerm || $[17] !== user.unit || $[18] !== visitors) {
        const displayVisitors = isAdmin ? visitors : visitors.filter({
            "VisitorRegister[visitors.filter()]": (v_0)=>v_0.unit === user.unit
        }["VisitorRegister[visitors.filter()]"]);
        const activeVisitors = displayVisitors.filter(_VisitorRegisterDisplayVisitorsFilter);
        const historicalVisitors = displayVisitors.filter(_VisitorRegisterDisplayVisitorsFilter2);
        let t14;
        if ($[32] !== searchTerm) {
            t14 = ({
                "VisitorRegister[filteredVisitors]": (list)=>list.filter({
                        "VisitorRegister[filteredVisitors > list.filter()]": (v_3)=>v_3.name.toLowerCase().includes(searchTerm.toLowerCase()) || v_3.phone.includes(searchTerm) || v_3.purpose.toLowerCase().includes(searchTerm.toLowerCase())
                    }["VisitorRegister[filteredVisitors > list.filter()]"])
            })["VisitorRegister[filteredVisitors]"];
            $[32] = searchTerm;
            $[33] = t14;
        } else {
            t14 = $[33];
        }
        const filteredVisitors = t14;
        t12 = "space-y-6";
        let t15;
        if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Visitor & Security Management"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                lineNumber: 225,
                columnNumber: 13
            }, this);
            $[34] = t15;
        } else {
            t15 = $[34];
        }
        const t16 = isAdmin ? "View and search the full history of visitor registrations" : `Register and track visitors to ${user.unit}`;
        let t17;
        if ($[35] !== t16) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t15,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600",
                        children: t16
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                        lineNumber: 233,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                lineNumber: 233,
                columnNumber: 13
            }, this);
            $[35] = t16;
            $[36] = t17;
        } else {
            t17 = $[36];
        }
        let t18;
        if ($[37] !== handleRegisterVisitor || $[38] !== isAdmin || $[39] !== isDialogOpen || $[40] !== newVisitor) {
            t18 = !isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isDialogOpen,
                onOpenChange: setIsDialogOpen,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                        asChild: true,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                    className: "mr-2 h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                    lineNumber: 241,
                                    columnNumber: 122
                                }, this),
                                "Register Visitor"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                            lineNumber: 241,
                            columnNumber: 114
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                        lineNumber: 241,
                        columnNumber: 84
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                                        children: "Register New Visitor"
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                        lineNumber: 241,
                                        columnNumber: 225
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                                        children: "Enter visitor details to register their entry"
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                        lineNumber: 241,
                                        columnNumber: 272
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                lineNumber: 241,
                                columnNumber: 211
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                                onSubmit: handleRegisterVisitor,
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "name",
                                                children: "Visitor Name"
                                            }, void 0, false, {
                                                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                                lineNumber: 241,
                                                columnNumber: 459
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "name",
                                                value: newVisitor.name,
                                                onChange: {
                                                    "VisitorRegister[<Input>.onChange]": (e_0)=>setNewVisitor({
                                                            ...newVisitor,
                                                            name: e_0.target.value
                                                        })
                                                }["VisitorRegister[<Input>.onChange]"],
                                                placeholder: "Enter visitor name",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                                lineNumber: 241,
                                                columnNumber: 501
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                        lineNumber: 241,
                                        columnNumber: 432
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "phone",
                                                children: "Phone Number"
                                            }, void 0, false, {
                                                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                                lineNumber: 246,
                                                columnNumber: 139
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "phone",
                                                type: "tel",
                                                value: newVisitor.phone,
                                                onChange: {
                                                    "VisitorRegister[<Input>.onChange]": (e_1)=>setNewVisitor({
                                                            ...newVisitor,
                                                            phone: e_1.target.value
                                                        })
                                                }["VisitorRegister[<Input>.onChange]"],
                                                placeholder: "+1-555-0100",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                                lineNumber: 246,
                                                columnNumber: 182
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                        lineNumber: 246,
                                        columnNumber: 112
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                                htmlFor: "purpose",
                                                children: "Purpose of Visit"
                                            }, void 0, false, {
                                                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                                lineNumber: 251,
                                                columnNumber: 132
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                                id: "purpose",
                                                value: newVisitor.purpose,
                                                onChange: {
                                                    "VisitorRegister[<Input>.onChange]": (e_2)=>setNewVisitor({
                                                            ...newVisitor,
                                                            purpose: e_2.target.value
                                                        })
                                                }["VisitorRegister[<Input>.onChange]"],
                                                placeholder: "e.g., Personal Visit, Delivery",
                                                required: true
                                            }, void 0, false, {
                                                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                                lineNumber: 251,
                                                columnNumber: 181
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                        lineNumber: 251,
                                        columnNumber: 105
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                        type: "submit",
                                        className: "w-full",
                                        children: "Register Visitor"
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                        lineNumber: 256,
                                        columnNumber: 124
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                lineNumber: 241,
                                columnNumber: 371
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                        lineNumber: 241,
                        columnNumber: 196
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                lineNumber: 241,
                columnNumber: 25
            }, this);
            $[37] = handleRegisterVisitor;
            $[38] = isAdmin;
            $[39] = isDialogOpen;
            $[40] = newVisitor;
            $[41] = t18;
        } else {
            t18 = $[41];
        }
        if ($[42] !== t17 || $[43] !== t18) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    t17,
                    t18
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                lineNumber: 266,
                columnNumber: 13
            }, this);
            $[42] = t17;
            $[43] = t18;
            $[44] = t13;
        } else {
            t13 = $[44];
        }
        T3 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"];
        let t19;
        if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                children: "Visitor Records"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                lineNumber: 276,
                columnNumber: 13
            }, this);
            $[45] = t19;
        } else {
            t19 = $[45];
        }
        let t20;
        if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                className: "absolute left-3 top-3 h-4 w-4 text-gray-400"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                lineNumber: 283,
                columnNumber: 13
            }, this);
            $[46] = t20;
        } else {
            t20 = $[46];
        }
        let t21;
        if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
            t21 = ({
                "VisitorRegister[<Input>.onChange]": (e_3)=>setSearchTerm(e_3.target.value)
            })["VisitorRegister[<Input>.onChange]"];
            $[47] = t21;
        } else {
            t21 = $[47];
        }
        if ($[48] !== searchTerm) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        t19,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-64",
                            children: [
                                t20,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "Search visitors...",
                                    value: searchTerm,
                                    onChange: t21,
                                    className: "pl-10"
                                }, void 0, false, {
                                    fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                    lineNumber: 298,
                                    columnNumber: 117
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                            lineNumber: 298,
                            columnNumber: 81
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                    lineNumber: 298,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                lineNumber: 298,
                columnNumber: 13
            }, this);
            $[48] = searchTerm;
            $[49] = t11;
        } else {
            t11 = $[49];
        }
        T2 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"];
        T1 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"];
        t8 = "active";
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
            className: "grid w-full grid-cols-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                    value: "active",
                    children: [
                        "Active Visitors (",
                        activeVisitors.length,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                    lineNumber: 307,
                    columnNumber: 56
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                    value: "history",
                    children: [
                        "History (",
                        historicalVisitors.length,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                    lineNumber: 307,
                    columnNumber: 139
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
            lineNumber: 307,
            columnNumber: 10
        }, this);
        const t22 = filteredVisitors(activeVisitors).length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center py-12 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                    className: "mb-4 h-12 w-12 text-gray-400"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                    lineNumber: 308,
                    columnNumber: 142
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: "No active visitors"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                    lineNumber: 308,
                    columnNumber: 192
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
            lineNumber: 308,
            columnNumber: 65
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Name"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                lineNumber: 308,
                                columnNumber: 282
                            }, this),
                            isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Unit"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                lineNumber: 308,
                                columnNumber: 321
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Phone"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                lineNumber: 308,
                                columnNumber: 349
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Purpose"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                lineNumber: 308,
                                columnNumber: 377
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Check-in Time"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                lineNumber: 308,
                                columnNumber: 407
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Status"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                lineNumber: 308,
                                columnNumber: 443
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Action"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                lineNumber: 308,
                                columnNumber: 472
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                        lineNumber: 308,
                        columnNumber: 272
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                    lineNumber: 308,
                    columnNumber: 259
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                    children: filteredVisitors(activeVisitors).map({
                        "VisitorRegister[(anonymous)()]": (visitor_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: visitor_0.name
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                        lineNumber: 309,
                                        columnNumber: 87
                                    }, this),
                                    isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: visitor_0.unit
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                        lineNumber: 309,
                                        columnNumber: 138
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: visitor_0.phone
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                        lineNumber: 309,
                                        columnNumber: 178
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: visitor_0.purpose
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                        lineNumber: 309,
                                        columnNumber: 218
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: visitor_0.checkIn
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                        lineNumber: 309,
                                        columnNumber: 260
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            className: "bg-green-100 text-green-800",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                                    className: "mr-1 h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                                    lineNumber: 309,
                                                    columnNumber: 360
                                                }, this),
                                                "Checked In"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                            lineNumber: 309,
                                            columnNumber: 313
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                        lineNumber: 309,
                                        columnNumber: 302
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "outline",
                                            onClick: {
                                                "VisitorRegister[(anonymous)() > <Button>.onClick]": ()=>handleCheckOut(visitor_0.id)
                                            }["VisitorRegister[(anonymous)() > <Button>.onClick]"],
                                            children: "Check Out"
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                            lineNumber: 309,
                                            columnNumber: 439
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                        lineNumber: 309,
                                        columnNumber: 428
                                    }, this)
                                ]
                            }, visitor_0.id, true, {
                                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                lineNumber: 309,
                                columnNumber: 58
                            }, this)
                    }["VisitorRegister[(anonymous)()]"])
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                    lineNumber: 308,
                    columnNumber: 526
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
            lineNumber: 308,
            columnNumber: 252
        }, this);
        if ($[50] !== t22) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                value: "active",
                className: "mt-4",
                children: t22
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                lineNumber: 314,
                columnNumber: 13
            }, this);
            $[50] = t22;
            $[51] = t10;
        } else {
            t10 = $[51];
        }
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"];
        t5 = "history";
        t6 = "mt-4";
        t7 = filteredVisitors(historicalVisitors).length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center py-12 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                    className: "mb-4 h-12 w-12 text-gray-400"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                    lineNumber: 323,
                    columnNumber: 139
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: "No visitor history"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                    lineNumber: 323,
                    columnNumber: 189
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
            lineNumber: 323,
            columnNumber: 62
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Name"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                lineNumber: 323,
                                columnNumber: 279
                            }, this),
                            isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Unit"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                lineNumber: 323,
                                columnNumber: 318
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Phone"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                lineNumber: 323,
                                columnNumber: 346
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Purpose"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                lineNumber: 323,
                                columnNumber: 374
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Check-in Time"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                lineNumber: 323,
                                columnNumber: 404
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Check-out Time"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                lineNumber: 323,
                                columnNumber: 440
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Status"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                lineNumber: 323,
                                columnNumber: 477
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                        lineNumber: 323,
                        columnNumber: 269
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                    lineNumber: 323,
                    columnNumber: 256
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                    children: filteredVisitors(historicalVisitors).map({
                        "VisitorRegister[(anonymous)()]": (visitor_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: visitor_1.name
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                        lineNumber: 324,
                                        columnNumber: 87
                                    }, this),
                                    isAdmin && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: visitor_1.unit
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                        lineNumber: 324,
                                        columnNumber: 138
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: visitor_1.phone
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                        lineNumber: 324,
                                        columnNumber: 178
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: visitor_1.purpose
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                        lineNumber: 324,
                                        columnNumber: 218
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: visitor_1.checkIn
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                        lineNumber: 324,
                                        columnNumber: 260
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: visitor_1.checkOut
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                        lineNumber: 324,
                                        columnNumber: 302
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            variant: "outline",
                                            className: "text-gray-600",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__["UserX"], {
                                                    className: "mr-1 h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                                    lineNumber: 324,
                                                    columnNumber: 407
                                                }, this),
                                                "Checked Out"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                            lineNumber: 324,
                                            columnNumber: 356
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                        lineNumber: 324,
                                        columnNumber: 345
                                    }, this)
                                ]
                            }, visitor_1.id, true, {
                                fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                                lineNumber: 324,
                                columnNumber: 58
                            }, this)
                    }["VisitorRegister[(anonymous)()]"])
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
                    lineNumber: 323,
                    columnNumber: 531
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
            lineNumber: 323,
            columnNumber: 249
        }, this);
        $[11] = handleCheckOut;
        $[12] = handleRegisterVisitor;
        $[13] = isAdmin;
        $[14] = isDialogOpen;
        $[15] = newVisitor;
        $[16] = searchTerm;
        $[17] = user.unit;
        $[18] = visitors;
        $[19] = T0;
        $[20] = T1;
        $[21] = T2;
        $[22] = T3;
        $[23] = t10;
        $[24] = t11;
        $[25] = t12;
        $[26] = t13;
        $[27] = t5;
        $[28] = t6;
        $[29] = t7;
        $[30] = t8;
        $[31] = t9;
    } else {
        T0 = $[19];
        T1 = $[20];
        T2 = $[21];
        T3 = $[22];
        t10 = $[23];
        t11 = $[24];
        t12 = $[25];
        t13 = $[26];
        t5 = $[27];
        t6 = $[28];
        t7 = $[29];
        t8 = $[30];
        t9 = $[31];
    }
    let t14;
    if ($[52] !== T0 || $[53] !== t5 || $[54] !== t6 || $[55] !== t7) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            value: t5,
            className: t6,
            children: t7
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
            lineNumber: 364,
            columnNumber: 11
        }, this);
        $[52] = T0;
        $[53] = t5;
        $[54] = t6;
        $[55] = t7;
        $[56] = t14;
    } else {
        t14 = $[56];
    }
    let t15;
    if ($[57] !== T1 || $[58] !== t10 || $[59] !== t14 || $[60] !== t8 || $[61] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T1, {
            defaultValue: t8,
            children: [
                t9,
                t10,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
            lineNumber: 375,
            columnNumber: 11
        }, this);
        $[57] = T1;
        $[58] = t10;
        $[59] = t14;
        $[60] = t8;
        $[61] = t9;
        $[62] = t15;
    } else {
        t15 = $[62];
    }
    let t16;
    if ($[63] !== T2 || $[64] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T2, {
            children: t15
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
            lineNumber: 387,
            columnNumber: 11
        }, this);
        $[63] = T2;
        $[64] = t15;
        $[65] = t16;
    } else {
        t16 = $[65];
    }
    let t17;
    if ($[66] !== T3 || $[67] !== t11 || $[68] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T3, {
            children: [
                t11,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
            lineNumber: 396,
            columnNumber: 11
        }, this);
        $[66] = T3;
        $[67] = t11;
        $[68] = t16;
        $[69] = t17;
    } else {
        t17 = $[69];
    }
    let t18;
    if ($[70] !== t12 || $[71] !== t13 || $[72] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t12,
            children: [
                t13,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/VisitorRegister.jsx",
            lineNumber: 406,
            columnNumber: 11
        }, this);
        $[70] = t12;
        $[71] = t13;
        $[72] = t17;
        $[73] = t18;
    } else {
        t18 = $[73];
    }
    return t18;
}
_s(VisitorRegister, "UpNRygZD/HmiYu/4xeMga+T70Nc=");
_c = VisitorRegister;
function _VisitorRegisterDisplayVisitorsFilter2(v_2) {
    return v_2.status === "checked-out";
}
function _VisitorRegisterDisplayVisitorsFilter(v_1) {
    return v_1.status === "checked-in";
}
var _c;
__turbopack_context__.k.register(_c, "VisitorRegister");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/app/components/ResidentVisitorRegister.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/input.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/label.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/table.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/dialog.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/badge.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/tabs.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/user-check.js [app-client] (ecmascript) <export default as UserCheck>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/user-x.js [app-client] (ecmascript) <export default as UserX>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
function ResidentVisitorRegister(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(96);
    if ($[0] !== "e50cf0e4efb6350bf3e77c0c317dbe416ba53fe84cbeafaaca605066ee6b2b7b") {
        for(let $i = 0; $i < 96; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e50cf0e4efb6350bf3e77c0c317dbe416ba53fe84cbeafaaca605066ee6b2b7b";
    }
    const { user } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            {
                id: "1",
                name: "John Doe",
                phone: "+1-555-0101",
                purpose: "Personal Visit",
                checkIn: "2025-10-21 10:30 AM",
                checkOut: null,
                status: "checked-in"
            },
            {
                id: "2",
                name: "Mike Wilson",
                phone: "+1-555-0103",
                purpose: "Maintenance",
                checkIn: "2025-10-20 02:00 PM",
                checkOut: "2025-10-20 04:30 PM",
                status: "checked-out"
            }
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [visitors, setVisitors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [isDialogOpen, setIsDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            name: "",
            phone: "",
            purpose: ""
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const [newVisitor, setNewVisitor] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    let t3;
    if ($[3] !== newVisitor.name || $[4] !== newVisitor.phone || $[5] !== newVisitor.purpose || $[6] !== visitors) {
        t3 = ({
            "ResidentVisitorRegister[handleRegisterVisitor]": (e)=>{
                e.preventDefault();
                const visitor = {
                    id: Date.now().toString(),
                    name: newVisitor.name,
                    phone: newVisitor.phone,
                    purpose: newVisitor.purpose,
                    checkIn: new Date().toLocaleString("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        hour12: true
                    }),
                    checkOut: null,
                    status: "checked-in"
                };
                setVisitors([
                    visitor,
                    ...visitors
                ]);
                setNewVisitor({
                    name: "",
                    phone: "",
                    purpose: ""
                });
                setIsDialogOpen(false);
                __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Visitor registered successfully!");
            }
        })["ResidentVisitorRegister[handleRegisterVisitor]"];
        $[3] = newVisitor.name;
        $[4] = newVisitor.phone;
        $[5] = newVisitor.purpose;
        $[6] = visitors;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    const handleRegisterVisitor = t3;
    let t4;
    if ($[8] !== visitors) {
        t4 = ({
            "ResidentVisitorRegister[handleCheckOut]": (id)=>{
                setVisitors(visitors.map({
                    "ResidentVisitorRegister[handleCheckOut > visitors.map()]": (v)=>v.id === id ? {
                            ...v,
                            checkOut: new Date().toLocaleString("en-US", {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                                hour: "2-digit",
                                minute: "2-digit",
                                hour12: true
                            }),
                            status: "checked-out"
                        } : v
                }["ResidentVisitorRegister[handleCheckOut > visitors.map()]"]));
                __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Visitor checked out successfully!");
            }
        })["ResidentVisitorRegister[handleCheckOut]"];
        $[8] = visitors;
        $[9] = t4;
    } else {
        t4 = $[9];
    }
    const handleCheckOut = t4;
    let T0;
    let T1;
    let T2;
    let T3;
    let t10;
    let t11;
    let t12;
    let t13;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[10] !== handleCheckOut || $[11] !== handleRegisterVisitor || $[12] !== isDialogOpen || $[13] !== newVisitor || $[14] !== searchTerm || $[15] !== user.unit || $[16] !== visitors) {
        const activeVisitors = visitors.filter(_ResidentVisitorRegisterVisitorsFilter);
        const historicalVisitors = visitors.filter(_ResidentVisitorRegisterVisitorsFilter2);
        let t14;
        if ($[30] !== searchTerm) {
            t14 = ({
                "ResidentVisitorRegister[filteredVisitors]": (list)=>list.filter({
                        "ResidentVisitorRegister[filteredVisitors > list.filter()]": (v_2)=>v_2.name.toLowerCase().includes(searchTerm.toLowerCase()) || v_2.phone.includes(searchTerm) || v_2.purpose.toLowerCase().includes(searchTerm.toLowerCase())
                    }["ResidentVisitorRegister[filteredVisitors > list.filter()]"])
            })["ResidentVisitorRegister[filteredVisitors]"];
            $[30] = searchTerm;
            $[31] = t14;
        } else {
            t14 = $[31];
        }
        const filteredVisitors = t14;
        t12 = "space-y-6";
        let t15;
        if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                children: "Visitor Management"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                lineNumber: 163,
                columnNumber: 13
            }, this);
            $[32] = t15;
        } else {
            t15 = $[32];
        }
        let t16;
        if ($[33] !== user.unit) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t15,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600",
                        children: [
                            "Register and track visitors to ",
                            user.unit
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                        lineNumber: 170,
                        columnNumber: 23
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                lineNumber: 170,
                columnNumber: 13
            }, this);
            $[33] = user.unit;
            $[34] = t16;
        } else {
            t16 = $[34];
        }
        let t17;
        if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            className: "mr-2 h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                            lineNumber: 178,
                            columnNumber: 51
                        }, this),
                        "Register Visitor"
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                    lineNumber: 178,
                    columnNumber: 43
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                lineNumber: 178,
                columnNumber: 13
            }, this);
            $[35] = t17;
        } else {
            t17 = $[35];
        }
        let t18;
        if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        children: "Register New Visitor"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                        lineNumber: 185,
                        columnNumber: 27
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                        children: "Enter visitor details to register their entry"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                        lineNumber: 185,
                        columnNumber: 74
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                lineNumber: 185,
                columnNumber: 13
            }, this);
            $[36] = t18;
        } else {
            t18 = $[36];
        }
        let t19;
        if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                htmlFor: "name",
                children: "Visitor Name"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                lineNumber: 192,
                columnNumber: 13
            }, this);
            $[37] = t19;
        } else {
            t19 = $[37];
        }
        let t20;
        if ($[38] !== newVisitor) {
            t20 = ({
                "ResidentVisitorRegister[<Input>.onChange]": (e_0)=>setNewVisitor({
                        ...newVisitor,
                        name: e_0.target.value
                    })
            })["ResidentVisitorRegister[<Input>.onChange]"];
            $[38] = newVisitor;
            $[39] = t20;
        } else {
            t20 = $[39];
        }
        let t21;
        if ($[40] !== newVisitor.name || $[41] !== t20) {
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    t19,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "name",
                        value: newVisitor.name,
                        onChange: t20,
                        placeholder: "Enter visitor name",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                        lineNumber: 212,
                        columnNumber: 45
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                lineNumber: 212,
                columnNumber: 13
            }, this);
            $[40] = newVisitor.name;
            $[41] = t20;
            $[42] = t21;
        } else {
            t21 = $[42];
        }
        let t22;
        if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
            t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                htmlFor: "phone",
                children: "Phone Number"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                lineNumber: 221,
                columnNumber: 13
            }, this);
            $[43] = t22;
        } else {
            t22 = $[43];
        }
        let t23;
        if ($[44] !== newVisitor) {
            t23 = ({
                "ResidentVisitorRegister[<Input>.onChange]": (e_1)=>setNewVisitor({
                        ...newVisitor,
                        phone: e_1.target.value
                    })
            })["ResidentVisitorRegister[<Input>.onChange]"];
            $[44] = newVisitor;
            $[45] = t23;
        } else {
            t23 = $[45];
        }
        let t24;
        if ($[46] !== newVisitor.phone || $[47] !== t23) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    t22,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "phone",
                        type: "tel",
                        value: newVisitor.phone,
                        onChange: t23,
                        placeholder: "+1-555-0100",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                        lineNumber: 241,
                        columnNumber: 45
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                lineNumber: 241,
                columnNumber: 13
            }, this);
            $[46] = newVisitor.phone;
            $[47] = t23;
            $[48] = t24;
        } else {
            t24 = $[48];
        }
        let t25;
        if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
            t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                htmlFor: "purpose",
                children: "Purpose of Visit"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                lineNumber: 250,
                columnNumber: 13
            }, this);
            $[49] = t25;
        } else {
            t25 = $[49];
        }
        let t26;
        if ($[50] !== newVisitor) {
            t26 = ({
                "ResidentVisitorRegister[<Input>.onChange]": (e_2)=>setNewVisitor({
                        ...newVisitor,
                        purpose: e_2.target.value
                    })
            })["ResidentVisitorRegister[<Input>.onChange]"];
            $[50] = newVisitor;
            $[51] = t26;
        } else {
            t26 = $[51];
        }
        let t27;
        if ($[52] !== newVisitor.purpose || $[53] !== t26) {
            t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    t25,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "purpose",
                        value: newVisitor.purpose,
                        onChange: t26,
                        placeholder: "e.g., Personal Visit, Delivery",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                        lineNumber: 270,
                        columnNumber: 45
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                lineNumber: 270,
                columnNumber: 13
            }, this);
            $[52] = newVisitor.purpose;
            $[53] = t26;
            $[54] = t27;
        } else {
            t27 = $[54];
        }
        let t28;
        if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
            t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "submit",
                className: "w-full",
                children: "Register Visitor"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                lineNumber: 279,
                columnNumber: 13
            }, this);
            $[55] = t28;
        } else {
            t28 = $[55];
        }
        let t29;
        if ($[56] !== handleRegisterVisitor || $[57] !== t21 || $[58] !== t24 || $[59] !== t27) {
            t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                children: [
                    t18,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleRegisterVisitor,
                        className: "space-y-4",
                        children: [
                            t21,
                            t24,
                            t27,
                            t28
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                        lineNumber: 286,
                        columnNumber: 33
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                lineNumber: 286,
                columnNumber: 13
            }, this);
            $[56] = handleRegisterVisitor;
            $[57] = t21;
            $[58] = t24;
            $[59] = t27;
            $[60] = t29;
        } else {
            t29 = $[60];
        }
        let t30;
        if ($[61] !== isDialogOpen || $[62] !== t29) {
            t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                open: isDialogOpen,
                onOpenChange: setIsDialogOpen,
                children: [
                    t17,
                    t29
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                lineNumber: 297,
                columnNumber: 13
            }, this);
            $[61] = isDialogOpen;
            $[62] = t29;
            $[63] = t30;
        } else {
            t30 = $[63];
        }
        if ($[64] !== t16 || $[65] !== t30) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    t16,
                    t30
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                lineNumber: 305,
                columnNumber: 13
            }, this);
            $[64] = t16;
            $[65] = t30;
            $[66] = t13;
        } else {
            t13 = $[66];
        }
        T3 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"];
        let t31;
        if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
            t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                children: "Visitor Records"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                lineNumber: 315,
                columnNumber: 13
            }, this);
            $[67] = t31;
        } else {
            t31 = $[67];
        }
        let t32;
        if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
            t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                className: "absolute left-3 top-3 h-4 w-4 text-gray-400"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                lineNumber: 322,
                columnNumber: 13
            }, this);
            $[68] = t32;
        } else {
            t32 = $[68];
        }
        let t33;
        if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
            t33 = ({
                "ResidentVisitorRegister[<Input>.onChange]": (e_3)=>setSearchTerm(e_3.target.value)
            })["ResidentVisitorRegister[<Input>.onChange]"];
            $[69] = t33;
        } else {
            t33 = $[69];
        }
        if ($[70] !== searchTerm) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        t31,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-64",
                            children: [
                                t32,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "Search visitors...",
                                    value: searchTerm,
                                    onChange: t33,
                                    className: "pl-10"
                                }, void 0, false, {
                                    fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                                    lineNumber: 337,
                                    columnNumber: 117
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                            lineNumber: 337,
                            columnNumber: 81
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                    lineNumber: 337,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                lineNumber: 337,
                columnNumber: 13
            }, this);
            $[70] = searchTerm;
            $[71] = t11;
        } else {
            t11 = $[71];
        }
        T2 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"];
        T1 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"];
        t8 = "active";
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
            className: "grid w-full grid-cols-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                    value: "active",
                    children: [
                        "Active Visitors (",
                        activeVisitors.length,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                    lineNumber: 346,
                    columnNumber: 56
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                    value: "history",
                    children: [
                        "History (",
                        historicalVisitors.length,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                    lineNumber: 346,
                    columnNumber: 139
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
            lineNumber: 346,
            columnNumber: 10
        }, this);
        const t34 = filteredVisitors(activeVisitors).length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center py-12 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                    className: "mb-4 h-12 w-12 text-gray-400"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                    lineNumber: 347,
                    columnNumber: 142
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: "No active visitors"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                    lineNumber: 347,
                    columnNumber: 192
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
            lineNumber: 347,
            columnNumber: 65
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Name"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                                lineNumber: 347,
                                columnNumber: 282
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Phone"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                                lineNumber: 347,
                                columnNumber: 309
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Purpose"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                                lineNumber: 347,
                                columnNumber: 337
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Check-in Time"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                                lineNumber: 347,
                                columnNumber: 367
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Status"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                                lineNumber: 347,
                                columnNumber: 403
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Action"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                                lineNumber: 347,
                                columnNumber: 432
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                        lineNumber: 347,
                        columnNumber: 272
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                    lineNumber: 347,
                    columnNumber: 259
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                    children: filteredVisitors(activeVisitors).map({
                        "ResidentVisitorRegister[(anonymous)()]": (visitor_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: visitor_0.name
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                                        lineNumber: 348,
                                        columnNumber: 95
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: visitor_0.phone
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                                        lineNumber: 348,
                                        columnNumber: 134
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: visitor_0.purpose
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                                        lineNumber: 348,
                                        columnNumber: 174
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: visitor_0.checkIn
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                                        lineNumber: 348,
                                        columnNumber: 216
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                            className: "bg-green-100 text-green-800",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserCheck$3e$__["UserCheck"], {
                                                    className: "mr-1 h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                                                    lineNumber: 348,
                                                    columnNumber: 316
                                                }, this),
                                                "Checked In"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                                            lineNumber: 348,
                                            columnNumber: 269
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                                        lineNumber: 348,
                                        columnNumber: 258
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "outline",
                                            onClick: {
                                                "ResidentVisitorRegister[(anonymous)() > <Button>.onClick]": ()=>handleCheckOut(visitor_0.id)
                                            }["ResidentVisitorRegister[(anonymous)() > <Button>.onClick]"],
                                            children: "Check Out"
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                                            lineNumber: 348,
                                            columnNumber: 395
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                                        lineNumber: 348,
                                        columnNumber: 384
                                    }, this)
                                ]
                            }, visitor_0.id, true, {
                                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                                lineNumber: 348,
                                columnNumber: 66
                            }, this)
                    }["ResidentVisitorRegister[(anonymous)()]"])
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                    lineNumber: 347,
                    columnNumber: 486
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
            lineNumber: 347,
            columnNumber: 252
        }, this);
        if ($[72] !== t34) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                value: "active",
                className: "mt-4",
                children: t34
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                lineNumber: 353,
                columnNumber: 13
            }, this);
            $[72] = t34;
            $[73] = t10;
        } else {
            t10 = $[73];
        }
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"];
        t5 = "history";
        t6 = "mt-4";
        t7 = filteredVisitors(historicalVisitors).length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center py-12 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                    className: "mb-4 h-12 w-12 text-gray-400"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                    lineNumber: 362,
                    columnNumber: 139
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: "No visitor history"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                    lineNumber: 362,
                    columnNumber: 189
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
            lineNumber: 362,
            columnNumber: 62
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Name"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                                lineNumber: 362,
                                columnNumber: 279
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Phone"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                                lineNumber: 362,
                                columnNumber: 306
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Purpose"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                                lineNumber: 362,
                                columnNumber: 334
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Check-in Time"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                                lineNumber: 362,
                                columnNumber: 364
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Check-out Time"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                                lineNumber: 362,
                                columnNumber: 400
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Status"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                                lineNumber: 362,
                                columnNumber: 437
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                        lineNumber: 362,
                        columnNumber: 269
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                    lineNumber: 362,
                    columnNumber: 256
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                    children: filteredVisitors(historicalVisitors).map(_ResidentVisitorRegisterAnonymous)
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                    lineNumber: 362,
                    columnNumber: 491
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
            lineNumber: 362,
            columnNumber: 249
        }, this);
        $[10] = handleCheckOut;
        $[11] = handleRegisterVisitor;
        $[12] = isDialogOpen;
        $[13] = newVisitor;
        $[14] = searchTerm;
        $[15] = user.unit;
        $[16] = visitors;
        $[17] = T0;
        $[18] = T1;
        $[19] = T2;
        $[20] = T3;
        $[21] = t10;
        $[22] = t11;
        $[23] = t12;
        $[24] = t13;
        $[25] = t5;
        $[26] = t6;
        $[27] = t7;
        $[28] = t8;
        $[29] = t9;
    } else {
        T0 = $[17];
        T1 = $[18];
        T2 = $[19];
        T3 = $[20];
        t10 = $[21];
        t11 = $[22];
        t12 = $[23];
        t13 = $[24];
        t5 = $[25];
        t6 = $[26];
        t7 = $[27];
        t8 = $[28];
        t9 = $[29];
    }
    let t14;
    if ($[74] !== T0 || $[75] !== t5 || $[76] !== t6 || $[77] !== t7) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            value: t5,
            className: t6,
            children: t7
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
            lineNumber: 400,
            columnNumber: 11
        }, this);
        $[74] = T0;
        $[75] = t5;
        $[76] = t6;
        $[77] = t7;
        $[78] = t14;
    } else {
        t14 = $[78];
    }
    let t15;
    if ($[79] !== T1 || $[80] !== t10 || $[81] !== t14 || $[82] !== t8 || $[83] !== t9) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T1, {
            defaultValue: t8,
            children: [
                t9,
                t10,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
            lineNumber: 411,
            columnNumber: 11
        }, this);
        $[79] = T1;
        $[80] = t10;
        $[81] = t14;
        $[82] = t8;
        $[83] = t9;
        $[84] = t15;
    } else {
        t15 = $[84];
    }
    let t16;
    if ($[85] !== T2 || $[86] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T2, {
            children: t15
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
            lineNumber: 423,
            columnNumber: 11
        }, this);
        $[85] = T2;
        $[86] = t15;
        $[87] = t16;
    } else {
        t16 = $[87];
    }
    let t17;
    if ($[88] !== T3 || $[89] !== t11 || $[90] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T3, {
            children: [
                t11,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
            lineNumber: 432,
            columnNumber: 11
        }, this);
        $[88] = T3;
        $[89] = t11;
        $[90] = t16;
        $[91] = t17;
    } else {
        t17 = $[91];
    }
    let t18;
    if ($[92] !== t12 || $[93] !== t13 || $[94] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t12,
            children: [
                t13,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
            lineNumber: 442,
            columnNumber: 11
        }, this);
        $[92] = t12;
        $[93] = t13;
        $[94] = t17;
        $[95] = t18;
    } else {
        t18 = $[95];
    }
    return t18;
}
_s(ResidentVisitorRegister, "UpNRygZD/HmiYu/4xeMga+T70Nc=");
_c = ResidentVisitorRegister;
function _ResidentVisitorRegisterAnonymous(visitor_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                children: visitor_1.name
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                lineNumber: 453,
                columnNumber: 39
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                children: visitor_1.phone
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                lineNumber: 453,
                columnNumber: 78
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                children: visitor_1.purpose
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                lineNumber: 453,
                columnNumber: 118
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                children: visitor_1.checkIn
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                lineNumber: 453,
                columnNumber: 160
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                children: visitor_1.checkOut
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                lineNumber: 453,
                columnNumber: 202
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    variant: "outline",
                    className: "text-gray-600",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UserX$3e$__["UserX"], {
                            className: "mr-1 h-3 w-3"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                            lineNumber: 453,
                            columnNumber: 307
                        }, this),
                        "Checked Out"
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                    lineNumber: 453,
                    columnNumber: 256
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
                lineNumber: 453,
                columnNumber: 245
            }, this)
        ]
    }, visitor_1.id, true, {
        fileName: "[project]/client/src/app/components/ResidentVisitorRegister.jsx",
        lineNumber: 453,
        columnNumber: 10
    }, this);
}
function _ResidentVisitorRegisterVisitorsFilter2(v_1) {
    return v_1.status === "checked-out";
}
function _ResidentVisitorRegisterVisitorsFilter(v_0) {
    return v_0.status === "checked-in";
}
const __TURBOPACK__default__export__ = ResidentVisitorRegister;
var _c;
__turbopack_context__.k.register(_c, "ResidentVisitorRegister");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/app/components/ResidentSportFacilityBooking.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/input.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/label.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/select.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/table.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/dialog.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/badge.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$calendar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/calendar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/popover.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarIcon$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as CalendarIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/dumbbell.js [app-client] (ecmascript) <export default as Dumbbell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function ResidentSportFacilityBooking(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(109);
    if ($[0] !== "bcca2ad2347e83bff907113899bde4b488226ecb511cdacb7efc2951daa9edf2") {
        for(let $i = 0; $i < 109; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bcca2ad2347e83bff907113899bde4b488226ecb511cdacb7efc2951daa9edf2";
    }
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            id: "tennis",
            name: "Tennis Court",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__["Dumbbell"], {}, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 31,
                columnNumber: 13
            }, this)
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            id: "swimming",
            name: "Swimming Pool",
            icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"], {}, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 42,
                columnNumber: 13
            }, this)
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [
            t1,
            t2,
            {
                id: "fitness",
                name: "Fitness Center",
                icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dumbbell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Dumbbell$3e$__["Dumbbell"], {}, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                    lineNumber: 53,
                    columnNumber: 13
                }, this)
            }
        ];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const facilities = t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [
            {
                id: "1",
                facility: "Tennis Court",
                date: "2025-10-25",
                time: "2:00 PM",
                duration: "2 hours",
                status: "confirmed",
                guests: 2
            },
            {
                id: "2",
                facility: "Swimming Pool",
                date: "2025-10-28",
                time: "10:00 AM",
                duration: "1 hour",
                status: "confirmed",
                guests: 3
            },
            {
                id: "3",
                facility: "Fitness Center",
                date: "2025-10-23",
                time: "6:00 AM",
                duration: "1 hour",
                status: "confirmed",
                guests: 1
            }
        ];
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const [bookings, setBookings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t4);
    const [isDialogOpen, setIsDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = {
            facility: "",
            time: "",
            duration: "",
            guests: "1"
        };
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    const [newBooking, setNewBooking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t5);
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = [
            "6:00 AM",
            "8:00 AM",
            "10:00 AM",
            "12:00 PM",
            "2:00 PM",
            "4:00 PM",
            "6:00 PM",
            "8:00 PM"
        ];
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    const timeSlots = t6;
    let t7;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = [
            "30 minutes",
            "1 hour",
            "2 hours",
            "3 hours"
        ];
        $[7] = t7;
    } else {
        t7 = $[7];
    }
    const durations = t7;
    let t8;
    if ($[8] !== bookings || $[9] !== newBooking.duration || $[10] !== newBooking.facility || $[11] !== newBooking.guests || $[12] !== newBooking.time || $[13] !== selectedDate) {
        t8 = ({
            "ResidentSportFacilityBooking[handleBookFacility]": (e)=>{
                e.preventDefault();
                if (!selectedDate) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please select a date");
                    return;
                }
                const facilityName = facilities.find({
                    "ResidentSportFacilityBooking[handleBookFacility > facilities.find()]": (f)=>f.id === newBooking.facility
                }["ResidentSportFacilityBooking[handleBookFacility > facilities.find()]"])?.name || "";
                const booking = {
                    id: Date.now().toString(),
                    facility: facilityName,
                    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(selectedDate, "yyyy-MM-dd"),
                    time: newBooking.time,
                    duration: newBooking.duration,
                    status: "confirmed",
                    guests: parseInt(newBooking.guests)
                };
                setBookings([
                    booking,
                    ...bookings
                ]);
                setNewBooking({
                    facility: "",
                    time: "",
                    duration: "",
                    guests: "1"
                });
                setSelectedDate(undefined);
                setIsDialogOpen(false);
                __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Facility booked successfully!");
            }
        })["ResidentSportFacilityBooking[handleBookFacility]"];
        $[8] = bookings;
        $[9] = newBooking.duration;
        $[10] = newBooking.facility;
        $[11] = newBooking.guests;
        $[12] = newBooking.time;
        $[13] = selectedDate;
        $[14] = t8;
    } else {
        t8 = $[14];
    }
    const handleBookFacility = t8;
    let t9;
    if ($[15] !== bookings) {
        t9 = ({
            "ResidentSportFacilityBooking[handleCancelBooking]": (id)=>{
                setBookings(bookings.map({
                    "ResidentSportFacilityBooking[handleCancelBooking > bookings.map()]": (b)=>b.id === id ? {
                            ...b,
                            status: "cancelled"
                        } : b
                }["ResidentSportFacilityBooking[handleCancelBooking > bookings.map()]"]));
                __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Booking cancelled successfully!");
            }
        })["ResidentSportFacilityBooking[handleCancelBooking]"];
        $[15] = bookings;
        $[16] = t9;
    } else {
        t9 = $[16];
    }
    const handleCancelBooking = t9;
    let T0;
    let T1;
    let t10;
    let t11;
    let t12;
    let t13;
    let t14;
    let t15;
    let t16;
    if ($[17] !== bookings || $[18] !== handleBookFacility || $[19] !== handleCancelBooking || $[20] !== isDialogOpen || $[21] !== newBooking || $[22] !== selectedDate) {
        const upcomingBookings = bookings.filter(_ResidentSportFacilityBookingBookingsFilter);
        const pastBookings = bookings.filter(_ResidentSportFacilityBookingBookingsFilter2);
        const getStatusBadge = _ResidentSportFacilityBookingGetStatusBadge;
        t14 = "space-y-6";
        let t17;
        if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Sports Facility Booking"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                        lineNumber: 202,
                        columnNumber: 18
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600",
                        children: "Reserve sports facilities and amenities"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                        lineNumber: 202,
                        columnNumber: 50
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 202,
                columnNumber: 13
            }, this);
            $[32] = t17;
        } else {
            t17 = $[32];
        }
        let t18;
        if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            className: "mr-2 h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                            lineNumber: 209,
                            columnNumber: 51
                        }, this),
                        "Book Facility"
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                    lineNumber: 209,
                    columnNumber: 43
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 209,
                columnNumber: 13
            }, this);
            $[33] = t18;
        } else {
            t18 = $[33];
        }
        let t19;
        if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        children: "Book Sports Facility"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                        lineNumber: 216,
                        columnNumber: 27
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                        children: "Select a facility, date, and time for your booking"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                        lineNumber: 216,
                        columnNumber: 74
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 216,
                columnNumber: 13
            }, this);
            $[34] = t19;
        } else {
            t19 = $[34];
        }
        let t20;
        if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                htmlFor: "facility",
                children: "Facility"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 223,
                columnNumber: 13
            }, this);
            $[35] = t20;
        } else {
            t20 = $[35];
        }
        let t21;
        if ($[36] !== newBooking) {
            t21 = ({
                "ResidentSportFacilityBooking[<Select>.onValueChange]": (value)=>setNewBooking({
                        ...newBooking,
                        facility: value
                    })
            })["ResidentSportFacilityBooking[<Select>.onValueChange]"];
            $[36] = newBooking;
            $[37] = t21;
        } else {
            t21 = $[37];
        }
        let t22;
        if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
            t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                    placeholder: "Select facility"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                    lineNumber: 243,
                    columnNumber: 28
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 243,
                columnNumber: 13
            }, this);
            $[38] = t22;
        } else {
            t22 = $[38];
        }
        let t23;
        if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
            t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                children: facilities.map(_ResidentSportFacilityBookingFacilitiesMap)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 250,
                columnNumber: 13
            }, this);
            $[39] = t23;
        } else {
            t23 = $[39];
        }
        let t24;
        if ($[40] !== newBooking.facility || $[41] !== t21) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    t20,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                        value: newBooking.facility,
                        onValueChange: t21,
                        required: true,
                        children: [
                            t22,
                            t23
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                        lineNumber: 257,
                        columnNumber: 45
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 257,
                columnNumber: 13
            }, this);
            $[40] = newBooking.facility;
            $[41] = t21;
            $[42] = t24;
        } else {
            t24 = $[42];
        }
        let t25;
        if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
            t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                children: "Date"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 266,
                columnNumber: 13
            }, this);
            $[43] = t25;
        } else {
            t25 = $[43];
        }
        let t26;
        if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
            t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarIcon$3e$__["CalendarIcon"], {
                className: "mr-2 h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 273,
                columnNumber: 13
            }, this);
            $[44] = t26;
        } else {
            t26 = $[44];
        }
        let t27;
        if ($[45] !== selectedDate) {
            t27 = selectedDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(selectedDate, "PPP") : "Pick a date";
            $[45] = selectedDate;
            $[46] = t27;
        } else {
            t27 = $[46];
        }
        let t28;
        if ($[47] !== t27) {
            t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    className: "w-full justify-start",
                    children: [
                        t26,
                        t27
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                    lineNumber: 288,
                    columnNumber: 44
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 288,
                columnNumber: 13
            }, this);
            $[47] = t27;
            $[48] = t28;
        } else {
            t28 = $[48];
        }
        let t29;
        if ($[49] !== selectedDate) {
            t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                className: "w-auto p-0",
                align: "start",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$calendar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Calendar"], {
                    mode: "single",
                    selected: selectedDate,
                    onSelect: setSelectedDate,
                    disabled: _ResidentSportFacilityBookingCalendarDisabled,
                    initialFocus: true
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                    lineNumber: 296,
                    columnNumber: 66
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 296,
                columnNumber: 13
            }, this);
            $[49] = selectedDate;
            $[50] = t29;
        } else {
            t29 = $[50];
        }
        let t30;
        if ($[51] !== t28 || $[52] !== t29) {
            t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    t25,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
                        children: [
                            t28,
                            t29
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                        lineNumber: 304,
                        columnNumber: 45
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 304,
                columnNumber: 13
            }, this);
            $[51] = t28;
            $[52] = t29;
            $[53] = t30;
        } else {
            t30 = $[53];
        }
        let t31;
        if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
            t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                htmlFor: "time",
                children: "Time"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 313,
                columnNumber: 13
            }, this);
            $[54] = t31;
        } else {
            t31 = $[54];
        }
        let t32;
        if ($[55] !== newBooking) {
            t32 = ({
                "ResidentSportFacilityBooking[<Select>.onValueChange]": (value_0)=>setNewBooking({
                        ...newBooking,
                        time: value_0
                    })
            })["ResidentSportFacilityBooking[<Select>.onValueChange]"];
            $[55] = newBooking;
            $[56] = t32;
        } else {
            t32 = $[56];
        }
        let t33;
        if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
            t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                    placeholder: "Select time"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                    lineNumber: 333,
                    columnNumber: 28
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 333,
                columnNumber: 13
            }, this);
            $[57] = t33;
        } else {
            t33 = $[57];
        }
        let t34;
        if ($[58] === Symbol.for("react.memo_cache_sentinel")) {
            t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                children: timeSlots.map(_ResidentSportFacilityBookingTimeSlotsMap)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 340,
                columnNumber: 13
            }, this);
            $[58] = t34;
        } else {
            t34 = $[58];
        }
        let t35;
        if ($[59] !== newBooking.time || $[60] !== t32) {
            t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    t31,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                        value: newBooking.time,
                        onValueChange: t32,
                        required: true,
                        children: [
                            t33,
                            t34
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                        lineNumber: 347,
                        columnNumber: 45
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 347,
                columnNumber: 13
            }, this);
            $[59] = newBooking.time;
            $[60] = t32;
            $[61] = t35;
        } else {
            t35 = $[61];
        }
        let t36;
        if ($[62] === Symbol.for("react.memo_cache_sentinel")) {
            t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                htmlFor: "duration",
                children: "Duration"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 356,
                columnNumber: 13
            }, this);
            $[62] = t36;
        } else {
            t36 = $[62];
        }
        let t37;
        if ($[63] !== newBooking) {
            t37 = ({
                "ResidentSportFacilityBooking[<Select>.onValueChange]": (value_1)=>setNewBooking({
                        ...newBooking,
                        duration: value_1
                    })
            })["ResidentSportFacilityBooking[<Select>.onValueChange]"];
            $[63] = newBooking;
            $[64] = t37;
        } else {
            t37 = $[64];
        }
        let t38;
        if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
            t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                    placeholder: "Select duration"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                    lineNumber: 376,
                    columnNumber: 28
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 376,
                columnNumber: 13
            }, this);
            $[65] = t38;
        } else {
            t38 = $[65];
        }
        let t39;
        if ($[66] === Symbol.for("react.memo_cache_sentinel")) {
            t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                children: durations.map(_ResidentSportFacilityBookingDurationsMap)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 383,
                columnNumber: 13
            }, this);
            $[66] = t39;
        } else {
            t39 = $[66];
        }
        let t40;
        if ($[67] !== newBooking.duration || $[68] !== t37) {
            t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    t36,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                        value: newBooking.duration,
                        onValueChange: t37,
                        required: true,
                        children: [
                            t38,
                            t39
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                        lineNumber: 390,
                        columnNumber: 45
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 390,
                columnNumber: 13
            }, this);
            $[67] = newBooking.duration;
            $[68] = t37;
            $[69] = t40;
        } else {
            t40 = $[69];
        }
        let t41;
        if ($[70] === Symbol.for("react.memo_cache_sentinel")) {
            t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                htmlFor: "guests",
                children: "Number of Guests"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 399,
                columnNumber: 13
            }, this);
            $[70] = t41;
        } else {
            t41 = $[70];
        }
        let t42;
        if ($[71] !== newBooking) {
            t42 = ({
                "ResidentSportFacilityBooking[<Input>.onChange]": (e_0)=>setNewBooking({
                        ...newBooking,
                        guests: e_0.target.value
                    })
            })["ResidentSportFacilityBooking[<Input>.onChange]"];
            $[71] = newBooking;
            $[72] = t42;
        } else {
            t42 = $[72];
        }
        let t43;
        if ($[73] !== newBooking.guests || $[74] !== t42) {
            t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    t41,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "guests",
                        type: "number",
                        min: "1",
                        max: "10",
                        value: newBooking.guests,
                        onChange: t42,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                        lineNumber: 419,
                        columnNumber: 45
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 419,
                columnNumber: 13
            }, this);
            $[73] = newBooking.guests;
            $[74] = t42;
            $[75] = t43;
        } else {
            t43 = $[75];
        }
        let t44;
        if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
            t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "submit",
                className: "w-full",
                children: "Confirm Booking"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 428,
                columnNumber: 13
            }, this);
            $[76] = t44;
        } else {
            t44 = $[76];
        }
        let t45;
        if ($[77] !== handleBookFacility || $[78] !== t24 || $[79] !== t30 || $[80] !== t35 || $[81] !== t40 || $[82] !== t43) {
            t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                className: "max-w-md",
                children: [
                    t19,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleBookFacility,
                        className: "space-y-4",
                        children: [
                            t24,
                            t30,
                            t35,
                            t40,
                            t43,
                            t44
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                        lineNumber: 435,
                        columnNumber: 54
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 435,
                columnNumber: 13
            }, this);
            $[77] = handleBookFacility;
            $[78] = t24;
            $[79] = t30;
            $[80] = t35;
            $[81] = t40;
            $[82] = t43;
            $[83] = t45;
        } else {
            t45 = $[83];
        }
        if ($[84] !== isDialogOpen || $[85] !== t45) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    t17,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                        open: isDialogOpen,
                        onOpenChange: setIsDialogOpen,
                        children: [
                            t18,
                            t45
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                        lineNumber: 447,
                        columnNumber: 69
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 447,
                columnNumber: 13
            }, this);
            $[84] = isDialogOpen;
            $[85] = t45;
            $[86] = t15;
        } else {
            t15 = $[86];
        }
        let t46;
        if ($[87] === Symbol.for("react.memo_cache_sentinel")) {
            t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    children: "Available Facilities"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                    lineNumber: 456,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 456,
                columnNumber: 13
            }, this);
            $[87] = t46;
        } else {
            t46 = $[87];
        }
        if ($[88] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    t46,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
                            children: facilities.map(_ResidentSportFacilityBookingFacilitiesMap2)
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                            lineNumber: 462,
                            columnNumber: 37
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                        lineNumber: 462,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 462,
                columnNumber: 13
            }, this);
            $[88] = t16;
        } else {
            t16 = $[88];
        }
        T1 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"];
        if ($[89] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    children: "My Bookings"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                    lineNumber: 469,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 469,
                columnNumber: 13
            }, this);
            $[89] = t13;
        } else {
            t13 = $[89];
        }
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"];
        t10 = "space-y-4";
        let t47;
        if ($[90] === Symbol.for("react.memo_cache_sentinel")) {
            t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "mb-3 text-sm",
                children: "Upcoming Bookings"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 478,
                columnNumber: 13
            }, this);
            $[90] = t47;
        } else {
            t47 = $[90];
        }
        const t48 = upcomingBookings.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center text-sm text-gray-500 py-8",
            children: "No upcoming bookings"
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
            lineNumber: 483,
            columnNumber: 49
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Facility"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                                lineNumber: 483,
                                columnNumber: 160
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Date"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                                lineNumber: 483,
                                columnNumber: 191
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Time"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                                lineNumber: 483,
                                columnNumber: 218
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Duration"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                                lineNumber: 483,
                                columnNumber: 245
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Guests"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                                lineNumber: 483,
                                columnNumber: 276
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Status"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                                lineNumber: 483,
                                columnNumber: 305
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Action"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                                lineNumber: 483,
                                columnNumber: 334
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                        lineNumber: 483,
                        columnNumber: 150
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                    lineNumber: 483,
                    columnNumber: 137
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                    children: upcomingBookings.map({
                        "ResidentSportFacilityBooking[upcomingBookings.map()]": (booking_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: booking_0.facility
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                                        lineNumber: 484,
                                        columnNumber: 109
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(booking_0.date), "MMM dd, yyyy")
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                                        lineNumber: 484,
                                        columnNumber: 152
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: booking_0.time
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                                        lineNumber: 484,
                                        columnNumber: 225
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: booking_0.duration
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                                        lineNumber: 484,
                                        columnNumber: 264
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: booking_0.guests
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                                        lineNumber: 484,
                                        columnNumber: 307
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: getStatusBadge(booking_0.status)
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                                        lineNumber: 484,
                                        columnNumber: 348
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "outline",
                                            onClick: {
                                                "ResidentSportFacilityBooking[upcomingBookings.map() > <Button>.onClick]": ()=>handleCancelBooking(booking_0.id)
                                            }["ResidentSportFacilityBooking[upcomingBookings.map() > <Button>.onClick]"],
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                                            lineNumber: 484,
                                            columnNumber: 416
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                                        lineNumber: 484,
                                        columnNumber: 405
                                    }, this)
                                ]
                            }, booking_0.id, true, {
                                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                                lineNumber: 484,
                                columnNumber: 80
                            }, this)
                    }["ResidentSportFacilityBooking[upcomingBookings.map()]"])
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                    lineNumber: 483,
                    columnNumber: 388
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
            lineNumber: 483,
            columnNumber: 130
        }, this);
        if ($[91] !== t48) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t47,
                    t48
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 489,
                columnNumber: 13
            }, this);
            $[91] = t48;
            $[92] = t11;
        } else {
            t11 = $[92];
        }
        t12 = pastBookings.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "mb-3 text-sm",
                    children: "Past Bookings"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                    lineNumber: 495,
                    columnNumber: 43
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Facility"
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                                        lineNumber: 495,
                                        columnNumber: 120
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Date"
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                                        lineNumber: 495,
                                        columnNumber: 151
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Time"
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                                        lineNumber: 495,
                                        columnNumber: 178
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Duration"
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                                        lineNumber: 495,
                                        columnNumber: 205
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                                        lineNumber: 495,
                                        columnNumber: 236
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                                lineNumber: 495,
                                columnNumber: 110
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                            lineNumber: 495,
                            columnNumber: 97
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                            children: pastBookings.map({
                                "ResidentSportFacilityBooking[pastBookings.map()]": (booking_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: booking_1.facility
                                            }, void 0, false, {
                                                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                                                lineNumber: 496,
                                                columnNumber: 107
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(booking_1.date), "MMM dd, yyyy")
                                            }, void 0, false, {
                                                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                                                lineNumber: 496,
                                                columnNumber: 150
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: booking_1.time
                                            }, void 0, false, {
                                                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                                                lineNumber: 496,
                                                columnNumber: 223
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: booking_1.duration
                                            }, void 0, false, {
                                                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                                                lineNumber: 496,
                                                columnNumber: 262
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                                children: getStatusBadge(booking_1.status)
                                            }, void 0, false, {
                                                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                                                lineNumber: 496,
                                                columnNumber: 305
                                            }, this)
                                        ]
                                    }, booking_1.id, true, {
                                        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                                        lineNumber: 496,
                                        columnNumber: 78
                                    }, this)
                            }["ResidentSportFacilityBooking[pastBookings.map()]"])
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                            lineNumber: 495,
                            columnNumber: 290
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                    lineNumber: 495,
                    columnNumber: 90
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
            lineNumber: 495,
            columnNumber: 38
        }, this);
        $[17] = bookings;
        $[18] = handleBookFacility;
        $[19] = handleCancelBooking;
        $[20] = isDialogOpen;
        $[21] = newBooking;
        $[22] = selectedDate;
        $[23] = T0;
        $[24] = T1;
        $[25] = t10;
        $[26] = t11;
        $[27] = t12;
        $[28] = t13;
        $[29] = t14;
        $[30] = t15;
        $[31] = t16;
    } else {
        T0 = $[23];
        T1 = $[24];
        t10 = $[25];
        t11 = $[26];
        t12 = $[27];
        t13 = $[28];
        t14 = $[29];
        t15 = $[30];
        t16 = $[31];
    }
    let t17;
    if ($[93] !== t10 || $[94] !== t11 || $[95] !== t12) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: [
                t11,
                t12
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
            lineNumber: 526,
            columnNumber: 11
        }, this);
        $[93] = t10;
        $[94] = t11;
        $[95] = t12;
        $[96] = t17;
    } else {
        t17 = $[96];
    }
    let t18;
    if ($[97] !== T0 || $[98] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            children: t17
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
            lineNumber: 536,
            columnNumber: 11
        }, this);
        $[97] = T0;
        $[98] = t17;
        $[99] = t18;
    } else {
        t18 = $[99];
    }
    let t19;
    if ($[100] !== T1 || $[101] !== t13 || $[102] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T1, {
            children: [
                t13,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
            lineNumber: 545,
            columnNumber: 11
        }, this);
        $[100] = T1;
        $[101] = t13;
        $[102] = t18;
        $[103] = t19;
    } else {
        t19 = $[103];
    }
    let t20;
    if ($[104] !== t14 || $[105] !== t15 || $[106] !== t16 || $[107] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t14,
            children: [
                t15,
                t16,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
            lineNumber: 555,
            columnNumber: 11
        }, this);
        $[104] = t14;
        $[105] = t15;
        $[106] = t16;
        $[107] = t19;
        $[108] = t20;
    } else {
        t20 = $[108];
    }
    return t20;
}
_s(ResidentSportFacilityBooking, "CPFTlXlJwA65BczdEgoxJiRR4Fw=");
_c = ResidentSportFacilityBooking;
function _ResidentSportFacilityBookingFacilitiesMap2(facility_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-4 rounded-lg border p-4 hover:bg-gray-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-3xl",
                children: facility_0.icon
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 567,
                columnNumber: 110
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        children: facility_0.name
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                        lineNumber: 567,
                        columnNumber: 164
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500",
                        children: "Available for booking"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                        lineNumber: 567,
                        columnNumber: 208
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                lineNumber: 567,
                columnNumber: 159
            }, this)
        ]
    }, facility_0.id, true, {
        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
        lineNumber: 567,
        columnNumber: 10
    }, this);
}
function _ResidentSportFacilityBookingDurationsMap(duration) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: duration,
        children: duration
    }, duration, false, {
        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
        lineNumber: 570,
        columnNumber: 10
    }, this);
}
function _ResidentSportFacilityBookingTimeSlotsMap(time) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: time,
        children: time
    }, time, false, {
        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
        lineNumber: 573,
        columnNumber: 10
    }, this);
}
function _ResidentSportFacilityBookingCalendarDisabled(date) {
    return date < new Date();
}
function _ResidentSportFacilityBookingFacilitiesMap(facility) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: facility.id,
        children: [
            facility.icon,
            " ",
            facility.name
        ]
    }, facility.id, true, {
        fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
        lineNumber: 579,
        columnNumber: 10
    }, this);
}
function _ResidentSportFacilityBookingGetStatusBadge(status) {
    switch(status){
        case "confirmed":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-green-100 text-green-800",
                    children: "Confirmed"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                    lineNumber: 585,
                    columnNumber: 16
                }, this);
            }
        case "pending":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-yellow-100 text-yellow-800",
                    children: "Pending"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                    lineNumber: 589,
                    columnNumber: 16
                }, this);
            }
        case "cancelled":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-red-100 text-red-800",
                    children: "Cancelled"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentSportFacilityBooking.jsx",
                    lineNumber: 593,
                    columnNumber: 16
                }, this);
            }
        default:
            {
                return null;
            }
    }
}
function _ResidentSportFacilityBookingBookingsFilter2(b_1) {
    return new Date(b_1.date) < new Date() || b_1.status === "cancelled";
}
function _ResidentSportFacilityBookingBookingsFilter(b_0) {
    return b_0.status !== "cancelled" && new Date(b_0.date) >= new Date();
}
const __TURBOPACK__default__export__ = ResidentSportFacilityBooking;
var _c;
__turbopack_context__.k.register(_c, "ResidentSportFacilityBooking");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/app/components/ResidentEventHallBooking.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/input.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/label.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$textarea$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/textarea.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/select.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/table.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/dialog.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/badge.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$calendar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/calendar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/popover.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarIcon$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as CalendarIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/building.js [app-client] (ecmascript) <export default as Building>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/client/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/tabs.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function ResidentEventHallBooking(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(135);
    if ($[0] !== "975c14eff42a31b40df015cf6b47e58729425dcb5158194614b8f627ba35a422") {
        for(let $i = 0; $i < 135; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "975c14eff42a31b40df015cf6b47e58729425dcb5158194614b8f627ba35a422";
    }
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            {
                id: "1",
                hall: "Main Hall",
                event: "Birthday Party",
                date: "2025-11-05",
                startTime: "6:00 PM",
                endTime: "10:00 PM",
                guests: 80,
                status: "confirmed",
                description: "Birthday celebration for family"
            },
            {
                id: "2",
                hall: "Conference Room",
                event: "Business Meeting",
                date: "2025-10-28",
                startTime: "2:00 PM",
                endTime: "5:00 PM",
                guests: 25,
                status: "pending",
                description: "Annual business review meeting"
            }
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [bookings, setBookings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [isDialogOpen, setIsDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedDate, setSelectedDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])();
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            hall: "",
            event: "",
            startTime: "",
            endTime: "",
            guests: "10",
            description: ""
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const [newBooking, setNewBooking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [
            {
                id: "main",
                name: "Main Hall",
                capacity: 200
            },
            {
                id: "banquet",
                name: "Banquet Hall",
                capacity: 150
            },
            {
                id: "conference",
                name: "Conference Room",
                capacity: 50
            },
            {
                id: "party",
                name: "Party Room",
                capacity: 30
            }
        ];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const halls = t3;
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = [
            "8:00 AM",
            "9:00 AM",
            "10:00 AM",
            "11:00 AM",
            "12:00 PM",
            "1:00 PM",
            "2:00 PM",
            "3:00 PM",
            "4:00 PM",
            "5:00 PM",
            "6:00 PM",
            "7:00 PM",
            "8:00 PM",
            "9:00 PM",
            "10:00 PM"
        ];
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const timeSlots = t4;
    let t5;
    if ($[5] !== bookings || $[6] !== newBooking.description || $[7] !== newBooking.endTime || $[8] !== newBooking.event || $[9] !== newBooking.guests || $[10] !== newBooking.hall || $[11] !== newBooking.startTime || $[12] !== selectedDate) {
        t5 = ({
            "ResidentEventHallBooking[handleBookHall]": (e)=>{
                e.preventDefault();
                if (!selectedDate) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Please select a date");
                    return;
                }
                const booking = {
                    id: Date.now().toString(),
                    hall: halls.find({
                        "ResidentEventHallBooking[handleBookHall > halls.find()]": (h)=>h.id === newBooking.hall
                    }["ResidentEventHallBooking[handleBookHall > halls.find()]"])?.name || "",
                    event: newBooking.event,
                    date: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(selectedDate, "yyyy-MM-dd"),
                    startTime: newBooking.startTime,
                    endTime: newBooking.endTime,
                    guests: parseInt(newBooking.guests),
                    status: "pending",
                    description: newBooking.description
                };
                setBookings([
                    booking,
                    ...bookings
                ]);
                setNewBooking({
                    hall: "",
                    event: "",
                    startTime: "",
                    endTime: "",
                    guests: "10",
                    description: ""
                });
                setSelectedDate(undefined);
                setIsDialogOpen(false);
                __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Hall booking submitted successfully!");
            }
        })["ResidentEventHallBooking[handleBookHall]"];
        $[5] = bookings;
        $[6] = newBooking.description;
        $[7] = newBooking.endTime;
        $[8] = newBooking.event;
        $[9] = newBooking.guests;
        $[10] = newBooking.hall;
        $[11] = newBooking.startTime;
        $[12] = selectedDate;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    const handleBookHall = t5;
    let t6;
    if ($[14] !== bookings) {
        t6 = ({
            "ResidentEventHallBooking[handleCancelBooking]": (id)=>{
                setBookings(bookings.map({
                    "ResidentEventHallBooking[handleCancelBooking > bookings.map()]": (b)=>b.id === id ? {
                            ...b,
                            status: "cancelled"
                        } : b
                }["ResidentEventHallBooking[handleCancelBooking > bookings.map()]"]));
                __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Booking cancelled successfully!");
            }
        })["ResidentEventHallBooking[handleCancelBooking]"];
        $[14] = bookings;
        $[15] = t6;
    } else {
        t6 = $[15];
    }
    const handleCancelBooking = t6;
    let T0;
    let T1;
    let T2;
    let T3;
    let t10;
    let t11;
    let t12;
    let t13;
    let t14;
    let t15;
    let t16;
    let t7;
    let t8;
    let t9;
    if ($[16] !== bookings || $[17] !== handleBookHall || $[18] !== handleCancelBooking || $[19] !== isDialogOpen || $[20] !== newBooking || $[21] !== selectedDate) {
        const upcomingBookings = bookings.filter(_ResidentEventHallBookingBookingsFilter);
        const pastBookings = bookings.filter(_ResidentEventHallBookingBookingsFilter2);
        const getStatusBadge = _ResidentEventHallBookingGetStatusBadge;
        t14 = "space-y-6";
        let t17;
        if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Event Hall Booking"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                        lineNumber: 194,
                        columnNumber: 18
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600",
                        children: "Book event halls for your celebrations"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                        lineNumber: 194,
                        columnNumber: 45
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 194,
                columnNumber: 13
            }, this);
            $[36] = t17;
        } else {
            t17 = $[36];
        }
        let t18;
        if ($[37] === Symbol.for("react.memo_cache_sentinel")) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            className: "mr-2 h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                            lineNumber: 201,
                            columnNumber: 51
                        }, this),
                        "Book Event Hall"
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                    lineNumber: 201,
                    columnNumber: 43
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 201,
                columnNumber: 13
            }, this);
            $[37] = t18;
        } else {
            t18 = $[37];
        }
        let t19;
        if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        children: "Book Event Hall"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                        lineNumber: 208,
                        columnNumber: 27
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                        children: "Select a hall, date, and time for your event"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                        lineNumber: 208,
                        columnNumber: 69
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 208,
                columnNumber: 13
            }, this);
            $[38] = t19;
        } else {
            t19 = $[38];
        }
        let t20;
        if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                htmlFor: "hall",
                children: "Event Hall"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 215,
                columnNumber: 13
            }, this);
            $[39] = t20;
        } else {
            t20 = $[39];
        }
        let t21;
        if ($[40] !== newBooking) {
            t21 = ({
                "ResidentEventHallBooking[<Select>.onValueChange]": (value)=>setNewBooking({
                        ...newBooking,
                        hall: value
                    })
            })["ResidentEventHallBooking[<Select>.onValueChange]"];
            $[40] = newBooking;
            $[41] = t21;
        } else {
            t21 = $[41];
        }
        let t22;
        if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
            t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                    placeholder: "Select hall"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                    lineNumber: 235,
                    columnNumber: 28
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 235,
                columnNumber: 13
            }, this);
            $[42] = t22;
        } else {
            t22 = $[42];
        }
        let t23;
        if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
            t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                children: halls.map(_ResidentEventHallBookingHallsMap)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 242,
                columnNumber: 13
            }, this);
            $[43] = t23;
        } else {
            t23 = $[43];
        }
        let t24;
        if ($[44] !== newBooking.hall || $[45] !== t21) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    t20,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                        value: newBooking.hall,
                        onValueChange: t21,
                        required: true,
                        children: [
                            t22,
                            t23
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                        lineNumber: 249,
                        columnNumber: 45
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 249,
                columnNumber: 13
            }, this);
            $[44] = newBooking.hall;
            $[45] = t21;
            $[46] = t24;
        } else {
            t24 = $[46];
        }
        let t25;
        if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
            t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                htmlFor: "event",
                children: "Event Type"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 258,
                columnNumber: 13
            }, this);
            $[47] = t25;
        } else {
            t25 = $[47];
        }
        let t26;
        if ($[48] !== newBooking) {
            t26 = ({
                "ResidentEventHallBooking[<Input>.onChange]": (e_0)=>setNewBooking({
                        ...newBooking,
                        event: e_0.target.value
                    })
            })["ResidentEventHallBooking[<Input>.onChange]"];
            $[48] = newBooking;
            $[49] = t26;
        } else {
            t26 = $[49];
        }
        let t27;
        if ($[50] !== newBooking.event || $[51] !== t26) {
            t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    t25,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "event",
                        value: newBooking.event,
                        onChange: t26,
                        placeholder: "e.g., Birthday, Wedding, Meeting",
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                        lineNumber: 278,
                        columnNumber: 45
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 278,
                columnNumber: 13
            }, this);
            $[50] = newBooking.event;
            $[51] = t26;
            $[52] = t27;
        } else {
            t27 = $[52];
        }
        let t28;
        if ($[53] === Symbol.for("react.memo_cache_sentinel")) {
            t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                children: "Event Date"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 287,
                columnNumber: 13
            }, this);
            $[53] = t28;
        } else {
            t28 = $[53];
        }
        let t29;
        if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
            t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CalendarIcon$3e$__["CalendarIcon"], {
                className: "mr-2 h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 294,
                columnNumber: 13
            }, this);
            $[54] = t29;
        } else {
            t29 = $[54];
        }
        let t30;
        if ($[55] !== selectedDate) {
            t30 = selectedDate ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(selectedDate, "PPP") : "Pick a date";
            $[55] = selectedDate;
            $[56] = t30;
        } else {
            t30 = $[56];
        }
        let t31;
        if ($[57] !== t30) {
            t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    variant: "outline",
                    className: "w-full justify-start",
                    children: [
                        t29,
                        t30
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                    lineNumber: 309,
                    columnNumber: 44
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 309,
                columnNumber: 13
            }, this);
            $[57] = t30;
            $[58] = t31;
        } else {
            t31 = $[58];
        }
        let t32;
        if ($[59] !== selectedDate) {
            t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PopoverContent"], {
                className: "w-auto p-0",
                align: "start",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$calendar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Calendar"], {
                    mode: "single",
                    selected: selectedDate,
                    onSelect: setSelectedDate,
                    disabled: _ResidentEventHallBookingCalendarDisabled,
                    initialFocus: true
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                    lineNumber: 317,
                    columnNumber: 66
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 317,
                columnNumber: 13
            }, this);
            $[59] = selectedDate;
            $[60] = t32;
        } else {
            t32 = $[60];
        }
        let t33;
        if ($[61] !== t31 || $[62] !== t32) {
            t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    t28,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$popover$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Popover"], {
                        children: [
                            t31,
                            t32
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                        lineNumber: 325,
                        columnNumber: 45
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 325,
                columnNumber: 13
            }, this);
            $[61] = t31;
            $[62] = t32;
            $[63] = t33;
        } else {
            t33 = $[63];
        }
        let t34;
        if ($[64] === Symbol.for("react.memo_cache_sentinel")) {
            t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                htmlFor: "startTime",
                children: "Start Time"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 334,
                columnNumber: 13
            }, this);
            $[64] = t34;
        } else {
            t34 = $[64];
        }
        let t35;
        if ($[65] !== newBooking) {
            t35 = ({
                "ResidentEventHallBooking[<Select>.onValueChange]": (value_0)=>setNewBooking({
                        ...newBooking,
                        startTime: value_0
                    })
            })["ResidentEventHallBooking[<Select>.onValueChange]"];
            $[65] = newBooking;
            $[66] = t35;
        } else {
            t35 = $[66];
        }
        let t36;
        if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
            t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                    placeholder: "Start"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                    lineNumber: 354,
                    columnNumber: 28
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 354,
                columnNumber: 13
            }, this);
            $[67] = t36;
        } else {
            t36 = $[67];
        }
        let t37;
        if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
            t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                children: timeSlots.map(_ResidentEventHallBookingTimeSlotsMap)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 361,
                columnNumber: 13
            }, this);
            $[68] = t37;
        } else {
            t37 = $[68];
        }
        let t38;
        if ($[69] !== newBooking.startTime || $[70] !== t35) {
            t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    t34,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                        value: newBooking.startTime,
                        onValueChange: t35,
                        required: true,
                        children: [
                            t36,
                            t37
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                        lineNumber: 368,
                        columnNumber: 45
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 368,
                columnNumber: 13
            }, this);
            $[69] = newBooking.startTime;
            $[70] = t35;
            $[71] = t38;
        } else {
            t38 = $[71];
        }
        let t39;
        if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
            t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                htmlFor: "endTime",
                children: "End Time"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 377,
                columnNumber: 13
            }, this);
            $[72] = t39;
        } else {
            t39 = $[72];
        }
        let t40;
        if ($[73] !== newBooking) {
            t40 = ({
                "ResidentEventHallBooking[<Select>.onValueChange]": (value_1)=>setNewBooking({
                        ...newBooking,
                        endTime: value_1
                    })
            })["ResidentEventHallBooking[<Select>.onValueChange]"];
            $[73] = newBooking;
            $[74] = t40;
        } else {
            t40 = $[74];
        }
        let t41;
        if ($[75] === Symbol.for("react.memo_cache_sentinel")) {
            t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                    placeholder: "End"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                    lineNumber: 397,
                    columnNumber: 28
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 397,
                columnNumber: 13
            }, this);
            $[75] = t41;
        } else {
            t41 = $[75];
        }
        let t42;
        if ($[76] === Symbol.for("react.memo_cache_sentinel")) {
            t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                children: timeSlots.map(_ResidentEventHallBookingTimeSlotsMap2)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 404,
                columnNumber: 13
            }, this);
            $[76] = t42;
        } else {
            t42 = $[76];
        }
        let t43;
        if ($[77] !== newBooking.endTime || $[78] !== t40) {
            t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    t39,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                        value: newBooking.endTime,
                        onValueChange: t40,
                        required: true,
                        children: [
                            t41,
                            t42
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                        lineNumber: 411,
                        columnNumber: 45
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 411,
                columnNumber: 13
            }, this);
            $[77] = newBooking.endTime;
            $[78] = t40;
            $[79] = t43;
        } else {
            t43 = $[79];
        }
        let t44;
        if ($[80] !== t38 || $[81] !== t43) {
            t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-2 gap-4",
                children: [
                    t38,
                    t43
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 420,
                columnNumber: 13
            }, this);
            $[80] = t38;
            $[81] = t43;
            $[82] = t44;
        } else {
            t44 = $[82];
        }
        let t45;
        if ($[83] === Symbol.for("react.memo_cache_sentinel")) {
            t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                htmlFor: "guests",
                children: "Expected Guests"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 429,
                columnNumber: 13
            }, this);
            $[83] = t45;
        } else {
            t45 = $[83];
        }
        let t46;
        if ($[84] !== newBooking) {
            t46 = ({
                "ResidentEventHallBooking[<Input>.onChange]": (e_1)=>setNewBooking({
                        ...newBooking,
                        guests: e_1.target.value
                    })
            })["ResidentEventHallBooking[<Input>.onChange]"];
            $[84] = newBooking;
            $[85] = t46;
        } else {
            t46 = $[85];
        }
        let t47;
        if ($[86] !== newBooking.guests || $[87] !== t46) {
            t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    t45,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                        id: "guests",
                        type: "number",
                        min: "1",
                        max: "200",
                        value: newBooking.guests,
                        onChange: t46,
                        required: true
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                        lineNumber: 449,
                        columnNumber: 45
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 449,
                columnNumber: 13
            }, this);
            $[86] = newBooking.guests;
            $[87] = t46;
            $[88] = t47;
        } else {
            t47 = $[88];
        }
        let t48;
        if ($[89] === Symbol.for("react.memo_cache_sentinel")) {
            t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                htmlFor: "description",
                children: "Event Description"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 458,
                columnNumber: 13
            }, this);
            $[89] = t48;
        } else {
            t48 = $[89];
        }
        let t49;
        if ($[90] !== newBooking) {
            t49 = ({
                "ResidentEventHallBooking[<Textarea>.onChange]": (e_2)=>setNewBooking({
                        ...newBooking,
                        description: e_2.target.value
                    })
            })["ResidentEventHallBooking[<Textarea>.onChange]"];
            $[90] = newBooking;
            $[91] = t49;
        } else {
            t49 = $[91];
        }
        let t50;
        if ($[92] !== newBooking.description || $[93] !== t49) {
            t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    t48,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$textarea$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                        id: "description",
                        value: newBooking.description,
                        onChange: t49,
                        placeholder: "Brief description of your event",
                        rows: 3
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                        lineNumber: 478,
                        columnNumber: 45
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 478,
                columnNumber: 13
            }, this);
            $[92] = newBooking.description;
            $[93] = t49;
            $[94] = t50;
        } else {
            t50 = $[94];
        }
        let t51;
        if ($[95] === Symbol.for("react.memo_cache_sentinel")) {
            t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                type: "submit",
                className: "w-full",
                children: "Submit Booking Request"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 487,
                columnNumber: 13
            }, this);
            $[95] = t51;
        } else {
            t51 = $[95];
        }
        let t52;
        if ($[96] !== handleBookHall || $[97] !== t24 || $[98] !== t27 || $[99] !== t33 || $[100] !== t44 || $[101] !== t47 || $[102] !== t50) {
            t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
                className: "max-w-md",
                children: [
                    t19,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleBookHall,
                        className: "space-y-4",
                        children: [
                            t24,
                            t27,
                            t33,
                            t44,
                            t47,
                            t50,
                            t51
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                        lineNumber: 494,
                        columnNumber: 54
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 494,
                columnNumber: 13
            }, this);
            $[96] = handleBookHall;
            $[97] = t24;
            $[98] = t27;
            $[99] = t33;
            $[100] = t44;
            $[101] = t47;
            $[102] = t50;
            $[103] = t52;
        } else {
            t52 = $[103];
        }
        if ($[104] !== isDialogOpen || $[105] !== t52) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    t17,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                        open: isDialogOpen,
                        onOpenChange: setIsDialogOpen,
                        children: [
                            t18,
                            t52
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                        lineNumber: 507,
                        columnNumber: 69
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 507,
                columnNumber: 13
            }, this);
            $[104] = isDialogOpen;
            $[105] = t52;
            $[106] = t15;
        } else {
            t15 = $[106];
        }
        let t53;
        if ($[107] === Symbol.for("react.memo_cache_sentinel")) {
            t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    children: "Available Event Halls"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                    lineNumber: 516,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 516,
                columnNumber: 13
            }, this);
            $[107] = t53;
        } else {
            t53 = $[107];
        }
        if ($[108] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: [
                    t53,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid gap-4 sm:grid-cols-2",
                            children: halls.map(_ResidentEventHallBookingHallsMap2)
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                            lineNumber: 522,
                            columnNumber: 37
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                        lineNumber: 522,
                        columnNumber: 24
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 522,
                columnNumber: 13
            }, this);
            $[108] = t16;
        } else {
            t16 = $[108];
        }
        T3 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"];
        if ($[109] === Symbol.for("react.memo_cache_sentinel")) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    children: "My Bookings"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                    lineNumber: 529,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 529,
                columnNumber: 13
            }, this);
            $[109] = t13;
        } else {
            t13 = $[109];
        }
        T2 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"];
        T1 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"];
        t10 = "upcoming";
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
            className: "grid w-full grid-cols-2",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                    value: "upcoming",
                    children: [
                        "Upcoming (",
                        upcomingBookings.length,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                    lineNumber: 537,
                    columnNumber: 57
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                    value: "history",
                    children: [
                        "History (",
                        pastBookings.length,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                    lineNumber: 537,
                    columnNumber: 137
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
            lineNumber: 537,
            columnNumber: 11
        }, this);
        const t54 = upcomingBookings.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center text-sm text-gray-500 py-8",
            children: "No upcoming bookings"
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
            lineNumber: 538,
            columnNumber: 49
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Hall"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                                lineNumber: 538,
                                columnNumber: 160
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Event"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                                lineNumber: 538,
                                columnNumber: 187
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Date"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                                lineNumber: 538,
                                columnNumber: 215
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Time"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                                lineNumber: 538,
                                columnNumber: 242
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Guests"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                                lineNumber: 538,
                                columnNumber: 269
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Status"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                                lineNumber: 538,
                                columnNumber: 298
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Action"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                                lineNumber: 538,
                                columnNumber: 327
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                        lineNumber: 538,
                        columnNumber: 150
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                    lineNumber: 538,
                    columnNumber: 137
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                    children: upcomingBookings.map({
                        "ResidentEventHallBooking[upcomingBookings.map()]": (booking_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: booking_0.hall
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                                        lineNumber: 539,
                                        columnNumber: 105
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: booking_0.event
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                                        lineNumber: 539,
                                        columnNumber: 144
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(booking_0.date), "MMM dd, yyyy")
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                                        lineNumber: 539,
                                        columnNumber: 184
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: [
                                            booking_0.startTime,
                                            " - ",
                                            booking_0.endTime
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                                        lineNumber: 539,
                                        columnNumber: 257
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: booking_0.guests
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                                        lineNumber: 539,
                                        columnNumber: 323
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: getStatusBadge(booking_0.status)
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                                        lineNumber: 539,
                                        columnNumber: 364
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: booking_0.status === "pending" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "outline",
                                            onClick: {
                                                "ResidentEventHallBooking[upcomingBookings.map() > <Button>.onClick]": ()=>handleCancelBooking(booking_0.id)
                                            }["ResidentEventHallBooking[upcomingBookings.map() > <Button>.onClick]"],
                                            children: "Cancel"
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                                            lineNumber: 539,
                                            columnNumber: 467
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                                        lineNumber: 539,
                                        columnNumber: 421
                                    }, this)
                                ]
                            }, booking_0.id, true, {
                                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                                lineNumber: 539,
                                columnNumber: 76
                            }, this)
                    }["ResidentEventHallBooking[upcomingBookings.map()]"])
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                    lineNumber: 538,
                    columnNumber: 381
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
            lineNumber: 538,
            columnNumber: 130
        }, this);
        if ($[110] !== t54) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                value: "upcoming",
                className: "mt-4",
                children: t54
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 544,
                columnNumber: 13
            }, this);
            $[110] = t54;
            $[111] = t12;
        } else {
            t12 = $[111];
        }
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"];
        t7 = "history";
        t8 = "mt-4";
        t9 = pastBookings.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center text-sm text-gray-500 py-8",
            children: "No booking history"
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
            lineNumber: 553,
            columnNumber: 38
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Hall"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                                lineNumber: 553,
                                columnNumber: 147
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Event"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                                lineNumber: 553,
                                columnNumber: 174
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Date"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                                lineNumber: 553,
                                columnNumber: 202
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Time"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                                lineNumber: 553,
                                columnNumber: 229
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Guests"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                                lineNumber: 553,
                                columnNumber: 256
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                                children: "Status"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                                lineNumber: 553,
                                columnNumber: 285
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                        lineNumber: 553,
                        columnNumber: 137
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                    lineNumber: 553,
                    columnNumber: 124
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                    children: pastBookings.map({
                        "ResidentEventHallBooking[pastBookings.map()]": (booking_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: booking_1.hall
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                                        lineNumber: 554,
                                        columnNumber: 101
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: booking_1.event
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                                        lineNumber: 554,
                                        columnNumber: 140
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(booking_1.date), "MMM dd, yyyy")
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                                        lineNumber: 554,
                                        columnNumber: 180
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: [
                                            booking_1.startTime,
                                            " - ",
                                            booking_1.endTime
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                                        lineNumber: 554,
                                        columnNumber: 253
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: booking_1.guests
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                                        lineNumber: 554,
                                        columnNumber: 319
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                        children: getStatusBadge(booking_1.status)
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                                        lineNumber: 554,
                                        columnNumber: 360
                                    }, this)
                                ]
                            }, booking_1.id, true, {
                                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                                lineNumber: 554,
                                columnNumber: 72
                            }, this)
                    }["ResidentEventHallBooking[pastBookings.map()]"])
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                    lineNumber: 553,
                    columnNumber: 339
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
            lineNumber: 553,
            columnNumber: 117
        }, this);
        $[16] = bookings;
        $[17] = handleBookHall;
        $[18] = handleCancelBooking;
        $[19] = isDialogOpen;
        $[20] = newBooking;
        $[21] = selectedDate;
        $[22] = T0;
        $[23] = T1;
        $[24] = T2;
        $[25] = T3;
        $[26] = t10;
        $[27] = t11;
        $[28] = t12;
        $[29] = t13;
        $[30] = t14;
        $[31] = t15;
        $[32] = t16;
        $[33] = t7;
        $[34] = t8;
        $[35] = t9;
    } else {
        T0 = $[22];
        T1 = $[23];
        T2 = $[24];
        T3 = $[25];
        t10 = $[26];
        t11 = $[27];
        t12 = $[28];
        t13 = $[29];
        t14 = $[30];
        t15 = $[31];
        t16 = $[32];
        t7 = $[33];
        t8 = $[34];
        t9 = $[35];
    }
    let t17;
    if ($[112] !== T0 || $[113] !== t7 || $[114] !== t8 || $[115] !== t9) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            value: t7,
            className: t8,
            children: t9
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
            lineNumber: 594,
            columnNumber: 11
        }, this);
        $[112] = T0;
        $[113] = t7;
        $[114] = t8;
        $[115] = t9;
        $[116] = t17;
    } else {
        t17 = $[116];
    }
    let t18;
    if ($[117] !== T1 || $[118] !== t10 || $[119] !== t11 || $[120] !== t12 || $[121] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T1, {
            defaultValue: t10,
            children: [
                t11,
                t12,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
            lineNumber: 605,
            columnNumber: 11
        }, this);
        $[117] = T1;
        $[118] = t10;
        $[119] = t11;
        $[120] = t12;
        $[121] = t17;
        $[122] = t18;
    } else {
        t18 = $[122];
    }
    let t19;
    if ($[123] !== T2 || $[124] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T2, {
            children: t18
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
            lineNumber: 617,
            columnNumber: 11
        }, this);
        $[123] = T2;
        $[124] = t18;
        $[125] = t19;
    } else {
        t19 = $[125];
    }
    let t20;
    if ($[126] !== T3 || $[127] !== t13 || $[128] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T3, {
            children: [
                t13,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
            lineNumber: 626,
            columnNumber: 11
        }, this);
        $[126] = T3;
        $[127] = t13;
        $[128] = t19;
        $[129] = t20;
    } else {
        t20 = $[129];
    }
    let t21;
    if ($[130] !== t14 || $[131] !== t15 || $[132] !== t16 || $[133] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t14,
            children: [
                t15,
                t16,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
            lineNumber: 636,
            columnNumber: 11
        }, this);
        $[130] = t14;
        $[131] = t15;
        $[132] = t16;
        $[133] = t20;
        $[134] = t21;
    } else {
        t21 = $[134];
    }
    return t21;
}
_s(ResidentEventHallBooking, "MmkvtgwKq0HEscTgkJaGLMsfIZQ=");
_c = ResidentEventHallBooking;
function _ResidentEventHallBookingHallsMap2(hall_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-4 rounded-lg border p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg bg-purple-50 p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$building$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Building$3e$__["Building"], {
                    className: "h-6 w-6 text-purple-600"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                    lineNumber: 648,
                    columnNumber: 134
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 648,
                columnNumber: 89
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        children: hall_0.name
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                        lineNumber: 648,
                        columnNumber: 193
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-500",
                        children: [
                            "Capacity: ",
                            hall_0.capacity,
                            " guests"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                        lineNumber: 648,
                        columnNumber: 233
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                lineNumber: 648,
                columnNumber: 188
            }, this)
        ]
    }, hall_0.id, true, {
        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
        lineNumber: 648,
        columnNumber: 10
    }, this);
}
function _ResidentEventHallBookingTimeSlotsMap2(time_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: time_0,
        children: time_0
    }, time_0, false, {
        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
        lineNumber: 651,
        columnNumber: 10
    }, this);
}
function _ResidentEventHallBookingTimeSlotsMap(time) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: time,
        children: time
    }, time, false, {
        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
        lineNumber: 654,
        columnNumber: 10
    }, this);
}
function _ResidentEventHallBookingCalendarDisabled(date) {
    return date < new Date();
}
function _ResidentEventHallBookingHallsMap(hall) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: hall.id,
        children: [
            hall.name,
            " (Capacity: ",
            hall.capacity,
            ")"
        ]
    }, hall.id, true, {
        fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
        lineNumber: 660,
        columnNumber: 10
    }, this);
}
function _ResidentEventHallBookingGetStatusBadge(status) {
    switch(status){
        case "confirmed":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-green-100 text-green-800",
                    children: "Confirmed"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                    lineNumber: 666,
                    columnNumber: 16
                }, this);
            }
        case "pending":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-yellow-100 text-yellow-800",
                    children: "Pending Approval"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                    lineNumber: 670,
                    columnNumber: 16
                }, this);
            }
        case "cancelled":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-red-100 text-red-800",
                    children: "Cancelled"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentEventHallBooking.jsx",
                    lineNumber: 674,
                    columnNumber: 16
                }, this);
            }
        default:
            {
                return null;
            }
    }
}
function _ResidentEventHallBookingBookingsFilter2(b_1) {
    return new Date(b_1.date) < new Date() || b_1.status === "cancelled";
}
function _ResidentEventHallBookingBookingsFilter(b_0) {
    return b_0.status !== "cancelled" && new Date(b_0.date) >= new Date();
}
const __TURBOPACK__default__export__ = ResidentEventHallBooking;
var _c;
__turbopack_context__.k.register(_c, "ResidentEventHallBooking");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/app/components/ResidentManagementFee.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/input.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/label.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/select.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/dialog.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-client] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
function ResidentManagementFee(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(70);
    if ($[0] !== "2fd49c40b2186ac7358ba225cb22f6b162ee169b45247be7b109d2faf6eb8b61") {
        for(let $i = 0; $i < 70; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "2fd49c40b2186ac7358ba225cb22f6b162ee169b45247be7b109d2faf6eb8b61";
    }
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            {
                id: "1",
                month: "November 2025",
                amount: 450,
                dueDate: "2025-11-01",
                status: "pending"
            },
            {
                id: "2",
                month: "October 2025",
                amount: 450,
                dueDate: "2025-10-01",
                status: "paid",
                paymentDate: "2025-09-28"
            },
            {
                id: "3",
                month: "September 2025",
                amount: 450,
                dueDate: "2025-09-01",
                status: "paid",
                paymentDate: "2025-08-29"
            }
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [payments, setPayments] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [isPaymentDialogOpen, setIsPaymentDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedPayment, setSelectedPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [paymentMethod, setPaymentMethod] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t2;
    if ($[2] !== payments || $[3] !== selectedPayment) {
        t2 = ({
            "ResidentManagementFee[handleMakePayment]": (e)=>{
                e.preventDefault();
                if (!selectedPayment) {
                    return;
                }
                setPayments(payments.map({
                    "ResidentManagementFee[handleMakePayment > payments.map()]": (p)=>p.id === selectedPayment.id ? {
                            ...p,
                            status: "paid",
                            paymentDate: new Date().toISOString().split("T")[0]
                        } : p
                }["ResidentManagementFee[handleMakePayment > payments.map()]"]));
                setIsPaymentDialogOpen(false);
                setSelectedPayment(null);
                setPaymentMethod("");
                __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Payment processed successfully!");
            }
        })["ResidentManagementFee[handleMakePayment]"];
        $[2] = payments;
        $[3] = selectedPayment;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const handleMakePayment = t2;
    let T0;
    let T1;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[5] !== payments) {
        const pendingPayments = payments.filter(_ResidentManagementFeePaymentsFilter);
        const paidPayments = payments.filter(_ResidentManagementFeePaymentsFilter2);
        const totalDue = pendingPayments.reduce(_ResidentManagementFeePendingPaymentsReduce, 0);
        t6 = "space-y-6";
        if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
            t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Management Fee Payment"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                        lineNumber: 95,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600",
                        children: "View and pay your monthly management fees"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                        lineNumber: 95,
                        columnNumber: 48
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                lineNumber: 95,
                columnNumber: 12
            }, this);
            $[15] = t7;
        } else {
            t7 = $[15];
        }
        let t10;
        if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-600",
                children: "Total Due"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                lineNumber: 102,
                columnNumber: 13
            }, this);
            $[16] = t10;
        } else {
            t10 = $[16];
        }
        const t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 text-2xl text-red-600",
                    children: [
                        "$",
                        totalDue
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                    lineNumber: 107,
                    columnNumber: 27
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
            lineNumber: 107,
            columnNumber: 17
        }, this);
        let t12;
        if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg bg-red-50 p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                    className: "h-6 w-6 text-red-600"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                    lineNumber: 110,
                    columnNumber: 55
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                lineNumber: 110,
                columnNumber: 13
            }, this);
            $[17] = t12;
        } else {
            t12 = $[17];
        }
        let t13;
        if ($[18] !== t11) {
            t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            t11,
                            t12
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                        lineNumber: 117,
                        columnNumber: 48
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                    lineNumber: 117,
                    columnNumber: 19
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                lineNumber: 117,
                columnNumber: 13
            }, this);
            $[18] = t11;
            $[19] = t13;
        } else {
            t13 = $[19];
        }
        let t14;
        if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-600",
                children: "Pending Payments"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                lineNumber: 125,
                columnNumber: 13
            }, this);
            $[20] = t14;
        } else {
            t14 = $[20];
        }
        const t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t14,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 text-2xl",
                    children: pendingPayments.length
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                    lineNumber: 130,
                    columnNumber: 27
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
            lineNumber: 130,
            columnNumber: 17
        }, this);
        let t16;
        if ($[21] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg bg-yellow-50 p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                    className: "h-6 w-6 text-yellow-600"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                    lineNumber: 133,
                    columnNumber: 58
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                lineNumber: 133,
                columnNumber: 13
            }, this);
            $[21] = t16;
        } else {
            t16 = $[21];
        }
        let t17;
        if ($[22] !== t15) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            t15,
                            t16
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                        lineNumber: 140,
                        columnNumber: 48
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                    lineNumber: 140,
                    columnNumber: 19
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                lineNumber: 140,
                columnNumber: 13
            }, this);
            $[22] = t15;
            $[23] = t17;
        } else {
            t17 = $[23];
        }
        let t18;
        if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-gray-600",
                children: "Paid This Year"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                lineNumber: 148,
                columnNumber: 13
            }, this);
            $[24] = t18;
        } else {
            t18 = $[24];
        }
        const t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 text-2xl",
                    children: paidPayments.length
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                    lineNumber: 153,
                    columnNumber: 27
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
            lineNumber: 153,
            columnNumber: 17
        }, this);
        let t20;
        if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-lg bg-green-50 p-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                    className: "h-6 w-6 text-green-600"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                    lineNumber: 156,
                    columnNumber: 57
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                lineNumber: 156,
                columnNumber: 13
            }, this);
            $[25] = t20;
        } else {
            t20 = $[25];
        }
        let t21;
        if ($[26] !== t19) {
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between",
                        children: [
                            t19,
                            t20
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                        lineNumber: 163,
                        columnNumber: 48
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                    lineNumber: 163,
                    columnNumber: 19
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                lineNumber: 163,
                columnNumber: 13
            }, this);
            $[26] = t19;
            $[27] = t21;
        } else {
            t21 = $[27];
        }
        if ($[28] !== t13 || $[29] !== t17 || $[30] !== t21) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-3",
                children: [
                    t13,
                    t17,
                    t21
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                lineNumber: 170,
                columnNumber: 12
            }, this);
            $[28] = t13;
            $[29] = t17;
            $[30] = t21;
            $[31] = t8;
        } else {
            t8 = $[31];
        }
        t9 = pendingPayments.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: "Pending Payments"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                        lineNumber: 178,
                        columnNumber: 58
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                    lineNumber: 178,
                    columnNumber: 46
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: pendingPayments.map({
                            "ResidentManagementFee[pendingPayments.map()]": (payment)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between rounded-lg border p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-lg bg-orange-50 p-3",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                        className: "h-6 w-6 text-orange-600"
                                                    }, void 0, false, {
                                                        fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                                                        lineNumber: 179,
                                                        columnNumber: 248
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                                                    lineNumber: 179,
                                                    columnNumber: 203
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm",
                                                            children: payment.month
                                                        }, void 0, false, {
                                                            fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                                                            lineNumber: 179,
                                                            columnNumber: 309
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-500",
                                                            children: [
                                                                "Due: ",
                                                                new Date(payment.dueDate).toLocaleDateString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                                                            lineNumber: 179,
                                                            columnNumber: 351
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                                                    lineNumber: 179,
                                                    columnNumber: 304
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                                            lineNumber: 179,
                                            columnNumber: 162
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg",
                                                    children: [
                                                        "$",
                                                        payment.amount
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                                                    lineNumber: 179,
                                                    columnNumber: 498
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    onClick: {
                                                        "ResidentManagementFee[pendingPayments.map() > <Button>.onClick]": ()=>{
                                                            setSelectedPayment(payment);
                                                            setIsPaymentDialogOpen(true);
                                                        }
                                                    }["ResidentManagementFee[pendingPayments.map() > <Button>.onClick]"],
                                                    children: "Pay Now"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                                                    lineNumber: 179,
                                                    columnNumber: 542
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                                            lineNumber: 179,
                                            columnNumber: 457
                                        }, this)
                                    ]
                                }, payment.id, true, {
                                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                                    lineNumber: 179,
                                    columnNumber: 72
                                }, this)
                        }["ResidentManagementFee[pendingPayments.map()]"])
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                        lineNumber: 178,
                        columnNumber: 123
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                    lineNumber: 178,
                    columnNumber: 110
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
            lineNumber: 178,
            columnNumber: 40
        }, this);
        T1 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"];
        if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
            t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                    children: "Payment History"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                    lineNumber: 188,
                    columnNumber: 24
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                lineNumber: 188,
                columnNumber: 12
            }, this);
            $[32] = t5;
        } else {
            t5 = $[32];
        }
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"];
        t3 = "space-y-3";
        t4 = paidPayments.map(_ResidentManagementFeePaidPaymentsMap);
        $[5] = payments;
        $[6] = T0;
        $[7] = T1;
        $[8] = t3;
        $[9] = t4;
        $[10] = t5;
        $[11] = t6;
        $[12] = t7;
        $[13] = t8;
        $[14] = t9;
    } else {
        T0 = $[6];
        T1 = $[7];
        t3 = $[8];
        t4 = $[9];
        t5 = $[10];
        t6 = $[11];
        t7 = $[12];
        t8 = $[13];
        t9 = $[14];
    }
    let t10;
    if ($[33] !== t3 || $[34] !== t4) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t3,
            children: t4
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
            lineNumber: 219,
            columnNumber: 11
        }, this);
        $[33] = t3;
        $[34] = t4;
        $[35] = t10;
    } else {
        t10 = $[35];
    }
    let t11;
    if ($[36] !== T0 || $[37] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            children: t10
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
            lineNumber: 228,
            columnNumber: 11
        }, this);
        $[36] = T0;
        $[37] = t10;
        $[38] = t11;
    } else {
        t11 = $[38];
    }
    let t12;
    if ($[39] !== T1 || $[40] !== t11 || $[41] !== t5) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T1, {
            children: [
                t5,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
            lineNumber: 237,
            columnNumber: 11
        }, this);
        $[39] = T1;
        $[40] = t11;
        $[41] = t5;
        $[42] = t12;
    } else {
        t12 = $[42];
    }
    let t13;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                    children: "Make Payment"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                    lineNumber: 247,
                    columnNumber: 25
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                    children: "Complete your management fee payment"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                    lineNumber: 247,
                    columnNumber: 64
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[43] = t13;
    } else {
        t13 = $[43];
    }
    let t14;
    if ($[44] !== selectedPayment) {
        t14 = selectedPayment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-4 rounded-lg bg-blue-50 p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600",
                            children: "Amount to Pay"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                            lineNumber: 254,
                            columnNumber: 134
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-2xl",
                            children: [
                                "$",
                                selectedPayment.amount
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                            lineNumber: 254,
                            columnNumber: 188
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-gray-500",
                            children: [
                                "For ",
                                selectedPayment.month
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                            lineNumber: 254,
                            columnNumber: 241
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                    lineNumber: 254,
                    columnNumber: 129
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                lineNumber: 254,
                columnNumber: 78
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
            lineNumber: 254,
            columnNumber: 30
        }, this);
        $[44] = selectedPayment;
        $[45] = t14;
    } else {
        t14 = $[45];
    }
    let t15;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "paymentMethod",
            children: "Payment Method"
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
            lineNumber: 262,
            columnNumber: 11
        }, this);
        $[46] = t15;
    } else {
        t15 = $[46];
    }
    let t16;
    if ($[47] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                placeholder: "Select payment method"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                lineNumber: 269,
                columnNumber: 26
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
            lineNumber: 269,
            columnNumber: 11
        }, this);
        $[47] = t16;
    } else {
        t16 = $[47];
    }
    let t17;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "credit-card",
                    children: "Credit Card"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                    lineNumber: 276,
                    columnNumber: 26
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "debit-card",
                    children: "Debit Card"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                    lineNumber: 276,
                    columnNumber: 82
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "bank-transfer",
                    children: "Bank Transfer"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                    lineNumber: 276,
                    columnNumber: 136
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "online-banking",
                    children: "Online Banking"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                    lineNumber: 276,
                    columnNumber: 196
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
            lineNumber: 276,
            columnNumber: 11
        }, this);
        $[48] = t17;
    } else {
        t17 = $[48];
    }
    let t18;
    let t19;
    if ($[49] !== paymentMethod) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t15,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    value: paymentMethod,
                    onValueChange: setPaymentMethod,
                    required: true,
                    children: [
                        t16,
                        t17
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                    lineNumber: 284,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
            lineNumber: 284,
            columnNumber: 11
        }, this);
        t19 = paymentMethod === "credit-card" || paymentMethod === "debit-card" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            htmlFor: "cardNumber",
                            children: "Card Number"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                            lineNumber: 285,
                            columnNumber: 108
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                            id: "cardNumber",
                            placeholder: "1234 5678 9012 3456",
                            required: true
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                            lineNumber: 285,
                            columnNumber: 155
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                    lineNumber: 285,
                    columnNumber: 81
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "expiry",
                                    children: "Expiry Date"
                                }, void 0, false, {
                                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                                    lineNumber: 285,
                                    columnNumber: 303
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "expiry",
                                    placeholder: "MM/YY",
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                                    lineNumber: 285,
                                    columnNumber: 346
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                            lineNumber: 285,
                            columnNumber: 276
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    htmlFor: "cvv",
                                    children: "CVV"
                                }, void 0, false, {
                                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                                    lineNumber: 285,
                                    columnNumber: 436
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    id: "cvv",
                                    placeholder: "123",
                                    maxLength: 3,
                                    required: true
                                }, void 0, false, {
                                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                                    lineNumber: 285,
                                    columnNumber: 468
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                            lineNumber: 285,
                            columnNumber: 409
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                    lineNumber: 285,
                    columnNumber: 236
                }, this)
            ]
        }, void 0, true) : null;
        $[49] = paymentMethod;
        $[50] = t18;
        $[51] = t19;
    } else {
        t18 = $[50];
        t19 = $[51];
    }
    let t20;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "submit",
            className: "w-full",
            children: "Confirm Payment"
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
            lineNumber: 295,
            columnNumber: 11
        }, this);
        $[52] = t20;
    } else {
        t20 = $[52];
    }
    let t21;
    if ($[53] !== handleMakePayment || $[54] !== t18 || $[55] !== t19) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleMakePayment,
            className: "space-y-4",
            children: [
                t18,
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
            lineNumber: 302,
            columnNumber: 11
        }, this);
        $[53] = handleMakePayment;
        $[54] = t18;
        $[55] = t19;
        $[56] = t21;
    } else {
        t21 = $[56];
    }
    let t22;
    if ($[57] !== t14 || $[58] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            children: [
                t13,
                t14,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
            lineNumber: 312,
            columnNumber: 11
        }, this);
        $[57] = t14;
        $[58] = t21;
        $[59] = t22;
    } else {
        t22 = $[59];
    }
    let t23;
    if ($[60] !== isPaymentDialogOpen || $[61] !== t22) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: isPaymentDialogOpen,
            onOpenChange: setIsPaymentDialogOpen,
            children: t22
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
            lineNumber: 321,
            columnNumber: 11
        }, this);
        $[60] = isPaymentDialogOpen;
        $[61] = t22;
        $[62] = t23;
    } else {
        t23 = $[62];
    }
    let t24;
    if ($[63] !== t12 || $[64] !== t23 || $[65] !== t6 || $[66] !== t7 || $[67] !== t8 || $[68] !== t9) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t6,
            children: [
                t7,
                t8,
                t9,
                t12,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
            lineNumber: 330,
            columnNumber: 11
        }, this);
        $[63] = t12;
        $[64] = t23;
        $[65] = t6;
        $[66] = t7;
        $[67] = t8;
        $[68] = t9;
        $[69] = t24;
    } else {
        t24 = $[69];
    }
    return t24;
}
_s(ResidentManagementFee, "aMTkTJ/MzoZayk6tIhDpKqq1OME=");
_c = ResidentManagementFee;
function _ResidentManagementFeePaidPaymentsMap(payment_0) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center justify-between rounded-lg border p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "rounded-lg bg-green-50 p-3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                            className: "h-6 w-6 text-green-600"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                            lineNumber: 344,
                            columnNumber: 187
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                        lineNumber: 344,
                        columnNumber: 143
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm",
                                children: payment_0.month
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                                lineNumber: 344,
                                columnNumber: 247
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500",
                                children: [
                                    "Paid on: ",
                                    payment_0.paymentDate && new Date(payment_0.paymentDate).toLocaleDateString()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                                lineNumber: 344,
                                columnNumber: 291
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                        lineNumber: 344,
                        columnNumber: 242
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                lineNumber: 344,
                columnNumber: 102
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg",
                        children: [
                            "$",
                            payment_0.amount
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                        lineNumber: 344,
                        columnNumber: 473
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "rounded-full bg-green-100 px-3 py-1 text-xs text-green-800",
                        children: "Paid"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                        lineNumber: 344,
                        columnNumber: 519
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
                lineNumber: 344,
                columnNumber: 432
            }, this)
        ]
    }, payment_0.id, true, {
        fileName: "[project]/client/src/app/components/ResidentManagementFee.jsx",
        lineNumber: 344,
        columnNumber: 10
    }, this);
}
function _ResidentManagementFeePendingPaymentsReduce(sum, p_2) {
    return sum + p_2.amount;
}
function _ResidentManagementFeePaymentsFilter2(p_1) {
    return p_1.status === "paid";
}
function _ResidentManagementFeePaymentsFilter(p_0) {
    return p_0.status === "pending" || p_0.status === "overdue";
}
const __TURBOPACK__default__export__ = ResidentManagementFee;
var _c;
__turbopack_context__.k.register(_c, "ResidentManagementFee");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/app/components/ResidentInvoiceReceipt.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/input.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/table.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/badge.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/tabs.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
function ResidentInvoiceReceipt(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(71);
    if ($[0] !== "b27e67a02e18430203709c1902f19432c7f34767754fb1c14ac9be2846bc7f36") {
        for(let $i = 0; $i < 71; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "b27e67a02e18430203709c1902f19432c7f34767754fb1c14ac9be2846bc7f36";
    }
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            {
                id: "INV-2025-001",
                month: "November 2025",
                amount: 450,
                issueDate: "2025-10-15",
                dueDate: "2025-11-01",
                status: "pending"
            },
            {
                id: "INV-2025-002",
                month: "October 2025",
                amount: 450,
                issueDate: "2025-09-15",
                dueDate: "2025-10-01",
                status: "paid",
                paidDate: "2025-09-28"
            },
            {
                id: "INV-2025-003",
                month: "September 2025",
                amount: 450,
                issueDate: "2025-08-15",
                dueDate: "2025-09-01",
                status: "paid",
                paidDate: "2025-08-29"
            },
            {
                id: "INV-2025-004",
                month: "August 2025",
                amount: 450,
                issueDate: "2025-07-15",
                dueDate: "2025-08-01",
                status: "paid",
                paidDate: "2025-07-30"
            }
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [invoices] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const handleDownloadInvoice = _ResidentInvoiceReceiptHandleDownloadInvoice;
    const handleDownloadReceipt = _ResidentInvoiceReceiptHandleDownloadReceipt;
    let T0;
    let T1;
    let T2;
    let T3;
    let T4;
    let T5;
    let t10;
    let t11;
    let t12;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[2] !== invoices || $[3] !== searchTerm) {
        let t13;
        if ($[21] !== searchTerm) {
            t13 = ({
                "ResidentInvoiceReceipt[invoices.filter()]": (inv)=>inv.id.toLowerCase().includes(searchTerm.toLowerCase()) || inv.month.toLowerCase().includes(searchTerm.toLowerCase())
            })["ResidentInvoiceReceipt[invoices.filter()]"];
            $[21] = searchTerm;
            $[22] = t13;
        } else {
            t13 = $[22];
        }
        const filteredInvoices = invoices.filter(t13);
        const pendingInvoices = filteredInvoices.filter(_ResidentInvoiceReceiptFilteredInvoicesFilter);
        const paidInvoices = filteredInvoices.filter(_ResidentInvoiceReceiptFilteredInvoicesFilter2);
        const getStatusBadge = _ResidentInvoiceReceiptGetStatusBadge;
        t11 = "space-y-6";
        if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Invoices & Receipts"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                        lineNumber: 97,
                        columnNumber: 18
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600",
                        children: "View and download your invoices and payment receipts"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                        lineNumber: 97,
                        columnNumber: 50
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                lineNumber: 97,
                columnNumber: 13
            }, this);
            $[23] = t12;
        } else {
            t12 = $[23];
        }
        T5 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"];
        let t14;
        if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                children: "My Invoices"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                lineNumber: 105,
                columnNumber: 13
            }, this);
            $[24] = t14;
        } else {
            t14 = $[24];
        }
        let t15;
        if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                className: "absolute left-3 top-3 h-4 w-4 text-gray-400"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                lineNumber: 112,
                columnNumber: 13
            }, this);
            $[25] = t15;
        } else {
            t15 = $[25];
        }
        let t16;
        if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = ({
                "ResidentInvoiceReceipt[<Input>.onChange]": (e)=>setSearchTerm(e.target.value)
            })["ResidentInvoiceReceipt[<Input>.onChange]"];
            $[26] = t16;
        } else {
            t16 = $[26];
        }
        if ($[27] !== searchTerm) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        t14,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative w-64",
                            children: [
                                t15,
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                                    placeholder: "Search invoices...",
                                    value: searchTerm,
                                    onChange: t16,
                                    className: "pl-10"
                                }, void 0, false, {
                                    fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                    lineNumber: 127,
                                    columnNumber: 117
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                            lineNumber: 127,
                            columnNumber: 81
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                    lineNumber: 127,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                lineNumber: 127,
                columnNumber: 13
            }, this);
            $[27] = searchTerm;
            $[28] = t10;
        } else {
            t10 = $[28];
        }
        T4 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"];
        T3 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"];
        t6 = "all";
        let t17;
        if ($[29] !== invoices.length) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                value: "all",
                children: [
                    "All (",
                    invoices.length,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                lineNumber: 138,
                columnNumber: 13
            }, this);
            $[29] = invoices.length;
            $[30] = t17;
        } else {
            t17 = $[30];
        }
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
            className: "grid w-full grid-cols-3",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                    value: "pending",
                    children: [
                        "Pending (",
                        pendingInvoices.length,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                    lineNumber: 144,
                    columnNumber: 61
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                    value: "paid",
                    children: [
                        "Paid (",
                        paidInvoices.length,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                    lineNumber: 144,
                    columnNumber: 138
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
            lineNumber: 144,
            columnNumber: 10
        }, this);
        let t18;
        if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                            children: "Invoice ID"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                            lineNumber: 147,
                            columnNumber: 36
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                            children: "Period"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                            lineNumber: 147,
                            columnNumber: 69
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                            children: "Amount"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                            lineNumber: 147,
                            columnNumber: 98
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                            children: "Issue Date"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                            lineNumber: 147,
                            columnNumber: 127
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                            children: "Due Date"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                            lineNumber: 147,
                            columnNumber: 160
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                            children: "Status"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                            lineNumber: 147,
                            columnNumber: 191
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                            children: "Actions"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                            lineNumber: 147,
                            columnNumber: 220
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                    lineNumber: 147,
                    columnNumber: 26
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                lineNumber: 147,
                columnNumber: 13
            }, this);
            $[31] = t18;
        } else {
            t18 = $[31];
        }
        let t19;
        if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
            t19 = ({
                "ResidentInvoiceReceipt[filteredInvoices.map()]": (invoice_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: invoice_1.id
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                lineNumber: 155,
                                columnNumber: 101
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: invoice_1.month
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                lineNumber: 155,
                                columnNumber: 138
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: [
                                    "$",
                                    invoice_1.amount
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                lineNumber: 155,
                                columnNumber: 178
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: new Date(invoice_1.issueDate).toLocaleDateString()
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                lineNumber: 155,
                                columnNumber: 220
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: new Date(invoice_1.dueDate).toLocaleDateString()
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                lineNumber: 155,
                                columnNumber: 295
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: getStatusBadge(invoice_1.status)
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                lineNumber: 155,
                                columnNumber: 368
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "outline",
                                            onClick: {
                                                "ResidentInvoiceReceipt[filteredInvoices.map() > <Button>.onClick]": ()=>handleDownloadInvoice(invoice_1)
                                            }["ResidentInvoiceReceipt[filteredInvoices.map() > <Button>.onClick]"],
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                    className: "mr-1 h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                                    lineNumber: 157,
                                                    columnNumber: 87
                                                }, this),
                                                "Invoice"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                            lineNumber: 155,
                                            columnNumber: 464
                                        }, this),
                                        invoice_1.status === "paid" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "outline",
                                            onClick: {
                                                "ResidentInvoiceReceipt[filteredInvoices.map() > <Button>.onClick]": ()=>handleDownloadReceipt(invoice_1)
                                            }["ResidentInvoiceReceipt[filteredInvoices.map() > <Button>.onClick]"],
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                    className: "mr-1 h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                                    lineNumber: 159,
                                                    columnNumber: 87
                                                }, this),
                                                "Receipt"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                            lineNumber: 157,
                                            columnNumber: 172
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                    lineNumber: 155,
                                    columnNumber: 436
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                lineNumber: 155,
                                columnNumber: 425
                            }, this)
                        ]
                    }, invoice_1.id, true, {
                        fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                        lineNumber: 155,
                        columnNumber: 72
                    }, this)
            })["ResidentInvoiceReceipt[filteredInvoices.map()]"];
            $[32] = t19;
        } else {
            t19 = $[32];
        }
        const t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                    children: filteredInvoices.map(t19)
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                    lineNumber: 165,
                    columnNumber: 29
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
            lineNumber: 165,
            columnNumber: 17
        }, this);
        if ($[33] !== t20) {
            t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                value: "all",
                className: "mt-4",
                children: t20
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                lineNumber: 167,
                columnNumber: 12
            }, this);
            $[33] = t20;
            $[34] = t8;
        } else {
            t8 = $[34];
        }
        let t21;
        if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                            children: "Invoice ID"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                            lineNumber: 175,
                            columnNumber: 36
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                            children: "Period"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                            lineNumber: 175,
                            columnNumber: 69
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                            children: "Amount"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                            lineNumber: 175,
                            columnNumber: 98
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                            children: "Due Date"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                            lineNumber: 175,
                            columnNumber: 127
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                            children: "Status"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                            lineNumber: 175,
                            columnNumber: 158
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                            children: "Actions"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                            lineNumber: 175,
                            columnNumber: 187
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                    lineNumber: 175,
                    columnNumber: 26
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                lineNumber: 175,
                columnNumber: 13
            }, this);
            $[35] = t21;
        } else {
            t21 = $[35];
        }
        let t22;
        if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
            t22 = ({
                "ResidentInvoiceReceipt[pendingInvoices.map()]": (invoice_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: invoice_2.id
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                lineNumber: 183,
                                columnNumber: 100
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: invoice_2.month
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                lineNumber: 183,
                                columnNumber: 137
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: [
                                    "$",
                                    invoice_2.amount
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                lineNumber: 183,
                                columnNumber: 177
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: new Date(invoice_2.dueDate).toLocaleDateString()
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                lineNumber: 183,
                                columnNumber: 219
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: getStatusBadge(invoice_2.status)
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                lineNumber: 183,
                                columnNumber: 292
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    variant: "outline",
                                    onClick: {
                                        "ResidentInvoiceReceipt[pendingInvoices.map() > <Button>.onClick]": ()=>handleDownloadInvoice(invoice_2)
                                    }["ResidentInvoiceReceipt[pendingInvoices.map() > <Button>.onClick]"],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "mr-1 h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                            lineNumber: 185,
                                            columnNumber: 84
                                        }, this),
                                        "Download"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                    lineNumber: 183,
                                    columnNumber: 360
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                lineNumber: 183,
                                columnNumber: 349
                            }, this)
                        ]
                    }, invoice_2.id, true, {
                        fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                        lineNumber: 183,
                        columnNumber: 71
                    }, this)
            })["ResidentInvoiceReceipt[pendingInvoices.map()]"];
            $[36] = t22;
        } else {
            t22 = $[36];
        }
        const t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                    children: pendingInvoices.map(t22)
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                    lineNumber: 191,
                    columnNumber: 29
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
            lineNumber: 191,
            columnNumber: 17
        }, this);
        if ($[37] !== t23) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                value: "pending",
                className: "mt-4",
                children: t23
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                lineNumber: 193,
                columnNumber: 12
            }, this);
            $[37] = t23;
            $[38] = t9;
        } else {
            t9 = $[38];
        }
        T2 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"];
        t4 = "paid";
        t5 = "mt-4";
        T1 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"];
        if ($[39] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                            children: "Invoice ID"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                            lineNumber: 204,
                            columnNumber: 35
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                            children: "Period"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                            lineNumber: 204,
                            columnNumber: 68
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                            children: "Amount"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                            lineNumber: 204,
                            columnNumber: 97
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                            children: "Paid Date"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                            lineNumber: 204,
                            columnNumber: 126
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                            children: "Actions"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                            lineNumber: 204,
                            columnNumber: 158
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                    lineNumber: 204,
                    columnNumber: 25
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                lineNumber: 204,
                columnNumber: 12
            }, this);
            $[39] = t3;
        } else {
            t3 = $[39];
        }
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"];
        let t24;
        if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
            t24 = ({
                "ResidentInvoiceReceipt[paidInvoices.map()]": (invoice_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: invoice_3.id
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                lineNumber: 213,
                                columnNumber: 97
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: invoice_3.month
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                lineNumber: 213,
                                columnNumber: 134
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: [
                                    "$",
                                    invoice_3.amount
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                lineNumber: 213,
                                columnNumber: 174
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: invoice_3.paidDate && new Date(invoice_3.paidDate).toLocaleDateString()
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                lineNumber: 213,
                                columnNumber: 216
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "outline",
                                            onClick: {
                                                "ResidentInvoiceReceipt[paidInvoices.map() > <Button>.onClick]": ()=>handleDownloadInvoice(invoice_3)
                                            }["ResidentInvoiceReceipt[paidInvoices.map() > <Button>.onClick]"],
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                    className: "mr-1 h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                                    lineNumber: 215,
                                                    columnNumber: 83
                                                }, this),
                                                "Invoice"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                            lineNumber: 213,
                                            columnNumber: 351
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "outline",
                                            onClick: {
                                                "ResidentInvoiceReceipt[paidInvoices.map() > <Button>.onClick]": ()=>handleDownloadReceipt(invoice_3)
                                            }["ResidentInvoiceReceipt[paidInvoices.map() > <Button>.onClick]"],
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                    className: "mr-1 h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                                    lineNumber: 217,
                                                    columnNumber: 83
                                                }, this),
                                                "Receipt"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                            lineNumber: 215,
                                            columnNumber: 136
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                    lineNumber: 213,
                                    columnNumber: 323
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                                lineNumber: 213,
                                columnNumber: 312
                            }, this)
                        ]
                    }, invoice_3.id, true, {
                        fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                        lineNumber: 213,
                        columnNumber: 68
                    }, this)
            })["ResidentInvoiceReceipt[paidInvoices.map()]"];
            $[40] = t24;
        } else {
            t24 = $[40];
        }
        t2 = paidInvoices.map(t24);
        $[2] = invoices;
        $[3] = searchTerm;
        $[4] = T0;
        $[5] = T1;
        $[6] = T2;
        $[7] = T3;
        $[8] = T4;
        $[9] = T5;
        $[10] = t10;
        $[11] = t11;
        $[12] = t12;
        $[13] = t2;
        $[14] = t3;
        $[15] = t4;
        $[16] = t5;
        $[17] = t6;
        $[18] = t7;
        $[19] = t8;
        $[20] = t9;
    } else {
        T0 = $[4];
        T1 = $[5];
        T2 = $[6];
        T3 = $[7];
        T4 = $[8];
        T5 = $[9];
        t10 = $[10];
        t11 = $[11];
        t12 = $[12];
        t2 = $[13];
        t3 = $[14];
        t4 = $[15];
        t5 = $[16];
        t6 = $[17];
        t7 = $[18];
        t8 = $[19];
        t9 = $[20];
    }
    let t13;
    if ($[41] !== T0 || $[42] !== t2) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            children: t2
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
            lineNumber: 264,
            columnNumber: 11
        }, this);
        $[41] = T0;
        $[42] = t2;
        $[43] = t13;
    } else {
        t13 = $[43];
    }
    let t14;
    if ($[44] !== T1 || $[45] !== t13 || $[46] !== t3) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T1, {
            children: [
                t3,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
            lineNumber: 273,
            columnNumber: 11
        }, this);
        $[44] = T1;
        $[45] = t13;
        $[46] = t3;
        $[47] = t14;
    } else {
        t14 = $[47];
    }
    let t15;
    if ($[48] !== T2 || $[49] !== t14 || $[50] !== t4 || $[51] !== t5) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T2, {
            value: t4,
            className: t5,
            children: t14
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
            lineNumber: 283,
            columnNumber: 11
        }, this);
        $[48] = T2;
        $[49] = t14;
        $[50] = t4;
        $[51] = t5;
        $[52] = t15;
    } else {
        t15 = $[52];
    }
    let t16;
    if ($[53] !== T3 || $[54] !== t15 || $[55] !== t6 || $[56] !== t7 || $[57] !== t8 || $[58] !== t9) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T3, {
            defaultValue: t6,
            children: [
                t7,
                t8,
                t9,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
            lineNumber: 294,
            columnNumber: 11
        }, this);
        $[53] = T3;
        $[54] = t15;
        $[55] = t6;
        $[56] = t7;
        $[57] = t8;
        $[58] = t9;
        $[59] = t16;
    } else {
        t16 = $[59];
    }
    let t17;
    if ($[60] !== T4 || $[61] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T4, {
            children: t16
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
            lineNumber: 307,
            columnNumber: 11
        }, this);
        $[60] = T4;
        $[61] = t16;
        $[62] = t17;
    } else {
        t17 = $[62];
    }
    let t18;
    if ($[63] !== T5 || $[64] !== t10 || $[65] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T5, {
            children: [
                t10,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
            lineNumber: 316,
            columnNumber: 11
        }, this);
        $[63] = T5;
        $[64] = t10;
        $[65] = t17;
        $[66] = t18;
    } else {
        t18 = $[66];
    }
    let t19;
    if ($[67] !== t11 || $[68] !== t12 || $[69] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t11,
            children: [
                t12,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
            lineNumber: 326,
            columnNumber: 11
        }, this);
        $[67] = t11;
        $[68] = t12;
        $[69] = t18;
        $[70] = t19;
    } else {
        t19 = $[70];
    }
    return t19;
}
_s(ResidentInvoiceReceipt, "tVAar+fNHqeCKzxiHIBKJKaSOmU=");
_c = ResidentInvoiceReceipt;
function _ResidentInvoiceReceiptGetStatusBadge(status) {
    switch(status){
        case "paid":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-green-100 text-green-800",
                    children: "Paid"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                    lineNumber: 340,
                    columnNumber: 16
                }, this);
            }
        case "pending":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-yellow-100 text-yellow-800",
                    children: "Pending"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                    lineNumber: 344,
                    columnNumber: 16
                }, this);
            }
        case "overdue":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-red-100 text-red-800",
                    children: "Overdue"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentInvoiceReceipt.jsx",
                    lineNumber: 348,
                    columnNumber: 16
                }, this);
            }
        default:
            {
                return null;
            }
    }
}
function _ResidentInvoiceReceiptFilteredInvoicesFilter2(i_0) {
    return i_0.status === "paid";
}
function _ResidentInvoiceReceiptFilteredInvoicesFilter(i) {
    return i.status === "pending" || i.status === "overdue";
}
function _ResidentInvoiceReceiptHandleDownloadReceipt(invoice_0) {
    __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Receipt for ${invoice_0.id} downloaded!`);
}
function _ResidentInvoiceReceiptHandleDownloadInvoice(invoice) {
    __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(`Invoice ${invoice.id} downloaded!`);
}
const __TURBOPACK__default__export__ = ResidentInvoiceReceipt;
var _c;
__turbopack_context__.k.register(_c, "ResidentInvoiceReceipt");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/app/components/ResidentComplaintRequest.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/input.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/label.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$textarea$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/textarea.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/select.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/table.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/dialog.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/badge.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
function ResidentComplaintRequest(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(139);
    if ($[0] !== "fb408f82138f2e904463dbb4b5fe550b94efcbed27b195c819ecc38228f96dc5") {
        for(let $i = 0; $i < 139; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "fb408f82138f2e904463dbb4b5fe550b94efcbed27b195c819ecc38228f96dc5";
    }
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {
            id: "1",
            type: "maintenance",
            category: "Plumbing",
            subject: "Leaking Faucet",
            description: "Kitchen faucet is leaking continuously. Water is dripping from the base of the faucet.",
            photos: [],
            status: "in-progress",
            date: "2025-10-20"
        };
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            id: "2",
            type: "complaint",
            category: "Noise",
            subject: "Loud Music",
            description: "Neighbor playing loud music at night after 11 PM. This has been happening for the past 3 days.",
            photos: [],
            status: "pending",
            date: "2025-10-22"
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = [
            t1,
            t2,
            {
                id: "3",
                type: "maintenance",
                category: "Electrical",
                subject: "Power Outlet",
                description: "Bedroom outlet not working. Tried different devices but none are getting power.",
                photos: [],
                status: "resolved",
                date: "2025-10-15"
            }
        ];
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    const [complaints, setComplaints] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t3);
    const [isDialogOpen, setIsDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedComplaint, setSelectedComplaint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isViewDialogOpen, setIsViewDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = {
            type: "maintenance",
            category: "",
            subject: "",
            description: "",
            photos: []
        };
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    const [newComplaint, setNewComplaint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t4);
    let T0;
    let T1;
    let T2;
    let T3;
    let getStatusBadge;
    let handlePhotoUpload;
    let handleRemovePhoto;
    let t10;
    let t11;
    let t12;
    let t13;
    let t14;
    let t15;
    let t16;
    let t17;
    let t18;
    let t19;
    let t20;
    let t21;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[5] !== complaints || $[6] !== isDialogOpen || $[7] !== newComplaint) {
        const categories = {
            maintenance: [
                "Plumbing",
                "Electrical",
                "HVAC",
                "Appliances",
                "General"
            ],
            complaint: [
                "Noise",
                "Parking",
                "Cleanliness",
                "Security",
                "Other"
            ]
        };
        let t22;
        if ($[32] !== complaints || $[33] !== newComplaint.category || $[34] !== newComplaint.description || $[35] !== newComplaint.photos || $[36] !== newComplaint.subject || $[37] !== newComplaint.type) {
            t22 = ({
                "ResidentComplaintRequest[handleSubmit]": (e)=>{
                    e.preventDefault();
                    const complaint = {
                        id: Date.now().toString(),
                        type: newComplaint.type,
                        category: newComplaint.category,
                        subject: newComplaint.subject,
                        description: newComplaint.description,
                        photos: newComplaint.photos,
                        status: "pending",
                        date: new Date().toISOString().split("T")[0]
                    };
                    setComplaints([
                        complaint,
                        ...complaints
                    ]);
                    setNewComplaint({
                        type: "maintenance",
                        category: "",
                        subject: "",
                        description: "",
                        photos: []
                    });
                    setIsDialogOpen(false);
                    __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Request submitted successfully!");
                }
            })["ResidentComplaintRequest[handleSubmit]"];
            $[32] = complaints;
            $[33] = newComplaint.category;
            $[34] = newComplaint.description;
            $[35] = newComplaint.photos;
            $[36] = newComplaint.subject;
            $[37] = newComplaint.type;
            $[38] = t22;
        } else {
            t22 = $[38];
        }
        const handleSubmit = t22;
        let t23;
        if ($[39] !== newComplaint) {
            t23 = ({
                "ResidentComplaintRequest[handlePhotoUpload]": (e_0)=>{
                    const files = e_0.target.files;
                    if (files) {
                        const newPhotos = [];
                        Array.from(files).forEach({
                            "ResidentComplaintRequest[handlePhotoUpload > (anonymous)()]": (file)=>{
                                const reader = new FileReader();
                                reader.onloadend = ()=>{
                                    newPhotos.push(reader.result);
                                    if (newPhotos.length === files.length) {
                                        setNewComplaint({
                                            ...newComplaint,
                                            photos: [
                                                ...newComplaint.photos,
                                                ...newPhotos
                                            ]
                                        });
                                    }
                                };
                                reader.readAsDataURL(file);
                            }
                        }["ResidentComplaintRequest[handlePhotoUpload > (anonymous)()]"]);
                    }
                }
            })["ResidentComplaintRequest[handlePhotoUpload]"];
            $[39] = newComplaint;
            $[40] = t23;
        } else {
            t23 = $[40];
        }
        handlePhotoUpload = t23;
        let t24;
        if ($[41] !== newComplaint) {
            t24 = ({
                "ResidentComplaintRequest[handleRemovePhoto]": (index)=>{
                    setNewComplaint({
                        ...newComplaint,
                        photos: newComplaint.photos.filter({
                            "ResidentComplaintRequest[handleRemovePhoto > newComplaint.photos.filter()]": (_, i)=>i !== index
                        }["ResidentComplaintRequest[handleRemovePhoto > newComplaint.photos.filter()]"])
                    });
                }
            })["ResidentComplaintRequest[handleRemovePhoto]"];
            $[41] = newComplaint;
            $[42] = t24;
        } else {
            t24 = $[42];
        }
        handleRemovePhoto = t24;
        getStatusBadge = _ResidentComplaintRequestGetStatusBadge;
        t21 = "space-y-6";
        t19 = "flex items-center justify-between";
        if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Complaints & Requests"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                        lineNumber: 210,
                        columnNumber: 18
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600",
                        children: "Submit and track your complaints and maintenance requests"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                        lineNumber: 210,
                        columnNumber: 52
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                lineNumber: 210,
                columnNumber: 13
            }, this);
            $[43] = t20;
        } else {
            t20 = $[43];
        }
        T3 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"];
        t16 = isDialogOpen;
        t17 = setIsDialogOpen;
        if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                            className: "mr-2 h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                            lineNumber: 219,
                            columnNumber: 51
                        }, this),
                        "New Request"
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                    lineNumber: 219,
                    columnNumber: 43
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                lineNumber: 219,
                columnNumber: 13
            }, this);
            $[44] = t18;
        } else {
            t18 = $[44];
        }
        T2 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"];
        if ($[45] === Symbol.for("react.memo_cache_sentinel")) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                        children: "Submit New Request"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                        lineNumber: 226,
                        columnNumber: 27
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
                        children: "Submit a complaint or maintenance request"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                        lineNumber: 226,
                        columnNumber: 72
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                lineNumber: 226,
                columnNumber: 13
            }, this);
            $[45] = t15;
        } else {
            t15 = $[45];
        }
        t12 = handleSubmit;
        t13 = "space-y-4";
        let t25;
        if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
            t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                htmlFor: "type",
                children: "Request Type"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                lineNumber: 235,
                columnNumber: 13
            }, this);
            $[46] = t25;
        } else {
            t25 = $[46];
        }
        let t26;
        if ($[47] !== newComplaint) {
            t26 = ({
                "ResidentComplaintRequest[<Select>.onValueChange]": (value)=>setNewComplaint({
                        ...newComplaint,
                        type: value,
                        category: ""
                    })
            })["ResidentComplaintRequest[<Select>.onValueChange]"];
            $[47] = newComplaint;
            $[48] = t26;
        } else {
            t26 = $[48];
        }
        let t27;
        if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
            t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                    lineNumber: 256,
                    columnNumber: 28
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                lineNumber: 256,
                columnNumber: 13
            }, this);
            $[49] = t27;
        } else {
            t27 = $[49];
        }
        let t28;
        if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
            t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                        value: "maintenance",
                        children: "Maintenance Request"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                        lineNumber: 263,
                        columnNumber: 28
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                        value: "complaint",
                        children: "Complaint"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                        lineNumber: 263,
                        columnNumber: 92
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                lineNumber: 263,
                columnNumber: 13
            }, this);
            $[50] = t28;
        } else {
            t28 = $[50];
        }
        if ($[51] !== newComplaint.type || $[52] !== t26) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-2",
                children: [
                    t25,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                        value: newComplaint.type,
                        onValueChange: t26,
                        required: true,
                        children: [
                            t27,
                            t28
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                        lineNumber: 269,
                        columnNumber: 45
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                lineNumber: 269,
                columnNumber: 13
            }, this);
            $[51] = newComplaint.type;
            $[52] = t26;
            $[53] = t14;
        } else {
            t14 = $[53];
        }
        t10 = "space-y-2";
        if ($[54] === Symbol.for("react.memo_cache_sentinel")) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                htmlFor: "category",
                children: "Category"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                lineNumber: 278,
                columnNumber: 13
            }, this);
            $[54] = t11;
        } else {
            t11 = $[54];
        }
        T1 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"];
        t6 = newComplaint.category;
        if ($[55] !== newComplaint) {
            t7 = ({
                "ResidentComplaintRequest[<Select>.onValueChange]": (value_0)=>setNewComplaint({
                        ...newComplaint,
                        category: value_0
                    })
            })["ResidentComplaintRequest[<Select>.onValueChange]"];
            $[55] = newComplaint;
            $[56] = t7;
        } else {
            t7 = $[56];
        }
        t8 = true;
        if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {
                    placeholder: "Select category"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                    lineNumber: 299,
                    columnNumber: 27
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                lineNumber: 299,
                columnNumber: 12
            }, this);
            $[57] = t9;
        } else {
            t9 = $[57];
        }
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"];
        t5 = categories[newComplaint.type].map(_ResidentComplaintRequestAnonymous);
        $[5] = complaints;
        $[6] = isDialogOpen;
        $[7] = newComplaint;
        $[8] = T0;
        $[9] = T1;
        $[10] = T2;
        $[11] = T3;
        $[12] = getStatusBadge;
        $[13] = handlePhotoUpload;
        $[14] = handleRemovePhoto;
        $[15] = t10;
        $[16] = t11;
        $[17] = t12;
        $[18] = t13;
        $[19] = t14;
        $[20] = t15;
        $[21] = t16;
        $[22] = t17;
        $[23] = t18;
        $[24] = t19;
        $[25] = t20;
        $[26] = t21;
        $[27] = t5;
        $[28] = t6;
        $[29] = t7;
        $[30] = t8;
        $[31] = t9;
    } else {
        T0 = $[8];
        T1 = $[9];
        T2 = $[10];
        T3 = $[11];
        getStatusBadge = $[12];
        handlePhotoUpload = $[13];
        handleRemovePhoto = $[14];
        t10 = $[15];
        t11 = $[16];
        t12 = $[17];
        t13 = $[18];
        t14 = $[19];
        t15 = $[20];
        t16 = $[21];
        t17 = $[22];
        t18 = $[23];
        t19 = $[24];
        t20 = $[25];
        t21 = $[26];
        t5 = $[27];
        t6 = $[28];
        t7 = $[29];
        t8 = $[30];
        t9 = $[31];
    }
    let t22;
    if ($[58] !== T0 || $[59] !== t5) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            children: t5
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
            lineNumber: 361,
            columnNumber: 11
        }, this);
        $[58] = T0;
        $[59] = t5;
        $[60] = t22;
    } else {
        t22 = $[60];
    }
    let t23;
    if ($[61] !== T1 || $[62] !== t22 || $[63] !== t6 || $[64] !== t7 || $[65] !== t8 || $[66] !== t9) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T1, {
            value: t6,
            onValueChange: t7,
            required: t8,
            children: [
                t9,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
            lineNumber: 370,
            columnNumber: 11
        }, this);
        $[61] = T1;
        $[62] = t22;
        $[63] = t6;
        $[64] = t7;
        $[65] = t8;
        $[66] = t9;
        $[67] = t23;
    } else {
        t23 = $[67];
    }
    let t24;
    if ($[68] !== t10 || $[69] !== t11 || $[70] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t10,
            children: [
                t11,
                t23
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
            lineNumber: 383,
            columnNumber: 11
        }, this);
        $[68] = t10;
        $[69] = t11;
        $[70] = t23;
        $[71] = t24;
    } else {
        t24 = $[71];
    }
    let t25;
    if ($[72] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "subject",
            children: "Subject"
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
            lineNumber: 393,
            columnNumber: 11
        }, this);
        $[72] = t25;
    } else {
        t25 = $[72];
    }
    let t26;
    if ($[73] !== newComplaint) {
        t26 = ({
            "ResidentComplaintRequest[<Input>.onChange]": (e_1)=>setNewComplaint({
                    ...newComplaint,
                    subject: e_1.target.value
                })
        })["ResidentComplaintRequest[<Input>.onChange]"];
        $[73] = newComplaint;
        $[74] = t26;
    } else {
        t26 = $[74];
    }
    let t27;
    if ($[75] !== newComplaint.subject || $[76] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t25,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    id: "subject",
                    value: newComplaint.subject,
                    onChange: t26,
                    placeholder: "Brief description",
                    required: true
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                    lineNumber: 413,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
            lineNumber: 413,
            columnNumber: 11
        }, this);
        $[75] = newComplaint.subject;
        $[76] = t26;
        $[77] = t27;
    } else {
        t27 = $[77];
    }
    let t28;
    if ($[78] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "description",
            children: "Description"
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
            lineNumber: 422,
            columnNumber: 11
        }, this);
        $[78] = t28;
    } else {
        t28 = $[78];
    }
    let t29;
    if ($[79] !== newComplaint) {
        t29 = ({
            "ResidentComplaintRequest[<Textarea>.onChange]": (e_2)=>setNewComplaint({
                    ...newComplaint,
                    description: e_2.target.value
                })
        })["ResidentComplaintRequest[<Textarea>.onChange]"];
        $[79] = newComplaint;
        $[80] = t29;
    } else {
        t29 = $[80];
    }
    let t30;
    if ($[81] !== newComplaint.description || $[82] !== t29) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t28,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$textarea$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                    id: "description",
                    value: newComplaint.description,
                    onChange: t29,
                    placeholder: "Provide details about your request",
                    rows: 4,
                    required: true
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                    lineNumber: 442,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
            lineNumber: 442,
            columnNumber: 11
        }, this);
        $[81] = newComplaint.description;
        $[82] = t29;
        $[83] = t30;
    } else {
        t30 = $[83];
    }
    let t31;
    if ($[84] === Symbol.for("react.memo_cache_sentinel")) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "photos",
            children: "Upload Photos (Optional)"
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
            lineNumber: 451,
            columnNumber: 11
        }, this);
        $[84] = t31;
    } else {
        t31 = $[84];
    }
    let t32;
    if ($[85] !== handlePhotoUpload) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "photos",
            type: "file",
            accept: "image/*",
            multiple: true,
            onChange: handlePhotoUpload
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
            lineNumber: 458,
            columnNumber: 11
        }, this);
        $[85] = handlePhotoUpload;
        $[86] = t32;
    } else {
        t32 = $[86];
    }
    let t33;
    if ($[87] !== handleRemovePhoto || $[88] !== newComplaint.photos) {
        t33 = newComplaint.photos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-2 flex flex-wrap gap-2",
            children: newComplaint.photos.map({
                "ResidentComplaintRequest[newComplaint.photos.map()]": (photo, index_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: photo,
                                alt: `Upload ${index_0 + 1}`,
                                className: "h-20 w-20 rounded-lg object-cover"
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                                lineNumber: 467,
                                columnNumber: 124
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                className: "absolute -right-2 -top-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600",
                                onClick: {
                                    "ResidentComplaintRequest[newComplaint.photos.map() > <button>.onClick]": ()=>handleRemovePhoto(index_0)
                                }["ResidentComplaintRequest[newComplaint.photos.map() > <button>.onClick]"],
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-3 w-3"
                                }, void 0, false, {
                                    fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                                    lineNumber: 469,
                                    columnNumber: 88
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                                lineNumber: 467,
                                columnNumber: 219
                            }, this)
                        ]
                    }, index_0, true, {
                        fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                        lineNumber: 467,
                        columnNumber: 84
                    }, this)
            }["ResidentComplaintRequest[newComplaint.photos.map()]"])
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
            lineNumber: 466,
            columnNumber: 45
        }, this);
        $[87] = handleRemovePhoto;
        $[88] = newComplaint.photos;
        $[89] = t33;
    } else {
        t33 = $[89];
    }
    let t34;
    if ($[90] !== t32 || $[91] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t31,
                t32,
                t33
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
            lineNumber: 479,
            columnNumber: 11
        }, this);
        $[90] = t32;
        $[91] = t33;
        $[92] = t34;
    } else {
        t34 = $[92];
    }
    let t35;
    if ($[93] === Symbol.for("react.memo_cache_sentinel")) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "submit",
            className: "w-full",
            children: "Submit Request"
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
            lineNumber: 488,
            columnNumber: 11
        }, this);
        $[93] = t35;
    } else {
        t35 = $[93];
    }
    let t36;
    if ($[94] !== t12 || $[95] !== t13 || $[96] !== t14 || $[97] !== t24 || $[98] !== t27 || $[99] !== t30 || $[100] !== t34) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: t12,
            className: t13,
            children: [
                t14,
                t24,
                t27,
                t30,
                t34,
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
            lineNumber: 495,
            columnNumber: 11
        }, this);
        $[94] = t12;
        $[95] = t13;
        $[96] = t14;
        $[97] = t24;
        $[98] = t27;
        $[99] = t30;
        $[100] = t34;
        $[101] = t36;
    } else {
        t36 = $[101];
    }
    let t37;
    if ($[102] !== T2 || $[103] !== t15 || $[104] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T2, {
            children: [
                t15,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
            lineNumber: 509,
            columnNumber: 11
        }, this);
        $[102] = T2;
        $[103] = t15;
        $[104] = t36;
        $[105] = t37;
    } else {
        t37 = $[105];
    }
    let t38;
    if ($[106] !== T3 || $[107] !== t16 || $[108] !== t17 || $[109] !== t18 || $[110] !== t37) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T3, {
            open: t16,
            onOpenChange: t17,
            children: [
                t18,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
            lineNumber: 519,
            columnNumber: 11
        }, this);
        $[106] = T3;
        $[107] = t16;
        $[108] = t17;
        $[109] = t18;
        $[110] = t37;
        $[111] = t38;
    } else {
        t38 = $[111];
    }
    let t39;
    if ($[112] !== t19 || $[113] !== t20 || $[114] !== t38) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t19,
            children: [
                t20,
                t38
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
            lineNumber: 531,
            columnNumber: 11
        }, this);
        $[112] = t19;
        $[113] = t20;
        $[114] = t38;
        $[115] = t39;
    } else {
        t39 = $[115];
    }
    let t40;
    if ($[116] === Symbol.for("react.memo_cache_sentinel")) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                children: "My Requests"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                lineNumber: 541,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
            lineNumber: 541,
            columnNumber: 11
        }, this);
        $[116] = t40;
    } else {
        t40 = $[116];
    }
    let t41;
    if ($[117] === Symbol.for("react.memo_cache_sentinel")) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        children: "Type"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                        lineNumber: 548,
                        columnNumber: 34
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        children: "Category"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                        lineNumber: 548,
                        columnNumber: 61
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        children: "Subject"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                        lineNumber: 548,
                        columnNumber: 92
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        children: "Date"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                        lineNumber: 548,
                        columnNumber: 122
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        children: "Status"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                        lineNumber: 548,
                        columnNumber: 149
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        children: "Action"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                        lineNumber: 548,
                        columnNumber: 178
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                lineNumber: 548,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
            lineNumber: 548,
            columnNumber: 11
        }, this);
        $[117] = t41;
    } else {
        t41 = $[117];
    }
    let t42;
    if ($[118] !== complaints || $[119] !== getStatusBadge) {
        let t43;
        if ($[121] !== getStatusBadge) {
            t43 = ({
                "ResidentComplaintRequest[complaints.map()]": (complaint_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                    variant: "outline",
                                    children: complaint_0.type === "maintenance" ? "Maintenance" : "Complaint"
                                }, void 0, false, {
                                    fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                                    lineNumber: 558,
                                    columnNumber: 112
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                                lineNumber: 558,
                                columnNumber: 101
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: complaint_0.category
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                                lineNumber: 558,
                                columnNumber: 223
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: complaint_0.subject
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                                lineNumber: 558,
                                columnNumber: 268
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: new Date(complaint_0.date).toLocaleDateString()
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                                lineNumber: 558,
                                columnNumber: 312
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: getStatusBadge(complaint_0.status)
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                                lineNumber: 558,
                                columnNumber: 384
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                    size: "sm",
                                    variant: "outline",
                                    onClick: {
                                        "ResidentComplaintRequest[complaints.map() > <Button>.onClick]": ()=>{
                                            setSelectedComplaint(complaint_0);
                                            setIsViewDialogOpen(true);
                                        }
                                    }["ResidentComplaintRequest[complaints.map() > <Button>.onClick]"],
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                            className: "mr-1 h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                                            lineNumber: 563,
                                            columnNumber: 81
                                        }, this),
                                        "View"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                                    lineNumber: 558,
                                    columnNumber: 454
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                                lineNumber: 558,
                                columnNumber: 443
                            }, this)
                        ]
                    }, complaint_0.id, true, {
                        fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                        lineNumber: 558,
                        columnNumber: 70
                    }, this)
            })["ResidentComplaintRequest[complaints.map()]"];
            $[121] = getStatusBadge;
            $[122] = t43;
        } else {
            t43 = $[122];
        }
        t42 = complaints.map(t43);
        $[118] = complaints;
        $[119] = getStatusBadge;
        $[120] = t42;
    } else {
        t42 = $[120];
    }
    let t43;
    if ($[123] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                t40,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                        children: [
                            t41,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                                children: t42
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                                lineNumber: 579,
                                columnNumber: 47
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                        lineNumber: 579,
                        columnNumber: 35
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                    lineNumber: 579,
                    columnNumber: 22
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
            lineNumber: 579,
            columnNumber: 11
        }, this);
        $[123] = t42;
        $[124] = t43;
    } else {
        t43 = $[124];
    }
    let t44;
    if ($[125] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
                children: "Request Details"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                lineNumber: 587,
                columnNumber: 25
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
            lineNumber: 587,
            columnNumber: 11
        }, this);
        $[125] = t44;
    } else {
        t44 = $[125];
    }
    let t45;
    if ($[126] !== getStatusBadge || $[127] !== selectedComplaint) {
        t45 = selectedComplaint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    children: "Request ID"
                                }, void 0, false, {
                                    fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                                    lineNumber: 594,
                                    columnNumber: 104
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: selectedComplaint.id
                                }, void 0, false, {
                                    fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                                    lineNumber: 594,
                                    columnNumber: 129
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                            lineNumber: 594,
                            columnNumber: 99
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    children: "Type"
                                }, void 0, false, {
                                    fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                                    lineNumber: 594,
                                    columnNumber: 189
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                        variant: "outline",
                                        children: selectedComplaint.type === "maintenance" ? "Maintenance" : "Complaint"
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                                        lineNumber: 594,
                                        columnNumber: 231
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                                    lineNumber: 594,
                                    columnNumber: 208
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                            lineNumber: 594,
                            columnNumber: 184
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    children: "Category"
                                }, void 0, false, {
                                    fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                                    lineNumber: 594,
                                    columnNumber: 351
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: selectedComplaint.category
                                }, void 0, false, {
                                    fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                                    lineNumber: 594,
                                    columnNumber: 374
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                            lineNumber: 594,
                            columnNumber: 346
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                                    children: "Date Submitted"
                                }, void 0, false, {
                                    fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                                    lineNumber: 594,
                                    columnNumber: 440
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm",
                                    children: new Date(selectedComplaint.date).toLocaleDateString()
                                }, void 0, false, {
                                    fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                                    lineNumber: 594,
                                    columnNumber: 469
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                            lineNumber: 594,
                            columnNumber: 435
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                    lineNumber: 594,
                    columnNumber: 59
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            children: "Subject"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                            lineNumber: 594,
                            columnNumber: 568
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm",
                            children: selectedComplaint.subject
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                            lineNumber: 594,
                            columnNumber: 590
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                    lineNumber: 594,
                    columnNumber: 563
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            children: "Description"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                            lineNumber: 594,
                            columnNumber: 655
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600",
                            children: selectedComplaint.description
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                            lineNumber: 594,
                            columnNumber: 681
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                    lineNumber: 594,
                    columnNumber: 650
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            children: "Status"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                            lineNumber: 594,
                            columnNumber: 764
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-1",
                            children: getStatusBadge(selectedComplaint.status)
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                            lineNumber: 594,
                            columnNumber: 785
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                    lineNumber: 594,
                    columnNumber: 759
                }, this),
                selectedComplaint.photos.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
                            className: "mb-2 block",
                            children: [
                                "Photos (",
                                selectedComplaint.photos.length,
                                ")"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                            lineNumber: 594,
                            columnNumber: 906
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 gap-2",
                            children: selectedComplaint.photos.map(_ResidentComplaintRequestSelectedComplaintPhotosMap)
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                            lineNumber: 594,
                            columnNumber: 986
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                    lineNumber: 594,
                    columnNumber: 901
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
            lineNumber: 594,
            columnNumber: 32
        }, this);
        $[126] = getStatusBadge;
        $[127] = selectedComplaint;
        $[128] = t45;
    } else {
        t45 = $[128];
    }
    let t46;
    if ($[129] !== t45) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-2xl",
            children: [
                t44,
                t45
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
            lineNumber: 603,
            columnNumber: 11
        }, this);
        $[129] = t45;
        $[130] = t46;
    } else {
        t46 = $[130];
    }
    let t47;
    if ($[131] !== isViewDialogOpen || $[132] !== t46) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
            open: isViewDialogOpen,
            onOpenChange: setIsViewDialogOpen,
            children: t46
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
            lineNumber: 611,
            columnNumber: 11
        }, this);
        $[131] = isViewDialogOpen;
        $[132] = t46;
        $[133] = t47;
    } else {
        t47 = $[133];
    }
    let t48;
    if ($[134] !== t21 || $[135] !== t39 || $[136] !== t43 || $[137] !== t47) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t21,
            children: [
                t39,
                t43,
                t47
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
            lineNumber: 620,
            columnNumber: 11
        }, this);
        $[134] = t21;
        $[135] = t39;
        $[136] = t43;
        $[137] = t47;
        $[138] = t48;
    } else {
        t48 = $[138];
    }
    return t48;
}
_s(ResidentComplaintRequest, "5G51bAdUkBdMS5SzXqUjfRKQG5s=");
_c = ResidentComplaintRequest;
function _ResidentComplaintRequestSelectedComplaintPhotosMap(photo_0, index_1) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
        src: photo_0,
        alt: `Photo ${index_1 + 1}`,
        className: "h-32 w-full rounded-lg object-cover"
    }, index_1, false, {
        fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
        lineNumber: 632,
        columnNumber: 10
    }, this);
}
function _ResidentComplaintRequestAnonymous(cat) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
        value: cat,
        children: cat
    }, cat, false, {
        fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
        lineNumber: 635,
        columnNumber: 10
    }, this);
}
function _ResidentComplaintRequestGetStatusBadge(status) {
    switch(status){
        case "pending":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-yellow-100 text-yellow-800",
                    children: "Pending"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                    lineNumber: 641,
                    columnNumber: 16
                }, this);
            }
        case "in-progress":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-blue-100 text-blue-800",
                    children: "In Progress"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                    lineNumber: 645,
                    columnNumber: 16
                }, this);
            }
        case "resolved":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-green-100 text-green-800",
                    children: "Resolved"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentComplaintRequest.jsx",
                    lineNumber: 649,
                    columnNumber: 16
                }, this);
            }
        default:
            {
                return null;
            }
    }
}
const __TURBOPACK__default__export__ = ResidentComplaintRequest;
var _c;
__turbopack_context__.k.register(_c, "ResidentComplaintRequest");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/src/app/components/ResidentNotifications.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/card.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/button.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/badge.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/tabs.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
function ResidentNotifications(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(58);
    if ($[0] !== "3ae7575bc1e97e07a60a89ddc37b24aa083b17dfb34c23376f761414e3da8618") {
        for(let $i = 0; $i < 58; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3ae7575bc1e97e07a60a89ddc37b24aa083b17dfb34c23376f761414e3da8618";
    }
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            {
                id: "1",
                title: "Scheduled Water Maintenance",
                message: "Water supply will be temporarily suspended on November 1st from 9 AM to 3 PM for maintenance work. Please plan accordingly.",
                type: "warning",
                date: "2025-10-25",
                read: false
            },
            {
                id: "2",
                title: "Community Diwali Celebration",
                message: "Join us for our annual Diwali celebration on November 10th at 6 PM in the Main Event Hall. All residents are welcome!",
                type: "event",
                date: "2025-10-24",
                read: false
            },
            {
                id: "3",
                title: "Parking Policy Update",
                message: "New parking policy will be effective from November 15th. All vehicles must display parking permits. Please collect your permits from the office.",
                type: "info",
                date: "2025-10-20",
                read: true
            },
            {
                id: "4",
                title: "Security Alert",
                message: "Please be vigilant about package deliveries. Report any suspicious activity to security immediately.",
                type: "urgent",
                date: "2025-10-22",
                read: true
            },
            {
                id: "5",
                title: "Elevator Maintenance",
                message: "Elevator #1 will be under maintenance from Oct 30 to Nov 2. Please use the alternate elevator.",
                type: "info",
                date: "2025-10-18",
                read: true
            }
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [notifications, setNotifications] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    let t2;
    if ($[2] !== notifications) {
        t2 = ({
            "ResidentNotifications[handleMarkAsRead]": (id)=>{
                setNotifications(notifications.map({
                    "ResidentNotifications[handleMarkAsRead > notifications.map()]": (n)=>n.id === id ? {
                            ...n,
                            read: true
                        } : n
                }["ResidentNotifications[handleMarkAsRead > notifications.map()]"]));
                __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Notification marked as read");
            }
        })["ResidentNotifications[handleMarkAsRead]"];
        $[2] = notifications;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handleMarkAsRead = t2;
    let t3;
    if ($[4] !== notifications) {
        t3 = ({
            "ResidentNotifications[handleMarkAsUnread]": (id_0)=>{
                setNotifications(notifications.map({
                    "ResidentNotifications[handleMarkAsUnread > notifications.map()]": (n_0)=>n_0.id === id_0 ? {
                            ...n_0,
                            read: false
                        } : n_0
                }["ResidentNotifications[handleMarkAsUnread > notifications.map()]"]));
                __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Notification marked as unread");
            }
        })["ResidentNotifications[handleMarkAsUnread]"];
        $[4] = notifications;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    const handleMarkAsUnread = t3;
    let t4;
    if ($[6] !== notifications) {
        t4 = ({
            "ResidentNotifications[handleDelete]": (id_1)=>{
                setNotifications(notifications.filter({
                    "ResidentNotifications[handleDelete > notifications.filter()]": (n_1)=>n_1.id !== id_1
                }["ResidentNotifications[handleDelete > notifications.filter()]"]));
                __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Notification deleted");
            }
        })["ResidentNotifications[handleDelete]"];
        $[6] = notifications;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    const handleDelete = t4;
    let t5;
    if ($[8] !== notifications) {
        t5 = ({
            "ResidentNotifications[handleMarkAllAsRead]": ()=>{
                setNotifications(notifications.map(_ResidentNotificationsHandleMarkAllAsReadNotificationsMap));
                __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("All notifications marked as read");
            }
        })["ResidentNotifications[handleMarkAllAsRead]"];
        $[8] = notifications;
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    const handleMarkAllAsRead = t5;
    const getTypeIcon = _ResidentNotificationsGetTypeIcon;
    const getTypeBadge = _ResidentNotificationsGetTypeBadge;
    let T0;
    let T1;
    let t10;
    let t11;
    let t12;
    let t13;
    let t14;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[10] !== handleDelete || $[11] !== handleMarkAllAsRead || $[12] !== handleMarkAsRead || $[13] !== handleMarkAsUnread || $[14] !== notifications) {
        const unreadNotifications = notifications.filter(_ResidentNotificationsNotificationsFilter);
        const readNotifications = notifications.filter(_ResidentNotificationsNotificationsFilter2);
        let t15;
        if ($[26] !== handleDelete || $[27] !== handleMarkAsRead || $[28] !== handleMarkAsUnread) {
            t15 = ({
                "ResidentNotifications[renderNotification]": (notification)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
                        className: !notification.read ? "border-l-4 border-l-blue-500" : "",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                            className: "p-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 rounded-lg bg-gray-50 p-3",
                                        children: getTypeIcon(notification.type)
                                    }, void 0, false, {
                                        fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                                        lineNumber: 149,
                                        columnNumber: 236
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-start justify-between",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mb-2 flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    className: "text-sm",
                                                                    children: notification.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                                                                    lineNumber: 149,
                                                                    columnNumber: 466
                                                                }, this),
                                                                getTypeBadge(notification.type),
                                                                !notification.read && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                                                                    className: "bg-blue-100 text-blue-800 text-xs",
                                                                    children: "New"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                                                                    lineNumber: 149,
                                                                    columnNumber: 571
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                                                            lineNumber: 149,
                                                            columnNumber: 420
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mb-2 text-sm text-gray-600",
                                                            children: notification.message
                                                        }, void 0, false, {
                                                            fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                                                            lineNumber: 149,
                                                            columnNumber: 642
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-500",
                                                            children: new Date(notification.date).toLocaleDateString("en-US", {
                                                                year: "numeric",
                                                                month: "long",
                                                                day: "numeric"
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                                                            lineNumber: 149,
                                                            columnNumber: 710
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                                                    lineNumber: 149,
                                                    columnNumber: 396
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                                                lineNumber: 149,
                                                columnNumber: 346
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 flex gap-2",
                                                children: [
                                                    !notification.read ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        size: "sm",
                                                        variant: "outline",
                                                        onClick: {
                                                            "ResidentNotifications[renderNotification > <Button>.onClick]": ()=>handleMarkAsRead(notification.id)
                                                        }["ResidentNotifications[renderNotification > <Button>.onClick]"],
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                                className: "mr-1 h-3 w-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                                                                lineNumber: 155,
                                                                columnNumber: 86
                                                            }, this),
                                                            "Mark as Read"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                                                        lineNumber: 153,
                                                        columnNumber: 97
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        size: "sm",
                                                        variant: "outline",
                                                        onClick: {
                                                            "ResidentNotifications[renderNotification > <Button>.onClick]": ()=>handleMarkAsUnread(notification.id)
                                                        }["ResidentNotifications[renderNotification > <Button>.onClick]"],
                                                        children: "Mark as Unread"
                                                    }, void 0, false, {
                                                        fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                                                        lineNumber: 155,
                                                        columnNumber: 144
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                        size: "sm",
                                                        variant: "outline",
                                                        className: "text-red-600 hover:bg-red-50",
                                                        onClick: {
                                                            "ResidentNotifications[renderNotification > <Button>.onClick]": ()=>handleDelete(notification.id)
                                                        }["ResidentNotifications[renderNotification > <Button>.onClick]"],
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "mr-1 h-3 w-3"
                                                            }, void 0, false, {
                                                                fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                                                                lineNumber: 159,
                                                                columnNumber: 86
                                                            }, this),
                                                            "Delete"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                                                        lineNumber: 157,
                                                        columnNumber: 110
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                                                lineNumber: 153,
                                                columnNumber: 42
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                                        lineNumber: 149,
                                        columnNumber: 322
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                                lineNumber: 149,
                                columnNumber: 196
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                            lineNumber: 149,
                            columnNumber: 167
                        }, this)
                    }, notification.id, false, {
                        fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                        lineNumber: 149,
                        columnNumber: 70
                    }, this)
            })["ResidentNotifications[renderNotification]"];
            $[26] = handleDelete;
            $[27] = handleMarkAsRead;
            $[28] = handleMarkAsUnread;
            $[29] = t15;
        } else {
            t15 = $[29];
        }
        const renderNotification = t15;
        t13 = "space-y-6";
        let t16;
        if ($[30] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        children: "Notifications"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                        lineNumber: 172,
                        columnNumber: 18
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600",
                        children: "View important announcements and updates from management"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                        lineNumber: 172,
                        columnNumber: 40
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                lineNumber: 172,
                columnNumber: 13
            }, this);
            $[30] = t16;
        } else {
            t16 = $[30];
        }
        const t17 = unreadNotifications.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-red-100 text-red-800",
                    children: [
                        unreadNotifications.length,
                        " Unread"
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                    lineNumber: 177,
                    columnNumber: 53
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    size: "sm",
                    onClick: handleMarkAllAsRead,
                    children: "Mark All as Read"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                    lineNumber: 177,
                    columnNumber: 139
                }, this)
            ]
        }, void 0, true);
        if ($[31] !== t17) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between",
                children: [
                    t16,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-2",
                        children: t17
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                        lineNumber: 179,
                        columnNumber: 69
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                lineNumber: 179,
                columnNumber: 13
            }, this);
            $[31] = t17;
            $[32] = t14;
        } else {
            t14 = $[32];
        }
        T1 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"];
        t9 = "all";
        let t18;
        if ($[33] !== notifications.length) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                value: "all",
                children: [
                    "All (",
                    notifications.length,
                    ")"
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                lineNumber: 189,
                columnNumber: 13
            }, this);
            $[33] = notifications.length;
            $[34] = t18;
        } else {
            t18 = $[34];
        }
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
            className: "grid w-full grid-cols-3",
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                    value: "unread",
                    children: [
                        "Unread (",
                        unreadNotifications.length,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                    lineNumber: 195,
                    columnNumber: 62
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                    value: "read",
                    children: [
                        "Read (",
                        readNotifications.length,
                        ")"
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                    lineNumber: 195,
                    columnNumber: 141
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
            lineNumber: 195,
            columnNumber: 11
        }, this);
        let t19;
        if ($[35] !== notifications || $[36] !== renderNotification) {
            t19 = notifications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center py-12 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                        className: "mb-4 h-12 w-12 text-gray-400"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                        lineNumber: 198,
                        columnNumber: 119
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600",
                        children: "No notifications"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                        lineNumber: 198,
                        columnNumber: 168
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                lineNumber: 198,
                columnNumber: 42
            }, this) : notifications.map({
                "ResidentNotifications[notifications.map()]": (notification_0)=>renderNotification(notification_0)
            }["ResidentNotifications[notifications.map()]"]);
            $[35] = notifications;
            $[36] = renderNotification;
            $[37] = t19;
        } else {
            t19 = $[37];
        }
        if ($[38] !== t19) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                value: "all",
                className: "mt-4 space-y-4",
                children: t19
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                lineNumber: 208,
                columnNumber: 13
            }, this);
            $[38] = t19;
            $[39] = t11;
        } else {
            t11 = $[39];
        }
        const t20 = unreadNotifications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center py-12 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                    className: "mb-4 h-12 w-12 text-gray-400"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                    lineNumber: 214,
                    columnNumber: 129
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: "No unread notifications"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                    lineNumber: 214,
                    columnNumber: 178
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
            lineNumber: 214,
            columnNumber: 52
        }, this) : unreadNotifications.map({
            "ResidentNotifications[unreadNotifications.map()]": (notification_1)=>renderNotification(notification_1)
        }["ResidentNotifications[unreadNotifications.map()]"]);
        if ($[40] !== t20) {
            t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
                value: "unread",
                className: "mt-4 space-y-4",
                children: t20
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                lineNumber: 218,
                columnNumber: 13
            }, this);
            $[40] = t20;
            $[41] = t12;
        } else {
            t12 = $[41];
        }
        T0 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"];
        t6 = "read";
        t7 = "mt-4 space-y-4";
        t8 = readNotifications.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center py-12 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                    className: "mb-4 h-12 w-12 text-gray-400"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                    lineNumber: 227,
                    columnNumber: 120
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600",
                    children: "No read notifications"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                    lineNumber: 227,
                    columnNumber: 169
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
            lineNumber: 227,
            columnNumber: 43
        }, this) : readNotifications.map({
            "ResidentNotifications[readNotifications.map()]": (notification_2)=>renderNotification(notification_2)
        }["ResidentNotifications[readNotifications.map()]"]);
        $[10] = handleDelete;
        $[11] = handleMarkAllAsRead;
        $[12] = handleMarkAsRead;
        $[13] = handleMarkAsUnread;
        $[14] = notifications;
        $[15] = T0;
        $[16] = T1;
        $[17] = t10;
        $[18] = t11;
        $[19] = t12;
        $[20] = t13;
        $[21] = t14;
        $[22] = t6;
        $[23] = t7;
        $[24] = t8;
        $[25] = t9;
    } else {
        T0 = $[15];
        T1 = $[16];
        t10 = $[17];
        t11 = $[18];
        t12 = $[19];
        t13 = $[20];
        t14 = $[21];
        t6 = $[22];
        t7 = $[23];
        t8 = $[24];
        t9 = $[25];
    }
    let t15;
    if ($[42] !== T0 || $[43] !== t6 || $[44] !== t7 || $[45] !== t8) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
            value: t6,
            className: t7,
            children: t8
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
            lineNumber: 261,
            columnNumber: 11
        }, this);
        $[42] = T0;
        $[43] = t6;
        $[44] = t7;
        $[45] = t8;
        $[46] = t15;
    } else {
        t15 = $[46];
    }
    let t16;
    if ($[47] !== T1 || $[48] !== t10 || $[49] !== t11 || $[50] !== t12 || $[51] !== t15 || $[52] !== t9) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T1, {
            defaultValue: t9,
            children: [
                t10,
                t11,
                t12,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
            lineNumber: 272,
            columnNumber: 11
        }, this);
        $[47] = T1;
        $[48] = t10;
        $[49] = t11;
        $[50] = t12;
        $[51] = t15;
        $[52] = t9;
        $[53] = t16;
    } else {
        t16 = $[53];
    }
    let t17;
    if ($[54] !== t13 || $[55] !== t14 || $[56] !== t16) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t13,
            children: [
                t14,
                t16
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
            lineNumber: 285,
            columnNumber: 11
        }, this);
        $[54] = t13;
        $[55] = t14;
        $[56] = t16;
        $[57] = t17;
    } else {
        t17 = $[57];
    }
    return t17;
}
_s(ResidentNotifications, "12Iqx2C8CaLm7zuHpBKrFSH4SCI=");
_c = ResidentNotifications;
function _ResidentNotificationsNotificationsFilter2(n_4) {
    return n_4.read;
}
function _ResidentNotificationsNotificationsFilter(n_3) {
    return !n_3.read;
}
function _ResidentNotificationsGetTypeBadge(type_0) {
    switch(type_0){
        case "info":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-blue-100 text-blue-800",
                    children: "Info"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                    lineNumber: 305,
                    columnNumber: 16
                }, this);
            }
        case "warning":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-orange-100 text-orange-800",
                    children: "Warning"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                    lineNumber: 309,
                    columnNumber: 16
                }, this);
            }
        case "urgent":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-red-100 text-red-800",
                    children: "Urgent"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                    lineNumber: 313,
                    columnNumber: 16
                }, this);
            }
        case "event":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-purple-100 text-purple-800",
                    children: "Event"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                    lineNumber: 317,
                    columnNumber: 16
                }, this);
            }
        default:
            {
                return null;
            }
    }
}
function _ResidentNotificationsGetTypeIcon(type) {
    switch(type){
        case "info":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                    className: "h-5 w-5 text-blue-600"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                    lineNumber: 329,
                    columnNumber: 16
                }, this);
            }
        case "warning":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    className: "h-5 w-5 text-orange-600"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                    lineNumber: 333,
                    columnNumber: 16
                }, this);
            }
        case "urgent":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                    className: "h-5 w-5 text-red-600"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                    lineNumber: 337,
                    columnNumber: 16
                }, this);
            }
        case "event":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                    className: "h-5 w-5 text-purple-600"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                    lineNumber: 341,
                    columnNumber: 16
                }, this);
            }
        default:
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                    className: "h-5 w-5 text-blue-600"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/ResidentNotifications.jsx",
                    lineNumber: 345,
                    columnNumber: 16
                }, this);
            }
    }
}
function _ResidentNotificationsHandleMarkAllAsReadNotificationsMap(n_2) {
    return {
        ...n_2,
        read: true
    };
}
const __TURBOPACK__default__export__ = ResidentNotifications;
var _c;
__turbopack_context__.k.register(_c, "ResidentNotifications");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=client_src_app_components_e7fa353e._.js.map