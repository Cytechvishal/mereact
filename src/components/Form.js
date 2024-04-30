import React, { useState } from 'react';
import firebase from '../firebase/firebase';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send data to Firebase database
    const db = firebase.firestore();
    db.collection('formData').add(formData)
      .then(() => {
        console.log('Data added successfully!');
        // Clear form fields after submission
        setFormData({
          name: '',
          email: '',
          number: ''
        });
      })
      .catch((error) => {
        console.error('Error adding data: ', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className='contform'>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
      </label><br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label><br />
      <label>
        Number:
        <input
          type="tel"
          name="number"
          value={formData.number}
          onChange={handleChange}
        />
      </label><br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
