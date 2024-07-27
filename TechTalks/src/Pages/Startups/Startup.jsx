import React from 'react';
import './Startup.css';

const Startups = () => {
  return (
    <div className="startup-blog-page">
      <header className="startup-blog-header">
        <h1>TechTalks Blog</h1>
        <p>Your daily dose of tech insights</p>
      </header>

      <main className="startup-blog-content">
        <article className="startup-blog-post">
          <h2 className="startup-post-title">Understanding React Hooks</h2>
          <p className="startup-post-date">Published on July 26, 2024</p>
          <p className="startup-post-excerpt">
            React Hooks provide a powerful way to use state and other React features in functional components...
          </p>
          <button className="startup-read-more">Read More</button>
        </article>

        <article className="startup-blog-post">
          <h2 className="startup-post-title">A Guide to CSS Flexbox</h2>
          <p className="startup-post-date">Published on July 24, 2024</p>
          <p className="startup-post-excerpt">
            CSS Flexbox is a layout model that allows you to design a complex layout structure...
          </p>
          <button className="startup-read-more">Read More</button>
        </article>
      </main>

      <main className="startup-blog-content">
        <article className="startup-blog-post">
          <h2 className="startup-post-title">Understanding React Hooks</h2>
          <p className="startup-post-date">Published on July 26, 2024</p>
          <p className="startup-post-excerpt">
            React Hooks provide a powerful way to use state and other React features in functional components...
          </p>
          <button className="startup-read-more">Read More</button>
        </article>

        <article className="startup-blog-post">
          <h2 className="startup-post-title">A Guide to CSS Flexbox</h2>
          <p className="startup-post-date">Published on July 24, 2024</p>
          <p className="startup-post-excerpt">
            CSS Flexbox is a layout model that allows you to design a complex layout structure...
          </p>
          <button className="startup-read-more">Read More</button>
        </article>
      </main>
    </div>
  );
};

export default Startups;
