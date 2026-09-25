import Footer from '../../footer/footer';
import Navbar from '../../navbar/navbar';
import './cabinet.css';
import { useNavigate } from 'react-router-dom';

function Cabinet() {

    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <section className="ecofin">

                {/* HERO */}
                <div className="ecofin-hero">

                    <img
                        src="/CABINET.png"
                        alt="CABINET"
                    />

                    <div className="ecofin-hero-overlay"></div>

                    <div className="ecofin-hero-title">
                        <h1>CABINET OF US</h1>
                    </div>

                </div>


                {/* DESCRIPTION */}
                <div className="ecofin-description">

                    <div className="ecofin-description-title">
                        <span>COMMITTEE</span>
                        <h2>Cabinet of US</h2>
                    </div>

                    <div className="ecofin-description-content">

                        <p>
                            Our eighth committee Cabinet of US - World War 3, 2030), will examine a catastrophic global confrontation unfolding in the year 2030.

                            When an AI-manipulated false-flag attack triggers military retaliation between key allies, unprecedented geopolitical and strategic crises emerge.
                            Set against the backdrop of an escalating Eastern Mediterranean energy standoff and direct naval clashes between Israel and Turkey, the global order faces rapid destabilization. Following Turkey's invocation of NATO Article 5, Eurasian power alignments, and cyber strikes hitting critical infrastructure, the US Cabinet convenes in the Situation Room under the Vance administration to prevent full-scale global warfare. Delegates will navigate complex military deployments, intelligence operations, and high-stakes diplomacy on the brink of World War III.

                            We call upon our esteemed delegates to engage in rigorous national security analysis, execute strategic decision-making, and navigate the delicate balance of international power.
                            We are looking forward to seeing you at ŞEHREMİNİMUN’26.
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

export default Cabinet;