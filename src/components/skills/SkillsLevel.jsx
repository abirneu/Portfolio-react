import React from "react";

const SkillsLevel = ({ 
  skillsName, 
  percentage, 
  index 
}) => {
  const parsedPercentage = Math.min(Math.max(parseInt(percentage) || 0, 0), 100);
  
  return (
    <div className="mt-6 group">
      <div className="flex justify-between items-center mb-2">
        <p className="text-base font-medium text-slate-800 dark:text-slate-200">
          {skillsName}
        </p>
        <span className="text-sm font-bold text-violet-600 dark:text-violet-400">
          {parsedPercentage}%
        </span>
      </div>
      
      <div className="relative h-2 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
        <div
          style={{ width: `${parsedPercentage}%` }}
          className="h-full rounded-full bg-gradient-to-r from-violet-500 to-violet-600 dark:from-violet-400 dark:to-violet-500 transition-all duration-700 ease-out"
        ></div>
      </div>
    </div>
  );
};

export default SkillsLevel;