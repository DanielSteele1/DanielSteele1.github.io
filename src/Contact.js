import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { borders } from '@mui/system';


function ContactForm() {
  const [formData, setFormData] = useState({

    name: '',
    email: '',
    message: '',

  });

  // Update state on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.text();
      console.log('Success:', responseData);
      //window.location.reload();

      // Handle success (e.g., showing a success message)
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., showing an error message)
    }

  }

  return (

    <Box className="contact-Box" elevation={2} sx={{ backgroundColor: 'rgba(32, 31, 31, 0.45)', borderRadius: '15px', border: 1, borderColor: 'rgb(46, 44, 44)' }}>
      <div id="contact" className="heading"> <h1> Get in Touch </h1>  </div>
      <form className="contactForm" onSubmit={handleSubmit}>

        <div className="contact-desc-container">
          <span className="contact-desc"> Have a question or enquiry? Send me your details below and i'll be happy to get back to you as soon as possible. </span>
        </div>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message" placeholder="Message" value={formData.message} onChange={handleChange} required />

        <div class="error-container">

          <div id="error-check">
            Hello
          </div>

          <button type="submit" class="contact-button"> Send Email </button>
        </div>

      </form>
    </Box >


  )
}

export default ContactForm;