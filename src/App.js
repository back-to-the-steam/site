"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = App;
const jsx_runtime_1 = require("react/jsx-runtime");
const Hero_1 = require("./components/Hero");
const FeatureCards_1 = require("./components/FeatureCards");
const ProjectOverview_1 = require("./components/ProjectOverview");
const Timeline_1 = require("./components/Timeline");
const Navigation_1 = require("./components/Navigation");
const TeamPage_1 = require("./components/TeamPage");
const ProjectPage_1 = require("./components/ProjectPage");
const ProgressPage_1 = require("./components/ProgressPage");
const NewsPage_1 = require("./components/NewsPage");
const EngineeringPage_1 = require("./components/EngineeringPage");
const PartnersPage_1 = require("./components/PartnersPage");
const FAQPage_1 = require("./components/FAQPage");
const AdminFAQPage_1 = require("./components/AdminFAQPage");
const react_1 = __importStar(require("react"));
function App() {
    const [currentPage, setCurrentPage] = (0, react_1.useState)('home');
    // Check hash on mount and when hash changes
    react_1.default.useEffect(() => {
        const handleHashChange = () => {
            if (window.location.hash === '#admin') {
                setCurrentPage('admin');
            }
        };
        handleHashChange(); // Check on mount
        window.addEventListener('hashchange', handleHashChange);
        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "min-h-screen bg-gray-100", children: [(0, jsx_runtime_1.jsx)(Navigation_1.Navigation, { currentPage: currentPage, onNavigate: setCurrentPage }), currentPage === 'home' && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Hero_1.Hero, {}), (0, jsx_runtime_1.jsxs)("main", { id: "workshop", className: "max-w-7xl mx-auto px-4 py-12 space-y-16", children: [(0, jsx_runtime_1.jsx)(FeatureCards_1.FeatureCards, {}), (0, jsx_runtime_1.jsx)(ProjectOverview_1.ProjectOverview, {}), (0, jsx_runtime_1.jsx)(Timeline_1.Timeline, {})] })] })), currentPage === 'project' && (0, jsx_runtime_1.jsx)(ProjectPage_1.ProjectPage, {}), currentPage === 'progress' && (0, jsx_runtime_1.jsx)(ProgressPage_1.ProgressPage, {}), currentPage === 'news' && (0, jsx_runtime_1.jsx)(NewsPage_1.NewsPage, {}), currentPage === 'team' && (0, jsx_runtime_1.jsx)(TeamPage_1.TeamPage, {}), currentPage === 'engineering' && (0, jsx_runtime_1.jsx)(EngineeringPage_1.EngineeringPage, {}), currentPage === 'partners' && (0, jsx_runtime_1.jsx)(PartnersPage_1.PartnersPage, {}), currentPage === 'faq' && (0, jsx_runtime_1.jsx)(FAQPage_1.FAQPage, {}), currentPage === 'admin' && (0, jsx_runtime_1.jsx)(AdminFAQPage_1.AdminFAQPage, {}), (0, jsx_runtime_1.jsx)("footer", { className: "bg-gray-800 text-white py-8 mt-16", children: (0, jsx_runtime_1.jsx)("div", { className: "max-w-7xl mx-auto px-4 text-center", children: (0, jsx_runtime_1.jsx)("p", { children: "\u00A9 2025 Back to the Steam - Course en Cours. Tous droits r\u00E9serv\u00E9s." }) }) })] }));
}
//# sourceMappingURL=App.js.map