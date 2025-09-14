import React, { useState, useEffect } from "react";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the animation after a tiny delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 50);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      
      {/* Orange screen that covers everything */}
      <div className={`absolute inset-0 bg-stone-500 transition-transform duration-1000 ease-in-out dark:bg-gray-700 ${
        isVisible ? 'translate-x-0' : '-translate-x-full'
      }`}></div>
    </div>
  );
};

export default Loader;