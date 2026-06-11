import './Header.css'
import logo from '../../assets/logo.png'
import {LogOut} from 'lucide-react'

function Header() {
  return (
    <header className="header">
        <div className="header-left">
            <img src={logo} alt="Idolize Logo" className = "header-logo" />
        </div>

        <div className="header-center">
            <span className="header-title">Idolize Business Solutions</span>
        </div>

        <div className="header-right">
            <button className="logout-button">
                <LogOut size = {16}/>
                LogOut
            </button>
        </div>
    </header>
  )
}

export default Header;