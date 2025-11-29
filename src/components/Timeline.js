"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timeline = Timeline;
const jsx_runtime_1 = require("react/jsx-runtime");
const ImageWithFallback_1 = require("./figma/ImageWithFallback");
const timeline_1 = require("../data/timeline");
function Timeline() {
    const milestones = timeline_1.timelineData.milestones;
    return ((0, jsx_runtime_1.jsx)("section", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: milestones.map((milestone, index) => ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white border-2 border-blue-600 p-6 hover:shadow-xl transition-shadow duration-300", children: [(0, jsx_runtime_1.jsx)("div", { className: "mb-4", children: (0, jsx_runtime_1.jsx)(ImageWithFallback_1.ImageWithFallback, { src: milestone.image, alt: milestone.title, className: "w-full h-48 object-cover bg-gray-200" }) }), (0, jsx_runtime_1.jsx)("h3", { className: "mb-2 tracking-wide", children: milestone.title }), (0, jsx_runtime_1.jsx)("div", { className: "border-t border-gray-300 pt-2 mb-3", children: (0, jsx_runtime_1.jsx)("span", { className: "text-gray-500", children: milestone.date }) }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600 text-sm", children: milestone.description })] }, index))) }));
}
//# sourceMappingURL=Timeline.js.map