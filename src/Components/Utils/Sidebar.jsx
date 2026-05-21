
export const Sidebar = () => {
    return (
        <>
            <aside className="fixed left-0 top-0 h-full hidden md:flex flex-col py-margin-desktop bg-[#0D0D1A] w-64 border-r border-outline-variant z-40 pt-24">
                <nav className="flex-1 px-4 space-y-2">
                    {/* Active Item */}
                    <a className="flex items-center gap-4 px-4 py-3 rounded-lg border-l-4 border-primary bg-primary/10 text-primary transition-all duration-200" href="#">
                        <span className="material-symbols-outlined">grid_view</span>
                        <span className="font-label-caps text-label-caps">Dashboard</span>
                    </a>
                    <a className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-white/5 hover:text-primary transition-all duration-200 translate-x-0 hover:translate-x-1" href="#">
                        <span className="material-symbols-outlined">account_balance_wallet</span>
                        <span className="font-label-caps text-label-caps">Accounts</span>
                    </a>
                    <a className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-white/5 hover:text-primary transition-all duration-200 translate-x-0 hover:translate-x-1" href="#">
                        <span className="material-symbols-outlined">receipt_long</span>
                        <span className="font-label-caps text-label-caps">Transactions</span>
                    </a>
                    <a className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-white/5 hover:text-primary transition-all duration-200 translate-x-0 hover:translate-x-1" href="#">
                        <span className="material-symbols-outlined">leaderboard</span>
                        <span className="font-label-caps text-label-caps">Analytics</span>
                    </a>
                    <a className="flex items-center gap-4 px-4 py-3 rounded-lg text-on-surface-variant hover:bg-white/5 hover:text-primary transition-all duration-200 translate-x-0 hover:translate-x-1" href="#">
                        <span className="material-symbols-outlined">settings</span>
                        <span className="font-label-caps text-label-caps">Settings</span>
                    </a>
                </nav>
                <div className="px-6 mt-auto">
                    <button className="w-full py-4 bg-linear-to-r from-[#FF2D78] to-[#FF6B2B] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(255,45,120,0.5)] transition-all duration-300">
                        <span className="material-symbols-outlined">add_circle</span>
                        New Entry
                    </button>
                </div>
            </aside>
        </>
    )
}
