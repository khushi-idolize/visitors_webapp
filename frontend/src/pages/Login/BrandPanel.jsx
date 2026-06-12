//src/pages/Login/BrandPanel
//This is the left part of the Login window
import "./BrandPanel.css";
// import logo from '../../assets/logo.png';
import swagatLogo from "../../assets/swagatLogo.png";
// import hero from '../../assets/hero.png'
const BrandPanel = () => {
  return (
    <div className="brand-panel">
      {/* <div className="swagat-logo-text"></div> */}
      <div className="brand-center">
        <img src={swagatLogo} alt="Swagat Logo" className="brand-logo" />
        <h1 className="brand-title">Swagat</h1>
      </div>
      <h3 className="brand-tagline">Visitor Management Simplified</h3>
      <p className="brand-footer">Idolize Business Solutions LLP</p>
    </div>
  );
};
 
export default BrandPanel;