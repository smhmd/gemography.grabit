import React from 'react';

function TailwindHelper() {
  return (
    <div className="fixed bottom-0 left-0 text-xs text-blue-500">
      <span className="sm:hidden">base</span>
      <span className="hidden sm:block md:hidden">sm</span>
      <span className="hidden md:block lg:hidden">md</span>
      <span className="hidden lg:block">lg</span>
    </div>
  );
}

export default TailwindHelper;
