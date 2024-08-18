(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_app_(Auth)_forget-password_853ef4._.js", {

"[project]/src/app/(Auth)/forget-password/components/ForgetPasswordForm/ForgetPassworForm.module.css [app-client] (css module)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "button": "button__ForgetPassworForm__f9ff2126",
});

})()),
"[project]/src/app/(Auth)/forget-password/components/ForgetPasswordForm/ForgetPasswordForm.tsx [app-client] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, k: __turbopack_refresh__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>ForgetPasswordForm
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Auth$292f$forget$2d$password$2f$components$2f$ForgetPasswordForm$2f$ForgetPassworForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/(Auth)/forget-password/components/ForgetPasswordForm/ForgetPassworForm.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$form$2f$esm$2f$use$2d$form$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/form/esm/use-form.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$form$2f$esm$2f$validators$2f$is$2d$not$2d$empty$2f$is$2d$not$2d$empty$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/form/esm/validators/is-not-empty/is-not-empty.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$form$2f$esm$2f$validators$2f$is$2d$email$2f$is$2d$email$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/form/esm/validators/is-email/is-email.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/index.mjs [app-client] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/components/Button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$NumberInput$2f$NumberInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/components/NumberInput/NumberInput.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/Box/Box.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/components/Flex/Flex.mjs [app-client] (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function ForgetPasswordForm() {
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
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$Box$2f$Box$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Box"], {
        component: "form",
        // miw="300"
        // maw="400"
        mx: "auto",
        onSubmit: form.onSubmit(()=>{}),
        style: {
            width: '100%'
        },
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$NumberInput$2f$NumberInput$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NumberInput"], {
                label: "Phone Number",
                withAsterisk: true,
                pt: "md",
                pb: "md",
                placeholder: "Enter your phone number",
                size: "lg",
                radius: 10,
                ...form.getInputProps('password'),
                style: {
                    width: '100%'
                },
                hideControls: true
            }, void 0, false, {
                fileName: "<[project]/src/app/(Auth)/forget-password/components/ForgetPasswordForm/ForgetPasswordForm.tsx>",
                lineNumber: 49,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Flex$2f$Flex$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Flex"], {
                justify: "center",
                align: "center",
                direction: "column",
                pt: "md",
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Auth$292f$forget$2d$password$2f$components$2f$ForgetPasswordForm$2f$ForgetPassworForm$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"]["button"],
                    type: "submit",
                    miw: 150,
                    mih: 45,
                    radius: 10,
                    mt: "lg",
                    children: "Resend Recovery Code"
                }, void 0, false, {
                    fileName: "<[project]/src/app/(Auth)/forget-password/components/ForgetPasswordForm/ForgetPasswordForm.tsx>",
                    lineNumber: 80,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/(Auth)/forget-password/components/ForgetPasswordForm/ForgetPasswordForm.tsx>",
                lineNumber: 73,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/(Auth)/forget-password/components/ForgetPasswordForm/ForgetPasswordForm.tsx>",
        lineNumber: 27,
        columnNumber: 9
    }, this);
}
_s(ForgetPasswordForm, "woqMTX6igxsX6/9vX4dQZlxR7yY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$form$2f$esm$2f$use$2d$form$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useForm"]
    ];
});
_c = ForgetPasswordForm;
var _c;
__turbopack_refresh__.register(_c, "ForgetPasswordForm");

})()),
"[project]/src/app/(Auth)/forget-password/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),
}]);

//# sourceMappingURL=src_app_(Auth)_forget-password_853ef4._.js.map