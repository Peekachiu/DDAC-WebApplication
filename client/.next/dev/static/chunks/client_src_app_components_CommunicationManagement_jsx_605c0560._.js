(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/client/src/app/components/CommunicationManagement.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CommunicationManagement
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
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/src/app/components/ui/tabs.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/bell.js [app-client] (ecmascript) <export default as Bell>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/megaphone.js [app-client] (ecmascript) <export default as Megaphone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/info.js [app-client] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/client/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
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
;
function CommunicationManagement(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(196);
    if ($[0] !== "6b378c01730398d7b8999e3c41cfd3c7369142f246037e9a94642d19bdf245ef") {
        for(let $i = 0; $i < 196; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "6b378c01730398d7b8999e3c41cfd3c7369142f246037e9a94642d19bdf245ef";
    }
    const { user } = t0;
    const isAdmin = user.role === "Admin";
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = [
            {
                id: "ANN-001",
                title: "Scheduled Water Maintenance",
                message: "Water supply will be temporarily suspended on November 1st from 9 AM to 3 PM for maintenance work. Please plan accordingly.",
                type: "warning",
                audience: "all",
                scheduledDate: "2025-10-25",
                createdBy: "Admin",
                status: "sent",
                sentDate: "2025-10-25",
                recipients: 150
            },
            {
                id: "ANN-002",
                title: "Community Diwali Celebration",
                message: "Join us for our annual Diwali celebration on November 10th at 6 PM in the Main Event Hall. All residents are welcome!",
                type: "event",
                audience: "all",
                scheduledDate: "2025-10-28",
                createdBy: "Admin",
                status: "scheduled",
                recipients: 150
            },
            {
                id: "ANN-003",
                title: "Elevator Maintenance - Tower A",
                message: "Elevator #1 in Tower A will be under maintenance from Oct 30 to Nov 2. Please use the alternate elevator. We apologize for any inconvenience.",
                type: "info",
                audience: "building-a",
                scheduledDate: "2025-10-29",
                createdBy: "Admin",
                status: "scheduled",
                recipients: 48
            },
            {
                id: "ANN-004",
                title: "Security Alert - Package Thefts",
                message: "Please be vigilant about package deliveries. Report any suspicious activity to security immediately.",
                type: "urgent",
                audience: "all",
                scheduledDate: "2025-10-22",
                createdBy: "Admin",
                status: "sent",
                sentDate: "2025-10-22",
                recipients: 150
            },
            {
                id: "ANN-005",
                title: "Parking Policy Update",
                message: "New parking policy will be effective from November 15th. All vehicles must display parking permits. Please collect your permits from the office.",
                type: "info",
                audience: "all",
                scheduledDate: "2025-10-20",
                createdBy: "Admin",
                status: "sent",
                sentDate: "2025-10-20",
                recipients: 150
            }
        ];
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const [announcements, setAnnouncements] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [isAnnouncementDialogOpen, setIsAnnouncementDialogOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingAnnouncement, setEditingAnnouncement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = {
            title: "",
            message: "",
            type: "info",
            audience: "all",
            scheduledDate: ""
        };
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    const [newAnnouncement, setNewAnnouncement] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t2);
    let t3;
    if ($[3] !== announcements || $[4] !== editingAnnouncement || $[5] !== newAnnouncement.audience || $[6] !== newAnnouncement.message || $[7] !== newAnnouncement.scheduledDate || $[8] !== newAnnouncement.title || $[9] !== newAnnouncement.type || $[10] !== user.name) {
        t3 = ({
            "CommunicationManagement[handleCreateAnnouncement]": (e)=>{
                e.preventDefault();
                const recipientCount = newAnnouncement.audience === "all" ? 150 : 48;
                if (editingAnnouncement) {
                    setAnnouncements(announcements.map({
                        "CommunicationManagement[handleCreateAnnouncement > announcements.map()]": (a)=>a.id === editingAnnouncement.id ? {
                                ...a,
                                title: newAnnouncement.title,
                                message: newAnnouncement.message,
                                type: newAnnouncement.type,
                                audience: newAnnouncement.audience,
                                scheduledDate: newAnnouncement.scheduledDate,
                                recipients: recipientCount
                            } : a
                    }["CommunicationManagement[handleCreateAnnouncement > announcements.map()]"]));
                    __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Announcement updated successfully!");
                } else {
                    const announcement = {
                        id: `ANN-${(announcements.length + 1).toString().padStart(3, "0")}`,
                        title: newAnnouncement.title,
                        message: newAnnouncement.message,
                        type: newAnnouncement.type,
                        audience: newAnnouncement.audience,
                        scheduledDate: newAnnouncement.scheduledDate,
                        createdBy: user.name,
                        status: new Date(newAnnouncement.scheduledDate) <= new Date() ? "sent" : "scheduled",
                        recipients: recipientCount,
                        ...new Date(newAnnouncement.scheduledDate) <= new Date() && {
                            sentDate: new Date().toISOString().split("T")[0]
                        }
                    };
                    setAnnouncements([
                        announcement,
                        ...announcements
                    ]);
                    __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Announcement created successfully!");
                }
                setNewAnnouncement({
                    title: "",
                    message: "",
                    type: "info",
                    audience: "all",
                    scheduledDate: ""
                });
                setEditingAnnouncement(null);
                setIsAnnouncementDialogOpen(false);
            }
        })["CommunicationManagement[handleCreateAnnouncement]"];
        $[3] = announcements;
        $[4] = editingAnnouncement;
        $[5] = newAnnouncement.audience;
        $[6] = newAnnouncement.message;
        $[7] = newAnnouncement.scheduledDate;
        $[8] = newAnnouncement.title;
        $[9] = newAnnouncement.type;
        $[10] = user.name;
        $[11] = t3;
    } else {
        t3 = $[11];
    }
    const handleCreateAnnouncement = t3;
    let t4;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ({
            "CommunicationManagement[handleEditAnnouncement]": (announcement_0)=>{
                setEditingAnnouncement(announcement_0);
                setNewAnnouncement({
                    title: announcement_0.title,
                    message: announcement_0.message,
                    type: announcement_0.type,
                    audience: announcement_0.audience,
                    scheduledDate: announcement_0.scheduledDate
                });
                setIsAnnouncementDialogOpen(true);
            }
        })["CommunicationManagement[handleEditAnnouncement]"];
        $[12] = t4;
    } else {
        t4 = $[12];
    }
    const handleEditAnnouncement = t4;
    let t5;
    if ($[13] !== announcements) {
        t5 = ({
            "CommunicationManagement[handleSendNow]": (id)=>{
                setAnnouncements(announcements.map({
                    "CommunicationManagement[handleSendNow > announcements.map()]": (a_0)=>a_0.id === id ? {
                            ...a_0,
                            status: "sent",
                            sentDate: new Date().toISOString().split("T")[0]
                        } : a_0
                }["CommunicationManagement[handleSendNow > announcements.map()]"]));
                __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Announcement sent to all residents!");
            }
        })["CommunicationManagement[handleSendNow]"];
        $[13] = announcements;
        $[14] = t5;
    } else {
        t5 = $[14];
    }
    const handleSendNow = t5;
    let t6;
    if ($[15] !== announcements) {
        t6 = ({
            "CommunicationManagement[handleDeleteAnnouncement]": (id_0)=>{
                if (window.confirm("Are you sure you want to delete this announcement?")) {
                    setAnnouncements(announcements.filter({
                        "CommunicationManagement[handleDeleteAnnouncement > announcements.filter()]": (a_1)=>a_1.id !== id_0
                    }["CommunicationManagement[handleDeleteAnnouncement > announcements.filter()]"]));
                    __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Announcement deleted!");
                }
            }
        })["CommunicationManagement[handleDeleteAnnouncement]"];
        $[15] = announcements;
        $[16] = t6;
    } else {
        t6 = $[16];
    }
    const handleDeleteAnnouncement = t6;
    const getTypeBadge = _CommunicationManagementGetTypeBadge;
    const getStatusBadge = _CommunicationManagementGetStatusBadge;
    const getAudienceText = _CommunicationManagementGetAudienceText;
    let t7;
    if ($[17] !== announcements) {
        t7 = announcements.filter(_CommunicationManagementAnnouncementsFilter);
        $[17] = announcements;
        $[18] = t7;
    } else {
        t7 = $[18];
    }
    const sentCount = t7.length;
    let t8;
    if ($[19] !== announcements) {
        t8 = announcements.filter(_CommunicationManagementAnnouncementsFilter2);
        $[19] = announcements;
        $[20] = t8;
    } else {
        t8 = $[20];
    }
    const scheduledCount = t8.length;
    let t9;
    if ($[21] !== announcements) {
        t9 = announcements.filter(_CommunicationManagementAnnouncementsFilter3).reduce(_CommunicationManagementAnonymous, 0);
        $[21] = announcements;
        $[22] = t9;
    } else {
        t9 = $[22];
    }
    const totalRecipients = t9;
    if (!isAdmin) {
        let T0;
        let T1;
        let t10;
        let t11;
        let t12;
        let t13;
        let t14;
        if ($[23] !== announcements) {
            const residentAnnouncements = announcements.filter(_CommunicationManagementAnnouncementsFilter4);
            t13 = "space-y-6";
            if ($[31] === Symbol.for("react.memo_cache_sentinel")) {
                t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            children: "Notifications & Announcements"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                            lineNumber: 267,
                            columnNumber: 20
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600",
                            children: "View important announcements and updates from management"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                            lineNumber: 267,
                            columnNumber: 62
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                    lineNumber: 267,
                    columnNumber: 15
                }, this);
                $[31] = t14;
            } else {
                t14 = $[31];
            }
            T1 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"];
            if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
                t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                        children: "Recent Announcements"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                        lineNumber: 274,
                        columnNumber: 27
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                    lineNumber: 274,
                    columnNumber: 15
                }, this);
                $[32] = t12;
            } else {
                t12 = $[32];
            }
            T0 = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"];
            t10 = "space-y-4";
            let t15;
            if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
                t15 = ({
                    "CommunicationManagement[residentAnnouncements.map()]": (announcement_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg border p-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-start justify-between",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                getTypeBadge(announcement_1.type),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs text-gray-500",
                                                    children: announcement_1.sentDate && new Date(announcement_1.sentDate).toLocaleDateString()
                                                }, void 0, false, {
                                                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                                    lineNumber: 284,
                                                    columnNumber: 303
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                            lineNumber: 284,
                                            columnNumber: 222
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg mb-2",
                                            children: announcement_1.title
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                            lineNumber: 284,
                                            columnNumber: 439
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600",
                                            children: announcement_1.message
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                            lineNumber: 284,
                                            columnNumber: 495
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                    lineNumber: 284,
                                    columnNumber: 198
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                lineNumber: 284,
                                columnNumber: 148
                            }, this)
                        }, announcement_1.id, false, {
                            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                            lineNumber: 284,
                            columnNumber: 85
                        }, this)
                })["CommunicationManagement[residentAnnouncements.map()]"];
                $[33] = t15;
            } else {
                t15 = $[33];
            }
            t11 = residentAnnouncements.map(t15);
            $[23] = announcements;
            $[24] = T0;
            $[25] = T1;
            $[26] = t10;
            $[27] = t11;
            $[28] = t12;
            $[29] = t13;
            $[30] = t14;
        } else {
            T0 = $[24];
            T1 = $[25];
            t10 = $[26];
            t11 = $[27];
            t12 = $[28];
            t13 = $[29];
            t14 = $[30];
        }
        let t15;
        if ($[34] !== t10 || $[35] !== t11) {
            t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t10,
                children: t11
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                lineNumber: 310,
                columnNumber: 13
            }, this);
            $[34] = t10;
            $[35] = t11;
            $[36] = t15;
        } else {
            t15 = $[36];
        }
        let t16;
        if ($[37] !== T0 || $[38] !== t15) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T0, {
                children: t15
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                lineNumber: 319,
                columnNumber: 13
            }, this);
            $[37] = T0;
            $[38] = t15;
            $[39] = t16;
        } else {
            t16 = $[39];
        }
        let t17;
        if ($[40] !== T1 || $[41] !== t12 || $[42] !== t16) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(T1, {
                children: [
                    t12,
                    t16
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                lineNumber: 328,
                columnNumber: 13
            }, this);
            $[40] = T1;
            $[41] = t12;
            $[42] = t16;
            $[43] = t17;
        } else {
            t17 = $[43];
        }
        let t18;
        if ($[44] !== t13 || $[45] !== t14 || $[46] !== t17) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: t13,
                children: [
                    t14,
                    t17
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                lineNumber: 338,
                columnNumber: 13
            }, this);
            $[44] = t13;
            $[45] = t14;
            $[46] = t17;
            $[47] = t18;
        } else {
            t18 = $[47];
        }
        return t18;
    }
    let t10;
    if ($[48] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Communication & Notifications"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                    lineNumber: 350,
                    columnNumber: 16
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-600",
                    children: "Create and manage system-wide announcements and notifications"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                    lineNumber: 350,
                    columnNumber: 58
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 350,
            columnNumber: 11
        }, this);
        $[48] = t10;
    } else {
        t10 = $[48];
    }
    let t11;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTrigger"], {
            asChild: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                        className: "mr-2 h-4 w-4"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                        lineNumber: 357,
                        columnNumber: 49
                    }, this),
                    "Create Announcement"
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                lineNumber: 357,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 357,
            columnNumber: 11
        }, this);
        $[49] = t11;
    } else {
        t11 = $[49];
    }
    const t12 = editingAnnouncement ? "Edit Announcement" : "Create New Announcement";
    let t13;
    if ($[50] !== t12) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogTitle"], {
            children: t12
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 365,
            columnNumber: 11
        }, this);
        $[50] = t12;
        $[51] = t13;
    } else {
        t13 = $[51];
    }
    const t14 = editingAnnouncement ? "Update announcement details" : "Create an announcement to send to residents";
    let t15;
    if ($[52] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogDescription"], {
            children: t14
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 374,
            columnNumber: 11
        }, this);
        $[52] = t14;
        $[53] = t15;
    } else {
        t15 = $[53];
    }
    let t16;
    if ($[54] !== t13 || $[55] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogHeader"], {
            children: [
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 382,
            columnNumber: 11
        }, this);
        $[54] = t13;
        $[55] = t15;
        $[56] = t16;
    } else {
        t16 = $[56];
    }
    let t17;
    if ($[57] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "type",
            children: "Type"
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 391,
            columnNumber: 11
        }, this);
        $[57] = t17;
    } else {
        t17 = $[57];
    }
    let t18;
    if ($[58] !== newAnnouncement) {
        t18 = ({
            "CommunicationManagement[<Select>.onValueChange]": (value)=>setNewAnnouncement({
                    ...newAnnouncement,
                    type: value
                })
        })["CommunicationManagement[<Select>.onValueChange]"];
        $[58] = newAnnouncement;
        $[59] = t18;
    } else {
        t18 = $[59];
    }
    let t19;
    if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                lineNumber: 411,
                columnNumber: 26
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 411,
            columnNumber: 11
        }, this);
        $[60] = t19;
    } else {
        t19 = $[60];
    }
    let t20;
    if ($[61] === Symbol.for("react.memo_cache_sentinel")) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "info",
                    children: "Information"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                    lineNumber: 418,
                    columnNumber: 26
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "warning",
                    children: "Warning"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                    lineNumber: 418,
                    columnNumber: 75
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "urgent",
                    children: "Urgent Alert"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                    lineNumber: 418,
                    columnNumber: 123
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "event",
                    children: "Event"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                    lineNumber: 418,
                    columnNumber: 175
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 418,
            columnNumber: 11
        }, this);
        $[61] = t20;
    } else {
        t20 = $[61];
    }
    let t21;
    if ($[62] !== newAnnouncement.type || $[63] !== t18) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t17,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    value: newAnnouncement.type,
                    onValueChange: t18,
                    required: true,
                    children: [
                        t19,
                        t20
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                    lineNumber: 425,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 425,
            columnNumber: 11
        }, this);
        $[62] = newAnnouncement.type;
        $[63] = t18;
        $[64] = t21;
    } else {
        t21 = $[64];
    }
    let t22;
    if ($[65] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "audience",
            children: "Audience"
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 434,
            columnNumber: 11
        }, this);
        $[65] = t22;
    } else {
        t22 = $[65];
    }
    let t23;
    if ($[66] !== newAnnouncement) {
        t23 = ({
            "CommunicationManagement[<Select>.onValueChange]": (value_0)=>setNewAnnouncement({
                    ...newAnnouncement,
                    audience: value_0
                })
        })["CommunicationManagement[<Select>.onValueChange]"];
        $[66] = newAnnouncement;
        $[67] = t23;
    } else {
        t23 = $[67];
    }
    let t24;
    if ($[68] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectTrigger"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectValue"], {}, void 0, false, {
                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                lineNumber: 454,
                columnNumber: 26
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 454,
            columnNumber: 11
        }, this);
        $[68] = t24;
    } else {
        t24 = $[68];
    }
    let t25;
    if ($[69] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectContent"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "all",
                    children: "All Residents (150 people)"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                    lineNumber: 461,
                    columnNumber: 26
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "building-a",
                    children: "Tower A Only (48 people)"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                    lineNumber: 461,
                    columnNumber: 89
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "building-b",
                    children: "Tower B Only (45 people)"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                    lineNumber: 461,
                    columnNumber: 157
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "building-c",
                    children: "Tower C Only (47 people)"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                    lineNumber: 461,
                    columnNumber: 225
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SelectItem"], {
                    value: "building-d",
                    children: "Tower D Only (10 people)"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                    lineNumber: 461,
                    columnNumber: 293
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 461,
            columnNumber: 11
        }, this);
        $[69] = t25;
    } else {
        t25 = $[69];
    }
    let t26;
    if ($[70] !== newAnnouncement.audience || $[71] !== t23) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t22,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$select$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Select"], {
                    value: newAnnouncement.audience,
                    onValueChange: t23,
                    required: true,
                    children: [
                        t24,
                        t25
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                    lineNumber: 468,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 468,
            columnNumber: 11
        }, this);
        $[70] = newAnnouncement.audience;
        $[71] = t23;
        $[72] = t26;
    } else {
        t26 = $[72];
    }
    let t27;
    if ($[73] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "title",
            children: "Title"
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 477,
            columnNumber: 11
        }, this);
        $[73] = t27;
    } else {
        t27 = $[73];
    }
    let t28;
    if ($[74] !== newAnnouncement) {
        t28 = ({
            "CommunicationManagement[<Input>.onChange]": (e_0)=>setNewAnnouncement({
                    ...newAnnouncement,
                    title: e_0.target.value
                })
        })["CommunicationManagement[<Input>.onChange]"];
        $[74] = newAnnouncement;
        $[75] = t28;
    } else {
        t28 = $[75];
    }
    let t29;
    if ($[76] !== newAnnouncement.title || $[77] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t27,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
                    id: "title",
                    value: newAnnouncement.title,
                    onChange: t28,
                    placeholder: "Announcement title",
                    required: true
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                    lineNumber: 497,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 497,
            columnNumber: 11
        }, this);
        $[76] = newAnnouncement.title;
        $[77] = t28;
        $[78] = t29;
    } else {
        t29 = $[78];
    }
    let t30;
    if ($[79] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "message",
            children: "Message"
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 506,
            columnNumber: 11
        }, this);
        $[79] = t30;
    } else {
        t30 = $[79];
    }
    let t31;
    if ($[80] !== newAnnouncement) {
        t31 = ({
            "CommunicationManagement[<Textarea>.onChange]": (e_1)=>setNewAnnouncement({
                    ...newAnnouncement,
                    message: e_1.target.value
                })
        })["CommunicationManagement[<Textarea>.onChange]"];
        $[80] = newAnnouncement;
        $[81] = t31;
    } else {
        t31 = $[81];
    }
    let t32;
    if ($[82] !== newAnnouncement.message || $[83] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t30,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$textarea$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Textarea"], {
                    id: "message",
                    value: newAnnouncement.message,
                    onChange: t31,
                    placeholder: "Enter your announcement message",
                    rows: 5,
                    required: true
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                    lineNumber: 526,
                    columnNumber: 43
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 526,
            columnNumber: 11
        }, this);
        $[82] = newAnnouncement.message;
        $[83] = t31;
        $[84] = t32;
    } else {
        t32 = $[84];
    }
    let t33;
    if ($[85] === Symbol.for("react.memo_cache_sentinel")) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$label$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Label"], {
            htmlFor: "scheduledDate",
            children: "Schedule Date"
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 535,
            columnNumber: 11
        }, this);
        $[85] = t33;
    } else {
        t33 = $[85];
    }
    let t34;
    if ($[86] !== newAnnouncement) {
        t34 = ({
            "CommunicationManagement[<Input>.onChange]": (e_2)=>setNewAnnouncement({
                    ...newAnnouncement,
                    scheduledDate: e_2.target.value
                })
        })["CommunicationManagement[<Input>.onChange]"];
        $[86] = newAnnouncement;
        $[87] = t34;
    } else {
        t34 = $[87];
    }
    let t35;
    if ($[88] !== newAnnouncement.scheduledDate || $[89] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$input$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Input"], {
            id: "scheduledDate",
            type: "date",
            value: newAnnouncement.scheduledDate,
            onChange: t34,
            required: true
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 555,
            columnNumber: 11
        }, this);
        $[88] = newAnnouncement.scheduledDate;
        $[89] = t34;
        $[90] = t35;
    } else {
        t35 = $[90];
    }
    let t36;
    if ($[91] === Symbol.for("react.memo_cache_sentinel")) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xs text-gray-500",
            children: "Announcements with today's date or earlier will be sent immediately"
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 564,
            columnNumber: 11
        }, this);
        $[91] = t36;
    } else {
        t36 = $[91];
    }
    let t37;
    if ($[92] !== t35) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-2",
            children: [
                t33,
                t35,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 571,
            columnNumber: 11
        }, this);
        $[92] = t35;
        $[93] = t37;
    } else {
        t37 = $[93];
    }
    let t38;
    if ($[94] === Symbol.for("react.memo_cache_sentinel")) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"], {
            className: "mr-2 h-4 w-4"
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 579,
            columnNumber: 11
        }, this);
        $[94] = t38;
    } else {
        t38 = $[94];
    }
    const t39 = editingAnnouncement ? "Update Announcement" : "Create Announcement";
    let t40;
    if ($[95] !== t39) {
        t40 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
            type: "submit",
            className: "w-full",
            children: [
                t38,
                t39
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 587,
            columnNumber: 11
        }, this);
        $[95] = t39;
        $[96] = t40;
    } else {
        t40 = $[96];
    }
    let t41;
    if ($[97] !== handleCreateAnnouncement || $[98] !== t21 || $[99] !== t26 || $[100] !== t29 || $[101] !== t32 || $[102] !== t37 || $[103] !== t40) {
        t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            onSubmit: handleCreateAnnouncement,
            className: "space-y-4",
            children: [
                t21,
                t26,
                t29,
                t32,
                t37,
                t40
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 595,
            columnNumber: 11
        }, this);
        $[97] = handleCreateAnnouncement;
        $[98] = t21;
        $[99] = t26;
        $[100] = t29;
        $[101] = t32;
        $[102] = t37;
        $[103] = t40;
        $[104] = t41;
    } else {
        t41 = $[104];
    }
    let t42;
    if ($[105] !== t16 || $[106] !== t41) {
        t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "max-w-xl",
            children: [
                t16,
                t41
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 609,
            columnNumber: 11
        }, this);
        $[105] = t16;
        $[106] = t41;
        $[107] = t42;
    } else {
        t42 = $[107];
    }
    let t43;
    if ($[108] !== isAnnouncementDialogOpen || $[109] !== t42) {
        t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-between",
            children: [
                t10,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$dialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dialog"], {
                    open: isAnnouncementDialogOpen,
                    onOpenChange: setIsAnnouncementDialogOpen,
                    children: [
                        t11,
                        t42
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                    lineNumber: 618,
                    columnNumber: 67
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 618,
            columnNumber: 11
        }, this);
        $[108] = isAnnouncementDialogOpen;
        $[109] = t42;
        $[110] = t43;
    } else {
        t43 = $[110];
    }
    let t44;
    if ($[111] === Symbol.for("react.memo_cache_sentinel")) {
        t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-600",
            children: "Total Sent"
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 627,
            columnNumber: 11
        }, this);
        $[111] = t44;
    } else {
        t44 = $[111];
    }
    let t45;
    if ($[112] !== sentCount) {
        t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-2xl text-green-600",
            children: sentCount
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 634,
            columnNumber: 11
        }, this);
        $[112] = sentCount;
        $[113] = t45;
    } else {
        t45 = $[113];
    }
    let t46;
    if ($[114] === Symbol.for("react.memo_cache_sentinel")) {
        t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-xs text-gray-500",
            children: "Announcements"
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 642,
            columnNumber: 11
        }, this);
        $[114] = t46;
    } else {
        t46 = $[114];
    }
    let t47;
    if ($[115] !== t45) {
        t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t44,
                t45,
                t46
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 649,
            columnNumber: 11
        }, this);
        $[115] = t45;
        $[116] = t47;
    } else {
        t47 = $[116];
    }
    let t48;
    if ($[117] === Symbol.for("react.memo_cache_sentinel")) {
        t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg bg-green-50 p-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                className: "h-6 w-6 text-green-600"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                lineNumber: 657,
                columnNumber: 55
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 657,
            columnNumber: 11
        }, this);
        $[117] = t48;
    } else {
        t48 = $[117];
    }
    let t49;
    if ($[118] !== t47) {
        t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        t47,
                        t48
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                    lineNumber: 664,
                    columnNumber: 46
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                lineNumber: 664,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 664,
            columnNumber: 11
        }, this);
        $[118] = t47;
        $[119] = t49;
    } else {
        t49 = $[119];
    }
    let t50;
    if ($[120] === Symbol.for("react.memo_cache_sentinel")) {
        t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-600",
            children: "Scheduled"
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 672,
            columnNumber: 11
        }, this);
        $[120] = t50;
    } else {
        t50 = $[120];
    }
    let t51;
    if ($[121] !== scheduledCount) {
        t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-2xl text-yellow-600",
            children: scheduledCount
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 679,
            columnNumber: 11
        }, this);
        $[121] = scheduledCount;
        $[122] = t51;
    } else {
        t51 = $[122];
    }
    let t52;
    if ($[123] === Symbol.for("react.memo_cache_sentinel")) {
        t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-xs text-gray-500",
            children: "Upcoming"
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 687,
            columnNumber: 11
        }, this);
        $[123] = t52;
    } else {
        t52 = $[123];
    }
    let t53;
    if ($[124] !== t51) {
        t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t50,
                t51,
                t52
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 694,
            columnNumber: 11
        }, this);
        $[124] = t51;
        $[125] = t53;
    } else {
        t53 = $[125];
    }
    let t54;
    if ($[126] === Symbol.for("react.memo_cache_sentinel")) {
        t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg bg-yellow-50 p-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                className: "h-6 w-6 text-yellow-600"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                lineNumber: 702,
                columnNumber: 56
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 702,
            columnNumber: 11
        }, this);
        $[126] = t54;
    } else {
        t54 = $[126];
    }
    let t55;
    if ($[127] !== t53) {
        t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        t53,
                        t54
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                    lineNumber: 709,
                    columnNumber: 46
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                lineNumber: 709,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 709,
            columnNumber: 11
        }, this);
        $[127] = t53;
        $[128] = t55;
    } else {
        t55 = $[128];
    }
    let t56;
    if ($[129] === Symbol.for("react.memo_cache_sentinel")) {
        t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-600",
            children: "Total Recipients"
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 717,
            columnNumber: 11
        }, this);
        $[129] = t56;
    } else {
        t56 = $[129];
    }
    let t57;
    if ($[130] !== totalRecipients) {
        t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-2xl text-blue-600",
            children: totalRecipients
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 724,
            columnNumber: 11
        }, this);
        $[130] = totalRecipients;
        $[131] = t57;
    } else {
        t57 = $[131];
    }
    let t58;
    if ($[132] === Symbol.for("react.memo_cache_sentinel")) {
        t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-xs text-gray-500",
            children: "Messages delivered"
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 732,
            columnNumber: 11
        }, this);
        $[132] = t58;
    } else {
        t58 = $[132];
    }
    let t59;
    if ($[133] !== t57) {
        t59 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t56,
                t57,
                t58
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 739,
            columnNumber: 11
        }, this);
        $[133] = t57;
        $[134] = t59;
    } else {
        t59 = $[134];
    }
    let t60;
    if ($[135] === Symbol.for("react.memo_cache_sentinel")) {
        t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg bg-blue-50 p-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                className: "h-6 w-6 text-blue-600"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                lineNumber: 747,
                columnNumber: 54
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 747,
            columnNumber: 11
        }, this);
        $[135] = t60;
    } else {
        t60 = $[135];
    }
    let t61;
    if ($[136] !== t59) {
        t61 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        t59,
                        t60
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                    lineNumber: 754,
                    columnNumber: 46
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                lineNumber: 754,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 754,
            columnNumber: 11
        }, this);
        $[136] = t59;
        $[137] = t61;
    } else {
        t61 = $[137];
    }
    let t62;
    if ($[138] === Symbol.for("react.memo_cache_sentinel")) {
        t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-600",
            children: "Total Announcements"
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 762,
            columnNumber: 11
        }, this);
        $[138] = t62;
    } else {
        t62 = $[138];
    }
    let t63;
    if ($[139] !== announcements.length) {
        t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-2xl",
            children: announcements.length
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 769,
            columnNumber: 11
        }, this);
        $[139] = announcements.length;
        $[140] = t63;
    } else {
        t63 = $[140];
    }
    let t64;
    if ($[141] === Symbol.for("react.memo_cache_sentinel")) {
        t64 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mt-1 text-xs text-gray-500",
            children: "All time"
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 777,
            columnNumber: 11
        }, this);
        $[141] = t64;
    } else {
        t64 = $[141];
    }
    let t65;
    if ($[142] !== t63) {
        t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t62,
                t63,
                t64
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 784,
            columnNumber: 11
        }, this);
        $[142] = t63;
        $[143] = t65;
    } else {
        t65 = $[143];
    }
    let t66;
    if ($[144] === Symbol.for("react.memo_cache_sentinel")) {
        t66 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-lg bg-purple-50 p-3",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$megaphone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Megaphone$3e$__["Megaphone"], {
                className: "h-6 w-6 text-purple-600"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                lineNumber: 792,
                columnNumber: 56
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 792,
            columnNumber: 11
        }, this);
        $[144] = t66;
    } else {
        t66 = $[144];
    }
    let t67;
    if ($[145] !== t65) {
        t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                className: "p-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        t65,
                        t66
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                    lineNumber: 799,
                    columnNumber: 46
                }, this)
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                lineNumber: 799,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 799,
            columnNumber: 11
        }, this);
        $[145] = t65;
        $[146] = t67;
    } else {
        t67 = $[146];
    }
    let t68;
    if ($[147] !== t49 || $[148] !== t55 || $[149] !== t61 || $[150] !== t67) {
        t68 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid gap-4 md:grid-cols-4",
            children: [
                t49,
                t55,
                t61,
                t67
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 807,
            columnNumber: 11
        }, this);
        $[147] = t49;
        $[148] = t55;
        $[149] = t61;
        $[150] = t67;
        $[151] = t68;
    } else {
        t68 = $[151];
    }
    let t69;
    if ($[152] === Symbol.for("react.memo_cache_sentinel")) {
        t69 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                children: "Announcement Management"
            }, void 0, false, {
                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                lineNumber: 818,
                columnNumber: 23
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 818,
            columnNumber: 11
        }, this);
        $[152] = t69;
    } else {
        t69 = $[152];
    }
    let t70;
    if ($[153] !== announcements.length) {
        t70 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
            value: "all",
            children: [
                "All (",
                announcements.length,
                ")"
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 825,
            columnNumber: 11
        }, this);
        $[153] = announcements.length;
        $[154] = t70;
    } else {
        t70 = $[154];
    }
    let t71;
    if ($[155] !== scheduledCount) {
        t71 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
            value: "scheduled",
            children: [
                "Scheduled (",
                scheduledCount,
                ")"
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 833,
            columnNumber: 11
        }, this);
        $[155] = scheduledCount;
        $[156] = t71;
    } else {
        t71 = $[156];
    }
    let t72;
    if ($[157] !== sentCount) {
        t72 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsTrigger"], {
            value: "sent",
            children: [
                "Sent (",
                sentCount,
                ")"
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 841,
            columnNumber: 11
        }, this);
        $[157] = sentCount;
        $[158] = t72;
    } else {
        t72 = $[158];
    }
    let t73;
    if ($[159] !== t70 || $[160] !== t71 || $[161] !== t72) {
        t73 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsList"], {
            children: [
                t70,
                t71,
                t72
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 849,
            columnNumber: 11
        }, this);
        $[159] = t70;
        $[160] = t71;
        $[161] = t72;
        $[162] = t73;
    } else {
        t73 = $[162];
    }
    let t74;
    if ($[163] === Symbol.for("react.memo_cache_sentinel")) {
        t74 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        children: "ID"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                        lineNumber: 859,
                        columnNumber: 34
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        children: "Title"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                        lineNumber: 859,
                        columnNumber: 59
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        children: "Type"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                        lineNumber: 859,
                        columnNumber: 87
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        children: "Audience"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                        lineNumber: 859,
                        columnNumber: 114
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        children: "Scheduled"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                        lineNumber: 859,
                        columnNumber: 145
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        children: "Status"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                        lineNumber: 859,
                        columnNumber: 177
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        children: "Recipients"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                        lineNumber: 859,
                        columnNumber: 206
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        children: "Actions"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                        lineNumber: 859,
                        columnNumber: 239
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                lineNumber: 859,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 859,
            columnNumber: 11
        }, this);
        $[163] = t74;
    } else {
        t74 = $[163];
    }
    let t75;
    if ($[164] !== announcements || $[165] !== handleDeleteAnnouncement || $[166] !== handleSendNow) {
        let t76;
        if ($[168] !== handleDeleteAnnouncement || $[169] !== handleSendNow) {
            t76 = ({
                "CommunicationManagement[announcements.map()]": (announcement_2)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: announcement_2.id
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                lineNumber: 869,
                                columnNumber: 109
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                className: "max-w-xs truncate",
                                children: announcement_2.title
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                lineNumber: 869,
                                columnNumber: 151
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: getTypeBadge(announcement_2.type)
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                lineNumber: 869,
                                columnNumber: 226
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: getAudienceText(announcement_2.audience)
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                lineNumber: 869,
                                columnNumber: 284
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: new Date(announcement_2.scheduledDate).toLocaleDateString()
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                lineNumber: 869,
                                columnNumber: 349
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: getStatusBadge(announcement_2.status)
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                lineNumber: 869,
                                columnNumber: 433
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: announcement_2.recipients
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                lineNumber: 869,
                                columnNumber: 495
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        announcement_2.status === "scheduled" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "sm",
                                                    onClick: {
                                                        "CommunicationManagement[announcements.map() > <Button>.onClick]": ()=>handleSendNow(announcement_2.id)
                                                    }["CommunicationManagement[announcements.map() > <Button>.onClick]"],
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                            className: "mr-1 h-3 w-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                                            lineNumber: 871,
                                                            columnNumber: 87
                                                        }, this),
                                                        "Send Now"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                                    lineNumber: 869,
                                                    columnNumber: 628
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                                    size: "sm",
                                                    variant: "outline",
                                                    onClick: {
                                                        "CommunicationManagement[announcements.map() > <Button>.onClick]": ()=>handleEditAnnouncement(announcement_2)
                                                    }["CommunicationManagement[announcements.map() > <Button>.onClick]"],
                                                    children: "Edit"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                                    lineNumber: 871,
                                                    columnNumber: 137
                                                }, this)
                                            ]
                                        }, void 0, true),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "outline",
                                            onClick: {
                                                "CommunicationManagement[announcements.map() > <Button>.onClick]": ()=>handleDeleteAnnouncement(announcement_2.id)
                                            }["CommunicationManagement[announcements.map() > <Button>.onClick]"],
                                            children: "Delete"
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                            lineNumber: 873,
                                            columnNumber: 104
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                    lineNumber: 869,
                                    columnNumber: 556
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                lineNumber: 869,
                                columnNumber: 545
                            }, this)
                        ]
                    }, announcement_2.id, true, {
                        fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                        lineNumber: 869,
                        columnNumber: 75
                    }, this)
            })["CommunicationManagement[announcements.map()]"];
            $[168] = handleDeleteAnnouncement;
            $[169] = handleSendNow;
            $[170] = t76;
        } else {
            t76 = $[170];
        }
        t75 = announcements.map(t76);
        $[164] = announcements;
        $[165] = handleDeleteAnnouncement;
        $[166] = handleSendNow;
        $[167] = t75;
    } else {
        t75 = $[167];
    }
    let t76;
    if ($[171] !== t75) {
        t76 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
            value: "all",
            className: "mt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                children: [
                    t74,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                        children: t75
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                        lineNumber: 893,
                        columnNumber: 65
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                lineNumber: 893,
                columnNumber: 53
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 893,
            columnNumber: 11
        }, this);
        $[171] = t75;
        $[172] = t76;
    } else {
        t76 = $[172];
    }
    let t77;
    if ($[173] === Symbol.for("react.memo_cache_sentinel")) {
        t77 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        children: "Title"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                        lineNumber: 901,
                        columnNumber: 34
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        children: "Type"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                        lineNumber: 901,
                        columnNumber: 62
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        children: "Audience"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                        lineNumber: 901,
                        columnNumber: 89
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        children: "Scheduled Date"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                        lineNumber: 901,
                        columnNumber: 120
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        children: "Recipients"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                        lineNumber: 901,
                        columnNumber: 157
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        children: "Actions"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                        lineNumber: 901,
                        columnNumber: 190
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                lineNumber: 901,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 901,
            columnNumber: 11
        }, this);
        $[173] = t77;
    } else {
        t77 = $[173];
    }
    let t78;
    if ($[174] !== announcements || $[175] !== handleSendNow) {
        let t79;
        if ($[177] !== handleSendNow) {
            t79 = ({
                "CommunicationManagement[(anonymous)()]": (announcement_3)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: announcement_3.title
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                lineNumber: 911,
                                columnNumber: 103
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: getTypeBadge(announcement_3.type)
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                lineNumber: 911,
                                columnNumber: 148
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: getAudienceText(announcement_3.audience)
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                lineNumber: 911,
                                columnNumber: 206
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: new Date(announcement_3.scheduledDate).toLocaleDateString()
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                lineNumber: 911,
                                columnNumber: 271
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: announcement_3.recipients
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                lineNumber: 911,
                                columnNumber: 355
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            onClick: {
                                                "CommunicationManagement[(anonymous)() > <Button>.onClick]": ()=>handleSendNow(announcement_3.id)
                                            }["CommunicationManagement[(anonymous)() > <Button>.onClick]"],
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"], {
                                                    className: "mr-1 h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                                    lineNumber: 913,
                                                    columnNumber: 79
                                                }, this),
                                                "Send Now"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                            lineNumber: 911,
                                            columnNumber: 444
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$button$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                                            size: "sm",
                                            variant: "outline",
                                            onClick: {
                                                "CommunicationManagement[(anonymous)() > <Button>.onClick]": ()=>handleEditAnnouncement(announcement_3)
                                            }["CommunicationManagement[(anonymous)() > <Button>.onClick]"],
                                            children: "Edit"
                                        }, void 0, false, {
                                            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                            lineNumber: 913,
                                            columnNumber: 129
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                    lineNumber: 911,
                                    columnNumber: 416
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                lineNumber: 911,
                                columnNumber: 405
                            }, this)
                        ]
                    }, announcement_3.id, true, {
                        fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                        lineNumber: 911,
                        columnNumber: 69
                    }, this)
            })["CommunicationManagement[(anonymous)()]"];
            $[177] = handleSendNow;
            $[178] = t79;
        } else {
            t79 = $[178];
        }
        t78 = announcements.filter(_CommunicationManagementAnnouncementsFilter5).map(t79);
        $[174] = announcements;
        $[175] = handleSendNow;
        $[176] = t78;
    } else {
        t78 = $[176];
    }
    let t79;
    if ($[179] !== t78) {
        t79 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
            value: "scheduled",
            className: "mt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                children: [
                    t77,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                        children: t78
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                        lineNumber: 931,
                        columnNumber: 71
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                lineNumber: 931,
                columnNumber: 59
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 931,
            columnNumber: 11
        }, this);
        $[179] = t78;
        $[180] = t79;
    } else {
        t79 = $[180];
    }
    let t80;
    if ($[181] === Symbol.for("react.memo_cache_sentinel")) {
        t80 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHeader"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        children: "Title"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                        lineNumber: 939,
                        columnNumber: 34
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        children: "Type"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                        lineNumber: 939,
                        columnNumber: 62
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        children: "Audience"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                        lineNumber: 939,
                        columnNumber: 89
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        children: "Sent Date"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                        lineNumber: 939,
                        columnNumber: 120
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        children: "Recipients"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                        lineNumber: 939,
                        columnNumber: 152
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableHead"], {
                        children: "Message"
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                        lineNumber: 939,
                        columnNumber: 185
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                lineNumber: 939,
                columnNumber: 24
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 939,
            columnNumber: 11
        }, this);
        $[181] = t80;
    } else {
        t80 = $[181];
    }
    let t81;
    if ($[182] !== announcements) {
        let t82;
        if ($[184] === Symbol.for("react.memo_cache_sentinel")) {
            t82 = ({
                "CommunicationManagement[(anonymous)()]": (announcement_4)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableRow"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: announcement_4.title
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                lineNumber: 949,
                                columnNumber: 103
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: getTypeBadge(announcement_4.type)
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                lineNumber: 949,
                                columnNumber: 148
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: getAudienceText(announcement_4.audience)
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                lineNumber: 949,
                                columnNumber: 206
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: announcement_4.sentDate && new Date(announcement_4.sentDate).toLocaleDateString()
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                lineNumber: 949,
                                columnNumber: 271
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                children: announcement_4.recipients
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                lineNumber: 949,
                                columnNumber: 377
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableCell"], {
                                className: "max-w-xs truncate",
                                children: announcement_4.message
                            }, void 0, false, {
                                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                                lineNumber: 949,
                                columnNumber: 427
                            }, this)
                        ]
                    }, announcement_4.id, true, {
                        fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                        lineNumber: 949,
                        columnNumber: 69
                    }, this)
            })["CommunicationManagement[(anonymous)()]"];
            $[184] = t82;
        } else {
            t82 = $[184];
        }
        t81 = announcements.filter(_CommunicationManagementAnnouncementsFilter6).map(t82);
        $[182] = announcements;
        $[183] = t81;
    } else {
        t81 = $[183];
    }
    let t82;
    if ($[185] !== t81) {
        t82 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TabsContent"], {
            value: "sent",
            className: "mt-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Table"], {
                children: [
                    t80,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$table$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TableBody"], {
                        children: t81
                    }, void 0, false, {
                        fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                        lineNumber: 963,
                        columnNumber: 66
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                lineNumber: 963,
                columnNumber: 54
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 963,
            columnNumber: 11
        }, this);
        $[185] = t81;
        $[186] = t82;
    } else {
        t82 = $[186];
    }
    let t83;
    if ($[187] !== t73 || $[188] !== t76 || $[189] !== t79 || $[190] !== t82) {
        t83 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            children: [
                t69,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$card$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$tabs$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tabs"], {
                        defaultValue: "all",
                        children: [
                            t73,
                            t76,
                            t79,
                            t82
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                        lineNumber: 971,
                        columnNumber: 35
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                    lineNumber: 971,
                    columnNumber: 22
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 971,
            columnNumber: 11
        }, this);
        $[187] = t73;
        $[188] = t76;
        $[189] = t79;
        $[190] = t82;
        $[191] = t83;
    } else {
        t83 = $[191];
    }
    let t84;
    if ($[192] !== t43 || $[193] !== t68 || $[194] !== t83) {
        t84 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-6",
            children: [
                t43,
                t68,
                t83
            ]
        }, void 0, true, {
            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
            lineNumber: 982,
            columnNumber: 11
        }, this);
        $[192] = t43;
        $[193] = t68;
        $[194] = t83;
        $[195] = t84;
    } else {
        t84 = $[195];
    }
    return t84;
}
_s(CommunicationManagement, "iCbN3vcQRnzimmSKwEoJ4XjmLyo=");
_c = CommunicationManagement;
function _CommunicationManagementAnnouncementsFilter6(a_8) {
    return a_8.status === "sent";
}
function _CommunicationManagementAnnouncementsFilter5(a_7) {
    return a_7.status === "scheduled";
}
function _CommunicationManagementAnnouncementsFilter4(a_6) {
    return a_6.status === "sent" && (a_6.audience === "all" || a_6.audience === "building-a");
}
function _CommunicationManagementAnonymous(sum, a_5) {
    return sum + a_5.recipients;
}
function _CommunicationManagementAnnouncementsFilter3(a_4) {
    return a_4.status === "sent";
}
function _CommunicationManagementAnnouncementsFilter2(a_3) {
    return a_3.status === "scheduled";
}
function _CommunicationManagementAnnouncementsFilter(a_2) {
    return a_2.status === "sent";
}
function _CommunicationManagementGetAudienceText(audience) {
    switch(audience){
        case "all":
            {
                return "All Residents";
            }
        case "building-a":
            {
                return "Tower A Only";
            }
        case "building-b":
            {
                return "Tower B Only";
            }
        case "building-c":
            {
                return "Tower C Only";
            }
        case "building-d":
            {
                return "Tower D Only";
            }
        default:
            {
                return audience;
            }
    }
}
function _CommunicationManagementGetStatusBadge(status) {
    switch(status){
        case "draft":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-gray-100 text-gray-800",
                    children: "Draft"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                    lineNumber: 1045,
                    columnNumber: 16
                }, this);
            }
        case "scheduled":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-yellow-100 text-yellow-800",
                    children: "Scheduled"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                    lineNumber: 1049,
                    columnNumber: 16
                }, this);
            }
        case "sent":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-green-100 text-green-800",
                    children: "Sent"
                }, void 0, false, {
                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                    lineNumber: 1053,
                    columnNumber: 16
                }, this);
            }
        default:
            {
                return null;
            }
    }
}
function _CommunicationManagementGetTypeBadge(type) {
    switch(type){
        case "info":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-blue-100 text-blue-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                            className: "mr-1 h-3 w-3"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                            lineNumber: 1065,
                            columnNumber: 61
                        }, this),
                        "Info"
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                    lineNumber: 1065,
                    columnNumber: 16
                }, this);
            }
        case "warning":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-orange-100 text-orange-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                            className: "mr-1 h-3 w-3"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                            lineNumber: 1069,
                            columnNumber: 65
                        }, this),
                        "Warning"
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                    lineNumber: 1069,
                    columnNumber: 16
                }, this);
            }
        case "urgent":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-red-100 text-red-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Bell$3e$__["Bell"], {
                            className: "mr-1 h-3 w-3"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                            lineNumber: 1073,
                            columnNumber: 59
                        }, this),
                        "Urgent"
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                    lineNumber: 1073,
                    columnNumber: 16
                }, this);
            }
        case "event":
            {
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$src$2f$app$2f$components$2f$ui$2f$badge$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Badge"], {
                    className: "bg-purple-100 text-purple-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                            className: "mr-1 h-3 w-3"
                        }, void 0, false, {
                            fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                            lineNumber: 1077,
                            columnNumber: 65
                        }, this),
                        "Event"
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/src/app/components/CommunicationManagement.jsx",
                    lineNumber: 1077,
                    columnNumber: 16
                }, this);
            }
        default:
            {
                return null;
            }
    }
}
var _c;
__turbopack_context__.k.register(_c, "CommunicationManagement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=client_src_app_components_CommunicationManagement_jsx_605c0560._.js.map