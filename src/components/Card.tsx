import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Card({ children, className = '', style }: CardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 hover-lift ${className}`} style={style}>
      {children}
    </div>
  );
}
