import React from 'react'
import { useState,useEffect } from 'react';
const useDebounce = (value,delay) => {
    const [ debouncedValue, setdebouncedValue] = useState(value);
    useEffect(() => {
     const timer=setTimeout(()=>setdebouncedValue(value),delay);
    
      return () => clearTimeout(timer);
    }, [value,delay]);
    
  return debouncedValue; 
}

export default useDebounce
