import React, { useState, useMemo, useEffect } from 'react';

// Import images directly - you'll need to add these imports manually
// Replace these with your actual image imports from the photography folder
import Image1 from '../../photography_image/img1.jpg'
import Image2 from '../../photography_image/IMG-20250915-WA0006.jpg'
import Image3 from '../../photography_image/IMG-20250915-WA0009.jpg'
import Image4 from '../../photography_image/img2.jpg'
import Image5 from '../../photography_image/IMG-20250915-WA0007.jpg'
import Image6 from '../../photography_image/IMG-20250915-WA0005.jpg'
import Image7 from '../../photography_image/IMG_2073.JPG'
import Image8 from '../../photography_image/IMG_3389.JPG'
import Image9 from '../../photography_image/IMG_7165.JPG'
import Image10 from '../../photography_image/IMG_3504.JPG'


// Placeholder data structure - UPDATE THIS WITH YOUR ACTUAL IMAGES AND METADATA
const placeholderPhotos = [
  { id: 1, src: Image1, category: "nature", title: "Mountain Sunrise" },
  { id: 2, src: Image2, category: "nature", title: "Village Lights" },
  { id: 3, src: Image3, category: "portrait", title: "Portrait Session" },
  { id: 4, src: Image4, category: "nature", title: "Forest Path" },
  { id: 5, src: Image5, category: "urban", title: "Street Photography" },
  { id: 6, src: Image6, category: "portrait", title: "Studio Portrait" },
  { id: 7, src: Image7, category: "nature", title: "Flower Close-Up" },
  { id: 8, src: Image8, category: "nature", title: "Cloudy Sky" },
  { id: 9, src: Image9, category: "nature", title: "Moon Rise" },
  { id: 10, src: Image10, category: "portrait", title: "Flower Field" },
];

const Photography = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize photos when component mounts
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setPhotos(placeholderPhotos);
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  const categories = useMemo(() => {
    const allCategories = ['all', ...new Set(photos.map(photo => photo.category))];
    return allCategories;
  }, [photos]);

  const filteredPhotos = useMemo(() => {
    if (selectedCategory === 'all') return photos;
    return photos.filter(photo => photo.category === selectedCategory);
  }, [selectedCategory, photos]);

  const openLightbox = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction) => {
    if (!selectedImage) return;
    
    const currentIndex = filteredPhotos.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % filteredPhotos.length;
    } else {
      newIndex = (currentIndex - 1 + filteredPhotos.length) % filteredPhotos.length;
    }
    
    setSelectedImage(filteredPhotos[newIndex]);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') navigateImage('next');
        if (e.key === 'ArrowLeft') navigateImage('prev');
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-secondary dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="font-bold relative mb-12 md:mb-5" data-aos="fade-down" data-aos-duration="1000">
          <div className="text-center text-5xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
            PHOTOGRAPHY
          </div>
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl sm:text-2xl md:text-3xl lg:text-4xl dark:text-white">
            My Photography
          </h1>
        </div>

        {/* Introduction Text */}
        {/* <div className="text-center max-w-3xl mx-auto mb-12 " data-aos="fade-up">
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Capturing moments and telling stories through my lens. Explore my collection of landscapes, portraits, and street photography.
          </p>
        </div> */}

        {/* Loading State */}
        {isLoading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-gray-500 dark:text-gray-400">Loading photos...</p>
          </div>
        )}

        {/* Show message if no images found */}
        {!isLoading && photos.length === 0 && (
          <div className="text-center py-12" data-aos="fade-up">
            <div className="text-gray-400 dark:text-gray-500 text-lg mb-4">
              No photos found.
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-sm max-w-md mx-auto">
              To add your photos, import them at the top of this file and update the placeholderPhotos array with your image data.
            </p>
            <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg text-left max-w-xl mx-auto">
              <h4 className="font-medium mb-2">How to add your images:</h4>
              <ol className="list-decimal list-inside space-y-1 text-sm">
                <li>Add your images to the photography folder</li>
                <li>Import them at the top of this file</li>
                <li>Update the placeholderPhotos array with your image data</li>
              </ol>
            </div>
          </div>
        )}

        {/* Category Filters - Only show if we have photos */}
        {!isLoading && photos.length > 0 && (
          <>
            <div className="flex flex-wrap justify-center gap-3 mb-12" data-aos="fade-up">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-lg'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Photo Gallery - Masonry Layout */}
            <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4" data-aos="fade-up">
              {filteredPhotos.map(photo => (
                <div 
                  key={photo.id} 
                  className="break-inside-avoid group relative overflow-hidden rounded-xl cursor-pointer transform transition-transform duration-300 hover:scale-[1.02]"
                  onClick={() => openLightbox(photo)}
                >
                  <div className="relative">
                    <img 
                      src={photo.src} 
                      alt={photo.title} 
                      className="w-full h-auto object-cover rounded-xl shadow-md"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 rounded-xl flex items-end">
                      <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <h3 className="text-white font-semibold text-lg">{photo.title}</h3>
                        <span className="text-blue-200 text-sm uppercase tracking-wider">{photo.category}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State for filtered results */}
            {filteredPhotos.length === 0 && photos.length > 0 && (
              <div className="text-center py-12" data-aos="fade-up">
                <div className="text-gray-400 dark:text-gray-500 text-lg">No photos found in this category.</div>
              </div>
            )}

            {/* Lightbox Modal */}
            {selectedImage && (
              <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
                <button 
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 text-white text-3xl z-10 hover:text-blue-400 transition-colors"
                >
                  &times;
                </button>
                
                <button 
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 text-white text-3xl z-10 hover:text-blue-400 transition-colors md:left-8"
                >
                  &#8249;
                </button>
                
                <button 
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 text-white text-3zl z-10 hover:text-blue-400 transition-colors md:right-8"
                >
                  &#8250;
                </button>
                
                <div className="max-w-5xl max-h-full w-full flex flex-col">
                  <div className="relative flex-grow flex items-center justify-center">
                    <img 
                      src={selectedImage.src} 
                      alt={selectedImage.title} 
                      className="max-h-[80vh] max-w-full object-contain rounded"
                    />
                  </div>
                  
                  <div className="text-white text-center mt-4">
                    <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
                    <p className="text-blue-300 uppercase text-sm">{selectedImage.category}</p>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Photography;