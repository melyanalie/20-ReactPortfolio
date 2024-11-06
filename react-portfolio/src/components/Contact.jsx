import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const regex = /\S+@\S+\.\S+/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email || !validateEmail(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert('Message sent!');
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
          {errors.name && <p>{errors.name}</p>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleInputChange}></textarea>
          {errors.message && <p>{errors.message}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
