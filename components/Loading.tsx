import React from 'react';

const Loading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black-100 z-50">
      <div className="flex flex-col items-center">
        <img src="/darrel-logo.png" alt="Loading Icon" className="w-40 h-40 animate-spin" />
        {/* <p className="text-white mt-4">Loading...</p> */}
      </div>
    </div>
  );
};

export default Loading;
