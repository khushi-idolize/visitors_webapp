// src/components/layout/Sidebar.jsx
import './Sidebar.css'
import { useNavigate, useLocation } from 'react-router-dom'
import {
    Home,
    UserPlus,
    Users,
    CreditCard,
    BarChart2,
    User
} from 'lucide-react'

const receptionistNav = [
    { label: 'Home', icon: Home, path: '/dashboard' },
    { label: 'Register Visitor', icon: UserPlus, path: '/register-visitor' },
    { label: 'Visitors', icon: Users, path: '/visitors' },
    { label: 'ID Cards', icon: CreditCard, path: '/id-cards' },
]

const adminNav = [
    { label: 'Home', icon: Home, path: '/admin/dashboard' },
    { label: 'Visitors', icon: Users, path: '/admin/visitors' },
    { label: 'ID Cards', icon: CreditCard, path: '/admin/id-cards' },
    { label: 'Reports and MIS', icon: BarChart2, path: '/admin/reports' }
]

const Sidebar = ({ role = 'receptionist' }) => {
    const navigate = useNavigate()
    const location = useLocation()

    const navItems = role === 'admin' ? adminNav : receptionistNav

    return (
        <aside className="sidebar">

            {/* App Name */}
            <div className="sidebar-brand">
                <span className="sidebar-app-name">Swagat</span>
            </div>

            {/* Navigation */}
            <nav className="sidebar-nav">
                {navItems.map((item) => {
                    const Icon = item.icon
                    const isActive = location.pathname === item.path

                    return (
                        <button
                            key={item.path}
                            className={`nav-item ${isActive ? 'active' : ''}`}
                            onClick={() => navigate(item.path)}
                        >
                            <Icon size={18} />
                            <span>{item.label}</span>
                        </button>
                    )
                })}
            </nav>

            {/* User at bottom */}
            <div className="sidebar-user">
                <div className="sidebar-avatar">
                    <User size={18} />
                </div>
                <div className="sidebar-user-info">
                    <span className="sidebar-username">
                        {role === 'admin' ? 'Admin' : 'Receptionist'}
                    </span>
                    <span className="sidebar-role">
                        {role === 'admin' ? 'Operations' : 'Reception'}
                    </span>
                </div>
            </div>

        </aside>
    )
}

export default Sidebar