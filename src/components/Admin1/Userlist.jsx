// UserList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:3002/api/users/profile');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, []);

//   const handleEdit = (id) => {
//     console.log('Edit user:', id);
//   };

  const handleDelete = (id) => {
    console.log('Delete user:', id);
  };

  return (
    <div className='userlist' style={{marginTop:"50px"}}>
      {/* <h2>User List</h2> */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>            
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                {/* <button
                  className="btn btn-primary btn-sm mr-2"
                  onClick={() => handleEdit(user._id)}
                >
                  Edit
                </button> */}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(user._id)}
                >
                  Disable
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
