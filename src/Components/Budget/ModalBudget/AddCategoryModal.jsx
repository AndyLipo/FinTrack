import { useState } from "react"
import { ICONS } from "./IconPicker"
import { COLORS, COLOR_MAP } from "./ColorPicker"



export const AddCategoryModal = ({ onClose, onSave, initialData = null }) => {
    const isEditing = !!initialData

    const [name, setName] = useState(initialData?.name ?? "")
    const [limit, setLimit] = useState(initialData?.limit ?? "")
    const [icon, setIcon] = useState(initialData?.icon ?? "movie")
    const [color, setColor] = useState(initialData?.color ?? "pink")
    const [error, setError] = useState(null)

    const handleSave = () => {
        if (!name.trim()) return setError("Ingresá un nombre.")
        if (!limit || limit <= 0) return setError("Ingresá un límite mayor a 0.")
        onSave({ name: name.trim(), limit: parseFloat(limit), icon, color })
        onClose()
    }

    const colors = COLOR_MAP[color]

    return (
        <div
            className="fixed inset-0 z-50 bg-background/60 backdrop-blur-md flex items-center justify-center px-4 pt-3 pb-3"
            onClick={onClose}
        >
            <div
                className="glass-card border border-white/10 w-full max-w-lg rounded-2xl p-8 relative shadow-[0_0_50px_rgba(255,76,131,0.15)]"
                onClick={e => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex justify-between items-center mb-4">
                    <div>
                        <span className="font-label-caps text-[10px] text-primary tracking-[0.2em]">BUDGET</span>
                        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-white leading-tight">
                            {isEditing ? "Edit Category" : "Add Category"}
                        </h2>
                    </div>
                    <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-on-surface-variant text-lg">close</span>
                    </button>
                </div>

                {/* Nombre + Límite en una fila */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                    <div>
                        <label className="block font-label-caps text-[10px] text-on-surface-variant mb-1.5 uppercase">Nombre</label>
                        <input
                            type="text"
                            placeholder="ej. Entretenimiento"
                            value={name}
                            onChange={e => { setName(e.target.value); setError(null) }}
                            className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-3 py-2 text-xs text-on-surface focus:border-primary focus:ring-0 outline-none transition-all"
                        />
                    </div>
                    <div>
                        <label className="block font-label-caps text-[10px] text-on-surface-variant mb-1.5 uppercase">Límite mensual</label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-xs font-semibold">$</span>
                            <input
                                type="number"
                                placeholder="0"
                                min="0"
                                step="10"
                                value={limit}
                                onChange={e => { setLimit(e.target.value); setError(null) }}
                                className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg pl-6 pr-3 py-2 text-xs text-on-surface focus:border-primary focus:ring-0 outline-none transition-all"
                            />
                        </div>
                    </div>
                </div>

                {/* Icon picker compacto */}
                <label className="block font-label-caps text-[10px] text-on-surface-variant mb-2 uppercase">Ícono</label>
                {/* íconos — gap y padding más grandes */}
                <div className="grid grid-cols-6 gap-2 mb-5">
                    {ICONS.map((ic) => (
                        <div
                            key={ic.name}
                            onClick={() => setIcon(ic.name)}
                            className={`flex flex-col items-center justify-center gap-1 py-3 rounded-lg border cursor-pointer transition-all active:scale-95
                ${icon === ic.name
                                    ? "border-primary bg-primary/10"
                                    : "border-white/10 hover:border-primary/50"
                                }`}
                        >
                            <span className="material-symbols-outlined text-primary" style={{ fontSize: "22px" }}>{ic.name}</span>
                            <span className="font-label-caps text-[9px] text-on-surface-variant">{ic.label}</span>
                        </div>
                    ))}
                </div>

                {/* Color picker */}
                <label className="block font-label-caps text-[10px] text-on-surface-variant mb-2 uppercase">Color</label>
                {/* color dots más grandes */}
                <div className="flex gap-3 flex-wrap mb-5">
                    {COLORS.map((c) => (
                        <div
                            key={c.id}
                            onClick={() => setColor(c.id)}
                            className={`w-8 h-8 rounded-full cursor-pointer transition-all ${c.bg}
                ${color === c.id ? `scale-110 ring-2 ring-white ring-offset-2 ring-offset-background` : "hover:scale-110"}`}
                        />
                    ))}
                </div>

                {error && (
                    <p className="text-xs text-error flex items-center gap-1 mb-3">
                        <span className="material-symbols-outlined text-sm">error</span>
                        {error}
                    </p>
                )}

                {/* Footer */}
                <div className="flex gap-2">
                    <button onClick={onClose} className="flex-1 py-3 rounded-xl border border-white/15 text-on-surface-variant font-label-caps text-sm hover:bg-white/5 transition-al cursor-pointer">
                        Cancelar
                    </button>
                    <button onClick={handleSave} className="flex-[2] py-3 rounded-xl bg-gradient-to-r from-[#FF2D78] to-[#FF6B2B] text-white font-label-caps text-sm hover:shadow-[0_0_20px_rgba(255,45,120,0.4)] transition-all active:scale-95 cursor-pointer">
                        {isEditing ? "Guardar cambios" : "Guardar categoría"}
                    </button>
                </div>
            </div>
        </div>
    )
}