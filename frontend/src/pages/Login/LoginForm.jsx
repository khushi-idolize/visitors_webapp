// src/pages/Login/LoginForm.jsx
import './LoginForm.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { User, Lock, Eye, EyeOff, Shield, UserPlus, AlertCircle } from 'lucide-react'

// Temporary hardcoded credentials — remove when backend is ready
const TEMP_USERS = {
    receptionist: { uid: 'reception', password: 'reception123' },
    admin: { uid: 'admin', password: 'admin123' }
}

function LoginForm() {
    const navigate = useNavigate()

    // Which role button is selected
    const [selectedRole, setSelectedRole] = useState('receptionist')

    // Form field values
    const [uid, setUid] = useState('')
    const [password, setPassword] = useState('')

    // Password visibility toggle
    const [showPassword, setShowPassword] = useState(false)

    // Error message — null means no error
    const [error, setError] = useState(null)

    const handleLogin = () => {
        // Clear previous error
        setError(null)

        // Get expected credentials for selected role
        const expected = TEMP_USERS[selectedRole]

        // Check if credentials match
        if (uid === expected.uid && password === expected.password) {
            // Correct — navigate based on role
            if (selectedRole === 'receptionist') {
                navigate('/dashboard')
            } else {
                navigate('/admin/dashboard')
            }
        } else {
            // Wrong — show error
            setError('Incorrect User ID or Password. Please try again.')
        }
    }

    // Allow login on Enter key press
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') handleLogin()
    }

    return (
        <div className="login-form">

            {/* Header */}
            <div className="login-header">
                <h2 className="welcome-text">Welcome back</h2>
                <p className="welcome-instruction">Please sign in to continue</p>
            </div>

            {/* Role Buttons */}
            <div className="login-buttons">

                <button
                    className={`role-btn receptionist-btn ${selectedRole === 'receptionist' ? 'role-active' : 'role-inactive'}`}
                    onClick={() => {
                        setSelectedRole('receptionist')
                        setError(null)
                    }}
                >
                    <User size={16} />
                    Login as Receptionist
                    {selectedRole === 'receptionist' && (
                        <span className="default-badge">DEFAULT</span>
                    )}
                </button>

                <button
                    className={`role-btn admin-btn ${selectedRole === 'admin' ? 'role-active-admin' : 'role-inactive'}`}
                    onClick={() => {
                        setSelectedRole('admin')
                        setError(null)
                    }}
                >
                    <Shield size={16} />
                    Login as Admin
                </button>

            </div>

            {/* Divider
            <div className="divider">
                <span>or sign in with your credentials</span>
            </div> */}

            {/* Error Message */}
            {error && (
                <div className="error-banner">
                    <AlertCircle size={16} />
                    <span>{error}</span>
                </div>
            )}

            {/* Form Fields */}
            <div className="form-container">

                <div className="form-group">
                    <label className="form-label">
                        User ID <span className="required">*</span>
                    </label>
                    <div className="input-wrapper">
                        <User size={16} className="input-icon" />
                        <input
                            type="text"
                            className="form-input"
                            placeholder="Enter your User ID"
                            value={uid}
                            onChange={(e) => setUid(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label">
                        Password <span className="required">*</span>
                    </label>
                    <div className="input-wrapper">
                        <Lock size={16} className="input-icon" />
                        <input
                            type={showPassword ? 'text' : 'password'}
                            className="form-input"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={handleKeyDown}
                        />
                        <button
                            type="button"
                            className="password-toggle"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                    </div>
                </div>

            </div>

            {/* Login Button */}
            <button className="login-button" onClick={handleLogin}>
                LOGIN →
            </button>

            {/* Visitor Button */}
            <button
                className="visitor-btn"
                onClick={() => navigate('/visitor-login')}
            >
                <UserPlus size={16} />
                Login as Visitor
            </button>

            {/* Forgot Password */}
            <a  className="forgot-password"
                onClick={() => navigate('/forgot-password')}
                style={{ cursor: 'pointer' }}>
                Forgot Password?
            </a>

        </div>
    )
}

export default LoginForm