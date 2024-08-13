import React from 'react';

const team = [
  { name: 'John Doe', role: 'CEO', image: '/src/assets/jhone.jpeg', social: '#' },
  // Add more team members...
];

const About = () => {
  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12">About Us</h2>
      <p className="text-center max-w-3xl mx-auto mb-12">
        We are a passionate team dedicated to building outstanding websites that help your business grow.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <div key={index} className="bg-white p-6 text-center rounded-lg shadow-lg transition duration-500 hover:shadow-2xl">
            <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <a href={member.social} className="text-blue-500">Connect</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
