
import { lazy, Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
import Layout from './components/Layout';
import Home from './pages/Home';

// Lazy load project pages
const ProjectTemplate = lazy(() => import('./pages/ProjectTemplate'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  const location = useLocation();

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route 
            path="/project/:id" 
            element={
              <Suspense fallback={<div className="min-h-screen" />}>
                <ProjectTemplate />
              </Suspense>
            } 
          />
          <Route 
            path="*" 
            element={
              <Suspense fallback={<div className="min-h-screen" />}>
                <NotFound />
              </Suspense>
            } 
          />
        </Routes>
      </AnimatePresence>
      <Analytics />
      <SpeedInsights />
    </Layout>
  );
}

export default App;
