"use client";
import React from "react";
import "./FormHeader.css";
import Swal from "sweetalert2";

const FormHeader = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

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
        text: "Your application was submitted successfully!",
        icon: "success",
      });
      form.reset();
    } else {
      Swal.fire({
        title: "Error!",
        text: "Failed to submit. Please try again later.",
        icon: "error",
      });
    }
  };

  return (
    <div className="form-container">
      <form className="horizontal-form" onSubmit={onSubmit}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input type="tel" name="phone" placeholder="Phone" required />
        <input type="number" name="age" placeholder="Your Age" required />
        <select name="course" required>
          <option value="">Select Course</option>
          <option value="EggFree Certification Course">
            EggFree Certification Course
          </option>
          <option value="Classic Certification Course">
            Classic Certification Course
          </option>
          <option value="Cake Mastery">Cake Mastery</option>
          <option value="Home Baker's Certification Course">
            Home Baker's Certification Course
          </option>
        </select>
        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default FormHeader;
