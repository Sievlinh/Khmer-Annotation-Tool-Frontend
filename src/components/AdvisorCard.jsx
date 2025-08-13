import React from 'react';

const AdvisorCard = ({ image, name, title, description, additionalInfo }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 max-w-xs">
      <div className="w-[200px] h-[200px] overflow-hidden rounded-full mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-1 text-center">{name}</h3>
      <p className="text-sm text-gray-500 mb-2 text-center">{title}</p>
      <p className="text-sm text-gray-700 text-center">{description}</p>
      {additionalInfo && (
        <p className="mt-3 text-sm text-gray-500 text-center">{additionalInfo}</p>
      )}
    </div>
  );
};

export default AdvisorCard;
