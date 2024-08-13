import React from 'react';

const services = [
  { icon: '💻', title: 'Web Development', description: 'High-quality web development services.', link: '#' },
  { icon: '🎨', title: 'UI/UX Design', description: 'Creating visually appealing designs.', link: '#' },
  // Add more services...
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 text-center rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <a href={service.link} className="text-blue-500">Learn More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
