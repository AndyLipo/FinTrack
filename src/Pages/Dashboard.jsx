import { MetricCards } from "../Components/Dashboard/MetricCards"
import { BentoGrid } from "../Components/Dashboard/BentoGrid"

const Dashboard = () => (
    <>
        <MetricCards />
        <BentoGrid />

        {/* Banner */}
        <section className="mt-12 rounded-3xl overflow-hidden h-48 relative group">
            <img alt="Synthwave Background" className="w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjinj2BAkl3OVxlmbqLTsZbT4_e596iEHIBJhsOFAXgPlxx-8HvnEVmv-3vITX_N985OgxUxpoHqw-egaoh71HCXKGkTZ1UlSEpy76NLuum3UlqX4Vdbg64DgfTx5RhC2-ub7cLOLT34-mSoCXmYlafOb3nh8AlN5AHqLLp798RnnFT2IpHJy-6ItQl3-ORcVQxNwli2tXdujAgFEcfg6zKUye1rUfP3zivLkQbSO1IktwQNf9M4AdcOaPAZRU3p6pfBzXlzpFaYY" />
            <div className="absolute inset-0 bg-linear-to-t from-[#1f0f12] via-transparent to-transparent"></div>
            <div className="absolute inset-0 flex items-center px-12">
                <div>
                    <h4 className="font-display-lg text-headline-lg text-white mb-2">Master Your Future</h4>
                    <p className="text-on-surface-variant max-w-md">Our AI-driven analytics predict your next financial milestone. Stay ahead of the curve.</p>
                </div>
            </div>
        </section>
    </>
)

export default Dashboard