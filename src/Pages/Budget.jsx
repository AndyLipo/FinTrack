import { BudgetHeader } from "../Components/Budget/BudgetHeader"
import { BudgetGrid } from "../Components/Budget/BudgetGrid"
import { AIOptimizer } from "../Components/Budget/AIOptimizer"

const Budget = () => (
    <>
        <BudgetHeader
            totalLimit={4250}
            safeToSpend={1124.50}
            month="October 2023"
            daysLeft={12}
        />
        <BudgetGrid />
        <AIOptimizer />
    </>
)

export default Budget