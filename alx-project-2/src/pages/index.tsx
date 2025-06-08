import React from 'react';
import Header from '../components/layout/Header';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Our Website
          </h1>
          <p className="text-xl text-gray-600">
            We're excited to have you here!
          </p>
        </div>
      </main>
    </div>
  );
};

export default Home;
