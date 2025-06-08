import React from 'react';
import Header from '@/components/layout/Header';
import UserCard from '@/components/common/UserCard';
import { type UserProps } from '@/interfaces';
import { GetStaticProps } from 'next';

interface UsersPageProps {
  users: UserProps[];
}

const Users: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Our Users</h1>
          <span className="text-gray-600">Total Users: {users.length}</span>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard 
              key={user.id}
              {...user}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<UsersPageProps> = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const users = await response.json();

    return {
      props: {
        users,
      },
      // Revalidate every hour
      revalidate: 3600,
    };
  } catch (error) {
    console.error('Error fetching users:', error);
    return {
      props: {
        users: [],
      },
      revalidate: 3600,
    };
  }
};

// ["getStaticProps"]

export default Users; 