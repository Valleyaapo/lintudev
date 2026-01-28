import { useEffect } from 'react';

interface HeadMetaProps {
  title: string;
  description?: string;
  canonical?: string;
  ogUrl?: string;
  ogType?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  twitterSite?: string;
  twitterCreator?: string;
  jsonLd?: Record<string, any>;
}

export function useHeadMeta(props: HeadMetaProps) {
  useEffect(() => {
    // Set title
    document.title = props.title;

    // Helper function to set/update meta tags
    const setMetaTag = (name: string, content: string, property = false) => {
      const attr = property ? 'property' : 'name';
      let tag = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attr, name);
        document.head.appendChild(tag);
      }
      
      tag.content = content;
    };

    // Helper function to set/update link tags
    const setLinkTag = (rel: string, href: string) => {
      let tag = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      
      if (!tag) {
        tag = document.createElement('link');
        tag.rel = rel;
        document.head.appendChild(tag);
      }
      
      tag.href = href;
    };

    // Set basic meta tags
    if (props.description) {
      setMetaTag('description', props.description);
    }

    if (props.canonical) {
      setLinkTag('canonical', props.canonical);
    }

    // Set Open Graph tags
    if (props.ogUrl) {
      setMetaTag('og:url', props.ogUrl, true);
    }
    if (props.ogType) {
      setMetaTag('og:type', props.ogType, true);
    }
    if (props.ogTitle) {
      setMetaTag('og:title', props.ogTitle, true);
    }
    if (props.ogDescription) {
      setMetaTag('og:description', props.ogDescription, true);
    }
    if (props.ogImage) {
      setMetaTag('og:image', props.ogImage, true);
    }

    // Set Twitter tags
    if (props.twitterCard) {
      setMetaTag('twitter:card', props.twitterCard);
    }
    if (props.twitterTitle) {
      setMetaTag('twitter:title', props.twitterTitle);
    }
    if (props.twitterDescription) {
      setMetaTag('twitter:description', props.twitterDescription);
    }
    if (props.twitterImage) {
      setMetaTag('twitter:image', props.twitterImage);
    }
    if (props.twitterSite) {
      setMetaTag('twitter:site', props.twitterSite);
    }
    if (props.twitterCreator) {
      setMetaTag('twitter:creator', props.twitterCreator);
    }

    // Set JSON-LD schema
    if (props.jsonLd) {
      let scriptTag = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
      
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      
      scriptTag.textContent = JSON.stringify(props.jsonLd);
    }
  }, [props]);
}
