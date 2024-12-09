import React from 'react';

const Row = ({ children, className = '', justify = 'start', align = 'start' }) => {
  return (
    <div className={`flex ${className} justify-${justify} items-${align} `}>
      {children}
    </div>
  );
};

export default Row;
