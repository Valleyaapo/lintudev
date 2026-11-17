import React, { useState } from 'react';

const Contact: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        website: '' // honeypot field
    });

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
            <section id="contact" className="section container pt-20 md:pt-28 pb-24 scroll-mt-20">
                <div className="tech-card rounded-xl p-8 md:p-16 text-center border-primary">
                    <h3 className="text-3xl mb-4">Message received</h3>
                    <p className="text-text-muted">Thanks. We'll reply by email.</p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="btn-outline mt-8"
                    >
                        Send another
                    </button>
                </div>
            </section>
        );
    }

    if (status === 'error') {
        return (
            <section id="contact" className="section container pt-20 md:pt-28 pb-24 scroll-mt-20">
                <div className="tech-card rounded-xl p-8 md:p-16 text-center border-red-500">
                    <h3 className="text-3xl mb-4">Something went wrong</h3>
                    <p className="text-text-muted">Please try again or email us directly at hello@lintu.dev.</p>
                    <button
                        onClick={() => setStatus('idle')}
                        className="btn-outline mt-8"
                    >
                        Try again
                    </button>
                </div>
            </section>
        );
    }

    return (
        <section id="contact" className="section container pt-20 md:pt-28 pb-24 scroll-mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 border border-border rounded-xl p-6 md:p-12 bg-surface/40">
                <div className="flex flex-col">
                    <p className="eyebrow mb-4">/// Contact</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">Start a project</h2>
                    <p className="text-text-muted mb-10 text-lg leading-relaxed">
                        Available for contract work and technical partnerships: native iOS, web apps and real-time products.
                    </p>
                    <div className="grid gap-6 mb-10">
                        <div>
                            <span className="block font-mono text-xs tracking-[0.2em] text-text-muted mb-2">EMAIL</span>
                            <a href="mailto:hello@lintu.dev" className="font-display text-2xl md:text-3xl font-semibold hover:text-primary transition-colors">hello@lintu.dev</a>
                        </div>
                        <div>
                            <span className="block font-mono text-xs tracking-[0.2em] text-text-muted mb-2">ELSEWHERE</span>
                            <a href="https://x.com/lintudev" target="_blank" rel="noopener noreferrer" className="text-lg hover:text-primary transition-colors">X / @lintudev &rarr;</a>
                        </div>
                    </div>
                    <div className="mt-auto border-l-2 border-primary pl-4 text-sm text-text-muted leading-relaxed">
                        Helpful to include: what you want to build, the platform (iOS, web or both), and a rough timeline.
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="grid gap-6">
                    {/* Honeypot field - invisible spam trap */}
                    <input
                        type="text"
                        name="website"
                        style={{ display: 'none' }}
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.website || ''}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    />
                    <div>
                        <label className="block font-mono text-xs tracking-[0.2em] text-text-muted mb-2">NAME</label>
                        <input
                            required
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-bg border border-border rounded-lg p-4 text-text-main font-inherit focus:outline-none focus:border-primary transition-colors"
                            placeholder="Jane Doe"
                        />
                    </div>
                    <div>
                        <label className="block font-mono text-xs tracking-[0.2em] text-text-muted mb-2">EMAIL</label>
                        <input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-bg border border-border rounded-lg p-4 text-text-main font-inherit focus:outline-none focus:border-primary transition-colors"
                            placeholder="jane@company.com"
                        />
                    </div>
                    <div>
                        <label className="block font-mono text-xs tracking-[0.2em] text-text-muted mb-2">PROJECT DETAILS</label>
                        <textarea
                            required
                            rows={4}
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            className="w-full bg-bg border border-border rounded-lg p-4 text-text-main font-inherit focus:outline-none focus:border-primary transition-colors resize-none"
                            placeholder="What are you building, and by when?"
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn-primary justify-self-start disabled:opacity-70"
                        disabled={status === 'submitting'}
                    >
                        {status === 'submitting' ? 'Sending...' : 'Send message'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
