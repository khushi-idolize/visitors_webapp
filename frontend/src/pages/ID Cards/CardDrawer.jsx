// src/pages/IDCards/CardDrawer.jsx
import { useState } from 'react'
import { X, Check, CreditCard, AlertTriangle, Lock } from 'lucide-react'
import './CardDrawer.css'

const STATUS_OPTIONS = [
    {
        value: 'available',
        label: 'Mark as Returned',
        icon: Check,
        className: 'btn-returned'
    },
    {
        value: 'issued',
        label: 'Mark as Issued',
        icon: CreditCard,
        className: 'btn-issued'
    },
    {
        value: 'lost',
        label: 'Mark as Lost',
        icon: AlertTriangle,
        className: 'btn-lost'
    },
]

const STATUS_COLORS = {
    available: '#3DB54A',
    issued: '#2F80ED',
    lost: '#E53E3E'
}

const STATUS_LABELS = {
    available: 'Available',
    issued: 'Issued',
    lost: 'Lost'
}

const CardDrawer = ({ card, role, onSave, onClose }) => {
    // Track which status is selected — starts at current card status
    const [selectedStatus, setSelectedStatus] = useState(card.status)

    return (
        // Overlay
        <div className="drawer-overlay" onClick={onClose}>

            {/* Drawer panel */}
            <div
                className="drawer-panel"
                onClick={(e) => e.stopPropagation()}
            >

                {/* Header */}
                <div className="drawer-header">
                    <div>
                        <h2 className="drawer-card-title">Card #{card.id}</h2>
                        <div className="drawer-status-indicator">
                            <span
                                className="drawer-status-dot"
                                style={{ backgroundColor: STATUS_COLORS[card.status] }}
                            ></span>
                            <span
                                className="drawer-status-text"
                                style={{ color: STATUS_COLORS[card.status] }}
                            >
                                {STATUS_LABELS[card.status]}
                            </span>
                        </div>
                    </div>
                    <button className="drawer-close" onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                <div className="drawer-divider" />

                {/* ── RECEPTIONIST VIEW — editable ── */}
                {role === 'receptionist' && (
                    <>
                        <div className="drawer-body">

                            <p className="drawer-section-label">CHANGE STATUS</p>

                            <div className="drawer-status-buttons">
                                {STATUS_OPTIONS.map((option) => {
                                    const Icon = option.icon
                                    const isSelected = selectedStatus === option.value

                                    return (
                                        <button
                                            key={option.value}
                                            className={`drawer-status-btn ${option.className} ${isSelected ? 'selected' : ''}`}
                                            onClick={() => setSelectedStatus(option.value)}
                                        >
                                            <Icon size={16} />
                                            {option.label}
                                            {isSelected && (
                                                <span className="current-tag">CURRENT</span>
                                            )}
                                        </button>
                                    )
                                })}
                            </div>

                        </div>

                        {/* Save Button */}
                        <div className="drawer-footer">
                            <button
                                className="drawer-save-btn"
                                onClick={() => onSave(card.id, selectedStatus)}
                            >
                                Save Changes
                            </button>
                            <p className="drawer-save-note">
                                This will update the card status immediately.
                            </p>
                        </div>
                    </>
                )}

                {/* ── ADMIN VIEW — read only ── */}
                {role === 'admin' && (
                    <div className="drawer-admin-body">
                        <div className="drawer-readonly-notice">
                            <Lock size={16} color="#9CA3AF" />
                            <p>
                                View only. Contact the receptionist to update card status.
                            </p>
                        </div>
                    </div>
                )}

            </div>
        </div>
    )
}

export default CardDrawer