import React from 'react';
import { type PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ id, title, body, userId }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>
        <span className="text-sm text-gray-500">User ID: {userId}</span>
      </div>
      <p className="text-gray-600 mb-4">{body}</p>
      <div className="flex justify-end">
        <span className="text-sm text-blue-500 hover:text-blue-600 cursor-pointer">
          Read More
        </span>
      </div>
    </div>
  );
};

export default PostCard; 