import Footer from '../../footer/footer';
import Navbar from '../../navbar/navbar';
import './fcc.css';
import { useNavigate } from 'react-router-dom';

function Fcc() {

    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <section className="ecofin">

                {/* HERO */}
                <div className="ecofin-hero">

                    <img
                        src="/FCC.png"
                        alt="FCC"
                    />

                    <div className="ecofin-hero-overlay"></div>

                    <div className="ecofin-hero-title">
                        <h1>FCC</h1>
                    </div>

                </div>


                {/* DESCRIPTION */}
                <div className="ecofin-description">

                    <div className="ecofin-description-title">
                        <span>COMMITTEE</span>
                        <h2>FCC</h2>
                    </div>

                    <div className="ecofin-description-content">

                        <p>
                            Our ninth committee, Futuristic Crisis Committee (FCC: The Odyssey), will examine the legendary journey and political power struggles following the Fall of Troy in 1184 BCE.

                            When victory at sea collides with internal political turmoil, complex strategic and crisis management challenges emerge. Taking place in the immediate aftermath of the Trojan War, the committee follows King Odysseus and the High Council of Ithaca as they set sail with a fleet of 12 ships. Delegates will navigate dual-focus mechanics, balancing survival at sea—such as fleet discipline and navigation—with the preservation of state legitimacy in Ithaca, including treasury management, civil order, and political alliances amidst rising factionalism.

                            We call upon our esteemed delegates to engage in rigorous strategic crisis management, balance public and covert directives, and shape the destiny of Ithaca through decisive action.
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

export default Fcc;