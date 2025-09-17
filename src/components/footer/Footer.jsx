import React, { useState, useEffect } from "react";

const Footer = () => {
  const [views, setViews] = useState(0);

  useEffect(() => {
    const fetchViews = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/views");
        const data = await response.json();
        setViews(data.views);
      } catch (error) {
        console.error("Error fetching view count:", error);
        // Fallback to a static number or 0 if the API call fails
        setViews('N/A'); 
      }
    };

    fetchViews();
  }, []);

  return (
    <footer className="text-center bg-secondary/60 py-6 dark:bg-gray-800 dark:text-white">
      <div className="container mx-auto">
        <p className="text-sm">
          <span className="font-bold">Views:</span> {views.toLocaleString()}
        </p>
        <p className="mt-2 text-sm">
          Copyright &copy; 2025 Abir Hasan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;