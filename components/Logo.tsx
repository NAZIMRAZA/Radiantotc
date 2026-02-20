
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12 w-12" }) => {
  return (
    <div className={`${className} relative group flex items-center justify-center`}>
      {/* Decorative glow behind the logo image to match cyber-defy aesthetic */}
      <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-500 opacity-50"></div>

      {/* User provided custom logo */}
      <img
        src="/images/logo.jpeg"
        alt="RadiantVault Logo"
        className="w-full h-full object-contain relative z-10 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]"
      />
    </div>
  );
};

export default Logo;
