import React, { useState } from 'react';
import { MoreVertical } from 'react-feather';

const UsersManagement = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Doe', avatar: 'https://example.com/avatar1.jpg' },
    { id: 2, name: 'Jane Smith', avatar: 'https://example.com/avatar2.jpg' },
    { id: 3, name: 'Bob Johnson', avatar: 'https://example.com/avatar3.jpg' },
  ]);

  return (
    <div className="users-management p-6">
      <h2 className="users-management__title text-2xl font-bold mb-4">User Information</h2>
      <ul className="users-list">
        {users.map((user) => (
          <li key={user.id} className="users-list__item flex items-center justify-between p-3 border-b">
            <div className="flex items-center">
              <div className="users-list__avatar w-10 h-10 rounded-full overflow-hidden mr-3">
                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
              </div>
              <span className="users-list__name">{user.name}</span>
            </div>
            <button className="users-list__more-options" aria-label="more options">
              <MoreVertical size={20} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersManagement;
