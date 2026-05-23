import { Card } from "../Utils/Card"

export const PortfolioCard = () => (
    <Card className="p-8 rounded-3xl neon-border-primary neon-glow-primary relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 blur-3xl rounded-full"></div>
        <div className="relative z-10">
            <span className="text-on-surface-variant font-label-caps tracking-widest block mb-2">PRIMARY PORTFOLIO</span>
            <h2 className="font-display-lg text-display-lg text-white font-extrabold mb-6">$84,201.12</h2>
            <div className="flex gap-4">
                <button className="flex-1 py-3 bg-white/10 border border-white/20 rounded-xl font-label-caps text-xs hover:bg-white/20 transition-all cursor-pointer">DEPOSIT</button>
                <button className="flex-1 py-3 bg-white/10 border border-white/20 rounded-xl font-label-caps text-xs hover:bg-white/20 transition-all cursor-pointer">WITHDRAW</button>
            </div>
        </div>
    </Card>
)