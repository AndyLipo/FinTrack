import { NavLink } from "react-router-dom"

const NAV_ITEMS = [
    { to: "/", icon: "grid_view", label: "Dashboard" },
    { to: "/budget", icon: "payments", label: "Budget" },
    { to: "/transactions", icon: "receipt_long", label: "Transactions" },
    { to: "/analytics", icon: "leaderboard", label: "Analytics" },
    { to: "/settings", icon: "settings", label: "Settings" },
]

export const Sidebar = () => (
    <aside className="fixed left-0 top-0 h-full hidden md:flex flex-col bg-[#0D0D1A] w-64 border-r border-outline-variant z-40 pt-24">
        <nav className="flex-1 px-4 space-y-2">
            {NAV_ITEMS.map(({ to, icon, label }) => (
                <NavLink
                    key={to}
                    to={to}
                    end={to === "/"}
                    className={({ isActive }) =>
                        `flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-200 font-label-caps text-label-caps
                        ${isActive
                            ? "border-l-4 border-primary bg-primary/10 text-primary"
                            : "text-on-surface-variant hover:bg-white/5 hover:text-primary hover:translate-x-1"
                        }`
                    }
                >
                    <span className="material-symbols-outlined">{icon}</span>
                    {label}
                </NavLink>
            ))}
        </nav>
        <div className="px-6 pb-8 mt-auto">
            <button className="w-full py-4 bg-linear-to-r from-[#FF2D78] to-[#FF6B2B] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(255,45,120,0.5)] transition-all active:scale-95">
                <span className="material-symbols-outlined">add_circle</span>
                New Entry
            </button>
        </div>
    </aside>
)