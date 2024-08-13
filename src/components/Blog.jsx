import React from 'react';

const posts = [
  { title: 'Blog Post One', image: '/src/assets/jhone.jpeg', excerpt: 'This is a short excerpt from the blog post.', link: '#' },
  // Add more posts...
];

const Blog = () => {
  return (
    <section className="py-20 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-12">Latest Blog Posts</h2>
      <div className="max-w-xl mx-auto mb-8">
        <input
          type="text"
          placeholder="Search blog posts..."
          className="w-full p-3 rounded-lg shadow-md focus:outline-none"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <img src={post.image} alt={post.title} className="rounded-lg mb-4" />
            <h3 className="text-2xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <a href={post.link} className="text-blue-500">Read More</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
