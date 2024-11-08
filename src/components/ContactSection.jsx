import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !message) {
      alert("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      const result = await emailjs.send(
        "service_6jf5832",
        "template_gr4z7xq",
        {
          to_email: "jmbagares52@gmail.com",
          from_email: email,
          message: message,
        },
        "YOUR_PUBLIC_KEY" // Replace with your actual public key
      );

      if (result.status === 200) {
        setEmail("");
        setMessage("");
        alert("Message sent!");
      } else {
        console.error("Error sending email:", result);
        alert("Error sending message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending message. Please try again later.");
    }
  };

  return (
    <div id="contact" className="container px-4 py-5 full-screen-height">
      <h6 className="text-center text-uppercase top">Let's Connect</h6>
      <h2 className="tittle display-2 text-center">CONTACT ME</h2>
      <br />
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-6 contact">
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Message Me
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={4}
                placeholder="Tanggap ka na hehe"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-lg">
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}