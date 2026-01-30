
import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

// Lazy load project pages
const ProjectTemplate = lazy(() => import('./pages/ProjectTemplate'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  // Defer analytics/insights initialization until after render
  useEffect(() => {
    // Dynamically import and initialize after page is interactive
    import('@vercel/analytics/react').then(({ Analytics }) => {
      // Already initialized via React root
    });
    import('@vercel/speed-insights/react').then(({ SpeedInsights }) => {
      // Already initialized via React root
    });
  }, []);

  return (
    <Layout>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-text-muted">Loading...</div></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectTemplate />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App;
