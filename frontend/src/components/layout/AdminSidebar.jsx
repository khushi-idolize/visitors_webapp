import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Users, IdCard, FileText, ChevronLeft, Menu, LogOut } from 'lucide-react';
import './AdminSidebar.css';

// Renamed to AdminSidebar to match the file
const AdminSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add logout logic here later (clear tokens, etc.)
    navigate('/');
  };

  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
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

      <nav className="sidebar-nav">
        <NavLink to="/admin/dashboard" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <LayoutDashboard className="nav-icon" size={20} />
          {!isCollapsed && <span className="nav-label">Home</span>}
        </NavLink>

        <NavLink to="/admin/visitors" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <Users className="nav-icon" size={20} />
          {!isCollapsed && <span className="nav-label">Visitors</span>}
        </NavLink>

        <NavLink to="/admin/id-cards" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <IdCard className="nav-icon" size={20} />
          {!isCollapsed && <span className="nav-label">ID Cards</span>}
        </NavLink>

        <NavLink to="/admin/reports" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <FileText className="nav-icon" size={20} />
          {!isCollapsed && <span className="nav-label">Reports and MIS</span>}
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <div className="user-profile">
          <div className="avatar">A</div>
          {!isCollapsed && (
            <div className="user-info">
              <span className="user-name">Admin</span>
              <span className="user-role">Operations</span>
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

export default AdminSidebar;