import React from 'react';
import Header from '../components/layout/Header';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900">Welcome to Our Home Page</h1>
        <p className="mt-4 text-lg text-gray-600">
          This is the main landing page of our website.
        </p>
      </main>
    </div>
  );
};

export default Home;
