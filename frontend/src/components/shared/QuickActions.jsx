// src/components/shared/QuickActions.jsx
import './QuickActions.css'
import { UserPlus, CreditCard, ChevronRight } from 'lucide-react'

const QuickActions = ({ onRegisterVisitor, onManageCards }) => {
    return (
        <div className="quick-actions-section">

            <p className="quick-actions-label">QUICK ACTIONS</p>

            <div className="quick-actions-grid">

                {/* Register New Visitor — red filled */}
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

                {/* Manage ID Cards — white with red border */}
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
        </div>
    )
}

export default QuickActions