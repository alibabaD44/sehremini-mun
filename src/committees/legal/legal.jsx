import Footer from '../../footer/footer';
import Navbar from '../../navbar/navbar';
import './legal.css';
import { useNavigate } from 'react-router-dom';

function Legal() {

    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <section className="ecofin">

                {/* HERO */}
                <div className="ecofin-hero">

                    <img
                        src="/LEGAL.png"
                        alt="LEGAL"
                    />

                    <div className="ecofin-hero-overlay"></div>

                    <div className="ecofin-hero-title">
                        <h1>LEGAL</h1>
                    </div>

                </div>


                {/* DESCRIPTION */}
                <div className="ecofin-description">

                    <div className="ecofin-description-title">
                        <span>COMMITTEE</span>
                        <h2>LEGAL</h2>
                    </div>

                    <div className="ecofin-description-content">

                        <p>
                            Our third committee, the LEGAL Committee, turns its attention to the fundamental issue of “Right of Peaceful Assembly.” As a cornerstone of participatory societies, the right to peaceful assembly allows individuals to gather, express their views, and participate in public life. Yet, balancing this fundamental right with public order, safety, and the rights of others continues to raise complex legal questions.

                            While international law permits certain restrictions, these must remain lawful, necessary, and proportionate. Addressing these challenges requires effective legal frameworks that protect the right to peaceful assembly while respecting legitimate public interests.

                            We call upon our esteemed delegates to engage in rigorous, evidence-based diplomacy and develop meaningful solutions to safeguard this fundamental right.

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

export default Legal;