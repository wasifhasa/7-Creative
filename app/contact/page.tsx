'use client'
import React from 'react';
import Swal from 'sweetalert2'
import Navbar from '../Components/Navbar';

function Contact() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    formData.append("access_key", "0650d64b-3156-4a3d-8d44-774e6408e563");

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      });

      const result = await response.json();
      if (result.success) { 
    //     console.log(result);
    //     alert("Message sent successfully!");
    //   } else {
    //     alert("Failed to send message.");
    Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
      }
    }
     catch (error) {
      console.error("Error:", error);
      alert("An error occurred.");
    }
  }

  return (
    <div>
        <Navbar/>
      <section className='contact'>
        <form onSubmit={handleSubmit}>
          <h2>Contact Form</h2>
          <div className='input-box'>
            <label>Full Name</label>
            <input type="text" name="name" className='field' placeholder='Enter Your Name'  required />
          </div>
          <div className='input-box'>
            <label>Email Address</label>
            <input type="email" name="email" className='field' placeholder='Enter Your Email' required />
          </div>
          <div className='input-box'>
            <label>Your Message</label>
            <textarea name="message" className='field mess' placeholder='Enter your message' required></textarea>
          </div>
          <button type='submit'>Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default Contact;