import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Showcase from '../components/Showcase';
import Process from '../components/Process';
import Services from '../components/Services';
import Contact from '../components/Contact';
import SEO from '../components/SEO';

const Home: React.FC = () => {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Lintu Dev Studio",
        "url": "https://lintu.dev",
        "logo": "https://lintu.dev/logo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "email": "hello@lintu.dev",
            "contactType": "customer service"
        },
        "sameAs": [
            "https://github.com/lintudev",
            "https://x.com/lintudev"
        ]
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <SEO title="Home" jsonLd={organizationSchema} />
            <Hero />
            <Showcase />
            <Services />
            <Process />
            <Contact />
        </motion.div>
    );
};

export default Home;
