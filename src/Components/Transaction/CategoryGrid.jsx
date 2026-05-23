const CATEGORIES = [
    { id: "shopping", icon: "shopping_bag", label: "SHOPPING" },
    { id: "food", icon: "restaurant", label: "FOOD" },
    { id: "rent", icon: "home_work", label: "RENT" },
    { id: "entertainment", icon: "sports_esports", label: "FUN" },
    { id: "transport", icon: "directions_car", label: "TRAVEL" },
    { id: "health", icon: "medical_services", label: "HEALTH" },
    { id: "education", icon: "school", label: "LEARN" },
    { id: "bills", icon: "bolt", label: "BILLS" },
    { id: "other", icon: "more_horiz", label: "OTHER" },
]

export const CategoryGrid = ({ selected, onChange }) => (
    <div>
        <label className="block font-label-caps text-label-caps text-on-surface-variant mb-3">CATEGORY</label>
        <div className="grid grid-cols-3 gap-2">
            {CATEGORIES.map((cat) => (
                <div
                    key={cat.id}
                    onClick={() => onChange(cat.id)}
                    className={`glass-card border rounded-xl flex flex-col items-center justify-center cursor-pointer transition-all active:scale-95 group py-3 gap-1
                        ${selected === cat.id
                            ? "border-primary bg-primary/10"
                            : "border-white/10 hover:border-primary/50"
                        }`}
                >
                    <span className="material-symbols-outlined text-primary text-xl group-hover:scale-110 transition-transform">
                        {cat.icon}
                    </span>
                    <span className="font-label-caps text-[9px] text-on-surface-variant">{cat.label}</span>
                </div>
            ))}
        </div>
    </div>
)