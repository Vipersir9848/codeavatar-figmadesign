import React from 'react';

const Col = ({ children, justify = 'start', align = 'start', className = '' }) => {
  return (
    <div className={`flex flex-col justify-${justify} items-${align} ${className}`}>
      {children}
    </div>
  );
};

export default Col;