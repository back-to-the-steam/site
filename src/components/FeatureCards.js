"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatureCards = FeatureCards;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
function FeatureCards() {
    const features = [
        {
            icon: lucide_react_1.Lightbulb,
            title: 'VISION',
            description: 'Réinventer le transport ferroviaire avec une approche écologique et moderne de la propulsion à vapeur.'
        },
        {
            icon: lucide_react_1.Pencil,
            title: 'DESIGN',
            description: 'Conception innovante alliant esthétique rétro-futuriste et performance aérodynamique optimale.'
        },
        {
            icon: lucide_react_1.Settings,
            title: 'ENGINEERING',
            description: 'Ingénierie de pointe pour maximiser l\'efficacité énergétique et réduire les émissions.'
        }
    ];
    return ((0, jsx_runtime_1.jsx)("section", { id: "workshop", className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: features.map((feature, index) => {
            const Icon = feature.icon;
            return ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white border-2 border-blue-600 p-8 text-center hover:shadow-xl transition-shadow duration-300", children: [(0, jsx_runtime_1.jsx)(Icon, { className: "w-16 h-16 mx-auto mb-4 text-blue-600 stroke-[1.5]" }), (0, jsx_runtime_1.jsx)("h3", { className: "mb-4 tracking-wider", children: feature.title }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600", children: feature.description })] }, index));
        }) }));
}
//# sourceMappingURL=FeatureCards.js.map