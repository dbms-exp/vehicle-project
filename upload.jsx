import React, { useState } from "react";

const VehicleUploadForm = () => {
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      image: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Vehicle:", formData);
    // Handle form submit (API POST etc.)
  };

  return (
    <div style={{ maxWidth: "600px", margin: "40px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", background: "#f9f9f9" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Upload Vehicle Details</h2>
      <form onSubmit={handleSubmit}>
        <table style={{ width: "100%", borderSpacing: "10px" }}>
          <tbody>
            <tr>
              <td><label htmlFor="make">Make:</label></td>
              <td>
                <input
                  type="text"
                  id="make"
                  name="make"
                  value={formData.make}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", padding: "6px" }}
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="model">Model:</label></td>
              <td>
                <input
                  type="text"
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", padding: "6px" }}
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="year">Year:</label></td>
              <td>
                <input
                  type="number"
                  id="year"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  style={{ width: "100%", padding: "6px" }}
                />
              </td>
            </tr>
            <tr>
              <td><label htmlFor="image">Upload Image:</label></td>
              <td>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  onChange={handleImageChange}
                  style={{ width: "100%" }}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2" style={{ textAlign: "center", paddingTop: "10px" }}>
                <button type="submit" style={{ padding: "8px 20px", backgroundColor: "#007bff", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
                  Submit Vehicle
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
};

export default VehicleUploadForm;
