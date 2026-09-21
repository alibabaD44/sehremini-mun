import Footer from '../../footer/footer';
import Navbar from '../../navbar/navbar';
import './ecofin.css';
import { useNavigate } from 'react-router-dom';

function Ecofin() {

    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <section className="ecofin">

                {/* HERO */}
                <div className="ecofin-hero">

                    <img
                        src="/ECOFIN.png"
                        alt="ECOFIN"
                    />

                    <div className="ecofin-hero-overlay"></div>

                    <div className="ecofin-hero-title">
                        <h1>ECOFIN</h1>
                    </div>

                </div>


                {/* DESCRIPTION */}
                <div className="ecofin-description">

                    <div className="ecofin-description-title">
                        <span>COMMITTEE</span>
                        <h2>ECOFIN</h2>
                    </div>

                    <div className="ecofin-description-content">

                        <p>
                            Our first committee, Economic and Financial Affairs Council (ECOFIN), is officially convening to address the critical agenda: “Digitalization of the Chinese Economy.” As digital technologies continue to reshape industries, finance, trade, and consumption, China’s rapidly evolving digital economy has become a significant force in the global economic landscape.

                            This transformation brings both new opportunities and complex challenges, ranging from digital infrastructure and technological innovation to data governance and financial technology. Its growing influence on international trade and economic relations further highlights the need for thoughtful and effective policy responses.

                            We call upon our esteemed delegates to engage in rigorous, evidence-based diplomacy and formulate innovative solutions to the challenges surrounding China’s digital transformation.

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

export default Ecofin;