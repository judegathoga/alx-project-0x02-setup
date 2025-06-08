import React from 'react';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to Our Home Page</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card 
            title="Our Services"
            content="We offer a wide range of services to meet your needs. From consulting to implementation, we've got you covered."
          />
          
          <Card 
            title="Why Choose Us"
            content="With years of experience and a dedicated team, we provide the best solutions for your business challenges."
          />
          
          <Card 
            title="Get Started"
            content="Ready to begin? Contact us today to discuss how we can help you achieve your goals."
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
