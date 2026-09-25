import React, { useState, useEffect } from 'react';
import { MagneticButton } from './MagneticButton.tsx';
import { Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'A Abordagem', href: '#abordagem' },
    { label: 'Sobre Mim', href: '#sobre' },
    { label: 'O Consultório', href: '#consultorio' },
    { label: 'Dúvidas', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#F9F8F6]/85 backdrop-blur-md border-b border-[#2C302E]/6 py-4 shadow-[0_2px_16px_rgba(0,0,0,0.02)]'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-8 lg:px-12">
        {/* Zone 1: Single text element wordmark in display face */}
        <a
          href="#"
          className="font-serif text-2xl tracking-tight text-[#2C302E] hover:text-[#8A9A86] transition-colors focus:outline-none"
        >
          Susan Moraes
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#2C302E]/80">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-xs tracking-wider uppercase transition-colors hover:text-[#2C302E] py-1 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-[#8A9A86] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="hidden sm:flex items-center gap-4">
          <MagneticButton
            href="#contato"
            variant="primary"
            className="!py-2.5 !px-5 text-xs uppercase tracking-widest font-medium"
          >
            Agendar Conversa
          </MagneticButton>
        </div>

        {/* Mobile hamburger button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#2C302E] hover:text-[#8A9A86] focus:outline-none"
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile drawer menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#2C302E]/10 bg-[#F9F8F6]/95 backdrop-blur-xl px-6 py-8 transition-all">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-serif text-[#2C302E] hover:text-[#8A9A86] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-[#2C302E]/10">
              <MagneticButton
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                variant="primary"
                className="w-full text-center"
              >
                Agendar Primeira Conversa
              </MagneticButton>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
