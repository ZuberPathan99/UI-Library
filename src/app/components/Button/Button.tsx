import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'blue' | 'green' | 'cyan' | 'teal' | 'lime' | 'red' | 'pink' | 'purple'; // Add all your variants
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'blue', onClick, disabled }) => {
  const buttonClasses = `
    text-white 
    bg-gradient-to-r 
    ${variant === 'blue' ? 'from-blue-500 via-blue-600 to-blue-700' : ''} 
    ${variant === 'green' ? 'from-green-400 via-green-500 to-green-600' : ''} 
    ${variant === 'cyan' ? 'from-cyan-400 via-cyan-500 to-cyan-600' : ''} 
    ${variant === 'teal' ? 'from-teal-400 via-teal-500 to-teal-600' : ''} 
    ${variant === 'lime' ? 'from-lime-200 via-lime-400 to-lime-500' : ''} 
    ${variant === 'red' ? 'from-red-400 via-red-500 to-red-600' : ''} 
    ${variant === 'pink' ? 'from-pink-400 via-pink-500 to-pink-600' : ''} 
    ${variant === 'purple' ? 'from-purple-500 via-purple-600 to-purple-700' : ''} 
    hover:bg-gradient-to-br 
    focus:ring-4 focus:outline-none 
    focus:ring-${variant === 'blue' ? 'blue' : variant === 'green' ? 'green' : variant} -300 dark:focus:ring-${variant === 'blue' ? 'blue' : variant === 'green' ? 'green' : variant} -800 
    shadow-lg shadow-${variant === 'blue' ? 'blue' : variant === 'green' ? 'green' : variant} -500/50 dark:shadow-lg dark:shadow-${variant === 'blue' ? 'blue' : variant === 'green' ? 'green' : variant} -800/80 
    font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
    transition transform duration-150 ease-in-out  // Added transition properties
  `;

  return (
    <button type="button" className={buttonClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
