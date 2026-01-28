import React from 'react';
import TechScene from './TechScene';

const Hero: React.FC = () => {
    return (
        <section className="min-h-[90vh] flex items-center border-b border-border bg-gradient-to-b from-transparent to-bg relative overflow-hidden">
            <TechScene />
            <div className="container w-full relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-primary font-mono text-sm mb-6 tracking-widest uppercase">
                        /// LINTU DEV STUDIO
                    </p>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tighter mb-8 text-text-main drop-shadow-2xl">
                        Building digital <br />
                        <span className="text-white">infrastructure & products.</span>
                    </h1>

                    <p className="text-xl text-white/80 max-w-lg mb-12 leading-relaxed mx-auto drop-shadow-md">
                        A specialized development studio shipping high-performance web applications and mobile solutions.
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center">
                        <a href="#work" className="btn-primary">
                            Selected Work
                        </a>
                        <a href="#contact" className="btn-outline">
                            Contact Studio
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
