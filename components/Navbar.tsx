'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const links = [
    { href: '/about', label: 'About' },
    { href: '/experience', label: 'Experience' },
    { href: '/education', label: 'Education' },
    { href: '/writings', label: 'Writings' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full bg-paper/80 backdrop-blur-md z-50 border-b border-ink/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link 
            href="/" 
            className="font-serif text-2xl font-semibold tracking-tight relative z-50"
            onClick={() => setIsOpen(false)}
          >
            SA.
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest font-medium text-ink/70">
            {links.map(link => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`hover:text-ink transition-colors ${pathname === link.href ? 'text-ink font-bold' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden relative z-50 p-2 -mr-2 text-ink hover:text-ink/70 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-paper flex flex-col items-center justify-center px-6"
          >
            <div className="flex flex-col items-center space-y-8">
              {links.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`font-serif text-4xl tracking-wide transition-colors ${
                      pathname === link.href ? 'text-terracotta italic' : 'text-ink hover:text-olive'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
