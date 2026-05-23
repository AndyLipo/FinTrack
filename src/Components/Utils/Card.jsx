export const Card = ({ label, icon, value, trendIcon, trendText, trendColor = "text-secondary", children, className = "" }) => {
    return (
        <div className={`glass-card border border-white/10 hover:border-primary/50 p-6 rounded-2xl group transition-all duration-300 ${className}`}>
            {children ? children : (
                <>
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-on-surface-variant font-label-caps">{label}</span>
                        <span className="material-symbols-outlined text-primary">{icon}</span>
                    </div>
                    <div className="font-numeric-lg text-numeric-lg text-on-surface">{value}</div>
                    <div className={`mt-2 text-xs ${trendColor} flex items-center gap-1`}>
                        <span className="material-symbols-outlined text-xs">{trendIcon}</span>
                        {trendText}
                    </div>
                </>
            )}
        </div>
    )
}