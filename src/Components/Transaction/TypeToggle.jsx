export const TypeToggle = ({ type, onChange }) => {
    const activeClass = "text-primary border-primary/40 bg-primary/10 shadow-[0_0_15px_rgba(255,76,131,0.2)]"
    const inactiveClass = "text-on-surface-variant border-transparent hover:bg-white/5"

    return (
        <div className="grid grid-cols-2 gap-4">
            {["gasto", "ingreso"].map((t) => (
                <button
                    key={t}
                    type="button"
                    onClick={() => onChange(t)}
                    className={`py-4 glass-card border rounded-xl font-label-caps text-label-caps transition-all duration-300
                        ${type === t ? activeClass : inactiveClass}`}
                >
                    {t.toUpperCase()}
                </button>
            ))}
        </div>
    )
}