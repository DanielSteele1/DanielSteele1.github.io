import React, { useState } from 'react';


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
    
      <form className="contactForm" onSubmit={handleSubmit}>
        <div id="contact"> </div>
    
        <div class="heading"> <h1> Get In Touch </h1>  </div>
        <h2> Have a question or enquiry? Send me your details below <br></br> and i'll be happy to get back to you as soon as possible. </h2>
    
        <h2> If preferred, you can message me via my LinkedIn page as i check it regularly. </h2>
        <h2>  Or, send me an email at <a href="mailto:Dsteele1906@gmail.com"> Dsteele1906@gmail.com </a> </h2>
    
        <input type="text" name="name"  placeholder="Name" value={formData.name} onChange={handleChange} required/>
        <input type="email" name="email"  placeholder="Email" value={formData.email} onChange={handleChange} required />
        <textarea name="message"  placeholder="Message"  value={formData.message} onChange={handleChange} required />
    
        <div class="error-container">
    
          <div id="error-check">
            Hello
          </div>
    
          <button type="submit" class="submit"> SEND </button>
        </div>
    
      </form>
    
    )
    }


export default ContactForm;