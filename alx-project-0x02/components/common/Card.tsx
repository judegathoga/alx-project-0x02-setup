import React from 'react';
import { CardProps } from '../../interfaces';

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default Card; 