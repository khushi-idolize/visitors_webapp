import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from "./pages/Login/LoginPage";
import VisitorLogin from './pages/Visitor Login/VisitorLogin';
import Dashboard from './pages/Dashboard/index'; // This is your RECEPTIONIST Dashboard
import Reports from "./pages/Reports/Reports";
import AdminLayout from './components/layout/AdminLayout'; 
import VisitorDetails from "./pages/Reports/VisitorDetails";

// A simple separate dashboard just for the Admin so they don't share
const AdminDashboard = () => (
  <div>
    <h1>Admin Dashboard</h1>
    <p>Welcome to the Admin portal. This is completely separate from the Receptionist view.</p>
  </div>
);

const App = () => {
  return(
    <BrowserRouter>
      <Routes>
        {/* === PUBLIC / LOGIN ROUTES === */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/visitor-login" element={<VisitorLogin />} />

        {/* === RECEPTIONIST ROUTES (Uses its own AppShell inside the components) === */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* === ADMIN ROUTES (Wrapped in the AdminLayout) === */}
        <Route path="/admin" element={<AdminLayout />}>
          {/* Redirect /admin to /admin/dashboard automatically */}
          <Route index element={<Navigate to="dashboard" replace />} />
          
          {/* Admin specific pages */}
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="reports" element={<Reports />} />

          <Route path="visitor/:id" element={<VisitorDetails />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;