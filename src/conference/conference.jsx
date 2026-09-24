import './conference.css';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';

function Conference() {
    return (
        <>
            <Navbar />

            <section className="conference">

                {/* HERO */}
                <div className="conference-hero">

                    <img
                        src="/CONFERENCE.png"
                        alt="Conference"
                    />

                    <div className="conference-hero-overlay"></div>

                    <div className="conference-hero-title">
                        <h1>CONFERENCE</h1>
                    </div>

                </div>


                {/* VENUE */}
                <div className="conference-venue">

                    <div className="conference-venue-title">
                        <h2>Our Venue</h2>
                    </div>

                    <div className="map-adress">
                        <h2>BIRUNI UNIVERSITY</h2>
                        <h3>
                            Merkezefendi, M. G/75 Sk No:1-13, 34015 Zeytinburnu/İstanbul
                        </h3>
                    </div>

                    <div className="google-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.344697083341!2d28.91632904047545!3d41.01771411070703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabbb1ade07b4d%3A0x41372ea4b54356d2!2sBiruni%20%C3%9Cniversitesi!5e0!3m2!1str!2str!4v1790265494386!5m2!1str!2str"
                            title="Biruni Üniversitesi Konum"
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                        ></iframe>
                    </div>

                </div>

            </section>

            <Footer />
        </>
    );
}

export default Conference;