module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/dynamic-access-async-storage.external.js [external] (next/dist/server/app-render/dynamic-access-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/dynamic-access-async-storage.external.js", () => require("next/dist/server/app-render/dynamic-access-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[project]/frontend/components/reading-provider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ReadingProvider",
    ()=>ReadingProvider,
    "useReading",
    ()=>useReading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$profiles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/lib/profiles.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
const ReadingContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(null);
const STORAGE_KEY = "readable:settings";
const PROFILE_KEY = "readable:profile";
function ReadingProvider({ children }) {
    const [settings, setSettings] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$profiles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SETTINGS"]);
    const [profileId, setProfileId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("standard");
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const raw = sessionStorage.getItem(STORAGE_KEY);
            const p = sessionStorage.getItem(PROFILE_KEY);
            if (raw) setSettings({
                ...__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$profiles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SETTINGS"],
                ...JSON.parse(raw)
            });
            if (p) setProfileId(p);
        } catch  {
        /* ignore */ }
        setReady(true);
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!ready) return;
        try {
            sessionStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
            sessionStorage.setItem(PROFILE_KEY, profileId);
        } catch  {
        /* ignore */ }
    }, [
        settings,
        profileId,
        ready
    ]);
    const setSetting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((key, value)=>{
        setSettings((prev)=>({
                ...prev,
                [key]: value
            }));
        setProfileId((prev)=>prev === "custom" ? prev : "custom");
    }, []);
    const applyProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((id)=>{
        const profile = __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$profiles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PROFILES"].find((p)=>p.id === id);
        if (!profile) return;
        setProfileId(id);
        if (id === "custom") return;
        setSettings({
            ...__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$profiles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SETTINGS"],
            ...profile.settings
        });
    }, []);
    const reset = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setSettings(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$lib$2f$profiles$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_SETTINGS"]);
        setProfileId("standard");
    }, []);
    const value = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            settings,
            profileId,
            ready,
            setSetting,
            applyProfile,
            reset
        }), [
        settings,
        profileId,
        ready,
        setSetting,
        applyProfile,
        reset
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ReadingContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/frontend/components/reading-provider.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
function useReading() {
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(ReadingContext);
    if (!ctx) throw new Error("useReading must be used within ReadingProvider");
    return ctx;
}
}),
"[project]/frontend/lib/profiles.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BACKGROUNDS",
    ()=>BACKGROUNDS,
    "COLUMNS",
    ()=>COLUMNS,
    "DEFAULT_SETTINGS",
    ()=>DEFAULT_SETTINGS,
    "FONTS",
    ()=>FONTS,
    "PROFILES",
    ()=>PROFILES
]);
const FONTS = [
    {
        key: "system",
        label: "System",
        stack: "var(--font-inter), system-ui, sans-serif"
    },
    {
        key: "lexend",
        label: "Lexend",
        stack: "var(--font-lexend), sans-serif"
    },
    {
        key: "atkinson",
        label: "Atkinson Hyperlegible",
        stack: "var(--font-atkinson), sans-serif"
    },
    {
        key: "opendyslexic",
        label: "OpenDyslexic",
        stack: '"OpenDyslexic", sans-serif'
    }
];
const BACKGROUNDS = [
    {
        key: "white",
        label: "White",
        aria: "White reading background",
        surface: "#ffffff",
        ink: "#1c1c1c"
    },
    {
        key: "warm",
        label: "Warm",
        aria: "Warm reading background",
        surface: "#f4f2ee",
        ink: "#1c1c1c"
    },
    {
        key: "green",
        label: "Green tint",
        aria: "Green tint reading background",
        surface: "#e7ede7",
        ink: "#1b241d"
    },
    {
        key: "purple",
        label: "Purple tint",
        aria: "Purple tint reading background",
        surface: "#ece8f2",
        ink: "#211d29"
    },
    {
        key: "dark",
        label: "Dark",
        aria: "Dark reading background",
        surface: "#202020",
        ink: "#f4f2ee"
    }
];
const COLUMNS = [
    {
        key: "narrow",
        label: "Narrow",
        ch: 52
    },
    {
        key: "wide",
        label: "Wide",
        ch: 68
    },
    {
        key: "full",
        label: "Full",
        ch: 92
    }
];
const DEFAULT_SETTINGS = {
    font: "system",
    fontSize: 18,
    lineHeight: 1.8,
    letterSpacing: 0.02,
    wordSpacing: 0,
    paragraphSpacing: 1.4,
    columnWidth: "narrow",
    alignment: "left",
    background: "warm",
    ruler: false,
    focusLines: 0,
    highlightParagraph: false,
    hideFootnotes: false
};
const PROFILES = [
    {
        id: "standard",
        name: "Standard",
        summary: "A clean, neutral reading layout close to the original document.",
        details: [
            "System font",
            "Normal spacing",
            "Normal width"
        ],
        settings: {
            font: "system",
            fontSize: 18,
            lineHeight: 1.7,
            letterSpacing: 0.01,
            wordSpacing: 0,
            paragraphSpacing: 1.3,
            columnWidth: "wide",
            background: "warm",
            focusLines: 0
        }
    },
    {
        id: "dyslexia",
        name: "Dyslexia Friendly",
        summary: "Increased spacing and a hyperlegible font for lower reading friction.",
        details: [
            "Lexend font",
            "Larger text",
            "Increased line height",
            "Increased letter spacing",
            "Reduced line length"
        ],
        settings: {
            font: "lexend",
            fontSize: 20,
            lineHeight: 1.9,
            letterSpacing: 0.05,
            wordSpacing: 0.16,
            paragraphSpacing: 1.6,
            columnWidth: "narrow",
            background: "warm",
            focusLines: 0
        }
    },
    {
        id: "focus",
        name: "Focus Reading",
        summary: "A narrow reading window that dims everything but the active lines.",
        details: [
            "Shorter reading window",
            "Focus mode on",
            "Reduced distraction"
        ],
        settings: {
            font: "atkinson",
            fontSize: 19,
            lineHeight: 1.85,
            letterSpacing: 0.03,
            wordSpacing: 0.08,
            paragraphSpacing: 1.5,
            columnWidth: "narrow",
            background: "warm",
            focusLines: 3,
            highlightParagraph: true
        }
    },
    {
        id: "contrast",
        name: "High Contrast",
        summary: "Maximum separation between text and background for clarity.",
        details: [
            "High contrast",
            "Clear text / background separation"
        ],
        settings: {
            font: "atkinson",
            fontSize: 19,
            lineHeight: 1.8,
            letterSpacing: 0.03,
            wordSpacing: 0.04,
            paragraphSpacing: 1.4,
            columnWidth: "wide",
            background: "dark",
            focusLines: 0
        }
    },
    {
        id: "custom",
        name: "Custom",
        summary: "Start from sensible defaults and fine-tune every control yourself.",
        details: [
            "Full manual control",
            "Adjust in the reader"
        ],
        settings: {}
    }
];
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0ssap6a._.js.map