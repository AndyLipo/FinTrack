export const DangerZone = () => (
    <div className="p-8 border border-error-container/30 bg-error-container/5 rounded-xl flex items-center justify-between">
        <div>
            <h5 className="text-error font-bold mb-1">Delete Data Archive</h5>
            <p className="text-body-sm text-error/60">Permanently wipe your financial history from the grid.</p>
        </div>
        <button className="px-6 py-2 border border-error text-error font-bold rounded hover:bg-error hover:text-on-error transition-all active:scale-95">
            TERMINATE
        </button>
    </div>
)