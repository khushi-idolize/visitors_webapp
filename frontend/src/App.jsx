import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./pages/Login/LoginPage";
import VisitorLogin from './pages/Visitor Login/VisitorLogin';
import Dashboard from './pages/Dashboard/index'; // RECEPTIONIST Dashboard
import Reports from "./pages/Reports/Reports";
import AdminLayout from './components/layout/AdminLayout'; 
import VisitorDetails from "./pages/Reports/VisitorDetails";

// Colleague's New Imports
import VisitorPage from './pages/Visitors/index'
import IDCardsPage from './pages/ID Cards/index'
import AdminDashboard from './pages/AdminDashboard/index'
import ForgotPassword from './pages/ForgotPassword/index'

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        {/* === PUBLIC / LOGIN ROUTES === */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/visitor-login" element={<VisitorLogin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* === RECEPTIONIST ROUTES (Uses colleague's AppShell inside the components) === */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/visitors" element={<VisitorPage />} />
        <Route path="/id-cards" element={<IDCardsPage role="receptionist" />} />
        
        {/* === ADMIN ROUTES (Forced to use YOUR AdminLayout) === */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* Redirect /admin to /admin/dashboard automatically */}
          <Route index element={<Navigate to="dashboard" replace />} />
          
          {/* Admin specific pages */}
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="reports" element={<Reports />} />
          <Route path="visitor/:id" element={<VisitorDetails />} />
          <Route path="id-cards" element={<IDCardsPage role="admin" />} />
          
          {/* Just ONE visitors route, correctly passing the admin role! */}
          <Route path="visitors" element={<VisitorPage role="admin" />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;