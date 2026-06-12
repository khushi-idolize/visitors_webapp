import './AppShell.css'
import Header from './Header'
import Sidebar from './Sidebar'
import AdminSidebar from './AdminSidebar' // 1. Import your Admin Sidebar!

const AppShell = ({ children, role = 'receptionist' }) => {
    return (
        <div className="app-shell">
            <Header />
            <div className="app-body">
                
                {/* 2. Smart Logic: Render the correct sidebar based on the role */}
                {role === 'admin' ? <AdminSidebar /> : <Sidebar role={role} />}
                
                <main className="app-main">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default AppShell