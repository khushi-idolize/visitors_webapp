// src/pages/IDCards/CardTile.jsx
import './CardTile.css'

const CardTile = ({ card, onClick }) => {
    return (
        <div
            className={`card-tile card-${card.status}`}
            onClick={onClick}
        >
            <span className="card-number">{card.id}</span>
        </div>
    )
}

export default CardTile