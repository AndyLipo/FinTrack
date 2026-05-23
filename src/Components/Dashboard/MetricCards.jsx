import { Card } from "../Utils/Card"

const CARDS = [
    { label: "Total Balance", icon: "account_balance", value: "$124,592.00", trendIcon: "trending_up", trendText: "+2.4% from last month", trendColor: "text-secondary" },
    { label: "Monthly Income", icon: "payments", value: "$12,400.00", trendIcon: "arrow_upward", trendText: "Stable flow", trendColor: "text-primary" },
    { label: "Monthly Spending", icon: "shopping_cart", value: "$4,821.50", trendIcon: "trending_down", trendText: "12% vs budget", trendColor: "text-error" },
    { label: "Savings Rate", icon: "savings", value: "32.8%", trendIcon: "verified", trendText: "Target achieved", trendColor: "text-tertiary" },
]

export const MetricCards = () => (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {CARDS.map((card) => (
            <Card key={card.label} {...card} />
        ))}
    </section>
)