import React from 'react';
import { type UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({
  name,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600">{email}</p>
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="text-sm font-medium text-gray-500">Address</h3>
          <p className="text-gray-600">
            {address.street}, {address.suite}<br />
            {address.city}, {address.zipcode}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500">Contact</h3>
          <p className="text-gray-600">
            Phone: {phone}<br />
            Website: <a href={`https://${website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-600">{website}</a>
          </p>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-500">Company</h3>
          <p className="text-gray-600">
            {company.name}<br />
            <span className="text-sm italic">{company.catchPhrase}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserCard; 