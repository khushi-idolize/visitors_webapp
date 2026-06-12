// src/pages/Visitors/VisitorRow.jsx
import { ChevronDown, ChevronUp } from 'lucide-react'
import './VisitorRow.css'

const VisitorRow = ({ visitor, isExpanded, onRowClick, onCheckout }) => {
    const isActive = !visitor.checkOut

    return (
        <div className={`visitor-row-wrapper ${isExpanded ? 'expanded' : ''}`}>

            {/* Collapsed Row */}
            <div className="visitor-row" onClick={onRowClick}>

                <div className="col-visitor">
                    <div className="avatar-placeholder">
                        <span>{visitor.name.charAt(0)}</span>
                    </div>
                    <div className="visitor-name-block">
                        <span className="visitor-name">{visitor.name}</span>
                        <span className="visitor-mobile">{visitor.mobile}</span>
                    </div>
                </div>

                <div className="col-company">
                    <span className="company-name">{visitor.company || '—'}</span>
                    <span className="company-location">{visitor.location}</span>
                </div>

                <div className="col-checkin">
                    <span>{visitor.checkIn}</span>
                </div>

                <div className="col-status">
                    <span className={`status-badge ${isActive ? 'status-active' : 'status-done'}`}>
                        {isActive ? 'Active' : 'Checked out'}
                    </span>
                </div>

                <div className="col-chevron">
                    {isExpanded
                        ? <ChevronUp size={18} color="#6B7280" />
                        : <ChevronDown size={18} color="#6B7280" />
                    }
                </div>

            </div>

            {/* Expanded Detail */}
            {isExpanded && (
                <div className="visitor-detail">

                    <div className="detail-content">

                        {/* Avatar */}
                        <div className="detail-avatar-placeholder">
                            <span>{visitor.name.charAt(0)}</span>
                        </div>

                        {/* 4-column grid fills full width */}
                        <div className="detail-grid">

                            <span className="detail-label">IBS ID</span>
                            <span className="detail-value ibs-id">{visitor.id}</span>

                            <span className="detail-label">WHOM TO MEET</span>
                            <span className="detail-value">{visitor.contact}</span>

                            <span className="detail-label">PURPOSE</span>
                            <span className="detail-value">{visitor.purpose}</span>

                            <span className="detail-label">CARD NO.</span>
                            <span className="detail-value">
                                {visitor.cardNumber
                                    ? <span className="card-badge">#{visitor.cardNumber}</span>
                                    : '—'
                                }
                            </span>

                            <span className="detail-label">MOBILE</span>
                            <span className="detail-value">{visitor.mobile}</span>

                            <span className="detail-label">COMPANY</span>
                            <span className="detail-value">{visitor.company || '—'}</span>

                            <span className="detail-label">LOCATION</span>
                            <span className="detail-value">{visitor.location}</span>

                            <span className="detail-label">CHECK-IN</span>
                            <span className="detail-value">{visitor.checkIn}</span>

                            <span className="detail-label">CHECK-OUT</span>
                            <span className="detail-value">{visitor.checkOut || '—'}</span>

                        </div>
                    </div>

                    {/* Checkout button */}
                    {isActive && (
                        <div className="detail-actions">
                            <button
                                className="checkout-btn"
                                onClick={(e) => {
                                    e.stopPropagation()
                                    onCheckout()
                                }}
                            >
                                Check Out
                            </button>
                        </div>
                    )}

                </div>
            )}

        </div>
    )
}

export default VisitorRow