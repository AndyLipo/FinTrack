const BARS = [
    { day: "MON", height: "40%" },
    { day: "TUE", height: "65%" },
    { day: "WED", height: "85%" },
    { day: "THU", height: "55%" },
    { day: "FRI", height: "95%" },
    { day: "SAT", height: "70%" },
    { day: "SUN", height: "45%" },
]

export const SpendingOverview = () => (
    <div className="glass-card border border-white/10 p-8 rounded-3xl h-full flex flex-col">
        <div className="flex justify-between items-center mb-12">
            <div>
                <h3 className="font-headline-lg text-headline-lg text-on-surface">Spending Overview</h3>
                <p className="text-on-surface-variant text-sm">Real-time expenditure tracking across categories</p>
            </div>
            <div className="flex bg-white/5 p-1 rounded-lg border border-white/10">
                <button className="px-4 py-1 text-xs font-label-caps bg-primary text-on-primary rounded-md">WEEK</button>
                <button className="px-4 py-1 text-xs font-label-caps text-on-surface-variant hover:text-on-surface">MONTH</button>
                <button className="px-4 py-1 text-xs font-label-caps text-on-surface-variant hover:text-on-surface">YEAR</button>
            </div>
        </div>

        {/* Chart */}
        <div className="flex-1 flex items-end justify-between gap-2 md:gap-4 px-4 pb-4 border-b border-white/5 relative">
            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-10 py-4">
                {[...Array(4)].map((_, i) => <div key={i} className="border-t border-white cursor-pointer"></div>)}
            </div>
            {BARS.map((bar) => (
                <div key={bar.day} className="relative flex-1 flex flex-col items-center">
                    <div
                        className="w-full bg-linear-to-t from-[#FF2D78] to-[#FF6B2B] rounded-t-lg hover:brightness-125 transition-all shadow-[0_0_15px_rgba(255,45,120,0.4)]"
                        style={{ height: bar.height }}
                    />
                    <span className="text-[10px] md:text-xs font-label-caps mt-4 text-on-surface-variant">{bar.day}</span>
                </div>
            ))}
        </div>

        {/* Insights */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>insights</span>
                    <span className="text-sm font-bold text-on-surface">Saving Insight</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">You spent 15% less on dining this week. Redirect those $240 to your "New Car" fund?</p>
            </div>
            <div className="p-4 rounded-2xl bg-white/5 border border-white/5">
                <div className="flex items-center gap-3 mb-2">
                    <span className="material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
                    <span className="text-sm font-bold text-on-surface">Smart Alert</span>
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed">Recurring subscription 'CyberStream' increased by $2.00. Review your active plans.</p>
            </div>
        </div>
    </div>
)