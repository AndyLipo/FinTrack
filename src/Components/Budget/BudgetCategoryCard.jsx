import { Card } from "../Utils/Card"

const STATUS_STYLES = {
    safe: { text: "text-primary", bar: "bg-primary-container", label: "On Track" },
    over: { text: "text-secondary", bar: "bg-secondary-container", label: "Over Budget" },
    warn: { text: "text-primary", bar: "bg-primary-container", label: "Caution" },
}

export const BudgetCategoryCard = ({ icon, name, spent, limit, status = "safe", color, onEdit }) => {
    const pct = Math.min((spent / limit) * 100, 100)
    const styles = STATUS_STYLES[status]
    const balance = limit - spent

    return (
        <Card className="p-6 rounded-2xl hover:scale-[1.02] transition-transform duration-300">
            <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-3">
                    <div className={`h-12 w-12 rounded-xl ${status === "over" ? "bg-secondary-container/10" : "bg-primary/10"} flex items-center justify-center ${styles.text}`}>
                        <span className="material-symbols-outlined text-3xl">{icon}</span>
                    </div>
                    <div>
                        <h3 className="font-headline-lg-mobile text-headline-lg-mobile text-white">{name}</h3>
                        <span className={`text-body-sm ${styles.text}`}>{styles.label}</span>
                    </div>
                </div>
                {/* ← tres puntitos */}
                <button
                    onClick={onEdit}
                    className="text-on-surface-variant hover:text-white transition-colors cursor-pointer"
                >
                    <span className="material-symbols-outlined">more_vert</span>
                </button>
            </div>

            <div className="flex justify-between text-body-sm mb-2">
                <span className="text-on-surface-variant">Spent: ${spent.toFixed(2)}</span>
                <span className="text-on-surface-variant">Limit: ${limit.toFixed(2)}</span>
            </div>

            <div className="h-4 w-full bg-white/5 rounded-full overflow-hidden mb-6">
                <div className={`h-full ${styles.bar} transition-all duration-500`} style={{ width: `${pct}%` }} />
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-white/5">
                <span className="text-on-surface-variant text-body-sm">
                    {status === "over" ? "Deficit" : "Available Balance"}
                </span>
                <span className={`font-numeric-lg text-2xl ${status === "over" ? "text-secondary" : "text-white"}`}>
                    {status === "over" ? "-" : ""}${Math.abs(balance).toFixed(2)}
                </span>
            </div>
        </Card>
    )
}