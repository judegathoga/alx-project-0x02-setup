import React from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';
import { type CardProps } from '@/interfaces';

const Posts: React.FC = () => {
  // This would typically come from an API or database
  const posts: CardProps[] = [
    {
      title: "Getting Started with Next.js",
      content: "Learn how to build modern web applications with Next.js and React."
    },
    {
      title: "TypeScript Best Practices",
      content: "Discover the best practices for writing type-safe code with TypeScript."
    },
    {
      title: "Building Responsive UIs",
      content: "Master the art of creating beautiful and responsive user interfaces."
    }
  ];

  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog Posts</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <Card 
              key={index}
              title={post.title}
              content={post.content}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Posts; 