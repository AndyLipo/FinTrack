import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AmountField } from "./AmountField"
import { TypeToggle } from "./TypeToggle"
import { CategoryGrid } from "./CategoryGrid"

export const TransactionModal = () => {
    const navigate = useNavigate()
    const [amount, setAmount] = useState("")
    const [type, setType] = useState("gasto")
    const [category, setCategory] = useState(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        // TODO: conectar con la API
        console.log({ amount, type, category })
        navigate(-1)
    }

    return (
        <div
            className="fixed inset-0 z-40 bg-background/60 backdrop-blur-md flex items-center justify-center px-4 pt-16"
            onClick={() => navigate(-1)}
        >
            <div
                className="glass-card border border-white/10 w-full max-w-md rounded-4xl p-6 relative overflow-hidden shadow-[0_0_50px_rgba(255,76,131,0.15)]"
                onClick={e => e.stopPropagation()}
            >
                <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary/20 blur-3xl rounded-full pointer-events-none" />

                {/* Header */}
                <div className="flex justify-between items-start mb-5">
                    <div>
                        <span className="font-label-caps text-label-caps text-primary tracking-[0.2em] text-[10px]">NEW ENTRY</span>
                        <h2 className="font-headline-lg-mobile text-headline-lg-mobile text-white mt-0.5">Transaction Details</h2>
                    </div>
                    <button
                        onClick={() => navigate(-1)}
                        className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
                    >
                        <span className="material-symbols-outlined text-on-surface-variant text-lg">close</span>
                    </button>
                </div>

                <form className="space-y-5" onSubmit={handleSubmit}>
                    <AmountField value={amount} onChange={setAmount} />
                    <TypeToggle type={type} onChange={setType} />
                    <CategoryGrid selected={category} onChange={setCategory} />
                    <button
                        type="submit"
                        className="w-full py-3 rounded-xl bg-linear-to-r from-[#FF2D78] to-[#FF6B2B] text-white font-label-caps tracking-wider uppercase hover:shadow-[0_0_24px_rgba(255,45,120,0.5)] transition-all duration-300 active:scale-95"
                    >
                        Add Transaction
                    </button>
                </form>
            </div>
        </div>
    )
}