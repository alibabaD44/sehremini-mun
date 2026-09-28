import './applications.css'
import Navbar from '../navbar/navbar'
import Footer from '../footer/footer'
import { Fragment } from 'react'

function Applications() {
    const applicationCategories = [
        {
            title: 'Individual Delegate',
            description: 'Apply individually and take your place in one of our committees.',
            fee: '₺---',
            formUrl: 'https://forms.google.com'
        },
        {
            title: 'Delegation',
            description: 'Register your school delegation and experience the conference together.',
            fee: '₺---',
            formUrl: 'https://forms.google.com'
        },
        {
            title: 'Chairboard Member',
            description: 'Lead committee debate and help delegates get the most from the conference.',
            fee: '₺---',
            formUrl: 'https://forms.google.com'
        },
        {
            title: 'Admin Member',
            description: 'Join the team that keeps every committee organized and running smoothly.',
            fee: '₺---',
            formUrl: 'https://forms.google.com'
        },
        {
            title: 'Press',
            description: 'Capture the conference through photography, video, interviews, and news.',
            fee: '₺---',
            formUrl: 'https://forms.google.com'
        }
    ]

    return (
        <>
            <Navbar />

            <main className="applications-page">
                <header className="applications-header">
                    <span className="applications-eyebrow">SEHREMINIMUN'26</span>
                    <h1>Applications</h1>
                    <p>Choose your application category and become part of the conference.</p>
                </header>

                <section className="application-list" aria-label="Application categories">
                    {applicationCategories.map((category, index) => (
                        <Fragment key={category.title}>
                            <article className="application-card">
                                <div className="application-details">
                                    <h2>{category.title}</h2>
                                    <p>{category.description}</p>
                                </div>

                                <div className="application-action">
                                    <div className="application-fee">
                                        <span>Application Fee</span>
                                        <strong>{category.fee}</strong>
                                    </div>

                                    <a
                                        href={category.formUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="apply-button"
                                        aria-label={`Apply as ${category.title} (opens Google Forms)`}
                                    >
                                        Apply
                                        <span aria-hidden="true">↗</span>
                                    </a>
                                </div>
                            </article>

                            {index === 1 && (
                                <div className="application-group-divider" aria-hidden="true" />
                            )}
                        </Fragment>
                    ))}
                </section>
            </main>

            <Footer />
        </>
    )
}

export default Applications
