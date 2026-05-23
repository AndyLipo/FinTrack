const NODES = [
    { icon: "account_balance", label: "Main Bank", color: "text-primary", status: "Active" },
    { icon: "currency_bitcoin", label: "Crypto Wallet", color: "text-tertiary", status: "Active" },
]

export const LinkedNodes = () => (
    <div className="glass-card border border-white/10 rounded-xl p-6">
        <h4 className="font-label-caps text-label-caps text-on-surface-variant mb-6 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[18px]">hub</span>
            LINKED NODES
        </h4>
        <div className="space-y-4">
            {NODES.map((node) => (
                <div key={node.label} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5 hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded bg-surface-container flex items-center justify-center">
                            <span className={`material-symbols-outlined ${node.color}`}>{node.icon}</span>
                        </div>
                        <span className="text-body-sm font-semibold">{node.label}</span>
                    </div>
                    <span className="text-[10px] text-green-400 font-bold uppercase tracking-widest">{node.status}</span>
                </div>
            ))}
            <button className="w-full py-2 border-2 border-dashed border-outline-variant rounded-lg text-on-surface-variant text-[12px] font-bold hover:border-primary/50 hover:text-primary transition-all">
                + ADD CONNECTION
            </button>
        </div>
    </div>
)