"use client";

import React from "react";
import "./PopUpForm.css";
import { FaXmark } from "react-icons/fa6";
import { FaUser, FaPhone, FaEnvelope, FaCity, FaBook } from "react-icons/fa";
import { MdCalendarMonth } from "react-icons/md";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const PopUpForm = () => {
  const router = useRouter();

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
        router.push("/thank-you");
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

  const handleExit = (e) => {
    e.preventDefault();
    document.querySelector(".popup-form-wrapper").style.visibility = "hidden";
  };

  return (
    <div className="popup-form-wrapper">
      <div className="popup-exit-item">
        <FaXmark className="popup-itemIco" onClick={handleExit} />
      </div>

      <div className="popup-form">
        <h2>Seats Filling Daily – Act Now!</h2>
        <p>
          Grab your chance to join our top-rated program. Enroll today and stay
          ahead of the curve!
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
            <MdCalendarMonth className="icon" />
            <input type="number" name="age" placeholder="Your Age" required />
          </div>
          <div className="form-group">
            <FaBook className="icon" />
            <select name="course" required>
              <option value="">Select Course*</option>
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

export default PopUpForm;
