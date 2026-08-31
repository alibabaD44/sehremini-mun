import './footer.css'

function Footer(){
    return(
        <footer>
            <div className="footer-1">
                <img src="Logo_WHITE.png" alt="SEHREMINIMUN Logo" />
                <p>SEHREMINIMUN’26</p>
            </div>

            <div className="footer-2">
                <a href="">Applications</a>
                <a href="">Our Team</a>
                <a href="">Committees</a>
                <a href="">Conference</a>
                <a href="">Schedule</a>
                <a href="">FAQ</a>
            </div>

            <div className="footer-3">
                <h3>Contact</h3>
                <a 
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                >
                    Instagram
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