import React from 'react';

interface BrandLogoProps {
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({ className = "w-16 h-auto" }) => {
  return (
    <svg viewBox="0 0 200 160" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Base Shield */}
      <path d="M100 5 L180 20 L180 95 C180 130 100 155 100 155 C100 155 20 130 20 95 L20 20 Z" fill="#1a253a" stroke="#F5F5F5" strokeWidth="3" />
      <path d="M100 12 L172 25 L172 93 C172 121 100 144 100 144 C100 144 28 121 28 93 L28 25 Z" fill="transparent" stroke="#A82030" strokeWidth="2.5" />
      
      {/* Ribbon Banner */}
      <path d="M 10 125 L 190 125 L 180 135 L 190 145 L 10 145 L 20 135 Z" fill="#F5F5F5" stroke="#1a253a" strokeWidth="2" />
      <path d="M 16 128 L 35 128 L 35 142 L 16 142 L 23 135 Z" fill="none" stroke="#A82030" strokeWidth="1" />
      <path d="M 184 128 L 165 128 L 165 142 L 184 142 L 177 135 Z" fill="none" stroke="#A82030" strokeWidth="1" />
      
      <text x="100" y="139" fontFamily="system-ui, -apple-system, sans-serif" fontSize="11" fontWeight="900" fill="#1a253a" textAnchor="middle" letterSpacing="0.5">ATHLETIC DEPT.</text>

      {/* Stars on Ribbon */}
      <path d="M 30 137 l 1.5 3 l 3 0 l -2.5 1.5 l 1 3 l -3 -2 l -3 2 l 1 -3 l -2.5 -1.5 l 3 0 z" fill="#1a253a" transform="translate(10, -5) scale(0.6)" />
      <path d="M 45 137 l 1.5 3 l 3 0 l -2.5 1.5 l 1 3 l -3 -2 l -3 2 l 1 -3 l -2.5 -1.5 l 3 0 z" fill="#1a253a" transform="translate(10, -5) scale(0.6)" />
      <path d="M 60 137 l 1.5 3 l 3 0 l -2.5 1.5 l 1 3 l -3 -2 l -3 2 l 1 -3 l -2.5 -1.5 l 3 0 z" fill="#1a253a" transform="translate(10, -5) scale(0.6)" />
      
      <path d="M 170 137 l 1.5 3 l 3 0 l -2.5 1.5 l 1 3 l -3 -2 l -3 2 l 1 -3 l -2.5 -1.5 l 3 0 z" fill="#1a253a" transform="translate(140, -5) scale(0.6)" />
      
      <path d="M 100 131 l 1.5 3 l 3 0 l -2.5 1.5 l 1 3 l -3 -2 l -3 2 l 1 -3 l -2.5 -1.5 l 3 0 z" fill="#1a253a" transform="translate(0,-6) scale(0.6) translate(65, 0)" />


      {/* Main Text LAZE */}
      <text x="100" y="80" fontFamily="'Times New Roman', Times, serif" fontSize="56" fontWeight="900" fill="#1a253a" textAnchor="middle" stroke="#F5F5F5" strokeWidth="7" paintOrder="stroke">LAZE</text>
      <text x="100" y="80" fontFamily="'Times New Roman', Times, serif" fontSize="56" fontWeight="900" fill="#1a253a" textAnchor="middle" stroke="#A82030" strokeWidth="3" paintOrder="stroke">LAZE</text>
      <text x="100" y="80" fontFamily="'Times New Roman', Times, serif" fontSize="56" fontWeight="900" fill="#243452" textAnchor="middle">LAZE</text>

      {/* Sub Text LAB */}
      <text x="100" y="112" fontFamily="'Times New Roman', Times, serif" fontSize="28" fontWeight="900" fill="#1a253a" textAnchor="middle" stroke="#F5F5F5" strokeWidth="4" paintOrder="stroke">LAB</text>
      <text x="100" y="112" fontFamily="'Times New Roman', Times, serif" fontSize="28" fontWeight="900" fill="#1a253a" textAnchor="middle" stroke="#A82030" strokeWidth="2" paintOrder="stroke">LAB</text>
      <text x="100" y="112" fontFamily="'Times New Roman', Times, serif" fontSize="28" fontWeight="900" fill="#243452" textAnchor="middle">LAB</text>
    </svg>
  );
};
