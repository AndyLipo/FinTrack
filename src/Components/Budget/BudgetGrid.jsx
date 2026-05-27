import { useState } from "react"
import { BudgetCategoryCard } from "./BudgetCategoryCard"
import { AddCategoryModal } from "./ModalBudget/AddCategoryModal"

const INITIAL_CATEGORIES = [
    { icon: "movie", name: "Entertainment", spent: 240, limit: 400, status: "safe", color: "pink" },
    { icon: "restaurant", name: "Dining Out", spent: 620, limit: 500, status: "over", color: "orange" },
    { icon: "subscriptions", name: "Subscriptions", spent: 145, limit: 200, status: "safe", color: "violet" },
    { icon: "shopping_cart", name: "Groceries", spent: 480, limit: 800, status: "safe", color: "teal" },
    { icon: "directions_car", name: "Transport", spent: 285, limit: 300, status: "warn", color: "amber" },
]

export const BudgetGrid = () => {
    const [categories, setCategories] = useState(INITIAL_CATEGORIES)
    const [showModal, setShowModal] = useState(false)
    const [editingCat, setEditingCat] = useState(null) // ← categoría siendo editada

    const handleSave = (data) => {
        if (editingCat !== null) {
            // modo edición — actualizá la categoría existente
            setCategories(prev => prev.map((cat, i) =>
                i === editingCat ? { ...cat, ...data } : cat
            ))
        } else {
            // modo creación — agregá nueva
            setCategories(prev => [...prev, { ...data, spent: 0, status: "safe" }])
        }
        setEditingCat(null)
    }

    const openEdit = (index) => {
        setEditingCat(index)
        setShowModal(true)
    }

    const openCreate = () => {
        setEditingCat(null)
        setShowModal(true)
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map((cat, i) => (
                    <BudgetCategoryCard
                        key={cat.name}
                        {...cat}
                        onEdit={() => openEdit(i)}
                    />
                ))}

                <div
                    onClick={openCreate}
                    className="border-2 border-dashed border-primary/20 rounded-2xl flex flex-col items-center justify-center p-8 hover:bg-primary/5 transition-all cursor-pointer group"
                >
                    <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform mb-4">
                        <span className="material-symbols-outlined text-4xl">add</span>
                    </div>
                    <span className="font-headline-lg-mobile text-headline-lg-mobile text-primary">Add Category</span>
                    <p className="text-body-sm text-on-surface-variant mt-2 text-center">Customize your tracking groups</p>
                </div>
            </div>

            {showModal && (
                <AddCategoryModal
                    onClose={() => { setShowModal(false); setEditingCat(null) }}
                    onSave={handleSave}
                    initialData={editingCat !== null ? categories[editingCat] : null}
                />
            )}
        </>
    )
}