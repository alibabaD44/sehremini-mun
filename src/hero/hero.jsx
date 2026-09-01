import './hero.css'
import { Link } from 'react-router-dom'

function Hero() {
    return (
        <>
            <section className='Hero'>
                <div className='background'>
                    <video
                        src="pr.mp4"
                        autoPlay
                        muted
                        loop
                        playsInline
                    ></video>
                </div>
                <div className='Hero-part-1'>
                    <h2>SEHREMINI<br />MUN'26</h2>
                    <h3>#findtheworldtochangetoworld</h3>
                    <button>
                        <Link to="/committees"><b>Explore</b></Link>
                    </button>
                </div>
                <div className='Hero-part-2'>
                </div>
            </section>
        </>
    )
}

export default Hero