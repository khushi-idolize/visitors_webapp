import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import { LogOut } from 'lucide-react';

const AdminLayout = () => {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: 'var(--backgroundGray)' }}>
      <AdminSidebar />
      
      {/* Right Side Column */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflowX: 'hidden' }}>
        
        {/* The Missing Top Header */}
        <header style={{
          height: '70px',
          backgroundColor: 'var(--white)',
          borderBottom: '1px solid var(--borderLight)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center', /* Centers the title perfectly */
          padding: '0 32px',
          position: 'relative'
        }}>
          <h2 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--textPrimary)', fontWeight: '700' }}>
            Idolize Business Solutions
          </h2>
          
          <button
            onClick={() => navigate('/')}
            style={{
              position: 'absolute',
              right: '32px',
              display: 'flex', alignItems: 'center', gap: '6px',
              background: 'var(--white)', border: '1px solid var(--brandRed)', color: 'var(--brandRed)',
              padding: '8px 16px', borderRadius: '8px', cursor: 'pointer', fontWeight: '600',
              fontSize: '14px'
            }}
          >
            <LogOut size={16} /> Logout
          </button>
        </header>

        {/* Main Content Area (Provides perfect padding for Dashboard AND Reports) */}
        <main style={{ padding: '32px 40px', flex: 1, overflowY: 'auto' }}>
          <Outlet /> 
        </main>
        
      </div>
    </div>
  );
};

export default AdminLayout;