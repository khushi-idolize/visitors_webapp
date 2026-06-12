import { useState } from "react";
import "./Reports.css";
import { useNavigate } from 'react-router-dom';

// Reports.jsx
import AppShell from '../../components/layout/AppShell';

export default function Reports() {
  return (
    <AppShell role="admin">
      <div className="reports-page">
        {/* Your existing reports content */}
      </div>
    </AppShell>
  );
}

const MOCK_DATA = [
  { id: 1, photo: null, name: "Ajay Singh", mobile: "7262290187", meetingContact: "Pooja Desai", purpose: "Client Visit", location: "Bengaluru", company: "KPMG", totalVisits: 1, lastCheckIn: "10 Jun 2026, 06:14:33 PM", lastCheckOut: "10 Jun 2026, 07:30:00 PM" },
  { id: 2, photo: null, name: "Sneha Iyer", mobile: "91234 56780", meetingContact: "Priya Nair", purpose: "Interview", location: "Bengaluru", company: "TechNova", totalVisits: 2, lastCheckIn: "10 Jun 2026, 06:14:06 PM", lastCheckOut: "10 Jun 2026, 08:00:00 PM" },
  { id: 3, photo: null, name: "Aarav Patel", mobile: "98765 43210", meetingContact: "Rajesh Kumar", purpose: "Client Visit", location: "Mumbai", company: "Acme Corp", totalVisits: 3, lastCheckIn: "10 Jun 2026, 06:13:52 PM", lastCheckOut: "10 Jun 2026, 07:45:00 PM" },
  { id: 4, photo: null, name: "Pooja Sharma", mobile: "99670 23145", meetingContact: "Rohit Sharma", purpose: "Meeting", location: "Ahmedabad", company: "HDFC Bank", totalVisits: 1, lastCheckIn: "10 Jun 2026, 05:10:12 PM", lastCheckOut: "10 Jun 2026, 06:00:00 PM" },
  { id: 5, photo: null, name: "Meera Joshi", mobile: "97045 66120", meetingContact: "Sneha Kapoor", purpose: "Delivery", location: "Thane", company: "BlueDart", totalVisits: 1, lastCheckIn: "10 Jun 2026, 04:27:12 PM", lastCheckOut: "10 Jun 2026, 04:50:00 PM" },
  { id: 6, photo: null, name: "Anjali Desai", mobile: "99020 41776", meetingContact: "Arjun Mehta", purpose: "Audit / Inspection", location: "Hyderabad", company: "Deloitte", totalVisits: 5, lastCheckIn: "10 Jun 2026, 03:47:12 PM", lastCheckOut: "10 Jun 2026, 05:30:00 PM" },
  { id: 7, photo: null, name: "Rohit Singh", mobile: "99887 76655", meetingContact: "Vikram Rao", purpose: "Vendor Visit", location: "Delhi", company: "BlueDart", totalVisits: 1, lastCheckIn: "10 Jun 2026, 03:14:12 PM", lastCheckOut: "10 Jun 2026, 04:00:00 PM" },
  { id: 8, photo: null, name: "Deepak Nair", mobile: "98456 77001", meetingContact: "Ananya Iyer", purpose: "Personal Visit", location: "Navi Mumbai", company: "—", totalVisits: 1, lastCheckIn: "10 Jun 2026, 11:48:00 AM", lastCheckOut: "10 Jun 2026, 12:30:00 PM" },
  { id: 9, photo: null, name: "Vikram Rao", mobile: "90041 77820", meetingContact: "Deepak Nair", purpose: "Maintenance", location: "Chennai", company: "CoolAir Services", totalVisits: 1, lastCheckIn: "10 Jun 2026, 11:05:20 AM", lastCheckOut: "10 Jun 2026, 12:00:00 PM" },
  { id: 10, photo: null, name: "Karan Malhotra", mobile: "98330 88001", meetingContact: "Priya Nair", purpose: "Vendor Visit", location: "Mumbai", company: "Inventra Supplies", totalVisits: 6, lastCheckIn: "10 Jun 2026, 10:32:45 AM", lastCheckOut: "10 Jun 2026, 11:45:00 AM" },
  { id: 11, photo: null, name: "Riya Mehta", mobile: "91234 00001", meetingContact: "Anil Kumar", purpose: "Client Visit", location: "Pune", company: "Infosys", totalVisits: 2, lastCheckIn: "09 Jun 2026, 10:00:00 AM", lastCheckOut: "09 Jun 2026, 11:30:00 AM" },
  { id: 12, photo: null, name: "Suresh Pillai", mobile: "98000 11122", meetingContact: "Meena Rao", purpose: "Interview", location: "Bengaluru", company: "Wipro", totalVisits: 1, lastCheckIn: "09 Jun 2026, 09:30:00 AM", lastCheckOut: "09 Jun 2026, 10:45:00 AM" },
  { id: 13, photo: null, name: "Kavita Joshi", mobile: "97111 22233", meetingContact: "Sanjay Gupta", purpose: "Meeting", location: "Mumbai", company: "TCS", totalVisits: 4, lastCheckIn: "08 Jun 2026, 02:00:00 PM", lastCheckOut: "08 Jun 2026, 03:30:00 PM" },
  { id: 14, photo: null, name: "Arjun Verma", mobile: "96222 33344", meetingContact: "Priya Shah", purpose: "Client Visit", location: "Delhi", company: "HCL", totalVisits: 2, lastCheckIn: "08 Jun 2026, 11:00:00 AM", lastCheckOut: "08 Jun 2026, 12:15:00 PM" },
  { id: 15, photo: null, name: "Nisha Patel", mobile: "95333 44455", meetingContact: "Rahul Nair", purpose: "Delivery", location: "Surat", company: "FedEx", totalVisits: 1, lastCheckIn: "07 Jun 2026, 03:00:00 PM", lastCheckOut: "07 Jun 2026, 03:20:00 PM" },
  { id: 16, photo: null, name: "Manish Tiwari", mobile: "94444 55566", meetingContact: "Geeta Sharma", purpose: "Vendor Visit", location: "Jaipur", company: "Reliance", totalVisits: 3, lastCheckIn: "07 Jun 2026, 10:00:00 AM", lastCheckOut: "07 Jun 2026, 11:00:00 AM" },
];

const ROWS_PER_PAGE = 10;

function getInitials(name) {
  return name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
}

const avatarColors = ["#4A90D9", "#7B68EE", "#50C878", "#FF8C42", "#C0392B", "#20B2AA"];

export default function Reports() {
  const today = new Date().toISOString().split("T")[0];
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString().split("T")[0];

  const [search, setSearch] = useState("");
  const [visitorName, setVisitorName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [fromDate, setFromDate] = useState(sevenDaysAgo);
  const [toDate, setToDate] = useState(today);
  const [appliedFilters, setAppliedFilters] = useState({ visitorName: "", companyName: "", fromDate: sevenDaysAgo, toDate: today });
  const [currentPage, setCurrentPage] = useState(1);

  const frequentCount = MOCK_DATA.filter(v => v.totalVisits >= 2).length;

  const filtered = MOCK_DATA.filter(v => {
    const s = search.toLowerCase();
    const matchSearch = !s || v.name.toLowerCase().includes(s) || v.company.toLowerCase().includes(s) || v.location.toLowerCase().includes(s);
    const matchName = !appliedFilters.visitorName || v.name.toLowerCase().includes(appliedFilters.visitorName.toLowerCase());
    const matchCompany = !appliedFilters.companyName || v.company.toLowerCase().includes(appliedFilters.companyName.toLowerCase());
    return matchSearch && matchName && matchCompany;
  });

  const totalPages = Math.ceil(filtered.length / ROWS_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * ROWS_PER_PAGE, currentPage * ROWS_PER_PAGE);

  const handleApply = () => {
    setAppliedFilters({ visitorName, companyName, fromDate, toDate });
    setCurrentPage(1);
  };

  const handleClear = () => {
    setVisitorName(""); setCompanyName("");
    setFromDate(sevenDaysAgo); setToDate(today);
    setAppliedFilters({ visitorName: "", companyName: "", fromDate: sevenDaysAgo, toDate: today });
    setSearch(""); setCurrentPage(1);
  };

  const handleExport = () => alert("Export to Excel — connect to backend.");

  const navigate = useNavigate();

  return (
    <div className="reports-page">
      {/* Header */}
      <div className="reports-header">
        <h1 className="reports-title">Visitor Reports</h1>
        <p className="reports-subtitle">
          Complete visitor history. Showing last 7 days by default.
          {frequentCount > 0 && <span className="frequent-badge"> · {frequentCount} frequent visitors</span>}
        </p>
      </div>

      {/* Search + Export */}
      <div className="reports-top-bar">
        <div className="search-wrapper">
          <span className="search-icon">🔍</span>
          <input
            className="search-input"
            placeholder="Search by name, location, company..."
            value={search}
            onChange={e => { setSearch(e.target.value); setCurrentPage(1); }}
          />
        </div>
        <button className="export-btn" onClick={handleExport}>
          <span>⊞</span> Export to Excel
        </button>
      </div>

      {/* Filters */}
      <div className="filters-bar">
        <input className="filter-input" placeholder="Visitor name" value={visitorName} onChange={e => setVisitorName(e.target.value)} />
        <input className="filter-input" placeholder="Company name" value={companyName} onChange={e => setCompanyName(e.target.value)} />
        <input className="filter-date" type="date" value={fromDate} onChange={e => setFromDate(e.target.value)} />
        <span className="date-sep">—</span>
        <input className="filter-date" type="date" value={toDate} onChange={e => setToDate(e.target.value)} />
        <button className="apply-btn" onClick={handleApply}>Apply Filters</button>
        <button className="clear-btn" onClick={handleClear}>Clear</button>
      </div>

      {/* Table */}
      <div className="table-wrapper">
        <table className="reports-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Meeting Contact</th>
              <th>Purpose</th>
              <th>Location</th>
              <th>Company</th>
              <th>Total Visits</th>
              <th>Last Check-In</th>
              <th>Last Check-Out</th>
            </tr>
          </thead>
          <tbody>
            {paginated.length === 0 ? (
              <tr><td colSpan={11} className="no-data">No records found.</td></tr>
            ) : paginated.map((v, i) => {
              const globalIdx = (currentPage - 1) * ROWS_PER_PAGE + i + 1;
              const color = avatarColors[v.id % avatarColors.length];
              return (
                <tr key={v.id} onClick={() => navigate(`/admin/visitor/${v.id}`)} style={{ cursor: 'pointer' }}>
                  <td className="td-num">{String(globalIdx).padStart(2, "0")}</td>
                  <td>
                    <div className="avatar" style={{ backgroundColor: color }}>
                      {getInitials(v.name)}
                    </div>
                  </td>
                  <td className="td-name">{v.name}</td>
                  <td className="td-mono">{v.mobile}</td>
                  <td>{v.meetingContact}</td>
                  <td>{v.purpose}</td>
                  <td>{v.location}</td>
                  <td>{v.company}</td>
                  <td>
                    {v.totalVisits >= 4
                      ? <span className="visits-badge">{v.totalVisits}</span>
                      : v.totalVisits}
                  </td>
                  <td className="td-mono">{v.lastCheckIn}</td>
                  <td className="td-mono">{v.lastCheckOut}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination-bar">
        <button className="page-btn" onClick={() => setCurrentPage(p => Math.max(1, p - 1))} disabled={currentPage === 1}>← Prev</button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
          <button key={p} className={`page-btn ${p === currentPage ? "active" : ""}`} onClick={() => setCurrentPage(p)}>{p}</button>
        ))}
        <button className="page-btn" onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))} disabled={currentPage === totalPages}>Next →</button>
        <span className="page-info">Showing {(currentPage - 1) * ROWS_PER_PAGE + 1}–{Math.min(currentPage * ROWS_PER_PAGE, filtered.length)} of {filtered.length} records</span>
      </div>
    </div>
  );
}