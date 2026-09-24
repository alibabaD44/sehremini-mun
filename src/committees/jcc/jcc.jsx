import Footer from '../../footer/footer';
import Navbar from '../../navbar/navbar';
import './jcc.css';
import { useNavigate } from 'react-router-dom';

function Jcc() {

    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <section className="ecofin">

                {/* HERO */}
                <div className="ecofin-hero">

                    <img
                        src="/JCC.png"
                        alt="JCC"
                    />

                    <div className="ecofin-hero-overlay"></div>

                    <div className="ecofin-hero-title">
                        <h1>JCC</h1>
                    </div>

                </div>


                {/* DESCRIPTION */}
                <div className="ecofin-description">

                    <div className="ecofin-description-title">
                        <span>COMMITTEE</span>
                        <h2>JCC</h2>
                    </div>

                    <div className="ecofin-description-content">

                        <p>
                            Our seventh committee, the Joint Crisis Committee (JCC: The Celestial War / Taiping Rebellion, 1850–1864), will examine one of the most destructive conflicts in human history, set against the backdrop of mid-19th century China.

                            When ideological and religious fervor collides with imperial authority, profound geopolitical and strategic dilemmas emerge. Taking place during a period of intense civil turmoil, European intervention, and internal fragmentation, the committee pits the revolutionary Taiping Heavenly Kingdom against the Qing Imperial Court. Starting from the Fall of Nanjing on 10 March 1853, delegates in two separate cabinets will engage in real-time, simultaneous crisis mechanics. Through public decrees, covert espionage, military deployments, and foreign diplomacy, both cabinets must navigate the complexities of civil war, economic devastation, and imperial collapse.

                            We call upon our esteemed delegates to engage in rigorous strategic reasoning, execute high-stakes diplomacy, and reshape the course of Chinese history.
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

export default Jcc;