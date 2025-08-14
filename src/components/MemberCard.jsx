import React from 'react';

const MemberCard = ({ image, name, title, description, contact}) => {

  return (
    <div className="flex flex-col sm:flex-row items-start bg-white px-6 py-6 gap-8 max-w-3xl">
      {/* Image section */}
      <div className="bg-black p-1 w-48 h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text section */}
      <div className="flex-1 text-left">
        <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
        <p className="text-sm font-semibold text-gray-500 mt-1 tracking-wide">
          {title}
        </p>
        <p className="mt-3 text-sm text-gray-400 leading-relaxed">
          {description}
        </p>
        <p className="mt-3 text-sm text-gray-400 leading-relaxed">
          {contact}
        </p>
        <button className="bg-[#0099FF] text-white px-4 py-2 rounded-xl hover:bg-[#F564A9] hover:shadow-lg transition duration-300">Contact Me</button>
      </div>
    </div>
  );
};

export default MemberCard;
