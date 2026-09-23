import Footer from '../../footer/footer';
import Navbar from '../../navbar/navbar';
import './h-nato.css';
import { useNavigate } from 'react-router-dom';

function Hnato() {

    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <section className="ecofin">

                {/* HERO */}
                <div className="ecofin-hero">

                    <img
                        src="/NATO.png"
                        alt="NATO"
                    />

                    <div className="ecofin-hero-overlay"></div>

                    <div className="ecofin-hero-title">
                        <h1>H-NATO</h1>
                    </div>

                </div>


                {/* DESCRIPTION */}
                <div className="ecofin-description">

                    <div className="ecofin-description-title">
                        <span>COMMITTEE</span>
                        <h2>H-NATO</h2>
                    </div>

                    <div className="ecofin-description-content">

                        <p>
                            Our fifth committee, Historical NATO (H-NATO), will examine the historical case of Operation Deliberate Force-NATO’s Intervention in Bosnia and Herzegovina.

                            When international intervention meets the complexities of war, difficult questions of strategy, authority, and responsibility emerge.
                            Taking place during the final stages of the Bosnian War, Operation Deliberate Force began on 30 August 1995, as NATO conducted an air campaign against Bosnian Serb military positions within the framework of decisions involving the United Nations. The operation aimed to address threats to UN-designated safe areas and support broader international efforts to end the conflict.

                            We invite our esteemed delegates to examine the circumstances surrounding the intervention, analyse its strategic and diplomatic dimensions, and engage in thoughtful historical debate.

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

export default Hnato;