export const AIOptimizer = () => (
    <section className="mt-12">
        <div className="glass-card border border-white/10 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/20 blur-[80px]" />
            <div className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full bg-tertiary/20 blur-[80px]" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
                <div className="max-w-xl">
                    <h2 className="font-headline-lg text-headline-lg text-white mb-4">AI Budget Optimizer</h2>
                    <p className="text-body-md text-on-surface-variant mb-6">
                        Based on your current spending, you can save an additional{" "}
                        <span className="text-primary font-bold">$340.00</span> this month by optimizing your "Dining Out" habits.
                    </p>
                    <button className="px-8 py-3 rounded-full bg-linear-to-r from-[#FF2D78] to-[#FF6B2B] text-white font-bold hover:shadow-[0_0_24px_rgba(255,45,120,0.5)] transition-all active:scale-95">
                        Set New Budget Goals
                    </button>
                </div>

                <div className="shrink-0 w-full lg:w-96 glass-card border border-white/5 p-4 rounded-2xl">
                    <div className="flex items-center gap-4 mb-4">
                        <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                        <span className="font-label-caps text-label-caps text-white">Suggested Adjustment</span>
                    </div>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-body-sm text-on-surface-variant">Dining Out</span>
                            <span className="text-body-sm text-secondary font-bold">$500 → $350</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-body-sm text-on-surface-variant">Entertainment</span>
                            <span className="text-body-sm text-primary font-bold">$400 → $450</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
)