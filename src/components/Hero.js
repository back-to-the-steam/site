"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hero = Hero;
const jsx_runtime_1 = require("react/jsx-runtime");
const _8bf9306281aa64a8dbaee4629b299149f053197b_png_1 = __importDefault(require("figma:asset/8bf9306281aa64a8dbaee4629b299149f053197b.png"));
function Hero() {
    const scrollToWorkshop = () => {
        const workshopElement = document.getElementById('workshop');
        if (workshopElement) {
            const navHeight = 80; // Hauteur approximative de la navigation
            const targetPosition = workshopElement.offsetTop - navHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    };
    return ((0, jsx_runtime_1.jsx)("section", { className: "bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white py-24 px-4", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-4xl mx-auto text-center space-y-8", children: [(0, jsx_runtime_1.jsx)("div", { className: "inline-block p-6 border-4 border-blue-400 rounded-lg", style: { boxShadow: '0 0 20px rgba(96, 165, 250, 0.8), 0 0 40px rgba(96, 165, 250, 0.5), inset 0 0 20px rgba(96, 165, 250, 0.2)' }, children: (0, jsx_runtime_1.jsx)("img", { src: _8bf9306281aa64a8dbaee4629b299149f053197b_png_1.default, alt: "Back to the Steam", className: "h-48 mx-auto" }) }), (0, jsx_runtime_1.jsxs)("h1", { className: "text-5xl md:text-6xl", children: ["Back to the Future.", (0, jsx_runtime_1.jsx)("br", {}), "Powered by Steam."] }), (0, jsx_runtime_1.jsx)("button", { onClick: scrollToWorkshop, className: "border-2 border-white px-12 py-3 hover:bg-white hover:text-gray-900 transition-all duration-300 tracking-wider", children: "ENTER WORKSHOP" })] }) }));
}
//# sourceMappingURL=Hero.js.map