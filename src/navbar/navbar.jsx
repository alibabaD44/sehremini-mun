import './navbar.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    const closeMenu = () => {
        setMenuOpen(false)
    }

    return (
        <nav className={scrolled ? 'scrolled' : ''}>

            <div className="nav-sec-1">
                <Link to="/" onClick={closeMenu}>
                    <img
                        src="Logo_WHITE.png"
                        alt="SEHREMINIMUN"
                    />
                </Link>
            </div>

            <div className={`nav-sec-2 ${menuOpen ? 'open' : ''}`}>

                <Link
                    to="/applications"
                    onClick={closeMenu}
                >
                    Applications
                </Link>

                <Link
                    to="/our-team"
                    onClick={closeMenu}
                >
                    Our Team
                </Link>

                <Link
                    to="/committees"
                    onClick={closeMenu}
                >
                    Committees
                </Link>

                <Link
                    to="/conference"
                    onClick={closeMenu}
                >
                    Conference
                </Link>

                <Link
                    to="/schedule"
                    onClick={closeMenu}
                >
                    Schedule
                </Link>

                <Link
                    to="/faq"
                    onClick={closeMenu}
                >
                    FAQ
                </Link>

            </div>

            <button
                className={`menu-toggle ${menuOpen ? 'active' : ''}`}
                onClick={() => setMenuOpen(prev => !prev)}
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

        </nav>
    )
}

export default Navbar