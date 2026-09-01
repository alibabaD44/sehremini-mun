import './comingsoon.css'
import { Link } from 'react-router-dom'

function Comingsoon() {
    return (
        <main className="coming-soon">

            <div className="coming-glow"></div>

            <section className="coming-content">

                <h1>
                    COMING
                    <br />
                    SOON
                </h1>

                <Link to="/" className="home-button">
                    BACK TO HOME
                </Link>

            </section>

            <div className="coming-corner top-left"></div>
            <div className="coming-corner bottom-right"></div>

        </main>
    )
}

export default Comingsoon