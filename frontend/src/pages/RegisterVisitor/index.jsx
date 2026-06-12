// src/pages/RegisterVisitor/index.jsx
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {
    User,
    Phone,
    Search,
    Camera,
    RotateCcw,
    Check,
    ChevronDown
} from 'lucide-react'
import AppShell from '../../components/layout/AppShell'
import './RegisterVisitor.css'
 
// Sample data — replace with API calls later
const MEETING_CONTACTS = [
    'Arjun Mehta', 'Priya Nair', 'Vikram Rao',
    'Sneha Kapoor', 'Rohit Sharma', 'Ananya Iyer',
    'Deepak Nair', 'Pooja Desai', 'Rajesh Kumar', 'Neha Joshi'
]
 
const PURPOSES = [
    'Meeting', 'Interview', 'Vendor Visit',
    'Client Visit', 'Delivery', 'Maintenance',
    'Audit / Inspection', 'Personal Visit', 'Other'
]
 
const LOCATIONS = [
    'Mumbai', 'Pune', 'Delhi', 'Bengaluru',
    'Hyderabad', 'Chennai', 'Thane',
    'Navi Mumbai', 'Ahmedabad', 'Kolkata'
]
 
const AVAILABLE_CARDS = [1, 2, 4, 5, 6, 8, 9, 10, 13, 14, 18, 21, 24, 25, 26]
 
const RegisterVisitor = () => {
    const navigate = useNavigate()
    const videoRef = useRef(null)
    const canvasRef = useRef(null)
 
    // Mobile check
    const [mobile, setMobile] = useState('')
    const [mobileChecked, setMobileChecked] = useState(false)
    const [isReturning, setIsReturning] = useState(false)
 
    // Form fields
    const [form, setForm] = useState({
        name: '',
        contact: '',
        purpose: '',
        location: '',
        company: '',
        cardNumber: ''
    })
 
    // Photo
    const [photo, setPhoto] = useState(null)
    const [cameraActive, setCameraActive] = useState(false)
 
    // Errors
    const [errors, setErrors] = useState({})
 
    // Success
    const [submitted, setSubmitted] = useState(false)
 
    // Update a single form field
    const updateField = (field, value) => {
        setForm(prev => ({ ...prev, [field]: value }))
        setErrors(prev => ({ ...prev, [field]: '' }))
    }
 
    // Check mobile number
    const handleCheckMobile = () => {
        if (!mobile.trim()) return
 
        // Sample returning visitor — replace with API
        if (mobile === '9876543210') {
            setForm({
                name: 'Aarav Patel',
                contact: 'Arjun Mehta',
                purpose: 'Client Visit',
                location: 'Mumbai',
                company: 'Acme Corp',
                cardNumber: ''
            })
            setIsReturning(true)
        } else {
            setIsReturning(false)
        }
        setMobileChecked(true)
    }
 
    // Start webcam
    const handleStartCamera = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                video: true
            })
            videoRef.current.srcObject = stream
            setCameraActive(true)
        } catch (err) {
            alert('Camera access denied. Please allow camera permissions.')
        }
    }
 
    // Capture photo from webcam
    const handleCapturePhoto = () => {
        const canvas = canvasRef.current
        const video = videoRef.current
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
        canvas.getContext('2d').drawImage(video, 0, 0)
        const dataUrl = canvas.toDataURL('image/jpeg')
        setPhoto(dataUrl)
 
        // Stop camera stream
        video.srcObject.getTracks().forEach(track => track.stop())
        setCameraActive(false)
    }
 
    // Retake photo
    const handleRetake = () => {
        setPhoto(null)
        handleStartCamera()
    }
 
    // Validate form
    const validate = () => {
        const newErrors = {}
        if (!mobile.trim()) newErrors.mobile = 'Mobile number is required.'
        if (!form.name.trim()) newErrors.name = 'Full name is required.'
        if (!form.contact) newErrors.contact = 'Meeting contact is required.'
        if (!form.purpose) newErrors.purpose = 'Purpose is required.'
        if (!form.location) newErrors.location = 'Location is required.'
        if (!form.cardNumber) newErrors.cardNumber = 'Please assign an ID card.'
        return newErrors
    }
 
    // Submit
    const handleSubmit = () => {
        const newErrors = validate()
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors)
            return
        }
        // TODO: call API to register visitor
        setSubmitted(true)
        setTimeout(() => {
            navigate('/visitors')
        }, 1500)
    }
 
    // Success screen
    if (submitted) {
        return (
            <AppShell role="receptionist">
                <div className="register-success">
                    <div className="success-icon">
                        <Check size={40} color="white" />
                    </div>
                    <h2>Visitor Registered!</h2>
                    <p>Redirecting to Visitors page...</p>
                </div>
            </AppShell>
        )
    }
 
    return (
        <AppShell role="receptionist">
            <div className="register-page">
 
                {/* Page header */}
                <div className="register-page-header">
                    <h1 className="register-title">Register Visitor</h1>
                    <p className="register-subtitle">
                        Fields marked <span className="req">*</span> are mandatory.
                    </p>
                </div>
 
                {/* Centered form card */}
                <div className="register-card">
 
                    {/* ── Mobile Check Section ── */}
                    <div className="form-section">
                        <h3 className="section-title">Step 1 — Verify Mobile Number</h3>
 
                        <div className="mobile-check-row">
                            <div className="mobile-input-group">
                                <label className="field-label">
                                    Mobile Number <span className="req">*</span>
                                </label>
                                <div className="input-wrapper">
                                    <Phone size={15} className="input-icon" />
                                    <input
                                        type="tel"
                                        className={`field-input ${errors.mobile ? 'input-error' : ''}`}
                                        placeholder="e.g. 9876543210"
                                        value={mobile}
                                        onChange={(e) => {
                                            setMobile(e.target.value)
                                            setErrors(prev => ({ ...prev, mobile: '' }))
                                            setMobileChecked(false)
                                            setIsReturning(false)
                                        }}
                                        maxLength={10}
                                    />
                                </div>
                                {errors.mobile && (
                                    <span className="error-text">{errors.mobile}</span>
                                )}
                            </div>
 
                            <button
                                className="check-btn"
                                onClick={handleCheckMobile}
                                disabled={!mobile.trim()}
                            >
                                <Search size={15} />
                                Check Visitor
                            </button>
                        </div>
 
                        {/* Status banner */}
                        {mobileChecked && (
                            <div className={`check-banner ${isReturning ? 'banner-returning' : 'banner-new'}`}>
                                {isReturning
                                    ? '✓ Returning visitor found — details auto-filled. Please review.'
                                    : '● New visitor — please fill in all details below.'
                                }
                            </div>
                        )}
                    </div>
 
                    <div className="section-divider" />
 
                    {/* ── Visitor Details ── */}
                    <div className="form-section">
                        <h3 className="section-title">Step 2 — Visitor Details</h3>
 
                        {/* Row 1 — Name + Contact */}
                        <div className="form-row">
                            <div className="form-group">
                                <label className="field-label">
                                    Full Name <span className="req">*</span>
                                </label>
                                <div className="input-wrapper">
                                    <User size={15} className="input-icon" />
                                    <input
                                        type="text"
                                        className={`field-input ${errors.name ? 'input-error' : ''}`}
                                        placeholder="e.g. Rahul Verma"
                                        value={form.name}
                                        onChange={(e) => updateField('name', e.target.value)}
                                    />
                                </div>
                                {errors.name && (
                                    <span className="error-text">{errors.name}</span>
                                )}
                            </div>
 
                            <div className="form-group">
                                <label className="field-label">
                                    Meeting Contact <span className="req">*</span>
                                </label>
                                <div className="select-wrapper">
                                    <select
                                        className={`field-select ${errors.contact ? 'input-error' : ''}`}
                                        value={form.contact}
                                        onChange={(e) => updateField('contact', e.target.value)}
                                    >
                                        <option value="">Select meeting contact</option>
                                        {MEETING_CONTACTS.map(c => (
                                            <option key={c} value={c}>{c}</option>
                                        ))}
                                    </select>
                                    <ChevronDown size={15} className="select-icon" />
                                </div>
                                {errors.contact && (
                                    <span className="error-text">{errors.contact}</span>
                                )}
                            </div>
                        </div>
 
                        {/* Row 2 — Purpose + Location */}
                        <div className="form-row">
                            <div className="form-group">
                                <label className="field-label">
                                    Purpose <span className="req">*</span>
                                </label>
                                <div className="select-wrapper">
                                    <select
                                        className={`field-select ${errors.purpose ? 'input-error' : ''}`}
                                        value={form.purpose}
                                        onChange={(e) => updateField('purpose', e.target.value)}
                                    >
                                        <option value="">Select purpose of visit</option>
                                        {PURPOSES.map(p => (
                                            <option key={p} value={p}>{p}</option>
                                        ))}
                                    </select>
                                    <ChevronDown size={15} className="select-icon" />
                                </div>
                                {errors.purpose && (
                                    <span className="error-text">{errors.purpose}</span>
                                )}
                            </div>
 
                            <div className="form-group">
                                <label className="field-label">
                                    Location <span className="req">*</span>
                                </label>
                                <div className="select-wrapper">
                                    <select
                                        className={`field-select ${errors.location ? 'input-error' : ''}`}
                                        value={form.location}
                                        onChange={(e) => updateField('location', e.target.value)}
                                    >
                                        <option value="">Select location</option>
                                        {LOCATIONS.map(l => (
                                            <option key={l} value={l}>{l}</option>
                                        ))}
                                    </select>
                                    <ChevronDown size={15} className="select-icon" />
                                </div>
                                {errors.location && (
                                    <span className="error-text">{errors.location}</span>
                                )}
                            </div>
                        </div>
 
                        {/* Row 3 — Company (half width) */}
                        <div className="form-row">
                            <div className="form-group">
                                <label className="field-label">
                                    Company Name{' '}
                                    <span className="optional-tag">Optional</span>
                                </label>
                                <input
                                    type="text"
                                    className="field-input"
                                    placeholder="e.g. TCS"
                                    value={form.company}
                                    onChange={(e) => updateField('company', e.target.value)}
                                />
                            </div>
                            <div className="form-group" />
                        </div>
 
                        {/* Row 4 — Assign ID Card (full width) */}
                        <div className="form-group form-group-full">
                            <label className="field-label">
                                Assign ID Card <span className="req">*</span>
                            </label>
                            <div className="select-wrapper">
                                <select
                                    className={`field-select ${errors.cardNumber ? 'input-error' : ''}`}
                                    value={form.cardNumber}
                                    onChange={(e) => updateField('cardNumber', e.target.value)}
                                >
                                    <option value="">Select an available card</option>
                                    {AVAILABLE_CARDS.map(n => (
                                        <option key={n} value={n}>Card #{n}</option>
                                    ))}
                                </select>
                                <ChevronDown size={15} className="select-icon" />
                            </div>
                            {errors.cardNumber && (
                                <span className="error-text">{errors.cardNumber}</span>
                            )}
                        </div>
 
                    </div>
 
                    <div className="section-divider" />
 
                    {/* ── Photo Section ── */}
                    <div className="form-section">
                        <h3 className="section-title">Visitor Photo</h3>
 
                        <div className="photo-box">
                            {/* No photo yet — show camera prompt */}
                            {!photo && !cameraActive && (
                                <div className="photo-empty">
                                    <Camera size={32} color="#9CA3AF" />
                                    <p className="photo-empty-text">No photo captured yet</p>
                                    <button
                                        className="capture-btn"
                                        onClick={handleStartCamera}
                                    >
                                        <Camera size={15} />
                                        Capture Photo
                                    </button>
                                </div>
                            )}
 
                            {/* Camera active — show live preview */}
                            {cameraActive && (
                                <div className="camera-preview">
                                    <video
                                        ref={videoRef}
                                        autoPlay
                                        className="camera-video"
                                    />
                                    <button
                                        className="capture-btn"
                                        onClick={handleCapturePhoto}
                                    >
                                        <Camera size={15} />
                                        Take Photo
                                    </button>
                                </div>
                            )}
 
                            {/* Photo captured */}
                            {photo && (
                                <div className="photo-preview">
                                    <img
                                        src={photo}
                                        alt="Visitor"
                                        className="captured-photo"
                                    />
                                    <button
                                        className="retake-btn"
                                        onClick={handleRetake}
                                    >
                                        <RotateCcw size={13} />
                                        Retake Photo
                                    </button>
                                </div>
                            )}
 
                            {/* Hidden canvas for capture */}
                            <canvas ref={canvasRef} style={{ display: 'none' }} />
                        </div>
                    </div>
 
                </div>
 
                {/* Submit bar — sticky at bottom */}
                <div className="submit-bar">
                    <button
                        className="submit-btn"
                        onClick={handleSubmit}
                    >
                        <Check size={16} />
                        Submit & Register
                    </button>
                    <p className="submit-note">
                        Submitting will save the visitor record and mark the
                        selected ID card as <strong>issued</strong>.
                    </p>
                </div>
 
            </div>
        </AppShell>
    )
}
 
export default RegisterVisitor