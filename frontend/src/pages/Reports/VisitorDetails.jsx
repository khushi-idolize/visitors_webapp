import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, User, Phone, Building, MapPin, Calendar, Clock, Printer, ShieldAlert, CheckCircle } from 'lucide-react';
import './VisitorDetails.css';

const VisitorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [visitor, setVisitor] = useState(null);

  // MOCK DATA GENERATOR: In a real app, you would fetch this from your backend using the ID
  useEffect(() => {
    // Simulating an API call to fetch visitor details and their past 3 visits
    setVisitor({
      id: id,
      name: "Ajay Singh", // Hardcoded demo name
      mobile: "7262290187",
      company: "KPMG",
      location: "Bengaluru",
      totalVisits: 3,
      registeredOn: "15 Jan 2026",
      status: "Inactive", // Currently not in the building
      history: [
        {
          visitId: "IBS-V-0089",
          date: "10 Jun 2026",
          contact: "Pooja Desai",
          purpose: "Client Visit",
          checkIn: "06:14 PM",
          checkOut: "07:30 PM",
          status: "Checked Out"
        },
        {
          visitId: "IBS-V-0042",
          date: "22 May 2026",
          contact: "Rahul Verma",
          purpose: "Follow-up Meeting",
          checkIn: "10:30 AM",
          checkOut: "11:45 AM",
          status: "Checked Out"
        },
        {
          visitId: "IBS-V-0012",
          date: "15 Jan 2026",
          contact: "Pooja Desai",
          purpose: "Initial Consultation",
          checkIn: "02:00 PM",
          checkOut: "04:15 PM",
          status: "Checked Out"
        }
      ]
    });
  }, [id]);

  if (!visitor) return <div style={{ padding: '40px' }}>Loading visitor details...</div>;

  return (
    <div className="visitor-details-page">
      {/* Top Header Actions */}
      <div className="details-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={18} /> Back to Reports
        </button>
        <div className="action-buttons">
          <button className="action-btn secondary"><Printer size={16} /> Print Report</button>
          <button className="action-btn danger"><ShieldAlert size={16} /> Flag Visitor</button>
        </div>
      </div>

      <div className="details-layout">
        
        {/* LEFT COLUMN: Fixed Profile Card */}
        <div className="profile-column">
          <div className="profile-card">
            <div className="profile-avatar-large">
              <User size={48} color="#fff" />
            </div>
            <h2 className="profile-name">{visitor.name}</h2>
            <p className="profile-mobile">+91 {visitor.mobile}</p>
            
            <div className="profile-badge inactive">
              {visitor.status}
            </div>

            <div className="profile-info-list">
              <div className="info-item">
                <Building size={16} className="info-icon" />
                <div>
                  <span className="info-label">Company</span>
                  <span className="info-val">{visitor.company}</span>
                </div>
              </div>
              <div className="info-item">
                <MapPin size={16} className="info-icon" />
                <div>
                  <span className="info-label">Location</span>
                  <span className="info-val">{visitor.location}</span>
                </div>
              </div>
              <div className="info-item">
                <Calendar size={16} className="info-icon" />
                <div>
                  <span className="info-label">First Registered</span>
                  <span className="info-val">{visitor.registeredOn}</span>
                </div>
              </div>
            </div>

            <div className="total-visits-highlight">
              <span className="highlight-num">{visitor.totalVisits}</span>
              <span className="highlight-text">Total Recorded Visits</span>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Scrollable Visit History */}
        <div className="history-column">
          <h3 className="section-title">Visit History Log</h3>
          
          <div className="timeline-container">
            {visitor.history.map((visit, index) => (
              <div className="history-card" key={index}>
                <div className="history-card-header">
                  <div className="visit-id-group">
                    <span className="visit-id-label">VISIT ID</span>
                    <span className="visit-id-val">{visit.visitId}</span>
                  </div>
                  <div className="visit-status-badge">
                    <CheckCircle size={14} /> {visit.status}
                  </div>
                </div>

                <div className="history-grid">
                  <div className="history-field">
                    <span className="field-label">Date</span>
                    <span className="field-value"><Calendar size={14} className="inline-icon"/> {visit.date}</span>
                  </div>
                  <div className="history-field">
                    <span className="field-label">Host / Meeting Contact</span>
                    <span className="field-value"><User size={14} className="inline-icon"/> {visit.contact}</span>
                  </div>
                  <div className="history-field">
                    <span className="field-label">Purpose</span>
                    <span className="field-value">{visit.purpose}</span>
                  </div>
                </div>

                <div className="history-times">
                  <div className="time-block">
                    <span className="time-label">Check-In</span>
                    <span className="time-val"><Clock size={14} className="inline-icon text-green"/> {visit.checkIn}</span>
                  </div>
                  <div className="time-divider"></div>
                  <div className="time-block">
                    <span className="time-label">Check-Out</span>
                    <span className="time-val"><Clock size={14} className="inline-icon text-red"/> {visit.checkOut}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default VisitorDetails;