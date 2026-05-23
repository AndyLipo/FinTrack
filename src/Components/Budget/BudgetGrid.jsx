import { BudgetCategoryCard } from "./BudgetCategoryCard"

const CATEGORIES = [
    { icon: "movie", name: "Entertainment", spent: 240, limit: 400, status: "safe" },
    { icon: "restaurant", name: "Dining Out", spent: 620, limit: 500, status: "over" },
    { icon: "subscriptions", name: "Subscriptions", spent: 145, limit: 200, status: "safe" },
    { icon: "shopping_cart", name: "Groceries", spent: 480, limit: 800, status: "safe" },
    { icon: "directions_car", name: "Transport", spent: 285, limit: 300, status: "warn" },
]

export const BudgetGrid = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {CATEGORIES.map((cat) => (
            <BudgetCategoryCard key={cat.name} {...cat} />
        ))}

        {/* Add Category CTA */}
        <div className="border-2 border-dashed border-primary/20 rounded-2xl flex flex-col items-center justify-center p-8 hover:bg-primary/5 transition-all cursor-pointer group">
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform mb-4">
                <span className="material-symbols-outlined text-4xl">add</span>
            </div>
            <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary">Add Category</span>
            <p className="text-body-sm text-on-surface-variant mt-2 text-center">Customize your tracking groups</p>
        </div>
    </div>
)