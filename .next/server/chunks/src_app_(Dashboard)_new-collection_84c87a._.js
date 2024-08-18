module.exports = {

"[project]/src/app/(Dashboard)/new-collection/components/table.module.css [app-ssr] (css module)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
});

})()),
"[project]/src/app/(Dashboard)/new-collection/components/table.tsx [app-ssr] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_esm__({
    "default": ()=>TableSort
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Dashboard$292f$new$2d$collection$2f$components$2f$table$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_import__("[project]/src/app/(Dashboard)/new-collection/components/table.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$module__evaluation$7d$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/index.mjs [app-ssr] (ecmascript) {module evaluation}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Table$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/components/Table/Table.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/components/ScrollArea/ScrollArea.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/components/UnstyledButton/UnstyledButton.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/components/Group/Group.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/components/Text/Text.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Center$2f$Center$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/components/Center/Center.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/components/TextInput/TextInput.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/utils/units-converters/rem.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mantine/core/esm/core/utils/keys/keys.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSelector$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__IconSelector$7d$__ = __turbopack_import__("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconSelector.mjs [app-ssr] (ecmascript) {export default as IconSelector}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronDown$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__IconChevronDown$7d$__ = __turbopack_import__("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronDown.mjs [app-ssr] (ecmascript) {export default as IconChevronDown}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronUp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__IconChevronUp$7d$__ = __turbopack_import__("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconChevronUp.mjs [app-ssr] (ecmascript) {export default as IconChevronUp}");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSearch$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__IconSearch$7d$__ = __turbopack_import__("[project]/node_modules/@tabler/icons-react/dist/esm/icons/IconSearch.mjs [app-ssr] (ecmascript) {export default as IconSearch}");
"__TURBOPACK__ecmascript__hoisting__location__";
"use client";
;
;
;
;
;
function Th({ children, reversed, sorted, onSort }) {
    const Icon = sorted ? reversed ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronUp$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__IconChevronUp$7d$__["IconChevronUp"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconChevronDown$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__IconChevronDown$7d$__["IconChevronDown"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSelector$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__IconSelector$7d$__["IconSelector"];
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Table$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"].Th, {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Dashboard$292f$new$2d$collection$2f$components$2f$table$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].th,
        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$UnstyledButton$2f$UnstyledButton$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["UnstyledButton"], {
            onClick: onSort,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Dashboard$292f$new$2d$collection$2f$components$2f$table$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].control,
            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Group$2f$Group$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
                justify: "space-between",
                children: [
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                        fw: 500,
                        fz: "sm",
                        children: children
                    }, void 0, false, {
                        fileName: "<[project]/src/app/(Dashboard)/new-collection/components/table.tsx>",
                        lineNumber: 43,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Center$2f$Center$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Center"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f28$Dashboard$292f$new$2d$collection$2f$components$2f$table$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].icon,
                        children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](Icon, {
                            style: {
                                width: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"](16),
                                height: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"](16)
                            },
                            stroke: 1.5
                        }, void 0, false, {
                            fileName: "<[project]/src/app/(Dashboard)/new-collection/components/table.tsx>",
                            lineNumber: 47,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "<[project]/src/app/(Dashboard)/new-collection/components/table.tsx>",
                        lineNumber: 46,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/app/(Dashboard)/new-collection/components/table.tsx>",
                lineNumber: 42,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "<[project]/src/app/(Dashboard)/new-collection/components/table.tsx>",
            lineNumber: 41,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/app/(Dashboard)/new-collection/components/table.tsx>",
        lineNumber: 40,
        columnNumber: 9
    }, this);
}
function filterData(data, search) {
    const query = search.toLowerCase().trim();
    return data.filter((item)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$keys$2f$keys$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["keys"](data[0]).some((key)=>item[key].toString().toLowerCase().includes(query)));
}
function sortData(data, payload) {
    const { sortBy } = payload;
    if (!sortBy) {
        return filterData(data, payload.search);
    }
    return filterData([
        ...data
    ].sort((a, b)=>{
        if (payload.reversed) {
            return b[sortBy].localeCompare(a[sortBy]);
        }
        return a[sortBy].localeCompare(b[sortBy]);
    }), payload.search);
}
const data = [
    {
        orderId: '1',
        submissionDate: "Wed Mar 20 2024",
        source: "Vitaparaphrama",
        cost: "50 MAD",
        citryFrom: "Marrakech",
        cityTo: "Casablanca"
    },
    {
        orderId: '2',
        submissionDate: "Thu Mar 21 2024",
        source: "Vitaparaphrama",
        cost: "33 MAD",
        citryFrom: "Marrakech",
        cityTo: "Casablanca"
    },
    {
        orderId: '3',
        submissionDate: "Fri Mar 22 2024",
        source: "Santediagno",
        cost: "50 MAD",
        citryFrom: "Marrakech",
        cityTo: "Casablanca"
    },
    {
        orderId: '4',
        submissionDate: "Sat Mar 23 2024",
        source: "Santediagno",
        cost: "20 MAD",
        citryFrom: "Marrakech",
        cityTo: "Casablanca"
    },
    {
        orderId: '5',
        submissionDate: "Sun Mar 24 2024",
        source: "Vitaparaphrama",
        cost: "40 MAD",
        citryFrom: "Marrakech",
        cityTo: "Casablanca"
    },
    {
        orderId: '6',
        submissionDate: "Mon Mar 25 2024",
        source: "Vitaparaphrama",
        cost: "50 MAD",
        citryFrom: "Marrakech",
        cityTo: "Casablanca"
    },
    {
        orderId: '7',
        submissionDate: "Tue Mar 26 2024",
        source: "Santediagno",
        cost: "25 MAD",
        citryFrom: "Marrakech",
        cityTo: "Casablanca"
    }
];
function TableSort() {
    const [search, setSearch] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"]('');
    const [sortedData, setSortedData] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](data);
    const [sortBy, setSortBy] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](null);
    const [reverseSortDirection, setReverseSortDirection] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"](false);
    const setSorting = (field)=>{
        const reversed = field === sortBy ? !reverseSortDirection : false;
        setReverseSortDirection(reversed);
        setSortBy(field);
        setSortedData(sortData(data, {
            sortBy: field,
            reversed,
            search
        }));
    };
    const handleSearchChange = (event)=>{
        const { value } = event.currentTarget;
        setSearch(value);
        setSortedData(sortData(data, {
            sortBy,
            reversed: reverseSortDirection,
            search: value
        }));
    };
    const rows = sortedData.map((row)=>/*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Table$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"].Tr, {
            children: [
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Table$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"].Td, {
                    style: {
                        textAlign: 'left'
                    },
                    children: row.orderId
                }, void 0, false, {
                    fileName: "<[project]/src/app/(Dashboard)/new-collection/components/table.tsx>",
                    lineNumber: 167,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Table$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"].Td, {
                    children: row.submissionDate
                }, void 0, false, {
                    fileName: "<[project]/src/app/(Dashboard)/new-collection/components/table.tsx>",
                    lineNumber: 168,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Table$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"].Td, {
                    children: row.citryFrom
                }, void 0, false, {
                    fileName: "<[project]/src/app/(Dashboard)/new-collection/components/table.tsx>",
                    lineNumber: 169,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Table$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"].Td, {
                    children: row.cityTo
                }, void 0, false, {
                    fileName: "<[project]/src/app/(Dashboard)/new-collection/components/table.tsx>",
                    lineNumber: 170,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Table$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"].Td, {
                    children: row.cost
                }, void 0, false, {
                    fileName: "<[project]/src/app/(Dashboard)/new-collection/components/table.tsx>",
                    lineNumber: 171,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Table$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"].Td, {
                    children: row.source
                }, void 0, false, {
                    fileName: "<[project]/src/app/(Dashboard)/new-collection/components/table.tsx>",
                    lineNumber: 172,
                    columnNumber: 13
                }, this)
            ]
        }, row.orderId, true, {
            fileName: "<[project]/src/app/(Dashboard)/new-collection/components/table.tsx>",
            lineNumber: 164,
            columnNumber: 9
        }, this));
    return /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$ScrollArea$2f$ScrollArea$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollArea"], {
        children: [
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$TextInput$2f$TextInput$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextInput"], {
                placeholder: "Search by any field",
                mb: "md",
                leftSection: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tabler$2f$icons$2d$react$2f$dist$2f$esm$2f$icons$2f$IconSearch$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$7b$export__default__as__IconSearch$7d$__["IconSearch"], {
                    style: {
                        width: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"](16),
                        height: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$core$2f$utils$2f$units$2d$converters$2f$rem$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["rem"](16)
                    },
                    stroke: 1.5
                }, void 0, false, {
                    fileName: "<[project]/src/app/(Dashboard)/new-collection/components/table.tsx>",
                    lineNumber: 181,
                    columnNumber: 30
                }, void 0),
                value: search,
                onChange: handleSearchChange
            }, void 0, false, {
                fileName: "<[project]/src/app/(Dashboard)/new-collection/components/table.tsx>",
                lineNumber: 178,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Table$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"].ScrollContainer, {
                minWidth: 400,
                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Table$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
                    withColumnBorders: true,
                    horizontalSpacing: "sm",
                    verticalSpacing: "xs",
                    // miw={600}
                    layout: "fixed",
                    children: [
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Table$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"].Tbody, {
                            children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Table$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"].Tr, {
                                children: [
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](Th, {
                                        sorted: sortBy === 'orderId',
                                        reversed: reverseSortDirection,
                                        onSort: ()=>setSorting('orderId'),
                                        children: "Order ID"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(Dashboard)/new-collection/components/table.tsx>",
                                        lineNumber: 198,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](Th, {
                                        sorted: sortBy === 'submissionDate',
                                        reversed: reverseSortDirection,
                                        onSort: ()=>setSorting('submissionDate'),
                                        children: "Submission Date"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(Dashboard)/new-collection/components/table.tsx>",
                                        lineNumber: 205,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](Th, {
                                        sorted: sortBy === 'citryFrom',
                                        reversed: reverseSortDirection,
                                        onSort: ()=>setSorting('citryFrom'),
                                        children: "City-From"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(Dashboard)/new-collection/components/table.tsx>",
                                        lineNumber: 212,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](Th, {
                                        sorted: sortBy === 'cityTo',
                                        reversed: reverseSortDirection,
                                        onSort: ()=>setSorting('cityTo'),
                                        children: "City-To"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(Dashboard)/new-collection/components/table.tsx>",
                                        lineNumber: 219,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](Th, {
                                        sorted: sortBy === 'cost',
                                        reversed: reverseSortDirection,
                                        onSort: ()=>setSorting('cost'),
                                        children: "Cost"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(Dashboard)/new-collection/components/table.tsx>",
                                        lineNumber: 226,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](Th, {
                                        sorted: sortBy === 'source',
                                        reversed: reverseSortDirection,
                                        onSort: ()=>setSorting('source'),
                                        children: "Source"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(Dashboard)/new-collection/components/table.tsx>",
                                        lineNumber: 233,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "<[project]/src/app/(Dashboard)/new-collection/components/table.tsx>",
                                lineNumber: 196,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/app/(Dashboard)/new-collection/components/table.tsx>",
                            lineNumber: 195,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Table$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"].Tbody, {
                            children: rows.length > 0 ? rows : /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Table$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"].Tr, {
                                children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Table$2f$Table$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"].Td, {
                                    colSpan: Object.keys(data[0]).length,
                                    children: /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$future$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mantine$2f$core$2f$esm$2f$components$2f$Text$2f$Text$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Text"], {
                                        fw: 500,
                                        ta: "center",
                                        children: "Nothing found"
                                    }, void 0, false, {
                                        fileName: "<[project]/src/app/(Dashboard)/new-collection/components/table.tsx>",
                                        lineNumber: 251,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "<[project]/src/app/(Dashboard)/new-collection/components/table.tsx>",
                                    lineNumber: 250,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "<[project]/src/app/(Dashboard)/new-collection/components/table.tsx>",
                                lineNumber: 247,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "<[project]/src/app/(Dashboard)/new-collection/components/table.tsx>",
                            lineNumber: 242,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "<[project]/src/app/(Dashboard)/new-collection/components/table.tsx>",
                    lineNumber: 187,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/app/(Dashboard)/new-collection/components/table.tsx>",
                lineNumber: 186,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/app/(Dashboard)/new-collection/components/table.tsx>",
        lineNumber: 177,
        columnNumber: 9
    }, this);
}

})()),
"[project]/src/app/(Dashboard)/new-collection/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": (({ r: __turbopack_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_dynamic__, p: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname }) => (() => {


})()),

};

//# sourceMappingURL=src_app_(Dashboard)_new-collection_84c87a._.js.map