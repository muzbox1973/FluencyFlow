export enum View {
    HOME = 'home',
    TECHNOLOGY = 'technology',
    CURRICULUM = 'curriculum',
    REVIEWS = 'reviews',
    PRICING = 'pricing'
}

export interface NavItem {
    label: string;
    view: View;
    highlight?: boolean;
}