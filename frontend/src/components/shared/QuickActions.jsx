// src/components/shared/QuickActions.jsx
import './QuickActions.css'
import { UserPlus, CreditCard, ClipboardList, Download, ChevronRight } from 'lucide-react'

// Receptionist actions
const ReceptionistActions = ({ onRegisterVisitor, onManageCards }) => (
    <div className="quick-actions-grid">
        <button
            className="action-card action-card-primary"
            onClick={onRegisterVisitor}
        >
            <div className="action-icon-box action-icon-primary">
                <UserPlus size={22} color="white" />
            </div>
            <div className="action-text">
                <span className="action-title">Register New Visitor</span>
                <span className="action-subtitle">Log a new or returning visitor</span>
            </div>
            <ChevronRight size={20} className="action-chevron" />
        </button>

        <button
            className="action-card action-card-secondary"
            onClick={onManageCards}
        >
            <div className="action-icon-box action-icon-secondary">
                <CreditCard size={22} color="#C0392B" />
            </div>
            <div className="action-text">
                <span className="action-title action-title-dark">Manage ID Cards</span>
                <span className="action-subtitle">View and update ID card statuses</span>
            </div>
            <ChevronRight size={20} className="action-chevron action-chevron-dark" />
        </button>
    </div>
)

// Admin actions
const AdminActions = ({ onViewLog, onExportReport }) => (
    <div className="quick-actions-grid">
        <button
            className="action-card action-card-primary"
            onClick={onViewLog}
        >
            <div className="action-icon-box action-icon-primary">
                <ClipboardList size={22} color="white" />
            </div>
            <div className="action-text">
                <span className="action-title">View Visitor Log</span>
                <span className="action-subtitle">Monitor live and past visits</span>
            </div>
            <ChevronRight size={20} className="action-chevron" />
        </button>

        <button
            className="action-card action-card-secondary"
            onClick={onExportReport}
        >
            <div className="action-icon-box action-icon-secondary">
                <Download size={22} color="#C0392B" />
            </div>
            <div className="action-text">
                <span className="action-title action-title-dark">Export Report</span>
                <span className="action-subtitle">Download visitor data as Excel</span>
            </div>
            <ChevronRight size={20} className="action-chevron action-chevron-dark" />
        </button>
    </div>
)

// Main component — role decides which actions to show
const QuickActions = ({
    role = 'receptionist',
    onRegisterVisitor,
    onManageCards,
    onViewLog,
    onExportReport
}) => {
    return (
        <div className="quick-actions-section">
            <p className="quick-actions-label">QUICK ACTIONS</p>
            {role === 'admin'
                ? <AdminActions
                    onViewLog={onViewLog}
                    onExportReport={onExportReport}
                  />
                : <ReceptionistActions
                    onRegisterVisitor={onRegisterVisitor}
                    onManageCards={onManageCards}
                  />
            }
        </div>
    )
}

export default QuickActions