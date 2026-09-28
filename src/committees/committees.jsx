import './committeees.css'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import { useNavigate } from 'react-router-dom'

function Committees() {

    const navigate = useNavigate()

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
            name: 'LEGAL',
            image: 'LEGAL.png',
            path: '/legal',
            active: true
        },
        {
            name: 'UNITED STATES SUPREME COURT',
            image: 'USSC.png',
            path: '/ussc',
            active: true
        },
        {
            name: 'H-NATO',
            image: 'NATO.png',
            path: '/historicalnato',
            active: true
        },
        {
            name: 'HUNSC',
            image: 'HUNSC.png',
            path: '/hunsc',
            active: true
        },
        {
            name: 'JCC',
            image: 'JCC.png',
            path: '/jcc',
            active: true
        },
        {
            name: 'CABINET OF US',
            image: 'CABINET.png',
            path: '/cabinetofus',
            active: true
        },
        {
            name: 'FCC',
            image: 'FCC.png',
            path: '/fcc',
            active: true
        }
    ]

    return (
        <>
            <Navbar />

            <section className="committees">

                <div className="committees-text">
                    <h1>Committees</h1>
                </div>

                <div className="committees-infos">

                    {committees.map((committee, index) => (

                        <div
                            className={`committees-info ${
                                committee.active ? 'active' : 'inactive'
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