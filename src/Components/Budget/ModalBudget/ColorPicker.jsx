export const COLORS = [
    { id: "pink", bg: "bg-[#FF2D78]", glow: "shadow-[0_0_8px_rgba(255,45,120,0.6)]" },
    { id: "orange", bg: "bg-[#FF6B2B]", glow: "shadow-[0_0_8px_rgba(255,107,43,0.6)]" },
    { id: "violet", bg: "bg-tertiary", glow: "shadow-[0_0_8px_rgba(214,186,255,0.6)]" },
    { id: "blue", bg: "bg-[#378ADD]", glow: "shadow-[0_0_8px_rgba(55,138,221,0.6)]" },
    { id: "teal", bg: "bg-[#1D9E75]", glow: "shadow-[0_0_8px_rgba(29,158,117,0.6)]" },
    { id: "amber", bg: "bg-[#EF9F27]", glow: "shadow-[0_0_8px_rgba(239,159,39,0.6)]" },
    { id: "red", bg: "bg-[#E24B4A]", glow: "shadow-[0_0_8px_rgba(226,75,74,0.6)]" },
    { id: "gray", bg: "bg-[#888780]", glow: "shadow-[0_0_8px_rgba(136,135,128,0.6)]" },
]

export const COLOR_MAP = {
    pink: { icon: "bg-[#FF2D78]/20 text-[#FF2D78]", bar: "bg-[#FF2D78]" },
    orange: { icon: "bg-[#FF6B2B]/20 text-[#FF6B2B]", bar: "bg-[#FF6B2B]" },
    violet: { icon: "bg-tertiary/20 text-tertiary", bar: "bg-tertiary" },
    blue: { icon: "bg-[#378ADD]/20 text-[#378ADD]", bar: "bg-[#378ADD]" },
    teal: { icon: "bg-[#1D9E75]/20 text-[#1D9E75]", bar: "bg-[#1D9E75]" },
    amber: { icon: "bg-[#EF9F27]/20 text-[#EF9F27]", bar: "bg-[#EF9F27]" },
    red: { icon: "bg-[#E24B4A]/20 text-[#E24B4A]", bar: "bg-[#E24B4A]" },
    gray: { icon: "bg-[#888780]/20 text-[#888780]", bar: "bg-[#888780]" },
}

export const ColorPicker = ({ selected, onChange }) => (
    <div>
        <label className="block font-label-caps text-label-caps text-on-surface-variant mb-3">COLOR</label>
        <div className="flex gap-3 flex-wrap">
            {COLORS.map((c) => (
                <div
                    key={c.id}
                    onClick={() => onChange(c.id)}
                    className={`w-7 h-7 rounded-full cursor-pointer transition-all duration-150 ${c.bg}
                        ${selected === c.id
                            ? `scale-110 ring-2 ring-white ring-offset-2 ring-offset-background ${c.glow}`
                            : "hover:scale-110"
                        }`}
                />
            ))}
        </div>
    </div>
)