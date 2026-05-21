
export const Navbar = () => {
    return (
        <>
            <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 md:px-12 h-16 bg-surface/5 backdrop-blur-xl border-b border-white/10 shadow-[0_0_20px_rgba(255,76,131,0.2)]">
                <div className="flex items-center gap-8">
                    <h1 className="font-display-lg text-[24px] md:text-display-lg font-bold tracking-tighter text-primary">FINTRACK</h1>
                    <div className="hidden md:flex items-center bg-white/5 rounded-full px-4 py-1 border border-white/10">
                        <span className="material-symbols-outlined text-on-surface-variant text-sm mr-2">search</span>
                        <input className="bg-transparent border-none focus:ring-0 text-sm text-on-surface placeholder:text-on-surface-variant w-48" placeholder="Quick search..." type="text" />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button className="p-2 rounded-full hover:bg-white/10 transition-all duration-300 active:scale-95">
                        <span className="material-symbols-outlined text-primary">notifications</span>
                    </button>
                    <button className="flex items-center gap-2 p-1 pl-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                        <span className="text-sm font-label-caps text-on-surface hidden md:block">ALEX NEON</span>
                        <span className="material-symbols-outlined text-primary text-3xl">account_circle</span>
                    </button>
                </div>
            </header>
        </>
    )
}
