import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';

const Showcase: React.FC = () => {
    return (
        <section id="work" className="section container">
            <div className="flex justify-between items-baseline mb-16 pb-4 border-b border-border">
                <h2 className="text-2xl font-semibold">Selected Work</h2>
                <span className="font-mono text-text-muted text-sm">
                    01 — {projects.length.toString().padStart(2, '0')}
                </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project) => (
                    <Link
                        key={project.id}
                        to={`/project/${project.id}`}
                        className="tech-card h-[320px] p-8 flex flex-col justify-between relative"
                    >
                        <div className="flex justify-between mb-auto">
                            <span className="font-mono text-primary text-xs border border-border px-2 py-1 rounded">
                                {project.category}
                            </span>
                            <span className="text-text-muted text-sm">{project.year}</span>
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                            <p className="text-text-muted text-base leading-relaxed">{project.description}</p>
                        </div>

                        {/* Corner Accent */}
                        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-text-muted/50 rounded-br-sm"></div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default Showcase;
