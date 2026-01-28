import React from 'react';

const Services: React.FC = () => {
    return (
        <section id="services" className="section container">
            <div style={{
                borderTop: '1px solid var(--color-border)',
                paddingTop: '2rem'
            }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '2rem' }}>
                    <div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '1rem' }}>Capabilities</h2>
                        <p style={{ color: 'var(--color-text-muted)', maxWidth: '250px' }}>
                            Full-cycle development from architectural design to production deployment.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gap: '0' }}>
                        {[
                            "System Architecture",
                            "React / Next.js Development",
                            "Mobile (React Native / iOS)",
                            "UI Engineering",
                            "Backend Integration"
                        ].map((item, idx) => (
                            <div key={idx} style={{
                                padding: '1.5rem 0',
                                borderBottom: '1px solid var(--color-border)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                fontSize: '1.25rem'
                            }}>
                                <span style={{ color: 'var(--color-primary)', fontSize: '0.75rem' }}>0{idx + 1}</span>
                                {item}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
