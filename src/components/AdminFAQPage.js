"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminFAQPage = AdminFAQPage;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const lucide_react_1 = require("lucide-react");
function AdminFAQPage() {
    const [isAddModalOpen, setIsAddModalOpen] = (0, react_1.useState)(false);
    const [isEditModalOpen, setIsEditModalOpen] = (0, react_1.useState)(false);
    const [selectedFAQ, setSelectedFAQ] = (0, react_1.useState)(null);
    const [formData, setFormData] = (0, react_1.useState)({
        question: '',
        reponse: '',
        categorie: 'Projet'
    });
    const categories = ['Projet', 'Technique', 'Équipe', 'Partenaires', 'Compétition'];
    const [faqList, setFaqList] = (0, react_1.useState)([
        {
            id: 1,
            question: 'Qu\'est-ce que Back to the Steam ?',
            reponse: 'Back to the Steam est notre projet pour la compétition Course en Cours 2024-2025.',
            categorie: 'Projet',
            ordre: 1
        },
        {
            id: 2,
            question: 'Qu\'est-ce que Course en Cours ?',
            reponse: 'Course en Cours est un dispositif pédagogique innovant qui propose aux collégiens et lycéens de créer une mini entreprise sportive.',
            categorie: 'Compétition',
            ordre: 2
        },
        {
            id: 3,
            question: 'Pourquoi le thème de la locomotive à vapeur ?',
            reponse: 'La locomotive 141R représente l\'apogée de l\'ingénierie mécanique du XXe siècle.',
            categorie: 'Projet',
            ordre: 3
        }
    ]);
    const openAddModal = () => {
        setFormData({ question: '', reponse: '', categorie: 'Projet' });
        setIsAddModalOpen(true);
    };
    const openEditModal = (faq) => {
        setSelectedFAQ(faq);
        setFormData({
            question: faq.question,
            reponse: faq.reponse,
            categorie: faq.categorie
        });
        setIsEditModalOpen(true);
    };
    const closeModals = () => {
        setIsAddModalOpen(false);
        setIsEditModalOpen(false);
        setSelectedFAQ(null);
        setFormData({ question: '', reponse: '', categorie: 'Projet' });
    };
    const handleAdd = () => {
        const newFAQ = {
            id: Math.max(...faqList.map(f => f.id)) + 1,
            question: formData.question,
            reponse: formData.reponse,
            categorie: formData.categorie,
            ordre: faqList.length + 1
        };
        setFaqList([...faqList, newFAQ]);
        closeModals();
    };
    const handleUpdate = () => {
        if (selectedFAQ) {
            setFaqList(faqList.map(faq => faq.id === selectedFAQ.id
                ? { ...faq, question: formData.question, reponse: formData.reponse, categorie: formData.categorie }
                : faq));
            closeModals();
        }
    };
    const handleDelete = (id) => {
        if (confirm('Êtes-vous sûr de vouloir supprimer cette question ?')) {
            setFaqList(faqList.filter(faq => faq.id !== id));
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "min-h-screen p-4 md:p-8", style: { backgroundColor: '#0F1218' }, children: [(0, jsx_runtime_1.jsx)("div", { className: "max-w-7xl mx-auto mb-8", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between flex-wrap gap-4", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-4xl mb-2", style: {
                                        color: '#C97B32',
                                        fontFamily: 'Orbitron, sans-serif'
                                    }, children: "Admin FAQ" }), (0, jsx_runtime_1.jsx)("p", { style: { color: '#EAEAEA' }, children: "Gestion des questions fr\u00E9quentes" })] }), (0, jsx_runtime_1.jsxs)("button", { onClick: openAddModal, className: "flex items-center gap-2 px-6 py-3 rounded-lg transition-all hover:opacity-90", style: {
                                backgroundColor: '#C97B32',
                                color: '#0F1218'
                            }, children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Plus, { className: "w-5 h-5" }), "Ajouter une question"] })] }) }), (0, jsx_runtime_1.jsx)("div", { className: "max-w-7xl mx-auto hidden md:block", children: (0, jsx_runtime_1.jsx)("div", { className: "rounded-xl overflow-hidden", style: {
                        backgroundColor: '#1a1f2e',
                        border: '1px solid #7393CE'
                    }, children: (0, jsx_runtime_1.jsxs)("table", { className: "w-full", children: [(0, jsx_runtime_1.jsx)("thead", { children: (0, jsx_runtime_1.jsxs)("tr", { style: {
                                        backgroundColor: 'rgba(201, 123, 50, 0.1)',
                                        borderBottom: '1px solid #C97B32'
                                    }, children: [(0, jsx_runtime_1.jsx)("th", { className: "px-6 py-4 text-left", style: { color: '#C97B32' }, children: "Question" }), (0, jsx_runtime_1.jsx)("th", { className: "px-6 py-4 text-left", style: { color: '#C97B32' }, children: "Cat\u00E9gorie" }), (0, jsx_runtime_1.jsx)("th", { className: "px-6 py-4 text-center", style: { color: '#C97B32' }, children: "Actions" })] }) }), (0, jsx_runtime_1.jsx)("tbody", { children: faqList.map((faq, index) => ((0, jsx_runtime_1.jsxs)("tr", { style: {
                                        borderBottom: index < faqList.length - 1 ? '1px solid #7393CE' : 'none'
                                    }, children: [(0, jsx_runtime_1.jsx)("td", { className: "px-6 py-4", style: { color: '#EAEAEA' }, children: faq.question }), (0, jsx_runtime_1.jsx)("td", { className: "px-6 py-4", children: (0, jsx_runtime_1.jsx)("span", { className: "px-3 py-1 rounded-full text-sm", style: {
                                                    backgroundColor: '#7393CE',
                                                    color: '#0F1218'
                                                }, children: faq.categorie }) }), (0, jsx_runtime_1.jsx)("td", { className: "px-6 py-4", children: (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-center gap-3", children: [(0, jsx_runtime_1.jsx)("button", { onClick: () => openEditModal(faq), className: "p-2 rounded-lg transition-all hover:opacity-80", style: {
                                                            backgroundColor: '#7393CE',
                                                            color: '#0F1218'
                                                        }, children: (0, jsx_runtime_1.jsx)(lucide_react_1.Edit2, { className: "w-4 h-4" }) }), (0, jsx_runtime_1.jsx)("button", { onClick: () => handleDelete(faq.id), className: "p-2 rounded-lg transition-all hover:opacity-80", style: {
                                                            backgroundColor: '#d9534f',
                                                            color: '#EAEAEA'
                                                        }, children: (0, jsx_runtime_1.jsx)(lucide_react_1.Trash2, { className: "w-4 h-4" }) })] }) })] }, faq.id))) })] }) }) }), (0, jsx_runtime_1.jsx)("div", { className: "max-w-7xl mx-auto md:hidden space-y-4", children: faqList.map(faq => ((0, jsx_runtime_1.jsxs)("div", { className: "rounded-lg p-4", style: {
                        backgroundColor: '#1a1f2e',
                        border: '1px solid #7393CE'
                    }, children: [(0, jsx_runtime_1.jsx)("div", { className: "mb-3", children: (0, jsx_runtime_1.jsx)("span", { className: "px-3 py-1 rounded-full text-xs", style: {
                                    backgroundColor: '#7393CE',
                                    color: '#0F1218'
                                }, children: faq.categorie }) }), (0, jsx_runtime_1.jsx)("h3", { className: "mb-4", style: { color: '#EAEAEA' }, children: faq.question }), (0, jsx_runtime_1.jsxs)("div", { className: "flex gap-2", children: [(0, jsx_runtime_1.jsxs)("button", { onClick: () => openEditModal(faq), className: "flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-all", style: {
                                        backgroundColor: '#7393CE',
                                        color: '#0F1218'
                                    }, children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Edit2, { className: "w-4 h-4" }), "Modifier"] }), (0, jsx_runtime_1.jsxs)("button", { onClick: () => handleDelete(faq.id), className: "flex-1 flex items-center justify-center gap-2 py-2 rounded-lg transition-all", style: {
                                        backgroundColor: '#d9534f',
                                        color: '#EAEAEA'
                                    }, children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Trash2, { className: "w-4 h-4" }), "Supprimer"] })] })] }, faq.id))) }), isAddModalOpen && ((0, jsx_runtime_1.jsx)("div", { className: "fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50", children: (0, jsx_runtime_1.jsxs)("div", { className: "w-full max-w-2xl rounded-xl p-6 md:p-8", style: {
                        backgroundColor: '#1a1f2e',
                        border: '2px solid #C97B32',
                        boxShadow: '0 8px 40px rgba(201, 123, 50, 0.3)'
                    }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between mb-6", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-2xl", style: {
                                        color: '#C97B32',
                                        fontFamily: 'Orbitron, sans-serif'
                                    }, children: "Ajouter une question" }), (0, jsx_runtime_1.jsx)("button", { onClick: closeModals, className: "p-2 rounded-lg transition-all hover:opacity-80", style: { backgroundColor: 'rgba(201, 123, 50, 0.2)' }, children: (0, jsx_runtime_1.jsx)(lucide_react_1.X, { className: "w-5 h-5", style: { color: '#C97B32' } }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-4", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "block mb-2", style: { color: '#EAEAEA' }, children: "Question" }), (0, jsx_runtime_1.jsx)("input", { type: "text", value: formData.question, onChange: (e) => setFormData({ ...formData, question: e.target.value }), className: "w-full px-4 py-3 rounded-lg outline-none", style: {
                                                backgroundColor: '#0F1218',
                                                color: '#EAEAEA',
                                                border: '1px solid #7393CE'
                                            }, placeholder: "Entrez la question..." })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "block mb-2", style: { color: '#EAEAEA' }, children: "R\u00E9ponse" }), (0, jsx_runtime_1.jsx)("textarea", { value: formData.reponse, onChange: (e) => setFormData({ ...formData, reponse: e.target.value }), rows: 5, className: "w-full px-4 py-3 rounded-lg outline-none resize-none", style: {
                                                backgroundColor: '#0F1218',
                                                color: '#EAEAEA',
                                                border: '1px solid #7393CE'
                                            }, placeholder: "Entrez la r\u00E9ponse..." })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "block mb-2", style: { color: '#EAEAEA' }, children: "Cat\u00E9gorie" }), (0, jsx_runtime_1.jsx)("select", { value: formData.categorie, onChange: (e) => setFormData({ ...formData, categorie: e.target.value }), className: "w-full px-4 py-3 rounded-lg outline-none", style: {
                                                backgroundColor: '#0F1218',
                                                color: '#EAEAEA',
                                                border: '1px solid #7393CE'
                                            }, children: categories.map(cat => ((0, jsx_runtime_1.jsx)("option", { value: cat, children: cat }, cat))) })] }), (0, jsx_runtime_1.jsxs)("button", { onClick: handleAdd, disabled: !formData.question || !formData.reponse, className: "w-full flex items-center justify-center gap-2 py-3 rounded-lg transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed", style: {
                                        backgroundColor: '#C97B32',
                                        color: '#0F1218'
                                    }, children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Save, { className: "w-5 h-5" }), "Enregistrer"] })] })] }) })), isEditModalOpen && ((0, jsx_runtime_1.jsx)("div", { className: "fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50", children: (0, jsx_runtime_1.jsxs)("div", { className: "w-full max-w-2xl rounded-xl p-6 md:p-8", style: {
                        backgroundColor: '#1a1f2e',
                        border: '2px solid #C97B32',
                        boxShadow: '0 8px 40px rgba(201, 123, 50, 0.3)'
                    }, children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-center justify-between mb-6", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-2xl", style: {
                                        color: '#C97B32',
                                        fontFamily: 'Orbitron, sans-serif'
                                    }, children: "Modifier une question" }), (0, jsx_runtime_1.jsx)("button", { onClick: closeModals, className: "p-2 rounded-lg transition-all hover:opacity-80", style: { backgroundColor: 'rgba(201, 123, 50, 0.2)' }, children: (0, jsx_runtime_1.jsx)(lucide_react_1.X, { className: "w-5 h-5", style: { color: '#C97B32' } }) })] }), (0, jsx_runtime_1.jsxs)("div", { className: "space-y-4", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "block mb-2", style: { color: '#EAEAEA' }, children: "Question" }), (0, jsx_runtime_1.jsx)("input", { type: "text", value: formData.question, onChange: (e) => setFormData({ ...formData, question: e.target.value }), className: "w-full px-4 py-3 rounded-lg outline-none", style: {
                                                backgroundColor: '#0F1218',
                                                color: '#EAEAEA',
                                                border: '1px solid #7393CE'
                                            } })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "block mb-2", style: { color: '#EAEAEA' }, children: "R\u00E9ponse" }), (0, jsx_runtime_1.jsx)("textarea", { value: formData.reponse, onChange: (e) => setFormData({ ...formData, reponse: e.target.value }), rows: 5, className: "w-full px-4 py-3 rounded-lg outline-none resize-none", style: {
                                                backgroundColor: '#0F1218',
                                                color: '#EAEAEA',
                                                border: '1px solid #7393CE'
                                            } })] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("label", { className: "block mb-2", style: { color: '#EAEAEA' }, children: "Cat\u00E9gorie" }), (0, jsx_runtime_1.jsx)("select", { value: formData.categorie, onChange: (e) => setFormData({ ...formData, categorie: e.target.value }), className: "w-full px-4 py-3 rounded-lg outline-none", style: {
                                                backgroundColor: '#0F1218',
                                                color: '#EAEAEA',
                                                border: '1px solid #7393CE'
                                            }, children: categories.map(cat => ((0, jsx_runtime_1.jsx)("option", { value: cat, children: cat }, cat))) })] }), (0, jsx_runtime_1.jsxs)("button", { onClick: handleUpdate, disabled: !formData.question || !formData.reponse, className: "w-full flex items-center justify-center gap-2 py-3 rounded-lg transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed", style: {
                                        backgroundColor: '#C97B32',
                                        color: '#0F1218'
                                    }, children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Save, { className: "w-5 h-5" }), "Mettre \u00E0 jour"] })] })] }) }))] }));
}
//# sourceMappingURL=AdminFAQPage.js.map