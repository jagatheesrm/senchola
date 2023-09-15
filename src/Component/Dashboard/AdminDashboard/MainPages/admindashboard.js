import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ImBin2, ImPencil } from "react-icons/im";
import './admindashboard.css';

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [filterOption, setFilterOption] = useState('All');
  const authToken = localStorage.getItem('token');

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/admin-dashboard', {
        headers: {
          Authorization: `${authToken}`,
        },
      })
      .then((response) => {
        setUsers(response.data.users);
        setError(null);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
        setError(error);
      });
  }, [authToken]);

  const filteredUsers = users.filter((user) => {
    if (filterOption === 'All') {
      return true;
    } else {
      return user.wantToLearn === filterOption;
    }
  });

  if (error) {
    return (
      <div className='dashboard'>
        <h1>Admin Dashboard</h1>
        <p>An error occurred while fetching data. Please log in or try again later.</p>
      </div>
    );
  }
  const deleteUserByEmail = (email) => {
    axios
      .delete(`http://localhost:5000/api/admin-dashboard/${email}`, {
        headers: {
          Authorization: `${authToken}`,
        },
      })
      .then((response) => {
        // Handle success, e.g., remove the user from the state
        const deletedUser = response.data.deletedUser;
        setUsers((prevUsers) => prevUsers.filter((user) => user.email !== deletedUser.email));
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
        // Handle the error, e.g., show an error message to the user
      });
  };

  return (
    <div className="container-fluid">
      <select
        value={filterOption}
        onChange={(e) => setFilterOption(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Backend Development">Backend Development</option>
        <option value="Frontend Development">Frontend Development</option>
        <option value="Mobile App Development">Mobile App Development</option>
        <option value="Wordpress Development">Wordpress Development</option>
        <option value="SEO">SEO</option>
        <option value="Social Media Management">Social Media Management</option>
        <option value="Youtube / Content Creation">Youtube / Content Creation</option>
        <option value="Content Writing">Content Writing</option>
        <option value="Graphics Design">Graphics Design</option>
        <option value="Video Editing">Video Editing</option>
        <option value="UI/UX Design">UI/UX Design</option>
        <option value="Video Shooting">Video Shooting</option>
        <option value="Devops (Cloud)">Devops (Cloud)</option>
        <option value="Cyber Security">Cyber Security</option>
        <option value="Software Testing">Software Testing</option>
        <option value="IT Sales (International Sales)">IT Sales (International Sales)</option>
        <option value="Business Development">Business Development</option>
        <option value="Business Analysis">Business Analysis</option>
        <option value="Data Analytics">Data Analytics</option>
        <option value="HR / Admin">HR / Admin</option>
        <option value="Others">Others</option>
      </select>

      <table className="table table-striped">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user._id}>
              <td>{user.fullName}</td>
              <td>{user.email}</td>
              <td>{user.role || 'User'}</td>
              <td>{user.wantToLearn}</td>
              <td>
                <button className="btn btn-primary mr-2">
                  <i className="fa fa-pencil" aria-hidden="true"><ImPencil /></i>
                </button>
                <button className="btn btn-danger" onClick={() => deleteUserByEmail(user.email)}>
                  <i className="fa fa-trash" aria-hidden="true"><ImBin2 /></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
