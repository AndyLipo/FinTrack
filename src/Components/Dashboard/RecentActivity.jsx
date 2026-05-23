import { Card } from "../Utils/Card"

const TRANSACTIONS = [
    { icon: "shopping_bag", color: "bg-primary/20 text-primary", name: "Cyberpunk Apparel", date: "Today, 2:45 PM", amount: "-$120.00", positive: false },
    { icon: "restaurant", color: "bg-secondary/20 text-secondary", name: "Neon Ramen Bar", date: "Yesterday, 8:12 PM", amount: "-$45.20", positive: false },
    { icon: "work", color: "bg-tertiary/20 text-tertiary", name: "Consulting Fee", date: "Oct 24, 10:00 AM", amount: "+$2,400.00", positive: true },
    { icon: "subscriptions", color: "bg-primary/20 text-primary", name: "NetStream Plus", date: "Oct 23, 4:20 AM", amount: "-$15.99", positive: false },
    { icon: "directions_car", color: "bg-secondary/20 text-secondary", name: "Aero-Cab Rides", date: "Oct 22, 11:30 PM", amount: "-$32.00", positive: false },
]

export const RecentActivity = () => (
    <Card className="p-6 rounded-3xl">
        <div className="flex justify-between items-center mb-6">
            <h3 className="font-headline-lg text-headline-lg-mobile text-on-surface">Recent Activity</h3>
            <a className="text-primary text-sm hover:underline" href="#">View All</a>
        </div>
        <div className="space-y-2">
            {TRANSACTIONS.map((tx) => (
                <div key={tx.name} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/5 transition-all">
                    <div className="flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${tx.color}`}>
                            <span className="material-symbols-outlined">{tx.icon}</span>
                        </div>
                        <div>
                            <div className="text-sm font-semibold text-on-surface">{tx.name}</div>
                            <div className="text-xs text-on-surface-variant">{tx.date}</div>
                        </div>
                    </div>
                    <div className={`font-bold ${tx.positive ? "text-primary" : "text-on-surface"}`}>{tx.amount}</div>
                </div>
            ))}
        </div>
    </Card>
)