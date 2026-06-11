import './AppShell.css'
import Header from './Header'
import Sidebar from './Sidebar'

const AppShell = ({ children, role = 'receptionist' }) => {
    return (
        <div className="app-shell">
            <Header />
            <div className="app-body">
                <Sidebar role={role} />
                <main className="app-main">
                    {children}
                </main>
            </div>
        </div>
    )
}

export default AppShell