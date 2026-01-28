import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound: React.FC = () => {
    return (
        <div className="container" style={{
            minHeight: '70vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center'
        }}>
            <SEO title="Page Not Found" />
            <h1 style={{
                fontSize: '8rem',
                fontWeight: 800,
                color: 'var(--color-surface-hover)',
                lineHeight: 1
            }}>
                404
            </h1>
            <p style={{
                fontSize: '1.5rem',
                color: 'var(--color-text)',
                marginBottom: '2rem'
            }}>
                Signal Lost.
            </p>
            <Link to="/" className="btn-primary">
                Return to Base
            </Link>
        </div>
    );
};

export default NotFound;
