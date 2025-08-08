"use client";
import React from "react";
import "./LpForm.css";
import Swal from "sweetalert2";

const LpForm = () => {
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
        text: "Submission failed. Please try again later.",
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
          <option value="CAKE CANVAS CERTIFICATE COURSE">
            CAKE CANVAS CERTIFICATE COURSE
          </option>
          <option value="CAFÉ KRAFT CERTIFICATE COURSE">
            CAFÉ KRAFT CERTIFICATE COURSE
          </option>
        </select>
        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default LpForm;
