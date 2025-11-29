"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamPage = TeamPage;
const jsx_runtime_1 = require("react/jsx-runtime");
const ImageWithFallback_1 = require("./figma/ImageWithFallback");
function TeamPage() {
    const teamMembers = [
        {
            name: 'Enzo Lombard',
            role: 'Chef de Projet',
            description: 'Coordination de l\'équipe et gestion globale du projet',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
        },
        {
            name: 'Molly Speitel',
            role: 'Community Manager',
            description: 'Responsable de la communication et des réseaux sociaux',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
        },
        {
            name: 'Manon Wagner-Marschall',
            role: 'Comptable',
            description: 'Gestion financière et budget du projet',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
        },
        {
            name: 'Mathéo Henry',
            role: 'Responsable Stand',
            description: 'Conception et gestion du stand de présentation',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
        },
        {
            name: 'Alexandre Schoetel',
            role: 'Ingénierie',
            description: 'Conception technique et développement du véhicule',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop'
        }
    ];
    return ((0, jsx_runtime_1.jsxs)("main", { className: "max-w-7xl mx-auto px-4 py-12", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-center mb-12", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-4xl md:text-5xl mb-4 tracking-wide", children: "NOTRE \u00C9QUIPE" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600 max-w-2xl mx-auto", children: "Une \u00E9quipe pluridisciplinaire d'experts passionn\u00E9s par l'innovation et l'ing\u00E9nierie de pointe" })] }), (0, jsx_runtime_1.jsx)("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: teamMembers.map((member, index) => ((0, jsx_runtime_1.jsxs)("div", { className: "bg-white border-2 border-blue-600 overflow-hidden hover:shadow-xl transition-shadow duration-300", children: [(0, jsx_runtime_1.jsx)(ImageWithFallback_1.ImageWithFallback, { src: member.image, alt: member.name, className: "w-full h-64 object-cover" }), (0, jsx_runtime_1.jsxs)("div", { className: "p-6", children: [(0, jsx_runtime_1.jsx)("h3", { className: "mb-2", children: member.name }), (0, jsx_runtime_1.jsx)("div", { className: "text-blue-600 mb-4 tracking-wider text-sm", children: member.role }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600 text-sm", children: member.description })] })] }, index))) })] }));
}
//# sourceMappingURL=TeamPage.js.map