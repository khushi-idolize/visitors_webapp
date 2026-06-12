import './Header.css'
import logo from '../../assets/logo.png'
import { LogOut } from 'lucide-react'
import { useNavigate } from 'react-router-dom'; // Removed NavLink since it's unused here

function Header() {
    // 1. Initialize navigate INSIDE the component
    const navigate = useNavigate();

    // 2. Move handleLogout INSIDE so it can access navigate
    const handleLogout = () => {
        // Add logout logic here later (clear tokens, etc.)
        navigate('/');
    };

    return (
        <header className="header">
            <div className="header-left">
                <img src={logo} alt="Idolize Logo" className="header-logo" />
            </div>

            <div className="header-center">
                <span className="header-title">Idolize Business Solutions</span>
            </div>

            <div className="header-right">
                <button className="logout-button" onClick={handleLogout}>
                    <LogOut size={16} />
                    LogOut
                </button>
            </div>
        </header>
    )
}

export default Header;