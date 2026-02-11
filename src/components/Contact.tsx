import React, { useState, useId } from 'react';

const Contact: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        website: '' // honeypot field
    });

    const nameId = useId();
    const emailId = useId();
    const messageId = useId();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const payload = {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                ...(formData.website && { website: formData.website })
            };

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '', website: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <section id="contact" className="section container pb-32 cv-auto">
                <div className="tech-card p-16 text-center border-primary">
                    <h3 className="text-3xl mb-4">Message Received</h3>
                    <p className="text-text-muted">We'll be in touch shortly to discuss your project.</p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="btn-outline mt-8"
                    >
                        Send Another
                    </button>
                </div>
            </section>
        );
    }

    if (status === 'error') {
        return (
            <section id="contact" className="section container pb-32 cv-auto">
                <div className="tech-card p-16 text-center border-red-500">
                    <h3 className="text-3xl mb-4">Something Went Wrong</h3>
                    <p className="text-text-muted">Please try again or email us directly at hello@lintu.dev</p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="btn-outline mt-8"
                    >
                        Try Again
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="section container pb-32 cv-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-3xl font-semibold mb-4">Start a Project</h2>
                    <p className="text-text-muted mb-8 text-lg">
                        Available for contract work and technical partnerships. Let's build something scalable.
                    </p>
                    <div className="mb-8">
                        <span className="block text-text-muted text-sm mb-2">EMAIL</span>
                        <a href="mailto:hello@lintu.dev" className="text-xl hover:text-primary transition-colors">hello@lintu.dev</a>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="grid gap-6">
                    {/* Honeypot field - invisible spam trap */}
                    <input
                        type="text"
                        name="website"
                        style={{ display: 'none' }}
                        tabIndex={-1}
                        aria-hidden="true"
                        autoComplete="off"
                        value={formData.website || ''}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    />
                    <div>
                        <label htmlFor={nameId} className="block text-sm text-text-muted mb-2">NAME</label>
                        <input
                            id={nameId}
                            required
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-surface border border-border p-4 text-text-main font-inherit focus:outline-none focus:border-primary transition-colors"
                            placeholder="Jane Doe"
                        />
                    </div>
                    <div>
                        <label htmlFor={emailId} className="block text-sm text-text-muted mb-2">EMAIL</label>
                        <input
                            id={emailId}
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-surface border border-border p-4 text-text-main font-inherit focus:outline-none focus:border-primary transition-colors"
                            placeholder="jane@company.com"
                        />
                    </div>
                    <div>
                        <label htmlFor={messageId} className="block text-sm text-text-muted mb-2">PROJECT DETAILS</label>
                        <textarea
                            id={messageId}
                            required
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full bg-surface border border-border p-4 text-text-main font-inherit focus:outline-none focus:border-primary transition-colors resize-none"
                            placeholder="Tell us about the scope and timeline..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn-primary justify-self-start disabled:opacity-70 flex items-center gap-2"
                        disabled={status === 'submitting'}
                        aria-busy={status === 'submitting'}
                    >
                        {status === 'submitting' && (
                            <svg className="animate-spin h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        )}
                        {status === 'submitting' ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
