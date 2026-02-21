import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { User } from '../types';
import Logo from './Logo';
import BinanceDetailsPanel from './BinanceDetailsPanel';

interface NavigationProps {
  user: User | null;
  onLogout: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ user, onLogout }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileComplianceOpen, setIsMobileComplianceOpen] = useState(false);
  const [isMobileHelpOpen, setIsMobileHelpOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);
  const [isBinancePanelOpen, setIsBinancePanelOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.hash === `#${path}`;

  const navItems = [
    { label: 'EXCHANGE', path: '/' },
  ];

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[100] bg-black/60 backdrop-blur-2xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 md:h-20 items-center">
            {/* Logo Section */}
            <div className="flex items-center space-x-2 shrink-0">
              <Link to="/" onClick={closeMenu} className="flex items-center space-x-2 md:space-x-3 group">
                <Logo className="h-9 w-9 md:h-12 md:w-12" />
                <div className="flex flex-col">
                  <span className="text-lg md:text-2xl font-black text-white leading-none tracking-tighter font-orbitron">RADIANTVAULT</span>
                  <span className="text-[7px] md:text-[9px] font-bold text-cyan-400 uppercase tracking-[0.2em] md:tracking-[0.3em] leading-none mt-1">VENTURES OTC</span>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${isActive(item.path) || (item.path === '/' && location.hash === '')
                    ? 'text-cyan-400 border-b-2 border-cyan-400'
                    : 'text-gray-400 hover:text-white'
                    } transition-all duration-300 py-6 text-[10px] lg:text-xs font-black tracking-widest font-orbitron uppercase`}
                >
                  {item.label}
                </Link>
              ))}

              {/* Desktop Compliance Dropdown */}
              <div className="relative group flex items-center h-full">
                <button
                  className={`${location.hash.includes('/terms') || location.hash.includes('/risk') || location.hash.includes('/chargeback') || location.hash.includes('/refund') ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400 hover:text-white'} transition-all duration-300 h-full flex items-center text-[10px] lg:text-xs font-black tracking-widest font-orbitron uppercase gap-1`}
                >
                  COMPLIANCE
                  <svg className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-[80%] left-0 w-64 bg-black/95 backdrop-blur-3xl border border-white/10 rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl">
                  <div className="py-2 flex flex-col">
                    <Link to="/terms" className="px-5 py-3 text-[10px] lg:text-xs font-bold text-gray-400 hover:text-cyan-400 hover:bg-white/5 uppercase tracking-widest transition-colors">Terms & Conditions</Link>
                    <Link to="/risk" className="px-5 py-3 text-[10px] lg:text-xs font-bold text-gray-400 hover:text-cyan-400 hover:bg-white/5 uppercase tracking-widest transition-colors">Risk Disclosure Stmt</Link>
                    <Link to="/chargeback" className="px-5 py-3 text-[10px] lg:text-xs font-bold text-gray-400 hover:text-cyan-400 hover:bg-white/5 uppercase tracking-widest transition-colors">Chargeback Policy</Link>
                    <Link to="/refund" className="px-5 py-3 text-[10px] lg:text-xs font-bold text-gray-400 hover:text-cyan-400 hover:bg-white/5 uppercase tracking-widest transition-colors">Refund Policy</Link>
                  </div>
                </div>
              </div>

              {/* Desktop Help Dropdown */}
              <div className="relative group flex items-center h-full">
                <button
                  className={`${location.hash.includes('/faq') ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400 hover:text-white'} transition-all duration-300 h-full flex items-center text-[10px] lg:text-xs font-black tracking-widest font-orbitron uppercase gap-1`}
                >
                  HELP
                  <svg className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-[80%] left-0 w-64 bg-black/95 backdrop-blur-3xl border border-white/10 rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl">
                  <div className="py-2 flex flex-col">
                    <Link to="/faq" className="px-5 py-3 text-[10px] lg:text-xs font-bold text-gray-400 hover:text-cyan-400 hover:bg-white/5 uppercase tracking-widest transition-colors">FAQs</Link>
                  </div>
                </div>
              </div>

              {/* Resources Dropdown Desktop */}
              <div className="relative group flex items-center h-full">
                <button
                  className={`${location.hash.includes('/compliance') || location.hash.includes('/fiu-compliance') || location.hash.includes('/cookies') || location.hash.includes('/disclaimer') ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400 hover:text-white'} transition-all duration-300 h-full flex items-center text-[10px] lg:text-xs font-black tracking-widest font-orbitron uppercase gap-1`}
                >
                  RESOURCES
                  <svg className="w-3 h-3 group-hover:rotate-180 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-[80%] left-0 w-64 bg-black/95 backdrop-blur-3xl border border-white/10 rounded-xl overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 shadow-2xl">
                  <div className="py-2 flex flex-col">
                    <Link to="/compliance" className="px-5 py-3 text-[10px] lg:text-xs font-bold text-gray-400 hover:text-cyan-400 hover:bg-white/5 uppercase tracking-widest transition-colors">AML & KYC Policy</Link>
                    <Link to="/fiu-compliance" className="px-5 py-3 text-[10px] lg:text-xs font-bold text-gray-400 hover:text-cyan-400 hover:bg-white/5 uppercase tracking-widest transition-colors">FIU Stmt</Link>
                    <Link to="/cookies" className="px-5 py-3 text-[10px] lg:text-xs font-bold text-gray-400 hover:text-cyan-400 hover:bg-white/5 uppercase tracking-widest transition-colors">Cookie Policy</Link>
                    <Link to="/disclaimer" className="px-5 py-3 text-[10px] lg:text-xs font-bold text-gray-400 hover:text-cyan-400 hover:bg-white/5 uppercase tracking-widest transition-colors">Website Disclaimer</Link>
                  </div>
                </div>
              </div>

              {/* Contact Us Desktop */}
              <Link
                to="/contact"
                className={`${isActive('/contact') ? 'text-cyan-400 border-b-2 border-cyan-400' : 'text-gray-400 hover:text-white'} transition-all duration-300 py-6 text-[10px] lg:text-xs font-black tracking-widest font-orbitron uppercase flex items-center`}
              >
                CONTACT US
              </Link>
            </div>

            {/* Right Actions (Desktop) */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
              {user ? (
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col items-end">
                    <span className="text-xs font-black text-white font-orbitron uppercase">{user.email.split('@')[0]}</span>
                  </div>
                  <button
                    onClick={onLogout}
                    className="border border-white/10 hover:border-red-500/50 hover:bg-red-500/10 text-gray-400 hover:text-red-500 px-4 py-2 rounded-lg text-xs font-bold transition-all uppercase"
                  >
                    LOGOUT
                  </button>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link to="/auth" className="text-gray-400 px-2 py-2 text-xs font-black hover:text-white transition uppercase tracking-widest">
                    Login
                  </Link>
                  <Link
                    to="/auth"
                    className="bg-cyan-500 text-black px-6 py-2.5 rounded-xl text-xs font-black hover:bg-cyan-400 transition shadow-[0_0_15px_rgba(0,242,255,0.3)] font-orbitron tracking-widest uppercase"
                  >
                    Sign Up
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center space-x-3">
              {user && (
                <div className="flex flex-col items-end">
                  <span className="text-[9px] font-black text-white font-orbitron uppercase truncate max-w-[60px]">{user.email.split('@')[0]}</span>
                </div>
              )}
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Toggle Menu"
              >
                {isMobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        <div className={`md:hidden absolute top-16 left-0 right-0 bg-black/95 backdrop-blur-3xl border-b border-white/10 transition-all duration-300 origin-top ${isMobileMenuOpen ? 'scale-y-100 opacity-100 visible' : 'scale-y-0 opacity-0 invisible'}`}>
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`block py-3 text-sm font-black font-orbitron tracking-widest uppercase ${isActive(item.path) || (item.path === '/' && location.hash === '') ? 'text-cyan-400' : 'text-gray-400'
                  }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Compliance Section */}
            <div className="space-y-2">
              <button
                onClick={() => setIsMobileComplianceOpen(!isMobileComplianceOpen)}
                className={`w-full text-left py-3 text-sm font-black font-orbitron tracking-widest uppercase flex justify-between items-center ${isMobileComplianceOpen || location.hash.includes('/terms') || location.hash.includes('/risk') || location.hash.includes('/chargeback') || location.hash.includes('/refund') ? 'text-cyan-400' : 'text-gray-400'
                  }`}
              >
                COMPLIANCE
                <svg className={`w-4 h-4 transition-transform duration-300 ${isMobileComplianceOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${isMobileComplianceOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 border-l border-white/10 space-y-2 py-2">
                  <Link to="/terms" onClick={closeMenu} className={`block py-2 text-[11px] font-bold uppercase tracking-widest ${isActive('/terms') ? 'text-cyan-400' : 'text-gray-500'}`}>Terms & Conditions</Link>
                  <Link to="/risk" onClick={closeMenu} className={`block py-2 text-[11px] font-bold uppercase tracking-widest ${isActive('/risk') ? 'text-cyan-400' : 'text-gray-500'}`}>Risk Disclosure Stmt</Link>
                  <Link to="/chargeback" onClick={closeMenu} className={`block py-2 text-[11px] font-bold uppercase tracking-widest ${isActive('/chargeback') ? 'text-cyan-400' : 'text-gray-500'}`}>Chargeback Policy</Link>
                  <Link to="/refund" onClick={closeMenu} className={`block py-2 text-[11px] font-bold uppercase tracking-widest ${isActive('/refund') ? 'text-cyan-400' : 'text-gray-500'}`}>Refund Policy</Link>
                </div>
              </div>
            </div>

            {/* Help Section */}
            <div className="space-y-2">
              <button
                onClick={() => setIsMobileHelpOpen(!isMobileHelpOpen)}
                className={`w-full text-left py-3 text-sm font-black font-orbitron tracking-widest uppercase flex justify-between items-center ${isMobileHelpOpen || location.hash.includes('/faq') ? 'text-cyan-400' : 'text-gray-400'
                  }`}
              >
                HELP
                <svg className={`w-4 h-4 transition-transform duration-300 ${isMobileHelpOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${isMobileHelpOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 border-l border-white/10 space-y-2 py-2">
                  <Link to="/faq" onClick={closeMenu} className={`block py-2 text-[11px] font-bold uppercase tracking-widest ${isActive('/faq') ? 'text-cyan-400' : 'text-gray-500'}`}>FAQs</Link>
                </div>
              </div>
            </div>

            {/* Resources Section Mobile */}
            <div className="space-y-2">
              <button
                onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                className={`w-full text-left py-3 text-sm font-black font-orbitron tracking-widest uppercase flex justify-between items-center ${isMobileResourcesOpen || location.hash.includes('/compliance') || location.hash.includes('/fiu-compliance') || location.hash.includes('/cookies') || location.hash.includes('/disclaimer') ? 'text-cyan-400' : 'text-gray-400'
                  }`}
              >
                RESOURCES
                <svg className={`w-4 h-4 transition-transform duration-300 ${isMobileResourcesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <div className={`overflow-hidden transition-all duration-300 ${isMobileResourcesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="pl-4 border-l border-white/10 space-y-2 py-2">
                  <Link to="/compliance" onClick={closeMenu} className={`block py-2 text-[11px] font-bold uppercase tracking-widest ${isActive('/compliance') ? 'text-cyan-400' : 'text-gray-500'}`}>AML & KYC Policy</Link>
                  <Link to="/fiu-compliance" onClick={closeMenu} className={`block py-2 text-[11px] font-bold uppercase tracking-widest ${isActive('/fiu-compliance') ? 'text-cyan-400' : 'text-gray-500'}`}>FIU Stmt</Link>
                  <Link to="/cookies" onClick={closeMenu} className={`block py-2 text-[11px] font-bold uppercase tracking-widest ${isActive('/cookies') ? 'text-cyan-400' : 'text-gray-500'}`}>Cookie Policy</Link>
                  <Link to="/disclaimer" onClick={closeMenu} className={`block py-2 text-[11px] font-bold uppercase tracking-widest ${isActive('/disclaimer') ? 'text-cyan-400' : 'text-gray-500'}`}>Website Disclaimer</Link>
                </div>
              </div>
            </div>

            {/* Contact Us Mobile */}
            <Link
              to="/contact"
              onClick={closeMenu}
              className={`block py-3 text-sm font-black font-orbitron tracking-widest uppercase ${isActive('/contact') ? 'text-cyan-400' : 'text-gray-400'
                }`}
            >
              Contact Us
            </Link>

            {/* Binance Details Item */}
            <button
              onClick={() => { setIsBinancePanelOpen(true); closeMenu(); }}
              className="w-full text-left py-3 text-sm font-black text-yellow-500 font-orbitron tracking-widest uppercase flex items-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L4.5 9.5L12 17L19.5 9.5L12 2ZM12 4.8L16.7 9.5L12 14.2L7.3 9.5L12 4.8ZM12 18L4.5 10.5L3.1 11.9L12 20.8L20.9 11.9L19.5 10.5L12 18Z" />
              </svg>
              Trade With Binance
            </button>

            <div className="pt-4 mt-4 border-t border-white/5 space-y-4">
              {user ? (
                <button
                  onClick={() => { onLogout(); closeMenu(); }}
                  className="w-full text-left py-3 text-sm font-black text-red-500 font-orbitron tracking-widest uppercase"
                >
                  LOGOUT TERMINAL
                </button>
              ) : (
                <div className="grid grid-cols-2 gap-4">
                  <Link
                    to="/auth"
                    onClick={closeMenu}
                    className="flex items-center justify-center py-4 border border-white/10 rounded-xl text-xs font-black text-white uppercase tracking-widest"
                  >
                    LOGIN
                  </Link>
                  <Link
                    to="/auth"
                    onClick={closeMenu}
                    className="flex items-center justify-center py-4 bg-cyan-500 rounded-xl text-xs font-black text-black uppercase tracking-widest"
                  >
                    SIGN UP
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Full-screen Slide-up Panel */}
      <BinanceDetailsPanel
        isOpen={isBinancePanelOpen}
        onClose={() => setIsBinancePanelOpen(false)}
      />
    </>
  );
};

export default Navigation;
