import Footer from '../../footer/footer';
import Navbar from '../../navbar/navbar';
import './unwomen.css';
import { useNavigate } from 'react-router-dom';

function Unwomen() {

    const navigate = useNavigate();

    return (
        <>
            <Navbar />

            <section className="ecofin">

                {/* HERO */}
                <div className="ecofin-hero">

                    <img
                        src="/UNWOMEN.png"
                        alt="UNWOMEN"
                    />

                    <div className="ecofin-hero-overlay"></div>

                    <div className="ecofin-hero-title">
                        <h1>UNWOMEN</h1>
                    </div>

                </div>


                {/* DESCRIPTION */}
                <div className="ecofin-description">

                    <div className="ecofin-description-title">
                        <span>COMMITTEE</span>
                        <h2>UNWOMEN</h2>
                    </div>

                    <div className="ecofin-description-content">

                        <p>
                            Our second committee, the United Nations Entity for Gender Equality and the Empowerment of Women (UNWOMEN), turns its attention to the pressing issue of “AI-Facilitated Abuse Against Women.” As artificial intelligence continues to reshape our digital lives, its misuse has created new forms of abuse while amplifying existing violence against women. From AI-generated deepfakes and image-based abuse to online harassment and gendered disinformation, these emerging threats have made digital safety an increasingly urgent global issue.

                            The rapid development of AI also presents challenges for existing legal and regulatory frameworks, creating gaps in protection and accountability. Addressing these challenges requires international cooperation, effective legislation, and greater responsibility within the digital sphere.

                            We call upon our esteemed delegates to engage in rigorous, evidence-based diplomacy and formulate meaningful solutions to prevent AI-facilitated abuse, protect women and girls, and strengthen accountability.

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

export default Unwomen;