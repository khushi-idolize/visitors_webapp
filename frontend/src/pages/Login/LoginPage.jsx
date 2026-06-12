import './LoginPage.css'
import BrandPanel from './BrandPanel'
import LoginForm from './LoginForm'
 
function LoginPage() {
  return (
    <div className="login-page">
        <BrandPanel />
        <LoginForm />
    </div>
  )
}
 
export default LoginPage