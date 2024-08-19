import React from 'react';

const skills = [
  { name: 'HTML', percentage: 90 },
  { name: 'CSS', percentage: 85 },
  { name: 'JavaScript', percentage: 80 },
  { name: 'React.js', percentage: 75 },
  { name: 'Tailwind CSS', percentage: 70 },
  { name: 'BootStrap', percentage: 70 },
  { name: 'Figma', percentage: 70 },
  { name: 'Java', percentage: 70 },
  { name: 'Core Java', percentage: 70 },
  { name: 'Spring', percentage: 70 },
  { name: 'Spring Boot', percentage: 70 },
  { name: 'MySql', percentage: "70" },
  { name: 'Typing Speed', percentage: "37WPM" },

  // Add more skills as needed
];

const SkillCircle = ({ name, percentage }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-10">
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full border-[2px] border-gray-300">
          <div
            className="absolute inset-0 rounded-full border-4 border-blue-500"
            style={{
              clipPath: `inset(${100 - percentage}% 0 0 0)`,
              borderColor: `rgba(255, 140, 0, ${percentage / 100})`,
            }}
          ></div>
        </div>
        <div className="absolute text-lg font-semibold text-white">{percentage}%</div>
      </div>
      <div className="mt-2 text-center font-medium text-white">{name}</div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="sm:px-24 py-20">
      <h2 className="text-center text-2xl text-orange-500 font-bold mb-14">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-x-2 gap-y-2 sm:gap-x-6 sm:gap-y-2">
        {skills.map((skill) => (
          <SkillCircle key={skill.name} name={skill.name} percentage={skill.percentage} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
