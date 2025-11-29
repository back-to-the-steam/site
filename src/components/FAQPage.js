"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FAQPage = FAQPage;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
function FAQPage() {
    const [searchQuery, setSearchQuery] = (0, react_1.useState)('');
    const [selectedCategory, setSelectedCategory] = (0, react_1.useState)('Toutes');
    const [openAccordion, setOpenAccordion] = (0, react_1.useState)(null);
    const categories = ['Toutes', 'Projet', 'Technique', 'Équipe', 'Partenaires', 'Compétition'];
    const faqData = [
        {
            id: 1,
            question: 'Qu\'est-ce que Back to the Steam ?',
            reponse: 'Back to the Steam est notre projet pour la compétition Course en Cours 2024-2025. Nous créons un véhicule miniature avec un design rétrofuturiste inspiré de la locomotive 141R, alliant l\'esthétique steampunk à l\'ingénierie moderne.',
            categorie: 'Projet',
            ordre: 1
        },
        {
            id: 2,
            question: 'Qu\'est-ce que Course en Cours ?',
            reponse: 'Course en Cours est un dispositif pédagogique innovant qui propose aux collégiens et lycéens de créer une mini entreprise sportive. Les équipes conçoivent, fabriquent et font courir un véhicule propulsé par un moteur électrique sur une piste de 20 mètres.',
            categorie: 'Compétition',
            ordre: 2
        },
        {
            id: 3,
            question: 'Pourquoi le thème de la locomotive à vapeur ?',
            reponse: 'La locomotive 141R représente l\'apogée de l\'ingénierie mécanique du XXe siècle. Son esthétique puissante et ses mécanismes apparents nous inspirent. Nous voulons prouver que le passé peut inspirer l\'avenir, en créant un pont entre l\'ère de la vapeur et les technologies modernes.',
            categorie: 'Projet',
            ordre: 3
        },
        {
            id: 4,
            question: 'Quelles technologies utilisez-vous ?',
            reponse: 'Nous utilisons la CAO (SolidWorks), l\'impression 3D pour les pièces complexes, des simulations aérodynamiques, et un microcontrôleur ESP8266 pour la collecte de données. Le châssis est optimisé pour la légèreté et la rigidité.',
            categorie: 'Technique',
            ordre: 4
        },
        {
            id: 5,
            question: 'Comment est composée l\'équipe ?',
            reponse: 'Notre équipe compte 5 membres : Enzo (chef de projet), Molly (community manager), Manon (comptable), Mathéo (responsable stand) et Alexandre (ingénierie). Chacun apporte ses compétences pour mener le projet vers le succès.',
            categorie: 'Équipe',
            ordre: 5
        },
        {
            id: 6,
            question: 'Comment participer en tant que sponsor ?',
            reponse: 'Nous recherchons activement des partenaires financiers, matériels ou techniques. Votre logo apparaîtra sur notre stand, notre site web et nos réseaux sociaux. Contactez-nous à contact@backtothesteam.fr pour discuter des opportunités.',
            categorie: 'Partenaires',
            ordre: 6
        },
        {
            id: 7,
            question: 'Quels sont vos objectifs de performance ?',
            reponse: 'Nos objectifs incluent : optimisation aérodynamique pour minimiser la traînée, ratio poids/puissance optimal, transmission efficace, stabilité exceptionnelle et finitions soignées. Nous visons l\'excellence technique et esthétique.',
            categorie: 'Technique',
            ordre: 7
        },
        {
            id: 8,
            question: 'Où suivre l\'avancement du projet ?',
            reponse: 'Vous pouvez suivre notre progression sur notre site web (page Avancement), sur Instagram pour du contenu exclusif, et bientôt sur d\'autres réseaux sociaux. Nous publions régulièrement des actualités sur nos avancées.',
            categorie: 'Projet',
            ordre: 8
        },
        {
            id: 9,
            question: 'Quand aura lieu la compétition finale ?',
            reponse: 'La finale régionale aura lieu en avril 2025, suivie de la finale nationale en mai 2025 si nous nous qualifions. Les dates exactes seront communiquées ultérieurement.',
            categorie: 'Compétition',
            ordre: 9
        },
        {
            id: 10,
            question: 'Comment nous contacter ?',
            reponse: 'Vous pouvez nous contacter par email à contact@backtothesteam.fr. Nous sommes également actifs sur Instagram. Pour les partenariats, consultez notre page Partenaires pour plus d\'informations.',
            categorie: 'Équipe',
            ordre: 10
        }
    ];
    const filteredFAQ = faqData.filter(item => {
        const matchesCategory = selectedCategory === 'Toutes' || item.categorie === selectedCategory;
        const matchesSearch = item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.reponse.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    }).sort((a, b) => a.ordre - b.ordre);
    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "min-h-screen", style: { backgroundColor: '#0F1218' }, children: [(0, jsx_runtime_1.jsx)("section", { className: "text-white py-20 px-4", style: {
                    background: 'linear-gradient(135deg, #0F1218 0%, #1a1f2e 100%)'
                }, children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-4xl mx-auto text-center space-y-6", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-5xl md:text-6xl", style: {
                                fontFamily: 'Orbitron, sans-serif',
                                color: '#C97B32'
                            }, children: "FAQ" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xl", style: { color: '#EAEAEA' }, children: "Questions fr\u00E9quentes sur le projet Back to the Steam" })] }) }), (0, jsx_runtime_1.jsxs)("section", { className: "max-w-7xl mx-auto px-4 py-12", children: [(0, jsx_runtime_1.jsxs)("div", { className: "lg:grid lg:grid-cols-[280px_1fr] gap-8", children: [(0, jsx_runtime_1.jsx)("div", { className: "hidden lg:block", children: (0, jsx_runtime_1.jsxs)("div", { className: "sticky top-24 rounded-xl p-6", style: {
                                        backgroundColor: '#1a1f2e',
                                        border: '1px solid #C97B32',
                                        boxShadow: '0 4px 20px rgba(121, 147, 206, 0.15)'
                                    }, children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-xl mb-4", style: {
                                                color: '#C97B32',
                                                fontFamily: 'Orbitron, sans-serif'
                                            }, children: "Cat\u00E9gories" }), (0, jsx_runtime_1.jsx)("div", { className: "space-y-2", children: categories.map(cat => ((0, jsx_runtime_1.jsx)("button", { onClick: () => setSelectedCategory(cat), className: "w-full text-left px-4 py-3 rounded-lg transition-all", style: {
                                                    backgroundColor: selectedCategory === cat ? '#C97B32' : 'transparent',
                                                    color: selectedCategory === cat ? '#0F1218' : '#EAEAEA',
                                                    border: `1px solid ${selectedCategory === cat ? '#C97B32' : '#7393CE'}`,
                                                }, children: cat }, cat))) })] }) }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-6", children: [(0, jsx_runtime_1.jsx)("div", { className: "lg:hidden overflow-x-auto pb-4", children: (0, jsx_runtime_1.jsx)("div", { className: "flex gap-3 min-w-max", children: categories.map(cat => ((0, jsx_runtime_1.jsx)("button", { onClick: () => setSelectedCategory(cat), className: "px-4 py-2 rounded-lg whitespace-nowrap transition-all text-sm", style: {
                                                    backgroundColor: selectedCategory === cat ? '#C97B32' : '#1a1f2e',
                                                    color: selectedCategory === cat ? '#0F1218' : '#EAEAEA',
                                                    border: `1px solid ${selectedCategory === cat ? '#C97B32' : '#7393CE'}`,
                                                }, children: cat }, cat))) }) }), (0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)("input", { type: "text", placeholder: "Rechercher une question...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "w-full px-4 py-4 pl-12 rounded-lg outline-none transition-all", style: {
                                                    backgroundColor: '#1a1f2e',
                                                    color: '#EAEAEA',
                                                    border: '1px solid #7393CE',
                                                } }), (0, jsx_runtime_1.jsx)(lucide_react_1.Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5", style: { color: '#7393CE' } })] }), (0, jsx_runtime_1.jsx)("div", { className: "space-y-4", children: filteredFAQ.length === 0 ? ((0, jsx_runtime_1.jsxs)("div", { className: "text-center py-12 rounded-xl", style: {
                                                backgroundColor: '#1a1f2e',
                                                color: '#EAEAEA'
                                            }, children: [(0, jsx_runtime_1.jsx)("p", { className: "text-xl", children: "Aucune question trouv\u00E9e" }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm mt-2", style: { color: '#7393CE' }, children: "Essayez avec d'autres mots-cl\u00E9s" })] })) : (filteredFAQ.map(item => ((0, jsx_runtime_1.jsxs)("div", { className: "rounded-lg overflow-hidden transition-all", style: {
                                                backgroundColor: '#1a1f2e',
                                                border: `1px solid ${openAccordion === item.id ? '#C97B32' : '#7393CE'}`,
                                                boxShadow: openAccordion === item.id ? '0 4px 20px rgba(201, 123, 50, 0.3)' : '0 2px 10px rgba(121, 147, 206, 0.1)'
                                            }, children: [(0, jsx_runtime_1.jsxs)("button", { onClick: () => toggleAccordion(item.id), className: "w-full px-6 py-4 flex items-center justify-between gap-4 text-left transition-colors hover:bg-opacity-80", style: {
                                                        backgroundColor: openAccordion === item.id ? 'rgba(201, 123, 50, 0.1)' : 'transparent'
                                                    }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex-1", children: [(0, jsx_runtime_1.jsx)("span", { className: "text-xs px-2 py-1 rounded-full inline-block mb-2", style: {
                                                                        backgroundColor: '#C97B32',
                                                                        color: '#0F1218'
                                                                    }, children: item.categorie }), (0, jsx_runtime_1.jsx)("h3", { className: "text-lg", style: { color: '#EAEAEA' }, children: item.question })] }), (0, jsx_runtime_1.jsx)("div", { className: "flex-shrink-0", children: openAccordion === item.id ? ((0, jsx_runtime_1.jsx)(lucide_react_1.ChevronUp, { className: "w-6 h-6", style: { color: '#C97B32' } })) : ((0, jsx_runtime_1.jsx)(lucide_react_1.ChevronDown, { className: "w-6 h-6", style: { color: '#7393CE' } })) })] }), openAccordion === item.id && ((0, jsx_runtime_1.jsx)("div", { className: "px-6 py-4 border-t", style: {
                                                        borderColor: '#C97B32',
                                                        backgroundColor: 'rgba(201, 123, 50, 0.05)'
                                                    }, children: (0, jsx_runtime_1.jsx)("p", { style: { color: '#EAEAEA', lineHeight: '1.7' }, children: item.reponse }) }))] }, item.id)))) }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-12 rounded-xl p-8 text-center", style: {
                                            backgroundColor: '#1a1f2e',
                                            border: '1px solid #C97B32'
                                        }, children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-2xl mb-4", style: { color: '#C97B32' }, children: "Vous avez d'autres questions ?" }), (0, jsx_runtime_1.jsx)("p", { className: "mb-6", style: { color: '#EAEAEA' }, children: "N'h\u00E9sitez pas \u00E0 nous contacter directement" }), (0, jsx_runtime_1.jsx)("a", { href: "mailto:contact@backtothesteam.fr", className: "inline-block px-6 py-3 rounded-lg transition-all hover:opacity-90", style: {
                                                    backgroundColor: '#C97B32',
                                                    color: '#0F1218'
                                                }, children: "Nous contacter" })] })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "text-center py-8", children: (0, jsx_runtime_1.jsx)("button", { onClick: () => window.location.href = '#admin', className: "text-xs px-3 py-1 rounded hover:opacity-70 transition-opacity", style: {
                                color: '#7393CE',
                                opacity: 0.5
                            }, children: "Admin" }) })] })] }));
}
//# sourceMappingURL=FAQPage.js.map