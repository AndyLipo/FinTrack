import { useState } from "react"

const TOGGLES = [
    { id: "biometrics", label: "Two-Factor Biometrics", desc: "Require retinal scan for transactions over $1,000.", default: true },
    { id: "neon", label: "Neon Aura Effects", desc: "Enable dynamic ambient lighting based on balance.", default: true },
    { id: "ghosting", label: "Transaction Ghosting", desc: "Anonymize sender names in the public ledger view.", default: false },
]

const Toggle = ({ id, label, desc, defaultChecked }) => {
    const [on, setOn] = useState(defaultChecked)
    return (
        <div className="p-8 flex items-center justify-between hover:bg-white/5 transition-colors">
            <div>
                <p className="font-bold text-body-md mb-1">{label}</p>
                <p className="text-body-sm text-on-surface-variant">{desc}</p>
            </div>
            <button
                onClick={() => setOn(!on)}
                className={`relative w-12 h-6 rounded-full transition-all duration-300 ${on ? "bg-primary shadow-[0_0_10px_rgba(255,76,131,0.5)]" : "bg-surface-variant"}`}
            >
                <span className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${on ? "translate-x-7" : "translate-x-1"}`} />
            </button>
        </div>
    )
}

export const SystemPreferences = () => (
    <div className="glass-card border border-white/10 rounded-xl overflow-hidden">
        <div className="p-8 border-b border-white/5">
            <h4 className="font-headline-lg-mobile text-headline-lg-mobile text-tertiary">System Preferences</h4>
        </div>
        <div className="divide-y divide-white/5">
            {TOGGLES.map((t) => (
                <Toggle key={t.id} id={t.id} label={t.label} desc={t.desc} defaultChecked={t.default} />
            ))}
        </div>
    </div>
)