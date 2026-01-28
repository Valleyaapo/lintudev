import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { getProject, getNextProject } from '../data/projects';
import NotFound from './NotFound';

const ProjectTemplate: React.FC = () => {
    const { id } = useParams();
    const project = getProject(id);
    const nextProject = project ? getNextProject(id!) : null;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!project) {
        return <NotFound />;
    }

    const title = `${project.title}`;

    const softwareSchema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": project.title,
        "applicationCategory": project.category,
        "description": project.description,
        "operatingSystem": "iOS, Android, Web"
    };

    return (
        <div
            className="container section mt-24"
            style={{ animation: 'slide-up-fade 0.5s ease-out' }}
        >
            <SEO title={title} jsonLd={softwareSchema} />

            {/* Header */}
            <div className="mb-16 pb-8 border-b border-border">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-none break-words">
                    {project.title}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div>
                        <span className="block text-text-muted text-sm mb-2">CLIENT</span>
                        <span className="font-semibold">{project.client}</span>
                    </div>
                    <div>
                        <span className="block text-text-muted text-sm mb-2">YEAR</span>
                        <span className="font-semibold">{project.year}</span>
                    </div>
                    <div>
                        <span className="block text-text-muted text-sm mb-2">SERVICE</span>
                        <span className="font-semibold">{project.service}</span>
                    </div>
                    <div>
                        <span className="block text-text-muted text-sm mb-2">STACK</span>
                        <span className="font-semibold">{project.stack}</span>
                    </div>
                </div>
            </div>

            {/* Hero Image */}
            <div className="w-full h-[60vh] bg-[#1a1a1a] border border-border mb-24 overflow-hidden">
                <img 
                    src={project.heroImage} 
                    alt={`${project.title} hero`} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.parentElement!.innerHTML = `<div class="w-full h-full flex items-center justify-center text-text-muted font-mono">[${project.title.toUpperCase()} HERO IMAGE 16:9]</div>`;
                    }}
                />
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 mb-32">
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-primary">The Challenge</h2>
                </div>
                <div>
                    <p className="text-xl leading-relaxed text-text-muted">
                        {project.challenge}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-16 mb-32">
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-primary">The Solution</h2>
                </div>
                <div>
                    <p className="text-xl leading-relaxed text-text-muted mb-8">
                        {project.solution}
                    </p>
                    <ul className="list-none p-0">
                        {project.features.map(item => (
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
                    <div className="h-[400px] bg-[#1a1a1a] border border-border overflow-hidden">
                        <img 
                            src={`/assets/${project.id}-1.jpg`} 
                            alt={`${project.title} screenshot 1`} 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-text-muted font-mono">[IMG 01]</div>';
                            }}
                        />
                    </div>
                    <div className="h-[400px] bg-[#1a1a1a] border border-border overflow-hidden">
                        <img 
                            src={`/assets/${project.id}-2.jpg`} 
                            alt={`${project.title} screenshot 2`} 
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.parentElement!.innerHTML = '<div class="w-full h-full flex items-center justify-center text-text-muted font-mono">[IMG 02]</div>';
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="border-t border-border pt-16 flex justify-between items-end">
                <Link to="/" className="font-mono text-sm text-primary hover:text-accent transition-colors">
                    lintu.dev
                </Link>
                <Link to={`/project/${nextProject?.id}`} className="text-4xl md:text-5xl font-bold text-right leading-none group">
                    <span className="block text-base text-text-muted font-normal mb-2">NEXT PROJECT</span>
                    <span className="group-hover:text-primary transition-colors">{nextProject?.title.toUpperCase()} &rarr;</span>
                </Link>
            </div>
        </div>
    );
};

export default ProjectTemplate;