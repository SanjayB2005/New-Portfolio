import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log(formData)
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>

      <div className="contact_container bd_grid">
        <form onSubmit={handleSubmit} className="contact_form">
          <input 
            type="text"
            placeholder="Name"
            className="contact_input"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input 
            type="email"
            placeholder="Email"
            className="contact_input"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea 
            name="message"
            cols="0"
            rows="10"
            className="contact_input"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="contact_button button">Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact