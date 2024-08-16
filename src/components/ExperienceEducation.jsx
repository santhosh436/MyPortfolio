import React, { useState } from "react";

const ExperienceEducation = () => {
  const [showExperience, setShowExperience] = useState(true);

  const experienceData = [
    {
      companyName: "Karthikeya Software Solutions Pvt.Ltd",
      role: "FrontEnd Developer Intern",
      duration: "Jan 2024 - May 2024",
    },
    {
      companyName: "Tata Strive",
      role: "Junior Fullstack Java Developer Intern",
      duration: "Aug 2024 - Present",
    },
  ];

  const educationData = [
    {
      collegeName: "KNR High School",
      branch: " Secondary Education",
      duration: "2017 - 2018 ",
      percentage:"79%"
    },
    {
      collegeName: "Rao's Junior College",
      branch: "Intermediate",
      duration: "2018 - 2020",
      percentage:"92%"
    },
    {
        collegeName:" Audisankara College of Engineering and Technology",
        branch:" Electronics and Communication Engineering",
        duration:"2020-2024",
        percentage:"92%"
    }
  ];
  const renderData = (data) => {
    return data.map((item, index) => (
      <div key={index} className="flex items-center mb-4">
        <div className="relative flex flex-col items-center">
          <div className="w-5 h-5  bg-orange-500 rounded-full z-10"></div>
          {index < data.length-1 && (
            <div className="w-[4px] bg-orange-500 absolute top-2 h-28 z-0"></div>
          )}
        </div>
        <div className="ml-4 text-left text-xl">
          <p className="font-bold">{item.companyName || item.collegeName}</p>
          <p className="text-lg font-semibold">{item.role || item.branch}</p>
          <p className="text-[17px] text-gray-500"><span className="mr-4">{item.duration}</span> <span className="mr-2 text-white">{showExperience? "":"-"}</span> <span>{item.percentage}</span></p>
        </div>
      </div>
    ));
  };

  return (
    <div id="experience" className="  flex flex-col items-center mt- sm:mt-0 sm:justify-center h-11/12  sm:h-screen text-white  py-20 sm:py-0">
      <div className="mb-14 flex space-x-4">
        <button
          onClick={() => setShowExperience(true)}
          className={`px-4 py-2 text-white font-bold rounded ${showExperience ? 'bg-orange-500' : 'bg-gray-500'}`}
        >
          Experience
        </button>
        <button
          onClick={() => setShowExperience(false)}
          className={`px-4 py-2 text-white font-bold rounded ${!showExperience ? 'bg-orange-500' : 'bg-gray-500'}`}
        >
          Education
        </button>
      </div>

      <div className="flex flex-col items-center justify-center sm:space-y-3">
        {showExperience ? (
          <div className="sm:w-full max-w-md">
            {renderData(experienceData)}
          </div>
        ) : (
          <div className="sm:w-full max-w-md">
            {renderData(educationData)}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExperienceEducation;
