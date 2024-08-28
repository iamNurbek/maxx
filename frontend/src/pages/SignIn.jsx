// src/pages/SignIn.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignIn.css';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/auth/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json(); 
        console.error('Backend error:', errorData);
        throw new Error('Failed to sign in');
      }

      const data = await response.json();
      console.log('Sign In Successful', data);

    
      localStorage.setItem('token', data.token);

      alert('Sign In Successful');
      navigate('/'); 
    } catch (error) {
      console.error('Error:', error);
      alert('Sign in failed. Please try again.');
    }
  };

  return (
    <div className="sign-in-page">
      <h1>Sign In</h1>
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;
