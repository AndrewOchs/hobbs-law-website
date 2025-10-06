import React from 'react';
import '../shared/PracticeAreaPage.css';
import PageHero from '../shared/PageHero/PageHero';
import CtaBox from '../shared/CtaBox/CtaBox';

const CriminalDefense = () => {
    const caseTypes = [
        'Misdemeanor Charges',
        'Felony Charges',
        'DUI/DWI Defense',
        'Traffic Violations',
        'Drug Offenses',
        'Assault Charges',
        'Theft Crimes',
        'Appeals'
    ];

    const services = [
        'Arrest representation',
        'Bail hearings',
        'Preliminary hearings',
        'Motion practice',
        'Plea negotiations',
        'Trial representation',
        'Sentencing advocacy',
        'Appeal preparation',
        'Expungement petitions',
        'Record sealing',
        'Probation violations',
        'Post-conviction relief'
    ];

    return (
        <div className="practice-area-page">
            <PageHero
                title="Criminal Defense"
                subtitle="Protecting Your Rights and Freedom"
                backgroundImage="/courthouse_img.jpg"
            />

            <div className="container practice-area-content">
                <section className="intro-section">
                    <h2>Aggressive Criminal Defense Representation</h2>
                    <p>
                        Facing criminal charges can be one of the most stressful experiences of your life. Your freedom,
                        reputation, and future are at stake. Shane Hobbs provides vigorous criminal defense representation,
                        protecting your constitutional rights and fighting for the best possible outcome in your case.
                    </p>
                </section>

                <section className="expertise-section">
                    <h2>Experienced Criminal Defense</h2>
                    <p>
                        The criminal justice system is complex and unforgiving. From the moment of arrest through trial or
                        appeal, you need an attorney who understands criminal procedure, knows how to challenge the prosecution's
                        case, and will fight tirelessly on your behalf. With experience handling a wide range of criminal matters,
                        Shane Hobbs provides the strong defense you need during this difficult time.
                    </p>
                </section>

                <section className="types-section">
                    <h2>Criminal Defense Cases</h2>
                    <div className="items-grid">
                        {caseTypes.map((type, index) => (
                            <div key={index} className="grid-item">
                                {type}
                            </div>
                        ))}
                    </div>
                </section>

                <section className="services-section">
                    <h2>Criminal Defense Services</h2>
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
                        Every criminal case requires a thorough investigation, careful analysis of the evidence, and strategic
                        advocacy. I examine every aspect of your case, challenge improper procedures, and work to suppress
                        illegally obtained evidence. Whether negotiating a favorable plea agreement or taking your case to trial,
                        I'm committed to protecting your rights and achieving the best possible result.
                    </p>
                </section>

                <div className="cta-container">
                    <CtaBox
                        title="Protect Your Rights with Experienced Defense"
                        description="If you're facing criminal charges, contact Shane Hobbs Law Office immediately for a confidential consultation."
                        buttonText="Request Consultation"
                        buttonLink="/#contact"
                    />
                </div>
            </div>
        </div>
    );
};

export default CriminalDefense;