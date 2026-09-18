import './hero.css'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

function Hero() {

    const calculateTimeLeft = () => {
        const targetDate = new Date('2026-12-11T00:00:00')
        const now = new Date()
        const difference = targetDate - now

        if (difference <= 0) {
            return {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0
            }
        }

        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60)
        }
    }

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    return (
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

            <div className='Hero-content'>

                <div className='Hero-part-1'>

                    <div className="hero-main">

                        <h2>
                            SEHREMINI <br />
                            MUN'26
                        </h2>

                        <h3>
                            #findthewordtochangetheworld
                        </h3>

                        <button>
                            <Link to="/committees">
                                <b>Explore</b>
                            </Link>
                        </button>

                    </div>

                    <div className='countdown'>

                        <div className='countdown-item'>
                            <strong>
                                {String(timeLeft.days).padStart(2, '0')}
                            </strong>
                            <span>DAYS</span>
                        </div>

                        <div className='countdown-item'>
                            <strong>
                                {String(timeLeft.hours).padStart(2, '0')}
                            </strong>
                            <span>HOURS</span>
                        </div>

                        <div className='countdown-item'>
                            <strong>
                                {String(timeLeft.minutes).padStart(2, '0')}
                            </strong>
                            <span>MINUTES</span>
                        </div>

                        <div className='countdown-item'>
                            <strong>
                                {String(timeLeft.seconds).padStart(2, '0')}
                            </strong>
                            <span>SECONDS</span>
                        </div>

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Hero