interface NavigationProps {
    currentPage: 'home' | 'project' | 'progress' | 'news' | 'team' | 'engineering' | 'partners' | 'faq' | 'admin';
    onNavigate: (page: 'home' | 'project' | 'progress' | 'news' | 'team' | 'engineering' | 'partners' | 'faq' | 'admin') => void;
}
export declare function Navigation({ currentPage, onNavigate }: NavigationProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Navigation.d.ts.map