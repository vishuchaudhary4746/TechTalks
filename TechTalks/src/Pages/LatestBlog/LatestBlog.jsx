import React from 'react';
import './LatestBlog.css';

const LatestBlogPage = () => {
  const blogs = [
    {
      title: "The Rise of AI in 2024",
      date: "July 20, 2024",
      excerpt: "Artificial Intelligence is transforming industries at an unprecedented pace...",
    },
    {
      title: "JavaScript: What's New?",
      date: "July 18, 2024",
      excerpt: "Explore the latest features and updates in JavaScript for 2024...",
    },
    {
      title: "Building Scalable Web Apps",
      date: "July 15, 2024",
      excerpt: "Learn the best practices for building scalable web applications...",
    },
  ];

  return (
    <div className="latest-blog-page">
      <header className="blog-header">
        <h1>Latest Blog Posts</h1>
        <p>Stay updated with the newest articles</p>
      </header>

      <main className="blog-list">
        {blogs.map((blog, index) => (
          <article key={index} className="blog-post">
            <h2 className="post-title">{blog.title}</h2>
            <p className="post-date">{blog.date}</p>
            <p className="post-excerpt">{blog.excerpt}</p>
            <button className="read-more">Read More</button>
          </article>
        ))}
      </main>
    </div>
  );
};

export default LatestBlogPage;
