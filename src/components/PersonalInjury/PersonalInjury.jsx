import React from 'react';
import '../PracticeAreaPage.css';
import PageHero from '../shared/PageHero/PageHero';
import CtaBox from '../shared/CtaBox/CtaBox';

const PersonalInjury = () => {
    const injuryTypes = [
        'Motor Vehicle Accidents',
        'Slip and Fall Cases',
        'Workplace Injuries',
        'Product Liability',
        'Medical Malpractice',
        'Wrongful Death',
        'Dog Bites',
        'Premises Liability'
    ];

    const services = [
        'Case evaluation and investigation',
        'Evidence collection and preservation',
        'Medical records review',
        'Insurance claim negotiation',
        'Settlement negotiations',
        'Trial representation',
        'Damages assessment',
        'Expert witness coordination',
        'Medical treatment liens',
        'Loss of income claims',
        'Pain and suffering compensation',
        'Future care planning'
    ];

    return (
        <div className="practice-area-page">
            <PageHero
                title="Personal Injury"
                subtitle="Fighting for the Compensation You Deserve"
                backgroundImage="/courthouse_img.jpg"
            />

            <div className="container practice-area-content">
                <section className="intro-section">
                    <h2>Dedicated Personal Injury Representation</h2>
                    <p>
                        When you've been injured due to someone else's negligence, you deserve an attorney who
                        will fight for your rights. Shane Hobbs provides comprehensive legal representation to
                        individuals who have suffered injuries, ensuring you receive the compensation needed for
                        medical expenses, lost wages, and pain and suffering.
                    </p>
                </section>

                <section className="expertise-section">
                    <h2>Understanding Personal Injury Law</h2>
                    <p>
                        Personal injury cases can be complex, involving insurance companies, medical documentation,
                        and intricate legal procedures. With years of experience handling injury claims, Shane Hobbs
                        understands how to build strong cases and negotiate effectively with insurance adjusters while
                        keeping your best interests at the forefront.
                    </p>
                </section>

                <section className="types-section">
                    <h2>Types of Personal Injury Cases</h2>
                    <div className="items-grid">
                        {injuryTypes.map((type, index) => (
                            <div key={index} className="grid-item">
                                {type}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="services-section">
                    <h2>Personal Injury Legal Services</h2>
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
                        Every personal injury case is unique, and I take the time to understand the full impact of
                        your injuries on your life. From the initial consultation through settlement or trial, you'll
                        receive personalized attention and aggressive representation. I work on a contingency fee basis
                        for most personal injury cases, which means you don't pay attorney fees unless I recover
                        compensation for you.
                    </p>
                </section>

                <div className="cta-container">
                    <CtaBox
                        title="Get the Compensation You Deserve"
                        description="Contact Shane Hobbs Law Office today for a free consultation about your personal injury claim."
                        buttonText="Request Free Consultation"
                        buttonLink="/#contact"
                    />
                </div>
            </div>
        </div>
    );
};

export default PersonalInjury;