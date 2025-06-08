import React from 'react';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const About: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Us</h1>
        
        <div className="space-y-8">
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Button Variants</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Button size="small" shape="rounded-sm">
                  Small Square
                </Button>
                <Button size="medium" shape="rounded-md">
                  Medium Rounded
                </Button>
                <Button size="large" shape="rounded-full">
                  Large Pill
                </Button>
              </div>
              
              <div className="flex items-center space-x-4">
                <Button size="small" shape="rounded-full">
                  Small Pill
                </Button>
                <Button size="medium" shape="rounded-sm">
                  Medium Square
                </Button>
                <Button size="large" shape="rounded-md">
                  Large Rounded
                </Button>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-4">
              We are dedicated to providing the best solutions for our clients through
              innovative technology and exceptional service.
            </p>
            <Button size="medium" shape="rounded-md">
              Learn More
            </Button>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
