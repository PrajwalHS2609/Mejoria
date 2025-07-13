import React from "react";
import "./FormHeader.css";

const FormHeader = () => {
  return (
    <div className="form-container">
      <form className="horizontal-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Phone" required />
        <select required>
          <option value="">Select Course</option>
          <option value="baking">EggFree  Certification Course</option>
          <option value="cake">Classic Certification Course</option>
          <option value="bread">Cake Mastery</option>
          <option value="chocolate">Home Baker's Certification Course</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormHeader;
