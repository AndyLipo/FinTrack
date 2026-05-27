export const ICONS = [
    { name: "movie", label: "Entret." },
    { name: "restaurant", label: "Comida" },
    { name: "home_work", label: "Hogar" },
    { name: "directions_car", label: "Transport" },
    { name: "favorite", label: "Salud" },
    { name: "school", label: "Aprend." },
    { name: "bolt", label: "Servicios" },
    { name: "flight", label: "Viajes" },
    { name: "fitness_center", label: "Gym" },
    { name: "pets", label: "Mascotas" },
    { name: "sports_esports", label: "Gaming" },
    { name: "checkroom", label: "Ropa" },
    { name: "local_cafe", label: "Café" },
    { name: "music_note", label: "Música" },
    { name: "savings", label: "Ahorro" },
    { name: "phone_iphone", label: "Tech" },
    { name: "celebration", label: "Ocio" },
    { name: "more_horiz", label: "Otro" },
]

export const IconPicker = ({ selected, onChange }) => (
    <div>
        <label className="block font-label-caps text-label-caps text-on-surface-variant mb-3">ÍCONO</label>
        <div className="grid grid-cols-6 gap-2">
            {ICONS.map((ic) => (
                <div
                    key={ic.name}
                    onClick={() => onChange(ic.name)}
                    className={`flex flex-col items-center justify-center gap-1 py-3 rounded-xl border cursor-pointer transition-all active:scale-95
                        ${selected === ic.name
                            ? "border-primary bg-primary/10 shadow-[0_0_10px_rgba(255,76,131,0.2)]"
                            : "border-white/10 hover:border-primary/50"
                        }`}
                >
                    <span className="material-symbols-outlined text-primary text-2xl">{ic.name}</span>
                    <span className="font-label-caps text-[9px] text-on-surface-variant">{ic.label}</span>
                </div>
            ))}
        </div>
    </div>
)