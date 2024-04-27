(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_(Auth)_login_5e4e7a._.js", {

"[project]/src/app/(Auth)/login/components/LoginForm.module.css [app-client] (css module)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "button": "button__LoginForm__7fd8fc64",
  "forget__password__text": "forget__password__text__LoginForm__7fd8fc64",
  "signup__link": "signup__link__LoginForm__7fd8fc64",
  "signup__text": "signup__text__LoginForm__7fd8fc64",
});

})()),
"[project]/src/app/(Auth)/login/components/LoginForm.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>LoginForm
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/js-cookie/dist/js.cookie.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Auth$292f$login$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/(Auth)/login/components/LoginForm.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$form$2f$esm$2f$use$2d$form$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/form/esm/use-form.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$form$2f$esm$2f$validators$2f$is$2d$not$2d$empty$2f$is$2d$not$2d$empty$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/form/esm/validators/is-not-empty/is-not-empty.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$form$2f$esm$2f$validators$2f$is$2d$email$2f$is$2d$email$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/form/esm/validators/is-email/is-email.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/index.mjs [app-client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/components/Button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/components/TextInput/TextInput.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$PasswordInput$2f$PasswordInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/components/PasswordInput/PasswordInput.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/components/Flex/Flex.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
;
;
;
;
function LoginForm() {
    _s();
    const form = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$form$2f$esm$2f$use$2d$form$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]({
        initialValues: {
            email: '',
            password: ''
        },
        validate: {
            email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$form$2f$esm$2f$validators$2f$is$2d$email$2f$is$2d$email$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmail"]('Invalid email'),
            password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$form$2f$esm$2f$validators$2f$is$2d$not$2d$empty$2f$is$2d$not$2d$empty$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNotEmpty"]('Enter your password')
        }
    });
    const router = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]();
    const [error, setError] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"]('');
    const handleSubmit = async ()=>{
        const { email, password } = form.getValues();
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post(`https://api.shipsmarter.net/api/v1/auth/login?email=${email}&password=${password}&device-token=`);
            if (!response.data.success) {
                console.log(response);
                throw new Error(`Email or Password are not valid`);
            }
            const token = response.data.data;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$js$2d$cookie$2f$dist$2f$js$2e$cookie$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].set('token', token);
            localStorage.setItem('myAuthorizationToken', token);
            const lool = localStorage.getItem('myAuthorizationToken');
            console.log(lool);
            console.log('Login successful');
            router.replace('/dashboard');
        } catch (error) {
            console.error('Error:', error);
            setError("Email or Password are not valid");
        }
    };
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        component: "form",
        mx: "auto",
        onSubmit: form.onSubmit(()=>{
            handleSubmit();
        }),
        style: {
            width: '100%'
        },
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextInput"], {
                label: "Your email",
                placeholder: "Your email",
                withAsterisk: true,
                pt: "md",
                pb: "md",
                size: "lg",
                radius: 10,
                ...form.getInputProps('email'),
                style: {
                    width: '100%'
                }
            }, void 0, false, {
                fileName: "<[project]/src/app/(Auth)/login/components/LoginForm.tsx>",
                lineNumber: 72,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$PasswordInput$2f$PasswordInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PasswordInput"], {
                label: "Password",
                withAsterisk: true,
                pt: "md",
                pb: "md",
                placeholder: "Your password",
                size: "lg",
                radius: 10,
                ...form.getInputProps('password'),
                style: {
                    width: '100%'
                }
            }, void 0, false, {
                fileName: "<[project]/src/app/(Auth)/login/components/LoginForm.tsx>",
                lineNumber: 85,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"]("div", {
                style: {
                    color: 'red',
                    display: 'flex',
                    justifyContent: 'center'
                },
                children: error
            }, void 0, false, {
                fileName: "<[project]/src/app/(Auth)/login/components/LoginForm.tsx>",
                lineNumber: 97,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                justify: "center",
                align: "center",
                direction: "column",
                pt: "md",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Auth$292f$login$2f$components$2f$LoginForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["button"],
                    type: "submit",
                    miw: 150,
                    mih: 45,
                    radius: 10,
                    mt: "lg",
                    children: "Log in"
                }, void 0, false, {
                    fileName: "<[project]/src/app/(Auth)/login/components/LoginForm.tsx>",
                    lineNumber: 106,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/(Auth)/login/components/LoginForm.tsx>",
                lineNumber: 99,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/(Auth)/login/components/LoginForm.tsx>",
        lineNumber: 65,
        columnNumber: 9
    }, this);
}
_s(LoginForm, "0QqbcVep0LigQaY1P1cCzZVIeUo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$form$2f$esm$2f$use$2d$form$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = LoginForm;
var _c;
__turbopack_refresh__.register(_c, "LoginForm");

})()),
"[project]/src/app/(Auth)/login/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=src_app_(Auth)_login_5e4e7a._.js.map