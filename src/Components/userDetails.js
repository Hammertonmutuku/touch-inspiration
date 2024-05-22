// src/UserDetail.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, editUser } from '../Redux/Actions/userActions';
import { useParams } from 'react-router-dom';

const UserDetail = ({ match }) => {
  const dispatch = useDispatch();

const { id } = useParams();
const user = useSelector(state => state.users.user);
 const isLoading = useSelector(state => state.users.loading);
const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser(id));
    } else {
      setFormData({ name: user.name, email: user.email });
    }
  }, [dispatch, user, id]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editUser(id, formData));
  };

  if (isLoading) return <p>Loading...</p>;
  if (!user) return <p>User Not found</p>;

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email:</label>
        <input type="text" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <button type="submit">Save</button>
    </form>
  );
};

export default UserDetail;
