import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="min-h-[90vh] flex items-center border-b border-border relative overflow-hidden">
            {/* Background Layers */}
            <div className="absolute inset-0 bg-bg z-0"></div>
            
            {/* Abstract geometric pattern - disabled on mobile */}
            <div className="absolute inset-0 z-0 hidden md:block">
                <div className="absolute top-0 right-0 w-[60vh] h-[60vh] bg-primary rounded-full blur-[150px] translate-x-1/3 -translate-y-1/4 opacity-20" style={{ animation: 'float-slow 20s ease-in-out infinite', willChange: 'transform' }}></div>
                <div className="absolute bottom-0 left-0 w-[50vh] h-[50vh] bg-accent rounded-full blur-[120px] -translate-x-1/4 translate-y-1/3 opacity-15" style={{ animation: 'float-slower 25s ease-in-out infinite, pulse-glow 6s ease-in-out infinite', willChange: 'transform' }}></div>
            </div>

            {/* Grid overlay */}
            <div 
                className="absolute inset-0 z-0 opacity-[0.03]" 
                style={{
                    backgroundImage: `linear-gradient(to right, #40D0FF 1px, transparent 1px), linear-gradient(to bottom, #40D0FF 1px, transparent 1px)`,
                    backgroundSize: '4rem 4rem',
                    maskImage: 'radial-gradient(circle at center, black 40%, transparent 100%)'
                }}
            ></div>

            <div className="container w-full relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-primary font-mono text-sm mb-6 tracking-widest uppercase">
                        /// LINTU DEV STUDIO
                    </p>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tighter mb-8 text-text-main drop-shadow-2xl">
                        Building digital <br />
                        <span className="text-white">solutions & products.</span>
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
