import './footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <footer>

            <div className="footer-1">
                <Link to="/">
                    <img src="Logo_WHITE.png" alt="SEHREMINIMUN Logo" />
                </Link>

                <p>SEHREMINIMUN’26</p>
            </div>


            <div className="footer-2">
                <Link to="/applications">Applications</Link>
                <Link to="/team">Our Team</Link>
                <Link to="/committees">Committees</Link>
                <Link to="/conference">Conference</Link>
                <Link to="/schedule">Schedule</Link>
                <Link to="/faq">FAQ</Link>
            </div>


            <div className="footer-3">
                <h3>Contact</h3>

                <a 
                    href="https://www.instagram.com/sehreminimun26/"
                    target="_blank"
                    rel="noreferrer"
                    className="instagram"
                >
                    <i className="fa-brands fa-instagram"></i>
                </a>
            </div>


            <div className="footer-bottom">
                <span>© 2026 SEHREMINIMUN</span>
                <span>All Rights Reserved.</span>
            </div>

        </footer>
    )
}

export default Footer