import React from 'react';
import '../shared/PracticeAreaPage.css';
import PageHero from '../shared/PageHero/PageHero';
import CtaBox from '../shared/CtaBox/CtaBox';

const BusinessLaw = () => {
    const businessMatters = [
        'Business Formation',
        'Contract Drafting & Review',
        'PLCB Licensing',
        'Business Transactions',
        'Buying & Selling Businesses',
        'Partnership Agreements',
        'Operating Agreements',
        'Commercial Disputes'
    ];

    const services = [
        'Entity selection consultation',
        'Articles of incorporation',
        'LLC formation documents',
        'Partnership agreements',
        'Shareholder agreements',
        'Contract negotiation',
        'Business sale agreements',
        'Due diligence review',
        'Lease negotiations',
        'Licensing applications',
        'Regulatory compliance',
        'Business dispute resolution'
    ];

    return (
        <div className="practice-area-page">
            <PageHero
                title="Business Law"
                subtitle="Legal Counsel for Your Business Success"
                backgroundImage="/courthouse_img.jpg"
            />

            <div className="container practice-area-content">
                <section className="intro-section">
                    <h2>Comprehensive Business Legal Services</h2>
                    <p>
                        Running a business involves numerous legal considerations, from formation and contracts to
                        transactions and disputes. Shane Hobbs provides practical business law counsel to entrepreneurs,
                        small businesses, and established companies throughout Pennsylvania, helping you navigate legal
                        challenges and protect your business interests.
                    </p>
                </section>

                <section className="expertise-section">
                    <h2>Business Law Experience</h2>
                    <p>
                        Whether you're starting a new venture, expanding your operations, or resolving a business dispute,
                        having experienced legal counsel is essential. With a focus on practical solutions and business-minded
                        advice, Shane Hobbs helps clients make informed decisions that support their business goals while
                        ensuring legal compliance and protection.
                    </p>
                </section>

                <section className="types-section">
                    <h2>Business Law Matters</h2>
                    <div className="items-grid">
                        {businessMatters.map((matter, index) => (
                            <div key={index} className="grid-item">
                                {matter}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="services-section">
                    <h2>Business Legal Services</h2>
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
                        I understand that business owners need legal counsel that is both thorough and efficient. My approach
                        focuses on understanding your business objectives and providing clear, actionable legal advice that
                        helps you achieve them. From drafting contracts to handling complex transactions, I work to protect
                        your interests while keeping your business moving forward.
                    </p>
                </section>

                <div className="cta-container">
                    <CtaBox
                        title="Protect Your Business with Sound Legal Counsel"
                        description="Contact Shane Hobbs Law Office to discuss your business legal needs."
                        buttonText="Request Consultation"
                        buttonLink="/#contact"
                    />
                </div>
            </div>
        </div>
    );
};

export default BusinessLaw;