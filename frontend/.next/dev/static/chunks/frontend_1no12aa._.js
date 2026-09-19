(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/frontend/components/reader/contents-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ContentsPanel",
    ()=>ContentsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/document.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ui.tsx [app-client] (ecmascript)");
"use client";
;
;
;
const headings = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["documentNodes"].filter((n)=>n.type === "heading");
function ContentsPanel({ activeId, onJump }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-dashed border-line px-4 py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MicroLabel"], {
                    children: "Contents"
                }, void 0, false, {
                    fileName: "[project]/frontend/components/reader/contents-panel.tsx",
                    lineNumber: 17,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/reader/contents-panel.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                "data-lenis-prevent": true,
                className: "flex-1 overflow-y-auto px-2 py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex flex-col",
                    children: headings.map((h)=>{
                        const isActive = activeId === h.id;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>onJump(h.id),
                                className: [
                                    "flex w-full items-baseline gap-2 border-l-2 py-1.5 pr-2 text-left text-[13px] transition-colors",
                                    h.level === 1 ? "pl-3 font-semibold" : "pl-6",
                                    isActive ? "border-ink bg-surface-muted text-ink" : "border-transparent text-ink-secondary hover:text-ink"
                                ].join(" "),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "line-clamp-2",
                                    children: h.content
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/reader/contents-panel.tsx",
                                    lineNumber: 35,
                                    columnNumber: 19
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/reader/contents-panel.tsx",
                                lineNumber: 25,
                                columnNumber: 17
                            }, this)
                        }, h.id, false, {
                            fileName: "[project]/frontend/components/reader/contents-panel.tsx",
                            lineNumber: 24,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/frontend/components/reader/contents-panel.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/reader/contents-panel.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t border-dashed border-line px-4 py-3",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "caption text-ink-muted",
                    children: [
                        headings.length,
                        " sections · reconstructed structure"
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/components/reader/contents-panel.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/reader/contents-panel.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/reader/contents-panel.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = ContentsPanel;
var _c;
__turbopack_context__.k.register(_c, "ContentsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/reader/controls-panel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ControlsPanel",
    ()=>ControlsPanel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$reading$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/reading-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$profiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/profiles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function ControlsPanel() {
    _s();
    const { settings, setSetting, reset, profileId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$reading$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReading"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-full flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between border-b border-dashed border-line px-4 py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MicroLabel"], {
                        children: "Reading Controls"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: reset,
                        className: "flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] text-ink-muted transition-colors hover:text-ink",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                                className: "h-3 w-3"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            " Reset"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-lenis-prevent": true,
                className: "flex-1 overflow-y-auto px-4 py-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Group, {
                        label: "Font",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-1.5",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$profiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FONTS"].map((f)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SegBtn, {
                                    active: settings.font === f.key,
                                    onClick: ()=>setSetting("font", f.key),
                                    style: {
                                        fontFamily: f.stack
                                    },
                                    children: f.label
                                }, f.key, false, {
                                    fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                                    lineNumber: 32,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                            lineNumber: 30,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Group, {
                        label: "Text size",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Slider, {
                            min: 14,
                            max: 28,
                            step: 1,
                            value: settings.fontSize,
                            onChange: (v)=>setSetting("fontSize", v),
                            display: `${settings.fontSize}px`
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Group, {
                        label: "Line height",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Slider, {
                            min: 1.2,
                            max: 2.4,
                            step: 0.05,
                            value: settings.lineHeight,
                            onChange: (v)=>setSetting("lineHeight", v),
                            display: settings.lineHeight.toFixed(2)
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Group, {
                        label: "Letter spacing",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Slider, {
                            min: 0,
                            max: 0.16,
                            step: 0.005,
                            value: settings.letterSpacing,
                            onChange: (v)=>setSetting("letterSpacing", v),
                            display: `${settings.letterSpacing.toFixed(3)}em`
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Group, {
                        label: "Word spacing",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Slider, {
                            min: 0,
                            max: 0.4,
                            step: 0.01,
                            value: settings.wordSpacing,
                            onChange: (v)=>setSetting("wordSpacing", v),
                            display: `${settings.wordSpacing.toFixed(2)}em`
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Group, {
                        label: "Paragraph spacing",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Slider, {
                            min: 0.8,
                            max: 2.6,
                            step: 0.1,
                            value: settings.paragraphSpacing,
                            onChange: (v)=>setSetting("paragraphSpacing", v),
                            display: `${settings.paragraphSpacing.toFixed(1)}em`
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Group, {
                        label: "Reading width",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-3 gap-1.5",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$profiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLUMNS"].map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SegBtn, {
                                    active: settings.columnWidth === c.key,
                                    onClick: ()=>setSetting("columnWidth", c.key),
                                    children: c.label
                                }, c.key, false, {
                                    fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                                    lineNumber: 98,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                            lineNumber: 96,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Group, {
                        label: "Alignment",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 gap-1.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SegBtn, {
                                    active: settings.alignment === "left",
                                    onClick: ()=>setSetting("alignment", "left"),
                                    children: "Left"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SegBtn, {
                                    active: settings.alignment === "justify",
                                    onClick: ()=>setSetting("alignment", "justify"),
                                    children: "Justify"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                            lineNumber: 110,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Group, {
                        label: "Background",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap gap-2",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$profiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BACKGROUNDS"].map((b)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSetting("background", b.key),
                                    "aria-label": b.aria,
                                    "aria-pressed": settings.background === b.key,
                                    title: b.label,
                                    className: [
                                        "h-8 w-8 border transition-transform",
                                        settings.background === b.key ? "border-ink ring-1 ring-ink ring-offset-2 ring-offset-surface" : "border-line hover:scale-105"
                                    ].join(" "),
                                    style: {
                                        backgroundColor: b.surface
                                    }
                                }, b.key, false, {
                                    fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Group, {
                        label: "Reading aids",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                    label: "Reading ruler",
                                    hint: "Highlight the line under your cursor",
                                    checked: settings.ruler,
                                    onChange: (v)=>setSetting("ruler", v)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                    label: "Focus mode",
                                    hint: "Dim everything but the active paragraph",
                                    checked: settings.focusLines > 0,
                                    onChange: (v)=>setSetting("focusLines", v ? 3 : 0)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                    label: "Highlight paragraph",
                                    hint: "Shade the paragraph you're reading",
                                    checked: settings.highlightParagraph,
                                    onChange: (v)=>setSetting("highlightParagraph", v)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                                    lineNumber: 161,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Toggle, {
                                    label: "Hide footnotes",
                                    hint: "Remove footnotes from the flow",
                                    checked: settings.hideFootnotes,
                                    onChange: (v)=>setSetting("hideFootnotes", v)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-6 border-t border-dashed border-line pt-4 caption text-ink-muted",
                        children: profileId === "custom" ? "Custom profile — your manual adjustments are active." : `Based on the ${profileLabel(profileId)} profile. Any change switches to Custom.`
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                        lineNumber: 176,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/reader/controls-panel.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}
_s(ControlsPanel, "HADbuejVHizJyWMQ7r0JVXopCtc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$reading$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReading"]
    ];
});
_c = ControlsPanel;
function profileLabel(id) {
    return id.charAt(0).toUpperCase() + id.slice(1);
}
function Group({ label, children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "micro-label mb-2.5",
                children: label
            }, void 0, false, {
                fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                lineNumber: 199,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/reader/controls-panel.tsx",
        lineNumber: 198,
        columnNumber: 5
    }, this);
}
_c1 = Group;
function SegBtn({ active, children, style, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        style: style,
        "aria-pressed": active,
        className: [
            "border px-2 py-2 text-[12px] transition-colors",
            active ? "border-ink bg-ink text-background" : "border-line text-ink hover:bg-surface-muted"
        ].join(" "),
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/components/reader/controls-panel.tsx",
        lineNumber: 217,
        columnNumber: 5
    }, this);
}
_c2 = SegBtn;
function Slider({ min, max, step, value, onChange, display }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "range",
                min: min,
                max: max,
                step: step,
                value: value,
                onChange: (e)=>onChange(Number(e.target.value)),
                className: "flex-1"
            }, void 0, false, {
                fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                lineNumber: 250,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "w-16 shrink-0 text-right font-mono text-[12px] text-ink-secondary",
                children: display
            }, void 0, false, {
                fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                lineNumber: 259,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/reader/controls-panel.tsx",
        lineNumber: 249,
        columnNumber: 5
    }, this);
}
_c3 = Slider;
function Toggle({ label, hint, checked, onChange }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        role: "switch",
        "aria-checked": checked,
        onClick: ()=>onChange(!checked),
        className: "flex items-start justify-between gap-3 border border-dashed border-line px-3 py-2.5 text-left transition-colors hover:bg-surface-muted",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "block text-[13px] font-medium text-ink",
                        children: label
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                        lineNumber: 285,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "mt-0.5 block caption text-ink-muted",
                        children: hint
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                        lineNumber: 286,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                lineNumber: 284,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": true,
                className: [
                    "mt-0.5 flex h-4 w-7 shrink-0 items-center border p-0.5 transition-colors",
                    checked ? "border-ink bg-ink" : "border-line bg-transparent"
                ].join(" "),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: [
                        "h-2.5 w-2.5 transition-transform",
                        checked ? "translate-x-3 bg-background" : "translate-x-0 bg-ink-disabled"
                    ].join(" ")
                }, void 0, false, {
                    fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                    lineNumber: 295,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/reader/controls-panel.tsx",
                lineNumber: 288,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/reader/controls-panel.tsx",
        lineNumber: 278,
        columnNumber: 5
    }, this);
}
_c4 = Toggle;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "ControlsPanel");
__turbopack_context__.k.register(_c1, "Group");
__turbopack_context__.k.register(_c2, "SegBtn");
__turbopack_context__.k.register(_c3, "Slider");
__turbopack_context__.k.register(_c4, "Toggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/reader/document-content.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DocumentContent",
    ()=>DocumentContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
"use client";
;
;
const CHART = [
    {
        region: "N. America",
        value: 62
    },
    {
        region: "Europe",
        value: 48
    },
    {
        region: "Asia",
        value: 88
    },
    {
        region: "Africa",
        value: 71
    },
    {
        region: "S. America",
        value: 55
    }
];
function DocumentContent({ nodes, settings, activeId, onActivate, registerRef }) {
    const gap = `${settings.paragraphSpacing}em`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col",
        style: {
            gap
        },
        children: nodes.map((node)=>{
            if (node.type === "footnote" && settings.hideFootnotes) return null;
            const isActive = activeId === node.id;
            const commonRef = (el)=>registerRef?.(node.id, el);
            const activeClass = isActive ? "bg-[color:currentColor]/[0.06] -mx-3 px-3" : "";
            switch(node.type){
                case "heading":
                    {
                        const size = node.level === 1 ? "text-[1.7em] font-bold" : node.level === 2 ? "text-[1.3em] font-semibold" : "text-[1.1em] font-semibold";
                        const Tag = `h${node.level ?? 2}`;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
                            ref: commonRef,
                            id: `node-${node.id}`,
                            className: `${size} scroll-mt-24 leading-tight ${activeClass}`,
                            style: {
                                marginTop: node.level === 1 ? 0 : "0.4em"
                            },
                            children: node.content
                        }, node.id, false, {
                            fileName: "[project]/frontend/components/reader/document-content.tsx",
                            lineNumber: 53,
                            columnNumber: 15
                        }, this);
                    }
                case "paragraph":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        ref: commonRef,
                        id: `node-${node.id}`,
                        onClick: ()=>onActivate?.(node.id),
                        className: `transition-colors ${onActivate ? "cursor-pointer" : ""} ${activeClass}`,
                        children: node.content
                    }, node.id, false, {
                        fileName: "[project]/frontend/components/reader/document-content.tsx",
                        lineNumber: 67,
                        columnNumber: 15
                    }, this);
                case "keyconcept":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                        ref: commonRef,
                        id: `node-${node.id}`,
                        className: `border-l-2 border-current/40 py-1 pl-4 ${activeClass}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mb-1 block text-[0.7em] font-semibold uppercase tracking-[0.15em] opacity-60",
                                children: "Key concept"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/reader/document-content.tsx",
                                lineNumber: 86,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "italic",
                                children: node.content
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/reader/document-content.tsx",
                                lineNumber: 89,
                                columnNumber: 17
                            }, this)
                        ]
                    }, node.id, true, {
                        fileName: "[project]/frontend/components/reader/document-content.tsx",
                        lineNumber: 80,
                        columnNumber: 15
                    }, this);
                case "list":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        ref: commonRef,
                        id: `node-${node.id}`,
                        className: `flex list-none flex-col ${activeClass}`,
                        style: {
                            gap: "0.5em"
                        },
                        children: node.items?.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "flex gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": true,
                                        className: "mt-[0.55em] h-[3px] w-[3px] shrink-0 bg-current opacity-70"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/reader/document-content.tsx",
                                        lineNumber: 104,
                                        columnNumber: 21
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: item
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/reader/document-content.tsx",
                                        lineNumber: 108,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/frontend/components/reader/document-content.tsx",
                                lineNumber: 103,
                                columnNumber: 19
                            }, this))
                    }, node.id, false, {
                        fileName: "[project]/frontend/components/reader/document-content.tsx",
                        lineNumber: 95,
                        columnNumber: 15
                    }, this);
                case "image":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                        ref: commonRef,
                        id: `node-${node.id}`,
                        className: activeClass,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "border border-current/20 p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mb-4 text-[0.75em] font-semibold uppercase tracking-[0.12em] opacity-70",
                                        children: node.content
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/reader/document-content.tsx",
                                        lineNumber: 123,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-end gap-3",
                                        style: {
                                            height: "8em"
                                        },
                                        role: "img",
                                        "aria-label": "GDP growth by region bar chart: Asia highest, Africa and North America mid, South America and Europe lower.",
                                        children: CHART.map((bar)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-1 flex-col items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-full bg-current opacity-80",
                                                        style: {
                                                            height: `${bar.value}%`
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/reader/document-content.tsx",
                                                        lineNumber: 137,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-[0.6em] uppercase tracking-wide opacity-60",
                                                        children: bar.region
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/components/reader/document-content.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, bar.region, true, {
                                                fileName: "[project]/frontend/components/reader/document-content.tsx",
                                                lineNumber: 133,
                                                columnNumber: 23
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/reader/document-content.tsx",
                                        lineNumber: 126,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/reader/document-content.tsx",
                                lineNumber: 122,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "mt-2 inline-flex items-center gap-1.5 text-[0.7em] uppercase tracking-[0.12em] opacity-70",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "h-3 w-3"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/reader/document-content.tsx",
                                        lineNumber: 149,
                                        columnNumber: 19
                                    }, this),
                                    " Alt text added"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/reader/document-content.tsx",
                                lineNumber: 148,
                                columnNumber: 17
                            }, this)
                        ]
                    }, node.id, true, {
                        fileName: "[project]/frontend/components/reader/document-content.tsx",
                        lineNumber: 116,
                        columnNumber: 15
                    }, this);
                case "caption":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        ref: commonRef,
                        id: `node-${node.id}`,
                        className: `text-[0.8em] opacity-70 ${activeClass}`,
                        children: node.content
                    }, node.id, false, {
                        fileName: "[project]/frontend/components/reader/document-content.tsx",
                        lineNumber: 156,
                        columnNumber: 15
                    }, this);
                case "table":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("figure", {
                        ref: commonRef,
                        id: `node-${node.id}`,
                        "data-lenis-prevent": true,
                        className: `overflow-x-auto ${activeClass}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "w-full border-collapse text-[0.85em]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: node.table?.headers.map((h)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: "border border-current/20 px-3 py-2 text-left font-semibold",
                                                children: h
                                            }, h, false, {
                                                fileName: "[project]/frontend/components/reader/document-content.tsx",
                                                lineNumber: 179,
                                                columnNumber: 25
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/reader/document-content.tsx",
                                        lineNumber: 177,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/reader/document-content.tsx",
                                    lineNumber: 176,
                                    columnNumber: 19
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: node.table?.rows.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            children: row.map((cell, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: "border border-current/20 px-3 py-2",
                                                    children: cell
                                                }, j, false, {
                                                    fileName: "[project]/frontend/components/reader/document-content.tsx",
                                                    lineNumber: 192,
                                                    columnNumber: 27
                                                }, this))
                                        }, i, false, {
                                            fileName: "[project]/frontend/components/reader/document-content.tsx",
                                            lineNumber: 190,
                                            columnNumber: 23
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/frontend/components/reader/document-content.tsx",
                                    lineNumber: 188,
                                    columnNumber: 19
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/components/reader/document-content.tsx",
                            lineNumber: 175,
                            columnNumber: 17
                        }, this)
                    }, node.id, false, {
                        fileName: "[project]/frontend/components/reader/document-content.tsx",
                        lineNumber: 168,
                        columnNumber: 15
                    }, this);
                case "quote":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                        ref: commonRef,
                        id: `node-${node.id}`,
                        className: `border-l-2 border-current/40 pl-4 text-[1.05em] italic ${activeClass}`,
                        children: node.content
                    }, node.id, false, {
                        fileName: "[project]/frontend/components/reader/document-content.tsx",
                        lineNumber: 208,
                        columnNumber: 15
                    }, this);
                case "footnote":
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        ref: commonRef,
                        id: `node-${node.id}`,
                        className: `border-t border-current/15 pt-3 text-[0.8em] opacity-70 ${activeClass}`,
                        children: node.content
                    }, node.id, false, {
                        fileName: "[project]/frontend/components/reader/document-content.tsx",
                        lineNumber: 220,
                        columnNumber: 15
                    }, this);
                default:
                    return null;
            }
        })
    }, void 0, false, {
        fileName: "[project]/frontend/components/reader/document-content.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
_c = DocumentContent;
var _c;
__turbopack_context__.k.register(_c, "DocumentContent");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/reader/reader-shell.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReaderShell",
    ()=>ReaderShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$right$2d$close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelRightClose$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/panel-right-close.js [app-client] (ecmascript) <export default as PanelRightClose>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$right$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelRightOpen$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/panel-right-open.js [app-client] (ecmascript) <export default as PanelRightOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/rotate-ccw.js [app-client] (ecmascript) <export default as RotateCcw>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/sliders-horizontal.js [app-client] (ecmascript) <export default as SlidersHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/square.js [app-client] (ecmascript) <export default as Square>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListTree$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/lucide-react/dist/esm/icons/list-tree.js [app-client] (ecmascript) <export default as ListTree>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$reading$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/reading-provider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/document.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$reading$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/reading-styles.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$reader$2f$document$2d$content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/reader/document-content.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$reader$2f$controls$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/reader/controls-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$reader$2f$contents$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/reader/contents-panel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ui.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const readable = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["documentNodes"].filter((n)=>[
        "heading",
        "paragraph",
        "keyconcept",
        "quote",
        "caption"
    ].includes(n.type));
function ReaderShell() {
    _s();
    const { settings, ready } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$reading$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReading"])();
    const [panel, setPanel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("controls");
    const [activeId, setActiveId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(readable[0]?.id ?? null);
    const [speaking, setSpeaking] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [paused, setPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [rulerY, setRulerY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const nodeRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const registerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReaderShell.useCallback[registerRef]": (id, el)=>{
            if (el) nodeRefs.current.set(id, el);
            else nodeRefs.current.delete(id);
        }
    }["ReaderShell.useCallback[registerRef]"], []);
    const jumpTo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReaderShell.useCallback[jumpTo]": (id)=>{
            setActiveId(id);
            const el = nodeRefs.current.get(id);
            el?.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    }["ReaderShell.useCallback[jumpTo]"], []);
    const stopSpeech = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReaderShell.useCallback[stopSpeech]": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            window.speechSynthesis?.cancel();
            setSpeaking(false);
            setPaused(false);
        }
    }["ReaderShell.useCallback[stopSpeech]"], []);
    const speakFrom = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReaderShell.useCallback[speakFrom]": (startId)=>{
            if (("TURBOPACK compile-time value", "object") === "undefined" || !window.speechSynthesis) return;
            window.speechSynthesis.cancel();
            const startIdx = Math.max(0, readable.findIndex({
                "ReaderShell.useCallback[speakFrom].startIdx": (n)=>n.id === startId
            }["ReaderShell.useCallback[speakFrom].startIdx"]));
            const queue = readable.slice(startIdx);
            setSpeaking(true);
            setPaused(false);
            const speakNode = {
                "ReaderShell.useCallback[speakFrom].speakNode": (i)=>{
                    if (i >= queue.length) {
                        setSpeaking(false);
                        return;
                    }
                    const node = queue[i];
                    setActiveId(node.id);
                    nodeRefs.current.get(node.id)?.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });
                    const u = new SpeechSynthesisUtterance(node.content ?? "");
                    u.rate = 0.98;
                    u.onend = ({
                        "ReaderShell.useCallback[speakFrom].speakNode": ()=>speakNode(i + 1)
                    })["ReaderShell.useCallback[speakFrom].speakNode"];
                    u.onerror = ({
                        "ReaderShell.useCallback[speakFrom].speakNode": ()=>setSpeaking(false)
                    })["ReaderShell.useCallback[speakFrom].speakNode"];
                    window.speechSynthesis.speak(u);
                }
            }["ReaderShell.useCallback[speakFrom].speakNode"];
            speakNode(0);
        }
    }["ReaderShell.useCallback[speakFrom]"], []);
    const togglePlay = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReaderShell.useCallback[togglePlay]": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const synth = window.speechSynthesis;
            if (!synth) return;
            if (!speaking) {
                speakFrom(activeId);
            } else if (paused) {
                synth.resume();
                setPaused(false);
            } else {
                synth.pause();
                setPaused(true);
            }
        }
    }["ReaderShell.useCallback[togglePlay]"], [
        speaking,
        paused,
        activeId,
        speakFrom
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ReaderShell.useEffect": ()=>({
                "ReaderShell.useEffect": ()=>stopSpeech()
            })["ReaderShell.useEffect"]
    }["ReaderShell.useEffect"], [
        stopSpeech
    ]);
    const onCanvasMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ReaderShell.useCallback[onCanvasMove]": (e)=>{
            if (!settings.ruler) return;
            const rect = canvasRef.current?.getBoundingClientRect();
            if (!rect) return;
            setRulerY(e.clientY - rect.top);
        }
    }["ReaderShell.useCallback[onCanvasMove]"], [
        settings.ruler
    ]);
    const maxWidth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ReaderShell.useMemo[maxWidth]": ()=>`${(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$reading$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["columnCh"])(settings.columnWidth)}ch`
    }["ReaderShell.useMemo[maxWidth]"], [
        settings.columnWidth
    ]);
    const focusActive = settings.focusLines > 0 || settings.highlightParagraph;
    if (!ready) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-1 items-center justify-center py-24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "micro-label text-ink-muted",
                children: "Loading your settings…"
            }, void 0, false, {
                fileName: "[project]/frontend/components/reader/reader-shell.tsx",
                lineNumber: 129,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/components/reader/reader-shell.tsx",
            lineNumber: 128,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-1 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                "data-lenis-prevent": true,
                className: "relative flex-1 overflow-y-auto",
                style: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$reading$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["surfaceStyle"])(settings),
                ref: canvasRef,
                onMouseMove: onCanvasMove,
                onMouseLeave: ()=>setRulerY(null),
                children: [
                    settings.ruler && rulerY !== null && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        "aria-hidden": true,
                        className: "pointer-events-none absolute inset-x-0 z-10",
                        style: {
                            top: rulerY - 16,
                            height: 32,
                            background: "color-mix(in srgb, currentColor 8%, transparent)",
                            borderTop: "1px solid color-mix(in srgb, currentColor 35%, transparent)",
                            borderBottom: "1px solid color-mix(in srgb, currentColor 35%, transparent)"
                        }
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/reader/reader-shell.tsx",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "mx-auto w-full px-6 py-12 md:px-10 md:py-16",
                        style: {
                            maxWidth,
                            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$reading$2d$styles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textStyle"])(settings)
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$reader$2f$document$2d$content$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DocumentContent"], {
                                nodes: __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$document$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["documentNodes"],
                                settings: settings,
                                activeId: focusActive ? activeId : speaking ? activeId : null,
                                onActivate: setActiveId,
                                registerRef: registerRef
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/reader/reader-shell.tsx",
                                lineNumber: 163,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-16 flex flex-wrap items-center justify-between gap-4 border-t pt-6",
                                style: {
                                    borderColor: "color-mix(in srgb, currentColor 20%, transparent)"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[0.75em] uppercase tracking-[0.15em] opacity-60",
                                        children: "End of chapter"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/reader/reader-shell.tsx",
                                        lineNumber: 175,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LinkButton"], {
                                        href: "/score",
                                        variant: "secondary",
                                        children: "View accessibility score"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/components/reader/reader-shell.tsx",
                                        lineNumber: 178,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/components/reader/reader-shell.tsx",
                                lineNumber: 171,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/components/reader/reader-shell.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/reader/reader-shell.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            panel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "hidden w-[320px] shrink-0 border-l border-dashed border-line bg-surface lg:block",
                children: panel === "controls" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$reader$2f$controls$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ControlsPanel"], {}, void 0, false, {
                    fileName: "[project]/frontend/components/reader/reader-shell.tsx",
                    lineNumber: 188,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$reader$2f$contents$2d$panel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ContentsPanel"], {
                    activeId: activeId,
                    onJump: jumpTo
                }, void 0, false, {
                    fileName: "[project]/frontend/components/reader/reader-shell.tsx",
                    lineNumber: 190,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/components/reader/reader-shell.tsx",
                lineNumber: 186,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex w-12 shrink-0 flex-col items-center gap-1 border-l border-dashed border-line bg-surface py-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RailButton, {
                        label: "Reading controls",
                        active: panel === "controls",
                        onClick: ()=>setPanel((p)=>p === "controls" ? null : "controls"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sliders$2d$horizontal$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__SlidersHorizontal$3e$__["SlidersHorizontal"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/reader/reader-shell.tsx",
                            lineNumber: 201,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/reader/reader-shell.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RailButton, {
                        label: "Table of contents",
                        active: panel === "contents",
                        onClick: ()=>setPanel((p)=>p === "contents" ? null : "contents"),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2d$tree$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ListTree$3e$__["ListTree"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/reader/reader-shell.tsx",
                            lineNumber: 208,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/reader/reader-shell.tsx",
                        lineNumber: 203,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "my-1 h-px w-6 bg-line"
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/reader/reader-shell.tsx",
                        lineNumber: 211,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RailButton, {
                        label: speaking && !paused ? "Pause reading" : "Read aloud",
                        active: speaking,
                        onClick: togglePlay,
                        children: speaking && !paused ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/reader/reader-shell.tsx",
                            lineNumber: 219,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/reader/reader-shell.tsx",
                            lineNumber: 221,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/reader/reader-shell.tsx",
                        lineNumber: 213,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RailButton, {
                        label: "Stop reading",
                        onClick: stopSpeech,
                        disabled: !speaking,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Square$3e$__["Square"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/reader/reader-shell.tsx",
                            lineNumber: 225,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/reader/reader-shell.tsx",
                        lineNumber: 224,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RailButton, {
                        label: "Restart from top",
                        onClick: ()=>{
                            jumpTo(readable[0].id);
                            if (speaking) speakFrom(readable[0].id);
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rotate$2d$ccw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RotateCcw$3e$__["RotateCcw"], {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/reader/reader-shell.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/reader/reader-shell.tsx",
                        lineNumber: 227,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-auto hidden lg:flex",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(RailButton, {
                            label: panel ? "Collapse panel" : "Expand panel",
                            onClick: ()=>setPanel((p)=>p ? null : "controls"),
                            children: panel ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$right$2d$close$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelRightClose$3e$__["PanelRightClose"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/reader/reader-shell.tsx",
                                lineNumber: 243,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$panel$2d$right$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PanelRightOpen$3e$__["PanelRightOpen"], {
                                className: "h-4 w-4"
                            }, void 0, false, {
                                fileName: "[project]/frontend/components/reader/reader-shell.tsx",
                                lineNumber: 245,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/frontend/components/reader/reader-shell.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/components/reader/reader-shell.tsx",
                        lineNumber: 237,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/components/reader/reader-shell.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/components/reader/reader-shell.tsx",
        lineNumber: 135,
        columnNumber: 5
    }, this);
}
_s(ReaderShell, "R1r0eoWGH6f7LX/hnwByUy1UIUM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$reading$2d$provider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReading"]
    ];
});
_c = ReaderShell;
function RailButton({ children, label, active, disabled, onClick }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        onClick: onClick,
        disabled: disabled,
        title: label,
        "aria-label": label,
        "aria-pressed": active,
        className: [
            "flex h-9 w-9 items-center justify-center border transition-colors disabled:opacity-30",
            active ? "border-ink bg-ink text-background" : "border-transparent text-ink-secondary hover:border-line hover:bg-surface-muted hover:text-ink"
        ].join(" "),
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/components/reader/reader-shell.tsx",
        lineNumber: 268,
        columnNumber: 5
    }, this);
}
_c1 = RailButton;
var _c, _c1;
__turbopack_context__.k.register(_c, "ReaderShell");
__turbopack_context__.k.register(_c1, "RailButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/ui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "Chip",
    ()=>Chip,
    "LinkButton",
    ()=>LinkButton,
    "MicroLabel",
    ()=>MicroLabel,
    "Panel",
    ()=>Panel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/components/ui/badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/lib/utils.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/cn/dist/index.js [app-client] (ecmascript) <locals>");
;
;
;
;
;
const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
    secondary: "border border-border bg-card text-foreground hover:bg-secondary",
    ghost: "bg-transparent text-muted-foreground shadow-none hover:bg-muted hover:text-foreground"
};
const buttonBase = "h-10 rounded-xl px-4 text-[12px] font-semibold uppercase tracking-[0.1em] transition-all";
function Button({ variant = "primary", className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])(buttonBase, variants[variant], className),
        ...props
    }, void 0, false, {
        fileName: "[project]/frontend/components/ui.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
_c = Button;
function LinkButton({ variant = "primary", className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("inline-flex items-center justify-center gap-2", buttonBase, variants[variant], className),
        ...props
    }, void 0, false, {
        fileName: "[project]/frontend/components/ui.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
_c1 = LinkButton;
function MicroLabel({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("micro-label", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/components/ui.tsx",
        lineNumber: 26,
        columnNumber: 10
    }, this);
}
_c2 = MicroLabel;
function Chip({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
        variant: "secondary",
        className: "rounded-lg border-0 px-2.5 py-1 font-mono text-[10px] tracking-wide text-secondary-foreground",
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/components/ui.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
_c3 = Chip;
function Panel({ children, className, as: Tag = "div" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Tag, {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])("rounded-2xl border border-border/80 bg-card/95 shadow-[0_1px_2px_rgba(15,23,42,.04),0_12px_36px_rgba(15,23,42,.04)]", className),
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/components/ui.tsx",
        lineNumber: 34,
        columnNumber: 10
    }, this);
}
_c4 = Panel;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "Button");
__turbopack_context__.k.register(_c1, "LinkButton");
__turbopack_context__.k.register(_c2, "MicroLabel");
__turbopack_context__.k.register(_c3, "Chip");
__turbopack_context__.k.register(_c4, "Panel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/ui/badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$base$2d$ui$2f$react$2f$merge$2d$props$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@base-ui/react/merge-props/mergeProps.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$base$2d$ui$2f$react$2f$use$2d$render$2f$useRender$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@base-ui/react/use-render/useRender.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/cn/dist/index.js [app-client] (ecmascript) <locals>");
var _s = __turbopack_context__.k.signature();
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
            secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
            destructive: "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
            outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
            ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
            link: "text-primary underline-offset-4 hover:underline"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Badge({ className, variant = "default", render, ...props }) {
    _s();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$base$2d$ui$2f$react$2f$use$2d$render$2f$useRender$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"])({
        defaultTagName: "span",
        props: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$base$2d$ui$2f$react$2f$merge$2d$props$2f$mergeProps$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeProps"])({
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])(badgeVariants({
                variant
            }), className)
        }, props),
        render,
        state: {
            slot: "badge",
            variant
        }
    });
}
_s(Badge, "Yxn2JZFvED13KkqGsiyGOoQOkjM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$base$2d$ui$2f$react$2f$use$2d$render$2f$useRender$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRender"]
    ];
});
_c = Badge;
;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/components/ui/button.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$base$2d$ui$2f$react$2f$button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/@base-ui/react/button/Button.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/cn/dist/index.js [app-client] (ecmascript) <locals>");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cva"])("group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/80",
            outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
            ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
            destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            xs: "h-6 gap-1 rounded-[min(var(--radius-md),10px)] px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
            sm: "h-7 gap-1 rounded-[min(var(--radius-md),12px)] px-2.5 text-[0.8rem] in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
            lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            icon: "size-8",
            "icon-xs": "size-6 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
            "icon-sm": "size-7 rounded-[min(var(--radius-md),12px)] in-data-[slot=button-group]:rounded-lg",
            "icon-lg": "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button({ className, variant = "default", size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f40$base$2d$ui$2f$react$2f$button$2f$Button$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$cn$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/frontend/components/ui/button.tsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_c = Button;
;
var _c;
__turbopack_context__.k.register(_c, "Button");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/lib/document.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "documentMeta",
    ()=>documentMeta,
    "documentNodes",
    ()=>documentNodes,
    "documentStructure",
    ()=>documentStructure
]);
const documentMeta = {
    title: "Economic Growth and Development",
    filename: "economic-growth.pdf",
    format: "PDF",
    pages: 12,
    words: 3480,
    originalScore: 54,
    accessibleScore: 82
};
const documentNodes = [
    {
        id: "h-ch2",
        type: "heading",
        level: 1,
        content: "Chapter 2 — Economic Growth",
        page: 4,
        order: 0
    },
    {
        id: "p-1",
        type: "paragraph",
        page: 4,
        order: 1,
        content: "Economic growth is the increase in the production of goods and services in an economy over a period of time. It is conventionally measured as the percent rate of increase in real gross domestic product, or real GDP. Growth is usually calculated in real terms, adjusted for inflation, to eliminate the distorting effect of rising prices on the value of what an economy produces."
    },
    {
        id: "p-2",
        type: "paragraph",
        page: 4,
        order: 2,
        content: "Understanding growth matters because sustained increases in output per person are the primary way societies raise living standards over the long run. Even small differences in annual growth rates compound into large differences in prosperity across decades, which is why economists study the factors that drive and sustain growth so closely."
    },
    {
        id: "h-21",
        type: "heading",
        level: 2,
        content: "2.1 Introduction",
        page: 4,
        order: 3
    },
    {
        id: "p-3",
        type: "paragraph",
        page: 4,
        order: 4,
        content: "This section introduces the core vocabulary of growth economics. We distinguish between growth in total output and growth in output per capita, and we explain why the latter is the more meaningful measure of improvement in average welfare."
    },
    {
        id: "kc-1",
        type: "keyconcept",
        page: 5,
        order: 5,
        content: "Real GDP measures the value of all final goods and services produced within a country in a given period, adjusted for inflation. Growth in real GDP per capita is the standard proxy for rising living standards."
    },
    {
        id: "p-4",
        type: "paragraph",
        page: 5,
        order: 6,
        content: "It is important to note that GDP is an imperfect measure. It excludes unpaid work, does not account for the distribution of income, and says nothing directly about environmental sustainability or well-being. These limitations are the subject of ongoing debate among economists."
    },
    {
        id: "h-22",
        type: "heading",
        level: 2,
        content: "2.2 Factors Affecting Growth",
        page: 6,
        order: 7
    },
    {
        id: "p-5",
        type: "paragraph",
        page: 6,
        order: 8,
        content: "Several interrelated factors determine how quickly an economy can grow. The most frequently cited drivers fall into a small number of broad categories, each of which can be strengthened through policy, investment, and institutional reform."
    },
    {
        id: "list-1",
        type: "list",
        page: 6,
        order: 9,
        items: [
            "Capital accumulation — investment in machinery, infrastructure, and buildings.",
            "Technological progress — new methods that raise output from the same inputs.",
            "Labour force growth — more workers, and workers with better skills.",
            "Human capital — education, training, and health that raise productivity.",
            "Institutions — stable rules, property rights, and functioning markets."
        ]
    },
    {
        id: "img-1",
        type: "image",
        page: 7,
        order: 10,
        alt: null,
        content: "GDP Growth by Region, 2020–2025"
    },
    {
        id: "cap-1",
        type: "caption",
        page: 7,
        order: 11,
        content: "Figure 2.1 — GDP growth by region, 2020–2025. Source: World Bank."
    },
    {
        id: "p-6",
        type: "paragraph",
        page: 7,
        order: 12,
        content: "As Figure 2.1 shows, growth rates vary widely across regions and over time. Emerging economies frequently post higher headline growth than advanced economies, in part because they begin from a lower base and can adopt existing technologies rather than inventing new ones."
    },
    {
        id: "h-23",
        type: "heading",
        level: 2,
        content: "2.3 Measuring Growth",
        page: 8,
        order: 13
    },
    {
        id: "p-7",
        type: "paragraph",
        page: 8,
        order: 14,
        content: "The table below compares three common measures used when discussing growth. Each answers a slightly different question, and using the wrong measure can lead to misleading conclusions about how well an economy is performing."
    },
    {
        id: "tbl-1",
        type: "table",
        page: 8,
        order: 15,
        table: {
            headers: [
                "Measure",
                "What it captures",
                "Best used for"
            ],
            rows: [
                [
                    "Real GDP",
                    "Total output, inflation-adjusted",
                    "Overall economic size"
                ],
                [
                    "GDP per capita",
                    "Output per person",
                    "Average living standards"
                ],
                [
                    "GDP growth rate",
                    "Percent change over time",
                    "Momentum and cycles"
                ]
            ]
        }
    },
    {
        id: "q-1",
        type: "quote",
        page: 9,
        order: 16,
        content: "Compound growth is the most powerful force in economics: a country growing at 2% per year doubles its output roughly every 35 years."
    },
    {
        id: "p-8",
        type: "paragraph",
        page: 9,
        order: 17,
        content: "This compounding effect explains why long-run growth is such a central policy concern. Policies that raise the sustainable growth rate by even a fraction of a percentage point can, over a generation, transform the material conditions of an entire population."
    },
    {
        id: "h-24",
        type: "heading",
        level: 2,
        content: "2.4 Summary",
        page: 11,
        order: 18
    },
    {
        id: "p-9",
        type: "paragraph",
        page: 11,
        order: 19,
        content: "Economic growth expands the total output of an economy and, when it outpaces population growth, raises average living standards. It is driven by capital, technology, labour, human capital, and institutions, and it is best understood through several complementary measures rather than any single number."
    },
    {
        id: "fn-1",
        type: "footnote",
        page: 11,
        order: 20,
        content: "1. Real values are adjusted for inflation using a price deflator, allowing comparison across different years."
    }
];
const documentStructure = [
    {
        label: "Chapter 2 — Economic Growth",
        type: "H1",
        indent: 0
    },
    {
        label: "Introduction paragraphs",
        type: "P",
        indent: 1,
        count: 2
    },
    {
        label: "2.1 Introduction",
        type: "H2",
        indent: 1
    },
    {
        label: "Paragraphs",
        type: "P",
        indent: 2,
        count: 1
    },
    {
        label: "Real GDP",
        type: "KEY",
        indent: 2
    },
    {
        label: "Paragraphs",
        type: "P",
        indent: 2,
        count: 1
    },
    {
        label: "2.2 Factors Affecting Growth",
        type: "H2",
        indent: 1
    },
    {
        label: "Paragraphs",
        type: "P",
        indent: 2,
        count: 1
    },
    {
        label: "Growth factors",
        type: "LIST",
        indent: 2
    },
    {
        label: "GDP Growth by Region",
        type: "IMG",
        indent: 2
    },
    {
        label: "Figure 2.1 caption",
        type: "CAP",
        indent: 2
    },
    {
        label: "2.3 Measuring Growth",
        type: "H2",
        indent: 1
    },
    {
        label: "Comparison of measures",
        type: "TBL",
        indent: 2
    },
    {
        label: "Compound growth",
        type: "QUOTE",
        indent: 2
    },
    {
        label: "2.4 Summary",
        type: "H2",
        indent: 1
    },
    {
        label: "Footnote",
        type: "FN",
        indent: 1
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/lib/reading-styles.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "background",
    ()=>background,
    "columnCh",
    ()=>columnCh,
    "fontStack",
    ()=>fontStack,
    "surfaceStyle",
    ()=>surfaceStyle,
    "textStyle",
    ()=>textStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$profiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/profiles.ts [app-client] (ecmascript)");
;
function fontStack(key) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$profiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FONTS"].find((f)=>f.key === key)?.stack ?? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$profiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FONTS"][0].stack;
}
function background(key) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$profiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BACKGROUNDS"].find((b)=>b.key === key) ?? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$profiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BACKGROUNDS"][0];
}
function columnCh(key) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$profiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLUMNS"].find((c)=>c.key === key)?.ch ?? __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$profiles$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["COLUMNS"][0].ch;
}
function textStyle(s) {
    return {
        fontFamily: fontStack(s.font),
        fontSize: `${s.fontSize}px`,
        lineHeight: s.lineHeight,
        letterSpacing: `${s.letterSpacing}em`,
        wordSpacing: `${s.wordSpacing}em`,
        textAlign: s.alignment === "justify" ? "justify" : "left"
    };
}
function surfaceStyle(s) {
    const bg = background(s.background);
    return {
        backgroundColor: bg.surface,
        color: bg.ink
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/frontend/lib/utils.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=frontend_1no12aa._.js.map