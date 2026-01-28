import React, { useState, useEffect } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes or screen resizes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <header
        className={`fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300 ${scrolled || isMobileMenuOpen ? 'bg-bg border-b border-border' : 'bg-transparent'
          }`}
      >
        <div className="container flex justify-between items-center">
          <div className="font-bold text-xl tracking-tighter flex items-center gap-2 z-50">
            LINTU <span className="text-primary">//</span> DEV
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex gap-8 list-none">
              {['Work', 'Services', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium text-text-muted transition-colors hover:text-primary"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden z-50 flex flex-col justify-center gap-[6px] w-[30px] h-[30px]"
            aria-label="Toggle menu"
          >
            <span className={`block w-full h-[2px] bg-current transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`} />
            <span className={`block w-full h-[2px] bg-current transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
            <span className={`block w-full h-[2px] bg-current transition-transform duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`} />
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div
          className={`fixed inset-0 bg-bg z-40 p-24 flex flex-col gap-8 transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
          <ul className="flex flex-col gap-8 list-none">
            {['Work', 'Services', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-4xl font-bold text-text-main inline-block"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-auto border-t border-border pt-8">
            <p className="text-text-muted">hello@lintu.dev</p>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {children}
      </main>

      <footer className="py-16 border-t border-border mt-16">
        <div className="container text-center text-text-muted">
          <p>&copy; {new Date().getFullYear()} Lintu Dev. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
