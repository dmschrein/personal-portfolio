"use client";

import React, { useState, useEffect } from 'react';
import Loading from './Loading';

const ClientRoot = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the delay time as needed

    return () => clearTimeout(timer);
  }, []);

  return <>{isLoading ? <Loading /> : children}</>;
};

export default ClientRoot;
