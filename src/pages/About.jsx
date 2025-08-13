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
      image: 'https://i.pinimg.com/736x/1d/0d/b4/1d0db42bf81e6bb6e9d69d84f67d1ca0.jpg',
      name: 'So Kimlang',
      title: 'Senior AI Specialist',
      description: 'Guides the team with AI expertise and research insight.',
      additionalInfo: '3+ years in the field.',
    },
  ];

  const members = [
  {
    image: 'https://i.pinimg.com/736x/34/b8/d9/34b8d9c92124ec4091d57202c0ab2917.jpg',
    name: 'John Doe',
    role: 'Frontend Developer',
  },
  {
    image: 'https://i.pinimg.com/736x/34/b8/d9/34b8d9c92124ec4091d57202c0ab2917.jpg',
    name: 'Jane Smith',
    role: 'Backend Developer',
  },
    {
    image: 'https://i.pinimg.com/736x/34/b8/d9/34b8d9c92124ec4091d57202c0ab2917.jpg',
    name: 'John Doe',
    role: 'Frontend Developer',
  },
  {
    image: 'https://i.pinimg.com/736x/34/b8/d9/34b8d9c92124ec4091d57202c0ab2917.jpg',
    name: 'Jane Smith',
    role: 'Backend Developer',
  },
];

  // const members = [
  //   {
  //     image: 'https://i.pinimg.com/736x/34/b8/d9/34b8d9c92124ec4091d57202c0ab2917.jpg',
  //     name: 'TY Punleu',
  //     title: 'Data Engineer',
  //     description: 'Blahh Blahh Blahh',
  //     additionalInfo: 'Blahh Blahh Blahh',
  //   },
  //       {
  //     image: 'https://i.pinimg.com/736x/34/b8/d9/34b8d9c92124ec4091d57202c0ab2917.jpg',
  //     name: 'TY Punleu',
  //     title: 'Data Engineer',
  //     description: 'Blahh Blahh Blahh',
  //     additionalInfo: 'Blahh Blahh Blahh',
  //   },
  //       {
  //     image: 'https://i.pinimg.com/736x/34/b8/d9/34b8d9c92124ec4091d57202c0ab2917.jpg',
  //     name: 'TY Punleu',
  //     title: 'Data Engineer',
  //     description: 'Blahh Blahh Blahh',
  //     additionalInfo: 'Blahh Blahh Blahh',
  //   },
  //       {
  //     image: 'https://i.pinimg.com/736x/34/b8/d9/34b8d9c92124ec4091d57202c0ab2917.jpg',
  //     name: 'TY Punleu',
  //     title: 'Data Engineer',
  //     description: 'Blahh Blahh Blahh',
  //     additionalInfo: 'Blahh Blahh Blahh',
  //   },
  //       {
  //     image: 'https://i.pinimg.com/736x/34/b8/d9/34b8d9c92124ec4091d57202c0ab2917.jpg',
  //     name: 'TY Punleu',
  //     title: 'Data Engineer',
  //     description: 'Blahh Blahh Blahh',
  //     additionalInfo: 'Blahh Blahh Blahh',
  //   },
  //       {
  //     image: 'https://i.pinimg.com/736x/34/b8/d9/34b8d9c92124ec4091d57202c0ab2917.jpg',
  //     name: 'TY Punleu',
  //     title: 'Data Engineer',
  //     description: 'Blahh Blahh Blahh',
  //     additionalInfo: 'Blahh Blahh Blahh',
  //   },
  //       {
  //     image: 'https://i.pinimg.com/736x/34/b8/d9/34b8d9c92124ec4091d57202c0ab2917.jpg',
  //     name: 'TY Punleu',
  //     title: 'Data Engineer',
  //     description: 'Blahh Blahh Blahh',
  //     additionalInfo: 'Blahh Blahh Blahh',
  //   },
  //       {
  //     image: 'https://i.pinimg.com/736x/34/b8/d9/34b8d9c92124ec4091d57202c0ab2917.jpg',
  //     name: 'TY Punleu',
  //     title: 'Data Engineer',
  //     description: 'Blahh Blahh Blahh',
  //     additionalInfo: 'Blahh Blahh Blahh',
  //   },
  // ];


  return (
    <div className="min-h-full bg-gray-50 m-6">
      <h1 className="text-5xl font-bold">About Page</h1>
      <h4 className="text-xl py-4">We aim to accelerate Khmer OCR dataset creation with a simple, practical web tool for annotation and validation.</h4>

      {/* Mission and Vision Section */}
      <div className="flex-grow">
        <MissionVision mission={mission} vision={vision} />
      </div>

      {/* Team Section */}
      <h2 className="text-3xl font-bold mt-8">Our Team</h2>
      <h4 className="text-xl py-4">Advisors, mentors, and members collaborating on this project.</h4>

      {/* Different team roles */}
      <h2 className="text-3xl font-bold">Advisors</h2>
      {/* Advisors Section */}
      <div className="flex justify-start gap-8 mt-4">
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
      <h2 className="text-3xl font-bold">Members</h2>
      {/* Members Section */}
      <div className="flex flex-wrap justify-start gap-8 mt-4">
        {members.map((member, index) => (
          <MemberCard
            key={index}
            image={member.image}
            name={member.name}
            role={member.role}
          />
        ))}
      </div>

      {/* <div className="flex flex-wrap justify-start gap-8 mt-4">
        {members.map((member, index) => (
          <AdvisorCard
            key={index}
            image={member.image}
            name={member.name}
            title={member.title}
            description={member.description}
            additionalInfo={member.additionalInfo}
          />
        ))}
      </div> */}
      <Footer />
    </div>
  );
};

export default About;
