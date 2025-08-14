import Footer from '../components/Footer';
import MissionVision from '../components/MissionVision';
import AdvisorCard from '../components/AdvisorCard';
import MemberCard from '../components/MemberCard';
const About = () => {
  // Define mission and vision here
  const mission = "Enable students and researchers to build high-quality Khmer OCR datasets efficiently through intuitive annotation, and easy validation.";
  const vision = "Become a trusted foundation for Khmer language digitization efforts by providing accessible tools and best practices for data annotation.";

  // Advisors data
  const advisors = [
    {
      image: 'https://scontent.fpnh11-1.fna.fbcdn.net/v/t39.30808-6/492204630_9432955086803710_5436869514268804733_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeHdI9zOrz73UUc8dMd7NZz7HG6PSOobcvQcbo9I6hty9CMoc-7kzYxcyC-25kplgZp16_Wfa8F_4Lt5WJbzc-vX&_nc_ohc=31XgPV1i6y0Q7kNvwEALfgN&_nc_oc=Adnk0Vfp9wUkSjzDRahIM_3cvgUQUAx7bJ4iPwM7BsF9OVmHkcTeOAi5ZEkQT-Egndo&_nc_zt=23&_nc_ht=scontent.fpnh11-1.fna&_nc_gid=1M7WnFc6Y4naQMa1eh3Nfw&oh=00_AfWCBLT1WlfWCDD3NYqjRUHmcXVfZ9sZuEwxGBzXA53qAQ&oe=689FE122', // Replace with actual image link
      name: 'Dr. Hongly VA',
      title: 'Boost annotation speed to 50x',
      description: 'Expert in AI and machine learning and coding.',
      additionalInfo: 'PhD in Computer Science.',
    },
    {
      image: 'https://scontent.fpnh11-2.fna.fbcdn.net/v/t1.6435-9/84673205_2539677656307771_5991631041805156352_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHPR4k3TAv4XQfNEDznm2MS-mZ9HD-Uthv6Zn0cP5S2G02emZJUAFycxe3hU8XEOfYIR0CpVVsVWVNu2l8ehy3L&_nc_ohc=yJQPDjqJ3tkQ7kNvwFdXOgF&_nc_oc=AdkByh5Z-UiJazhWhfxbnAvSs-VI9mjl7934Se8WfzldTCjiIz1ZeiiEsfint5wn8vk&_nc_zt=23&_nc_ht=scontent.fpnh11-2.fna&_nc_gid=6KvtHpnMTDSSTRYqVvw6BQ&oh=00_AfUuExFIpKrp5MjtVUsA-AgOy496O2KJyyaG4S33IMYGvg&oe=68C1811E', // Replace with actual image link
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
      image: 'https://i.pinimg.com/736x/f3/64/59/f3645902b98fdf0a2b52633cd8ed2de1.jpg',
      name: 'Punleu TY',
      title: 'Data Engineer',
      description: 'Guides the team with AI expertise and research insight.',
      // contact: 'punleu.ty@student.cadt.edu.kh',
    },
    {
      image: 'https://i.pinimg.com/736x/3c/62/87/3c62871624085189125ababe64f4fac6.jpg',
      name: 'Sitharath SREY',
      title: 'Data Engineer',
      description: 'Guides the team with AI expertise and research insight.',
    },
    {
      image: 'https://i.pinimg.com/1200x/db/c4/3e/dbc43ef30d7c84d4591435014ff1475a.jpg',
      name: 'Mengeang ENG',
      title: 'Data Engineer',
      description: 'Guides the team with AI expertise and research insight.',
    },
    {
      image: 'https://i.pinimg.com/736x/de/42/16/de4216857d7cb3615eac88b93d589a7b.jpg',
      name: 'Sievlinh KHEAN',
      title: 'Frontend Dev',
      description: 'Guides the team with AI expertise and research insight.',
    },
    {
      image: 'https://i.pinimg.com/736x/10/8a/f6/108af628e1c73702d41d7477b1ca37e6.jpg',
      name: 'Jessica KIM',
      title: 'Frontend Dev',
      description: 'Guides the team with AI expertise and research insight.',
    },
    {
      image: 'https://i.pinimg.com/736x/12/f7/b6/12f7b6569065791d75149d302dd9bb92.jpg',
      name: 'Seila MANH',
      title: 'Backend Dev',
      description: 'Guides the team with AI expertise and research insight.',
    },
    {
      image: 'https://i.pinimg.com/1200x/ba/a4/9c/baa49c78a275f1ef12aa5a6e17fe3cd1.jpg',
      name: 'Yanghai POV',
      title: 'Backend Dev',
      description: 'Guides the team with AI expertise and research insight.',
    },
    {
      image: 'https://i.pinimg.com/736x/36/9e/6a/369e6a921eb028adc697a81dbb3467f4.jpg',
      name: 'Lyheng Touch',
      title: 'Backend Dev',
      description: 'Guides the team with AI expertise and research insight.',
    },
  ];

  return (
    <>
    <div className="min-h-full bg-white p-6">
      <h1 className=" text-5xl text-black font-bold">About Page</h1>
      <h4 className="text-xl py-4  text-black">We aim to accelerate Khmer OCR dataset creation with a simple, practical web tool for annotation and validation.</h4>
      {/* Mission and Vision Section */}
      <div className="flex-grow">
        <MissionVision mission={mission} vision={vision} />
      </div>


      {/* Advisors Section */}
      <div className="mt-12">
        {/* Team Section */}
        <div className="bg-[#0099FF] text-white py-4 text-center rounded-md">
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
      <div className="flex justify-start gap-8 mt-4">
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 w-full">
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
