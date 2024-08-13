import React from 'react';

const testimonials = [
  { name: 'Jane Smith', company: 'XYZ Corp', role: 'Manager', text: 'Great service and support!' },
  { name: 'Jane Smith', company: 'XYZ Corp', role: 'Manager', text: 'Great service and support!' },
  { name: 'Jane Smith', company: 'XYZ Corp', role: 'Manager', text: 'Great service and support!' },
  { name: 'Jane Smith', company: 'XYZ Corp', role: 'Manager', text: 'Great service and support!' },
  // Add more testimonials...
];

const Testimonials = () => {
  return (
    <section className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 text-center rounded-lg shadow-lg">
            <p className="text-gray-600 mb-4">{testimonial.text}</p>
            <h3 className="text-xl font-bold">{testimonial.name}</h3>
            <p className="text-gray-600">{testimonial.company} - {testimonial.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
