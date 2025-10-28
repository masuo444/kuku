import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'accent';
  className?: string;
  style?: React.CSSProperties;
}

export default function Badge({ children, variant = 'primary', className = '', style }: BadgeProps) {
  const variantStyles = {
    primary: 'bg-primary text-white',
    success: 'bg-green-600 text-white',
    accent: 'bg-accent text-primary',
  };

  return (
    <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold ${variantStyles[variant]} ${className}`} style={style}>
      {children}
    </span>
  );
}
