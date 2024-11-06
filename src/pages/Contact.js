import { useState } from 'react';

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleBlur = (field) => {
    if (!form[field]) setErrors({ ...errors, [field]: 'This field is required' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(form.email)) setErrors({ ...errors, email: 'Invalid email address' });
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input name="name" onBlur={() => handleBlur('name')} placeholder="Name" />
        {errors.name && <span>{errors.name}</span>}

        <input name="email" onBlur={() => handleBlur('email')} placeholder="Email" />
        {errors.email && <span>{errors.email}</span>}

        <textarea name="message" onBlur={() => handleBlur('message')} placeholder="Message"></textarea>
        {errors.message && <span>{errors.message}</span>}

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
