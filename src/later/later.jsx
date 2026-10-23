import './later.css'
import { Link } from 'react-router-dom'

function Later() {
    return (
        <main className="coming-soon">

            <div className="coming-glow"></div>

            <section className="coming-content">

                <h1>
                    TAKİNG A BREAK DOESN'T HURT
                    <br />
                    WE WILL RETURN VERY SOON
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

export default Later