import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const ProjectTemplate: React.FC = () => {
    const { id } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const title = `PROJECT ${id?.toUpperCase() || "UNTITLED"}`;

    const softwareSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": id,
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, iOS, Android",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        }
    };

    return (
        <motion.div
            className="container section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <SEO title={title} jsonLd={softwareSchema} />

            {/* Header */}
            <div className="mb-16 pb-8 border-b border-border">
                <Link to="/#work" className="inline-block mb-8 text-primary font-mono text-sm hover:underline">
                    &larr; BACK TO WORK
                </Link>

                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-none break-words">
                    {title}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <span className="block text-text-muted text-sm mb-2">CLIENT</span>
                        <span className="font-semibold">Stark Industries</span>
                    </div>
                    <div>
                        <span className="block text-text-muted text-sm mb-2">YEAR</span>
                        <span className="font-semibold">2025</span>
                    </div>
                    <div>
                        <span className="block text-text-muted text-sm mb-2">SERVICE</span>
                        <span className="font-semibold">Full Stack Dev</span>
                    </div>
                    <div>
                        <span className="block text-text-muted text-sm mb-2">STACK</span>
                        <span className="font-semibold">React, Rust, AWS</span>
                    </div>
                </div>
            </div>

            {/* Hero Image */}
            <div className="w-full h-[60vh] bg-[#1a1a1a] border border-border mb-24 flex items-center justify-center text-text-muted font-mono">
                [HERO IMAGE PLACEHOLDER 16:9]
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 mb-32">
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-primary">The Challenge</h2>
                </div>
                <div>
                    <p className="text-xl leading-relaxed text-text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 mb-32">
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-primary">The Solution</h2>
                </div>
                <div>
                    <p className="text-xl leading-relaxed text-text-muted mb-8">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <ul className="list-none p-0">
                        {['Microservices Architecture', 'Real-time WebSocket Updates', '99.99% Uptime SLA'].map(item => (
                            <li key={item} className="py-4 border-t border-border flex items-center gap-4">
                                <span className="text-primary">+</span> {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Gallery */}
            <div className="mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="h-[400px] bg-[#1a1a1a] border border-border flex items-center justify-center">[IMG 01]</div>
                    <div className="h-[400px] bg-[#1a1a1a] border border-border flex items-center justify-center">[IMG 02]</div>
                </div>
            </div>

            {/* Navigation */}
            <div className="border-t border-border pt-16 flex justify-end">
                <Link to="/" className="text-4xl md:text-5xl font-bold text-right leading-none group">
                    <span className="block text-base text-text-muted font-normal mb-2">NEXT PROJECT</span>
                    <span className="group-hover:text-primary transition-colors">NEBULA STREAM &rarr;</span>
                </Link>
            </div>
        </motion.div>
    );
};

export default ProjectTemplate;
