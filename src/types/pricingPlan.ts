export interface PricingPlan {
    tier: string;
    price: number;
    storageSize: number;
    features: string[];
    cardTheme: string;
}