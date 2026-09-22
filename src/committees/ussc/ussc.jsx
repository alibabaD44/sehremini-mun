import Footer from '../../footer/footer';
import Navbar from '../../navbar/navbar';
import './ussc.css';
import { useNavigate } from 'react-router-dom';

function Ussc() {

    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <section className="ecofin">

                {/* HERO */}
                <div className="ecofin-hero">

                    <img
                        src="/USSC.png"
                        alt="USSC"
                    />

                    <div className="ecofin-hero-overlay"></div>

                    <div className="ecofin-hero-title">
                        <h1>UNITED STATES SUPREME COURT</h1>
                    </div>

                </div>


                {/* DESCRIPTION */}
                <div className="ecofin-description">

                    <div className="ecofin-description-title">
                        <span>COMMITTEE</span>
                        <h2>UNITED STATES SUPREME COURT</h2>
                    </div>

                    <div className="ecofin-description-content">

                        <p>
                            Our fourth committee, the United States Supreme Court, will examine the landmark case of Clay v. United States.

                            When individual conscience meets federal law, complex legal questions emerge.
                            Arising during the Vietnam War era, the case addresses conscientious objection, religious belief, and the application of federal law. In 1971, the Supreme Court reversed Clay’s conviction after determining that errors had affected the consideration of his conscientious-objector claim.

                            We invite our esteemed delegates to examine the case, analyze its legal arguments, and engage in rigorous judicial reasoning while considering the constitutional questions at its core.

                            We are looking forward to seeing you at ŞEHREMINIMUN’26.
                        </p>

                        <div className="ecofin-back">
                            <button
                                onClick={() => navigate('/committees')}
                            >
                                <span>←</span>
                                Back to Committees
                            </button>
                        </div>

                    </div>

                </div>

            </section>

            <Footer />
        </>
    );
}

export default Ussc;