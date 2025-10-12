import React from "react";

function Contact() {
  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Thank you! Your message has been sent successfully.");
    event.target.reset();
  };

  return (
    <div className="container mt-5 mb-5">
      <h2 className="mb-4">Contact Us</h2>

      {/* Contact Information */}
      <div className="row mb-5">
        <div className="col-md-6">
          <h5>Get in Touch</h5>
            <p>
              For inquiries, feedback, or further information, please contact the University of Cabuyao using the form provided or through the contact details below.
            </p>

          <ul className="list-unstyled">
            <li><strong>University:</strong> University of Cabuyao (Pamantasan ng Cabuyao)</li>
            <li><strong>Address:</strong> Banay-Banay, Cabuyao, Laguna, Philippines</li>
            <li><strong>Phone:</strong> +63 912 345 6789</li>
            <li><strong>Email:</strong> universityofcabuyao@pnc.edu.ph</li>
            <li><strong>Business Hours:</strong> Monday – Friday, 8:00 AM – 5:00 PM</li>
            <li><strong>Website:</strong> <a href="https://pnc.edu.ph" target="_blank" rel="noopener noreferrer">pnc.edu.ph</a></li>
            <li><strong>YouTube:</strong> <a href="https://www.youtube.com/@UniversityofCabuyao" target="_blank" rel="noopener noreferrer">youtube.com/@UniversityofCabuyao</a></li>
          </ul>
        </div>

        {/* Google Map pinned exactly inside Pamantasan ng Cabuyao */}
        <div className="col-md-6">
         <iframe
        src="https://maps.google.com/maps?q=Pamantasan%20ng%20Cabuyao&t=&z=15&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="300"
        style={{border:0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Pamantasan ng Cabuyao Location Map"
      ></iframe>
        </div>
      </div>

      {/* Contact Form */}
      <div className="card shadow-lg p-4">
        <h4 className="mb-3">Send Us a Message</h4>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Full Name:</label>
              <input type="text" className="form-control" placeholder="Enter your full name" required />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Email Address:</label>
              <input type="email" className="form-control" placeholder="Enter your email" required />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Phone Number:</label>
              <input type="tel" className="form-control" placeholder="e.g. +63 912 345 6789" />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Student Number:</label>
              <input type="text" className="form-control" placeholder="Enter your student number (optional)" />
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">Message:</label>
            <textarea className="form-control" rows="5" placeholder="Write your message here..." required></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary px-4">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;