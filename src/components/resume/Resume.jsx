import React, { useState, Suspense, lazy } from 'react';

// Lazy load components
const Skills = lazy(() => import("../skills/Skills.jsx"));
const Education = lazy(() => import("../education/Education.jsx"));
const Experience = lazy(() => import("../experience/Experience.jsx"));
const Certificate = lazy(() => import("../certificate/Certificate.jsx"));
const Photography = lazy(() => import("../photography/Photography.jsx"));

// Skeleton loader component
const SkeletonLoader = () => (
  <div className="animate-pulse">
    <div className="h-8 bg-gray-200 rounded w-1/3 mb-6"></div>
    <div className="space-y-3">
      <div className="h-4 bg-gray-200 rounded"></div>
      <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      <div className="h-4 bg-gray-200 rounded w-4/6"></div>
    </div>
  </div>
);

const Resume = () => {
    const [activeFilter, setActiveFilter] = useState('all');
    
    return (
        <div className="min-h-screen bg-secondary py-6 px-4 sm:px-6 lg:px-0 dark:bg-gray-900">
            <div className="max-w-full mx-auto">
                <div className="sm:order-2 font-bold relative mb-10" data-aos="fade-down" data-aos-duration="1000">
                    <div className="text-center text-5xl xl:text-6xl font-bold text-black/5 dark:text-gray-700">
                        RESUME
                    </div>
                </div>

                {/* Filter buttons */}
                <div className="flex justify-center mb-5">
                    <div className="inline-flex flex-wrap sm:flex-nowrap justify-center gap-2 rounded-md" role="group">
                        {[
                            { id: 'all', label: 'All' },
                            { id: 'education', label: 'Education' },
                            { id: 'skills', label: 'Skills' },
                            { id: 'experience', label: 'Experience' },
                            { id: 'certificate', label: 'Certificates' },
                            { id: 'photography', label: 'Photography' }
                        ].map((filter, index, arr) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`px-6 py-3 text-sm font-medium rounded-lg
                                    ${activeFilter === filter.id
                                        ? 'bg-primary text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-100'
                                    } border border-gray-200`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Content based on filter */}
                <div className="bg-secondary">
                    <Suspense fallback={<SkeletonLoader />}>
                        {activeFilter === 'all' && (
                            <div className="space-y-1">
                                <Education />
                                <Skills />
                                <Experience />
                                <Certificate />
                                <Photography />
                            </div>
                        )}
                        {activeFilter === 'education' && <Education />}
                        {activeFilter === 'skills' && <Skills />}
                        {activeFilter === 'experience' && <Experience />}
                        {activeFilter === 'certificate' && <Certificate />}
                        {activeFilter === 'photography' && <Photography />}
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

export default Resume;