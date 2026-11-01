import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  variant?: 'wordmark' | 'monogram' | 'combined';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  inverted?: boolean;
}

export function Logo({
  className = '',
  size = 'md',
}: LogoProps) {
  const sizeMap = {
    sm: { width: 36, height: 36, className: 'h-9 w-auto' },
    md: { width: 44, height: 44, className: 'h-11 w-auto' },
    lg: { width: 60, height: 60, className: 'h-15 w-auto' },
    xl: { width: 80, height: 80, className: 'h-20 w-auto' },
  };

  const currentSize = sizeMap[size] || sizeMap.md;

  return (
    <Link
      href="/"
      className={`group inline-flex items-center select-none transition-opacity hover:opacity-90 ${className}`}
      aria-label="AVRONCE Homepage"
    >
      <Image
        src="/logo.jpg"
        alt="AVRONCE Logo"
        width={currentSize.width}
        height={currentSize.height}
        className={`${currentSize.className} object-contain transition-transform duration-300 group-hover:scale-105 rounded-sm`}
        priority
      />
    </Link>
  );
}
