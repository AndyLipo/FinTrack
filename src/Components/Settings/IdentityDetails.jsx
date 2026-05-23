export const IdentityDetails = () => (
    <div className="glass-card border border-white/10 rounded-xl p-8">
        <h4 className="font-headline-lg-mobile text-headline-lg-mobile mb-8 text-primary">Identity Details</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
                { label: "Full Name", type: "text", value: "Maximus Neon", options: null },
                { label: "Cyber Address", type: "email", value: "max.neon@fintrack.io", options: null },
            ].map((field) => (
                <div key={field.label} className="space-y-2">
                    <label className="block font-label-caps text-[11px] text-on-surface-variant px-1 uppercase">{field.label}</label>
                    <input
                        type={field.type}
                        defaultValue={field.value}
                        className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-body-md focus:border-primary focus:ring-0 outline-none transition-all"
                    />
                </div>
            ))}

            <div className="space-y-2">
                <label className="block font-label-caps text-[11px] text-on-surface-variant px-1 uppercase">Timezone</label>
                <select className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-body-md focus:border-primary focus:ring-0 outline-none transition-all appearance-none">
                    <option>Neo-Tokyo (GMT+9)</option>
                    <option>Cyber-City (GMT-5)</option>
                    <option defaultValue>Neon-London (GMT+0)</option>
                </select>
            </div>

            <div className="space-y-2">
                <label className="block font-label-caps text-[11px] text-on-surface-variant px-1 uppercase">Default Currency</label>
                <select className="w-full bg-surface-container-lowest border border-outline-variant rounded-lg px-4 py-3 text-body-md focus:border-primary focus:ring-0 outline-none transition-all appearance-none">
                    <option defaultValue>USD ($) - Credits</option>
                    <option>EUR (€) - E-Tokens</option>
                    <option>BTC (₿) - Satoshis</option>
                </select>
            </div>
        </div>
    </div>
)