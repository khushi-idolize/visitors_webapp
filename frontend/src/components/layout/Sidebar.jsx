// src/components/layout/Sidebar.jsx
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { 
    LayoutDashboard, 
    UserPlus, 
    Users, 
    IdCard, 
    FileText, 
    ChevronLeft, 
    Menu, 
    LogOut 
} from 'lucide-react';
import './Sidebar.css'; 

const receptionistNav = [
    { label: 'Home', icon: LayoutDashboard, path: '/dashboard' },
    { label: 'Register Visitor', icon: UserPlus, path: '/register-visitor' },
    { label: 'Visitors', icon: Users, path: '/visitors' },
    { label: 'ID Cards', icon: IdCard, path: '/id-cards' },
];

const adminNav = [
    { label: 'Home', icon: LayoutDashboard, path: '/admin/dashboard' },
    { label: 'Visitors', icon: Users, path: '/admin/visitors' },
    { label: 'ID Cards', icon: IdCard, path: '/admin/id-cards' },
    { label: 'Reports and MIS', icon: FileText, path: '/admin/reports' }
];

const Sidebar = ({ role = 'receptionist' }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const navigate = useNavigate();

    // Dynamically choose which links to show based on the role
    const navItems = role === 'admin' ? adminNav : receptionistNav;

    const handleLogout = () => {
        // Add logout logic here later (clear tokens, etc.)
        navigate('/');
    };

    return (
        <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            
            {/* Header with Logo and Toggle */}
            <div className="sidebar-header">
                {!isCollapsed && (
                    <div className="brand-logo">
                        <h2 style={{ color: 'var(--brandRed)', margin: 0 }}>Swagat</h2>
                    </div>
                )}
                <button 
                    className="toggle-btn" 
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    title={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
                >
                    {isCollapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
                </button>
            </div>

            {/* Dynamic Navigation mapped from the arrays */}
            <nav className="sidebar-nav">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    return (
                        <NavLink 
                            key={item.path} 
                            to={item.path} 
                            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                        >
                            <Icon className="nav-icon" size={20} />
                            {!isCollapsed && <span className="nav-label">{item.label}</span>}
                        </NavLink>
                    );
                })}
            </nav>

            {/* Footer with Dynamic User Info and Logout */}
            <div className="sidebar-footer">
                <div className="user-profile">
                    <div className="avatar">
                        {role === 'admin' ? 'A' : 'R'}
                    </div>
                    {!isCollapsed && (
                        <div className="user-info">
                            <span className="user-name">
                                {role === 'admin' ? 'Admin' : 'Receptionist'}
                            </span>
                            <span className="user-role">
                                {role === 'admin' ? 'Operations' : 'Front Desk'}
                            </span>
                        </div>
                    )}
                </div>
                <button className="logout-btn" onClick={handleLogout}>
                    <LogOut size={18} />
                    {!isCollapsed && <span>Logout</span>}
                </button>
            </div>
            
        </aside>
    );
};

export default Sidebar;