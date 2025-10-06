import React from 'react';
import '../shared/PracticeAreaPage.css';
import PageHero from '../shared/PageHero/PageHero';
import CtaBox from '../shared/CtaBox/CtaBox';

const RealEstate = () => {
    const transactionTypes = [
        'Residential Closings',
        'Commercial Transactions',
        'Title Examination',
        'Deed Preparation',
        'Lease Agreements',
        'Zoning Issues',
        'Property Disputes',
        'Easement Matters'
    ];

    const services = [
        'Purchase agreement review',
        'Title search and insurance',
        'Deed preparation and recording',
        'Closing representation',
        'Contract negotiation',
        'Lease drafting and review',
        'Zoning compliance',
        'Boundary disputes',
        'Mortgage documentation',
        'Title defect resolution',
        'Property transfer assistance',
        'Real estate litigation'
    ];

    return (
        <div className="practice-area-page">
            <PageHero
                title="Real Estate"
                subtitle="Guiding You Through Property Transactions"
                backgroundImage="/courthouse_img.jpg"
            />

            <div className="container practice-area-content">
                <section className="intro-section">
                    <h2>Comprehensive Real Estate Legal Services</h2>
                    <p>
                        Real estate transactions represent significant financial commitments that require careful legal attention.
                        Whether you're buying your first home, selling commercial property, or resolving a property dispute,
                        Shane Hobbs provides experienced legal guidance to protect your interests and ensure smooth real estate
                        transactions.
                    </p>
                </section>

                <section className="expertise-section">
                    <h2>Real Estate Law Experience</h2>
                    <p>
                        Real estate matters involve complex legal documents, title issues, zoning regulations, and financial
                        considerations. With experience handling residential and commercial real estate transactions throughout
                        Pennsylvania, Shane Hobbs helps clients navigate the legal aspects of property ownership and transfer
                        while identifying and resolving potential issues before they become problems.
                    </p>
                </section>

                <section className="types-section">
                    <h2>Real Estate Matters</h2>
                    <div className="items-grid">
                        {transactionTypes.map((type, index) => (
                            <div key={index} className="grid-item">
                                {type}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="services-section">
                    <h2>Real Estate Legal Services</h2>
                    <div className="items-grid">
                        {services.map((service, index) => (
                            <div key={index} className="grid-item">
                                {service}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="approach-section">
                    <h2>My Approach</h2>
                    <p>
                        Real estate transactions require attention to detail and proactive problem-solving. I thoroughly review
                        all documents, conduct comprehensive title examinations, and address potential issues before closing.
                        Whether you're involved in a routine residential closing or a complex commercial transaction, I provide
                        the legal expertise and personal attention necessary to protect your investment and ensure a successful
                        outcome.
                    </p>
                </section>

                <div className="cta-container">
                    <CtaBox
                        title="Secure Your Real Estate Transaction"
                        description="Contact Shane Hobbs Law Office for experienced representation in your real estate matter."
                        buttonText="Request Consultation"
                        buttonLink="/#contact"
                    />
                </div>
            </div>
        </div>
    );
};

export default RealEstate;