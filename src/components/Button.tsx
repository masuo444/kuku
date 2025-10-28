import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  onClick?: () => void;
  className?: string;
  download?: boolean;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  onClick,
  className = '',
  download = false,
}: ButtonProps) {
  const baseStyles = 'inline-block px-8 py-3 rounded-full font-semibold transition-all duration-300 text-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transform hover:scale-105 active:scale-95';

  const variantStyles = {
    primary: 'bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl',
    secondary: 'bg-accent text-primary hover:bg-accent/90 shadow-md hover:shadow-lg',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-sm hover:shadow-md',
  };

  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (href.startsWith('http') || download) {
      return (
        <a
          href={href}
          className={styles}
          download={download}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          target={href.startsWith('http') ? '_blank' : undefined}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={styles} type="button">
      {children}
    </button>
  );
}
