import './faq.css'
import Footer from '../footer/footer'
import Navbar from '../navbar/navbar'
import { useState } from 'react'

function Faq() {

    const [openIndex, setOpenIndex] = useState(null)

    const questions = [
        {
            question: "What is MUN?",
            answer: "Model United Nations (MUN) is an educational simulation where students can learn about diplomacy, international relations and global issues. MUN also helps students improve their problem-solving skills and socialize"
        },
        {
            question: "What Is The Procedure Of SEHREMINIMUN?",
            answer: "SEHREMINIMUN will be following the Harvard MUN procedure."
        },
        {
            question: "Is there a dress code?",
            answer: "Yes, participants are mandated to wear formal business attire."
        },
        {
            question: "How can I apply?",
            answer: "You can apply through the official application process announced by SEHREMINIMUN."
        }
    ]

    const toggleQuestion = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <>
            <Navbar />

            <section className='Faq'>

                <div className='Faq-title'>
                    <h1>FAQ</h1>
                </div>

                <div className='Faq-questions'>

                    {questions.map((item, index) => (

                        <div
                            className={`Faq-question ${
                                openIndex === index ? 'active' : ''
                            }`}
                            key={index}
                        >

                            <div
                                className='Faq-question-title'
                                onClick={() => toggleQuestion(index)}
                            >

                                <span>
                                    {item.question}
                                </span>

                                <div className='Faq-question-icon'>
                                    +
                                </div>

                            </div>

                            <div
                                className='Faq-question-dec'
                                style={{
                                    maxHeight:
                                        openIndex === index
                                            ? '300px'
                                            : '0px'
                                }}
                            >
                                <p>
                                    {item.answer}
                                </p>
                            </div>

                        </div>

                    ))}

                </div>

            </section>

            <Footer />
        </>
    )
}

export default Faq