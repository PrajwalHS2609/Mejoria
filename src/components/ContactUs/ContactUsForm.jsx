"use client";
import React from "react";
import "./ContactUs.css";
import { FaUser, FaPhone, FaEnvelope, FaCity, FaBook } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation"; // <-- Import useRouter

const ContactUsForm = () => {
  const router = useRouter(); // <-- Initialize router

  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    formData.append("access_key", "d27b415e-86ae-47a8-bc5f-24e2b5d5eee2");
    formData.append(
      "recipients",
      "mejoriakol@gmail.com,manjunathmv.genesis@gmail.com"
    );
    formData.append(
      "autoresponse",
      "Thank you for contacting us. We'll get back to you shortly!"
    );

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
        confirmButtonText: "OK",
      }).then(() => {
        router.push("/thank-you"); // <-- Redirect after confirmation
      });
      form.reset();
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

        <form onSubmit={onSubmit} className="contactForm">
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
              pattern="[0-9]{10}"
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
            <MdCalendarMonth className="icon" />
            <input type="number" name="age" placeholder="Your Age" required />
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
              <option value="Cake Canvas Certificate Course (3 weeks)">
                Cake Canvas Certificate Course (3 weeks)
              </option>
              <option value="Cafe Craft Certificate Course (4 weeks)">
                Cafe Craft Certificate Course (4 weeks)
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
