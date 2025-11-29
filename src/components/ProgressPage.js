"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressPage = ProgressPage;
const jsx_runtime_1 = require("react/jsx-runtime");
const lucide_react_1 = require("lucide-react");
const progress_1 = require("../data/progress");
function ProgressPage() {
    const timelineItems = progress_1.progressData.timelineItems;
    const getStatusIcon = (status) => {
        switch (status) {
            case 'completed':
                return (0, jsx_runtime_1.jsx)(lucide_react_1.CheckCircle, { className: "w-6 h-6 text-green-500" });
            case 'in-progress':
                return (0, jsx_runtime_1.jsx)(lucide_react_1.Clock, { className: "w-6 h-6 text-blue-500" });
            default:
                return (0, jsx_runtime_1.jsx)(lucide_react_1.Circle, { className: "w-6 h-6 text-gray-400" });
        }
    };
    const getStatusColor = (status) => {
        switch (status) {
            case 'completed':
                return 'bg-green-100 border-green-500';
            case 'in-progress':
                return 'bg-blue-100 border-blue-500';
            default:
                return 'bg-gray-50 border-gray-300';
        }
    };
    const getProgressColor = (pourcentage) => {
        if (pourcentage === 100)
            return 'bg-green-500';
        if (pourcentage >= 50)
            return 'bg-blue-500';
        if (pourcentage > 0)
            return 'bg-yellow-500';
        return 'bg-gray-300';
    };
    // Statistiques globales
    const totalItems = timelineItems.length;
    const completedItems = timelineItems.filter(item => item.status === 'completed').length;
    const inProgressItems = timelineItems.filter(item => item.status === 'in-progress').length;
    const averageProgress = Math.round(timelineItems.reduce((sum, item) => sum + item.pourcentage, 0) / totalItems);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "min-h-screen", children: [(0, jsx_runtime_1.jsx)("section", { className: "bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 text-white py-20 px-4", children: (0, jsx_runtime_1.jsxs)("div", { className: "max-w-4xl mx-auto text-center space-y-6", children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-5xl md:text-6xl", children: "Avancement" }), (0, jsx_runtime_1.jsx)("p", { className: "text-xl text-gray-300", children: "Suivez l'\u00E9volution du projet Back to the Steam" })] }) }), (0, jsx_runtime_1.jsxs)("section", { className: "max-w-7xl mx-auto px-4 py-16", children: [(0, jsx_runtime_1.jsxs)("div", { className: "grid md:grid-cols-4 gap-6 mb-12", children: [(0, jsx_runtime_1.jsxs)("div", { className: "bg-white p-6 rounded-xl shadow-lg text-center", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-4xl mb-2", children: [averageProgress, "%"] }), (0, jsx_runtime_1.jsx)("div", { className: "text-gray-600", children: "Avancement Global" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "bg-green-50 p-6 rounded-xl shadow-lg text-center border-2 border-green-200", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-4xl text-green-600 mb-2", children: completedItems }), (0, jsx_runtime_1.jsx)("div", { className: "text-gray-700", children: "\u00C9tapes Compl\u00E9t\u00E9es" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "bg-blue-50 p-6 rounded-xl shadow-lg text-center border-2 border-blue-200", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-4xl text-blue-600 mb-2", children: inProgressItems }), (0, jsx_runtime_1.jsx)("div", { className: "text-gray-700", children: "En Cours" })] }), (0, jsx_runtime_1.jsxs)("div", { className: "bg-gray-50 p-6 rounded-xl shadow-lg text-center border-2 border-gray-200", children: [(0, jsx_runtime_1.jsx)("div", { className: "text-4xl text-gray-600 mb-2", children: totalItems }), (0, jsx_runtime_1.jsx)("div", { className: "text-gray-700", children: "\u00C9tapes Totales" })] })] }), (0, jsx_runtime_1.jsx)("div", { className: "space-y-6", children: timelineItems.map((item, index) => ((0, jsx_runtime_1.jsxs)("div", { className: `relative bg-white rounded-xl shadow-lg p-6 border-l-4 ${getStatusColor(item.status)} transition-all hover:shadow-xl`, children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-start gap-4", children: [(0, jsx_runtime_1.jsx)("div", { className: "mt-1", children: getStatusIcon(item.status) }), (0, jsx_runtime_1.jsxs)("div", { className: "flex-1", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex items-start justify-between mb-3 flex-wrap gap-3", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex-1", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-2xl mb-2", children: item.titre }), (0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2 text-gray-500", children: [(0, jsx_runtime_1.jsx)(lucide_react_1.Calendar, { className: "w-4 h-4" }), (0, jsx_runtime_1.jsx)("span", { children: item.date })] })] }), (0, jsx_runtime_1.jsxs)("div", { className: "text-right", children: [(0, jsx_runtime_1.jsxs)("div", { className: "text-3xl mb-1", children: [item.pourcentage, "%"] }), (0, jsx_runtime_1.jsx)("span", { className: `px-3 py-1 rounded-full text-sm ${item.status === 'completed' ? 'bg-green-100 text-green-700' :
                                                                        item.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                                                                            'bg-gray-100 text-gray-600'}`, children: item.status === 'completed' ? 'Complété' :
                                                                        item.status === 'in-progress' ? 'En cours' :
                                                                            'À venir' })] })] }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-700 mb-4", children: item.description }), (0, jsx_runtime_1.jsx)("div", { className: "w-full bg-gray-200 rounded-full h-3 overflow-hidden", children: (0, jsx_runtime_1.jsx)("div", { className: `h-full ${getProgressColor(item.pourcentage)} transition-all duration-500 rounded-full`, style: { width: `${item.pourcentage}%` } }) })] })] }), index < timelineItems.length - 1 && ((0, jsx_runtime_1.jsx)("div", { className: "absolute left-[34px] top-full h-6 w-0.5 bg-gray-300" }))] }, item.id))) }), (0, jsx_runtime_1.jsxs)("div", { className: "mt-12 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 text-center", children: [(0, jsx_runtime_1.jsx)("h3", { className: "text-2xl mb-4", children: "Nous avan\u00E7ons ensemble" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-700 max-w-2xl mx-auto", children: "Chaque \u00E9tape franchie nous rapproche de notre objectif : pr\u00E9senter un projet exceptionnel qui allie esth\u00E9tique, ing\u00E9nierie et passion. Restez connect\u00E9s pour suivre nos prochaines avanc\u00E9es !" })] })] })] }));
}
//# sourceMappingURL=ProgressPage.js.map