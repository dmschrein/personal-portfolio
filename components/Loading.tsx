import React from 'react';
import Image from 'next/image'

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black-100 z-50">
      <div className="flex flex-col items-center">
        <Image src="/darrel-logo.svg" alt="Loading Icon" height={80} width={80} className="animate-spin" />
        
      </div>
    </div>
  );
};

export default Loading;
