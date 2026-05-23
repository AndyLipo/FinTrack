import { PortfolioCard } from "./PortfolioCard"
import { RecentActivity } from "./RecentActivity"
import { SpendingOverview } from "./SpendingOverview"

export const BentoGrid = () => (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-8">
            <PortfolioCard />
            <RecentActivity />
        </div>
        <div className="lg:col-span-2">
            <SpendingOverview />
        </div>
    </section>
)