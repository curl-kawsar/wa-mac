import React from 'react';
import Link from 'next/link';

const Button = ({
  href = '',
  onClick,
  type = 'primary',
  size = 'md',
  className = '',
  children,
  fullWidth = false
}) => {
  // Base styles
  const baseStyles = "cursor-pointer poppins font-normal tracking-wide text-white transition-colors duration-300 transform rounded focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80";
  
  // Size variations
  const sizeStyles = {
    sm: "text-base h-[45px] px-4",
    md: "text-xl h-[60px] w-[200px] px-2 py-2",
    lg: "text-2xl h-[80px] w-[300px] px-4 py-2"
  };
  
  // Type variations
  const typeStyles = {
    primary: "bg-[#5C1010] hover:bg-[#7B1A1A]",
    secondary: "bg-[#D4AF37] hover:bg-[#DEC357]"
  };
  
  // Combined styles
  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${typeStyles[type]} ${fullWidth ? 'w-full' : ''} ${className}`;
  
  // If href is provided, render as a Link
  if (href) {
    return (
      <Link href={href}>
        <button className={combinedStyles} onClick={onClick}>
          {children}
        </button>
      </Link>
    );
  }
  
  // Otherwise, render as a button
  return (
    <button className={combinedStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button; 