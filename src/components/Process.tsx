import React from 'react';

const steps = [
    {
        number: "01",
        title: "Discovery",
        desc: "We dive deep into your requirements and technical constraints to map out a solid architectural foundation."
    },
    {
        number: "02",
        title: "Development",
        desc: "Iterative, component-driven implementation using modern standards and rigorous type safety."
    },
    {
        number: "03",
        title: "Deployment",
        desc: "Automated CI/CD pipelines ensuring seamless delivery, performance monitoring, and scalability."
    }
];

const Process: React.FC = () => {
    return (
        <section className="section container">
            <div style={{
                borderTop: '1px solid var(--color-border)',
                paddingTop: '2rem',
                marginBottom: '2rem'
            }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: 600, marginBottom: '3rem' }}>Workflow</h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '2rem'
                }}>
                    {steps.map((step, idx) => (
                        <div
                            key={idx}
                            style={{
                                position: 'relative',
                                paddingLeft: '1.5rem',
                                borderLeft: '1px solid var(--color-border)',
                                animation: `slide-up-fade 0.6s ease-out ${idx * 0.15}s both`
                            }}
                        >
                            <span style={{
                                position: 'absolute',
                                top: 0,
                                left: '-1px',
                                height: '40px',
                                width: '1px',
                                background: 'var(--color-primary)'
                            }}></span>

                            <span style={{
                                display: 'block',
                                fontFamily: 'var(--font-mono)',
                                color: 'var(--color-primary)',
                                marginBottom: '1rem',
                                fontSize: '0.875rem'
                            }}>
                                {step.number}
                            </span>

                            <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>{step.title}</h3>
                            <p style={{ color: 'var(--color-text-muted)', fontSize: '1rem', lineHeight: 1.6 }}>{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
