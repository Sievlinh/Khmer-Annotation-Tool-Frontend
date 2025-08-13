// src/components/MissionVision.jsx
const MissionVision = ({ mission, vision }) => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Mission Card */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">
            Our Mission
          </h3>
          <div className="w-full h-56 overflow-hidden rounded-lg mb-4">
            <img
              src="https://i.pinimg.com/1200x/57/5c/33/575c33fe5ab9846d8c7f40c6a0010f0b.jpg"
              alt="Mission"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="text-gray-600 text-center leading-relaxed">
            {mission}
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-bold text-center mb-4 text-gray-800">
            Our Vision
          </h3>
          <div className="w-full h-56 overflow-hidden rounded-lg mb-4">
            <img
              src="https://i.pinimg.com/736x/bd/ea/94/bdea94587ee7c9a5c7a28adb8678f365.jpg"
              alt="Vision"
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
          <p className="text-gray-600 text-center leading-relaxed">
            {vision}
          </p>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;
