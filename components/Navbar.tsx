import React, { useState, useEffect } from 'react';
import { Plane, Menu, X, LogOut, UserCircle } from 'lucide-react';
import { signOut } from '../services/supabase';

interface NavbarProps {
  session?: any;
}

const Navbar: React.FC<NavbarProps> = ({ session }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSignOut = async () => {
    await signOut();
    window.location.reload(); 
  };

  const navLinks = [
    { name: 'Destinations', href: '#destinations' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  // If we are on the AuthPage (!session), we want a solid background or distinct style
  // to ensure visibility against the white/split background.
  // We'll force the "scrolled" look (white bg, dark text) if not logged in.
  const isAuthPage = !session;
  const showDarkNavbar = isScrolled || isAuthPage;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        showDarkNavbar
          ? 'bg-white/90 backdrop-blur-md shadow-md py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo - click takes to home page */}
        <a href="/" className="flex items-center gap-2 cursor-pointer">
          <Plane className={`h-8 w-8 ${showDarkNavbar ? 'text-accent' : 'text-white'}`} />
          <span className={`text-2xl font-bold ${showDarkNavbar ? 'text-primary' : 'text-white'}`}>
            Wanderlust
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          {session && navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`font-medium hover:text-accent transition-colors ${
                showDarkNavbar ? 'text-slate-700' : 'text-slate-100'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <div className="flex items-center gap-4">
            {session ? (
              <>
                 <a
                  href="#contact"
                  className="bg-accent text-white px-6 py-2 rounded-full font-semibold hover:bg-sky-500 transition-all shadow-lg hover:shadow-xl"
                >
                  Book Now
                </a>
                <button 
                  onClick={handleSignOut}
                  className={`p-2 rounded-full transition-colors ${showDarkNavbar ? 'text-slate-600 hover:bg-slate-100' : 'text-white/80 hover:bg-white/10'}`}
                  title="Sign Out"
                >
                  <LogOut size={20} />
                </button>
              </>
            ) : (
               <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="flex items-center gap-2 bg-slate-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-slate-800 transition-all shadow-md"
                >
                  <UserCircle size={18} />
                  Sign In
                </button>
            )}
           
          </div>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className={showDarkNavbar ? 'text-slate-800' : 'text-white'} />
          ) : (
            <Menu className={showDarkNavbar ? 'text-slate-800' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg p-6 flex flex-col space-y-4">
          {session && navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-800 font-medium hover:text-accent"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          
          {session ? (
             <>
               <a
                href="#contact"
                className="bg-accent text-white px-6 py-2 rounded-full font-semibold text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Now
              </a>
              <button
                onClick={handleSignOut}
                className="flex items-center justify-center gap-2 text-slate-500 hover:text-slate-800 py-2"
              >
                <LogOut size={16} /> Sign Out
              </button>
             </>
          ) : (
            <button
              onClick={() => {
                 window.scrollTo({ top: 0, behavior: 'smooth' });
                 setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-2 rounded-full font-semibold hover:bg-slate-800"
            >
              <UserCircle size={18} /> Sign In
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;