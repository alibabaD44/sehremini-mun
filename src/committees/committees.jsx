import './committeees.css'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function Committees() {

    const navigate = useNavigate()
    const sliderRef = useRef(null)

    const isDown = useRef(false)
    const startX = useRef(0)
    const scrollLeft = useRef(0)

    const handleMouseDown = (e) => {
        isDown.current = true
        sliderRef.current.classList.add('dragging')

        startX.current = e.pageX - sliderRef.current.offsetLeft
        scrollLeft.current = sliderRef.current.scrollLeft
    }

    const handleMouseLeave = () => {
        isDown.current = false
        sliderRef.current.classList.remove('dragging')
    }

    const handleMouseUp = () => {
        isDown.current = false
        sliderRef.current.classList.remove('dragging')
    }

    const handleMouseMove = (e) => {

        if (!isDown.current) return

        e.preventDefault()

        const x = e.pageX - sliderRef.current.offsetLeft
        const walk = (x - startX.current) * 1.5

        sliderRef.current.scrollLeft =
            scrollLeft.current - walk
    }


    const committees = [
        {
            name: 'ECOFIN',
            image: 'ECOFIN.png',
            path: '/ecofin',
            active: true
        },
        {
            name: 'UNWOMEN',
            image: 'UNWOMEN.png',
            path: '/unwomen',
            active: true
        },
        {
            name: '*************',
            image: 'soruisareti.png',
            path: '/committees/ecosoc',
            active: false
        },
        {
            name: '*************',
            image: 'soruisareti.png',
            path: '/committees/human-rights',
            active: false
        },
        {
            name: '*************',
            image: 'soruisareti.png',
            path: '/committees/icj',
            active: false
        },
        {
            name: '*************',
            image: 'soruisareti.png',
            path: '/committees/crisis',
            active: false
        }
    ]


    return (
        <>
            <Navbar />

            <section className="committees">

                <div className="committees-text">
                    <h1>Committees</h1>
                </div>


                <div
                    className="committees-infos"
                    ref={sliderRef}

                    onMouseDown={handleMouseDown}
                    onMouseLeave={handleMouseLeave}
                    onMouseUp={handleMouseUp}
                    onMouseMove={handleMouseMove}
                >

                    {committees.map((committee, index) => (

                        <div
                            className={`committees-info ${
                                committee.active
                                    ? 'active'
                                    : 'inactive'
                            }`}

                            key={index}

                            onClick={() => {
                                if (committee.active) {
                                    navigate(committee.path)
                                }
                            }}
                        >

                            <div className="committees-info-png">

                                {committee.image && (
                                    <img
                                        src={committee.image}
                                        alt={committee.name}
                                    />
                                )}

                            </div>


                            <div className="committees-info-title">

                                <h2>
                                    {committee.name}
                                </h2>

                                <span>
                                    {committee.active
                                        ? 'Explore Committee →'
                                        : 'Coming Soon'}
                                </span>

                            </div>

                        </div>

                    ))}

                </div>

            </section>

            <Footer />
        </>
    )
}

export default Committees