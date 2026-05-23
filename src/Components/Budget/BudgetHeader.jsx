export const BudgetHeader = ({ totalLimit, safeToSpend, month, daysLeft }) => (
    <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
            <h1 className="font-headline-lg text-headline-lg text-primary mb-2">Monthly Budget</h1>
            <p className="text-on-surface-variant">{month} • {daysLeft} days remaining in cycle</p>
        </div>
        <div className="flex gap-4">
            <div className="glass-card border border-white/10 px-6 py-3 rounded-xl">
                <span className="text-on-surface-variant text-body-sm block mb-1">Total Limit</span>
                <span className="font-numeric-lg text-numeric-lg text-white">${totalLimit.toLocaleString()}</span>
            </div>
            <div className="glass-card border border-white/10 px-6 py-3 rounded-xl">
                <span className="text-on-surface-variant text-body-sm block mb-1">Safe to Spend</span>
                <span className="font-numeric-lg text-numeric-lg text-primary">${safeToSpend.toLocaleString()}</span>
            </div>
        </div>
    </header>
)