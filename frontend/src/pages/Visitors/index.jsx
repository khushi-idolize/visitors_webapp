// src/pages/Visitors/index.jsx
import { useState } from 'react'
import { Search } from 'lucide-react'
import AppShell from '../../components/layout/AppShell'
import VisitorRow from './VisitorRow'
import './Visitors.css'

const sampleVisitors = [
    {
        id: 'IBS-V-0001',
        name: 'Aarav Patel',
        mobile: '9876543210',
        company: 'Acme Corp',
        location: 'Mumbai',
        contact: 'Arjun Mehta',
        purpose: 'Client Visit',
        cardNumber: 4,
        checkIn: '11 Jun 2026, 09:12:00 AM',
        checkOut: null,
        photo: null
    },
    {
        id: 'IBS-V-0002',
        name: 'Sneha Iyer',
        mobile: '9123456780',
        company: 'TechNova',
        location: 'Bengaluru',
        contact: 'Priya Nair',
        purpose: 'Interview',
        cardNumber: 7,
        checkIn: '11 Jun 2026, 09:45:00 AM',
        checkOut: null,
        photo: null
    },
    {
        id: 'IBS-V-0003',
        name: 'Rohit Singh',
        mobile: '9988776655',
        company: 'BlueDart',
        location: 'Delhi',
        contact: 'Vikram Rao',
        purpose: 'Delivery',
        cardNumber: null,
        checkIn: '11 Jun 2026, 10:02:00 AM',
        checkOut: '11 Jun 2026, 10:24:00 AM',
        photo: null
    },
    {
        id: 'IBS-V-0004',
        name: 'Priya Nair',
        mobile: '9833011290',
        company: 'Wipro',
        location: 'Pune',
        contact: 'Arjun Mehta',
        purpose: 'Client Visit',
        cardNumber: 12,
        checkIn: '10 Jun 2026, 10:15:00 AM',
        checkOut: '10 Jun 2026, 01:08:00 PM',
        photo: null
    },
    {
        id: 'IBS-V-0005',
        name: 'Karan Malhotra',
        mobile: '9833088001',
        company: 'Inventra Supplies',
        location: 'Bengaluru',
        contact: 'Sneha Kapoor',
        purpose: 'Vendor Visit',
        cardNumber: 11,
        checkIn: '10 Jun 2026, 08:18:00 AM',
        checkOut: '10 Jun 2026, 01:12:00 PM',
        photo: null
    },
    {
        id: 'IBS-V-0006',
        name: 'Anjali Desai',
        mobile: '9902041776',
        company: 'Deloitte',
        location: 'Mumbai',
        contact: 'Arjun Mehta',
        purpose: 'Audit / Inspection',
        cardNumber: 17,
        checkIn: '09 Jun 2026, 11:00:00 AM',
        checkOut: null,
        photo: null
    },
    {
        id: 'IBS-V-0007',
        name: 'Vikram Rao',
        mobile: '9967023145',
        company: 'KPMG',
        location: 'Hyderabad',
        contact: 'Rohit Sharma',
        purpose: 'Meeting',
        cardNumber: 22,
        checkIn: '09 Jun 2026, 02:30:00 PM',
        checkOut: '09 Jun 2026, 04:00:00 PM',
        photo: null
    },
    {
        id: 'IBS-V-0008',
        name: 'Meera Joshi',
        mobile: '9765432109',
        company: 'HDFC Bank',
        location: 'Chennai',
        contact: 'Deepak Nair',
        purpose: 'Meeting',
        cardNumber: 5,
        checkIn: '08 Jun 2026, 03:00:00 PM',
        checkOut: null,
        photo: null
    },
    {
        id: 'IBS-V-0009',
        name: 'Daniel Joseph',
        mobile: '9004177820',
        company: 'Bajaj Finserv',
        location: 'Pune',
        contact: 'Pooja Desai',
        purpose: 'Vendor Visit',
        cardNumber: 9,
        checkIn: '07 Jun 2026, 11:30:00 AM',
        checkOut: '07 Jun 2026, 01:45:00 PM',
        photo: null
    },
    {
        id: 'IBS-V-0010',
        name: 'Pooja Sharma',
        mobile: '9871234560',
        company: 'Reliance Industries',
        location: 'Ahmedabad',
        contact: 'Rajesh Kumar',
        purpose: 'Client Visit',
        cardNumber: 3,
        checkIn: '06 Jun 2026, 10:00:00 AM',
        checkOut: '06 Jun 2026, 12:30:00 PM',
        photo: null
    },
]

// 1. Added the role prop here
const VisitorsPage = ({ role = 'receptionist' }) => {
    const [expandedId, setExpandedId] = useState(null)
    const [searchTerm, setSearchTerm] = useState('')
    const [visitors, setVisitors] = useState(sampleVisitors)

    const [filters, setFilters] = useState({
        name: '',
        company: '',
        dateFrom: '',
        dateTo: ''
    })

    const [activeFilters, setActiveFilters] = useState({
        name: '',
        company: '',
        dateFrom: '',
        dateTo: ''
    })

    const handleRowClick = (id) => {
        setExpandedId(expandedId === id ? null : id)
    }

    const handleCheckout = (visitorId) => {
        const now = new Date()
        const formatted = now.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        }) + ', ' + now.toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
        })

        setVisitors(prev =>
            prev.map(v =>
                v.id === visitorId
                    ? { ...v, checkOut: formatted }
                    : v
            )
        )
        setExpandedId(null)
    }

    const handleApplyFilters = () => {
        setActiveFilters({ ...filters })
    }

    const handleClearFilters = () => {
        setFilters({ name: '', company: '', dateFrom: '', dateTo: '' })
        setActiveFilters({ name: '', company: '', dateFrom: '', dateTo: '' })
        setSearchTerm('')
    }

    // Derived filtered list — no extra state needed
    const filteredVisitors = visitors.filter(v => {
        const search = searchTerm.toLowerCase()

        const matchesSearch =
            v.name.toLowerCase().includes(search) ||
            v.mobile.includes(search) ||
            (v.company && v.company.toLowerCase().includes(search))

        const matchesName = activeFilters.name
            ? v.name.toLowerCase().includes(activeFilters.name.toLowerCase())
            : true

        const matchesCompany = activeFilters.company
            ? v.company && v.company.toLowerCase().includes(activeFilters.company.toLowerCase())
            : true

        return matchesSearch && matchesName && matchesCompany
    })

    const activeCount = visitors.filter(v => !v.checkOut).length

    // 2. Wrap the main content in a variable
    const pageContent = (
        <div className="visitors-page">

            {/* Header */}
            <div className="visitors-header">
                <h1 className="visitors-title">Visitors</h1>
                <p className="visitors-subtext">
                    {filteredVisitors.length} records ·{' '}
                    <strong>{activeCount} currently active</strong>
                </p>
            </div>

            {/* Search */}
            <div className="search-wrapper">
                <Search size={16} className="search-icon" />
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search by name, mobile, company..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            {/* Filters */}
            <div className="filter-row">
                <input
                    type="text"
                    className="filter-input"
                    placeholder="Visitor name"
                    value={filters.name}
                    onChange={(e) =>
                        setFilters(prev => ({ ...prev, name: e.target.value }))
                    }
                />
                <input
                    type="text"
                    className="filter-input"
                    placeholder="Company name"
                    value={filters.company}
                    onChange={(e) =>
                        setFilters(prev => ({ ...prev, company: e.target.value }))
                    }
                />
                <input
                    type="date"
                    className="filter-input filter-date"
                    value={filters.dateFrom}
                    onChange={(e) =>
                        setFilters(prev => ({ ...prev, dateFrom: e.target.value }))
                    }
                />
                <span className="filter-dash">—</span>
                <input
                    type="date"
                    className="filter-input filter-date"
                    value={filters.dateTo}
                    onChange={(e) =>
                        setFilters(prev => ({ ...prev, dateTo: e.target.value }))
                    }
                />
                <button
                    className="filter-apply-btn"
                    onClick={handleApplyFilters}
                >
                    Apply Filters
                </button>
                <button
                    className="filter-clear-btn"
                    onClick={handleClearFilters}
                >
                    Clear
                </button>
            </div>

            {/* Table Header */}
            <div className="table-header">
                <span className="col-visitor">VISITOR</span>
                <span className="col-company">COMPANY / LOCATION</span>
                <span className="col-checkin">CHECK-IN</span>
                <span className="col-status">STATUS</span>
                <span className="col-chevron"></span>
            </div>

            {/* Table Body */}
            <div className="table-body">
                {filteredVisitors.length === 0 ? (
                    <div className="table-empty">
                        No visitors found.
                    </div>
                ) : (
                    filteredVisitors.map(visitor => (
                        <VisitorRow
                            key={visitor.id}
                            visitor={visitor}
                            isExpanded={expandedId === visitor.id}
                            onRowClick={() => handleRowClick(visitor.id)}
                            onCheckout={() => handleCheckout(visitor.id)}
                        />
                    ))
                )}
            </div>

        </div>
    )

    // 3. Conditionally return the content
    return role === 'admin' ? (
        pageContent
    ) : (
        <AppShell role={role}>
            {pageContent}
        </AppShell>
    )
}

export default VisitorsPage