import React, { useState, useEffect, useCallback, useMemo } from "react";

const SkillsLevel = ({ 
  skillsName, 
  percentage, 
  index, 
  showDots = true,
  animationDelay = 100,
  onHover 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  // Parse percentage safely
  const parsedPercentage = useMemo(() => {
    const parsed = parseInt(percentage);
    return isNaN(parsed) ? 0 : Math.min(Math.max(parsed, 0), 100);
  }, [percentage]);
  
  // Calculate skill level based on percentage
  const skillLevel = useMemo(() => {
    if (parsedPercentage >= 80) return "Expert";
    if (parsedPercentage >= 60) return "Advanced";
    if (parsedPercentage >= 40) return "Intermediate";
    return "Beginner";
  }, [parsedPercentage]);
  
  // Calculate color based on percentage
  const progressColor = useMemo(() => {
    if (parsedPercentage >= 80) return {
      from: "from-green-600",
      via: "via-green-500", 
      to: "to-green-600",
      fromDark: "from-green-500",
      viaDark: "via-green-400",
      toDark: "to-green-500",
      hoverFrom: "group-hover:from-green-500",
      hoverVia: "group-hover:via-green-400",
      hoverTo: "group-hover:to-green-500",
      hoverFromDark: "dark:group-hover:from-green-400",
      hoverViaDark: "dark:group-hover:via-green-300",
      hoverToDark: "dark:group-hover:to-green-400",
      dot: "bg-green-500",
      dotDark: "bg-green-400",
      dotHover: "group-hover:bg-green-400",
      dotHoverDark: "dark:group-hover:bg-green-300",
      text: "text-green-600",
      textDark: "dark:text-green-400",
      textHover: "group-hover:text-green-500",
      textHoverDark: "dark:group-hover:text-green-400"
    };
    if (parsedPercentage >= 60) return {
      from: "from-blue-600",
      via: "via-blue-500",
      to: "to-blue-600",
      fromDark: "from-blue-500",
      viaDark: "via-blue-400",
      toDark: "to-blue-500",
      hoverFrom: "group-hover:from-blue-500",
      hoverVia: "group-hover:via-blue-400",
      hoverTo: "group-hover:to-blue-500",
      hoverFromDark: "dark:group-hover:from-blue-400",
      hoverViaDark: "dark:group-hover:via-blue-300",
      hoverToDark: "dark:group-hover:to-blue-400",
      dot: "bg-blue-500",
      dotDark: "bg-blue-400",
      dotHover: "group-hover:bg-blue-400",
      dotHoverDark: "dark:group-hover:bg-blue-300",
      text: "text-blue-600",
      textDark: "dark:text-blue-400",
      textHover: "group-hover:text-blue-500",
      textHoverDark: "dark:group-hover:text-blue-400"
    };
    if (parsedPercentage >= 40) return {
      from: "from-yellow-600",
      via: "via-yellow-500",
      to: "to-yellow-600",
      fromDark: "from-yellow-500",
      viaDark: "via-yellow-400",
      toDark: "to-yellow-500",
      hoverFrom: "group-hover:from-yellow-500",
      hoverVia: "group-hover:via-yellow-400",
      hoverTo: "group-hover:to-yellow-500",
      hoverFromDark: "dark:group-hover:from-yellow-400",
      hoverViaDark: "dark:group-hover:via-yellow-300",
      hoverToDark: "dark:group-hover:to-yellow-400",
      dot: "bg-yellow-500",
      dotDark: "bg-yellow-400",
      dotHover: "group-hover:bg-yellow-400",
      dotHoverDark: "dark:group-hover:bg-yellow-300",
      text: "text-yellow-600",
      textDark: "dark:text-yellow-400",
      textHover: "group-hover:text-yellow-500",
      textHoverDark: "dark:group-hover:text-yellow-400"
    };
    return {
      from: "from-red-600",
      via: "via-red-500",
      to: "to-red-600",
      fromDark: "from-red-500",
      viaDark: "via-red-400",
      toDark: "to-red-500",
      hoverFrom: "group-hover:from-red-500",
      hoverVia: "group-hover:via-red-400",
      hoverTo: "group-hover:to-red-500",
      hoverFromDark: "dark:group-hover:from-red-400",
      hoverViaDark: "dark:group-hover:via-red-300",
      hoverToDark: "dark:group-hover:to-red-400",
      dot: "bg-red-500",
      dotDark: "bg-red-400",
      dotHover: "group-hover:bg-red-400",
      dotHoverDark: "dark:group-hover:bg-red-300",
      text: "text-red-600",
      textDark: "dark:text-red-400",
      textHover: "group-hover:text-red-500",
      textHoverDark: "dark:group-hover:text-red-400"
    };
  }, [parsedPercentage]);
  
  // Calculate number of filled dots
  const filledDots = useMemo(() => Math.floor(parsedPercentage / 20), [parsedPercentage]);
  
  // Animation timer with cleanup
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, index * animationDelay);
    
    return () => clearTimeout(timer);
  }, [index, animationDelay]);

  // Handle hover events with optional callback
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    if (onHover) onHover(skillsName, parsedPercentage, skillLevel);
  }, [onHover, skillsName, parsedPercentage, skillLevel]);
  
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div 
      className="mt-8 group" 
      data-aos="fade-up" 
      data-aos-delay={index * animationDelay}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center space-x-3">
          <p className={`text-lg font-medium text-slate-800 dark:text-slate-200 ${progressColor.textHover} ${progressColor.textHoverDark} transition-colors duration-300`}>
            {skillsName}
          </p>
          
          {showDots && (
            <div className="hidden sm:flex items-center space-x-1.5">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    i < filledDots
                      ? `${progressColor.dot} ${progressColor.dotDark} ${progressColor.dotHover} ${progressColor.dotHoverDark}`
                      : 'bg-slate-200 dark:bg-slate-700/60 group-hover:bg-slate-300 dark:group-hover:bg-slate-700'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
        
        <div className="flex items-center space-x-2">
          {isHovered && (
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400 transition-opacity duration-300">
              {skillLevel}
            </span>
          )}
          <span className={`text-sm font-bold ${progressColor.text} ${progressColor.textDark} ${progressColor.textHover} ${progressColor.textHoverDark} transition-colors duration-300`}>
            {parsedPercentage}%
          </span>
        </div>
      </div>
      
      <div className="relative h-3 rounded-full bg-slate-100/70 dark:bg-slate-800/50 backdrop-blur-sm overflow-hidden transition-colors duration-300">
        {/* Progress bar background with glass effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/5 dark:from-white/5 dark:to-transparent"></div>
        
        {/* Main progress bar */}
        <div
          style={{ width: isVisible ? `${parsedPercentage}%` : '0%' }}
          className={`h-full relative rounded-full transition-all duration-1000 ease-out bg-stone-500
             ${progressColor.from} ${progressColor.via} ${progressColor.to} dark:${progressColor.fromDark} dark:${progressColor.viaDark} dark:${progressColor.toDark} ${progressColor.hoverFrom} ${progressColor.hoverVia} ${progressColor.hoverTo} dark:${progressColor.hoverFromDark} dark:${progressColor.hoverViaDark} dark:${progressColor.hoverToDark}`}
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 rounded-full">
            <div className="absolute inset-0 animate-shine">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 dark:via-white/30"></div>
            </div>
          </div>
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent dark:from-white/10 rounded-full"></div>
        </div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 flex">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex-1 border-r border-slate-300/20 dark:border-white/5 last:border-r-0" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsLevel;