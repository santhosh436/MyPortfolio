import React from 'react';

const PersonalInfo = () => {
  const details = {
    firstName: 'John',
    lastName: 'Doe',
    age: 28,
    languages: ['English', 'Spanish'],
    email: 'john.doe@example.com',
    phoneNumber: '+1234567890',
    nationality: 'American',
    role: 'Full Stack Developer',
    currentAddress: '1234 Elm Street, Springfield, USA',
    permanentAddress: '5678 Maple Avenue, Springfield, USA',
    qualification: 'Bachelor of Engineering in Computer Science',
  };

  return (
    <div className="flex flex-col items-center justify-center  py-20 border-b-[1px] border-b-orange-500  sm:w-7/12 mx-auto ">
         <h1 className="text-2xl font-bold mb-5 text-orange-500">Personal Info</h1>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8 text-white  border-2 border-orange-500 px-8 py-9 rounded-lg shadow-orange-500 shadow-lg">
        
        <div className="space-y-2">
          <p><strong>First Name:</strong> {details.firstName}</p>
          <p><strong>Last Name:</strong> {details.lastName}</p>
          <p><strong>Email:</strong> {details.email}</p>
          <p><strong>Nationality:</strong> {details.nationality}</p>
          <p><strong>Role:</strong> {details.role}</p>
          <p><strong>Current Address:</strong> {details.currentAddress}</p>
        </div>
        <div className="space-y-2">
          <p><strong>Age:</strong> {details.age}</p>
          <p><strong>Languages:</strong> {details.languages.join(', ')}</p>
          <p><strong>Phone Number:</strong> {details.phoneNumber}</p>
          <p><strong>Qualification:</strong> {details.qualification}</p>
          <p><strong>Permanent Address:</strong> {details.permanentAddress}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
