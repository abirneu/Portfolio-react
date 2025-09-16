import React from "react";

const SkillsLevel = ({ 
  skillsName, 
  percentage 
}) => {
  const parsedPercentage = Math.min(Math.max(parseInt(percentage) || 0, 0), 100);

  return (
    <div className="mt-6 group">
      {/* Skill Name + Percentage */}
      <div className="flex justify-between items-center mb-2">
        <p className="text-base font-medium text-slate-800 dark:text-slate-200">
          {skillsName}
        </p>
        <span className="text-sm font-bold text-violet-600 dark:text-violet-400">
          {parsedPercentage}%
        </span>
      </div>

      {/* Progress Bar */}
      <div className="relative w-full h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
        {/* Filled part */}
        <div
          style={{ width: `${parsedPercentage}%` }}
          className="h-full bg-stone-500 dark:bg-stone-500 rounded-full transition-all duration-700 ease-out"
          data-aos="slide-right" data-aos-duration="800" data-aos-delay="300" 
        />
        {/* Unfilled part (optional, just for clarity) */}
        <div
          style={{ left: `${parsedPercentage}%` }}
          className="absolute top-0 h-full bg-transparent"
          data-aos="slide-left" data-aos-duration="800" data-aos-delay="300"
        />
      </div>
    </div>
  );
};

export default SkillsLevel;
