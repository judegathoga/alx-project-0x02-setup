import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header: React.FC = () => {
  const router = useRouter();

  const isActive = (path: string) => {
    return router.pathname === path;
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link href="/home" className="text-2xl font-bold text-gray-800 hover:text-gray-600">
            My Website
          </Link>
          <div className="space-x-6">
            <Link 
              href="/home" 
              className={`text-gray-600 hover:text-gray-900 ${isActive('/home') ? 'font-semibold text-blue-600' : ''}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`text-gray-600 hover:text-gray-900 ${isActive('/about') ? 'font-semibold text-blue-600' : ''}`}
            >
              About
            </Link>
            <Link 
              href="/posts" 
              className={`text-gray-600 hover:text-gray-900 ${isActive('/posts') ? 'font-semibold text-blue-600' : ''}`}
            >
              Posts
            </Link>
            <Link 
              href="/users" 
              className={`text-gray-600 hover:text-gray-900 ${isActive('/users') ? 'font-semibold text-blue-600' : ''}`}
            >
              Users
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header; 