import React from 'react';
import { useLocation } from 'react-router-dom';
import { useHeadMeta } from '../hooks/useHeadMeta';

interface SEOProps {
    title: string;
    description?: string;
    type?: 'website' | 'article';
    jsonLd?: Record<string, any>;
}

const SEO: React.FC<SEOProps> = ({ title, description, type = 'website', jsonLd }) => {
    const siteTitle = "Lintu Dev Studio";
    const siteUrl = "https://lintu.dev";
    const location = useLocation();
    const canonicalUrl = `${siteUrl}${location.pathname}`;

    const metaDescription = description || "Specialized development studio shipping high-performance web applications and mobile solutions.";

    useHeadMeta({
        title: `${title} | ${siteTitle}`,
        description: metaDescription,
        canonical: canonicalUrl,
        ogUrl: canonicalUrl,
        ogType: type,
        ogTitle: title,
        ogDescription: metaDescription,
        ogImage: `${siteUrl}/og-image.png`,
        twitterCard: 'summary_large_image',
        twitterTitle: title,
        twitterDescription: metaDescription,
        twitterImage: `${siteUrl}/og-image.png`,
        twitterSite: '@lintudev',
        twitterCreator: '@lintudev',
        jsonLd: jsonLd,
    });

    return null;
};

export default SEO;
