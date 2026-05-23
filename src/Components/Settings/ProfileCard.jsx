const AVATAR_URL = "https://lh3.googleusercontent.com/aida-public/AB6AXuDJfpxj6yIxJYz3MPI6ZhCktZVyaFm_sTlGC9SYQIAOZ3sBYW1pfpfgAq-vBvX3CtcSLqbf9t7xMW02qxlDC-IUIT6jmcgsexJr5VQAhY2T8_YwqpLDYEO8l1q3bxAoh6sFUVBd-0WdiaSNpfrvbbeYJY6-6ohgmD2ANT0krn8IT_XFNs3JBiYU19Ns48HDT4szO5FxYvigtR6ZeactrEOgelgLuojcYtP1L25O7Qq5l8zn_Wc65jKJ9s3NwuDBmPlt6chxxjaZNqM"

export const ProfileCard = ({ name = "Max Neon", role = "SYSTEM ADMINISTRATOR", level = 42, progress = 75 }) => (
    <div className="glass-card border border-white/10 rounded-xl p-8 flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary to-tertiary" />

        <div className="relative mb-6">
            <div className="w-32 h-32 rounded-full border-[3px] border-tertiary overflow-hidden shadow-[0_0_20px_rgba(170,116,255,0.4)]">
                <img alt="User Profile" className="w-full h-full object-cover" src={AVATAR_URL} />
            </div>
            <button className="absolute bottom-0 right-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-on-primary hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-[20px]">edit</span>
            </button>
        </div>

        <h3 className="font-headline-lg-mobile text-headline-lg-mobile mb-1">{name}</h3>
        <p className="text-tertiary font-label-caps text-[11px] tracking-[0.2em] mb-6">{role}</p>

        <div className="w-full pt-6 border-t border-white/10 space-y-4">
            <div className="flex justify-between items-center text-body-sm">
                <span className="text-on-surface-variant">Account Level</span>
                <span className="text-primary font-bold">Lvl {level}</span>
            </div>
            <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                <div
                    className="h-full bg-linear-to-r from-primary to-tertiary shadow-[0_0_10px_rgba(255,76,131,0.4)]"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    </div>
)