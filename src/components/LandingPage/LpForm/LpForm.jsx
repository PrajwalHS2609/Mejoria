import React from "react";
import "./LpForm.css";

const LpForm = () => {
  return (
    <div className="form-container">
      <form className="horizontal-form">
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="tel" placeholder="Phone" required />
        <select required>
          <option value="">Select Course</option>
          <option value="baking">CAKE CANVAS CERTIFICATE COURSE</option>
          <option value="cake">CAFÉ KRAFT CERTIFICATE COURSE</option>
        </select>
        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default LpForm;
