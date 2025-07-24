"use client";
import React from "react";
import "./ContactUs.css";
import { FaUser, FaPhone, FaEnvelope, FaCity, FaBook } from "react-icons/fa";
import Swal from "sweetalert2"; // Make sure you have this installed

const ContactUsForm = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    // REQUIRED: access_key for Web3Forms
    formData.append("access_key", "d27b415e-86ae-47a8-bc5f-24e2b5d5eee2");

    const object = Object.fromEntries(formData.entries());
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Mail Sent successfully",
        icon: "success",
      });
      form.reset(); // Clear form on success
    } else {
      Swal.fire({
        title: "Error!",
        text: "Failed to send message. Please try again later.",
        icon: "error",
      });
    }
  };

  return (
    <div className="callback-form-wrapper">
      <div className="callback-form">
        <h2>Request a Call Back</h2>
        <p>
          Have questions about our courses or baking career guidance? Leave your
          details and our team will reach out to you shortly!
        </p>

        <form onSubmit={onSubmit}>
          <div className="form-group">
            <FaUser className="icon" />
            <input type="text" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <FaPhone className="icon" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
            />
          </div>
          <div className="form-group">
            <FaEnvelope className="icon" />
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <FaCity className="icon" />
            <input type="text" name="city" placeholder="City" />
          </div>
          <div className="form-group">
            <FaBook className="icon" />
            <select name="course" required>
              <option value="">Select Course*</option>
              <option value="Classic Diploma (6 months)">
                Classic Diploma (6 months)
              </option>
              <option value="Eggfree Diploma (6 months)">
                Eggfree Diploma (6 months)
              </option>
              <option value="Classic Certificate Course (2 months)">
                Classic Certificate Course (2 months)
              </option>
              <option value="Eggfree Certificate Course (2 months)">
                Eggfree Certificate Course (2 months)
              </option>
              <option value="Cake Mastery (1 month)">
                Cake Mastery (1 month)
              </option>
              <option value="Hands-On Short Courses">
                Hands-On Short Courses
              </option>
              <option value="Weekend Certificate Courses">
                Weekend Certificate Courses
              </option>
              <option value="Personalized Courses (1-on-1)">
                Personalized Courses (1-on-1)
              </option>
            </select>
          </div>
          <button type="submit">Request Call Back</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
