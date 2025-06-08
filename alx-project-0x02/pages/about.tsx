import React from 'react';
import Header from '../components/layout/Header';

const About: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Learn more about our company and mission.
        </p>
      </main>
    </div>
  );
};

export default About;
