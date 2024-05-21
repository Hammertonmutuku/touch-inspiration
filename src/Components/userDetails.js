// src/UserDetail.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, editUser } from '../Redux/Actions/userActions';

const UserDetail = ({ match }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.users.users.find(u => u.id === match.params.id));
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser(match.params.id));
    } else {
      setFormData({ name: user.name, email: user.email });
    }
  }, [dispatch, user, match.params.id]);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(editUser(match.params.id, formData));
  };

  if (!user) return <p>Loading...</p>;

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
