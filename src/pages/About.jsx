import Footer from '../components/Footer';
import MissionVision from '../components/MissionVision';
import AdvisorCard from '../components/AdvisorCard';
import MemberCard from '../components/MemberCard';
import Punleu from '../assets/profiles/PunleuTY.jpg';
import Sievlinh from '../assets/profiles/SievlinhKHEAN.png';
import Jessica from '../assets/profiles/JessicaKIM.jpg';
import Mengeang from '../assets/profiles/MengeangENG.jpg';
import Lyheng from '../assets/profiles/LyhengTouch.png';
import Yanghai from '../assets/profiles/YanghaiPOV.jpg';
import Sitharath from '../assets/profiles/SitharathSREY.jpg';
import Seila from '../assets/profiles/SeilaMANH.jpg';
import Soklong from '../assets/profiles/SoklongHIM.jpg';
import Hongly from '../assets/profiles/HonglyVA.jpg';
const About = () => {
  // Define mission and vision here
  const mission = "Enable students and researchers to build high-quality Khmer OCR datasets efficiently through intuitive annotation, and easy validation.";
  const vision = "Become a trusted foundation for Khmer language digitization efforts by providing accessible tools and best practices for data annotation.";

  // Advisors data
  const advisors = [
    {
      image: Hongly, // Replace with actual image link
      name: 'Dr. Hongly VA',
      title: 'Boost annotation speed to 50x',
      description: 'Expert in AI and machine learning and coding.',
      additionalInfo: 'PhD in Computer Science.',
    },
    {
      image: Soklong, // Replace with actual image link
      name: 'Mr. Soklong HIM',
      title: 'Lecturer and Researcher',
      description: 'Lecturer and researcher in deep learning.',
      additionalInfo: '',
    },
  ];

  const mentor = [
    {
      image: 'https://scontent.fpnh11-1.fna.fbcdn.net/v/t39.30808-6/512683832_4080991892220013_7363994635588506334_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEvO6OFygU25ecZ20ap2sxQeZGBUPAQ_pB5kYFQ8BD-kAWKt5wUXVjxhNqL3zdMC1hq-Oew4uaaUHm5V5r4o3Xt&_nc_ohc=66qpKwGEGhoQ7kNvwFxrr5X&_nc_oc=Admy94_AObYZ-2_Pr0Q025fHhHFTfIuesLmtu2pMvVEgDoZTnSB1Z2cXleTVcK6ZuLE&_nc_zt=23&_nc_ht=scontent.fpnh11-1.fna&_nc_gid=LxGv_nxRTaCJIphtS2wJFA&oh=00_AfU0q6s-ngrFAcJ-92qmt_R55JfBFOCsgc9mhfDxlx_twQ&oe=68A32E70',
      name: 'Ms. Kimlang SO',
      title: 'Senior AI Specialist',
      description: 'Guides the team with AI expertise and research insight.',
      additionalInfo: '3+ years in the field.',
    },
  ];
  const members = [
    {
      image: Punleu,
      name: 'Punleu TY',
      title: 'Data Engineer',
      description: 'Guides the team with AI expertise and research insight.',
      // contact: 'punleu.ty@student.cadt.edu.kh',
    },
    {
      image: Sitharath,
      name: 'Sitharath SREY',
      title: 'Data Engineer',
      description: 'Guides the team with AI expertise and research insight.',
    },
    {
      image: Mengeang,
      name: 'Mengeang ENG',
      title: 'Data Engineer',
      description: 'Guides the team with AI expertise and research insight.',
    },
    {
      image: Sievlinh,
      name: 'Sievlinh KHEAN',
      title: 'Frontend Dev',
      description: 'Guides the team with AI expertise and research insight.',
    },
    {
      image: Jessica,
      name: 'Jessica KIM',
      title: 'Frontend Dev',
      description: 'Guides the team with AI expertise and research insight.',
    },
    {
      image: Seila,
      name: 'Seila MANH',
      title: 'Backend Dev',
      description: 'Guides the team with AI expertise and research insight.',
    },
    {
      image: Yanghai,
      name: 'Yanghai POV',
      title: 'Backend Dev',
      description: 'Guides the team with AI expertise and research insight.',
    },
    {
      image: Lyheng,
      name: 'Lyheng Touch',
      title: 'Backend Dev',
      description: 'Guides the team with AI expertise and research insight.',
    },
  ];

  return (
    <>
    <div className="min-h-full bg-white p-6">
      <h1 className=" text-5xl text-[#ff3f34] font-cadt">About Page</h1>
      <h4 className="text-xl py-4  text-[#12284c] ">We aim to accelerate Khmer OCR dataset creation with a simple, practical web tool for annotation and validation.</h4>
      {/* Mission and Vision Section */}
      <div className="flex-grow">
        <MissionVision mission={mission} vision={vision} />
      </div>


      {/* Advisors Section */}
      <div className="mt-12">
        {/* Team Section */}
        <div className="bg-[#ff3f34] text-white py-4 text-center rounded-md">
          <h2 className="text-4xl font-bold mb-2">Meet Our Team</h2>
          <h4 className="text-xl">Advisors, mentors, and members collaborating on this project</h4>
        </div>
        <h2 className="text-3xl font-bold mt-4">Advisors</h2>
        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 w-full">
          {advisors.map((advisor, index) => (
            <AdvisorCard
              key={index}
              image={advisor.image}
              name={advisor.name}
              title={advisor.title}
              description={advisor.description}
              additionalInfo={advisor.additionalInfo}
            />
          ))}
        </div>
      </div>
      <h2 className="text-3xl font-bold">Mentor</h2>
      {/* Mentor Section */}
      <div className="flex justify-start gap-8 mt-4 ">
        {mentor.map((mentor, index) => (
          <AdvisorCard
            key={index}
            image={mentor.image}
            name={mentor.name}
            title={mentor.title}
            description={mentor.description}
            additionalInfo={mentor.additionalInfo}
          />
        ))}
      </div>
      <h2 className="text-3xl font-bold">Team Members</h2>
      {/* Member Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 w-full ">
        {members.map((member, index) => (
          <MemberCard
            key={index}
            image={member.image}
            name={member.name}
            title={member.title}
            description={member.description}
            contact={member.contact}
          />
        ))}
      </div>
    </div>
    <Footer />
    </>
  );
};

export default About;
