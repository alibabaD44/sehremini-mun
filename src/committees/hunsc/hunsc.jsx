import Footer from '../../footer/footer';
import Navbar from '../../navbar/navbar';
import './hunsc.css';
import { useNavigate } from 'react-router-dom';

function Hunsc() {

    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <section className="ecofin">

                {/* HERO */}
                <div className="ecofin-hero">

                    <img
                        src="/HUNSC.png"
                        alt="HUNSC"
                    />

                    <div className="ecofin-hero-overlay"></div>

                    <div className="ecofin-hero-title">
                        <h1>HUNSC</h1>
                    </div>

                </div>


                {/* DESCRIPTION */}
                <div className="ecofin-description">

                    <div className="ecofin-description-title">
                        <span>COMMITTEE</span>
                        <h2>HUNSC</h2>
                    </div>

                    <div className="ecofin-description-content">

                        <p>
                            Our sixth committee, the Historical United Nations Security Council (HUNSC), takes us back to the Suez Crisis of 1956.

                            When a crisis challenges the foundations of international peace, diplomacy becomes essential.
                            Following the nationalization of the Suez Canal and the outbreak of hostilities in Egypt, the crisis brought questions of sovereignty, international intervention, and collective security to the forefront. With the Security Council unable to reach a decision, the issue was brought before the General Assembly, contributing to the establishment of the United Nations Emergency Force (UNEF), the UN’s first peacekeeping force.

                            We invite our delegates to examine the events of 1956, navigate the diplomatic challenges of the crisis, and explore approaches to maintaining international peace and security.

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

export default Hunsc;