
import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-12 w-12" }) => {
  return (
    <div className={`${className} relative group flex items-center justify-center`}>
      {/* Decorative glow behind the logo image to match cyber-defy aesthetic */}
      <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-500 opacity-50"></div>
      
      {/* Geometric futuristic RV logo in SVG */}
      <svg 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 transition-transform duration-500 group-hover:scale-110 drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]"
      >
        <path d="M20 80L40 20H60L80 80H65L50 35L35 80H20Z" fill="url(#paint0_linear)"/>
        <path d="M50 80L60 50H70L60 80H50Z" fill="#A855F7" opacity="0.8"/>
        <defs>
          <linearGradient id="paint0_linear" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="#06B6D4" />
            <stop offset="1" stopColor="#A855F7" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default Logo;
