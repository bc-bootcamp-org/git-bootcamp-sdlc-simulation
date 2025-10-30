import React from 'react';

/**
 * Template component for team members
 * Copy this file and rename it to create new team member components
 * Replace 'Template' with the member's name
 */
const Template = ({ name = 'Team Member' }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex flex-col items-center">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-4">
          {name.charAt(0).toUpperCase()}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
        <p className="text-gray-600 text-sm">Team Member</p>
      </div>
    </div>
  );
};

export default Template;
