// src/pages/IDCards/index.jsx
import { useState } from 'react'
import AppShell from '../../components/layout/AppShell'
import CardTile from './CardTile'
import CardDrawer from './CardDrawer'
import './IDCards.css'

// Generate 30 cards with sample statuses
const generateInitialCards = () => {
    const cards = Array.from({ length: 30 }, (_, i) => ({
        id: i + 1,
        status: 'available'
    }))

    // Sample issued cards — blue
    const issuedCards = [3, 7, 12, 15, 16, 17, 20, 22, 23]
    issuedCards.forEach(id => {
        cards[id - 1].status = 'issued'
    })

    // Sample lost card — red
    cards[18].status = 'lost' // card 19

    return cards
}

const IDCardsPage = ({ role = 'receptionist' }) => {
    const [cards, setCards] = useState(generateInitialCards)
    const [selectedCard, setSelectedCard] = useState(null)

    // Count by status
    const counts = {
        available: cards.filter(c => c.status === 'available').length,
        issued: cards.filter(c => c.status === 'issued').length,
        lost: cards.filter(c => c.status === 'lost').length,
    }

    // Save status change — receptionist only
    const handleSave = (cardId, newStatus) => {
        setCards(prev =>
            prev.map(card =>
                card.id === cardId
                    ? { ...card, status: newStatus }
                    : card
            )
        )
        setSelectedCard(null)
    }

    // 1. Group the pure page content together
    const pageContent = (
        <>
            <div className="idcards-page">
                {/* Header */}
                <div className="idcards-header">
                    <h1 className="idcards-title">ID Card Management</h1>
                    <p className="idcards-subtitle">
                        {role === 'receptionist'
                            ? 'Click any card to update its status.'
                            : 'Live status of all 30 physical ID cards.'
                        }
                    </p>
                </div>

                {/* Stat Cards */}
                <div className="idcards-stats">
                    <div className="idcard-stat green-stat">
                        <div className="stat-left">
                            <span className="stat-number">{counts.available}</span>
                            <span className="stat-label">Returned / Available</span>
                        </div>
                        <div className="stat-icon green-icon">✓</div>
                    </div>

                    <div className="idcard-stat blue-stat">
                        <div className="stat-left">
                            <span className="stat-number">{counts.issued}</span>
                            <span className="stat-label">Currently Issued</span>
                        </div>
                        <div className="stat-icon blue-icon">⊟</div>
                    </div>

                    <div className="idcard-stat red-stat">
                        <div className="stat-left">
                            <span className="stat-number">{counts.lost}</span>
                            <span className="stat-label">Lost</span>
                        </div>
                        <div className="stat-icon red-icon">⚠</div>
                    </div>
                </div>

                {/* 10x3 Card Grid */}
                <div className="cards-grid">
                    {cards.map(card => (
                        <CardTile
                            key={card.id}
                            card={card}
                            onClick={() => setSelectedCard(card)}
                        />
                    ))}
                </div>

                {/* Color Legend */}
                <div className="cards-legend">
                    <span className="legend-item">
                        <span className="legend-dot green-dot"></span>
                        Available
                    </span>
                    <span className="legend-item">
                        <span className="legend-dot blue-dot"></span>
                        Issued
                    </span>
                    <span className="legend-item">
                        <span className="legend-dot red-dot"></span>
                        Lost
                    </span>
                </div>
            </div>

            {/* Drawer */}
            {selectedCard && (
                <CardDrawer
                    card={selectedCard}
                    role={role}
                    onSave={handleSave}
                    onClose={() => setSelectedCard(null)}
                />
            )}
        </>
    )

    // 2. Conditionally wrap the content based on the role
    return role === 'admin' ? (
        pageContent 
    ) : (
        <AppShell role={role}>
            {pageContent}
        </AppShell>
    )
}

export default IDCardsPage