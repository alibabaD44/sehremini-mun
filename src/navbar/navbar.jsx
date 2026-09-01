import './navbar.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 80)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <nav className={scrolled ? 'scrolled' : ''}>

                <div className='nav-sec-1'>
                    <Link to="/">
                        <img src="Logo_WHITE.png" alt="SEHREMINIMUN" />
                    </Link>
                </div>

                <div className='nav-sec-2'>
                    <Link to="/applications">Applications</Link>
                    <Link to="/our-team">Our Team</Link>
                    <Link to="/committees">Committees</Link>
                    <Link to="/conference">Conference</Link>
                    <Link to="/schedule">Schedule</Link>
                    <Link to="/faq">FAQ</Link>
                </div>

            </nav>
        </>
    )
}

export default Navbar