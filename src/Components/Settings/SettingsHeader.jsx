export const SettingsHeader = () => (
    <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-2">User Settings</h2>
            <p className="text-on-surface-variant max-w-xl">Configure your retro-future financial environment. All changes are encrypted and synchronized in real-time.</p>
        </div>
        <div className="flex gap-3">
            <button className="px-6 py-2 glass-card border border-white/10 rounded-lg text-on-surface-variant font-label-caps text-[12px] hover:bg-white/10 transition-all">Discard</button>
            <button className="px-6 py-2 bg-primary-container text-white rounded-lg font-label-caps text-[12px] hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(255,76,131,0.3)]">Save Config</button>
        </div>
    </div>
)