// src/pages/Login/LoginForm.jsx
 
import './LoginForm.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    User,
    Lock,
    Eye,
    EyeOff,
    Shield,
    UserPlus,
    AlertCircle
} from 'lucide-react'
 
import logo from '../../assets/logo.png'
 
const TEMP_USERS = {
    receptionist: {
        uid: 'reception',
        password: 'reception123'
    },
    admin: {
        uid: 'admin',
        password: 'admin123'
    }
}
 
function LoginForm() {
    const navigate = useNavigate()
 
    const [selectedRole, setSelectedRole] = useState('receptionist')
    const [uid, setUid] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [error, setError] = useState(null)
 
    const handleLogin = () => {
        setError(null)
 
        const expected = TEMP_USERS[selectedRole]
 
        if (
            uid === expected.uid &&
            password === expected.password
        ) {
            navigate(
                selectedRole === 'receptionist'
                    ? '/dashboard'
                    : '/admin/dashboard'
            )
        } else {
            setError(
                'Incorrect User ID or Password. Please try again.'
            )
        }
    }
 
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleLogin()
        }
    }
 
    return (
        <div className="login-form">
 
            {/* Logo */}
            <div className="login-logo-wrapper">
                <img
                    src={logo}
                    alt="Idolize"
                    className="login-logo"
                />
            </div>
 
            {/* Welcome Section */}
            <div className="login-header">
                <h2 className="welcome-text">
                    Welcome
                </h2>
 
                <p className="welcome-instruction">
                    Please Login to continue
                </p>
            </div>
 
            {/* Role Selection */}
            <div className="login-buttons">
 
                <button
                    type="button"
                    className={`role-btn ${
                        selectedRole === 'receptionist'
                            ? 'role-active'
                            : 'role-inactive'
                    }`}
                    onClick={() => {
                        setSelectedRole('receptionist')
                        setError(null)
                    }}
                >
                    <User size={14} />
 
                    Receptionist
 
                    {selectedRole === 'receptionist' && (
                        <span className="default-badge">
                            DEFAULT
                        </span>
                    )}
                </button>
 
                <button
                    type="button"
                    className={`role-btn ${
                        selectedRole === 'admin'
                            ? 'role-active'
                            : 'role-inactive'
                    }`}
                    onClick={() => {
                        setSelectedRole('admin')
                        setError(null)
                    }}
                >
                    <Shield size={14} />
                    Admin
                </button>
 
            </div>
 
            {/* Error Message */}
            {error && (
                <div className="error-banner">
                    <AlertCircle size={14} />
                    <span>{error}</span>
                </div>
            )}
 
            {/* Form */}
            <div className="form-container">
 
                <div className="form-group">
                    <label className="form-label">
                        User ID{' '}
                        <span className="required">*</span>
                    </label>
 
                    <div className="input-wrapper">
                        <User
                            size={14}
                            className="input-icon"
                        />
 
                        <input
                            type="text"
                            className="form-input"
                            placeholder="Enter your User ID"
                            value={uid}
                            onChange={(e) =>
                                setUid(e.target.value)
                            }
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                </div>
 
                <div className="form-group">
                    <label className="form-label">
                        Password{' '}
                        <span className="required">*</span>
                    </label>
 
                    <div className="input-wrapper">
                        <Lock
                            size={14}
                            className="input-icon"
                        />
 
                        <input
                            type={
                                showPassword
                                    ? 'text'
                                    : 'password'
                            }
                            className="form-input"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            onKeyDown={handleKeyDown}
                        />
 
                        <button
                            type="button"
                            className="password-toggle"
                            onClick={() =>
                                setShowPassword(
                                    !showPassword
                                )
                            }
                        >
                            {showPassword ? (
                                <EyeOff size={14} />
                            ) : (
                                <Eye size={14} />
                            )}
                        </button>
                    </div>
                </div>
 
            </div>
 
            {/* Login Button */}
            <button
                type="button"
                className="login-button"
                onClick={handleLogin}
            >
                LOGIN →
            </button>
 
            {/* Visitor Login */}
            <button
                type="button"
                className="visitor-btn"
                onClick={() =>
                    navigate('/visitor-login')
                }
            >
                <UserPlus size={14} />
                Login as Visitor
            </button>
 
            {/* Forgot Password */}
            <a
                type="button"
                className="forgot-password"
                onClick={() =>
                    navigate('/forgot-password')
                }
            >
                Forgot Password?
            </a>
 
        </div>
    )
}
 
export default LoginForm