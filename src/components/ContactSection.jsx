import React, { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(null); // For Bootstrap alerts

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validation
    if (!email || !message) {
      setAlert({ type: "warning", text: "Please fill in all fields." });
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setAlert({ type: "warning", text: "Please enter a valid email address." });
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
        "N7yHZyDb8MQ05Nb5l" // Replace with your actual public key
      );

      if (result.status === 200) {
        setEmail("");
        setMessage("");
        setAlert({ type: "success", text: "Message sent!" });
      } else {
        console.error("Error sending email:", result);
        setAlert({ type: "danger", text: "Error sending message. Please try again later." });
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setAlert({ type: "danger", text: "Error sending message. Please try again later." });
    }
  };

  return (
    <div id="contact" className="container px-4 py-5">
      <h6 className="text-center text-uppercase top">Let's Connect</h6>
      <h2 className="tittle display-2 text-center">CONTACT ME</h2>
      <br />

      {/* Bootstrap Alert */}
      {alert && (
        <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">
          {alert.text}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setAlert(null)}
          ></button>
        </div>
      )}

      <div className="row justify-content-center">
        <div
          className="col-md-6 col-lg-6 contact card shadow p-4"
          style={{
            backgroundColor: "#fff",
            borderRadius: "20px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
            marginTop: "-10px",
            zIndex: 1,

          }}
        >
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="mb-3 fw-bold email">
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Email Address
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
            <div className="mb-3 fw-bold message">
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
            <button type="submit" className="btn btn-outline-success fw-bold btnss">
              SEND
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
