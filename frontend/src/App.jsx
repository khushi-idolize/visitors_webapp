import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./pages/Login/LoginPage";
import VisitorLogin from './pages/Visitor Login/VisitorLogin';
import Dashboard from './pages/Dashboard/index'; 
import Reports from "./pages/Reports/Reports";
import VisitorDetails from "./pages/Reports/VisitorDetails";

// Colleague's New Imports
import VisitorPage from './pages/Visitors/index'
import IDCardsPage from './pages/ID Cards/index'
import AdminDashboard from './pages/AdminDashboard/index'
import ForgotPassword from './pages/ForgotPassword/index'
import RegisterVisitor from './pages/RegisterVisitor';

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        {/* === PUBLIC / LOGIN ROUTES === */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/visitor-login" element={<VisitorLogin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* === RECEPTIONIST ROUTES === */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/visitors" element={<VisitorPage role="receptionist" />} />
        <Route path="/id-cards" element={<IDCardsPage role="receptionist" />} />
        <Route path="/register-visitor" element={<RegisterVisitor/>} />
        
        {/* === ADMIN ROUTES (Removed AdminLayout wrapper) === */}
        {/* All these pages now use their own AppShell internally */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/reports" element={<Reports />} />
        <Route path="/admin/visitor/:id" element={<VisitorDetails />} />
        <Route path="/admin/id-cards" element={<IDCardsPage role="admin" />} />
        <Route path="/admin/visitors" element={<VisitorPage role="admin" />} />
        
        {/* Redirect for base /admin path if needed */}
        <Route path="/admin" element={<Navigate to="/admin/dashboard" replace />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;