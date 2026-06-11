import './VisitorLogin.css'
import VisitorLoginForm from './VisitorLoginForm'
import BrandPanel from '../Login/BrandPanel'

function VisitorLogin() {
  return (
    <div className = "visitor-login">
        <BrandPanel /> 
        <VisitorLoginForm />
    </div>
  )
}

export default VisitorLogin