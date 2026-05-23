export const AmountField = ({ value, onChange }) => (
    <div className="relative group">
        <label className="block font-label-caps text-label-caps text-on-surface-variant mb-1 text-[10px]">AMOUNT</label>
        <div className="flex items-baseline space-x-2 border-b-2 border-outline-variant focus-within:border-primary transition-all duration-300 pb-1">
            <span className="text-2xl text-primary opacity-50 font-bold">$</span>
            <input
                autoFocus
                type="number"
                step="0.01"
                placeholder="0.00"
                value={value}
                onChange={e => onChange(e.target.value)}
                className="w-full bg-transparent border-none focus:ring-0 text-2xl font-bold text-white placeholder-white/20 outline-none"
            />
        </div>
    </div>
)