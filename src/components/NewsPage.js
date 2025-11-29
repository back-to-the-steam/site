"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsPage = NewsPage;
const jsx_runtime_1 = require("react/jsx-runtime");
const ImageWithFallback_1 = require("./figma/ImageWithFallback");
const lucide_react_1 = require("lucide-react");
function NewsPage() {
    const newsCards = [
        {
            id: 1,
            titre: 'Lancement du projet Back to the Steam',
            description: 'Notre équipe est fière d\'annoncer le lancement officiel du projet Back to the Steam pour Course en Cours 2024-2025. Avec un concept rétrofuturiste inspiré de la locomotive 141R, nous sommes prêts à repousser les limites de la créativité et de l\'ingénierie.',
            image: 'https://images.unsplash.com/photo-1667149226829-d24fba50b536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVhbSUyMGxvY29tb3RpdmUlMjBlbmdpbmV8ZW58MXx8fHwxNzY0MTU3Mjk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
            date: 'Octobre 2024',
            tag: 'Annonce'
        },
        {
            id: 2,
            titre: 'Nouveau logo et identité visuelle',
            description: 'Découvrez notre nouveau logo qui capture parfaitement l\'esprit du projet : un design rétrofuturiste avec des couleurs dégradées orange et bleu, symbolisant la fusion entre passé et futur. Cette identité visuelle unique nous accompagnera tout au long de l\'aventure.',
            image: 'https://images.unsplash.com/photo-1666235729156-7fc93d7922ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWNpbmclMjBjYXIlMjBkZXNpZ24lMjBza2V0Y2h8ZW58MXx8fHwxNzY0MjMyMjczfDA&ixlib=rb-4.1.0&q=80&w=1080',
            date: 'Novembre 2024',
            tag: 'Design'
        },
        {
            id: 3,
            titre: 'Premiers croquis du véhicule',
            description: 'Les premiers dessins de notre véhicule sont terminés ! Un design qui marie l\'esthétique massive de la 141R avec des lignes aérodynamiques modernes. Chaque détail a été pensé pour raconter notre histoire.',
            image: 'https://images.unsplash.com/photo-1727522974614-b592018e49e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWNoYW5pY2FsJTIwZW5naW5lZXJpbmclMjBibHVlcHJpbnRzfGVufDF8fHx8MTc2NDE1NzI5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
            date: 'Novembre 2024',
            tag: 'Conception'
        },
        {
            id: 4,
            titre: 'L\'équipe au complet',
            description: 'Enzo (chef de projet), Molly (community manager), Manon (comptable), Mathéo (responsable stand) et Alexandre (ingénierie) : notre équipe pluridisciplinaire est prête à relever tous les défis !',
            image: 'https://images.unsplash.com/photo-1581091212911-f4efc3f71c48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMGVuZ2luZWVyaW5nJTIwdGVhbXxlbnwxfHx8fDE3NjQyMzIyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
            date: 'Octobre 2024',
            tag: 'Équipe'
        },
        {
            id: 5,
            titre: 'Modélisation 3D en cours',
            description: 'Notre équipe d\'ingénierie travaille d\'arrache-pied sur la modélisation 3D des composants. CAO, simulations aérodynamiques, tout est mis en œuvre pour optimiser les performances.',
            image: 'https://images.unsplash.com/photo-1760012827122-2b467fa76d38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJvZHluYW1pYyUyMGRlc2lnbnxlbnwxfHx8fDE3NjQxNTcyOTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
            date: 'Décembre 2024',
            tag: 'Ingénierie'
        },
        {
            id: 6,
            titre: 'Lancement du site web',
            description: 'Notre site web officiel est maintenant en ligne ! Découvrez le projet, l\'équipe, notre vision et suivez notre avancement en temps réel. Un design moderne qui reflète notre identité rétrofuturiste.',
            image: 'https://images.unsplash.com/photo-1761223976379-04c361d3068a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMG5ld3N8ZW58MXx8fHwxNzY0MjMyMjc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
            date: 'Novembre 2024',
            tag: 'Communication'
        },
        {
            id: 7,
            titre: 'Recherche de sponsors',
            description: 'Nous lançons activement notre recherche de partenaires ! Si vous êtes une entreprise de la région de Colmar intéressée par notre projet innovant, n\'hésitez pas à nous contacter.',
            image: 'https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwaGFuZHNoYWtlfGVufDF8fHx8MTc2NDExODQyNXww&ixlib=rb-4.1.0&q=80&w=1080',
            date: 'Janvier 2025',
            tag: 'Partenariats'
        },
        {
            id: 8,
            titre: 'Impression 3D des premiers prototypes',
            description: 'Les imprimantes 3D tournent à plein régime ! Nous testons différentes pièces et matériaux pour trouver le meilleur compromis entre légèreté, solidité et esthétique.',
            image: 'https://images.unsplash.com/photo-1581091212911-f4efc3f71c48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3Jrc2hvcCUyMGVuZ2luZWVyaW5nJTIwdGVhbXxlbnwxfHx8fDE3NjQyMzIyNzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
            date: 'Janvier 2025',
            tag: 'Fabrication'
        },
        {
            id: 9,
            titre: 'Présence sur les réseaux sociaux',
            description: 'Suivez-nous sur Instagram pour du contenu exclusif : photos des coulisses, vidéos de fabrication, présentation de l\'équipe et bien plus encore ! Notre community manager Molly vous réserve plein de surprises.',
            image: 'https://images.unsplash.com/photo-1761223976379-04c361d3068a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW5ub3ZhdGlvbiUyMG5ld3N8ZW58MXx8fHwxNzY0MjMyMjc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
            date: 'Décembre 2024',
            tag: 'Communication'
        }
    ];
    return ((0, jsx_runtime_1.jsxs)("div", { className: "min-h-screen", children: [(0, jsx_runtime_1.jsx)("section", { className: "bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white py-20 px-4", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-4xl mx-auto text-center space-y-6", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-5xl md:text-6xl", children: "Actualit\u00E9s" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xl text-gray-300", children: "Suivez toutes les nouveaut\u00E9s du projet Back to the Steam" })] }) }), (0, jsx_runtime_1.jsxs)("section", { className: "max-w-7xl mx-auto px-4 py-16", children: [(0, jsx_runtime_1.jsx)("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8", children: newsCards.map((card) => ((0, jsx_runtime_1.jsxs)("article", { className: "bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300", children: [(0, jsx_runtime_1.jsxs)("div", { className: "relative h-56 overflow-hidden", children: [(0, jsx_runtime_1.jsx)(ImageWithFallback_1.ImageWithFallback, { src: card.image, alt: card.titre, className: "w-full h-full object-cover hover:scale-105 transition-transform duration-300" }), (0, jsx_runtime_1.jsx)("div", { className: "absolute top-4 right-4", children: (0, jsx_runtime_1.jsxs)("span", { className: "px-3 py-1 bg-blue-600 text-white rounded-full text-sm flex items-center gap-1", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Tag, { className: "w-3 h-3" }), card.tag] }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "p-6", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2 text-gray-500 mb-3", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Calendar, { className: "w-4 h-4" }), (0, jsx_runtime_1.jsx)("span", { className: "text-sm", children: card.date })] }), (0, jsx_runtime_1.jsx)("h2", { className: "text-xl mb-3", children: card.titre }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-600 leading-relaxed", children: card.description })] })] }, card.id))) }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 text-center", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-2xl mb-4", children: "Restez inform\u00E9s" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-700 max-w-2xl mx-auto", children: "Cette page est r\u00E9guli\u00E8rement mise \u00E0 jour avec les derni\u00E8res nouvelles du projet. N'h\u00E9sitez pas \u00E0 nous suivre \u00E9galement sur nos r\u00E9seaux sociaux pour du contenu exclusif !" })] })] })] }));
}
//# sourceMappingURL=NewsPage.js.map