import React from 'react';
import '../shared/PracticeAreaPage.css';
import PageHero from '../shared/PageHero/PageHero';
import CtaBox from '../shared/CtaBox/CtaBox';

const InsuranceLitigation = () => {
    const caseTypes = [
        'Bad Faith Insurance Claims',
        'Coverage Disputes',
        'Claim Denials',
        'Underinsured Motorist Claims',
        'Property Damage Claims',
        'Subrogation Matters',
        'Policy Interpretation',
        'Uninsured Motorist Claims'
    ];

    const services = [
        'Insurance policy review',
        'Coverage analysis',
        'Claim investigation',
        'Demand letter preparation',
        'Bad faith litigation',
        'Coverage opinion letters',
        'Arbitration representation',
        'Trial advocacy',
        'Settlement negotiations',
        'Appeals process',
        'Declaratory judgment actions',
        'Insurance contract disputes'
    ];

    return (
        <div className="practice-area-page">
            <PageHero
                title="Insurance Litigation"
                subtitle="Holding Insurance Companies Accountable"
                backgroundImage="/courthouse_img.jpg"
            />

            <div className="container practice-area-content">
                <section className="intro-section">
                    <h2>Expert Insurance Litigation Counsel</h2>
                    <p>
                        Insurance disputes can be frustrating and complex. Whether you're dealing with a denied claim,
                        coverage dispute, or bad faith insurance practices, Shane Hobbs provides skilled legal
                        representation to policyholders and claimants navigating insurance-related legal matters.
                    </p>
                </section>

                <section className="expertise-section">
                    <h2>Understanding Insurance Law</h2>
                    <p>
                        Insurance companies have legal teams working to protect their interests. You need an experienced
                        attorney who understands insurance law and can level the playing field. With extensive experience
                        in insurance litigation, Shane Hobbs knows the tactics insurers use and how to effectively counter
                        them to secure the coverage and compensation you're entitled to receive.
                    </p>
                </section>

                <section className="types-section">
                    <h2>Insurance Litigation Cases</h2>
                    <div className="items-grid">
                        {caseTypes.map((type, index) => (
                            <div key={index} className="grid-item">
                                {type}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="services-section">
                    <h2>Insurance Litigation Services</h2>
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
                        Insurance litigation requires thorough preparation, attention to detail, and a deep understanding
                        of policy language and insurance regulations. I carefully review your policy, investigate your
                        claim, and develop a strategic approach to pursue the coverage you deserve. Whether through
                        negotiation, arbitration, or litigation, I'm committed to holding insurance companies accountable
                        and protecting your rights.
                    </p>
                </section>

                <div className="cta-container">
                    <CtaBox
                        title="Don't Let Insurance Companies Take Advantage"
                        description="Contact Shane Hobbs Law Office for experienced representation in your insurance dispute."
                        buttonText="Request Consultation"
                        buttonLink="/#contact"
                    />
                </div>
            </div>
        </div>
    );
};

export default InsuranceLitigation;