import React from 'react';

const StarBorder = ({ as: Component = 'button', className = '', children, onClick, href, target, rel, type }) => (
  <Component
    type={Component === 'button' ? type : undefined}
    onClick={onClick}
    href={href}
    target={target}
    rel={rel}
    className={`relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-white group ${className}`}
  >
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#4F46E5_50%,#E2E8F0_100%)] group-hover:bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#2563EB_50%,#E2E8F0_100%)] transition-colors duration-300" />
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-white px-8 py-1 text-sm font-medium text-gray-900 backdrop-blur-3xl transition-all duration-300 group-hover:bg-gray-50/90 group-hover:scale-[0.98]">
      {children}
    </span>
  </Component>
);
export default StarBorder;
