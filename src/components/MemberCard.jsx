import React from 'react';

const MemberCard = ({ image, name, role }) => {
  return (
    <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg max-w-xs">
      <img
        src={image}
        alt={name}
        className="w-[250px] h-[250px] rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
};

export default MemberCard;
