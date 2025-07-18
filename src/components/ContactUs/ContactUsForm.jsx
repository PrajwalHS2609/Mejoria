import React from "react";
import "./ContactUs.css";
import { FaUser, FaPhone, FaEnvelope, FaCity, FaBook } from "react-icons/fa";

const ContactUsForm = () => {
  return (
    <div className="callback-form-wrapper">
      <div className="callback-form">
        <h2> Request a Call Back</h2>
        <p>
          Have questions about our courses or baking career guidance? Leave your
          details and our team will reach out to you shortly!
        </p>

        <form>
          <div className="form-group">
            <FaUser className="icon" />
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <FaPhone className="icon" />
            <input type="tel" placeholder="Phone Number" required />
          </div>
          <div className="form-group">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Email" required />
          </div>
          <div className="form-group">
            <FaCity className="icon" />
            <input type="text" placeholder="City" />
          </div>
          <div className="form-group">
            <FaBook className="icon" />
            <select required>
              <option value="">Select Course*</option>
              <option value="weekend">Classic Diploma (6 months)</option>
              <option value="professional">Eggfree Diploma (6 months)</option>
              <option value="online">
                Classic Certificate Course (2 months)
              </option>
              <option value="online">
                Eggfree Certificate Course (2 months)
              </option>
              <option value="online">Cake Mastery (1 month)</option>
              <option value="online">Hands-On Short Courses</option>
              <option value="online">Weekend Certificate Courses</option>
              <option value="online">Personalized Courses(lonl)</option>
            </select>
          </div>
          <button type="submit">Request Call Back</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;
