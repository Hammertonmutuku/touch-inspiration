// src/UserList.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../Redux/Actions/userActions';

const UserList = () => {
  const dispatch = useDispatch();
  const { users, loading, error } = useSelector(state => {
    console.log(state.users); // Logs the state of users
    return state.users;
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if(!users ) return <p>No users</p>
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {users.map(user => (
        <li key={user._id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
