// src/components/shared/StatCard.jsx
import './StatCard.css'

const StatCard = ({
    label,          // "Today's Visitors"
    count,          // 8 — the big number
    subtext,        // "Go to page →"
    subtextColor,   // color of the subtext link
    icon,           // the icon component
    borderColor,    // left border color
    isNavigable,    // shows arrow instead of count
    onClick         // click handler
}) => {

    // Store the icon in a capitalized variable
    // Remember — React needs capital letter for components
    const Icon = icon

    return (
        <div
            className="stat-card"
            style={{ borderLeftColor: borderColor }}
            onClick={onClick}
        >
            {/* Top row — count/arrow on left, icon on right */}
            <div className="stat-card-top">

                <div className="stat-card-value">
                    {/* If navigable, show arrow. Otherwise show count */}
                    {isNavigable ? (
                        <span className="stat-arrow" style={{ color: borderColor }}>→</span>
                    ) : (
                        <span className="stat-count">{count}</span>
                    )}
                </div>

                {/* Icon box — background is a light tint of the border color */}
                {Icon && (
                    <div
                        className="stat-icon-box"
                        style={{ backgroundColor: `${borderColor}18` }}
                    >
                        <Icon size={22} style={{ color: borderColor }} />
                    </div>
                )}

            </div>

            {/* Bottom row — label and subtext */}
            <div className="stat-card-bottom">
                <span className="stat-label">{label}</span>
                {subtext && (
                    <span
                        className="stat-subtext"
                        style={{ color: subtextColor || borderColor }}
                    >
                        {subtext}
                    </span>
                )}
            </div>

        </div>
    )
}

export default StatCard