// src/pages/Login/LoginForm.jsx
import "./VisitorLoginForm.css"
import { useState } from "react"
import { User, Lock, Eye, EyeOff } from 'lucide-react'

function VisitorLoginForm() {
    const [showPassword, setShowPassword] = useState(false)
    
    return (
        <div className="login-form">

            {/* Header */}
            <div className="login-header">
                <h2 className="welcome-text">Welcome </h2>
                <p className="welcome-instruction">Please sign in to continue</p>
            </div>

            {/* Role Buttons */}
            <div className="login-buttons">

                <button className = "visitor-login-button">
                    Login as a Visitor
                </button>

            </div>

            {/* Divider */}
            <div className="divider">
                <span>or sign in with your credentials</span>
            </div>

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
                            required
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
                            type={showPassword ? "text" : "password"}
                            className="form-input"
                            placeholder="Enter your password"
                            required
                        />
                        <button
                            type="button"
                            className="password-toggle"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword
                                ? <EyeOff size={16} />
                                : <Eye size={16} />
                            }
                        </button>
                    </div>
                </div>

            </div>

            {/* Login Button */}
            <button className="login-button">
                LOGIN →
            </button>

            {/* Forgot Password */}
            <a href="#" className="forgot-password">
                Forgot Password?
            </a>

        </div>
    )
}

export default VisitorLoginForm