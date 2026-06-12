// src/pages/ForgotPassword/index.jsx
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    User,
    Lock,
    Eye,
    EyeOff,
    CheckCircle,
    ArrowLeft
} from 'lucide-react'
import './ForgotPassword.css'
import logo from '../../assets/logo.png'

// Valid user IDs — replace with API call later
const VALID_USERS = ['reception', 'admin']

const ForgotPassword = () => {
    const navigate = useNavigate()

    // Which step we are on: 1, 2, or 3
    const [step, setStep] = useState(1)

    // Step 1 state
    const [userId, setUserId] = useState('')
    const [userIdError, setUserIdError] = useState('')

    // Step 2 state
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [showNew, setShowNew] = useState(false)
    const [showConfirm, setShowConfirm] = useState(false)
    const [passwordError, setPasswordError] = useState('')

    // Step 1 — validate user ID exists
    const handleVerifyUser = () => {
        setUserIdError('')

        if (!userId.trim()) {
            setUserIdError('Please enter your User ID.')
            return
        }

        if (!VALID_USERS.includes(userId.trim().toLowerCase())) {
            setUserIdError('No account found with this User ID.')
            return
        }

        // Valid — move to step 2
        setStep(2)
    }

    // Step 2 — validate and set new password
    const handleResetPassword = () => {
        setPasswordError('')

        if (!newPassword) {
            setPasswordError('Please enter a new password.')
            return
        }

        if (newPassword.length < 6) {
            setPasswordError('Password must be at least 6 characters.')
            return
        }

        if (newPassword !== confirmPassword) {
            setPasswordError('Passwords do not match.')
            return
        }

        // Success — move to step 3
        setStep(3)
    }

    // Allow Enter key on step 1
    const handleKeyDownStep1 = (e) => {
        if (e.key === 'Enter') handleVerifyUser()
    }

    // Allow Enter key on step 2
    const handleKeyDownStep2 = (e) => {
        if (e.key === 'Enter') handleResetPassword()
    }

    return (
        <div className="fp-page">

            {/* Left Brand Panel — same as login */}
            <div className="fp-brand">
                <img src={logo} alt="Idolize" className="fp-logo" />
                <div className="fp-brand-center">
                    <h1 className="fp-brand-title">Swagat</h1>
                    <p className="fp-brand-tagline">Visitor Management Simplified</p>
                </div>
                <p className="fp-brand-footer">Idolize Business Solutions LLP</p>
            </div>

            {/* Right Form Panel */}
            <div className="fp-form-panel">

                {/* Back to login */}
                <button
                    className="fp-back-btn"
                    onClick={() => navigate('/')}
                >
                    <ArrowLeft size={16} />
                    Back to Login
                </button>

                {/* ── STEP 1 — Enter User ID ── */}
                {step === 1 && (
                    <div className="fp-form">

                        <div className="fp-header">
                            <h2 className="fp-title">Forgot Password</h2>
                            <p className="fp-subtitle">
                                Enter your User ID to reset your password.
                            </p>
                        </div>

                        {/* Step indicator */}
                        <div className="fp-steps">
                            <div className="fp-step fp-step-active">
                                <span>1</span>
                            </div>
                            <div className="fp-step-line"></div>
                            <div className="fp-step fp-step-inactive">
                                <span>2</span>
                            </div>
                            <div className="fp-step-line"></div>
                            <div className="fp-step fp-step-inactive">
                                <span>3</span>
                            </div>
                        </div>

                        <div className="fp-group">
                            <label className="fp-label">
                                User ID <span className="fp-required">*</span>
                            </label>
                            <div className="fp-input-wrapper">
                                <User size={16} className="fp-input-icon" />
                                <input
                                    type="text"
                                    className={`fp-input ${userIdError ? 'fp-input-error' : ''}`}
                                    placeholder="Enter your User ID"
                                    value={userId}
                                    onChange={(e) => {
                                        setUserId(e.target.value)
                                        setUserIdError('')
                                    }}
                                    onKeyDown={handleKeyDownStep1}
                                />
                            </div>
                            {userIdError && (
                                <span className="fp-error-text">{userIdError}</span>
                            )}
                        </div>

                        <button
                            className="fp-primary-btn"
                            onClick={handleVerifyUser}
                        >
                            Verify User ID →
                        </button>

                    </div>
                )}

                {/* ── STEP 2 — Set New Password ── */}
                {step === 2 && (
                    <div className="fp-form">

                        <div className="fp-header">
                            <h2 className="fp-title">Set New Password</h2>
                            <p className="fp-subtitle">
                                Choose a strong password for{' '}
                                <strong>{userId}</strong>.
                            </p>
                        </div>

                        {/* Step indicator */}
                        <div className="fp-steps">
                            <div className="fp-step fp-step-done">
                                <CheckCircle size={14} />
                            </div>
                            <div className="fp-step-line fp-line-done"></div>
                            <div className="fp-step fp-step-active">
                                <span>2</span>
                            </div>
                            <div className="fp-step-line"></div>
                            <div className="fp-step fp-step-inactive">
                                <span>3</span>
                            </div>
                        </div>

                        {/* New password */}
                        <div className="fp-group">
                            <label className="fp-label">
                                New Password <span className="fp-required">*</span>
                            </label>
                            <div className="fp-input-wrapper">
                                <Lock size={16} className="fp-input-icon" />
                                <input
                                    type={showNew ? 'text' : 'password'}
                                    className={`fp-input ${passwordError ? 'fp-input-error' : ''}`}
                                    placeholder="Enter new password"
                                    value={newPassword}
                                    onChange={(e) => {
                                        setNewPassword(e.target.value)
                                        setPasswordError('')
                                    }}
                                    onKeyDown={handleKeyDownStep2}
                                />
                                <button
                                    type="button"
                                    className="fp-toggle"
                                    onClick={() => setShowNew(!showNew)}
                                >
                                    {showNew ? <EyeOff size={16} /> : <Eye size={16} />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm password */}
                        <div className="fp-group">
                            <label className="fp-label">
                                Confirm Password <span className="fp-required">*</span>
                            </label>
                            <div className="fp-input-wrapper">
                                <Lock size={16} className="fp-input-icon" />
                                <input
                                    type={showConfirm ? 'text' : 'password'}
                                    className={`fp-input ${passwordError ? 'fp-input-error' : ''}`}
                                    placeholder="Confirm new password"
                                    value={confirmPassword}
                                    onChange={(e) => {
                                        setConfirmPassword(e.target.value)
                                        setPasswordError('')
                                    }}
                                    onKeyDown={handleKeyDownStep2}
                                />
                                <button
                                    type="button"
                                    className="fp-toggle"
                                    onClick={() => setShowConfirm(!showConfirm)}
                                >
                                    {showConfirm
                                        ? <EyeOff size={16} />
                                        : <Eye size={16} />
                                    }
                                </button>
                            </div>
                            {passwordError && (
                                <span className="fp-error-text">{passwordError}</span>
                            )}
                        </div>

                        {/* Password strength hint */}
                        <p className="fp-hint">
                            Password must be at least 6 characters.
                        </p>

                        <button
                            className="fp-primary-btn"
                            onClick={handleResetPassword}
                        >
                            Reset Password →
                        </button>

                        {/* Back to step 1 */}
                        <button
                            className="fp-secondary-btn"
                            onClick={() => {
                                setStep(1)
                                setPasswordError('')
                            }}
                        >
                            ← Change User ID
                        </button>

                    </div>
                )}

                {/* ── STEP 3 — Success ── */}
                {step === 3 && (
                    <div className="fp-form fp-success-form">

                        {/* Step indicator */}
                        <div className="fp-steps">
                            <div className="fp-step fp-step-done">
                                <CheckCircle size={14} />
                            </div>
                            <div className="fp-step-line fp-line-done"></div>
                            <div className="fp-step fp-step-done">
                                <CheckCircle size={14} />
                            </div>
                            <div className="fp-step-line fp-line-done"></div>
                            <div className="fp-step fp-step-done">
                                <CheckCircle size={14} />
                            </div>
                        </div>

                        {/* Success icon */}
                        <div className="fp-success-icon">
                            <CheckCircle size={56} color="#3DB54A" />
                        </div>

                        <div className="fp-header">
                            <h2 className="fp-title">Password Reset!</h2>
                            <p className="fp-subtitle">
                                Your password has been successfully updated.
                                You can now log in with your new password.
                            </p>
                        </div>

                        <button
                            className="fp-primary-btn"
                            onClick={() => navigate('/')}
                        >
                            Back to Login →
                        </button>

                    </div>
                )}

            </div>
        </div>
    )
}

export default ForgotPassword