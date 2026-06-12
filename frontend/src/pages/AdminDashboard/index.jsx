import './AdminDashboard.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Users, CreditCard, AlertTriangle } from 'lucide-react'
import StatCard from '../../components/shared/StatCard'
import QuickActions from '../../components/shared/QuickActions'
import ActiveCardsPanel from '../../components/shared/ActiveCardsPanel'

const AdminDashboard = () => {
    const navigate = useNavigate()
    const [isPanelOpen, setIsPanelOpen] = useState(false)

    const stats = {
        todayVisitors: 2,
        activeCards: 12,
        lostCards: 1,
    }

    const getGreeting = () => {
        const hour = new Date().getHours()
        if (hour < 12) return 'Good morning'
        if (hour < 17) return 'Good afternoon'
        return 'Good evening'
    }

    const today = new Date().toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    const handleExportReport = () => {
        // Placeholder — wire to API later
        alert('Export functionality coming soon.')
    }

    return (
        /* Empty angle brackets act as the React Fragment */
        <>
            <div className="admin-dashboard">

                {/* Greeting */}
                <div className="dashboard-greeting">
                    <h1 className="greeting-text">
                        {getGreeting()},{' '}
                        <span className="greeting-name">Admin</span>
                    </h1>
                    <span className="greeting-date">{today}</span>
                </div>

                {/* Stat Cards */}
                <div className="stat-cards-row">

                    <StatCard
                        label="Today's Visitors"
                        count={stats.todayVisitors}
                        subtext="View details →"
                        icon={Users}
                        borderColor="#3B82F6"
                        onClick={() => navigate('/admin/visitors')}
                    />

                    <StatCard
                        label="Active ID Cards"
                        count={stats.activeCards}
                        subtext="View details →"
                        subtextColor="#F59E0B"
                        icon={CreditCard}
                        borderColor="#F59E0B"
                        onClick={() => setIsPanelOpen(true)}
                    />

                    <StatCard
                        label="Lost ID Cards"
                        count={stats.lostCards}
                        subtext="View details →"
                        subtextColor="#C0392B"
                        icon={AlertTriangle}
                        borderColor="#C0392B"
                        onClick={() => navigate('/admin/id-cards')}
                    />

                </div>

                {/* Quick Actions */}
                <QuickActions
                    role="admin"
                    onViewLog={() => navigate('/admin/visitors')}
                    onExportReport={handleExportReport}
                />

            </div>

            {/* Active Cards Panel */}
            <ActiveCardsPanel
                isOpen={isPanelOpen}
                onClose={() => setIsPanelOpen(false)}
            />
        </>
    )
}

export default AdminDashboard