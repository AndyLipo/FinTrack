import { SettingsHeader } from "../Components/Settings/SettingsHeader"
import { ProfileCard } from "../Components/Settings/ProfileCard"
import { LinkedNodes } from "../Components/Settings/LinkedNodes"
import { IdentityDetails } from "../Components/Settings/IdentityDetails"
import { SystemPreferences } from "../Components/Settings/SystemPreferences"
import { DangerZone } from "../Components/Settings/DangerZone"

const Settings = () => (
    <>
        <SettingsHeader />

        {/* Tabs — los podés hacer interactivos después con useState */}
        <div className="flex gap-8 border-b border-outline-variant mb-8 overflow-x-auto">
            {["Perfil", "Notificaciones", "Presupuestos", "Seguridad"].map((tab, i) => (
                <button key={tab} className={`pb-4 px-2 border-b-2 font-label-caps whitespace-nowrap transition-colors
                    ${i === 0 ? "border-primary text-primary font-bold" : "border-transparent text-on-surface-variant hover:text-primary"}`}>
                    {tab}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left column */}
            <div className="lg:col-span-4 space-y-6">
                <ProfileCard />
                <LinkedNodes />
            </div>

            {/* Right column */}
            <div className="lg:col-span-8 space-y-6">
                <IdentityDetails />
                <SystemPreferences />
                <DangerZone />
            </div>
        </div>
    </>
)

export default Settings