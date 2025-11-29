"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Navigation = Navigation;
const jsx_runtime_1 = require("react/jsx-runtime");
const _8bf9306281aa64a8dbaee4629b299149f053197b_png_1 = __importDefault(require("figma:asset/8bf9306281aa64a8dbaee4629b299149f053197b.png"));
const lucide_react_1 = require("lucide-react");
const react_1 = require("react");
function Navigation({ currentPage, onNavigate }) {
    const [isMenuOpen, setIsMenuOpen] = (0, react_1.useState)(false);
    const navItems = [
        { page: 'home', label: 'Accueil' },
        { page: 'project', label: 'Projet' },
        { page: 'progress', label: 'Avancement' },
        { page: 'news', label: 'Actualités' },
        { page: 'team', label: 'Équipe' },
        { page: 'engineering', label: 'Ingénierie' },
        { page: 'partners', label: 'Partenaires' },
        { page: 'faq', label: 'FAQ' }
    ];
    const handleNavigate = (page) => {
        onNavigate(page);
        setIsMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return ((0, jsx_runtime_1.jsxs)("nav", { className: "bg-gray-800 text-white py-4 px-4 sticky top-0 z-50 shadow-lg", children: [(0, jsx_runtime_1.jsxs)("div", { className: "max-w-7xl mx-auto flex items-center justify-between", children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => handleNavigate('home'), className: "flex items-center gap-3 hover:opacity-80 transition-opacity", children: (0, jsx_runtime_1.jsx)("img", { src: _8bf9306281aa64a8dbaee4629b299149f053197b_png_1.default, alt: "Back to the Steam", className: "h-10 md:h-12" }) }), (0, jsx_runtime_1.jsx)("div", { className: "hidden lg:flex gap-6", children: navItems.map(item => ((0, jsx_runtime_1.jsx)("button", { onClick: () => handleNavigate(item.page), className: `hover:text-blue-400 transition-colors px-3 py-2 rounded ${currentPage === item.page ? 'text-blue-400 bg-gray-700' : ''}`, children: item.label }, item.page))) }), (0, jsx_runtime_1.jsx)("button", { className: "lg:hidden p-2 hover:bg-gray-700 rounded transition-colors", onClick: () => setIsMenuOpen(!isMenuOpen), "aria-label": "Menu", children: isMenuOpen ? (0, jsx_runtime_1.jsx)(lucide_react_1.X, { className: "w-6 h-6" }) : (0, jsx_runtime_1.jsx)(lucide_react_1.Menu, { className: "w-6 h-6" }) })] }), isMenuOpen && ((0, jsx_runtime_1.jsx)("div", { className: "lg:hidden absolute top-full left-0 right-0 bg-gray-800 border-t border-gray-700 shadow-xl", children: (0, jsx_runtime_1.jsx)("div", { className: "flex flex-col py-4", children: navItems.map(item => ((0, jsx_runtime_1.jsx)("button", { onClick: () => handleNavigate(item.page), className: `text-left px-6 py-3 hover:bg-gray-700 transition-colors ${currentPage === item.page ? 'text-blue-400 bg-gray-700 border-l-4 border-blue-400' : ''}`, children: item.label }, item.page))) }) }))] }));
}
//# sourceMappingURL=Navigation.js.map