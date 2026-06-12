import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from "./pages/Login/LoginPage"
import VisitorLogin from './pages/Visitor Login/VisitorLogin'
import Dashboard from './pages/Dashboard/index'
import VisitorPage from './pages/Visitors/index'
import IDCardsPage from './pages/ID Cards/index'
import AdminDashboard from './pages/AdminDashboard/index'
import ForgotPassword from './pages/ForgotPassword/index'

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<LoginPage/>} />
        <Route path = "/visitor-login" element = {<VisitorLogin/>}></Route>
        <Route path = "/dashboard" element = {<Dashboard />} />
        <Route path="/visitors" element={<VisitorPage />} />
        <Route path="/id-cards" element={<IDCardsPage role="receptionist" />} />
        <Route path="/admin/id-cards" element={<IDCardsPage role="admin" />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;