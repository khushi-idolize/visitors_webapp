// src/pages/Dashboard/index.jsx
import './Dashboard.css'
import AppShell from '../../components/layout/AppShell'
import StatCard from '../../components/shared/StatCard'
import QuickActions from '../../components/shared/QuickActions'
import { Users, CreditCard, LayoutGrid } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate()

    // In the future these numbers come from your API
    // For now they are hardcoded — we replace later
    const stats = {
        todayVisitors: 8,
        activeCards: 9,
    }

    // Get time of day for greeting
    const getGreeting = () => {
        const hour = new Date().getHours()
        if (hour < 12) return 'Good morning'
        if (hour < 17) return 'Good afternoon'
        return 'Good evening'
    }

    // Format today's date
    const today = new Date().toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })

    return (
        <AppShell role="receptionist">
            <div className="dashboard">

                {/* Greeting */}
                <div className="dashboard-greeting">
                    <h1 className="greeting-text">
                        {getGreeting()},{' '}
                        <span className="greeting-name">Receptionist</span>
                    </h1>
                    <span className="greeting-date">{today}</span>
                </div>

                {/* Stat Cards Row */}
                <div className="stat-cards-row">

                    <StatCard
                        label="Today's Visitors"
                        count={stats.todayVisitors}
                        subtext="Go to page →"
                        icon={Users}
                        borderColor="#3B82F6"
                        onClick={() => navigate('/visitors')}
                    />

                    <StatCard
                        label="Active ID Cards"
                        count={stats.activeCards}
                        subtext="View details →"
                        subtextColor="#F59E0B"
                        icon={CreditCard}
                        borderColor="#F59E0B"
                        onClick={() => {}}
                    />

                    <StatCard
                        label="View Cards"
                        subtext="Go to page →"
                        icon={LayoutGrid}
                        borderColor="#C0392B"
                        isNavigable={true}
                        onClick={() => navigate('/id-cards')}
                    />

                </div>

                {/* Pending Approvals */}
                <div className="pending-section">
                    <div className="pending-header">
                        <h2 className="pending-title">Pending Approvals</h2>
                    </div>
                    <div className="pending-empty">
                        <p>No pending check-ins at this time.</p>
                    </div>
                </div>

                {/* Quick Actions */}
                <QuickActions
                    onRegisterVisitor={() => navigate('/register-visitor')}
                    onManageCards={() => navigate('/id-cards')}
                />

            </div>
        </AppShell>
    )
}

export default Dashboard