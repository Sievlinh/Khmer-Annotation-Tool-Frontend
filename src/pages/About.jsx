import Footer from '../components/Footer';
import MissionVision from '../components/MissionVision';
import Card from '../components/Card';

const About = () => {
  const mission =
    'Enable students and researchers to build high-quality Khmer OCR datasets efficiently through intuitive annotation, and easy validation.';
  const vision =
    'Become a trusted foundation for Khmer language digitization efforts by providing accessible tools and best practices for data annotation.';


  const advisors = [
    { names: 'Dr. Va Hongly', title: 'Senior Lecturer-Researcher' },
    { names: 'Mr. Him Soklong', title: 'Lecturer-Researcher' },
  ];
  const mentors = [{ names: 'Ms. So Kimlang', title: 'Senior AI Specialist' }];
  const members = [
    { names: 'Ty Punleu', title: 'Data Engineer' },
    { names: 'Srey Sitharath', title: 'Data Engineer' },
    { names: 'Eng Mengeang', title: 'Data Engineer' },
    { names: 'Khean Sievlinh', title: 'Frontend Dev' },
    { names: 'Kim Jessica', title: 'Frontend Dev' },
    { names: 'Manh Seila', title: 'Backend Dev' },
    { names: 'Pov Yanghai', title: 'Backend Dev' },
    { names: 'Touch Lyheng', title: 'Backend Dev' },
  ];

  return (
    <>
      <div className="min-h-full">
        {/* Top Section */}
        <div className="bg-white m-4 rounded-xl pt-6 px-4 md:px-8">
          <h1 className="text-2xl sm:text-3xl md:text-5xl text-[#ff3f34] font-cadt flex justify-center text-center">
            About Page
          </h1>
          <h4 className="text-sm sm:text-base md:text-xl py-4 text-[#12284c] flex justify-center text-center max-w-3xl mx-auto">
            We aim to accelerate Khmer OCR dataset creation with a simple,
            practical web tool for annotation and validation.
          </h4>
          {/* Mission and Vision Section */}
          <div className="flex-grow">
            <MissionVision mission={mission} vision={vision} />
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-12">
          <div className="bg-[#ff3f34] text-white py-6 px-4 text-center rounded-md mx-4">
            <h2 className="text-2xl md:text-4xl font-bold mb-2">Meet Our Team</h2>
            <h4 className="text-sm md:text-xl">
              Advisors, mentors, and members collaborating on this project
            </h4>
          </div>

          {/* Advisors + Mentor Section */}
          <div className="m-4 rounded-xl gap-6 grid grid-cols-1 md:grid-cols-3">
            {/* Advisors */}
            <div className="bg-white py-6 px-6 md:px-12 col-span-1 md:col-span-2 rounded-xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl text-black text-center font-bold mb-6">
                Advisors
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                {advisors.map((item, index) => (
                  <Card key={index} name={item.names} title={item.title} />
                ))}
              </div>
            </div>

            {/* Mentor */}
            <div className="bg-white py-6 px-6 md:px-12 rounded-xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl text-center mb-6 font-bold text-black">
                Mentor
              </h2>
              {mentors.map((item, index) => (
                <Card key={index} name={item.names} title={item.title} />
              ))}
            </div>
          </div>

          {/* Members */}
          <div className="bg-white m-4 md:m-6 rounded-xl py-6 px-4 md:px-12 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl text-black mb-6 font-bold">
              Team Members
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {members.map((item, index) => (
                <Card key={index} name={item.names} title={item.title} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default About;
