// src/components/shared/ActiveCardsPanel.jsx
import { useState } from 'react'
import { X, ArrowLeft, ChevronRight } from 'lucide-react'
import './ActiveCardsPanel.css'

// Sample data — replace with API data later
const sampleIssuedCards = [
    {
        cardNumber: 3,
        heldBy: 'Aarav Patel',
        mobile: '9876543210',
        contact: 'Arjun Mehta',
        purpose: 'Client Visit',
        location: 'Mumbai',
        company: 'Acme Corp',
        checkIn: '11 Jun 2026, 09:12:00 AM',
        ibsId: 'IBS-V-0001'
    },
    {
        cardNumber: 7,
        heldBy: 'Sneha Iyer',
        mobile: '9123456780',
        contact: 'Priya Nair',
        purpose: 'Interview',
        location: 'Pune',
        company: 'TechNova',
        checkIn: '11 Jun 2026, 09:45:00 AM',
        ibsId: 'IBS-V-0002'
    },
    {
        cardNumber: 12,
        heldBy: 'Priya Nair',
        mobile: '9833011290',
        contact: 'Arjun Mehta',
        purpose: 'Client Visit',
        location: 'Pune',
        company: 'Wipro',
        checkIn: '10 Jun 2026, 10:15:00 AM',
        ibsId: 'IBS-V-0004'
    },
    {
        cardNumber: 14,
        heldBy: 'Rohit Singh',
        mobile: '9988776655',
        contact: 'Vikram Rao',
        purpose: 'Vendor Visit',
        location: 'Delhi',
        company: 'BlueDart',
        checkIn: '11 Jun 2026, 10:02:00 AM',
        ibsId: 'IBS-V-0005'
    },
    {
        cardNumber: 17,
        heldBy: 'Karan Malhotra',
        mobile: '9833088001',
        contact: 'Sneha Kapoor',
        purpose: 'Meeting',
        location: 'Bengaluru',
        company: 'Inventra Supplies',
        checkIn: '11 Jun 2026, 11:30:00 AM',
        ibsId: 'IBS-V-0006'
    },
]

const ActiveCardsPanel = ({ isOpen, onClose }) => {
    // null = showing list, visitor object = showing detail
    const [selectedVisitor, setSelectedVisitor] = useState(null)

    // When panel closes, reset to list view
    const handleClose = () => {
        setSelectedVisitor(null)
        onClose()
    }

    // When back arrow clicked in detail view
    const handleBack = () => {
        setSelectedVisitor(null)
    }

    // Do not render anything if panel is closed
    if (!isOpen) return null

    return (
        // Overlay wrapper — clicking dark area closes panel
        <div className="panel-overlay" onClick={handleClose}>

            {/* Panel itself — stop click from bubbling to overlay */}
            <div
                className="panel-drawer"
                onClick={(e) => e.stopPropagation()}
            >
                {/* ── LIST VIEW ── */}
                {!selectedVisitor && (
                    <>
                        {/* Panel Header */}
                        <div className="panel-header">
                            <div>
                                <h2 className="panel-title">Currently Issued Cards</h2>
                                <p className="panel-subtitle">Cards currently held by visitors</p>
                            </div>
                            <button className="panel-close" onClick={handleClose}>
                                <X size={20} />
                            </button>
                        </div>

                        <div className="panel-divider" />

                        {/* Column Headers */}
                        <div className="panel-col-header">
                            <span>VISITOR</span>
                            <span>ID CARD NUMBER</span>
                        </div>

                        {/* Card Rows */}
                        <div className="panel-list">
                            {sampleIssuedCards.map((card) => (
                                <div
                                    key={card.cardNumber}
                                    className="panel-row"
                                    onClick={() => setSelectedVisitor(card)}
                                                            >
                                    {/* Left — Visitor name with blue dot */}
                                    <div className="panel-row-left">
                                        <span className="panel-blue-dot">●</span>
                                        <span className="panel-held-by">{card.heldBy}</span>
                                    </div>

                                    {/* Right — Card number with chevron */}
                                    <div className="panel-row-right">
                                        <span className="panel-card-number">Card {card.cardNumber}</span>
                                        <ChevronRight size={16} color="#C0392B" />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Footer count */}
                        <div className="panel-footer">
                            {sampleIssuedCards.length} cards currently issued
                            · tap name for details
                        </div>
                    </>
                )}

                {/* ── DETAIL VIEW ── */}
                {selectedVisitor && (
                    <>
                        {/* Detail Header */}
                        <div className="panel-header">
                            <button
                                className="panel-back"
                                onClick={handleBack}
                            >
                                <ArrowLeft size={20} />
                            </button>
                            <div className="panel-detail-title-block">
                                <h2 className="panel-title">{selectedVisitor.heldBy}</h2>
                                <p className="panel-subtitle">{selectedVisitor.company}</p>
                            </div>
                        </div>

                        <div className="panel-divider" />

                        {/* Detail Rows */}
                        <div className="panel-detail-grid">

                            <span className="detail-label">MOBILE</span>
                            <span className="detail-value">{selectedVisitor.mobile}</span>

                            <span className="detail-label">CONTACT</span>
                            <span className="detail-value">{selectedVisitor.contact}</span>

                            <span className="detail-label">PURPOSE</span>
                            <span className="detail-value">{selectedVisitor.purpose}</span>

                            <span className="detail-label">LOCATION</span>
                            <span className="detail-value">{selectedVisitor.location}</span>

                            <span className="detail-label">ID CARD</span>
                            <span className="detail-value">
                                <span className="detail-card-badge">
                                    #{selectedVisitor.cardNumber}
                                </span>
                            </span>

                            <span className="detail-label">CHECK-IN</span>
                            <span className="detail-value">{selectedVisitor.checkIn}</span>

                            <span className="detail-label">IBS ID</span>
                            <span className="detail-value">{selectedVisitor.ibsId}</span>

                        </div>

                        {/* Close Button */}
                        <div className="panel-detail-footer">
                            <button
                                className="panel-close-btn"
                                onClick={handleClose}
                            >
                                Close
                            </button>
                        </div>
                    </>
                )}

            </div>
        </div>
    )
}

export default ActiveCardsPanel