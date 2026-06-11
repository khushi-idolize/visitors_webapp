//src/pages/Login/BrandPanel 
//This is the left part of the Login window
import './BrandPanel.css'
import logo from '../../assets/logo.png';
const BrandPanel = () => {
    return(
        <div className="brand-panel">
                <img src={logo} alt="Idolize Logo" className = "brandLogo" />

                <div className="brand-center">
                <h1 className="brand-title">Swagat</h1>
                <h3 className="brand-tagline">Visitor Management Simplified</h3>
                </div>

                <p className="brand-footer">Idolize Business Solutions LLP</p>
        </div>
    );
}

export default BrandPanel;