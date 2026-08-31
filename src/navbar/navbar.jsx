import './navbar.css'
import { useEffect, useState } from 'react'

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
                    <img src="Logo_WHITE.png" alt="" />
                </div>

                <div className='nav-sec-2'>
                    <a href="">Applications</a>
                    <a href="">Our Team</a>
                    <a href="">Committees</a>
                    <a href="">Conference</a>
                    <a href="">Schedule</a>
                    <a href="">FAQ</a>
                </div>

            </nav>
        </>
    )
}

export default Navbar