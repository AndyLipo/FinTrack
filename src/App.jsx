import { Routes, Route, useNavigate } from "react-router-dom"
import { Navbar } from "./Components/Utils/Navbar"
import { Sidebar } from "./Components/Utils/Sidebar"
import Dashboard from "./Pages/Dashboard"
import Budget from "./Pages/Budget"
import Settings from "./Pages/Settings"
import Transaction from "./Pages/Transaction"

function App() {
  const navigate = useNavigate() // ✅ adentro del componente

  return (
    <div className="bg-background text-on-background font-body-md min-h-screen relative selection:bg-primary-container selection:text-on-primary-container">
      <div className="fixed inset-0 grid-pattern opacity-20 pointer-events-none" />
      <div className="fixed inset-0 scanlines opacity-5 pointer-events-none" />
      <div className="fixed -top-1/4 -right-1/4 w-150 h-150 bg-tertiary/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed -bottom-1/4 -left-1/4 w-150 h-150 bg-primary/10 blur-[120px] rounded-full pointer-events-none" />

      <Navbar />
      <Sidebar />

      <main className="pt-24 pb-12 px-6 md:pl-72 md:pr-12 min-h-screen">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/budget" element={<Budget />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
      <Routes>
        <Route path="/transaction/new" element={<Transaction />} />
      </Routes>

      {/* FAB ✅ con onClick */}
      <div className="fixed bottom-8 right-8 md:bottom-12 md:right-12 z-50">
        <button
          onClick={() => navigate("/transaction/new")}
          className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <span className="material-symbols-outlined text-3xl">add</span>
        </button>
      </div>
    </div>
  )
}

export default App